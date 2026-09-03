"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }















var _chunkIZ4S4CLQcjs = require('./chunk-IZ4S4CLQ.cjs');











var _chunkQIORRDERcjs = require('./chunk-QIORRDER.cjs');








var _chunkDI6HTADBcjs = require('./chunk-DI6HTADB.cjs');





var _chunkBG5WCOMMcjs = require('./chunk-BG5WCOMM.cjs');





var _chunkIBVKYMY3cjs = require('./chunk-IBVKYMY3.cjs');


var _chunkR7TOZZ5Xcjs = require('./chunk-R7TOZZ5X.cjs');





var _chunkKNCAQGVIcjs = require('./chunk-KNCAQGVI.cjs');


var _chunk3V5KHPWIcjs = require('./chunk-3V5KHPWI.cjs');




var _chunkZIVCJ3VAcjs = require('./chunk-ZIVCJ3VA.cjs');
require('./chunk-LKAAZKBP.cjs');

// src/index.ts
var _events = require('events');
var DotaBot = class extends _events.EventEmitter {
  
  
  
  
  
  constructor(steam, gc, options = {}) {
    super();
    this.steam = steam;
    this.gc = gc;
    this.guild = new (0, _chunkDI6HTADBcjs.Guild)(gc, {
      ...options.guild,
      accountId: _nullishCoalesce(steam.accountId, () => ( void 0)),
      logger: options.logger
    });
    this.profile = new (0, _chunkBG5WCOMMcjs.Profile)(gc, { logger: options.logger, ...options.profile });
    this.live = new (0, _chunkIBVKYMY3cjs.Live)(gc, { logger: options.logger, ...options.live });
    this.setMaxListeners(0);
    this.gc.on("connected", (welcome) => {
      this.emit("gc:up", welcome);
      this.emit("ready", this);
    });
    this.gc.on("disconnected", (status) => this.emit("gc:down", status));
    this.steam.on("guard", (prompt) => this.emit("guard", prompt));
    this.steam.on("token", (token) => this.emit("token", token));
    this.steam.on("error", (error) => this.emitError(error));
  }
  /** `true` while a GC session exists. */
  get connected() {
    return this.gc.haveGCSession;
  }
  /** Tears down the GC session and logs out of Steam. */
  logout() {
    this.gc.destroy();
    this.steam.logoff();
    this.removeAllListeners();
  }
  on(event, listener) {
    return super.on(event, listener);
  }
  emitError(error) {
    if (this.listenerCount("error") > 0) this.emit("error", error);
  }
};
async function login2(options) {
  const steam = await _chunkQIORRDERcjs.login.call(void 0, options);
  const gc = new (0, _chunkIZ4S4CLQcjs.Dota2GC)(steam.user, { autoGamesPlayed: true, logger: options.logger, ...options.gc });
  const bot = new DotaBot(steam, gc, options);
  if (_nullishCoalesce(options.waitForGC, () => ( true))) {
    await gc.connect({ timeoutMs: _nullishCoalesce(options.gcTimeoutMs, () => ( 6e4)) });
  } else {
    void gc.connect().catch(() => void 0);
  }
  return bot;
}
var Dota = { login: login2, APPID: _chunkIZ4S4CLQcjs.DOTA2_APPID };





















































exports.BunTransportError = _chunkZIVCJ3VAcjs.BunTransportError; exports.DEFAULT_RANK_GAP_MS = _chunkBG5WCOMMcjs.DEFAULT_RANK_GAP_MS; exports.DOTA2_APPID = _chunkIZ4S4CLQcjs.DOTA2_APPID; exports.Dota = Dota; exports.Dota2GC = _chunkIZ4S4CLQcjs.Dota2GC; exports.Dota2GCError = _chunkIZ4S4CLQcjs.Dota2GCError; exports.DotaBot = DotaBot; exports.EDOTAGCMsg = _chunk3V5KHPWIcjs.EDOTAGCMsg; exports.EGCBaseClientMsg = _chunkKNCAQGVIcjs.EGCBaseClientMsg; exports.EGCBaseMsg = _chunkKNCAQGVIcjs.EGCBaseMsg; exports.ERESULT_RATE_LIMIT = _chunkQIORRDERcjs.ERESULT_RATE_LIMIT; exports.ESOMsg = _chunkKNCAQGVIcjs.ESOMsg; exports.GCConnectionStatus = _chunkKNCAQGVIcjs.GCConnectionStatus; exports.GCOperationError = _chunkDI6HTADBcjs.GCOperationError; exports.GCRouter = _chunkIZ4S4CLQcjs.GCRouter; exports.GC_RESULT_STALE = _chunkDI6HTADBcjs.GC_RESULT_STALE; exports.GC_RESULT_TIMEOUT = _chunkDI6HTADBcjs.GC_RESULT_TIMEOUT; exports.GC_TIMEOUT_MS = _chunkR7TOZZ5Xcjs.GC_TIMEOUT_MS; exports.GUILD_ROLE_FLAG = _chunkDI6HTADBcjs.GUILD_ROLE_FLAG; exports.GUILD_ROLE_FLAG_MASK = _chunkDI6HTADBcjs.GUILD_ROLE_FLAG_MASK; exports.GuardRequiredError = _chunkQIORRDERcjs.GuardRequiredError; exports.Guild = _chunkDI6HTADBcjs.Guild; exports.JobAbortedError = _chunkIZ4S4CLQcjs.JobAbortedError; exports.JobTimeoutError = _chunkIZ4S4CLQcjs.JobTimeoutError; exports.Live = _chunkIBVKYMY3cjs.Live; exports.MAX_BACKOFF_MS = _chunkIBVKYMY3cjs.MAX_BACKOFF_MS; exports.MAX_MISSES = _chunkIBVKYMY3cjs.MAX_MISSES; exports.NoDecoderError = _chunkIZ4S4CLQcjs.NoDecoderError; exports.NoEncoderError = _chunkIZ4S4CLQcjs.NoEncoderError; exports.NoGuildError = _chunkDI6HTADBcjs.NoGuildError; exports.NotConnectedError = _chunkIZ4S4CLQcjs.NotConnectedError; exports.POLL_INTERVAL_MS = _chunkIBVKYMY3cjs.POLL_INTERVAL_MS; exports.Profile = _chunkBG5WCOMMcjs.Profile; exports.RANK_TIERS = _chunkBG5WCOMMcjs.RANK_TIERS; exports.SteamError = _chunkQIORRDERcjs.SteamError; exports.SteamLoginError = _chunkQIORRDERcjs.SteamLoginError; exports.SteamSession = _chunkQIORRDERcjs.SteamSession; exports.UnexpectedResponseError = _chunkIZ4S4CLQcjs.UnexpectedResponseError; exports.WEBSOCKET13_OVERRIDE = _chunkZIVCJ3VAcjs.WEBSOCKET13_OVERRIDE; exports.allMessages = _chunkIZ4S4CLQcjs.allMessages; exports.classifyEResult = _chunkQIORRDERcjs.classifyEResult; exports.clientMessages = _chunkIZ4S4CLQcjs.clientMessages; exports.decodeRankTier = _chunkBG5WCOMMcjs.decodeRankTier; exports.doctor = _chunkZIVCJ3VAcjs.doctor; exports.eresultName = _chunkQIORRDERcjs.eresultName; exports.gcMessages = _chunkIZ4S4CLQcjs.gcMessages; exports.isCriticalEResult = _chunkQIORRDERcjs.isCriticalEResult; exports.isRateLimitedEResult = _chunkQIORRDERcjs.isRateLimitedEResult; exports.jobResponses = _chunkIZ4S4CLQcjs.jobResponses; exports.login = login2; exports.messageNames = _chunkIZ4S4CLQcjs.messageNames; exports.steamLogin = _chunkQIORRDERcjs.login;
//# sourceMappingURL=index.cjs.map