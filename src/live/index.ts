/* Live matches: the SourceTV broadcast list, spectating a friend, and following one
   game until it ends.

   What the GC will and will not give you is worth knowing before you build on this.
   `FindTopSourceTVGames` returns the top ~100 broadcasts; an ordinary pub match is not
   in it. `SpectateFriendGame` answers with a *server* steam id, while the broadcast list
   filters by *lobby* id — the two cannot be matched directly, hence the paging search in
   `findGameByServerId`. So a random pub game's live state is generally not reachable
   from here, with or without Dota Plus. */

import { EDOTAGCMsg } from "../protobufs/dota_gcmessages_msgid";
import {
    CMsgSpectateFriendGameResponse_EWatchLiveResult,
    type CMsgGCToClientFindTopSourceTVGamesResponse,
    type CMsgSpectateFriendGameResponse,
    type CSourceTVGameSmall,
} from "../protobufs/index";
import type { Logger } from "../gc/types";
import { GC_TIMEOUT_MS, oneShot, sleep, type GCLike } from "../shared";

/** How often `watch()` asks the GC for a new snapshot. The net-worth lead moves slowly. */
export const POLL_INTERVAL_MS = 20_000;
/** Consecutive misses before `watch()` decides the game is over and stops. */
export const MAX_MISSES = 3;
/** Ceiling for the doubling delay applied after a miss. */
export const MAX_BACKOFF_MS = 60_000;
/** Pages of the broadcast list `findGameByServerId` walks; 10 games per page. */
export const DEFAULT_MAX_PAGES = 3;

export type SpectateOutcome =
    | { ok: true; serverSteamId: string }
    /** `result` is `null` when the GC did not answer at all. */
    | { ok: false; result: number | null; resultName: string };

export interface TopGamesFilter {
    searchKey?: string;
    leagueId?: number;
    heroId?: number;
    /** Offset into the broadcast list; the GC returns ten games from here. */
    startGame?: number;
    gameListIndex?: number;
    /** Ask for specific lobbies instead of the top list. */
    lobbyIds?: string[];
}

export interface WatchOptions {
    pollIntervalMs?: number;
    maxMisses?: number;
    maxPages?: number;
    /** Injectable delay, so tests do not wait out real poll intervals. */
    sleep?: (ms: number) => Promise<void>;
    signal?: AbortSignal;
}

export interface LiveOptions {
    timeoutMs?: number;
    logger?: Logger;
}

const watchResultName = (result: number | null): string =>
    result === null ? "timeout (no GC response)" : (CMsgSpectateFriendGameResponse_EWatchLiveResult[result] ?? `result ${result}`);

/** Live match lookups over a GC session. */
export class Live {
    private readonly gc: GCLike;
    private readonly timeoutMs: number;
    private readonly logger?: Logger;

    constructor(gc: GCLike, options: LiveOptions = {}) {
        this.gc = gc;
        this.timeoutMs = options.timeoutMs ?? GC_TIMEOUT_MS;
        this.logger = options.logger;
    }

    /**
     * The SourceTV broadcast list, or the state of specific lobbies when `lobbyIds` is set.
     *
     * @returns the games, or an empty array if the GC did not answer.
     */
    async topGames(filter: TopGamesFilter = {}): Promise<CSourceTVGameSmall[]> {
        const reply = await oneShot<CMsgGCToClientFindTopSourceTVGamesResponse>(this.gc, {
            /* The protobuf has no optional fields — every filter has to be sent. */
            request: [
                EDOTAGCMsg.k_EMsgClientToGCFindTopSourceTVGames,
                {
                    searchKey: filter.searchKey ?? "",
                    leagueId: filter.leagueId ?? 0,
                    heroId: filter.heroId ?? 0,
                    startGame: filter.startGame ?? 0,
                    gameListIndex: filter.gameListIndex ?? 0,
                    lobbyIds: filter.lobbyIds ?? [],
                },
            ],
            response: EDOTAGCMsg.k_EMsgGCToClientFindTopSourceTVGamesResponse,
            timeoutMs: this.timeoutMs,
        });
        return reply?.gameList ?? [];
    }

    /**
     * Asks where a friend's game is being served.
     *
     * @param live `true` asks to watch in real time, which needs Dota Plus and otherwise
     *   fails with `ERROR_NO_PLUS`. `false` is the delayed broadcast every friend can see —
     *   worth retrying with on a subscription refusal.
     */
    async spectateFriend(steamId64: string, options: { live?: boolean } = {}): Promise<SpectateOutcome> {
        const reply = await oneShot<CMsgSpectateFriendGameResponse>(this.gc, {
            request: [EDOTAGCMsg.k_EMsgGCSpectateFriendGame, { steamId: steamId64, live: options.live ?? true }],
            response: EDOTAGCMsg.k_EMsgGCSpectateFriendGameResponse,
            timeoutMs: this.timeoutMs,
        });
        if (!reply) return { ok: false, result: null, resultName: watchResultName(null) };
        if (!reply.serverSteamid || reply.serverSteamid === "0") {
            const result = reply.watchLiveResult ?? null;
            return { ok: false, result, resultName: watchResultName(result) };
        }
        return { ok: true, serverSteamId: reply.serverSteamid };
    }

    /**
     * Walks the broadcast list looking for one server.
     *
     * `spectateFriend` hands back a server steam id, but the list can only be filtered by
     * lobby id, so the pages are scanned instead. Only the top games are listed, so a
     * plain pub match is usually not found — that is the GC's limit, not a bug here.
     */
    async findGameByServerId(serverSteamId: string, options: { maxPages?: number } = {}): Promise<CSourceTVGameSmall | null> {
        const maxPages = options.maxPages ?? DEFAULT_MAX_PAGES;
        for (let page = 0; page < maxPages; page++) {
            const games = await this.topGames({ startGame: page * 10 });
            if (games.length === 0) break;
            const hit = games.find((game) => String(game.serverSteamId) === serverSteamId);
            if (hit) return hit;
        }
        return null;
    }

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
    async *watch(target: string, options: WatchOptions = {}): AsyncGenerator<CSourceTVGameSmall, void, void> {
        const pollIntervalMs = options.pollIntervalMs ?? POLL_INTERVAL_MS;
        const maxMisses = options.maxMisses ?? MAX_MISSES;
        const maxPages = options.maxPages ?? DEFAULT_MAX_PAGES;
        const wait = options.sleep ?? sleep;

        let lobbyId: string | null = null;
        let misses = 0;
        let first = true;

        while (!options.signal?.aborted) {
            if (!first) {
                /* Steady interval while the game is live; doubling delay while it is not. */
                const backoff = misses === 0 ? pollIntervalMs : Math.min(MAX_BACKOFF_MS, pollIntervalMs * 2 ** misses);
                await wait(backoff);
                if (options.signal?.aborted) return;
            }
            first = false;

            let game: CSourceTVGameSmall | null = null;
            try {
                if (lobbyId) {
                    const games = await this.topGames({ lobbyIds: [lobbyId] });
                    game = games.find((entry) => String(entry.lobbyId) === lobbyId) ?? null;
                } else {
                    game = await this.locate(target, maxPages);
                }
            } catch (error) {
                this.logger?.warn?.("dotakit: live poll failed for %s", target, error);
            }

            if (!game) {
                misses += 1;
                if (misses >= maxMisses) return;
                continue;
            }

            misses = 0;
            if (game.lobbyId && game.lobbyId !== "0") lobbyId = String(game.lobbyId);
            yield game;
        }
    }

    /** Finds a game by lobby id, match id or server steam id — in that order of cost. */
    private async locate(target: string, maxPages: number): Promise<CSourceTVGameSmall | null> {
        const byLobby = await this.topGames({ lobbyIds: [target] });
        const direct = byLobby.find((game) => String(game.lobbyId) === target);
        if (direct) return direct;

        for (let page = 0; page < maxPages; page++) {
            const games = await this.topGames({ startGame: page * 10 });
            if (games.length === 0) break;
            const hit = games.find(
                (game) => String(game.matchId) === target || String(game.serverSteamId) === target,
            );
            if (hit) return hit;
        }
        return null;
    }
}
