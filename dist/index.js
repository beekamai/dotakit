import {
  DOTA2_APPID,
  Dota2GC,
  Dota2GCError,
  GCRouter,
  JobAbortedError,
  JobTimeoutError,
  NoDecoderError,
  NoEncoderError,
  NotConnectedError,
  UnexpectedResponseError,
  allMessages,
  clientMessages,
  gcMessages,
  jobResponses,
  messageNames
} from "./chunk-HVBTCCEY.js";
import {
  ERESULT_RATE_LIMIT,
  GuardRequiredError,
  SteamError,
  SteamLoginError,
  SteamSession,
  classifyEResult,
  eresultName,
  isCriticalEResult,
  isRateLimitedEResult,
  login
} from "./chunk-DMHNX3IA.js";
import {
  GCOperationError,
  GC_RESULT_STALE,
  GC_RESULT_TIMEOUT,
  GUILD_ROLE_FLAG,
  GUILD_ROLE_FLAG_MASK,
  Guild,
  NoGuildError
} from "./chunk-SC37SVHY.js";
import {
  DEFAULT_RANK_GAP_MS,
  Profile,
  RANK_TIERS,
  decodeRankTier
} from "./chunk-LZIWFG4Y.js";
import {
  Live,
  MAX_BACKOFF_MS,
  MAX_MISSES,
  POLL_INTERVAL_MS
} from "./chunk-3LR4BZFE.js";
import {
  GC_TIMEOUT_MS
} from "./chunk-3P7DVYVL.js";
import {
  EGCBaseClientMsg,
  EGCBaseMsg,
  ESOMsg,
  GCConnectionStatus
} from "./chunk-R5MSRNH2.js";
import {
  EDOTAGCMsg
} from "./chunk-3ICL5PG7.js";
import {
  BunTransportError,
  WEBSOCKET13_OVERRIDE,
  doctor
} from "./chunk-ABFH7GUG.js";
import "./chunk-PZ5AY32C.js";

// src/index.ts
import { EventEmitter } from "events";
var DotaBot = class extends EventEmitter {
  steam;
  gc;
  guild;
  profile;
  live;
  constructor(steam, gc, options = {}) {
    super();
    this.steam = steam;
    this.gc = gc;
    this.guild = new Guild(gc, {
      ...options.guild,
      accountId: steam.accountId ?? void 0,
      logger: options.logger
    });
    this.profile = new Profile(gc, { logger: options.logger, ...options.profile });
    this.live = new Live(gc, { logger: options.logger, ...options.live });
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
  const steam = await login(options);
  const gc = new Dota2GC(steam.user, { autoGamesPlayed: true, logger: options.logger, ...options.gc });
  const bot = new DotaBot(steam, gc, options);
  if (options.waitForGC ?? true) {
    await gc.connect({ timeoutMs: options.gcTimeoutMs ?? 6e4 });
  } else {
    void gc.connect().catch(() => void 0);
  }
  return bot;
}
var Dota = { login: login2, APPID: DOTA2_APPID };
export {
  BunTransportError,
  DEFAULT_RANK_GAP_MS,
  DOTA2_APPID,
  Dota,
  Dota2GC,
  Dota2GCError,
  DotaBot,
  EDOTAGCMsg,
  EGCBaseClientMsg,
  EGCBaseMsg,
  ERESULT_RATE_LIMIT,
  ESOMsg,
  GCConnectionStatus,
  GCOperationError,
  GCRouter,
  GC_RESULT_STALE,
  GC_RESULT_TIMEOUT,
  GC_TIMEOUT_MS,
  GUILD_ROLE_FLAG,
  GUILD_ROLE_FLAG_MASK,
  GuardRequiredError,
  Guild,
  JobAbortedError,
  JobTimeoutError,
  Live,
  MAX_BACKOFF_MS,
  MAX_MISSES,
  NoDecoderError,
  NoEncoderError,
  NoGuildError,
  NotConnectedError,
  POLL_INTERVAL_MS,
  Profile,
  RANK_TIERS,
  SteamError,
  SteamLoginError,
  SteamSession,
  UnexpectedResponseError,
  WEBSOCKET13_OVERRIDE,
  allMessages,
  classifyEResult,
  clientMessages,
  decodeRankTier,
  doctor,
  eresultName,
  gcMessages,
  isCriticalEResult,
  isRateLimitedEResult,
  jobResponses,
  login2 as login,
  messageNames,
  login as steamLogin
};
//# sourceMappingURL=index.js.map