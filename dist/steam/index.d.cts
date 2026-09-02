import { EventEmitter } from 'node:events';
import { S as SteamTransport, L as Logger } from '../types-DJJWbS4o.cjs';
import '@bufbuild/protobuf/wire';

/** The dependency override that makes the WebSocket transport work under Bun. */
declare const WEBSOCKET13_OVERRIDE = "\"websocket13\": \"npm:@beekamai/websocket13@4.1.0-bun.1\"";
/** How steam-user should connect. `auto` lets steam-user pick (WebSocket today). */
type TransportMode = "auto" | "websocket" | "tcp";
/**
 * Bun is running, the WebSocket transport is in play, and the installed `websocket13`
 * is the stock one — the login would hang instead of failing, so it is refused up front.
 */
declare class BunTransportError extends Error {
    readonly websocket13Version: string | null;
    constructor(websocket13Version: string | null);
}
interface DoctorOptions {
    /** Defaults to `process.versions`. Injectable so the Bun path is testable off Bun. */
    versions?: Record<string, string | undefined>;
    /** Defaults to the installed `websocket13` version. `null` means "not installed". */
    websocket13Version?: string | null;
    transport?: TransportMode;
}
interface DoctorReport {
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
declare function installedWebsocket13Version(fromDir?: string): string | null;
/** Describes the current transport situation without throwing. */
declare function inspect(options?: DoctorOptions): DoctorReport;
/**
 * Same as {@link inspect}, but throws {@link BunTransportError} when the combination
 * cannot work. Called by `login()` before it touches the network.
 */
declare function doctor(options?: DoctorOptions): DoctorReport;
/**
 * Maps a {@link TransportMode} onto steam-user's `protocol` login option.
 * `auto` and `websocket` leave the choice to steam-user.
 */
declare function connectionProtocol(transport: TransportMode | undefined, SteamUser: any): number | undefined;

declare class SteamError extends Error {
    constructor(message: string, options?: {
        cause?: unknown;
    });
}
/**
 * Steam refused or dropped the login. `critical` means retrying will not help —
 * the password is wrong, the account is banned, the Guard code was rejected.
 */
declare class SteamLoginError extends SteamError {
    readonly eresult: number;
    readonly eresultName: string;
    readonly critical: boolean;
    constructor(eresult: number, eresultName: string, cause?: unknown);
}
/** No Steam Guard code could be obtained: no `guardCode`, no `onGuard`, nobody listening. */
declare class GuardRequiredError extends SteamError {
    readonly domain: string | null;
    readonly lastCodeWrong: boolean;
    constructor(domain: string | null, lastCodeWrong: boolean);
}
/** `true` when reconnecting cannot fix it and a person has to intervene. */
declare function isCriticalEResult(eresult: number): boolean;
type EResultClass = "critical" | "retryable";
declare function classifyEResult(eresult: number): EResultClass;
/** Best-effort name for an EResult; uses steam-user's enum when one is handed in. */
declare function eresultName(eresult: number, SteamUser?: any): string;

/** The slice of `steam-user` this library drives. A `SteamUser` instance satisfies it. */
interface SteamUserLike extends SteamTransport {
    logOn(options: Record<string, unknown>): void;
    logOff?(): void;
    removeAllListeners?(event?: string): unknown;
}
/** A Steam Guard code is wanted. Answer it with `submit()`, from anywhere, once. */
interface GuardPrompt {
    /** Email domain for email Guard; `null` for the mobile authenticator. */
    domain: string | null;
    /** The previous code was rejected — this is a retry, not the first ask. */
    lastCodeWrong: boolean;
    submit(code: string): void;
}
interface DisconnectInfo {
    eresult: number;
    eresultName: string;
    /** `true` when reconnecting cannot help (banned, replaced session, bad password). */
    critical: boolean;
    message: string;
}
interface LoginOptions {
    accountName: string;
    password?: string;
    /** Skips the password entirely. Takes priority over a token read from `sessionFile`. */
    refreshToken?: string;
    /** Answers the first Guard prompt without asking anyone. */
    guardCode?: string;
    /** JSON file holding `{ refreshToken }`. Read on login, rewritten whenever Steam issues one. */
    sessionFile?: string;
    /** `tcp` bypasses WebSockets — the escape hatch when the Bun fork is not installed. */
    transport?: TransportMode;
    /**
     * Asked for a Guard code on demand. Return the code, or reject to fail the login.
     * Always pass this on a server: without it the login can only fall back to the
     * terminal, and a headless process has no terminal to fall back to.
     */
    onGuard?: (prompt: GuardPrompt) => string | Promise<string>;
    /**
     * Last-resort Guard prompt on the terminal, used when nothing else can answer.
     * Defaults to `true` only while stdin *and* stdout are TTYs.
     */
    interactiveGuard?: boolean;
    /** Called with the session the moment it exists — before login finishes, so events can be wired. */
    onSession?: (session: SteamSession) => void;
    logger?: Logger;
    /** A ready-made `steam-user` instance (or a test double). Skips the transport check. */
    steamUser?: SteamUserLike;
    /** The `SteamUser` class itself. Defaults to a lazy `import("steam-user")`. */
    SteamUser?: any;
}
/**
 * A logged-in Steam connection.
 *
 * @remarks
 * `token` fires every time Steam issues a refresh token — with `sessionFile` set it has
 * already been written to disk by the time you see it. `disconnected` fires on every
 * drop, including the routine ones; `info.critical` tells the two apart.
 */
declare class SteamSession extends EventEmitter {
    /** The underlying `steam-user` instance. Hand it to `new Dota2GC(...)`, or use it directly. */
    readonly user: SteamUserLike;
    readonly accountName: string;
    readonly sessionFile?: string;
    private readonly logger?;
    constructor(user: SteamUserLike, options: {
        accountName: string;
        sessionFile?: string;
        logger?: Logger;
    });
    /** The 64-bit Steam id as a string, or `null` before the login completes. */
    get steamID(): string | null;
    /** The 32-bit Dota account id — what GC messages call `accountId`. */
    get accountId(): number | null;
    logoff(): void;
    on(event: "token", listener: (refreshToken: string) => void): this;
    on(event: "guard", listener: (prompt: GuardPrompt) => void): this;
    on(event: "disconnected", listener: (info: DisconnectInfo) => void): this;
    on(event: "error", listener: (error: Error) => void): this;
    /** Never lets a missing `error` listener take the process down with it. */
    emitError(error: Error): void;
}
/**
 * Logs into Steam and resolves once the account is on.
 *
 * Give it a password, a `refreshToken`, or a `sessionFile` written by an earlier login.
 * With `sessionFile` set, every token Steam issues is persisted, so the second run needs
 * no password and no Guard code.
 *
 * @remarks
 * On Bun this refuses to start unless the patched `websocket13` is installed or
 * `transport: "tcp"` is set — see {@link doctor}. A hang is a worse failure than a throw.
 */
declare function login(options: LoginOptions): Promise<SteamSession>;

export { BunTransportError, type DisconnectInfo, type DoctorOptions, type DoctorReport, type EResultClass, type GuardPrompt, GuardRequiredError, type LoginOptions, SteamError, SteamLoginError, SteamSession, type SteamUserLike, type TransportMode, WEBSOCKET13_OVERRIDE, classifyEResult, connectionProtocol, doctor, eresultName, inspect, installedWebsocket13Version, isCriticalEResult, login };
