/* Which wire steam-user talks Steam over, and the one Bun-specific trap in this
   library: on Bun the stock websocket13 cannot complete a Steam handshake. */

import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";

/** The published fork of `websocket13` whose handshake completes under Bun. */
export const WEBSOCKET13_PACKAGE = "@beekamai/websocket13";

/** What the override has to resolve `websocket13` to — a drop-in replacement. */
export const WEBSOCKET13_SPEC = `npm:${WEBSOCKET13_PACKAGE}@4.1.0-bun.1`;

/** The dependency override that makes the WebSocket transport work under Bun. */
export const WEBSOCKET13_OVERRIDE = `"websocket13": "${WEBSOCKET13_SPEC}"`;

/** How steam-user should connect. `auto` lets steam-user pick (WebSocket today). */
export type TransportMode = "auto" | "websocket" | "tcp";

/**
 * Bun is running, the WebSocket transport is in play, and the installed `websocket13`
 * is the stock one — the login would hang instead of failing, so it is refused up front.
 */
export class BunTransportError extends Error {
    constructor(readonly websocket13Version: string | null) {
        super(
            `dotakit: on Bun, steam-user needs the ${WEBSOCKET13_PACKAGE} fork of websocket13 ` +
                `(installed: ${websocket13Version ?? "not found"}).\n` +
                `Fix it in one command:\n\n` +
                `  bunx dotakit init\n\n` +
                `or by hand — add this to package.json and reinstall:\n\n` +
                `  "overrides": {\n    ${WEBSOCKET13_OVERRIDE}\n  }\n\n` +
                `(Bun and npm read "overrides", pnpm "pnpm.overrides", yarn "resolutions".)\n` +
                `Or skip WebSockets entirely: Dota.login({ …, transport: "tcp" }).`,
        );
        this.name = "BunTransportError";
    }
}

export interface DoctorOptions {
    /** Defaults to `process.versions`. Injectable so the Bun path is testable off Bun. */
    versions?: Record<string, string | undefined>;
    /** Defaults to the installed `websocket13` version. `null` means "not installed". */
    websocket13Version?: string | null;
    transport?: TransportMode;
}

export interface DoctorReport {
    runtime: "bun" | "node";
    bunVersion: string | null;
    websocket13Version: string | null;
    /** The fork tags itself `<version>-bun.<n>`; that suffix is the whole check. */
    websocket13IsBunFork: boolean;
    transport: TransportMode;
    /** False only when this runtime + transport combination cannot log in. */
    ok: boolean;
    notes: string[];
}

/**
 * Reads the installed `websocket13` version, or `null` when it is not resolvable.
 *
 * @param fromDir - look only inside this project's `node_modules` (walking up). The CLI
 * passes the user's project so `dotakit doctor` reports *their* install, never dotakit's.
 */
export function installedWebsocket13Version(fromDir?: string): string | null {
    if (fromDir !== undefined) return projectWebsocket13Version(fromDir);
    try {
        const require = createRequire(import.meta.url);
        return String(require("websocket13/package.json").version ?? "") || null;
    } catch {
        return null;
    }
}

/**
 * Same, but read straight off disk by walking up `node_modules` from `dir`.
 *
 * The module resolver is not usable here: `dotakit init` installs in a child process and
 * then reports, and Bun's cached view of the filesystem still predates that install —
 * which would resolve dotakit's own copy and report the wrong version to the user.
 */
function projectWebsocket13Version(dir: string): string | null {
    let current = resolve(dir);
    for (let i = 0; i < 32; i++) {
        try {
            const manifest = join(current, "node_modules", "websocket13", "package.json");
            if (existsSync(manifest)) {
                const version = String(JSON.parse(readFileSync(manifest, "utf8")).version ?? "");
                if (version) return version;
            }
        } catch {
            /* unreadable manifest — keep walking up */
        }
        const parent = dirname(current);
        if (parent === current) break;
        current = parent;
    }
    return null;
}

const isBunFork = (version: string | null): boolean => version !== null && /-bun(\.|$)/.test(version);

/** Describes the current transport situation without throwing. */
export function inspect(options: DoctorOptions = {}): DoctorReport {
    const versions = options.versions ?? (globalThis as any).process?.versions ?? {};
    const bunVersion = versions.bun ?? null;
    const transport = options.transport ?? "auto";
    const websocket13Version =
        options.websocket13Version !== undefined ? options.websocket13Version : installedWebsocket13Version();
    const fork = isBunFork(websocket13Version);

    const notes: string[] = [];
    let ok = true;

    if (bunVersion) {
        if (transport === "tcp") {
            notes.push("Bun with transport: \"tcp\" — the WebSocket transport is bypassed, websocket13 is not used.");
        } else if (fork) {
            notes.push(`Bun with the patched websocket13 (${websocket13Version}) — WebSocket transport is fine.`);
        } else {
            ok = false;
            notes.push(
                `Bun with stock websocket13 (${websocket13Version ?? "not installed"}) — the Steam WebSocket ` +
                    `handshake never completes. Run \`bunx dotakit init\` to pin ${WEBSOCKET13_PACKAGE}, ` +
                    `or use transport: "tcp".`,
            );
        }
    } else {
        notes.push("Node — the stock websocket13 works; no override needed.");
    }

    return {
        runtime: bunVersion ? "bun" : "node",
        bunVersion,
        websocket13Version,
        websocket13IsBunFork: fork,
        transport,
        ok,
        notes,
    };
}

/**
 * Same as {@link inspect}, but throws {@link BunTransportError} when the combination
 * cannot work. Called by `login()` before it touches the network.
 */
export function doctor(options: DoctorOptions = {}): DoctorReport {
    const report = inspect(options);
    if (!report.ok) throw new BunTransportError(report.websocket13Version);
    return report;
}

/**
 * Maps a {@link TransportMode} onto steam-user's `protocol` login option.
 * `auto` and `websocket` leave the choice to steam-user.
 */
export function connectionProtocol(transport: TransportMode | undefined, SteamUser: any): number | undefined {
    if (transport !== "tcp") return undefined;
    const value = SteamUser?.EConnectionProtocol?.TCP;
    if (typeof value !== "number") return undefined;
    return value;
}
