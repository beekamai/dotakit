import { describe, expect, test } from "bun:test";

import { Profile, RANK_TIERS, decodeRankTier } from "../src/profile/index";
import { EDOTAGCMsg } from "../src/protobufs/dota_gcmessages_msgid";
import { FakeGC } from "./helpers";

const CARD = EDOTAGCMsg.k_EMsgClientToGCGetProfileCard;

describe("decodeRankTier", () => {
    test("splits the tens into a tier and the units into stars", () => {
        expect(decodeRankTier(11)).toEqual({ tier: "Herald", stars: 1 });
        expect(decodeRankTier(55)).toEqual({ tier: "Legend", stars: 5 });
        expect(decodeRankTier(74)).toEqual({ tier: "Divine", stars: 4 });
    });

    test("Immortal has no stars", () => {
        expect(decodeRankTier(80)).toEqual({ tier: "Immortal", stars: 0 });
        expect(decodeRankTier(85)).toEqual({ tier: "Immortal", stars: 0 });
    });

    test("uncalibrated and missing values decode to no tier", () => {
        for (const value of [0, 9, null, undefined]) {
            expect(decodeRankTier(value)).toEqual({ tier: null, stars: 0 });
        }
    });

    test("a tier the client does not know about is reported as none, not guessed", () => {
        expect(decodeRankTier(95)).toEqual({ tier: null, stars: 0 });
    });

    test("covers every tier in order", () => {
        const tiers = RANK_TIERS.map((_, index) => decodeRankTier((index + 1) * 10 + 3).tier);
        expect(tiers).toEqual([...RANK_TIERS]);
    });
});

describe("Profile", () => {
    test("rank decodes the card the GC returned", async () => {
        const gc = new FakeGC();
        gc.onJob(CARD, (body) => ({ accountId: body.accountId, rankTier: 62, leaderboardRank: 0 }));

        expect(await new Profile(gc).rank(123)).toEqual({
            accountId: 123,
            tier: "Ancient",
            stars: 2,
            rankTier: 62,
            leaderboardRank: 0,
        });
        expect(gc.jobs.at(-1)!.body).toEqual({ accountId: 123 });
    });

    test("keeps the leaderboard position for Immortals", async () => {
        const gc = new FakeGC();
        gc.onJob(CARD, () => ({ rankTier: 80, leaderboardRank: 412 }));

        const rank = await new Profile(gc).rank(1);
        expect(rank).toMatchObject({ tier: "Immortal", stars: 0, leaderboardRank: 412 });
    });

    test("a private or missing profile is null, not a throw", async () => {
        const gc = new FakeGC();
        gc.onJob(CARD, () => {
            throw new Error("job timed out");
        });

        expect(await new Profile(gc).card(1)).toBeNull();
        expect(await new Profile(gc).rank(1)).toBeNull();
    });

    test("ranks walks the list one account at a time", async () => {
        const gc = new FakeGC();
        gc.onJob(CARD, (body) => (body.accountId === 2 ? null : { rankTier: 30 }));

        const ranks = await new Profile(gc).ranks([1, 2, 3], { gapMs: 0 });

        expect(gc.jobs.map((job) => job.body.accountId)).toEqual([1, 2, 3]);
        expect(ranks.map((rank) => rank?.tier ?? null)).toEqual(["Crusader", null, "Crusader"]);
    });

    test("ranks paces itself between accounts", async () => {
        const gc = new FakeGC();
        gc.onJob(CARD, () => ({ rankTier: 30 }));

        const started = Date.now();
        await new Profile(gc).ranks([1, 2, 3], { gapMs: 20 });
        const elapsed = Date.now() - started;

        /* Two gaps for three accounts — no pause after the last one. */
        expect(elapsed).toBeGreaterThanOrEqual(35);
    });
});
