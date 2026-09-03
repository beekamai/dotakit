"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; } var _class;



var _chunkR7TOZZ5Xcjs = require('./chunk-R7TOZZ5X.cjs');












var _chunkKNCAQGVIcjs = require('./chunk-KNCAQGVI.cjs');

// src/guild/index.ts
var GUILD_ROLE_FLAG = {
  INVITE: 1,
  KICK: 2
};
var GUILD_ROLE_FLAG_MASK = 31;
var GC_RESULT_TIMEOUT = -1;
var GC_RESULT_STALE = -2;
var RESULT_NAMES = {
  find: _chunkKNCAQGVIcjs.cMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponseToJSON,
  fetchData: _chunkKNCAQGVIcjs.cMsgClientToGCRequestGuildDataResponse_EResponseToJSON,
  kick: _chunkKNCAQGVIcjs.cMsgClientToGCKickGuildMemberResponse_EResponseToJSON,
  setRole: _chunkKNCAQGVIcjs.cMsgClientToGCSetGuildMemberRoleResponse_EResponseToJSON,
  invite: _chunkKNCAQGVIcjs.cMsgClientToGCInviteToGuildResponse_EResponseToJSON,
  cancelInvite: _chunkKNCAQGVIcjs.cMsgClientToGCCancelInviteToGuildResponse_EResponseToJSON,
  setInfo: _chunkKNCAQGVIcjs.cMsgClientToGCSetGuildInfoResponse_EResponseToJSON,
  addRole: _chunkKNCAQGVIcjs.cMsgClientToGCAddGuildRoleResponse_EResponseToJSON,
  modifyRole: _chunkKNCAQGVIcjs.cMsgClientToGCModifyGuildRoleResponse_EResponseToJSON,
  removeRole: _chunkKNCAQGVIcjs.cMsgClientToGCRemoveGuildRoleResponse_EResponseToJSON,
  roleOrder: _chunkKNCAQGVIcjs.cMsgClientToGCSetGuildRoleOrderResponse_EResponseToJSON
};
function resultName(op, result) {
  if (result === GC_RESULT_TIMEOUT) return "timeout (no GC response)";
  if (result === GC_RESULT_STALE) return "role changed in game since it was read";
  try {
    return _nullishCoalesce(_optionalChain([RESULT_NAMES, 'access', _ => _[op], 'optionalCall', _2 => _2(result)]), () => ( `result ${result}`));
  } catch (e) {
    return `unknown result ${result}`;
  }
}
var GCOperationError = class extends Error {
  constructor(op, result) {
    const name = resultName(op, result);
    super(`GC ${op} failed: ${name}`);
    this.op = op;
    this.result = result;
    this.name = "GCOperationError";
    this.resultName = name;
  }
  
  
  
};
var NoGuildError = class extends Error {
  constructor(message = "No guild: pass guildId, or call find() with an accountId first") {
    super(message);
    this.name = "NoGuildError";
  }
};
var CHANGE_MESSAGES = [
  [8675 /* k_EMsgGCToClientGuildDataUpdated */, "data"],
  [8747 /* k_EMsgGCToClientGuildMembersDataUpdated */, "members"],
  [8678 /* k_EMsgGCToClientGuildMembershipUpdated */, "membership"]
];
var DEFAULT_DEBOUNCE_MS = 5e3;
var Guild = (_class = class {
  
  
  
  
  
  
  
  
  __init() {this.botRole = null}
  /* Writes run one at a time: the GC confirms role edits with a whole ordering, so
     overlapping edits built on the same snapshot quietly clobber each other. */
  __init2() {this.queue = Promise.resolve()}
  constructor(gc, options = {}) {;_class.prototype.__init.call(this);_class.prototype.__init2.call(this);
    this.gc = gc;
    this._guildId = options.guildId;
    this._accountId = options.accountId;
    this._eventId = _nullishCoalesce(options.eventId, () => ( 0));
    this.timeoutMs = _nullishCoalesce(options.timeoutMs, () => ( _chunkR7TOZZ5Xcjs.GC_TIMEOUT_MS));
    this.debounceMs = _nullishCoalesce(options.debounceMs, () => ( DEFAULT_DEBOUNCE_MS));
    this.logger = options.logger;
  }
  /** The guild id, once known — set at construction or by `find()`. */
  get guildId() {
    return this._guildId;
  }
  /** The guild tag, once `find()` has run. */
  get guildTag() {
    return this._tag;
  }
  /** The account whose guild this is. Set it if it was not known at construction. */
  set accountId(value) {
    this._accountId = value;
  }
  get accountId() {
    return this._accountId;
  }
  // -------------------------------------------------------------------- reads
  /**
   * Finds the guild the account belongs to, and remembers it.
   *
   * @returns the guild, or `null` when the account is in none.
   */
  async find() {
    if (this._accountId === void 0) throw new NoGuildError("find() needs an accountId");
    const reply = await _chunkR7TOZZ5Xcjs.oneShot.call(void 0, this.gc, {
      request: [8727 /* k_EMsgClientToGCRequestAccountGuildPersonaInfo */, { accountId: this._accountId }],
      response: 8728 /* k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse */,
      timeoutMs: this.timeoutMs
    });
    if (!reply) throw new GCOperationError("find", GC_RESULT_TIMEOUT);
    if (reply.result !== 1) throw new GCOperationError("find", _nullishCoalesce(reply.result, () => ( 0)));
    const first = _optionalChain([reply, 'access', _3 => _3.personaInfo, 'optionalAccess', _4 => _4.guildPersonaInfos, 'optionalAccess', _5 => _5[0]]);
    if (!first) return null;
    this._guildId = first.guildId;
    this._tag = first.guildTag;
    return { guildId: first.guildId, guildTag: first.guildTag, guildFlags: first.guildFlags };
  }
  /** The full guild snapshot straight from the GC: info, roles, members, invites. */
  async data() {
    const guildId = this.requireGuildId();
    const reply = await _chunkR7TOZZ5Xcjs.oneShot.call(void 0, this.gc, {
      request: [8673 /* k_EMsgClientToGCRequestGuildData */, { guildId }],
      response: 8674 /* k_EMsgClientToGCRequestGuildDataResponse */,
      accept: (payload) => !payload.guildData || payload.guildData.guildId === guildId,
      timeoutMs: this.timeoutMs
    });
    if (!reply) throw new GCOperationError("fetchData", GC_RESULT_TIMEOUT);
    if (reply.result !== 1 || !reply.guildData) throw new GCOperationError("fetchData", _nullishCoalesce(reply.result, () => ( 0)));
    this.cacheBotRole(reply.guildData);
    return reply.guildData;
  }
  /** The roster, with role names resolved and timestamps turned into dates. */
  async members() {
    const data = await this.data();
    const names = new Map(data.guildRoles.map((role) => [role.roleId, role.roleName]));
    return data.guildMembers.map((member) => ({
      accountId: member.memberAccountId,
      roleId: member.memberRoleId,
      roleName: _nullishCoalesce(names.get(member.memberRoleId), () => ( null)),
      joinedAt: _chunkR7TOZZ5Xcjs.fromUnixSeconds.call(void 0, member.memberJoinedTimestamp),
      lastActiveAt: _chunkR7TOZZ5Xcjs.fromUnixSeconds.call(void 0, member.memberLastActiveTimestamp)
    }));
  }
  /** The guild's roles, top of the ladder first (`roleOrder` ascending). */
  async roles() {
    const data = await this.data();
    return [...data.guildRoles].sort((a, b) => a.roleOrder - b.roleOrder);
  }
  /**
   * The role the logged-in account holds, from a fresh snapshot.
   *
   * @returns `null` when the account is not a member. Needs `accountId`.
   */
  async myRole() {
    if (this._accountId === void 0) throw new NoGuildError("myRole() needs an accountId");
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
  async eventMembers(eventId = this._eventId) {
    const guildId = this.requireGuildId();
    const reply = await _chunkR7TOZZ5Xcjs.oneShot.call(void 0, this.gc, {
      request: [8721 /* k_EMsgClientToGCRequestGuildEventMembers */, { guildId, eventId }],
      response: 8722 /* k_EMsgClientToGCRequestGuildEventMembersResponse */,
      timeoutMs: this.timeoutMs
    });
    if (!reply) throw new GCOperationError("eventMembers", GC_RESULT_TIMEOUT);
    if (reply.result !== 1) throw new GCOperationError("eventMembers", _nullishCoalesce(reply.result, () => ( 0)));
    return reply.members.map((member) => ({ accountId: member.accountId, points: member.guildPointsEarned }));
  }
  // ------------------------------------------------------------------- writes
  /** Moves a member to another role, by role id or by role name (case-insensitive). */
  async setRole(accountId, roleIdOrName) {
    const guildId = this.requireGuildId();
    return this.enqueue(async () => {
      const roleId = await this.resolveRoleId(roleIdOrName);
      await this.job("setRole", 8671 /* k_EMsgClientToGCSetGuildMemberRole */, {
        guildId,
        targetAccountId: accountId,
        targetRoleId: roleId
      });
    });
  }
  /**
   * Creates a role.
   *
   * `k_eInvalidFlags` means the flags include a right the bot's own role lacks:
   * the GC lets a role grant only what the caller has (the guild master has all).
   *
   * @returns the role id the GC assigned.
   */
  async addRole(role) {
    const guildId = this.requireGuildId();
    return this.enqueue(async () => {
      const reply = await this.job(
        "addRole",
        8653 /* k_EMsgClientToGCAddGuildRole */,
        { guildId, roleName: role.name, roleFlags: role.flags }
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
   * `k_eInvalidFlags` means `flags` adds a right the bot's own role lacks — the GC
   * lets a role grant only what the caller has. Removing bits is always allowed.
   *
   * @returns the role as it now stands.
   */
  async modifyRole(roleId, patch, expected) {
    const guildId = this.requireGuildId();
    return this.enqueue(async () => {
      const data = await this.data();
      const current = data.guildRoles.find((role) => role.roleId === roleId);
      if (!current) throw new GCOperationError(
        "modifyRole",
        5
        /* k_eInvalidRole */
      );
      if (expected && (expected.flags !== void 0 && expected.flags !== current.roleFlags || expected.name !== void 0 && expected.name !== current.roleName)) {
        throw new GCOperationError("modifyRole", GC_RESULT_STALE);
      }
      const next = {
        roleId,
        roleName: _nullishCoalesce(patch.name, () => ( current.roleName)),
        roleFlags: _nullishCoalesce(patch.flags, () => ( current.roleFlags)),
        roleOrder: current.roleOrder
      };
      await this.job("modifyRole", 8655 /* k_EMsgClientToGCModifyGuildRole */, {
        guildId,
        roleId,
        roleName: next.roleName,
        roleFlags: next.roleFlags
      });
      return next;
    });
  }
  /** Deletes a role. The GC refuses while anyone still holds it. */
  async removeRole(roleId) {
    const guildId = this.requireGuildId();
    return this.enqueue(async () => {
      await this.job("removeRole", 8657 /* k_EMsgClientToGCRemoveGuildRole */, { guildId, roleId });
    });
  }
  /**
   * Reorders every role at once — the list must name them all, top first.
   *
   * @returns the order the GC confirmed, which can differ from the one asked for.
   */
  async setRoleOrder(orderedRoleIds) {
    const guildId = this.requireGuildId();
    return this.enqueue(async () => {
      const data = await this.data();
      const previousRoleIds = [...data.guildRoles].sort((a, b) => a.roleOrder - b.roleOrder).map((role) => role.roleId);
      const reply = await this.job(
        "roleOrder",
        8683 /* k_EMsgClientToGCSetGuildRoleOrder */,
        { guildId, requestedRoleIds: orderedRoleIds, previousRoleIds }
      );
      return reply.confirmedRoleIds;
    });
  }
  /** Invites an account to the guild. */
  async invite(accountId) {
    const guildId = this.requireGuildId();
    return this.enqueue(async () => {
      await this.job("invite", 8663 /* k_EMsgClientToGCInviteToGuild */, { guildId, targetAccountId: accountId });
    });
  }
  /** Withdraws an invite that has not been answered. */
  async cancelInvite(accountId) {
    const guildId = this.requireGuildId();
    return this.enqueue(async () => {
      await this.job("cancelInvite", 8667 /* k_EMsgClientToGCCancelInviteToGuild */, {
        guildId,
        targetAccountId: accountId
      });
    });
  }
  /** Removes a member from the guild. */
  async kick(accountId) {
    const guildId = this.requireGuildId();
    return this.enqueue(async () => {
      await this.job("kick", 8669 /* k_EMsgClientToGCKickGuildMember */, { guildId, targetAccountId: accountId });
    });
  }
  /** Sets the message of the day. */
  setMotd(text) {
    return this.setInfo({ motd: text });
  }
  /** Sets the guild description. */
  setDescription(text) {
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
  onChange(callback) {
    let timer = null;
    let pending = null;
    const fire = (reason) => {
      pending = reason;
      if (timer) return;
      timer = setTimeout(() => {
        timer = null;
        const value = pending;
        pending = null;
        try {
          callback(value);
        } catch (error) {
          _optionalChain([this, 'access', _6 => _6.logger, 'optionalAccess', _7 => _7.error, 'optionalCall', _8 => _8("dotakit: guild onChange listener threw", error)]);
        }
      }, this.debounceMs);
    };
    const listeners = CHANGE_MESSAGES.map(([msgId, reason]) => {
      const listener = (payload) => {
        const id = _nullishCoalesce(_optionalChain([payload, 'optionalAccess', _9 => _9.guildId]), () => ( _optionalChain([payload, 'optionalAccess', _10 => _10.guildData, 'optionalAccess', _11 => _11.guildId])));
        if (id !== void 0 && this._guildId !== void 0 && id !== this._guildId) return;
        fire(reason);
      };
      this.gc.router.on(msgId, listener);
      return [msgId, listener];
    });
    return () => {
      if (timer) clearTimeout(timer);
      timer = null;
      for (const [msgId, listener] of listeners) this.gc.router.off(msgId, listener);
    };
  }
  // ---------------------------------------------------------------- internals
  requireGuildId() {
    if (this._guildId === void 0) throw new NoGuildError();
    return this._guildId;
  }
  enqueue(task) {
    const run = this.queue.then(task, task);
    this.queue = run.then(
      () => void 0,
      () => void 0
    );
    return run;
  }
  /** A GC request whose reply carries a `result` code, turned into an error or a value. */
  async job(op, msgId, body) {
    let reply;
    try {
      reply = await this.gc.sendJob(msgId, body, { timeoutMs: this.timeoutMs });
    } catch (error) {
      _optionalChain([this, 'access', _12 => _12.logger, 'optionalAccess', _13 => _13.warn, 'optionalCall', _14 => _14("dotakit: GC did not confirm %s", op, error)]);
      throw new GCOperationError(op, GC_RESULT_TIMEOUT);
    }
    if (_optionalChain([reply, 'optionalAccess', _15 => _15.result]) !== 1) throw new GCOperationError(op, _nullishCoalesce(_optionalChain([reply, 'optionalAccess', _16 => _16.result]), () => ( 0)));
    return reply;
  }
  async resolveRoleId(roleIdOrName) {
    if (typeof roleIdOrName === "number") return roleIdOrName;
    const wanted = roleIdOrName.trim().toLowerCase();
    const data = await this.data();
    const match = data.guildRoles.find((role) => role.roleName.trim().toLowerCase() === wanted);
    if (!match) throw new NoGuildError(`No role named "${roleIdOrName}" in guild ${this._guildId}`);
    return match.roleId;
  }
  /* SetGuildInfo takes the whole CMsgGuildInfo — read the current one and patch it,
     or the fields left out are wiped. */
  setInfo(patch) {
    const guildId = this.requireGuildId();
    return this.enqueue(async () => {
      const data = await this.data();
      const current = data.guildInfo;
      if (!current) throw new GCOperationError("fetchData", 0);
      const guildInfo = {
        ...current,
        ...patch.motd !== void 0 ? { guildMotd: patch.motd, guildMotdTimestamp: Math.floor(Date.now() / 1e3) } : {},
        ...patch.description !== void 0 ? { guildDescription: patch.description } : {}
      };
      const guildChatType = current.guildChatGroupId && current.guildChatGroupId !== "0" ? 1 /* k_EGuildChatType_SteamChatGroup */ : 2 /* k_EGuildChatType_GC */;
      await this.job("setInfo", 8651 /* k_EMsgClientToGCSetGuildInfo */, { guildId, guildInfo, guildChatType });
    });
  }
  cacheBotRole(data) {
    if (this._accountId === void 0) return;
    const member = data.guildMembers.find((entry) => entry.memberAccountId === this._accountId);
    this.botRole = member ? _nullishCoalesce(data.guildRoles.find((role) => role.roleId === member.memberRoleId), () => ( null)) : null;
  }
}, _class);









exports.GUILD_ROLE_FLAG = GUILD_ROLE_FLAG; exports.GUILD_ROLE_FLAG_MASK = GUILD_ROLE_FLAG_MASK; exports.GC_RESULT_TIMEOUT = GC_RESULT_TIMEOUT; exports.GC_RESULT_STALE = GC_RESULT_STALE; exports.GCOperationError = GCOperationError; exports.NoGuildError = NoGuildError; exports.Guild = Guild;
//# sourceMappingURL=chunk-DI6HTADB.cjs.map