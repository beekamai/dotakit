import { C as CMsgGuildData, a as CMsgGuildRole } from '../dota_gcmessages_client_guild-Ay1U3kra.js';
import { L as Logger } from '../types-DJJWbS4o.js';
import { G as GCLike } from '../shared-D_5F0rCl.js';
import '@bufbuild/protobuf/wire';

/**
 * Role permission bits.
 *
 * Only these two are confirmed against a live guild. Roles are seen with bits up to 16
 * set, but what 4, 8 and 16 grant is unverified, so they get no names here — pass them
 * as plain numbers if you need them. The GC is the authority on whether a write is
 * allowed: it answers `NoPermissions` rather than letting a wrong guess through.
 */
declare const GUILD_ROLE_FLAG: {
    readonly INVITE: 1;
    readonly KICK: 2;
};
/** Every bit ever observed on a real role. The GC rejects anything outside it. */
declare const GUILD_ROLE_FLAG_MASK = 31;
type GuildOp = "find" | "fetchData" | "eventMembers" | "kick" | "setRole" | "invite" | "cancelInvite" | "setInfo" | "addRole" | "modifyRole" | "removeRole" | "roleOrder";
/** The GC never answered inside the deadline. */
declare const GC_RESULT_TIMEOUT = -1;
/** Not a GC code: the role changed in the game between reading it and writing it back. */
declare const GC_RESULT_STALE = -2;
/** A guild operation the GC refused, timed out on, or answered with a non-success code. */
declare class GCOperationError extends Error {
    readonly op: GuildOp;
    readonly result: number;
    readonly resultName: string;
    constructor(op: GuildOp, result: number);
}
/** The account is in no guild, or no guild id was supplied. */
declare class NoGuildError extends Error {
    constructor(message?: string);
}
interface GuildIdentity {
    guildId: number;
    guildTag: string;
    guildFlags: number;
}
/** A guild member in plain terms — the GC's raw `CMsgGuildMember` is available via `data()`. */
interface GuildMember {
    accountId: number;
    roleId: number;
    /** `null` when the roster references a role the snapshot does not list. */
    roleName: string | null;
    joinedAt: Date | null;
    lastActiveAt: Date | null;
}
interface GuildEventMember {
    accountId: number;
    /** Guild points earned in the event. */
    points: number;
}
type GuildChangeReason = "data" | "members" | "membership";
interface GuildOptions {
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
declare class Guild {
    private readonly gc;
    private readonly logger?;
    private readonly timeoutMs;
    private readonly debounceMs;
    private _guildId?;
    private _accountId?;
    private _eventId;
    private _tag?;
    private botRole;
    private queue;
    constructor(gc: GCLike, options?: GuildOptions);
    /** The guild id, once known — set at construction or by `find()`. */
    get guildId(): number | undefined;
    /** The guild tag, once `find()` has run. */
    get guildTag(): string | undefined;
    /** The account whose guild this is. Set it if it was not known at construction. */
    set accountId(value: number | undefined);
    get accountId(): number | undefined;
    /**
     * Finds the guild the account belongs to, and remembers it.
     *
     * @returns the guild, or `null` when the account is in none.
     */
    find(): Promise<GuildIdentity | null>;
    /** The full guild snapshot straight from the GC: info, roles, members, invites. */
    data(): Promise<CMsgGuildData>;
    /** The roster, with role names resolved and timestamps turned into dates. */
    members(): Promise<GuildMember[]>;
    /** The guild's roles, top of the ladder first (`roleOrder` ascending). */
    roles(): Promise<CMsgGuildRole[]>;
    /**
     * The role the logged-in account holds, from a fresh snapshot.
     *
     * @returns `null` when the account is not a member. Needs `accountId`.
     */
    myRole(): Promise<CMsgGuildRole | null>;
    /**
     * Guild points earned by each member in a guild event.
     *
     * @param eventId the event to read; defaults to the `eventId` given at construction.
     *   `0` is "no event" and normally comes back empty — Valve's guild summary web API
     *   is where the current event id comes from.
     */
    eventMembers(eventId?: number): Promise<GuildEventMember[]>;
    /** Moves a member to another role, by role id or by role name (case-insensitive). */
    setRole(accountId: number, roleIdOrName: number | string): Promise<void>;
    /**
     * Creates a role.
     *
     * `k_eInvalidFlags` means the flags include a right the bot's own role lacks:
     * the GC lets a role grant only what the caller has (the guild master has all).
     *
     * @returns the role id the GC assigned.
     */
    addRole(role: {
        name: string;
        flags: number;
    }): Promise<number>;
    /**
     * Edits a role.
     *
     * The GC replaces a role wholesale, so the current one is read first and patched.
     * Pass `expected` to refuse the write when someone changed the role in the game
     * meanwhile — without it, an edit made in Dota is silently overwritten.
     *
     * `k_eInvalidFlags` means `flags` adds a right the bot's own role lacks — the GC
     * lets a role grant only what the caller has. Removing bits is always allowed.
     *
     * @returns the role as it now stands.
     */
    modifyRole(roleId: number, patch: {
        name?: string;
        flags?: number;
    }, expected?: {
        name?: string;
        flags?: number;
    }): Promise<CMsgGuildRole>;
    /** Deletes a role. The GC refuses while anyone still holds it. */
    removeRole(roleId: number): Promise<void>;
    /**
     * Reorders every role at once — the list must name them all, top first.
     *
     * @returns the order the GC confirmed, which can differ from the one asked for.
     */
    setRoleOrder(orderedRoleIds: number[]): Promise<number[]>;
    /** Invites an account to the guild. */
    invite(accountId: number): Promise<void>;
    /** Withdraws an invite that has not been answered. */
    cancelInvite(accountId: number): Promise<void>;
    /** Removes a member from the guild. */
    kick(accountId: number): Promise<void>;
    /** Sets the message of the day. */
    setMotd(text: string): Promise<void>;
    /** Sets the guild description. */
    setDescription(text: string): Promise<void>;
    /**
     * Watches the GC's guild push notifications.
     *
     * A single change can produce several notifications, so they are collapsed into one
     * callback per burst. The GC says only that something changed — call `data()` from
     * the callback to see what.
     *
     * @returns an unsubscribe function.
     */
    onChange(callback: (reason: GuildChangeReason) => void): () => void;
    private requireGuildId;
    private enqueue;
    /** A GC request whose reply carries a `result` code, turned into an error or a value. */
    private job;
    private resolveRoleId;
    private setInfo;
    private cacheBotRole;
}

export { GCOperationError, GC_RESULT_STALE, GC_RESULT_TIMEOUT, GUILD_ROLE_FLAG, GUILD_ROLE_FLAG_MASK, Guild, type GuildChangeReason, type GuildEventMember, type GuildIdentity, type GuildMember, type GuildOp, type GuildOptions, NoGuildError };
