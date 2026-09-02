"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } async function _asyncNullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return await rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkLKAAZKBPcjs = require('./chunk-LKAAZKBP.cjs');

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
  84,
  // RateLimitExceeded
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
function classifyEResult(eresult) {
  return isCriticalEResult(eresult) ? "critical" : "retryable";
}
function eresultName(eresult, SteamUser) {
  return _nullishCoalesce(_nullishCoalesce(_optionalChain([SteamUser, 'optionalAccess', _ => _.EResult, 'optionalAccess', _2 => _2[eresult]]), () => ( ERESULT_NAMES[eresult])), () => ( `EResult-${eresult}`));
}

// src/steam/transport.ts
var _module = require('module');
var WEBSOCKET13_OVERRIDE = '"websocket13": "github:beekamai/node-websocket13"';
var BunTransportError = class extends Error {
  constructor(websocket13Version) {
    super(
      `dotakit: on Bun, steam-user needs the patched websocket13 fork (installed: ${_nullishCoalesce(websocket13Version, () => ( "not found"))}).
Add this to package.json and reinstall:

  "overrides": {
    ${WEBSOCKET13_OVERRIDE}
  }

(Bun reads "overrides"; on npm use the same block, on yarn use "resolutions".)
Or skip WebSockets entirely: Dota.login({ \u2026, transport: "tcp" }).`
    );
    this.websocket13Version = websocket13Version;
    this.name = "BunTransportError";
  }
  
};
function installedWebsocket13Version() {
  try {
    const require2 = _module.createRequire.call(void 0, _chunkLKAAZKBPcjs.importMetaUrl);
    return String(_nullishCoalesce(require2("websocket13/package.json").version, () => ( ""))) || null;
  } catch (e) {
    return null;
  }
}
var isBunFork = (version) => version !== null && /-bun(\.|$)/.test(version);
function inspect(options = {}) {
  const versions = _nullishCoalesce(_nullishCoalesce(options.versions, () => ( _optionalChain([globalThis, 'access', _3 => _3.process, 'optionalAccess', _4 => _4.versions]))), () => ( {}));
  const bunVersion = _nullishCoalesce(versions.bun, () => ( null));
  const transport = _nullishCoalesce(options.transport, () => ( "auto"));
  const websocket13Version = options.websocket13Version !== void 0 ? options.websocket13Version : installedWebsocket13Version();
  const fork = isBunFork(websocket13Version);
  const notes = [];
  let ok = true;
  if (bunVersion) {
    if (transport === "tcp") {
      notes.push('Bun with transport: "tcp" \u2014 the WebSocket transport is bypassed, websocket13 is not used.');
    } else if (fork) {
      notes.push(`Bun with the patched websocket13 (${websocket13Version}) \u2014 WebSocket transport is fine.`);
    } else {
      ok = false;
      notes.push(
        `Bun with stock websocket13 (${_nullishCoalesce(websocket13Version, () => ( "not installed"))}) \u2014 the Steam WebSocket handshake never completes. Add the overrides block, or use transport: "tcp".`
      );
    }
  } else {
    notes.push("Node \u2014 the stock websocket13 works; no override needed.");
  }
  return {
    runtime: bunVersion ? "bun" : "node",
    bunVersion,
    websocket13Version,
    websocket13IsBunFork: fork,
    transport,
    ok,
    notes
  };
}
function doctor(options = {}) {
  const report = inspect(options);
  if (!report.ok) throw new BunTransportError(report.websocket13Version);
  return report;
}
function connectionProtocol(transport, SteamUser) {
  if (transport !== "tcp") return void 0;
  const value = _optionalChain([SteamUser, 'optionalAccess', _5 => _5.EConnectionProtocol, 'optionalAccess', _6 => _6.TCP]);
  if (typeof value !== "number") return void 0;
  return value;
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
      _optionalChain([this, 'access', _7 => _7.user, 'access', _8 => _8.logOff, 'optionalCall', _9 => _9()]);
    } catch (error) {
      _optionalChain([this, 'access', _10 => _10.logger, 'optionalAccess', _11 => _11.warn, 'optionalCall', _12 => _12("dotakit: logOff() threw", error)]);
    }
  }
  on(event, listener) {
    return super.on(event, listener);
  }
  /** Never lets a missing `error` listener take the process down with it. */
  emitError(error) {
    if (this.listenerCount("error") > 0) this.emit("error", error);
    else _optionalChain([this, 'access', _13 => _13.logger, 'optionalAccess', _14 => _14.warn, 'optionalCall', _15 => _15("dotakit: unhandled Steam error", error)]);
  }
};
function tokenExpiry(token) {
  try {
    const payload = token.split(".")[1];
    if (!payload) return null;
    const json = JSON.parse(Buffer.from(payload, "base64").toString("utf8"));
    return typeof _optionalChain([json, 'optionalAccess', _16 => _16.exp]) === "number" ? json.exp : null;
  } catch (e2) {
    return null;
  }
}
function readSessionToken(file, logger) {
  if (!_fs.existsSync.call(void 0, file)) return null;
  try {
    const data = JSON.parse(_fs.readFileSync.call(void 0, file, "utf8"));
    const token = _optionalChain([data, 'optionalAccess', _17 => _17.refreshToken]);
    if (typeof token !== "string" || !token) return null;
    const exp = tokenExpiry(token);
    if (exp !== null && exp * 1e3 <= Date.now()) {
      _optionalChain([logger, 'optionalAccess', _18 => _18.warn, 'optionalCall', _19 => _19("dotakit: saved refresh token has expired, falling back to the password")]);
      return null;
    }
    return token;
  } catch (error) {
    _optionalChain([logger, 'optionalAccess', _20 => _20.warn, 'optionalCall', _21 => _21("dotakit: could not read %s", file, error)]);
    return null;
  }
}
function writeSessionToken(file, refreshToken, logger) {
  try {
    _fs.mkdirSync.call(void 0, _path.dirname.call(void 0, file), { recursive: true });
    _fs.writeFileSync.call(void 0, file, JSON.stringify({ refreshToken }), "utf8");
  } catch (error) {
    _optionalChain([logger, 'optionalAccess', _22 => _22.warn, 'optionalCall', _23 => _23("dotakit: could not write %s", file, error)]);
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
  if (!options.steamUser) doctor({ transport: options.transport });
  const SteamUser = await _asyncNullishCoalesce(options.SteamUser, async () => ( (options.steamUser ? void 0 : await loadSteamUser())));
  const user = _nullishCoalesce(options.steamUser, () => ( new SteamUser()));
  const session = new SteamSession(user, { accountName, sessionFile, logger });
  _optionalChain([options, 'access', _25 => _25.onSession, 'optionalCall', _26 => _26(session)]);
  const savedToken = sessionFile ? readSessionToken(sessionFile, logger) : null;
  const refreshToken = _nullishCoalesce(_nullishCoalesce(options.refreshToken, () => ( savedToken)), () => ( void 0));
  if (!refreshToken && !options.password) {
    throw new SteamError("login() needs a password, a refreshToken, or a sessionFile holding one");
  }
  const protocol = connectionProtocol(options.transport, _nullishCoalesce(options.SteamUser, () => ( SteamUser)));
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
      if (session.listenerCount("guard") === 0) {
        finish(new GuardRequiredError(prompt.domain, prompt.lastCodeWrong));
      }
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
















exports.SteamError = SteamError; exports.SteamLoginError = SteamLoginError; exports.GuardRequiredError = GuardRequiredError; exports.isCriticalEResult = isCriticalEResult; exports.classifyEResult = classifyEResult; exports.eresultName = eresultName; exports.WEBSOCKET13_OVERRIDE = WEBSOCKET13_OVERRIDE; exports.BunTransportError = BunTransportError; exports.installedWebsocket13Version = installedWebsocket13Version; exports.inspect = inspect; exports.doctor = doctor; exports.connectionProtocol = connectionProtocol; exports.SteamSession = SteamSession; exports.login = login;
//# sourceMappingURL=chunk-7WYODH5A.cjs.map