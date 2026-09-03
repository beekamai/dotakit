import { EventEmitter } from 'node:events';
import { Dota2GCOptions, Dota2GC } from './gc/index.cjs';
export { AnyListener, ClientMessageId, DOTA2_APPID, DecodeErrorListener, Dota2GCError, GCMessageId, GCRouter, JobAbortedError, JobMessageId, JobOptions, JobResponse, JobTimeoutError, MessageId, MessagePayload, NoDecoderError, NoEncoderError, NotConnectedError, UnexpectedResponseError, UnknownListener, allMessages, clientMessages, gcMessages, jobResponses, messageNames } from './gc/index.cjs';
import { C as CMsgClientWelcome, G as GCConnectionStatus } from './dota_gcmessages_client_guild_events-CyeqbKF6.cjs';
export { E as EDOTAGCMsg, a as EGCBaseClientMsg, b as EGCBaseMsg, c as ESOMsg } from './dota_gcmessages_client_guild_events-CyeqbKF6.cjs';
import { L as Logger } from './types-DJJWbS4o.cjs';
export { B as Builtin, D as DeepPartial, G as GCCallback, M as MessageFns, S as SteamTransport, T as TimerSource } from './types-DJJWbS4o.cjs';
import { GuildOptions, Guild } from './guild/index.cjs';
export { GCOperationError, GC_RESULT_STALE, GC_RESULT_TIMEOUT, GUILD_ROLE_FLAG, GUILD_ROLE_FLAG_MASK, GuildChangeReason, GuildEventMember, GuildIdentity, GuildMember, GuildOp, NoGuildError } from './guild/index.cjs';
import { LiveOptions, Live } from './live/index.cjs';
export { MAX_BACKOFF_MS, MAX_MISSES, POLL_INTERVAL_MS, SpectateOutcome, TopGamesFilter, WatchOptions } from './live/index.cjs';
import { ProfileOptions, Profile } from './profile/index.cjs';
export { DEFAULT_RANK_GAP_MS, RANK_TIERS, Rank, RankTierName, decodeRankTier } from './profile/index.cjs';
import { LoginOptions, SteamSession, GuardPrompt } from './steam/index.cjs';
export { BunTransportError, DisconnectInfo, DoctorReport, ERESULT_RATE_LIMIT, EResultClass, GuardRequiredError, SteamError, SteamLoginError, SteamUserLike, TransportMode, WEBSOCKET13_OVERRIDE, classifyEResult, doctor, eresultName, isCriticalEResult, isRateLimitedEResult, login as steamLogin } from './steam/index.cjs';
export { G as GCLike, a as GCRouterLike, b as GC_TIMEOUT_MS } from './shared-D_5F0rCl.cjs';
import './dota_gcmessages_common-D8GmtIqO.cjs';
import '@bufbuild/protobuf/wire';
import './dota_gcmessages_client_watch-BslSqMnd.cjs';
import './dota_gcmessages_client_guild-Ay1U3kra.cjs';

interface DotaBotOptions {
    logger?: Logger;
    guild?: Omit<GuildOptions, "accountId" | "logger">;
    profile?: ProfileOptions;
    live?: LiveOptions;
}
interface DotaLoginOptions extends LoginOptions, DotaBotOptions {
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
declare class DotaBot extends EventEmitter {
    readonly steam: SteamSession;
    readonly gc: Dota2GC;
    readonly guild: Guild;
    readonly profile: Profile;
    readonly live: Live;
    constructor(steam: SteamSession, gc: Dota2GC, options?: DotaBotOptions);
    /** `true` while a GC session exists. */
    get connected(): boolean;
    /** Tears down the GC session and logs out of Steam. */
    logout(): void;
    on(event: "ready", listener: (bot: DotaBot) => void): this;
    on(event: "gc:up", listener: (welcome: CMsgClientWelcome) => void): this;
    on(event: "gc:down", listener: (status: GCConnectionStatus) => void): this;
    on(event: "guard", listener: (prompt: GuardPrompt) => void): this;
    on(event: "token", listener: (refreshToken: string) => void): this;
    on(event: "error", listener: (error: Error) => void): this;
    private emitError;
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
declare function login(options: DotaLoginOptions): Promise<DotaBot>;
/** Namespace form, so `Dota.login(...)` reads the way the docs say it does. */
declare const Dota: {
    login: typeof login;
    APPID: number;
};

export { Dota, Dota2GC, Dota2GCOptions, DotaBot, type DotaBotOptions, type DotaLoginOptions, GCConnectionStatus, GuardPrompt, Guild, GuildOptions, Live, LiveOptions, Logger, LoginOptions, Profile, ProfileOptions, SteamSession, login };
