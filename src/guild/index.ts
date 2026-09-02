/* Dota guilds through the GC: read the roster, move people between roles, edit the
   roles themselves. Every write is confirmed by the GC before it returns, and every
   write is serialised — the GC answers a role change with a whole new ordering, so two
   edits racing on one snapshot silently overwrite each other. */

import { EDOTAGCMsg } from "../protobufs/dota_gcmessages_msgid";
import {
    EGuildChatType,
    cMsgClientToGCAddGuildRoleResponse_EResponseToJSON,
    cMsgClientToGCCancelInviteToGuildResponse_EResponseToJSON,
    cMsgClientToGCInviteToGuildResponse_EResponseToJSON,
    cMsgClientToGCKickGuildMemberResponse_EResponseToJSON,
    cMsgClientToGCModifyGuildRoleResponse_EResponseToJSON,
    cMsgClientToGCRemoveGuildRoleResponse_EResponseToJSON,
    cMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponseToJSON,
    cMsgClientToGCRequestGuildDataResponse_EResponseToJSON,
    cMsgClientToGCSetGuildInfoResponse_EResponseToJSON,
    cMsgClientToGCSetGuildMemberRoleResponse_EResponseToJSON,
    cMsgClientToGCSetGuildRoleOrderResponse_EResponseToJSON,
    type CMsgClientToGCAddGuildRoleResponse,
    type CMsgClientToGCRequestAccountGuildPersonaInfoResponse,
    type CMsgClientToGCRequestGuildDataResponse,
    type CMsgClientToGCRequestGuildEventMembersResponse,
    type CMsgClientToGCSetGuildRoleOrderResponse,
    type CMsgGuildData,
    type CMsgGuildInfo,
    type CMsgGuildRole,
} from "../protobufs/index";
import type { Logger } from "../gc/types";
import { GC_TIMEOUT_MS, fromUnixSeconds, oneShot, type GCLike } from "../shared";

/**
 * Role permission bits.
 *
 * Only these two are confirmed against a live guild. Roles are seen with bits up to 16
 * set, but what 4, 8 and 16 grant is unverified, so they get no names here — pass them
 * as plain numbers if you need them. The GC is the authority on whether a write is
 * allowed: it answers `NoPermissions` rather than letting a wrong guess through.
 */
export const GUILD_ROLE_FLAG = {
    INVITE: 1,
    KICK: 2,
} as const;

/** Every bit ever observed on a real role. The GC rejects anything outside it. */
export const GUILD_ROLE_FLAG_MASK = 31;

export type GuildOp =
    | "find"
    | "fetchData"
    | "eventMembers"
    | "kick"
    | "setRole"
    | "invite"
    | "cancelInvite"
    | "setInfo"
    | "addRole"
    | "modifyRole"
    | "removeRole"
    | "roleOrder";

/** The GC never answered inside the deadline. */
export const GC_RESULT_TIMEOUT = -1;
/** Not a GC code: the role changed in the game between reading it and writing it back. */
export const GC_RESULT_STALE = -2;

const RESULT_NAMES: Partial<Record<GuildOp, (result: number) => string>> = {
    find: cMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponseToJSON,
    fetchData: cMsgClientToGCRequestGuildDataResponse_EResponseToJSON,
    kick: cMsgClientToGCKickGuildMemberResponse_EResponseToJSON,
    setRole: cMsgClientToGCSetGuildMemberRoleResponse_EResponseToJSON,
    invite: cMsgClientToGCInviteToGuildResponse_EResponseToJSON,
    cancelInvite: cMsgClientToGCCancelInviteToGuildResponse_EResponseToJSON,
    setInfo: cMsgClientToGCSetGuildInfoResponse_EResponseToJSON,
    addRole: cMsgClientToGCAddGuildRoleResponse_EResponseToJSON,
    modifyRole: cMsgClientToGCModifyGuildRoleResponse_EResponseToJSON,
    removeRole: cMsgClientToGCRemoveGuildRoleResponse_EResponseToJSON,
    roleOrder: cMsgClientToGCSetGuildRoleOrderResponse_EResponseToJSON,
};

function resultName(op: GuildOp, result: number): string {
    if (result === GC_RESULT_TIMEOUT) return "timeout (no GC response)";
    if (result === GC_RESULT_STALE) return "role changed in game since it was read";
    try {
        return RESULT_NAMES[op]?.(result) ?? `result ${result}`;
    } catch {
        return `unknown result ${result}`;
    }
}

/** A guild operation the GC refused, timed out on, or answered with a non-success code. */
export class GCOperationError extends Error {
    readonly resultName: string;

    constructor(readonly op: GuildOp, readonly result: number) {
        const name = resultName(op, result);
        super(`GC ${op} failed: ${name}`);
        this.name = "GCOperationError";
        this.resultName = name;
    }
}

/** The account is in no guild, or no guild id was supplied. */
export class NoGuildError extends Error {
    constructor(message = "No guild: pass guildId, or call find() with an accountId first") {
        super(message);
        this.name = "NoGuildError";
    }
}

export interface GuildIdentity {
    guildId: number;
    guildTag: string;
    guildFlags: number;
}

/** A guild member in plain terms — the GC's raw `CMsgGuildMember` is available via `data()`. */
export interface GuildMember {
    accountId: number;
    roleId: number;
    /** `null` when the roster references a role the snapshot does not list. */
    roleName: string | null;
    joinedAt: Date | null;
    lastActiveAt: Date | null;
}

export interface GuildEventMember {
    accountId: number;
    /** Guild points earned in the event. */
    points: number;
}

export type GuildChangeReason = "data" | "members" | "membership";

export interface GuildOptions {
    /** Skip discovery when you already know the guild. */
    guildId?: number;
    /** The logged-in account — needed by `find()` and `myRole()`. */
    accountId?: number;
    /** Guild event to read points for in `eventMembers()`. */
    eventId?: number;
    timeoutMs?: number;
    /** How long `onChange` waits for the burst to settle. */
    debounceMs?: number;
    logger?: Logger;
}

/** GC push notifications say "something changed" without saying what. */
const CHANGE_MESSAGES: Array<[number, GuildChangeReason]> = [
    [EDOTAGCMsg.k_EMsgGCToClientGuildDataUpdated, "data"],
    [EDOTAGCMsg.k_EMsgGCToClientGuildMembersDataUpdated, "members"],
    [EDOTAGCMsg.k_EMsgGCToClientGuildMembershipUpdated, "membership"],
];

const DEFAULT_DEBOUNCE_MS = 5_000;

/**
 * One guild, driven over a live GC session.
 *
 * @example
 * ```ts
 * const guild = new Guild(bot.gc, { accountId: bot.steam.accountId! });
 * await guild.find();
 * for (const m of await guild.members()) console.log(m.accountId, m.roleName);
 * ```
 */
export class Guild {
    private readonly gc: GCLike;
    private readonly logger?: Logger;
    private readonly timeoutMs: number;
    private readonly debounceMs: number;

    private _guildId?: number;
    private _accountId?: number;
    private _eventId: number;
    private _tag?: string;
    private botRole: CMsgGuildRole | null = null;

    /* Writes run one at a time: the GC confirms role edits with a whole ordering, so
       overlapping edits built on the same snapshot quietly clobber each other. */
    private queue: Promise<unknown> = Promise.resolve();

    constructor(gc: GCLike, options: GuildOptions = {}) {
        this.gc = gc;
        this._guildId = options.guildId;
        this._accountId = options.accountId;
        this._eventId = options.eventId ?? 0;
        this.timeoutMs = options.timeoutMs ?? GC_TIMEOUT_MS;
        this.debounceMs = options.debounceMs ?? DEFAULT_DEBOUNCE_MS;
        this.logger = options.logger;
    }

    /** The guild id, once known — set at construction or by `find()`. */
    get guildId(): number | undefined {
        return this._guildId;
    }

    /** The guild tag, once `find()` has run. */
    get guildTag(): string | undefined {
        return this._tag;
    }

    /** The account whose guild this is. Set it if it was not known at construction. */
    set accountId(value: number | undefined) {
        this._accountId = value;
    }

    get accountId(): number | undefined {
        return this._accountId;
    }

    // -------------------------------------------------------------------- reads

    /**
     * Finds the guild the account belongs to, and remembers it.
     *
     * @returns the guild, or `null` when the account is in none.
     */
    async find(): Promise<GuildIdentity | null> {
        if (this._accountId === undefined) throw new NoGuildError("find() needs an accountId");

        const reply = await oneShot<CMsgClientToGCRequestAccountGuildPersonaInfoResponse>(this.gc, {
            request: [EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfo, { accountId: this._accountId }],
            response: EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse,
            timeoutMs: this.timeoutMs,
        });
        if (!reply) throw new GCOperationError("find", GC_RESULT_TIMEOUT);
        if (reply.result !== 1) throw new GCOperationError("find", reply.result ?? 0);

        const first = reply.personaInfo?.guildPersonaInfos?.[0];
        if (!first) return null;

        this._guildId = first.guildId;
        this._tag = first.guildTag;
        return { guildId: first.guildId, guildTag: first.guildTag, guildFlags: first.guildFlags };
    }

    /** The full guild snapshot straight from the GC: info, roles, members, invites. */
    async data(): Promise<CMsgGuildData> {
        const guildId = this.requireGuildId();

        /* The GC broadcasts this reply to every listener as well as answering the
           request, so it is read off the router rather than correlated by job id. */
        const reply = await oneShot<CMsgClientToGCRequestGuildDataResponse>(this.gc, {
            request: [EDOTAGCMsg.k_EMsgClientToGCRequestGuildData, { guildId }],
            response: EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse,
            accept: (payload) => !payload.guildData || payload.guildData.guildId === guildId,
            timeoutMs: this.timeoutMs,
        });
        if (!reply) throw new GCOperationError("fetchData", GC_RESULT_TIMEOUT);
        if (reply.result !== 1 || !reply.guildData) throw new GCOperationError("fetchData", reply.result ?? 0);

        this.cacheBotRole(reply.guildData);
        return reply.guildData;
    }

    /** The roster, with role names resolved and timestamps turned into dates. */
    async members(): Promise<GuildMember[]> {
        const data = await this.data();
        const names = new Map(data.guildRoles.map((role) => [role.roleId, role.roleName]));
        return data.guildMembers.map((member) => ({
            accountId: member.memberAccountId,
            roleId: member.memberRoleId,
            roleName: names.get(member.memberRoleId) ?? null,
            joinedAt: fromUnixSeconds(member.memberJoinedTimestamp),
            lastActiveAt: fromUnixSeconds(member.memberLastActiveTimestamp),
        }));
    }

    /** The guild's roles, top of the ladder first (`roleOrder` ascending). */
    async roles(): Promise<CMsgGuildRole[]> {
        const data = await this.data();
        return [...data.guildRoles].sort((a, b) => a.roleOrder - b.roleOrder);
    }

    /**
     * The role the logged-in account holds, from a fresh snapshot.
     *
     * @returns `null` when the account is not a member. Needs `accountId`.
     */
    async myRole(): Promise<CMsgGuildRole | null> {
        if (this._accountId === undefined) throw new NoGuildError("myRole() needs an accountId");
        await this.data();
        return this.botRole;
    }

    /**
     * Guild points earned by each member in a guild event.
     *
     * @param eventId the event to read; defaults to the `eventId` given at construction.
     *   `0` is "no event" and normally comes back empty — Valve's guild summary web API
     *   is where the current event id comes from.
     */
    async eventMembers(eventId = this._eventId): Promise<GuildEventMember[]> {
        const guildId = this.requireGuildId();
        const reply = await oneShot<CMsgClientToGCRequestGuildEventMembersResponse>(this.gc, {
            request: [EDOTAGCMsg.k_EMsgClientToGCRequestGuildEventMembers, { guildId, eventId }],
            response: EDOTAGCMsg.k_EMsgClientToGCRequestGuildEventMembersResponse,
            timeoutMs: this.timeoutMs,
        });
        if (!reply) throw new GCOperationError("eventMembers", GC_RESULT_TIMEOUT);
        if (reply.result !== 1) throw new GCOperationError("eventMembers", reply.result ?? 0);
        return reply.members.map((member) => ({ accountId: member.accountId, points: member.guildPointsEarned }));
    }

    // ------------------------------------------------------------------- writes

    /** Moves a member to another role, by role id or by role name (case-insensitive). */
    async setRole(accountId: number, roleIdOrName: number | string): Promise<void> {
        const guildId = this.requireGuildId();
        return this.enqueue(async () => {
            const roleId = await this.resolveRoleId(roleIdOrName);
            await this.job("setRole", EDOTAGCMsg.k_EMsgClientToGCSetGuildMemberRole, {
                guildId,
                targetAccountId: accountId,
                targetRoleId: roleId,
            });
        });
    }

    /** Creates a role. @returns the role id the GC assigned. */
    async addRole(role: { name: string; flags: number }): Promise<number> {
        const guildId = this.requireGuildId();
        return this.enqueue(async () => {
            const reply = await this.job<CMsgClientToGCAddGuildRoleResponse>(
                "addRole",
                EDOTAGCMsg.k_EMsgClientToGCAddGuildRole,
                { guildId, roleName: role.name, roleFlags: role.flags },
            );
            return reply.roleId;
        });
    }

    /**
     * Edits a role.
     *
     * The GC replaces a role wholesale, so the current one is read first and patched.
     * Pass `expected` to refuse the write when someone changed the role in the game
     * meanwhile — without it, an edit made in Dota is silently overwritten.
     *
     * @returns the role as it now stands.
     */
    async modifyRole(
        roleId: number,
        patch: { name?: string; flags?: number },
        expected?: { name?: string; flags?: number },
    ): Promise<CMsgGuildRole> {
        const guildId = this.requireGuildId();
        return this.enqueue(async () => {
            const data = await this.data();
            const current = data.guildRoles.find((role) => role.roleId === roleId);
            if (!current) throw new GCOperationError("modifyRole", 5 /* k_eInvalidRole */);

            if (
                expected &&
                ((expected.flags !== undefined && expected.flags !== current.roleFlags) ||
                    (expected.name !== undefined && expected.name !== current.roleName))
            ) {
                throw new GCOperationError("modifyRole", GC_RESULT_STALE);
            }

            const next: CMsgGuildRole = {
                roleId,
                roleName: patch.name ?? current.roleName,
                roleFlags: patch.flags ?? current.roleFlags,
                roleOrder: current.roleOrder,
            };
            await this.job("modifyRole", EDOTAGCMsg.k_EMsgClientToGCModifyGuildRole, {
                guildId,
                roleId,
                roleName: next.roleName,
                roleFlags: next.roleFlags,
            });
            return next;
        });
    }

    /** Deletes a role. The GC refuses while anyone still holds it. */
    async removeRole(roleId: number): Promise<void> {
        const guildId = this.requireGuildId();
        return this.enqueue(async () => {
            await this.job("removeRole", EDOTAGCMsg.k_EMsgClientToGCRemoveGuildRole, { guildId, roleId });
        });
    }

    /**
     * Reorders every role at once — the list must name them all, top first.
     *
     * @returns the order the GC confirmed, which can differ from the one asked for.
     */
    async setRoleOrder(orderedRoleIds: number[]): Promise<number[]> {
        const guildId = this.requireGuildId();
        return this.enqueue(async () => {
            const data = await this.data();
            const previousRoleIds = [...data.guildRoles]
                .sort((a, b) => a.roleOrder - b.roleOrder)
                .map((role) => role.roleId);

            const reply = await this.job<CMsgClientToGCSetGuildRoleOrderResponse>(
                "roleOrder",
                EDOTAGCMsg.k_EMsgClientToGCSetGuildRoleOrder,
                { guildId, requestedRoleIds: orderedRoleIds, previousRoleIds },
            );
            return reply.confirmedRoleIds;
        });
    }

    /** Invites an account to the guild. */
    async invite(accountId: number): Promise<void> {
        const guildId = this.requireGuildId();
        return this.enqueue(async () => {
            await this.job("invite", EDOTAGCMsg.k_EMsgClientToGCInviteToGuild, { guildId, targetAccountId: accountId });
        });
    }

    /** Withdraws an invite that has not been answered. */
    async cancelInvite(accountId: number): Promise<void> {
        const guildId = this.requireGuildId();
        return this.enqueue(async () => {
            await this.job("cancelInvite", EDOTAGCMsg.k_EMsgClientToGCCancelInviteToGuild, {
                guildId,
                targetAccountId: accountId,
            });
        });
    }

    /** Removes a member from the guild. */
    async kick(accountId: number): Promise<void> {
        const guildId = this.requireGuildId();
        return this.enqueue(async () => {
            await this.job("kick", EDOTAGCMsg.k_EMsgClientToGCKickGuildMember, { guildId, targetAccountId: accountId });
        });
    }

    /** Sets the message of the day. */
    setMotd(text: string): Promise<void> {
        return this.setInfo({ motd: text });
    }

    /** Sets the guild description. */
    setDescription(text: string): Promise<void> {
        return this.setInfo({ description: text });
    }

    /**
     * Watches the GC's guild push notifications.
     *
     * A single change can produce several notifications, so they are collapsed into one
     * callback per burst. The GC says only that something changed — call `data()` from
     * the callback to see what.
     *
     * @returns an unsubscribe function.
     */
    onChange(callback: (reason: GuildChangeReason) => void): () => void {
        let timer: ReturnType<typeof setTimeout> | null = null;
        let pending: GuildChangeReason | null = null;

        const fire = (reason: GuildChangeReason) => {
            pending = reason;
            if (timer) return;
            timer = setTimeout(() => {
                timer = null;
                const value = pending!;
                pending = null;
                try {
                    callback(value);
                } catch (error) {
                    this.logger?.error?.("dotakit: guild onChange listener threw", error);
                }
            }, this.debounceMs);
        };

        const listeners = CHANGE_MESSAGES.map(([msgId, reason]) => {
            const listener = (payload: any) => {
                /* Notifications carry the guild id when they can — ignore other guilds. */
                const id = payload?.guildId ?? payload?.guildData?.guildId;
                if (id !== undefined && this._guildId !== undefined && id !== this._guildId) return;
                fire(reason);
            };
            this.gc.router.on(msgId, listener);
            return [msgId, listener] as const;
        });

        return () => {
            if (timer) clearTimeout(timer);
            timer = null;
            for (const [msgId, listener] of listeners) this.gc.router.off(msgId, listener);
        };
    }

    // ---------------------------------------------------------------- internals

    private requireGuildId(): number {
        if (this._guildId === undefined) throw new NoGuildError();
        return this._guildId;
    }

    private enqueue<T>(task: () => Promise<T>): Promise<T> {
        /* Chained on both settlements: one failed write must not stall the queue. */
        const run = this.queue.then(task, task);
        this.queue = run.then(
            () => undefined,
            () => undefined,
        );
        return run;
    }

    /** A GC request whose reply carries a `result` code, turned into an error or a value. */
    private async job<T extends { result?: number }>(op: GuildOp, msgId: number, body: unknown): Promise<T> {
        let reply: T;
        try {
            reply = (await this.gc.sendJob(msgId, body, { timeoutMs: this.timeoutMs })) as T;
        } catch (error) {
            this.logger?.warn?.("dotakit: GC did not confirm %s", op, error);
            throw new GCOperationError(op, GC_RESULT_TIMEOUT);
        }
        if (reply?.result !== 1) throw new GCOperationError(op, reply?.result ?? 0);
        return reply;
    }

    private async resolveRoleId(roleIdOrName: number | string): Promise<number> {
        if (typeof roleIdOrName === "number") return roleIdOrName;
        const wanted = roleIdOrName.trim().toLowerCase();
        const data = await this.data();
        const match = data.guildRoles.find((role) => role.roleName.trim().toLowerCase() === wanted);
        if (!match) throw new NoGuildError(`No role named "${roleIdOrName}" in guild ${this._guildId}`);
        return match.roleId;
    }

    /* SetGuildInfo takes the whole CMsgGuildInfo — read the current one and patch it,
       or the fields left out are wiped. */
    private setInfo(patch: { motd?: string; description?: string }): Promise<void> {
        const guildId = this.requireGuildId();
        return this.enqueue(async () => {
            const data = await this.data();
            const current = data.guildInfo;
            if (!current) throw new GCOperationError("fetchData", 0);

            const guildInfo: CMsgGuildInfo = {
                ...current,
                ...(patch.motd !== undefined
                    ? { guildMotd: patch.motd, guildMotdTimestamp: Math.floor(Date.now() / 1000) }
                    : {}),
                ...(patch.description !== undefined ? { guildDescription: patch.description } : {}),
            };

            /* chatType is not part of guildInfo — infer it from the Steam chat group. */
            const guildChatType =
                current.guildChatGroupId && current.guildChatGroupId !== "0"
                    ? EGuildChatType.k_EGuildChatType_SteamChatGroup
                    : EGuildChatType.k_EGuildChatType_GC;

            await this.job("setInfo", EDOTAGCMsg.k_EMsgClientToGCSetGuildInfo, { guildId, guildInfo, guildChatType });
        });
    }

    private cacheBotRole(data: CMsgGuildData): void {
        if (this._accountId === undefined) return;
        const member = data.guildMembers.find((entry) => entry.memberAccountId === this._accountId);
        this.botRole = member ? (data.guildRoles.find((role) => role.roleId === member.memberRoleId) ?? null) : null;
    }
}
