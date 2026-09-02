import { C as CMsgDOTAProfileCard } from '../dota_gcmessages_common-D8GmtIqO.cjs';
import { L as Logger } from '../types-DJJWbS4o.cjs';
import { G as GCLike } from '../shared-D_5F0rCl.cjs';
import '@bufbuild/protobuf/wire';

/** Medal tiers in `rankTier` order: the tens digit, 1 through 8. */
declare const RANK_TIERS: readonly ["Herald", "Guardian", "Crusader", "Archon", "Legend", "Ancient", "Divine", "Immortal"];
type RankTierName = (typeof RANK_TIERS)[number];
interface Rank {
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
declare function decodeRankTier(rankTier: number | null | undefined): {
    tier: RankTierName | null;
    stars: number;
};
interface ProfileOptions {
    timeoutMs?: number;
    logger?: Logger;
}
/** Default pause between cards in a batch. The GC's limits on this request are undocumented. */
declare const DEFAULT_RANK_GAP_MS = 1500;
/** Profile lookups over a live GC session. */
declare class Profile {
    private readonly gc;
    private readonly timeoutMs;
    private readonly logger?;
    constructor(gc: GCLike, options?: ProfileOptions);
    /**
     * The raw profile card.
     *
     * @returns `null` when the GC does not answer or has nothing to say about the account.
     */
    card(accountId: number): Promise<CMsgDOTAProfileCard | null>;
    /** The medal, decoded. `null` when the card could not be read at all. */
    rank(accountId: number): Promise<Rank | null>;
    /**
     * Medals for many accounts, one request at a time with a pause between them.
     *
     * Sequential on purpose: the GC's rate limit on profile cards is undocumented, and
     * the session is shared with everything else the bot does. Accounts that fail come
     * back as `null` rather than aborting the batch.
     */
    ranks(accountIds: number[], options?: {
        gapMs?: number;
    }): Promise<Array<Rank | null>>;
}

export { DEFAULT_RANK_GAP_MS, Profile, type ProfileOptions, RANK_TIERS, type Rank, type RankTierName, decodeRankTier };
