import { describe, expect, test } from "bun:test";

import { EDOTAGCMsg, GCRouter } from "../src/index";
import { CMsgClientToGCRequestGuildDataResponse } from "../src/protobufs/index";

const encoded = (result: number) =>
    Buffer.from(
        CMsgClientToGCRequestGuildDataResponse.encode(
            CMsgClientToGCRequestGuildDataResponse.fromPartial({ result }),
        ).finish(),
    );

describe("GCRouter", () => {
    test("routes a known message decoded to its id listener", () => {
        const router = new GCRouter();
        const seen: unknown[] = [];
        router.on(EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse, (payload) => seen.push(payload.result));

        router.route(EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse, encoded(2));

        expect(seen).toEqual([2]);
    });

    test("off removes a listener", () => {
        const router = new GCRouter();
        let calls = 0;
        const listener = () => calls++;

        router.on(EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse, listener);
        router.route(EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse, encoded(1));
        router.off(EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse, listener);
        router.route(EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse, encoded(1));

        expect(calls).toBe(1);
    });

    test("emits unknown with the raw payload instead of dropping it", () => {
        const router = new GCRouter();
        const raw = Buffer.from([5, 6, 7]);
        const seen: Array<[number, Buffer]> = [];
        router.on("unknown", (msgId, payload) => seen.push([msgId, payload]));

        router.route(999_999, raw);

        expect(seen).toEqual([[999_999, raw]]);
    });

    test("onAny sees both decoded and undecodable traffic", () => {
        const router = new GCRouter();
        const seen: number[] = [];
        router.onAny((msgId) => seen.push(msgId));

        router.route(EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse, encoded(1));
        router.route(999_999, Buffer.from([0]));

        expect(seen).toEqual([EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse, 999_999]);
    });

    test("offAny stops the any-listener", () => {
        const router = new GCRouter();
        let calls = 0;
        const listener = () => calls++;

        router.onAny(listener);
        router.route(999_999, Buffer.from([0]));
        router.offAny(listener);
        router.route(999_999, Buffer.from([0]));

        expect(calls).toBe(1);
    });

    test("a throwing onAny listener does not stop routing", () => {
        const router = new GCRouter();
        const seen: number[] = [];
        router.onAny(() => {
            throw new Error("boom");
        });
        router.onAny((msgId) => seen.push(msgId));
        router.on(EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse, () => seen.push(-1));

        router.route(EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse, encoded(1));

        expect(seen).toEqual([EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse, -1]);
    });

    test("a malformed payload becomes decodeError, never a throw", () => {
        const router = new GCRouter();
        const seen: number[] = [];
        router.on("decodeError", (msgId) => seen.push(msgId));

        /* Field 1 declared as a length-delimited value longer than the buffer. */
        const malformed = Buffer.from([0x0a, 0x7f, 0x01]);
        expect(() => router.route(EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse, malformed)).not.toThrow();

        expect(seen).toEqual([EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse]);
    });

    test("a throwing id listener does not escape route()", () => {
        const router = new GCRouter();
        router.on(EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse, () => {
            throw new Error("consumer bug");
        });

        expect(() => router.route(EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse, encoded(1))).not.toThrow();
    });

    test("a throwing unknown listener does not escape route()", () => {
        const router = new GCRouter();
        router.on("unknown", () => {
            throw new Error("consumer bug");
        });

        expect(() => router.route(999_999, Buffer.from([0]))).not.toThrow();
    });

    test("hasDecoder and messageName describe an id", () => {
        const router = new GCRouter();

        expect(router.hasDecoder(EDOTAGCMsg.k_EMsgGCWatchGame)).toBe(true);
        expect(router.hasDecoder(999_999)).toBe(false);
        expect(router.messageName(EDOTAGCMsg.k_EMsgGCWatchGame)).toBe("k_EMsgGCWatchGame");
        expect(router.messageName(999_999)).toBeUndefined();
    });
});
