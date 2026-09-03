"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } async function _asyncNullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return await rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }


var _chunkZIVCJ3VAcjs = require('./chunk-ZIVCJ3VA.cjs');

// src/steam/index.ts
var _events = require('events');
var _fs = require('fs');
var _path = require('path');

// src/steam/errors.ts
var SteamError = class extends Error {
  constructor(message, options) {
    super(message, options);
    this.name = new.target.name;
  }
};
var SteamLoginError = class extends SteamError {
  constructor(eresult, eresultName2, cause) {
    super(`Steam login failed: ${eresultName2} (${eresult})`, { cause });
    this.eresult = eresult;
    this.eresultName = eresultName2;
    this.critical = isCriticalEResult(eresult);
  }
  
  
  
};
var GuardRequiredError = class extends SteamError {
  constructor(domain, lastCodeWrong) {
    super(
      lastCodeWrong ? "Steam rejected the Guard code and no new one was supplied" : "Steam Guard code required \u2014 pass guardCode, or onGuard to supply one on demand"
    );
    this.domain = domain;
    this.lastCodeWrong = lastCodeWrong;
  }
  
  
};
var CRITICAL_ERESULTS = /* @__PURE__ */ new Set([
  5,
  // InvalidPassword
  6,
  // LoggedInElsewhere
  17,
  // Banned
  34,
  // LogonSessionReplaced
  43,
  // AccountDisabled
  63,
  // AccountLogonDenied (Steam Guard email)
  73,
  // AccountLockedDown
  85,
  // AccountLoginDeniedNeedTwoFactor
  88
  // TwoFactorCodeMismatch
]);
var ERESULT_NAMES = {
  1: "OK",
  3: "NoConnection",
  5: "InvalidPassword",
  6: "LoggedInElsewhere",
  16: "Timeout",
  17: "Banned",
  20: "ServiceUnavailable",
  34: "LogonSessionReplaced",
  43: "AccountDisabled",
  63: "AccountLogonDenied",
  65: "AccountLogonDeniedNoMail",
  73: "AccountLockedDown",
  84: "RateLimitExceeded",
  85: "AccountLoginDeniedNeedTwoFactor",
  88: "TwoFactorCodeMismatch"
};
function isCriticalEResult(eresult) {
  return CRITICAL_ERESULTS.has(eresult);
}
var ERESULT_RATE_LIMIT = 84;
function isRateLimitedEResult(eresult) {
  return eresult === ERESULT_RATE_LIMIT;
}
function classifyEResult(eresult) {
  if (isCriticalEResult(eresult)) return "critical";
  if (isRateLimitedEResult(eresult)) return "rate_limited";
  return "retryable";
}
function eresultName(eresult, SteamUser) {
  return _nullishCoalesce(_nullishCoalesce(_optionalChain([SteamUser, 'optionalAccess', _ => _.EResult, 'optionalAccess', _2 => _2[eresult]]), () => ( ERESULT_NAMES[eresult])), () => ( `EResult-${eresult}`));
}

// src/steam/index.ts
var SteamSession = class extends _events.EventEmitter {
  /** The underlying `steam-user` instance. Hand it to `new Dota2GC(...)`, or use it directly. */
  
  
  
  
  constructor(user, options) {
    super();
    this.user = user;
    this.accountName = options.accountName;
    this.sessionFile = options.sessionFile;
    this.logger = options.logger;
    this.setMaxListeners(0);
  }
  /** The 64-bit Steam id as a string, or `null` before the login completes. */
  get steamID() {
    const id = this.user.steamID;
    return id ? String(id) : null;
  }
  /** The 32-bit Dota account id — what GC messages call `accountId`. */
  get accountId() {
    const id = this.user.steamID;
    if (!id) return null;
    if (typeof id === "object" && typeof id.accountid === "number") return id.accountid;
    const asNumber = BigInt(String(id)) & 0xffffffffn;
    return Number(asNumber);
  }
  logoff() {
    try {
      _optionalChain([this, 'access', _3 => _3.user, 'access', _4 => _4.logOff, 'optionalCall', _5 => _5()]);
    } catch (error) {
      _optionalChain([this, 'access', _6 => _6.logger, 'optionalAccess', _7 => _7.warn, 'optionalCall', _8 => _8("dotakit: logOff() threw", error)]);
    }
  }
  on(event, listener) {
    return super.on(event, listener);
  }
  /** Never lets a missing `error` listener take the process down with it. */
  emitError(error) {
    if (this.listenerCount("error") > 0) this.emit("error", error);
    else _optionalChain([this, 'access', _9 => _9.logger, 'optionalAccess', _10 => _10.warn, 'optionalCall', _11 => _11("dotakit: unhandled Steam error", error)]);
  }
};
function tokenExpiry(token) {
  try {
    const payload = token.split(".")[1];
    if (!payload) return null;
    const json = JSON.parse(Buffer.from(payload, "base64").toString("utf8"));
    return typeof _optionalChain([json, 'optionalAccess', _12 => _12.exp]) === "number" ? json.exp : null;
  } catch (e) {
    return null;
  }
}
function readSessionToken(file, logger) {
  if (!_fs.existsSync.call(void 0, file)) return null;
  try {
    const data = JSON.parse(_fs.readFileSync.call(void 0, file, "utf8"));
    const token = _optionalChain([data, 'optionalAccess', _13 => _13.refreshToken]);
    if (typeof token !== "string" || !token) return null;
    const exp = tokenExpiry(token);
    if (exp !== null && exp * 1e3 <= Date.now()) {
      _optionalChain([logger, 'optionalAccess', _14 => _14.warn, 'optionalCall', _15 => _15("dotakit: saved refresh token has expired, falling back to the password")]);
      return null;
    }
    return token;
  } catch (error) {
    _optionalChain([logger, 'optionalAccess', _16 => _16.warn, 'optionalCall', _17 => _17("dotakit: could not read %s", file, error)]);
    return null;
  }
}
function writeSessionToken(file, refreshToken, logger) {
  try {
    _fs.mkdirSync.call(void 0, _path.dirname.call(void 0, file), { recursive: true });
    _fs.writeFileSync.call(void 0, file, JSON.stringify({ refreshToken }), "utf8");
  } catch (error) {
    _optionalChain([logger, 'optionalAccess', _18 => _18.warn, 'optionalCall', _19 => _19("dotakit: could not write %s", file, error)]);
  }
}
function isInteractive(options) {
  if (options.interactiveGuard !== void 0) return options.interactiveGuard;
  const proc = globalThis.process;
  return Boolean(_optionalChain([proc, 'optionalAccess', _20 => _20.stdin, 'optionalAccess', _21 => _21.isTTY]) && _optionalChain([proc, 'optionalAccess', _22 => _22.stdout, 'optionalAccess', _23 => _23.isTTY]));
}
async function askTerminal(prompt) {
  const { createInterface } = await Promise.resolve().then(() => _interopRequireWildcard(require("readline/promises")));
  const proc = globalThis.process;
  const rl = createInterface({ input: proc.stdin, output: proc.stdout });
  try {
    const where = prompt.domain ? `emailed to @${prompt.domain}` : "from your Steam mobile authenticator";
    if (prompt.lastCodeWrong) console.log("That code was rejected.");
    const code = await rl.question(`Steam Guard code (${where}): `);
    return code.trim();
  } finally {
    rl.close();
  }
}
async function loadSteamUser() {
  try {
    const mod = await Promise.resolve().then(() => _interopRequireWildcard(require("steam-user")));
    return _nullishCoalesce(_optionalChain([mod, 'optionalAccess', _24 => _24.default]), () => ( mod));
  } catch (cause) {
    throw new SteamError(
      "steam-user is not installed. It is a peer dependency of dotakit: bun add steam-user",
      { cause }
    );
  }
}
async function login(options) {
  const { accountName, sessionFile, logger } = options;
  if (!accountName) throw new SteamError("login() needs an accountName");
  if (!options.steamUser) _chunkZIVCJ3VAcjs.doctor.call(void 0, { transport: options.transport });
  const SteamUser = await _asyncNullishCoalesce(options.SteamUser, async () => ( (options.steamUser ? void 0 : await loadSteamUser())));
  const user = _nullishCoalesce(options.steamUser, () => ( new SteamUser({ autoRelogin: _nullishCoalesce(options.autoRelogin, () => ( true)) })));
  const session = new SteamSession(user, { accountName, sessionFile, logger });
  _optionalChain([options, 'access', _25 => _25.onSession, 'optionalCall', _26 => _26(session)]);
  const savedToken = sessionFile ? readSessionToken(sessionFile, logger) : null;
  const refreshToken = _nullishCoalesce(_nullishCoalesce(options.refreshToken, () => ( savedToken)), () => ( void 0));
  if (!refreshToken && !options.password) {
    throw new SteamError("login() needs a password, a refreshToken, or a sessionFile holding one");
  }
  const protocol = _chunkZIVCJ3VAcjs.connectionProtocol.call(void 0, options.transport, _nullishCoalesce(options.SteamUser, () => ( SteamUser)));
  const logOnOptions = refreshToken ? { refreshToken } : { accountName, password: options.password };
  if (protocol !== void 0) logOnOptions.protocol = protocol;
  for (const event of ["loggedOn", "steamGuard", "refreshToken", "error", "disconnected"]) {
    _optionalChain([user, 'access', _27 => _27.removeAllListeners, 'optionalCall', _28 => _28(event)]);
  }
  return new Promise((resolve, reject) => {
    let settled = false;
    let guardAsked = false;
    const finish = (error) => {
      if (settled) return;
      settled = true;
      if (error) reject(error);
      else resolve(session);
    };
    user.on("loggedOn", () => {
      _optionalChain([logger, 'optionalAccess', _29 => _29.debug, 'optionalCall', _30 => _30("dotakit: logged into Steam as %s", accountName)]);
      finish();
    });
    user.on("refreshToken", (token) => {
      if (!token) return;
      if (sessionFile) writeSessionToken(sessionFile, token, logger);
      session.emit("token", token);
    });
    user.on("steamGuard", (domain, callback, lastCodeWrong) => {
      let answered = false;
      const prompt = {
        domain: _nullishCoalesce(domain, () => ( null)),
        lastCodeWrong: Boolean(lastCodeWrong),
        submit(code) {
          if (answered) return;
          answered = true;
          callback(code);
        }
      };
      session.emit("guard", prompt);
      if (options.guardCode && !guardAsked) {
        guardAsked = true;
        prompt.submit(options.guardCode);
        return;
      }
      guardAsked = true;
      if (options.onGuard) {
        Promise.resolve().then(() => options.onGuard(prompt)).then((code) => {
          if (code) prompt.submit(code);
          else finish(new GuardRequiredError(prompt.domain, prompt.lastCodeWrong));
        }).catch((error) => finish(error instanceof Error ? error : new SteamError(String(error))));
        return;
      }
      if (session.listenerCount("guard") > 0) return;
      if (isInteractive(options)) {
        askTerminal(prompt).then((code) => {
          if (code) prompt.submit(code);
          else finish(new GuardRequiredError(prompt.domain, prompt.lastCodeWrong));
        }).catch((error) => finish(error instanceof Error ? error : new SteamError(String(error))));
        return;
      }
      finish(new GuardRequiredError(prompt.domain, prompt.lastCodeWrong));
    });
    user.on("disconnected", (eresult, msg) => {
      const name = eresultName(eresult, _nullishCoalesce(options.SteamUser, () => ( SteamUser)));
      session.emit("disconnected", {
        eresult,
        eresultName: name,
        critical: isCriticalEResult(eresult),
        message: _nullishCoalesce(msg, () => ( ""))
      });
    });
    user.on("error", (error) => {
      const eresult = Number(_nullishCoalesce(_optionalChain([error, 'optionalAccess', _31 => _31.eresult]), () => ( 0)));
      const wrapped = new SteamLoginError(eresult, eresultName(eresult, _nullishCoalesce(options.SteamUser, () => ( SteamUser))), error);
      if (settled) session.emitError(wrapped);
      else finish(wrapped);
    });
    try {
      user.logOn(logOnOptions);
    } catch (error) {
      finish(error instanceof Error ? error : new SteamError(String(error)));
    }
  });
}












exports.SteamError = SteamError; exports.SteamLoginError = SteamLoginError; exports.GuardRequiredError = GuardRequiredError; exports.isCriticalEResult = isCriticalEResult; exports.ERESULT_RATE_LIMIT = ERESULT_RATE_LIMIT; exports.isRateLimitedEResult = isRateLimitedEResult; exports.classifyEResult = classifyEResult; exports.eresultName = eresultName; exports.SteamSession = SteamSession; exports.login = login;
//# sourceMappingURL=chunk-QIORRDER.cjs.map