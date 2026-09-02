import { describe, expect, test } from "bun:test";

import {
    GCOperationError,
    GC_RESULT_STALE,
    GC_RESULT_TIMEOUT,
    GUILD_ROLE_FLAG,
    Guild,
    NoGuildError,
} from "../src/guild/index";
import { EDOTAGCMsg } from "../src/protobufs/dota_gcmessages_msgid";
import { FakeGC } from "./helpers";

const GUILD_ID = 42;
const BOT_ACCOUNT = 100;

const ROLES = [
    { roleId: 1, roleName: "Guildmaster", roleFlags: 31, roleOrder: 0 },
    { roleId: 5, roleName: "Officer", roleFlags: GUILD_ROLE_FLAG.INVITE | GUILD_ROLE_FLAG.KICK, roleOrder: 1 },
    { roleId: 9, roleName: "Member", roleFlags: 0, roleOrder: 2 },
];

const guildData = () => ({
    guildId: GUILD_ID,
    guildInfo: {
        guildName: "Test Guild",
        guildTag: "TEST",
        guildChatGroupId: "0",
        guildMotd: "old motd",
        guildMotdTimestamp: 111,
        guildDescription: "old description",
        guildFlags: 0,
    },
    /* Deliberately out of order: roles() has to sort them. */
    guildRoles: [ROLES[2], ROLES[0], ROLES[1]],
    guildMembers: [
        { memberAccountId: BOT_ACCOUNT, memberRoleId: 5, memberJoinedTimestamp: 1600000000, memberLastActiveTimestamp: 1700000000 },
        { memberAccountId: 200, memberRoleId: 9, memberJoinedTimestamp: 0, memberLastActiveTimestamp: 0 },
        { memberAccountId: 300, memberRoleId: 77, memberJoinedTimestamp: 1600000000, memberLastActiveTimestamp: 0 },
    ],
    guildInvites: [],
});

/** A GC that answers guild-data requests with the fixture snapshot. */
function gcWithData(data: any = guildData()): FakeGC {
    const gc = new FakeGC();
    gc.onSend(EDOTAGCMsg.k_EMsgClientToGCRequestGuildData, () => [
        EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse,
        { result: 1, guildData: data },
    ]);
    return gc;
}

const guildOf = (gc: FakeGC, options: any = {}) =>
    new Guild(gc, { guildId: GUILD_ID, accountId: BOT_ACCOUNT, timeoutMs: 50, debounceMs: 5, ...options });

const tick = (ms = 0) => new Promise<void>((resolve) => setTimeout(resolve, ms));

describe("find", () => {
    test("resolves the guild and remembers it", async () => {
        const gc = new FakeGC();
        gc.onSend(EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfo, (body) => {
            expect(body.accountId).toBe(BOT_ACCOUNT);
            return [
                EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse,
                { result: 1, personaInfo: { guildPersonaInfos: [{ guildId: GUILD_ID, guildTag: "TEST", guildFlags: 3 }] } },
            ];
        });

        const guild = new Guild(gc, { accountId: BOT_ACCOUNT, timeoutMs: 50 });
        expect(guild.guildId).toBeUndefined();

        expect(await guild.find()).toEqual({ guildId: GUILD_ID, guildTag: "TEST", guildFlags: 3 });
        expect(guild.guildId).toBe(GUILD_ID);
        expect(guild.guildTag).toBe("TEST");
    });

    test("returns null when the account is in no guild", async () => {
        const gc = new FakeGC();
        gc.onSend(EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfo, () => [
            EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse,
            { result: 1, personaInfo: { guildPersonaInfos: [] } },
        ]);

        expect(await new Guild(gc, { accountId: BOT_ACCOUNT, timeoutMs: 50 }).find()).toBeNull();
    });

    test("needs an accountId", async () => {
        await expect(new Guild(new FakeGC()).find()).rejects.toThrow(NoGuildError);
    });

    test("times out into a GCOperationError instead of hanging", async () => {
        const guild = new Guild(new FakeGC(), { accountId: BOT_ACCOUNT, timeoutMs: 10 });
        const error = (await guild.find().catch((e) => e)) as GCOperationError;

        expect(error).toBeInstanceOf(GCOperationError);
        expect(error.op).toBe("find");
        expect(error.result).toBe(GC_RESULT_TIMEOUT);
        expect(error.resultName).toContain("timeout");
    });
});

describe("reads", () => {
    test("members come back in friendly shape", async () => {
        const members = await guildOf(gcWithData()).members();

        expect(members[0]).toEqual({
            accountId: BOT_ACCOUNT,
            roleId: 5,
            roleName: "Officer",
            joinedAt: new Date(1600000000 * 1000),
            lastActiveAt: new Date(1700000000 * 1000),
        });
        /* A zero timestamp means "never", not 1970. */
        expect(members[1]!.joinedAt).toBeNull();
        expect(members[1]!.lastActiveAt).toBeNull();
        /* A role the snapshot does not list is reported as unknown, not guessed. */
        expect(members[2]!.roleName).toBeNull();
    });

    test("roles are sorted top of the ladder first", async () => {
        const roles = await guildOf(gcWithData()).roles();
        expect(roles.map((role) => role.roleName)).toEqual(["Guildmaster", "Officer", "Member"]);
    });

    test("myRole finds the logged-in account's role", async () => {
        expect((await guildOf(gcWithData()).myRole())?.roleName).toBe("Officer");
    });

    test("myRole is null for an account outside the guild", async () => {
        expect(await guildOf(gcWithData(), { accountId: 999 }).myRole()).toBeNull();
    });

    test("a refused snapshot becomes a named error", async () => {
        const gc = new FakeGC();
        gc.onSend(EDOTAGCMsg.k_EMsgClientToGCRequestGuildData, () => [
            EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse,
            { result: 3 },
        ]);

        const error = (await guildOf(gc).data().catch((e) => e)) as GCOperationError;
        expect(error.op).toBe("fetchData");
        expect(error.result).toBe(3);
        expect(error.resultName).not.toContain("unknown");
    });

    test("a snapshot for another guild is ignored", async () => {
        const gc = new FakeGC();
        gc.onSend(EDOTAGCMsg.k_EMsgClientToGCRequestGuildData, () => [
            EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse,
            { result: 1, guildData: { ...guildData(), guildId: 999 } },
        ]);

        await expect(guildOf(gc).data()).rejects.toThrow(GCOperationError);
    });

    test("event members report guild points", async () => {
        const gc = new FakeGC();
        gc.onSend(EDOTAGCMsg.k_EMsgClientToGCRequestGuildEventMembers, (body) => {
            expect(body).toEqual({ guildId: GUILD_ID, eventId: 33 });
            return [
                EDOTAGCMsg.k_EMsgClientToGCRequestGuildEventMembersResponse,
                { result: 1, members: [{ accountId: 200, guildPointsEarned: 1234 }] },
            ];
        });

        expect(await guildOf(gc, { eventId: 33 }).eventMembers()).toEqual([{ accountId: 200, points: 1234 }]);
    });

    test("without a guild id nothing is sent", async () => {
        await expect(new Guild(new FakeGC()).data()).rejects.toThrow(NoGuildError);
    });
});

describe("setRole", () => {
    test("resolves a role name to its id", async () => {
        const gc = gcWithData();
        gc.onJob(EDOTAGCMsg.k_EMsgClientToGCSetGuildMemberRole, () => ({ result: 1 }));

        await guildOf(gc).setRole(200, "officer");

        expect(gc.jobs.at(-1)!.body).toEqual({ guildId: GUILD_ID, targetAccountId: 200, targetRoleId: 5 });
    });

    test("takes a role id without looking anything up", async () => {
        const gc = gcWithData();
        gc.onJob(EDOTAGCMsg.k_EMsgClientToGCSetGuildMemberRole, () => ({ result: 1 }));

        await guildOf(gc).setRole(200, 9);

        expect(gc.sent).toHaveLength(0);
        expect(gc.jobs.at(-1)!.body.targetRoleId).toBe(9);
    });

    test("an unknown role name never reaches the GC", async () => {
        const gc = gcWithData();
        await expect(guildOf(gc).setRole(200, "Warlord")).rejects.toThrow(/No role named/);
        expect(gc.jobs).toHaveLength(0);
    });

    test("a refusal from the GC keeps its result code", async () => {
        const gc = gcWithData();
        gc.onJob(EDOTAGCMsg.k_EMsgClientToGCSetGuildMemberRole, () => ({ result: 8 }));

        const error = (await guildOf(gc).setRole(200, 9).catch((e) => e)) as GCOperationError;
        expect(error.op).toBe("setRole");
        expect(error.result).toBe(8);
    });

    test("a job that never answers becomes a timeout result", async () => {
        const gc = gcWithData();
        gc.onJob(EDOTAGCMsg.k_EMsgClientToGCSetGuildMemberRole, () => {
            throw new Error("job timed out");
        });

        const error = (await guildOf(gc).setRole(200, 9).catch((e) => e)) as GCOperationError;
        expect(error.result).toBe(GC_RESULT_TIMEOUT);
    });
});

describe("role editing", () => {
    test("modifyRole patches only what it was given", async () => {
        const gc = gcWithData();
        gc.onJob(EDOTAGCMsg.k_EMsgClientToGCModifyGuildRole, () => ({ result: 1 }));

        const role = await guildOf(gc).modifyRole(5, { name: "Captain" });

        /* The GC replaces the role wholesale, so the untouched flags must be sent back. */
        expect(gc.jobs.at(-1)!.body).toEqual({ guildId: GUILD_ID, roleId: 5, roleName: "Captain", roleFlags: 3 });
        expect(role).toEqual({ roleId: 5, roleName: "Captain", roleFlags: 3, roleOrder: 1 });
    });

    test("modifyRole refuses to overwrite a role that changed in the game", async () => {
        const gc = gcWithData();
        gc.onJob(EDOTAGCMsg.k_EMsgClientToGCModifyGuildRole, () => ({ result: 1 }));

        const error = (await guildOf(gc)
            .modifyRole(5, { name: "Captain" }, { flags: 1 })
            .catch((e) => e)) as GCOperationError;

        expect(error).toBeInstanceOf(GCOperationError);
        expect(error.op).toBe("modifyRole");
        expect(error.result).toBe(GC_RESULT_STALE);
        expect(error.resultName).toContain("changed in game");
        /* Nothing was written. */
        expect(gc.jobs).toHaveLength(0);
    });

    test("modifyRole goes ahead when the expectation holds", async () => {
        const gc = gcWithData();
        gc.onJob(EDOTAGCMsg.k_EMsgClientToGCModifyGuildRole, () => ({ result: 1 }));

        await guildOf(gc).modifyRole(5, { flags: 1 }, { flags: 3, name: "Officer" });
        expect(gc.jobs.at(-1)!.body.roleFlags).toBe(1);
    });

    test("modifyRole on a role the guild does not have fails before writing", async () => {
        const gc = gcWithData();
        await expect(guildOf(gc).modifyRole(1234, { name: "Nope" })).rejects.toThrow(GCOperationError);
        expect(gc.jobs).toHaveLength(0);
    });

    test("addRole returns the id the GC assigned", async () => {
        const gc = gcWithData();
        gc.onJob(EDOTAGCMsg.k_EMsgClientToGCAddGuildRole, () => ({ result: 1, roleId: 77 }));

        expect(await guildOf(gc).addRole({ name: "Recruit", flags: GUILD_ROLE_FLAG.INVITE })).toBe(77);
        expect(gc.jobs.at(-1)!.body).toEqual({ guildId: GUILD_ID, roleName: "Recruit", roleFlags: 1 });
    });

    test("setRoleOrder returns the order the GC confirmed, not the one asked for", async () => {
        const gc = gcWithData();
        gc.onJob(EDOTAGCMsg.k_EMsgClientToGCSetGuildRoleOrder, () => ({ result: 1, confirmedRoleIds: [1, 9, 5] }));

        expect(await guildOf(gc).setRoleOrder([1, 5, 9])).toEqual([1, 9, 5]);
        expect(gc.jobs.at(-1)!.body).toEqual({
            guildId: GUILD_ID,
            requestedRoleIds: [1, 5, 9],
            /* The previous order comes from a fresh snapshot, sorted by roleOrder. */
            previousRoleIds: [1, 5, 9],
        });
    });

    test("removeRole passes the id through", async () => {
        const gc = gcWithData();
        gc.onJob(EDOTAGCMsg.k_EMsgClientToGCRemoveGuildRole, () => ({ result: 1 }));

        await guildOf(gc).removeRole(9);
        expect(gc.jobs.at(-1)!.body).toEqual({ guildId: GUILD_ID, roleId: 9 });
    });
});

describe("membership and info", () => {
    test("invite, cancelInvite and kick send the account id", async () => {
        const gc = gcWithData();
        for (const msgId of [
            EDOTAGCMsg.k_EMsgClientToGCInviteToGuild,
            EDOTAGCMsg.k_EMsgClientToGCCancelInviteToGuild,
            EDOTAGCMsg.k_EMsgClientToGCKickGuildMember,
        ]) {
            gc.onJob(msgId, () => ({ result: 1 }));
        }

        const guild = guildOf(gc);
        await guild.invite(200);
        await guild.cancelInvite(200);
        await guild.kick(200);

        expect(gc.jobs.map((job) => job.msgId)).toEqual([
            EDOTAGCMsg.k_EMsgClientToGCInviteToGuild,
            EDOTAGCMsg.k_EMsgClientToGCCancelInviteToGuild,
            EDOTAGCMsg.k_EMsgClientToGCKickGuildMember,
        ]);
        expect(gc.jobs.every((job) => job.body.targetAccountId === 200)).toBe(true);
    });

    test("setMotd keeps the rest of the guild info intact", async () => {
        const gc = gcWithData();
        gc.onJob(EDOTAGCMsg.k_EMsgClientToGCSetGuildInfo, () => ({ result: 1 }));

        await guildOf(gc).setMotd("new motd");

        const body = gc.jobs.at(-1)!.body;
        expect(body.guildInfo.guildMotd).toBe("new motd");
        expect(body.guildInfo.guildDescription).toBe("old description");
        expect(body.guildInfo.guildName).toBe("Test Guild");
        expect(body.guildInfo.guildMotdTimestamp).toBeGreaterThan(111);
    });

    test("setDescription leaves the motd alone", async () => {
        const gc = gcWithData();
        gc.onJob(EDOTAGCMsg.k_EMsgClientToGCSetGuildInfo, () => ({ result: 1 }));

        await guildOf(gc).setDescription("new description");

        const body = gc.jobs.at(-1)!.body;
        expect(body.guildInfo.guildDescription).toBe("new description");
        expect(body.guildInfo.guildMotd).toBe("old motd");
        expect(body.guildInfo.guildMotdTimestamp).toBe(111);
    });
});

describe("write queue", () => {
    test("serialises writes so two edits cannot race on one snapshot", async () => {
        const gc = gcWithData();
        let release!: () => void;
        const gate = new Promise<void>((resolve) => {
            release = resolve;
        });

        gc.onJob(EDOTAGCMsg.k_EMsgClientToGCInviteToGuild, async (body) => {
            if (body.targetAccountId === 1) await gate;
            return { result: 1 };
        });

        const guild = guildOf(gc);
        const first = guild.invite(1);
        const second = guild.invite(2);

        await tick();
        /* The second write has not been sent while the first is still in flight. */
        expect(gc.jobs.map((job) => job.body.targetAccountId)).toEqual([1]);

        release();
        await Promise.all([first, second]);
        expect(gc.jobs.map((job) => job.body.targetAccountId)).toEqual([1, 2]);
    });

    test("a failed write does not stall the ones behind it", async () => {
        const gc = gcWithData();
        gc.onJob(EDOTAGCMsg.k_EMsgClientToGCInviteToGuild, (body) => ({
            result: body.targetAccountId === 1 ? 4 : 1,
        }));

        const guild = guildOf(gc);
        const first = guild.invite(1);
        const second = guild.invite(2);

        await expect(first).rejects.toThrow(GCOperationError);
        await expect(second).resolves.toBeUndefined();
    });
});

describe("onChange", () => {
    test("collapses a burst of notifications into one callback", async () => {
        const gc = gcWithData();
        const seen: string[] = [];
        const stop = guildOf(gc).onChange((reason) => seen.push(reason));

        gc.router.push(EDOTAGCMsg.k_EMsgGCToClientGuildDataUpdated, { guildData: { guildId: GUILD_ID } });
        gc.router.push(EDOTAGCMsg.k_EMsgGCToClientGuildMembersDataUpdated, { guildId: GUILD_ID });
        gc.router.push(EDOTAGCMsg.k_EMsgGCToClientGuildMembershipUpdated, {});

        expect(seen).toEqual([]);
        await tick(20);
        expect(seen).toEqual(["membership"]);

        stop();
    });

    test("ignores notifications about another guild", async () => {
        const gc = gcWithData();
        const seen: string[] = [];
        const stop = guildOf(gc).onChange((reason) => seen.push(reason));

        gc.router.push(EDOTAGCMsg.k_EMsgGCToClientGuildMembersDataUpdated, { guildId: 999 });
        await tick(20);

        expect(seen).toEqual([]);
        stop();
    });

    test("unsubscribing detaches every listener", async () => {
        const gc = gcWithData();
        const seen: string[] = [];
        const stop = guildOf(gc).onChange((reason) => seen.push(reason));

        expect(gc.router.listenerCount(EDOTAGCMsg.k_EMsgGCToClientGuildDataUpdated)).toBe(1);
        stop();
        expect(gc.router.listenerCount(EDOTAGCMsg.k_EMsgGCToClientGuildDataUpdated)).toBe(0);

        gc.router.push(EDOTAGCMsg.k_EMsgGCToClientGuildMembershipUpdated, {});
        await tick(20);
        expect(seen).toEqual([]);
    });
});
