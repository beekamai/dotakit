import { C as CSourceTVGameSmall } from '../dota_gcmessages_client_watch-BFQsCi0j.js';
import { L as Logger } from '../types-DJJWbS4o.js';
import { G as GCLike } from '../shared-D_5F0rCl.js';
import '@bufbuild/protobuf/wire';
import '../dota_gcmessages_common-D8GmtIqO.js';

/** How often `watch()` asks the GC for a new snapshot. The net-worth lead moves slowly. */
declare const POLL_INTERVAL_MS = 20000;
/** Consecutive misses before `watch()` decides the game is over and stops. */
declare const MAX_MISSES = 3;
/** Ceiling for the doubling delay applied after a miss. */
declare const MAX_BACKOFF_MS = 60000;
/** Pages of the broadcast list `findGameByServerId` walks; 10 games per page. */
declare const DEFAULT_MAX_PAGES = 3;
type SpectateOutcome = {
    ok: true;
    serverSteamId: string;
}
/** `result` is `null` when the GC did not answer at all. */
 | {
    ok: false;
    result: number | null;
    resultName: string;
};
interface TopGamesFilter {
    searchKey?: string;
    leagueId?: number;
    heroId?: number;
    /** Offset into the broadcast list; the GC returns ten games from here. */
    startGame?: number;
    gameListIndex?: number;
    /** Ask for specific lobbies instead of the top list. */
    lobbyIds?: string[];
}
interface WatchOptions {
    pollIntervalMs?: number;
    maxMisses?: number;
    maxPages?: number;
    /** Injectable delay, so tests do not wait out real poll intervals. */
    sleep?: (ms: number) => Promise<void>;
    signal?: AbortSignal;
}
interface LiveOptions {
    timeoutMs?: number;
    logger?: Logger;
}
/** Live match lookups over a GC session. */
declare class Live {
    private readonly gc;
    private readonly timeoutMs;
    private readonly logger?;
    constructor(gc: GCLike, options?: LiveOptions);
    /**
     * The SourceTV broadcast list, or the state of specific lobbies when `lobbyIds` is set.
     *
     * @returns the games, or an empty array if the GC did not answer.
     */
    topGames(filter?: TopGamesFilter): Promise<CSourceTVGameSmall[]>;
    /**
     * Asks where a friend's game is being served.
     *
     * @param live `true` asks to watch in real time, which needs Dota Plus and otherwise
     *   fails with `ERROR_NO_PLUS`. `false` is the delayed broadcast every friend can see —
     *   worth retrying with on a subscription refusal.
     */
    spectateFriend(steamId64: string, options?: {
        live?: boolean;
    }): Promise<SpectateOutcome>;
    /**
     * Walks the broadcast list looking for one server.
     *
     * `spectateFriend` hands back a server steam id, but the list can only be filtered by
     * lobby id, so the pages are scanned instead. Only the top games are listed, so a
     * plain pub match is usually not found — that is the GC's limit, not a bug here.
     */
    findGameByServerId(serverSteamId: string, options?: {
        maxPages?: number;
    }): Promise<CSourceTVGameSmall | null>;
    /**
     * Follows one game, yielding a fresh state every poll until it ends.
     *
     * @param target a match id, a server steam id, or a lobby id — whichever you have.
     * @yields the game state as the GC reports it. Mind `delay`: the broadcast is behind
     *   the real match, so a state describes the past, not this second.
     *
     * @remarks
     * A lobby id is looked up directly; anything else is searched for in the broadcast
     * list. Once the game has been seen its lobby id is reused, which is one request per
     * poll instead of a page walk. Misses back off by doubling from the poll interval up
     * to {@link MAX_BACKOFF_MS}, and {@link MAX_MISSES} misses in a row end the iteration —
     * a finished game simply stops being listed.
     *
     * @example
     * ```ts
     * for await (const state of bot.live.watch(matchId)) {
     *     console.log(state.radiantScore, state.direScore, state.radiantLead);
     * }
     * ```
     */
    watch(target: string, options?: WatchOptions): AsyncGenerator<CSourceTVGameSmall, void, void>;
    /** Finds a game by lobby id, match id or server steam id — in that order of cost. */
    private locate;
}

export { DEFAULT_MAX_PAGES, Live, type LiveOptions, MAX_BACKOFF_MS, MAX_MISSES, POLL_INTERVAL_MS, type SpectateOutcome, type TopGamesFilter, type WatchOptions };
