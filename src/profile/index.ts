/* Profile cards from the GC — the one place a player's medal is available without a
   third-party API key. */

import { EDOTAGCMsg } from "../protobufs/dota_gcmessages_msgid";
import type { CMsgDOTAProfileCard } from "../protobufs/index";
import type { Logger } from "../gc/types";
import { GC_TIMEOUT_MS, sleep, type GCLike } from "../shared";

/** Medal tiers in `rankTier` order: the tens digit, 1 through 8. */
export const RANK_TIERS = [
    "Herald",
    "Guardian",
    "Crusader",
    "Archon",
    "Legend",
    "Ancient",
    "Divine",
    "Immortal",
] as const;

export type RankTierName = (typeof RANK_TIERS)[number];

export interface Rank {
    accountId: number;
    /** `null` when the player is uncalibrated or the profile is private. */
    tier: RankTierName | null;
    /** Stars within the tier, 0–5. Immortal has none. */
    stars: number;
    /** The raw GC value: tens are the tier, units are the stars. */
    rankTier: number;
    /** Immortal ladder position, `0` when unranked or outside the board. */
    leaderboardRank: number;
}

/**
 * Decodes a `rankTier` into tier and stars.
 *
 * @example `55` → Legend 5, `80` → Immortal, `0` → uncalibrated.
 */
export function decodeRankTier(rankTier: number | null | undefined): { tier: RankTierName | null; stars: number } {
    if (!rankTier || rankTier < 10) return { tier: null, stars: 0 };
    const tier = RANK_TIERS[Math.floor(rankTier / 10) - 1] ?? null;
    if (!tier) return { tier: null, stars: 0 };
    const stars = tier === "Immortal" ? 0 : Math.min(5, Math.max(0, rankTier % 10));
    return { tier, stars };
}

export interface ProfileOptions {
    timeoutMs?: number;
    logger?: Logger;
}

/** Default pause between cards in a batch. The GC's limits on this request are undocumented. */
export const DEFAULT_RANK_GAP_MS = 1500;

/** Profile lookups over a live GC session. */
export class Profile {
    private readonly gc: GCLike;
    private readonly timeoutMs: number;
    private readonly logger?: Logger;

    constructor(gc: GCLike, options: ProfileOptions = {}) {
        this.gc = gc;
        this.timeoutMs = options.timeoutMs ?? GC_TIMEOUT_MS;
        this.logger = options.logger;
    }

    /**
     * The raw profile card.
     *
     * @returns `null` when the GC does not answer or has nothing to say about the account.
     */
    async card(accountId: number): Promise<CMsgDOTAProfileCard | null> {
        try {
            const reply = (await this.gc.sendJob(
                EDOTAGCMsg.k_EMsgClientToGCGetProfileCard,
                { accountId },
                { timeoutMs: this.timeoutMs },
            )) as CMsgDOTAProfileCard | null;
            if (!reply || typeof reply !== "object") return null;
            return reply;
        } catch (error) {
            this.logger?.warn?.("dotakit: profile card %s not received", accountId, error);
            return null;
        }
    }

    /** The medal, decoded. `null` when the card could not be read at all. */
    async rank(accountId: number): Promise<Rank | null> {
        const card = await this.card(accountId);
        if (!card) return null;
        const { tier, stars } = decodeRankTier(card.rankTier);
        return {
            accountId,
            tier,
            stars,
            rankTier: card.rankTier ?? 0,
            leaderboardRank: card.leaderboardRank ?? 0,
        };
    }

    /**
     * Medals for many accounts, one request at a time with a pause between them.
     *
     * Sequential on purpose: the GC's rate limit on profile cards is undocumented, and
     * the session is shared with everything else the bot does. Accounts that fail come
     * back as `null` rather than aborting the batch.
     */
    async ranks(accountIds: number[], options: { gapMs?: number } = {}): Promise<Array<Rank | null>> {
        const gapMs = options.gapMs ?? DEFAULT_RANK_GAP_MS;
        const out: Array<Rank | null> = [];
        for (const [index, accountId] of accountIds.entries()) {
            out.push(await this.rank(accountId));
            if (gapMs > 0 && index < accountIds.length - 1) await sleep(gapMs);
        }
        return out;
    }
}
