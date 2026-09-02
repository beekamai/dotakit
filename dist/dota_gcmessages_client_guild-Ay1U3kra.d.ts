import { BinaryWriter, BinaryReader } from '@bufbuild/protobuf/wire';

declare enum EGuildAuditAction {
    k_EGuildAuditAction_Invalid = 0,
    k_EGuildAuditAction_GuildCreated = 1,
    k_EGuildAuditAction_GuildLanguageChanged = 2,
    k_EGuildAuditAction_GuildFlagsChanged = 3,
    k_EGuildAuditAction_GuildMemberJoined = 5,
    k_EGuildAuditAction_GuildMemberLeft = 6,
    k_EGuildAuditAction_GuildMemberKicked = 7,
    k_EGuildAuditAction_GuildMemberRoleChanged = 8,
    k_EGuildAuditAction_GuildLogoChanged = 9,
    k_EGuildAuditAction_GuildRegionChanged = 10,
    k_EGuildAuditAction_GuildDescriptionChanged = 11,
    k_EGuildAuditAction_GuildPrimaryColorChanged = 12,
    k_EGuildAuditAction_GuildSecondaryColorChanged = 13,
    k_EGuildAuditAction_GuildPatternChanged = 14,
    k_EGuildAuditAction_AdminClearedLogo = 15,
    k_EGuildAuditAction_GuildRequiredRankChanged = 16,
    k_EGuildAuditAction_GuildMotDChanged = 18,
    k_EGuildAuditAction_AdminResetName = 19,
    k_EGuildAuditAction_AdminResetTag = 20,
    k_EGuildAuditAction_AdminLock = 21,
    k_EGuildAuditAction_GuildNameChanged = 22,
    k_EGuildAuditAction_GuildTagChanged = 23,
    k_EGuildAuditAction_AdminPermitted = 24,
    k_EGuildAuditAction_AdminBlocked = 25,
    k_EGuildAuditAction_AdminBannedUser = 26,
    k_EGuildAuditAction_AdminExonerated = 27
}
declare function eGuildAuditActionFromJSON(object: any): EGuildAuditAction;
declare function eGuildAuditActionToJSON(object: EGuildAuditAction): string;
declare enum EGuildChatType {
    k_EGuildChatType_Unspecified = 0,
    k_EGuildChatType_SteamChatGroup = 1,
    k_EGuildChatType_GC = 2
}
declare function eGuildChatTypeFromJSON(object: any): EGuildChatType;
declare function eGuildChatTypeToJSON(object: EGuildChatType): string;
declare enum CMsgClientToGCCreateGuildResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidName = 5,
    k_eNameAlreadyUsed = 6,
    k_eInvalidTag = 7,
    k_eTagAlreadyUsed = 8,
    k_eInvalidDescription = 9,
    k_eInvalidRegion = 10,
    k_eInvalidLogo = 11,
    k_eDoesNotOwnEvent = 12,
    k_eGuildLimit = 13,
    k_eInvalidMotD = 14,
    k_eBlocked = 15,
    k_eFreeTrialNotAllowed = 16
}
declare function cMsgClientToGCCreateGuildResponse_EResponseFromJSON(object: any): CMsgClientToGCCreateGuildResponse_EResponse;
declare function cMsgClientToGCCreateGuildResponse_EResponseToJSON(object: CMsgClientToGCCreateGuildResponse_EResponse): string;
declare enum CMsgClientToGCSetGuildInfoResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eNotMember = 6,
    k_eNoPermission = 7,
    k_eMotDTooLong = 8,
    k_eNameChangeNoPermissions = 9,
    k_eTagChangeNoPermissions = 10,
    k_eNameInvalid = 11,
    k_eTagInvalid = 12,
    k_eDescriptionInvalid = 13,
    k_eBlocked = 14
}
declare function cMsgClientToGCSetGuildInfoResponse_EResponseFromJSON(object: any): CMsgClientToGCSetGuildInfoResponse_EResponse;
declare function cMsgClientToGCSetGuildInfoResponse_EResponseToJSON(object: CMsgClientToGCSetGuildInfoResponse_EResponse): string;
declare enum CMsgClientToGCRequestGuildDataResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eNotMember = 6
}
declare function cMsgClientToGCRequestGuildDataResponse_EResponseFromJSON(object: any): CMsgClientToGCRequestGuildDataResponse_EResponse;
declare function cMsgClientToGCRequestGuildDataResponse_EResponseToJSON(object: CMsgClientToGCRequestGuildDataResponse_EResponse): string;
declare enum CMsgClientToGCRequestGuildMembershipResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4
}
declare function cMsgClientToGCRequestGuildMembershipResponse_EResponseFromJSON(object: any): CMsgClientToGCRequestGuildMembershipResponse_EResponse;
declare function cMsgClientToGCRequestGuildMembershipResponse_EResponseToJSON(object: CMsgClientToGCRequestGuildMembershipResponse_EResponse): string;
declare enum CMsgClientToGCJoinGuildResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eGuildFull = 6,
    k_eAlreadyMember = 7,
    k_eGuildLimit = 8,
    k_eGuildRequiresInvite = 9,
    k_eGuildRankTooLow = 10
}
declare function cMsgClientToGCJoinGuildResponse_EResponseFromJSON(object: any): CMsgClientToGCJoinGuildResponse_EResponse;
declare function cMsgClientToGCJoinGuildResponse_EResponseToJSON(object: CMsgClientToGCJoinGuildResponse_EResponse): string;
declare enum CMsgClientToGCLeaveGuildResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eNotMember = 6,
    k_eLastAdmin = 7
}
declare function cMsgClientToGCLeaveGuildResponse_EResponseFromJSON(object: any): CMsgClientToGCLeaveGuildResponse_EResponse;
declare function cMsgClientToGCLeaveGuildResponse_EResponseToJSON(object: CMsgClientToGCLeaveGuildResponse_EResponse): string;
declare enum CMsgClientToGCKickGuildMemberResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eRequesterNotMember = 6,
    k_eTargetNotMember = 7,
    k_eNoPermission = 8,
    k_eCantKickSelf = 9
}
declare function cMsgClientToGCKickGuildMemberResponse_EResponseFromJSON(object: any): CMsgClientToGCKickGuildMemberResponse_EResponse;
declare function cMsgClientToGCKickGuildMemberResponse_EResponseToJSON(object: CMsgClientToGCKickGuildMemberResponse_EResponse): string;
declare enum CMsgClientToGCSetGuildMemberRoleResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eRequesterNotMember = 6,
    k_eTargetNotMember = 7,
    k_eNoPermission = 8,
    k_eInvalidRole = 9,
    k_eAdminViolation = 10
}
declare function cMsgClientToGCSetGuildMemberRoleResponse_EResponseFromJSON(object: any): CMsgClientToGCSetGuildMemberRoleResponse_EResponse;
declare function cMsgClientToGCSetGuildMemberRoleResponse_EResponseToJSON(object: CMsgClientToGCSetGuildMemberRoleResponse_EResponse): string;
declare enum CMsgClientToGCInviteToGuildResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eGuildFull = 6,
    k_eRequesterNotMember = 7,
    k_eAlreadyAMember = 8,
    k_eAlreadyInvited = 9,
    k_eNoInvitePermissions = 10,
    k_eTooManyInvites = 11,
    k_eInvalidUser = 12
}
declare function cMsgClientToGCInviteToGuildResponse_EResponseFromJSON(object: any): CMsgClientToGCInviteToGuildResponse_EResponse;
declare function cMsgClientToGCInviteToGuildResponse_EResponseToJSON(object: CMsgClientToGCInviteToGuildResponse_EResponse): string;
declare enum CMsgClientToGCDeclineInviteToGuildResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eNoInviteFound = 6
}
declare function cMsgClientToGCDeclineInviteToGuildResponse_EResponseFromJSON(object: any): CMsgClientToGCDeclineInviteToGuildResponse_EResponse;
declare function cMsgClientToGCDeclineInviteToGuildResponse_EResponseToJSON(object: CMsgClientToGCDeclineInviteToGuildResponse_EResponse): string;
declare enum CMsgClientToGCAcceptInviteToGuildResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eNoInviteFound = 6,
    k_eGuildFull = 7,
    k_eGuildLimit = 8,
    k_eInvalidInviter = 9,
    k_eAlreadyInGuild = 10
}
declare function cMsgClientToGCAcceptInviteToGuildResponse_EResponseFromJSON(object: any): CMsgClientToGCAcceptInviteToGuildResponse_EResponse;
declare function cMsgClientToGCAcceptInviteToGuildResponse_EResponseToJSON(object: CMsgClientToGCAcceptInviteToGuildResponse_EResponse): string;
declare enum CMsgClientToGCCancelInviteToGuildResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eNoInviteFound = 6,
    k_eNoPermissions = 7
}
declare function cMsgClientToGCCancelInviteToGuildResponse_EResponseFromJSON(object: any): CMsgClientToGCCancelInviteToGuildResponse_EResponse;
declare function cMsgClientToGCCancelInviteToGuildResponse_EResponseToJSON(object: CMsgClientToGCCancelInviteToGuildResponse_EResponse): string;
declare enum CMsgClientToGCAddGuildRoleResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eNameAlreadyUsed = 6,
    k_eNoPermissions = 7,
    k_eInvalidFlags = 8,
    k_eInvalidName = 9,
    k_eAdminViolation = 10,
    k_eTooManyRoles = 11,
    k_eBlocked = 12
}
declare function cMsgClientToGCAddGuildRoleResponse_EResponseFromJSON(object: any): CMsgClientToGCAddGuildRoleResponse_EResponse;
declare function cMsgClientToGCAddGuildRoleResponse_EResponseToJSON(object: CMsgClientToGCAddGuildRoleResponse_EResponse): string;
declare enum CMsgClientToGCModifyGuildRoleResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eInvalidRole = 6,
    k_eNameAlreadyUsed = 7,
    k_eInvalidFlags = 8,
    k_eInvalidName = 9,
    k_eNoPermissions = 10,
    k_eAdminViolation = 11,
    k_eBlocked = 12
}
declare function cMsgClientToGCModifyGuildRoleResponse_EResponseFromJSON(object: any): CMsgClientToGCModifyGuildRoleResponse_EResponse;
declare function cMsgClientToGCModifyGuildRoleResponse_EResponseToJSON(object: CMsgClientToGCModifyGuildRoleResponse_EResponse): string;
declare enum CMsgClientToGCRemoveGuildRoleResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eInvalidRole = 6,
    k_eRoleNotEmpty = 7,
    k_eNoPermissions = 8,
    k_eAdminViolation = 9,
    k_eCantRemoveDefaultRole = 10
}
declare function cMsgClientToGCRemoveGuildRoleResponse_EResponseFromJSON(object: any): CMsgClientToGCRemoveGuildRoleResponse_EResponse;
declare function cMsgClientToGCRemoveGuildRoleResponse_EResponseToJSON(object: CMsgClientToGCRemoveGuildRoleResponse_EResponse): string;
declare enum CMsgClientToGCSetGuildRoleOrderResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eInvalidRole = 6,
    k_eInvalidOrder = 7,
    k_eNoPermissions = 8,
    k_eAdminViolation = 9
}
declare function cMsgClientToGCSetGuildRoleOrderResponse_EResponseFromJSON(object: any): CMsgClientToGCSetGuildRoleOrderResponse_EResponse;
declare function cMsgClientToGCSetGuildRoleOrderResponse_EResponseToJSON(object: CMsgClientToGCSetGuildRoleOrderResponse_EResponse): string;
declare enum CMsgClientToGCRequestGuildFeedResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eNoPermissions = 6
}
declare function cMsgClientToGCRequestGuildFeedResponse_EResponseFromJSON(object: any): CMsgClientToGCRequestGuildFeedResponse_EResponse;
declare function cMsgClientToGCRequestGuildFeedResponse_EResponseToJSON(object: CMsgClientToGCRequestGuildFeedResponse_EResponse): string;
declare enum CMsgClientToGCAddPlayerToGuildChatResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidGuild = 5,
    k_eNotMember = 6,
    k_eSteamChatNotEnabled = 7
}
declare function cMsgClientToGCAddPlayerToGuildChatResponse_EResponseFromJSON(object: any): CMsgClientToGCAddPlayerToGuildChatResponse_EResponse;
declare function cMsgClientToGCAddPlayerToGuildChatResponse_EResponseToJSON(object: CMsgClientToGCAddPlayerToGuildChatResponse_EResponse): string;
declare enum CMsgFindGuildByTagResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidTag = 5,
    k_eGuildNotFound = 6
}
declare function cMsgFindGuildByTagResponse_EResponseFromJSON(object: any): CMsgFindGuildByTagResponse_EResponse;
declare function cMsgFindGuildByTagResponse_EResponseToJSON(object: CMsgFindGuildByTagResponse_EResponse): string;
declare enum CMsgSearchForOpenGuildsResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4
}
declare function cMsgSearchForOpenGuildsResponse_EResponseFromJSON(object: any): CMsgSearchForOpenGuildsResponse_EResponse;
declare function cMsgSearchForOpenGuildsResponse_EResponseToJSON(object: CMsgSearchForOpenGuildsResponse_EResponse): string;
declare enum CMsgClientToGCReportGuildContent_EContentFlags {
    k_eNone = 0,
    k_eInappropriateName = 1,
    k_eInappropriateTag = 2,
    k_eInappropriateLogo = 4,
    k_eValidFlags = 7
}
declare function cMsgClientToGCReportGuildContent_EContentFlagsFromJSON(object: any): CMsgClientToGCReportGuildContent_EContentFlags;
declare function cMsgClientToGCReportGuildContent_EContentFlagsToJSON(object: CMsgClientToGCReportGuildContent_EContentFlags): string;
declare enum CMsgClientToGCReportGuildContentResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eGuildNotFound = 5,
    k_eFlagsInvalid = 6
}
declare function cMsgClientToGCReportGuildContentResponse_EResponseFromJSON(object: any): CMsgClientToGCReportGuildContentResponse_EResponse;
declare function cMsgClientToGCReportGuildContentResponse_EResponseToJSON(object: CMsgClientToGCReportGuildContentResponse_EResponse): string;
declare enum CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidAccount = 5
}
declare function cMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponseFromJSON(object: any): CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse;
declare function cMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponseToJSON(object: CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse): string;
declare enum CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidRequest = 5
}
declare function cMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponseFromJSON(object: any): CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse;
declare function cMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponseToJSON(object: CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse): string;
interface CMsgGuildInfo {
    guildName: string;
    guildTag: string;
    createdTimestamp: number;
    guildLanguage: number;
    guildFlags: number;
    guildLogo: string;
    guildRegion: number;
    guildChatGroupId: string;
    guildDescription: string;
    defaultChatChannelId: string;
    guildPrimaryColor: number;
    guildSecondaryColor: number;
    guildPattern: number;
    guildRefreshTimeOffset: number;
    guildRequiredRankTier: number;
    guildMotdTimestamp: number;
    guildMotd: string;
}
declare const CMsgGuildInfo: MessageFns<CMsgGuildInfo>;
interface CMsgGuildSummary {
    guildInfo: CMsgGuildInfo | undefined;
    memberCount: number;
    eventPoints: CMsgGuildSummary_EventPoints[];
}
declare const CMsgGuildSummary: MessageFns<CMsgGuildSummary>;
interface CMsgGuildSummary_EventPoints {
    eventId: number;
    guildPoints: number;
    guildRank: number;
    guildWeeklyRank: number;
    guildWeeklyPercentile: number;
    guildCurrentPercentile: number;
}
declare const CMsgGuildSummary_EventPoints: MessageFns<CMsgGuildSummary_EventPoints>;
interface CMsgGuildRole {
    roleId: number;
    roleName: string;
    roleFlags: number;
    roleOrder: number;
}
declare const CMsgGuildRole: MessageFns<CMsgGuildRole>;
interface CMsgGuildMember {
    memberAccountId: number;
    memberRoleId: number;
    memberJoinedTimestamp: number;
    memberLastActiveTimestamp: number;
}
declare const CMsgGuildMember: MessageFns<CMsgGuildMember>;
interface CMsgGuildInvite {
    requesterAccountId: number;
    targetAccountId: number;
    timestampSent: number;
}
declare const CMsgGuildInvite: MessageFns<CMsgGuildInvite>;
interface CMsgGuildData {
    guildId: number;
    guildInfo: CMsgGuildInfo | undefined;
    guildRoles: CMsgGuildRole[];
    guildMembers: CMsgGuildMember[];
    guildInvites: CMsgGuildInvite[];
}
declare const CMsgGuildData: MessageFns<CMsgGuildData>;
interface CMsgAccountGuildInvite {
    guildId: number;
    requesterAccountId: number;
    timestampSent: number;
}
declare const CMsgAccountGuildInvite: MessageFns<CMsgAccountGuildInvite>;
interface CMsgAccountGuildMemberships {
    guildIds: number[];
    guildInvites: CMsgAccountGuildInvite[];
}
declare const CMsgAccountGuildMemberships: MessageFns<CMsgAccountGuildMemberships>;
interface CMsgGuildPersonaInfo {
    guildId: number;
    guildTag: string;
    guildFlags: number;
}
declare const CMsgGuildPersonaInfo: MessageFns<CMsgGuildPersonaInfo>;
interface CMsgAccountGuildsPersonaInfo {
    guildPersonaInfos: CMsgGuildPersonaInfo[];
}
declare const CMsgAccountGuildsPersonaInfo: MessageFns<CMsgAccountGuildsPersonaInfo>;
interface CMsgGuildFeedEvent {
    feedEventId: string;
    timestamp: number;
    eventType: number;
    paramUint1: number;
    paramUint2: number;
    paramUint3: number;
}
declare const CMsgGuildFeedEvent: MessageFns<CMsgGuildFeedEvent>;
interface CMsgClientToGCCreateGuild {
    guildInfo: CMsgGuildInfo | undefined;
    guildChatType: EGuildChatType;
}
declare const CMsgClientToGCCreateGuild: MessageFns<CMsgClientToGCCreateGuild>;
interface CMsgClientToGCCreateGuildResponse {
    result: CMsgClientToGCCreateGuildResponse_EResponse;
    guildId: number;
}
declare const CMsgClientToGCCreateGuildResponse: MessageFns<CMsgClientToGCCreateGuildResponse>;
interface CMsgClientToGCSetGuildInfo {
    guildId: number;
    guildInfo: CMsgGuildInfo | undefined;
    guildChatType: EGuildChatType;
}
declare const CMsgClientToGCSetGuildInfo: MessageFns<CMsgClientToGCSetGuildInfo>;
interface CMsgClientToGCSetGuildInfoResponse {
    result: CMsgClientToGCSetGuildInfoResponse_EResponse;
}
declare const CMsgClientToGCSetGuildInfoResponse: MessageFns<CMsgClientToGCSetGuildInfoResponse>;
interface CMsgClientToGCRequestGuildData {
    guildId: number;
}
declare const CMsgClientToGCRequestGuildData: MessageFns<CMsgClientToGCRequestGuildData>;
interface CMsgClientToGCRequestGuildDataResponse {
    result: CMsgClientToGCRequestGuildDataResponse_EResponse;
    guildData: CMsgGuildData | undefined;
}
declare const CMsgClientToGCRequestGuildDataResponse: MessageFns<CMsgClientToGCRequestGuildDataResponse>;
interface CMsgGCToClientGuildDataUpdated {
    guildData: CMsgGuildData | undefined;
    updateFlags: number;
}
declare const CMsgGCToClientGuildDataUpdated: MessageFns<CMsgGCToClientGuildDataUpdated>;
interface CMsgGCToClientGuildMembersDataUpdated {
    guildId: number;
    membersData: CMsgGuildMember[];
}
declare const CMsgGCToClientGuildMembersDataUpdated: MessageFns<CMsgGCToClientGuildMembersDataUpdated>;
interface CMsgClientToGCRequestGuildMembership {
}
declare const CMsgClientToGCRequestGuildMembership: MessageFns<CMsgClientToGCRequestGuildMembership>;
interface CMsgClientToGCRequestGuildMembershipResponse {
    result: CMsgClientToGCRequestGuildMembershipResponse_EResponse;
    guildMemberships: CMsgAccountGuildMemberships | undefined;
}
declare const CMsgClientToGCRequestGuildMembershipResponse: MessageFns<CMsgClientToGCRequestGuildMembershipResponse>;
interface CMsgGCToClientGuildMembershipUpdated {
    guildMemberships: CMsgAccountGuildMemberships | undefined;
}
declare const CMsgGCToClientGuildMembershipUpdated: MessageFns<CMsgGCToClientGuildMembershipUpdated>;
interface CMsgClientToGCJoinGuild {
    guildId: number;
}
declare const CMsgClientToGCJoinGuild: MessageFns<CMsgClientToGCJoinGuild>;
interface CMsgClientToGCJoinGuildResponse {
    result: CMsgClientToGCJoinGuildResponse_EResponse;
}
declare const CMsgClientToGCJoinGuildResponse: MessageFns<CMsgClientToGCJoinGuildResponse>;
interface CMsgClientToGCLeaveGuild {
    guildId: number;
}
declare const CMsgClientToGCLeaveGuild: MessageFns<CMsgClientToGCLeaveGuild>;
interface CMsgClientToGCLeaveGuildResponse {
    result: CMsgClientToGCLeaveGuildResponse_EResponse;
}
declare const CMsgClientToGCLeaveGuildResponse: MessageFns<CMsgClientToGCLeaveGuildResponse>;
interface CMsgClientToGCKickGuildMember {
    guildId: number;
    targetAccountId: number;
}
declare const CMsgClientToGCKickGuildMember: MessageFns<CMsgClientToGCKickGuildMember>;
interface CMsgClientToGCKickGuildMemberResponse {
    result: CMsgClientToGCKickGuildMemberResponse_EResponse;
}
declare const CMsgClientToGCKickGuildMemberResponse: MessageFns<CMsgClientToGCKickGuildMemberResponse>;
interface CMsgClientToGCSetGuildMemberRole {
    guildId: number;
    targetAccountId: number;
    targetRoleId: number;
}
declare const CMsgClientToGCSetGuildMemberRole: MessageFns<CMsgClientToGCSetGuildMemberRole>;
interface CMsgClientToGCSetGuildMemberRoleResponse {
    result: CMsgClientToGCSetGuildMemberRoleResponse_EResponse;
}
declare const CMsgClientToGCSetGuildMemberRoleResponse: MessageFns<CMsgClientToGCSetGuildMemberRoleResponse>;
interface CMsgClientToGCInviteToGuild {
    guildId: number;
    targetAccountId: number;
}
declare const CMsgClientToGCInviteToGuild: MessageFns<CMsgClientToGCInviteToGuild>;
interface CMsgClientToGCInviteToGuildResponse {
    result: CMsgClientToGCInviteToGuildResponse_EResponse;
}
declare const CMsgClientToGCInviteToGuildResponse: MessageFns<CMsgClientToGCInviteToGuildResponse>;
interface CMsgClientToGCDeclineInviteToGuild {
    guildId: number;
}
declare const CMsgClientToGCDeclineInviteToGuild: MessageFns<CMsgClientToGCDeclineInviteToGuild>;
interface CMsgClientToGCDeclineInviteToGuildResponse {
    result: CMsgClientToGCDeclineInviteToGuildResponse_EResponse;
}
declare const CMsgClientToGCDeclineInviteToGuildResponse: MessageFns<CMsgClientToGCDeclineInviteToGuildResponse>;
interface CMsgClientToGCAcceptInviteToGuild {
    guildId: number;
}
declare const CMsgClientToGCAcceptInviteToGuild: MessageFns<CMsgClientToGCAcceptInviteToGuild>;
interface CMsgClientToGCAcceptInviteToGuildResponse {
    result: CMsgClientToGCAcceptInviteToGuildResponse_EResponse;
}
declare const CMsgClientToGCAcceptInviteToGuildResponse: MessageFns<CMsgClientToGCAcceptInviteToGuildResponse>;
interface CMsgClientToGCCancelInviteToGuild {
    guildId: number;
    targetAccountId: number;
}
declare const CMsgClientToGCCancelInviteToGuild: MessageFns<CMsgClientToGCCancelInviteToGuild>;
interface CMsgClientToGCCancelInviteToGuildResponse {
    result: CMsgClientToGCCancelInviteToGuildResponse_EResponse;
}
declare const CMsgClientToGCCancelInviteToGuildResponse: MessageFns<CMsgClientToGCCancelInviteToGuildResponse>;
interface CMsgClientToGCAddGuildRole {
    guildId: number;
    roleName: string;
    roleFlags: number;
}
declare const CMsgClientToGCAddGuildRole: MessageFns<CMsgClientToGCAddGuildRole>;
interface CMsgClientToGCAddGuildRoleResponse {
    result: CMsgClientToGCAddGuildRoleResponse_EResponse;
    roleId: number;
}
declare const CMsgClientToGCAddGuildRoleResponse: MessageFns<CMsgClientToGCAddGuildRoleResponse>;
interface CMsgClientToGCModifyGuildRole {
    guildId: number;
    roleId: number;
    roleName: string;
    roleFlags: number;
}
declare const CMsgClientToGCModifyGuildRole: MessageFns<CMsgClientToGCModifyGuildRole>;
interface CMsgClientToGCModifyGuildRoleResponse {
    result: CMsgClientToGCModifyGuildRoleResponse_EResponse;
}
declare const CMsgClientToGCModifyGuildRoleResponse: MessageFns<CMsgClientToGCModifyGuildRoleResponse>;
interface CMsgClientToGCRemoveGuildRole {
    guildId: number;
    roleId: number;
}
declare const CMsgClientToGCRemoveGuildRole: MessageFns<CMsgClientToGCRemoveGuildRole>;
interface CMsgClientToGCRemoveGuildRoleResponse {
    result: CMsgClientToGCRemoveGuildRoleResponse_EResponse;
}
declare const CMsgClientToGCRemoveGuildRoleResponse: MessageFns<CMsgClientToGCRemoveGuildRoleResponse>;
interface CMsgClientToGCSetGuildRoleOrder {
    guildId: number;
    requestedRoleIds: number[];
    previousRoleIds: number[];
}
declare const CMsgClientToGCSetGuildRoleOrder: MessageFns<CMsgClientToGCSetGuildRoleOrder>;
interface CMsgClientToGCSetGuildRoleOrderResponse {
    result: CMsgClientToGCSetGuildRoleOrderResponse_EResponse;
    confirmedRoleIds: number[];
}
declare const CMsgClientToGCSetGuildRoleOrderResponse: MessageFns<CMsgClientToGCSetGuildRoleOrderResponse>;
interface CMsgClientToGCGuildFeedRequest {
    guildId: number;
    lastSeenId: string;
}
declare const CMsgClientToGCGuildFeedRequest: MessageFns<CMsgClientToGCGuildFeedRequest>;
interface CMsgClientToGCRequestGuildFeedResponse {
    result: CMsgClientToGCRequestGuildFeedResponse_EResponse;
    guildId: number;
    feedEvents: CMsgGuildFeedEvent[];
}
declare const CMsgClientToGCRequestGuildFeedResponse: MessageFns<CMsgClientToGCRequestGuildFeedResponse>;
interface CMsgGCToClientGuildFeedUpdated {
    guildId: number;
}
declare const CMsgGCToClientGuildFeedUpdated: MessageFns<CMsgGCToClientGuildFeedUpdated>;
interface CMsgClientToGCAddPlayerToGuildChat {
    guildId: number;
}
declare const CMsgClientToGCAddPlayerToGuildChat: MessageFns<CMsgClientToGCAddPlayerToGuildChat>;
interface CMsgClientToGCAddPlayerToGuildChatResponse {
    result: CMsgClientToGCAddPlayerToGuildChatResponse_EResponse;
}
declare const CMsgClientToGCAddPlayerToGuildChatResponse: MessageFns<CMsgClientToGCAddPlayerToGuildChatResponse>;
interface CMsgFindGuildByTagResponse {
    result: CMsgFindGuildByTagResponse_EResponse;
    guildId: number;
    guildSummary: CMsgGuildSummary | undefined;
}
declare const CMsgFindGuildByTagResponse: MessageFns<CMsgFindGuildByTagResponse>;
interface CMsgSearchForOpenGuildsResponse {
    result: CMsgSearchForOpenGuildsResponse_EResponse;
    searchResults: CMsgSearchForOpenGuildsResponse_SearchResult[];
    useWhitelist: boolean;
}
declare const CMsgSearchForOpenGuildsResponse: MessageFns<CMsgSearchForOpenGuildsResponse>;
interface CMsgSearchForOpenGuildsResponse_SearchResult {
    guildId: number;
    guildSummary: CMsgGuildSummary | undefined;
}
declare const CMsgSearchForOpenGuildsResponse_SearchResult: MessageFns<CMsgSearchForOpenGuildsResponse_SearchResult>;
interface CMsgClientToGCReportGuildContent {
    guildId: number;
    guildContentFlags: number;
}
declare const CMsgClientToGCReportGuildContent: MessageFns<CMsgClientToGCReportGuildContent>;
interface CMsgClientToGCReportGuildContentResponse {
    result: CMsgClientToGCReportGuildContentResponse_EResponse;
}
declare const CMsgClientToGCReportGuildContentResponse: MessageFns<CMsgClientToGCReportGuildContentResponse>;
interface CMsgClientToGCRequestAccountGuildPersonaInfo {
    accountId: number;
}
declare const CMsgClientToGCRequestAccountGuildPersonaInfo: MessageFns<CMsgClientToGCRequestAccountGuildPersonaInfo>;
interface CMsgClientToGCRequestAccountGuildPersonaInfoResponse {
    result: CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse;
    personaInfo: CMsgAccountGuildsPersonaInfo | undefined;
}
declare const CMsgClientToGCRequestAccountGuildPersonaInfoResponse: MessageFns<CMsgClientToGCRequestAccountGuildPersonaInfoResponse>;
interface CMsgClientToGCRequestAccountGuildPersonaInfoBatch {
    accountIds: number[];
}
declare const CMsgClientToGCRequestAccountGuildPersonaInfoBatch: MessageFns<CMsgClientToGCRequestAccountGuildPersonaInfoBatch>;
interface CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse {
    result: CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse;
    personaInfos: CMsgAccountGuildsPersonaInfo[];
}
declare const CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse: MessageFns<CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}

export { CMsgClientToGCRequestGuildDataResponse as $, CMsgClientToGCJoinGuild as A, CMsgClientToGCJoinGuildResponse as B, CMsgGuildData as C, CMsgClientToGCJoinGuildResponse_EResponse as D, CMsgClientToGCKickGuildMember as E, CMsgClientToGCKickGuildMemberResponse as F, CMsgClientToGCKickGuildMemberResponse_EResponse as G, CMsgClientToGCLeaveGuild as H, CMsgClientToGCLeaveGuildResponse as I, CMsgClientToGCLeaveGuildResponse_EResponse as J, CMsgClientToGCModifyGuildRole as K, CMsgClientToGCModifyGuildRoleResponse as L, CMsgClientToGCModifyGuildRoleResponse_EResponse as M, CMsgClientToGCRemoveGuildRole as N, CMsgClientToGCRemoveGuildRoleResponse as O, CMsgClientToGCRemoveGuildRoleResponse_EResponse as P, CMsgClientToGCReportGuildContent as Q, CMsgClientToGCReportGuildContentResponse as R, CMsgClientToGCReportGuildContentResponse_EResponse as S, CMsgClientToGCReportGuildContent_EContentFlags as T, CMsgClientToGCRequestAccountGuildPersonaInfo as U, CMsgClientToGCRequestAccountGuildPersonaInfoBatch as V, CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse as W, CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse as X, CMsgClientToGCRequestAccountGuildPersonaInfoResponse as Y, CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse as Z, CMsgClientToGCRequestGuildData as _, CMsgGuildRole as a, cMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponseFromJSON as a$, CMsgClientToGCRequestGuildDataResponse_EResponse as a0, CMsgClientToGCRequestGuildFeedResponse as a1, CMsgClientToGCRequestGuildFeedResponse_EResponse as a2, CMsgClientToGCRequestGuildMembership as a3, CMsgClientToGCRequestGuildMembershipResponse as a4, CMsgClientToGCRequestGuildMembershipResponse_EResponse as a5, CMsgClientToGCSetGuildInfo as a6, CMsgClientToGCSetGuildInfoResponse as a7, CMsgClientToGCSetGuildInfoResponse_EResponse as a8, CMsgClientToGCSetGuildMemberRole as a9, cMsgClientToGCAddGuildRoleResponse_EResponseToJSON as aA, cMsgClientToGCAddPlayerToGuildChatResponse_EResponseFromJSON as aB, cMsgClientToGCAddPlayerToGuildChatResponse_EResponseToJSON as aC, cMsgClientToGCCancelInviteToGuildResponse_EResponseFromJSON as aD, cMsgClientToGCCancelInviteToGuildResponse_EResponseToJSON as aE, cMsgClientToGCCreateGuildResponse_EResponseFromJSON as aF, cMsgClientToGCCreateGuildResponse_EResponseToJSON as aG, cMsgClientToGCDeclineInviteToGuildResponse_EResponseFromJSON as aH, cMsgClientToGCDeclineInviteToGuildResponse_EResponseToJSON as aI, cMsgClientToGCInviteToGuildResponse_EResponseFromJSON as aJ, cMsgClientToGCInviteToGuildResponse_EResponseToJSON as aK, cMsgClientToGCJoinGuildResponse_EResponseFromJSON as aL, cMsgClientToGCJoinGuildResponse_EResponseToJSON as aM, cMsgClientToGCKickGuildMemberResponse_EResponseFromJSON as aN, cMsgClientToGCKickGuildMemberResponse_EResponseToJSON as aO, cMsgClientToGCLeaveGuildResponse_EResponseFromJSON as aP, cMsgClientToGCLeaveGuildResponse_EResponseToJSON as aQ, cMsgClientToGCModifyGuildRoleResponse_EResponseFromJSON as aR, cMsgClientToGCModifyGuildRoleResponse_EResponseToJSON as aS, cMsgClientToGCRemoveGuildRoleResponse_EResponseFromJSON as aT, cMsgClientToGCRemoveGuildRoleResponse_EResponseToJSON as aU, cMsgClientToGCReportGuildContentResponse_EResponseFromJSON as aV, cMsgClientToGCReportGuildContentResponse_EResponseToJSON as aW, cMsgClientToGCReportGuildContent_EContentFlagsFromJSON as aX, cMsgClientToGCReportGuildContent_EContentFlagsToJSON as aY, cMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponseFromJSON as aZ, cMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponseToJSON as a_, CMsgClientToGCSetGuildMemberRoleResponse as aa, CMsgClientToGCSetGuildMemberRoleResponse_EResponse as ab, CMsgClientToGCSetGuildRoleOrder as ac, CMsgClientToGCSetGuildRoleOrderResponse as ad, CMsgClientToGCSetGuildRoleOrderResponse_EResponse as ae, CMsgFindGuildByTagResponse as af, CMsgFindGuildByTagResponse_EResponse as ag, CMsgGCToClientGuildDataUpdated as ah, CMsgGCToClientGuildFeedUpdated as ai, CMsgGCToClientGuildMembersDataUpdated as aj, CMsgGCToClientGuildMembershipUpdated as ak, CMsgGuildFeedEvent as al, CMsgGuildInfo as am, CMsgGuildInvite as an, CMsgGuildMember as ao, CMsgGuildPersonaInfo as ap, CMsgGuildSummary as aq, CMsgGuildSummary_EventPoints as ar, CMsgSearchForOpenGuildsResponse as as, CMsgSearchForOpenGuildsResponse_EResponse as at, CMsgSearchForOpenGuildsResponse_SearchResult as au, EGuildAuditAction as av, EGuildChatType as aw, cMsgClientToGCAcceptInviteToGuildResponse_EResponseFromJSON as ax, cMsgClientToGCAcceptInviteToGuildResponse_EResponseToJSON as ay, cMsgClientToGCAddGuildRoleResponse_EResponseFromJSON as az, CMsgAccountGuildInvite as b, cMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponseToJSON as b0, cMsgClientToGCRequestGuildDataResponse_EResponseFromJSON as b1, cMsgClientToGCRequestGuildDataResponse_EResponseToJSON as b2, cMsgClientToGCRequestGuildFeedResponse_EResponseFromJSON as b3, cMsgClientToGCRequestGuildFeedResponse_EResponseToJSON as b4, cMsgClientToGCRequestGuildMembershipResponse_EResponseFromJSON as b5, cMsgClientToGCRequestGuildMembershipResponse_EResponseToJSON as b6, cMsgClientToGCSetGuildInfoResponse_EResponseFromJSON as b7, cMsgClientToGCSetGuildInfoResponse_EResponseToJSON as b8, cMsgClientToGCSetGuildMemberRoleResponse_EResponseFromJSON as b9, cMsgClientToGCSetGuildMemberRoleResponse_EResponseToJSON as ba, cMsgClientToGCSetGuildRoleOrderResponse_EResponseFromJSON as bb, cMsgClientToGCSetGuildRoleOrderResponse_EResponseToJSON as bc, cMsgFindGuildByTagResponse_EResponseFromJSON as bd, cMsgFindGuildByTagResponse_EResponseToJSON as be, cMsgSearchForOpenGuildsResponse_EResponseFromJSON as bf, cMsgSearchForOpenGuildsResponse_EResponseToJSON as bg, eGuildAuditActionFromJSON as bh, eGuildAuditActionToJSON as bi, eGuildChatTypeFromJSON as bj, eGuildChatTypeToJSON as bk, CMsgAccountGuildMemberships as c, CMsgAccountGuildsPersonaInfo as d, CMsgClientToGCAcceptInviteToGuild as e, CMsgClientToGCAcceptInviteToGuildResponse as f, CMsgClientToGCAcceptInviteToGuildResponse_EResponse as g, CMsgClientToGCAddGuildRole as h, CMsgClientToGCAddGuildRoleResponse as i, CMsgClientToGCAddGuildRoleResponse_EResponse as j, CMsgClientToGCAddPlayerToGuildChat as k, CMsgClientToGCAddPlayerToGuildChatResponse as l, CMsgClientToGCAddPlayerToGuildChatResponse_EResponse as m, CMsgClientToGCCancelInviteToGuild as n, CMsgClientToGCCancelInviteToGuildResponse as o, CMsgClientToGCCancelInviteToGuildResponse_EResponse as p, CMsgClientToGCCreateGuild as q, CMsgClientToGCCreateGuildResponse as r, CMsgClientToGCCreateGuildResponse_EResponse as s, CMsgClientToGCDeclineInviteToGuild as t, CMsgClientToGCDeclineInviteToGuildResponse as u, CMsgClientToGCDeclineInviteToGuildResponse_EResponse as v, CMsgClientToGCGuildFeedRequest as w, CMsgClientToGCInviteToGuild as x, CMsgClientToGCInviteToGuildResponse as y, CMsgClientToGCInviteToGuildResponse_EResponse as z };
