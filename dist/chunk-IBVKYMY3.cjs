"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }



var _chunkR7TOZZ5Xcjs = require('./chunk-R7TOZZ5X.cjs');


var _chunkKNCAQGVIcjs = require('./chunk-KNCAQGVI.cjs');

// src/live/index.ts
var POLL_INTERVAL_MS = 2e4;
var MAX_MISSES = 3;
var MAX_BACKOFF_MS = 6e4;
var DEFAULT_MAX_PAGES = 3;
var watchResultName = (result) => result === null ? "timeout (no GC response)" : _nullishCoalesce(_chunkKNCAQGVIcjs.CMsgSpectateFriendGameResponse_EWatchLiveResult[result], () => ( `result ${result}`));
var Live = class {
  
  
  
  constructor(gc, options = {}) {
    this.gc = gc;
    this.timeoutMs = _nullishCoalesce(options.timeoutMs, () => ( _chunkR7TOZZ5Xcjs.GC_TIMEOUT_MS));
    this.logger = options.logger;
  }
  /**
   * The SourceTV broadcast list, or the state of specific lobbies when `lobbyIds` is set.
   *
   * @returns the games, or an empty array if the GC did not answer.
   */
  async topGames(filter = {}) {
    const reply = await _chunkR7TOZZ5Xcjs.oneShot.call(void 0, this.gc, {
      /* The protobuf has no optional fields — every filter has to be sent. */
      request: [
        8009 /* k_EMsgClientToGCFindTopSourceTVGames */,
        {
          searchKey: _nullishCoalesce(filter.searchKey, () => ( "")),
          leagueId: _nullishCoalesce(filter.leagueId, () => ( 0)),
          heroId: _nullishCoalesce(filter.heroId, () => ( 0)),
          startGame: _nullishCoalesce(filter.startGame, () => ( 0)),
          gameListIndex: _nullishCoalesce(filter.gameListIndex, () => ( 0)),
          lobbyIds: _nullishCoalesce(filter.lobbyIds, () => ( []))
        }
      ],
      response: 8010 /* k_EMsgGCToClientFindTopSourceTVGamesResponse */,
      timeoutMs: this.timeoutMs
    });
    return _nullishCoalesce(_optionalChain([reply, 'optionalAccess', _ => _.gameList]), () => ( []));
  }
  /**
   * Asks where a friend's game is being served.
   *
   * @param live `true` asks to watch in real time, which needs Dota Plus and otherwise
   *   fails with `ERROR_NO_PLUS`. `false` is the delayed broadcast every friend can see —
   *   worth retrying with on a subscription refusal.
   */
  async spectateFriend(steamId64, options = {}) {
    const reply = await _chunkR7TOZZ5Xcjs.oneShot.call(void 0, this.gc, {
      request: [7073 /* k_EMsgGCSpectateFriendGame */, { steamId: steamId64, live: _nullishCoalesce(options.live, () => ( true)) }],
      response: 7074 /* k_EMsgGCSpectateFriendGameResponse */,
      timeoutMs: this.timeoutMs
    });
    if (!reply) return { ok: false, result: null, resultName: watchResultName(null) };
    if (!reply.serverSteamid || reply.serverSteamid === "0") {
      const result = _nullishCoalesce(reply.watchLiveResult, () => ( null));
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
  async findGameByServerId(serverSteamId, options = {}) {
    const maxPages = _nullishCoalesce(options.maxPages, () => ( DEFAULT_MAX_PAGES));
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
  async *watch(target, options = {}) {
    const pollIntervalMs = _nullishCoalesce(options.pollIntervalMs, () => ( POLL_INTERVAL_MS));
    const maxMisses = _nullishCoalesce(options.maxMisses, () => ( MAX_MISSES));
    const maxPages = _nullishCoalesce(options.maxPages, () => ( DEFAULT_MAX_PAGES));
    const wait = _nullishCoalesce(options.sleep, () => ( _chunkR7TOZZ5Xcjs.sleep));
    let lobbyId = null;
    let misses = 0;
    let first = true;
    while (!_optionalChain([options, 'access', _2 => _2.signal, 'optionalAccess', _3 => _3.aborted])) {
      if (!first) {
        const backoff = misses === 0 ? pollIntervalMs : Math.min(MAX_BACKOFF_MS, pollIntervalMs * 2 ** misses);
        await wait(backoff);
        if (_optionalChain([options, 'access', _4 => _4.signal, 'optionalAccess', _5 => _5.aborted])) return;
      }
      first = false;
      let game = null;
      try {
        if (lobbyId) {
          const games = await this.topGames({ lobbyIds: [lobbyId] });
          game = _nullishCoalesce(games.find((entry) => String(entry.lobbyId) === lobbyId), () => ( null));
        } else {
          game = await this.locate(target, maxPages);
        }
      } catch (error) {
        _optionalChain([this, 'access', _6 => _6.logger, 'optionalAccess', _7 => _7.warn, 'optionalCall', _8 => _8("dotakit: live poll failed for %s", target, error)]);
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
  async locate(target, maxPages) {
    const byLobby = await this.topGames({ lobbyIds: [target] });
    const direct = byLobby.find((game) => String(game.lobbyId) === target);
    if (direct) return direct;
    for (let page = 0; page < maxPages; page++) {
      const games = await this.topGames({ startGame: page * 10 });
      if (games.length === 0) break;
      const hit = games.find(
        (game) => String(game.matchId) === target || String(game.serverSteamId) === target
      );
      if (hit) return hit;
    }
    return null;
  }
};







exports.POLL_INTERVAL_MS = POLL_INTERVAL_MS; exports.MAX_MISSES = MAX_MISSES; exports.MAX_BACKOFF_MS = MAX_BACKOFF_MS; exports.DEFAULT_MAX_PAGES = DEFAULT_MAX_PAGES; exports.Live = Live;
//# sourceMappingURL=chunk-IBVKYMY3.cjs.map