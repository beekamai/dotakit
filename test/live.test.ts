import { describe, expect, test } from "bun:test";

import { Live } from "../src/live/index";
import { EDOTAGCMsg } from "../src/protobufs/dota_gcmessages_msgid";
import { FakeGC } from "./helpers";

const FIND_TOP = EDOTAGCMsg.k_EMsgClientToGCFindTopSourceTVGames;
const FIND_TOP_RESPONSE = EDOTAGCMsg.k_EMsgGCToClientFindTopSourceTVGamesResponse;
const SPECTATE = EDOTAGCMsg.k_EMsgGCSpectateFriendGame;
const SPECTATE_RESPONSE = EDOTAGCMsg.k_EMsgGCSpectateFriendGameResponse;

const game = (over: Record<string, unknown> = {}) => ({
    lobbyId: "lobby-1",
    matchId: "match-1",
    serverSteamId: "server-1",
    gameTime: 600,
    radiantLead: 1000,
    radiantScore: 5,
    direScore: 3,
    delay: 120,
    ...over,
});

/** Never actually waits — the watch loop's backoff is not what these tests measure. */
const noSleep = async () => {};

describe("topGames", () => {
    test("fills in every filter the protobuf requires", async () => {
        const gc = new FakeGC();
        gc.onSend(FIND_TOP, () => [FIND_TOP_RESPONSE, { gameList: [game()] }]);

        const games = await new Live(gc, { timeoutMs: 50 }).topGames({ lobbyIds: ["lobby-1"] });

        expect(games).toHaveLength(1);
        expect(gc.sent.at(-1)!.body).toEqual({
            searchKey: "",
            leagueId: 0,
            heroId: 0,
            startGame: 0,
            gameListIndex: 0,
            lobbyIds: ["lobby-1"],
        });
    });

    test("an unanswered request is an empty list, not a hang", async () => {
        expect(await new Live(new FakeGC(), { timeoutMs: 10 }).topGames()).toEqual([]);
    });
});

describe("spectateFriend", () => {
    test("returns the server steam id", async () => {
        const gc = new FakeGC();
        gc.onSend(SPECTATE, (body) => {
            expect(body).toEqual({ steamId: "76561198000000000", live: true });
            return [SPECTATE_RESPONSE, { serverSteamid: "server-1", watchLiveResult: 0 }];
        });

        expect(await new Live(gc, { timeoutMs: 50 }).spectateFriend("76561198000000000")).toEqual({
            ok: true,
            serverSteamId: "server-1",
        });
    });

    test("names the refusal so the two Dota Plus cases can be told apart", async () => {
        const gc = new FakeGC();
        gc.onSend(SPECTATE, () => [SPECTATE_RESPONSE, { serverSteamid: "0", watchLiveResult: 2 }]);

        expect(await new Live(gc, { timeoutMs: 50 }).spectateFriend("1", { live: true })).toEqual({
            ok: false,
            result: 2,
            resultName: "ERROR_NO_PLUS",
        });
    });

    test("passes live: false through for the delayed broadcast", async () => {
        const gc = new FakeGC();
        gc.onSend(SPECTATE, () => [SPECTATE_RESPONSE, { serverSteamid: "server-1", watchLiveResult: 0 }]);

        await new Live(gc, { timeoutMs: 50 }).spectateFriend("1", { live: false });
        expect(gc.sent.at(-1)!.body.live).toBe(false);
    });

    test("no answer is reported as a timeout, not as a refusal", async () => {
        expect(await new Live(new FakeGC(), { timeoutMs: 10 }).spectateFriend("1")).toEqual({
            ok: false,
            result: null,
            resultName: "timeout (no GC response)",
        });
    });
});

describe("findGameByServerId", () => {
    test("walks the pages until the server turns up", async () => {
        const gc = new FakeGC();
        gc.onSend(FIND_TOP, (body) =>
            body.startGame === 10
                ? [FIND_TOP_RESPONSE, { gameList: [game({ serverSteamId: "wanted" })] }]
                : [FIND_TOP_RESPONSE, { gameList: [game({ serverSteamId: "other" })] }],
        );

        const hit = await new Live(gc, { timeoutMs: 50 }).findGameByServerId("wanted");
        expect(hit?.serverSteamId).toBe("wanted");
        expect(gc.sent.map((message) => message.body.startGame)).toEqual([0, 10]);
    });

    test("stops at an empty page instead of burning every request", async () => {
        const gc = new FakeGC();
        gc.onSend(FIND_TOP, () => [FIND_TOP_RESPONSE, { gameList: [] }]);

        expect(await new Live(gc, { timeoutMs: 50 }).findGameByServerId("wanted")).toBeNull();
        expect(gc.sent).toHaveLength(1);
    });

    test("gives up after maxPages", async () => {
        const gc = new FakeGC();
        gc.onSend(FIND_TOP, () => [FIND_TOP_RESPONSE, { gameList: [game({ serverSteamId: "other" })] }]);

        expect(await new Live(gc, { timeoutMs: 50 }).findGameByServerId("wanted", { maxPages: 2 })).toBeNull();
        expect(gc.sent).toHaveLength(2);
    });
});

describe("watch", () => {
    test("yields a state per poll and stops when the game leaves the list", async () => {
        const gc = new FakeGC();
        let tick = 0;
        gc.onSend(FIND_TOP, () => {
            tick += 1;
            /* Two updates, then the game is over and no longer listed. */
            if (tick > 2) return [FIND_TOP_RESPONSE, { gameList: [] }];
            return [FIND_TOP_RESPONSE, { gameList: [game({ radiantScore: tick })] }];
        });

        const states = [];
        for await (const state of new Live(gc, { timeoutMs: 50 }).watch("lobby-1", { sleep: noSleep })) {
            states.push(state.radiantScore);
        }

        expect(states).toEqual([1, 2]);
        /* Two hits plus MAX_MISSES empty polls. */
        expect(gc.sent).toHaveLength(5);
    });

    test("finds a game by match id and then follows it by lobby id", async () => {
        const gc = new FakeGC();
        let polls = 0;
        gc.onSend(FIND_TOP, (body) => {
            polls += 1;
            if (polls === 1) {
                /* The lobby filter cannot match a match id — the page walk finds it. */
                expect(body.lobbyIds).toEqual(["match-1"]);
                return [FIND_TOP_RESPONSE, { gameList: [] }];
            }
            return [FIND_TOP_RESPONSE, { gameList: [game()] }];
        });

        const iterator = new Live(gc, { timeoutMs: 50 }).watch("match-1", { sleep: noSleep });
        const first = await iterator.next();
        expect(first.value?.matchId).toBe("match-1");

        const second = await iterator.next();
        /* Now that the lobby id is known, the poll is a single filtered request. */
        expect(gc.sent.at(-1)!.body.lobbyIds).toEqual(["lobby-1"]);
        expect(second.done).toBe(false);

        await iterator.return(undefined as never);
    });

    test("gives up after maxMisses consecutive empty polls", async () => {
        const gc = new FakeGC();
        gc.onSend(FIND_TOP, () => [FIND_TOP_RESPONSE, { gameList: [] }]);

        const states = [];
        for await (const state of new Live(gc, { timeoutMs: 50 }).watch("lobby-1", {
            sleep: noSleep,
            maxMisses: 2,
            maxPages: 1,
        })) {
            states.push(state);
        }

        expect(states).toEqual([]);
        /* Two attempts, each a lobby lookup plus one page of the top list. */
        expect(gc.sent).toHaveLength(4);
    });

    test("backs off further after each miss", async () => {
        const gc = new FakeGC();
        gc.onSend(FIND_TOP, () => [FIND_TOP_RESPONSE, { gameList: [] }]);

        const waits: number[] = [];
        for await (const _ of new Live(gc, { timeoutMs: 50 }).watch("lobby-1", {
            sleep: async (ms) => void waits.push(ms),
            pollIntervalMs: 100,
            maxPages: 1,
        })) {
            /* never reached — the game is not listed */
        }

        expect(waits).toEqual([200, 400]);
    });

    test("an abort signal ends the iteration", async () => {
        const gc = new FakeGC();
        gc.onSend(FIND_TOP, () => [FIND_TOP_RESPONSE, { gameList: [game()] }]);

        const controller = new AbortController();
        const states = [];
        for await (const state of new Live(gc, { timeoutMs: 50 }).watch("lobby-1", {
            sleep: noSleep,
            signal: controller.signal,
        })) {
            states.push(state);
            controller.abort();
        }

        expect(states).toHaveLength(1);
    });
});
