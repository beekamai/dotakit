"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }















var _chunkQKCYOI3Qcjs = require('./chunk-QKCYOI3Q.cjs');












var _chunk7WYODH5Acjs = require('./chunk-7WYODH5A.cjs');








var _chunkUKGD34RUcjs = require('./chunk-UKGD34RU.cjs');





var _chunkBG5WCOMMcjs = require('./chunk-BG5WCOMM.cjs');





var _chunk4AJOKWQUcjs = require('./chunk-4AJOKWQU.cjs');


var _chunkR7TOZZ5Xcjs = require('./chunk-R7TOZZ5X.cjs');





var _chunkCU4ZEV3Ucjs = require('./chunk-CU4ZEV3U.cjs');


var _chunk3V5KHPWIcjs = require('./chunk-3V5KHPWI.cjs');
require('./chunk-LKAAZKBP.cjs');

// src/index.ts
var _events = require('events');
var DotaBot = class extends _events.EventEmitter {
  
  
  
  
  
  constructor(steam, gc, options = {}) {
    super();
    this.steam = steam;
    this.gc = gc;
    this.guild = new (0, _chunkUKGD34RUcjs.Guild)(gc, {
      ...options.guild,
      accountId: _nullishCoalesce(steam.accountId, () => ( void 0)),
      logger: options.logger
    });
    this.profile = new (0, _chunkBG5WCOMMcjs.Profile)(gc, { logger: options.logger, ...options.profile });
    this.live = new (0, _chunk4AJOKWQUcjs.Live)(gc, { logger: options.logger, ...options.live });
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
  const steam = await _chunk7WYODH5Acjs.login.call(void 0, options);
  const gc = new (0, _chunkQKCYOI3Qcjs.Dota2GC)(steam.user, { autoGamesPlayed: true, logger: options.logger, ...options.gc });
  const bot = new DotaBot(steam, gc, options);
  if (_nullishCoalesce(options.waitForGC, () => ( true))) {
    await gc.connect({ timeoutMs: _nullishCoalesce(options.gcTimeoutMs, () => ( 6e4)) });
  } else {
    void gc.connect().catch(() => void 0);
  }
  return bot;
}
var Dota = { login: login2, APPID: _chunkQKCYOI3Qcjs.DOTA2_APPID };



















































exports.BunTransportError = _chunk7WYODH5Acjs.BunTransportError; exports.DEFAULT_RANK_GAP_MS = _chunkBG5WCOMMcjs.DEFAULT_RANK_GAP_MS; exports.DOTA2_APPID = _chunkQKCYOI3Qcjs.DOTA2_APPID; exports.Dota = Dota; exports.Dota2GC = _chunkQKCYOI3Qcjs.Dota2GC; exports.Dota2GCError = _chunkQKCYOI3Qcjs.Dota2GCError; exports.DotaBot = DotaBot; exports.EDOTAGCMsg = _chunk3V5KHPWIcjs.EDOTAGCMsg; exports.EGCBaseClientMsg = _chunkCU4ZEV3Ucjs.EGCBaseClientMsg; exports.EGCBaseMsg = _chunkCU4ZEV3Ucjs.EGCBaseMsg; exports.ESOMsg = _chunkCU4ZEV3Ucjs.ESOMsg; exports.GCConnectionStatus = _chunkCU4ZEV3Ucjs.GCConnectionStatus; exports.GCOperationError = _chunkUKGD34RUcjs.GCOperationError; exports.GCRouter = _chunkQKCYOI3Qcjs.GCRouter; exports.GC_RESULT_STALE = _chunkUKGD34RUcjs.GC_RESULT_STALE; exports.GC_RESULT_TIMEOUT = _chunkUKGD34RUcjs.GC_RESULT_TIMEOUT; exports.GC_TIMEOUT_MS = _chunkR7TOZZ5Xcjs.GC_TIMEOUT_MS; exports.GUILD_ROLE_FLAG = _chunkUKGD34RUcjs.GUILD_ROLE_FLAG; exports.GUILD_ROLE_FLAG_MASK = _chunkUKGD34RUcjs.GUILD_ROLE_FLAG_MASK; exports.GuardRequiredError = _chunk7WYODH5Acjs.GuardRequiredError; exports.Guild = _chunkUKGD34RUcjs.Guild; exports.JobAbortedError = _chunkQKCYOI3Qcjs.JobAbortedError; exports.JobTimeoutError = _chunkQKCYOI3Qcjs.JobTimeoutError; exports.Live = _chunk4AJOKWQUcjs.Live; exports.MAX_BACKOFF_MS = _chunk4AJOKWQUcjs.MAX_BACKOFF_MS; exports.MAX_MISSES = _chunk4AJOKWQUcjs.MAX_MISSES; exports.NoDecoderError = _chunkQKCYOI3Qcjs.NoDecoderError; exports.NoEncoderError = _chunkQKCYOI3Qcjs.NoEncoderError; exports.NoGuildError = _chunkUKGD34RUcjs.NoGuildError; exports.NotConnectedError = _chunkQKCYOI3Qcjs.NotConnectedError; exports.POLL_INTERVAL_MS = _chunk4AJOKWQUcjs.POLL_INTERVAL_MS; exports.Profile = _chunkBG5WCOMMcjs.Profile; exports.RANK_TIERS = _chunkBG5WCOMMcjs.RANK_TIERS; exports.SteamError = _chunk7WYODH5Acjs.SteamError; exports.SteamLoginError = _chunk7WYODH5Acjs.SteamLoginError; exports.SteamSession = _chunk7WYODH5Acjs.SteamSession; exports.UnexpectedResponseError = _chunkQKCYOI3Qcjs.UnexpectedResponseError; exports.WEBSOCKET13_OVERRIDE = _chunk7WYODH5Acjs.WEBSOCKET13_OVERRIDE; exports.allMessages = _chunkQKCYOI3Qcjs.allMessages; exports.classifyEResult = _chunk7WYODH5Acjs.classifyEResult; exports.clientMessages = _chunkQKCYOI3Qcjs.clientMessages; exports.decodeRankTier = _chunkBG5WCOMMcjs.decodeRankTier; exports.doctor = _chunk7WYODH5Acjs.doctor; exports.eresultName = _chunk7WYODH5Acjs.eresultName; exports.gcMessages = _chunkQKCYOI3Qcjs.gcMessages; exports.isCriticalEResult = _chunk7WYODH5Acjs.isCriticalEResult; exports.jobResponses = _chunkQKCYOI3Qcjs.jobResponses; exports.login = login2; exports.messageNames = _chunkQKCYOI3Qcjs.messageNames; exports.steamLogin = _chunk7WYODH5Acjs.login;
//# sourceMappingURL=index.cjs.map