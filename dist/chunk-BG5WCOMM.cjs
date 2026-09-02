"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }


var _chunkR7TOZZ5Xcjs = require('./chunk-R7TOZZ5X.cjs');

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
  const tier = _nullishCoalesce(RANK_TIERS[Math.floor(rankTier / 10) - 1], () => ( null));
  if (!tier) return { tier: null, stars: 0 };
  const stars = tier === "Immortal" ? 0 : Math.min(5, Math.max(0, rankTier % 10));
  return { tier, stars };
}
var DEFAULT_RANK_GAP_MS = 1500;
var Profile = class {
  
  
  
  constructor(gc, options = {}) {
    this.gc = gc;
    this.timeoutMs = _nullishCoalesce(options.timeoutMs, () => ( _chunkR7TOZZ5Xcjs.GC_TIMEOUT_MS));
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
      _optionalChain([this, 'access', _ => _.logger, 'optionalAccess', _2 => _2.warn, 'optionalCall', _3 => _3("dotakit: profile card %s not received", accountId, error)]);
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
      rankTier: _nullishCoalesce(card.rankTier, () => ( 0)),
      leaderboardRank: _nullishCoalesce(card.leaderboardRank, () => ( 0))
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
    const gapMs = _nullishCoalesce(options.gapMs, () => ( DEFAULT_RANK_GAP_MS));
    const out = [];
    for (const [index, accountId] of accountIds.entries()) {
      out.push(await this.rank(accountId));
      if (gapMs > 0 && index < accountIds.length - 1) await _chunkR7TOZZ5Xcjs.sleep.call(void 0, gapMs);
    }
    return out;
  }
};






exports.RANK_TIERS = RANK_TIERS; exports.decodeRankTier = decodeRankTier; exports.DEFAULT_RANK_GAP_MS = DEFAULT_RANK_GAP_MS; exports.Profile = Profile;
//# sourceMappingURL=chunk-BG5WCOMM.cjs.map