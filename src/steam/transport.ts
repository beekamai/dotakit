/* Which wire steam-user talks Steam over, and the one Bun-specific trap in this
   library: on Bun the stock websocket13 cannot complete a Steam handshake. */

import { createRequire } from "node:module";

/** The dependency override that makes the WebSocket transport work under Bun. */
export const WEBSOCKET13_OVERRIDE = '"websocket13": "github:beekamai/node-websocket13"';

/** How steam-user should connect. `auto` lets steam-user pick (WebSocket today). */
export type TransportMode = "auto" | "websocket" | "tcp";

/**
 * Bun is running, the WebSocket transport is in play, and the installed `websocket13`
 * is the stock one — the login would hang instead of failing, so it is refused up front.
 */
export class BunTransportError extends Error {
    constructor(readonly websocket13Version: string | null) {
        super(
            `dotakit: on Bun, steam-user needs the patched websocket13 fork ` +
                `(installed: ${websocket13Version ?? "not found"}).\n` +
                `Add this to package.json and reinstall:\n\n` +
                `  "overrides": {\n    ${WEBSOCKET13_OVERRIDE}\n  }\n\n` +
                `(Bun reads "overrides"; on npm use the same block, on yarn use "resolutions".)\n` +
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

/** Reads the installed `websocket13` version, or `null` when it is not resolvable. */
export function installedWebsocket13Version(): string | null {
    try {
        const require = createRequire(import.meta.url);
        return String(require("websocket13/package.json").version ?? "") || null;
    } catch {
        return null;
    }
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
                    `handshake never completes. Add the overrides block, or use transport: "tcp".`,
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
