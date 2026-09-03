/* Logging into Steam: refresh-token persistence, the Steam Guard prompt, and the
   EResult bookkeeping that decides whether a drop is worth reconnecting for. */

import { EventEmitter } from "node:events";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

import type { Logger, SteamTransport } from "../gc/types";
import { GuardRequiredError, SteamError, SteamLoginError, eresultName, isCriticalEResult } from "./errors";
import { connectionProtocol, doctor, type TransportMode } from "./transport";

export {
    BunTransportError,
    WEBSOCKET13_OVERRIDE,
    connectionProtocol,
    doctor,
    inspect,
    installedWebsocket13Version,
    type DoctorOptions,
    type DoctorReport,
    type TransportMode,
} from "./transport";
export {
    GuardRequiredError,
    SteamError,
    SteamLoginError,
    classifyEResult,
    ERESULT_RATE_LIMIT,
    isRateLimitedEResult,
    eresultName,
    isCriticalEResult,
    type EResultClass,
} from "./errors";

/** The slice of `steam-user` this library drives. A `SteamUser` instance satisfies it. */
export interface SteamUserLike extends SteamTransport {
    logOn(options: Record<string, unknown>): void;
    logOff?(): void;
    removeAllListeners?(event?: string): unknown;
}

/** A Steam Guard code is wanted. Answer it with `submit()`, from anywhere, once. */
export interface GuardPrompt {
    /** Email domain for email Guard; `null` for the mobile authenticator. */
    domain: string | null;
    /** The previous code was rejected — this is a retry, not the first ask. */
    lastCodeWrong: boolean;
    submit(code: string): void;
}

export interface DisconnectInfo {
    eresult: number;
    eresultName: string;
    /** `true` when reconnecting cannot help (banned, replaced session, bad password). */
    critical: boolean;
    message: string;
}

export interface LoginOptions {
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
    /**
     * steam-user's own relogin after a drop. Defaults to `true` like steam-user.
     * Set `false` when you run your own reconnect loop: two logins of one account
     * (steam-user's and yours) kick each other every few seconds until Steam answers
     * RateLimitExceeded.
     */
    autoRelogin?: boolean;
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
export class SteamSession extends EventEmitter {
    /** The underlying `steam-user` instance. Hand it to `new Dota2GC(...)`, or use it directly. */
    readonly user: SteamUserLike;
    readonly accountName: string;
    readonly sessionFile?: string;

    private readonly logger?: Logger;

    constructor(user: SteamUserLike, options: { accountName: string; sessionFile?: string; logger?: Logger }) {
        super();
        this.user = user;
        this.accountName = options.accountName;
        this.sessionFile = options.sessionFile;
        this.logger = options.logger;
        this.setMaxListeners(0);
    }

    /** The 64-bit Steam id as a string, or `null` before the login completes. */
    get steamID(): string | null {
        const id = (this.user as any).steamID;
        return id ? String(id) : null;
    }

    /** The 32-bit Dota account id — what GC messages call `accountId`. */
    get accountId(): number | null {
        const id = (this.user as any).steamID;
        if (!id) return null;
        if (typeof id === "object" && typeof id.accountid === "number") return id.accountid;
        const asNumber = BigInt(String(id)) & 0xffffffffn;
        return Number(asNumber);
    }

    logoff(): void {
        try {
            this.user.logOff?.();
        } catch (error) {
            this.logger?.warn?.("dotakit: logOff() threw", error);
        }
    }

    override on(event: "token", listener: (refreshToken: string) => void): this;
    override on(event: "guard", listener: (prompt: GuardPrompt) => void): this;
    override on(event: "disconnected", listener: (info: DisconnectInfo) => void): this;
    override on(event: "error", listener: (error: Error) => void): this;
    override on(event: string | symbol, listener: (...args: any[]) => void): this {
        return super.on(event, listener);
    }

    /** Never lets a missing `error` listener take the process down with it. */
    emitError(error: Error): void {
        if (this.listenerCount("error") > 0) this.emit("error", error);
        else this.logger?.warn?.("dotakit: unhandled Steam error", error);
    }
}

/** `exp` out of a Steam refresh token, in seconds. `null` when it cannot be read. */
function tokenExpiry(token: string): number | null {
    try {
        const payload = token.split(".")[1];
        if (!payload) return null;
        const json = JSON.parse(Buffer.from(payload, "base64").toString("utf8"));
        return typeof json?.exp === "number" ? json.exp : null;
    } catch {
        return null;
    }
}

function readSessionToken(file: string, logger?: Logger): string | null {
    if (!existsSync(file)) return null;
    try {
        const data = JSON.parse(readFileSync(file, "utf8"));
        const token: unknown = data?.refreshToken;
        if (typeof token !== "string" || !token) return null;

        /* An expired token is worse than no token: steam-user would fail the login
           instead of falling back to the password we already have. */
        const exp = tokenExpiry(token);
        if (exp !== null && exp * 1000 <= Date.now()) {
            logger?.warn?.("dotakit: saved refresh token has expired, falling back to the password");
            return null;
        }
        return token;
    } catch (error) {
        logger?.warn?.("dotakit: could not read %s", file, error);
        return null;
    }
}

function writeSessionToken(file: string, refreshToken: string, logger?: Logger): void {
    try {
        mkdirSync(dirname(file), { recursive: true });
        writeFileSync(file, JSON.stringify({ refreshToken }), "utf8");
    } catch (error) {
        logger?.warn?.("dotakit: could not write %s", file, error);
    }
}

/** Whether the terminal fallback for a Guard prompt is allowed to run. */
function isInteractive(options: LoginOptions): boolean {
    if (options.interactiveGuard !== undefined) return options.interactiveGuard;
    const proc = (globalThis as any).process;
    return Boolean(proc?.stdin?.isTTY && proc?.stdout?.isTTY);
}

/** Reads one Guard code from the terminal. Only called when stdin is a TTY. */
async function askTerminal(prompt: GuardPrompt): Promise<string> {
    const { createInterface } = await import("node:readline/promises");
    const proc = (globalThis as any).process;
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

async function loadSteamUser(): Promise<any> {
    try {
        const mod: any = await import("steam-user");
        return mod?.default ?? mod;
    } catch (cause) {
        throw new SteamError(
            "steam-user is not installed. It is a peer dependency of dotakit: bun add steam-user",
            { cause },
        );
    }
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
export async function login(options: LoginOptions): Promise<SteamSession> {
    const { accountName, sessionFile, logger } = options;
    if (!accountName) throw new SteamError("login() needs an accountName");

    /* Only vet the transport we are about to build: an instance handed in was
       configured by the caller, and second-guessing it would be noise. */
    if (!options.steamUser) doctor({ transport: options.transport });

    const SteamUser = options.SteamUser ?? (options.steamUser ? undefined : await loadSteamUser());
    const user: SteamUserLike = options.steamUser ?? new SteamUser({ autoRelogin: options.autoRelogin ?? true });

    const session = new SteamSession(user, { accountName, sessionFile, logger });
    options.onSession?.(session);

    const savedToken = sessionFile ? readSessionToken(sessionFile, logger) : null;
    const refreshToken = options.refreshToken ?? savedToken ?? undefined;
    if (!refreshToken && !options.password) {
        throw new SteamError("login() needs a password, a refreshToken, or a sessionFile holding one");
    }

    const protocol = connectionProtocol(options.transport, options.SteamUser ?? SteamUser);
    const logOnOptions: Record<string, unknown> = refreshToken
        ? { refreshToken }
        : { accountName, password: options.password };
    if (protocol !== undefined) logOnOptions.protocol = protocol;

    /* A repeat login() on the same instance must not stack handlers from the last one. */
    for (const event of ["loggedOn", "steamGuard", "refreshToken", "error", "disconnected"]) {
        user.removeAllListeners?.(event);
    }

    return new Promise<SteamSession>((resolve, reject) => {
        let settled = false;
        let guardAsked = false;

        const finish = (error?: Error) => {
            if (settled) return;
            settled = true;
            if (error) reject(error);
            else resolve(session);
        };

        user.on("loggedOn", () => {
            logger?.debug?.("dotakit: logged into Steam as %s", accountName);
            finish();
        });

        user.on("refreshToken", (token: string) => {
            if (!token) return;
            if (sessionFile) writeSessionToken(sessionFile, token, logger);
            session.emit("token", token);
        });

        user.on("steamGuard", (domain: string | null, callback: (code: string) => void, lastCodeWrong: boolean) => {
            let answered = false;
            const prompt: GuardPrompt = {
                domain: domain ?? null,
                lastCodeWrong: Boolean(lastCodeWrong),
                submit(code: string) {
                    /* Two answers to one prompt is a rejected code and a locked account. */
                    if (answered) return;
                    answered = true;
                    callback(code);
                },
            };

            session.emit("guard", prompt);

            if (options.guardCode && !guardAsked) {
                guardAsked = true;
                prompt.submit(options.guardCode);
                return;
            }
            guardAsked = true;

            if (options.onGuard) {
                Promise.resolve()
                    .then(() => options.onGuard!(prompt))
                    .then((code) => {
                        if (code) prompt.submit(code);
                        else finish(new GuardRequiredError(prompt.domain, prompt.lastCodeWrong));
                    })
                    .catch((error) => finish(error instanceof Error ? error : new SteamError(String(error))));
                return;
            }

            /* Someone listening on `guard` may still answer; only a login with no way at
               all to produce a code fails here. */
            if (session.listenerCount("guard") > 0) return;

            /* An interactive terminal is a way to produce a code: ask there, so a first
               run needs no wiring. Headless (no TTY) still fails loudly. */
            if (isInteractive(options)) {
                askTerminal(prompt)
                    .then((code) => {
                        if (code) prompt.submit(code);
                        else finish(new GuardRequiredError(prompt.domain, prompt.lastCodeWrong));
                    })
                    .catch((error) => finish(error instanceof Error ? error : new SteamError(String(error))));
                return;
            }

            finish(new GuardRequiredError(prompt.domain, prompt.lastCodeWrong));
        });

        user.on("disconnected", (eresult: number, msg?: string) => {
            const name = eresultName(eresult, options.SteamUser ?? SteamUser);
            session.emit("disconnected", {
                eresult,
                eresultName: name,
                critical: isCriticalEResult(eresult),
                message: msg ?? "",
            } satisfies DisconnectInfo);
        });

        user.on("error", (error: any) => {
            const eresult = Number(error?.eresult ?? 0);
            const wrapped = new SteamLoginError(eresult, eresultName(eresult, options.SteamUser ?? SteamUser), error);
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
