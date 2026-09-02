"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkLKAAZKBPcjs = require('./chunk-LKAAZKBP.cjs');

// src/steam/transport.ts
var _fs = require('fs');
var _module = require('module');
var _path = require('path');
var WEBSOCKET13_PACKAGE = "@beekamai/websocket13";
var WEBSOCKET13_SPEC = `npm:${WEBSOCKET13_PACKAGE}@4.1.0-bun.1`;
var WEBSOCKET13_OVERRIDE = `"websocket13": "${WEBSOCKET13_SPEC}"`;
var BunTransportError = class extends Error {
  constructor(websocket13Version) {
    super(
      `dotakit: on Bun, steam-user needs the ${WEBSOCKET13_PACKAGE} fork of websocket13 (installed: ${_nullishCoalesce(websocket13Version, () => ( "not found"))}).
Fix it in one command:

  bunx dotakit init

or by hand \u2014 add this to package.json and reinstall:

  "overrides": {
    ${WEBSOCKET13_OVERRIDE}
  }

(Bun and npm read "overrides", pnpm "pnpm.overrides", yarn "resolutions".)
Or skip WebSockets entirely: Dota.login({ \u2026, transport: "tcp" }).`
    );
    this.websocket13Version = websocket13Version;
    this.name = "BunTransportError";
  }
  
};
function installedWebsocket13Version(fromDir) {
  if (fromDir !== void 0) return projectWebsocket13Version(fromDir);
  try {
    const require2 = _module.createRequire.call(void 0, _chunkLKAAZKBPcjs.importMetaUrl);
    return String(_nullishCoalesce(require2("websocket13/package.json").version, () => ( ""))) || null;
  } catch (e) {
    return null;
  }
}
function projectWebsocket13Version(dir) {
  let current = _path.resolve.call(void 0, dir);
  for (let i = 0; i < 32; i++) {
    try {
      const manifest = _path.join.call(void 0, current, "node_modules", "websocket13", "package.json");
      if (_fs.existsSync.call(void 0, manifest)) {
        const version = String(_nullishCoalesce(JSON.parse(_fs.readFileSync.call(void 0, manifest, "utf8")).version, () => ( "")));
        if (version) return version;
      }
    } catch (e2) {
    }
    const parent = _path.dirname.call(void 0, current);
    if (parent === current) break;
    current = parent;
  }
  return null;
}
var isBunFork = (version) => version !== null && /-bun(\.|$)/.test(version);
function inspect(options = {}) {
  const versions = _nullishCoalesce(_nullishCoalesce(options.versions, () => ( _optionalChain([globalThis, 'access', _ => _.process, 'optionalAccess', _2 => _2.versions]))), () => ( {}));
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
        `Bun with stock websocket13 (${_nullishCoalesce(websocket13Version, () => ( "not installed"))}) \u2014 the Steam WebSocket handshake never completes. Run \`bunx dotakit init\` to pin ${WEBSOCKET13_PACKAGE}, or use transport: "tcp".`
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
  const value = _optionalChain([SteamUser, 'optionalAccess', _3 => _3.EConnectionProtocol, 'optionalAccess', _4 => _4.TCP]);
  if (typeof value !== "number") return void 0;
  return value;
}










exports.WEBSOCKET13_PACKAGE = WEBSOCKET13_PACKAGE; exports.WEBSOCKET13_SPEC = WEBSOCKET13_SPEC; exports.WEBSOCKET13_OVERRIDE = WEBSOCKET13_OVERRIDE; exports.BunTransportError = BunTransportError; exports.installedWebsocket13Version = installedWebsocket13Version; exports.inspect = inspect; exports.doctor = doctor; exports.connectionProtocol = connectionProtocol;
//# sourceMappingURL=chunk-ZIVCJ3VA.cjs.map