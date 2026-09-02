// src/steam/transport.ts
import { existsSync, readFileSync } from "fs";
import { createRequire } from "module";
import { dirname, join, resolve } from "path";
var WEBSOCKET13_PACKAGE = "@beekamai/websocket13";
var WEBSOCKET13_SPEC = `npm:${WEBSOCKET13_PACKAGE}@4.1.0-bun.1`;
var WEBSOCKET13_OVERRIDE = `"websocket13": "${WEBSOCKET13_SPEC}"`;
var BunTransportError = class extends Error {
  constructor(websocket13Version) {
    super(
      `dotakit: on Bun, steam-user needs the ${WEBSOCKET13_PACKAGE} fork of websocket13 (installed: ${websocket13Version ?? "not found"}).
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
  websocket13Version;
};
function installedWebsocket13Version(fromDir) {
  if (fromDir !== void 0) return projectWebsocket13Version(fromDir);
  try {
    const require2 = createRequire(import.meta.url);
    return String(require2("websocket13/package.json").version ?? "") || null;
  } catch {
    return null;
  }
}
function projectWebsocket13Version(dir) {
  let current = resolve(dir);
  for (let i = 0; i < 32; i++) {
    try {
      const manifest = join(current, "node_modules", "websocket13", "package.json");
      if (existsSync(manifest)) {
        const version = String(JSON.parse(readFileSync(manifest, "utf8")).version ?? "");
        if (version) return version;
      }
    } catch {
    }
    const parent = dirname(current);
    if (parent === current) break;
    current = parent;
  }
  return null;
}
var isBunFork = (version) => version !== null && /-bun(\.|$)/.test(version);
function inspect(options = {}) {
  const versions = options.versions ?? globalThis.process?.versions ?? {};
  const bunVersion = versions.bun ?? null;
  const transport = options.transport ?? "auto";
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
        `Bun with stock websocket13 (${websocket13Version ?? "not installed"}) \u2014 the Steam WebSocket handshake never completes. Run \`bunx dotakit init\` to pin ${WEBSOCKET13_PACKAGE}, or use transport: "tcp".`
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
  const value = SteamUser?.EConnectionProtocol?.TCP;
  if (typeof value !== "number") return void 0;
  return value;
}

export {
  WEBSOCKET13_PACKAGE,
  WEBSOCKET13_SPEC,
  WEBSOCKET13_OVERRIDE,
  BunTransportError,
  installedWebsocket13Version,
  inspect,
  doctor,
  connectionProtocol
};
//# sourceMappingURL=chunk-ABFH7GUG.js.map