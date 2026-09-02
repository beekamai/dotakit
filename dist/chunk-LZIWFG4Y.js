import {
  GC_TIMEOUT_MS,
  sleep
} from "./chunk-3P7DVYVL.js";

// src/profile/index.ts
var RANK_TIERS = [
  "Herald",
  "Guardian",
  "Crusader",
  "Archon",
  "Legend",
  "Ancient",
  "Divine",
  "Immortal"
];
function decodeRankTier(rankTier) {
  if (!rankTier || rankTier < 10) return { tier: null, stars: 0 };
  const tier = RANK_TIERS[Math.floor(rankTier / 10) - 1] ?? null;
  if (!tier) return { tier: null, stars: 0 };
  const stars = tier === "Immortal" ? 0 : Math.min(5, Math.max(0, rankTier % 10));
  return { tier, stars };
}
var DEFAULT_RANK_GAP_MS = 1500;
var Profile = class {
  gc;
  timeoutMs;
  logger;
  constructor(gc, options = {}) {
    this.gc = gc;
    this.timeoutMs = options.timeoutMs ?? GC_TIMEOUT_MS;
    this.logger = options.logger;
  }
  /**
   * The raw profile card.
   *
   * @returns `null` when the GC does not answer or has nothing to say about the account.
   */
  async card(accountId) {
    try {
      const reply = await this.gc.sendJob(
        7534 /* k_EMsgClientToGCGetProfileCard */,
        { accountId },
        { timeoutMs: this.timeoutMs }
      );
      if (!reply || typeof reply !== "object") return null;
      return reply;
    } catch (error) {
      this.logger?.warn?.("dotakit: profile card %s not received", accountId, error);
      return null;
    }
  }
  /** The medal, decoded. `null` when the card could not be read at all. */
  async rank(accountId) {
    const card = await this.card(accountId);
    if (!card) return null;
    const { tier, stars } = decodeRankTier(card.rankTier);
    return {
      accountId,
      tier,
      stars,
      rankTier: card.rankTier ?? 0,
      leaderboardRank: card.leaderboardRank ?? 0
    };
  }
  /**
   * Medals for many accounts, one request at a time with a pause between them.
   *
   * Sequential on purpose: the GC's rate limit on profile cards is undocumented, and
   * the session is shared with everything else the bot does. Accounts that fail come
   * back as `null` rather than aborting the batch.
   */
  async ranks(accountIds, options = {}) {
    const gapMs = options.gapMs ?? DEFAULT_RANK_GAP_MS;
    const out = [];
    for (const [index, accountId] of accountIds.entries()) {
      out.push(await this.rank(accountId));
      if (gapMs > 0 && index < accountIds.length - 1) await sleep(gapMs);
    }
    return out;
  }
};

export {
  RANK_TIERS,
  decodeRankTier,
  DEFAULT_RANK_GAP_MS,
  Profile
};
//# sourceMappingURL=chunk-LZIWFG4Y.js.map