import { describe, expect, test } from "bun:test";

import { Dota2GC, EDOTAGCMsg, EGCBaseClientMsg, EGCBaseMsg, GCConnectionStatus } from "../../src/gc/index";
import type { Dota2GCOptions } from "../../src/gc/client";
import {
    Dota2GCError,
    JobAbortedError,
    JobTimeoutError,
    NoDecoderError,
    NotConnectedError,
    UnexpectedResponseError,
} from "../../src/gc/errors";
import {
    CMsgClientToGCRequestGuildData,
    CMsgClientToGCRequestGuildDataResponse,
    CMsgClientWelcome,
    CMsgConnectionStatus,
} from "../../src/protobufs/index";
import { FakeSteam, FakeTimers, flush } from "../helpers";

const encode = <T>(codec: { encode(m: T): { finish(): Uint8Array }; fromPartial(o: any): T }, body: any): Buffer =>
    Buffer.from(codec.encode(codec.fromPartial(body)).finish());

const welcomeBytes = () => encode(CMsgClientWelcome, { version: 42 });
const statusBytes = (status: GCConnectionStatus) => encode(CMsgConnectionStatus, { status });

function setup(options: Dota2GCOptions = {}) {
    const steam = new FakeSteam();
    const timers = new FakeTimers();
    const gc = new Dota2GC(steam, { timers, ...options });
    return { steam, timers, gc };
}

describe("send", () => {
    test("encodes a partial body that decodes back to the same values", () => {
        const { steam, gc } = setup();

        gc.send(EDOTAGCMsg.k_EMsgClientToGCRequestGuildData, { guildId: 4242 });

        const sent = steam.lastSent;
        expect(sent.appid).toBe(570);
        expect(sent.msgId).toBe(EDOTAGCMsg.k_EMsgClientToGCRequestGuildData);
        expect(CMsgClientToGCRequestGuildData.decode(sent.payload).guildId).toBe(4242);
    });

    test("throws NotConnectedError when Steam is not logged in", () => {
        const { steam, gc } = setup();
        steam.steamID = undefined;

        expect(() => gc.send(EDOTAGCMsg.k_EMsgClientToGCRequestGuildData, { guildId: 1 })).toThrow(NotConnectedError);
    });
});

describe("hello handshake", () => {
    test("waits helloInitialMs, then backs off by doubling up to the cap", () => {
        const { steam, timers, gc } = setup({ helloInitialMs: 500, helloBaseMs: 1000, helloBackoffMaxMs: 4000 });

        steam.emit("appLaunched", 570);
        expect(timers.pending).toEqual([500]);

        timers.advance(499);
        expect(steam.sent).toHaveLength(0);

        timers.advance(1);
        expect(steam.sent).toHaveLength(1);
        expect(steam.lastSent.msgId).toBe(EGCBaseClientMsg.k_EMsgGCClientHello);
        expect(timers.pending).toEqual([1000]);

        timers.advance(1000);
        expect(steam.sent).toHaveLength(2);
        expect(timers.pending).toEqual([2000]);

        timers.advance(2000);
        expect(steam.sent).toHaveLength(3);
        expect(timers.pending).toEqual([4000]);

        timers.advance(4000);
        expect(timers.pending).toEqual([4000]);
        timers.advance(4000);
        expect(timers.pending).toEqual([4000]);
        expect(steam.sent).toHaveLength(5);

        expect(gc.haveGCSession).toBe(false);
    });

    test("a repeated appLaunched does not start a second timer", () => {
        const { steam, timers } = setup();

        steam.emit("appLaunched", 570);
        steam.emit("appLaunched", 570);

        expect(timers.pending).toEqual([500]);
        timers.advance(500);
        expect(steam.sent).toHaveLength(1);
    });

    test("ignores appLaunched for another appid", () => {
        const { steam, timers } = setup();

        steam.emit("appLaunched", 730);
        expect(timers.pending).toEqual([]);
    });

    test("a transport that re-enters during send does not spawn a second hello loop", () => {
        const steam = new FakeSteam();
        const timers = new FakeTimers();
        new Dota2GC(steam, { timers });

        steam.emit("appLaunched", 570);

        /* Steam reconnect bursts deliver appQuit + appLaunched inline from inside the
           send, while sendHello has already cleared its own timer handle. */
        let burst = true;
        const original = steam.sendToGC.bind(steam);
        steam.sendToGC = (...args: Parameters<typeof original>) => {
            original(...args);
            if (!burst) return;
            burst = false;
            steam.emit("appQuit", 570);
            steam.emit("appLaunched", 570);
        };

        timers.advance(500);

        expect(timers.pending).toHaveLength(1);
    });

    test("keeps retrying when Steam drops mid-handshake", () => {
        const { steam, timers } = setup();

        steam.emit("appLaunched", 570);
        steam.steamID = undefined;
        timers.advance(500);

        expect(steam.sent).toHaveLength(0);
        expect(timers.pending).toEqual([1000]);

        steam.steamID = "76561198000000000";
        timers.advance(1000);
        expect(steam.sent).toHaveLength(1);
    });
});

describe("session state", () => {
    test("emits connected on welcome and stops the handshake", () => {
        const { steam, timers, gc } = setup();
        const welcomes: unknown[] = [];
        gc.on("connected", (w) => welcomes.push(w));

        steam.emit("appLaunched", 570);
        timers.advance(500);
        steam.receive(EGCBaseClientMsg.k_EMsgGCClientWelcome, welcomeBytes());

        expect(welcomes).toHaveLength(1);
        expect(gc.haveGCSession).toBe(true);
        expect(gc.welcome?.version).toBe(42);
        expect(timers.pending).toEqual([]);
    });

    test("emits disconnected and restarts the handshake on a bad status", () => {
        const { steam, timers, gc } = setup();
        const statuses: GCConnectionStatus[] = [];
        gc.on("disconnected", (s) => statuses.push(s));

        steam.emit("appLaunched", 570);
        timers.advance(500);
        steam.receive(EGCBaseClientMsg.k_EMsgGCClientWelcome, welcomeBytes());
        steam.receive(
            EGCBaseClientMsg.k_EMsgGCClientConnectionStatus,
            statusBytes(GCConnectionStatus.GCConnectionStatus_NO_SESSION),
        );

        expect(statuses).toEqual([GCConnectionStatus.GCConnectionStatus_NO_SESSION]);
        expect(gc.haveGCSession).toBe(false);
        expect(timers.pending).toEqual([500]);

        const before = steam.sent.length;
        timers.advance(500);
        expect(steam.sent).toHaveLength(before + 1);
        expect(steam.lastSent.msgId).toBe(EGCBaseClientMsg.k_EMsgGCClientHello);
    });

    test("HAVE_SESSION status is not a disconnect", () => {
        const { steam, timers, gc } = setup();
        let disconnects = 0;
        gc.on("disconnected", () => disconnects++);

        steam.emit("appLaunched", 570);
        timers.advance(500);
        steam.receive(EGCBaseClientMsg.k_EMsgGCClientWelcome, welcomeBytes());
        steam.receive(
            EGCBaseClientMsg.k_EMsgGCClientConnectionStatus,
            statusBytes(GCConnectionStatus.GCConnectionStatus_HAVE_SESSION),
        );

        expect(disconnects).toBe(0);
        expect(gc.haveGCSession).toBe(true);
    });

    test("connected fires again after a reconnect", () => {
        const { steam, timers, gc } = setup();
        let connects = 0;
        gc.on("connected", () => connects++);

        steam.emit("appLaunched", 570);
        timers.advance(500);
        steam.receive(EGCBaseClientMsg.k_EMsgGCClientWelcome, welcomeBytes());
        steam.receive(
            EGCBaseClientMsg.k_EMsgGCClientConnectionStatus,
            statusBytes(GCConnectionStatus.GCConnectionStatus_GC_GOING_DOWN),
        );
        timers.advance(500);
        steam.receive(EGCBaseClientMsg.k_EMsgGCClientWelcome, welcomeBytes());

        expect(connects).toBe(2);
    });

    test("appQuit reports the lost session too", () => {
        const { steam, timers, gc } = setup();
        const statuses: GCConnectionStatus[] = [];
        gc.on("disconnected", (s) => statuses.push(s));

        steam.emit("appLaunched", 570);
        timers.advance(500);
        steam.receive(EGCBaseClientMsg.k_EMsgGCClientWelcome, welcomeBytes());
        steam.emit("appQuit", 570);

        expect(statuses).toEqual([GCConnectionStatus.GCConnectionStatus_NO_SESSION]);
        expect(gc.inApp).toBe(false);
        expect(gc.haveGCSession).toBe(false);
        expect(timers.pending).toEqual([]);
    });

    test("Steam going away clears timers and reports a disconnect", () => {
        const { steam, timers, gc } = setup();
        const statuses: GCConnectionStatus[] = [];
        gc.on("disconnected", (s) => statuses.push(s));

        steam.emit("appLaunched", 570);
        timers.advance(500);
        steam.receive(EGCBaseClientMsg.k_EMsgGCClientWelcome, welcomeBytes());
        steam.emit("disconnected");

        expect(statuses).toEqual([GCConnectionStatus.GCConnectionStatus_NO_SESSION]);
        expect(gc.inApp).toBe(false);
        expect(timers.pending).toEqual([]);
    });
});

describe("disconnect", () => {
    test("reports the session even though gamesPlayed([]) fires appQuit first", () => {
        const { steam, timers, gc } = setup({ autoGamesPlayed: true });
        const statuses: GCConnectionStatus[] = [];

        steam.emit("appLaunched", 570);
        timers.advance(500);
        steam.receive(EGCBaseClientMsg.k_EMsgGCClientWelcome, welcomeBytes());
        gc.on("disconnected", (s) => statuses.push(s));
        gc.disconnect();

        expect(statuses).toEqual([GCConnectionStatus.GCConnectionStatus_NO_SESSION]);
        expect(steam.gamesPlayedCalls.at(-1)).toEqual([]);
        expect(gc.haveGCSession).toBe(false);
        expect(timers.pending).toEqual([]);
    });

    test("is a no-op without a session", () => {
        const { gc } = setup();
        let disconnects = 0;
        gc.on("disconnected", () => disconnects++);

        gc.disconnect();
        gc.disconnect();

        expect(disconnects).toBe(0);
    });
});

describe("connect", () => {
    test("resolves with the welcome and launches the app when asked", async () => {
        const { steam, timers, gc } = setup({ autoGamesPlayed: true });

        const connected = gc.connect({ timeoutMs: 5000 });
        expect(steam.gamesPlayedCalls).toEqual([[570]]);

        timers.advance(500);
        steam.receive(EGCBaseClientMsg.k_EMsgGCClientWelcome, welcomeBytes());

        expect((await connected).version).toBe(42);
    });

    test("resolves immediately when a session already exists", async () => {
        const { steam, timers, gc } = setup();

        steam.emit("appLaunched", 570);
        timers.advance(500);
        steam.receive(EGCBaseClientMsg.k_EMsgGCClientWelcome, welcomeBytes());

        expect((await gc.connect()).version).toBe(42);
    });

    test("two concurrent waiters both resolve on the same welcome", async () => {
        const { steam, timers, gc } = setup();

        const first = gc.connect({ timeoutMs: 5000 });
        const second = gc.connect({ timeoutMs: 5000 });

        steam.emit("appLaunched", 570);
        timers.advance(500);
        steam.receive(EGCBaseClientMsg.k_EMsgGCClientWelcome, welcomeBytes());

        expect((await first).version).toBe(42);
        expect((await second).version).toBe(42);
    });

    test("rejects when autoGamesPlayed has no transport support", async () => {
        const steam = new FakeSteam();
        (steam as { gamesPlayed?: unknown }).gamesPlayed = undefined;
        const gc = new Dota2GC(steam, { timers: new FakeTimers(), autoGamesPlayed: true });

        await expect(gc.connect()).rejects.toThrow(/gamesPlayed/);
    });

    test("rejects on its own timeout", async () => {
        const { timers, gc } = setup();

        const connected = gc.connect({ timeoutMs: 1000 });
        timers.advance(1000);

        await expect(connected).rejects.toThrow(/Timed out/);
    });
});

describe("sendJob", () => {
    const request = EDOTAGCMsg.k_EMsgClientToGCRequestGuildData;
    const response = EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse;

    test("resolves with the decoded reply", async () => {
        const { steam, gc } = setup();

        const job = gc.sendJob(request, { guildId: 7 });
        await flush();
        steam.reply(0, response, encode(CMsgClientToGCRequestGuildDataResponse, { result: 3 }));

        expect((await job).result).toBe(3);
    });

    test("rejects with NoDecoderError carrying the raw reply", async () => {
        const { steam, gc } = setup();
        const raw = Buffer.from([1, 2, 3, 4]);

        /* A request with no known response id, so the reply id is what gets looked up. */
        const job = gc.sendJob(EGCBaseMsg.k_EMsgGCLeaveParty, {});
        await flush();
        steam.reply(0, 999_999, raw);

        const error = await job.catch((e) => e);
        expect(error).toBeInstanceOf(NoDecoderError);
        expect((error as NoDecoderError).msgId).toBe(999_999);
        expect((error as NoDecoderError).payload).toEqual(raw);
    });

    test("refuses a reply whose id is not the expected response", async () => {
        const { steam, gc } = setup();
        const raw = Buffer.from([1, 2, 3, 4]);

        const job = gc.sendJob(request, { guildId: 7 });
        await flush();
        steam.reply(0, 999_999, raw);

        const error = await job.catch((e) => e);
        expect(error).toBeInstanceOf(UnexpectedResponseError);
        expect((error as UnexpectedResponseError).expectedId).toBe(response);
        expect((error as UnexpectedResponseError).msgId).toBe(999_999);
        expect((error as UnexpectedResponseError).payload).toEqual(raw);
    });

    test("an echo of the request id is refused, not decoded as the response", async () => {
        const { steam, gc } = setup();

        const job = gc.sendJob(request, { guildId: 7 });
        await flush();
        /* Decoding this with the response codec would yield result: undefined and
           look like a successful, empty answer. */
        steam.reply(0, request, encode(CMsgClientToGCRequestGuildData, { guildId: 7 }));

        expect(await job.catch((e) => e)).toBeInstanceOf(UnexpectedResponseError);
    });

    test("wraps a malformed reply in a Dota2GCError", async () => {
        const { steam, gc } = setup();

        const job = gc.sendJob(request, { guildId: 7 });
        await flush();
        steam.reply(0, response, Buffer.from([0x0a, 0x7f, 0x01]));

        const error = await job.catch((e) => e);
        expect(error).toBeInstanceOf(Dota2GCError);
        expect(error).not.toBeInstanceOf(NoDecoderError);
        expect((error as Error).message).toMatch(/Failed to decode/);
    });

    test("in-flight jobs reject as soon as the GC session is lost", async () => {
        const { steam, timers, gc } = setup({ jobTimeoutMs: 0 });

        steam.emit("appLaunched", 570);
        timers.advance(500);
        steam.receive(EGCBaseClientMsg.k_EMsgGCClientWelcome, welcomeBytes());

        const settled = gc.sendJob(request, { guildId: 7 }).catch((e) => e);
        await flush();
        steam.receive(
            EGCBaseClientMsg.k_EMsgGCClientConnectionStatus,
            statusBytes(GCConnectionStatus.GCConnectionStatus_NO_SESSION),
        );

        expect(await settled).toBeInstanceOf(NotConnectedError);
    });

    test("rejects a nonsense timeout instead of silently waiting forever", async () => {
        const { gc } = setup();

        await expect(gc.sendJob(request, { guildId: 7 }, { timeoutMs: Number.NaN })).rejects.toThrow(/finite/);
        await expect(gc.sendJob(request, { guildId: 7 }, { timeoutMs: -1 })).rejects.toThrow(/finite/);
    });

    test("decodes with responseId when told to", async () => {
        const { steam, gc } = setup();

        const job = gc.sendJob(request, { guildId: 7 }, { responseId: response });
        await flush();
        steam.reply(0, 999_999, encode(CMsgClientToGCRequestGuildDataResponse, { result: 5 }));

        expect((await job as { result: number }).result).toBe(5);
    });

    test("rejects with JobTimeoutError when the GC stays silent", async () => {
        const { timers, gc } = setup({ jobTimeoutMs: 10_000 });

        const job = gc.sendJob(request, { guildId: 7 });
        const settled = job.catch((e) => e);
        timers.advance(10_000);

        expect(await settled).toBeInstanceOf(JobTimeoutError);
    });

    test("rejects with JobAbortedError when the signal fires", async () => {
        const { gc } = setup();
        const controller = new AbortController();

        const settled = gc.sendJob(request, { guildId: 7 }, { signal: controller.signal }).catch((e) => e);
        controller.abort(new Error("caller gave up"));

        const error = await settled;
        expect(error).toBeInstanceOf(JobAbortedError);
        expect((error as JobAbortedError).cause).toBeInstanceOf(Error);
    });

    test("rejects immediately on an already-aborted signal", async () => {
        const { steam, gc } = setup();

        const settled = gc
            .sendJob(request, { guildId: 7 }, { signal: AbortSignal.abort() })
            .catch((e) => e);

        expect(await settled).toBeInstanceOf(JobAbortedError);
        expect(steam.sent).toHaveLength(0);
    });

    test("a late reply after a timeout is ignored, not a crash", async () => {
        const { steam, timers, gc } = setup({ jobTimeoutMs: 1000 });

        const settled = gc.sendJob(request, { guildId: 7 }).catch((e) => e);
        await flush();
        timers.advance(1000);
        expect(await settled).toBeInstanceOf(JobTimeoutError);

        steam.reply(0, response, encode(CMsgClientToGCRequestGuildDataResponse, { result: 1 }));
    });
});

describe("sendJobRaw", () => {
    test("resolves with the raw reply bytes", async () => {
        const { steam, gc } = setup();
        const raw = Buffer.from([9, 8, 7]);

        const job = gc.sendJobRaw(EDOTAGCMsg.k_EMsgClientToGCRequestGuildData, Buffer.from([]));
        await flush();
        steam.reply(0, 123_456, raw);

        expect(await job).toEqual(raw);
    });
});

describe("destroy", () => {
    test("settles a connect() that would otherwise hang forever", async () => {
        const { gc } = setup();

        const settled = gc.connect().catch((e) => e);
        gc.destroy();

        expect(await settled).toBeInstanceOf(NotConnectedError);
    });

    test("refuses to send afterwards", () => {
        const { gc } = setup();
        gc.destroy();

        expect(() => gc.send(EDOTAGCMsg.k_EMsgClientToGCRequestGuildData, { guildId: 1 })).toThrow(NotConnectedError);
    });

    test("detaches transport listeners and rejects in-flight jobs", async () => {
        const { steam, gc } = setup();

        const settled = gc.sendJob(EDOTAGCMsg.k_EMsgClientToGCRequestGuildData, { guildId: 1 }).catch((e) => e);
        await flush();
        gc.destroy();

        expect(await settled).toBeInstanceOf(NotConnectedError);
        expect(steam.listenerCount("receivedFromGC")).toBe(0);
        expect(steam.listenerCount("appLaunched")).toBe(0);
    });
});
