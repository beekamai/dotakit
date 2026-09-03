/* The one-call entry point: log into Steam, get a GC session, and hand back the guild,
   profile and live helpers already wired to it. Everything here is a thin facade over
   the modules — reach past it whenever you need to. */

import { EventEmitter } from "node:events";

import { DOTA2_APPID, Dota2GC, type Dota2GCOptions } from "./gc/client";
import type { GCConnectionStatus } from "./protobufs/gcsdk_gcmessages";
import type { CMsgClientWelcome } from "./protobufs/index";
import type { Logger } from "./gc/types";
import { Guild, type GuildOptions } from "./guild/index";
import { Live, type LiveOptions } from "./live/index";
import { Profile, type ProfileOptions } from "./profile/index";
import { login as steamLogin, type GuardPrompt, type LoginOptions, type SteamSession } from "./steam/index";

export interface DotaBotOptions {
    logger?: Logger;
    guild?: Omit<GuildOptions, "accountId" | "logger">;
    profile?: ProfileOptions;
    live?: LiveOptions;
}

export interface DotaLoginOptions extends LoginOptions, DotaBotOptions {
    /** Passed to the GC client. `autoGamesPlayed` defaults to `true` here. */
    gc?: Dota2GCOptions;
    /**
     * Wait for the first GC session before resolving. `false` returns as soon as Steam
     * is logged in — listen for `gc:up` before using `guild` / `profile` / `live`.
     */
    waitForGC?: boolean;
    /** Deadline for that first GC session. `0` waits forever. */
    gcTimeoutMs?: number;
}

/**
 * A logged-in bot: Steam session, GC session, and the three feature modules.
 *
 * @remarks
 * `gc:down` is routine — the GC drops clients on restarts and queues, and the handshake
 * restarts by itself; `gc:up` fires again for every new session, so re-read your state
 * there rather than assuming the first session lasts.
 */
export class DotaBot extends EventEmitter {
    readonly steam: SteamSession;
    readonly gc: Dota2GC;
    readonly guild: Guild;
    readonly profile: Profile;
    readonly live: Live;

    constructor(steam: SteamSession, gc: Dota2GC, options: DotaBotOptions = {}) {
        super();
        this.steam = steam;
        this.gc = gc;
        this.guild = new Guild(gc, {
            ...options.guild,
            accountId: steam.accountId ?? undefined,
            logger: options.logger,
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
    get connected(): boolean {
        return this.gc.haveGCSession;
    }

    /** Tears down the GC session and logs out of Steam. */
    logout(): void {
        this.gc.destroy();
        this.steam.logoff();
        this.removeAllListeners();
    }

    override on(event: "ready", listener: (bot: DotaBot) => void): this;
    override on(event: "gc:up", listener: (welcome: CMsgClientWelcome) => void): this;
    override on(event: "gc:down", listener: (status: GCConnectionStatus) => void): this;
    override on(event: "guard", listener: (prompt: GuardPrompt) => void): this;
    override on(event: "token", listener: (refreshToken: string) => void): this;
    override on(event: "error", listener: (error: Error) => void): this;
    override on(event: string | symbol, listener: (...args: any[]) => void): this {
        return super.on(event, listener);
    }

    private emitError(error: Error): void {
        /* A missing error listener must not take the process down on a Steam blip. */
        if (this.listenerCount("error") > 0) this.emit("error", error);
    }
}

/**
 * Logs into Steam, opens a Dota GC session and returns a ready bot.
 *
 * @example
 * ```ts
 * const bot = await Dota.login({
 *     accountName: process.env.STEAM_ACCOUNT!,
 *     password: process.env.STEAM_PASSWORD,
 *     sessionFile: "./data/session.json",
 *     // interactive runs get a terminal Guard prompt; servers pass onGuard instead
 * });
 *
 * console.log(await bot.guild.find());
 * bot.logout();
 * ```
 */
export async function login(options: DotaLoginOptions): Promise<DotaBot> {
    const steam = await steamLogin(options);
    const gc = new Dota2GC(steam.user, { autoGamesPlayed: true, logger: options.logger, ...options.gc });
    const bot = new DotaBot(steam, gc, options);

    if (options.waitForGC ?? true) {
        await gc.connect({ timeoutMs: options.gcTimeoutMs ?? 60_000 });
    } else {
        void gc.connect().catch(() => undefined);
    }

    return bot;
}

/** Namespace form, so `Dota.login(...)` reads the way the docs say it does. */
export const Dota = { login, APPID: DOTA2_APPID };

export { DOTA2_APPID } from "./gc/client";
export * from "./gc/index";

export {
    Guild,
    GCOperationError,
    NoGuildError,
    GUILD_ROLE_FLAG,
    GUILD_ROLE_FLAG_MASK,
    GC_RESULT_STALE,
    GC_RESULT_TIMEOUT,
    type GuildChangeReason,
    type GuildEventMember,
    type GuildIdentity,
    type GuildMember,
    type GuildOp,
    type GuildOptions,
} from "./guild/index";

export {
    Profile,
    RANK_TIERS,
    DEFAULT_RANK_GAP_MS,
    decodeRankTier,
    type ProfileOptions,
    type Rank,
    type RankTierName,
} from "./profile/index";

export {
    Live,
    MAX_BACKOFF_MS,
    MAX_MISSES,
    POLL_INTERVAL_MS,
    type LiveOptions,
    type SpectateOutcome,
    type TopGamesFilter,
    type WatchOptions,
} from "./live/index";

export {
    BunTransportError,
    GuardRequiredError,
    SteamError,
    SteamLoginError,
    SteamSession,
    WEBSOCKET13_OVERRIDE,
    classifyEResult,
    ERESULT_RATE_LIMIT,
    isRateLimitedEResult,
    doctor,
    eresultName,
    isCriticalEResult,
    login as steamLogin,
    type DisconnectInfo,
    type DoctorReport,
    type EResultClass,
    type GuardPrompt,
    type LoginOptions,
    type SteamUserLike,
    type TransportMode,
} from "./steam/index";

export { GC_TIMEOUT_MS, type GCLike, type GCRouterLike } from "./shared";
