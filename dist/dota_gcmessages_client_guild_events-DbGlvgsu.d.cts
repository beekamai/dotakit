import { BinaryWriter, BinaryReader } from '@bufbuild/protobuf/wire';

declare enum EGCPlatform {
    k_eGCPlatform_None = 0,
    k_eGCPlatform_PC = 1,
    k_eGCPlatform_Mac = 2,
    k_eGCPlatform_Linux = 3,
    k_eGCPlatform_Android = 4,
    k_eGCPlatform_iOS = 5
}
declare function eGCPlatformFromJSON(object: any): EGCPlatform;
declare function eGCPlatformToJSON(object: EGCPlatform): string;
declare enum GCProtoBufMsgSrc {
    GCProtoBufMsgSrc_Unspecified = 0,
    GCProtoBufMsgSrc_FromSystem = 1,
    GCProtoBufMsgSrc_FromSteamID = 2,
    GCProtoBufMsgSrc_FromGC = 3,
    GCProtoBufMsgSrc_ReplySystem = 4,
    GCProtoBufMsgSrc_SpoofedSteamID = 5
}
declare function gCProtoBufMsgSrcFromJSON(object: any): GCProtoBufMsgSrc;
declare function gCProtoBufMsgSrcToJSON(object: GCProtoBufMsgSrc): string;
interface CMsgProtoBufHeader {
    clientSteamId: string;
    clientSessionId: number;
    sourceAppId: number;
    jobIdSource: string;
    jobIdTarget: string;
    targetJobName: string;
    eresult: number;
    errorMessage: string;
    gcMsgSrc: GCProtoBufMsgSrc;
    gcDirIndexSource: number;
}
declare const CMsgProtoBufHeader: MessageFns$f<CMsgProtoBufHeader>;
interface CGCSystemMsgGetAccountDetails {
    steamid: string;
    appid: number;
}
declare const CGCSystemMsgGetAccountDetails: MessageFns$f<CGCSystemMsgGetAccountDetails>;
interface CGCSystemMsgGetAccountDetailsResponse {
    eresultDeprecated: number;
    accountName: string;
    personaName: string;
    isProfileCreated: boolean;
    isProfilePublic: boolean;
    isInventoryPublic: boolean;
    isVacBanned: boolean;
    isCyberCafe: boolean;
    isSchoolAccount: boolean;
    isLimited: boolean;
    isSubscribed: boolean;
    package: number;
    isFreeTrialAccount: boolean;
    freeTrialExpiration: number;
    isLowViolence: boolean;
    isAccountLockedDown: boolean;
    isCommunityBanned: boolean;
    isTradeBanned: boolean;
    tradeBanExpiration: number;
    accountid: number;
    suspensionEndTime: number;
    currency: string;
    steamLevel: number;
    friendCount: number;
    accountCreationTime: number;
    isSteamguardEnabled: boolean;
    isPhoneVerified: boolean;
    isTwoFactorAuthEnabled: boolean;
    twoFactorEnabledTime: number;
    phoneVerificationTime: number;
    phoneId: string;
    isPhoneIdentifying: boolean;
    rtIdentityLinked: number;
    rtBirthDate: number;
    txnCountryCode: string;
    hasAcceptedChinaSsa: boolean;
    isBannedSteamChina: boolean;
}
declare const CGCSystemMsgGetAccountDetailsResponse: MessageFns$f<CGCSystemMsgGetAccountDetailsResponse>;
interface CIPLocationInfo {
    ip: number;
    latitude: number;
    longitude: number;
    country: string;
    state: string;
    city: string;
}
declare const CIPLocationInfo: MessageFns$f<CIPLocationInfo>;
interface CGCMsgGetIPLocationResponse {
    infos: CIPLocationInfo[];
}
declare const CGCMsgGetIPLocationResponse: MessageFns$f<CGCMsgGetIPLocationResponse>;
type Builtin$f = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$f<T> = T extends Builtin$f ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$f<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$f<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$f<T[K]>;
} : Partial<T>;
interface MessageFns$f<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$f<T>): T;
    fromPartial(object: DeepPartial$f<T>): T;
}

declare enum DOTAGameMode {
    DOTA_GAMEMODE_NONE = 0,
    DOTA_GAMEMODE_AP = 1,
    DOTA_GAMEMODE_CM = 2,
    DOTA_GAMEMODE_RD = 3,
    DOTA_GAMEMODE_SD = 4,
    DOTA_GAMEMODE_AR = 5,
    DOTA_GAMEMODE_INTRO = 6,
    DOTA_GAMEMODE_HW = 7,
    DOTA_GAMEMODE_REVERSE_CM = 8,
    DOTA_GAMEMODE_XMAS = 9,
    DOTA_GAMEMODE_TUTORIAL = 10,
    DOTA_GAMEMODE_MO = 11,
    DOTA_GAMEMODE_LP = 12,
    DOTA_GAMEMODE_POOL1 = 13,
    DOTA_GAMEMODE_FH = 14,
    DOTA_GAMEMODE_CUSTOM = 15,
    DOTA_GAMEMODE_CD = 16,
    DOTA_GAMEMODE_BD = 17,
    DOTA_GAMEMODE_ABILITY_DRAFT = 18,
    DOTA_GAMEMODE_EVENT = 19,
    DOTA_GAMEMODE_ARDM = 20,
    DOTA_GAMEMODE_1V1MID = 21,
    DOTA_GAMEMODE_ALL_DRAFT = 22,
    DOTA_GAMEMODE_TURBO = 23,
    DOTA_GAMEMODE_MUTATION = 24,
    DOTA_GAMEMODE_COACHES_CHALLENGE = 25
}
declare function dOTAGameModeFromJSON(object: any): DOTAGameMode;
declare function dOTAGameModeToJSON(object: DOTAGameMode): string;
declare enum DOTAGameState {
    DOTA_GAMERULES_STATE_INIT = 0,
    DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD = 1,
    DOTA_GAMERULES_STATE_HERO_SELECTION = 2,
    DOTA_GAMERULES_STATE_STRATEGY_TIME = 3,
    DOTA_GAMERULES_STATE_PRE_GAME = 4,
    DOTA_GAMERULES_STATE_GAME_IN_PROGRESS = 5,
    DOTA_GAMERULES_STATE_POST_GAME = 6,
    DOTA_GAMERULES_STATE_DISCONNECT = 7,
    DOTA_GAMERULES_STATE_TEAM_SHOWCASE = 8,
    DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP = 9,
    DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD = 10,
    DOTA_GAMERULES_STATE_SCENARIO_SETUP = 11,
    DOTA_GAMERULES_STATE_PLAYER_DRAFT = 12,
    DOTA_GAMERULES_STATE_LAST = 13
}
declare function dOTAGameStateFromJSON(object: any): DOTAGameState;
declare function dOTAGameStateToJSON(object: DOTAGameState): string;
declare enum dotaGcTeam {
    DOTA_GC_TEAM_GOOD_GUYS = 0,
    DOTA_GC_TEAM_BAD_GUYS = 1,
    DOTA_GC_TEAM_BROADCASTER = 2,
    DOTA_GC_TEAM_SPECTATOR = 3,
    DOTA_GC_TEAM_PLAYER_POOL = 4,
    DOTA_GC_TEAM_NOTEAM = 5,
    DOTA_GC_TEAM_CUSTOM_1 = 6,
    DOTA_GC_TEAM_CUSTOM_2 = 7,
    DOTA_GC_TEAM_CUSTOM_3 = 8,
    DOTA_GC_TEAM_CUSTOM_4 = 9,
    DOTA_GC_TEAM_CUSTOM_5 = 10,
    DOTA_GC_TEAM_CUSTOM_6 = 11,
    DOTA_GC_TEAM_CUSTOM_7 = 12,
    DOTA_GC_TEAM_CUSTOM_8 = 13,
    DOTA_GC_TEAM_NEUTRALS = 14
}
declare function dotaGcTeamFromJSON(object: any): dotaGcTeam;
declare function dotaGcTeamToJSON(object: dotaGcTeam): string;
declare enum EEvent {
    EVENT_ID_NONE = 0,
    EVENT_ID_DIRETIDE = 1,
    EVENT_ID_SPRING_FESTIVAL = 2,
    EVENT_ID_FROSTIVUS_2013 = 3,
    EVENT_ID_COMPENDIUM_2014 = 4,
    EVENT_ID_NEXON_PC_BANG = 5,
    EVENT_ID_PWRD_DAC_2015 = 6,
    EVENT_ID_NEW_BLOOM_2015 = 7,
    EVENT_ID_INTERNATIONAL_2015 = 8,
    EVENT_ID_FALL_MAJOR_2015 = 9,
    EVENT_ID_ORACLE_PA = 10,
    EVENT_ID_NEW_BLOOM_2015_PREBEAST = 11,
    EVENT_ID_FROSTIVUS = 12,
    EVENT_ID_WINTER_MAJOR_2016 = 13,
    EVENT_ID_INTERNATIONAL_2016 = 14,
    EVENT_ID_FALL_MAJOR_2016 = 15,
    EVENT_ID_WINTER_MAJOR_2017 = 16,
    EVENT_ID_NEW_BLOOM_2017 = 17,
    EVENT_ID_INTERNATIONAL_2017 = 18,
    EVENT_ID_PLUS_SUBSCRIPTION = 19,
    EVENT_ID_SINGLES_DAY_2017 = 20,
    EVENT_ID_FROSTIVUS_2017 = 21,
    EVENT_ID_INTERNATIONAL_2018 = 22,
    EVENT_ID_FROSTIVUS_2018 = 23,
    EVENT_ID_NEW_BLOOM_2019 = 24,
    EVENT_ID_INTERNATIONAL_2019 = 25,
    EVENT_ID_NEW_PLAYER_EXPERIENCE = 26,
    EVENT_ID_FROSTIVUS_2019 = 27,
    EVENT_ID_NEW_BLOOM_2020 = 28,
    EVENT_ID_INTERNATIONAL_2020 = 29,
    EVENT_ID_TEAM_FANDOM = 30,
    EVENT_ID_DIRETIDE_2020 = 31,
    EVENT_ID_SPRING_2021 = 32,
    EVENT_ID_FALL_2021 = 33,
    EVENT_ID_TEAM_FANDOM_FALL_2021 = 34,
    EVENT_ID_TEAM_2021_2022_TOUR2 = 35,
    EVENT_ID_INTERNATIONAL_2022 = 36,
    EVENT_ID_TEAM_2021_2022_TOUR3 = 37,
    EVENT_ID_TEAM_INTERNATIONAL_2022 = 38,
    EVENT_ID_PERMANENT_GRANTS = 39,
    EVENT_ID_MUERTA_RELEASE_SPRING2023 = 40,
    EVENT_ID_TEAM_2023_TOUR1 = 41,
    EVENT_ID_TEAM_2023_TOUR2 = 42,
    EVENT_ID_TEAM_2023_TOUR3 = 43,
    EVENT_ID_INTERNATIONAL_2023 = 45,
    EVENT_ID_10TH_ANNIVERSARY = 46,
    EVENT_ID_CROWNFALL = 47,
    EVENT_ID_FROSTIVUS_2023 = 48,
    EVENT_ID_INTERNATIONAL_2024 = 49,
    EVENT_ID_FROSTIVUS_2024 = 50
}
declare function eEventFromJSON(object: any): EEvent;
declare function eEventToJSON(object: EEvent): string;
declare enum ERankType {
    k_ERankType_Invalid = 0,
    k_ERankType_Casual = 1,
    k_ERankType_Ranked = 2,
    k_ERankType_CasualLegacy = 3,
    k_ERankType_RankedLegacy = 4,
    k_ERankType_CasualGlicko = 5,
    k_ERankType_RankedGlicko = 6,
    k_ERankType_RankMax = 7,
    k_ERankType_BehaviorPrivate = 100,
    k_ERankType_BehaviorPublic = 101,
    k_ERankType_Max = 102
}
declare function eRankTypeFromJSON(object: any): ERankType;
declare function eRankTypeToJSON(object: ERankType): string;
declare enum DOTALeaverStatusT {
    DOTA_LEAVER_NONE = 0,
    DOTA_LEAVER_DISCONNECTED = 1,
    DOTA_LEAVER_DISCONNECTED_TOO_LONG = 2,
    DOTA_LEAVER_ABANDONED = 3,
    DOTA_LEAVER_AFK = 4,
    DOTA_LEAVER_NEVER_CONNECTED = 5,
    DOTA_LEAVER_NEVER_CONNECTED_TOO_LONG = 6,
    DOTA_LEAVER_FAILED_TO_READY_UP = 7,
    DOTA_LEAVER_DECLINED = 8,
    DOTA_LEAVER_DECLINED_REQUEUE = 9
}
declare function dOTALeaverStatusTFromJSON(object: any): DOTALeaverStatusT;
declare function dOTALeaverStatusTToJSON(object: DOTALeaverStatusT): string;
declare enum DOTAConnectionStateT {
    DOTA_CONNECTION_STATE_UNKNOWN = 0,
    DOTA_CONNECTION_STATE_NOT_YET_CONNECTED = 1,
    DOTA_CONNECTION_STATE_CONNECTED = 2,
    DOTA_CONNECTION_STATE_DISCONNECTED = 3,
    DOTA_CONNECTION_STATE_ABANDONED = 4,
    DOTA_CONNECTION_STATE_LOADING = 5,
    DOTA_CONNECTION_STATE_FAILED = 6
}
declare function dOTAConnectionStateTFromJSON(object: any): DOTAConnectionStateT;
declare function dOTAConnectionStateTToJSON(object: DOTAConnectionStateT): string;
declare enum FantasyRoles {
    FANTASY_ROLE_UNDEFINED = 0,
    FANTASY_ROLE_CORE = 1,
    FANTASY_ROLE_SUPPORT = 2,
    FANTASY_ROLE_OFFLANE = 3,
    FANTASY_ROLE_MID = 4
}
declare function fantasyRolesFromJSON(object: any): FantasyRoles;
declare function fantasyRolesToJSON(object: FantasyRoles): string;
declare enum FantasyScoring {
    FANTASY_SCORING_KILLS = 0,
    FANTASY_SCORING_DEATHS = 1,
    FANTASY_SCORING_CS = 2,
    FANTASY_SCORING_GPM = 3,
    FANTASY_SCORING_TOWER_KILLS = 4,
    FANTASY_SCORING_ROSHAN_KILLS = 5,
    FANTASY_SCORING_TEAMFIGHT_PARTICIPATION = 6,
    FANTASY_SCORING_WARDS_PLANTED = 7,
    FANTASY_SCORING_CAMPS_STACKED = 8,
    FANTASY_SCORING_RUNES_GRABBED = 9,
    FANTASY_SCORING_FIRST_BLOOD = 10,
    FANTASY_SCORING_STUNS = 11,
    FANTASY_SCORING_SMOKES_USED = 12,
    FANTASY_SCORING_NEUTRAL_TOKENS_FOUND = 13,
    FANTASY_SCORING_WATCHERS_TAKEN = 14,
    FANTASY_SCORING_LOTUSES_GAINED = 15,
    FANTASY_SCORING_TORMENTOR_KILLS = 16,
    FANTASY_SCORING_COURIER_KILLS = 17,
    FANTASY_SCORING_TYPES = 18,
    FANTASY_SCORING_INVALID = 19
}
declare function fantasyScoringFromJSON(object: any): FantasyScoring;
declare function fantasyScoringToJSON(object: FantasyScoring): string;
declare enum FantasyTeamSlots {
    FANTASY_SLOT_NONE = 0,
    FANTASY_SLOT_CORE = 1,
    FANTASY_SLOT_SUPPORT = 2,
    FANTASY_SLOT_ANY = 3,
    FANTASY_SLOT_BENCH = 4
}
declare function fantasyTeamSlotsFromJSON(object: any): FantasyTeamSlots;
declare function fantasyTeamSlotsToJSON(object: FantasyTeamSlots): string;
declare enum FantasySelectionMode {
    FANTASY_SELECTION_INVALID = 0,
    FANTASY_SELECTION_LOCKED = 1,
    FANTASY_SELECTION_SHUFFLE = 2,
    FANTASY_SELECTION_FREE_PICK = 3,
    FANTASY_SELECTION_ENDED = 4,
    FANTASY_SELECTION_PRE_SEASON = 5,
    FANTASY_SELECTION_PRE_DRAFT = 6,
    FANTASY_SELECTION_DRAFTING = 7,
    FANTASY_SELECTION_REGULAR_SEASON = 8,
    FANTASY_SELECTION_CARD_BASED = 9
}
declare function fantasySelectionModeFromJSON(object: any): FantasySelectionMode;
declare function fantasySelectionModeToJSON(object: FantasySelectionMode): string;
declare enum FantasyGemType {
    FANTASY_GEM_TYPE_RUBY = 0,
    FANTASY_GEM_TYPE_SAPPHIRE = 1,
    FANTASY_GEM_TYPE_EMERALD = 2
}
declare function fantasyGemTypeFromJSON(object: any): FantasyGemType;
declare function fantasyGemTypeToJSON(object: FantasyGemType): string;
declare enum DOTAChatChannelTypeT {
    DOTAChannelType_Regional = 0,
    DOTAChannelType_Custom = 1,
    DOTAChannelType_Party = 2,
    DOTAChannelType_Lobby = 3,
    DOTAChannelType_Team = 4,
    DOTAChannelType_Guild = 5,
    DOTAChannelType_Fantasy = 6,
    DOTAChannelType_Whisper = 7,
    DOTAChannelType_Console = 8,
    DOTAChannelType_Tab = 9,
    DOTAChannelType_Invalid = 10,
    DOTAChannelType_GameAll = 11,
    DOTAChannelType_GameAllies = 12,
    DOTAChannelType_GameSpectator = 13,
    DOTAChannelType_GameCoaching = 14,
    DOTAChannelType_Cafe = 15,
    DOTAChannelType_CustomGame = 16,
    DOTAChannelType_Private = 17,
    DOTAChannelType_PostGame = 18,
    DOTAChannelType_BattleCup = 19,
    DOTAChannelType_HLTVSpectator = 20,
    DOTAChannelType_GameEvents = 21,
    DOTAChannelType_Trivia = 22,
    DOTAChannelType_NewPlayer = 23,
    DOTAChannelType_PrivateCoaching = 24
}
declare function dOTAChatChannelTypeTFromJSON(object: any): DOTAChatChannelTypeT;
declare function dOTAChatChannelTypeTToJSON(object: DOTAChatChannelTypeT): string;
declare enum EChatSpecialPrivileges {
    k_EChatSpecialPrivileges_None = 0,
    k_EChatSpecialPrivileges_Moderator = 1,
    k_EChatSpecialPrivileges_SuperModerator = 2
}
declare function eChatSpecialPrivilegesFromJSON(object: any): EChatSpecialPrivileges;
declare function eChatSpecialPrivilegesToJSON(object: EChatSpecialPrivileges): string;
declare enum DOTACommTypeT {
    DOTA_COMM_TYPE_NONE = 0,
    DOTA_COMM_TYPE_PING = 1,
    DOTA_COMM_TYPE_CHATWHEEL = 2,
    DOTA_COMM_TYPE_TIP = 3,
    DOTA_COMM_TYPE_TEXT = 4,
    DOTA_COMM_TYPE_SHOWCASE = 5,
    DOTA_COMM_TYPE_VOICE = 6,
    DOTA_COMM_TYPE_ALLY_ABILITY = 7,
    DOTA_COMM_TYPE_PAUSE = 8,
    DOTA_COMM_TYPE_COACHING = 9,
    DOTA_COMM_TYPE_NOCOOLDOWN = 10,
    DOTA_COMM_TYPE_RANKEDMATCHMAKE = 11,
    DOTA_COMM_TYPE_DROPS = 12,
    DOTA_COMM_TYPE_NEWPLAYER_EXPERT = 13,
    DOTA_COMM_TYPE_COACHED = 14,
    DOTA_COMM_TYPE_MAPDRAWING = 15
}
declare function dOTACommTypeTFromJSON(object: any): DOTACommTypeT;
declare function dOTACommTypeTToJSON(object: DOTACommTypeT): string;
declare enum DOTACommLevelT {
    DOTA_COMM_LEVEL_NONE = 0,
    DOTA_COMM_LEVEL_COOLDOWN = 1,
    DOTA_COMM_LEVEL_PINGS = 2,
    DOTA_COMM_LEVEL_MAPDRAWING = 3,
    DOTA_COMM_LEVEL_CHAT = 4,
    DOTA_COMM_LEVEL_TIPPING = 5,
    DOTA_COMM_LEVEL_VOICE = 6,
    DOTA_COMM_LEVEL_ALLIED_ABILITY = 7
}
declare function dOTACommLevelTFromJSON(object: any): DOTACommLevelT;
declare function dOTACommLevelTToJSON(object: DOTACommLevelT): string;
declare enum DOTABehaviorLevelT {
    DOTA_BEHAVIOR_LEVEL_NONE = 0,
    DOTA_BEHAVIOR_LEVEL_RANKED_ALLOWED = 1,
    DOTA_BEHAVIOR_LEVEL_PAUSING = 2,
    DOTA_BEHAVIOR_LEVEL_DROPS = 3,
    DOTA_BEHAVIOR_LEVEL_COACHING = 4
}
declare function dOTABehaviorLevelTFromJSON(object: any): DOTABehaviorLevelT;
declare function dOTABehaviorLevelTToJSON(object: DOTABehaviorLevelT): string;
declare enum EProfileCardSlotType {
    k_EProfileCardSlotType_Empty = 0,
    k_EProfileCardSlotType_Stat = 1,
    k_EProfileCardSlotType_Trophy = 2,
    k_EProfileCardSlotType_Item = 3,
    k_EProfileCardSlotType_Hero = 4,
    k_EProfileCardSlotType_Emoticon = 5,
    k_EProfileCardSlotType_Team = 6
}
declare function eProfileCardSlotTypeFromJSON(object: any): EProfileCardSlotType;
declare function eProfileCardSlotTypeToJSON(object: EProfileCardSlotType): string;
declare enum EMatchGroupServerStatus {
    k_EMatchGroupServerStatus_OK = 0,
    k_EMatchGroupServerStatus_LimitedAvailability = 1,
    k_EMatchGroupServerStatus_Offline = 2
}
declare function eMatchGroupServerStatusFromJSON(object: any): EMatchGroupServerStatus;
declare function eMatchGroupServerStatusToJSON(object: EMatchGroupServerStatus): string;
declare enum dotaCmPick {
    DOTA_CM_RANDOM = 0,
    DOTA_CM_GOOD_GUYS = 1,
    DOTA_CM_BAD_GUYS = 2
}
declare function dotaCmPickFromJSON(object: any): dotaCmPick;
declare function dotaCmPickToJSON(object: dotaCmPick): string;
declare enum DOTALowPriorityBanType {
    DOTA_LOW_PRIORITY_BAN_ABANDON = 0,
    DOTA_LOW_PRIORITY_BAN_REPORTS = 1,
    DOTA_LOW_PRIORITY_BAN_SECONDARY_ABANDON = 2,
    DOTA_LOW_PRIORITY_BAN_PRE_GAME_ROLE = 3
}
declare function dOTALowPriorityBanTypeFromJSON(object: any): DOTALowPriorityBanType;
declare function dOTALowPriorityBanTypeToJSON(object: DOTALowPriorityBanType): string;
declare enum DOTALobbyReadyState {
    DOTALobbyReadyState_UNDECLARED = 0,
    DOTALobbyReadyState_ACCEPTED = 1,
    DOTALobbyReadyState_DECLINED = 2,
    DOTALobbyReadyState_DECLINED_REQUEUE = 3
}
declare function dOTALobbyReadyStateFromJSON(object: any): DOTALobbyReadyState;
declare function dOTALobbyReadyStateToJSON(object: DOTALobbyReadyState): string;
declare enum DOTAJoinLobbyResult {
    DOTA_JOIN_RESULT_SUCCESS = 0,
    DOTA_JOIN_RESULT_ALREADY_IN_GAME = 1,
    DOTA_JOIN_RESULT_INVALID_LOBBY = 2,
    DOTA_JOIN_RESULT_INCORRECT_PASSWORD = 3,
    DOTA_JOIN_RESULT_ACCESS_DENIED = 4,
    DOTA_JOIN_RESULT_GENERIC_ERROR = 5,
    DOTA_JOIN_RESULT_INCORRECT_VERSION = 6,
    DOTA_JOIN_RESULT_IN_TEAM_PARTY = 7,
    DOTA_JOIN_RESULT_NO_LOBBY_FOUND = 8,
    DOTA_JOIN_RESULT_LOBBY_FULL = 9,
    DOTA_JOIN_RESULT_CUSTOM_GAME_INCORRECT_VERSION = 10,
    DOTA_JOIN_RESULT_TIMEOUT = 11,
    DOTA_JOIN_RESULT_CUSTOM_GAME_COOLDOWN = 12,
    DOTA_JOIN_RESULT_BUSY = 13,
    DOTA_JOIN_RESULT_NO_PLAYTIME = 14
}
declare function dOTAJoinLobbyResultFromJSON(object: any): DOTAJoinLobbyResult;
declare function dOTAJoinLobbyResultToJSON(object: DOTAJoinLobbyResult): string;
declare enum DOTASelectionPriorityRules {
    k_DOTASelectionPriorityRules_Manual = 0,
    k_DOTASelectionPriorityRules_Automatic = 1
}
declare function dOTASelectionPriorityRulesFromJSON(object: any): DOTASelectionPriorityRules;
declare function dOTASelectionPriorityRulesToJSON(object: DOTASelectionPriorityRules): string;
declare enum DOTASelectionPriorityChoice {
    k_DOTASelectionPriorityChoice_Invalid = 0,
    k_DOTASelectionPriorityChoice_FirstPick = 1,
    k_DOTASelectionPriorityChoice_SecondPick = 2,
    k_DOTASelectionPriorityChoice_Radiant = 3,
    k_DOTASelectionPriorityChoice_Dire = 4
}
declare function dOTASelectionPriorityChoiceFromJSON(object: any): DOTASelectionPriorityChoice;
declare function dOTASelectionPriorityChoiceToJSON(object: DOTASelectionPriorityChoice): string;
declare enum DOTAMatchVote {
    DOTAMatchVote_INVALID = 0,
    DOTAMatchVote_POSITIVE = 1,
    DOTAMatchVote_NEGATIVE = 2
}
declare function dOTAMatchVoteFromJSON(object: any): DOTAMatchVote;
declare function dOTAMatchVoteToJSON(object: DOTAMatchVote): string;
declare enum DOTALobbyVisibility {
    DOTALobbyVisibility_Public = 0,
    DOTALobbyVisibility_Friends = 1,
    DOTALobbyVisibility_Unlisted = 2
}
declare function dOTALobbyVisibilityFromJSON(object: any): DOTALobbyVisibility;
declare function dOTALobbyVisibilityToJSON(object: DOTALobbyVisibility): string;
declare enum EDOTAPlayerMMRType {
    k_EDOTAPlayerMMRType_Invalid = 0,
    k_EDOTAPlayerMMRType_GeneralHidden = 1,
    k_EDOTAPlayerMMRType_GeneralCompetitive = 3
}
declare function eDOTAPlayerMMRTypeFromJSON(object: any): EDOTAPlayerMMRType;
declare function eDOTAPlayerMMRTypeToJSON(object: EDOTAPlayerMMRType): string;
declare enum EDOTAMMRBoostType {
    k_EDOTAMMRBoostType_None = 0,
    k_EDOTAMMRBoostType_Leader = 1,
    k_EDOTAMMRBoostType_Follower = 2
}
declare function eDOTAMMRBoostTypeFromJSON(object: any): EDOTAMMRBoostType;
declare function eDOTAMMRBoostTypeToJSON(object: EDOTAMMRBoostType): string;
declare enum MatchType {
    MATCH_TYPE_CASUAL = 0,
    MATCH_TYPE_COOP_BOTS = 1,
    MATCH_TYPE_COMPETITIVE = 4,
    MATCH_TYPE_WEEKEND_TOURNEY = 5,
    MATCH_TYPE_EVENT = 7,
    MATCH_TYPE_COACHES_CHALLENGE = 12,
    MATCH_TYPE_NEW_PLAYER_POOL = 14
}
declare function matchTypeFromJSON(object: any): MatchType;
declare function matchTypeToJSON(object: MatchType): string;
declare enum DOTABotDifficulty {
    BOT_DIFFICULTY_PASSIVE = 0,
    BOT_DIFFICULTY_EASY = 1,
    BOT_DIFFICULTY_MEDIUM = 2,
    BOT_DIFFICULTY_HARD = 3,
    BOT_DIFFICULTY_UNFAIR = 4,
    BOT_DIFFICULTY_INVALID = 5,
    BOT_DIFFICULTY_EXTRA1 = 6,
    BOT_DIFFICULTY_EXTRA2 = 7,
    BOT_DIFFICULTY_EXTRA3 = 8,
    BOT_DIFFICULTY_NPX = 9
}
declare function dOTABotDifficultyFromJSON(object: any): DOTABotDifficulty;
declare function dOTABotDifficultyToJSON(object: DOTABotDifficulty): string;
declare enum dotaBotMode {
    DOTA_BOT_MODE_NONE = 0,
    DOTA_BOT_MODE_LANING = 1,
    DOTA_BOT_MODE_ATTACK = 2,
    DOTA_BOT_MODE_ROAM = 3,
    DOTA_BOT_MODE_RETREAT = 4,
    DOTA_BOT_MODE_SECRET_SHOP = 5,
    DOTA_BOT_MODE_SIDE_SHOP = 6,
    DOTA_BOT_MODE_RUNE = 7,
    DOTA_BOT_MODE_PUSH_TOWER_TOP = 8,
    DOTA_BOT_MODE_PUSH_TOWER_MID = 9,
    DOTA_BOT_MODE_PUSH_TOWER_BOT = 10,
    DOTA_BOT_MODE_DEFEND_TOWER_TOP = 11,
    DOTA_BOT_MODE_DEFEND_TOWER_MID = 12,
    DOTA_BOT_MODE_DEFEND_TOWER_BOT = 13,
    DOTA_BOT_MODE_ASSEMBLE = 14,
    DOTA_BOT_MODE_ASSEMBLE_WITH_HUMANS = 15,
    DOTA_BOT_MODE_TEAM_ROAM = 16,
    DOTA_BOT_MODE_FARM = 17,
    DOTA_BOT_MODE_DEFEND_ALLY = 18,
    DOTA_BOT_MODE_EVASIVE_MANEUVERS = 19,
    DOTA_BOT_MODE_ROSHAN = 20,
    DOTA_BOT_MODE_ITEM = 21,
    DOTA_BOT_MODE_WARD = 22,
    DOTA_BOT_MODE_COMPANION = 23,
    DOTA_BOT_MODE_TUTORIAL_BOSS = 24,
    DOTA_BOT_MODE_MINION = 25,
    DOTA_BOT_MODE_OUTPOST = 26
}
declare function dotaBotModeFromJSON(object: any): dotaBotMode;
declare function dotaBotModeToJSON(object: dotaBotMode): string;
declare enum MatchLanguages {
    MATCH_LANGUAGE_INVALID = 0,
    MATCH_LANGUAGE_ENGLISH = 1,
    MATCH_LANGUAGE_RUSSIAN = 2,
    MATCH_LANGUAGE_CHINESE = 3,
    MATCH_LANGUAGE_KOREAN = 4,
    MATCH_LANGUAGE_SPANISH = 5,
    MATCH_LANGUAGE_PORTUGUESE = 6,
    MATCH_LANGUAGE_ENGLISH2 = 7
}
declare function matchLanguagesFromJSON(object: any): MatchLanguages;
declare function matchLanguagesToJSON(object: MatchLanguages): string;
declare enum ETourneyQueueDeadlineState {
    k_ETourneyQueueDeadlineState_Normal = 0,
    k_ETourneyQueueDeadlineState_Missed = 1,
    k_ETourneyQueueDeadlineState_ExpiredOK = 2,
    k_ETourneyQueueDeadlineState_SeekingBye = 3,
    k_ETourneyQueueDeadlineState_EligibleForRefund = 4,
    k_ETourneyQueueDeadlineState_NA = -1,
    k_ETourneyQueueDeadlineState_ExpiringSoon = 101
}
declare function eTourneyQueueDeadlineStateFromJSON(object: any): ETourneyQueueDeadlineState;
declare function eTourneyQueueDeadlineStateToJSON(object: ETourneyQueueDeadlineState): string;
declare enum EMatchOutcome {
    k_EMatchOutcome_Unknown = 0,
    k_EMatchOutcome_RadVictory = 2,
    k_EMatchOutcome_DireVictory = 3,
    k_EMatchOutcome_NeutralVictory = 4,
    k_EMatchOutcome_NoTeamWinner = 5,
    k_EMatchOutcome_Custom1Victory = 6,
    k_EMatchOutcome_Custom2Victory = 7,
    k_EMatchOutcome_Custom3Victory = 8,
    k_EMatchOutcome_Custom4Victory = 9,
    k_EMatchOutcome_Custom5Victory = 10,
    k_EMatchOutcome_Custom6Victory = 11,
    k_EMatchOutcome_Custom7Victory = 12,
    k_EMatchOutcome_Custom8Victory = 13,
    k_EMatchOutcome_NotScored_PoorNetworkConditions = 64,
    k_EMatchOutcome_NotScored_Leaver = 65,
    k_EMatchOutcome_NotScored_ServerCrash = 66,
    k_EMatchOutcome_NotScored_NeverStarted = 67,
    k_EMatchOutcome_NotScored_Canceled = 68,
    k_EMatchOutcome_NotScored_Suspicious = 69
}
declare function eMatchOutcomeFromJSON(object: any): EMatchOutcome;
declare function eMatchOutcomeToJSON(object: EMatchOutcome): string;
declare enum ELaneType {
    LANE_TYPE_UNKNOWN = 0,
    LANE_TYPE_SAFE = 1,
    LANE_TYPE_OFF = 2,
    LANE_TYPE_MID = 3,
    LANE_TYPE_JUNGLE = 4,
    LANE_TYPE_ROAM = 5
}
declare function eLaneTypeFromJSON(object: any): ELaneType;
declare function eLaneTypeToJSON(object: ELaneType): string;
declare enum EBadgeType {
    k_EBadgeType_Invalid = 0,
    k_EBadgeType_TI7_Midweek = 1,
    k_EBadgeType_TI7_Finals = 2,
    k_EBadgeType_TI7_AllEvent = 3,
    k_EBadgeType_TI8_Midweek = 4,
    k_EBadgeType_TI8_Finals = 5,
    k_EBadgeType_TI8_AllEvent = 6,
    k_EBadgeType_TI10 = 7,
    k_EBadgeType_TI11_PlayoffsDay1 = 8,
    k_EBadgeType_TI11_PlayoffsDay2 = 9,
    k_EBadgeType_TI11_PlayoffsDay3 = 10,
    k_EBadgeType_TI11_PlayoffsDay4 = 11,
    k_EBadgeType_TI11_FinalsWeekend = 12,
    k_EBadgeType_TI12_PlayoffsDay1 = 13,
    k_EBadgeType_TI12_PlayoffsDay2 = 14,
    k_EBadgeType_TI12_PlayoffsDay3 = 15,
    k_EBadgeType_TI12_FinalsWeekend = 16,
    k_EBadgeType_TI12_Special = 17,
    k_EBadgeType_TI13_FinalsDay1 = 18,
    k_EBadgeType_TI13_FinalsDay2 = 19,
    k_EBadgeType_TI13_FinalsDay3 = 20,
    k_EBadgeType_TI13_Special = 21
}
declare function eBadgeTypeFromJSON(object: any): EBadgeType;
declare function eBadgeTypeToJSON(object: EBadgeType): string;
declare enum ELeagueStatus {
    LEAGUE_STATUS_UNSET = 0,
    LEAGUE_STATUS_UNSUBMITTED = 1,
    LEAGUE_STATUS_SUBMITTED = 2,
    LEAGUE_STATUS_ACCEPTED = 3,
    LEAGUE_STATUS_REJECTED = 4,
    LEAGUE_STATUS_CONCLUDED = 5,
    LEAGUE_STATUS_DELETED = 6
}
declare function eLeagueStatusFromJSON(object: any): ELeagueStatus;
declare function eLeagueStatusToJSON(object: ELeagueStatus): string;
declare enum ELeagueRegion {
    LEAGUE_REGION_UNSET = 0,
    LEAGUE_REGION_NA = 1,
    LEAGUE_REGION_SA = 2,
    LEAGUE_REGION_WEU = 3,
    LEAGUE_REGION_EEU = 4,
    LEAGUE_REGION_CHINA = 5,
    LEAGUE_REGION_SEA = 6
}
declare function eLeagueRegionFromJSON(object: any): ELeagueRegion;
declare function eLeagueRegionToJSON(object: ELeagueRegion): string;
declare enum ELeagueTier {
    LEAGUE_TIER_UNSET = 0,
    LEAGUE_TIER_AMATEUR = 1,
    LEAGUE_TIER_PROFESSIONAL = 2,
    LEAGUE_TIER_MINOR = 3,
    LEAGUE_TIER_MAJOR = 4,
    LEAGUE_TIER_INTERNATIONAL = 5,
    LEAGUE_TIER_DPC_QUALIFIER = 6,
    LEAGUE_TIER_DPC_LEAGUE_QUALIFIER = 7,
    LEAGUE_TIER_DPC_LEAGUE = 8,
    LEAGUE_TIER_DPC_LEAGUE_FINALS = 9
}
declare function eLeagueTierFromJSON(object: any): ELeagueTier;
declare function eLeagueTierToJSON(object: ELeagueTier): string;
declare enum ELeagueTierCategory {
    LEAGUE_TIER_CATEGORY_AMATEUR = 1,
    LEAGUE_TIER_CATEGORY_PROFESSIONAL = 2,
    LEAGUE_TIER_CATEGORY_DPC = 3
}
declare function eLeagueTierCategoryFromJSON(object: any): ELeagueTierCategory;
declare function eLeagueTierCategoryToJSON(object: ELeagueTierCategory): string;
declare enum ELeagueDivision {
    LEAGUE_DIVISION_UNSET = 0,
    LEAGUE_DIVISION_I = 1,
    LEAGUE_DIVISION_II = 2
}
declare function eLeagueDivisionFromJSON(object: any): ELeagueDivision;
declare function eLeagueDivisionToJSON(object: ELeagueDivision): string;
declare enum ELeagueBroadcastProvider {
    LEAGUE_BROADCAST_UNKNOWN = 0,
    LEAGUE_BROADCAST_STEAM = 1,
    LEAGUE_BROADCAST_TWITCH = 2,
    LEAGUE_BROADCAST_YOUTUBE = 3,
    LEAGUE_BROADCAST_OTHER = 100
}
declare function eLeagueBroadcastProviderFromJSON(object: any): ELeagueBroadcastProvider;
declare function eLeagueBroadcastProviderToJSON(object: ELeagueBroadcastProvider): string;
declare enum ELeaguePhase {
    LEAGUE_PHASE_UNSET = 0,
    LEAGUE_PHASE_REGIONAL_QUALIFIER = 1,
    LEAGUE_PHASE_GROUP_STAGE = 2,
    LEAGUE_PHASE_MAIN_EVENT = 3
}
declare function eLeaguePhaseFromJSON(object: any): ELeaguePhase;
declare function eLeaguePhaseToJSON(object: ELeaguePhase): string;
declare enum ELeagueAuditAction {
    LEAGUE_AUDIT_ACTION_INVALID = 0,
    LEAGUE_AUDIT_ACTION_LEAGUE_CREATE = 1,
    LEAGUE_AUDIT_ACTION_LEAGUE_EDIT = 2,
    LEAGUE_AUDIT_ACTION_LEAGUE_DELETE = 3,
    LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_ADD = 4,
    LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_REVOKE = 5,
    LEAGUE_AUDIT_ACTION_LEAGUE_ADMIN_PROMOTE = 6,
    LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_ADD = 7,
    LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_REMOVE = 8,
    LEAGUE_AUDIT_ACTION_LEAGUE_IMAGE_UPDATED = 9,
    LEAGUE_AUDIT_ACTION_LEAGUE_MESSAGE_ADDED = 10,
    LEAGUE_AUDIT_ACTION_LEAGUE_SUBMITTED = 11,
    LEAGUE_AUDIT_ACTION_LEAGUE_SET_PRIZE_POOL = 12,
    LEAGUE_AUDIT_ACTION_LEAGUE_ADD_PRIZE_POOL_ITEM = 13,
    LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_PRIZE_POOL_ITEM = 14,
    LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_START = 15,
    LEAGUE_AUDIT_ACTION_LEAGUE_MATCH_END = 16,
    LEAGUE_AUDIT_ACTION_LEAGUE_ADD_INVITED_TEAM = 17,
    LEAGUE_AUDIT_ACTION_LEAGUE_REMOVE_INVITED_TEAM = 18,
    LEAGUE_AUDIT_ACTION_LEAGUE_STATUS_CHANGED = 19,
    LEAGUE_AUDIT_ACTION_LEAGUE_STREAM_EDIT = 20,
    LEAGUE_AUDIT_ACTION_LEAGUE_TEAM_SWAP = 21,
    LEAGUE_AUDIT_ACTION_NODEGROUP_CREATE = 100,
    LEAGUE_AUDIT_ACTION_NODEGROUP_DESTROY = 101,
    LEAGUE_AUDIT_ACTION_NODEGROUP_ADD_TEAM = 102,
    LEAGUE_AUDIT_ACTION_NODEGROUP_REMOVE_TEAM = 103,
    LEAGUE_AUDIT_ACTION_NODEGROUP_SET_ADVANCING = 104,
    LEAGUE_AUDIT_ACTION_NODEGROUP_EDIT = 105,
    LEAGUE_AUDIT_ACTION_NODEGROUP_POPULATE = 106,
    LEAGUE_AUDIT_ACTION_NODEGROUP_COMPLETED = 107,
    LEAGUE_AUDIT_ACTION_NODEGROUP_SET_SECONDARY_ADVANCING = 108,
    LEAGUE_AUDIT_ACTION_NODEGROUP_SET_TERTIARY_ADVANCING = 109,
    LEAGUE_AUDIT_ACTION_NODE_CREATE = 200,
    LEAGUE_AUDIT_ACTION_NODE_DESTROY = 201,
    LEAGUE_AUDIT_ACTION_NODE_AUTOCREATE = 202,
    LEAGUE_AUDIT_ACTION_NODE_SET_TEAM = 203,
    LEAGUE_AUDIT_ACTION_NODE_SET_SERIES_ID = 204,
    LEAGUE_AUDIT_ACTION_NODE_SET_ADVANCING = 205,
    LEAGUE_AUDIT_ACTION_NODE_SET_TIME = 206,
    LEAGUE_AUDIT_ACTION_NODE_MATCH_COMPLETED = 207,
    LEAGUE_AUDIT_ACTION_NODE_COMPLETED = 208,
    LEAGUE_AUDIT_ACTION_NODE_EDIT = 209
}
declare function eLeagueAuditActionFromJSON(object: any): ELeagueAuditAction;
declare function eLeagueAuditActionToJSON(object: ELeagueAuditAction): string;
declare enum dotaCombatlogTypes {
    DOTA_COMBATLOG_INVALID = -1,
    DOTA_COMBATLOG_DAMAGE = 0,
    DOTA_COMBATLOG_HEAL = 1,
    DOTA_COMBATLOG_MODIFIER_ADD = 2,
    DOTA_COMBATLOG_MODIFIER_REMOVE = 3,
    DOTA_COMBATLOG_DEATH = 4,
    DOTA_COMBATLOG_ABILITY = 5,
    DOTA_COMBATLOG_ITEM = 6,
    DOTA_COMBATLOG_LOCATION = 7,
    DOTA_COMBATLOG_GOLD = 8,
    DOTA_COMBATLOG_GAME_STATE = 9,
    DOTA_COMBATLOG_XP = 10,
    DOTA_COMBATLOG_PURCHASE = 11,
    DOTA_COMBATLOG_BUYBACK = 12,
    DOTA_COMBATLOG_ABILITY_TRIGGER = 13,
    DOTA_COMBATLOG_PLAYERSTATS = 14,
    DOTA_COMBATLOG_MULTIKILL = 15,
    DOTA_COMBATLOG_KILLSTREAK = 16,
    DOTA_COMBATLOG_TEAM_BUILDING_KILL = 17,
    DOTA_COMBATLOG_FIRST_BLOOD = 18,
    DOTA_COMBATLOG_MODIFIER_STACK_EVENT = 19,
    DOTA_COMBATLOG_NEUTRAL_CAMP_STACK = 20,
    DOTA_COMBATLOG_PICKUP_RUNE = 21,
    DOTA_COMBATLOG_REVEALED_INVISIBLE = 22,
    DOTA_COMBATLOG_HERO_SAVED = 23,
    DOTA_COMBATLOG_MANA_RESTORED = 24,
    DOTA_COMBATLOG_HERO_LEVELUP = 25,
    DOTA_COMBATLOG_BOTTLE_HEAL_ALLY = 26,
    DOTA_COMBATLOG_ENDGAME_STATS = 27,
    DOTA_COMBATLOG_INTERRUPT_CHANNEL = 28,
    DOTA_COMBATLOG_ALLIED_GOLD = 29,
    DOTA_COMBATLOG_AEGIS_TAKEN = 30,
    DOTA_COMBATLOG_MANA_DAMAGE = 31,
    DOTA_COMBATLOG_PHYSICAL_DAMAGE_PREVENTED = 32,
    DOTA_COMBATLOG_UNIT_SUMMONED = 33,
    DOTA_COMBATLOG_ATTACK_EVADE = 34,
    DOTA_COMBATLOG_TREE_CUT = 35,
    DOTA_COMBATLOG_SUCCESSFUL_SCAN = 36,
    DOTA_COMBATLOG_END_KILLSTREAK = 37,
    DOTA_COMBATLOG_BLOODSTONE_CHARGE = 38,
    DOTA_COMBATLOG_CRITICAL_DAMAGE = 39,
    DOTA_COMBATLOG_SPELL_ABSORB = 40,
    DOTA_COMBATLOG_UNIT_TELEPORTED = 41,
    DOTA_COMBATLOG_KILL_EATER_EVENT = 42,
    DOTA_COMBATLOG_NEUTRAL_ITEM_EARNED = 43,
    DOTA_COMBATLOG_STAT_TRACKER_PLAYER = 44
}
declare function dotaCombatlogTypesFromJSON(object: any): dotaCombatlogTypes;
declare function dotaCombatlogTypesToJSON(object: dotaCombatlogTypes): string;
declare enum EDPCFavoriteType {
    FAVORITE_TYPE_ALL = 0,
    FAVORITE_TYPE_PLAYER = 1,
    FAVORITE_TYPE_TEAM = 2,
    FAVORITE_TYPE_LEAGUE = 3
}
declare function eDPCFavoriteTypeFromJSON(object: any): EDPCFavoriteType;
declare function eDPCFavoriteTypeToJSON(object: EDPCFavoriteType): string;
declare enum EDPCPushNotification {
    DPC_PUSH_NOTIFICATION_MATCH_STARTING = 1,
    DPC_PUSH_NOTIFICATION_PLAYER_LEFT_TEAM = 10,
    DPC_PUSH_NOTIFICATION_PLAYER_JOINED_TEAM = 11,
    DPC_PUSH_NOTIFICATION_PLAYER_JOINED_TEAM_AS_COACH = 12,
    DPC_PUSH_NOTIFICATION_PLAYER_LEFT_TEAM_AS_COACH = 13,
    DPC_PUSH_NOTIFICATION_LEAGUE_RESULT = 20,
    DPC_PUSH_NOTIFICATION_PREDICTION_MATCHES_AVAILABLE = 30,
    DPC_PUSH_NOTIFICATION_PREDICTION_RESULT = 31,
    DPC_PUSH_NOTIFICATION_FANTASY_PLAYER_CLEARED = 40,
    DPC_PUSH_NOTIFICATION_FANTASY_DAILY_SUMMARY = 41,
    DPC_PUSH_NOTIFICATION_FANTASY_FINAL_RESULTS = 42
}
declare function eDPCPushNotificationFromJSON(object: any): EDPCPushNotification;
declare function eDPCPushNotificationToJSON(object: EDPCPushNotification): string;
declare enum EEventActionScoreMode {
    k_eEventActionScoreMode_Add = 0,
    k_eEventActionScoreMode_Min = 1
}
declare function eEventActionScoreModeFromJSON(object: any): EEventActionScoreMode;
declare function eEventActionScoreModeToJSON(object: EEventActionScoreMode): string;
declare enum EPlayerChallengeHistoryType {
    k_EPlayerChallengeHistoryType_Invalid = 0,
    k_EPlayerChallengeHistoryType_KillEater = 1,
    k_EPlayerChallengeHistoryType_DotaPlusRelic = 2,
    k_EPlayerChallengeHistoryType_DotaPlusHeroPlayerChallenge = 3,
    k_EPlayerChallengeHistoryType_InGameEventChallenge = 4,
    k_EPlayerChallengeHistoryType_GuildContract = 5
}
declare function ePlayerChallengeHistoryTypeFromJSON(object: any): EPlayerChallengeHistoryType;
declare function ePlayerChallengeHistoryTypeToJSON(object: EPlayerChallengeHistoryType): string;
declare enum EOverwatchReportReason {
    k_EOverwatchReportReason_Unknown = 0,
    k_EOverwatchReportReason_Cheating = 1,
    k_EOverwatchReportReason_Feeding = 2,
    k_EOverwatchReportReason_Griefing = 3,
    k_EOverwatchReportReason_Suspicious = 4,
    k_EOverwatchReportReason_AbilityAbuse = 5
}
declare function eOverwatchReportReasonFromJSON(object: any): EOverwatchReportReason;
declare function eOverwatchReportReasonToJSON(object: EOverwatchReportReason): string;
declare enum ECandyShopUpgrade {
    k_ECandyShopUpgradeInvalid = -1,
    k_ECandyShopUpgrade_InventorySize = 0,
    k_ECandyShopUpgrade_RewardShelf = 1,
    k_ECandyShopUpgrade_ExtraExchangeRecipe = 2
}
declare function eCandyShopUpgradeFromJSON(object: any): ECandyShopUpgrade;
declare function eCandyShopUpgradeToJSON(object: ECandyShopUpgrade): string;
declare enum EItemSuggestPreference {
    k_EItemSuggestPreference_None = 0,
    k_EItemSuggestPreference_Liked = 1,
    k_EItemSuggestPreference_Disliked = 2
}
declare function eItemSuggestPreferenceFromJSON(object: any): EItemSuggestPreference;
declare function eItemSuggestPreferenceToJSON(object: EItemSuggestPreference): string;
declare enum ETimerAlertType {
    k_TimerAlertType_PowerRune = 1,
    k_TimerAlertType_BountyRune = 2,
    k_TimerAlertType_WisdomShrine = 3,
    k_TimerAlertType_JungleCamps = 4,
    k_TimerAlertType_LotusPool = 5
}
declare function eTimerAlertTypeFromJSON(object: any): ETimerAlertType;
declare function eTimerAlertTypeToJSON(object: ETimerAlertType): string;
interface CDOTAClientHardwareSpecs {
    logicalProcessors: number;
    cpuCyclesPerSecond: string;
    totalPhysicalMemory: string;
    is64BitOs: boolean;
    uploadMeasurement: string;
    preferNotHost: boolean;
    crc: number[];
}
declare const CDOTAClientHardwareSpecs: MessageFns$e<CDOTAClientHardwareSpecs>;
interface CDOTASaveGame {
    matchId: string;
    saveTime: number;
    players: CDOTASaveGame_Player[];
    saveInstances: CDOTASaveGame_SaveInstance[];
}
declare const CDOTASaveGame: MessageFns$e<CDOTASaveGame>;
interface CDOTASaveGame_Player {
    team: dotaGcTeam;
    name: string;
    hero: string;
}
declare const CDOTASaveGame_Player: MessageFns$e<CDOTASaveGame_Player>;
interface CDOTASaveGame_SaveInstance {
    gameTime: number;
    team1Score: number;
    team2Score: number;
    playerPositions: CDOTASaveGame_SaveInstance_PlayerPositions[];
    saveId: number;
    saveTime: number;
}
declare const CDOTASaveGame_SaveInstance: MessageFns$e<CDOTASaveGame_SaveInstance>;
interface CDOTASaveGame_SaveInstance_PlayerPositions {
    x: number;
    y: number;
}
declare const CDOTASaveGame_SaveInstance_PlayerPositions: MessageFns$e<CDOTASaveGame_SaveInstance_PlayerPositions>;
interface CMsgDOTACombatLogEntry {
    type: dotaCombatlogTypes;
    targetName: number;
    targetSourceName: number;
    attackerName: number;
    damageSourceName: number;
    inflictorName: number;
    isAttackerIllusion: boolean;
    isAttackerHero: boolean;
    isTargetIllusion: boolean;
    isTargetHero: boolean;
    isVisibleRadiant: boolean;
    isVisibleDire: boolean;
    value: number;
    health: number;
    timestamp: number;
    stunDuration: number;
    slowDuration: number;
    isAbilityToggleOn: boolean;
    isAbilityToggleOff: boolean;
    abilityLevel: number;
    locationX: number;
    locationY: number;
    goldReason: number;
    timestampRaw: number;
    modifierDuration: number;
    xpReason: number;
    lastHits: number;
    attackerTeam: number;
    targetTeam: number;
    obsWardsPlaced: number;
    assistPlayer0: number;
    assistPlayer1: number;
    assistPlayer2: number;
    assistPlayer3: number;
    stackCount: number;
    hiddenModifier: boolean;
    isTargetBuilding: boolean;
    neutralCampType: number;
    runeType: number;
    assistPlayers: number[];
    isHealSave: boolean;
    isUltimateAbility: boolean;
    attackerHeroLevel: number;
    targetHeroLevel: number;
    xpm: number;
    gpm: number;
    eventLocation: number;
    targetIsSelf: boolean;
    damageType: number;
    invisibilityModifier: boolean;
    damageCategory: number;
    networth: number;
    buildingType: number;
    modifierElapsedDuration: number;
    silenceModifier: boolean;
    healFromLifesteal: boolean;
    modifierPurged: boolean;
    spellEvaded: boolean;
    motionControllerModifier: boolean;
    longRangeKill: boolean;
    modifierPurgeAbility: number;
    modifierPurgeNpc: number;
    rootModifier: boolean;
    totalUnitDeathCount: number;
    auraModifier: boolean;
    armorDebuffModifier: boolean;
    noPhysicalDamageModifier: boolean;
    modifierAbility: number;
    modifierHidden: boolean;
    inflictorIsStolenAbility: boolean;
    killEaterEvent: number;
    unitStatusLabel: number;
    spellGeneratedAttack: boolean;
    atNightTime: boolean;
    attackerHasScepter: boolean;
    neutralCampTeam: number;
    regeneratedHealth: number;
    willReincarnate: boolean;
    usesCharges: boolean;
    trackedStatId: number;
}
declare const CMsgDOTACombatLogEntry: MessageFns$e<CMsgDOTACombatLogEntry>;
interface CMsgPendingEventAward {
    eventId: EEvent;
    actionId: number;
    numToGrant: number;
    scoreMode: EEventActionScoreMode;
    auditAction: number;
    auditData: string;
}
declare const CMsgPendingEventAward: MessageFns$e<CMsgPendingEventAward>;
type Builtin$e = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$e<T> = T extends Builtin$e ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$e<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$e<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$e<T[K]>;
} : Partial<T>;
interface MessageFns$e<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$e<T>): T;
    fromPartial(object: DeepPartial$e<T>): T;
}

declare enum ESteamLearnDataType {
    STEAMLEARN_DATATYPE_INVALID = 0,
    STEAMLEARN_DATATYPE_INT32 = 1,
    STEAMLEARN_DATATYPE_FLOAT32 = 2,
    STEAMLEARN_DATATYPE_BOOL = 3,
    STEAMLEARN_DATATYPE_STRING = 4,
    STEAMLEARN_DATATYPE_OBJECT = 5
}
declare function eSteamLearnDataTypeFromJSON(object: any): ESteamLearnDataType;
declare function eSteamLearnDataTypeToJSON(object: ESteamLearnDataType): string;
declare enum ESteammLearnRegisterDataSourceResult {
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR = 0,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_SUCCESS_CREATED = 1,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_SUCCESS_FOUND = 2,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_GENERIC = 3,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_NAME = 4,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_VERSION = 5,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_DATA_CHANGED = 6,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_DATA_INVALID = 7,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_FORBIDDEN = 8,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_ERROR_INVALID_TIMESTAMP = 9,
    STEAMLEARN_REGISTER_DATA_SOURCE_RESULT_DISABLED = 10
}
declare function eSteammLearnRegisterDataSourceResultFromJSON(object: any): ESteammLearnRegisterDataSourceResult;
declare function eSteammLearnRegisterDataSourceResultToJSON(object: ESteammLearnRegisterDataSourceResult): string;
declare enum ESteamLearnCacheDataResult {
    STEAMLEARN_CACHE_DATA_ERROR = 0,
    STEAMLEARN_CACHE_DATA_SUCCESS = 1,
    STEAMLEARN_CACHE_DATA_ERROR_UNKNOWN_DATA_SOURCE = 2,
    STEAMLEARN_CACHE_DATA_ERROR_UNCACHED_DATA_SOURCE = 3,
    STEAMLEARN_CACHE_DATA_ERROR_INVALID_KEYS = 4,
    STEAMLEARN_CACHE_DATA_ERROR_FORBIDDEN = 5,
    STEAMLEARN_CACHE_DATA_ERROR_INVALID_TIMESTAMP = 6,
    STEAMLEARN_CACHE_DATA_DISABLED = 7
}
declare function eSteamLearnCacheDataResultFromJSON(object: any): ESteamLearnCacheDataResult;
declare function eSteamLearnCacheDataResultToJSON(object: ESteamLearnCacheDataResult): string;
declare enum ESteamLearnSnapshotProjectResult {
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR = 0,
    STEAMLEARN_SNAPSHOT_PROJECT_SUCCESS_STORED = 1,
    STEAMLEARN_SNAPSHOT_PROJECT_SUCCESS_QUEUED = 2,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_PROJECT_ID = 3,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_UNKNOWN_DATA_SOURCE = 4,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_DATA_SOURCE_KEY = 5,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_MISSING_CACHE_DURATION = 6,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_NO_PUBLISHED_CONFIG = 7,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_FORBIDDEN = 8,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_TIMESTAMP = 9,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INTERNAL_DATA_SOURCE_ERROR = 10,
    STEAMLEARN_SNAPSHOT_PROJECT_DISABLED = 11,
    STEAMLEARN_SNAPSHOT_PROJECT_ERROR_INVALID_PUBLISHED_VERSION = 12
}
declare function eSteamLearnSnapshotProjectResultFromJSON(object: any): ESteamLearnSnapshotProjectResult;
declare function eSteamLearnSnapshotProjectResultToJSON(object: ESteamLearnSnapshotProjectResult): string;
declare enum ESteamLearnGetAccessTokensResult {
    STEAMLEARN_GET_ACCESS_TOKENS_ERROR = 0,
    STEAMLEARN_GET_ACCESS_TOKENS_SUCCESS = 1
}
declare function eSteamLearnGetAccessTokensResultFromJSON(object: any): ESteamLearnGetAccessTokensResult;
declare function eSteamLearnGetAccessTokensResultToJSON(object: ESteamLearnGetAccessTokensResult): string;
declare enum ESteamLearnInferenceResult {
    STEAMLEARN_INFERENCE_ERROR = 0,
    STEAMLEARN_INFERENCE_SUCCESS = 1,
    STEAMLEARN_INFERENCE_ERROR_INVALID_PROJECT_ID = 2,
    STEAMLEARN_INFERENCE_ERROR_MISSING_CACHED_SCHEMA_DATA = 3,
    STEAMLEARN_INFERENCE_ERROR_NO_PUBLISHED_CONFIG = 4,
    STEAMLEARN_INFERENCE_ERROR_FORBIDDEN = 5,
    STEAMLEARN_INFERENCE_ERROR_INVALID_TIMESTAMP = 6,
    STEAMLEARN_INFERENCE_ERROR_INVALID_PUBLISHED_VERSION = 7,
    STEAMLEARN_INFERENCE_ERROR_NO_FETCH_ID_FOUND = 8,
    STEAMLEARN_INFERENCE_ERROR_TOO_BUSY = 9
}
declare function eSteamLearnInferenceResultFromJSON(object: any): ESteamLearnInferenceResult;
declare function eSteamLearnInferenceResultToJSON(object: ESteamLearnInferenceResult): string;
declare enum ESteamLearnInferenceMetadataResult {
    STEAMLEARN_INFERENCE_METADATA_ERROR = 0,
    STEAMLEARN_INFERENCE_METADATA_SUCCESS = 1,
    STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_PROJECT_ID = 2,
    STEAMLEARN_INFERENCE_METADATA_ERROR_NO_PUBLISHED_CONFIG = 3,
    STEAMLEARN_INFERENCE_METADATA_ERROR_FORBIDDEN = 4,
    STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_TIMESTAMP = 5,
    STEAMLEARN_INFERENCE_METADATA_ERROR_INVALID_PUBLISHED_VERSION = 6,
    STEAMLEARN_INFERENCE_METADATA_ERROR_NO_FETCH_ID_FOUND = 7
}
declare function eSteamLearnInferenceMetadataResultFromJSON(object: any): ESteamLearnInferenceMetadataResult;
declare function eSteamLearnInferenceMetadataResultToJSON(object: ESteamLearnInferenceMetadataResult): string;
interface CMsgSteamLearnDataSourceDescObject {
    elements: CMsgSteamLearnDataSourceDescElement[];
}
declare const CMsgSteamLearnDataSourceDescObject: MessageFns$d<CMsgSteamLearnDataSourceDescObject>;
interface CMsgSteamLearnDataSourceDescElement {
    name: string;
    dataType: ESteamLearnDataType;
    object: CMsgSteamLearnDataSourceDescObject | undefined;
    count: number;
}
declare const CMsgSteamLearnDataSourceDescElement: MessageFns$d<CMsgSteamLearnDataSourceDescElement>;
interface CMsgSteamLearnDataSource {
    id: number;
    name: string;
    version: number;
    sourceDescription: string;
    structure: CMsgSteamLearnDataSourceDescObject | undefined;
    structureCrc: number;
    cacheDurationSeconds: number;
}
declare const CMsgSteamLearnDataSource: MessageFns$d<CMsgSteamLearnDataSource>;
interface CMsgSteamLearnDataObject {
    elements: CMsgSteamLearnDataElement[];
}
declare const CMsgSteamLearnDataObject: MessageFns$d<CMsgSteamLearnDataObject>;
interface CMsgSteamLearnDataElement {
    name: string;
    dataInt32s: number[];
    dataFloats: number[];
    dataBools: boolean[];
    dataStrings: string[];
    dataObjects: CMsgSteamLearnDataObject[];
}
declare const CMsgSteamLearnDataElement: MessageFns$d<CMsgSteamLearnDataElement>;
interface CMsgSteamLearnData {
    dataSourceId: number;
    keys: string[];
    dataObject: CMsgSteamLearnDataObject | undefined;
}
declare const CMsgSteamLearnData: MessageFns$d<CMsgSteamLearnData>;
interface CMsgSteamLearnDataList {
    data: CMsgSteamLearnData[];
}
declare const CMsgSteamLearnDataList: MessageFns$d<CMsgSteamLearnDataList>;
interface CMsgSteamLearnRegisterDataSourceRequest {
    accessToken: string;
    dataSource: CMsgSteamLearnDataSource | undefined;
}
declare const CMsgSteamLearnRegisterDataSourceRequest: MessageFns$d<CMsgSteamLearnRegisterDataSourceRequest>;
interface CMsgSteamLearnRegisterDataSourceResponse {
    result: ESteammLearnRegisterDataSourceResult;
    dataSource: CMsgSteamLearnDataSource | undefined;
}
declare const CMsgSteamLearnRegisterDataSourceResponse: MessageFns$d<CMsgSteamLearnRegisterDataSourceResponse>;
interface CMsgSteamLearnCacheDataRequest {
    accessToken: string;
    data: CMsgSteamLearnData | undefined;
}
declare const CMsgSteamLearnCacheDataRequest: MessageFns$d<CMsgSteamLearnCacheDataRequest>;
interface CMsgSteamLearnCacheDataResponse {
    cacheDataResult: ESteamLearnCacheDataResult;
}
declare const CMsgSteamLearnCacheDataResponse: MessageFns$d<CMsgSteamLearnCacheDataResponse>;
interface CMsgSteamLearnSnapshotProjectRequest {
    accessToken: string;
    projectId: number;
    publishedVersion: number;
    keys: string[];
    data: CMsgSteamLearnData[];
    pendingDataLimitSeconds: number;
}
declare const CMsgSteamLearnSnapshotProjectRequest: MessageFns$d<CMsgSteamLearnSnapshotProjectRequest>;
interface CMsgSteamLearnSnapshotProjectResponse {
    snapshotResult: ESteamLearnSnapshotProjectResult;
}
declare const CMsgSteamLearnSnapshotProjectResponse: MessageFns$d<CMsgSteamLearnSnapshotProjectResponse>;
interface CMsgSteamLearnBatchOperationRequest {
    cacheDataRequests: CMsgSteamLearnCacheDataRequest[];
    snapshotRequests: CMsgSteamLearnSnapshotProjectRequest[];
    inferenceRequests: CMsgSteamLearnInferenceRequest[];
}
declare const CMsgSteamLearnBatchOperationRequest: MessageFns$d<CMsgSteamLearnBatchOperationRequest>;
interface CMsgSteamLearnBatchOperationResponse {
    cacheDataResponses: CMsgSteamLearnCacheDataResponse[];
    snapshotResponses: CMsgSteamLearnSnapshotProjectResponse[];
    inferenceResponses: CMsgSteamLearnInferenceResponse[];
}
declare const CMsgSteamLearnBatchOperationResponse: MessageFns$d<CMsgSteamLearnBatchOperationResponse>;
interface CMsgSteamLearnAccessTokens {
    registerDataSourceAccessToken: string;
    cacheDataAccessTokens: CMsgSteamLearnAccessTokens_CacheDataAccessToken[];
    snapshotProjectAccessTokens: CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken[];
    inferenceAccessTokens: CMsgSteamLearnAccessTokens_InferenceAccessToken[];
}
declare const CMsgSteamLearnAccessTokens: MessageFns$d<CMsgSteamLearnAccessTokens>;
interface CMsgSteamLearnAccessTokens_CacheDataAccessToken {
    dataSourceId: number;
    accessToken: string;
}
declare const CMsgSteamLearnAccessTokens_CacheDataAccessToken: MessageFns$d<CMsgSteamLearnAccessTokens_CacheDataAccessToken>;
interface CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken {
    projectId: number;
    accessToken: string;
}
declare const CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken: MessageFns$d<CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken>;
interface CMsgSteamLearnAccessTokens_InferenceAccessToken {
    projectId: number;
    accessToken: string;
}
declare const CMsgSteamLearnAccessTokens_InferenceAccessToken: MessageFns$d<CMsgSteamLearnAccessTokens_InferenceAccessToken>;
interface CMsgSteamLearnGetAccessTokensRequest {
    appid: number;
}
declare const CMsgSteamLearnGetAccessTokensRequest: MessageFns$d<CMsgSteamLearnGetAccessTokensRequest>;
interface CMsgSteamLearnGetAccessTokensResponse {
    result: ESteamLearnGetAccessTokensResult;
    accessTokens: CMsgSteamLearnAccessTokens | undefined;
}
declare const CMsgSteamLearnGetAccessTokensResponse: MessageFns$d<CMsgSteamLearnGetAccessTokensResponse>;
interface CMsgSteamLearnInferenceRequest {
    accessToken: string;
    projectId: number;
    publishedVersion: number;
    overrideTrainId: number;
    data: CMsgSteamLearnDataList | undefined;
    additionalData: number[];
}
declare const CMsgSteamLearnInferenceRequest: MessageFns$d<CMsgSteamLearnInferenceRequest>;
interface CMsgSteamLearnInferenceMetadataRequest {
    accessToken: string;
    projectId: number;
    publishedVersion: number;
    overrideTrainId: number;
}
declare const CMsgSteamLearnInferenceMetadataRequest: MessageFns$d<CMsgSteamLearnInferenceMetadataRequest>;
interface CMsgSteamLearnInferenceMetadataBackendRequest {
    projectId: number;
    fetchId: number;
}
declare const CMsgSteamLearnInferenceMetadataBackendRequest: MessageFns$d<CMsgSteamLearnInferenceMetadataBackendRequest>;
interface CMsgSteamLearnInferenceMetadataResponse {
    inferenceMetadataResult: ESteamLearnInferenceMetadataResult;
    rowRange: CMsgSteamLearnInferenceMetadataResponse_RowRange | undefined;
    ranges: CMsgSteamLearnInferenceMetadataResponse_Range[];
    stdDevs: CMsgSteamLearnInferenceMetadataResponse_StdDev[];
    compactTables: CMsgSteamLearnInferenceMetadataResponse_CompactTable[];
    sequenceTables: CMsgSteamLearnInferenceMetadataResponse_SequenceTable[];
    kmeans: CMsgSteamLearnInferenceMetadataResponse_KMeans[];
    appInfo: CMsgSteamLearnInferenceMetadataResponse_AppInfoEntry[];
    snapshotHistogram: CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram | undefined;
}
declare const CMsgSteamLearnInferenceMetadataResponse: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse>;
interface CMsgSteamLearnInferenceMetadataResponse_RowRange {
    minRow: string;
    maxRow: string;
}
declare const CMsgSteamLearnInferenceMetadataResponse_RowRange: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_RowRange>;
interface CMsgSteamLearnInferenceMetadataResponse_Range {
    dataElementPath: string;
    minValue: number;
    maxValue: number;
}
declare const CMsgSteamLearnInferenceMetadataResponse_Range: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_Range>;
interface CMsgSteamLearnInferenceMetadataResponse_StdDev {
    dataElementPath: string;
    mean: number;
    stdDev: number;
}
declare const CMsgSteamLearnInferenceMetadataResponse_StdDev: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_StdDev>;
interface CMsgSteamLearnInferenceMetadataResponse_CompactTable {
    name: string;
    mapValues: CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry[];
    mapMappings: CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry[];
}
declare const CMsgSteamLearnInferenceMetadataResponse_CompactTable: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_CompactTable>;
interface CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry {
    value: number;
    mapping: number;
    count: string;
}
declare const CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry>;
interface CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry {
    key: number;
    value: CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry | undefined;
}
declare const CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry>;
interface CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry {
    key: number;
    value: CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry | undefined;
}
declare const CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry>;
interface CMsgSteamLearnInferenceMetadataResponse_SequenceTable {
    name: string;
    mapValues: CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapValuesEntry[];
    mapMappings: CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapMappingsEntry[];
    totalCount: string;
}
declare const CMsgSteamLearnInferenceMetadataResponse_SequenceTable: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_SequenceTable>;
interface CMsgSteamLearnInferenceMetadataResponse_SequenceTable_Entry {
    values: number[];
    crc: number;
    count: number;
}
declare const CMsgSteamLearnInferenceMetadataResponse_SequenceTable_Entry: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_SequenceTable_Entry>;
interface CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapValuesEntry {
    key: number;
    value: CMsgSteamLearnInferenceMetadataResponse_SequenceTable_Entry | undefined;
}
declare const CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapValuesEntry: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapValuesEntry>;
interface CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapMappingsEntry {
    key: string;
    value: CMsgSteamLearnInferenceMetadataResponse_SequenceTable_Entry | undefined;
}
declare const CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapMappingsEntry: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapMappingsEntry>;
interface CMsgSteamLearnInferenceMetadataResponse_KMeans {
    name: string;
    clusters: CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster[];
}
declare const CMsgSteamLearnInferenceMetadataResponse_KMeans: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_KMeans>;
interface CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster {
    x: number;
    y: number;
    radius: number;
    radius75pct: number;
    radius50pct: number;
    radius25pct: number;
}
declare const CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster>;
interface CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram {
    minValue: number;
    maxValue: number;
    numBuckets: number;
    bucketCounts: number[];
}
declare const CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram>;
interface CMsgSteamLearnInferenceMetadataResponse_AppInfo {
    countryAllow: string;
    countryDeny: string;
    platformWin: boolean;
    platformMac: boolean;
    platformLinux: boolean;
    adultViolence: boolean;
    adultSex: boolean;
}
declare const CMsgSteamLearnInferenceMetadataResponse_AppInfo: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_AppInfo>;
interface CMsgSteamLearnInferenceMetadataResponse_AppInfoEntry {
    key: number;
    value: CMsgSteamLearnInferenceMetadataResponse_AppInfo | undefined;
}
declare const CMsgSteamLearnInferenceMetadataResponse_AppInfoEntry: MessageFns$d<CMsgSteamLearnInferenceMetadataResponse_AppInfoEntry>;
interface CMsgSteamLearnInferenceBackendResponse {
    outputs: CMsgSteamLearnInferenceBackendResponse_Output[];
}
declare const CMsgSteamLearnInferenceBackendResponse: MessageFns$d<CMsgSteamLearnInferenceBackendResponse>;
interface CMsgSteamLearnInferenceBackendResponse_Sequence {
    value: number[];
}
declare const CMsgSteamLearnInferenceBackendResponse_Sequence: MessageFns$d<CMsgSteamLearnInferenceBackendResponse_Sequence>;
interface CMsgSteamLearnInferenceBackendResponse_RegressionOutput {
    value: number;
}
declare const CMsgSteamLearnInferenceBackendResponse_RegressionOutput: MessageFns$d<CMsgSteamLearnInferenceBackendResponse_RegressionOutput>;
interface CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput {
    value: number;
}
declare const CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput: MessageFns$d<CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput>;
interface CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput {
    weight: number[];
    value: number[];
    valueSequence: CMsgSteamLearnInferenceBackendResponse_Sequence[];
}
declare const CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput: MessageFns$d<CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput>;
interface CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput {
    weight: number[];
    value: number[];
    valueSequence: CMsgSteamLearnInferenceBackendResponse_Sequence[];
}
declare const CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput: MessageFns$d<CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput>;
interface CMsgSteamLearnInferenceBackendResponse_Output {
    binaryCrossentropy?: CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput | undefined;
    categoricalCrossentropy?: CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput | undefined;
    multiBinaryCrossentropy?: CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput | undefined;
    regression?: CMsgSteamLearnInferenceBackendResponse_RegressionOutput | undefined;
}
declare const CMsgSteamLearnInferenceBackendResponse_Output: MessageFns$d<CMsgSteamLearnInferenceBackendResponse_Output>;
interface CMsgSteamLearnInferenceResponse {
    inferenceResult: ESteamLearnInferenceResult;
    backendResponse: CMsgSteamLearnInferenceBackendResponse | undefined;
    keys: string[];
}
declare const CMsgSteamLearnInferenceResponse: MessageFns$d<CMsgSteamLearnInferenceResponse>;
interface SteamLearn {
    RegisterDataSource(request: CMsgSteamLearnRegisterDataSourceRequest): Promise<CMsgSteamLearnRegisterDataSourceResponse>;
    CacheData(request: CMsgSteamLearnCacheDataRequest): Promise<CMsgSteamLearnCacheDataResponse>;
    SnapshotProject(request: CMsgSteamLearnSnapshotProjectRequest): Promise<CMsgSteamLearnSnapshotProjectResponse>;
    BatchOperation(request: CMsgSteamLearnBatchOperationRequest): Promise<CMsgSteamLearnBatchOperationResponse>;
    GetAccessTokens(request: CMsgSteamLearnGetAccessTokensRequest): Promise<CMsgSteamLearnGetAccessTokensResponse>;
    Inference(request: CMsgSteamLearnInferenceRequest): Promise<CMsgSteamLearnInferenceResponse>;
    InferenceMetadata(request: CMsgSteamLearnInferenceMetadataRequest): Promise<CMsgSteamLearnInferenceMetadataResponse>;
}
declare const SteamLearnServiceName = "SteamLearn";
declare class SteamLearnClientImpl implements SteamLearn {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    RegisterDataSource(request: CMsgSteamLearnRegisterDataSourceRequest): Promise<CMsgSteamLearnRegisterDataSourceResponse>;
    CacheData(request: CMsgSteamLearnCacheDataRequest): Promise<CMsgSteamLearnCacheDataResponse>;
    SnapshotProject(request: CMsgSteamLearnSnapshotProjectRequest): Promise<CMsgSteamLearnSnapshotProjectResponse>;
    BatchOperation(request: CMsgSteamLearnBatchOperationRequest): Promise<CMsgSteamLearnBatchOperationResponse>;
    GetAccessTokens(request: CMsgSteamLearnGetAccessTokensRequest): Promise<CMsgSteamLearnGetAccessTokensResponse>;
    Inference(request: CMsgSteamLearnInferenceRequest): Promise<CMsgSteamLearnInferenceResponse>;
    InferenceMetadata(request: CMsgSteamLearnInferenceMetadataRequest): Promise<CMsgSteamLearnInferenceMetadataResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin$d = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$d<T> = T extends Builtin$d ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$d<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$d<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$d<T[K]>;
} : Partial<T>;
interface MessageFns$d<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$d<T>): T;
    fromPartial(object: DeepPartial$d<T>): T;
}

declare enum ESourceEngine {
    k_ESE_Source1 = 0,
    k_ESE_Source2 = 1
}
declare function eSourceEngineFromJSON(object: any): ESourceEngine;
declare function eSourceEngineToJSON(object: ESourceEngine): string;
declare enum PartnerAccountType {
    PARTNER_NONE = 0,
    PARTNER_PERFECT_WORLD = 1,
    PARTNER_INVALID = 3
}
declare function partnerAccountTypeFromJSON(object: any): PartnerAccountType;
declare function partnerAccountTypeToJSON(object: PartnerAccountType): string;
declare enum GCConnectionStatus {
    GCConnectionStatus_HAVE_SESSION = 0,
    GCConnectionStatus_GC_GOING_DOWN = 1,
    GCConnectionStatus_NO_SESSION = 2,
    GCConnectionStatus_NO_SESSION_IN_LOGON_QUEUE = 3,
    GCConnectionStatus_NO_STEAM = 4,
    GCConnectionStatus_SUSPENDED = 5,
    GCConnectionStatus_STEAM_GOING_DOWN = 6
}
declare function gCConnectionStatusFromJSON(object: any): GCConnectionStatus;
declare function gCConnectionStatusToJSON(object: GCConnectionStatus): string;
interface CExtraMsgBlock {
    msgType: number;
    contents: Buffer;
    msgKey: string;
    isCompressed: boolean;
}
declare const CExtraMsgBlock: MessageFns$c<CExtraMsgBlock>;
interface CMsgSteamLearnServerInfo {
    accessTokens: CMsgSteamLearnAccessTokens | undefined;
    projectInfos: CMsgSteamLearnServerInfo_ProjectInfo[];
}
declare const CMsgSteamLearnServerInfo: MessageFns$c<CMsgSteamLearnServerInfo>;
interface CMsgSteamLearnServerInfo_ProjectInfo {
    projectId: number;
    snapshotPublishedVersion: number;
    inferencePublishedVersion: number;
    snapshotPercentage: number;
    snapshotEnabled: boolean;
}
declare const CMsgSteamLearnServerInfo_ProjectInfo: MessageFns$c<CMsgSteamLearnServerInfo_ProjectInfo>;
interface CMsgGCAssertJobData {
    messageType: string;
    messageData: Buffer;
}
declare const CMsgGCAssertJobData: MessageFns$c<CMsgGCAssertJobData>;
interface CMsgGCConCommand {
    command: string;
}
declare const CMsgGCConCommand: MessageFns$c<CMsgGCConCommand>;
interface CMsgSDOAssert {
    sdoType: number;
    requests: CMsgSDOAssert_Request[];
}
declare const CMsgSDOAssert: MessageFns$c<CMsgSDOAssert>;
interface CMsgSDOAssert_Request {
    key: string[];
    requestingJob: string;
}
declare const CMsgSDOAssert_Request: MessageFns$c<CMsgSDOAssert_Request>;
interface CMsgSOIDOwner {
    type: number;
    id: string;
}
declare const CMsgSOIDOwner: MessageFns$c<CMsgSOIDOwner>;
interface CMsgSOSingleObject {
    typeId: number;
    objectData: Buffer;
    version: string;
    ownerSoid: CMsgSOIDOwner | undefined;
    serviceId: number;
}
declare const CMsgSOSingleObject: MessageFns$c<CMsgSOSingleObject>;
interface CMsgSOMultipleObjects {
    objectsModified: CMsgSOMultipleObjects_SingleObject[];
    version: string;
    objectsAdded: CMsgSOMultipleObjects_SingleObject[];
    objectsRemoved: CMsgSOMultipleObjects_SingleObject[];
    ownerSoid: CMsgSOIDOwner | undefined;
    serviceId: number;
}
declare const CMsgSOMultipleObjects: MessageFns$c<CMsgSOMultipleObjects>;
interface CMsgSOMultipleObjects_SingleObject {
    typeId: number;
    objectData: Buffer;
}
declare const CMsgSOMultipleObjects_SingleObject: MessageFns$c<CMsgSOMultipleObjects_SingleObject>;
interface CMsgSOCacheSubscribed {
    objects: CMsgSOCacheSubscribed_SubscribedType[];
    version: string;
    ownerSoid: CMsgSOIDOwner | undefined;
    serviceId: number;
    serviceList: number[];
    syncVersion: string;
}
declare const CMsgSOCacheSubscribed: MessageFns$c<CMsgSOCacheSubscribed>;
interface CMsgSOCacheSubscribed_SubscribedType {
    typeId: number;
    objectData: Buffer[];
}
declare const CMsgSOCacheSubscribed_SubscribedType: MessageFns$c<CMsgSOCacheSubscribed_SubscribedType>;
interface CMsgSOCacheSubscribedUpToDate {
    version: string;
    ownerSoid: CMsgSOIDOwner | undefined;
    serviceId: number;
    serviceList: number[];
    syncVersion: string;
}
declare const CMsgSOCacheSubscribedUpToDate: MessageFns$c<CMsgSOCacheSubscribedUpToDate>;
interface CMsgSOCacheUnsubscribed {
    ownerSoid: CMsgSOIDOwner | undefined;
}
declare const CMsgSOCacheUnsubscribed: MessageFns$c<CMsgSOCacheUnsubscribed>;
interface CMsgSOCacheSubscriptionCheck {
    version: string;
    ownerSoid: CMsgSOIDOwner | undefined;
    serviceId: number;
    serviceList: number[];
    syncVersion: string;
}
declare const CMsgSOCacheSubscriptionCheck: MessageFns$c<CMsgSOCacheSubscriptionCheck>;
interface CMsgSOCacheSubscriptionRefresh {
    ownerSoid: CMsgSOIDOwner | undefined;
}
declare const CMsgSOCacheSubscriptionRefresh: MessageFns$c<CMsgSOCacheSubscriptionRefresh>;
interface CMsgSOCacheVersion {
    version: string;
}
declare const CMsgSOCacheVersion: MessageFns$c<CMsgSOCacheVersion>;
interface CMsgGCMultiplexMessage {
    msgtype: number;
    payload: Buffer;
    steamids: string[];
}
declare const CMsgGCMultiplexMessage: MessageFns$c<CMsgGCMultiplexMessage>;
interface CMsgGCToGCSubGCStarting {
    dirIndex: number;
}
declare const CMsgGCToGCSubGCStarting: MessageFns$c<CMsgGCToGCSubGCStarting>;
interface CGCToGCMsgMasterAck {
    dirIndex: number;
    machineName: string;
    processName: string;
    directory: CGCToGCMsgMasterAck_Process[];
}
declare const CGCToGCMsgMasterAck: MessageFns$c<CGCToGCMsgMasterAck>;
interface CGCToGCMsgMasterAck_Process {
    dirIndex: number;
    typeInstances: number[];
}
declare const CGCToGCMsgMasterAck_Process: MessageFns$c<CGCToGCMsgMasterAck_Process>;
interface CGCToGCMsgMasterAckResponse {
    eresult: number;
}
declare const CGCToGCMsgMasterAckResponse: MessageFns$c<CGCToGCMsgMasterAckResponse>;
interface CMsgGCToGCUniverseStartup {
    isInitialStartup: boolean;
}
declare const CMsgGCToGCUniverseStartup: MessageFns$c<CMsgGCToGCUniverseStartup>;
interface CMsgGCToGCUniverseStartupResponse {
    eresult: number;
}
declare const CMsgGCToGCUniverseStartupResponse: MessageFns$c<CMsgGCToGCUniverseStartupResponse>;
interface CGCToGCMsgMasterStartupComplete {
    gcInfo: CGCToGCMsgMasterStartupComplete_GCInfo[];
}
declare const CGCToGCMsgMasterStartupComplete: MessageFns$c<CGCToGCMsgMasterStartupComplete>;
interface CGCToGCMsgMasterStartupComplete_GCInfo {
    dirIndex: number;
    machineName: string;
}
declare const CGCToGCMsgMasterStartupComplete_GCInfo: MessageFns$c<CGCToGCMsgMasterStartupComplete_GCInfo>;
interface CGCToGCMsgRouted {
    msgType: number;
    senderId: string;
    netMessage: Buffer;
}
declare const CGCToGCMsgRouted: MessageFns$c<CGCToGCMsgRouted>;
interface CGCToGCMsgRoutedReply {
    msgType: number;
    netMessage: Buffer;
}
declare const CGCToGCMsgRoutedReply: MessageFns$c<CGCToGCMsgRoutedReply>;
interface CMsgGCUpdateSubGCSessionInfo {
    updates: CMsgGCUpdateSubGCSessionInfo_CMsgUpdate[];
}
declare const CMsgGCUpdateSubGCSessionInfo: MessageFns$c<CMsgGCUpdateSubGCSessionInfo>;
interface CMsgGCUpdateSubGCSessionInfo_CMsgUpdate {
    steamid: string;
    ip: number;
    trusted: boolean;
}
declare const CMsgGCUpdateSubGCSessionInfo_CMsgUpdate: MessageFns$c<CMsgGCUpdateSubGCSessionInfo_CMsgUpdate>;
interface CMsgGCRequestSubGCSessionInfo {
    steamid: string;
}
declare const CMsgGCRequestSubGCSessionInfo: MessageFns$c<CMsgGCRequestSubGCSessionInfo>;
interface CMsgGCRequestSubGCSessionInfoResponse {
    ip: number;
    trusted: boolean;
    port: number;
    success: boolean;
}
declare const CMsgGCRequestSubGCSessionInfoResponse: MessageFns$c<CMsgGCRequestSubGCSessionInfoResponse>;
interface CMsgSOCacheHaveVersion {
    soid: CMsgSOIDOwner | undefined;
    version: string;
    serviceId: number;
    cachedFileVersion: number;
}
declare const CMsgSOCacheHaveVersion: MessageFns$c<CMsgSOCacheHaveVersion>;
interface CMsgClientHello {
    version: number;
    socacheHaveVersions: CMsgSOCacheHaveVersion[];
    clientSessionNeed: number;
    clientLauncher: PartnerAccountType;
    secretKey: string;
    clientLanguage: number;
    engine: ESourceEngine;
    steamdatagramLogin: Buffer;
    platformId: number;
    gameMsg: Buffer;
    osType: number;
    renderSystem: number;
    renderSystemReq: number;
    screenWidth: number;
    screenHeight: number;
    screenRefresh: number;
    renderWidth: number;
    renderHeight: number;
    swapWidth: number;
    swapHeight: number;
    isSteamChina: boolean;
    isSteamChinaClient: boolean;
    platformName: string;
}
declare const CMsgClientHello: MessageFns$c<CMsgClientHello>;
interface CMsgClientWelcome {
    version: number;
    gameData: Buffer;
    outofdateSubscribedCaches: CMsgSOCacheSubscribed[];
    uptodateSubscribedCaches: CMsgSOCacheSubscriptionCheck[];
    location: CMsgClientWelcome_Location | undefined;
    gcSocacheFileVersion: number;
    txnCountryCode: string;
    gameData2: Buffer;
    rtime32GcWelcomeTimestamp: number;
    currency: number;
    balance: number;
    balanceUrl: string;
    hasAcceptedChinaSsa: boolean;
    isBannedSteamChina: boolean;
    additionalWelcomeMsgs: CExtraMsgBlock | undefined;
    steamLearnServerInfo: CMsgSteamLearnServerInfo | undefined;
}
declare const CMsgClientWelcome: MessageFns$c<CMsgClientWelcome>;
interface CMsgClientWelcome_Location {
    latitude: number;
    longitude: number;
    country: string;
}
declare const CMsgClientWelcome_Location: MessageFns$c<CMsgClientWelcome_Location>;
interface CMsgConnectionStatus {
    status: GCConnectionStatus;
    clientSessionNeed: number;
    queuePosition: number;
    queueSize: number;
    waitSeconds: number;
    estimatedWaitSecondsRemaining: number;
}
declare const CMsgConnectionStatus: MessageFns$c<CMsgConnectionStatus>;
interface CMsgGCToGCSOCacheSubscribe {
    subscriber: string;
    subscribeToId: string;
    syncVersion: string;
    haveVersions: CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions[];
    subscribeToType: number;
}
declare const CMsgGCToGCSOCacheSubscribe: MessageFns$c<CMsgGCToGCSOCacheSubscribe>;
interface CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions {
    serviceId: number;
    version: string;
}
declare const CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions: MessageFns$c<CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions>;
interface CMsgGCToGCSOCacheUnsubscribe {
    subscriber: string;
    unsubscribeFromId: string;
    unsubscribeFromType: number;
}
declare const CMsgGCToGCSOCacheUnsubscribe: MessageFns$c<CMsgGCToGCSOCacheUnsubscribe>;
interface CMsgGCClientPing {
}
declare const CMsgGCClientPing: MessageFns$c<CMsgGCClientPing>;
interface CMsgGCToGCForwardAccountDetails {
    steamid: string;
    accountDetails: CGCSystemMsgGetAccountDetailsResponse | undefined;
    ageSeconds: number;
}
declare const CMsgGCToGCForwardAccountDetails: MessageFns$c<CMsgGCToGCForwardAccountDetails>;
interface CMsgGCToGCLoadSessionSOCache {
    accountId: number;
    forwardAccountDetails: CMsgGCToGCForwardAccountDetails | undefined;
}
declare const CMsgGCToGCLoadSessionSOCache: MessageFns$c<CMsgGCToGCLoadSessionSOCache>;
interface CMsgGCToGCLoadSessionSOCacheResponse {
}
declare const CMsgGCToGCLoadSessionSOCacheResponse: MessageFns$c<CMsgGCToGCLoadSessionSOCacheResponse>;
interface CMsgGCToGCUpdateSessionStats {
    userSessions: number;
    serverSessions: number;
    inLogonSurge: boolean;
}
declare const CMsgGCToGCUpdateSessionStats: MessageFns$c<CMsgGCToGCUpdateSessionStats>;
interface CMsgGCToClientRequestDropped {
}
declare const CMsgGCToClientRequestDropped: MessageFns$c<CMsgGCToClientRequestDropped>;
interface CWorkshopPopulateItemDescriptionsRequest {
    appid: number;
    languages: CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock[];
}
declare const CWorkshopPopulateItemDescriptionsRequest: MessageFns$c<CWorkshopPopulateItemDescriptionsRequest>;
interface CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription {
    gameitemid: number;
    itemDescription: string;
}
declare const CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription: MessageFns$c<CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription>;
interface CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock {
    language: string;
    descriptions: CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription[];
}
declare const CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock: MessageFns$c<CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock>;
interface CWorkshopGetContributorsRequest {
    appid: number;
    gameitemid: number;
}
declare const CWorkshopGetContributorsRequest: MessageFns$c<CWorkshopGetContributorsRequest>;
interface CWorkshopGetContributorsResponse {
    contributors: string[];
}
declare const CWorkshopGetContributorsResponse: MessageFns$c<CWorkshopGetContributorsResponse>;
interface CWorkshopSetItemPaymentRulesRequest {
    appid: number;
    gameitemid: number;
    associatedWorkshopFiles: CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule[];
    partnerAccounts: CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule[];
    validateOnly: boolean;
    makeWorkshopFilesSubscribable: boolean;
    associatedWorkshopFileForDirectPayments: CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule | undefined;
}
declare const CWorkshopSetItemPaymentRulesRequest: MessageFns$c<CWorkshopSetItemPaymentRulesRequest>;
interface CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule {
    workshopFileId: string;
    revenuePercentage: number;
    ruleDescription: string;
    ruleType: number;
}
declare const CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule: MessageFns$c<CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule>;
interface CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule {
    workshopFileId: string;
    ruleDescription: string;
}
declare const CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule: MessageFns$c<CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule>;
interface CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule {
    accountId: number;
    revenuePercentage: number;
    ruleDescription: string;
}
declare const CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule: MessageFns$c<CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule>;
interface CWorkshopSetItemPaymentRulesResponse {
    validationErrors: string[];
}
declare const CWorkshopSetItemPaymentRulesResponse: MessageFns$c<CWorkshopSetItemPaymentRulesResponse>;
interface CCommunityClanAnnouncementInfo {
    gid: string;
    clanid: string;
    posterid: string;
    headline: string;
    posttime: number;
    updatetime: number;
    body: string;
    commentcount: number;
    tags: string[];
    language: number;
    hidden: boolean;
    forumTopicId: string;
}
declare const CCommunityClanAnnouncementInfo: MessageFns$c<CCommunityClanAnnouncementInfo>;
interface CCommunityGetClanAnnouncementsRequest {
    steamid: string;
    offset: number;
    count: number;
    maxchars: number;
    stripHtml: boolean;
    requiredTags: string[];
    requireNoTags: boolean;
    languagePreference: number[];
    hiddenOnly: boolean;
    onlyGid: boolean;
    rtimeOldestDate: number;
    includeHidden: boolean;
    includePartnerEvents: boolean;
}
declare const CCommunityGetClanAnnouncementsRequest: MessageFns$c<CCommunityGetClanAnnouncementsRequest>;
interface CCommunityGetClanAnnouncementsResponse {
    maxchars: number;
    stripHtml: boolean;
    announcements: CCommunityClanAnnouncementInfo[];
}
declare const CCommunityGetClanAnnouncementsResponse: MessageFns$c<CCommunityGetClanAnnouncementsResponse>;
interface CBroadcastPostGameDataFrameRequest {
    appid: number;
    steamid: string;
    broadcastId: string;
    frameData: Buffer;
}
declare const CBroadcastPostGameDataFrameRequest: MessageFns$c<CBroadcastPostGameDataFrameRequest>;
interface CMsgSerializedSOCache {
    fileVersion: number;
    caches: CMsgSerializedSOCache_Cache[];
    gcSocacheFileVersion: number;
}
declare const CMsgSerializedSOCache: MessageFns$c<CMsgSerializedSOCache>;
interface CMsgSerializedSOCache_TypeCache {
    type: number;
    objects: Buffer[];
    serviceId: number;
}
declare const CMsgSerializedSOCache_TypeCache: MessageFns$c<CMsgSerializedSOCache_TypeCache>;
interface CMsgSerializedSOCache_Cache {
    type: number;
    id: string;
    versions: CMsgSerializedSOCache_Cache_Version[];
    typeCaches: CMsgSerializedSOCache_TypeCache[];
}
declare const CMsgSerializedSOCache_Cache: MessageFns$c<CMsgSerializedSOCache_Cache>;
interface CMsgSerializedSOCache_Cache_Version {
    service: number;
    version: string;
}
declare const CMsgSerializedSOCache_Cache_Version: MessageFns$c<CMsgSerializedSOCache_Cache_Version>;
interface CMsgGCToClientPollConvarRequest {
    convarName: string;
    pollId: number;
}
declare const CMsgGCToClientPollConvarRequest: MessageFns$c<CMsgGCToClientPollConvarRequest>;
interface CMsgGCToClientPollConvarResponse {
    pollId: number;
    convarValue: string;
}
declare const CMsgGCToClientPollConvarResponse: MessageFns$c<CMsgGCToClientPollConvarResponse>;
interface CGCMsgCompressedMsgToClient {
    msgId: number;
    compressedMsg: Buffer;
}
declare const CGCMsgCompressedMsgToClient: MessageFns$c<CGCMsgCompressedMsgToClient>;
interface CMsgGCToGCMasterBroadcastMessage {
    usersPerSecond: number;
    sendToUsers: boolean;
    sendToServers: boolean;
    msgId: number;
    msgData: Buffer;
}
declare const CMsgGCToGCMasterBroadcastMessage: MessageFns$c<CMsgGCToGCMasterBroadcastMessage>;
interface CMsgGCToGCMasterSubscribeToCache {
    soidType: number;
    soidId: string;
    accountIds: number[];
    steamIds: string[];
}
declare const CMsgGCToGCMasterSubscribeToCache: MessageFns$c<CMsgGCToGCMasterSubscribeToCache>;
interface CMsgGCToGCMasterSubscribeToCacheResponse {
}
declare const CMsgGCToGCMasterSubscribeToCacheResponse: MessageFns$c<CMsgGCToGCMasterSubscribeToCacheResponse>;
interface CMsgGCToGCMasterSubscribeToCacheAsync {
    subscribeMsg: CMsgGCToGCMasterSubscribeToCache | undefined;
}
declare const CMsgGCToGCMasterSubscribeToCacheAsync: MessageFns$c<CMsgGCToGCMasterSubscribeToCacheAsync>;
interface CMsgGCToGCMasterUnsubscribeFromCache {
    soidType: number;
    soidId: string;
    accountIds: number[];
    steamIds: string[];
}
declare const CMsgGCToGCMasterUnsubscribeFromCache: MessageFns$c<CMsgGCToGCMasterUnsubscribeFromCache>;
interface CMsgGCToGCMasterDestroyCache {
    soidType: number;
    soidId: string;
}
declare const CMsgGCToGCMasterDestroyCache: MessageFns$c<CMsgGCToGCMasterDestroyCache>;
type Builtin$c = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$c<T> = T extends Builtin$c ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$c<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$c<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$c<T[K]>;
} : Partial<T>;
interface MessageFns$c<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$c<T>): T;
    fromPartial(object: DeepPartial$c<T>): T;
}

declare enum ESpecialPingValue {
    k_ESpecialPingValue_NoData = 16382,
    k_ESpecialPingValue_Failed = 16383
}
declare function eSpecialPingValueFromJSON(object: any): ESpecialPingValue;
declare function eSpecialPingValueToJSON(object: ESpecialPingValue): string;
declare enum EDOTAGCSessionNeed {
    k_EDOTAGCSessionNeed_Unknown = 0,
    k_EDOTAGCSessionNeed_UserNoSessionNeeded = 100,
    k_EDOTAGCSessionNeed_UserInOnlineGame = 101,
    k_EDOTAGCSessionNeed_UserInLocalGame = 102,
    k_EDOTAGCSessionNeed_UserInUIWasConnected = 103,
    k_EDOTAGCSessionNeed_UserInUINeverConnected = 104,
    k_EDOTAGCSessionNeed_UserTutorials = 105,
    k_EDOTAGCSessionNeed_UserInUIWasConnectedIdle = 106,
    k_EDOTAGCSessionNeed_UserInUINeverConnectedIdle = 107,
    k_EDOTAGCSessionNeed_GameServerOnline = 200,
    k_EDOTAGCSessionNeed_GameServerLocal = 201,
    k_EDOTAGCSessionNeed_GameServerIdle = 202,
    k_EDOTAGCSessionNeed_GameServerRelay = 203,
    k_EDOTAGCSessionNeed_GameServerLocalUpload = 204
}
declare function eDOTAGCSessionNeedFromJSON(object: any): EDOTAGCSessionNeed;
declare function eDOTAGCSessionNeedToJSON(object: EDOTAGCSessionNeed): string;
declare enum EDOTAMatchPlayerTimeCustomStat {
    k_EDOTA_MatchPlayerTimeCustomStat_HPRegenUnderT1Towers = 1,
    k_EDOTA_MatchPlayerTimeCustomStat_MagicDamageReducedWithNewFormula_Absolute = 2,
    k_EDOTA_MatchPlayerTimeCustomStat_MagicDamageReducedWithNewFormula_PercentOfTotalHP = 3
}
declare function eDOTAMatchPlayerTimeCustomStatFromJSON(object: any): EDOTAMatchPlayerTimeCustomStat;
declare function eDOTAMatchPlayerTimeCustomStatToJSON(object: EDOTAMatchPlayerTimeCustomStat): string;
declare enum DOTATournamentEvents {
    TE_FIRST_BLOOD = 0,
    TE_GAME_END = 1,
    TE_MULTI_KILL = 2,
    TE_HERO_DENY = 3,
    TE_AEGIS_DENY = 4,
    TE_AEGIS_STOLEN = 5,
    TE_GODLIKE = 6,
    TE_COURIER_KILL = 7,
    TE_ECHOSLAM = 8,
    TE_RAPIER = 9,
    TE_EARLY_ROSHAN = 10,
    TE_BLACK_HOLE = 11
}
declare function dOTATournamentEventsFromJSON(object: any): DOTATournamentEvents;
declare function dOTATournamentEventsToJSON(object: DOTATournamentEvents): string;
declare enum EBroadcastTimelineEvent {
    EBroadcastTimelineEvent_MatchStarted = 1,
    EBroadcastTimelineEvent_GameStateChanged = 2,
    EBroadcastTimelineEvent_TowerDeath = 3,
    EBroadcastTimelineEvent_BarracksDeath = 4,
    EBroadcastTimelineEvent_AncientDeath = 5,
    EBroadcastTimelineEvent_RoshanDeath = 6,
    EBroadcastTimelineEvent_HeroDeath = 7,
    EBroadcastTimelineEvent_TeamFight = 8,
    EBroadcastTimelineEvent_FirstBlood = 9
}
declare function eBroadcastTimelineEventFromJSON(object: any): EBroadcastTimelineEvent;
declare function eBroadcastTimelineEventToJSON(object: EBroadcastTimelineEvent): string;
declare enum ECustomGameWhitelistState {
    CUSTOM_GAME_WHITELIST_STATE_UNKNOWN = 0,
    CUSTOM_GAME_WHITELIST_STATE_APPROVED = 1,
    CUSTOM_GAME_WHITELIST_STATE_REJECTED = 2
}
declare function eCustomGameWhitelistStateFromJSON(object: any): ECustomGameWhitelistState;
declare function eCustomGameWhitelistStateToJSON(object: ECustomGameWhitelistState): string;
declare enum EDOTATriviaQuestionCategory {
    k_EDOTATriviaQuestionCategory_AbilityIcon = 0,
    k_EDOTATriviaQuestionCategory_AbilityCooldown = 1,
    k_EDOTATriviaQuestionCategory_HeroAttributes = 2,
    k_EDOTATriviaQuestionCategory_HeroMovementSpeed = 3,
    k_EDOTATriviaQuestionCategory_TalentTree = 4,
    k_EDOTATriviaQuestionCategory_HeroStats = 5,
    k_EDOTATriviaQuestionCategory_ItemPrice = 6,
    k_EDOTATriviaQuestionCategory_AbilitySound = 7,
    k_EDOTATriviaQuestionCategory_InvokerSpells = 8,
    k_EDOTATriviaQuestionCategory_AbilityManaCost = 9,
    k_EDOTATriviaQuestionCategory_HeroAttackSound = 10,
    k_EDOTATriviaQuestionCategory_AbilityName = 11,
    k_EDOTATriviaQuestionCategory_ItemComponents = 12,
    k_EDOTATriviaQuestionCategory_ItemLore = 13,
    k_EDOTATriviaQuestionCategory_ItemPassives = 14,
    k_EDOTATriviaQuestionCategory_STATIC_QUESTIONS_END = 15,
    k_EDOTATriviaQuestionCategory_DYNAMIC_QUESTIONS_START = 99,
    k_EDOTATriviaQuestionCategory_Dynamic_ItemBuild = 100
}
declare function eDOTATriviaQuestionCategoryFromJSON(object: any): EDOTATriviaQuestionCategory;
declare function eDOTATriviaQuestionCategoryToJSON(object: EDOTATriviaQuestionCategory): string;
declare enum EOverwatchConviction {
    k_EOverwatchConviction_None = 0,
    k_EOverwatchConviction_NotGuilty = 1,
    k_EOverwatchConviction_GuiltUnclear = 2,
    k_EOverwatchConviction_Guilty = 3
}
declare function eOverwatchConvictionFromJSON(object: any): EOverwatchConviction;
declare function eOverwatchConvictionToJSON(object: EOverwatchConviction): string;
declare enum EHeroRelicRarity {
    HERO_RELIC_RARITY_INVALID = -1,
    HERO_RELIC_RARITY_COMMON = 0,
    HERO_RELIC_RARITY_RARE = 1
}
declare function eHeroRelicRarityFromJSON(object: any): EHeroRelicRarity;
declare function eHeroRelicRarityToJSON(object: EHeroRelicRarity): string;
declare enum EStickerbookAuditAction {
    STICKERBOOK_AUDIT_CREATE_PAGE = 0,
    STICKERBOOK_AUDIT_DELETE_PAGE = 1,
    STICKERBOOK_AUDIT_STICK_STICKERS = 2,
    STICKERBOOK_AUDIT_REPLACE_STICKERS = 3,
    STICKERBOOK_AUDIT_HERO_STICKER = 4
}
declare function eStickerbookAuditActionFromJSON(object: any): EStickerbookAuditAction;
declare function eStickerbookAuditActionToJSON(object: EStickerbookAuditAction): string;
declare enum EStickerbookPageType {
    STICKER_PAGE_GENERIC = 0,
    STICKER_PAGE_TEAM = 1,
    STICKER_PAGE_TALENT = 2
}
declare function eStickerbookPageTypeFromJSON(object: any): EStickerbookPageType;
declare function eStickerbookPageTypeToJSON(object: EStickerbookPageType): string;
declare enum ENewBloomGiftingResponse {
    kENewBloomGifting_Success = 0,
    kENewBloomGifting_UnknownFailure = 1,
    kENewBloomGifting_MalformedRequest = 2,
    kENewBloomGifting_FeatureDisabled = 3,
    kENewBloomGifting_ItemNotFound = 4,
    kENewBloomGifting_PlayerNotAllowedToGiveGifts = 5,
    kENewBloomGifting_TargetNotAllowedToReceiveGifts = 6,
    kENewBloomGifting_ServerNotAuthorized = 100,
    kENewBloomGifting_PlayerNotInLobby = 101,
    kENewBloomGifting_TargetNotInLobby = 102,
    kENewBloomGifting_LobbyNotEligible = 103,
    kENewBloomGifting_TargetNotFriend = 200,
    kENewBloomGifting_TargetFriendDurationTooShort = 201
}
declare function eNewBloomGiftingResponseFromJSON(object: any): ENewBloomGiftingResponse;
declare function eNewBloomGiftingResponseToJSON(object: ENewBloomGiftingResponse): string;
declare enum CMsgDOTAProfileCard_EStatID {
    k_eStat_Wins = 3,
    k_eStat_Commends = 4,
    k_eStat_GamesPlayed = 5,
    k_eStat_FirstMatchDate = 6,
    k_eStat_PreviousSeasonRank = 7,
    k_eStat_GamesMVP = 8
}
declare function cMsgDOTAProfileCard_EStatIDFromJSON(object: any): CMsgDOTAProfileCard_EStatID;
declare function cMsgDOTAProfileCard_EStatIDToJSON(object: CMsgDOTAProfileCard_EStatID): string;
declare enum CMsgGCRerollPlayerChallengeResponse_EResult {
    eResult_Success = 0,
    eResult_Dropped = 1,
    eResult_NotFound = 2,
    eResult_CantReroll = 3,
    eResult_ServerError = 4
}
declare function cMsgGCRerollPlayerChallengeResponse_EResultFromJSON(object: any): CMsgGCRerollPlayerChallengeResponse_EResult;
declare function cMsgGCRerollPlayerChallengeResponse_EResultToJSON(object: CMsgGCRerollPlayerChallengeResponse_EResult): string;
declare enum CMsgDOTARealtimeGameStats_GraphData_eStat {
    CreepGoldEarned = 0,
    KillGoldEarned = 1,
    DeathAndBuybackGoldLost = 2,
    XPEarned = 3
}
declare function cMsgDOTARealtimeGameStats_GraphData_eStatFromJSON(object: any): CMsgDOTARealtimeGameStats_GraphData_eStat;
declare function cMsgDOTARealtimeGameStats_GraphData_eStatToJSON(object: CMsgDOTARealtimeGameStats_GraphData_eStat): string;
declare enum CMsgDOTARealtimeGameStats_GraphData_eLocation {
    BotLane = 0,
    MidLane = 1,
    TopLane = 2,
    Jungle = 3,
    Ancients = 4,
    Other = 5
}
declare function cMsgDOTARealtimeGameStats_GraphData_eLocationFromJSON(object: any): CMsgDOTARealtimeGameStats_GraphData_eLocation;
declare function cMsgDOTARealtimeGameStats_GraphData_eLocationToJSON(object: CMsgDOTARealtimeGameStats_GraphData_eLocation): string;
declare enum CMsgInGamePrediction_ERawValueTypeT {
    Number = 0,
    Time = 1
}
declare function cMsgInGamePrediction_ERawValueTypeTFromJSON(object: any): CMsgInGamePrediction_ERawValueTypeT;
declare function cMsgInGamePrediction_ERawValueTypeTToJSON(object: CMsgInGamePrediction_ERawValueTypeT): string;
declare enum CMsgInGamePrediction_EPredictionType {
    Generic = 0,
    Hero = 1,
    Team = 2,
    Player = 3,
    Special = 4,
    YesNo = 5,
    QualifiersTeam = 6
}
declare function cMsgInGamePrediction_EPredictionTypeFromJSON(object: any): CMsgInGamePrediction_EPredictionType;
declare function cMsgInGamePrediction_EPredictionTypeToJSON(object: CMsgInGamePrediction_EPredictionType): string;
declare enum CMsgInGamePrediction_EResolutionTypeT {
    InvalidQuery = 0,
    FirstToPassQuery = 1,
    LastToPassQuery = 2,
    LastRemainingQuery = 3,
    MaxToPassQuery = 4,
    MinToPassQuery = 5,
    SumQuery = 6,
    MaxTeamSumToPassQuery = 7,
    MinTeamSumToPassQuery = 8
}
declare function cMsgInGamePrediction_EResolutionTypeTFromJSON(object: any): CMsgInGamePrediction_EResolutionTypeT;
declare function cMsgInGamePrediction_EResolutionTypeTToJSON(object: CMsgInGamePrediction_EResolutionTypeT): string;
declare enum CMsgInGamePrediction_ERandomSelectionGroupT {
    EarlyGame = 0,
    MidGame = 1,
    LateGame = 2,
    Count = 3
}
declare function cMsgInGamePrediction_ERandomSelectionGroupTFromJSON(object: any): CMsgInGamePrediction_ERandomSelectionGroupT;
declare function cMsgInGamePrediction_ERandomSelectionGroupTToJSON(object: CMsgInGamePrediction_ERandomSelectionGroupT): string;
declare enum CMsgDOTASeasonPredictions_Prediction_EPredictionType {
    Generic = 0,
    Hero = 1,
    Team = 2,
    Player = 3,
    Special = 4,
    YesNo = 5,
    QualifiersTeam = 6,
    LastChanceTeam = 7
}
declare function cMsgDOTASeasonPredictions_Prediction_EPredictionTypeFromJSON(object: any): CMsgDOTASeasonPredictions_Prediction_EPredictionType;
declare function cMsgDOTASeasonPredictions_Prediction_EPredictionTypeToJSON(object: CMsgDOTASeasonPredictions_Prediction_EPredictionType): string;
declare enum CMsgDOTASeasonPredictions_Prediction_EAnswerType {
    SingleInt = 0,
    SingleFloat = 1,
    MultipleInt = 2,
    MultipleFloat = 3,
    AnswerTeam = 4,
    SingleTime = 5,
    MultipleTime = 6,
    NoAnswer = 7
}
declare function cMsgDOTASeasonPredictions_Prediction_EAnswerTypeFromJSON(object: any): CMsgDOTASeasonPredictions_Prediction_EAnswerType;
declare function cMsgDOTASeasonPredictions_Prediction_EAnswerTypeToJSON(object: CMsgDOTASeasonPredictions_Prediction_EAnswerType): string;
declare enum CMsgDOTAMatch_ReplayState {
    REPLAY_AVAILABLE = 0,
    REPLAY_NOT_RECORDED = 1,
    REPLAY_EXPIRED = 2
}
declare function cMsgDOTAMatch_ReplayStateFromJSON(object: any): CMsgDOTAMatch_ReplayState;
declare function cMsgDOTAMatch_ReplayStateToJSON(object: CMsgDOTAMatch_ReplayState): string;
declare enum CMsgDOTAMatch_Player_HeroDamageType {
    HERO_DAMAGE_PHYSICAL = 0,
    HERO_DAMAGE_MAGICAL = 1,
    HERO_DAMAGE_PURE = 2
}
declare function cMsgDOTAMatch_Player_HeroDamageTypeFromJSON(object: any): CMsgDOTAMatch_Player_HeroDamageType;
declare function cMsgDOTAMatch_Player_HeroDamageTypeToJSON(object: CMsgDOTAMatch_Player_HeroDamageType): string;
declare enum CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3
}
declare function cMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponseFromJSON(object: any): CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse;
declare function cMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponseToJSON(object: CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse): string;
declare enum CMsgDOTAClaimEventActionResponse_ResultCode {
    Success = 0,
    InvalidEvent = 1,
    EventNotActive = 2,
    InvalidAction = 3,
    ServerError = 4,
    InsufficientPoints = 5,
    InsufficentLevel = 6,
    AlreadyClaimed = 7,
    SDOLockFailure = 8,
    SDOLoadFailure = 9,
    EventNotOwned = 10,
    Timeout = 11,
    RequiresPlusSubscription = 12,
    InvalidItem = 13,
    AsyncRewards = 14
}
declare function cMsgDOTAClaimEventActionResponse_ResultCodeFromJSON(object: any): CMsgDOTAClaimEventActionResponse_ResultCode;
declare function cMsgDOTAClaimEventActionResponse_ResultCodeToJSON(object: CMsgDOTAClaimEventActionResponse_ResultCode): string;
declare enum CMsgClientToGCDotaLabsFeedbackResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eNotAllowed = 5,
    k_eInvalidItem = 6
}
declare function cMsgClientToGCDotaLabsFeedbackResponse_EResponseFromJSON(object: any): CMsgClientToGCDotaLabsFeedbackResponse_EResponse;
declare function cMsgClientToGCDotaLabsFeedbackResponse_EResponseToJSON(object: CMsgClientToGCDotaLabsFeedbackResponse_EResponse): string;
declare enum CDotaMsgPredictionResult_Prediction_EResult {
    k_eResult_ItemGranted = 1,
    k_eResult_Destroyed = 2
}
declare function cDotaMsgPredictionResult_Prediction_EResultFromJSON(object: any): CDotaMsgPredictionResult_Prediction_EResult;
declare function cDotaMsgPredictionResult_Prediction_EResultToJSON(object: CDotaMsgPredictionResult_Prediction_EResult): string;
interface CSODOTAGameAccountClient {
    accountId: number;
    wins: number;
    losses: number;
    xp: number;
    level: number;
    initialSkill: number;
    leaverCount: number;
    secondaryLeaverCount: number;
    lowPriorityUntilDate: number;
    preventTextChatUntilDate: number;
    preventVoiceUntilDate: number;
    preventPublicTextChatUntilDate: number;
    preventNewPlayerChatUntilDate: number;
    lastAbandonedGameDate: number;
    lastSecondaryAbandonedGameDate: number;
    leaverPenaltyCount: number;
    completedGameStreak: number;
    accountDisabledUntilDate: number;
    accountDisabledCount: number;
    matchDisabledUntilDate: number;
    matchDisabledCount: number;
    shutdownlawterminatetimestamp: number;
    lowPriorityGamesRemaining: number;
    recruitmentLevel: number;
    hasNewNotifications: boolean;
    isLeagueAdmin: boolean;
    casualGamesPlayed: number;
    soloCompetitiveGamesPlayed: number;
    partyCompetitiveGamesPlayed: number;
    casual1v1GamesPlayed: number;
    currAllHeroChallengeId: number;
    playTimePoints: number;
    accountFlags: number;
    playTimeLevel: number;
    playerBehaviorSeqNumLastReport: number;
    playerBehaviorScoreLastReport: number;
    playerBehaviorReportOldData: boolean;
    tourneySkillLevel: number;
    tourneyRecentParticipationDate: number;
    anchoredPhoneNumberId: string;
    rankedMatchmakingBanUntilDate: number;
    recentGameTime1: number;
    recentGameTime2: number;
    recentGameTime3: number;
    favoriteTeamPacked: string;
    recentReportTime: number;
    customGameDisabledUntilDate: number;
    recentWinTime1: number;
    recentWinTime2: number;
    recentWinTime3: number;
    coachRating: number;
    queuePoints: number;
    roleHandicaps: CSODOTAGameAccountClient_RoleHandicap[];
    eventModeRecentTime: number;
    mmrRecalibrationTime: number;
    bannedHeroIds: number[];
}
declare const CSODOTAGameAccountClient: MessageFns$b<CSODOTAGameAccountClient>;
interface CSODOTAGameAccountClient_RoleHandicap {
    role: number;
    handicap: number;
}
declare const CSODOTAGameAccountClient_RoleHandicap: MessageFns$b<CSODOTAGameAccountClient_RoleHandicap>;
interface CSODOTAGameAccountPlus {
    accountId: number;
    originalStartDate: number;
    plusFlags: number;
    plusStatus: number;
    prepaidTimeStart: number;
    prepaidTimeBalance: number;
    nextPaymentDate: number;
    steamAgreementId: string;
}
declare const CSODOTAGameAccountPlus: MessageFns$b<CSODOTAGameAccountPlus>;
interface CSODOTAChatWheel {
    messageId: number;
}
declare const CSODOTAChatWheel: MessageFns$b<CSODOTAChatWheel>;
interface CMsgLobbyFeaturedGamemodeProgress {
    accounts: CMsgLobbyFeaturedGamemodeProgress_AccountProgress[];
}
declare const CMsgLobbyFeaturedGamemodeProgress: MessageFns$b<CMsgLobbyFeaturedGamemodeProgress>;
interface CMsgLobbyFeaturedGamemodeProgress_AccountProgress {
    accountId: number;
    currentValue: number;
    maxValue: number;
}
declare const CMsgLobbyFeaturedGamemodeProgress_AccountProgress: MessageFns$b<CMsgLobbyFeaturedGamemodeProgress_AccountProgress>;
interface CMsgBattleCupVictory {
    accountId: number;
    winDate: number;
    validUntil: number;
    skillLevel: number;
    tournamentId: number;
    divisionId: number;
    teamId: number;
    streak: number;
    trophyId: number;
}
declare const CMsgBattleCupVictory: MessageFns$b<CMsgBattleCupVictory>;
interface CMsgLobbyBattleCupVictoryList {
    winners: CMsgBattleCupVictory[];
}
declare const CMsgLobbyBattleCupVictoryList: MessageFns$b<CMsgLobbyBattleCupVictoryList>;
interface CMsgDOTABroadcastNotification {
    message: string;
}
declare const CMsgDOTABroadcastNotification: MessageFns$b<CMsgDOTABroadcastNotification>;
interface CProtoItemHeroStatue {
    heroId: number;
    statusEffectIndex: number;
    sequenceName: string;
    cycle: number;
    wearable: number[];
    inscription: string;
    style: number[];
    tournamentDrop: boolean;
}
declare const CProtoItemHeroStatue: MessageFns$b<CProtoItemHeroStatue>;
interface CMatchPlayerAbilityUpgrade {
    ability: number;
    time: number;
}
declare const CMatchPlayerAbilityUpgrade: MessageFns$b<CMatchPlayerAbilityUpgrade>;
interface CMatchPlayerTimedCustomStat {
    stat: EDOTAMatchPlayerTimeCustomStat;
    value: number;
}
declare const CMatchPlayerTimedCustomStat: MessageFns$b<CMatchPlayerTimedCustomStat>;
interface CMatchPlayerTimedStats {
    time: number;
    kills: number;
    deaths: number;
    assists: number;
    netWorth: number;
    xp: number;
    lastHits: number;
    denies: number;
    bountyRuneGold: number;
    rangeCreepUpgradeGold: number;
    observerWardsDewarded: number;
    reliableGoldEarned: number;
    goldLossPrevented: number;
    heroKillGold: number;
    creepKillGold: number;
    buildingGold: number;
    otherGold: number;
    comebackGold: number;
    experimentalGold: number;
    experimental2Gold: number;
    creepDenyGold: number;
    tpScrollsPurchased1: number;
    tpScrollsPurchased2: number;
    tpScrollsPurchased3: number;
    tpScrollsPurchased4: number;
    tpScrollsPurchased5: number;
    neutralGold: number;
    courierGold: number;
    roshanGold: number;
    incomeGold: number;
    itemValue: number;
    supportGoldSpent: number;
    campsStacked: number;
    wardsPlaced: number;
    tripleKills: number;
    rampages: number;
    customStats: CMatchPlayerTimedCustomStat[];
}
declare const CMatchPlayerTimedStats: MessageFns$b<CMatchPlayerTimedStats>;
interface CMatchTeamTimedStats {
    time: number;
    enemyTowersKilled: number;
    enemyBarracksKilled: number;
    enemyTowersStatus: number;
    enemyBarracksStatus: number;
}
declare const CMatchTeamTimedStats: MessageFns$b<CMatchTeamTimedStats>;
interface CMatchAdditionalUnitInventory {
    unitName: string;
    items: number[];
}
declare const CMatchAdditionalUnitInventory: MessageFns$b<CMatchAdditionalUnitInventory>;
interface CMatchPlayerPermanentBuff {
    permanentBuff: number;
    stackCount: number;
    grantTime: number;
}
declare const CMatchPlayerPermanentBuff: MessageFns$b<CMatchPlayerPermanentBuff>;
interface CMatchHeroSelectEvent {
    isPick: boolean;
    team: number;
    heroId: number;
}
declare const CMatchHeroSelectEvent: MessageFns$b<CMatchHeroSelectEvent>;
interface CMatchClip {
    matchId: string;
    playerAccountId: number;
    gameTimeSeconds: number;
    durationSeconds: number;
    playerId: number;
    heroId: number;
    abilityId: number;
    cameraMode: number;
    comment: string;
}
declare const CMatchClip: MessageFns$b<CMatchClip>;
interface CPartySearchClientParty {
    partyId: string;
    beaconType: number;
    partyMembers: number[];
}
declare const CPartySearchClientParty: MessageFns$b<CPartySearchClientParty>;
interface CMsgDOTAHasItemQuery {
    accountId: number;
    itemId: string;
}
declare const CMsgDOTAHasItemQuery: MessageFns$b<CMsgDOTAHasItemQuery>;
interface CMsgDOTAHasItemResponse {
    hasItem: boolean;
}
declare const CMsgDOTAHasItemResponse: MessageFns$b<CMsgDOTAHasItemResponse>;
interface CMsgGCGetPlayerCardItemInfo {
    accountId: number;
    playerCardItemIds: string[];
    allForEvent: number;
}
declare const CMsgGCGetPlayerCardItemInfo: MessageFns$b<CMsgGCGetPlayerCardItemInfo>;
interface CMsgGCGetPlayerCardItemInfoResponse {
    playerCardInfos: CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo[];
}
declare const CMsgGCGetPlayerCardItemInfoResponse: MessageFns$b<CMsgGCGetPlayerCardItemInfoResponse>;
interface CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo {
    playerCardItemId: string;
    accountId: number;
    packedBonuses: string;
}
declare const CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo: MessageFns$b<CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo>;
interface CSODOTAMapLocationState {
    accountId: number;
    locationId: number;
    completed: boolean;
}
declare const CSODOTAMapLocationState: MessageFns$b<CSODOTAMapLocationState>;
interface CMsgLeagueAdminList {
    accountIds: number[];
}
declare const CMsgLeagueAdminList: MessageFns$b<CMsgLeagueAdminList>;
interface CMsgDOTAProfileCard {
    accountId: number;
    slots: CMsgDOTAProfileCard_Slot[];
    badgePoints: number;
    eventId: number;
    recentBattleCupVictory: CMsgBattleCupVictory | undefined;
    rankTier: number;
    leaderboardRank: number;
    isPlusSubscriber: boolean;
    plusOriginalStartDate: number;
    rankTierScore: number;
    leaderboardRankCore: number;
    title: number;
    favoriteTeamPacked: string;
    lifetimeGames: number;
    eventLevel: number;
}
declare const CMsgDOTAProfileCard: MessageFns$b<CMsgDOTAProfileCard>;
interface CMsgDOTAProfileCard_Slot {
    slotId: number;
    trophy: CMsgDOTAProfileCard_Slot_Trophy | undefined;
    stat: CMsgDOTAProfileCard_Slot_Stat | undefined;
    item: CMsgDOTAProfileCard_Slot_Item | undefined;
    hero: CMsgDOTAProfileCard_Slot_Hero | undefined;
    emoticon: CMsgDOTAProfileCard_Slot_Emoticon | undefined;
    team: CMsgDOTAProfileCard_Slot_Team | undefined;
}
declare const CMsgDOTAProfileCard_Slot: MessageFns$b<CMsgDOTAProfileCard_Slot>;
interface CMsgDOTAProfileCard_Slot_Trophy {
    trophyId: number;
    trophyScore: number;
}
declare const CMsgDOTAProfileCard_Slot_Trophy: MessageFns$b<CMsgDOTAProfileCard_Slot_Trophy>;
interface CMsgDOTAProfileCard_Slot_Stat {
    statId: CMsgDOTAProfileCard_EStatID;
    statScore: number;
}
declare const CMsgDOTAProfileCard_Slot_Stat: MessageFns$b<CMsgDOTAProfileCard_Slot_Stat>;
interface CMsgDOTAProfileCard_Slot_Item {
    serializedItem: Buffer;
    itemId: string;
}
declare const CMsgDOTAProfileCard_Slot_Item: MessageFns$b<CMsgDOTAProfileCard_Slot_Item>;
interface CMsgDOTAProfileCard_Slot_Hero {
    heroId: number;
    heroWins: number;
    heroLosses: number;
}
declare const CMsgDOTAProfileCard_Slot_Hero: MessageFns$b<CMsgDOTAProfileCard_Slot_Hero>;
interface CMsgDOTAProfileCard_Slot_Emoticon {
    emoticonId: number;
}
declare const CMsgDOTAProfileCard_Slot_Emoticon: MessageFns$b<CMsgDOTAProfileCard_Slot_Emoticon>;
interface CMsgDOTAProfileCard_Slot_Team {
    teamId: number;
}
declare const CMsgDOTAProfileCard_Slot_Team: MessageFns$b<CMsgDOTAProfileCard_Slot_Team>;
interface CSODOTAPlayerChallenge {
    accountId: number;
    eventId: number;
    slotId: number;
    intParam0: number;
    intParam1: number;
    createdTime: number;
    completed: number;
    sequenceId: number;
    challengeTier: number;
    flags: number;
    attempts: number;
    completeLimit: number;
    questRank: number;
    maxQuestRank: number;
    instanceId: number;
    heroId: number;
    templateId: number;
}
declare const CSODOTAPlayerChallenge: MessageFns$b<CSODOTAPlayerChallenge>;
interface CMsgClientToGCRerollPlayerChallenge {
    eventId: EEvent;
    sequenceId: number;
    heroId: number;
}
declare const CMsgClientToGCRerollPlayerChallenge: MessageFns$b<CMsgClientToGCRerollPlayerChallenge>;
interface CMsgGCRerollPlayerChallengeResponse {
    result: CMsgGCRerollPlayerChallengeResponse_EResult;
}
declare const CMsgGCRerollPlayerChallengeResponse: MessageFns$b<CMsgGCRerollPlayerChallengeResponse>;
interface CMsgGCTopCustomGamesList {
    topCustomGames: string[];
    gameOfTheDay: string;
}
declare const CMsgGCTopCustomGamesList: MessageFns$b<CMsgGCTopCustomGamesList>;
interface CMsgDOTARealtimeGameStats {
    match: CMsgDOTARealtimeGameStats_MatchDetails | undefined;
    teams: CMsgDOTARealtimeGameStats_TeamDetails[];
    buildings: CMsgDOTARealtimeGameStats_BuildingDetails[];
    graphData: CMsgDOTARealtimeGameStats_GraphData | undefined;
    deltaFrame: boolean;
}
declare const CMsgDOTARealtimeGameStats: MessageFns$b<CMsgDOTARealtimeGameStats>;
interface CMsgDOTARealtimeGameStats_TeamDetails {
    teamNumber: number;
    teamId: number;
    teamName: string;
    teamLogo: string;
    teamTag: string;
    score: number;
    netWorth: number;
    players: CMsgDOTARealtimeGameStats_PlayerDetails[];
    onlyTeam: boolean;
    cheers: number;
    teamLogoUrl: string;
}
declare const CMsgDOTARealtimeGameStats_TeamDetails: MessageFns$b<CMsgDOTARealtimeGameStats_TeamDetails>;
interface CMsgDOTARealtimeGameStats_ItemDetails {
    itemAbilityId: number;
    name: string;
    time: number;
    sold: boolean;
    stackcount: number;
}
declare const CMsgDOTARealtimeGameStats_ItemDetails: MessageFns$b<CMsgDOTARealtimeGameStats_ItemDetails>;
interface CMsgDOTARealtimeGameStats_AbilityDetails {
    id: number;
    name: string;
    level: number;
    cooldown: number;
    cooldownMax: number;
}
declare const CMsgDOTARealtimeGameStats_AbilityDetails: MessageFns$b<CMsgDOTARealtimeGameStats_AbilityDetails>;
interface CMsgDOTARealtimeGameStats_HeroToHeroStats {
    victimid: number;
    kills: number;
    assists: number;
}
declare const CMsgDOTARealtimeGameStats_HeroToHeroStats: MessageFns$b<CMsgDOTARealtimeGameStats_HeroToHeroStats>;
interface CMsgDOTARealtimeGameStats_AbilityList {
    id: number[];
}
declare const CMsgDOTARealtimeGameStats_AbilityList: MessageFns$b<CMsgDOTARealtimeGameStats_AbilityList>;
interface CMsgDOTARealtimeGameStats_PlayerDetails {
    accountid: number;
    playerid: number;
    name: string;
    team: number;
    heroid: number;
    healthpoints: number;
    maxhealthpoints: number;
    healthregenrate: number;
    manapoints: number;
    maxmanapoints: number;
    manaregenrate: number;
    baseStrength: number;
    baseAgility: number;
    baseIntelligence: number;
    baseArmor: number;
    baseMovespeed: number;
    baseDamage: number;
    strength: number;
    agility: number;
    intelligence: number;
    armor: number;
    movespeed: number;
    damage: number;
    heroDamage: number;
    towerDamage: number;
    abilities: CMsgDOTARealtimeGameStats_AbilityDetails[];
    level: number;
    killCount: number;
    deathCount: number;
    assistsCount: number;
    deniesCount: number;
    lhCount: number;
    heroHealing: number;
    goldPerMin: number;
    xpPerMin: number;
    netGold: number;
    gold: number;
    x: number;
    y: number;
    respawnTime: number;
    ultimateCooldown: number;
    hasBuyback: boolean;
    items: CMsgDOTARealtimeGameStats_ItemDetails[];
    stashitems: CMsgDOTARealtimeGameStats_ItemDetails[];
    itemshoppinglist: CMsgDOTARealtimeGameStats_ItemDetails[];
    levelpoints: CMsgDOTARealtimeGameStats_AbilityList[];
    heroToHeroStats: CMsgDOTARealtimeGameStats_HeroToHeroStats[];
    hasUltimate: boolean;
    hasUltimateMana: boolean;
    teamSlot: number;
}
declare const CMsgDOTARealtimeGameStats_PlayerDetails: MessageFns$b<CMsgDOTARealtimeGameStats_PlayerDetails>;
interface CMsgDOTARealtimeGameStats_BuildingDetails {
    team: number;
    heading: number;
    lane: number;
    tier: number;
    type: number;
    x: number;
    y: number;
    destroyed: boolean;
}
declare const CMsgDOTARealtimeGameStats_BuildingDetails: MessageFns$b<CMsgDOTARealtimeGameStats_BuildingDetails>;
interface CMsgDOTARealtimeGameStats_KillDetails {
    playerId: number;
    deathTime: number;
    killerPlayerId: number;
}
declare const CMsgDOTARealtimeGameStats_KillDetails: MessageFns$b<CMsgDOTARealtimeGameStats_KillDetails>;
interface CMsgDOTARealtimeGameStats_BroadcasterDetails {
    playerId: number;
}
declare const CMsgDOTARealtimeGameStats_BroadcasterDetails: MessageFns$b<CMsgDOTARealtimeGameStats_BroadcasterDetails>;
interface CMsgDOTARealtimeGameStats_PickBanDetails {
    hero: number;
    team: number;
}
declare const CMsgDOTARealtimeGameStats_PickBanDetails: MessageFns$b<CMsgDOTARealtimeGameStats_PickBanDetails>;
interface CMsgDOTARealtimeGameStats_MatchDetails {
    serverSteamId: string;
    matchId: string;
    timestamp: number;
    timeOfDay: number;
    isNightstalkerNight: boolean;
    gameTime: number;
    gameState: number;
    teamidRadiant: number;
    teamidDire: number;
    picks: CMsgDOTARealtimeGameStats_PickBanDetails[];
    bans: CMsgDOTARealtimeGameStats_PickBanDetails[];
    kills: CMsgDOTARealtimeGameStats_KillDetails[];
    broadcasters: CMsgDOTARealtimeGameStats_BroadcasterDetails[];
    gameMode: number;
    leagueId: number;
    leagueNodeId: number;
    singleTeam: boolean;
    cheersPeak: number;
    lobbyType: number;
    startTimestamp: number;
    isPlayerDraft: boolean;
}
declare const CMsgDOTARealtimeGameStats_MatchDetails: MessageFns$b<CMsgDOTARealtimeGameStats_MatchDetails>;
interface CMsgDOTARealtimeGameStats_GraphData {
    graphGold: number[];
    graphXp: number[];
    graphKill: number[];
    graphTower: number[];
    graphRax: number[];
    teamLocStats: CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats[];
}
declare const CMsgDOTARealtimeGameStats_GraphData: MessageFns$b<CMsgDOTARealtimeGameStats_GraphData>;
interface CMsgDOTARealtimeGameStats_GraphData_LocationStats {
    stats: number[];
}
declare const CMsgDOTARealtimeGameStats_GraphData_LocationStats: MessageFns$b<CMsgDOTARealtimeGameStats_GraphData_LocationStats>;
interface CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats {
    locStats: CMsgDOTARealtimeGameStats_GraphData_LocationStats[];
}
declare const CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats: MessageFns$b<CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats>;
interface CMsgDOTARealtimeGameStatsTerse {
    match: CMsgDOTARealtimeGameStatsTerse_MatchDetails | undefined;
    teams: CMsgDOTARealtimeGameStatsTerse_TeamDetails[];
    buildings: CMsgDOTARealtimeGameStatsTerse_BuildingDetails[];
    graphData: CMsgDOTARealtimeGameStatsTerse_GraphData | undefined;
    deltaFrame: boolean;
}
declare const CMsgDOTARealtimeGameStatsTerse: MessageFns$b<CMsgDOTARealtimeGameStatsTerse>;
interface CMsgDOTARealtimeGameStatsTerse_TeamDetails {
    teamNumber: number;
    teamId: number;
    teamName: string;
    teamTag: string;
    teamLogo: string;
    score: number;
    netWorth: number;
    teamLogoUrl: string;
    players: CMsgDOTARealtimeGameStatsTerse_PlayerDetails[];
}
declare const CMsgDOTARealtimeGameStatsTerse_TeamDetails: MessageFns$b<CMsgDOTARealtimeGameStatsTerse_TeamDetails>;
interface CMsgDOTARealtimeGameStatsTerse_PlayerDetails {
    accountid: number;
    playerid: number;
    name: string;
    team: number;
    heroid: number;
    level: number;
    killCount: number;
    deathCount: number;
    assistsCount: number;
    deniesCount: number;
    lhCount: number;
    gold: number;
    x: number;
    y: number;
    netWorth: number;
    abilities: number[];
    items: number[];
    teamSlot: number;
}
declare const CMsgDOTARealtimeGameStatsTerse_PlayerDetails: MessageFns$b<CMsgDOTARealtimeGameStatsTerse_PlayerDetails>;
interface CMsgDOTARealtimeGameStatsTerse_BuildingDetails {
    team: number;
    heading: number;
    type: number;
    lane: number;
    tier: number;
    x: number;
    y: number;
    destroyed: boolean;
}
declare const CMsgDOTARealtimeGameStatsTerse_BuildingDetails: MessageFns$b<CMsgDOTARealtimeGameStatsTerse_BuildingDetails>;
interface CMsgDOTARealtimeGameStatsTerse_PickBanDetails {
    hero: number;
    team: number;
}
declare const CMsgDOTARealtimeGameStatsTerse_PickBanDetails: MessageFns$b<CMsgDOTARealtimeGameStatsTerse_PickBanDetails>;
interface CMsgDOTARealtimeGameStatsTerse_MatchDetails {
    serverSteamId: string;
    matchId: string;
    timestamp: number;
    gameTime: number;
    steamBroadcasterAccountIds: number[];
    gameMode: number;
    leagueId: number;
    leagueNodeId: number;
    gameState: number;
    picks: CMsgDOTARealtimeGameStatsTerse_PickBanDetails[];
    bans: CMsgDOTARealtimeGameStatsTerse_PickBanDetails[];
    lobbyType: number;
    startTimestamp: number;
    isPlayerDraft: boolean;
}
declare const CMsgDOTARealtimeGameStatsTerse_MatchDetails: MessageFns$b<CMsgDOTARealtimeGameStatsTerse_MatchDetails>;
interface CMsgDOTARealtimeGameStatsTerse_GraphData {
    graphGold: number[];
}
declare const CMsgDOTARealtimeGameStatsTerse_GraphData: MessageFns$b<CMsgDOTARealtimeGameStatsTerse_GraphData>;
interface CMsgDOTABroadcastTimelineEvent {
    event: EBroadcastTimelineEvent;
    timestamp: number;
    data: number;
    stringData: string;
}
declare const CMsgDOTABroadcastTimelineEvent: MessageFns$b<CMsgDOTABroadcastTimelineEvent>;
interface CMsgGCToClientMatchGroupsVersion {
    matchgroupsVersion: number;
}
declare const CMsgGCToClientMatchGroupsVersion: MessageFns$b<CMsgGCToClientMatchGroupsVersion>;
interface CMsgDOTASDOHeroStatsHistory {
    matchId: string;
    gameMode: number;
    lobbyType: number;
    startTime: number;
    won: boolean;
    gpm: number;
    xpm: number;
    kills: number;
    deaths: number;
    assists: number;
}
declare const CMsgDOTASDOHeroStatsHistory: MessageFns$b<CMsgDOTASDOHeroStatsHistory>;
interface CMsgPredictionChoice {
    value: number;
    name: string;
    minRawValue: number;
    maxRawValue: number;
}
declare const CMsgPredictionChoice: MessageFns$b<CMsgPredictionChoice>;
interface CMsgInGamePrediction {
    id: number;
    name: string;
    type: CMsgInGamePrediction_EPredictionType;
    group: CMsgInGamePrediction_ERandomSelectionGroupT;
    question: string;
    choices: CMsgPredictionChoice[];
    requiredHeroes: string[];
    queryName: string;
    queryValues: CMsgInGamePrediction_QueryKeyValues[];
    answerResolutionType: CMsgInGamePrediction_EResolutionTypeT;
    pointsToGrant: number;
    rewardAction: number;
    debugForceSelection: number;
    rawValueType: CMsgInGamePrediction_ERawValueTypeT;
}
declare const CMsgInGamePrediction: MessageFns$b<CMsgInGamePrediction>;
interface CMsgInGamePrediction_QueryKeyValues {
    name: string;
    value: string;
}
declare const CMsgInGamePrediction_QueryKeyValues: MessageFns$b<CMsgInGamePrediction_QueryKeyValues>;
interface CMsgDOTASeasonPredictions {
    predictions: CMsgDOTASeasonPredictions_Prediction[];
    inGamePredictions: CMsgInGamePrediction[];
    inGamePredictionCountPerGame: number;
    inGamePredictionVotingPeriodMinutes: number;
}
declare const CMsgDOTASeasonPredictions: MessageFns$b<CMsgDOTASeasonPredictions>;
interface CMsgDOTASeasonPredictions_Prediction {
    type: CMsgDOTASeasonPredictions_Prediction_EPredictionType;
    question: string;
    choices: CMsgPredictionChoice[];
    selectionId: number;
    startDate: number;
    lockDate: number;
    reward: number;
    answerType: CMsgDOTASeasonPredictions_Prediction_EAnswerType;
    answerId: number;
    answers: CMsgDOTASeasonPredictions_Prediction_Answers[];
    queryName: string;
    lockOnSelectionId: number;
    lockOnSelectionValue: number;
    lockOnSelectionSet: boolean;
    useAnswerValueRanges: boolean;
    region: ELeagueRegion;
    phases: ELeaguePhase[];
    rewardEvent: EEvent;
    leagueNodeId: number;
}
declare const CMsgDOTASeasonPredictions_Prediction: MessageFns$b<CMsgDOTASeasonPredictions_Prediction>;
interface CMsgDOTASeasonPredictions_Prediction_Answers {
    answerId: number;
}
declare const CMsgDOTASeasonPredictions_Prediction_Answers: MessageFns$b<CMsgDOTASeasonPredictions_Prediction_Answers>;
interface CMsgAvailablePredictions {
    matchPredictions: CMsgAvailablePredictions_MatchPrediction[];
}
declare const CMsgAvailablePredictions: MessageFns$b<CMsgAvailablePredictions>;
interface CMsgAvailablePredictions_MatchPrediction {
    matchId: string;
    predictions: CMsgInGamePrediction[];
}
declare const CMsgAvailablePredictions_MatchPrediction: MessageFns$b<CMsgAvailablePredictions_MatchPrediction>;
interface CMsgLeagueWatchedGames {
    leagues: CMsgLeagueWatchedGames_League[];
}
declare const CMsgLeagueWatchedGames: MessageFns$b<CMsgLeagueWatchedGames>;
interface CMsgLeagueWatchedGames_Series {
    nodeId: number;
    game: number[];
}
declare const CMsgLeagueWatchedGames_Series: MessageFns$b<CMsgLeagueWatchedGames_Series>;
interface CMsgLeagueWatchedGames_League {
    leagueId: number;
    series: CMsgLeagueWatchedGames_Series[];
}
declare const CMsgLeagueWatchedGames_League: MessageFns$b<CMsgLeagueWatchedGames_League>;
interface CMsgDOTAMatch {
    duration: number;
    starttime: number;
    players: CMsgDOTAMatch_Player[];
    matchId: string;
    towerStatus: number[];
    barracksStatus: number[];
    cluster: number;
    firstBloodTime: number;
    replaySalt: number;
    serverIp: number;
    serverPort: number;
    lobbyType: number;
    humanPlayers: number;
    averageSkill: number;
    gameBalance: number;
    radiantTeamId: number;
    direTeamId: number;
    leagueid: number;
    radiantTeamName: string;
    direTeamName: string;
    radiantTeamLogo: string;
    direTeamLogo: string;
    radiantTeamLogoUrl: string;
    direTeamLogoUrl: string;
    radiantTeamComplete: number;
    direTeamComplete: number;
    gameMode: DOTAGameMode;
    picksBans: CMatchHeroSelectEvent[];
    matchSeqNum: string;
    replayState: CMsgDOTAMatch_ReplayState;
    radiantGuildId: number;
    direGuildId: number;
    radiantTeamTag: string;
    direTeamTag: string;
    seriesId: number;
    seriesType: number;
    broadcasterChannels: CMsgDOTAMatch_BroadcasterChannel[];
    engine: number;
    customGameData: CMsgDOTAMatch_CustomGameData | undefined;
    matchFlags: number;
    privateMetadataKey: number;
    radiantTeamScore: number;
    direTeamScore: number;
    matchOutcome: EMatchOutcome;
    tournamentId: number;
    tournamentRound: number;
    preGameDuration: number;
    coaches: CMsgDOTAMatch_Coach[];
}
declare const CMsgDOTAMatch: MessageFns$b<CMsgDOTAMatch>;
interface CMsgDOTAMatch_Player {
    accountId: number;
    playerSlot: number;
    heroId: number;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    item7: number;
    item8: number;
    item9: number;
    item10: number;
    item10Lvl: number;
    expectedTeamContribution: number;
    scaledMetric: number;
    previousRank: number;
    rankChange: number;
    mmrType: number;
    kills: number;
    deaths: number;
    assists: number;
    leaverStatus: number;
    gold: number;
    lastHits: number;
    denies: number;
    goldPerMin: number;
    xpPerMin: number;
    goldSpent: number;
    heroDamage: number;
    towerDamage: number;
    heroHealing: number;
    level: number;
    timeLastSeen: number;
    playerName: string;
    supportAbilityValue: number;
    feedingDetected: boolean;
    searchRank: number;
    searchRankUncertainty: number;
    rankUncertaintyChange: number;
    heroPlayCount: number;
    partyId: string;
    scaledHeroDamage: number;
    scaledTowerDamage: number;
    scaledHeroHealing: number;
    scaledKills: number;
    scaledDeaths: number;
    scaledAssists: number;
    claimedFarmGold: number;
    supportGold: number;
    claimedDenies: number;
    claimedMisses: number;
    misses: number;
    abilityUpgrades: CMatchPlayerAbilityUpgrade[];
    additionalUnitsInventory: CMatchAdditionalUnitInventory[];
    permanentBuffs: CMatchPlayerPermanentBuff[];
    proName: string;
    realName: string;
    customGameData: CMsgDOTAMatch_Player_CustomGameData | undefined;
    activePlusSubscription: boolean;
    netWorth: number;
    botDifficulty: number;
    heroPickOrder: number;
    heroWasRandomed: boolean;
    heroWasDotaPlusSuggestion: boolean;
    heroDamageReceived: CMsgDOTAMatch_Player_HeroDamageReceived[];
    heroDamageDealt: CMsgDOTAMatch_Player_HeroDamageReceived[];
    secondsDead: number;
    goldLostToDeath: number;
    laneSelectionFlags: number;
    bountyRunes: number;
    outpostsCaptured: number;
    teamNumber: dotaGcTeam;
    teamSlot: number;
    selectedFacet: number;
}
declare const CMsgDOTAMatch_Player: MessageFns$b<CMsgDOTAMatch_Player>;
interface CMsgDOTAMatch_Player_CustomGameData {
    dotaTeam: number;
    winner: boolean;
}
declare const CMsgDOTAMatch_Player_CustomGameData: MessageFns$b<CMsgDOTAMatch_Player_CustomGameData>;
interface CMsgDOTAMatch_Player_HeroDamageReceived {
    preReduction: number;
    postReduction: number;
    damageType: CMsgDOTAMatch_Player_HeroDamageType;
}
declare const CMsgDOTAMatch_Player_HeroDamageReceived: MessageFns$b<CMsgDOTAMatch_Player_HeroDamageReceived>;
interface CMsgDOTAMatch_BroadcasterInfo {
    accountId: number;
    name: string;
}
declare const CMsgDOTAMatch_BroadcasterInfo: MessageFns$b<CMsgDOTAMatch_BroadcasterInfo>;
interface CMsgDOTAMatch_BroadcasterChannel {
    countryCode: string;
    description: string;
    broadcasterInfos: CMsgDOTAMatch_BroadcasterInfo[];
    languageCode: string;
}
declare const CMsgDOTAMatch_BroadcasterChannel: MessageFns$b<CMsgDOTAMatch_BroadcasterChannel>;
interface CMsgDOTAMatch_Coach {
    accountId: number;
    coachName: string;
    coachRating: number;
    coachTeam: number;
    coachPartyId: string;
    isPrivateCoach: boolean;
}
declare const CMsgDOTAMatch_Coach: MessageFns$b<CMsgDOTAMatch_Coach>;
interface CMsgDOTAMatch_CustomGameData {
    customGameId: string;
    mapName: string;
}
declare const CMsgDOTAMatch_CustomGameData: MessageFns$b<CMsgDOTAMatch_CustomGameData>;
interface CMsgPlayerCard {
    accountId: number;
    statModifier: CMsgPlayerCard_StatModifier[];
}
declare const CMsgPlayerCard: MessageFns$b<CMsgPlayerCard>;
interface CMsgPlayerCard_StatModifier {
    stat: number;
    value: number;
}
declare const CMsgPlayerCard_StatModifier: MessageFns$b<CMsgPlayerCard_StatModifier>;
interface CMsgDOTAFantasyPlayerStats {
    playerAccountId: number;
    matchId: string;
    matchCompleted: boolean;
    teamId: number;
    leagueId: number;
    delay: number;
    seriesId: number;
    seriesType: number;
    kills: number;
    deaths: number;
    cs: number;
    gpm: number;
    towerKills: number;
    roshanKills: number;
    teamfightParticipation: number;
    wardsPlaced: number;
    campsStacked: number;
    runesGrabbed: number;
    firstBlood: number;
    stuns: number;
    smokes: number;
    neutralTokens: number;
    watchers: number;
    lotuses: number;
    tormentors: number;
    courierKills: number;
    titleStats: string;
}
declare const CMsgDOTAFantasyPlayerStats: MessageFns$b<CMsgDOTAFantasyPlayerStats>;
interface CMsgDOTAFantasyPlayerMatchStats {
    matches: CMsgDOTAFantasyPlayerStats[];
}
declare const CMsgDOTAFantasyPlayerMatchStats: MessageFns$b<CMsgDOTAFantasyPlayerMatchStats>;
interface CMsgDOTABotDebugInfo {
    bots: CMsgDOTABotDebugInfo_Bot[];
    desirePushLaneTop: number;
    desirePushLaneMid: number;
    desirePushLaneBot: number;
    desireDefendLaneTop: number;
    desireDefendLaneMid: number;
    desireDefendLaneBot: number;
    desireFarmLaneTop: number;
    desireFarmLaneMid: number;
    desireFarmLaneBot: number;
    desireFarmRoshan: number;
    executionTime: number;
    runeStatus: number[];
}
declare const CMsgDOTABotDebugInfo: MessageFns$b<CMsgDOTABotDebugInfo>;
interface CMsgDOTABotDebugInfo_Bot {
    playerOwnerId: number;
    heroId: number;
    difficulty: number;
    powerCurrent: number;
    powerMax: number;
    moveTargetX: number;
    moveTargetY: number;
    moveTargetZ: number;
    activeModeId: number;
    executionTime: number;
    modes: CMsgDOTABotDebugInfo_Bot_Mode[];
    action: CMsgDOTABotDebugInfo_Bot_Action | undefined;
}
declare const CMsgDOTABotDebugInfo_Bot: MessageFns$b<CMsgDOTABotDebugInfo_Bot>;
interface CMsgDOTABotDebugInfo_Bot_Mode {
    modeId: number;
    desire: number;
    targetEntity: number;
    targetX: number;
    targetY: number;
    targetZ: number;
}
declare const CMsgDOTABotDebugInfo_Bot_Mode: MessageFns$b<CMsgDOTABotDebugInfo_Bot_Mode>;
interface CMsgDOTABotDebugInfo_Bot_Action {
    actionId: number;
    actionTarget: string;
}
declare const CMsgDOTABotDebugInfo_Bot_Action: MessageFns$b<CMsgDOTABotDebugInfo_Bot_Action>;
interface CMsgSuccessfulHero {
    heroId: number;
    winPercent: number;
    longestStreak: number;
}
declare const CMsgSuccessfulHero: MessageFns$b<CMsgSuccessfulHero>;
interface CMsgRecentMatchInfo {
    matchId: string;
    gameMode: DOTAGameMode;
    kills: number;
    deaths: number;
    assists: number;
    duration: number;
    playerSlot: number;
    matchOutcome: EMatchOutcome;
    timestamp: number;
    lobbyType: number;
    teamNumber: number;
}
declare const CMsgRecentMatchInfo: MessageFns$b<CMsgRecentMatchInfo>;
interface CMsgMatchTips {
    tips: CMsgMatchTips_SingleTip[];
}
declare const CMsgMatchTips: MessageFns$b<CMsgMatchTips>;
interface CMsgMatchTips_SingleTip {
    sourceAccountId: number;
    targetAccountId: number;
    tipAmount: number;
    eventId: EEvent;
}
declare const CMsgMatchTips_SingleTip: MessageFns$b<CMsgMatchTips_SingleTip>;
interface CMsgDOTAMatchMinimal {
    matchId: string;
    startTime: number;
    duration: number;
    gameMode: DOTAGameMode;
    players: CMsgDOTAMatchMinimal_Player[];
    tourney: CMsgDOTAMatchMinimal_Tourney | undefined;
    matchOutcome: EMatchOutcome;
    radiantScore: number;
    direScore: number;
    lobbyType: number;
}
declare const CMsgDOTAMatchMinimal: MessageFns$b<CMsgDOTAMatchMinimal>;
interface CMsgDOTAMatchMinimal_Player {
    accountId: number;
    heroId: number;
    kills: number;
    deaths: number;
    assists: number;
    items: number[];
    playerSlot: number;
    proName: string;
    level: number;
    teamNumber: dotaGcTeam;
}
declare const CMsgDOTAMatchMinimal_Player: MessageFns$b<CMsgDOTAMatchMinimal_Player>;
interface CMsgDOTAMatchMinimal_Tourney {
    leagueId: number;
    seriesType: number;
    seriesGame: number;
    weekendTourneyTournamentId: number;
    weekendTourneySeasonTrophyId: number;
    weekendTourneyDivision: number;
    weekendTourneySkillLevel: number;
    radiantTeamId: number;
    radiantTeamName: string;
    radiantTeamLogo: string;
    radiantTeamLogoUrl: string;
    direTeamId: number;
    direTeamName: string;
    direTeamLogo: string;
    direTeamLogoUrl: string;
}
declare const CMsgDOTAMatchMinimal_Tourney: MessageFns$b<CMsgDOTAMatchMinimal_Tourney>;
interface CMsgConsumableUsage {
    itemDef: number;
    quantityChange: number;
}
declare const CMsgConsumableUsage: MessageFns$b<CMsgConsumableUsage>;
interface CMsgMatchConsumableUsage {
    playerConsumablesUsed: CMsgMatchConsumableUsage_PlayerUsage[];
}
declare const CMsgMatchConsumableUsage: MessageFns$b<CMsgMatchConsumableUsage>;
interface CMsgMatchConsumableUsage_PlayerUsage {
    accountId: number;
    consumablesUsed: CMsgConsumableUsage[];
}
declare const CMsgMatchConsumableUsage_PlayerUsage: MessageFns$b<CMsgMatchConsumableUsage_PlayerUsage>;
interface CMsgMatchEventActionGrants {
    playerGrants: CMsgMatchEventActionGrants_PlayerGrants[];
}
declare const CMsgMatchEventActionGrants: MessageFns$b<CMsgMatchEventActionGrants>;
interface CMsgMatchEventActionGrants_PlayerGrants {
    accountId: number;
    actionsGranted: CMsgPendingEventAward[];
}
declare const CMsgMatchEventActionGrants_PlayerGrants: MessageFns$b<CMsgMatchEventActionGrants_PlayerGrants>;
interface CMsgCustomGameWhitelist {
    version: number;
    customGamesWhitelist: string[];
    disableWhitelist: boolean;
}
declare const CMsgCustomGameWhitelist: MessageFns$b<CMsgCustomGameWhitelist>;
interface CMsgCustomGameWhitelistForEdit {
    whitelistEntries: CMsgCustomGameWhitelistForEdit_WhitelistEntry[];
}
declare const CMsgCustomGameWhitelistForEdit: MessageFns$b<CMsgCustomGameWhitelistForEdit>;
interface CMsgCustomGameWhitelistForEdit_WhitelistEntry {
    customGameId: string;
    whitelistState: ECustomGameWhitelistState;
}
declare const CMsgCustomGameWhitelistForEdit_WhitelistEntry: MessageFns$b<CMsgCustomGameWhitelistForEdit_WhitelistEntry>;
interface CMsgPlayerRecentMatchInfo {
    matchId: string;
    timestamp: number;
    duration: number;
    win: boolean;
    heroId: number;
    kills: number;
    deaths: number;
    assists: number;
}
declare const CMsgPlayerRecentMatchInfo: MessageFns$b<CMsgPlayerRecentMatchInfo>;
interface CMsgPlayerMatchRecord {
    wins: number;
    losses: number;
}
declare const CMsgPlayerMatchRecord: MessageFns$b<CMsgPlayerMatchRecord>;
interface CMsgPlayerRecentMatchOutcomes {
    outcomes: number;
    matchCount: number;
}
declare const CMsgPlayerRecentMatchOutcomes: MessageFns$b<CMsgPlayerRecentMatchOutcomes>;
interface CMsgPlayerRecentCommends {
    commends: number;
    matchCount: number;
}
declare const CMsgPlayerRecentCommends: MessageFns$b<CMsgPlayerRecentCommends>;
interface CMsgPlayerRecentAccomplishments {
    recentOutcomes: CMsgPlayerRecentMatchOutcomes | undefined;
    totalRecord: CMsgPlayerMatchRecord | undefined;
    predictionStreak: number;
    plusPredictionStreak: number;
    recentCommends: CMsgPlayerRecentCommends | undefined;
    firstMatchTimestamp: number;
    lastMatch: CMsgPlayerRecentMatchInfo | undefined;
    recentMvps: CMsgPlayerRecentMatchOutcomes | undefined;
}
declare const CMsgPlayerRecentAccomplishments: MessageFns$b<CMsgPlayerRecentAccomplishments>;
interface CMsgPlayerHeroRecentAccomplishments {
    recentOutcomes: CMsgPlayerRecentMatchOutcomes | undefined;
    totalRecord: CMsgPlayerMatchRecord | undefined;
    lastMatch: CMsgPlayerRecentMatchInfo | undefined;
}
declare const CMsgPlayerHeroRecentAccomplishments: MessageFns$b<CMsgPlayerHeroRecentAccomplishments>;
interface CMsgRecentAccomplishments {
    playerAccomplishments: CMsgPlayerRecentAccomplishments | undefined;
    heroAccomplishments: CMsgPlayerHeroRecentAccomplishments | undefined;
}
declare const CMsgRecentAccomplishments: MessageFns$b<CMsgRecentAccomplishments>;
interface CMsgServerToGCRequestPlayerRecentAccomplishments {
    accountId: number;
    heroId: number;
}
declare const CMsgServerToGCRequestPlayerRecentAccomplishments: MessageFns$b<CMsgServerToGCRequestPlayerRecentAccomplishments>;
interface CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse {
    result: CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse;
    playerAccomplishments: CMsgRecentAccomplishments | undefined;
}
declare const CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse: MessageFns$b<CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse>;
interface CMsgArcanaVoteMatchVotes {
    matchId: number;
    heroId: number;
    voteCount: number;
}
declare const CMsgArcanaVoteMatchVotes: MessageFns$b<CMsgArcanaVoteMatchVotes>;
interface CMsgGCtoGCAssociatedExploiterAccountInfo {
    accountId: number;
    numMatchesToSearch: number;
    minSharedMatchCount: number;
    numAdditionalPlayers: number;
}
declare const CMsgGCtoGCAssociatedExploiterAccountInfo: MessageFns$b<CMsgGCtoGCAssociatedExploiterAccountInfo>;
interface CMsgGCtoGCAssociatedExploiterAccountInfoResponse {
    accounts: CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account[];
}
declare const CMsgGCtoGCAssociatedExploiterAccountInfoResponse: MessageFns$b<CMsgGCtoGCAssociatedExploiterAccountInfoResponse>;
interface CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account {
    accountId: number;
    numCommonMatches: number;
    earliestCommonMatch: number;
    latestCommonMatch: number;
    generation: number;
    persona: string;
    alreadyBanned: boolean;
}
declare const CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account: MessageFns$b<CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account>;
interface CMsgPullTabsData {
    slots: CMsgPullTabsData_Slot[];
    jackpots: CMsgPullTabsData_Jackpot[];
    lastBoard: number;
}
declare const CMsgPullTabsData: MessageFns$b<CMsgPullTabsData>;
interface CMsgPullTabsData_Slot {
    eventId: number;
    boardId: number;
    heroId: number;
    actionId: number;
    redeemed: boolean;
}
declare const CMsgPullTabsData_Slot: MessageFns$b<CMsgPullTabsData_Slot>;
interface CMsgPullTabsData_Jackpot {
    boardId: number;
    actionId: number;
    heroId: number;
}
declare const CMsgPullTabsData_Jackpot: MessageFns$b<CMsgPullTabsData_Jackpot>;
interface CMsgUnderDraftData {
    benchSlots: CMsgUnderDraftData_BenchSlot[];
    shopSlots: CMsgUnderDraftData_ShopSlot[];
    gold: number;
    totalGold: number;
    notRestorable: boolean;
}
declare const CMsgUnderDraftData: MessageFns$b<CMsgUnderDraftData>;
interface CMsgUnderDraftData_BenchSlot {
    slotId: number;
    heroId: number;
    stars: number;
}
declare const CMsgUnderDraftData_BenchSlot: MessageFns$b<CMsgUnderDraftData_BenchSlot>;
interface CMsgUnderDraftData_ShopSlot {
    slotId: number;
    heroId: number;
    isSpecialReward: boolean;
}
declare const CMsgUnderDraftData_ShopSlot: MessageFns$b<CMsgUnderDraftData_ShopSlot>;
interface CMsgPlayerTitleData {
    title: number[];
    eventId: number[];
    active: number;
}
declare const CMsgPlayerTitleData: MessageFns$b<CMsgPlayerTitleData>;
interface CMsgDOTATriviaQuestion {
    questionId: number;
    category: EDOTATriviaQuestionCategory;
    timestamp: number;
    questionValue: string;
    answerValues: string[];
    correctAnswerIndex: number;
}
declare const CMsgDOTATriviaQuestion: MessageFns$b<CMsgDOTATriviaQuestion>;
interface CMsgDOTATriviaQuestionAnswersSummary {
    summaryAvailable: boolean;
    pickedCount: number[];
}
declare const CMsgDOTATriviaQuestionAnswersSummary: MessageFns$b<CMsgDOTATriviaQuestionAnswersSummary>;
interface CMsgGameDataSpecialValueBonus {
    name: string;
    value: number;
    operation: number;
}
declare const CMsgGameDataSpecialValueBonus: MessageFns$b<CMsgGameDataSpecialValueBonus>;
interface CMsgGameDataSpecialValues {
    name: string;
    valuesFloat: number[];
    isPercentage: boolean;
    headingLoc: string;
    bonuses: CMsgGameDataSpecialValueBonus[];
    valuesShard: number[];
    valuesScepter: number[];
    facetBonus: CMsgGameDataFacetAbilityBonus | undefined;
    requiredFacet: string;
}
declare const CMsgGameDataSpecialValues: MessageFns$b<CMsgGameDataSpecialValues>;
interface CMsgGameDataFacetAbilityBonus {
    name: string;
    values: number[];
    operation: number;
}
declare const CMsgGameDataFacetAbilityBonus: MessageFns$b<CMsgGameDataFacetAbilityBonus>;
interface CMsgGameDataAbilityOrItem {
    id: number;
    name: string;
    nameLoc: string;
    descLoc: string;
    loreLoc: string;
    notesLoc: string[];
    shardLoc: string;
    scepterLoc: string;
    facetsLoc: string[];
    type: number;
    behavior: string;
    targetTeam: number;
    targetType: number;
    flags: number;
    damage: number;
    immunity: number;
    dispellable: number;
    maxLevel: number;
    castRanges: number[];
    castPoints: number[];
    channelTimes: number[];
    cooldowns: number[];
    durations: number[];
    damages: number[];
    manaCosts: number[];
    goldCosts: number[];
    healthCosts: number[];
    specialValues: CMsgGameDataSpecialValues[];
    isItem: boolean;
    abilityHasScepter: boolean;
    abilityHasShard: boolean;
    abilityIsGrantedByScepter: boolean;
    abilityIsGrantedByShard: boolean;
    abilityIsInnate: boolean;
    itemCost: number;
    itemInitialCharges: number;
    itemNeutralTier: number;
    itemStockMax: number;
    itemStockTime: number;
    itemQuality: number;
}
declare const CMsgGameDataAbilityOrItem: MessageFns$b<CMsgGameDataAbilityOrItem>;
interface CMsgGameDataAbilityOrItemList {
    abilities: CMsgGameDataAbilityOrItem[];
}
declare const CMsgGameDataAbilityOrItemList: MessageFns$b<CMsgGameDataAbilityOrItemList>;
interface CMsgGameDataHero {
    id: number;
    name: string;
    orderId: number;
    nameLoc: string;
    bioLoc: string;
    hypeLoc: string;
    npeDescLoc: string;
    facets: CMsgGameDataHero_Facet[];
    strBase: number;
    strGain: number;
    agiBase: number;
    agiGain: number;
    intBase: number;
    intGain: number;
    primaryAttr: number;
    complexity: number;
    attackCapability: number;
    roleLevels: number[];
    damageMin: number;
    damageMax: number;
    attackRate: number;
    attackRange: number;
    projectileSpeed: number;
    armor: number;
    magicResistance: number;
    movementSpeed: number;
    turnRate: number;
    sightRangeDay: number;
    sightRangeNight: number;
    maxHealth: number;
    healthRegen: number;
    maxMana: number;
    manaRegen: number;
    abilities: CMsgGameDataAbilityOrItem[];
    talents: CMsgGameDataAbilityOrItem[];
    facetAbilities: CMsgGameDataAbilityOrItemList[];
}
declare const CMsgGameDataHero: MessageFns$b<CMsgGameDataHero>;
interface CMsgGameDataHero_Facet {
    color: number;
    titleLoc: string;
    descriptionLoc: string;
    name: string;
    icon: string;
    gradientId: number;
    index: number;
}
declare const CMsgGameDataHero_Facet: MessageFns$b<CMsgGameDataHero_Facet>;
interface CMsgGameDataAbilities {
    abilities: CMsgGameDataAbilityOrItem[];
}
declare const CMsgGameDataAbilities: MessageFns$b<CMsgGameDataAbilities>;
interface CMsgGameDataItems {
    items: CMsgGameDataAbilityOrItem[];
}
declare const CMsgGameDataItems: MessageFns$b<CMsgGameDataItems>;
interface CMsgGameDataHeroes {
    heroes: CMsgGameDataHero[];
}
declare const CMsgGameDataHeroes: MessageFns$b<CMsgGameDataHeroes>;
interface CMsgGameDataHeroList {
    heroes: CMsgGameDataHeroList_HeroInfo[];
}
declare const CMsgGameDataHeroList: MessageFns$b<CMsgGameDataHeroList>;
interface CMsgGameDataHeroList_HeroInfo {
    id: number;
    name: string;
    nameLoc: string;
    nameEnglishLoc: string;
    primaryAttr: number;
    complexity: number;
}
declare const CMsgGameDataHeroList_HeroInfo: MessageFns$b<CMsgGameDataHeroList_HeroInfo>;
interface CMsgGameDataItemAbilityList {
    itemabilities: CMsgGameDataItemAbilityList_ItemAbilityInfo[];
}
declare const CMsgGameDataItemAbilityList: MessageFns$b<CMsgGameDataItemAbilityList>;
interface CMsgGameDataItemAbilityList_ItemAbilityInfo {
    id: number;
    name: string;
    nameLoc: string;
    nameEnglishLoc: string;
    neutralItemTier: number;
    isPregameSuggested: boolean;
    isEarlygameSuggested: boolean;
    isLategameSuggested: boolean;
    recipes: CMsgGameDataItemAbilityList_ItemAbilityInfo_Recipe[];
}
declare const CMsgGameDataItemAbilityList_ItemAbilityInfo: MessageFns$b<CMsgGameDataItemAbilityList_ItemAbilityInfo>;
interface CMsgGameDataItemAbilityList_ItemAbilityInfo_Recipe {
    items: number[];
}
declare const CMsgGameDataItemAbilityList_ItemAbilityInfo_Recipe: MessageFns$b<CMsgGameDataItemAbilityList_ItemAbilityInfo_Recipe>;
interface CMsgLobbyAbilityDraftData {
    shuffleDraftOrder: boolean;
}
declare const CMsgLobbyAbilityDraftData: MessageFns$b<CMsgLobbyAbilityDraftData>;
interface CSOEconItemDropRateBonus {
    accountId: number;
    expirationDate: number;
    bonus: number;
    bonusCount: number;
    itemId: string;
    defIndex: number;
    secondsLeft: number;
    boosterType: number;
}
declare const CSOEconItemDropRateBonus: MessageFns$b<CSOEconItemDropRateBonus>;
interface CSOEconItemTournamentPassport {
    accountId: number;
    leagueId: number;
    itemId: string;
    originalPurchaserId: number;
    passportsBought: number;
    version: number;
    defIndex: number;
    rewardFlags: number;
}
declare const CSOEconItemTournamentPassport: MessageFns$b<CSOEconItemTournamentPassport>;
interface CMsgStickerbookSticker {
    itemDefId: number;
    stickerNum: number;
    quality: number;
    positionX: number;
    positionY: number;
    positionZ: number;
    rotation: number;
    scale: number;
    sourceItemId: string;
    depthBias: number;
}
declare const CMsgStickerbookSticker: MessageFns$b<CMsgStickerbookSticker>;
interface CMsgStickerbookPage {
    pageNum: number;
    eventId: EEvent;
    teamId: number;
    stickers: CMsgStickerbookSticker[];
    pageType: EStickerbookPageType;
}
declare const CMsgStickerbookPage: MessageFns$b<CMsgStickerbookPage>;
interface CMsgStickerbookTeamPageOrderSequence {
    pageNumbers: number[];
}
declare const CMsgStickerbookTeamPageOrderSequence: MessageFns$b<CMsgStickerbookTeamPageOrderSequence>;
interface CMsgStickerbook {
    pages: CMsgStickerbookPage[];
    teamPageOrderSequence: CMsgStickerbookTeamPageOrderSequence | undefined;
    favoritePageNum: number;
}
declare const CMsgStickerbook: MessageFns$b<CMsgStickerbook>;
interface CMsgStickerHero {
    heroId: number;
    itemDefId: number;
    quality: number;
    sourceItemId: string;
}
declare const CMsgStickerHero: MessageFns$b<CMsgStickerHero>;
interface CMsgStickerHeroes {
    heroes: CMsgStickerHero[];
}
declare const CMsgStickerHeroes: MessageFns$b<CMsgStickerHeroes>;
interface CMsgHeroRoleStats {
    laneSelectionFlags: number;
    matchCount: number;
    winCount: number;
}
declare const CMsgHeroRoleStats: MessageFns$b<CMsgHeroRoleStats>;
interface CMsgHeroRoleHeroStats {
    heroId: number;
    roleStats: CMsgHeroRoleStats[];
}
declare const CMsgHeroRoleHeroStats: MessageFns$b<CMsgHeroRoleHeroStats>;
interface CMsgHeroRoleRankStats {
    rankTier: number;
    heroStats: CMsgHeroRoleHeroStats[];
}
declare const CMsgHeroRoleRankStats: MessageFns$b<CMsgHeroRoleRankStats>;
interface CMsgHeroRoleAllRanksStats {
    startTimestamp: number;
    endTimestamp: number;
    rankStats: CMsgHeroRoleRankStats[];
}
declare const CMsgHeroRoleAllRanksStats: MessageFns$b<CMsgHeroRoleAllRanksStats>;
interface CMsgMapStatsSnapshot {
    timestamp: number;
    lotusesGained: string;
    wisdomRunesGained: string;
    roshanKillsDay: string;
    roshanKillsNight: string;
    portalsUsed: string;
    watchersTaken: string;
    tormentorKills: string;
    outpostsCaptured: string;
    shieldRunesGained: string;
}
declare const CMsgMapStatsSnapshot: MessageFns$b<CMsgMapStatsSnapshot>;
interface CMsgGlobalMapStats {
    current: CMsgMapStatsSnapshot | undefined;
    windowStart: CMsgMapStatsSnapshot | undefined;
    windowEnd: CMsgMapStatsSnapshot | undefined;
}
declare const CMsgGlobalMapStats: MessageFns$b<CMsgGlobalMapStats>;
interface CMsgTrackedStat {
    trackedStatId: number;
    trackedStatValue: number;
}
declare const CMsgTrackedStat: MessageFns$b<CMsgTrackedStat>;
interface CMsgDOTAClaimEventActionResponse {
    result: CMsgDOTAClaimEventActionResponse_ResultCode;
    rewardResults: CMsgDOTAClaimEventActionResponse_GrantedRewardData[];
    actionId: number;
}
declare const CMsgDOTAClaimEventActionResponse: MessageFns$b<CMsgDOTAClaimEventActionResponse>;
interface CMsgDOTAClaimEventActionResponse_MysteryItemRewardData {
    itemDef: number;
    itemCategory: number;
}
declare const CMsgDOTAClaimEventActionResponse_MysteryItemRewardData: MessageFns$b<CMsgDOTAClaimEventActionResponse_MysteryItemRewardData>;
interface CMsgDOTAClaimEventActionResponse_LootListRewardData {
    itemDef: number[];
}
declare const CMsgDOTAClaimEventActionResponse_LootListRewardData: MessageFns$b<CMsgDOTAClaimEventActionResponse_LootListRewardData>;
interface CMsgDOTAClaimEventActionResponse_ActionListRewardData {
    actionId: number;
    resultRewardData: Buffer;
}
declare const CMsgDOTAClaimEventActionResponse_ActionListRewardData: MessageFns$b<CMsgDOTAClaimEventActionResponse_ActionListRewardData>;
interface CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData {
    tokens: CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData_TokenQuantity[];
}
declare const CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData: MessageFns$b<CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData>;
interface CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData_TokenQuantity {
    tokenId: number;
    tokenCount: number;
}
declare const CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData_TokenQuantity: MessageFns$b<CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData_TokenQuantity>;
interface CMsgDOTAClaimEventActionResponse_GrantedRewardData {
    grantIndex: number;
    scoreIndex: number;
    rewardIndex: number;
    rewardData: Buffer;
    actionId: number;
}
declare const CMsgDOTAClaimEventActionResponse_GrantedRewardData: MessageFns$b<CMsgDOTAClaimEventActionResponse_GrantedRewardData>;
interface CMsgClientToGCDotaLabsFeedback {
    language: number;
    feedbackItem: number;
    feedback: string;
}
declare const CMsgClientToGCDotaLabsFeedback: MessageFns$b<CMsgClientToGCDotaLabsFeedback>;
interface CMsgClientToGCDotaLabsFeedbackResponse {
    response: CMsgClientToGCDotaLabsFeedbackResponse_EResponse;
}
declare const CMsgClientToGCDotaLabsFeedbackResponse: MessageFns$b<CMsgClientToGCDotaLabsFeedbackResponse>;
interface CDotaMsgPredictionResult {
    accountId: number;
    matchId: string;
    correct: boolean;
    predictions: CDotaMsgPredictionResult_Prediction[];
}
declare const CDotaMsgPredictionResult: MessageFns$b<CDotaMsgPredictionResult>;
interface CDotaMsgPredictionResult_Prediction {
    itemDef: number;
    numCorrect: number;
    numFails: number;
    result: CDotaMsgPredictionResult_Prediction_EResult;
    grantedItemDefs: number[];
}
declare const CDotaMsgPredictionResult_Prediction: MessageFns$b<CDotaMsgPredictionResult_Prediction>;
type Builtin$b = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$b<T> = T extends Builtin$b ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$b<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$b<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$b<T[K]>;
} : Partial<T>;
interface MessageFns$b<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$b<T>): T;
    fromPartial(object: DeepPartial$b<T>): T;
}

declare enum EGCBaseMsg {
    k_EMsgGCInviteToParty = 4501,
    k_EMsgGCInvitationCreated = 4502,
    k_EMsgGCPartyInviteResponse = 4503,
    k_EMsgGCKickFromParty = 4504,
    k_EMsgGCLeaveParty = 4505,
    k_EMsgGCServerAvailable = 4506,
    k_EMsgGCClientConnectToServer = 4507,
    k_EMsgGCGameServerInfo = 4508,
    k_EMsgGCLANServerAvailable = 4511,
    k_EMsgGCInviteToLobby = 4512,
    k_EMsgGCLobbyInviteResponse = 4513,
    k_EMsgGCToClientPollFileRequest = 4514,
    k_EMsgGCToClientPollFileResponse = 4515,
    k_EMsgGCToGCPerformManualOp = 4516,
    k_EMsgGCToGCPerformManualOpCompleted = 4517,
    k_EMsgGCToGCReloadServerRegionSettings = 4518,
    k_EMsgGCAdditionalWelcomeMsgList = 4519,
    k_EMsgGCToClientApplyRemoteConVars = 4520,
    k_EMsgGCToServerApplyRemoteConVars = 4521,
    k_EMsgClientToGCIntegrityStatus = 4522,
    k_EMsgClientToGCAggregateMetrics = 4523,
    k_EMsgGCToClientAggregateMetricsBackoff = 4524,
    k_EMsgGCToServerSteamLearnAccessTokensChanged = 4525,
    k_EMsgGCToServerSteamLearnUseHTTP = 4526
}
declare function eGCBaseMsgFromJSON(object: any): EGCBaseMsg;
declare function eGCBaseMsgToJSON(object: EGCBaseMsg): string;
declare enum ECustomGameInstallStatus {
    k_ECustomGameInstallStatus_Unknown = 0,
    k_ECustomGameInstallStatus_Ready = 1,
    k_ECustomGameInstallStatus_Busy = 2,
    k_ECustomGameInstallStatus_FailedGeneric = 101,
    k_ECustomGameInstallStatus_FailedInternalError = 102,
    k_ECustomGameInstallStatus_RequestedTimestampTooOld = 103,
    k_ECustomGameInstallStatus_RequestedTimestampTooNew = 104,
    k_ECustomGameInstallStatus_CRCMismatch = 105,
    k_ECustomGameInstallStatus_FailedSteam = 106,
    k_ECustomGameInstallStatus_FailedCanceled = 107
}
declare function eCustomGameInstallStatusFromJSON(object: any): ECustomGameInstallStatus;
declare function eCustomGameInstallStatusToJSON(object: ECustomGameInstallStatus): string;
declare enum CMsgExtractGemsResponse_EExtractGems {
    k_ExtractGems_Succeeded = 0,
    k_ExtractGems_Failed_ToolIsInvalid = 1,
    k_ExtractGems_Failed_ItemIsInvalid = 2,
    k_ExtractGems_Failed_ToolCannotRemoveGem = 3,
    k_ExtractGems_Failed_FailedToRemoveGem = 4
}
declare function cMsgExtractGemsResponse_EExtractGemsFromJSON(object: any): CMsgExtractGemsResponse_EExtractGems;
declare function cMsgExtractGemsResponse_EExtractGemsToJSON(object: CMsgExtractGemsResponse_EExtractGems): string;
declare enum CMsgAddSocketResponse_EAddSocket {
    k_AddSocket_Succeeded = 0,
    k_AddSocket_Failed_ToolIsInvalid = 1,
    k_AddSocket_Failed_ItemCannotBeSocketed = 2,
    k_AddSocket_Failed_FailedToAddSocket = 3
}
declare function cMsgAddSocketResponse_EAddSocketFromJSON(object: any): CMsgAddSocketResponse_EAddSocket;
declare function cMsgAddSocketResponse_EAddSocketToJSON(object: CMsgAddSocketResponse_EAddSocket): string;
declare enum CMsgAddItemToSocketResponse_EAddGem {
    k_AddGem_Succeeded = 0,
    k_AddGem_Failed_GemIsInvalid = 1,
    k_AddGem_Failed_ItemIsInvalid = 2,
    k_AddGem_Failed_FailedToAddGem = 3,
    k_AddGem_Failed_InvalidGemTypeForSocket = 4,
    k_AddGem_Failed_InvalidGemTypeForHero = 5,
    k_AddGem_Failed_InvalidGemTypeForSlot = 6,
    k_AddGem_Failed_SocketContainsUnremovableGem = 7
}
declare function cMsgAddItemToSocketResponse_EAddGemFromJSON(object: any): CMsgAddItemToSocketResponse_EAddGem;
declare function cMsgAddItemToSocketResponse_EAddGemToJSON(object: CMsgAddItemToSocketResponse_EAddGem): string;
declare enum CMsgResetStrangeGemCountResponse_EResetGem {
    k_ResetGem_Succeeded = 0,
    k_ResetGem_Failed_FailedToResetGem = 1,
    k_ResetGem_Failed_ItemIsInvalid = 2,
    k_ResetGem_Failed_InvalidSocketId = 3,
    k_ResetGem_Failed_SocketCannotBeReset = 4
}
declare function cMsgResetStrangeGemCountResponse_EResetGemFromJSON(object: any): CMsgResetStrangeGemCountResponse_EResetGem;
declare function cMsgResetStrangeGemCountResponse_EResetGemToJSON(object: CMsgResetStrangeGemCountResponse_EResetGem): string;
interface CGCStorePurchaseInitLineItem {
    itemDefId: number;
    quantity: number;
    costInLocalCurrency: number;
    purchaseType: number;
    sourceReferenceId: string;
    priceIndex: number;
}
declare const CGCStorePurchaseInitLineItem: MessageFns$a<CGCStorePurchaseInitLineItem>;
interface CMsgGCStorePurchaseInit {
    country: string;
    language: number;
    currency: number;
    lineItems: CGCStorePurchaseInitLineItem[];
}
declare const CMsgGCStorePurchaseInit: MessageFns$a<CMsgGCStorePurchaseInit>;
interface CMsgGCStorePurchaseInitResponse {
    result: number;
    txnId: string;
}
declare const CMsgGCStorePurchaseInitResponse: MessageFns$a<CMsgGCStorePurchaseInitResponse>;
interface CMsgClientPingData {
    relayCodes: number[];
    relayPings: number[];
    regionCodes: number[];
    regionPings: number[];
    regionPingFailedBitmask: number;
}
declare const CMsgClientPingData: MessageFns$a<CMsgClientPingData>;
interface CMsgInviteToParty {
    steamId: string;
    clientVersion: number;
    teamId: number;
    asCoach: boolean;
    pingData: CMsgClientPingData | undefined;
}
declare const CMsgInviteToParty: MessageFns$a<CMsgInviteToParty>;
interface CMsgInviteToLobby {
    steamId: string;
    clientVersion: number;
}
declare const CMsgInviteToLobby: MessageFns$a<CMsgInviteToLobby>;
interface CMsgInvitationCreated {
    groupId: string;
    steamId: string;
    userOffline: boolean;
}
declare const CMsgInvitationCreated: MessageFns$a<CMsgInvitationCreated>;
interface CMsgPartyInviteResponse {
    partyId: string;
    accept: boolean;
    clientVersion: number;
    pingData: CMsgClientPingData | undefined;
}
declare const CMsgPartyInviteResponse: MessageFns$a<CMsgPartyInviteResponse>;
interface CMsgLobbyInviteResponse {
    lobbyId: string;
    accept: boolean;
    clientVersion: number;
    customGameCrc: string;
    customGameTimestamp: number;
}
declare const CMsgLobbyInviteResponse: MessageFns$a<CMsgLobbyInviteResponse>;
interface CMsgKickFromParty {
    steamId: string;
}
declare const CMsgKickFromParty: MessageFns$a<CMsgKickFromParty>;
interface CMsgLeaveParty {
}
declare const CMsgLeaveParty: MessageFns$a<CMsgLeaveParty>;
interface CMsgCustomGameInstallStatus {
    status: ECustomGameInstallStatus;
    message: string;
    latestTimestampFromSteam: number;
}
declare const CMsgCustomGameInstallStatus: MessageFns$a<CMsgCustomGameInstallStatus>;
interface CMsgServerAvailable {
    customGameInstallStatus: CMsgCustomGameInstallStatus | undefined;
}
declare const CMsgServerAvailable: MessageFns$a<CMsgServerAvailable>;
interface CMsgLANServerAvailable {
    lobbyId: string;
}
declare const CMsgLANServerAvailable: MessageFns$a<CMsgLANServerAvailable>;
interface CSOEconGameAccountClient {
    additionalBackpackSlots: number;
    trialAccount: boolean;
    eligibleForOnlinePlay: boolean;
    needToChooseMostHelpfulFriend: boolean;
    inCoachesList: boolean;
    tradeBanExpiration: number;
    duelBanExpiration: number;
    madeFirstPurchase: boolean;
}
declare const CSOEconGameAccountClient: MessageFns$a<CSOEconGameAccountClient>;
interface CMsgApplyStrangePart {
    strangePartItemId: string;
    itemItemId: string;
}
declare const CMsgApplyStrangePart: MessageFns$a<CMsgApplyStrangePart>;
interface CMsgApplyPennantUpgrade {
    upgradeItemId: string;
    pennantItemId: string;
}
declare const CMsgApplyPennantUpgrade: MessageFns$a<CMsgApplyPennantUpgrade>;
interface CMsgApplyEggEssence {
    essenceItemId: string;
    eggItemId: string;
}
declare const CMsgApplyEggEssence: MessageFns$a<CMsgApplyEggEssence>;
interface CSOEconItemAttribute {
    defIndex: number;
    value: number;
    valueBytes: Buffer;
}
declare const CSOEconItemAttribute: MessageFns$a<CSOEconItemAttribute>;
interface CSOEconItemEquipped {
    newClass: number;
    newSlot: number;
}
declare const CSOEconItemEquipped: MessageFns$a<CSOEconItemEquipped>;
interface CSOEconItem {
    id: string;
    accountId: number;
    inventory: number;
    defIndex: number;
    quantity: number;
    level: number;
    quality: number;
    flags: number;
    origin: number;
    attribute: CSOEconItemAttribute[];
    interiorItem: CSOEconItem | undefined;
    style: number;
    originalId: string;
    equippedState: CSOEconItemEquipped[];
}
declare const CSOEconItem: MessageFns$a<CSOEconItem>;
interface CMsgSortItems {
    sortType: number;
}
declare const CMsgSortItems: MessageFns$a<CMsgSortItems>;
interface CMsgItemAcknowledged {
    accountId: number;
    inventory: number;
    defIndex: number;
    quality: number;
    rarity: number;
    origin: number;
}
declare const CMsgItemAcknowledged: MessageFns$a<CMsgItemAcknowledged>;
interface CMsgSetItemPositions {
    itemPositions: CMsgSetItemPositions_ItemPosition[];
}
declare const CMsgSetItemPositions: MessageFns$a<CMsgSetItemPositions>;
interface CMsgSetItemPositions_ItemPosition {
    itemId: string;
    position: number;
}
declare const CMsgSetItemPositions_ItemPosition: MessageFns$a<CMsgSetItemPositions_ItemPosition>;
interface CMsgGCStorePurchaseCancel {
    txnId: string;
}
declare const CMsgGCStorePurchaseCancel: MessageFns$a<CMsgGCStorePurchaseCancel>;
interface CMsgGCStorePurchaseCancelResponse {
    result: number;
}
declare const CMsgGCStorePurchaseCancelResponse: MessageFns$a<CMsgGCStorePurchaseCancelResponse>;
interface CMsgGCStorePurchaseFinalize {
    txnId: string;
}
declare const CMsgGCStorePurchaseFinalize: MessageFns$a<CMsgGCStorePurchaseFinalize>;
interface CMsgGCStorePurchaseFinalizeResponse {
    result: number;
    itemIds: string[];
}
declare const CMsgGCStorePurchaseFinalizeResponse: MessageFns$a<CMsgGCStorePurchaseFinalizeResponse>;
interface CMsgGCToGCBannedWordListUpdated {
    groupId: number;
}
declare const CMsgGCToGCBannedWordListUpdated: MessageFns$a<CMsgGCToGCBannedWordListUpdated>;
interface CMsgGCToGCDirtySDOCache {
    sdoType: number;
    keyUint64: string;
}
declare const CMsgGCToGCDirtySDOCache: MessageFns$a<CMsgGCToGCDirtySDOCache>;
interface CMsgSDONoMemcached {
}
declare const CMsgSDONoMemcached: MessageFns$a<CMsgSDONoMemcached>;
interface CMsgGCToGCUpdateSQLKeyValue {
    keyName: string;
}
declare const CMsgGCToGCUpdateSQLKeyValue: MessageFns$a<CMsgGCToGCUpdateSQLKeyValue>;
interface CMsgGCServerVersionUpdated {
    serverVersion: number;
}
declare const CMsgGCServerVersionUpdated: MessageFns$a<CMsgGCServerVersionUpdated>;
interface CMsgGCClientVersionUpdated {
    clientVersion: number;
}
declare const CMsgGCClientVersionUpdated: MessageFns$a<CMsgGCClientVersionUpdated>;
interface CMsgGCToGCWebAPIAccountChanged {
}
declare const CMsgGCToGCWebAPIAccountChanged: MessageFns$a<CMsgGCToGCWebAPIAccountChanged>;
interface CMsgExtractGems {
    toolItemId: string;
    itemItemId: string;
    itemSocketId: number;
}
declare const CMsgExtractGems: MessageFns$a<CMsgExtractGems>;
interface CMsgExtractGemsResponse {
    itemId: string;
    response: CMsgExtractGemsResponse_EExtractGems;
}
declare const CMsgExtractGemsResponse: MessageFns$a<CMsgExtractGemsResponse>;
interface CMsgAddSocket {
    toolItemId: string;
    itemItemId: string;
    unusual: boolean;
}
declare const CMsgAddSocket: MessageFns$a<CMsgAddSocket>;
interface CMsgAddSocketResponse {
    itemId: string;
    updatedSocketIndex: number[];
    response: CMsgAddSocketResponse_EAddSocket;
}
declare const CMsgAddSocketResponse: MessageFns$a<CMsgAddSocketResponse>;
interface CMsgAddItemToSocketData {
    gemItemId: string;
    socketIndex: number;
}
declare const CMsgAddItemToSocketData: MessageFns$a<CMsgAddItemToSocketData>;
interface CMsgAddItemToSocket {
    itemItemId: string;
    gemsToSocket: CMsgAddItemToSocketData[];
}
declare const CMsgAddItemToSocket: MessageFns$a<CMsgAddItemToSocket>;
interface CMsgAddItemToSocketResponse {
    itemItemId: string;
    updatedSocketIndex: number[];
    response: CMsgAddItemToSocketResponse_EAddGem;
}
declare const CMsgAddItemToSocketResponse: MessageFns$a<CMsgAddItemToSocketResponse>;
interface CMsgResetStrangeGemCount {
    itemItemId: string;
    socketIndex: number;
}
declare const CMsgResetStrangeGemCount: MessageFns$a<CMsgResetStrangeGemCount>;
interface CMsgResetStrangeGemCountResponse {
    response: CMsgResetStrangeGemCountResponse_EResetGem;
}
declare const CMsgResetStrangeGemCountResponse: MessageFns$a<CMsgResetStrangeGemCountResponse>;
interface CMsgGCToClientPollFileRequest {
    fileName: string;
    clientVersion: number;
    pollId: number;
}
declare const CMsgGCToClientPollFileRequest: MessageFns$a<CMsgGCToClientPollFileRequest>;
interface CMsgGCToClientPollFileResponse {
    pollId: number;
    fileSize: number;
    fileCrc: number;
}
declare const CMsgGCToClientPollFileResponse: MessageFns$a<CMsgGCToClientPollFileResponse>;
interface CMsgGCToGCPerformManualOp {
    opId: string;
    groupCode: number;
}
declare const CMsgGCToGCPerformManualOp: MessageFns$a<CMsgGCToGCPerformManualOp>;
interface CMsgGCToGCPerformManualOpCompleted {
    success: boolean;
    sourceGc: number;
}
declare const CMsgGCToGCPerformManualOpCompleted: MessageFns$a<CMsgGCToGCPerformManualOpCompleted>;
interface CMsgGCToGCReloadServerRegionSettings {
}
declare const CMsgGCToGCReloadServerRegionSettings: MessageFns$a<CMsgGCToGCReloadServerRegionSettings>;
interface CMsgGCAdditionalWelcomeMsgList {
    welcomeMessages: CExtraMsgBlock[];
}
declare const CMsgGCAdditionalWelcomeMsgList: MessageFns$a<CMsgGCAdditionalWelcomeMsgList>;
interface CMsgApplyRemoteConVars {
    conVars: CMsgApplyRemoteConVars_ConVar[];
}
declare const CMsgApplyRemoteConVars: MessageFns$a<CMsgApplyRemoteConVars>;
interface CMsgApplyRemoteConVars_ConVar {
    name: string;
    value: string;
    versionMin: number;
    versionMax: number;
    platform: EGCPlatform;
}
declare const CMsgApplyRemoteConVars_ConVar: MessageFns$a<CMsgApplyRemoteConVars_ConVar>;
interface CMsgGCToClientApplyRemoteConVars {
    msg: CMsgApplyRemoteConVars | undefined;
}
declare const CMsgGCToClientApplyRemoteConVars: MessageFns$a<CMsgGCToClientApplyRemoteConVars>;
interface CMsgGCToServerApplyRemoteConVars {
    msg: CMsgApplyRemoteConVars | undefined;
}
declare const CMsgGCToServerApplyRemoteConVars: MessageFns$a<CMsgGCToServerApplyRemoteConVars>;
interface CMsgClientToGCIntegrityStatus {
    report: string;
    secureAllowed: boolean;
    diagnostics: CMsgClientToGCIntegrityStatus_keyvalue[];
}
declare const CMsgClientToGCIntegrityStatus: MessageFns$a<CMsgClientToGCIntegrityStatus>;
interface CMsgClientToGCIntegrityStatus_keyvalue {
    id: number;
    extended: number;
    value: string;
    stringValue: string;
}
declare const CMsgClientToGCIntegrityStatus_keyvalue: MessageFns$a<CMsgClientToGCIntegrityStatus_keyvalue>;
interface CMsgClientToGCAggregateMetrics {
    metrics: CMsgClientToGCAggregateMetrics_SingleMetric[];
}
declare const CMsgClientToGCAggregateMetrics: MessageFns$a<CMsgClientToGCAggregateMetrics>;
interface CMsgClientToGCAggregateMetrics_SingleMetric {
    metricName: string;
    metricCount: number;
}
declare const CMsgClientToGCAggregateMetrics_SingleMetric: MessageFns$a<CMsgClientToGCAggregateMetrics_SingleMetric>;
interface CMsgGCToClientAggregateMetricsBackoff {
    uploadRateModifier: number;
}
declare const CMsgGCToClientAggregateMetricsBackoff: MessageFns$a<CMsgGCToClientAggregateMetricsBackoff>;
interface CMsgGCToServerSteamLearnAccessTokensChanged {
    accessTokens: CMsgSteamLearnAccessTokens | undefined;
}
declare const CMsgGCToServerSteamLearnAccessTokensChanged: MessageFns$a<CMsgGCToServerSteamLearnAccessTokensChanged>;
interface CMsgGCToServerSteamLearnUseHTTP {
    useHttp: boolean;
}
declare const CMsgGCToServerSteamLearnUseHTTP: MessageFns$a<CMsgGCToServerSteamLearnUseHTTP>;
type Builtin$a = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$a<T> = T extends Builtin$a ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$a<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$a<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$a<T[K]>;
} : Partial<T>;
interface MessageFns$a<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$a<T>): T;
    fromPartial(object: DeepPartial$a<T>): T;
}

declare enum ELaneSelection {
    k_ELaneSelection_SAFELANE = 0,
    k_ELaneSelection_OFFLANE = 1,
    k_ELaneSelection_MIDLANE = 2,
    k_ELaneSelection_SUPPORT = 3,
    k_ELaneSelection_HARDSUPPORT = 4
}
declare function eLaneSelectionFromJSON(object: any): ELaneSelection;
declare function eLaneSelectionToJSON(object: ELaneSelection): string;
declare enum ELaneSelectionFlags {
    k_ELaneSelectionFlags_SAFELANE = 1,
    k_ELaneSelectionFlags_OFFLANE = 2,
    k_ELaneSelectionFlags_MIDLANE = 4,
    k_ELaneSelectionFlags_SUPPORT = 8,
    k_ELaneSelectionFlags_HARDSUPPORT = 16,
    k_ELaneSelectionFlagGroup_None = 0,
    k_ELaneSelectionFlagGroup_CORE = 7,
    k_ELaneSelectionFlagGroup_SUPPORT = 24,
    k_ELaneSelectionFlagGroup_ALL = 31
}
declare function eLaneSelectionFlagsFromJSON(object: any): ELaneSelectionFlags;
declare function eLaneSelectionFlagsToJSON(object: ELaneSelectionFlags): string;
declare enum EPartyMatchmakingFlags {
    k_EPartyMatchmakingFlags_None = 0,
    k_EPartyMatchmakingFlags_LargeRankSpread = 1
}
declare function ePartyMatchmakingFlagsFromJSON(object: any): EPartyMatchmakingFlags;
declare function ePartyMatchmakingFlagsToJSON(object: EPartyMatchmakingFlags): string;
declare enum EHighPriorityMMState {
    k_EHighPriorityMM_Unknown = 0,
    k_EHighPriorityMM_MissingMMData = 1,
    k_EHighPriorityMM_ResourceMissing = 2,
    k_EHighPriorityMM_ManuallyDisabled = 3,
    k_EHighPriorityMM_Min_Enabled = 64,
    k_EHighPriorityMM_AllRolesSelected = 65,
    k_EHighPriorityMM_UsingResource = 66,
    k_EHighPriorityMM_FiveStack = 67,
    k_EHighPriorityMM_HighDemand = 68
}
declare function eHighPriorityMMStateFromJSON(object: any): EHighPriorityMMState;
declare function eHighPriorityMMStateToJSON(object: EHighPriorityMMState): string;
declare enum EReadyCheckStatus {
    k_EReadyCheckStatus_Unknown = 0,
    k_EReadyCheckStatus_NotReady = 1,
    k_EReadyCheckStatus_Ready = 2
}
declare function eReadyCheckStatusFromJSON(object: any): EReadyCheckStatus;
declare function eReadyCheckStatusToJSON(object: EReadyCheckStatus): string;
declare enum EReadyCheckRequestResult {
    k_EReadyCheckRequestResult_Success = 0,
    k_EReadyCheckRequestResult_AlreadyInProgress = 1,
    k_EReadyCheckRequestResult_NotInParty = 2,
    k_EReadyCheckRequestResult_SendError = 3,
    k_EReadyCheckRequestResult_UnknownError = 4
}
declare function eReadyCheckRequestResultFromJSON(object: any): EReadyCheckRequestResult;
declare function eReadyCheckRequestResultToJSON(object: EReadyCheckRequestResult): string;
declare enum EMatchBehaviorScoreVariance {
    k_EMatchBehaviorScoreVariance_Invalid = 0,
    k_EMatchBehaviorScoreVariance_Low = 1,
    k_EMatchBehaviorScoreVariance_Medium = 2,
    k_EMatchBehaviorScoreVariance_High = 3
}
declare function eMatchBehaviorScoreVarianceFromJSON(object: any): EMatchBehaviorScoreVariance;
declare function eMatchBehaviorScoreVarianceToJSON(object: EMatchBehaviorScoreVariance): string;
declare enum CSODOTAParty_State {
    UI = 0,
    FINDING_MATCH = 1,
    IN_MATCH = 2
}
declare function cSODOTAParty_StateFromJSON(object: any): CSODOTAParty_State;
declare function cSODOTAParty_StateToJSON(object: CSODOTAParty_State): string;
declare enum CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType {
    kills = 1,
    deaths = 2,
    assists = 3,
    net_worth = 5,
    item_value = 6,
    support_gold_spent = 7,
    wards_placed = 8,
    dewards = 9,
    camps_stacked = 10,
    last_hits = 11,
    denies = 12,
    kKillEaterEvent_Killing_Sprees = 13,
    kKillEaterEvent_Godlike = 14,
    kKillEaterEvent_Towers_Destroyed = 15,
    kKillEaterEventType_Invoker_SunstrikeKills = 16,
    kKillEaterEventType_Axe_Culls = 17,
    kKillEaterEventType_Axe_BattleHungerKills = 18,
    kKillEaterEventType_LowHealthKills = 19,
    kKillEaterEventType_Invoker_TornadoKills = 20,
    kKillEaterEventType_Sven_DoubleStuns = 21,
    kKillEaterEventType_Sven_WarcryAssists = 22,
    kKillEaterEventType_Sven_CleaveDoubleKills = 23,
    kKillEaterEventType_Sven_TeleportInterrupts = 24,
    kKillEaterEventType_Faceless_MultiChrono = 25,
    kKillEaterEventType_Faceless_ChronoKills = 26,
    kKillEaterEventType_Ursa_MultiShocks = 27,
    kKillEaterEventType_RoshanKills = 28,
    kKillEaterEventType_Lion_FingerKills = 29,
    kKillEaterEventType_Riki_SmokedHeroKills = 32,
    kKillEaterEventType_HeroesRevealedWithDust = 33,
    kKillEaterEventType_SkeletonKing_ReincarnationKills = 34,
    kKillEaterEventType_Skywrath_FlareKills = 35,
    kKillEaterEventType_Leshrac_SplitEarthStuns = 36,
    kKillEaterEventType_Mirana_MaxStunArrows = 37,
    kKillEaterEventType_PhantomAssassin_CoupdeGraceCrits = 38,
    kKillEaterEventType_PhantomAssassin_DaggerCrits = 39,
    kKillEaterEventType_Meepo_Earthbinds = 40,
    kKillEaterEventType_Bloodseeker_RuptureKills = 41,
    kKillEaterEventType_Slark_LeashedEnemies = 42,
    kKillEaterEventType_Disruptor_FountainGlimpses = 43,
    kKillEaterEventType_Rubick_SpellsStolen = 44,
    kKillEaterEventType_Rubick_UltimatesStolen = 45,
    kKillEaterEventType_Doom_EnemiesDoomed = 46,
    kKillEaterEventType_Omniknight_Purifications = 47,
    kKillEaterEventType_Omniknight_AlliesRepelled = 48,
    kKillEaterEventType_Omniknight_EnemiesRepelled = 49,
    kKillEaterEventType_Warlock_FiveHeroFatalBonds = 50,
    kKillEaterEventType_CrystalMaiden_FrostbittenEnemies = 51,
    kKillEaterEventType_CrystalMaiden_CrystalNovas = 52,
    kKillEaterEventType_Kunkka_DoubleHeroTorrents = 53,
    kKillEaterEventType_Kunkka_TripleHeroGhostShips = 54,
    kKillEaterEventType_NagaSiren_EnemiesEnsnared = 55,
    kKillEaterEventType_NagaSiren_TripleHeroRipTides = 56,
    kKillEaterEventType_Lycan_KillsDuringShapeshift = 57,
    kKillEaterEventType_Pudge_DismemberKills = 58,
    kKillEaterEventType_Pudge_EnemyHeroesHooked = 59,
    kKillEaterEventType_Pudge_HookKills = 60,
    kKillEaterEventType_Pudge_UnseenEnemyHeroesHooked = 61,
    kKillEaterEventType_DrowRanger_EnemiesSilenced = 62,
    kKillEaterEventType_DrowRanger_MultiHeroSilences = 63,
    kKillEaterEventType_DrowRanger_SilencedKills = 64,
    kKillEaterEventType_DrowRanger_FrostArrowKills = 65,
    kKillEaterEventType_DragonKnight_KillsInDragonForm = 66,
    kKillEaterEventType_DragonKnight_BreatheFireKills = 67,
    kKillEaterEventType_DragonKnight_SplashKills = 68,
    kKillEaterEventType_WitchDoctor_CaskStuns = 69,
    kKillEaterEventType_WitchDoctor_MaledictKills = 70,
    kKillEaterEventType_WitchDoctor_MultiHeroMaledicts = 71,
    kKillEaterEventType_WitchDoctor_DeathWardKills = 72,
    kKillEaterEventType_Disruptor_ThunderStrikeKills = 73,
    kKillEaterEventType_Disruptor_HeroesGlimpsed = 74,
    kKillEaterEventType_CrystalMaiden_FreezingFieldKills = 75,
    kKillEaterEventType_Medusa_EnemiesPetrified = 77,
    kKillEaterEventType_Warlock_FatalBondsKills = 78,
    kKillEaterEventType_Warlock_GolemKills = 79,
    kKillEaterEventType_Tusk_WalrusPunches = 80,
    kKillEaterEventType_Tusk_SnowballStuns = 81,
    kKillEaterEventType_Earthshaker_FissureStuns = 82,
    kKillEaterEventType_Earthshaker_3HeroEchoslams = 83,
    kKillEaterEventType_SandKing_BurrowstrikeStuns = 84,
    kKillEaterEventType_SandKing_EpicenterKills = 85,
    kKillEaterEventType_SkywrathMage_AncientSealKills = 86,
    kKillEaterEventType_SkywrathMage_ConcussiveShotKills = 87,
    kKillEaterEventType_Luna_LucentBeamKills = 88,
    kKillEaterEventType_Luna_EclipseKills = 89,
    kKillEaterEventType_KeeperOfTheLight_IlluminateKills = 90,
    kKillEaterEventType_KeeperOfTheLight_ManaLeakStuns = 91,
    kKillEaterEventType_KeeperOfTheLight_TeammatesRecalled = 92,
    kKillEaterEventType_LegionCommander_DuelsWon = 93,
    kKillEaterEventType_Beastmaster_RoarKills = 94,
    kKillEaterEventType_Beastmaster_RoarMultiKills = 95,
    kKillEaterEventType_Windrunner_FocusFireBuildings = 96,
    kKillEaterEventType_Windrunner_PowershotKills = 97,
    kKillEaterEventType_PhantomAssassin_DaggerLastHits = 98,
    kKillEaterEventType_PhantomAssassin_PhantomStrikeKills = 99,
    kKillEaterEventType_DeathProphet_CryptSwarmKills = 100,
    kKillEaterEventType_DeathProphet_ExorcismBuildingKills = 101,
    kKillEaterEventType_DeathProphet_ExorcismSpiritsSummoned = 102,
    kKillEaterEventType_DeathProphet_MultiHeroSilences = 103,
    kKillEaterEventType_Abaddon_MistCoilKills = 104,
    kKillEaterEventType_Abaddon_MistCoilHealed = 105,
    kKillEaterEventType_Abaddon_AphoticShieldKills = 106,
    kKillEaterEventType_Lich_ChainFrostTripleKills = 107,
    kKillEaterEventType_Lich_ChainFrostMultiKills = 108,
    kKillEaterEventType_Lich_ChainFrostBounces = 109,
    kKillEaterEventType_Ursa_EnragedKills = 110,
    kKillEaterEventType_Ursa_EarthshockKills = 111,
    kKillEaterEventType_Lina_LagunaBladeKills = 112,
    kKillEaterEventType_Lina_DragonSlaveKills = 113,
    kKillEaterEventType_Lina_LightStrikeArrayStuns = 114,
    kKillEaterEvent_Barracks_Destroyed = 115,
    kKillEaterEvent_TemplarAssassin_MeldKills = 116,
    kKillEaterEvent_TemplarAssassin_HeroesSlowed = 117,
    kKillEaterEvent_Sniper_AssassinationKills = 118,
    kKillEaterEvent_Sniper_HeadshotStuns = 119,
    kKillEaterEvent_EarthSpirit_SmashStuns = 120,
    kKillEaterEvent_EarthSpirit_GripSilences = 121,
    kKillEaterEvent_ShadowShaman_ShackleKills = 122,
    kKillEaterEvent_ShadowShaman_HexKills = 123,
    kKillEaterEvent_Centaur_EnemiesStomped = 124,
    kKillEaterEvent_Centaur_DoubleEdgeKills = 125,
    kKillEaterEvent_Centaur_ReturnKills = 126,
    kKillEaterEvent_EmberSpirit_EnemiesChained = 127,
    kKillEaterEvent_EmberSpirit_SleightOfFistMultiKills = 128,
    kKillEaterEvent_Puck_OrbKills = 129,
    kKillEaterEvent_VengefulSpirit_EnemiesStunned = 130,
    kKillEaterEvent_Lifestealer_RageKills = 131,
    kKillEaterEvent_Lifestealer_OpenWoundsKills = 132,
    kKillEaterEvent_Lifestealer_InfestKills = 133,
    kKillEaterEvent_ElderTitan_SpiritKills = 134,
    kKillEaterEvent_ElderTitan_GoodStomps = 135,
    kKillEaterEvent_Clockwerk_RocketKills = 136,
    kKillEaterEvent_Clockwerk_BlindRocketKills = 137,
    kKillEaterEvent_StormSpirit_BallKills = 138,
    kKillEaterEvent_StormSpirit_DoubleRemnantKills = 139,
    kKillEaterEvent_StormSpirit_VortexKills = 140,
    kKillEaterEvent_Tinker_DoubleMissileKills = 141,
    kKillEaterEvent_Tinker_LaserKills = 142,
    kKillEaterEvent_Techies_SuicideKills = 143,
    kKillEaterEvent_Techies_LandMineKills = 144,
    kKillEaterEvent_Techies_StatisTrapStuns = 145,
    kKillEaterEvent_Techies_RemoteMineKills = 146,
    kKillEaterEvent_ShadowFiend_TripleRazeKills = 147,
    kKillEaterEvent_ShadowFiend_RequiemMultiKills = 148,
    kKillEaterEvent_ShadowFiend_QRazeKills = 149,
    kKillEaterEvent_ShadowFiend_WRazeKills = 150,
    kKillEaterEvent_ShadowFiend_ERazeKills = 151,
    kKillEaterEvent_Oracle_FatesEdictKills = 152,
    kKillEaterEvent_Oracle_FalsePromiseSaves = 153,
    kKillEaterEvent_Juggernaut_OmnislashKills = 154,
    kKillEaterEventType_SkeletonKing_SkeletonHeroKills = 157,
    kKillEaterEventType_DarkWillow_CursedCrownTripleStuns = 158,
    kKillEaterEventType_Dazzle_ShallowGraveSaves = 159,
    kKillEaterEventType_Dazzle_PoisonTouchKills = 160,
    kKillEaterEventType_ThreeManMeks = 161,
    kKillEaterEventType_Viper_PoisonAttackKills = 162,
    kKillEaterEventType_Viper_CorrosiveSkinKills = 163,
    kKillEaterEventType_ThreeHeroVeils = 164,
    kKillEaterEventType_Viper_KillsDuringViperStrike = 165,
    kKillEaterEventType_SolarCrestKills = 166,
    kKillEaterEventType_Tiny_TreeThrowKills = 167,
    kKillEaterEventType_Riki_BackstabKills = 168,
    kKillEaterEventType_Phoenix_ThreeHeroSupernovaStuns = 169,
    kKillEaterEventType_Terrorblade_MetamorphosisKills = 170,
    kKillEaterEventType_Lion_GreatFingerKills = 171,
    kKillEaterEventType_Antimage_SpellsBlockedWithAghanims = 172,
    kKillEaterEventType_Antimage_ThreeManManaVoids = 173,
    kKillEaterEventType_ArcWarden_TempestDoubleKills = 174,
    kKillEaterEventType_ArcWarden_SparkWraithKills = 175,
    kKillEaterEventType_Bane_BrainSapKills = 176,
    kKillEaterEventType_Bane_FiendsGripKills = 177,
    kKillEaterEventType_Batrider_TripleHeroFlamebreaks = 178,
    kKillEaterEventType_Batrider_DoubleHeroLassoes = 179,
    kKillEaterEventType_Brewmaster_KillsDuringPrimalSplit = 180,
    kKillEaterEventType_Bristleback_KillsUnderFourQuillStacks = 181,
    kKillEaterEventType_Bristleback_TripleHeroNasalGoo = 182,
    kKillEaterEventType_Broodmother_SpiderlingHeroKills = 183,
    kKillEaterEventType_Broodmother_KillsInsideWeb = 184,
    kKillEaterEventType_Centaur_ThreeHeroStampede = 185,
    kKillEaterEventType_ChaosKnight_RealityRiftKills = 186,
    kKillEaterEventType_Chen_KillsWithPenitence = 187,
    kKillEaterEventType_CrystalMaiden_TwoHeroCrystalNovas = 188,
    kKillEaterEventType_CrystalMaiden_ThreeHeroFreezingFields = 189,
    kKillEaterEventType_Dazzle_ShadowWaveKills = 190,
    kKillEaterEventType_DeathProphet_SiphonKills = 191,
    kKillEaterEventType_DeathProphet_ExorcismKillsDuringEuls = 192,
    kKillEaterEventType_Disruptor_ThreeHeroKineticFieldStaticStorm = 193,
    kKillEaterEventType_Doom_InfernalBladeBurnKills = 194,
    kKillEaterEventType_DrowRanger_PrecisionAuraCreepTowerKills = 195,
    kKillEaterEventType_EmberSpirit_RemnantKills = 196,
    kKillEaterEventType_EmberSpirit_SleightOfFistKills = 197,
    kKillEaterEventType_Enigma_MidnightPulseBlackHoleCombos = 198,
    kKillEaterEventType_Enigma_ThreeManBlackHoles = 199,
    kKillEaterEventType_FacelessVoid_MultiHeroTimeDilation = 200,
    kKillEaterEventType_Gyrocopter_ThreeHeroFlakCannon = 201,
    kKillEaterEventType_Gyrocopter_HomingMissileKills = 202,
    kKillEaterEventType_Gyrocopter_RocketBarrageKills = 203,
    kKillEaterEventType_Huskar_KillsDuringLifeBreak = 204,
    kKillEaterEventType_Huskar_BurningSpearKills = 205,
    kKillEaterEventType_Invoker_MultiHeroIceWall = 206,
    kKillEaterEventType_Invoker_ThreeHeroEMP = 207,
    kKillEaterEventType_Invoker_ThreeHeroDeafeningBlast = 208,
    kKillEaterEventType_Invoker_MultiHeroChaosMeteor = 209,
    kKillEaterEventType_Jakiro_MultiHeroDualBreath = 210,
    kKillEaterEventType_Jakiro_IcePathMacropyreCombos = 211,
    kKillEaterEventType_Leshrac_PulseNovaKills = 212,
    kKillEaterEventType_Leshrac_ThreeHeroLightningStorm = 213,
    kKillEaterEventType_Lion_ThreeHeroFingerOfDeath = 214,
    kKillEaterEventType_Meepo_PoofKills = 215,
    kKillEaterEventType_Meepo_MultiHeroEarthbinds = 216,
    kKillEaterEventType_NightStalker_NighttimeKills = 217,
    kKillEaterEventType_Morphling_KillsDuringReplicate = 218,
    kKillEaterEventType_OgreMagi_FireblastKills = 219,
    kKillEaterEventType_OgreMagi_IgniteKills = 220,
    kKillEaterEventType_DominatingKillStreaks = 221,
    kKillEaterEventType_MegaKillStreaks = 222,
    kKillEaterEventType_Alchemist_AghanimsGiven = 223,
    kKillEaterEventType_VeilsLeadingToKills = 224,
    kKillEaterEventType_DustLeadingToKills = 225,
    kKillEaterEventType_WitchDoctor_MultiHeroCaskStuns = 226,
    kKillEaterEventType_Weaver_ShukuchiKills = 227,
    kKillEaterEventType_Windrunner_ShackleFocusFireKills = 228,
    kKillEaterEventType_VengefulSpirit_VengeanceAuraIllusionKills = 229,
    kKillEaterEventType_Tusk_WalrusPunchKills = 230,
    kKillEaterEventType_Tinker_MultiHeroLasers = 231,
    kKillEaterEventType_TemplarAssassin_MultiHeroPsiBlades = 232,
    kKillEaterEventType_Sven_KillsDuringGodsStrength = 233,
    kKillEaterEventType_Sniper_ThreeHeroShrapnels = 234,
    kKillEaterEventType_Slark_KillsDuringShadowDance = 235,
    kKillEaterEventType_ShadowShaman_MultiHeroEtherShocks = 236,
    kKillEaterEventType_ShadowShaman_SerpentWardShackleKills = 237,
    kKillEaterEventType_Riki_ThreeHeroTricksOfTheTrade = 238,
    kKillEaterEventType_Razor_EyeOfTheStormKills = 239,
    kKillEaterEventType_Pugna_LifeDrainKills = 240,
    kKillEaterEventType_ObsidianDestroyer_SanitysEclipseKills = 241,
    kKillEaterEventType_Oracle_MultiHeroFortunesEnd = 242,
    kKillEaterEventType_Omniknight_PurificationKills = 243,
    kKillEaterEventType_NightStalker_EnemyMissesUnderCripplingFear = 244,
    kKillEaterEventType_Warlock_ThreeHeroFatalBonds = 245,
    kKillEaterEventType_Riki_TricksOfTheTradeKills = 246,
    kKillEaterEventType_Earthshaker_AftershockHits10 = 247,
    kKillEaterEventType_Earthshaker_5HeroEchoslams = 248,
    kKillEaterEventType_Lina_LagunaBladeHeroKills = 249,
    kKillEaterEventType_Lina_LightStrikeHeroStuns = 250,
    kKillEaterEventType_Earthshaker_FissureMultiStuns = 251,
    kKillEaterEventType_Earthshaker_TotemKills = 252,
    kKillEaterEventType_Pangolier_SwashbuckleKills = 253,
    kKillEaterEventType_Furion_EnemyHeroesTrapped = 254,
    kKillEaterEventType_Pangolier_HeartpiercerKills = 255,
    kKillEaterEventType_Medusa_MultiHeroStoneGaze = 256,
    kKillEaterEventType_Medusa_SplitShotKills = 257,
    kKillEaterEventType_Mirana_MultiHeroStarstorm = 258,
    kKillEaterEventType_Mirana_KillsFromMoonlightShadow = 259,
    kKillEaterEventType_Magnus_MultiHeroSkewers = 260,
    kKillEaterEventType_Magnus_MultiHeroReversePolarity = 261,
    kKillEaterEventType_Magnus_HeroesSlowedWithShockwave = 262,
    kKillEaterEventType_NagaSiren_MultiHeroSong = 263,
    kKillEaterEventType_NagaSiren_AlliesHealedBySong = 264,
    kKillEaterEventType_LoneDruid_MultiHeroRoar = 265,
    kKillEaterEventType_LoneDruid_BattleCryKills = 266,
    kKillEaterEventType_WinterWyvern_ThreeHeroCurses = 267,
    kKillEaterEventType_Antimage_SpellsBlockedWithCounterspell = 268,
    kKillEaterEventType_Mars_EnemiesKilledInArena = 269,
    kKillEaterEventType_Mars_MultiHeroGodsRebuke = 270,
    kKillEaterEventType_Mars_GodsRebukeKills = 271,
    kKillEaterEventType_Snapfire_LizardBlobsKills = 272,
    kKillEaterEventType_Snapfire_TwoHeroCookieStuns = 273,
    Custom_KillStreak = 274,
    kKillEaterEventType_Muerta_DeadShotKills = 275,
    kKillEaterEventType_Muerta_PierceTheVeilKills = 276,
    kKillEaterEventType_Muerta_MultiHeroDeadShot = 277,
    kKillEaterEventType_Muerta_DeadShotsIntoTheCalling = 278,
    kKillEaterEventType_Ringmaster_LongRangeDaggerHits = 279,
    kKillEaterEventType_Ringmaster_MultiHeroWhips = 280,
    kKillEaterEventType_Ringmaster_MultiHeroMesmerizes = 281,
    kKillEaterEventType_Kez_ParryCounterAttacks = 282,
    kKillEaterEventType_Kez_RavensVeilKills = 283,
    kKillEaterEventType_Kez_RaptorDanceHealing = 284,
    kKillEaterEventType_Kez_KillsDuringFalconRush = 285,
    kKillEaterEventType_Seasonal_PartyHatsStolen = 286,
    kKillEaterEventType_Seasonal_TallestHat = 287
}
declare function cMvpData_MvpDatum_MvpAccolade_MvpAccoladeTypeFromJSON(object: any): CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
declare function cMvpData_MvpDatum_MvpAccolade_MvpAccoladeTypeToJSON(object: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType): string;
interface CSODOTAPartyMember {
    isCoach: boolean;
    regionPingCodes: number[];
    regionPingTimes: number[];
    regionPingFailedBitmask: number;
    isPlusSubscriber: boolean;
    tourneySkillLevel: number;
    tourneyBuyin: number;
    tourneyPreventUntil: number;
    mmDataValid: boolean;
    laneSelectionFlags: number;
    highPriorityDisabled: boolean;
    hasHpResource: boolean;
    joinedFromPartyfinder: boolean;
    isSteamChina: boolean;
    bannedHeroIds: number[];
}
declare const CSODOTAPartyMember: MessageFns$9<CSODOTAPartyMember>;
interface CSODOTAParty {
    partyId: string;
    leaderId: string;
    memberIds: string[];
    gameModes: number;
    state: CSODOTAParty_State;
    effectiveStartedMatchmakingTime: number;
    rawStartedMatchmakingTime: number;
    attemptStartTime: number;
    attemptNum: number;
    matchgroups: number;
    lowPriorityAccountId: number;
    matchType: MatchType;
    teamId: number;
    teamName: string;
    teamUiLogo: string;
    teamBaseLogo: string;
    matchDisabledUntilDate: number;
    matchDisabledAccountId: number;
    matchmakingMaxRangeMinutes: number;
    matchlanguages: number;
    members: CSODOTAPartyMember[];
    lowPriorityGamesRemaining: number;
    openForJoinRequests: boolean;
    sentInvites: CSODOTAPartyInvite[];
    recvInvites: CSODOTAPartyInvite[];
    accountFlags: number;
    regionSelectFlags: number;
    exclusiveTournamentId: number;
    tourneyDivisionId: number;
    tourneyScheduleTime: number;
    tourneySkillLevel: number;
    tourneyBracketRound: number;
    tourneyQueueDeadlineTime: number;
    tourneyQueueDeadlineState: ETourneyQueueDeadlineState;
    partyBuilderSlotsToFill: number;
    partyBuilderMatchGroups: number;
    partyBuilderStartTime: number;
    soloQueue: boolean;
    steamClanAccountId: number;
    readyCheck: CMsgReadyCheckStatus | undefined;
    customGameDisabledUntilDate: number;
    customGameDisabledAccountId: number;
    isChallengeMatch: boolean;
    partySearchBeaconActive: boolean;
    matchmakingFlags: number;
    highPriorityState: EHighPriorityMMState;
    laneSelectionsEnabled: boolean;
    customGameDifficultyMask: number;
    isSteamChina: boolean;
    botDifficultyMask: number;
    botScriptIndexMask: number;
    restrictedFromRanked: boolean;
    restrictedFromRankedAccountId: number;
    rankSpreadLikertScale: number;
    behaviorScoreLikertScale: number;
}
declare const CSODOTAParty: MessageFns$9<CSODOTAParty>;
interface CSODOTAPartyInvite {
    groupId: string;
    senderId: string;
    senderName: string;
    members: CSODOTAPartyInvite_PartyMember[];
    teamId: number;
    lowPriorityStatus: boolean;
    asCoach: boolean;
    inviteGid: string;
}
declare const CSODOTAPartyInvite: MessageFns$9<CSODOTAPartyInvite>;
interface CSODOTAPartyInvite_PartyMember {
    name: string;
    steamId: string;
    isCoach: boolean;
}
declare const CSODOTAPartyInvite_PartyMember: MessageFns$9<CSODOTAPartyInvite_PartyMember>;
interface CMsgLeaverState {
    lobbyState: number;
    gameState: DOTAGameState;
    leaverDetected: boolean;
    firstBloodHappened: boolean;
    discardMatchResults: boolean;
    massDisconnect: boolean;
}
declare const CMsgLeaverState: MessageFns$9<CMsgLeaverState>;
interface CMsgReadyCheckStatus {
    startTimestamp: number;
    finishTimestamp: number;
    initiatorAccountId: number;
    readyMembers: CMsgReadyCheckStatus_ReadyMember[];
}
declare const CMsgReadyCheckStatus: MessageFns$9<CMsgReadyCheckStatus>;
interface CMsgReadyCheckStatus_ReadyMember {
    accountId: number;
    readyStatus: EReadyCheckStatus;
}
declare const CMsgReadyCheckStatus_ReadyMember: MessageFns$9<CMsgReadyCheckStatus_ReadyMember>;
interface CMsgPartyReadyCheckRequest {
}
declare const CMsgPartyReadyCheckRequest: MessageFns$9<CMsgPartyReadyCheckRequest>;
interface CMsgPartyReadyCheckResponse {
    result: EReadyCheckRequestResult;
}
declare const CMsgPartyReadyCheckResponse: MessageFns$9<CMsgPartyReadyCheckResponse>;
interface CMsgPartyReadyCheckAcknowledge {
    readyStatus: EReadyCheckStatus;
}
declare const CMsgPartyReadyCheckAcknowledge: MessageFns$9<CMsgPartyReadyCheckAcknowledge>;
interface CMsgLobbyEventGameDetails {
    kvData: Buffer;
}
declare const CMsgLobbyEventGameDetails: MessageFns$9<CMsgLobbyEventGameDetails>;
interface CMsgMatchMatchmakingStats {
    averageQueueTime: number;
    maximumQueueTime: number;
    behaviorScoreVariance: EMatchBehaviorScoreVariance;
}
declare const CMsgMatchMatchmakingStats: MessageFns$9<CMsgMatchMatchmakingStats>;
interface CMvpData {
    mvps: CMvpData_MvpDatum[];
    eventMvps: CMvpData_MvpDatum[];
}
declare const CMvpData: MessageFns$9<CMvpData>;
interface CMvpData_MvpDatum {
    playerSlot: number;
    accolades: CMvpData_MvpDatum_MvpAccolade[];
}
declare const CMvpData_MvpDatum: MessageFns$9<CMvpData_MvpDatum>;
interface CMvpData_MvpDatum_MvpAccolade {
    type: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
    detailValue: number;
}
declare const CMvpData_MvpDatum_MvpAccolade: MessageFns$9<CMvpData_MvpDatum_MvpAccolade>;
type Builtin$9 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$9<T> = T extends Builtin$9 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$9<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$9<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$9<T[K]>;
} : Partial<T>;
interface MessageFns$9<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$9<T>): T;
    fromPartial(object: DeepPartial$9<T>): T;
}

declare enum ELobbyMemberCoachRequestState {
    k_eLobbyMemberCoachRequestState_None = 0,
    k_eLobbyMemberCoachRequestState_Accepted = 1,
    k_eLobbyMemberCoachRequestState_Rejected = 2
}
declare function eLobbyMemberCoachRequestStateFromJSON(object: any): ELobbyMemberCoachRequestState;
declare function eLobbyMemberCoachRequestStateToJSON(object: ELobbyMemberCoachRequestState): string;
declare enum LobbyDotaTVDelay {
    LobbyDotaTV_10 = 0,
    LobbyDotaTV_120 = 1,
    LobbyDotaTV_300 = 2,
    LobbyDotaTV_900 = 3
}
declare function lobbyDotaTVDelayFromJSON(object: any): LobbyDotaTVDelay;
declare function lobbyDotaTVDelayToJSON(object: LobbyDotaTVDelay): string;
declare enum LobbyDotaPauseSetting {
    LobbyDotaPauseSetting_Unlimited = 0,
    LobbyDotaPauseSetting_Limited = 1,
    LobbyDotaPauseSetting_Disabled = 2
}
declare function lobbyDotaPauseSettingFromJSON(object: any): LobbyDotaPauseSetting;
declare function lobbyDotaPauseSettingToJSON(object: LobbyDotaPauseSetting): string;
declare enum CSODOTALobby_State {
    UI = 0,
    READYUP = 4,
    SERVERSETUP = 1,
    RUN = 2,
    POSTGAME = 3,
    NOTREADY = 5,
    SERVERASSIGN = 6
}
declare function cSODOTALobby_StateFromJSON(object: any): CSODOTALobby_State;
declare function cSODOTALobby_StateToJSON(object: CSODOTALobby_State): string;
declare enum CSODOTALobby_LobbyType {
    INVALID = -1,
    CASUAL_MATCH = 0,
    PRACTICE = 1,
    COOP_BOT_MATCH = 4,
    COMPETITIVE_MATCH = 7,
    WEEKEND_TOURNEY = 9,
    LOCAL_BOT_MATCH = 10,
    SPECTATOR = 11,
    EVENT_MATCH = 12,
    NEW_PLAYER_POOL = 14,
    FEATURED_GAMEMODE = 15
}
declare function cSODOTALobby_LobbyTypeFromJSON(object: any): CSODOTALobby_LobbyType;
declare function cSODOTALobby_LobbyTypeToJSON(object: CSODOTALobby_LobbyType): string;
interface CMsgLobbyCoachFriendRequest {
    coachAccountId: number;
    playerAccountId: number;
    requestState: ELobbyMemberCoachRequestState;
}
declare const CMsgLobbyCoachFriendRequest: MessageFns$8<CMsgLobbyCoachFriendRequest>;
interface CMsgLobbyPlayerPlusSubscriptionData {
    heroBadges: CMsgLobbyPlayerPlusSubscriptionData_HeroBadge[];
}
declare const CMsgLobbyPlayerPlusSubscriptionData: MessageFns$8<CMsgLobbyPlayerPlusSubscriptionData>;
interface CMsgLobbyPlayerPlusSubscriptionData_HeroBadge {
    heroId: number;
    heroBadgeXp: number;
}
declare const CMsgLobbyPlayerPlusSubscriptionData_HeroBadge: MessageFns$8<CMsgLobbyPlayerPlusSubscriptionData_HeroBadge>;
interface CMsgEventActionData {
    actionId: number;
    actionScore: number;
}
declare const CMsgEventActionData: MessageFns$8<CMsgEventActionData>;
interface CMsgPeriodicResourceData {
    periodicResourceId: number;
    remaining: number;
    max: number;
}
declare const CMsgPeriodicResourceData: MessageFns$8<CMsgPeriodicResourceData>;
interface CMsgLobbyEventPoints {
    eventId: number;
    accountPoints: CMsgLobbyEventPoints_AccountPoints[];
}
declare const CMsgLobbyEventPoints: MessageFns$8<CMsgLobbyEventPoints>;
interface CMsgLobbyEventPoints_AccountPoints {
    accountId: number;
    normalPoints: number;
    premiumPoints: number;
    owned: boolean;
    eventLevel: number;
    activeEffectsMask: string;
    wagerStreak: number;
    eventGameCustomActions: CMsgEventActionData[];
    tipAmountIndex: number;
    activeEventSeasonId: number;
    teleportFxLevel: number;
    networkedEventActions: CMsgEventActionData[];
    periodicResources: CMsgPeriodicResourceData[];
    extraEventMessages: CExtraMsgBlock[];
}
declare const CMsgLobbyEventPoints_AccountPoints: MessageFns$8<CMsgLobbyEventPoints_AccountPoints>;
interface CMsgLobbyEventGameData {
    gameSeed: number;
    eventWindowStartTime: number;
}
declare const CMsgLobbyEventGameData: MessageFns$8<CMsgLobbyEventGameData>;
interface CSODOTALobbyInvite {
    groupId: string;
    senderId: string;
    senderName: string;
    members: CSODOTALobbyInvite_LobbyMember[];
    customGameId: string;
    inviteGid: string;
    customGameCrc: string;
    customGameTimestamp: number;
}
declare const CSODOTALobbyInvite: MessageFns$8<CSODOTALobbyInvite>;
interface CSODOTALobbyInvite_LobbyMember {
    name: string;
    steamId: string;
}
declare const CSODOTALobbyInvite_LobbyMember: MessageFns$8<CSODOTALobbyInvite_LobbyMember>;
interface CSODOTALobbyMember {
    id: string;
    heroId: number;
    team: dotaGcTeam;
    slot: number;
    leaverStatus: DOTALeaverStatusT;
    leaverActions: number;
    coachTeam: dotaGcTeam;
    customGameProductIds: number[];
    liveSpectatorTeam: dotaGcTeam;
    pendingAwards: CMsgPendingEventAward[];
    pendingAwardsOnVictory: CMsgPendingEventAward[];
    reportsAvailable: number;
    liveSpectatorAccountId: number;
    commsReportsAvailable: number;
}
declare const CSODOTALobbyMember: MessageFns$8<CSODOTALobbyMember>;
interface CSODOTAServerLobbyMember {
}
declare const CSODOTAServerLobbyMember: MessageFns$8<CSODOTAServerLobbyMember>;
interface CSODOTAStaticLobbyMember {
    name: string;
    partyId: string;
    channel: number;
    cameraman: boolean;
}
declare const CSODOTAStaticLobbyMember: MessageFns$8<CSODOTAStaticLobbyMember>;
interface CSODOTAServerStaticLobbyMember {
    steamId: string;
    rankTier: number;
    leaderboardRank: number;
    laneSelectionFlags: number;
    rankMmrBoostType: EDOTAMMRBoostType;
    coachRating: number;
    coachedAccountIds: number[];
    wasMvpLastGame: boolean;
    canEarnRewards: boolean;
    isPlusSubscriber: boolean;
    favoriteTeamPacked: string;
    isSteamChina: boolean;
    title: number;
    guildId: number;
    disabledRandomHeroBits: number[];
    disabledHeroId: number[];
    enabledHeroId: number[];
    bannedHeroIds: number[];
}
declare const CSODOTAServerStaticLobbyMember: MessageFns$8<CSODOTAServerStaticLobbyMember>;
interface CLobbyTeamDetails {
    teamName: string;
    teamTag: string;
    teamId: number;
    teamLogo: string;
    teamBaseLogo: string;
    teamBannerLogo: string;
    teamComplete: boolean;
    rank: number;
    rankChange: number;
    isHomeTeam: boolean;
    isChallengeMatch: boolean;
    challengeMatchTokenAccount: string;
    teamLogoUrl: string;
    teamAbbreviation: string;
}
declare const CLobbyTeamDetails: MessageFns$8<CLobbyTeamDetails>;
interface CLobbyGuildDetails {
    guildId: number;
    guildPrimaryColor: number;
    guildSecondaryColor: number;
    guildPattern: number;
    guildLogo: string;
    guildPoints: number;
    guildEvent: number;
    guildFlags: number;
    teamForGuild: dotaGcTeam;
    guildTag: string;
    guildWeeklyPercentile: number;
}
declare const CLobbyGuildDetails: MessageFns$8<CLobbyGuildDetails>;
interface CLobbyTimedRewardDetails {
    itemDefIndex: number;
    isSupplyCrate: boolean;
    isTimedDrop: boolean;
    accountId: number;
    origin: number;
}
declare const CLobbyTimedRewardDetails: MessageFns$8<CLobbyTimedRewardDetails>;
interface CLobbyBroadcastChannelInfo {
    channelId: number;
    countryCode: string;
    description: string;
    languageCode: string;
}
declare const CLobbyBroadcastChannelInfo: MessageFns$8<CLobbyBroadcastChannelInfo>;
interface CLobbyGuildChallenge {
    guildId: number;
    eventId: EEvent;
    challengeInstanceId: number;
    challengeParameter: number;
    challengeTimestamp: number;
    challengePeriodSerial: number;
    challengeProgressAtStart: number;
    eligibleAccountIds: number[];
}
declare const CLobbyGuildChallenge: MessageFns$8<CLobbyGuildChallenge>;
interface CDOTALobbyMatchQualityData {
    overallQuality: number;
    teamBalance: number;
    matchSkillRange: number;
    matchBehavior: number;
}
declare const CDOTALobbyMatchQualityData: MessageFns$8<CDOTALobbyMatchQualityData>;
interface CSODOTALobby {
    lobbyId: string;
    allMembers: CSODOTALobbyMember[];
    memberIndices: number[];
    leftMemberIndices: number[];
    freeMemberIndices: number[];
    leaderId: string;
    serverId: string;
    gameMode: number;
    pendingInvites: string[];
    state: CSODOTALobby_State;
    connect: string;
    lobbyType: CSODOTALobby_LobbyType;
    allowCheats: boolean;
    fillWithBots: boolean;
    gameName: string;
    teamDetails: CLobbyTeamDetails[];
    tournamentId: number;
    tournamentGameId: number;
    serverRegion: number;
    gameState: DOTAGameState;
    numSpectators: number;
    matchgroup: number;
    cmPick: dotaCmPick;
    matchId: string;
    allowSpectating: boolean;
    botDifficultyRadiant: DOTABotDifficulty;
    passKey: string;
    leagueid: number;
    penaltyLevelRadiant: number;
    penaltyLevelDire: number;
    seriesType: number;
    radiantSeriesWins: number;
    direSeriesWins: number;
    allchat: boolean;
    dotaTvDelay: LobbyDotaTVDelay;
    customGameMode: string;
    customMapName: string;
    customDifficulty: number;
    lan: boolean;
    broadcastChannelInfo: CLobbyBroadcastChannelInfo[];
    firstLeaverAccountid: number;
    seriesId: number;
    lowPriority: boolean;
    extraMessages: CSODOTALobby_CExtraMsg[];
    firstBloodHappened: boolean;
    matchOutcome: EMatchOutcome;
    massDisconnect: boolean;
    customGameId: string;
    customMinPlayers: number;
    customMaxPlayers: number;
    visibility: DOTALobbyVisibility;
    customGameCrc: string;
    customGameAutoCreatedLobby: boolean;
    customGameTimestamp: number;
    previousSeriesMatches: string[];
    previousMatchOverride: string;
    gameStartTime: number;
    pauseSetting: LobbyDotaPauseSetting;
    weekendTourneyDivisionId: number;
    weekendTourneySkillLevel: number;
    weekendTourneyBracketRound: number;
    botDifficultyDire: DOTABotDifficulty;
    botRadiant: string;
    botDire: string;
    eventProgressionEnabled: EEvent[];
    selectionPriorityRules: DOTASelectionPriorityRules;
    seriesPreviousSelectionPriorityTeamId: number;
    seriesCurrentSelectionPriorityTeamId: number;
    seriesCurrentPriorityTeamChoice: DOTASelectionPriorityChoice;
    seriesCurrentNonPriorityTeamChoice: DOTASelectionPriorityChoice;
    seriesCurrentSelectionPriorityUsedCoinToss: boolean;
    currentPrimaryEvent: EEvent;
    emergencyDisabledHeroIds: number[];
    customGamePrivateKey: string;
    customGamePenalties: boolean;
    lanHostPingLocation: string;
    leagueNodeId: number;
    matchDuration: number;
    leaguePhase: number;
    experimentalGameplayEnabled: boolean;
    guildChallenges: CLobbyGuildChallenge[];
    guildDetails: CLobbyGuildDetails[];
    requestedHeroIds: number[];
    coachFriendRequests: CMsgLobbyCoachFriendRequest[];
    isInSteamChina: boolean;
    withScenarioSave: boolean;
    lobbyCreationTime: number;
    eventGameDefinition: string;
    matchQualityData: CDOTALobbyMatchQualityData | undefined;
    requestedHeroTeams: number[];
}
declare const CSODOTALobby: MessageFns$8<CSODOTALobby>;
interface CSODOTALobby_CExtraMsg {
    id: number;
    contents: Buffer;
}
declare const CSODOTALobby_CExtraMsg: MessageFns$8<CSODOTALobby_CExtraMsg>;
interface CSODOTAServerLobby {
    allMembers: CSODOTAServerLobbyMember[];
    extraStartupMessages: CSODOTALobby_CExtraMsg[];
}
declare const CSODOTAServerLobby: MessageFns$8<CSODOTAServerLobby>;
interface CSODOTAStaticLobby {
    allMembers: CSODOTAStaticLobbyMember[];
    isPlayerDraft: boolean;
    isLastMatchInSeries: boolean;
}
declare const CSODOTAStaticLobby: MessageFns$8<CSODOTAStaticLobby>;
interface CSODOTAServerStaticLobby {
    allMembers: CSODOTAServerStaticLobbyMember[];
    postPatchStrategyTimeBuffer: number;
    lobbyEventPoints: CMsgLobbyEventPoints[];
}
declare const CSODOTAServerStaticLobby: MessageFns$8<CSODOTAServerStaticLobby>;
interface CMsgAdditionalLobbyStartupAccountData {
    accountId: number;
    plusData: CMsgLobbyPlayerPlusSubscriptionData | undefined;
    unlockedChatWheelMessageRanges: CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange[];
    unlockedPingWheelMessageRanges: CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange[];
}
declare const CMsgAdditionalLobbyStartupAccountData: MessageFns$8<CMsgAdditionalLobbyStartupAccountData>;
interface CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange {
    messageIdStart: number;
    messageIdEnd: number;
}
declare const CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange: MessageFns$8<CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange>;
interface CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange {
    messageIdStart: number;
    messageIdEnd: number;
}
declare const CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange: MessageFns$8<CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange>;
interface CMsgLobbyInitializationComplete {
}
declare const CMsgLobbyInitializationComplete: MessageFns$8<CMsgLobbyInitializationComplete>;
interface CMsgLobbyPlaytestDetails {
    json: string;
}
declare const CMsgLobbyPlaytestDetails: MessageFns$8<CMsgLobbyPlaytestDetails>;
interface CMsgLocalServerGuildData {
    guildId: number;
    eventId: EEvent;
    guildPoints: number;
    guildLogo: string;
    guildPrimaryColor: number;
    guildSecondaryColor: number;
    guildPattern: number;
    guildFlags: number;
    guildWeeklyPercentile: number;
}
declare const CMsgLocalServerGuildData: MessageFns$8<CMsgLocalServerGuildData>;
interface CMsgLocalServerFakeLobbyData {
    accountId: number;
    eventPoints: CMsgLobbyEventPoints[];
    isPlusSubscriber: boolean;
    primaryEventId: number;
    favoriteTeam: number;
    favoriteTeamQuality: number;
    guildInfo: CMsgLocalServerGuildData | undefined;
    teleportFxLevel: number;
    additionalData: CMsgAdditionalLobbyStartupAccountData | undefined;
}
declare const CMsgLocalServerFakeLobbyData: MessageFns$8<CMsgLocalServerFakeLobbyData>;
type Builtin$8 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$8<T> = T extends Builtin$8 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$8<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$8<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$8<T[K]>;
} : Partial<T>;
interface MessageFns$8<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$8<T>): T;
    fromPartial(object: DeepPartial$8<T>): T;
}

declare enum CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eNotAllowed = 5,
    k_eInvalidItem = 6
}
declare function cMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponseFromJSON(object: any): CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse;
declare function cMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponseToJSON(object: CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse): string;
interface CMsgSurvivorsUserData {
    attributeLevels: CMsgSurvivorsUserData_AttributeLevelsEntry[];
    unlockedDifficulty: number;
}
declare const CMsgSurvivorsUserData: MessageFns$7<CMsgSurvivorsUserData>;
interface CMsgSurvivorsUserData_AttributeLevelsEntry {
    key: number;
    value: number;
}
declare const CMsgSurvivorsUserData_AttributeLevelsEntry: MessageFns$7<CMsgSurvivorsUserData_AttributeLevelsEntry>;
interface CMsgClientToGCSurvivorsPowerUpTelemetryData {
    powerupId: number;
    level: number;
    timeReceived: number;
    timeHeld: number;
    totalDamage: string;
    dps: number;
    hasScepter: number;
}
declare const CMsgClientToGCSurvivorsPowerUpTelemetryData: MessageFns$7<CMsgClientToGCSurvivorsPowerUpTelemetryData>;
interface CMsgClientToGCSurvivorsGameTelemetryData {
    timeSurvived: number;
    playerLevel: number;
    gameResult: number;
    goldEarned: number;
    powerups: CMsgClientToGCSurvivorsPowerUpTelemetryData[];
    difficulty: number;
    metaprogressionLevel: number;
}
declare const CMsgClientToGCSurvivorsGameTelemetryData: MessageFns$7<CMsgClientToGCSurvivorsGameTelemetryData>;
interface CMsgClientToGCSurvivorsGameTelemetryDataResponse {
    response: CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse;
}
declare const CMsgClientToGCSurvivorsGameTelemetryDataResponse: MessageFns$7<CMsgClientToGCSurvivorsGameTelemetryDataResponse>;
type Builtin$7 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$7<T> = T extends Builtin$7 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$7<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$7<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$7<T[K]>;
} : Partial<T>;
interface MessageFns$7<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$7<T>): T;
    fromPartial(object: DeepPartial$7<T>): T;
}

declare enum EOverworldNodeState {
    k_eOverworldNodeState_Invalid = 0,
    k_eOverworldNodeState_Locked = 1,
    k_eOverworldNodeState_Unlocked = 2
}
declare function eOverworldNodeStateFromJSON(object: any): EOverworldNodeState;
declare function eOverworldNodeStateToJSON(object: EOverworldNodeState): string;
declare enum EOverworldPathState {
    k_eOverworldPathState_Invalid = 0,
    k_eOverworldPathState_Incomplete = 1,
    k_eOverworldPathState_Complete = 2
}
declare function eOverworldPathStateFromJSON(object: any): EOverworldPathState;
declare function eOverworldPathStateToJSON(object: EOverworldPathState): string;
declare enum EOverworldAuditAction {
    k_eOverworldAuditAction_Invalid = 0,
    k_eOverworldAuditAction_DevModifyTokens = 1,
    k_eOverworldAuditAction_DevClearInventory = 2,
    k_eOverworldAuditAction_DevGrantTokens = 3,
    k_eOverworldAuditAction_CompletePath = 4,
    k_eOverworldAuditAction_ClaimEncounterReward = 5,
    k_eOverworldAuditAction_DevResetNode = 6,
    k_eOverworldAuditAction_DevResetPath = 7,
    k_eOverworldAuditAction_MatchRewardsFull = 8,
    k_eOverworldAuditAction_MatchRewardsHalf = 9,
    k_eOverworldAuditAction_EventActionTokenGrant = 10,
    k_eOverworldAuditAction_TokenTraderLost = 11,
    k_eOverworldAuditAction_TokenTraderGained = 12,
    k_eOverworldAuditAction_EncounterRewardTokenCost = 13,
    k_eOverworldAuditAction_EncounterRewardTokenReward = 14,
    k_eOverworldAuditAction_SupportGrantTokens = 16,
    k_eOverworldAuditAction_TokenGiftSent = 17
}
declare function eOverworldAuditActionFromJSON(object: any): EOverworldAuditAction;
declare function eOverworldAuditActionToJSON(object: EOverworldAuditAction): string;
declare enum EOverworldMinigameAction {
    k_eOverworldMinigameAction_Invalid = 0,
    k_eOverworldMinigameAction_DevReset = 1,
    k_eOverworldMinigameAction_DevGiveCurrency = 2,
    k_eOverworldMinigameAction_Purchase = 3,
    k_eOverworldMinigameAction_SetOption = 4,
    k_eOverworldMinigameAction_ReportCurrencyGained = 5,
    k_eOverworldMinigameAction_UnlockDifficulty = 6
}
declare function eOverworldMinigameActionFromJSON(object: any): EOverworldMinigameAction;
declare function eOverworldMinigameActionToJSON(object: EOverworldMinigameAction): string;
declare enum CMsgClientToGCOverworldGetUserDataResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidOverworld = 5
}
declare function cMsgClientToGCOverworldGetUserDataResponse_EResponseFromJSON(object: any): CMsgClientToGCOverworldGetUserDataResponse_EResponse;
declare function cMsgClientToGCOverworldGetUserDataResponse_EResponseToJSON(object: CMsgClientToGCOverworldGetUserDataResponse_EResponse): string;
declare enum CMsgClientToGCOverworldCompletePathResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidOverworld = 5,
    k_eInvalidPath = 6,
    k_eNotEnoughTokens = 7,
    k_ePathIsLocked = 8,
    k_ePathAlreadyUnlocked = 9
}
declare function cMsgClientToGCOverworldCompletePathResponse_EResponseFromJSON(object: any): CMsgClientToGCOverworldCompletePathResponse_EResponse;
declare function cMsgClientToGCOverworldCompletePathResponse_EResponseToJSON(object: CMsgClientToGCOverworldCompletePathResponse_EResponse): string;
declare enum CMsgClientToGCOverworldClaimEncounterRewardResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidOverworld = 5,
    k_eInvalidNode = 6,
    k_eNodeLocked = 7,
    k_eRewardAlreadyClaimed = 8,
    k_eNodeNotEncounter = 9,
    k_eEncounterMissingRewards = 10,
    k_eInvalidEncounterRewardStyle = 11,
    k_eInvalidEncounterData = 12,
    k_eNotEnoughTokensForReward = 13,
    k_eNotEnoughResourceForReward = 14,
    k_eInvalidRewardData = 15
}
declare function cMsgClientToGCOverworldClaimEncounterRewardResponse_EResponseFromJSON(object: any): CMsgClientToGCOverworldClaimEncounterRewardResponse_EResponse;
declare function cMsgClientToGCOverworldClaimEncounterRewardResponse_EResponseToJSON(object: CMsgClientToGCOverworldClaimEncounterRewardResponse_EResponse): string;
declare enum CMsgClientToGCOverworldVisitEncounterResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidOverworld = 5,
    k_eInvalidNode = 6,
    k_eNodeLocked = 7,
    k_eNodeNotEncounter = 8,
    k_eAlreadyVisited = 9
}
declare function cMsgClientToGCOverworldVisitEncounterResponse_EResponseFromJSON(object: any): CMsgClientToGCOverworldVisitEncounterResponse_EResponse;
declare function cMsgClientToGCOverworldVisitEncounterResponse_EResponseToJSON(object: CMsgClientToGCOverworldVisitEncounterResponse_EResponse): string;
declare enum CMsgClientToGCOverworldMoveToNodeResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidOverworld = 5,
    k_eInvalidNode = 6,
    k_eNodeLocked = 7
}
declare function cMsgClientToGCOverworldMoveToNodeResponse_EResponseFromJSON(object: any): CMsgClientToGCOverworldMoveToNodeResponse_EResponse;
declare function cMsgClientToGCOverworldMoveToNodeResponse_EResponseToJSON(object: CMsgClientToGCOverworldMoveToNodeResponse_EResponse): string;
declare enum CMsgClientToGCOverworldTradeTokensResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eNotAllowed = 5,
    k_eNodeLocked = 6,
    k_eInvalidOverworld = 7,
    k_eInvalidOffer = 8,
    k_eNotEnoughTokens = 9,
    k_eInvalidNode = 10,
    k_eInvalidEncounter = 11,
    k_eRewardDoesNotMatchRecipe = 12
}
declare function cMsgClientToGCOverworldTradeTokensResponse_EResponseFromJSON(object: any): CMsgClientToGCOverworldTradeTokensResponse_EResponse;
declare function cMsgClientToGCOverworldTradeTokensResponse_EResponseToJSON(object: CMsgClientToGCOverworldTradeTokensResponse_EResponse): string;
declare enum CMsgClientToGCOverworldGiftTokensResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eNotAllowed = 5,
    k_eNodeLocked = 6,
    k_eInvalidOverworld = 7,
    k_eInvalidGift = 8,
    k_eNotEnoughTokens = 9,
    k_eInvalidRecipient = 10,
    k_eNotEnoughPeriodicResource = 11
}
declare function cMsgClientToGCOverworldGiftTokensResponse_EResponseFromJSON(object: any): CMsgClientToGCOverworldGiftTokensResponse_EResponse;
declare function cMsgClientToGCOverworldGiftTokensResponse_EResponseToJSON(object: CMsgClientToGCOverworldGiftTokensResponse_EResponse): string;
declare enum CMsgClientToGCOverworldRequestTokensNeededByFriendResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eNotAllowed = 5,
    k_eNodeLocked = 6,
    k_eInvalidOverworld = 7,
    k_eInvalidFriend = 8,
    k_eTooManyRequests = 9
}
declare function cMsgClientToGCOverworldRequestTokensNeededByFriendResponse_EResponseFromJSON(object: any): CMsgClientToGCOverworldRequestTokensNeededByFriendResponse_EResponse;
declare function cMsgClientToGCOverworldRequestTokensNeededByFriendResponse_EResponseToJSON(object: CMsgClientToGCOverworldRequestTokensNeededByFriendResponse_EResponse): string;
declare enum CMsgClientToGCOverworldDevResetAllResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eNotAllowed = 5,
    k_eInvalidOverworld = 6
}
declare function cMsgClientToGCOverworldDevResetAllResponse_EResponseFromJSON(object: any): CMsgClientToGCOverworldDevResetAllResponse_EResponse;
declare function cMsgClientToGCOverworldDevResetAllResponse_EResponseToJSON(object: CMsgClientToGCOverworldDevResetAllResponse_EResponse): string;
declare enum CMsgClientToGCOverworldDevResetNodeResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eNotAllowed = 5,
    k_eInvalidOverworld = 6,
    k_eInvalidNode = 7
}
declare function cMsgClientToGCOverworldDevResetNodeResponse_EResponseFromJSON(object: any): CMsgClientToGCOverworldDevResetNodeResponse_EResponse;
declare function cMsgClientToGCOverworldDevResetNodeResponse_EResponseToJSON(object: CMsgClientToGCOverworldDevResetNodeResponse_EResponse): string;
declare enum CMsgClientToGCOverworldDevGrantTokensResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eNotAllowed = 5,
    k_eInvalidOverworld = 6
}
declare function cMsgClientToGCOverworldDevGrantTokensResponse_EResponseFromJSON(object: any): CMsgClientToGCOverworldDevGrantTokensResponse_EResponse;
declare function cMsgClientToGCOverworldDevGrantTokensResponse_EResponseToJSON(object: CMsgClientToGCOverworldDevGrantTokensResponse_EResponse): string;
declare enum CMsgClientToGCOverworldDevClearInventoryResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eNotAllowed = 5,
    k_eInvalidOverworld = 6
}
declare function cMsgClientToGCOverworldDevClearInventoryResponse_EResponseFromJSON(object: any): CMsgClientToGCOverworldDevClearInventoryResponse_EResponse;
declare function cMsgClientToGCOverworldDevClearInventoryResponse_EResponseToJSON(object: CMsgClientToGCOverworldDevClearInventoryResponse_EResponse): string;
declare enum CMsgClientToGCOverworldFeedbackResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eNotAllowed = 5,
    k_eInvalidOverworld = 6
}
declare function cMsgClientToGCOverworldFeedbackResponse_EResponseFromJSON(object: any): CMsgClientToGCOverworldFeedbackResponse_EResponse;
declare function cMsgClientToGCOverworldFeedbackResponse_EResponseToJSON(object: CMsgClientToGCOverworldFeedbackResponse_EResponse): string;
declare enum CMsgClientToGCOverworldGetDynamicImageResponse_EDynamicImageFormat {
    k_eUnknown = 0,
    k_ePNG = 1,
    k_eData = 2
}
declare function cMsgClientToGCOverworldGetDynamicImageResponse_EDynamicImageFormatFromJSON(object: any): CMsgClientToGCOverworldGetDynamicImageResponse_EDynamicImageFormat;
declare function cMsgClientToGCOverworldGetDynamicImageResponse_EDynamicImageFormatToJSON(object: CMsgClientToGCOverworldGetDynamicImageResponse_EDynamicImageFormat): string;
declare enum CMsgClientToGCOverworldMinigameActionResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidOverworld = 5,
    k_eInvalidNode = 6,
    k_eNodeLocked = 7,
    k_eInvalidSelection = 8,
    k_eNotEnoughTokens = 9,
    k_eNotEnoughMinigameCurrency = 10,
    k_eNotAllowed = 11
}
declare function cMsgClientToGCOverworldMinigameActionResponse_EResponseFromJSON(object: any): CMsgClientToGCOverworldMinigameActionResponse_EResponse;
declare function cMsgClientToGCOverworldMinigameActionResponse_EResponseToJSON(object: CMsgClientToGCOverworldMinigameActionResponse_EResponse): string;
interface CMsgOverworldTokenCount {
    tokenId: number;
    tokenCount: number;
}
declare const CMsgOverworldTokenCount: MessageFns$6<CMsgOverworldTokenCount>;
interface CMsgOverworldTokenQuantity {
    tokenCounts: CMsgOverworldTokenCount[];
}
declare const CMsgOverworldTokenQuantity: MessageFns$6<CMsgOverworldTokenQuantity>;
interface CMsgOverworldEncounterTokenTreasureData {
    rewardOptions: CMsgOverworldEncounterTokenTreasureData_RewardOption[];
}
declare const CMsgOverworldEncounterTokenTreasureData: MessageFns$6<CMsgOverworldEncounterTokenTreasureData>;
interface CMsgOverworldEncounterTokenTreasureData_RewardOption {
    rewardData: number;
    tokenCost: CMsgOverworldTokenQuantity | undefined;
    tokenReward: CMsgOverworldTokenQuantity | undefined;
}
declare const CMsgOverworldEncounterTokenTreasureData_RewardOption: MessageFns$6<CMsgOverworldEncounterTokenTreasureData_RewardOption>;
interface CMsgOverworldEncounterTokenQuestData {
    quests: CMsgOverworldEncounterTokenQuestData_Quest[];
}
declare const CMsgOverworldEncounterTokenQuestData: MessageFns$6<CMsgOverworldEncounterTokenQuestData>;
interface CMsgOverworldEncounterTokenQuestData_Quest {
    rewardData: number;
    tokenCost: CMsgOverworldTokenQuantity | undefined;
    tokenReward: CMsgOverworldTokenQuantity | undefined;
}
declare const CMsgOverworldEncounterTokenQuestData_Quest: MessageFns$6<CMsgOverworldEncounterTokenQuestData_Quest>;
interface CMsgOverworldHeroList {
    heroIds: number[];
}
declare const CMsgOverworldHeroList: MessageFns$6<CMsgOverworldHeroList>;
interface CMsgOverworldEncounterChooseHeroData {
    heroList: CMsgOverworldHeroList | undefined;
    additive: boolean;
}
declare const CMsgOverworldEncounterChooseHeroData: MessageFns$6<CMsgOverworldEncounterChooseHeroData>;
interface CMsgOverworldEncounterProgressData {
    choice: number;
    progress: number;
    maxProgress: number;
    visited: boolean;
}
declare const CMsgOverworldEncounterProgressData: MessageFns$6<CMsgOverworldEncounterProgressData>;
interface CMsgOverworldEncounterData {
    extraEncounterData: CExtraMsgBlock[];
}
declare const CMsgOverworldEncounterData: MessageFns$6<CMsgOverworldEncounterData>;
interface CMsgOverworldNode {
    nodeId: number;
    nodeState: EOverworldNodeState;
    nodeEncounterData: CMsgOverworldEncounterData | undefined;
}
declare const CMsgOverworldNode: MessageFns$6<CMsgOverworldNode>;
interface CMsgOverworldPath {
    pathId: number;
    pathCost: CMsgOverworldTokenQuantity | undefined;
    pathState: EOverworldPathState;
}
declare const CMsgOverworldPath: MessageFns$6<CMsgOverworldPath>;
interface CMsgOverworldMinigameCustomData {
    survivorsData?: CMsgSurvivorsUserData | undefined;
}
declare const CMsgOverworldMinigameCustomData: MessageFns$6<CMsgOverworldMinigameCustomData>;
interface CMsgOverworldMinigameUserData {
    nodeId: number;
    currencyAmount: number;
    customData: CMsgOverworldMinigameCustomData | undefined;
}
declare const CMsgOverworldMinigameUserData: MessageFns$6<CMsgOverworldMinigameUserData>;
interface CMsgOverworldUserData {
    tokenInventory: CMsgOverworldTokenQuantity | undefined;
    overworldNodes: CMsgOverworldNode[];
    overworldPaths: CMsgOverworldPath[];
    currentNodeId: number;
    minigameData: CMsgOverworldUserData_MinigameDataEntry[];
}
declare const CMsgOverworldUserData: MessageFns$6<CMsgOverworldUserData>;
interface CMsgOverworldUserData_MinigameDataEntry {
    key: number;
    value: CMsgOverworldMinigameUserData | undefined;
}
declare const CMsgOverworldUserData_MinigameDataEntry: MessageFns$6<CMsgOverworldUserData_MinigameDataEntry>;
interface CMsgOverworldMatchRewards {
    players: CMsgOverworldMatchRewards_Player[];
}
declare const CMsgOverworldMatchRewards: MessageFns$6<CMsgOverworldMatchRewards>;
interface CMsgOverworldMatchRewards_Player {
    playerSlot: number;
    tokens: CMsgOverworldTokenQuantity | undefined;
    overworldId: number;
}
declare const CMsgOverworldMatchRewards_Player: MessageFns$6<CMsgOverworldMatchRewards_Player>;
interface CMsgClientToGCOverworldGetUserData {
    overworldId: number;
}
declare const CMsgClientToGCOverworldGetUserData: MessageFns$6<CMsgClientToGCOverworldGetUserData>;
interface CMsgClientToGCOverworldGetUserDataResponse {
    response: CMsgClientToGCOverworldGetUserDataResponse_EResponse;
    userData: CMsgOverworldUserData | undefined;
}
declare const CMsgClientToGCOverworldGetUserDataResponse: MessageFns$6<CMsgClientToGCOverworldGetUserDataResponse>;
interface CMsgGCToClientOverworldUserDataUpdated {
    overworldId: number;
    userData: CMsgOverworldUserData | undefined;
}
declare const CMsgGCToClientOverworldUserDataUpdated: MessageFns$6<CMsgGCToClientOverworldUserDataUpdated>;
interface CMsgClientToGCOverworldCompletePath {
    overworldId: number;
    pathId: number;
}
declare const CMsgClientToGCOverworldCompletePath: MessageFns$6<CMsgClientToGCOverworldCompletePath>;
interface CMsgClientToGCOverworldCompletePathResponse {
    response: CMsgClientToGCOverworldCompletePathResponse_EResponse;
    claimResponse: CMsgDOTAClaimEventActionResponse | undefined;
}
declare const CMsgClientToGCOverworldCompletePathResponse: MessageFns$6<CMsgClientToGCOverworldCompletePathResponse>;
interface CMsgOverworldEncounterPitFighterRewardData {
    tokenId: number;
    choice: number;
}
declare const CMsgOverworldEncounterPitFighterRewardData: MessageFns$6<CMsgOverworldEncounterPitFighterRewardData>;
interface CMsgClientToGCOverworldClaimEncounterReward {
    overworldId: number;
    nodeId: number;
    rewardData: number;
    periodicResourceId: number;
    extraRewardData: CMsgOverworldEncounterData | undefined;
    leaderboardData: number;
    leaderboardIndex: number;
    shouldClaimReward: boolean;
}
declare const CMsgClientToGCOverworldClaimEncounterReward: MessageFns$6<CMsgClientToGCOverworldClaimEncounterReward>;
interface CMsgClientToGCOverworldClaimEncounterRewardResponse {
    response: CMsgClientToGCOverworldClaimEncounterRewardResponse_EResponse;
    claimResponse: CMsgDOTAClaimEventActionResponse | undefined;
    tokensReceived: CMsgOverworldTokenQuantity | undefined;
}
declare const CMsgClientToGCOverworldClaimEncounterRewardResponse: MessageFns$6<CMsgClientToGCOverworldClaimEncounterRewardResponse>;
interface CMsgClientToGCOverworldVisitEncounter {
    overworldId: number;
    nodeId: number;
}
declare const CMsgClientToGCOverworldVisitEncounter: MessageFns$6<CMsgClientToGCOverworldVisitEncounter>;
interface CMsgClientToGCOverworldVisitEncounterResponse {
    response: CMsgClientToGCOverworldVisitEncounterResponse_EResponse;
}
declare const CMsgClientToGCOverworldVisitEncounterResponse: MessageFns$6<CMsgClientToGCOverworldVisitEncounterResponse>;
interface CMsgClientToGCOverworldMoveToNode {
    overworldId: number;
    nodeId: number;
}
declare const CMsgClientToGCOverworldMoveToNode: MessageFns$6<CMsgClientToGCOverworldMoveToNode>;
interface CMsgClientToGCOverworldMoveToNodeResponse {
    response: CMsgClientToGCOverworldMoveToNodeResponse_EResponse;
}
declare const CMsgClientToGCOverworldMoveToNodeResponse: MessageFns$6<CMsgClientToGCOverworldMoveToNodeResponse>;
interface CMsgClientToGCOverworldTradeTokens {
    overworldId: number;
    tokenOffer: CMsgOverworldTokenQuantity | undefined;
    tokenRequest: CMsgOverworldTokenQuantity | undefined;
    recipe: number;
    encounterId: number;
}
declare const CMsgClientToGCOverworldTradeTokens: MessageFns$6<CMsgClientToGCOverworldTradeTokens>;
interface CMsgClientToGCOverworldTradeTokensResponse {
    response: CMsgClientToGCOverworldTradeTokensResponse_EResponse;
    tokensReceived: CMsgOverworldTokenQuantity | undefined;
}
declare const CMsgClientToGCOverworldTradeTokensResponse: MessageFns$6<CMsgClientToGCOverworldTradeTokensResponse>;
interface CMsgClientToGCOverworldGiftTokens {
    overworldId: number;
    tokenGift: CMsgOverworldTokenCount | undefined;
    recipientAccountId: number;
    periodicResourceId: number;
}
declare const CMsgClientToGCOverworldGiftTokens: MessageFns$6<CMsgClientToGCOverworldGiftTokens>;
interface CMsgClientToGCOverworldGiftTokensResponse {
    response: CMsgClientToGCOverworldGiftTokensResponse_EResponse;
}
declare const CMsgClientToGCOverworldGiftTokensResponse: MessageFns$6<CMsgClientToGCOverworldGiftTokensResponse>;
interface CMsgClientToGCOverworldRequestTokensNeededByFriend {
    friendAccountId: number;
    overworldId: number;
}
declare const CMsgClientToGCOverworldRequestTokensNeededByFriend: MessageFns$6<CMsgClientToGCOverworldRequestTokensNeededByFriend>;
interface CMsgClientToGCOverworldRequestTokensNeededByFriendResponse {
    response: CMsgClientToGCOverworldRequestTokensNeededByFriendResponse_EResponse;
    tokenQuantity: CMsgOverworldTokenQuantity | undefined;
}
declare const CMsgClientToGCOverworldRequestTokensNeededByFriendResponse: MessageFns$6<CMsgClientToGCOverworldRequestTokensNeededByFriendResponse>;
interface CMsgClientToGCOverworldDevResetAll {
    overworldId: number;
}
declare const CMsgClientToGCOverworldDevResetAll: MessageFns$6<CMsgClientToGCOverworldDevResetAll>;
interface CMsgClientToGCOverworldDevResetAllResponse {
    response: CMsgClientToGCOverworldDevResetAllResponse_EResponse;
}
declare const CMsgClientToGCOverworldDevResetAllResponse: MessageFns$6<CMsgClientToGCOverworldDevResetAllResponse>;
interface CMsgClientToGCOverworldDevResetNode {
    overworldId: number;
    nodeId: number;
}
declare const CMsgClientToGCOverworldDevResetNode: MessageFns$6<CMsgClientToGCOverworldDevResetNode>;
interface CMsgClientToGCOverworldDevResetNodeResponse {
    response: CMsgClientToGCOverworldDevResetNodeResponse_EResponse;
}
declare const CMsgClientToGCOverworldDevResetNodeResponse: MessageFns$6<CMsgClientToGCOverworldDevResetNodeResponse>;
interface CMsgClientToGCOverworldDevGrantTokens {
    overworldId: number;
    tokenQuantity: CMsgOverworldTokenQuantity | undefined;
}
declare const CMsgClientToGCOverworldDevGrantTokens: MessageFns$6<CMsgClientToGCOverworldDevGrantTokens>;
interface CMsgClientToGCOverworldDevGrantTokensResponse {
    response: CMsgClientToGCOverworldDevGrantTokensResponse_EResponse;
}
declare const CMsgClientToGCOverworldDevGrantTokensResponse: MessageFns$6<CMsgClientToGCOverworldDevGrantTokensResponse>;
interface CMsgClientToGCOverworldDevClearInventory {
    overworldId: number;
}
declare const CMsgClientToGCOverworldDevClearInventory: MessageFns$6<CMsgClientToGCOverworldDevClearInventory>;
interface CMsgClientToGCOverworldDevClearInventoryResponse {
    response: CMsgClientToGCOverworldDevClearInventoryResponse_EResponse;
}
declare const CMsgClientToGCOverworldDevClearInventoryResponse: MessageFns$6<CMsgClientToGCOverworldDevClearInventoryResponse>;
interface CMsgClientToGCOverworldFeedback {
    language: number;
    overworldId: number;
    feedback: string;
}
declare const CMsgClientToGCOverworldFeedback: MessageFns$6<CMsgClientToGCOverworldFeedback>;
interface CMsgClientToGCOverworldFeedbackResponse {
    response: CMsgClientToGCOverworldFeedbackResponse_EResponse;
}
declare const CMsgClientToGCOverworldFeedbackResponse: MessageFns$6<CMsgClientToGCOverworldFeedbackResponse>;
interface CMsgClientToGCOverworldGetDynamicImage {
    magic: number;
    imageId: number;
    language: number;
}
declare const CMsgClientToGCOverworldGetDynamicImage: MessageFns$6<CMsgClientToGCOverworldGetDynamicImage>;
interface CMsgClientToGCOverworldGetDynamicImageResponse {
    imageId: number;
    images: CMsgClientToGCOverworldGetDynamicImageResponse_Image[];
}
declare const CMsgClientToGCOverworldGetDynamicImageResponse: MessageFns$6<CMsgClientToGCOverworldGetDynamicImageResponse>;
interface CMsgClientToGCOverworldGetDynamicImageResponse_Image {
    width: number;
    height: number;
    format: CMsgClientToGCOverworldGetDynamicImageResponse_EDynamicImageFormat;
    imageBytes: Buffer;
}
declare const CMsgClientToGCOverworldGetDynamicImageResponse_Image: MessageFns$6<CMsgClientToGCOverworldGetDynamicImageResponse_Image>;
interface CMsgClientToGCOverworldMinigameAction {
    overworldId: number;
    nodeId: number;
    action: EOverworldMinigameAction;
    selection: number;
    optionValue: number;
    currencyAmount: number;
}
declare const CMsgClientToGCOverworldMinigameAction: MessageFns$6<CMsgClientToGCOverworldMinigameAction>;
interface CMsgClientToGCOverworldMinigameActionResponse {
    response: CMsgClientToGCOverworldMinigameActionResponse_EResponse;
}
declare const CMsgClientToGCOverworldMinigameActionResponse: MessageFns$6<CMsgClientToGCOverworldMinigameActionResponse>;
type Builtin$6 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$6<T> = T extends Builtin$6 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$6<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$6<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$6<T[K]>;
} : Partial<T>;
interface MessageFns$6<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$6<T>): T;
    fromPartial(object: DeepPartial$6<T>): T;
}

declare enum EGCEconBaseMsg {
    k_EMsgGCGenericResult = 2579
}
declare function eGCEconBaseMsgFromJSON(object: any): EGCEconBaseMsg;
declare function eGCEconBaseMsgToJSON(object: EGCEconBaseMsg): string;
declare enum EGCMsgResponse {
    k_EGCMsgResponseOK = 0,
    k_EGCMsgResponseDenied = 1,
    k_EGCMsgResponseServerError = 2,
    k_EGCMsgResponseTimeout = 3,
    k_EGCMsgResponseInvalid = 4,
    k_EGCMsgResponseNoMatch = 5,
    k_EGCMsgResponseUnknownError = 6,
    k_EGCMsgResponseNotLoggedOn = 7,
    k_EGCMsgFailedToCreate = 8
}
declare function eGCMsgResponseFromJSON(object: any): EGCMsgResponse;
declare function eGCMsgResponseToJSON(object: EGCMsgResponse): string;
declare enum EGCMsgUseItemResponse {
    k_EGCMsgUseItemResponse_ItemUsed = 0,
    k_EGCMsgUseItemResponse_GiftNoOtherPlayers = 1,
    k_EGCMsgUseItemResponse_ServerError = 2,
    k_EGCMsgUseItemResponse_MiniGameAlreadyStarted = 3,
    k_EGCMsgUseItemResponse_ItemUsed_ItemsGranted = 4,
    k_EGCMsgUseItemResponse_DropRateBonusAlreadyGranted = 5,
    k_EGCMsgUseItemResponse_NotInLowPriorityPool = 6,
    k_EGCMsgUseItemResponse_NotHighEnoughLevel = 7,
    k_EGCMsgUseItemResponse_EventNotActive = 8,
    k_EGCMsgUseItemResponse_ItemUsed_EventPointsGranted = 9,
    k_EGCMsgUseItemResponse_MissingRequirement = 10,
    k_EGCMsgUseItemResponse_EmoticonUnlock_NoNew = 11,
    k_EGCMsgUseItemResponse_EmoticonUnlock_Complete = 12,
    k_EGCMsgUseItemResponse_ItemUsed_Compendium = 13
}
declare function eGCMsgUseItemResponseFromJSON(object: any): EGCMsgUseItemResponse;
declare function eGCMsgUseItemResponseToJSON(object: EGCMsgUseItemResponse): string;
interface CMsgGenericResult {
    eresult: number;
    debugMessage: string;
}
declare const CMsgGenericResult: MessageFns$5<CMsgGenericResult>;
type Builtin$5 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$5<T> = T extends Builtin$5 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$5<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$5<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$5<T[K]>;
} : Partial<T>;
interface MessageFns$5<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$5<T>): T;
    fromPartial(object: DeepPartial$5<T>): T;
}

declare enum EGCItemMsg {
    k_EMsgGCBase = 1000,
    k_EMsgGCSetItemPosition = 1001,
    k_EMsgClientToGCPackBundle = 1002,
    k_EMsgClientToGCPackBundleResponse = 1003,
    k_EMsgGCDelete = 1004,
    k_EMsgGCVerifyCacheSubscription = 1005,
    k_EMsgClientToGCNameItem = 1006,
    k_EMsgGCPaintItem = 1009,
    k_EMsgGCPaintItemResponse = 1010,
    k_EMsgGCNameBaseItem = 1019,
    k_EMsgGCNameBaseItemResponse = 1020,
    k_EMsgGCUseItemRequest = 1025,
    k_EMsgGCUseItemResponse = 1026,
    k_EMsgGCGiftedItems = 1027,
    k_EMsgGCUnwrapGiftRequest = 1037,
    k_EMsgGCUnwrapGiftResponse = 1038,
    k_EMsgGCSortItems = 1041,
    k_EMsgGCBackpackSortFinished = 1058,
    k_EMsgGCAdjustItemEquippedState = 1059,
    k_EMsgGCItemAcknowledged = 1062,
    k_EMsgClientToGCNameItemResponse = 1068,
    k_EMsgGCApplyStrangePart = 1073,
    k_EMsgGCApplyPennantUpgrade = 1076,
    k_EMsgGCSetItemPositions = 1077,
    k_EMsgGCApplyEggEssence = 1078,
    k_EMsgGCNameEggEssenceResponse = 1079,
    k_EMsgGCExtractGems = 1086,
    k_EMsgGCAddSocket = 1087,
    k_EMsgGCAddItemToSocket = 1088,
    k_EMsgGCAddItemToSocketResponse = 1089,
    k_EMsgGCAddSocketResponse = 1090,
    k_EMsgGCResetStrangeGemCount = 1091,
    k_EMsgGCRequestCrateItems = 1092,
    k_EMsgGCRequestCrateItemsResponse = 1093,
    k_EMsgGCExtractGemsResponse = 1094,
    k_EMsgGCResetStrangeGemCountResponse = 1095,
    k_EMsgGCServerUseItemRequest = 1103,
    k_EMsgGCAddGiftItem = 1104,
    k_EMsgSQLGCToGCRevokeUntrustedGift = 1105,
    k_EMsgClientToGCRemoveItemGifterAttributes = 1109,
    k_EMsgClientToGCRemoveItemName = 1110,
    k_EMsgClientToGCRemoveItemDescription = 1111,
    k_EMsgClientToGCRemoveItemAttributeResponse = 1112,
    k_EMsgGCDev_NewItemRequest = 2001,
    k_EMsgGCDev_NewItemRequestResponse = 2002,
    k_EMsgGCDev_UnlockAllItemStylesRequest = 2003,
    k_EMsgGCDev_UnlockAllItemStylesResponse = 2004,
    k_EMsgGCStorePurchaseFinalize = 2504,
    k_EMsgGCStorePurchaseFinalizeResponse = 2505,
    k_EMsgGCStorePurchaseCancel = 2506,
    k_EMsgGCStorePurchaseCancelResponse = 2507,
    k_EMsgGCStorePurchaseInit = 2510,
    k_EMsgGCStorePurchaseInitResponse = 2511,
    k_EMsgGCToGCBannedWordListUpdated = 2515,
    k_EMsgGCToGCDirtySDOCache = 2516,
    k_EMsgGCToGCUpdateSQLKeyValue = 2518,
    k_EMsgGCToGCBroadcastConsoleCommand = 2521,
    k_EMsgGCServerVersionUpdated = 2522,
    k_EMsgGCApplyAutograph = 2523,
    k_EMsgGCToGCWebAPIAccountChanged = 2524,
    k_EMsgGCClientVersionUpdated = 2528,
    k_EMsgGCToGCUpdateWelcomeMsg = 2529,
    k_EMsgGCToGCPlayerStrangeCountAdjustments = 2535,
    k_EMsgGCRequestStoreSalesData = 2536,
    k_EMsgGCRequestStoreSalesDataResponse = 2537,
    k_EMsgGCRequestStoreSalesDataUpToDateResponse = 2538,
    k_EMsgGCToGCPingRequest = 2539,
    k_EMsgGCToGCPingResponse = 2540,
    k_EMsgGCToGCGetUserSessionServer = 2541,
    k_EMsgGCToGCGetUserSessionServerResponse = 2542,
    k_EMsgGCToGCGetUserServerMembers = 2543,
    k_EMsgGCToGCGetUserServerMembersResponse = 2544,
    k_EMsgGCToGCCanUseDropRateBonus = 2547,
    k_EMsgSQLAddDropRateBonus = 2548,
    k_EMsgGCToGCRefreshSOCache = 2549,
    k_EMsgGCToGCGrantAccountRolledItems = 2554,
    k_EMsgGCToGCGrantSelfMadeItemToAccount = 2555,
    k_EMsgGCStatueCraft = 2561,
    k_EMsgGCRedeemCode = 2562,
    k_EMsgGCRedeemCodeResponse = 2563,
    k_EMsgGCToGCItemConsumptionRollback = 2564,
    k_EMsgClientToGCWrapAndDeliverGift = 2565,
    k_EMsgClientToGCWrapAndDeliverGiftResponse = 2566,
    k_EMsgClientToGCUnpackBundleResponse = 2567,
    k_EMsgGCToClientStoreTransactionCompleted = 2568,
    k_EMsgClientToGCEquipItems = 2569,
    k_EMsgClientToGCEquipItemsResponse = 2570,
    k_EMsgClientToGCUnlockItemStyle = 2571,
    k_EMsgClientToGCUnlockItemStyleResponse = 2572,
    k_EMsgClientToGCSetItemInventoryCategory = 2573,
    k_EMsgClientToGCUnlockCrate = 2574,
    k_EMsgClientToGCUnlockCrateResponse = 2575,
    k_EMsgClientToGCUnpackBundle = 2576,
    k_EMsgClientToGCSetItemStyle = 2577,
    k_EMsgClientToGCSetItemStyleResponse = 2578,
    k_EMsgSQLGCToGCGrantBackpackSlots = 2580,
    k_EMsgClientToGCLookupAccountName = 2581,
    k_EMsgClientToGCLookupAccountNameResponse = 2582,
    k_EMsgClientToGCCreateStaticRecipe = 2584,
    k_EMsgClientToGCCreateStaticRecipeResponse = 2585,
    k_EMsgGCToGCStoreProcessCDKeyTransaction = 2586,
    k_EMsgGCToGCStoreProcessCDKeyTransactionResponse = 2587,
    k_EMsgGCToGCStoreProcessSettlement = 2588,
    k_EMsgGCToGCStoreProcessSettlementResponse = 2589,
    k_EMsgGCToGCConsoleOutput = 2590,
    k_EMsgGCToClientItemAges = 2591,
    k_EMsgGCToGCInternalTestMsg = 2592,
    k_EMsgGCToGCClientServerVersionsUpdated = 2593,
    k_EMsgGCUseMultipleItemsRequest = 2594,
    k_EMsgGCGetAccountSubscriptionItem = 2595,
    k_EMsgGCGetAccountSubscriptionItemResponse = 2596,
    k_EMsgGCToGCBroadcastMessageFromSub = 2598,
    k_EMsgGCToClientCurrencyPricePoints = 2599,
    k_EMsgGCToGCAddSubscriptionTime = 2600,
    k_EMsgGCToGCFlushSteamInventoryCache = 2601,
    k_EMsgGCRequestCrateEscalationLevel = 2602,
    k_EMsgGCRequestCrateEscalationLevelResponse = 2603,
    k_EMsgGCToGCUpdateSubscriptionItems = 2604,
    k_EMsgGCToGCSelfPing = 2605,
    k_EMsgGCToGCGetInfuxIntervalStats = 2606,
    k_EMsgGCToGCGetInfuxIntervalStatsResponse = 2607,
    k_EMsgGCToGCPurchaseSucceeded = 2608,
    k_EMsgClientToGCGetLimitedItemPurchaseQuantity = 2609,
    k_EMsgClientToGCGetLimitedItemPurchaseQuantityResponse = 2610,
    k_EMsgGCToGCBetaDeleteItems = 2611,
    k_EMsgClientToGCGetInFlightItemCharges = 2612,
    k_EMsgClientToGCGetInFlightItemChargesResponse = 2613,
    k_EMsgGCToClientInFlightChargesUpdated = 2614,
    k_EMsgClientToGCPurchaseChargeCostItems = 2615,
    k_EMsgClientToGCPurchaseChargeCostItemsResponse = 2616,
    k_EMsgClientToGCCancelUnfinalizedTransactions = 2617,
    k_EMsgClientToGCCancelUnfinalizedTransactionsResponse = 2618
}
declare function eGCItemMsgFromJSON(object: any): EGCItemMsg;
declare function eGCItemMsgToJSON(object: EGCItemMsg): string;
declare enum EGCMsgInitiateTradeResponse {
    k_EGCMsgInitiateTradeResponse_Accepted = 0,
    k_EGCMsgInitiateTradeResponse_Declined = 1,
    k_EGCMsgInitiateTradeResponse_VAC_Banned_Initiator = 2,
    k_EGCMsgInitiateTradeResponse_VAC_Banned_Target = 3,
    k_EGCMsgInitiateTradeResponse_Target_Already_Trading = 4,
    k_EGCMsgInitiateTradeResponse_Disabled = 5,
    k_EGCMsgInitiateTradeResponse_NotLoggedIn = 6,
    k_EGCMsgInitiateTradeResponse_Cancel = 7,
    k_EGCMsgInitiateTradeResponse_TooSoon = 8,
    k_EGCMsgInitiateTradeResponse_TooSoonPenalty = 9,
    k_EGCMsgInitiateTradeResponse_Trade_Banned_Initiator = 10,
    k_EGCMsgInitiateTradeResponse_Trade_Banned_Target = 11,
    k_EGCMsgInitiateTradeResponse_Free_Account_Initiator_DEPRECATED = 12,
    k_EGCMsgInitiateTradeResponse_Shared_Account_Initiator = 13,
    k_EGCMsgInitiateTradeResponse_Service_Unavailable = 14,
    k_EGCMsgInitiateTradeResponse_Target_Blocked = 15,
    k_EGCMsgInitiateTradeResponse_NeedVerifiedEmail = 16,
    k_EGCMsgInitiateTradeResponse_NeedSteamGuard = 17,
    k_EGCMsgInitiateTradeResponse_SteamGuardDuration = 18,
    k_EGCMsgInitiateTradeResponse_TheyCannotTrade = 19,
    k_EGCMsgInitiateTradeResponse_Recent_Password_Reset = 20,
    k_EGCMsgInitiateTradeResponse_Using_New_Device = 21,
    k_EGCMsgInitiateTradeResponse_Sent_Invalid_Cookie = 22,
    k_EGCMsgInitiateTradeResponse_TooRecentFriend = 23,
    k_EGCMsgInitiateTradeResponse_WalledFundsNotTrusted = 24
}
declare function eGCMsgInitiateTradeResponseFromJSON(object: any): EGCMsgInitiateTradeResponse;
declare function eGCMsgInitiateTradeResponseToJSON(object: EGCMsgInitiateTradeResponse): string;
declare enum CMsgRequestCrateItemsResponse_EResult {
    k_Succeeded = 0,
    k_Failed = 1
}
declare function cMsgRequestCrateItemsResponse_EResultFromJSON(object: any): CMsgRequestCrateItemsResponse_EResult;
declare function cMsgRequestCrateItemsResponse_EResultToJSON(object: CMsgRequestCrateItemsResponse_EResult): string;
declare enum CMsgRequestCrateEscalationLevelResponse_EResult {
    k_Succeeded = 0,
    k_Failed = 1
}
declare function cMsgRequestCrateEscalationLevelResponse_EResultFromJSON(object: any): CMsgRequestCrateEscalationLevelResponse_EResult;
declare function cMsgRequestCrateEscalationLevelResponse_EResultToJSON(object: CMsgRequestCrateEscalationLevelResponse_EResult): string;
declare enum CMsgRedeemCodeResponse_EResultCode {
    k_Succeeded = 0,
    k_Failed_CodeNotFound = 1,
    k_Failed_CodeAlreadyUsed = 2,
    k_Failed_OtherError = 3
}
declare function cMsgRedeemCodeResponse_EResultCodeFromJSON(object: any): CMsgRedeemCodeResponse_EResultCode;
declare function cMsgRedeemCodeResponse_EResultCodeToJSON(object: CMsgRedeemCodeResponse_EResultCode): string;
declare enum CMsgClientToGCUnpackBundleResponse_EUnpackBundle {
    k_UnpackBundle_Succeeded = 0,
    k_UnpackBundle_Failed_ItemIsNotBundle = 1,
    k_UnpackBundle_Failed_UnableToCreateContainedItem = 2,
    k_UnpackBundle_Failed_SOCacheError = 3,
    k_UnpackBundle_Failed_ItemIsInvalid = 4,
    k_UnpackBundle_Failed_BadItemQuantity = 5,
    k_UnpackBundle_Failed_UnableToDeleteItem = 6
}
declare function cMsgClientToGCUnpackBundleResponse_EUnpackBundleFromJSON(object: any): CMsgClientToGCUnpackBundleResponse_EUnpackBundle;
declare function cMsgClientToGCUnpackBundleResponse_EUnpackBundleToJSON(object: CMsgClientToGCUnpackBundleResponse_EUnpackBundle): string;
declare enum CMsgClientToGCPackBundleResponse_EPackBundle {
    k_PackBundle_Succeeded = 0,
    k_PackBundle_Failed_InternalError = 1,
    k_PackBundle_Failed_ItemIsNotBundle = 2,
    k_PackBundle_Failed_SOCacheError = 3,
    k_PackBundle_Failed_ItemIsInvalid = 4,
    k_PackBundle_Failed_BadItemQuantity = 5,
    k_PackBundle_Failed_UnableToDeleteItem = 6,
    k_PackBundle_Failed_BundleCannotBePacked = 7,
    k_PackBundle_Failed_ItemIsUntradeable = 8,
    k_PackBundle_Failed_ItemIsEquipped = 9,
    k_PackBundle_Failed_ItemHasGems = 10,
    k_PackBundle_Failed_ItemMixedQuality = 11,
    k_PackBundle_Failed_ItemInvalidQuality = 12,
    k_PackBundle_Failed_ItemIsNonEconomy = 13,
    k_PackBundle_Failed_Disabled = 14
}
declare function cMsgClientToGCPackBundleResponse_EPackBundleFromJSON(object: any): CMsgClientToGCPackBundleResponse_EPackBundle;
declare function cMsgClientToGCPackBundleResponse_EPackBundleToJSON(object: CMsgClientToGCPackBundleResponse_EPackBundle): string;
declare enum CMsgClientToGCSetItemStyleResponse_ESetStyle {
    k_SetStyle_Succeeded = 0,
    k_SetStyle_Failed = 1,
    k_SetStyle_Failed_StyleIsLocked = 2
}
declare function cMsgClientToGCSetItemStyleResponse_ESetStyleFromJSON(object: any): CMsgClientToGCSetItemStyleResponse_ESetStyle;
declare function cMsgClientToGCSetItemStyleResponse_ESetStyleToJSON(object: CMsgClientToGCSetItemStyleResponse_ESetStyle): string;
declare enum CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle {
    k_UnlockStyle_Succeeded = 0,
    k_UnlockStyle_Failed_PreReq = 1,
    k_UnlockStyle_Failed_CantAfford = 2,
    k_UnlockStyle_Failed_CantCommit = 3,
    k_UnlockStyle_Failed_CantLockCache = 4,
    k_UnlockStyle_Failed_CantAffordAttrib = 5,
    k_UnlockStyle_Failed_CantAffordGem = 6,
    k_UnlockStyle_Failed_NoCompendiumLevel = 7,
    k_UnlockStyle_Failed_AlreadyUnlocked = 8,
    k_UnlockStyle_Failed_OtherError = 9,
    k_UnlockStyle_Failed_ItemIsInvalid = 10,
    k_UnlockStyle_Failed_ToolIsInvalid = 11
}
declare function cMsgClientToGCUnlockItemStyleResponse_EUnlockStyleFromJSON(object: any): CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle;
declare function cMsgClientToGCUnlockItemStyleResponse_EUnlockStyleToJSON(object: CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle): string;
declare enum CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute {
    k_RemoveItemAttribute_Succeeded = 0,
    k_RemoveItemAttribute_Failed = 1,
    k_RemoveItemAttribute_Failed_ItemIsInvalid = 2,
    k_RemoveItemAttribute_Failed_AttributeCannotBeRemoved = 3,
    k_RemoveItemAttribute_Failed_AttributeDoesntExist = 4
}
declare function cMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttributeFromJSON(object: any): CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute;
declare function cMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttributeToJSON(object: CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute): string;
declare enum CMsgClientToGCNameItemResponse_ENameItem {
    k_NameItem_Succeeded = 0,
    k_NameItem_Failed = 1,
    k_NameItem_Failed_ToolIsInvalid = 2,
    k_NameItem_Failed_ItemIsInvalid = 3,
    k_NameItem_Failed_NameIsInvalid = 4
}
declare function cMsgClientToGCNameItemResponse_ENameItemFromJSON(object: any): CMsgClientToGCNameItemResponse_ENameItem;
declare function cMsgClientToGCNameItemResponse_ENameItemToJSON(object: CMsgClientToGCNameItemResponse_ENameItem): string;
declare enum CMsgClientToGCCreateStaticRecipeResponse_EResponse {
    eResponse_Success = 0,
    eResponse_OfferingDisabled = 1,
    eResponse_InvalidItems = 2,
    eResponse_InternalError = 3,
    eResponse_MissingLeague = 4,
    eResponse_MissingEvent = 5
}
declare function cMsgClientToGCCreateStaticRecipeResponse_EResponseFromJSON(object: any): CMsgClientToGCCreateStaticRecipeResponse_EResponse;
declare function cMsgClientToGCCreateStaticRecipeResponse_EResponseToJSON(object: CMsgClientToGCCreateStaticRecipeResponse_EResponse): string;
declare enum CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidItemDef = 5,
    k_eItemDefNotLimited = 6
}
declare function cMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponseFromJSON(object: any): CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse;
declare function cMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponseToJSON(object: CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse): string;
declare enum CMsgClientToGCGetInFlightItemChargesResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidItemDef = 5
}
declare function cMsgClientToGCGetInFlightItemChargesResponse_EResponseFromJSON(object: any): CMsgClientToGCGetInFlightItemChargesResponse_EResponse;
declare function cMsgClientToGCGetInFlightItemChargesResponse_EResponseToJSON(object: CMsgClientToGCGetInFlightItemChargesResponse_EResponse): string;
declare enum CMsgClientToGCPurchaseChargeCostItemsResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidParam = 5,
    k_eInvalidPrice = 6,
    k_eInsufficientCharges = 7,
    k_eLimitedItem = 8,
    k_eMissingPrereq = 10
}
declare function cMsgClientToGCPurchaseChargeCostItemsResponse_EResponseFromJSON(object: any): CMsgClientToGCPurchaseChargeCostItemsResponse_EResponse;
declare function cMsgClientToGCPurchaseChargeCostItemsResponse_EResponseToJSON(object: CMsgClientToGCPurchaseChargeCostItemsResponse_EResponse): string;
interface CMsgApplyAutograph {
    autographItemId: string;
    itemItemId: string;
}
declare const CMsgApplyAutograph: MessageFns$4<CMsgApplyAutograph>;
interface CMsgAdjustItemEquippedState {
    itemId: string;
    newClass: number;
    newSlot: number;
    styleIndex: number;
}
declare const CMsgAdjustItemEquippedState: MessageFns$4<CMsgAdjustItemEquippedState>;
interface CMsgEconPlayerStrangeCountAdjustment {
    accountId: number;
    strangeCountAdjustments: CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment[];
    turboMode: boolean;
}
declare const CMsgEconPlayerStrangeCountAdjustment: MessageFns$4<CMsgEconPlayerStrangeCountAdjustment>;
interface CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment {
    eventType: number;
    itemId: string;
    adjustment: number;
}
declare const CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment: MessageFns$4<CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment>;
interface CMsgCraftingResponse {
    itemIds: string[];
}
declare const CMsgCraftingResponse: MessageFns$4<CMsgCraftingResponse>;
interface CMsgGCRequestStoreSalesData {
    version: number;
    currency: number;
}
declare const CMsgGCRequestStoreSalesData: MessageFns$4<CMsgGCRequestStoreSalesData>;
interface CMsgGCRequestStoreSalesDataResponse {
    salePrice: CMsgGCRequestStoreSalesDataResponse_Price[];
    version: number;
    expirationTime: number;
}
declare const CMsgGCRequestStoreSalesDataResponse: MessageFns$4<CMsgGCRequestStoreSalesDataResponse>;
interface CMsgGCRequestStoreSalesDataResponse_Price {
    itemDef: number;
    price: number;
}
declare const CMsgGCRequestStoreSalesDataResponse_Price: MessageFns$4<CMsgGCRequestStoreSalesDataResponse_Price>;
interface CMsgGCRequestStoreSalesDataUpToDateResponse {
    version: number;
    expirationTime: number;
}
declare const CMsgGCRequestStoreSalesDataUpToDateResponse: MessageFns$4<CMsgGCRequestStoreSalesDataUpToDateResponse>;
interface CMsgGCToGCPingRequest {
}
declare const CMsgGCToGCPingRequest: MessageFns$4<CMsgGCToGCPingRequest>;
interface CMsgGCToGCPingResponse {
}
declare const CMsgGCToGCPingResponse: MessageFns$4<CMsgGCToGCPingResponse>;
interface CMsgGCToGCGetUserSessionServer {
    accountId: number;
}
declare const CMsgGCToGCGetUserSessionServer: MessageFns$4<CMsgGCToGCGetUserSessionServer>;
interface CMsgGCToGCGetUserSessionServerResponse {
    serverSteamId: string;
    isOnline: boolean;
}
declare const CMsgGCToGCGetUserSessionServerResponse: MessageFns$4<CMsgGCToGCGetUserSessionServerResponse>;
interface CMsgGCToGCGetUserServerMembers {
    accountId: number;
    maxSpectators: number;
}
declare const CMsgGCToGCGetUserServerMembers: MessageFns$4<CMsgGCToGCGetUserServerMembers>;
interface CMsgGCToGCGetUserServerMembersResponse {
    memberAccountId: number[];
}
declare const CMsgGCToGCGetUserServerMembersResponse: MessageFns$4<CMsgGCToGCGetUserServerMembersResponse>;
interface CMsgLookupMultipleAccountNames {
    accountids: number[];
}
declare const CMsgLookupMultipleAccountNames: MessageFns$4<CMsgLookupMultipleAccountNames>;
interface CMsgLookupMultipleAccountNamesResponse {
    accounts: CMsgLookupMultipleAccountNamesResponse_Account[];
}
declare const CMsgLookupMultipleAccountNamesResponse: MessageFns$4<CMsgLookupMultipleAccountNamesResponse>;
interface CMsgLookupMultipleAccountNamesResponse_Account {
    accountid: number;
    persona: string;
}
declare const CMsgLookupMultipleAccountNamesResponse_Account: MessageFns$4<CMsgLookupMultipleAccountNamesResponse_Account>;
interface CMsgRequestCrateItems {
    crateItemDef: number;
}
declare const CMsgRequestCrateItems: MessageFns$4<CMsgRequestCrateItems>;
interface CMsgRequestCrateItemsResponse {
    response: number;
    itemDefs: number[];
    peekItemDefs: number[];
    peekItems: CSOEconItem[];
}
declare const CMsgRequestCrateItemsResponse: MessageFns$4<CMsgRequestCrateItemsResponse>;
interface CMsgRequestCrateEscalationLevel {
    crateItemDef: number;
}
declare const CMsgRequestCrateEscalationLevel: MessageFns$4<CMsgRequestCrateEscalationLevel>;
interface CMsgRequestCrateEscalationLevelResponse {
    response: number;
    escalationLevel0: number;
    escalationLevel1: number;
    escalationLevel2: number;
    escalationLevel3: number;
}
declare const CMsgRequestCrateEscalationLevelResponse: MessageFns$4<CMsgRequestCrateEscalationLevelResponse>;
interface CMsgGCToGCCanUseDropRateBonus {
    accountId: number;
    dropRateBonus: number;
    boosterType: number;
    exclusiveItemDef: number;
    allowEqualRate: boolean;
}
declare const CMsgGCToGCCanUseDropRateBonus: MessageFns$4<CMsgGCToGCCanUseDropRateBonus>;
interface CMsgSQLAddDropRateBonus {
    accountId: number;
    itemId: string;
    itemDef: number;
    dropRateBonus: number;
    boosterType: number;
    secondsDuration: number;
    endTimeStamp: number;
}
declare const CMsgSQLAddDropRateBonus: MessageFns$4<CMsgSQLAddDropRateBonus>;
interface CMsgSQLUpgradeBattleBooster {
    accountId: number;
    itemDef: number;
    bonusToAdd: number;
    boosterType: number;
}
declare const CMsgSQLUpgradeBattleBooster: MessageFns$4<CMsgSQLUpgradeBattleBooster>;
interface CMsgGCToGCRefreshSOCache {
    accountId: number;
    reload: boolean;
}
declare const CMsgGCToGCRefreshSOCache: MessageFns$4<CMsgGCToGCRefreshSOCache>;
interface CMsgGCToGCAddSubscriptionTime {
    accountId: number;
    matchingSubscriptionDefIndexes: number[];
    additionalSeconds: number;
}
declare const CMsgGCToGCAddSubscriptionTime: MessageFns$4<CMsgGCToGCAddSubscriptionTime>;
interface CMsgGCToGCGrantAccountRolledItems {
    accountId: number;
    items: CMsgGCToGCGrantAccountRolledItems_Item[];
    auditAction: number;
    auditData: string;
}
declare const CMsgGCToGCGrantAccountRolledItems: MessageFns$4<CMsgGCToGCGrantAccountRolledItems>;
interface CMsgGCToGCGrantAccountRolledItems_Item {
    itemDef: number;
    lootLists: string[];
    ignoreLimit: boolean;
    origin: number;
    dynamicAttributes: CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute[];
    additionalAuditEntries: CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry[];
    inventoryToken: number;
    quality: number;
}
declare const CMsgGCToGCGrantAccountRolledItems_Item: MessageFns$4<CMsgGCToGCGrantAccountRolledItems_Item>;
interface CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute {
    name: string;
    valueUint32: number;
    valueFloat: number;
    valueString: string;
}
declare const CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute: MessageFns$4<CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute>;
interface CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry {
    ownerAccountId: number;
    auditAction: number;
    auditData: string;
}
declare const CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry: MessageFns$4<CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry>;
interface CMsgGCToGCBetaDeleteItems {
    accountId: number;
    itemIds: string[];
    itemDefs: number[];
}
declare const CMsgGCToGCBetaDeleteItems: MessageFns$4<CMsgGCToGCBetaDeleteItems>;
interface CMsgGCToGCGrantSelfMadeItemToAccount {
    itemDefIndex: number;
    accountid: number;
}
declare const CMsgGCToGCGrantSelfMadeItemToAccount: MessageFns$4<CMsgGCToGCGrantSelfMadeItemToAccount>;
interface CMsgUseItem {
    itemId: string;
    targetSteamId: string;
    giftPotentialTargets: number[];
    duelClassLock: number;
    initiatorSteamId: string;
    itempackAckImmediately: boolean;
}
declare const CMsgUseItem: MessageFns$4<CMsgUseItem>;
interface CMsgServerUseItem {
    initiatorAccountId: number;
    useItemMsg: CMsgUseItem | undefined;
}
declare const CMsgServerUseItem: MessageFns$4<CMsgServerUseItem>;
interface CMsgUseMultipleItems {
    itemIds: string[];
}
declare const CMsgUseMultipleItems: MessageFns$4<CMsgUseMultipleItems>;
interface CGCStoreRechargeRedirectLineItem {
    itemDefId: number;
    quantity: number;
}
declare const CGCStoreRechargeRedirectLineItem: MessageFns$4<CGCStoreRechargeRedirectLineItem>;
interface CMsgGCEconSQLWorkItemEmbeddedRollbackData {
    accountId: number;
    deletedItemId: string;
    oldAuditAction: number;
    newAuditAction: number;
    expectedAuditAction: number;
}
declare const CMsgGCEconSQLWorkItemEmbeddedRollbackData: MessageFns$4<CMsgGCEconSQLWorkItemEmbeddedRollbackData>;
interface CMsgCraftStatue {
    heroid: number;
    sequencename: string;
    cycle: number;
    description: string;
    pedestalItemdef: number;
    toolid: string;
}
declare const CMsgCraftStatue: MessageFns$4<CMsgCraftStatue>;
interface CMsgRedeemCode {
    code: string;
}
declare const CMsgRedeemCode: MessageFns$4<CMsgRedeemCode>;
interface CMsgRedeemCodeResponse {
    response: number;
    itemId: string;
}
declare const CMsgRedeemCodeResponse: MessageFns$4<CMsgRedeemCodeResponse>;
interface CMsgDevNewItemRequest {
    itemDefName: string;
    lootListName: string;
    attrDefName: string[];
    attrValue: string[];
    itemQuality: number;
}
declare const CMsgDevNewItemRequest: MessageFns$4<CMsgDevNewItemRequest>;
interface CMsgDevNewItemRequestResponse {
    success: boolean;
}
declare const CMsgDevNewItemRequestResponse: MessageFns$4<CMsgDevNewItemRequestResponse>;
interface CMsgDevUnlockAllItemStyles {
    itemId: string;
}
declare const CMsgDevUnlockAllItemStyles: MessageFns$4<CMsgDevUnlockAllItemStyles>;
interface CMsgDevUnlockAllItemStylesResponse {
    success: boolean;
}
declare const CMsgDevUnlockAllItemStylesResponse: MessageFns$4<CMsgDevUnlockAllItemStylesResponse>;
interface CMsgGCGetAccountSubscriptionItem {
    accountId: number;
}
declare const CMsgGCGetAccountSubscriptionItem: MessageFns$4<CMsgGCGetAccountSubscriptionItem>;
interface CMsgGCGetAccountSubscriptionItemResponse {
    defIndex: number;
}
declare const CMsgGCGetAccountSubscriptionItemResponse: MessageFns$4<CMsgGCGetAccountSubscriptionItemResponse>;
interface CMsgGCAddGiftItem {
    gifterAccountId: number;
    receiverAccountId: number;
    wrappedItem: CSOEconItem | undefined;
    giftMessage: string;
    isWalletCashTrusted: boolean;
}
declare const CMsgGCAddGiftItem: MessageFns$4<CMsgGCAddGiftItem>;
interface CMsgClientToGCWrapAndDeliverGift {
    itemId: string;
    giveToAccountId: number;
    giftMessage: string;
}
declare const CMsgClientToGCWrapAndDeliverGift: MessageFns$4<CMsgClientToGCWrapAndDeliverGift>;
interface CMsgSQLGCToGCRevokeUntrustedGift {
    accountId: number;
    sentItemId: string;
}
declare const CMsgSQLGCToGCRevokeUntrustedGift: MessageFns$4<CMsgSQLGCToGCRevokeUntrustedGift>;
interface CMsgClientToGCWrapAndDeliverGiftResponse {
    response: EGCMsgResponse;
    giftingChargeUses: number;
    giftingChargeMax: number;
    giftingUses: number;
    giftingMax: number;
    giftingWindowHours: number;
    tradeRestriction: EGCMsgInitiateTradeResponse;
}
declare const CMsgClientToGCWrapAndDeliverGiftResponse: MessageFns$4<CMsgClientToGCWrapAndDeliverGiftResponse>;
interface CMsgClientToGCUnwrapGift {
    itemId: string;
}
declare const CMsgClientToGCUnwrapGift: MessageFns$4<CMsgClientToGCUnwrapGift>;
interface CMsgClientToGCGetGiftPermissions {
}
declare const CMsgClientToGCGetGiftPermissions: MessageFns$4<CMsgClientToGCGetGiftPermissions>;
interface CMsgClientToGCGetGiftPermissionsResponse {
    isUnlimited: boolean;
    hasTwoFactor: boolean;
    senderPermission: EGCMsgInitiateTradeResponse;
    friendshipAgeRequirement: number;
    friendshipAgeRequirementTwoFactor: number;
    friendPermissions: CMsgClientToGCGetGiftPermissionsResponse_FriendPermission[];
}
declare const CMsgClientToGCGetGiftPermissionsResponse: MessageFns$4<CMsgClientToGCGetGiftPermissionsResponse>;
interface CMsgClientToGCGetGiftPermissionsResponse_FriendPermission {
    accountId: number;
    permission: EGCMsgInitiateTradeResponse;
}
declare const CMsgClientToGCGetGiftPermissionsResponse_FriendPermission: MessageFns$4<CMsgClientToGCGetGiftPermissionsResponse_FriendPermission>;
interface CMsgClientToGCUnpackBundle {
    itemId: string;
}
declare const CMsgClientToGCUnpackBundle: MessageFns$4<CMsgClientToGCUnpackBundle>;
interface CMsgClientToGCUnpackBundleResponse {
    unpackedItemIds: string[];
    response: CMsgClientToGCUnpackBundleResponse_EUnpackBundle;
    unpackedItemDefIndexes: number[];
}
declare const CMsgClientToGCUnpackBundleResponse: MessageFns$4<CMsgClientToGCUnpackBundleResponse>;
interface CMsgClientToGCPackBundle {
    itemIds: string[];
    bundleItemDefIndex: number;
}
declare const CMsgClientToGCPackBundle: MessageFns$4<CMsgClientToGCPackBundle>;
interface CMsgClientToGCPackBundleResponse {
    itemId: string;
    response: CMsgClientToGCPackBundleResponse_EPackBundle;
}
declare const CMsgClientToGCPackBundleResponse: MessageFns$4<CMsgClientToGCPackBundleResponse>;
interface CMsgGCToClientStoreTransactionCompleted {
    txnId: string;
    itemIds: string[];
}
declare const CMsgGCToClientStoreTransactionCompleted: MessageFns$4<CMsgGCToClientStoreTransactionCompleted>;
interface CMsgClientToGCEquipItems {
    equips: CMsgAdjustItemEquippedState[];
}
declare const CMsgClientToGCEquipItems: MessageFns$4<CMsgClientToGCEquipItems>;
interface CMsgClientToGCEquipItemsResponse {
    soCacheVersionId: string;
}
declare const CMsgClientToGCEquipItemsResponse: MessageFns$4<CMsgClientToGCEquipItemsResponse>;
interface CMsgClientToGCSetItemStyle {
    itemId: string;
    styleIndex: number;
}
declare const CMsgClientToGCSetItemStyle: MessageFns$4<CMsgClientToGCSetItemStyle>;
interface CMsgClientToGCSetItemStyleResponse {
    response: CMsgClientToGCSetItemStyleResponse_ESetStyle;
}
declare const CMsgClientToGCSetItemStyleResponse: MessageFns$4<CMsgClientToGCSetItemStyleResponse>;
interface CMsgClientToGCUnlockItemStyle {
    itemToUnlock: string;
    styleIndex: number;
    consumableItemIds: string[];
}
declare const CMsgClientToGCUnlockItemStyle: MessageFns$4<CMsgClientToGCUnlockItemStyle>;
interface CMsgClientToGCUnlockItemStyleResponse {
    response: CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle;
    itemId: string;
    styleIndex: number;
    stylePrereq: number;
}
declare const CMsgClientToGCUnlockItemStyleResponse: MessageFns$4<CMsgClientToGCUnlockItemStyleResponse>;
interface CMsgClientToGCSetItemInventoryCategory {
    itemIds: string[];
    setToValue: number;
    removeCategories: number;
    addCategories: number;
}
declare const CMsgClientToGCSetItemInventoryCategory: MessageFns$4<CMsgClientToGCSetItemInventoryCategory>;
interface CMsgClientToGCUnlockCrate {
    crateItemId: string;
    keyItemId: string;
}
declare const CMsgClientToGCUnlockCrate: MessageFns$4<CMsgClientToGCUnlockCrate>;
interface CMsgClientToGCUnlockCrateResponse {
    result: EGCMsgResponse;
    grantedItems: CMsgClientToGCUnlockCrateResponse_Item[];
}
declare const CMsgClientToGCUnlockCrateResponse: MessageFns$4<CMsgClientToGCUnlockCrateResponse>;
interface CMsgClientToGCUnlockCrateResponse_Item {
    itemId: string;
    defIndex: number;
}
declare const CMsgClientToGCUnlockCrateResponse_Item: MessageFns$4<CMsgClientToGCUnlockCrateResponse_Item>;
interface CMsgClientToGCRemoveItemAttribute {
    itemId: string;
}
declare const CMsgClientToGCRemoveItemAttribute: MessageFns$4<CMsgClientToGCRemoveItemAttribute>;
interface CMsgClientToGCRemoveItemAttributeResponse {
    response: CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute;
    itemId: string;
}
declare const CMsgClientToGCRemoveItemAttributeResponse: MessageFns$4<CMsgClientToGCRemoveItemAttributeResponse>;
interface CMsgClientToGCNameItem {
    subjectItemId: string;
    toolItemId: string;
    name: string;
}
declare const CMsgClientToGCNameItem: MessageFns$4<CMsgClientToGCNameItem>;
interface CMsgClientToGCNameItemResponse {
    response: CMsgClientToGCNameItemResponse_ENameItem;
    itemId: string;
}
declare const CMsgClientToGCNameItemResponse: MessageFns$4<CMsgClientToGCNameItemResponse>;
interface CMsgGCSetItemPosition {
    itemId: string;
    newPosition: number;
}
declare const CMsgGCSetItemPosition: MessageFns$4<CMsgGCSetItemPosition>;
interface CAttributeItemDynamicRecipeComponent {
    itemDef: number;
    itemQuality: number;
    itemFlags: number;
    attributesString: string;
    itemCount: number;
    itemsFulfilled: number;
    itemRarity: number;
    lootlist: string;
    fulfilledItemId: string;
    associatedItemDef: number;
}
declare const CAttributeItemDynamicRecipeComponent: MessageFns$4<CAttributeItemDynamicRecipeComponent>;
interface CProtoItemSocket {
    itemId: string;
    attrDefIndex: number;
    requiredType: number;
    requiredHero: string;
    gemDefIndex: number;
    notTradable: boolean;
    requiredItemSlot: string;
}
declare const CProtoItemSocket: MessageFns$4<CProtoItemSocket>;
interface CProtoItemSocketEmpty {
    socket: CProtoItemSocket | undefined;
}
declare const CProtoItemSocketEmpty: MessageFns$4<CProtoItemSocketEmpty>;
interface CProtoItemSocketEffect {
    socket: CProtoItemSocket | undefined;
    effect: number;
}
declare const CProtoItemSocketEffect: MessageFns$4<CProtoItemSocketEffect>;
interface CProtoItemSocketColor {
    socket: CProtoItemSocket | undefined;
    red: number;
    green: number;
    blue: number;
}
declare const CProtoItemSocketColor: MessageFns$4<CProtoItemSocketColor>;
interface CProtoItemSocketStrange {
    socket: CProtoItemSocket | undefined;
    strangeType: number;
    strangeValue: number;
}
declare const CProtoItemSocketStrange: MessageFns$4<CProtoItemSocketStrange>;
interface CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY {
    socket: CProtoItemSocket | undefined;
    strangeType: number;
    strangeValue: number;
    abilityEffect: number;
}
declare const CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY: MessageFns$4<CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY>;
interface CProtoItemSocketSpectator {
    socket: CProtoItemSocket | undefined;
    gamesViewed: number;
    corporationId: number;
    leagueId: number;
    teamId: number;
}
declare const CProtoItemSocketSpectator: MessageFns$4<CProtoItemSocketSpectator>;
interface CProtoItemSocketAssetModifier {
    socket: CProtoItemSocket | undefined;
    assetModifier: number;
}
declare const CProtoItemSocketAssetModifier: MessageFns$4<CProtoItemSocketAssetModifier>;
interface CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY {
    socket: CProtoItemSocket | undefined;
    assetModifier: number;
    animModifier: number;
    abilityEffect: number;
}
declare const CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY: MessageFns$4<CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY>;
interface CProtoItemSocketAutograph {
    socket: CProtoItemSocket | undefined;
    autograph: string;
    autographId: number;
    autographScore: number;
}
declare const CProtoItemSocketAutograph: MessageFns$4<CProtoItemSocketAutograph>;
interface CProtoItemSocketStaticVisuals {
    socket: CProtoItemSocket | undefined;
}
declare const CProtoItemSocketStaticVisuals: MessageFns$4<CProtoItemSocketStaticVisuals>;
interface CAttributeString {
    value: string;
}
declare const CAttributeString: MessageFns$4<CAttributeString>;
interface CWorkshopGetItemDailyRevenueRequest {
    appid: number;
    itemId: number;
    dateStart: number;
    dateEnd: number;
}
declare const CWorkshopGetItemDailyRevenueRequest: MessageFns$4<CWorkshopGetItemDailyRevenueRequest>;
interface CWorkshopGetItemDailyRevenueResponse {
    countryRevenue: CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue[];
}
declare const CWorkshopGetItemDailyRevenueResponse: MessageFns$4<CWorkshopGetItemDailyRevenueResponse>;
interface CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue {
    countryCode: string;
    date: number;
    revenueUsd: string;
    units: number;
}
declare const CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue: MessageFns$4<CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue>;
interface CWorkshopGetPackageDailyRevenueRequest {
    packageid: number;
    dateStart: number;
    dateEnd: number;
}
declare const CWorkshopGetPackageDailyRevenueRequest: MessageFns$4<CWorkshopGetPackageDailyRevenueRequest>;
interface CWorkshopGetPackageDailyRevenueResponse {
    countryRevenue: CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue[];
}
declare const CWorkshopGetPackageDailyRevenueResponse: MessageFns$4<CWorkshopGetPackageDailyRevenueResponse>;
interface CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue {
    countryCode: string;
    date: number;
    revenueUsd: string;
    units: number;
}
declare const CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue: MessageFns$4<CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue>;
interface CMsgSQLGCToGCGrantBackpackSlots {
    accountId: number;
    addSlots: number;
}
declare const CMsgSQLGCToGCGrantBackpackSlots: MessageFns$4<CMsgSQLGCToGCGrantBackpackSlots>;
interface CMsgClientToGCLookupAccountName {
    accountId: number;
}
declare const CMsgClientToGCLookupAccountName: MessageFns$4<CMsgClientToGCLookupAccountName>;
interface CMsgClientToGCLookupAccountNameResponse {
    accountId: number;
    accountName: string;
}
declare const CMsgClientToGCLookupAccountNameResponse: MessageFns$4<CMsgClientToGCLookupAccountNameResponse>;
interface CMsgClientToGCCreateStaticRecipe {
    items: CMsgClientToGCCreateStaticRecipe_Item[];
    recipeDefIndex: number;
}
declare const CMsgClientToGCCreateStaticRecipe: MessageFns$4<CMsgClientToGCCreateStaticRecipe>;
interface CMsgClientToGCCreateStaticRecipe_Item {
    itemId: string;
    slotId: number;
}
declare const CMsgClientToGCCreateStaticRecipe_Item: MessageFns$4<CMsgClientToGCCreateStaticRecipe_Item>;
interface CMsgClientToGCCreateStaticRecipeResponse {
    response: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
    outputItems: CMsgClientToGCCreateStaticRecipeResponse_OutputItem[];
    inputErrors: CMsgClientToGCCreateStaticRecipeResponse_InputError[];
    additionalOutputs: CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput[];
}
declare const CMsgClientToGCCreateStaticRecipeResponse: MessageFns$4<CMsgClientToGCCreateStaticRecipeResponse>;
interface CMsgClientToGCCreateStaticRecipeResponse_OutputItem {
    defIndex: number;
    itemId: string;
    slotId: number;
}
declare const CMsgClientToGCCreateStaticRecipeResponse_OutputItem: MessageFns$4<CMsgClientToGCCreateStaticRecipeResponse_OutputItem>;
interface CMsgClientToGCCreateStaticRecipeResponse_InputError {
    slotId: number;
    error: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
}
declare const CMsgClientToGCCreateStaticRecipeResponse_InputError: MessageFns$4<CMsgClientToGCCreateStaticRecipeResponse_InputError>;
interface CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput {
    slotId: number;
    value: string;
}
declare const CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput: MessageFns$4<CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput>;
interface CMsgProcessTransactionOrder {
    txnId: string;
    steamTxnId: string;
    partnerTxnId: string;
    steamId: string;
    timeStamp: number;
    watermark: string;
    purchaseReportStatus: number;
    currency: number;
    items: CMsgProcessTransactionOrder_Item[];
}
declare const CMsgProcessTransactionOrder: MessageFns$4<CMsgProcessTransactionOrder>;
interface CMsgProcessTransactionOrder_Item {
    itemDefIndex: number;
    itemPrice: number;
    quantity: number;
    categoryDesc: string;
    storePurchaseType: number;
    sourceReferenceId: string;
    parentStackIndex: number;
    defaultPrice: boolean;
    isUserFacing: boolean;
    priceIndex: number;
}
declare const CMsgProcessTransactionOrder_Item: MessageFns$4<CMsgProcessTransactionOrder_Item>;
interface CMsgGCToGCStoreProcessCDKeyTransaction {
    order: CMsgProcessTransactionOrder | undefined;
    reasonCode: number;
    partner: number;
}
declare const CMsgGCToGCStoreProcessCDKeyTransaction: MessageFns$4<CMsgGCToGCStoreProcessCDKeyTransaction>;
interface CMsgGCToGCStoreProcessCDKeyTransactionResponse {
    success: boolean;
}
declare const CMsgGCToGCStoreProcessCDKeyTransactionResponse: MessageFns$4<CMsgGCToGCStoreProcessCDKeyTransactionResponse>;
interface CMsgGCToGCStoreProcessSettlement {
    order: CMsgProcessTransactionOrder | undefined;
}
declare const CMsgGCToGCStoreProcessSettlement: MessageFns$4<CMsgGCToGCStoreProcessSettlement>;
interface CMsgGCToGCStoreProcessSettlementResponse {
    success: boolean;
}
declare const CMsgGCToGCStoreProcessSettlementResponse: MessageFns$4<CMsgGCToGCStoreProcessSettlementResponse>;
interface CMsgGCToGCBroadcastConsoleCommand {
    conCommand: string;
    reportOutput: boolean;
    sendingGc: number;
    outputInitiator: string;
    senderSource: string;
}
declare const CMsgGCToGCBroadcastConsoleCommand: MessageFns$4<CMsgGCToGCBroadcastConsoleCommand>;
interface CMsgGCToGCConsoleOutput {
    initiator: string;
    sendingGc: number;
    msgs: CMsgGCToGCConsoleOutput_OutputLine[];
    isLastForSourceJob: boolean;
}
declare const CMsgGCToGCConsoleOutput: MessageFns$4<CMsgGCToGCConsoleOutput>;
interface CMsgGCToGCConsoleOutput_OutputLine {
    text: string;
    spewLevel: number;
}
declare const CMsgGCToGCConsoleOutput_OutputLine: MessageFns$4<CMsgGCToGCConsoleOutput_OutputLine>;
interface CMsgItemAges {
    maxItemIdTimestamps: CMsgItemAges_MaxItemIDTimestamp[];
}
declare const CMsgItemAges: MessageFns$4<CMsgItemAges>;
interface CMsgItemAges_MaxItemIDTimestamp {
    timestamp: number;
    maxItemId: string;
}
declare const CMsgItemAges_MaxItemIDTimestamp: MessageFns$4<CMsgItemAges_MaxItemIDTimestamp>;
interface CMsgGCToGCInternalTestMsg {
    sendingGc: number;
    senderId: string;
    context: number;
    messageId: number;
    messageBody: Buffer;
    jobIdSource: string;
    jobIdTarget: string;
}
declare const CMsgGCToGCInternalTestMsg: MessageFns$4<CMsgGCToGCInternalTestMsg>;
interface CMsgGCToGCClientServerVersionsUpdated {
    clientMinAllowedVersion: number;
    clientActiveVersion: number;
    serverActiveVersion: number;
    serverDeployedVersion: number;
    whatChanged: number;
}
declare const CMsgGCToGCClientServerVersionsUpdated: MessageFns$4<CMsgGCToGCClientServerVersionsUpdated>;
interface CMsgGCToGCBroadcastMessageFromSub {
    msgId: number;
    serializedMsg: Buffer;
    accountIdList: number[];
    steamIdList: string[];
}
declare const CMsgGCToGCBroadcastMessageFromSub: MessageFns$4<CMsgGCToGCBroadcastMessageFromSub>;
interface CMsgGCToClientCurrencyPricePoints {
    priceKey: string[];
    currencies: CMsgGCToClientCurrencyPricePoints_Currency[];
}
declare const CMsgGCToClientCurrencyPricePoints: MessageFns$4<CMsgGCToClientCurrencyPricePoints>;
interface CMsgGCToClientCurrencyPricePoints_Currency {
    currencyId: number;
    currencyPrice: string[];
}
declare const CMsgGCToClientCurrencyPricePoints_Currency: MessageFns$4<CMsgGCToClientCurrencyPricePoints_Currency>;
interface CMsgBannedWordList {
    version: number;
    bannedWords: string[];
}
declare const CMsgBannedWordList: MessageFns$4<CMsgBannedWordList>;
interface CMsgGCToGCFlushSteamInventoryCache {
    keys: CMsgGCToGCFlushSteamInventoryCache_Key[];
}
declare const CMsgGCToGCFlushSteamInventoryCache: MessageFns$4<CMsgGCToGCFlushSteamInventoryCache>;
interface CMsgGCToGCFlushSteamInventoryCache_Key {
    steamid: string;
    contextid: string;
}
declare const CMsgGCToGCFlushSteamInventoryCache_Key: MessageFns$4<CMsgGCToGCFlushSteamInventoryCache_Key>;
interface CMsgGCToGCUpdateSubscriptionItems {
    accountId: number;
    alwaysNotify: boolean;
}
declare const CMsgGCToGCUpdateSubscriptionItems: MessageFns$4<CMsgGCToGCUpdateSubscriptionItems>;
interface CMsgGCToGCSelfPing {
    sampleId: number;
}
declare const CMsgGCToGCSelfPing: MessageFns$4<CMsgGCToGCSelfPing>;
interface CMsgGCToGCGetInfuxIntervalStats {
}
declare const CMsgGCToGCGetInfuxIntervalStats: MessageFns$4<CMsgGCToGCGetInfuxIntervalStats>;
interface CMsgGCToGCGetInfuxIntervalStatsResponse {
    statIds: number[];
    statTotal: string[];
    statSamples: number[];
    statMax: number[];
    sampleDurationMs: number;
}
declare const CMsgGCToGCGetInfuxIntervalStatsResponse: MessageFns$4<CMsgGCToGCGetInfuxIntervalStatsResponse>;
interface CMsgGCToGCPurchaseSucceeded {
}
declare const CMsgGCToGCPurchaseSucceeded: MessageFns$4<CMsgGCToGCPurchaseSucceeded>;
interface CMsgClientToGCGetLimitedItemPurchaseQuantity {
    itemDef: number;
}
declare const CMsgClientToGCGetLimitedItemPurchaseQuantity: MessageFns$4<CMsgClientToGCGetLimitedItemPurchaseQuantity>;
interface CMsgClientToGCGetLimitedItemPurchaseQuantityResponse {
    result: CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse;
    quantityPurchased: number;
}
declare const CMsgClientToGCGetLimitedItemPurchaseQuantityResponse: MessageFns$4<CMsgClientToGCGetLimitedItemPurchaseQuantityResponse>;
interface CMsgClientToGCGetInFlightItemCharges {
    itemDef: number;
}
declare const CMsgClientToGCGetInFlightItemCharges: MessageFns$4<CMsgClientToGCGetInFlightItemCharges>;
interface CMsgClientToGCGetInFlightItemChargesResponse {
    result: CMsgClientToGCGetInFlightItemChargesResponse_EResponse;
    chargesInFlight: number;
}
declare const CMsgClientToGCGetInFlightItemChargesResponse: MessageFns$4<CMsgClientToGCGetInFlightItemChargesResponse>;
interface CMsgClientToGCPurchaseChargeCostItems {
    items: CMsgClientToGCPurchaseChargeCostItems_Item[];
    currency: number;
}
declare const CMsgClientToGCPurchaseChargeCostItems: MessageFns$4<CMsgClientToGCPurchaseChargeCostItems>;
interface CMsgClientToGCPurchaseChargeCostItems_Item {
    itemDefIndex: number;
    quantity: number;
    sourceReferenceId: string;
    priceIndex: number;
}
declare const CMsgClientToGCPurchaseChargeCostItems_Item: MessageFns$4<CMsgClientToGCPurchaseChargeCostItems_Item>;
interface CMsgClientToGCPurchaseChargeCostItemsResponse {
    result: CMsgClientToGCPurchaseChargeCostItemsResponse_EResponse;
    itemIds: string[];
}
declare const CMsgClientToGCPurchaseChargeCostItemsResponse: MessageFns$4<CMsgClientToGCPurchaseChargeCostItemsResponse>;
interface CMsgGCToClientInFlightChargesUpdated {
    inFlightCharges: CMsgGCToClientInFlightChargesUpdated_ItemCharges[];
}
declare const CMsgGCToClientInFlightChargesUpdated: MessageFns$4<CMsgGCToClientInFlightChargesUpdated>;
interface CMsgGCToClientInFlightChargesUpdated_ItemCharges {
    itemDef: number;
    chargesInFlight: number;
}
declare const CMsgGCToClientInFlightChargesUpdated_ItemCharges: MessageFns$4<CMsgGCToClientInFlightChargesUpdated_ItemCharges>;
interface CMsgClientToGCCancelUnfinalizedTransactions {
    unused: number;
}
declare const CMsgClientToGCCancelUnfinalizedTransactions: MessageFns$4<CMsgClientToGCCancelUnfinalizedTransactions>;
interface CMsgClientToGCCancelUnfinalizedTransactionsResponse {
    result: number;
}
declare const CMsgClientToGCCancelUnfinalizedTransactionsResponse: MessageFns$4<CMsgClientToGCCancelUnfinalizedTransactionsResponse>;
interface CMsgGCToGCUpdateWelcomeMsg {
    server: boolean;
    newMsg: CExtraMsgBlock | undefined;
    broadcast: boolean;
}
declare const CMsgGCToGCUpdateWelcomeMsg: MessageFns$4<CMsgGCToGCUpdateWelcomeMsg>;
type Builtin$4 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$4<T> = T extends Builtin$4 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$4<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$4<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$4<T[K]>;
} : Partial<T>;
interface MessageFns$4<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$4<T>): T;
    fromPartial(object: DeepPartial$4<T>): T;
}

declare enum CMsgDOTARequestMatchesSkillLevel {
    CMsgDOTARequestMatches_SkillLevel_Any = 0,
    CMsgDOTARequestMatches_SkillLevel_Normal = 1,
    CMsgDOTARequestMatches_SkillLevel_High = 2,
    CMsgDOTARequestMatches_SkillLevel_VeryHigh = 3
}
declare function cMsgDOTARequestMatchesSkillLevelFromJSON(object: any): CMsgDOTARequestMatchesSkillLevel;
declare function cMsgDOTARequestMatchesSkillLevelToJSON(object: CMsgDOTARequestMatchesSkillLevel): string;
declare enum DOTAWatchReplayType {
    DOTA_WATCH_REPLAY_NORMAL = 0,
    DOTA_WATCH_REPLAY_HIGHLIGHTS = 1
}
declare function dOTAWatchReplayTypeFromJSON(object: any): DOTAWatchReplayType;
declare function dOTAWatchReplayTypeToJSON(object: DOTAWatchReplayType): string;
declare enum EItemEditorReservationResult {
    k_EItemEditorReservationResult_OK = 1,
    k_EItemEditorReservationResult_AlreadyExists = 2,
    k_EItemEditorReservationResult_Reserved = 3,
    k_EItemEditorReservationResult_TimedOut = 4
}
declare function eItemEditorReservationResultFromJSON(object: any): EItemEditorReservationResult;
declare function eItemEditorReservationResultToJSON(object: EItemEditorReservationResult): string;
declare enum EWeekendTourneyRichPresenceEvent {
    k_EWeekendTourneyRichPresenceEvent_None = 0,
    k_EWeekendTourneyRichPresenceEvent_StartedMatch = 1,
    k_EWeekendTourneyRichPresenceEvent_WonMatch = 2,
    k_EWeekendTourneyRichPresenceEvent_Eliminated = 3
}
declare function eWeekendTourneyRichPresenceEventFromJSON(object: any): EWeekendTourneyRichPresenceEvent;
declare function eWeekendTourneyRichPresenceEventToJSON(object: EWeekendTourneyRichPresenceEvent): string;
declare enum EDOTATriviaAnswerResult {
    k_EDOTATriviaAnswerResult_Success = 0,
    k_EDOTATriviaAnswerResult_InvalidQuestion = 1,
    k_EDOTATriviaAnswerResult_InvalidAnswer = 2,
    k_EDOTATriviaAnswerResult_QuestionLocked = 3,
    k_EDOTATriviaAnswerResult_AlreadyAnswered = 4,
    k_EDOTATriviaAnswerResult_TriviaDisabled = 5
}
declare function eDOTATriviaAnswerResultFromJSON(object: any): EDOTATriviaAnswerResult;
declare function eDOTATriviaAnswerResultToJSON(object: EDOTATriviaAnswerResult): string;
declare enum EPurchaseHeroRelicResult {
    k_EPurchaseHeroRelicResult_Success = 0,
    k_EPurchaseHeroRelicResult_FailedToSend = 1,
    k_EPurchaseHeroRelicResult_NotEnoughPoints = 2,
    k_EPurchaseHeroRelicResult_InternalServerError = 3,
    k_EPurchaseHeroRelicResult_PurchaseNotAllowed = 4,
    k_EPurchaseHeroRelicResult_InvalidRelic = 5,
    k_EPurchaseHeroRelicResult_AlreadyOwned = 6,
    k_EPurchaseHeroRelicResult_InvalidRarity = 7
}
declare function ePurchaseHeroRelicResultFromJSON(object: any): EPurchaseHeroRelicResult;
declare function ePurchaseHeroRelicResultToJSON(object: EPurchaseHeroRelicResult): string;
declare enum EDevEventRequestResult {
    k_EDevEventRequestResult_Success = 0,
    k_EDevEventRequestResult_NotAllowed = 1,
    k_EDevEventRequestResult_InvalidEvent = 2,
    k_EDevEventRequestResult_SqlFailure = 3,
    k_EDevEventRequestResult_Timeout = 4,
    k_EDevEventRequestResult_LockFailure = 5,
    k_EDevEventRequestResult_SDOLoadFailure = 6
}
declare function eDevEventRequestResultFromJSON(object: any): EDevEventRequestResult;
declare function eDevEventRequestResultToJSON(object: EDevEventRequestResult): string;
declare enum ESupportEventRequestResult {
    k_ESupportEventRequestResult_Success = 0,
    k_ESupportEventRequestResult_Timeout = 1,
    k_ESupportEventRequestResult_CantLockSOCache = 2,
    k_ESupportEventRequestResult_ItemNotInInventory = 3,
    k_ESupportEventRequestResult_InvalidItemDef = 4,
    k_ESupportEventRequestResult_InvalidEvent = 5,
    k_ESupportEventRequestResult_EventExpired = 6,
    k_ESupportEventRequestResult_InvalidSupportAccount = 7,
    k_ESupportEventRequestResult_InvalidSupportMessage = 8,
    k_ESupportEventRequestResult_InvalidEventPoints = 9,
    k_ESupportEventRequestResult_InvalidPremiumPoints = 10,
    k_ESupportEventRequestResult_InvalidActionID = 11,
    k_ESupportEventRequestResult_InvalidActionScore = 12,
    k_ESupportEventRequestResult_TransactionFailed = 13
}
declare function eSupportEventRequestResultFromJSON(object: any): ESupportEventRequestResult;
declare function eSupportEventRequestResultToJSON(object: ESupportEventRequestResult): string;
declare enum EUnderDraftResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eNoGold = 2,
    k_eInvalidSlot = 3,
    k_eNoBenchSpace = 4,
    k_eNoTickets = 5,
    k_eEventNotOwned = 6,
    k_eInvalidReward = 7,
    k_eHasBigReward = 8,
    k_eNoGCConnection = 9,
    k_eTooBusy = 10,
    k_eCantRollBack = 11
}
declare function eUnderDraftResponseFromJSON(object: any): EUnderDraftResponse;
declare function eUnderDraftResponseToJSON(object: EUnderDraftResponse): string;
declare enum EDOTADraftTriviaAnswerResult {
    k_EDOTADraftTriviaAnswerResult_Success = 0,
    k_EDOTADraftTriviaAnswerResult_InvalidMatchID = 1,
    k_EDOTADraftTriviaAnswerResult_AlreadyAnswered = 2,
    k_EDOTADraftTriviaAnswerResult_InternalError = 3,
    k_EDOTADraftTriviaAnswerResult_TriviaDisabled = 4,
    k_EDOTADraftTriviaAnswerResult_GCDown = 5
}
declare function eDOTADraftTriviaAnswerResultFromJSON(object: any): EDOTADraftTriviaAnswerResult;
declare function eDOTADraftTriviaAnswerResultToJSON(object: EDOTADraftTriviaAnswerResult): string;
declare enum CMsgClientToGCUpdateComicBookStatType {
    CMsgClientToGCUpdateComicBookStat_Type_HighestPageRead = 1,
    CMsgClientToGCUpdateComicBookStat_Type_SecondsSpentReading = 2,
    CMsgClientToGCUpdateComicBookStat_Type_HighestPercentRead = 3
}
declare function cMsgClientToGCUpdateComicBookStatTypeFromJSON(object: any): CMsgClientToGCUpdateComicBookStatType;
declare function cMsgClientToGCUpdateComicBookStatTypeToJSON(object: CMsgClientToGCUpdateComicBookStatType): string;
declare enum CMsgDOTAPopup_PopupID {
    NONE = -1,
    KICKED_FROM_LOBBY = 0,
    KICKED_FROM_PARTY = 1,
    KICKED_FROM_TEAM = 2,
    TEAM_WAS_DISBANDED = 3,
    TEAM_MATCHMAKE_ALREADY_MATCH = 4,
    TEAM_MATCHMAKE_ALREADY_FINDING = 5,
    TEAM_MATCHMAKE_FULL = 6,
    TEAM_MATCHMAKE_FAIL_ADD = 7,
    TEAM_MATCHMAKE_FAIL_ADD_CURRENT = 8,
    TEAM_MATCHMAKE_FAILED_TEAM_MEMBER = 9,
    TEAM_MATCHMAKE_ALREADY_GAME = 10,
    TEAM_MATCHMAKE_FAIL_GET_PARTY = 11,
    MATCHMAKING_DISABLED = 12,
    INVITE_DENIED = 13,
    PARTY_FULL = 14,
    MADE_ADMIN = 15,
    NEED_TO_PURCHASE = 16,
    SIGNON_MESSAGE = 17,
    MATCHMAKING_REGION_OFFLINE = 19,
    TOURNAMENT_GAME_NOT_FOUND = 21,
    TOURNAMENT_GAME_HAS_LOBBY_ID = 22,
    TOURNAMENT_GAME_HAS_MATCH_ID = 23,
    TOURNAMENT_GAME_HAS_NO_RADIANT_TEAM = 24,
    TOURNAMENT_GAME_HAS_NO_DIRE_TEAM = 25,
    TOURNAMENT_GAME_SQL_UPDATE_FAILED = 26,
    NOT_LEAGUE_ADMIN = 27,
    IN_ANOTHER_GAME = 29,
    PARTY_MEMBER_IN_ANOTHER_GAME = 30,
    PARTY_MEMBER_IN_LOW_PRIORITY = 31,
    CLIENT_OUT_OF_DATE = 32,
    SAVE_GAME_CORRUPT = 38,
    INSUFFICIENT_INGOTS = 39,
    COMPETITIVE_MM_NOT_ENOUGH_PLAY_TIME_PLAY_MORE_CASUAL = 42,
    PARTY_LEADER_JOINED_LOBBY = 44,
    WEEKEND_TOURNEY_UNMATCHED = 48,
    POST_MATCH_SURVEY = 49,
    TROPHY_AWARDED = 50,
    TROPHY_LEVEL_UP = 51,
    ALL_HERO_CHALLENGE_PROGRESS = 52,
    NEED_INITIAL_SKILL = 53,
    NEED_INITIAL_SKILL_IN_PARTY = 54,
    TARGET_ENGINE_MISMATCH = 55,
    VAC_NOT_VERIFIED = 56,
    KICKED_FROM_QUEUE_EVENT_STARTING = 57,
    KICKED_FROM_QUEUE_EVENT_ENDING = 58,
    LOBBY_FULL = 62,
    EVENT_POINTS_EARNED = 63,
    CUSTOM_GAME_INCORRECT_VERSION = 64,
    LIMITED_USER_CHAT = 66,
    EVENT_PREMIUM_POINTS_EARNED = 67,
    LOBBY_MVP_AWARDED = 68,
    LOW_BADGE_LEVEL_CHAT = 71,
    LOW_WINS_CHAT = 72,
    UNVERIFIED_USER_CHAT = 73,
    PARTY_STARTED_FINDING_EVENT_MATCH = 74,
    GENERIC_INFO = 69,
    GENERIC_ERROR = 70,
    RANK_TIER_UPDATED = 75,
    CUSTOM_GAME_COOLDOWN_RESTRICTED = 76,
    CREATE_LOBBY_FAILED_TOO_MUCH_PLAYTIME = 77,
    CUSTOM_GAME_TOO_FEW_GAMES = 78,
    COMM_SCORE_TOO_LOW = 79
}
declare function cMsgDOTAPopup_PopupIDFromJSON(object: any): CMsgDOTAPopup_PopupID;
declare function cMsgDOTAPopup_PopupIDToJSON(object: CMsgDOTAPopup_PopupID): string;
declare enum CMsgDOTASubmitPlayerReportResponse_EResult {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eDuplicateReport = 2,
    k_eMixedReportFlags = 3,
    k_eTooLate = 4,
    k_eInvalidPregameReport = 5,
    k_eHasntChatted = 6,
    k_eInvalid = 7,
    k_eOwnership = 8,
    k_eMissingRequirements = 9,
    k_eInvalidRoleReport = 10,
    k_eInvalidCoachReport = 11,
    k_eNoRemainingReports = 12,
    k_eInvalidMember = 13
}
declare function cMsgDOTASubmitPlayerReportResponse_EResultFromJSON(object: any): CMsgDOTASubmitPlayerReportResponse_EResult;
declare function cMsgDOTASubmitPlayerReportResponse_EResultToJSON(object: CMsgDOTASubmitPlayerReportResponse_EResult): string;
declare enum CMsgDOTASubmitPlayerReportResponseV2_EResult {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eDuplicateReport = 2,
    k_eMixedReportFlags = 3,
    k_eTooLate = 4,
    k_eInvalidPregameReport = 5,
    k_eHasntChatted = 6,
    k_eInvalid = 7,
    k_eOwnership = 8,
    k_eMissingRequirements = 9,
    k_eInvalidRoleReport = 10,
    k_eInvalidCoachReport = 11,
    k_eNoRemainingReports = 12,
    k_eInvalidMember = 13,
    k_eCannotReportPartyMember = 14
}
declare function cMsgDOTASubmitPlayerReportResponseV2_EResultFromJSON(object: any): CMsgDOTASubmitPlayerReportResponseV2_EResult;
declare function cMsgDOTASubmitPlayerReportResponseV2_EResultToJSON(object: CMsgDOTASubmitPlayerReportResponseV2_EResult): string;
declare enum CMsgGCNotificationsUpdate_EResult {
    SUCCESS = 0,
    ERROR_UNSPECIFIED = 1
}
declare function cMsgGCNotificationsUpdate_EResultFromJSON(object: any): CMsgGCNotificationsUpdate_EResult;
declare function cMsgGCNotificationsUpdate_EResultToJSON(object: CMsgGCNotificationsUpdate_EResult): string;
declare enum CMsgGCPlayerInfoSubmitResponse_EResult {
    SUCCESS = 0,
    ERROR_UNSPECIFIED = 1,
    ERROR_INFO_LOCKED = 2,
    ERROR_NOT_MEMBER_OF_TEAM = 3
}
declare function cMsgGCPlayerInfoSubmitResponse_EResultFromJSON(object: any): CMsgGCPlayerInfoSubmitResponse_EResult;
declare function cMsgGCPlayerInfoSubmitResponse_EResultToJSON(object: CMsgGCPlayerInfoSubmitResponse_EResult): string;
declare enum CMsgGCToClientRankResponse_EResultCode {
    k_Succeeded = 0,
    k_Failed = 1,
    k_InvalidRankType = 2
}
declare function cMsgGCToClientRankResponse_EResultCodeFromJSON(object: any): CMsgGCToClientRankResponse_EResultCode;
declare function cMsgGCToClientRankResponse_EResultCodeToJSON(object: CMsgGCToClientRankResponse_EResultCode): string;
declare enum CMsgGCGetHeroStatsHistoryResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3
}
declare function cMsgGCGetHeroStatsHistoryResponse_EResponseFromJSON(object: any): CMsgGCGetHeroStatsHistoryResponse_EResponse;
declare function cMsgGCGetHeroStatsHistoryResponse_EResponseToJSON(object: CMsgGCGetHeroStatsHistoryResponse_EResponse): string;
declare enum CMsgPlayerConductScorecard_EBehaviorRating {
    k_eBehaviorGood = 0,
    k_eBehaviorWarning = 1,
    k_eBehaviorBad = 2
}
declare function cMsgPlayerConductScorecard_EBehaviorRatingFromJSON(object: any): CMsgPlayerConductScorecard_EBehaviorRating;
declare function cMsgPlayerConductScorecard_EBehaviorRatingToJSON(object: CMsgPlayerConductScorecard_EBehaviorRating): string;
declare enum CMsgClientToGCVoteForArcanaResponse_Result {
    SUCCEEDED = 0,
    VOTING_NOT_ENABLED_FOR_ROUND = 1,
    UNKNOWN_FAILURE = 2
}
declare function cMsgClientToGCVoteForArcanaResponse_ResultFromJSON(object: any): CMsgClientToGCVoteForArcanaResponse_Result;
declare function cMsgClientToGCVoteForArcanaResponse_ResultToJSON(object: CMsgClientToGCVoteForArcanaResponse_Result): string;
declare enum CMsgDOTARedeemItemResponse_EResultCode {
    k_Succeeded = 0,
    k_Failed = 1
}
declare function cMsgDOTARedeemItemResponse_EResultCodeFromJSON(object: any): CMsgDOTARedeemItemResponse_EResultCode;
declare function cMsgDOTARedeemItemResponse_EResultCodeToJSON(object: CMsgDOTARedeemItemResponse_EResultCode): string;
declare enum CMsgClientToGCSelectCompendiumInGamePredictionResponse_EResult {
    SUCCESS = 0,
    INVALID_MATCH = 1,
    PREDICTIONS_ARE_CLOSED = 2,
    OTHER_ERROR = 3
}
declare function cMsgClientToGCSelectCompendiumInGamePredictionResponse_EResultFromJSON(object: any): CMsgClientToGCSelectCompendiumInGamePredictionResponse_EResult;
declare function cMsgClientToGCSelectCompendiumInGamePredictionResponse_EResultToJSON(object: CMsgClientToGCSelectCompendiumInGamePredictionResponse_EResult): string;
declare enum CMsgClientToGCOpenPlayerCardPackResponse_Result {
    SUCCESS = 1,
    ERROR_INTERNAL = 2,
    ERROR_FAILED_TO_FIND_PACK = 3,
    ERROR_ITEM_NOT_CARD_PACK = 4,
    ERROR_FAILED_CARD_CREATE = 5,
    ERROR_INVALID_TEAM_ID_ATTRIBUTE = 6,
    ERROR_INVALID_TEAM_ID = 7
}
declare function cMsgClientToGCOpenPlayerCardPackResponse_ResultFromJSON(object: any): CMsgClientToGCOpenPlayerCardPackResponse_Result;
declare function cMsgClientToGCOpenPlayerCardPackResponse_ResultToJSON(object: CMsgClientToGCOpenPlayerCardPackResponse_Result): string;
declare enum CMsgClientToGCRecyclePlayerCardResponse_Result {
    SUCCESS = 1,
    ERROR_INTERNAL = 2,
    ERROR_FAILED_TO_FIND_PLAYER_CARD = 3,
    ERROR_ITEM_NOT_PLAYER_CARD = 4,
    ERROR_FAILED_DUST_CARD_CREATE = 5,
    ERROR_CARD_LOCKED = 6,
    ERROR_NO_CARDS_SPECIFIED = 7
}
declare function cMsgClientToGCRecyclePlayerCardResponse_ResultFromJSON(object: any): CMsgClientToGCRecyclePlayerCardResponse_Result;
declare function cMsgClientToGCRecyclePlayerCardResponse_ResultToJSON(object: CMsgClientToGCRecyclePlayerCardResponse_Result): string;
declare enum CMsgClientToGCCreatePlayerCardPackResponse_Result {
    SUCCESS = 1,
    ERROR_INTERNAL = 2,
    ERROR_INSUFFICIENT_DUST = 3,
    ERROR_ITEM_NOT_DUST_ITEM = 4,
    ERROR_FAILED_CARD_PACK_CREATE = 5,
    ERROR_NO_CARD_PACK = 6,
    ERROR_NOT_AVAILABLE = 7
}
declare function cMsgClientToGCCreatePlayerCardPackResponse_ResultFromJSON(object: any): CMsgClientToGCCreatePlayerCardPackResponse_Result;
declare function cMsgClientToGCCreatePlayerCardPackResponse_ResultToJSON(object: CMsgClientToGCCreatePlayerCardPackResponse_Result): string;
declare enum CMsgClientToGCCreateTeamPlayerCardPackResponse_Result {
    SUCCESS = 1,
    ERROR_INTERNAL = 2,
    ERROR_INSUFFICIENT_DUST = 3,
    ERROR_ITEM_NOT_DUST_ITEM = 4,
    ERROR_FAILED_CARD_PACK_CREATE = 5,
    ERROR_NO_CARD_PACK = 6,
    ERROR_NOT_AVAILABLE = 7
}
declare function cMsgClientToGCCreateTeamPlayerCardPackResponse_ResultFromJSON(object: any): CMsgClientToGCCreateTeamPlayerCardPackResponse_Result;
declare function cMsgClientToGCCreateTeamPlayerCardPackResponse_ResultToJSON(object: CMsgClientToGCCreateTeamPlayerCardPackResponse_Result): string;
declare enum CMsgDOTAAnchorPhoneNumberResponse_Result {
    SUCCESS = 0,
    ERROR_UNKNOWN = 1,
    ERROR_NO_STEAM_PHONE = 2,
    ERROR_ALREADY_IN_USE = 3,
    ERROR_COOLDOWN_ACTIVE = 4,
    ERROR_GAC_ISSUE = 5
}
declare function cMsgDOTAAnchorPhoneNumberResponse_ResultFromJSON(object: any): CMsgDOTAAnchorPhoneNumberResponse_Result;
declare function cMsgDOTAAnchorPhoneNumberResponse_ResultToJSON(object: CMsgDOTAAnchorPhoneNumberResponse_Result): string;
declare enum CMsgDOTAUnanchorPhoneNumberResponse_Result {
    SUCCESS = 0,
    ERROR_UNKNOWN = 1
}
declare function cMsgDOTAUnanchorPhoneNumberResponse_ResultFromJSON(object: any): CMsgDOTAUnanchorPhoneNumberResponse_Result;
declare function cMsgDOTAUnanchorPhoneNumberResponse_ResultToJSON(object: CMsgDOTAUnanchorPhoneNumberResponse_Result): string;
declare enum CMsgDOTASelectionPriorityChoiceResponse_Result {
    SUCCESS = 0,
    ERROR_UNKNOWN = 1
}
declare function cMsgDOTASelectionPriorityChoiceResponse_ResultFromJSON(object: any): CMsgDOTASelectionPriorityChoiceResponse_Result;
declare function cMsgDOTASelectionPriorityChoiceResponse_ResultToJSON(object: CMsgDOTASelectionPriorityChoiceResponse_Result): string;
declare enum CMsgDOTAGameAutographRewardResponse_Result {
    SUCCESS = 0,
    ERROR_UNKNOWN = 1
}
declare function cMsgDOTAGameAutographRewardResponse_ResultFromJSON(object: any): CMsgDOTAGameAutographRewardResponse_Result;
declare function cMsgDOTAGameAutographRewardResponse_ResultToJSON(object: CMsgDOTAGameAutographRewardResponse_Result): string;
declare enum CMsgDOTADestroyLobbyResponse_Result {
    SUCCESS = 0,
    ERROR_UNKNOWN = 1
}
declare function cMsgDOTADestroyLobbyResponse_ResultFromJSON(object: any): CMsgDOTADestroyLobbyResponse_Result;
declare function cMsgDOTADestroyLobbyResponse_ResultToJSON(object: CMsgDOTADestroyLobbyResponse_Result): string;
declare enum CMsgPurchaseItemWithEventPointsResponse_Result {
    SUCCESS = 0,
    UNKNOWN_EVENT = 1,
    UNKNOWN_ITEM = 2,
    BAD_QUANTITY = 3,
    NOT_PURCHASEABLE = 4,
    SDO_LOAD_FAILED = 5,
    NOT_ENOUGH_POINTS = 6,
    SQL_ERROR = 7,
    FAILED_TO_SEND = 8,
    SERVER_ERROR = 9,
    NOT_ALLOWED = 10,
    CANCELLED = 11,
    CLIENT_ERROR = 12,
    SUBSCRIPTION_REQUIRED = 13
}
declare function cMsgPurchaseItemWithEventPointsResponse_ResultFromJSON(object: any): CMsgPurchaseItemWithEventPointsResponse_Result;
declare function cMsgPurchaseItemWithEventPointsResponse_ResultToJSON(object: CMsgPurchaseItemWithEventPointsResponse_Result): string;
declare enum CMsgProfileResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3
}
declare function cMsgProfileResponse_EResponseFromJSON(object: any): CMsgProfileResponse_EResponse;
declare function cMsgProfileResponse_EResponseToJSON(object: CMsgProfileResponse_EResponse): string;
declare enum CMsgProfileUpdateResponse_Result {
    SUCCESS = 0,
    FAILURE = 1,
    FAILURE_BAD_HERO1 = 2,
    FAILURE_BAD_HERO2 = 3,
    FAILURE_BAD_HERO3 = 4
}
declare function cMsgProfileUpdateResponse_ResultFromJSON(object: any): CMsgProfileUpdateResponse_Result;
declare function cMsgProfileUpdateResponse_ResultToJSON(object: CMsgProfileUpdateResponse_Result): string;
declare enum CMsgActivatePlusFreeTrialResponse_Result {
    SUCCESS = 0,
    ERROR_GENERIC = 1,
    ERROR_ALREADY_IN_FREE_TRIAL = 2,
    ERROR_ALREADY_USED_FREE_TRIAL = 3,
    ERROR_OFFER_NOT_VALID = 4
}
declare function cMsgActivatePlusFreeTrialResponse_ResultFromJSON(object: any): CMsgActivatePlusFreeTrialResponse_Result;
declare function cMsgActivatePlusFreeTrialResponse_ResultToJSON(object: CMsgActivatePlusFreeTrialResponse_Result): string;
declare enum CMsgClientToGCCavernCrawlClaimRoomResponse_Result {
    SUCCESS = 0,
    ERROR_UNKNOWN = 1,
    RECEIVED_ULTRA_RARE_REWARD = 2
}
declare function cMsgClientToGCCavernCrawlClaimRoomResponse_ResultFromJSON(object: any): CMsgClientToGCCavernCrawlClaimRoomResponse_Result;
declare function cMsgClientToGCCavernCrawlClaimRoomResponse_ResultToJSON(object: CMsgClientToGCCavernCrawlClaimRoomResponse_Result): string;
declare enum CMsgClientToGCCavernCrawlUseItemOnRoomResponse_Result {
    SUCCESS = 0,
    ERROR_UNKNOWN = 1,
    RECEIVED_ULTRA_RARE_REWARD = 2
}
declare function cMsgClientToGCCavernCrawlUseItemOnRoomResponse_ResultFromJSON(object: any): CMsgClientToGCCavernCrawlUseItemOnRoomResponse_Result;
declare function cMsgClientToGCCavernCrawlUseItemOnRoomResponse_ResultToJSON(object: CMsgClientToGCCavernCrawlUseItemOnRoomResponse_Result): string;
declare enum CMsgClientToGCCavernCrawlUseItemOnPathResponse_Result {
    SUCCESS = 0,
    ERROR_UNKNOWN = 1,
    RECEIVED_ULTRA_RARE_REWARD = 2
}
declare function cMsgClientToGCCavernCrawlUseItemOnPathResponse_ResultFromJSON(object: any): CMsgClientToGCCavernCrawlUseItemOnPathResponse_Result;
declare function cMsgClientToGCCavernCrawlUseItemOnPathResponse_ResultToJSON(object: CMsgClientToGCCavernCrawlUseItemOnPathResponse_Result): string;
declare enum CMsgClientToGCCavernCrawlRequestMapStateResponse_Result {
    SUCCESS = 0,
    ERROR_UNKNOWN = 1,
    EVENT_NOT_OWNED = 2
}
declare function cMsgClientToGCCavernCrawlRequestMapStateResponse_ResultFromJSON(object: any): CMsgClientToGCCavernCrawlRequestMapStateResponse_Result;
declare function cMsgClientToGCCavernCrawlRequestMapStateResponse_ResultToJSON(object: CMsgClientToGCCavernCrawlRequestMapStateResponse_Result): string;
declare enum CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_Result {
    SUCCESS = 0,
    ERROR_UNKNOWN = 1,
    EVENT_NOT_OWNED = 2
}
declare function cMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_ResultFromJSON(object: any): CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_Result;
declare function cMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_ResultToJSON(object: CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_Result): string;
declare enum CMsgSocialFeedResponse_Result {
    SUCCESS = 0,
    FAILED_TO_LOAD_FRIENDS = 1,
    FAILED_TO_LOAD_FEED_DATA = 2,
    FAILED_TO_LOAD_FEED_ENTRY = 3,
    FAILED_TO_LOAD_COMMENTS = 4,
    FAILED_TOO_MANY_REQUESTS = 5
}
declare function cMsgSocialFeedResponse_ResultFromJSON(object: any): CMsgSocialFeedResponse_Result;
declare function cMsgSocialFeedResponse_ResultToJSON(object: CMsgSocialFeedResponse_Result): string;
declare enum CMsgSocialFeedCommentsResponse_Result {
    SUCCESS = 0,
    FAILED_TOO_MANY_REQUESTS = 1,
    FAILED_TO_LOAD_COMMENTS = 2
}
declare function cMsgSocialFeedCommentsResponse_ResultFromJSON(object: any): CMsgSocialFeedCommentsResponse_Result;
declare function cMsgSocialFeedCommentsResponse_ResultToJSON(object: CMsgSocialFeedCommentsResponse_Result): string;
declare enum CMsgClientToGCPlayerCardSpecificPurchaseResponse_Result {
    SUCCESS = 1,
    ERROR_INTERNAL = 2,
    ERROR_INSUFFICIENT_DUST = 3,
    ERROR_ITEM_NOT_DUST_ITEM = 4,
    ERROR_FAILED_CARD_PACK_CREATE = 5,
    ERROR_NOT_AVAILABLE = 6
}
declare function cMsgClientToGCPlayerCardSpecificPurchaseResponse_ResultFromJSON(object: any): CMsgClientToGCPlayerCardSpecificPurchaseResponse_Result;
declare function cMsgClientToGCPlayerCardSpecificPurchaseResponse_ResultToJSON(object: CMsgClientToGCPlayerCardSpecificPurchaseResponse_Result): string;
declare enum CMsgClientToGCRequestContestVotesResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3
}
declare function cMsgClientToGCRequestContestVotesResponse_EResponseFromJSON(object: any): CMsgClientToGCRequestContestVotesResponse_EResponse;
declare function cMsgClientToGCRequestContestVotesResponse_EResponseToJSON(object: CMsgClientToGCRequestContestVotesResponse_EResponse): string;
declare enum CMsgGCToClientRecordContestVoteResponse_EResult {
    SUCCESS = 0,
    FAILED_EVENT_NOT_OWNED = 1,
    FAILED_SQL_INSERT_FAILED = 2,
    FAILED_INVALID_CONTEST = 3,
    FAILED_CONTEST_NOT_ACTIVE = 4,
    FAILED_TIMEOUT = 5
}
declare function cMsgGCToClientRecordContestVoteResponse_EResultFromJSON(object: any): CMsgGCToClientRecordContestVoteResponse_EResult;
declare function cMsgGCToClientRecordContestVoteResponse_EResultToJSON(object: CMsgGCToClientRecordContestVoteResponse_EResult): string;
declare enum CMsgGCToClientGetFilteredPlayersResponse_Result {
    SUCCESS = 0,
    FAILURE = 1
}
declare function cMsgGCToClientGetFilteredPlayersResponse_ResultFromJSON(object: any): CMsgGCToClientGetFilteredPlayersResponse_Result;
declare function cMsgGCToClientGetFilteredPlayersResponse_ResultToJSON(object: CMsgGCToClientGetFilteredPlayersResponse_Result): string;
declare enum CMsgGCToClientRemoveFilteredPlayerResponse_Result {
    SUCCESS = 0,
    FAILURE = 1
}
declare function cMsgGCToClientRemoveFilteredPlayerResponse_ResultFromJSON(object: any): CMsgGCToClientRemoveFilteredPlayerResponse_Result;
declare function cMsgGCToClientRemoveFilteredPlayerResponse_ResultToJSON(object: CMsgGCToClientRemoveFilteredPlayerResponse_Result): string;
declare enum CMsgGCToClientPurchaseFilteredPlayerSlotResponse_Result {
    SUCCESS = 0,
    FAILURE = 1,
    CURRENT_SLOTCOUNT_DOESNT_MATCH = 2,
    CANT_AFFORD = 3
}
declare function cMsgGCToClientPurchaseFilteredPlayerSlotResponse_ResultFromJSON(object: any): CMsgGCToClientPurchaseFilteredPlayerSlotResponse_Result;
declare function cMsgGCToClientPurchaseFilteredPlayerSlotResponse_ResultToJSON(object: CMsgGCToClientPurchaseFilteredPlayerSlotResponse_Result): string;
declare enum CMsgGCToClientUpdateFilteredPlayerNoteResponse_Result {
    SUCCESS = 0,
    FAILURE = 1,
    NOT_FOUND = 2
}
declare function cMsgGCToClientUpdateFilteredPlayerNoteResponse_ResultFromJSON(object: any): CMsgGCToClientUpdateFilteredPlayerNoteResponse_Result;
declare function cMsgGCToClientUpdateFilteredPlayerNoteResponse_ResultToJSON(object: CMsgGCToClientUpdateFilteredPlayerNoteResponse_Result): string;
declare enum CMsgClientToGCUpdatePartyBeacon_Action {
    ON = 0,
    OFF = 1
}
declare function cMsgClientToGCUpdatePartyBeacon_ActionFromJSON(object: any): CMsgClientToGCUpdatePartyBeacon_Action;
declare function cMsgClientToGCUpdatePartyBeacon_ActionToJSON(object: CMsgClientToGCUpdatePartyBeacon_Action): string;
declare enum CMsgGCToClientRequestActiveBeaconPartiesResponse_EResponse {
    SUCCESS = 0,
    FAILURE = 1,
    BUSY = 2
}
declare function cMsgGCToClientRequestActiveBeaconPartiesResponse_EResponseFromJSON(object: any): CMsgGCToClientRequestActiveBeaconPartiesResponse_EResponse;
declare function cMsgGCToClientRequestActiveBeaconPartiesResponse_EResponseToJSON(object: CMsgGCToClientRequestActiveBeaconPartiesResponse_EResponse): string;
declare enum CMsgGCToClientJoinPartyFromBeaconResponse_EResponse {
    SUCCESS = 0,
    FAILURE = 1,
    BUSY = 2,
    NOT_LEADER = 3
}
declare function cMsgGCToClientJoinPartyFromBeaconResponse_EResponseFromJSON(object: any): CMsgGCToClientJoinPartyFromBeaconResponse_EResponse;
declare function cMsgGCToClientJoinPartyFromBeaconResponse_EResponseToJSON(object: CMsgGCToClientJoinPartyFromBeaconResponse_EResponse): string;
declare enum CMsgClientToGCManageFavorites_Action {
    ADD = 0,
    REMOVE = 1
}
declare function cMsgClientToGCManageFavorites_ActionFromJSON(object: any): CMsgClientToGCManageFavorites_Action;
declare function cMsgClientToGCManageFavorites_ActionToJSON(object: CMsgClientToGCManageFavorites_Action): string;
declare enum CMsgGCToClientManageFavoritesResponse_EResponse {
    SUCCESS = 0,
    FAILURE = 1,
    NO_INVITE_PRESENT = 2,
    INVITE_SENT = 3,
    EXPIRED = 4,
    BUSY = 5
}
declare function cMsgGCToClientManageFavoritesResponse_EResponseFromJSON(object: any): CMsgGCToClientManageFavoritesResponse_EResponse;
declare function cMsgGCToClientManageFavoritesResponse_EResponseToJSON(object: CMsgGCToClientManageFavoritesResponse_EResponse): string;
declare enum CMsgGCToClientGetFavoritePlayersResponse_EResponse {
    SUCCESS = 0,
    FAILURE = 1
}
declare function cMsgGCToClientGetFavoritePlayersResponse_EResponseFromJSON(object: any): CMsgGCToClientGetFavoritePlayersResponse_EResponse;
declare function cMsgGCToClientGetFavoritePlayersResponse_EResponseToJSON(object: CMsgGCToClientGetFavoritePlayersResponse_EResponse): string;
declare enum CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3
}
declare function cMsgClientToGCRequestPlayerRecentAccomplishmentsResponse_EResponseFromJSON(object: any): CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse_EResponse;
declare function cMsgClientToGCRequestPlayerRecentAccomplishmentsResponse_EResponseToJSON(object: CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse_EResponse): string;
declare enum CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3
}
declare function cMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse_EResponseFromJSON(object: any): CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse_EResponse;
declare function cMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse_EResponseToJSON(object: CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse_EResponse): string;
declare enum CMsgClientToGCSubmitPlayerMatchSurveyResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eAlreadySubmitted = 4,
    k_ePlayerNotValid = 5
}
declare function cMsgClientToGCSubmitPlayerMatchSurveyResponse_EResponseFromJSON(object: any): CMsgClientToGCSubmitPlayerMatchSurveyResponse_EResponse;
declare function cMsgClientToGCSubmitPlayerMatchSurveyResponse_EResponseToJSON(object: CMsgClientToGCSubmitPlayerMatchSurveyResponse_EResponse): string;
declare enum CMsgClientToGCRequestReporterUpdatesResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTimeout = 2,
    k_eTooBusy = 3,
    k_eNotPermitted = 4,
    k_eNotToSoon = 5,
    k_eNotValid = 6
}
declare function cMsgClientToGCRequestReporterUpdatesResponse_EResponseFromJSON(object: any): CMsgClientToGCRequestReporterUpdatesResponse_EResponse;
declare function cMsgClientToGCRequestReporterUpdatesResponse_EResponseToJSON(object: CMsgClientToGCRequestReporterUpdatesResponse_EResponse): string;
declare enum CMsgClientToGCRecalibrateMMRResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTimeout = 2,
    k_eTooBusy = 3,
    k_eNotPermitted = 4,
    k_eNotToSoon = 5,
    k_eNotValid = 6
}
declare function cMsgClientToGCRecalibrateMMRResponse_EResponseFromJSON(object: any): CMsgClientToGCRecalibrateMMRResponse_EResponse;
declare function cMsgClientToGCRecalibrateMMRResponse_EResponseToJSON(object: CMsgClientToGCRecalibrateMMRResponse_EResponse): string;
declare enum CMsgClientToGCGetOWMatchDetailsResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTimeout = 2,
    k_eTooBusy = 3,
    k_eNotPermitted = 4,
    k_eNoCaseAvailable = 5
}
declare function cMsgClientToGCGetOWMatchDetailsResponse_EResponseFromJSON(object: any): CMsgClientToGCGetOWMatchDetailsResponse_EResponse;
declare function cMsgClientToGCGetOWMatchDetailsResponse_EResponseToJSON(object: CMsgClientToGCGetOWMatchDetailsResponse_EResponse): string;
declare enum CMsgClientToGCSubmitOWConvictionResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTimeout = 2,
    k_eTooBusy = 3,
    k_eNotPermitted = 4,
    k_eInvalidReplayID = 5,
    k_eInvalidConviction = 6,
    k_eInvalidPlayerSlot = 7
}
declare function cMsgClientToGCSubmitOWConvictionResponse_EResponseFromJSON(object: any): CMsgClientToGCSubmitOWConvictionResponse_EResponse;
declare function cMsgClientToGCSubmitOWConvictionResponse_EResponseToJSON(object: CMsgClientToGCSubmitOWConvictionResponse_EResponse): string;
declare enum CMsgClientToGCGetDPCFavoritesResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidRequest = 5
}
declare function cMsgClientToGCGetDPCFavoritesResponse_EResponseFromJSON(object: any): CMsgClientToGCGetDPCFavoritesResponse_EResponse;
declare function cMsgClientToGCGetDPCFavoritesResponse_EResponseToJSON(object: CMsgClientToGCGetDPCFavoritesResponse_EResponse): string;
declare enum CMsgClientToGCSetDPCFavoriteStateResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eFavoriteTypeOutOfRange = 2,
    k_eLockFailed = 3,
    k_eAlreadyFavorited = 4,
    k_eAlreadyUnfavorited = 5,
    k_eInsertRecordFailed = 6,
    k_eRemoveRecordFailed = 7,
    k_eTimeout = 8
}
declare function cMsgClientToGCSetDPCFavoriteStateResponse_EResponseFromJSON(object: any): CMsgClientToGCSetDPCFavoriteStateResponse_EResponse;
declare function cMsgClientToGCSetDPCFavoriteStateResponse_EResponseToJSON(object: CMsgClientToGCSetDPCFavoriteStateResponse_EResponse): string;
declare enum CMsgClientToGCSetEventActiveSeasonIDResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eDisabled = 2,
    k_eTooBusy = 3,
    k_eNotAllowed = 4,
    k_eTimeout = 5,
    k_eInternalSuccessNoChange = 6
}
declare function cMsgClientToGCSetEventActiveSeasonIDResponse_EResponseFromJSON(object: any): CMsgClientToGCSetEventActiveSeasonIDResponse_EResponse;
declare function cMsgClientToGCSetEventActiveSeasonIDResponse_EResponseToJSON(object: CMsgClientToGCSetEventActiveSeasonIDResponse_EResponse): string;
declare enum CMsgClientToGCPurchaseLabyrinthBlessingsResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eNoSuchBlessing = 2,
    k_eNotEnoughShards = 3,
    k_eNoPath = 4,
    k_eTimeout = 5
}
declare function cMsgClientToGCPurchaseLabyrinthBlessingsResponse_EResponseFromJSON(object: any): CMsgClientToGCPurchaseLabyrinthBlessingsResponse_EResponse;
declare function cMsgClientToGCPurchaseLabyrinthBlessingsResponse_EResponseToJSON(object: CMsgClientToGCPurchaseLabyrinthBlessingsResponse_EResponse): string;
declare enum CMsgClientToGCGetStickerbookResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTimeout = 2,
    k_eNotAllowed = 3,
    k_eTooBusy = 4
}
declare function cMsgClientToGCGetStickerbookResponse_EResponseFromJSON(object: any): CMsgClientToGCGetStickerbookResponse_EResponse;
declare function cMsgClientToGCGetStickerbookResponse_EResponseToJSON(object: CMsgClientToGCGetStickerbookResponse_EResponse): string;
declare enum CMsgClientToGCCreateStickerbookPageResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTimeout = 2,
    k_eTooManyPages = 3,
    k_eTooBusy = 4
}
declare function cMsgClientToGCCreateStickerbookPageResponse_EResponseFromJSON(object: any): CMsgClientToGCCreateStickerbookPageResponse_EResponse;
declare function cMsgClientToGCCreateStickerbookPageResponse_EResponseToJSON(object: CMsgClientToGCCreateStickerbookPageResponse_EResponse): string;
declare enum CMsgClientToGCDeleteStickerbookPageResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTimeout = 2,
    k_eInvalidStickerCount = 3,
    k_eTooBusy = 4,
    k_eInvalidStickerMax = 5,
    k_eInvalidPage = 6
}
declare function cMsgClientToGCDeleteStickerbookPageResponse_EResponseFromJSON(object: any): CMsgClientToGCDeleteStickerbookPageResponse_EResponse;
declare function cMsgClientToGCDeleteStickerbookPageResponse_EResponseToJSON(object: CMsgClientToGCDeleteStickerbookPageResponse_EResponse): string;
declare enum CMsgClientToGCPlaceStickersResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTimeout = 2,
    k_eMissingItem = 3,
    k_eTooBusy = 4,
    k_eDuplicateItem = 5,
    k_eInvalidPage = 6,
    k_ePageTypeMismatch = 7,
    k_eTooManyStickers = 8
}
declare function cMsgClientToGCPlaceStickersResponse_EResponseFromJSON(object: any): CMsgClientToGCPlaceStickersResponse_EResponse;
declare function cMsgClientToGCPlaceStickersResponse_EResponseToJSON(object: CMsgClientToGCPlaceStickersResponse_EResponse): string;
declare enum CMsgClientToGCPlaceCollectionStickersResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTimeout = 2,
    k_eMissingItem = 3,
    k_eTooBusy = 4,
    k_eDuplicateItem = 5,
    k_eInvalidPage = 6,
    k_ePageTypeMismatch = 7,
    k_eOldItemMismatch = 8,
    k_eInvalidSlot = 9,
    k_eSlotTypeMismatch = 10
}
declare function cMsgClientToGCPlaceCollectionStickersResponse_EResponseFromJSON(object: any): CMsgClientToGCPlaceCollectionStickersResponse_EResponse;
declare function cMsgClientToGCPlaceCollectionStickersResponse_EResponseToJSON(object: CMsgClientToGCPlaceCollectionStickersResponse_EResponse): string;
declare enum CMsgClientToGCOrderStickerbookTeamPageResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTimeout = 2,
    k_eTooManyPages = 3,
    k_eTooBusy = 4,
    k_eInvalidPage = 5
}
declare function cMsgClientToGCOrderStickerbookTeamPageResponse_EResponseFromJSON(object: any): CMsgClientToGCOrderStickerbookTeamPageResponse_EResponse;
declare function cMsgClientToGCOrderStickerbookTeamPageResponse_EResponseToJSON(object: CMsgClientToGCOrderStickerbookTeamPageResponse_EResponse): string;
declare enum CMsgClientToGCSetHeroStickerResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTimeout = 2,
    k_eMissingItem = 3,
    k_eTooBusy = 4,
    k_eOldItemMismatch = 5,
    k_eInvalidHero = 6
}
declare function cMsgClientToGCSetHeroStickerResponse_EResponseFromJSON(object: any): CMsgClientToGCSetHeroStickerResponse_EResponse;
declare function cMsgClientToGCSetHeroStickerResponse_EResponseToJSON(object: CMsgClientToGCSetHeroStickerResponse_EResponse): string;
declare enum CMsgClientToGCGetHeroStickersResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTimeout = 2,
    k_eTooBusy = 4
}
declare function cMsgClientToGCGetHeroStickersResponse_EResponseFromJSON(object: any): CMsgClientToGCGetHeroStickersResponse_EResponse;
declare function cMsgClientToGCGetHeroStickersResponse_EResponseToJSON(object: CMsgClientToGCGetHeroStickersResponse_EResponse): string;
declare enum CMsgClientToGCSetFavoritePageResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTimeout = 2,
    k_eTooBusy = 4,
    k_eInvalidPage = 5
}
declare function cMsgClientToGCSetFavoritePageResponse_EResponseFromJSON(object: any): CMsgClientToGCSetFavoritePageResponse_EResponse;
declare function cMsgClientToGCSetFavoritePageResponse_EResponseToJSON(object: CMsgClientToGCSetFavoritePageResponse_EResponse): string;
declare enum CMsgClientToGCClaimSwagResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTimeout = 2,
    k_eTooBusy = 4,
    k_eAlreadyClaimed = 5,
    k_eDisabled = 6,
    k_eInvalidRequest = 7,
    k_eUserNotEligible = 8,
    k_eStorageError = 9,
    k_eRewardDisabled = 10
}
declare function cMsgClientToGCClaimSwagResponse_EResponseFromJSON(object: any): CMsgClientToGCClaimSwagResponse_EResponse;
declare function cMsgClientToGCClaimSwagResponse_EResponseToJSON(object: CMsgClientToGCClaimSwagResponse_EResponse): string;
declare enum CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote_EVoteType {
    k_eUp = 0,
    k_eDown = 1
}
declare function cMsgGCToClientCollectorsCacheAvailableDataResponse_Vote_EVoteTypeFromJSON(object: any): CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote_EVoteType;
declare function cMsgGCToClientCollectorsCacheAvailableDataResponse_Vote_EVoteTypeToJSON(object: CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote_EVoteType): string;
declare enum CMsgGCToClientUploadMatchClipResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTimeout = 2,
    k_eTooBusy = 4
}
declare function cMsgGCToClientUploadMatchClipResponse_EResponseFromJSON(object: any): CMsgGCToClientUploadMatchClipResponse_EResponse;
declare function cMsgGCToClientUploadMatchClipResponse_EResponseToJSON(object: CMsgGCToClientUploadMatchClipResponse_EResponse): string;
declare enum CMsgGCToClientMapStatsResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1
}
declare function cMsgGCToClientMapStatsResponse_EResponseFromJSON(object: any): CMsgGCToClientMapStatsResponse_EResponse;
declare function cMsgGCToClientMapStatsResponse_EResponseToJSON(object: CMsgGCToClientMapStatsResponse_EResponse): string;
declare enum CMsgClientToGCRoadToTIGetQuestsResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidID = 5
}
declare function cMsgClientToGCRoadToTIGetQuestsResponse_EResponseFromJSON(object: any): CMsgClientToGCRoadToTIGetQuestsResponse_EResponse;
declare function cMsgClientToGCRoadToTIGetQuestsResponse_EResponseToJSON(object: CMsgClientToGCRoadToTIGetQuestsResponse_EResponse): string;
declare enum CMsgClientToGCRoadToTIGetActiveQuestResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eNone = 2,
    k_eTooBusy = 3,
    k_eDisabled = 4,
    k_eTimeout = 5,
    k_eInvalidID = 6
}
declare function cMsgClientToGCRoadToTIGetActiveQuestResponse_EResponseFromJSON(object: any): CMsgClientToGCRoadToTIGetActiveQuestResponse_EResponse;
declare function cMsgClientToGCRoadToTIGetActiveQuestResponse_EResponseToJSON(object: CMsgClientToGCRoadToTIGetActiveQuestResponse_EResponse): string;
declare enum CMsgClientToGCRoadToTIUseItemResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eBadInput = 2,
    k_eNoItem = 3,
    k_eDisabled = 4,
    k_eTimeout = 5,
    k_eInvalidID = 6
}
declare function cMsgClientToGCRoadToTIUseItemResponse_EResponseFromJSON(object: any): CMsgClientToGCRoadToTIUseItemResponse_EResponse;
declare function cMsgClientToGCRoadToTIUseItemResponse_EResponseToJSON(object: CMsgClientToGCRoadToTIUseItemResponse_EResponse): string;
declare enum CMsgGCRankedPlayerInfoSubmitResponse_EResult {
    SUCCESS = 0,
    ERROR_UNSPECIFIED = 1
}
declare function cMsgGCRankedPlayerInfoSubmitResponse_EResultFromJSON(object: any): CMsgGCRankedPlayerInfoSubmitResponse_EResult;
declare function cMsgGCRankedPlayerInfoSubmitResponse_EResultToJSON(object: CMsgGCRankedPlayerInfoSubmitResponse_EResult): string;
interface CMsgClientSuspended {
    timeEnd: number;
}
declare const CMsgClientSuspended: MessageFns$3<CMsgClientSuspended>;
interface CMsgBalancedShuffleLobby {
}
declare const CMsgBalancedShuffleLobby: MessageFns$3<CMsgBalancedShuffleLobby>;
interface CMsgInitialQuestionnaireResponse {
    initialSkill: number;
}
declare const CMsgInitialQuestionnaireResponse: MessageFns$3<CMsgInitialQuestionnaireResponse>;
interface CMsgDOTARequestMatchesResponse {
    matches: CMsgDOTAMatch[];
    series: CMsgDOTARequestMatchesResponse_Series[];
    requestId: number;
    totalResults: number;
    resultsRemaining: number;
}
declare const CMsgDOTARequestMatchesResponse: MessageFns$3<CMsgDOTARequestMatchesResponse>;
interface CMsgDOTARequestMatchesResponse_Series {
    matches: CMsgDOTAMatch[];
    seriesId: number;
    seriesType: number;
}
declare const CMsgDOTARequestMatchesResponse_Series: MessageFns$3<CMsgDOTARequestMatchesResponse_Series>;
interface CMsgDOTAPopup {
    id: CMsgDOTAPopup_PopupID;
    customText: string;
    intData: number;
    popupData: Buffer;
    locTokenHeader: string;
    locTokenMsg: string;
    varNames: string[];
    varValues: string[];
    debugText: string;
}
declare const CMsgDOTAPopup: MessageFns$3<CMsgDOTAPopup>;
interface CMsgDOTAReportsRemainingRequest {
}
declare const CMsgDOTAReportsRemainingRequest: MessageFns$3<CMsgDOTAReportsRemainingRequest>;
interface CMsgDOTAReportsRemainingResponse {
    numPositiveReportsRemaining: number;
    numNegativeReportsRemaining: number;
    numPositiveReportsTotal: number;
    numNegativeReportsTotal: number;
    numCommsReportsRemaining: number;
    numCommsReportsTotal: number;
}
declare const CMsgDOTAReportsRemainingResponse: MessageFns$3<CMsgDOTAReportsRemainingResponse>;
interface CMsgDOTASubmitPlayerReport {
    targetAccountId: number;
    reportFlags: number;
    lobbyId: string;
    comment: string;
}
declare const CMsgDOTASubmitPlayerReport: MessageFns$3<CMsgDOTASubmitPlayerReport>;
interface CMsgDOTASubmitPlayerReportResponse {
    targetAccountId: number;
    reportFlags: number;
    debugMessage: string;
    enumResult: CMsgDOTASubmitPlayerReportResponse_EResult;
}
declare const CMsgDOTASubmitPlayerReportResponse: MessageFns$3<CMsgDOTASubmitPlayerReportResponse>;
interface CMsgDOTASubmitPlayerAvoidRequest {
    targetAccountId: number;
    lobbyId: string;
    userNote: string;
}
declare const CMsgDOTASubmitPlayerAvoidRequest: MessageFns$3<CMsgDOTASubmitPlayerAvoidRequest>;
interface CMsgDOTASubmitPlayerAvoidRequestResponse {
    targetAccountId: number;
    result: number;
    debugMessage: string;
}
declare const CMsgDOTASubmitPlayerAvoidRequestResponse: MessageFns$3<CMsgDOTASubmitPlayerAvoidRequestResponse>;
interface CMsgDOTASubmitPlayerReportV2 {
    targetAccountId: number;
    reportReason: number[];
    lobbyId: string;
    gameTime: number;
    debugSlot: number;
    debugMatchId: string;
}
declare const CMsgDOTASubmitPlayerReportV2: MessageFns$3<CMsgDOTASubmitPlayerReportV2>;
interface CMsgDOTASubmitPlayerReportResponseV2 {
    targetAccountId: number;
    reportReason: number[];
    debugMessage: string;
    enumResult: CMsgDOTASubmitPlayerReportResponseV2_EResult;
}
declare const CMsgDOTASubmitPlayerReportResponseV2: MessageFns$3<CMsgDOTASubmitPlayerReportResponseV2>;
interface CMsgDOTASubmitLobbyMVPVote {
    targetAccountId: number;
}
declare const CMsgDOTASubmitLobbyMVPVote: MessageFns$3<CMsgDOTASubmitLobbyMVPVote>;
interface CMsgDOTASubmitLobbyMVPVoteResponse {
    targetAccountId: number;
    eresult: number;
}
declare const CMsgDOTASubmitLobbyMVPVoteResponse: MessageFns$3<CMsgDOTASubmitLobbyMVPVoteResponse>;
interface CMsgDOTALobbyMVPAwarded {
    matchId: string;
    mvpAccountId: number[];
}
declare const CMsgDOTALobbyMVPAwarded: MessageFns$3<CMsgDOTALobbyMVPAwarded>;
interface CMsgDOTAKickedFromMatchmakingQueue {
    matchType: MatchType;
}
declare const CMsgDOTAKickedFromMatchmakingQueue: MessageFns$3<CMsgDOTAKickedFromMatchmakingQueue>;
interface CMsgGCMatchDetailsRequest {
    matchId: string;
}
declare const CMsgGCMatchDetailsRequest: MessageFns$3<CMsgGCMatchDetailsRequest>;
interface CMsgGCMatchDetailsResponse {
    result: number;
    match: CMsgDOTAMatch | undefined;
    vote: DOTAMatchVote;
}
declare const CMsgGCMatchDetailsResponse: MessageFns$3<CMsgGCMatchDetailsResponse>;
interface CMsgDOTAProfileTickets {
    result: number;
    accountId: number;
    leaguePasses: CMsgDOTAProfileTickets_LeaguePass[];
}
declare const CMsgDOTAProfileTickets: MessageFns$3<CMsgDOTAProfileTickets>;
interface CMsgDOTAProfileTickets_LeaguePass {
    leagueId: number;
    itemDef: number;
}
declare const CMsgDOTAProfileTickets_LeaguePass: MessageFns$3<CMsgDOTAProfileTickets_LeaguePass>;
interface CMsgClientToGCGetProfileTickets {
    accountId: number;
}
declare const CMsgClientToGCGetProfileTickets: MessageFns$3<CMsgClientToGCGetProfileTickets>;
interface CMsgGCToClientPartySearchInvites {
    invites: CMsgGCToClientPartySearchInvite[];
}
declare const CMsgGCToClientPartySearchInvites: MessageFns$3<CMsgGCToClientPartySearchInvites>;
interface CMsgDOTAWelcome {
    storeItemHash: number;
    timeplayedconsecutively: number;
    allow3rdPartyMatchHistory: boolean;
    lastIpAddress: number;
    profilePrivate: boolean;
    currency: number;
    shouldRequestPlayerOrigin: boolean;
    gcSocacheFileVersion: number;
    isPerfectWorldTestAccount: boolean;
    extraMessages: CMsgDOTAWelcome_CExtraMsg[];
    minimumRecentItemId: string;
    activeEvent: EEvent;
    additionalUserMessage: number;
    customGameWhitelistVersion: number;
    partySearchFriendInvites: CMsgGCToClientPartySearchInvites | undefined;
    remainingPlaytime: number;
    disableGuildPersonaInfo: boolean;
    extraMessageBlocks: CExtraMsgBlock[];
}
declare const CMsgDOTAWelcome: MessageFns$3<CMsgDOTAWelcome>;
interface CMsgDOTAWelcome_CExtraMsg {
    id: number;
    contents: Buffer;
}
declare const CMsgDOTAWelcome_CExtraMsg: MessageFns$3<CMsgDOTAWelcome_CExtraMsg>;
interface CSODOTAGameHeroFavorites {
    accountId: number;
    heroId: number;
}
declare const CSODOTAGameHeroFavorites: MessageFns$3<CSODOTAGameHeroFavorites>;
interface CMsgDOTAMatchVotes {
    matchId: string;
    votes: CMsgDOTAMatchVotes_PlayerVote[];
}
declare const CMsgDOTAMatchVotes: MessageFns$3<CMsgDOTAMatchVotes>;
interface CMsgDOTAMatchVotes_PlayerVote {
    accountId: number;
    vote: number;
}
declare const CMsgDOTAMatchVotes_PlayerVote: MessageFns$3<CMsgDOTAMatchVotes_PlayerVote>;
interface CMsgMatchmakingMatchGroupInfo {
    playersSearching: number;
    autoRegionSelectPingPenalty: number;
    autoRegionSelectPingPenaltyCustom: number;
    status: EMatchGroupServerStatus;
}
declare const CMsgMatchmakingMatchGroupInfo: MessageFns$3<CMsgMatchmakingMatchGroupInfo>;
interface CMsgDOTAMatchmakingStatsRequest {
}
declare const CMsgDOTAMatchmakingStatsRequest: MessageFns$3<CMsgDOTAMatchmakingStatsRequest>;
interface CMsgDOTAMatchmakingStatsResponse {
    matchgroupsVersion: number;
    legacySearchingPlayersByGroupSource2: number[];
    matchGroups: CMsgMatchmakingMatchGroupInfo[];
}
declare const CMsgDOTAMatchmakingStatsResponse: MessageFns$3<CMsgDOTAMatchmakingStatsResponse>;
interface CMsgDOTAUpdateMatchmakingStats {
    stats: CMsgDOTAMatchmakingStatsResponse | undefined;
}
declare const CMsgDOTAUpdateMatchmakingStats: MessageFns$3<CMsgDOTAUpdateMatchmakingStats>;
interface CMsgDOTAUpdateMatchManagementStats {
    stats: CMsgDOTAMatchmakingStatsResponse | undefined;
}
declare const CMsgDOTAUpdateMatchManagementStats: MessageFns$3<CMsgDOTAUpdateMatchManagementStats>;
interface CMsgDOTASetMatchHistoryAccess {
    allow3rdPartyMatchHistory: boolean;
}
declare const CMsgDOTASetMatchHistoryAccess: MessageFns$3<CMsgDOTASetMatchHistoryAccess>;
interface CMsgDOTASetMatchHistoryAccessResponse {
    eresult: number;
}
declare const CMsgDOTASetMatchHistoryAccessResponse: MessageFns$3<CMsgDOTASetMatchHistoryAccessResponse>;
interface CMsgDOTANotifyAccountFlagsChange {
    accountid: number;
    accountFlags: number;
}
declare const CMsgDOTANotifyAccountFlagsChange: MessageFns$3<CMsgDOTANotifyAccountFlagsChange>;
interface CMsgDOTASetProfilePrivacy {
    profilePrivate: boolean;
}
declare const CMsgDOTASetProfilePrivacy: MessageFns$3<CMsgDOTASetProfilePrivacy>;
interface CMsgDOTASetProfilePrivacyResponse {
    eresult: number;
}
declare const CMsgDOTASetProfilePrivacyResponse: MessageFns$3<CMsgDOTASetProfilePrivacyResponse>;
interface CMsgUpgradeLeagueItem {
    matchId: string;
    leagueId: number;
}
declare const CMsgUpgradeLeagueItem: MessageFns$3<CMsgUpgradeLeagueItem>;
interface CMsgUpgradeLeagueItemResponse {
}
declare const CMsgUpgradeLeagueItemResponse: MessageFns$3<CMsgUpgradeLeagueItemResponse>;
interface CMsgGCWatchDownloadedReplay {
    matchId: string;
    watchType: DOTAWatchReplayType;
}
declare const CMsgGCWatchDownloadedReplay: MessageFns$3<CMsgGCWatchDownloadedReplay>;
interface CMsgClientsRejoinChatChannels {
}
declare const CMsgClientsRejoinChatChannels: MessageFns$3<CMsgClientsRejoinChatChannels>;
interface CMsgGCGetHeroStandings {
}
declare const CMsgGCGetHeroStandings: MessageFns$3<CMsgGCGetHeroStandings>;
interface CMsgGCGetHeroStandingsResponse {
    standings: CMsgGCGetHeroStandingsResponse_Hero[];
}
declare const CMsgGCGetHeroStandingsResponse: MessageFns$3<CMsgGCGetHeroStandingsResponse>;
interface CMsgGCGetHeroStandingsResponse_Hero {
    heroId: number;
    wins: number;
    losses: number;
    winStreak: number;
    bestWinStreak: number;
    avgKills: number;
    avgDeaths: number;
    avgAssists: number;
    avgGpm: number;
    avgXpm: number;
    bestKills: number;
    bestAssists: number;
    bestGpm: number;
    bestXpm: number;
    performance: number;
    winsWithAlly: number;
    lossesWithAlly: number;
    winsAgainstEnemy: number;
    lossesAgainstEnemy: number;
    networthPeak: number;
    lasthitPeak: number;
    denyPeak: number;
    damagePeak: number;
    longestGamePeak: number;
    healingPeak: number;
    avgLasthits: number;
    avgDenies: number;
}
declare const CMsgGCGetHeroStandingsResponse_Hero: MessageFns$3<CMsgGCGetHeroStandingsResponse_Hero>;
interface CMatchPlayerTimedStatAverages {
    kills: number;
    deaths: number;
    assists: number;
    netWorth: number;
    lastHits: number;
    denies: number;
    itemValue: number;
    supportGoldSpent: number;
    campsStacked: number;
    wardsPlaced: number;
    dewards: number;
    tripleKills: number;
    rampages: number;
}
declare const CMatchPlayerTimedStatAverages: MessageFns$3<CMatchPlayerTimedStatAverages>;
interface CMatchPlayerTimedStatStdDeviations {
    kills: number;
    deaths: number;
    assists: number;
    netWorth: number;
    lastHits: number;
    denies: number;
    itemValue: number;
    supportGoldSpent: number;
    campsStacked: number;
    wardsPlaced: number;
    dewards: number;
    tripleKills: number;
    rampages: number;
}
declare const CMatchPlayerTimedStatStdDeviations: MessageFns$3<CMatchPlayerTimedStatStdDeviations>;
interface CMsgGCGetHeroTimedStatsResponse {
    heroId: number;
    rankChunkedStats: CMsgGCGetHeroTimedStatsResponse_RankChunkedStats[];
}
declare const CMsgGCGetHeroTimedStatsResponse: MessageFns$3<CMsgGCGetHeroTimedStatsResponse>;
interface CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer {
    time: number;
    allStats: CMatchPlayerTimedStatAverages | undefined;
    winningStats: CMatchPlayerTimedStatAverages | undefined;
    losingStats: CMatchPlayerTimedStatAverages | undefined;
    winningStddevs: CMatchPlayerTimedStatStdDeviations | undefined;
    losingStddevs: CMatchPlayerTimedStatStdDeviations | undefined;
}
declare const CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer: MessageFns$3<CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer>;
interface CMsgGCGetHeroTimedStatsResponse_RankChunkedStats {
    rankChunk: number;
    timedStats: CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer[];
}
declare const CMsgGCGetHeroTimedStatsResponse_RankChunkedStats: MessageFns$3<CMsgGCGetHeroTimedStatsResponse_RankChunkedStats>;
interface CMsgGCItemEditorReservationsRequest {
}
declare const CMsgGCItemEditorReservationsRequest: MessageFns$3<CMsgGCItemEditorReservationsRequest>;
interface CMsgGCItemEditorReservation {
    defIndex: number;
    name: string;
}
declare const CMsgGCItemEditorReservation: MessageFns$3<CMsgGCItemEditorReservation>;
interface CMsgGCItemEditorReservationsResponse {
    reservations: CMsgGCItemEditorReservation[];
}
declare const CMsgGCItemEditorReservationsResponse: MessageFns$3<CMsgGCItemEditorReservationsResponse>;
interface CMsgGCItemEditorReserveItemDef {
    defIndex: number;
    username: string;
}
declare const CMsgGCItemEditorReserveItemDef: MessageFns$3<CMsgGCItemEditorReserveItemDef>;
interface CMsgGCItemEditorReserveItemDefResponse {
    defIndex: number;
    username: string;
    result: number;
}
declare const CMsgGCItemEditorReserveItemDefResponse: MessageFns$3<CMsgGCItemEditorReserveItemDefResponse>;
interface CMsgGCItemEditorReleaseReservation {
    defIndex: number;
    username: string;
}
declare const CMsgGCItemEditorReleaseReservation: MessageFns$3<CMsgGCItemEditorReleaseReservation>;
interface CMsgGCItemEditorReleaseReservationResponse {
    defIndex: number;
    released: boolean;
}
declare const CMsgGCItemEditorReleaseReservationResponse: MessageFns$3<CMsgGCItemEditorReleaseReservationResponse>;
interface CMsgFlipLobbyTeams {
}
declare const CMsgFlipLobbyTeams: MessageFns$3<CMsgFlipLobbyTeams>;
interface CMsgGCLobbyUpdateBroadcastChannelInfo {
    channelId: number;
    countryCode: string;
    description: string;
    languageCode: string;
}
declare const CMsgGCLobbyUpdateBroadcastChannelInfo: MessageFns$3<CMsgGCLobbyUpdateBroadcastChannelInfo>;
interface CMsgDOTAClaimEventActionData {
    grantItemGiftData: CMsgDOTAClaimEventActionData_GrantItemGiftData | undefined;
}
declare const CMsgDOTAClaimEventActionData: MessageFns$3<CMsgDOTAClaimEventActionData>;
interface CMsgDOTAClaimEventActionData_GrantItemGiftData {
    giveToAccountId: number;
    giftMessage: string;
}
declare const CMsgDOTAClaimEventActionData_GrantItemGiftData: MessageFns$3<CMsgDOTAClaimEventActionData_GrantItemGiftData>;
interface CMsgDOTAClaimEventAction {
    eventId: number;
    actionId: number;
    quantity: number;
    data: CMsgDOTAClaimEventActionData | undefined;
    scoreMode: EEventActionScoreMode;
}
declare const CMsgDOTAClaimEventAction: MessageFns$3<CMsgDOTAClaimEventAction>;
interface CMsgClientToGCClaimEventActionUsingItem {
    eventId: number;
    actionId: number;
    itemId: string;
    quantity: number;
}
declare const CMsgClientToGCClaimEventActionUsingItem: MessageFns$3<CMsgClientToGCClaimEventActionUsingItem>;
interface CMsgClientToGCClaimEventActionUsingItemResponse {
    actionResults: CMsgDOTAClaimEventActionResponse | undefined;
}
declare const CMsgClientToGCClaimEventActionUsingItemResponse: MessageFns$3<CMsgClientToGCClaimEventActionUsingItemResponse>;
interface CMsgGCToClientClaimEventActionUsingItemCompleted {
    itemId: string;
    actionResults: CMsgDOTAClaimEventActionResponse | undefined;
}
declare const CMsgGCToClientClaimEventActionUsingItemCompleted: MessageFns$3<CMsgGCToClientClaimEventActionUsingItemCompleted>;
interface CMsgDOTAGetEventPoints {
    eventId: number;
    accountId: number;
}
declare const CMsgDOTAGetEventPoints: MessageFns$3<CMsgDOTAGetEventPoints>;
interface CMsgDOTAGetEventPointsResponse {
    totalPoints: number;
    totalPremiumPoints: number;
    eventId: number;
    points: number;
    premiumPoints: number;
    completedActions: CMsgDOTAGetEventPointsResponse_Action[];
    accountId: number;
    owned: boolean;
    auditAction: number;
    activeSeasonId: number;
}
declare const CMsgDOTAGetEventPointsResponse: MessageFns$3<CMsgDOTAGetEventPointsResponse>;
interface CMsgDOTAGetEventPointsResponse_Action {
    actionId: number;
    timesCompleted: number;
}
declare const CMsgDOTAGetEventPointsResponse_Action: MessageFns$3<CMsgDOTAGetEventPointsResponse_Action>;
interface CMsgDOTAGetPeriodicResource {
    accountId: number;
    periodicResourceId: number;
    timestamp: number;
}
declare const CMsgDOTAGetPeriodicResource: MessageFns$3<CMsgDOTAGetPeriodicResource>;
interface CMsgDOTAGetPeriodicResourceResponse {
    periodicResourceMax: number;
    periodicResourceUsed: number;
}
declare const CMsgDOTAGetPeriodicResourceResponse: MessageFns$3<CMsgDOTAGetPeriodicResourceResponse>;
interface CMsgDOTAPeriodicResourceUpdated {
    periodicResourceKey: CMsgDOTAGetPeriodicResource | undefined;
    periodicResourceValue: CMsgDOTAGetPeriodicResourceResponse | undefined;
}
declare const CMsgDOTAPeriodicResourceUpdated: MessageFns$3<CMsgDOTAPeriodicResourceUpdated>;
interface CMsgDOTACompendiumSelection {
    selectionIndex: number;
    selection: number;
    leagueid: number;
}
declare const CMsgDOTACompendiumSelection: MessageFns$3<CMsgDOTACompendiumSelection>;
interface CMsgDOTACompendiumSelectionResponse {
    eresult: number;
}
declare const CMsgDOTACompendiumSelectionResponse: MessageFns$3<CMsgDOTACompendiumSelectionResponse>;
interface CMsgDOTACompendiumRemoveAllSelections {
    leagueid: number;
}
declare const CMsgDOTACompendiumRemoveAllSelections: MessageFns$3<CMsgDOTACompendiumRemoveAllSelections>;
interface CMsgDOTACompendiumRemoveAllSelectionsResponse {
    eresult: number;
}
declare const CMsgDOTACompendiumRemoveAllSelectionsResponse: MessageFns$3<CMsgDOTACompendiumRemoveAllSelectionsResponse>;
interface CMsgDOTACompendiumData {
    selections: CMsgDOTACompendiumSelection[];
}
declare const CMsgDOTACompendiumData: MessageFns$3<CMsgDOTACompendiumData>;
interface CMsgDOTACompendiumDataRequest {
    accountId: number;
    leagueid: number;
}
declare const CMsgDOTACompendiumDataRequest: MessageFns$3<CMsgDOTACompendiumDataRequest>;
interface CMsgDOTACompendiumDataResponse {
    accountId: number;
    leagueid: number;
    result: number;
    compendiumData: CMsgDOTACompendiumData | undefined;
}
declare const CMsgDOTACompendiumDataResponse: MessageFns$3<CMsgDOTACompendiumDataResponse>;
interface CMsgDOTAGetPlayerMatchHistory {
    accountId: number;
    startAtMatchId: string;
    matchesRequested: number;
    heroId: number;
    requestId: number;
    includePracticeMatches: boolean;
    includeCustomGames: boolean;
    includeEventGames: boolean;
}
declare const CMsgDOTAGetPlayerMatchHistory: MessageFns$3<CMsgDOTAGetPlayerMatchHistory>;
interface CMsgDOTAGetPlayerMatchHistoryResponse {
    matches: CMsgDOTAGetPlayerMatchHistoryResponse_Match[];
    requestId: number;
}
declare const CMsgDOTAGetPlayerMatchHistoryResponse: MessageFns$3<CMsgDOTAGetPlayerMatchHistoryResponse>;
interface CMsgDOTAGetPlayerMatchHistoryResponse_Match {
    matchId: string;
    startTime: number;
    heroId: number;
    winner: boolean;
    gameMode: number;
    rankChange: number;
    previousRank: number;
    lobbyType: number;
    soloRank: boolean;
    abandon: boolean;
    duration: number;
    engine: number;
    activePlusSubscription: boolean;
    seasonalRank: boolean;
    tourneyId: number;
    tourneyRound: number;
    tourneyTier: number;
    tourneyDivision: number;
    teamId: number;
    teamName: string;
    ugcTeamUiLogo: string;
    selectedFacet: number;
}
declare const CMsgDOTAGetPlayerMatchHistoryResponse_Match: MessageFns$3<CMsgDOTAGetPlayerMatchHistoryResponse_Match>;
interface CMsgGCNotificationsRequest {
}
declare const CMsgGCNotificationsRequest: MessageFns$3<CMsgGCNotificationsRequest>;
interface CMsgGCNotificationsNotification {
    id: string;
    type: number;
    timestamp: number;
    referenceA: number;
    referenceB: number;
    referenceC: number;
    message: string;
    unread: boolean;
}
declare const CMsgGCNotificationsNotification: MessageFns$3<CMsgGCNotificationsNotification>;
interface CMsgGCNotificationsUpdate {
    result: CMsgGCNotificationsUpdate_EResult;
    notifications: CMsgGCNotificationsNotification[];
}
declare const CMsgGCNotificationsUpdate: MessageFns$3<CMsgGCNotificationsUpdate>;
interface CMsgGCNotificationsResponse {
    update: CMsgGCNotificationsUpdate | undefined;
}
declare const CMsgGCNotificationsResponse: MessageFns$3<CMsgGCNotificationsResponse>;
interface CMsgGCNotificationsMarkReadRequest {
}
declare const CMsgGCNotificationsMarkReadRequest: MessageFns$3<CMsgGCNotificationsMarkReadRequest>;
interface CMsgGCPlayerInfoSubmit {
    name: string;
    countryCode: string;
    fantasyRole: number;
    teamId: number;
    sponsor: string;
}
declare const CMsgGCPlayerInfoSubmit: MessageFns$3<CMsgGCPlayerInfoSubmit>;
interface CMsgGCPlayerInfoSubmitResponse {
    result: CMsgGCPlayerInfoSubmitResponse_EResult;
}
declare const CMsgGCPlayerInfoSubmitResponse: MessageFns$3<CMsgGCPlayerInfoSubmitResponse>;
interface CMsgDOTAEmoticonAccessSDO {
    accountId: number;
    unlockedEmoticons: Buffer;
}
declare const CMsgDOTAEmoticonAccessSDO: MessageFns$3<CMsgDOTAEmoticonAccessSDO>;
interface CMsgClientToGCEmoticonDataRequest {
}
declare const CMsgClientToGCEmoticonDataRequest: MessageFns$3<CMsgClientToGCEmoticonDataRequest>;
interface CMsgGCToClientEmoticonData {
    emoticonAccess: CMsgDOTAEmoticonAccessSDO | undefined;
}
declare const CMsgGCToClientEmoticonData: MessageFns$3<CMsgGCToClientEmoticonData>;
interface CMsgGCToClientTournamentItemDrop {
    itemDef: number;
    eventType: number;
}
declare const CMsgGCToClientTournamentItemDrop: MessageFns$3<CMsgGCToClientTournamentItemDrop>;
interface CMsgClientToGCGetAllHeroOrder {
}
declare const CMsgClientToGCGetAllHeroOrder: MessageFns$3<CMsgClientToGCGetAllHeroOrder>;
interface CMsgClientToGCGetAllHeroOrderResponse {
    heroIds: number[];
}
declare const CMsgClientToGCGetAllHeroOrderResponse: MessageFns$3<CMsgClientToGCGetAllHeroOrderResponse>;
interface CMsgClientToGCGetAllHeroProgress {
    accountId: number;
}
declare const CMsgClientToGCGetAllHeroProgress: MessageFns$3<CMsgClientToGCGetAllHeroProgress>;
interface CMsgClientToGCGetAllHeroProgressResponse {
    accountId: number;
    currHeroId: number;
    lapsCompleted: number;
    currHeroGames: number;
    currLapTimeStarted: number;
    currLapGames: number;
    bestLapGames: number;
    bestLapTime: number;
    lapHeroesCompleted: number;
    lapHeroesRemaining: number;
    nextHeroId: number;
    prevHeroId: number;
    prevHeroGames: number;
    prevAvgTries: number;
    currAvgTries: number;
    nextAvgTries: number;
    fullLapAvgTries: number;
    currLapAvgTries: number;
    profileName: string;
    startHeroId: number;
}
declare const CMsgClientToGCGetAllHeroProgressResponse: MessageFns$3<CMsgClientToGCGetAllHeroProgressResponse>;
interface CMsgClientToGCGetTrophyList {
    accountId: number;
}
declare const CMsgClientToGCGetTrophyList: MessageFns$3<CMsgClientToGCGetTrophyList>;
interface CMsgClientToGCGetTrophyListResponse {
    trophies: CMsgClientToGCGetTrophyListResponse_Trophy[];
}
declare const CMsgClientToGCGetTrophyListResponse: MessageFns$3<CMsgClientToGCGetTrophyListResponse>;
interface CMsgClientToGCGetTrophyListResponse_Trophy {
    trophyId: number;
    trophyScore: number;
    lastUpdated: number;
}
declare const CMsgClientToGCGetTrophyListResponse_Trophy: MessageFns$3<CMsgClientToGCGetTrophyListResponse_Trophy>;
interface CMsgGCToClientTrophyAwarded {
    trophyId: number;
    trophyScore: number;
    trophyOldScore: number;
    lastUpdated: number;
}
declare const CMsgGCToClientTrophyAwarded: MessageFns$3<CMsgGCToClientTrophyAwarded>;
interface CMsgClientToGCRankRequest {
    rankType: ERankType;
}
declare const CMsgClientToGCRankRequest: MessageFns$3<CMsgClientToGCRankRequest>;
interface CMsgGCToClientRankResponse {
    result: CMsgGCToClientRankResponse_EResultCode;
    rankValue: number;
    rankData1: number;
    rankData2: number;
    rankData3: number;
}
declare const CMsgGCToClientRankResponse: MessageFns$3<CMsgGCToClientRankResponse>;
interface CMsgGCToClientRankUpdate {
    rankType: ERankType;
    rankInfo: CMsgGCToClientRankResponse | undefined;
}
declare const CMsgGCToClientRankUpdate: MessageFns$3<CMsgGCToClientRankUpdate>;
interface CMsgClientToGCGetProfileCard {
    accountId: number;
}
declare const CMsgClientToGCGetProfileCard: MessageFns$3<CMsgClientToGCGetProfileCard>;
interface CMsgClientToGCSetProfileCardSlots {
    slots: CMsgClientToGCSetProfileCardSlots_CardSlot[];
}
declare const CMsgClientToGCSetProfileCardSlots: MessageFns$3<CMsgClientToGCSetProfileCardSlots>;
interface CMsgClientToGCSetProfileCardSlots_CardSlot {
    slotId: number;
    slotType: EProfileCardSlotType;
    slotValue: string;
}
declare const CMsgClientToGCSetProfileCardSlots_CardSlot: MessageFns$3<CMsgClientToGCSetProfileCardSlots_CardSlot>;
interface CMsgClientToGCGetProfileCardStats {
}
declare const CMsgClientToGCGetProfileCardStats: MessageFns$3<CMsgClientToGCGetProfileCardStats>;
interface CMsgClientToGCCreateHeroStatue {
    sourceItemId: string;
    heroId: number;
    sequenceName: string;
    cycle: number;
    wearables: number[];
    inscription: string;
    styles: number[];
    reforgerItemId: string;
    tournamentDrop: boolean;
}
declare const CMsgClientToGCCreateHeroStatue: MessageFns$3<CMsgClientToGCCreateHeroStatue>;
interface CMsgGCToClientHeroStatueCreateResult {
    resultingItemId: string;
}
declare const CMsgGCToClientHeroStatueCreateResult: MessageFns$3<CMsgGCToClientHeroStatueCreateResult>;
interface CMsgClientToGCPlayerStatsRequest {
    accountId: number;
}
declare const CMsgClientToGCPlayerStatsRequest: MessageFns$3<CMsgClientToGCPlayerStatsRequest>;
interface CMsgGCToClientPlayerStatsResponse {
    accountId: number;
    playerStats: number[];
    matchCount: number;
    meanGpm: number;
    meanXppm: number;
    meanLasthits: number;
    rampages: number;
    tripleKills: number;
    firstBloodClaimed: number;
    firstBloodGiven: number;
    couriersKilled: number;
    aegisesSnatched: number;
    cheesesEaten: number;
    creepsStacked: number;
    fightScore: number;
    farmScore: number;
    supportScore: number;
    pushScore: number;
    versatilityScore: number;
    meanNetworth: number;
    meanDamage: number;
    meanHeals: number;
    rapiersPurchased: number;
}
declare const CMsgGCToClientPlayerStatsResponse: MessageFns$3<CMsgGCToClientPlayerStatsResponse>;
interface CMsgClientToGCCustomGamesFriendsPlayedRequest {
}
declare const CMsgClientToGCCustomGamesFriendsPlayedRequest: MessageFns$3<CMsgClientToGCCustomGamesFriendsPlayedRequest>;
interface CMsgGCToClientCustomGamesFriendsPlayedResponse {
    accountId: number;
    games: CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame[];
}
declare const CMsgGCToClientCustomGamesFriendsPlayedResponse: MessageFns$3<CMsgGCToClientCustomGamesFriendsPlayedResponse>;
interface CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame {
    customGameId: string;
    accountIds: number[];
}
declare const CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame: MessageFns$3<CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame>;
interface CMsgClientToGCSocialFeedPostCommentRequest {
    eventId: string;
    comment: string;
}
declare const CMsgClientToGCSocialFeedPostCommentRequest: MessageFns$3<CMsgClientToGCSocialFeedPostCommentRequest>;
interface CMsgGCToClientSocialFeedPostCommentResponse {
    success: boolean;
}
declare const CMsgGCToClientSocialFeedPostCommentResponse: MessageFns$3<CMsgGCToClientSocialFeedPostCommentResponse>;
interface CMsgClientToGCSocialFeedPostMessageRequest {
    message: string;
    matchId: string;
    matchTimestamp: number;
}
declare const CMsgClientToGCSocialFeedPostMessageRequest: MessageFns$3<CMsgClientToGCSocialFeedPostMessageRequest>;
interface CMsgGCToClientSocialFeedPostMessageResponse {
    success: boolean;
}
declare const CMsgGCToClientSocialFeedPostMessageResponse: MessageFns$3<CMsgGCToClientSocialFeedPostMessageResponse>;
interface CMsgClientToGCFriendsPlayedCustomGameRequest {
    customGameId: string;
}
declare const CMsgClientToGCFriendsPlayedCustomGameRequest: MessageFns$3<CMsgClientToGCFriendsPlayedCustomGameRequest>;
interface CMsgGCToClientFriendsPlayedCustomGameResponse {
    customGameId: string;
    accountIds: number[];
}
declare const CMsgGCToClientFriendsPlayedCustomGameResponse: MessageFns$3<CMsgGCToClientFriendsPlayedCustomGameResponse>;
interface CMsgDOTAPartyRichPresence {
    partyId: string;
    partyState: CSODOTAParty_State;
    open: boolean;
    lowPriority: boolean;
    teamId: number;
    teamName: string;
    ugcTeamUiLogo: string;
    members: CMsgDOTAPartyRichPresence_Member[];
    weekendTourney: CMsgDOTAPartyRichPresence_WeekendTourney | undefined;
}
declare const CMsgDOTAPartyRichPresence: MessageFns$3<CMsgDOTAPartyRichPresence>;
interface CMsgDOTAPartyRichPresence_Member {
    steamId: string;
    coach: boolean;
}
declare const CMsgDOTAPartyRichPresence_Member: MessageFns$3<CMsgDOTAPartyRichPresence_Member>;
interface CMsgDOTAPartyRichPresence_WeekendTourney {
    division: number;
    skillLevel: number;
    round: number;
    tournamentId: number;
    stateSeqNum: number;
    event: EWeekendTourneyRichPresenceEvent;
    eventRound: number;
}
declare const CMsgDOTAPartyRichPresence_WeekendTourney: MessageFns$3<CMsgDOTAPartyRichPresence_WeekendTourney>;
interface CMsgDOTALobbyRichPresence {
    lobbyId: string;
    lobbyState: CSODOTALobby_State;
    password: boolean;
    gameMode: DOTAGameMode;
    memberCount: number;
    maxMemberCount: number;
    customGameId: string;
    name: string;
    lobbyType: number;
}
declare const CMsgDOTALobbyRichPresence: MessageFns$3<CMsgDOTALobbyRichPresence>;
interface CMsgDOTACustomGameListenServerStartedLoading {
    lobbyId: string;
    customGameId: string;
    lobbyMembers: number[];
    startTime: number;
}
declare const CMsgDOTACustomGameListenServerStartedLoading: MessageFns$3<CMsgDOTACustomGameListenServerStartedLoading>;
interface CMsgDOTACustomGameClientFinishedLoading {
    lobbyId: string;
    loadingDuration: number;
    resultCode: number;
    resultString: string;
    signonStates: number;
    comment: string;
}
declare const CMsgDOTACustomGameClientFinishedLoading: MessageFns$3<CMsgDOTACustomGameClientFinishedLoading>;
interface CMsgClientToGCApplyGemCombiner {
    itemId1: string;
    itemId2: string;
}
declare const CMsgClientToGCApplyGemCombiner: MessageFns$3<CMsgClientToGCApplyGemCombiner>;
interface CMsgClientToGCH264Unsupported {
}
declare const CMsgClientToGCH264Unsupported: MessageFns$3<CMsgClientToGCH264Unsupported>;
interface CMsgClientToGCGetQuestProgress {
    questIds: number[];
}
declare const CMsgClientToGCGetQuestProgress: MessageFns$3<CMsgClientToGCGetQuestProgress>;
interface CMsgClientToGCGetQuestProgressResponse {
    success: boolean;
    quests: CMsgClientToGCGetQuestProgressResponse_Quest[];
}
declare const CMsgClientToGCGetQuestProgressResponse: MessageFns$3<CMsgClientToGCGetQuestProgressResponse>;
interface CMsgClientToGCGetQuestProgressResponse_Challenge {
    challengeId: number;
    timeCompleted: number;
    attempts: number;
    heroId: number;
    templateId: number;
    questRank: number;
}
declare const CMsgClientToGCGetQuestProgressResponse_Challenge: MessageFns$3<CMsgClientToGCGetQuestProgressResponse_Challenge>;
interface CMsgClientToGCGetQuestProgressResponse_Quest {
    questId: number;
    completedChallenges: CMsgClientToGCGetQuestProgressResponse_Challenge[];
}
declare const CMsgClientToGCGetQuestProgressResponse_Quest: MessageFns$3<CMsgClientToGCGetQuestProgressResponse_Quest>;
interface CMsgGCToClientMatchSignedOut {
    matchId: string;
}
declare const CMsgGCToClientMatchSignedOut: MessageFns$3<CMsgGCToClientMatchSignedOut>;
interface CMsgGCGetHeroStatsHistory {
    heroId: number;
}
declare const CMsgGCGetHeroStatsHistory: MessageFns$3<CMsgGCGetHeroStatsHistory>;
interface CMsgGCGetHeroStatsHistoryResponse {
    heroId: number;
    records: CMsgDOTASDOHeroStatsHistory[];
    result: CMsgGCGetHeroStatsHistoryResponse_EResponse;
}
declare const CMsgGCGetHeroStatsHistoryResponse: MessageFns$3<CMsgGCGetHeroStatsHistoryResponse>;
interface CMsgPlayerConductScorecardRequest {
}
declare const CMsgPlayerConductScorecardRequest: MessageFns$3<CMsgPlayerConductScorecardRequest>;
interface CMsgPlayerConductScorecard {
    accountId: number;
    matchId: string;
    seqNum: number;
    reasons: number;
    matchesInReport: number;
    matchesClean: number;
    matchesReported: number;
    matchesAbandoned: number;
    reportsCount: number;
    reportsParties: number;
    commendCount: number;
    date: number;
    rawBehaviorScore: number;
    oldRawBehaviorScore: number;
    commsReports: number;
    commsParties: number;
    behaviorRating: CMsgPlayerConductScorecard_EBehaviorRating;
}
declare const CMsgPlayerConductScorecard: MessageFns$3<CMsgPlayerConductScorecard>;
interface CMsgClientToGCWageringRequest {
    eventId: number;
}
declare const CMsgClientToGCWageringRequest: MessageFns$3<CMsgClientToGCWageringRequest>;
interface CMsgGCToClientWageringResponse {
    coinsRemaining: number;
    totalPointsWon: number;
    totalPointsWagered: number;
    totalPointsTipped: number;
    successRate: number;
    totalGamesWagered: number;
    coinsMax: number;
    rankWagersRemaining: number;
    rankWagersMax: number;
    predictionTokensRemaining: number;
    predictionTokensMax: number;
    bountiesRemaining: number;
    bountiesMax: number;
}
declare const CMsgGCToClientWageringResponse: MessageFns$3<CMsgGCToClientWageringResponse>;
interface CMsgGCToClientWageringUpdate {
    eventId: number;
    wageringInfo: CMsgGCToClientWageringResponse | undefined;
}
declare const CMsgGCToClientWageringUpdate: MessageFns$3<CMsgGCToClientWageringUpdate>;
interface CMsgGCToClientArcanaVotesUpdate {
    eventId: number;
    arcanaVotes: CMsgClientToGCRequestArcanaVotesRemainingResponse | undefined;
}
declare const CMsgGCToClientArcanaVotesUpdate: MessageFns$3<CMsgGCToClientArcanaVotesUpdate>;
interface CMsgClientToGCGetEventGoals {
    eventIds: EEvent[];
}
declare const CMsgClientToGCGetEventGoals: MessageFns$3<CMsgClientToGCGetEventGoals>;
interface CMsgEventGoals {
    eventGoals: CMsgEventGoals_EventGoal[];
}
declare const CMsgEventGoals: MessageFns$3<CMsgEventGoals>;
interface CMsgEventGoals_EventGoal {
    eventId: EEvent;
    goalId: number;
    value: string;
}
declare const CMsgEventGoals_EventGoal: MessageFns$3<CMsgEventGoals_EventGoal>;
interface CMsgGCToGCLeaguePredictions {
    leagueId: number;
}
declare const CMsgGCToGCLeaguePredictions: MessageFns$3<CMsgGCToGCLeaguePredictions>;
interface CMsgPredictionRankings {
    predictions: CMsgPredictionRankings_Prediction[];
}
declare const CMsgPredictionRankings: MessageFns$3<CMsgPredictionRankings>;
interface CMsgPredictionRankings_PredictionLine {
    answerId: number;
    answerName: string;
    answerLogo: string;
    answerValue: number;
}
declare const CMsgPredictionRankings_PredictionLine: MessageFns$3<CMsgPredictionRankings_PredictionLine>;
interface CMsgPredictionRankings_Prediction {
    selectionId: number;
    predictionLines: CMsgPredictionRankings_PredictionLine[];
}
declare const CMsgPredictionRankings_Prediction: MessageFns$3<CMsgPredictionRankings_Prediction>;
interface CMsgPredictionResults {
    results: CMsgPredictionResults_Result[];
}
declare const CMsgPredictionResults: MessageFns$3<CMsgPredictionResults>;
interface CMsgPredictionResults_ResultBreakdown {
    answerSelection: number;
    answerValue: number;
}
declare const CMsgPredictionResults_ResultBreakdown: MessageFns$3<CMsgPredictionResults_ResultBreakdown>;
interface CMsgPredictionResults_Result {
    selectionId: number;
    resultBreakdown: CMsgPredictionResults_ResultBreakdown[];
}
declare const CMsgPredictionResults_Result: MessageFns$3<CMsgPredictionResults_Result>;
interface CMsgClientToGCHasPlayerVotedForMVP {
    matchId: string;
}
declare const CMsgClientToGCHasPlayerVotedForMVP: MessageFns$3<CMsgClientToGCHasPlayerVotedForMVP>;
interface CMsgClientToGCHasPlayerVotedForMVPResponse {
    result: boolean;
}
declare const CMsgClientToGCHasPlayerVotedForMVPResponse: MessageFns$3<CMsgClientToGCHasPlayerVotedForMVPResponse>;
interface CMsgClientToGCVoteForMVP {
    matchId: string;
    accountId: number;
}
declare const CMsgClientToGCVoteForMVP: MessageFns$3<CMsgClientToGCVoteForMVP>;
interface CMsgClientToGCVoteForMVPResponse {
    result: boolean;
}
declare const CMsgClientToGCVoteForMVPResponse: MessageFns$3<CMsgClientToGCVoteForMVPResponse>;
interface CMsgClientToGCMVPVoteTimeout {
    matchId: string;
}
declare const CMsgClientToGCMVPVoteTimeout: MessageFns$3<CMsgClientToGCMVPVoteTimeout>;
interface CMsgClientToGCMVPVoteTimeoutResponse {
    result: boolean;
}
declare const CMsgClientToGCMVPVoteTimeoutResponse: MessageFns$3<CMsgClientToGCMVPVoteTimeoutResponse>;
interface CMsgClientToGCTeammateStatsRequest {
}
declare const CMsgClientToGCTeammateStatsRequest: MessageFns$3<CMsgClientToGCTeammateStatsRequest>;
interface CMsgClientToGCTeammateStatsResponse {
    success: boolean;
    teammateStats: CMsgClientToGCTeammateStatsResponse_TeammateStat[];
}
declare const CMsgClientToGCTeammateStatsResponse: MessageFns$3<CMsgClientToGCTeammateStatsResponse>;
interface CMsgClientToGCTeammateStatsResponse_TeammateStat {
    accountId: number;
    games: number;
    wins: number;
    mostRecentGameTimestamp: number;
    mostRecentGameMatchId: string;
    performance: number;
}
declare const CMsgClientToGCTeammateStatsResponse_TeammateStat: MessageFns$3<CMsgClientToGCTeammateStatsResponse_TeammateStat>;
interface CMsgClientToGCVoteForArcana {
    matches: CMsgArcanaVoteMatchVotes[];
}
declare const CMsgClientToGCVoteForArcana: MessageFns$3<CMsgClientToGCVoteForArcana>;
interface CMsgClientToGCVoteForArcanaResponse {
    result: CMsgClientToGCVoteForArcanaResponse_Result;
}
declare const CMsgClientToGCVoteForArcanaResponse: MessageFns$3<CMsgClientToGCVoteForArcanaResponse>;
interface CMsgClientToGCRequestArcanaVotesRemaining {
}
declare const CMsgClientToGCRequestArcanaVotesRemaining: MessageFns$3<CMsgClientToGCRequestArcanaVotesRemaining>;
interface CMsgClientToGCRequestArcanaVotesRemainingResponse {
    result: boolean;
    votesRemaining: number;
    votesTotal: number;
    matchesPreviouslyVotedFor: CMsgArcanaVoteMatchVotes[];
}
declare const CMsgClientToGCRequestArcanaVotesRemainingResponse: MessageFns$3<CMsgClientToGCRequestArcanaVotesRemainingResponse>;
interface CMsgClientToGCRequestEventPointLogV2 {
    eventId: number;
}
declare const CMsgClientToGCRequestEventPointLogV2: MessageFns$3<CMsgClientToGCRequestEventPointLogV2>;
interface CMsgClientToGCRequestEventPointLogResponseV2 {
    result: boolean;
    eventId: EEvent;
    logEntries: CMsgClientToGCRequestEventPointLogResponseV2_LogEntry[];
}
declare const CMsgClientToGCRequestEventPointLogResponseV2: MessageFns$3<CMsgClientToGCRequestEventPointLogResponseV2>;
interface CMsgClientToGCRequestEventPointLogResponseV2_LogEntry {
    timestamp: number;
    auditAction: number;
    eventPoints: number;
    auditData: string;
}
declare const CMsgClientToGCRequestEventPointLogResponseV2_LogEntry: MessageFns$3<CMsgClientToGCRequestEventPointLogResponseV2_LogEntry>;
interface CMsgClientToGCPublishUserStat {
    userStatsEvent: number;
    referenceData: string;
}
declare const CMsgClientToGCPublishUserStat: MessageFns$3<CMsgClientToGCPublishUserStat>;
interface CMsgClientToGCRequestSlarkGameResult {
    eventId: EEvent;
    slotChosen: number;
    week: number;
}
declare const CMsgClientToGCRequestSlarkGameResult: MessageFns$3<CMsgClientToGCRequestSlarkGameResult>;
interface CMsgClientToGCRequestSlarkGameResultResponse {
    pointsWon: number;
    auraWon: boolean;
}
declare const CMsgClientToGCRequestSlarkGameResultResponse: MessageFns$3<CMsgClientToGCRequestSlarkGameResultResponse>;
interface CMsgGCToClientQuestProgressUpdated {
    questId: number;
    completedChallenges: CMsgGCToClientQuestProgressUpdated_Challenge[];
}
declare const CMsgGCToClientQuestProgressUpdated: MessageFns$3<CMsgGCToClientQuestProgressUpdated>;
interface CMsgGCToClientQuestProgressUpdated_Challenge {
    challengeId: number;
    timeCompleted: number;
    attempts: number;
    heroId: number;
    templateId: number;
    questRank: number;
    maxQuestRank: number;
}
declare const CMsgGCToClientQuestProgressUpdated_Challenge: MessageFns$3<CMsgGCToClientQuestProgressUpdated_Challenge>;
interface CMsgDOTARedeemItem {
    currencyId: string;
    purchaseDef: number;
}
declare const CMsgDOTARedeemItem: MessageFns$3<CMsgDOTARedeemItem>;
interface CMsgDOTARedeemItemResponse {
    response: CMsgDOTARedeemItemResponse_EResultCode;
}
declare const CMsgDOTARedeemItemResponse: MessageFns$3<CMsgDOTARedeemItemResponse>;
interface CMsgClientToGCSelectCompendiumInGamePrediction {
    matchId: string;
    predictions: CMsgClientToGCSelectCompendiumInGamePrediction_Prediction[];
    leagueId: number;
}
declare const CMsgClientToGCSelectCompendiumInGamePrediction: MessageFns$3<CMsgClientToGCSelectCompendiumInGamePrediction>;
interface CMsgClientToGCSelectCompendiumInGamePrediction_Prediction {
    predictionId: number;
    predictionValue: number;
}
declare const CMsgClientToGCSelectCompendiumInGamePrediction_Prediction: MessageFns$3<CMsgClientToGCSelectCompendiumInGamePrediction_Prediction>;
interface CMsgClientToGCSelectCompendiumInGamePredictionResponse {
    result: CMsgClientToGCSelectCompendiumInGamePredictionResponse_EResult;
}
declare const CMsgClientToGCSelectCompendiumInGamePredictionResponse: MessageFns$3<CMsgClientToGCSelectCompendiumInGamePredictionResponse>;
interface CMsgClientToGCOpenPlayerCardPack {
    playerCardPackItemId: string;
    teamId: number;
    deprecatedLeagueId: number;
    region: ELeagueRegion;
}
declare const CMsgClientToGCOpenPlayerCardPack: MessageFns$3<CMsgClientToGCOpenPlayerCardPack>;
interface CMsgClientToGCOpenPlayerCardPackResponse {
    result: CMsgClientToGCOpenPlayerCardPackResponse_Result;
    playerCardItemIds: string[];
}
declare const CMsgClientToGCOpenPlayerCardPackResponse: MessageFns$3<CMsgClientToGCOpenPlayerCardPackResponse>;
interface CMsgClientToGCRecyclePlayerCard {
    playerCardItemIds: string[];
    eventId: number;
}
declare const CMsgClientToGCRecyclePlayerCard: MessageFns$3<CMsgClientToGCRecyclePlayerCard>;
interface CMsgClientToGCRecyclePlayerCardResponse {
    result: CMsgClientToGCRecyclePlayerCardResponse_Result;
    dustAmount: number;
}
declare const CMsgClientToGCRecyclePlayerCardResponse: MessageFns$3<CMsgClientToGCRecyclePlayerCardResponse>;
interface CMsgClientToGCCreatePlayerCardPack {
    cardDustItemId: string;
    eventId: number;
    premiumPack: boolean;
}
declare const CMsgClientToGCCreatePlayerCardPack: MessageFns$3<CMsgClientToGCCreatePlayerCardPack>;
interface CMsgClientToGCCreatePlayerCardPackResponse {
    result: CMsgClientToGCCreatePlayerCardPackResponse_Result;
}
declare const CMsgClientToGCCreatePlayerCardPackResponse: MessageFns$3<CMsgClientToGCCreatePlayerCardPackResponse>;
interface CMsgClientToGCCreateTeamPlayerCardPack {
    cardDustItemId: string;
    eventId: number;
    premiumPack: boolean;
    teamId: number;
}
declare const CMsgClientToGCCreateTeamPlayerCardPack: MessageFns$3<CMsgClientToGCCreateTeamPlayerCardPack>;
interface CMsgClientToGCCreateTeamPlayerCardPackResponse {
    result: CMsgClientToGCCreateTeamPlayerCardPackResponse_Result;
}
declare const CMsgClientToGCCreateTeamPlayerCardPackResponse: MessageFns$3<CMsgClientToGCCreateTeamPlayerCardPackResponse>;
interface CMsgGCToClientBattlePassRollupInternational2016 {
    battlePassLevel: number;
    questlines: CMsgGCToClientBattlePassRollupInternational2016_Questlines[];
    wagering: CMsgGCToClientBattlePassRollupInternational2016_Wagering | undefined;
    achievements: CMsgGCToClientBattlePassRollupInternational2016_Achievements | undefined;
    battleCup: CMsgGCToClientBattlePassRollupInternational2016_BattleCup | undefined;
    predictions: CMsgGCToClientBattlePassRollupInternational2016_Predictions | undefined;
    bracket: CMsgGCToClientBattlePassRollupInternational2016_Bracket | undefined;
    playerCards: CMsgGCToClientBattlePassRollupInternational2016_PlayerCard[];
    fantasyChallenge: CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge | undefined;
}
declare const CMsgGCToClientBattlePassRollupInternational2016: MessageFns$3<CMsgGCToClientBattlePassRollupInternational2016>;
interface CMsgGCToClientBattlePassRollupInternational2016_Questlines {
    name: string;
    onestar: number;
    twostar: number;
    threestar: number;
    total: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_Questlines: MessageFns$3<CMsgGCToClientBattlePassRollupInternational2016_Questlines>;
interface CMsgGCToClientBattlePassRollupInternational2016_Wagering {
    totalWagered: number;
    totalWon: number;
    averageWon: number;
    successRate: number;
    totalTips: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_Wagering: MessageFns$3<CMsgGCToClientBattlePassRollupInternational2016_Wagering>;
interface CMsgGCToClientBattlePassRollupInternational2016_Achievements {
    completed: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_Achievements: MessageFns$3<CMsgGCToClientBattlePassRollupInternational2016_Achievements>;
interface CMsgGCToClientBattlePassRollupInternational2016_BattleCup {
    wins: number;
    score: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_BattleCup: MessageFns$3<CMsgGCToClientBattlePassRollupInternational2016_BattleCup>;
interface CMsgGCToClientBattlePassRollupInternational2016_Predictions {
    correct: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_Predictions: MessageFns$3<CMsgGCToClientBattlePassRollupInternational2016_Predictions>;
interface CMsgGCToClientBattlePassRollupInternational2016_Bracket {
    correct: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_Bracket: MessageFns$3<CMsgGCToClientBattlePassRollupInternational2016_Bracket>;
interface CMsgGCToClientBattlePassRollupInternational2016_PlayerCard {
    accountId: number;
    quality: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_PlayerCard: MessageFns$3<CMsgGCToClientBattlePassRollupInternational2016_PlayerCard>;
interface CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge {
    totalScore: number;
    percentile: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge: MessageFns$3<CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge>;
interface CMsgGCToClientBattlePassRollupFall2016 {
    battlePassLevel: number;
    questlines: CMsgGCToClientBattlePassRollupFall2016_Questlines[];
    wagering: CMsgGCToClientBattlePassRollupFall2016_Wagering | undefined;
    achievements: CMsgGCToClientBattlePassRollupFall2016_Achievements | undefined;
    battleCup: CMsgGCToClientBattlePassRollupFall2016_BattleCup | undefined;
    predictions: CMsgGCToClientBattlePassRollupFall2016_Predictions | undefined;
    bracket: CMsgGCToClientBattlePassRollupFall2016_Bracket | undefined;
    playerCards: CMsgGCToClientBattlePassRollupFall2016_PlayerCard[];
    fantasyChallenge: CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge | undefined;
}
declare const CMsgGCToClientBattlePassRollupFall2016: MessageFns$3<CMsgGCToClientBattlePassRollupFall2016>;
interface CMsgGCToClientBattlePassRollupFall2016_Questlines {
    name: string;
    onestar: number;
    twostar: number;
    threestar: number;
    total: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_Questlines: MessageFns$3<CMsgGCToClientBattlePassRollupFall2016_Questlines>;
interface CMsgGCToClientBattlePassRollupFall2016_Wagering {
    totalWagered: number;
    totalWon: number;
    averageWon: number;
    successRate: number;
    totalTips: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_Wagering: MessageFns$3<CMsgGCToClientBattlePassRollupFall2016_Wagering>;
interface CMsgGCToClientBattlePassRollupFall2016_Achievements {
    completed: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_Achievements: MessageFns$3<CMsgGCToClientBattlePassRollupFall2016_Achievements>;
interface CMsgGCToClientBattlePassRollupFall2016_BattleCup {
    wins: number;
    score: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_BattleCup: MessageFns$3<CMsgGCToClientBattlePassRollupFall2016_BattleCup>;
interface CMsgGCToClientBattlePassRollupFall2016_Predictions {
    correct: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_Predictions: MessageFns$3<CMsgGCToClientBattlePassRollupFall2016_Predictions>;
interface CMsgGCToClientBattlePassRollupFall2016_Bracket {
    correct: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_Bracket: MessageFns$3<CMsgGCToClientBattlePassRollupFall2016_Bracket>;
interface CMsgGCToClientBattlePassRollupFall2016_PlayerCard {
    accountId: number;
    quality: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_PlayerCard: MessageFns$3<CMsgGCToClientBattlePassRollupFall2016_PlayerCard>;
interface CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge {
    totalScore: number;
    percentile: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge: MessageFns$3<CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge>;
interface CMsgGCToClientBattlePassRollupWinter2017 {
    battlePassLevel: number;
    questlines: CMsgGCToClientBattlePassRollupWinter2017_Questlines[];
    wagering: CMsgGCToClientBattlePassRollupWinter2017_Wagering | undefined;
    achievements: CMsgGCToClientBattlePassRollupWinter2017_Achievements | undefined;
    battleCup: CMsgGCToClientBattlePassRollupWinter2017_BattleCup | undefined;
    predictions: CMsgGCToClientBattlePassRollupWinter2017_Predictions | undefined;
    bracket: CMsgGCToClientBattlePassRollupWinter2017_Bracket | undefined;
    playerCards: CMsgGCToClientBattlePassRollupWinter2017_PlayerCard[];
    fantasyChallenge: CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge | undefined;
}
declare const CMsgGCToClientBattlePassRollupWinter2017: MessageFns$3<CMsgGCToClientBattlePassRollupWinter2017>;
interface CMsgGCToClientBattlePassRollupWinter2017_Questlines {
    name: string;
    onestar: number;
    twostar: number;
    threestar: number;
    total: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_Questlines: MessageFns$3<CMsgGCToClientBattlePassRollupWinter2017_Questlines>;
interface CMsgGCToClientBattlePassRollupWinter2017_Wagering {
    totalWagered: number;
    totalWon: number;
    averageWon: number;
    successRate: number;
    totalTips: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_Wagering: MessageFns$3<CMsgGCToClientBattlePassRollupWinter2017_Wagering>;
interface CMsgGCToClientBattlePassRollupWinter2017_Achievements {
    completed: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_Achievements: MessageFns$3<CMsgGCToClientBattlePassRollupWinter2017_Achievements>;
interface CMsgGCToClientBattlePassRollupWinter2017_BattleCup {
    wins: number;
    score: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_BattleCup: MessageFns$3<CMsgGCToClientBattlePassRollupWinter2017_BattleCup>;
interface CMsgGCToClientBattlePassRollupWinter2017_Predictions {
    correct: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_Predictions: MessageFns$3<CMsgGCToClientBattlePassRollupWinter2017_Predictions>;
interface CMsgGCToClientBattlePassRollupWinter2017_Bracket {
    correct: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_Bracket: MessageFns$3<CMsgGCToClientBattlePassRollupWinter2017_Bracket>;
interface CMsgGCToClientBattlePassRollupWinter2017_PlayerCard {
    accountId: number;
    quality: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_PlayerCard: MessageFns$3<CMsgGCToClientBattlePassRollupWinter2017_PlayerCard>;
interface CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge {
    totalScore: number;
    percentile: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge: MessageFns$3<CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge>;
interface CMsgGCToClientBattlePassRollupTI7 {
    battlePassLevel: number;
    questlines: CMsgGCToClientBattlePassRollupTI7_Questlines[];
    wagering: CMsgGCToClientBattlePassRollupTI7_Wagering | undefined;
    achievements: CMsgGCToClientBattlePassRollupTI7_Achievements | undefined;
    battleCup: CMsgGCToClientBattlePassRollupTI7_BattleCup | undefined;
    predictions: CMsgGCToClientBattlePassRollupTI7_Predictions | undefined;
    bracket: CMsgGCToClientBattlePassRollupTI7_Bracket | undefined;
    playerCards: CMsgGCToClientBattlePassRollupTI7_PlayerCard[];
    fantasyChallenge: CMsgGCToClientBattlePassRollupTI7_FantasyChallenge | undefined;
}
declare const CMsgGCToClientBattlePassRollupTI7: MessageFns$3<CMsgGCToClientBattlePassRollupTI7>;
interface CMsgGCToClientBattlePassRollupTI7_Questlines {
    name: string;
    onestar: number;
    twostar: number;
    threestar: number;
    total: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_Questlines: MessageFns$3<CMsgGCToClientBattlePassRollupTI7_Questlines>;
interface CMsgGCToClientBattlePassRollupTI7_Wagering {
    totalWagered: number;
    totalWon: number;
    averageWon: number;
    successRate: number;
    totalTips: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_Wagering: MessageFns$3<CMsgGCToClientBattlePassRollupTI7_Wagering>;
interface CMsgGCToClientBattlePassRollupTI7_Achievements {
    completed: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_Achievements: MessageFns$3<CMsgGCToClientBattlePassRollupTI7_Achievements>;
interface CMsgGCToClientBattlePassRollupTI7_BattleCup {
    wins: number;
    score: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_BattleCup: MessageFns$3<CMsgGCToClientBattlePassRollupTI7_BattleCup>;
interface CMsgGCToClientBattlePassRollupTI7_Predictions {
    correct: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_Predictions: MessageFns$3<CMsgGCToClientBattlePassRollupTI7_Predictions>;
interface CMsgGCToClientBattlePassRollupTI7_Bracket {
    correct: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_Bracket: MessageFns$3<CMsgGCToClientBattlePassRollupTI7_Bracket>;
interface CMsgGCToClientBattlePassRollupTI7_PlayerCard {
    accountId: number;
    quality: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_PlayerCard: MessageFns$3<CMsgGCToClientBattlePassRollupTI7_PlayerCard>;
interface CMsgGCToClientBattlePassRollupTI7_FantasyChallenge {
    totalScore: number;
    percentile: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_FantasyChallenge: MessageFns$3<CMsgGCToClientBattlePassRollupTI7_FantasyChallenge>;
interface CMsgGCToClientBattlePassRollupTI8 {
    battlePassLevel: number;
    cavernCrawl: CMsgGCToClientBattlePassRollupTI8_CavernCrawl | undefined;
    wagering: CMsgGCToClientBattlePassRollupTI8_Wagering | undefined;
    achievements: CMsgGCToClientBattlePassRollupTI8_Achievements | undefined;
    predictions: CMsgGCToClientBattlePassRollupTI8_Predictions | undefined;
    bracket: CMsgGCToClientBattlePassRollupTI8_Bracket | undefined;
    playerCards: CMsgGCToClientBattlePassRollupTI8_PlayerCard[];
    fantasyChallenge: CMsgGCToClientBattlePassRollupTI8_FantasyChallenge | undefined;
}
declare const CMsgGCToClientBattlePassRollupTI8: MessageFns$3<CMsgGCToClientBattlePassRollupTI8>;
interface CMsgGCToClientBattlePassRollupTI8_CavernCrawl {
    roomsCleared: number;
    carryCompleted: boolean;
    supportCompleted: boolean;
    utilityCompleted: boolean;
}
declare const CMsgGCToClientBattlePassRollupTI8_CavernCrawl: MessageFns$3<CMsgGCToClientBattlePassRollupTI8_CavernCrawl>;
interface CMsgGCToClientBattlePassRollupTI8_Wagering {
    totalWagered: number;
    totalWon: number;
    averageWon: number;
    successRate: number;
    totalTips: number;
}
declare const CMsgGCToClientBattlePassRollupTI8_Wagering: MessageFns$3<CMsgGCToClientBattlePassRollupTI8_Wagering>;
interface CMsgGCToClientBattlePassRollupTI8_Achievements {
    completed: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupTI8_Achievements: MessageFns$3<CMsgGCToClientBattlePassRollupTI8_Achievements>;
interface CMsgGCToClientBattlePassRollupTI8_Predictions {
    correct: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupTI8_Predictions: MessageFns$3<CMsgGCToClientBattlePassRollupTI8_Predictions>;
interface CMsgGCToClientBattlePassRollupTI8_Bracket {
    correct: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupTI8_Bracket: MessageFns$3<CMsgGCToClientBattlePassRollupTI8_Bracket>;
interface CMsgGCToClientBattlePassRollupTI8_PlayerCard {
    accountId: number;
    quality: number;
}
declare const CMsgGCToClientBattlePassRollupTI8_PlayerCard: MessageFns$3<CMsgGCToClientBattlePassRollupTI8_PlayerCard>;
interface CMsgGCToClientBattlePassRollupTI8_FantasyChallenge {
    totalScore: number;
    percentile: number;
}
declare const CMsgGCToClientBattlePassRollupTI8_FantasyChallenge: MessageFns$3<CMsgGCToClientBattlePassRollupTI8_FantasyChallenge>;
interface CMsgGCToClientBattlePassRollupTI9 {
    battlePassLevel: number;
}
declare const CMsgGCToClientBattlePassRollupTI9: MessageFns$3<CMsgGCToClientBattlePassRollupTI9>;
interface CMsgGCToClientBattlePassRollupTI10 {
    battlePassLevel: number;
}
declare const CMsgGCToClientBattlePassRollupTI10: MessageFns$3<CMsgGCToClientBattlePassRollupTI10>;
interface CMsgGCToClientBattlePassRollupRequest {
    eventId: number;
    accountId: number;
}
declare const CMsgGCToClientBattlePassRollupRequest: MessageFns$3<CMsgGCToClientBattlePassRollupRequest>;
interface CMsgGCToClientBattlePassRollupResponse {
    eventTi6: CMsgGCToClientBattlePassRollupInternational2016 | undefined;
    eventFall2016: CMsgGCToClientBattlePassRollupFall2016 | undefined;
    eventWinter2017: CMsgGCToClientBattlePassRollupWinter2017 | undefined;
    eventTi7: CMsgGCToClientBattlePassRollupTI7 | undefined;
    eventTi8: CMsgGCToClientBattlePassRollupTI8 | undefined;
    eventTi9: CMsgGCToClientBattlePassRollupTI9 | undefined;
    eventTi10: CMsgGCToClientBattlePassRollupTI10 | undefined;
}
declare const CMsgGCToClientBattlePassRollupResponse: MessageFns$3<CMsgGCToClientBattlePassRollupResponse>;
interface CMsgGCToClientBattlePassRollupListRequest {
    accountId: number;
}
declare const CMsgGCToClientBattlePassRollupListRequest: MessageFns$3<CMsgGCToClientBattlePassRollupListRequest>;
interface CMsgGCToClientBattlePassRollupListResponse {
    eventInfo: CMsgGCToClientBattlePassRollupListResponse_EventInfo[];
}
declare const CMsgGCToClientBattlePassRollupListResponse: MessageFns$3<CMsgGCToClientBattlePassRollupListResponse>;
interface CMsgGCToClientBattlePassRollupListResponse_EventInfo {
    eventId: number;
    level: number;
}
declare const CMsgGCToClientBattlePassRollupListResponse_EventInfo: MessageFns$3<CMsgGCToClientBattlePassRollupListResponse_EventInfo>;
interface CMsgClientToGCTransferSeasonalMMRRequest {
    isParty: boolean;
}
declare const CMsgClientToGCTransferSeasonalMMRRequest: MessageFns$3<CMsgClientToGCTransferSeasonalMMRRequest>;
interface CMsgClientToGCTransferSeasonalMMRResponse {
    success: boolean;
}
declare const CMsgClientToGCTransferSeasonalMMRResponse: MessageFns$3<CMsgClientToGCTransferSeasonalMMRResponse>;
interface CMsgGCToClientPlaytestStatus {
    active: boolean;
}
declare const CMsgGCToClientPlaytestStatus: MessageFns$3<CMsgGCToClientPlaytestStatus>;
interface CMsgClientToGCJoinPlaytest {
    clientVersion: number;
}
declare const CMsgClientToGCJoinPlaytest: MessageFns$3<CMsgClientToGCJoinPlaytest>;
interface CMsgClientToGCJoinPlaytestResponse {
    error: string;
}
declare const CMsgClientToGCJoinPlaytestResponse: MessageFns$3<CMsgClientToGCJoinPlaytestResponse>;
interface CMsgDOTASetFavoriteTeam {
    teamId: number;
    eventId: number;
}
declare const CMsgDOTASetFavoriteTeam: MessageFns$3<CMsgDOTASetFavoriteTeam>;
interface CMsgDOTATriviaCurrentQuestions {
    questions: CMsgDOTATriviaQuestion[];
    triviaEnabled: boolean;
}
declare const CMsgDOTATriviaCurrentQuestions: MessageFns$3<CMsgDOTATriviaCurrentQuestions>;
interface CMsgDOTASubmitTriviaQuestionAnswer {
    questionId: number;
    answerIndex: number;
}
declare const CMsgDOTASubmitTriviaQuestionAnswer: MessageFns$3<CMsgDOTASubmitTriviaQuestionAnswer>;
interface CMsgDOTASubmitTriviaQuestionAnswerResponse {
    result: EDOTATriviaAnswerResult;
}
declare const CMsgDOTASubmitTriviaQuestionAnswerResponse: MessageFns$3<CMsgDOTASubmitTriviaQuestionAnswerResponse>;
interface CMsgDOTAStartTriviaSession {
}
declare const CMsgDOTAStartTriviaSession: MessageFns$3<CMsgDOTAStartTriviaSession>;
interface CMsgDOTAStartTriviaSessionResponse {
    triviaEnabled: boolean;
    currentTimestamp: number;
}
declare const CMsgDOTAStartTriviaSessionResponse: MessageFns$3<CMsgDOTAStartTriviaSessionResponse>;
interface CMsgDOTAAnchorPhoneNumberRequest {
}
declare const CMsgDOTAAnchorPhoneNumberRequest: MessageFns$3<CMsgDOTAAnchorPhoneNumberRequest>;
interface CMsgDOTAAnchorPhoneNumberResponse {
    result: CMsgDOTAAnchorPhoneNumberResponse_Result;
}
declare const CMsgDOTAAnchorPhoneNumberResponse: MessageFns$3<CMsgDOTAAnchorPhoneNumberResponse>;
interface CMsgDOTAUnanchorPhoneNumberRequest {
}
declare const CMsgDOTAUnanchorPhoneNumberRequest: MessageFns$3<CMsgDOTAUnanchorPhoneNumberRequest>;
interface CMsgDOTAUnanchorPhoneNumberResponse {
    result: CMsgDOTAUnanchorPhoneNumberResponse_Result;
}
declare const CMsgDOTAUnanchorPhoneNumberResponse: MessageFns$3<CMsgDOTAUnanchorPhoneNumberResponse>;
interface CMsgGCToClientCommendNotification {
    commenderAccountId: number;
    commenderName: string;
    flags: number;
    commenderHeroId: number;
}
declare const CMsgGCToClientCommendNotification: MessageFns$3<CMsgGCToClientCommendNotification>;
interface CMsgDOTAClientToGCQuickStatsRequest {
    playerAccountId: number;
    heroId: number;
    itemId: number;
    leagueId: number;
}
declare const CMsgDOTAClientToGCQuickStatsRequest: MessageFns$3<CMsgDOTAClientToGCQuickStatsRequest>;
interface CMsgDOTAClientToGCQuickStatsResponse {
    originalRequest: CMsgDOTAClientToGCQuickStatsRequest | undefined;
    heroStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
    itemStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
    itemHeroStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
    itemPlayerStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
    heroPlayerStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
    fullSetStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
}
declare const CMsgDOTAClientToGCQuickStatsResponse: MessageFns$3<CMsgDOTAClientToGCQuickStatsResponse>;
interface CMsgDOTAClientToGCQuickStatsResponse_SimpleStats {
    winPercent: number;
    pickPercent: number;
    winCount: number;
    pickCount: number;
}
declare const CMsgDOTAClientToGCQuickStatsResponse_SimpleStats: MessageFns$3<CMsgDOTAClientToGCQuickStatsResponse_SimpleStats>;
interface CMsgDOTASelectionPriorityChoiceRequest {
    choice: DOTASelectionPriorityChoice;
}
declare const CMsgDOTASelectionPriorityChoiceRequest: MessageFns$3<CMsgDOTASelectionPriorityChoiceRequest>;
interface CMsgDOTASelectionPriorityChoiceResponse {
    result: CMsgDOTASelectionPriorityChoiceResponse_Result;
}
declare const CMsgDOTASelectionPriorityChoiceResponse: MessageFns$3<CMsgDOTASelectionPriorityChoiceResponse>;
interface CMsgDOTAGameAutographReward {
    badgeId: string;
}
declare const CMsgDOTAGameAutographReward: MessageFns$3<CMsgDOTAGameAutographReward>;
interface CMsgDOTAGameAutographRewardResponse {
    result: CMsgDOTAGameAutographRewardResponse_Result;
}
declare const CMsgDOTAGameAutographRewardResponse: MessageFns$3<CMsgDOTAGameAutographRewardResponse>;
interface CMsgDOTADestroyLobbyRequest {
}
declare const CMsgDOTADestroyLobbyRequest: MessageFns$3<CMsgDOTADestroyLobbyRequest>;
interface CMsgDOTADestroyLobbyResponse {
    result: CMsgDOTADestroyLobbyResponse_Result;
}
declare const CMsgDOTADestroyLobbyResponse: MessageFns$3<CMsgDOTADestroyLobbyResponse>;
interface CMsgDOTAGetRecentPlayTimeFriendsRequest {
}
declare const CMsgDOTAGetRecentPlayTimeFriendsRequest: MessageFns$3<CMsgDOTAGetRecentPlayTimeFriendsRequest>;
interface CMsgDOTAGetRecentPlayTimeFriendsResponse {
    accountIds: number[];
}
declare const CMsgDOTAGetRecentPlayTimeFriendsResponse: MessageFns$3<CMsgDOTAGetRecentPlayTimeFriendsResponse>;
interface CMsgPurchaseItemWithEventPoints {
    itemDef: number;
    quantity: number;
    eventId: EEvent;
    usePremiumPoints: boolean;
}
declare const CMsgPurchaseItemWithEventPoints: MessageFns$3<CMsgPurchaseItemWithEventPoints>;
interface CMsgPurchaseItemWithEventPointsResponse {
    result: CMsgPurchaseItemWithEventPointsResponse_Result;
}
declare const CMsgPurchaseItemWithEventPointsResponse: MessageFns$3<CMsgPurchaseItemWithEventPointsResponse>;
interface CMsgPurchaseHeroRandomRelic {
    heroId: number;
    relicRarity: EHeroRelicRarity;
}
declare const CMsgPurchaseHeroRandomRelic: MessageFns$3<CMsgPurchaseHeroRandomRelic>;
interface CMsgPurchaseHeroRandomRelicResponse {
    result: EPurchaseHeroRelicResult;
    killEaterType: number;
}
declare const CMsgPurchaseHeroRandomRelicResponse: MessageFns$3<CMsgPurchaseHeroRandomRelicResponse>;
interface CMsgClientToGCRequestPlusWeeklyChallengeResult {
    eventId: EEvent;
    week: number;
}
declare const CMsgClientToGCRequestPlusWeeklyChallengeResult: MessageFns$3<CMsgClientToGCRequestPlusWeeklyChallengeResult>;
interface CMsgClientToGCRequestPlusWeeklyChallengeResultResponse {
}
declare const CMsgClientToGCRequestPlusWeeklyChallengeResultResponse: MessageFns$3<CMsgClientToGCRequestPlusWeeklyChallengeResultResponse>;
interface CMsgProfileRequest {
    accountId: number;
}
declare const CMsgProfileRequest: MessageFns$3<CMsgProfileRequest>;
interface CMsgProfileResponse {
    backgroundItem: CSOEconItem | undefined;
    featuredHeroes: CMsgProfileResponse_FeaturedHero[];
    recentMatches: CMsgProfileResponse_MatchInfo[];
    successfulHeroes: CMsgSuccessfulHero[];
    recentMatchDetails: CMsgRecentMatchInfo | undefined;
    result: CMsgProfileResponse_EResponse;
    stickerbookPage: CMsgStickerbookPage | undefined;
}
declare const CMsgProfileResponse: MessageFns$3<CMsgProfileResponse>;
interface CMsgProfileResponse_FeaturedHero {
    heroId: number;
    equippedEconItems: CSOEconItem[];
    manuallySet: boolean;
    plusHeroXp: number;
    plusHeroRelicsItem: CSOEconItem | undefined;
}
declare const CMsgProfileResponse_FeaturedHero: MessageFns$3<CMsgProfileResponse_FeaturedHero>;
interface CMsgProfileResponse_MatchInfo {
    matchId: string;
    matchTimestamp: number;
    performanceRating: number;
    heroId: number;
    wonMatch: boolean;
}
declare const CMsgProfileResponse_MatchInfo: MessageFns$3<CMsgProfileResponse_MatchInfo>;
interface CMsgProfileUpdate {
    backgroundItemId: string;
    featuredHeroIds: number[];
}
declare const CMsgProfileUpdate: MessageFns$3<CMsgProfileUpdate>;
interface CMsgProfileUpdateResponse {
    result: CMsgProfileUpdateResponse_Result;
}
declare const CMsgProfileUpdateResponse: MessageFns$3<CMsgProfileUpdateResponse>;
interface CMsgTalentWinRates {
    lastRun: number;
    abilityId: number;
    gameCount: number;
    winCount: number;
}
declare const CMsgTalentWinRates: MessageFns$3<CMsgTalentWinRates>;
interface CMsgGlobalHeroAverages {
    lastRun: number;
    avgGoldPerMin: number;
    avgXpPerMin: number;
    avgKills: number;
    avgDeaths: number;
    avgAssists: number;
    avgLastHits: number;
    avgDenies: number;
    avgNetWorth: number;
}
declare const CMsgGlobalHeroAverages: MessageFns$3<CMsgGlobalHeroAverages>;
interface CMsgHeroGlobalDataRequest {
    heroId: number;
}
declare const CMsgHeroGlobalDataRequest: MessageFns$3<CMsgHeroGlobalDataRequest>;
interface CMsgHeroGlobalDataResponse {
    heroId: number;
    heroDataPerChunk: CMsgHeroGlobalDataResponse_HeroDataPerRankChunk[];
}
declare const CMsgHeroGlobalDataResponse: MessageFns$3<CMsgHeroGlobalDataResponse>;
interface CMsgHeroGlobalDataResponse_GraphData {
    day: number;
    winPercent: number;
    pickPercent: number;
    banPercent: number;
}
declare const CMsgHeroGlobalDataResponse_GraphData: MessageFns$3<CMsgHeroGlobalDataResponse_GraphData>;
interface CMsgHeroGlobalDataResponse_WeekData {
    week: number;
    winPercent: number;
    pickPercent: number;
    banPercent: number;
}
declare const CMsgHeroGlobalDataResponse_WeekData: MessageFns$3<CMsgHeroGlobalDataResponse_WeekData>;
interface CMsgHeroGlobalDataResponse_HeroDataPerRankChunk {
    rankChunk: number;
    talentWinRates: CMsgTalentWinRates[];
    heroAverages: CMsgGlobalHeroAverages | undefined;
    graphData: CMsgHeroGlobalDataResponse_GraphData[];
    weekData: CMsgHeroGlobalDataResponse_WeekData[];
}
declare const CMsgHeroGlobalDataResponse_HeroDataPerRankChunk: MessageFns$3<CMsgHeroGlobalDataResponse_HeroDataPerRankChunk>;
interface CMsgHeroGlobalDataAllHeroes {
    heroes: CMsgHeroGlobalDataResponse[];
}
declare const CMsgHeroGlobalDataAllHeroes: MessageFns$3<CMsgHeroGlobalDataAllHeroes>;
interface CMsgHeroGlobalDataHeroesAlliesAndEnemies {
    rankedHeroData: CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData[];
}
declare const CMsgHeroGlobalDataHeroesAlliesAndEnemies: MessageFns$3<CMsgHeroGlobalDataHeroesAlliesAndEnemies>;
interface CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData {
    heroId: number;
    winRate: number;
    firstOtherHeroId: number;
    allyWinRate: number[];
    enemyWinRate: number[];
}
declare const CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData: MessageFns$3<CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData>;
interface CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData {
    rank: number;
    heroData: CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData[];
}
declare const CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData: MessageFns$3<CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData>;
interface CMsgPrivateMetadataKeyRequest {
    matchId: string;
}
declare const CMsgPrivateMetadataKeyRequest: MessageFns$3<CMsgPrivateMetadataKeyRequest>;
interface CMsgPrivateMetadataKeyResponse {
    privateKey: number;
}
declare const CMsgPrivateMetadataKeyResponse: MessageFns$3<CMsgPrivateMetadataKeyResponse>;
interface CMsgActivatePlusFreeTrialResponse {
    result: CMsgActivatePlusFreeTrialResponse_Result;
}
declare const CMsgActivatePlusFreeTrialResponse: MessageFns$3<CMsgActivatePlusFreeTrialResponse>;
interface CMsgGCToClientCavernCrawlMapPathCompleted {
    eventId: number;
    heroIdCompleted: number;
    completedPaths: CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo[];
    mapVariant: number;
}
declare const CMsgGCToClientCavernCrawlMapPathCompleted: MessageFns$3<CMsgGCToClientCavernCrawlMapPathCompleted>;
interface CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo {
    pathIdCompleted: number;
    receivedUltraRareReward: boolean;
    halfCompleted: boolean;
}
declare const CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo: MessageFns$3<CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo>;
interface CMsgGCToClientCavernCrawlMapUpdated {
    eventId: number;
}
declare const CMsgGCToClientCavernCrawlMapUpdated: MessageFns$3<CMsgGCToClientCavernCrawlMapUpdated>;
interface CMsgClientToGCCavernCrawlClaimRoom {
    eventId: number;
    roomId: number;
    mapVariant: number;
}
declare const CMsgClientToGCCavernCrawlClaimRoom: MessageFns$3<CMsgClientToGCCavernCrawlClaimRoom>;
interface CMsgClientToGCCavernCrawlClaimRoomResponse {
    result: CMsgClientToGCCavernCrawlClaimRoomResponse_Result;
}
declare const CMsgClientToGCCavernCrawlClaimRoomResponse: MessageFns$3<CMsgClientToGCCavernCrawlClaimRoomResponse>;
interface CMsgClientToGCCavernCrawlUseItemOnRoom {
    eventId: number;
    roomId: number;
    itemType: number;
    mapVariant: number;
}
declare const CMsgClientToGCCavernCrawlUseItemOnRoom: MessageFns$3<CMsgClientToGCCavernCrawlUseItemOnRoom>;
interface CMsgClientToGCCavernCrawlUseItemOnRoomResponse {
    result: CMsgClientToGCCavernCrawlUseItemOnRoomResponse_Result;
}
declare const CMsgClientToGCCavernCrawlUseItemOnRoomResponse: MessageFns$3<CMsgClientToGCCavernCrawlUseItemOnRoomResponse>;
interface CMsgClientToGCCavernCrawlUseItemOnPath {
    eventId: number;
    pathId: number;
    itemType: number;
    mapVariant: number;
}
declare const CMsgClientToGCCavernCrawlUseItemOnPath: MessageFns$3<CMsgClientToGCCavernCrawlUseItemOnPath>;
interface CMsgClientToGCCavernCrawlUseItemOnPathResponse {
    result: CMsgClientToGCCavernCrawlUseItemOnPathResponse_Result;
}
declare const CMsgClientToGCCavernCrawlUseItemOnPathResponse: MessageFns$3<CMsgClientToGCCavernCrawlUseItemOnPathResponse>;
interface CMsgClientToGCCavernCrawlRequestMapState {
    eventId: number;
}
declare const CMsgClientToGCCavernCrawlRequestMapState: MessageFns$3<CMsgClientToGCCavernCrawlRequestMapState>;
interface CMsgClientToGCCavernCrawlRequestMapStateResponse {
    result: CMsgClientToGCCavernCrawlRequestMapStateResponse_Result;
    availableMapVariantsMask: number;
    inventoryItem: CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem[];
    mapVariants: CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant[];
}
declare const CMsgClientToGCCavernCrawlRequestMapStateResponse: MessageFns$3<CMsgClientToGCCavernCrawlRequestMapStateResponse>;
interface CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge {
    pathId1: number;
    pathId2: number;
}
declare const CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge: MessageFns$3<CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge>;
interface CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem {
    itemType: number;
    count: number;
}
declare const CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem: MessageFns$3<CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem>;
interface CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap {
    mapRoomId: number;
    revealedRoomId: number;
}
declare const CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap: MessageFns$3<CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap>;
interface CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant {
    mapVariant: number;
    claimedRooms1: string;
    claimedRooms2: string;
    revealedRooms1: string;
    revealedRooms2: string;
    completedPaths1: string;
    completedPaths2: string;
    completedPaths3: string;
    completedPaths4: string;
    halfCompletedPaths1: string;
    halfCompletedPaths2: string;
    halfCompletedPaths3: string;
    halfCompletedPaths4: string;
    swappedChallenge: CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge[];
    ultraRareRewardRoomNumber: number;
    treasureMap: CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap[];
}
declare const CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant: MessageFns$3<CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant>;
interface CMsgClientToGCCavernCrawlGetClaimedRoomCount {
    eventId: number;
}
declare const CMsgClientToGCCavernCrawlGetClaimedRoomCount: MessageFns$3<CMsgClientToGCCavernCrawlGetClaimedRoomCount>;
interface CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse {
    result: CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_Result;
    mapVariants: CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant[];
    availableMapVariantsMask: number;
}
declare const CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse: MessageFns$3<CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse>;
interface CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant {
    mapVariant: number;
    count: number;
}
declare const CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant: MessageFns$3<CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant>;
interface CMsgDOTAMutationList {
    mutations: CMsgDOTAMutationList_Mutation[];
}
declare const CMsgDOTAMutationList: MessageFns$3<CMsgDOTAMutationList>;
interface CMsgDOTAMutationList_Mutation {
    id: number;
    name: string;
    description: string;
}
declare const CMsgDOTAMutationList_Mutation: MessageFns$3<CMsgDOTAMutationList_Mutation>;
interface CMsgEventTipsSummaryRequest {
    eventId: EEvent;
    accountId: number;
}
declare const CMsgEventTipsSummaryRequest: MessageFns$3<CMsgEventTipsSummaryRequest>;
interface CMsgEventTipsSummaryResponse {
    result: boolean;
    tipsReceived: CMsgEventTipsSummaryResponse_Tipper[];
}
declare const CMsgEventTipsSummaryResponse: MessageFns$3<CMsgEventTipsSummaryResponse>;
interface CMsgEventTipsSummaryResponse_Tipper {
    tipperAccountId: number;
    tipCount: number;
}
declare const CMsgEventTipsSummaryResponse_Tipper: MessageFns$3<CMsgEventTipsSummaryResponse_Tipper>;
interface CMsgSocialFeedRequest {
    accountId: number;
    selfOnly: boolean;
}
declare const CMsgSocialFeedRequest: MessageFns$3<CMsgSocialFeedRequest>;
interface CMsgSocialFeedResponse {
    result: CMsgSocialFeedResponse_Result;
    feedEvents: CMsgSocialFeedResponse_FeedEvent[];
}
declare const CMsgSocialFeedResponse: MessageFns$3<CMsgSocialFeedResponse>;
interface CMsgSocialFeedResponse_FeedEvent {
    feedEventId: string;
    accountId: number;
    timestamp: number;
    commentCount: number;
    eventType: number;
    eventSubType: number;
    paramBigInt1: string;
    paramInt1: number;
    paramInt2: number;
    paramInt3: number;
    paramString: string;
}
declare const CMsgSocialFeedResponse_FeedEvent: MessageFns$3<CMsgSocialFeedResponse_FeedEvent>;
interface CMsgSocialFeedCommentsRequest {
    feedEventId: string;
}
declare const CMsgSocialFeedCommentsRequest: MessageFns$3<CMsgSocialFeedCommentsRequest>;
interface CMsgSocialFeedCommentsResponse {
    result: CMsgSocialFeedCommentsResponse_Result;
    feedComments: CMsgSocialFeedCommentsResponse_FeedComment[];
}
declare const CMsgSocialFeedCommentsResponse: MessageFns$3<CMsgSocialFeedCommentsResponse>;
interface CMsgSocialFeedCommentsResponse_FeedComment {
    commenterAccountId: number;
    timestamp: number;
    commentText: string;
}
declare const CMsgSocialFeedCommentsResponse_FeedComment: MessageFns$3<CMsgSocialFeedCommentsResponse_FeedComment>;
interface CMsgClientToGCPlayerCardSpecificPurchaseRequest {
    playerAccountId: number;
    eventId: number;
    cardDustItemId: string;
}
declare const CMsgClientToGCPlayerCardSpecificPurchaseRequest: MessageFns$3<CMsgClientToGCPlayerCardSpecificPurchaseRequest>;
interface CMsgClientToGCPlayerCardSpecificPurchaseResponse {
    result: CMsgClientToGCPlayerCardSpecificPurchaseResponse_Result;
    itemId: string;
}
declare const CMsgClientToGCPlayerCardSpecificPurchaseResponse: MessageFns$3<CMsgClientToGCPlayerCardSpecificPurchaseResponse>;
interface CMsgClientToGCRequestContestVotes {
    contestId: number;
}
declare const CMsgClientToGCRequestContestVotes: MessageFns$3<CMsgClientToGCRequestContestVotes>;
interface CMsgClientToGCRequestContestVotesResponse {
    result: CMsgClientToGCRequestContestVotesResponse_EResponse;
    votes: CMsgClientToGCRequestContestVotesResponse_ItemVote[];
}
declare const CMsgClientToGCRequestContestVotesResponse: MessageFns$3<CMsgClientToGCRequestContestVotesResponse>;
interface CMsgClientToGCRequestContestVotesResponse_ItemVote {
    contestItemId: string;
    vote: number;
}
declare const CMsgClientToGCRequestContestVotesResponse_ItemVote: MessageFns$3<CMsgClientToGCRequestContestVotesResponse_ItemVote>;
interface CMsgClientToGCRecordContestVote {
    contestId: number;
    contestItemId: string;
    vote: number;
}
declare const CMsgClientToGCRecordContestVote: MessageFns$3<CMsgClientToGCRecordContestVote>;
interface CMsgGCToClientRecordContestVoteResponse {
    eresult: CMsgGCToClientRecordContestVoteResponse_EResult;
}
declare const CMsgGCToClientRecordContestVoteResponse: MessageFns$3<CMsgGCToClientRecordContestVoteResponse>;
interface CMsgDevGrantEventPoints {
    eventId: EEvent;
    eventPoints: number;
    premiumPoints: number;
}
declare const CMsgDevGrantEventPoints: MessageFns$3<CMsgDevGrantEventPoints>;
interface CMsgDevGrantEventPointsResponse {
    result: EDevEventRequestResult;
}
declare const CMsgDevGrantEventPointsResponse: MessageFns$3<CMsgDevGrantEventPointsResponse>;
interface CMsgDevGrantEventAction {
    eventId: EEvent;
    actionId: number;
    actionScore: number;
}
declare const CMsgDevGrantEventAction: MessageFns$3<CMsgDevGrantEventAction>;
interface CMsgDevGrantEventActionResponse {
    result: EDevEventRequestResult;
}
declare const CMsgDevGrantEventActionResponse: MessageFns$3<CMsgDevGrantEventActionResponse>;
interface CMsgDevDeleteEventActions {
    eventId: EEvent;
    startActionId: number;
    endActionId: number;
    removeAudit: boolean;
}
declare const CMsgDevDeleteEventActions: MessageFns$3<CMsgDevDeleteEventActions>;
interface CMsgDevDeleteEventActionsResponse {
    result: EDevEventRequestResult;
}
declare const CMsgDevDeleteEventActionsResponse: MessageFns$3<CMsgDevDeleteEventActionsResponse>;
interface CMsgDevResetEventState {
    eventId: EEvent;
    removeAudit: boolean;
}
declare const CMsgDevResetEventState: MessageFns$3<CMsgDevResetEventState>;
interface CMsgDevResetEventStateResponse {
    result: EDevEventRequestResult;
}
declare const CMsgDevResetEventStateResponse: MessageFns$3<CMsgDevResetEventStateResponse>;
interface CMsgConsumeEventSupportGrantItem {
    itemId: string;
}
declare const CMsgConsumeEventSupportGrantItem: MessageFns$3<CMsgConsumeEventSupportGrantItem>;
interface CMsgConsumeEventSupportGrantItemResponse {
    result: ESupportEventRequestResult;
}
declare const CMsgConsumeEventSupportGrantItemResponse: MessageFns$3<CMsgConsumeEventSupportGrantItemResponse>;
interface CMsgClientToGCGetFilteredPlayers {
}
declare const CMsgClientToGCGetFilteredPlayers: MessageFns$3<CMsgClientToGCGetFilteredPlayers>;
interface CMsgGCToClientGetFilteredPlayersResponse {
    result: CMsgGCToClientGetFilteredPlayersResponse_Result;
    filteredPlayers: CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry[];
    baseSlots: number;
    additionalSlots: number;
    nextSlotCost: number;
}
declare const CMsgGCToClientGetFilteredPlayersResponse: MessageFns$3<CMsgGCToClientGetFilteredPlayersResponse>;
interface CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry {
    accountId: number;
    timeAdded: number;
    timeExpires: number;
    note: string;
}
declare const CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry: MessageFns$3<CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry>;
interface CMsgClientToGCRemoveFilteredPlayer {
    accountIdToRemove: number;
}
declare const CMsgClientToGCRemoveFilteredPlayer: MessageFns$3<CMsgClientToGCRemoveFilteredPlayer>;
interface CMsgGCToClientRemoveFilteredPlayerResponse {
    result: CMsgGCToClientRemoveFilteredPlayerResponse_Result;
}
declare const CMsgGCToClientRemoveFilteredPlayerResponse: MessageFns$3<CMsgGCToClientRemoveFilteredPlayerResponse>;
interface CMsgClientToGCPurchaseFilteredPlayerSlot {
    additionalSlotsCurrent: number;
}
declare const CMsgClientToGCPurchaseFilteredPlayerSlot: MessageFns$3<CMsgClientToGCPurchaseFilteredPlayerSlot>;
interface CMsgGCToClientPurchaseFilteredPlayerSlotResponse {
    result: CMsgGCToClientPurchaseFilteredPlayerSlotResponse_Result;
    additionalSlots: number;
    nextSlotCost: number;
}
declare const CMsgGCToClientPurchaseFilteredPlayerSlotResponse: MessageFns$3<CMsgGCToClientPurchaseFilteredPlayerSlotResponse>;
interface CMsgClientToGCUpdateFilteredPlayerNote {
    targetAccountId: number;
    newNote: string;
}
declare const CMsgClientToGCUpdateFilteredPlayerNote: MessageFns$3<CMsgClientToGCUpdateFilteredPlayerNote>;
interface CMsgGCToClientUpdateFilteredPlayerNoteResponse {
    result: CMsgGCToClientUpdateFilteredPlayerNoteResponse_Result;
}
declare const CMsgGCToClientUpdateFilteredPlayerNoteResponse: MessageFns$3<CMsgGCToClientUpdateFilteredPlayerNoteResponse>;
interface CMsgPartySearchPlayer {
    accountId: number;
    matchId: string;
    creationTime: number;
}
declare const CMsgPartySearchPlayer: MessageFns$3<CMsgPartySearchPlayer>;
interface CMsgGCToClientPlayerBeaconState {
    numActiveBeacons: number[];
}
declare const CMsgGCToClientPlayerBeaconState: MessageFns$3<CMsgGCToClientPlayerBeaconState>;
interface CMsgGCToClientPartyBeaconUpdate {
    beaconAdded: boolean;
    beaconType: number;
    accountId: number;
}
declare const CMsgGCToClientPartyBeaconUpdate: MessageFns$3<CMsgGCToClientPartyBeaconUpdate>;
interface CMsgClientToGCUpdatePartyBeacon {
    action: CMsgClientToGCUpdatePartyBeacon_Action;
}
declare const CMsgClientToGCUpdatePartyBeacon: MessageFns$3<CMsgClientToGCUpdatePartyBeacon>;
interface CMsgClientToGCRequestActiveBeaconParties {
}
declare const CMsgClientToGCRequestActiveBeaconParties: MessageFns$3<CMsgClientToGCRequestActiveBeaconParties>;
interface CMsgGCToClientRequestActiveBeaconPartiesResponse {
    response: CMsgGCToClientRequestActiveBeaconPartiesResponse_EResponse;
    activeParties: CPartySearchClientParty[];
}
declare const CMsgGCToClientRequestActiveBeaconPartiesResponse: MessageFns$3<CMsgGCToClientRequestActiveBeaconPartiesResponse>;
interface CMsgClientToGCJoinPartyFromBeacon {
    partyId: string;
    accountId: number;
    beaconType: number;
}
declare const CMsgClientToGCJoinPartyFromBeacon: MessageFns$3<CMsgClientToGCJoinPartyFromBeacon>;
interface CMsgGCToClientJoinPartyFromBeaconResponse {
    response: CMsgGCToClientJoinPartyFromBeaconResponse_EResponse;
}
declare const CMsgGCToClientJoinPartyFromBeaconResponse: MessageFns$3<CMsgGCToClientJoinPartyFromBeaconResponse>;
interface CMsgClientToGCManageFavorites {
    action: CMsgClientToGCManageFavorites_Action;
    accountId: number;
    favoriteName: string;
    inviteResponse: boolean;
    fromFriendlist: boolean;
    lobbyId: string;
}
declare const CMsgClientToGCManageFavorites: MessageFns$3<CMsgClientToGCManageFavorites>;
interface CMsgGCToClientManageFavoritesResponse {
    response: CMsgGCToClientManageFavoritesResponse_EResponse;
    debugMessage: string;
    player: CMsgPartySearchPlayer | undefined;
}
declare const CMsgGCToClientManageFavoritesResponse: MessageFns$3<CMsgGCToClientManageFavoritesResponse>;
interface CMsgClientToGCGetFavoritePlayers {
    paginationKey: string;
    paginationCount: number;
}
declare const CMsgClientToGCGetFavoritePlayers: MessageFns$3<CMsgClientToGCGetFavoritePlayers>;
interface CMsgGCToClientGetFavoritePlayersResponse {
    response: CMsgGCToClientGetFavoritePlayersResponse_EResponse;
    players: CMsgPartySearchPlayer[];
    nextPaginationKey: string;
}
declare const CMsgGCToClientGetFavoritePlayersResponse: MessageFns$3<CMsgGCToClientGetFavoritePlayersResponse>;
interface CMsgGCToClientPartySearchInvite {
    accountId: number;
}
declare const CMsgGCToClientPartySearchInvite: MessageFns$3<CMsgGCToClientPartySearchInvite>;
interface CMsgClientToGCVerifyFavoritePlayers {
    accountIds: number[];
}
declare const CMsgClientToGCVerifyFavoritePlayers: MessageFns$3<CMsgClientToGCVerifyFavoritePlayers>;
interface CMsgGCToClientVerifyFavoritePlayersResponse {
    results: CMsgGCToClientVerifyFavoritePlayersResponse_Result[];
}
declare const CMsgGCToClientVerifyFavoritePlayersResponse: MessageFns$3<CMsgGCToClientVerifyFavoritePlayersResponse>;
interface CMsgGCToClientVerifyFavoritePlayersResponse_Result {
    player: CMsgPartySearchPlayer | undefined;
    isFavorite: boolean;
}
declare const CMsgGCToClientVerifyFavoritePlayersResponse_Result: MessageFns$3<CMsgGCToClientVerifyFavoritePlayersResponse_Result>;
interface CMsgClientToGCRequestPlayerRecentAccomplishments {
    accountId: number;
}
declare const CMsgClientToGCRequestPlayerRecentAccomplishments: MessageFns$3<CMsgClientToGCRequestPlayerRecentAccomplishments>;
interface CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse {
    result: CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse_EResponse;
    playerAccomplishments: CMsgPlayerRecentAccomplishments | undefined;
}
declare const CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse: MessageFns$3<CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse>;
interface CMsgClientToGCRequestPlayerHeroRecentAccomplishments {
    accountId: number;
    heroId: number;
}
declare const CMsgClientToGCRequestPlayerHeroRecentAccomplishments: MessageFns$3<CMsgClientToGCRequestPlayerHeroRecentAccomplishments>;
interface CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse {
    result: CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse_EResponse;
    heroAccomplishments: CMsgPlayerHeroRecentAccomplishments | undefined;
}
declare const CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse: MessageFns$3<CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse>;
interface CMsgClientToGCSubmitPlayerMatchSurvey {
    matchId: string;
    rating: number;
    flags: number;
}
declare const CMsgClientToGCSubmitPlayerMatchSurvey: MessageFns$3<CMsgClientToGCSubmitPlayerMatchSurvey>;
interface CMsgClientToGCSubmitPlayerMatchSurveyResponse {
    eresult: CMsgClientToGCSubmitPlayerMatchSurveyResponse_EResponse;
    accountId: number;
}
declare const CMsgClientToGCSubmitPlayerMatchSurveyResponse: MessageFns$3<CMsgClientToGCSubmitPlayerMatchSurveyResponse>;
interface CMsgGCToClientVACReminder {
}
declare const CMsgGCToClientVACReminder: MessageFns$3<CMsgGCToClientVACReminder>;
interface CMsgClientToGCUnderDraftRequest {
    accountId: number;
    eventId: number;
}
declare const CMsgClientToGCUnderDraftRequest: MessageFns$3<CMsgClientToGCUnderDraftRequest>;
interface CMsgClientToGCUnderDraftResponse {
    result: EUnderDraftResponse;
    accountId: number;
    eventId: number;
    draftData: CMsgUnderDraftData | undefined;
}
declare const CMsgClientToGCUnderDraftResponse: MessageFns$3<CMsgClientToGCUnderDraftResponse>;
interface CMsgClientToGCUnderDraftReroll {
    eventId: number;
}
declare const CMsgClientToGCUnderDraftReroll: MessageFns$3<CMsgClientToGCUnderDraftReroll>;
interface CMsgClientToGCUnderDraftRerollResponse {
    result: EUnderDraftResponse;
    eventId: number;
    draftData: CMsgUnderDraftData | undefined;
}
declare const CMsgClientToGCUnderDraftRerollResponse: MessageFns$3<CMsgClientToGCUnderDraftRerollResponse>;
interface CMsgClientToGCUnderDraftBuy {
    eventId: number;
    slotId: number;
}
declare const CMsgClientToGCUnderDraftBuy: MessageFns$3<CMsgClientToGCUnderDraftBuy>;
interface CMsgGCToClientGuildUnderDraftGoldUpdated {
    eventId: number;
}
declare const CMsgGCToClientGuildUnderDraftGoldUpdated: MessageFns$3<CMsgGCToClientGuildUnderDraftGoldUpdated>;
interface CMsgClientToGCUnderDraftBuyResponse {
    result: EUnderDraftResponse;
    eventId: number;
    slotId: number;
    draftData: CMsgUnderDraftData | undefined;
}
declare const CMsgClientToGCUnderDraftBuyResponse: MessageFns$3<CMsgClientToGCUnderDraftBuyResponse>;
interface CMsgClientToGCUnderDraftRollBackBench {
    eventId: number;
}
declare const CMsgClientToGCUnderDraftRollBackBench: MessageFns$3<CMsgClientToGCUnderDraftRollBackBench>;
interface CMsgClientToGCUnderDraftRollBackBenchResponse {
    result: EUnderDraftResponse;
    eventId: number;
    draftData: CMsgUnderDraftData | undefined;
}
declare const CMsgClientToGCUnderDraftRollBackBenchResponse: MessageFns$3<CMsgClientToGCUnderDraftRollBackBenchResponse>;
interface CMsgClientToGCUnderDraftSell {
    eventId: number;
    slotId: number;
}
declare const CMsgClientToGCUnderDraftSell: MessageFns$3<CMsgClientToGCUnderDraftSell>;
interface CMsgClientToGCUnderDraftSellResponse {
    result: EUnderDraftResponse;
    eventId: number;
    slotId: number;
    draftData: CMsgUnderDraftData | undefined;
}
declare const CMsgClientToGCUnderDraftSellResponse: MessageFns$3<CMsgClientToGCUnderDraftSellResponse>;
interface CMsgClientToGCUnderDraftRedeemReward {
    eventId: number;
    actionId: number;
}
declare const CMsgClientToGCUnderDraftRedeemReward: MessageFns$3<CMsgClientToGCUnderDraftRedeemReward>;
interface CMsgClientToGCUnderDraftRedeemRewardResponse {
    result: EUnderDraftResponse;
}
declare const CMsgClientToGCUnderDraftRedeemRewardResponse: MessageFns$3<CMsgClientToGCUnderDraftRedeemRewardResponse>;
interface CMsgClientToGCSubmitDraftTriviaMatchAnswer {
    choseRadiantAsWinner: boolean;
    eventId: number;
    endTime: number;
}
declare const CMsgClientToGCSubmitDraftTriviaMatchAnswer: MessageFns$3<CMsgClientToGCSubmitDraftTriviaMatchAnswer>;
interface CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse {
    result: EDOTADraftTriviaAnswerResult;
}
declare const CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse: MessageFns$3<CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse>;
interface CMsgDraftTriviaVoteCount {
    totalVotes: number;
    radiantVotes: number;
    direVotes: number;
}
declare const CMsgDraftTriviaVoteCount: MessageFns$3<CMsgDraftTriviaVoteCount>;
interface CMsgClientToGCRequestReporterUpdates {
}
declare const CMsgClientToGCRequestReporterUpdates: MessageFns$3<CMsgClientToGCRequestReporterUpdates>;
interface CMsgClientToGCRequestReporterUpdatesResponse {
    enumResult: CMsgClientToGCRequestReporterUpdatesResponse_EResponse;
    updates: CMsgClientToGCRequestReporterUpdatesResponse_ReporterUpdate[];
    numReported: number;
    numNoActionTaken: number;
}
declare const CMsgClientToGCRequestReporterUpdatesResponse: MessageFns$3<CMsgClientToGCRequestReporterUpdatesResponse>;
interface CMsgClientToGCRequestReporterUpdatesResponse_ReporterUpdate {
    matchId: string;
    heroId: number;
    reportReason: number;
    timestamp: number;
}
declare const CMsgClientToGCRequestReporterUpdatesResponse_ReporterUpdate: MessageFns$3<CMsgClientToGCRequestReporterUpdatesResponse_ReporterUpdate>;
interface CMsgClientToGCAcknowledgeReporterUpdates {
    matchIds: string[];
}
declare const CMsgClientToGCAcknowledgeReporterUpdates: MessageFns$3<CMsgClientToGCAcknowledgeReporterUpdates>;
interface CMsgClientToGCRecalibrateMMR {
}
declare const CMsgClientToGCRecalibrateMMR: MessageFns$3<CMsgClientToGCRecalibrateMMR>;
interface CMsgClientToGCRecalibrateMMRResponse {
    result: CMsgClientToGCRecalibrateMMRResponse_EResponse;
}
declare const CMsgClientToGCRecalibrateMMRResponse: MessageFns$3<CMsgClientToGCRecalibrateMMRResponse>;
interface CMsgDOTAPostGameItemAwardNotification {
    receiverAccountId: number;
    itemDefIndex: number[];
    actionId: number;
}
declare const CMsgDOTAPostGameItemAwardNotification: MessageFns$3<CMsgDOTAPostGameItemAwardNotification>;
interface CMsgClientToGCGetOWMatchDetails {
}
declare const CMsgClientToGCGetOWMatchDetails: MessageFns$3<CMsgClientToGCGetOWMatchDetails>;
interface CMsgClientToGCGetOWMatchDetailsResponse {
    result: CMsgClientToGCGetOWMatchDetailsResponse_EResponse;
    overwatchReplayId: string;
    decryptionKey: string;
    cluster: number;
    overwatchSalt: number;
    targetPlayerSlot: number;
    markers: CMsgClientToGCGetOWMatchDetailsResponse_Marker[];
    reportReason: EOverwatchReportReason;
    targetHeroId: number;
    rankTier: number;
    laneSelectionFlags: number;
}
declare const CMsgClientToGCGetOWMatchDetailsResponse: MessageFns$3<CMsgClientToGCGetOWMatchDetailsResponse>;
interface CMsgClientToGCGetOWMatchDetailsResponse_Marker {
    startGameTimeS: number;
    endGameTimeS: number;
}
declare const CMsgClientToGCGetOWMatchDetailsResponse_Marker: MessageFns$3<CMsgClientToGCGetOWMatchDetailsResponse_Marker>;
interface CMsgClientToGCSubmitOWConviction {
    overwatchReplayId: string;
    targetPlayerSlot: number;
    cheatingConviction: EOverwatchConviction;
    griefingConviction: EOverwatchConviction;
}
declare const CMsgClientToGCSubmitOWConviction: MessageFns$3<CMsgClientToGCSubmitOWConviction>;
interface CMsgClientToGCSubmitOWConvictionResponse {
    result: CMsgClientToGCSubmitOWConvictionResponse_EResponse;
    overwatchReplayId: string;
}
declare const CMsgClientToGCSubmitOWConvictionResponse: MessageFns$3<CMsgClientToGCSubmitOWConvictionResponse>;
interface CMsgClientToGCChinaSSAURLRequest {
}
declare const CMsgClientToGCChinaSSAURLRequest: MessageFns$3<CMsgClientToGCChinaSSAURLRequest>;
interface CMsgClientToGCChinaSSAURLResponse {
    agreementUrl: string;
}
declare const CMsgClientToGCChinaSSAURLResponse: MessageFns$3<CMsgClientToGCChinaSSAURLResponse>;
interface CMsgClientToGCChinaSSAAcceptedRequest {
}
declare const CMsgClientToGCChinaSSAAcceptedRequest: MessageFns$3<CMsgClientToGCChinaSSAAcceptedRequest>;
interface CMsgClientToGCChinaSSAAcceptedResponse {
    agreementAccepted: boolean;
}
declare const CMsgClientToGCChinaSSAAcceptedResponse: MessageFns$3<CMsgClientToGCChinaSSAAcceptedResponse>;
interface CMsgGCToClientOverwatchCasesAvailable {
    expireTime: number;
}
declare const CMsgGCToClientOverwatchCasesAvailable: MessageFns$3<CMsgGCToClientOverwatchCasesAvailable>;
interface CMsgClientToGCStartWatchingOverwatch {
    overwatchReplayId: string;
    targetPlayerSlot: number;
}
declare const CMsgClientToGCStartWatchingOverwatch: MessageFns$3<CMsgClientToGCStartWatchingOverwatch>;
interface CMsgClientToGCStopWatchingOverwatch {
    overwatchReplayId: string;
    targetPlayerSlot: number;
}
declare const CMsgClientToGCStopWatchingOverwatch: MessageFns$3<CMsgClientToGCStopWatchingOverwatch>;
interface CMsgClientToGCOverwatchReplayError {
    overwatchReplayId: string;
}
declare const CMsgClientToGCOverwatchReplayError: MessageFns$3<CMsgClientToGCOverwatchReplayError>;
interface CMsgClientToGCGetDPCFavorites {
}
declare const CMsgClientToGCGetDPCFavorites: MessageFns$3<CMsgClientToGCGetDPCFavorites>;
interface CMsgClientToGCGetDPCFavoritesResponse {
    result: CMsgClientToGCGetDPCFavoritesResponse_EResponse;
    favorites: CMsgClientToGCGetDPCFavoritesResponse_Favorite[];
}
declare const CMsgClientToGCGetDPCFavoritesResponse: MessageFns$3<CMsgClientToGCGetDPCFavoritesResponse>;
interface CMsgClientToGCGetDPCFavoritesResponse_Favorite {
    favoriteType: EDPCFavoriteType;
    favoriteId: number;
}
declare const CMsgClientToGCGetDPCFavoritesResponse_Favorite: MessageFns$3<CMsgClientToGCGetDPCFavoritesResponse_Favorite>;
interface CMsgClientToGCSetDPCFavoriteState {
    favoriteType: EDPCFavoriteType;
    favoriteId: number;
    enabled: boolean;
}
declare const CMsgClientToGCSetDPCFavoriteState: MessageFns$3<CMsgClientToGCSetDPCFavoriteState>;
interface CMsgClientToGCSetDPCFavoriteStateResponse {
    result: CMsgClientToGCSetDPCFavoriteStateResponse_EResponse;
}
declare const CMsgClientToGCSetDPCFavoriteStateResponse: MessageFns$3<CMsgClientToGCSetDPCFavoriteStateResponse>;
interface CMsgClientToGCSetEventActiveSeasonID {
    eventId: number;
    activeSeasonId: number;
}
declare const CMsgClientToGCSetEventActiveSeasonID: MessageFns$3<CMsgClientToGCSetEventActiveSeasonID>;
interface CMsgClientToGCSetEventActiveSeasonIDResponse {
    result: CMsgClientToGCSetEventActiveSeasonIDResponse_EResponse;
}
declare const CMsgClientToGCSetEventActiveSeasonIDResponse: MessageFns$3<CMsgClientToGCSetEventActiveSeasonIDResponse>;
interface CMsgClientToGCPurchaseLabyrinthBlessings {
    eventId: EEvent;
    blessingIds: number[];
    debug: boolean;
    debugRemove: boolean;
}
declare const CMsgClientToGCPurchaseLabyrinthBlessings: MessageFns$3<CMsgClientToGCPurchaseLabyrinthBlessings>;
interface CMsgClientToGCPurchaseLabyrinthBlessingsResponse {
    result: CMsgClientToGCPurchaseLabyrinthBlessingsResponse_EResponse;
}
declare const CMsgClientToGCPurchaseLabyrinthBlessingsResponse: MessageFns$3<CMsgClientToGCPurchaseLabyrinthBlessingsResponse>;
interface CMsgClientToGCGetStickerbookRequest {
    accountId: number;
}
declare const CMsgClientToGCGetStickerbookRequest: MessageFns$3<CMsgClientToGCGetStickerbookRequest>;
interface CMsgClientToGCGetStickerbookResponse {
    response: CMsgClientToGCGetStickerbookResponse_EResponse;
    stickerbook: CMsgStickerbook | undefined;
}
declare const CMsgClientToGCGetStickerbookResponse: MessageFns$3<CMsgClientToGCGetStickerbookResponse>;
interface CMsgClientToGCCreateStickerbookPageRequest {
    teamId: number;
    eventId: EEvent;
    pageType: EStickerbookPageType;
}
declare const CMsgClientToGCCreateStickerbookPageRequest: MessageFns$3<CMsgClientToGCCreateStickerbookPageRequest>;
interface CMsgClientToGCCreateStickerbookPageResponse {
    response: CMsgClientToGCCreateStickerbookPageResponse_EResponse;
    pageNumber: number;
}
declare const CMsgClientToGCCreateStickerbookPageResponse: MessageFns$3<CMsgClientToGCCreateStickerbookPageResponse>;
interface CMsgClientToGCDeleteStickerbookPageRequest {
    pageNum: number;
    stickerCount: number;
    stickerMax: number;
}
declare const CMsgClientToGCDeleteStickerbookPageRequest: MessageFns$3<CMsgClientToGCDeleteStickerbookPageRequest>;
interface CMsgClientToGCDeleteStickerbookPageResponse {
    response: CMsgClientToGCDeleteStickerbookPageResponse_EResponse;
}
declare const CMsgClientToGCDeleteStickerbookPageResponse: MessageFns$3<CMsgClientToGCDeleteStickerbookPageResponse>;
interface CMsgClientToGCPlaceStickersRequest {
    stickerItems: CMsgClientToGCPlaceStickersRequest_StickerItem[];
}
declare const CMsgClientToGCPlaceStickersRequest: MessageFns$3<CMsgClientToGCPlaceStickersRequest>;
interface CMsgClientToGCPlaceStickersRequest_StickerItem {
    pageNum: number;
    sticker: CMsgStickerbookSticker | undefined;
}
declare const CMsgClientToGCPlaceStickersRequest_StickerItem: MessageFns$3<CMsgClientToGCPlaceStickersRequest_StickerItem>;
interface CMsgClientToGCPlaceStickersResponse {
    response: CMsgClientToGCPlaceStickersResponse_EResponse;
}
declare const CMsgClientToGCPlaceStickersResponse: MessageFns$3<CMsgClientToGCPlaceStickersResponse>;
interface CMsgClientToGCPlaceCollectionStickersRequest {
    slots: CMsgClientToGCPlaceCollectionStickersRequest_Slot[];
}
declare const CMsgClientToGCPlaceCollectionStickersRequest: MessageFns$3<CMsgClientToGCPlaceCollectionStickersRequest>;
interface CMsgClientToGCPlaceCollectionStickersRequest_Slot {
    pageNum: number;
    slot: number;
    newItemId: string;
    oldItemDefId: number;
    oldQuality: number;
}
declare const CMsgClientToGCPlaceCollectionStickersRequest_Slot: MessageFns$3<CMsgClientToGCPlaceCollectionStickersRequest_Slot>;
interface CMsgClientToGCPlaceCollectionStickersResponse {
    response: CMsgClientToGCPlaceCollectionStickersResponse_EResponse;
}
declare const CMsgClientToGCPlaceCollectionStickersResponse: MessageFns$3<CMsgClientToGCPlaceCollectionStickersResponse>;
interface CMsgClientToGCOrderStickerbookTeamPageRequest {
    pageOrderSequence: CMsgStickerbookTeamPageOrderSequence | undefined;
}
declare const CMsgClientToGCOrderStickerbookTeamPageRequest: MessageFns$3<CMsgClientToGCOrderStickerbookTeamPageRequest>;
interface CMsgClientToGCOrderStickerbookTeamPageResponse {
    response: CMsgClientToGCOrderStickerbookTeamPageResponse_EResponse;
}
declare const CMsgClientToGCOrderStickerbookTeamPageResponse: MessageFns$3<CMsgClientToGCOrderStickerbookTeamPageResponse>;
interface CMsgClientToGCSetHeroSticker {
    heroId: number;
    newItemId: string;
    oldItemId: string;
}
declare const CMsgClientToGCSetHeroSticker: MessageFns$3<CMsgClientToGCSetHeroSticker>;
interface CMsgClientToGCSetHeroStickerResponse {
    response: CMsgClientToGCSetHeroStickerResponse_EResponse;
}
declare const CMsgClientToGCSetHeroStickerResponse: MessageFns$3<CMsgClientToGCSetHeroStickerResponse>;
interface CMsgClientToGCGetHeroStickers {
}
declare const CMsgClientToGCGetHeroStickers: MessageFns$3<CMsgClientToGCGetHeroStickers>;
interface CMsgClientToGCGetHeroStickersResponse {
    response: CMsgClientToGCGetHeroStickersResponse_EResponse;
    stickerHeroes: CMsgStickerHeroes | undefined;
}
declare const CMsgClientToGCGetHeroStickersResponse: MessageFns$3<CMsgClientToGCGetHeroStickersResponse>;
interface CMsgClientToGCSetFavoritePage {
    pageNum: number;
    clear: boolean;
}
declare const CMsgClientToGCSetFavoritePage: MessageFns$3<CMsgClientToGCSetFavoritePage>;
interface CMsgClientToGCSetFavoritePageResponse {
    response: CMsgClientToGCSetFavoritePageResponse_EResponse;
}
declare const CMsgClientToGCSetFavoritePageResponse: MessageFns$3<CMsgClientToGCSetFavoritePageResponse>;
interface CMsgClientToGCClaimSwag {
    eventId: EEvent;
    actionId: number;
    data: number;
}
declare const CMsgClientToGCClaimSwag: MessageFns$3<CMsgClientToGCClaimSwag>;
interface CMsgClientToGCClaimSwagResponse {
    response: CMsgClientToGCClaimSwagResponse_EResponse;
}
declare const CMsgClientToGCClaimSwagResponse: MessageFns$3<CMsgClientToGCClaimSwagResponse>;
interface CMsgClientToGCCollectorsCacheAvailableDataRequest {
    contestId: number;
}
declare const CMsgClientToGCCollectorsCacheAvailableDataRequest: MessageFns$3<CMsgClientToGCCollectorsCacheAvailableDataRequest>;
interface CMsgGCToClientCollectorsCacheAvailableDataResponse {
    votes: CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote[];
}
declare const CMsgGCToClientCollectorsCacheAvailableDataResponse: MessageFns$3<CMsgGCToClientCollectorsCacheAvailableDataResponse>;
interface CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote {
    itemDef: number;
    voteType: CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote_EVoteType;
}
declare const CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote: MessageFns$3<CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote>;
interface CMsgClientToGCUploadMatchClip {
    matchClip: CMatchClip | undefined;
}
declare const CMsgClientToGCUploadMatchClip: MessageFns$3<CMsgClientToGCUploadMatchClip>;
interface CMsgGCToClientUploadMatchClipResponse {
    response: CMsgGCToClientUploadMatchClipResponse_EResponse;
}
declare const CMsgGCToClientUploadMatchClipResponse: MessageFns$3<CMsgGCToClientUploadMatchClipResponse>;
interface CMsgClientToGCMapStatsRequest {
}
declare const CMsgClientToGCMapStatsRequest: MessageFns$3<CMsgClientToGCMapStatsRequest>;
interface CMsgGCToClientMapStatsResponse {
    response: CMsgGCToClientMapStatsResponse_EResponse;
    personalStats: CMsgMapStatsSnapshot | undefined;
    globalStats: CMsgGlobalMapStats | undefined;
}
declare const CMsgGCToClientMapStatsResponse: MessageFns$3<CMsgGCToClientMapStatsResponse>;
interface CMsgRoadToTIAssignedQuest {
    questId: number;
    difficulty: number;
    progressFlags: number;
    halfCreditFlags: number;
    completed: boolean;
}
declare const CMsgRoadToTIAssignedQuest: MessageFns$3<CMsgRoadToTIAssignedQuest>;
interface CMsgRoadToTIUserData {
    quests: CMsgRoadToTIAssignedQuest[];
}
declare const CMsgRoadToTIUserData: MessageFns$3<CMsgRoadToTIUserData>;
interface CMsgClientToGCRoadToTIGetQuests {
    eventId: number;
}
declare const CMsgClientToGCRoadToTIGetQuests: MessageFns$3<CMsgClientToGCRoadToTIGetQuests>;
interface CMsgClientToGCRoadToTIGetQuestsResponse {
    response: CMsgClientToGCRoadToTIGetQuestsResponse_EResponse;
    questData: CMsgRoadToTIUserData | undefined;
}
declare const CMsgClientToGCRoadToTIGetQuestsResponse: MessageFns$3<CMsgClientToGCRoadToTIGetQuestsResponse>;
interface CMsgClientToGCRoadToTIGetActiveQuest {
    eventId: number;
}
declare const CMsgClientToGCRoadToTIGetActiveQuest: MessageFns$3<CMsgClientToGCRoadToTIGetActiveQuest>;
interface CMsgClientToGCRoadToTIGetActiveQuestResponse {
    response: CMsgClientToGCRoadToTIGetActiveQuestResponse_EResponse;
    questData: CMsgRoadToTIAssignedQuest | undefined;
}
declare const CMsgClientToGCRoadToTIGetActiveQuestResponse: MessageFns$3<CMsgClientToGCRoadToTIGetActiveQuestResponse>;
interface CMsgGCToClientRoadToTIQuestDataUpdated {
    eventId: number;
    questData: CMsgRoadToTIUserData | undefined;
}
declare const CMsgGCToClientRoadToTIQuestDataUpdated: MessageFns$3<CMsgGCToClientRoadToTIQuestDataUpdated>;
interface CMsgClientToGCRoadToTIUseItem {
    eventId: number;
    itemType: number;
    heroIndex: number;
}
declare const CMsgClientToGCRoadToTIUseItem: MessageFns$3<CMsgClientToGCRoadToTIUseItem>;
interface CMsgClientToGCRoadToTIUseItemResponse {
    response: CMsgClientToGCRoadToTIUseItemResponse_EResponse;
}
declare const CMsgClientToGCRoadToTIUseItemResponse: MessageFns$3<CMsgClientToGCRoadToTIUseItemResponse>;
interface CMsgClientToGCRoadToTIDevForceQuest {
    eventId: number;
    forceMatchType: boolean;
    forceId: number;
}
declare const CMsgClientToGCRoadToTIDevForceQuest: MessageFns$3<CMsgClientToGCRoadToTIDevForceQuest>;
interface CMsgLobbyRoadToTIMatchQuestData {
    questData: CMsgRoadToTIAssignedQuest | undefined;
    questPeriod: number;
    questNumber: number;
}
declare const CMsgLobbyRoadToTIMatchQuestData: MessageFns$3<CMsgLobbyRoadToTIMatchQuestData>;
interface CMsgClientToGCNewBloomGift {
    defindex: number;
    lobbyId: string;
    targetAccountIds: number[];
}
declare const CMsgClientToGCNewBloomGift: MessageFns$3<CMsgClientToGCNewBloomGift>;
interface CMsgClientToGCNewBloomGiftResponse {
    result: ENewBloomGiftingResponse;
    receivedAccountIds: number[];
}
declare const CMsgClientToGCNewBloomGiftResponse: MessageFns$3<CMsgClientToGCNewBloomGiftResponse>;
interface CMsgClientToGCSetBannedHeroes {
    bannedHeroIds: number[];
}
declare const CMsgClientToGCSetBannedHeroes: MessageFns$3<CMsgClientToGCSetBannedHeroes>;
interface CMsgClientToGCUpdateComicBookStats {
    comicId: number;
    stats: CMsgClientToGCUpdateComicBookStats_SingleStat[];
    languageStats: CMsgClientToGCUpdateComicBookStats_LanguageStats | undefined;
}
declare const CMsgClientToGCUpdateComicBookStats: MessageFns$3<CMsgClientToGCUpdateComicBookStats>;
interface CMsgClientToGCUpdateComicBookStats_SingleStat {
    statType: CMsgClientToGCUpdateComicBookStatType;
    statValue: number;
}
declare const CMsgClientToGCUpdateComicBookStats_SingleStat: MessageFns$3<CMsgClientToGCUpdateComicBookStats_SingleStat>;
interface CMsgClientToGCUpdateComicBookStats_LanguageStats {
    comicId: number;
    clientLanguage: number;
    clientComicLanguage: number;
}
declare const CMsgClientToGCUpdateComicBookStats_LanguageStats: MessageFns$3<CMsgClientToGCUpdateComicBookStats_LanguageStats>;
interface CMsgGCRankedPlayerInfoSubmit {
    name: string;
}
declare const CMsgGCRankedPlayerInfoSubmit: MessageFns$3<CMsgGCRankedPlayerInfoSubmit>;
interface CMsgGCRankedPlayerInfoSubmitResponse {
    result: CMsgGCRankedPlayerInfoSubmitResponse_EResult;
}
declare const CMsgGCRankedPlayerInfoSubmitResponse: MessageFns$3<CMsgGCRankedPlayerInfoSubmitResponse>;
type Builtin$3 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$3<T> = T extends Builtin$3 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$3<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$3<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$3<T[K]>;
} : Partial<T>;
interface MessageFns$3<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$3<T>): T;
    fromPartial(object: DeepPartial$3<T>): T;
}

declare enum CMsgSpectateFriendGameResponse_EWatchLiveResult {
    SUCCESS = 0,
    ERROR_GENERIC = 1,
    ERROR_NO_PLUS = 2,
    ERROR_NOT_FRIENDS = 3,
    ERROR_LOBBY_NOT_FOUND = 4,
    ERROR_SPECTATOR_IN_A_LOBBY = 5,
    ERROR_LOBBY_IS_LAN = 6,
    ERROR_WRONG_LOBBY_TYPE = 7,
    ERROR_WRONG_LOBBY_STATE = 8,
    ERROR_PLAYER_NOT_PLAYER = 9,
    ERROR_TOO_MANY_SPECTATORS = 10,
    ERROR_SPECTATOR_SWITCHED_TEAMS = 11,
    ERROR_FRIENDS_ON_BOTH_SIDES = 12,
    ERROR_SPECTATOR_IN_THIS_LOBBY = 13,
    ERROR_LOBBY_IS_LEAGUE = 14
}
declare function cMsgSpectateFriendGameResponse_EWatchLiveResultFromJSON(object: any): CMsgSpectateFriendGameResponse_EWatchLiveResult;
declare function cMsgSpectateFriendGameResponse_EWatchLiveResultToJSON(object: CMsgSpectateFriendGameResponse_EWatchLiveResult): string;
declare enum CMsgWatchGameResponse_WatchGameResult {
    PENDING = 0,
    READY = 1,
    GAMESERVERNOTFOUND = 2,
    UNAVAILABLE = 3,
    CANCELLED = 4,
    INCOMPATIBLEVERSION = 5,
    MISSINGLEAGUESUBSCRIPTION = 6,
    LOBBYNOTFOUND = 7
}
declare function cMsgWatchGameResponse_WatchGameResultFromJSON(object: any): CMsgWatchGameResponse_WatchGameResult;
declare function cMsgWatchGameResponse_WatchGameResultToJSON(object: CMsgWatchGameResponse_WatchGameResult): string;
interface CSourceTVGameSmall {
    activateTime: number;
    deactivateTime: number;
    serverSteamId: string;
    lobbyId: string;
    leagueId: number;
    lobbyType: number;
    gameTime: number;
    delay: number;
    spectators: number;
    gameMode: number;
    averageMmr: number;
    matchId: string;
    seriesId: number;
    teamNameRadiant: string;
    teamNameDire: string;
    teamLogoRadiant: string;
    teamLogoDire: string;
    teamIdRadiant: number;
    teamIdDire: number;
    sortScore: number;
    lastUpdateTime: number;
    radiantLead: number;
    radiantScore: number;
    direScore: number;
    players: CSourceTVGameSmall_Player[];
    buildingState: number;
    weekendTourneyTournamentId: number;
    weekendTourneyDivision: number;
    weekendTourneySkillLevel: number;
    weekendTourneyBracketRound: number;
    customGameDifficulty: number;
    isPlayerDraft: boolean;
}
declare const CSourceTVGameSmall: MessageFns$2<CSourceTVGameSmall>;
interface CSourceTVGameSmall_Player {
    accountId: number;
    heroId: number;
    teamSlot: number;
    team: number;
}
declare const CSourceTVGameSmall_Player: MessageFns$2<CSourceTVGameSmall_Player>;
interface CMsgClientToGCFindTopSourceTVGames {
    searchKey: string;
    leagueId: number;
    heroId: number;
    startGame: number;
    gameListIndex: number;
    lobbyIds: string[];
}
declare const CMsgClientToGCFindTopSourceTVGames: MessageFns$2<CMsgClientToGCFindTopSourceTVGames>;
interface CMsgGCToClientFindTopSourceTVGamesResponse {
    searchKey: string;
    leagueId: number;
    heroId: number;
    startGame: number;
    numGames: number;
    gameListIndex: number;
    gameList: CSourceTVGameSmall[];
    specificGames: boolean;
    botGame: CSourceTVGameSmall | undefined;
}
declare const CMsgGCToClientFindTopSourceTVGamesResponse: MessageFns$2<CMsgGCToClientFindTopSourceTVGamesResponse>;
interface CMsgGCToClientTopWeekendTourneyGames {
    liveGames: CSourceTVGameSmall[];
}
declare const CMsgGCToClientTopWeekendTourneyGames: MessageFns$2<CMsgGCToClientTopWeekendTourneyGames>;
interface CMsgClientToGCTopLeagueMatchesRequest {
}
declare const CMsgClientToGCTopLeagueMatchesRequest: MessageFns$2<CMsgClientToGCTopLeagueMatchesRequest>;
interface CMsgClientToGCTopFriendMatchesRequest {
}
declare const CMsgClientToGCTopFriendMatchesRequest: MessageFns$2<CMsgClientToGCTopFriendMatchesRequest>;
interface CMsgClientToGCMatchesMinimalRequest {
    matchIds: string[];
}
declare const CMsgClientToGCMatchesMinimalRequest: MessageFns$2<CMsgClientToGCMatchesMinimalRequest>;
interface CMsgClientToGCMatchesMinimalResponse {
    matches: CMsgDOTAMatchMinimal[];
    lastMatch: boolean;
}
declare const CMsgClientToGCMatchesMinimalResponse: MessageFns$2<CMsgClientToGCMatchesMinimalResponse>;
interface CMsgGCToClientTopLeagueMatchesResponse {
    matches: CMsgDOTAMatchMinimal[];
}
declare const CMsgGCToClientTopLeagueMatchesResponse: MessageFns$2<CMsgGCToClientTopLeagueMatchesResponse>;
interface CMsgGCToClientTopFriendMatchesResponse {
    matches: CMsgDOTAMatchMinimal[];
}
declare const CMsgGCToClientTopFriendMatchesResponse: MessageFns$2<CMsgGCToClientTopFriendMatchesResponse>;
interface CMsgSpectateFriendGame {
    steamId: string;
    live: boolean;
}
declare const CMsgSpectateFriendGame: MessageFns$2<CMsgSpectateFriendGame>;
interface CMsgSpectateFriendGameResponse {
    serverSteamid: string;
    watchLiveResult: CMsgSpectateFriendGameResponse_EWatchLiveResult;
}
declare const CMsgSpectateFriendGameResponse: MessageFns$2<CMsgSpectateFriendGameResponse>;
interface CDOTAReplayDownloadInfo {
    match: CMsgDOTAMatchMinimal | undefined;
    title: string;
    description: string;
    size: number;
    tags: string[];
    existsOnDisk: boolean;
}
declare const CDOTAReplayDownloadInfo: MessageFns$2<CDOTAReplayDownloadInfo>;
interface CDOTAReplayDownloadInfo_Highlight {
    timestamp: number;
    description: string;
}
declare const CDOTAReplayDownloadInfo_Highlight: MessageFns$2<CDOTAReplayDownloadInfo_Highlight>;
interface CMsgWatchGame {
    serverSteamid: string;
    clientVersion: number;
    watchServerSteamid: string;
    lobbyId: string;
    regions: number[];
}
declare const CMsgWatchGame: MessageFns$2<CMsgWatchGame>;
interface CMsgCancelWatchGame {
}
declare const CMsgCancelWatchGame: MessageFns$2<CMsgCancelWatchGame>;
interface CMsgWatchGameResponse {
    watchGameResult: CMsgWatchGameResponse_WatchGameResult;
    sourceTvPublicAddr: number;
    sourceTvPrivateAddr: number;
    sourceTvPort: number;
    gameServerSteamid: string;
    watchServerSteamid: string;
    watchTvUniqueSecretCode: string;
}
declare const CMsgWatchGameResponse: MessageFns$2<CMsgWatchGameResponse>;
interface CMsgPartyLeaderWatchGamePrompt {
    gameServerSteamid: string;
}
declare const CMsgPartyLeaderWatchGamePrompt: MessageFns$2<CMsgPartyLeaderWatchGamePrompt>;
interface CDOTABroadcasterInfo {
    accountId: number;
    serverSteamId: string;
    live: boolean;
    teamNameRadiant: string;
    teamNameDire: string;
    seriesGame: number;
    upcomingBroadcastTimestamp: number;
    allowLiveVideo: boolean;
    nodeType: number;
    nodeName: string;
}
declare const CDOTABroadcasterInfo: MessageFns$2<CDOTABroadcasterInfo>;
interface CMsgDOTASeries {
    seriesId: number;
    seriesType: number;
    team1: CMsgDOTASeries_TeamInfo | undefined;
    team2: CMsgDOTASeries_TeamInfo | undefined;
    matchMinimal: CMsgDOTAMatchMinimal[];
    liveGame: CMsgDOTASeries_LiveGame | undefined;
}
declare const CMsgDOTASeries: MessageFns$2<CMsgDOTASeries>;
interface CMsgDOTASeries_TeamInfo {
    teamId: number;
    teamName: string;
    teamLogoUrl: string;
    wagerCount: number;
}
declare const CMsgDOTASeries_TeamInfo: MessageFns$2<CMsgDOTASeries_TeamInfo>;
interface CMsgDOTASeries_LiveGame {
    serverSteamId: string;
    teamRadiant: CMsgDOTASeries_TeamInfo | undefined;
    teamDire: CMsgDOTASeries_TeamInfo | undefined;
    teamRadiantScore: number;
    teamDireScore: number;
}
declare const CMsgDOTASeries_LiveGame: MessageFns$2<CMsgDOTASeries_LiveGame>;
type Builtin$2 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$2<T> = T extends Builtin$2 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$2<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$2<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$2<T[K]>;
} : Partial<T>;
interface MessageFns$2<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$2<T>): T;
    fromPartial(object: DeepPartial$2<T>): T;
}

declare enum EDOTAGCMsg {
    k_EMsgGCDOTABase = 7000,
    k_EMsgGCGameMatchSignOut = 7004,
    k_EMsgGCGameMatchSignOutResponse = 7005,
    k_EMsgGCJoinChatChannel = 7009,
    k_EMsgGCJoinChatChannelResponse = 7010,
    k_EMsgGCOtherJoinedChannel = 7013,
    k_EMsgGCOtherLeftChannel = 7014,
    k_EMsgServerToGCRequestStatus = 7026,
    k_EMsgGCStartFindingMatch = 7033,
    k_EMsgGCConnectedPlayers = 7034,
    k_EMsgGCAbandonCurrentGame = 7035,
    k_EMsgGCStopFindingMatch = 7036,
    k_EMsgGCPracticeLobbyCreate = 7038,
    k_EMsgGCPracticeLobbyLeave = 7040,
    k_EMsgGCPracticeLobbyLaunch = 7041,
    k_EMsgGCPracticeLobbyList = 7042,
    k_EMsgGCPracticeLobbyListResponse = 7043,
    k_EMsgGCPracticeLobbyJoin = 7044,
    k_EMsgGCPracticeLobbySetDetails = 7046,
    k_EMsgGCPracticeLobbySetTeamSlot = 7047,
    k_EMsgGCInitialQuestionnaireResponse = 7049,
    k_EMsgGCPracticeLobbyResponse = 7055,
    k_EMsgGCBroadcastNotification = 7056,
    k_EMsgGCLiveScoreboardUpdate = 7057,
    k_EMsgGCRequestChatChannelList = 7060,
    k_EMsgGCRequestChatChannelListResponse = 7061,
    k_EMsgGCReadyUp = 7070,
    k_EMsgGCKickedFromMatchmakingQueue = 7071,
    k_EMsgGCLeaverDetected = 7072,
    k_EMsgGCSpectateFriendGame = 7073,
    k_EMsgGCSpectateFriendGameResponse = 7074,
    k_EMsgGCReportsRemainingRequest = 7076,
    k_EMsgGCReportsRemainingResponse = 7077,
    k_EMsgGCSubmitPlayerReport = 7078,
    k_EMsgGCSubmitPlayerReportResponse = 7079,
    k_EMsgGCPracticeLobbyKick = 7081,
    k_EMsgGCSubmitPlayerReportV2 = 7082,
    k_EMsgGCSubmitPlayerReportResponseV2 = 7083,
    k_EMsgGCRequestSaveGames = 7084,
    k_EMsgGCRequestSaveGamesServer = 7085,
    k_EMsgGCRequestSaveGamesResponse = 7086,
    k_EMsgGCLeaverDetectedResponse = 7087,
    k_EMsgGCPlayerFailedToConnect = 7088,
    k_EMsgGCGCToRelayConnect = 7089,
    k_EMsgGCGCToRelayConnectresponse = 7090,
    k_EMsgGCWatchGame = 7091,
    k_EMsgGCWatchGameResponse = 7092,
    k_EMsgGCBanStatusRequest = 7093,
    k_EMsgGCBanStatusResponse = 7094,
    k_EMsgGCMatchDetailsRequest = 7095,
    k_EMsgGCMatchDetailsResponse = 7096,
    k_EMsgGCCancelWatchGame = 7097,
    k_EMsgGCPopup = 7102,
    k_EMsgGCFriendPracticeLobbyListRequest = 7111,
    k_EMsgGCFriendPracticeLobbyListResponse = 7112,
    k_EMsgGCPracticeLobbyJoinResponse = 7113,
    k_EMsgGCCreateTeam = 7115,
    k_EMsgGCCreateTeamResponse = 7116,
    k_EMsgGCTeamInvite_InviterToGC = 7122,
    k_EMsgGCTeamInvite_GCImmediateResponseToInviter = 7123,
    k_EMsgGCTeamInvite_GCRequestToInvitee = 7124,
    k_EMsgGCTeamInvite_InviteeResponseToGC = 7125,
    k_EMsgGCTeamInvite_GCResponseToInviter = 7126,
    k_EMsgGCTeamInvite_GCResponseToInvitee = 7127,
    k_EMsgGCKickTeamMember = 7128,
    k_EMsgGCKickTeamMemberResponse = 7129,
    k_EMsgGCLeaveTeam = 7130,
    k_EMsgGCLeaveTeamResponse = 7131,
    k_EMsgGCApplyTeamToPracticeLobby = 7142,
    k_EMsgGCTransferTeamAdmin = 7144,
    k_EMsgGCPracticeLobbyJoinBroadcastChannel = 7149,
    k_EMsgGC_TournamentItemEvent = 7150,
    k_EMsgGC_TournamentItemEventResponse = 7151,
    k_EMsgTeamFanfare = 7156,
    k_EMsgResponseTeamFanfare = 7157,
    k_EMsgGCEditTeamDetails = 7166,
    k_EMsgGCEditTeamDetailsResponse = 7167,
    k_EMsgGCReadyUpStatus = 7170,
    k_EMsgGCToGCMatchCompleted = 7186,
    k_EMsgGCBalancedShuffleLobby = 7188,
    k_EMsgGCMatchmakingStatsRequest = 7197,
    k_EMsgGCMatchmakingStatsResponse = 7198,
    k_EMsgGCBotGameCreate = 7199,
    k_EMsgGCSetMatchHistoryAccess = 7200,
    k_EMsgGCSetMatchHistoryAccessResponse = 7201,
    k_EMsgUpgradeLeagueItem = 7203,
    k_EMsgUpgradeLeagueItemResponse = 7204,
    k_EMsgGCWatchDownloadedReplay = 7206,
    k_EMsgClientsRejoinChatChannels = 7217,
    k_EMsgGCToGCGetUserChatInfo = 7218,
    k_EMsgGCToGCGetUserChatInfoResponse = 7219,
    k_EMsgGCToGCLeaveAllChatChannels = 7220,
    k_EMsgGCToGCUpdateAccountChatBan = 7221,
    k_EMsgGCToGCCanInviteUserToTeam = 7234,
    k_EMsgGCToGCCanInviteUserToTeamResponse = 7235,
    k_EMsgGCToGCGetUserRank = 7236,
    k_EMsgGCToGCGetUserRankResponse = 7237,
    k_EMsgGCToGCAdjustUserRank = 7238,
    k_EMsgGCToGCAdjustUserRankResponse = 7239,
    k_EMsgGCToGCUpdateTeamStats = 7240,
    k_EMsgGCToGCValidateTeam = 7241,
    k_EMsgGCToGCValidateTeamResponse = 7242,
    k_EMsgGCToGCGetLeagueAdmin = 7255,
    k_EMsgGCToGCGetLeagueAdminResponse = 7256,
    k_EMsgGCLeaveChatChannel = 7272,
    k_EMsgGCChatMessage = 7273,
    k_EMsgGCGetHeroStandings = 7274,
    k_EMsgGCGetHeroStandingsResponse = 7275,
    k_EMsgGCItemEditorReservationsRequest = 7283,
    k_EMsgGCItemEditorReservationsResponse = 7284,
    k_EMsgGCItemEditorReserveItemDef = 7285,
    k_EMsgGCItemEditorReserveItemDefResponse = 7286,
    k_EMsgGCItemEditorReleaseReservation = 7287,
    k_EMsgGCItemEditorReleaseReservationResponse = 7288,
    k_EMsgGCFantasyLivePlayerStats = 7308,
    k_EMsgGCFantasyFinalPlayerStats = 7309,
    k_EMsgGCFlipLobbyTeams = 7320,
    k_EMsgGCToGCEvaluateReportedPlayer = 7322,
    k_EMsgGCToGCEvaluateReportedPlayerResponse = 7323,
    k_EMsgGCToGCProcessPlayerReportForTarget = 7324,
    k_EMsgGCToGCProcessReportSuccess = 7325,
    k_EMsgGCNotifyAccountFlagsChange = 7326,
    k_EMsgGCSetProfilePrivacy = 7327,
    k_EMsgGCSetProfilePrivacyResponse = 7328,
    k_EMsgGCClientSuspended = 7342,
    k_EMsgGCPartyMemberSetCoach = 7343,
    k_EMsgGCPracticeLobbySetCoach = 7346,
    k_EMsgGCChatModeratorBan = 7359,
    k_EMsgGCLobbyUpdateBroadcastChannelInfo = 7367,
    k_EMsgGCToGCGrantTournamentItem = 7372,
    k_EMsgGCToGCUpgradeTwitchViewerItems = 7375,
    k_EMsgGCToGCGetLiveMatchAffiliates = 7376,
    k_EMsgGCToGCGetLiveMatchAffiliatesResponse = 7377,
    k_EMsgGCToGCUpdatePlayerPennantCounts = 7378,
    k_EMsgGCToGCGetPlayerPennantCounts = 7379,
    k_EMsgGCToGCGetPlayerPennantCountsResponse = 7380,
    k_EMsgGCGameMatchSignOutPermissionRequest = 7381,
    k_EMsgGCGameMatchSignOutPermissionResponse = 7382,
    k_EMsgDOTAAwardEventPoints = 7384,
    k_EMsgDOTAGetEventPoints = 7387,
    k_EMsgDOTAGetEventPointsResponse = 7388,
    k_EMsgGCPartyLeaderWatchGamePrompt = 7397,
    k_EMsgGCCompendiumSetSelection = 7405,
    k_EMsgGCCompendiumDataRequest = 7406,
    k_EMsgGCCompendiumDataResponse = 7407,
    k_EMsgDOTAGetPlayerMatchHistory = 7408,
    k_EMsgDOTAGetPlayerMatchHistoryResponse = 7409,
    k_EMsgGCToGCMatchmakingAddParty = 7410,
    k_EMsgGCToGCMatchmakingRemoveParty = 7411,
    k_EMsgGCToGCMatchmakingRemoveAllParties = 7412,
    k_EMsgGCToGCMatchmakingMatchFound = 7413,
    k_EMsgGCToGCUpdateMatchManagementStats = 7414,
    k_EMsgGCToGCUpdateMatchmakingStats = 7415,
    k_EMsgGCToServerPingRequest = 7416,
    k_EMsgGCToServerPingResponse = 7417,
    k_EMsgGCToServerEvaluateToxicChat = 7418,
    k_EMsgServerToGCEvaluateToxicChat = 7419,
    k_EMsgServerToGCEvaluateToxicChatResponse = 7420,
    k_EMsgGCToGCProcessMatchLeaver = 7426,
    k_EMsgGCNotificationsRequest = 7427,
    k_EMsgGCNotificationsResponse = 7428,
    k_EMsgGCToGCModifyNotification = 7429,
    k_EMsgGCLeagueAdminList = 7434,
    k_EMsgGCNotificationsMarkReadRequest = 7435,
    k_EMsgServerToGCRequestBatchPlayerResources = 7450,
    k_EMsgServerToGCRequestBatchPlayerResourcesResponse = 7451,
    k_EMsgGCCompendiumSetSelectionResponse = 7453,
    k_EMsgGCRankedPlayerInfoSubmit = 7454,
    k_EMsgGCRankedPlayerInfoSubmitResponse = 7455,
    k_EMsgGCPlayerInfoSubmit = 7456,
    k_EMsgGCPlayerInfoSubmitResponse = 7457,
    k_EMsgGCToGCGetAccountLevel = 7458,
    k_EMsgGCToGCGetAccountLevelResponse = 7459,
    k_EMsgDOTAGetWeekendTourneySchedule = 7464,
    k_EMsgDOTAWeekendTourneySchedule = 7465,
    k_EMsgGCJoinableCustomGameModesRequest = 7466,
    k_EMsgGCJoinableCustomGameModesResponse = 7467,
    k_EMsgGCJoinableCustomLobbiesRequest = 7468,
    k_EMsgGCJoinableCustomLobbiesResponse = 7469,
    k_EMsgGCQuickJoinCustomLobby = 7470,
    k_EMsgGCQuickJoinCustomLobbyResponse = 7471,
    k_EMsgGCToGCGrantEventPointAction = 7472,
    k_EMsgGCToGCSetCompendiumSelection = 7478,
    k_EMsgGCHasItemQuery = 7484,
    k_EMsgGCHasItemResponse = 7485,
    k_EMsgGCToGCGrantEventPointActionMsg = 7488,
    k_EMsgGCToGCGetCompendiumSelections = 7492,
    k_EMsgGCToGCGetCompendiumSelectionsResponse = 7493,
    k_EMsgServerToGCMatchConnectionStats = 7494,
    k_EMsgGCToClientTournamentItemDrop = 7495,
    k_EMsgSQLDelayedGrantLeagueDrop = 7496,
    k_EMsgServerGCUpdateSpectatorCount = 7497,
    k_EMsgGCToGCEmoticonUnlock = 7501,
    k_EMsgSignOutDraftInfo = 7502,
    k_EMsgClientToGCEmoticonDataRequest = 7503,
    k_EMsgGCToClientEmoticonData = 7504,
    k_EMsgGCPracticeLobbyToggleBroadcastChannelCameramanStatus = 7505,
    k_EMsgDOTARedeemItem = 7518,
    k_EMsgDOTARedeemItemResponse = 7519,
    k_EMsgClientToGCGetAllHeroProgress = 7521,
    k_EMsgClientToGCGetAllHeroProgressResponse = 7522,
    k_EMsgGCToGCGetServerForClient = 7523,
    k_EMsgGCToGCGetServerForClientResponse = 7524,
    k_EMsgSQLProcessTournamentGameOutcome = 7525,
    k_EMsgSQLGrantTrophyToAccount = 7526,
    k_EMsgClientToGCGetTrophyList = 7527,
    k_EMsgClientToGCGetTrophyListResponse = 7528,
    k_EMsgGCToClientTrophyAwarded = 7529,
    k_EMsgGCGameBotMatchSignOut = 7530,
    k_EMsgGCGameBotMatchSignOutPermissionRequest = 7531,
    k_EMsgSignOutBotInfo = 7532,
    k_EMsgGCToGCUpdateProfileCards = 7533,
    k_EMsgClientToGCGetProfileCard = 7534,
    k_EMsgClientToGCGetProfileCardResponse = 7535,
    k_EMsgClientToGCGetBattleReport = 7536,
    k_EMsgClientToGCGetBattleReportResponse = 7537,
    k_EMsgClientToGCSetProfileCardSlots = 7538,
    k_EMsgGCToClientProfileCardUpdated = 7539,
    k_EMsgServerToGCVictoryPredictions = 7540,
    k_EMsgClientToGCGetBattleReportAggregateStats = 7541,
    k_EMsgClientToGCGetBattleReportAggregateStatsResponse = 7542,
    k_EMsgClientToGCGetBattleReportInfo = 7543,
    k_EMsgClientToGCGetBattleReportInfoResponse = 7544,
    k_EMsgSignOutCommunicationSummary = 7545,
    k_EMsgServerToGCRequestStatus_Response = 7546,
    k_EMsgClientToGCCreateHeroStatue = 7547,
    k_EMsgGCToClientHeroStatueCreateResult = 7548,
    k_EMsgGCGCToLANServerRelayConnect = 7549,
    k_EMsgClientToGCAcknowledgeBattleReport = 7550,
    k_EMsgClientToGCAcknowledgeBattleReportResponse = 7551,
    k_EMsgClientToGCGetBattleReportMatchHistory = 7552,
    k_EMsgClientToGCGetBattleReportMatchHistoryResponse = 7553,
    k_EMsgServerToGCReportKillSummaries = 7554,
    k_EMsgGCToGCUpdatePlayerPredictions = 7561,
    k_EMsgGCToServerPredictionResult = 7562,
    k_EMsgGCToGCReplayMonitorValidateReplay = 7569,
    k_EMsgLobbyEventPoints = 7572,
    k_EMsgGCToGCGetCustomGameTickets = 7573,
    k_EMsgGCToGCGetCustomGameTicketsResponse = 7574,
    k_EMsgGCToGCCustomGamePlayed = 7576,
    k_EMsgGCToGCGrantEventPointsToUser = 7577,
    k_EMsgGameserverCrashReport = 7579,
    k_EMsgGameserverCrashReportResponse = 7580,
    k_EMsgGCToClientSteamDatagramTicket = 7581,
    k_EMsgGCToGCSendAccountsEventPoints = 7583,
    k_EMsgClientToGCRerollPlayerChallenge = 7584,
    k_EMsgServerToGCRerollPlayerChallenge = 7585,
    k_EMsgGCRerollPlayerChallengeResponse = 7586,
    k_EMsgSignOutUpdatePlayerChallenge = 7587,
    k_EMsgClientToGCSetPartyLeader = 7588,
    k_EMsgClientToGCCancelPartyInvites = 7589,
    k_EMsgSQLGrantLeagueMatchToTicketHolders = 7592,
    k_EMsgGCToGCEmoticonUnlockNoRollback = 7594,
    k_EMsgClientToGCApplyGemCombiner = 7603,
    k_EMsgClientToGCGetAllHeroOrder = 7606,
    k_EMsgClientToGCGetAllHeroOrderResponse = 7607,
    k_EMsgSQLGCToGCGrantBadgePoints = 7608,
    k_EMsgGCToGCCheckOwnsEntireEmoticonRange = 7611,
    k_EMsgGCToGCCheckOwnsEntireEmoticonRangeResponse = 7612,
    k_EMsgGCToClientRequestLaneSelection = 7623,
    k_EMsgGCToClientRequestLaneSelectionResponse = 7624,
    k_EMsgServerToGCCavernCrawlIsHeroActive = 7625,
    k_EMsgServerToGCCavernCrawlIsHeroActiveResponse = 7626,
    k_EMsgClientToGCPlayerCardSpecificPurchaseRequest = 7627,
    k_EMsgClientToGCPlayerCardSpecificPurchaseResponse = 7628,
    k_EMsgSQLSetIsLeagueAdmin = 7630,
    k_EMsgGCToGCGetLiveLeagueMatches = 7631,
    k_EMsgGCToGCGetLiveLeagueMatchesResponse = 7632,
    k_EMsgDOTALeagueInfoListAdminsRequest = 7633,
    k_EMsgDOTALeagueInfoListAdminsReponse = 7634,
    k_EMsgGCToGCLeagueMatchStarted = 7645,
    k_EMsgGCToGCLeagueMatchCompleted = 7646,
    k_EMsgGCToGCLeagueMatchStartedResponse = 7647,
    k_EMsgDOTALeagueAvailableLobbyNodesRequest = 7650,
    k_EMsgDOTALeagueAvailableLobbyNodes = 7651,
    k_EMsgGCToGCLeagueRequest = 7652,
    k_EMsgGCToGCLeagueResponse = 7653,
    k_EMsgGCToGCLeagueNodeGroupRequest = 7654,
    k_EMsgGCToGCLeagueNodeGroupResponse = 7655,
    k_EMsgGCToGCLeagueNodeRequest = 7656,
    k_EMsgGCToGCLeagueNodeResponse = 7657,
    k_EMsgGCToGCRealtimeStatsTerseRequest = 7658,
    k_EMsgGCToGCRealtimeStatsTerseResponse = 7659,
    k_EMsgGCToGCGetTopMatchesRequest = 7660,
    k_EMsgGCToGCGetTopMatchesResponse = 7661,
    k_EMsgClientToGCGetFilteredPlayers = 7662,
    k_EMsgGCToClientGetFilteredPlayersResponse = 7663,
    k_EMsgClientToGCRemoveFilteredPlayer = 7664,
    k_EMsgGCToClientRemoveFilteredPlayerResponse = 7665,
    k_EMsgGCToClientPlayerBeaconState = 7666,
    k_EMsgGCToClientPartyBeaconUpdate = 7667,
    k_EMsgGCToClientPartySearchInvite = 7668,
    k_EMsgClientToGCUpdatePartyBeacon = 7669,
    k_EMsgClientToGCRequestActiveBeaconParties = 7670,
    k_EMsgGCToClientRequestActiveBeaconPartiesResponse = 7671,
    k_EMsgClientToGCManageFavorites = 7672,
    k_EMsgGCToClientManageFavoritesResponse = 7673,
    k_EMsgClientToGCJoinPartyFromBeacon = 7674,
    k_EMsgGCToClientJoinPartyFromBeaconResponse = 7675,
    k_EMsgClientToGCGetFavoritePlayers = 7676,
    k_EMsgGCToClientGetFavoritePlayersResponse = 7677,
    k_EMsgClientToGCVerifyFavoritePlayers = 7678,
    k_EMsgGCToClientVerifyFavoritePlayersResponse = 7679,
    k_EMsgGCToClientPartySearchInvites = 7680,
    k_EMsgGCToClientRequestMMInfo = 7681,
    k_EMsgClientToGCMMInfo = 7682,
    k_EMsgSignOutTextMuteInfo = 7683,
    k_EMsgClientToGCPurchaseLabyrinthBlessings = 7684,
    k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse = 7685,
    k_EMsgClientToGCPurchaseFilteredPlayerSlot = 7686,
    k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse = 7687,
    k_EMsgClientToGCUpdateFilteredPlayerNote = 7688,
    k_EMsgGCToClientUpdateFilteredPlayerNoteResponse = 7689,
    k_EMsgClientToGCClaimSwag = 7690,
    k_EMsgGCToClientClaimSwagResponse = 7691,
    k_EMsgServerToGCLockCharmTrading = 8004,
    k_EMsgClientToGCPlayerStatsRequest = 8006,
    k_EMsgGCToClientPlayerStatsResponse = 8007,
    k_EMsgGCClearPracticeLobbyTeam = 8008,
    k_EMsgClientToGCFindTopSourceTVGames = 8009,
    k_EMsgGCToClientFindTopSourceTVGamesResponse = 8010,
    k_EMsgGCLobbyList = 8011,
    k_EMsgGCLobbyListResponse = 8012,
    k_EMsgGCPlayerStatsMatchSignOut = 8013,
    k_EMsgClientToGCSocialFeedPostCommentRequest = 8016,
    k_EMsgGCToClientSocialFeedPostCommentResponse = 8017,
    k_EMsgClientToGCCustomGamesFriendsPlayedRequest = 8018,
    k_EMsgGCToClientCustomGamesFriendsPlayedResponse = 8019,
    k_EMsgClientToGCFriendsPlayedCustomGameRequest = 8020,
    k_EMsgGCToClientFriendsPlayedCustomGameResponse = 8021,
    k_EMsgGCTopCustomGamesList = 8024,
    k_EMsgClientToGCSetPartyOpen = 8029,
    k_EMsgClientToGCMergePartyInvite = 8030,
    k_EMsgGCToClientMergeGroupInviteReply = 8031,
    k_EMsgClientToGCMergePartyResponse = 8032,
    k_EMsgGCToClientMergePartyResponseReply = 8033,
    k_EMsgClientToGCGetProfileCardStats = 8034,
    k_EMsgClientToGCGetProfileCardStatsResponse = 8035,
    k_EMsgClientToGCTopLeagueMatchesRequest = 8036,
    k_EMsgClientToGCTopFriendMatchesRequest = 8037,
    k_EMsgGCToClientProfileCardStatsUpdated = 8040,
    k_EMsgServerToGCRealtimeStats = 8041,
    k_EMsgGCToServerRealtimeStatsStartStop = 8042,
    k_EMsgGCToGCGetServersForClients = 8045,
    k_EMsgGCToGCGetServersForClientsResponse = 8046,
    k_EMsgGCPracticeLobbyKickFromTeam = 8047,
    k_EMsgDOTAChatGetMemberCount = 8048,
    k_EMsgDOTAChatGetMemberCountResponse = 8049,
    k_EMsgClientToGCSocialFeedPostMessageRequest = 8050,
    k_EMsgGCToClientSocialFeedPostMessageResponse = 8051,
    k_EMsgCustomGameListenServerStartedLoading = 8052,
    k_EMsgCustomGameClientFinishedLoading = 8053,
    k_EMsgGCPracticeLobbyCloseBroadcastChannel = 8054,
    k_EMsgGCStartFindingMatchResponse = 8055,
    k_EMsgSQLGCToGCGrantAccountFlag = 8057,
    k_EMsgGCToClientTopLeagueMatchesResponse = 8061,
    k_EMsgGCToClientTopFriendMatchesResponse = 8062,
    k_EMsgClientToGCMatchesMinimalRequest = 8063,
    k_EMsgClientToGCMatchesMinimalResponse = 8064,
    k_EMsgGCToClientChatRegionsEnabled = 8067,
    k_EMsgClientToGCPingData = 8068,
    k_EMsgGCToGCEnsureAccountInParty = 8071,
    k_EMsgGCToGCEnsureAccountInPartyResponse = 8072,
    k_EMsgClientToGCGetProfileTickets = 8073,
    k_EMsgClientToGCGetProfileTicketsResponse = 8074,
    k_EMsgGCToClientMatchGroupsVersion = 8075,
    k_EMsgClientToGCH264Unsupported = 8076,
    k_EMsgClientToGCGetQuestProgress = 8078,
    k_EMsgClientToGCGetQuestProgressResponse = 8079,
    k_EMsgSignOutXPCoins = 8080,
    k_EMsgGCToClientMatchSignedOut = 8081,
    k_EMsgGCGetHeroStatsHistory = 8082,
    k_EMsgGCGetHeroStatsHistoryResponse = 8083,
    k_EMsgClientToGCPrivateChatInvite = 8084,
    k_EMsgClientToGCPrivateChatKick = 8088,
    k_EMsgClientToGCPrivateChatPromote = 8089,
    k_EMsgClientToGCPrivateChatDemote = 8090,
    k_EMsgGCToClientPrivateChatResponse = 8091,
    k_EMsgClientToGCLatestConductScorecardRequest = 8095,
    k_EMsgClientToGCLatestConductScorecard = 8096,
    k_EMsgClientToGCWageringRequest = 8099,
    k_EMsgGCToClientWageringResponse = 8100,
    k_EMsgClientToGCEventGoalsRequest = 8103,
    k_EMsgClientToGCEventGoalsResponse = 8104,
    k_EMsgGCToGCLeaguePredictionsUpdate = 8108,
    k_EMsgGCToGCAddUserToPostGameChat = 8110,
    k_EMsgClientToGCHasPlayerVotedForMVP = 8111,
    k_EMsgClientToGCHasPlayerVotedForMVPResponse = 8112,
    k_EMsgClientToGCVoteForMVP = 8113,
    k_EMsgClientToGCVoteForMVPResponse = 8114,
    k_EMsgGCToGCGetEventParticipation = 8115,
    k_EMsgGCToGCGetEventParticipationResponse = 8116,
    k_EMsgGCToClientAutomatedTournamentStateChange = 8117,
    k_EMsgClientToGCWeekendTourneyOpts = 8118,
    k_EMsgClientToGCWeekendTourneyOptsResponse = 8119,
    k_EMsgClientToGCWeekendTourneyLeave = 8120,
    k_EMsgClientToGCWeekendTourneyLeaveResponse = 8121,
    k_EMsgClientToGCTeammateStatsRequest = 8124,
    k_EMsgClientToGCTeammateStatsResponse = 8125,
    k_EMsgClientToGCGetGiftPermissions = 8126,
    k_EMsgClientToGCGetGiftPermissionsResponse = 8127,
    k_EMsgClientToGCVoteForArcana = 8128,
    k_EMsgClientToGCVoteForArcanaResponse = 8129,
    k_EMsgClientToGCRequestArcanaVotesRemaining = 8130,
    k_EMsgClientToGCRequestArcanaVotesRemainingResponse = 8131,
    k_EMsgGCTransferTeamAdminResponse = 8132,
    k_EMsgGCToClientTeamInfo = 8135,
    k_EMsgGCToClientTeamsInfo = 8136,
    k_EMsgClientToGCMyTeamInfoRequest = 8137,
    k_EMsgClientToGCPublishUserStat = 8140,
    k_EMsgGCToGCSignoutSpendWager = 8141,
    k_EMsgGCSubmitLobbyMVPVote = 8144,
    k_EMsgGCSubmitLobbyMVPVoteResponse = 8145,
    k_EMsgSignOutCommunityGoalProgress = 8150,
    k_EMsgGCToClientLobbyMVPAwarded = 8152,
    k_EMsgGCToClientQuestProgressUpdated = 8153,
    k_EMsgGCToClientWageringUpdate = 8154,
    k_EMsgGCToClientArcanaVotesUpdate = 8155,
    k_EMsgClientToGCSetSpectatorLobbyDetails = 8157,
    k_EMsgClientToGCSetSpectatorLobbyDetailsResponse = 8158,
    k_EMsgClientToGCCreateSpectatorLobby = 8159,
    k_EMsgClientToGCCreateSpectatorLobbyResponse = 8160,
    k_EMsgClientToGCSpectatorLobbyList = 8161,
    k_EMsgClientToGCSpectatorLobbyListResponse = 8162,
    k_EMsgSpectatorLobbyGameDetails = 8163,
    k_EMsgServerToGCCompendiumInGamePredictionResults = 8166,
    k_EMsgServerToGCCloseCompendiumInGamePredictionVoting = 8167,
    k_EMsgClientToGCOpenPlayerCardPack = 8168,
    k_EMsgClientToGCOpenPlayerCardPackResponse = 8169,
    k_EMsgClientToGCSelectCompendiumInGamePrediction = 8170,
    k_EMsgClientToGCSelectCompendiumInGamePredictionResponse = 8171,
    k_EMsgClientToGCWeekendTourneyGetPlayerStats = 8172,
    k_EMsgClientToGCWeekendTourneyGetPlayerStatsResponse = 8173,
    k_EMsgClientToGCRecyclePlayerCard = 8174,
    k_EMsgClientToGCRecyclePlayerCardResponse = 8175,
    k_EMsgClientToGCCreatePlayerCardPack = 8176,
    k_EMsgClientToGCCreatePlayerCardPackResponse = 8177,
    k_EMsgClientToGCGetPlayerCardRosterRequest = 8178,
    k_EMsgClientToGCGetPlayerCardRosterResponse = 8179,
    k_EMsgClientToGCSetPlayerCardRosterRequest = 8180,
    k_EMsgClientToGCSetPlayerCardRosterResponse = 8181,
    k_EMsgServerToGCCloseCompendiumInGamePredictionVotingResponse = 8183,
    k_EMsgLobbyBattleCupVictory = 8186,
    k_EMsgGCGetPlayerCardItemInfo = 8187,
    k_EMsgGCGetPlayerCardItemInfoResponse = 8188,
    k_EMsgClientToGCRequestSteamDatagramTicket = 8189,
    k_EMsgClientToGCRequestSteamDatagramTicketResponse = 8190,
    k_EMsgGCToClientBattlePassRollupRequest = 8191,
    k_EMsgGCToClientBattlePassRollupResponse = 8192,
    k_EMsgClientToGCTransferSeasonalMMRRequest = 8193,
    k_EMsgClientToGCTransferSeasonalMMRResponse = 8194,
    k_EMsgGCToGCPublicChatCommunicationBan = 8195,
    k_EMsgGCToGCUpdateAccountInfo = 8196,
    k_EMsgGCChatReportPublicSpam = 8197,
    k_EMsgClientToGCSetPartyBuilderOptions = 8198,
    k_EMsgClientToGCSetPartyBuilderOptionsResponse = 8199,
    k_EMsgGCToClientPlaytestStatus = 8200,
    k_EMsgClientToGCJoinPlaytest = 8201,
    k_EMsgClientToGCJoinPlaytestResponse = 8202,
    k_EMsgLobbyPlaytestDetails = 8203,
    k_EMsgDOTASetFavoriteTeam = 8204,
    k_EMsgGCToClientBattlePassRollupListRequest = 8205,
    k_EMsgGCToClientBattlePassRollupListResponse = 8206,
    k_EMsgDOTAClaimEventAction = 8209,
    k_EMsgDOTAClaimEventActionResponse = 8210,
    k_EMsgDOTAGetPeriodicResource = 8211,
    k_EMsgDOTAGetPeriodicResourceResponse = 8212,
    k_EMsgDOTAPeriodicResourceUpdated = 8213,
    k_EMsgServerToGCSpendWager = 8214,
    k_EMsgGCToGCSignoutSpendWagerToken = 8215,
    k_EMsgSubmitTriviaQuestionAnswer = 8216,
    k_EMsgSubmitTriviaQuestionAnswerResponse = 8217,
    k_EMsgClientToGCGiveTip = 8218,
    k_EMsgClientToGCGiveTipResponse = 8219,
    k_EMsgStartTriviaSession = 8220,
    k_EMsgStartTriviaSessionResponse = 8221,
    k_EMsgAnchorPhoneNumberRequest = 8222,
    k_EMsgAnchorPhoneNumberResponse = 8223,
    k_EMsgUnanchorPhoneNumberRequest = 8224,
    k_EMsgUnanchorPhoneNumberResponse = 8225,
    k_EMsgGCToGCSignoutSpendRankWager = 8229,
    k_EMsgGCToGCGetFavoriteTeam = 8230,
    k_EMsgGCToGCGetFavoriteTeamResponse = 8231,
    k_EMsgSignOutEventGameData = 8232,
    k_EMsgClientToGCQuickStatsRequest = 8238,
    k_EMsgClientToGCQuickStatsResponse = 8239,
    k_EMsgGCToGCSubtractEventPointsFromUser = 8240,
    k_EMsgSelectionPriorityChoiceRequest = 8241,
    k_EMsgSelectionPriorityChoiceResponse = 8242,
    k_EMsgGCToGCCompendiumInGamePredictionResults = 8243,
    k_EMsgGameAutographReward = 8244,
    k_EMsgGameAutographRewardResponse = 8245,
    k_EMsgDestroyLobbyRequest = 8246,
    k_EMsgDestroyLobbyResponse = 8247,
    k_EMsgPurchaseItemWithEventPoints = 8248,
    k_EMsgPurchaseItemWithEventPointsResponse = 8249,
    k_EMsgServerToGCMatchPlayerItemPurchaseHistory = 8250,
    k_EMsgGCToGCGrantPlusHeroMatchResults = 8251,
    k_EMsgServerToGCMatchStateHistory = 8255,
    k_EMsgPurchaseHeroRandomRelic = 8258,
    k_EMsgPurchaseHeroRandomRelicResponse = 8259,
    k_EMsgClientToGCClaimEventActionUsingItem = 8260,
    k_EMsgClientToGCClaimEventActionUsingItemResponse = 8261,
    k_EMsgPartyReadyCheckRequest = 8262,
    k_EMsgPartyReadyCheckResponse = 8263,
    k_EMsgPartyReadyCheckAcknowledge = 8264,
    k_EMsgGetRecentPlayTimeFriendsRequest = 8265,
    k_EMsgGetRecentPlayTimeFriendsResponse = 8266,
    k_EMsgGCToClientCommendNotification = 8267,
    k_EMsgProfileRequest = 8268,
    k_EMsgProfileResponse = 8269,
    k_EMsgProfileUpdate = 8270,
    k_EMsgProfileUpdateResponse = 8271,
    k_EMsgHeroGlobalDataRequest = 8274,
    k_EMsgHeroGlobalDataResponse = 8275,
    k_EMsgClientToGCRequestPlusWeeklyChallengeResult = 8276,
    k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse = 8277,
    k_EMsgGCToGCGrantPlusPrepaidTime = 8278,
    k_EMsgPrivateMetadataKeyRequest = 8279,
    k_EMsgPrivateMetadataKeyResponse = 8280,
    k_EMsgGCToGCReconcilePlusStatus = 8281,
    k_EMsgGCToGCCheckPlusStatus = 8282,
    k_EMsgGCToGCCheckPlusStatusResponse = 8283,
    k_EMsgGCToGCReconcilePlusAutoGrantItems = 8284,
    k_EMsgGCToGCReconcilePlusStatusUnreliable = 8285,
    k_EMsgGCToClientCavernCrawlMapPathCompleted = 8288,
    k_EMsgClientToGCCavernCrawlClaimRoom = 8289,
    k_EMsgClientToGCCavernCrawlClaimRoomResponse = 8290,
    k_EMsgClientToGCCavernCrawlUseItemOnRoom = 8291,
    k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse = 8292,
    k_EMsgClientToGCCavernCrawlUseItemOnPath = 8293,
    k_EMsgClientToGCCavernCrawlUseItemOnPathResponse = 8294,
    k_EMsgClientToGCCavernCrawlRequestMapState = 8295,
    k_EMsgClientToGCCavernCrawlRequestMapStateResponse = 8296,
    k_EMsgSignOutTips = 8297,
    k_EMsgClientToGCRequestEventPointLogV2 = 8298,
    k_EMsgClientToGCRequestEventPointLogResponseV2 = 8299,
    k_EMsgClientToGCRequestEventTipsSummary = 8300,
    k_EMsgClientToGCRequestEventTipsSummaryResponse = 8301,
    k_EMsgClientToGCRequestSocialFeed = 8303,
    k_EMsgClientToGCRequestSocialFeedResponse = 8304,
    k_EMsgClientToGCRequestSocialFeedComments = 8305,
    k_EMsgClientToGCRequestSocialFeedCommentsResponse = 8306,
    k_EMsgClientToGCCavernCrawlGetClaimedRoomCount = 8308,
    k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse = 8309,
    k_EMsgGCToGCReconcilePlusAutoGrantItemsUnreliable = 8310,
    k_EMsgServerToGCAddBroadcastTimelineEvent = 8311,
    k_EMsgGCToServerUpdateSteamBroadcasting = 8312,
    k_EMsgClientToGCRecordContestVote = 8313,
    k_EMsgGCToClientRecordContestVoteResponse = 8314,
    k_EMsgGCToGCGrantAutograph = 8315,
    k_EMsgGCToGCGrantAutographResponse = 8316,
    k_EMsgSignOutConsumableUsage = 8317,
    k_EMsgLobbyEventGameDetails = 8318,
    k_EMsgDevGrantEventPoints = 8319,
    k_EMsgDevGrantEventPointsResponse = 8320,
    k_EMsgDevGrantEventAction = 8321,
    k_EMsgDevGrantEventActionResponse = 8322,
    k_EMsgDevResetEventState = 8323,
    k_EMsgDevResetEventStateResponse = 8324,
    k_EMsgGCToGCReconcileEventOwnership = 8325,
    k_EMsgConsumeEventSupportGrantItem = 8326,
    k_EMsgConsumeEventSupportGrantItemResponse = 8327,
    k_EMsgGCToClientClaimEventActionUsingItemCompleted = 8328,
    k_EMsgGCToClientCavernCrawlMapUpdated = 8329,
    k_EMsgServerToGCRequestPlayerRecentAccomplishments = 8330,
    k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse = 8331,
    k_EMsgClientToGCRequestPlayerRecentAccomplishments = 8332,
    k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse = 8333,
    k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments = 8334,
    k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse = 8335,
    k_EMsgSignOutEventActionGrants = 8336,
    k_EMsgClientToGCRequestPlayerCoachMatches = 8337,
    k_EMsgClientToGCRequestPlayerCoachMatchesResponse = 8338,
    k_EMsgClientToGCSubmitCoachTeammateRating = 8341,
    k_EMsgClientToGCSubmitCoachTeammateRatingResponse = 8342,
    k_EMsgGCToClientCoachTeammateRatingsChanged = 8343,
    k_EMsgClientToGCRequestPlayerCoachMatch = 8345,
    k_EMsgClientToGCRequestPlayerCoachMatchResponse = 8346,
    k_EMsgClientToGCRequestContestVotes = 8347,
    k_EMsgClientToGCRequestContestVotesResponse = 8348,
    k_EMsgClientToGCMVPVoteTimeout = 8349,
    k_EMsgClientToGCMVPVoteTimeoutResponse = 8350,
    k_EMsgMatchMatchmakingStats = 8360,
    k_EMsgClientToGCSubmitPlayerMatchSurvey = 8361,
    k_EMsgClientToGCSubmitPlayerMatchSurveyResponse = 8362,
    k_EMsgSQLGCToGCGrantAllHeroProgressAccount = 8363,
    k_EMsgSQLGCToGCGrantAllHeroProgressVictory = 8364,
    k_EMsgDevDeleteEventActions = 8365,
    k_EMsgDevDeleteEventActionsResponse = 8366,
    k_EMsgGCToGCGetAllHeroCurrent = 8635,
    k_EMsgGCToGCGetAllHeroCurrentResponse = 8636,
    k_EMsgGCSubmitPlayerAvoidRequest = 8637,
    k_EMsgGCSubmitPlayerAvoidRequestResponse = 8638,
    k_EMsgGCToClientNotificationsUpdated = 8639,
    k_EMsgGCtoGCAssociatedExploiterAccountInfo = 8640,
    k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse = 8641,
    k_EMsgGCtoGCRequestRecalibrationCheck = 8642,
    k_EMsgGCToClientVACReminder = 8643,
    k_EMsgClientToGCUnderDraftBuy = 8644,
    k_EMsgClientToGCUnderDraftBuyResponse = 8645,
    k_EMsgClientToGCUnderDraftReroll = 8646,
    k_EMsgClientToGCUnderDraftRerollResponse = 8647,
    k_EMsgNeutralItemStats = 8648,
    k_EMsgClientToGCCreateGuild = 8649,
    k_EMsgClientToGCCreateGuildResponse = 8650,
    k_EMsgClientToGCSetGuildInfo = 8651,
    k_EMsgClientToGCSetGuildInfoResponse = 8652,
    k_EMsgClientToGCAddGuildRole = 8653,
    k_EMsgClientToGCAddGuildRoleResponse = 8654,
    k_EMsgClientToGCModifyGuildRole = 8655,
    k_EMsgClientToGCModifyGuildRoleResponse = 8656,
    k_EMsgClientToGCRemoveGuildRole = 8657,
    k_EMsgClientToGCRemoveGuildRoleResponse = 8658,
    k_EMsgClientToGCJoinGuild = 8659,
    k_EMsgClientToGCJoinGuildResponse = 8660,
    k_EMsgClientToGCLeaveGuild = 8661,
    k_EMsgClientToGCLeaveGuildResponse = 8662,
    k_EMsgClientToGCInviteToGuild = 8663,
    k_EMsgClientToGCInviteToGuildResponse = 8664,
    k_EMsgClientToGCDeclineInviteToGuild = 8665,
    k_EMsgClientToGCDeclineInviteToGuildResponse = 8666,
    k_EMsgClientToGCCancelInviteToGuild = 8667,
    k_EMsgClientToGCCancelInviteToGuildResponse = 8668,
    k_EMsgClientToGCKickGuildMember = 8669,
    k_EMsgClientToGCKickGuildMemberResponse = 8670,
    k_EMsgClientToGCSetGuildMemberRole = 8671,
    k_EMsgClientToGCSetGuildMemberRoleResponse = 8672,
    k_EMsgClientToGCRequestGuildData = 8673,
    k_EMsgClientToGCRequestGuildDataResponse = 8674,
    k_EMsgGCToClientGuildDataUpdated = 8675,
    k_EMsgClientToGCRequestGuildMembership = 8676,
    k_EMsgClientToGCRequestGuildMembershipResponse = 8677,
    k_EMsgGCToClientGuildMembershipUpdated = 8678,
    k_EMsgClientToGCAcceptInviteToGuild = 8681,
    k_EMsgClientToGCAcceptInviteToGuildResponse = 8682,
    k_EMsgClientToGCSetGuildRoleOrder = 8683,
    k_EMsgClientToGCSetGuildRoleOrderResponse = 8684,
    k_EMsgClientToGCRequestGuildFeed = 8685,
    k_EMsgClientToGCRequestGuildFeedResponse = 8686,
    k_EMsgClientToGCRequestAccountGuildEventData = 8687,
    k_EMsgClientToGCRequestAccountGuildEventDataResponse = 8688,
    k_EMsgGCToClientAccountGuildEventDataUpdated = 8689,
    k_EMsgClientToGCRequestActiveGuildContracts = 8690,
    k_EMsgClientToGCRequestActiveGuildContractsResponse = 8691,
    k_EMsgGCToClientActiveGuildContractsUpdated = 8692,
    k_EMsgGCToClientGuildFeedUpdated = 8693,
    k_EMsgClientToGCSelectGuildContract = 8694,
    k_EMsgClientToGCSelectGuildContractResponse = 8695,
    k_EMsgGCToGCCompleteGuildContracts = 8696,
    k_EMsgClientToGCAddPlayerToGuildChat = 8698,
    k_EMsgClientToGCAddPlayerToGuildChatResponse = 8699,
    k_EMsgClientToGCUnderDraftSell = 8700,
    k_EMsgClientToGCUnderDraftSellResponse = 8701,
    k_EMsgClientToGCUnderDraftRequest = 8702,
    k_EMsgClientToGCUnderDraftResponse = 8703,
    k_EMsgClientToGCUnderDraftRedeemReward = 8704,
    k_EMsgClientToGCUnderDraftRedeemRewardResponse = 8705,
    k_EMsgGCToServerLobbyHeroBanRates = 8708,
    k_EMsgSignOutGuildContractProgress = 8711,
    k_EMsgSignOutMVPStats = 8712,
    k_EMsgClientToGCRequestActiveGuildChallenge = 8713,
    k_EMsgClientToGCRequestActiveGuildChallengeResponse = 8714,
    k_EMsgGCToClientActiveGuildChallengeUpdated = 8715,
    k_EMsgClientToGCRequestReporterUpdates = 8716,
    k_EMsgClientToGCRequestReporterUpdatesResponse = 8717,
    k_EMsgClientToGCAcknowledgeReporterUpdates = 8718,
    k_EMsgSignOutGuildChallengeProgress = 8720,
    k_EMsgClientToGCRequestGuildEventMembers = 8721,
    k_EMsgClientToGCRequestGuildEventMembersResponse = 8722,
    k_EMsgClientToGCReportGuildContent = 8725,
    k_EMsgClientToGCReportGuildContentResponse = 8726,
    k_EMsgClientToGCRequestAccountGuildPersonaInfo = 8727,
    k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse = 8728,
    k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch = 8729,
    k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse = 8730,
    k_EMsgGCToClientUnderDraftGoldUpdated = 8731,
    k_EMsgGCToServerRecordTrainingData = 8732,
    k_EMsgSignOutBounties = 8733,
    k_EMsgLobbyFeaturedGamemodeProgress = 8734,
    k_EMsgLobbyGauntletProgress = 8735,
    k_EMsgClientToGCSubmitDraftTriviaMatchAnswer = 8736,
    k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse = 8737,
    k_EMsgGCToGCSignoutSpendBounty = 8738,
    k_EMsgClientToGCApplyGauntletTicket = 8739,
    k_EMsgClientToGCUnderDraftRollBackBench = 8740,
    k_EMsgClientToGCUnderDraftRollBackBenchResponse = 8741,
    k_EMsgGCToGCGetEventActionScore = 8742,
    k_EMsgGCToGCGetEventActionScoreResponse = 8743,
    k_EMsgServerToGCGetGuildContracts = 8744,
    k_EMsgServerToGCGetGuildContractsResponse = 8745,
    k_EMsgLobbyEventGameData = 8746,
    k_EMsgGCToClientGuildMembersDataUpdated = 8747,
    k_EMsgSignOutReportActivityMarkers = 8748,
    k_EMsgSignOutDiretideCandy = 8749,
    k_EMsgGCToClientPostGameItemAwardNotification = 8750,
    k_EMsgClientToGCGetOWMatchDetails = 8751,
    k_EMsgClientToGCGetOWMatchDetailsResponse = 8752,
    k_EMsgClientToGCSubmitOWConviction = 8753,
    k_EMsgClientToGCSubmitOWConvictionResponse = 8754,
    k_EMsgGCToGCGetAccountSteamChina = 8755,
    k_EMsgGCToGCGetAccountSteamChinaResponse = 8756,
    k_EMsgClientToGCClaimLeaderboardRewards = 8757,
    k_EMsgClientToGCClaimLeaderboardRewardsResponse = 8758,
    k_EMsgClientToGCRecalibrateMMR = 8759,
    k_EMsgClientToGCRecalibrateMMRResponse = 8760,
    k_EMsgGCToGCGrantEventPointActionList = 8761,
    k_EMsgClientToGCChinaSSAURLRequest = 8764,
    k_EMsgClientToGCChinaSSAURLResponse = 8765,
    k_EMsgClientToGCChinaSSAAcceptedRequest = 8766,
    k_EMsgClientToGCChinaSSAAcceptedResponse = 8767,
    k_EMsgSignOutOverwatchSuspicion = 8768,
    k_EMsgServerToGCGetSuspicionConfig = 8769,
    k_EMsgServerToGCGetSuspicionConfigResponse = 8770,
    k_EMsgGCToGCGrantPlusHeroChallengeMatchResults = 8771,
    k_EMsgGCToClientOverwatchCasesAvailable = 8772,
    k_EMsgServerToGCAccountCheck = 8773,
    k_EMsgClientToGCStartWatchingOverwatch = 8774,
    k_EMsgClientToGCStopWatchingOverwatch = 8775,
    k_EMsgSignOutPerfData = 8776,
    k_EMsgClientToGCGetDPCFavorites = 8777,
    k_EMsgClientToGCGetDPCFavoritesResponse = 8778,
    k_EMsgClientToGCSetDPCFavoriteState = 8779,
    k_EMsgClientToGCSetDPCFavoriteStateResponse = 8780,
    k_EMsgClientToGCOverwatchReplayError = 8781,
    k_EMsgServerToGCPlayerChallengeHistory = 8782,
    k_EMsgSignOutBanData = 8783,
    k_EMsgWebapiDPCSeasonResults = 8784,
    k_EMsgClientToGCCoachFriend = 8785,
    k_EMsgClientToGCCoachFriendResponse = 8786,
    k_EMsgClientToGCRequestPrivateCoachingSession = 8787,
    k_EMsgClientToGCRequestPrivateCoachingSessionResponse = 8788,
    k_EMsgClientToGCAcceptPrivateCoachingSession = 8789,
    k_EMsgClientToGCAcceptPrivateCoachingSessionResponse = 8790,
    k_EMsgClientToGCLeavePrivateCoachingSession = 8791,
    k_EMsgClientToGCLeavePrivateCoachingSessionResponse = 8792,
    k_EMsgClientToGCGetCurrentPrivateCoachingSession = 8793,
    k_EMsgClientToGCGetCurrentPrivateCoachingSessionResponse = 8794,
    k_EMsgGCToClientPrivateCoachingSessionUpdated = 8795,
    k_EMsgClientToGCSubmitPrivateCoachingSessionRating = 8796,
    k_EMsgClientToGCSubmitPrivateCoachingSessionRatingResponse = 8797,
    k_EMsgClientToGCGetAvailablePrivateCoachingSessions = 8798,
    k_EMsgClientToGCGetAvailablePrivateCoachingSessionsResponse = 8799,
    k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummary = 8800,
    k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse = 8801,
    k_EMsgClientToGCJoinPrivateCoachingSessionLobby = 8802,
    k_EMsgClientToGCJoinPrivateCoachingSessionLobbyResponse = 8803,
    k_EMsgClientToGCRespondToCoachFriendRequest = 8804,
    k_EMsgClientToGCRespondToCoachFriendRequestResponse = 8805,
    k_EMsgClientToGCSetEventActiveSeasonID = 8806,
    k_EMsgClientToGCSetEventActiveSeasonIDResponse = 8807,
    k_EMsgServerToGCMatchPlayerNeutralItemEquipHistory = 8808,
    k_EMsgServerToGCCompendiumChosenInGamePredictions = 8809,
    k_EMsgClientToGCCreateTeamPlayerCardPack = 8810,
    k_EMsgClientToGCCreateTeamPlayerCardPackResponse = 8811,
    k_EMsgGCToServerSubmitCheerData = 8812,
    k_EMsgGCToServerCheerConfig = 8813,
    k_EMsgServerToGCGetCheerConfig = 8814,
    k_EMsgServerToGCGetCheerConfigResponse = 8815,
    k_EMsgGCToGCGrantAutographByID = 8816,
    k_EMsgGCToServerCheerScalesOverride = 8817,
    k_EMsgGCToServerGetCheerState = 8818,
    k_EMsgServerToGCReportCheerState = 8819,
    k_EMsgGCToServerScenarioSave = 8820,
    k_EMsgGCToServerAbilityDraftLobbyData = 8821,
    k_EMsgSignOutReportCommunications = 8822,
    k_EMsgClientToGCBatchGetPlayerCardRosterRequest = 8823,
    k_EMsgClientToGCBatchGetPlayerCardRosterResponse = 8824,
    k_EMsgClientToGCGetStickerbookRequest = 8825,
    k_EMsgClientToGCGetStickerbookResponse = 8826,
    k_EMsgClientToGCCreateStickerbookPageRequest = 8827,
    k_EMsgClientToGCCreateStickerbookPageResponse = 8828,
    k_EMsgClientToGCDeleteStickerbookPageRequest = 8829,
    k_EMsgClientToGCDeleteStickerbookPageResponse = 8830,
    k_EMsgClientToGCPlaceStickersRequest = 8831,
    k_EMsgClientToGCPlaceStickersResponse = 8832,
    k_EMsgClientToGCPlaceCollectionStickersRequest = 8833,
    k_EMsgClientToGCPlaceCollectionStickersResponse = 8834,
    k_EMsgClientToGCOrderStickerbookTeamPageRequest = 8835,
    k_EMsgClientToGCOrderStickerbookTeamPageResponse = 8836,
    k_EMsgServerToGCGetStickerHeroes = 8837,
    k_EMsgServerToGCGetStickerHeroesResponse = 8838,
    k_EMsgClientToGCCandyShopGetUserData = 8840,
    k_EMsgClientToGCCandyShopGetUserDataResponse = 8841,
    k_EMsgGCToClientCandyShopUserDataUpdated = 8842,
    k_EMsgClientToGCCandyShopPurchaseReward = 8843,
    k_EMsgClientToGCCandyShopPurchaseRewardResponse = 8844,
    k_EMsgClientToGCCandyShopDoExchange = 8845,
    k_EMsgClientToGCCandyShopDoExchangeResponse = 8846,
    k_EMsgClientToGCCandyShopDoVariableExchange = 8847,
    k_EMsgClientToGCCandyShopDoVariableExchangeResponse = 8848,
    k_EMsgClientToGCCandyShopRerollRewards = 8849,
    k_EMsgClientToGCCandyShopRerollRewardsResponse = 8850,
    k_EMsgClientToGCSetHeroSticker = 8851,
    k_EMsgClientToGCSetHeroStickerResponse = 8852,
    k_EMsgClientToGCGetHeroStickers = 8853,
    k_EMsgClientToGCGetHeroStickersResponse = 8854,
    k_EMsgClientToGCSetFavoritePage = 8855,
    k_EMsgClientToGCSetFavoritePageResponse = 8856,
    k_EMsgClientToGCCandyShopDevGrantCandy = 8857,
    k_EMsgClientToGCCandyShopDevGrantCandyResponse = 8858,
    k_EMsgClientToGCCandyShopDevClearInventory = 8859,
    k_EMsgClientToGCCandyShopDevClearInventoryResponse = 8860,
    k_EMsgClientToGCCandyShopOpenBags = 8861,
    k_EMsgClientToGCCandyShopOpenBagsResponse = 8862,
    k_EMsgClientToGCCandyShopDevGrantCandyBags = 8863,
    k_EMsgClientToGCCandyShopDevGrantCandyBagsResponse = 8864,
    k_EMsgClientToGCCandyShopDevShuffleExchange = 8865,
    k_EMsgClientToGCCandyShopDevShuffleExchangeResponse = 8866,
    k_EMsgClientToGCCandyShopDevGrantRerollCharges = 8867,
    k_EMsgClientToGCCandyShopDevGrantRerollChargesResponse = 8868,
    k_EMsgLobbyAdditionalAccountData = 8869,
    k_EMsgServerToGCLobbyInitialized = 8870,
    k_EMsgClientToGCCollectorsCacheAvailableDataRequest = 8871,
    k_EMsgGCToClientCollectorsCacheAvailableDataResponse = 8872,
    k_EMsgClientToGCUploadMatchClip = 8873,
    k_EMsgGCToClientUploadMatchClipResponse = 8874,
    k_EMsgSignOutMuertaMinigame = 8877,
    k_EMsgGCToServerLobbyHeroRoleStats = 8878,
    k_EMsgClientToGCRankRequest = 8879,
    k_EMsgGCToClientRankResponse = 8880,
    k_EMsgGCToClientRankUpdate = 8881,
    k_EMsgSignOutMapStats = 8882,
    k_EMsgClientToGCMapStatsRequest = 8883,
    k_EMsgGCToClientMapStatsResponse = 8884,
    k_EMsgClientToGCShowcaseGetUserData = 8886,
    k_EMsgClientToGCShowcaseGetUserDataResponse = 8887,
    k_EMsgClientToGCShowcaseSetUserData = 8888,
    k_EMsgClientToGCShowcaseSetUserDataResponse = 8889,
    k_EMsgClientToGCFantasyCraftingGetData = 8890,
    k_EMsgClientToGCFantasyCraftingGetDataResponse = 8891,
    k_EMsgClientToGCFantasyCraftingPerformOperation = 8892,
    k_EMsgClientToGCFantasyCraftingPerformOperationResponse = 8893,
    k_EMsgGCToClientFantasyCraftingGetDataUpdated = 8894,
    k_EMsgClientToGCFantasyCraftingDevModifyTablet = 8895,
    k_EMsgClientToGCFantasyCraftingDevModifyTabletResponse = 8896,
    k_EMsgClientToGCRoadToTIGetQuests = 8897,
    k_EMsgClientToGCRoadToTIGetQuestsResponse = 8898,
    k_EMsgClientToGCRoadToTIGetActiveQuest = 8899,
    k_EMsgClientToGCRoadToTIGetActiveQuestResponse = 8900,
    k_EMsgClientToGCBingoGetUserData = 8901,
    k_EMsgClientToGCBingoGetUserDataResponse = 8902,
    k_EMsgClientToGCBingoClaimRow = 8903,
    k_EMsgClientToGCBingoClaimRowResponse = 8904,
    k_EMsgClientToGCBingoDevRerollCard = 8905,
    k_EMsgClientToGCBingoDevRerollCardResponse = 8906,
    k_EMsgClientToGCBingoGetStatsData = 8907,
    k_EMsgClientToGCBingoGetStatsDataResponse = 8908,
    k_EMsgGCToClientBingoUserDataUpdated = 8909,
    k_EMsgGCToClientRoadToTIQuestDataUpdated = 8910,
    k_EMsgClientToGCRoadToTIUseItem = 8911,
    k_EMsgClientToGCRoadToTIUseItemResponse = 8912,
    k_EMsgClientToGCShowcaseSubmitReport = 8913,
    k_EMsgClientToGCShowcaseSubmitReportResponse = 8914,
    k_EMsgClientToGCShowcaseAdminGetReportsRollupList = 8915,
    k_EMsgClientToGCShowcaseAdminGetReportsRollupListResponse = 8916,
    k_EMsgClientToGCShowcaseAdminGetReportsRollup = 8917,
    k_EMsgClientToGCShowcaseAdminGetReportsRollupResponse = 8918,
    k_EMsgClientToGCShowcaseAdminGetUserDetails = 8919,
    k_EMsgClientToGCShowcaseAdminGetUserDetailsResponse = 8920,
    k_EMsgClientToGCShowcaseAdminConvict = 8921,
    k_EMsgClientToGCShowcaseAdminConvictResponse = 8922,
    k_EMsgClientToGCShowcaseAdminExonerate = 8923,
    k_EMsgClientToGCShowcaseAdminExonerateResponse = 8924,
    k_EMsgClientToGCShowcaseAdminReset = 8925,
    k_EMsgClientToGCShowcaseAdminResetResponse = 8926,
    k_EMsgClientToGCShowcaseAdminLockAccount = 8927,
    k_EMsgClientToGCShowcaseAdminLockAccountResponse = 8928,
    k_EMsgClientToGCFantasyCraftingSelectPlayer = 8929,
    k_EMsgClientToGCFantasyCraftingSelectPlayerResponse = 8930,
    k_EMsgClientToGCFantasyCraftingGenerateTablets = 8931,
    k_EMsgClientToGCFantasyCraftingGenerateTabletsResponse = 8932,
    k_EMsgClientToGcFantasyCraftingUpgradeTablets = 8933,
    k_EMsgClientToGcFantasyCraftingUpgradeTabletsResponse = 8934,
    k_EMsgClientToGCFantasyCraftingRerollOptions = 8936,
    k_EMsgClientToGCFantasyCraftingRerollOptionsResponse = 8937,
    k_EMsgClientToGCRoadToTIDevForceQuest = 8935,
    k_EMsgLobbyRoadToTIMatchQuestData = 8939,
    k_EMsgClientToGCShowcaseModerationGetQueue = 8940,
    k_EMsgClientToGCShowcaseModerationGetQueueResponse = 8941,
    k_EMsgClientToGCShowcaseModerationApplyModeration = 8942,
    k_EMsgClientToGCShowcaseModerationApplyModerationResponse = 8943,
    k_EMsgClientToGCOverworldGetUserData = 8944,
    k_EMsgClientToGCOverworldGetUserDataResponse = 8945,
    k_EMsgClientToGCOverworldCompletePath = 8946,
    k_EMsgClientToGCOverworldCompletePathResponse = 8947,
    k_EMsgClientToGCOverworldClaimEncounterReward = 8948,
    k_EMsgClientToGCOverworldClaimEncounterRewardResponse = 8949,
    k_EMsgClientToGCOverworldDevResetAll = 8950,
    k_EMsgClientToGCOverworldDevResetAllResponse = 8951,
    k_EMsgClientToGCOverworldDevResetNode = 8952,
    k_EMsgClientToGCOverworldDevResetNodeResponse = 8953,
    k_EMsgClientToGCOverworldDevResetPath = 8954,
    k_EMsgClientToGCOverworldDevResetPathResponse = 8955,
    k_EMsgClientToGCOverworldDevGrantTokens = 8956,
    k_EMsgClientToGCOverworldDevGrantTokensResponse = 8957,
    k_EMsgClientToGCOverworldDevClearInventory = 8958,
    k_EMsgClientToGCOverworldDevClearInventoryResponse = 8959,
    k_EMsgServerToGCNewBloomGift = 8960,
    k_EMsgServerToGCNewBloomGiftResponse = 8961,
    k_EMsgGCToClientOverworldUserDataUpdated = 8962,
    k_EMsgClientToGCOverworldMoveToNode = 8963,
    k_EMsgClientToGCOverworldMoveToNodeResponse = 8964,
    k_EMsgClientToGCNewBloomGift = 8965,
    k_EMsgClientToGCNewBloomGiftResponse = 8966,
    k_EMsgSignOutOverworld = 8967,
    k_EMsgClientToGCSetBannedHeroes = 8969,
    k_EMsgClientToGCOverworldTradeTokens = 8970,
    k_EMsgClientToGCOverworldTradeTokensResponse = 8971,
    k_EMsgOverworldEncounterTokenTreasureData = 8972,
    k_EMsgOverworldEncounterTokenQuestData = 8973,
    k_EMsgOverworldEncounterChooseHeroData = 8974,
    k_EMsgClientToGCUpdateComicBookStats = 8975,
    k_EMsgClientToGCCandyShopDevResetShop = 8976,
    k_EMsgClientToGCCandyShopDevResetShopResponse = 8977,
    k_EMsgOverworldEncounterProgressData = 8978,
    k_EMsgClientToGCOverworldFeedback = 8979,
    k_EMsgClientToGCOverworldFeedbackResponse = 8980,
    k_EMsgClientToGCOverworldVisitEncounter = 8981,
    k_EMsgClientToGCOverworldVisitEncounterResponse = 8982,
    k_EMsgClientToGCOverworldGiftTokens = 8983,
    k_EMsgClientToGCOverworldGiftTokensResponse = 8984,
    k_EMsgClientToGCDotaLabsFeedback = 8985,
    k_EMsgClientToGCDotaLabsFeedbackResponse = 8986,
    k_EMsgOverworldEncounterPitFighterRewardData = 8987,
    k_EMsgClientToGCOverworldGetDynamicImage = 8988,
    k_EMsgClientToGCOverworldGetDynamicImageResponse = 8989,
    k_EMsgClientToGCFightingGameChallengeFriend = 8990,
    k_EMsgClientToGCFightingGameChallengeFriendResponse = 8991,
    k_EMsgClientToGCFightingGameCancelChallengeFriend = 8992,
    k_EMsgClientToGCFightingGameAnswerChallenge = 8993,
    k_EMsgClientToGCFightingGameAnswerChallengeResponse = 8994,
    k_EMsgGCToClientFightingGameChallenge = 8995,
    k_EMsgGCToClientFightingGameStartMatch = 8996,
    k_EMsgGCToClientFightingGameChallengeCanceled = 8997,
    k_EMsgClientToGCBingoShuffleCard = 8999,
    k_EMsgClientToGCBingoShuffleCardResponse = 9000,
    k_EMsgClientToGCBingoModifySquare = 9001,
    k_EMsgClientToGCBingoModifySquareResponse = 9002,
    k_EMsgClientToGCBingoDevAddTokens = 9003,
    k_EMsgClientToGCBingoDevAddTokensResponse = 9004,
    k_EMsgClientToGCBingoDevClearInventory = 9005,
    k_EMsgClientToGCBingoDevClearInventoryResponse = 9006,
    k_EMsgGCCompendiumRemoveAllSelections = 9007,
    k_EMsgGCCompendiumRemoveAllSelectionsResponse = 9008,
    k_EMsgClientToGCOverworldMinigameAction = 9009,
    k_EMsgClientToGCOverworldMinigameActionResponse = 9010,
    k_EMsgClientToGCSurvivorsTelemetry = 9011,
    k_EMsgClientToGCSurvivorsTelemetryResponse = 9012,
    k_EMsgClientToGCOverworldRequestTokensNeededByFriend = 9013,
    k_EMsgClientToGCOverworldRequestTokensNeededByFriendResponse = 9014,
    k_EMsgClientToGCCraftworksGetUserData = 9015,
    k_EMsgClientToGCCraftworksGetUserDataResponse = 9016,
    k_EMsgGCToClientCraftworksUserDataUpdated = 9017,
    k_EMsgClientToGCCraftworksCraftRecipe = 9018,
    k_EMsgClientToGCCraftworksCraftRecipeResponse = 9019,
    k_EMsgClientToGCCraftworksDevModifyComponents = 9020,
    k_EMsgClientToGCCraftworksDevModifyComponentsResponse = 9021,
    k_EMsgSignOutCraftworks = 9022
}
declare function eDOTAGCMsgFromJSON(object: any): EDOTAGCMsg;
declare function eDOTAGCMsgToJSON(object: EDOTAGCMsg): string;

declare enum ESOMsg {
    k_ESOMsg_Create = 21,
    k_ESOMsg_Update = 22,
    k_ESOMsg_Destroy = 23,
    k_ESOMsg_CacheSubscribed = 24,
    k_ESOMsg_CacheUnsubscribed = 25,
    k_ESOMsg_UpdateMultiple = 26,
    k_ESOMsg_CacheSubscriptionRefresh = 28,
    k_ESOMsg_CacheSubscribedUpToDate = 29
}
declare function eSOMsgFromJSON(object: any): ESOMsg;
declare function eSOMsgToJSON(object: ESOMsg): string;
declare enum EGCBaseClientMsg {
    k_EMsgGCPingRequest = 3001,
    k_EMsgGCPingResponse = 3002,
    k_EMsgGCToClientPollConvarRequest = 3003,
    k_EMsgGCToClientPollConvarResponse = 3004,
    k_EMsgGCCompressedMsgToClient = 3005,
    k_EMsgGCCompressedMsgToClient_Legacy = 523,
    k_EMsgGCToClientRequestDropped = 3006,
    k_EMsgGCClientWelcome = 4004,
    k_EMsgGCServerWelcome = 4005,
    k_EMsgGCClientHello = 4006,
    k_EMsgGCServerHello = 4007,
    k_EMsgGCClientConnectionStatus = 4009,
    k_EMsgGCServerConnectionStatus = 4010
}
declare function eGCBaseClientMsgFromJSON(object: any): EGCBaseClientMsg;
declare function eGCBaseClientMsgToJSON(object: EGCBaseClientMsg): string;

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
declare const CMsgGuildInfo: MessageFns$1<CMsgGuildInfo>;
interface CMsgGuildSummary {
    guildInfo: CMsgGuildInfo | undefined;
    memberCount: number;
    eventPoints: CMsgGuildSummary_EventPoints[];
}
declare const CMsgGuildSummary: MessageFns$1<CMsgGuildSummary>;
interface CMsgGuildSummary_EventPoints {
    eventId: number;
    guildPoints: number;
    guildRank: number;
    guildWeeklyRank: number;
    guildWeeklyPercentile: number;
    guildCurrentPercentile: number;
}
declare const CMsgGuildSummary_EventPoints: MessageFns$1<CMsgGuildSummary_EventPoints>;
interface CMsgGuildRole {
    roleId: number;
    roleName: string;
    roleFlags: number;
    roleOrder: number;
}
declare const CMsgGuildRole: MessageFns$1<CMsgGuildRole>;
interface CMsgGuildMember {
    memberAccountId: number;
    memberRoleId: number;
    memberJoinedTimestamp: number;
    memberLastActiveTimestamp: number;
}
declare const CMsgGuildMember: MessageFns$1<CMsgGuildMember>;
interface CMsgGuildInvite {
    requesterAccountId: number;
    targetAccountId: number;
    timestampSent: number;
}
declare const CMsgGuildInvite: MessageFns$1<CMsgGuildInvite>;
interface CMsgGuildData {
    guildId: number;
    guildInfo: CMsgGuildInfo | undefined;
    guildRoles: CMsgGuildRole[];
    guildMembers: CMsgGuildMember[];
    guildInvites: CMsgGuildInvite[];
}
declare const CMsgGuildData: MessageFns$1<CMsgGuildData>;
interface CMsgAccountGuildInvite {
    guildId: number;
    requesterAccountId: number;
    timestampSent: number;
}
declare const CMsgAccountGuildInvite: MessageFns$1<CMsgAccountGuildInvite>;
interface CMsgAccountGuildMemberships {
    guildIds: number[];
    guildInvites: CMsgAccountGuildInvite[];
}
declare const CMsgAccountGuildMemberships: MessageFns$1<CMsgAccountGuildMemberships>;
interface CMsgGuildPersonaInfo {
    guildId: number;
    guildTag: string;
    guildFlags: number;
}
declare const CMsgGuildPersonaInfo: MessageFns$1<CMsgGuildPersonaInfo>;
interface CMsgAccountGuildsPersonaInfo {
    guildPersonaInfos: CMsgGuildPersonaInfo[];
}
declare const CMsgAccountGuildsPersonaInfo: MessageFns$1<CMsgAccountGuildsPersonaInfo>;
interface CMsgGuildFeedEvent {
    feedEventId: string;
    timestamp: number;
    eventType: number;
    paramUint1: number;
    paramUint2: number;
    paramUint3: number;
}
declare const CMsgGuildFeedEvent: MessageFns$1<CMsgGuildFeedEvent>;
interface CMsgClientToGCCreateGuild {
    guildInfo: CMsgGuildInfo | undefined;
    guildChatType: EGuildChatType;
}
declare const CMsgClientToGCCreateGuild: MessageFns$1<CMsgClientToGCCreateGuild>;
interface CMsgClientToGCCreateGuildResponse {
    result: CMsgClientToGCCreateGuildResponse_EResponse;
    guildId: number;
}
declare const CMsgClientToGCCreateGuildResponse: MessageFns$1<CMsgClientToGCCreateGuildResponse>;
interface CMsgClientToGCSetGuildInfo {
    guildId: number;
    guildInfo: CMsgGuildInfo | undefined;
    guildChatType: EGuildChatType;
}
declare const CMsgClientToGCSetGuildInfo: MessageFns$1<CMsgClientToGCSetGuildInfo>;
interface CMsgClientToGCSetGuildInfoResponse {
    result: CMsgClientToGCSetGuildInfoResponse_EResponse;
}
declare const CMsgClientToGCSetGuildInfoResponse: MessageFns$1<CMsgClientToGCSetGuildInfoResponse>;
interface CMsgClientToGCRequestGuildData {
    guildId: number;
}
declare const CMsgClientToGCRequestGuildData: MessageFns$1<CMsgClientToGCRequestGuildData>;
interface CMsgClientToGCRequestGuildDataResponse {
    result: CMsgClientToGCRequestGuildDataResponse_EResponse;
    guildData: CMsgGuildData | undefined;
}
declare const CMsgClientToGCRequestGuildDataResponse: MessageFns$1<CMsgClientToGCRequestGuildDataResponse>;
interface CMsgGCToClientGuildDataUpdated {
    guildData: CMsgGuildData | undefined;
    updateFlags: number;
}
declare const CMsgGCToClientGuildDataUpdated: MessageFns$1<CMsgGCToClientGuildDataUpdated>;
interface CMsgGCToClientGuildMembersDataUpdated {
    guildId: number;
    membersData: CMsgGuildMember[];
}
declare const CMsgGCToClientGuildMembersDataUpdated: MessageFns$1<CMsgGCToClientGuildMembersDataUpdated>;
interface CMsgClientToGCRequestGuildMembership {
}
declare const CMsgClientToGCRequestGuildMembership: MessageFns$1<CMsgClientToGCRequestGuildMembership>;
interface CMsgClientToGCRequestGuildMembershipResponse {
    result: CMsgClientToGCRequestGuildMembershipResponse_EResponse;
    guildMemberships: CMsgAccountGuildMemberships | undefined;
}
declare const CMsgClientToGCRequestGuildMembershipResponse: MessageFns$1<CMsgClientToGCRequestGuildMembershipResponse>;
interface CMsgGCToClientGuildMembershipUpdated {
    guildMemberships: CMsgAccountGuildMemberships | undefined;
}
declare const CMsgGCToClientGuildMembershipUpdated: MessageFns$1<CMsgGCToClientGuildMembershipUpdated>;
interface CMsgClientToGCJoinGuild {
    guildId: number;
}
declare const CMsgClientToGCJoinGuild: MessageFns$1<CMsgClientToGCJoinGuild>;
interface CMsgClientToGCJoinGuildResponse {
    result: CMsgClientToGCJoinGuildResponse_EResponse;
}
declare const CMsgClientToGCJoinGuildResponse: MessageFns$1<CMsgClientToGCJoinGuildResponse>;
interface CMsgClientToGCLeaveGuild {
    guildId: number;
}
declare const CMsgClientToGCLeaveGuild: MessageFns$1<CMsgClientToGCLeaveGuild>;
interface CMsgClientToGCLeaveGuildResponse {
    result: CMsgClientToGCLeaveGuildResponse_EResponse;
}
declare const CMsgClientToGCLeaveGuildResponse: MessageFns$1<CMsgClientToGCLeaveGuildResponse>;
interface CMsgClientToGCKickGuildMember {
    guildId: number;
    targetAccountId: number;
}
declare const CMsgClientToGCKickGuildMember: MessageFns$1<CMsgClientToGCKickGuildMember>;
interface CMsgClientToGCKickGuildMemberResponse {
    result: CMsgClientToGCKickGuildMemberResponse_EResponse;
}
declare const CMsgClientToGCKickGuildMemberResponse: MessageFns$1<CMsgClientToGCKickGuildMemberResponse>;
interface CMsgClientToGCSetGuildMemberRole {
    guildId: number;
    targetAccountId: number;
    targetRoleId: number;
}
declare const CMsgClientToGCSetGuildMemberRole: MessageFns$1<CMsgClientToGCSetGuildMemberRole>;
interface CMsgClientToGCSetGuildMemberRoleResponse {
    result: CMsgClientToGCSetGuildMemberRoleResponse_EResponse;
}
declare const CMsgClientToGCSetGuildMemberRoleResponse: MessageFns$1<CMsgClientToGCSetGuildMemberRoleResponse>;
interface CMsgClientToGCInviteToGuild {
    guildId: number;
    targetAccountId: number;
}
declare const CMsgClientToGCInviteToGuild: MessageFns$1<CMsgClientToGCInviteToGuild>;
interface CMsgClientToGCInviteToGuildResponse {
    result: CMsgClientToGCInviteToGuildResponse_EResponse;
}
declare const CMsgClientToGCInviteToGuildResponse: MessageFns$1<CMsgClientToGCInviteToGuildResponse>;
interface CMsgClientToGCDeclineInviteToGuild {
    guildId: number;
}
declare const CMsgClientToGCDeclineInviteToGuild: MessageFns$1<CMsgClientToGCDeclineInviteToGuild>;
interface CMsgClientToGCDeclineInviteToGuildResponse {
    result: CMsgClientToGCDeclineInviteToGuildResponse_EResponse;
}
declare const CMsgClientToGCDeclineInviteToGuildResponse: MessageFns$1<CMsgClientToGCDeclineInviteToGuildResponse>;
interface CMsgClientToGCAcceptInviteToGuild {
    guildId: number;
}
declare const CMsgClientToGCAcceptInviteToGuild: MessageFns$1<CMsgClientToGCAcceptInviteToGuild>;
interface CMsgClientToGCAcceptInviteToGuildResponse {
    result: CMsgClientToGCAcceptInviteToGuildResponse_EResponse;
}
declare const CMsgClientToGCAcceptInviteToGuildResponse: MessageFns$1<CMsgClientToGCAcceptInviteToGuildResponse>;
interface CMsgClientToGCCancelInviteToGuild {
    guildId: number;
    targetAccountId: number;
}
declare const CMsgClientToGCCancelInviteToGuild: MessageFns$1<CMsgClientToGCCancelInviteToGuild>;
interface CMsgClientToGCCancelInviteToGuildResponse {
    result: CMsgClientToGCCancelInviteToGuildResponse_EResponse;
}
declare const CMsgClientToGCCancelInviteToGuildResponse: MessageFns$1<CMsgClientToGCCancelInviteToGuildResponse>;
interface CMsgClientToGCAddGuildRole {
    guildId: number;
    roleName: string;
    roleFlags: number;
}
declare const CMsgClientToGCAddGuildRole: MessageFns$1<CMsgClientToGCAddGuildRole>;
interface CMsgClientToGCAddGuildRoleResponse {
    result: CMsgClientToGCAddGuildRoleResponse_EResponse;
    roleId: number;
}
declare const CMsgClientToGCAddGuildRoleResponse: MessageFns$1<CMsgClientToGCAddGuildRoleResponse>;
interface CMsgClientToGCModifyGuildRole {
    guildId: number;
    roleId: number;
    roleName: string;
    roleFlags: number;
}
declare const CMsgClientToGCModifyGuildRole: MessageFns$1<CMsgClientToGCModifyGuildRole>;
interface CMsgClientToGCModifyGuildRoleResponse {
    result: CMsgClientToGCModifyGuildRoleResponse_EResponse;
}
declare const CMsgClientToGCModifyGuildRoleResponse: MessageFns$1<CMsgClientToGCModifyGuildRoleResponse>;
interface CMsgClientToGCRemoveGuildRole {
    guildId: number;
    roleId: number;
}
declare const CMsgClientToGCRemoveGuildRole: MessageFns$1<CMsgClientToGCRemoveGuildRole>;
interface CMsgClientToGCRemoveGuildRoleResponse {
    result: CMsgClientToGCRemoveGuildRoleResponse_EResponse;
}
declare const CMsgClientToGCRemoveGuildRoleResponse: MessageFns$1<CMsgClientToGCRemoveGuildRoleResponse>;
interface CMsgClientToGCSetGuildRoleOrder {
    guildId: number;
    requestedRoleIds: number[];
    previousRoleIds: number[];
}
declare const CMsgClientToGCSetGuildRoleOrder: MessageFns$1<CMsgClientToGCSetGuildRoleOrder>;
interface CMsgClientToGCSetGuildRoleOrderResponse {
    result: CMsgClientToGCSetGuildRoleOrderResponse_EResponse;
    confirmedRoleIds: number[];
}
declare const CMsgClientToGCSetGuildRoleOrderResponse: MessageFns$1<CMsgClientToGCSetGuildRoleOrderResponse>;
interface CMsgClientToGCGuildFeedRequest {
    guildId: number;
    lastSeenId: string;
}
declare const CMsgClientToGCGuildFeedRequest: MessageFns$1<CMsgClientToGCGuildFeedRequest>;
interface CMsgClientToGCRequestGuildFeedResponse {
    result: CMsgClientToGCRequestGuildFeedResponse_EResponse;
    guildId: number;
    feedEvents: CMsgGuildFeedEvent[];
}
declare const CMsgClientToGCRequestGuildFeedResponse: MessageFns$1<CMsgClientToGCRequestGuildFeedResponse>;
interface CMsgGCToClientGuildFeedUpdated {
    guildId: number;
}
declare const CMsgGCToClientGuildFeedUpdated: MessageFns$1<CMsgGCToClientGuildFeedUpdated>;
interface CMsgClientToGCAddPlayerToGuildChat {
    guildId: number;
}
declare const CMsgClientToGCAddPlayerToGuildChat: MessageFns$1<CMsgClientToGCAddPlayerToGuildChat>;
interface CMsgClientToGCAddPlayerToGuildChatResponse {
    result: CMsgClientToGCAddPlayerToGuildChatResponse_EResponse;
}
declare const CMsgClientToGCAddPlayerToGuildChatResponse: MessageFns$1<CMsgClientToGCAddPlayerToGuildChatResponse>;
interface CMsgFindGuildByTagResponse {
    result: CMsgFindGuildByTagResponse_EResponse;
    guildId: number;
    guildSummary: CMsgGuildSummary | undefined;
}
declare const CMsgFindGuildByTagResponse: MessageFns$1<CMsgFindGuildByTagResponse>;
interface CMsgSearchForOpenGuildsResponse {
    result: CMsgSearchForOpenGuildsResponse_EResponse;
    searchResults: CMsgSearchForOpenGuildsResponse_SearchResult[];
    useWhitelist: boolean;
}
declare const CMsgSearchForOpenGuildsResponse: MessageFns$1<CMsgSearchForOpenGuildsResponse>;
interface CMsgSearchForOpenGuildsResponse_SearchResult {
    guildId: number;
    guildSummary: CMsgGuildSummary | undefined;
}
declare const CMsgSearchForOpenGuildsResponse_SearchResult: MessageFns$1<CMsgSearchForOpenGuildsResponse_SearchResult>;
interface CMsgClientToGCReportGuildContent {
    guildId: number;
    guildContentFlags: number;
}
declare const CMsgClientToGCReportGuildContent: MessageFns$1<CMsgClientToGCReportGuildContent>;
interface CMsgClientToGCReportGuildContentResponse {
    result: CMsgClientToGCReportGuildContentResponse_EResponse;
}
declare const CMsgClientToGCReportGuildContentResponse: MessageFns$1<CMsgClientToGCReportGuildContentResponse>;
interface CMsgClientToGCRequestAccountGuildPersonaInfo {
    accountId: number;
}
declare const CMsgClientToGCRequestAccountGuildPersonaInfo: MessageFns$1<CMsgClientToGCRequestAccountGuildPersonaInfo>;
interface CMsgClientToGCRequestAccountGuildPersonaInfoResponse {
    result: CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse;
    personaInfo: CMsgAccountGuildsPersonaInfo | undefined;
}
declare const CMsgClientToGCRequestAccountGuildPersonaInfoResponse: MessageFns$1<CMsgClientToGCRequestAccountGuildPersonaInfoResponse>;
interface CMsgClientToGCRequestAccountGuildPersonaInfoBatch {
    accountIds: number[];
}
declare const CMsgClientToGCRequestAccountGuildPersonaInfoBatch: MessageFns$1<CMsgClientToGCRequestAccountGuildPersonaInfoBatch>;
interface CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse {
    result: CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse;
    personaInfos: CMsgAccountGuildsPersonaInfo[];
}
declare const CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse: MessageFns$1<CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse>;
type Builtin$1 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$1<T> = T extends Builtin$1 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$1<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$1<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$1<T[K]>;
} : Partial<T>;
interface MessageFns$1<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial$1<T>): T;
    fromPartial(object: DeepPartial$1<T>): T;
}

declare enum EGuildEventAuditAction {
    k_EGuildEventAuditAction_Invalid = 0,
    k_EGuildEventAuditAction_DevGrant = 1,
    k_EGuildEventAuditAction_CompleteContract = 2,
    k_EGuildEventAuditAction_CompleteChallenge = 3,
    k_EGuildEventAuditAction_CompleteMatch_Winner = 4,
    k_EGuildEventAuditAction_ChallengeProgress = 5,
    k_EGuildEventAuditAction_CompleteMatch_Loser = 6,
    k_EGuildEventAuditAction_WeeklyLeaderboard = 7,
    k_EGuildEventAuditAction_ManualGrant = 8
}
declare function eGuildEventAuditActionFromJSON(object: any): EGuildEventAuditAction;
declare function eGuildEventAuditActionToJSON(object: EGuildEventAuditAction): string;
declare enum CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidEvent = 5,
    k_eInvalidGuild = 6,
    k_eNotMember = 7,
    k_eInvalidGuildEvent = 8
}
declare function cMsgClientToGCRequestAccountGuildEventDataResponse_EResponseFromJSON(object: any): CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse;
declare function cMsgClientToGCRequestAccountGuildEventDataResponse_EResponseToJSON(object: CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse): string;
declare enum CMsgClientToGCRequestActiveGuildContractsResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidEvent = 5,
    k_eInvalidGuild = 6,
    k_eNotMember = 7,
    k_eInvalidGuildEvent = 8
}
declare function cMsgClientToGCRequestActiveGuildContractsResponse_EResponseFromJSON(object: any): CMsgClientToGCRequestActiveGuildContractsResponse_EResponse;
declare function cMsgClientToGCRequestActiveGuildContractsResponse_EResponseToJSON(object: CMsgClientToGCRequestActiveGuildContractsResponse_EResponse): string;
declare enum CMsgClientToGCSelectGuildContractResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidEvent = 5,
    k_eInvalidGuild = 6,
    k_eNotMember = 7,
    k_eInvalidGuildEvent = 8,
    k_eInvalidContractID = 9,
    k_eAlreadyAssigned = 10,
    k_eInvalidContractSlot = 11,
    k_eContractSlotLockedGuild = 12,
    k_eContractSlotCooldown = 13,
    k_eContractDuplicate = 14,
    k_eContractSlotTimeError = 15,
    k_eContractSlotLockedDotaPlus = 16
}
declare function cMsgClientToGCSelectGuildContractResponse_EResponseFromJSON(object: any): CMsgClientToGCSelectGuildContractResponse_EResponse;
declare function cMsgClientToGCSelectGuildContractResponse_EResponseToJSON(object: CMsgClientToGCSelectGuildContractResponse_EResponse): string;
declare enum CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidEvent = 5,
    k_eInvalidGuild = 6,
    k_eNotMember = 7,
    k_eInvalidGuildEvent = 8
}
declare function cMsgClientToGCRequestActiveGuildChallengeResponse_EResponseFromJSON(object: any): CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse;
declare function cMsgClientToGCRequestActiveGuildChallengeResponse_EResponseToJSON(object: CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse): string;
declare enum CMsgClientToGCRequestGuildEventMembersResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidEvent = 5,
    k_eInvalidGuild = 6,
    k_eNotMember = 7,
    k_eInvalidGuildEvent = 8
}
declare function cMsgClientToGCRequestGuildEventMembersResponse_EResponseFromJSON(object: any): CMsgClientToGCRequestGuildEventMembersResponse_EResponse;
declare function cMsgClientToGCRequestGuildEventMembersResponse_EResponseToJSON(object: CMsgClientToGCRequestGuildEventMembersResponse_EResponse): string;
declare enum CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse {
    k_eInternalError = 0,
    k_eSuccess = 1,
    k_eTooBusy = 2,
    k_eDisabled = 3,
    k_eTimeout = 4,
    k_eInvalidEvent = 5,
    k_eInvalidGuild = 6,
    k_eNotMember = 7,
    k_eInvalidGuildEvent = 8,
    k_eDoesNotQualify = 9,
    k_eAlreadyClaimed = 10
}
declare function cMsgClientToGCClaimLeaderboardRewardsResponse_EResponseFromJSON(object: any): CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse;
declare function cMsgClientToGCClaimLeaderboardRewardsResponse_EResponseToJSON(object: CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse): string;
interface CMsgGuildContract {
    contractId: string;
    challengeInstanceId: number;
    challengeParameter: number;
    challengeTimestamp: number;
    assignedAccountId: number;
    contractFlags: number;
}
declare const CMsgGuildContract: MessageFns<CMsgGuildContract>;
interface CMsgGuildContractSlot {
    contract: CMsgGuildContract | undefined;
}
declare const CMsgGuildContractSlot: MessageFns<CMsgGuildContractSlot>;
interface CMsgAccountGuildEventData {
    guildPoints: number;
    contractsRefreshedTimestamp: number;
    contractSlots: CMsgGuildContractSlot[];
    completedChallengeCount: number;
    challengesRefreshTimestamp: number;
    guildWeeklyPercentile: number;
    guildWeeklyLastTimestamp: number;
    lastWeeklyClaimTime: number;
    guildCurrentPercentile: number;
}
declare const CMsgAccountGuildEventData: MessageFns<CMsgAccountGuildEventData>;
interface CMsgGuildActiveContracts {
    contractsRefreshedTimestamp: number;
    contracts: CMsgGuildContract[];
}
declare const CMsgGuildActiveContracts: MessageFns<CMsgGuildActiveContracts>;
interface CMsgGuildChallenge {
    challengeInstanceId: number;
    challengeParameter: number;
    challengeTimestamp: number;
    challengeProgress: number;
    challengeFlags: number;
}
declare const CMsgGuildChallenge: MessageFns<CMsgGuildChallenge>;
interface CMsgGuildEventMember {
    accountId: number;
    guildPointsEarned: number;
}
declare const CMsgGuildEventMember: MessageFns<CMsgGuildEventMember>;
interface CMsgClientToGCRequestAccountGuildEventData {
    guildId: number;
    eventId: EEvent;
}
declare const CMsgClientToGCRequestAccountGuildEventData: MessageFns<CMsgClientToGCRequestAccountGuildEventData>;
interface CMsgClientToGCRequestAccountGuildEventDataResponse {
    result: CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse;
    eventId: EEvent;
    eventData: CMsgAccountGuildEventData | undefined;
}
declare const CMsgClientToGCRequestAccountGuildEventDataResponse: MessageFns<CMsgClientToGCRequestAccountGuildEventDataResponse>;
interface CMsgGCToClientAccountGuildEventDataUpdated {
    guildId: number;
    eventId: EEvent;
    updateFlags: number;
    guildEventData: CMsgAccountGuildEventData | undefined;
    contractsUpdated: boolean;
}
declare const CMsgGCToClientAccountGuildEventDataUpdated: MessageFns<CMsgGCToClientAccountGuildEventDataUpdated>;
interface CMsgClientToGCRequestActiveGuildContracts {
    guildId: number;
    eventId: EEvent;
}
declare const CMsgClientToGCRequestActiveGuildContracts: MessageFns<CMsgClientToGCRequestActiveGuildContracts>;
interface CMsgClientToGCRequestActiveGuildContractsResponse {
    result: CMsgClientToGCRequestActiveGuildContractsResponse_EResponse;
    activeContracts: CMsgGuildActiveContracts | undefined;
    activeChallenges: CMsgGuildChallenge | undefined;
}
declare const CMsgClientToGCRequestActiveGuildContractsResponse: MessageFns<CMsgClientToGCRequestActiveGuildContractsResponse>;
interface CMsgGCToClientActiveGuildContractsUpdated {
    guildId: number;
    eventId: EEvent;
}
declare const CMsgGCToClientActiveGuildContractsUpdated: MessageFns<CMsgGCToClientActiveGuildContractsUpdated>;
interface CMsgClientToGCSelectGuildContract {
    guildId: number;
    eventId: EEvent;
    contractId: string;
    contractSlot: number;
}
declare const CMsgClientToGCSelectGuildContract: MessageFns<CMsgClientToGCSelectGuildContract>;
interface CMsgClientToGCSelectGuildContractResponse {
    result: CMsgClientToGCSelectGuildContractResponse_EResponse;
}
declare const CMsgClientToGCSelectGuildContractResponse: MessageFns<CMsgClientToGCSelectGuildContractResponse>;
interface CMsgClientToGCRequestActiveGuildChallenge {
    guildId: number;
    eventId: EEvent;
}
declare const CMsgClientToGCRequestActiveGuildChallenge: MessageFns<CMsgClientToGCRequestActiveGuildChallenge>;
interface CMsgClientToGCRequestActiveGuildChallengeResponse {
    result: CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse;
    activeChallenge: CMsgGuildChallenge | undefined;
}
declare const CMsgClientToGCRequestActiveGuildChallengeResponse: MessageFns<CMsgClientToGCRequestActiveGuildChallengeResponse>;
interface CMsgGCToClientActiveGuildChallengeUpdated {
    guildId: number;
    eventId: EEvent;
    activeChallenge: CMsgGuildChallenge | undefined;
}
declare const CMsgGCToClientActiveGuildChallengeUpdated: MessageFns<CMsgGCToClientActiveGuildChallengeUpdated>;
interface CMsgClientToGCRequestGuildEventMembers {
    guildId: number;
    eventId: EEvent;
}
declare const CMsgClientToGCRequestGuildEventMembers: MessageFns<CMsgClientToGCRequestGuildEventMembers>;
interface CMsgClientToGCRequestGuildEventMembersResponse {
    result: CMsgClientToGCRequestGuildEventMembersResponse_EResponse;
    members: CMsgGuildEventMember[];
}
declare const CMsgClientToGCRequestGuildEventMembersResponse: MessageFns<CMsgClientToGCRequestGuildEventMembersResponse>;
interface CMsgGuildLeaderboardCombinedResponse {
    eventId: EEvent;
    region: number;
    lastUpdated: number;
    guildId: number[];
    rank: number[];
    currentPercentile: number[];
    weeklyPercentile: number[];
    points: number[];
}
declare const CMsgGuildLeaderboardCombinedResponse: MessageFns<CMsgGuildLeaderboardCombinedResponse>;
interface CMsgClientToGCClaimLeaderboardRewards {
    guildId: number;
    eventId: EEvent;
}
declare const CMsgClientToGCClaimLeaderboardRewards: MessageFns<CMsgClientToGCClaimLeaderboardRewards>;
interface CMsgClientToGCClaimLeaderboardRewardsResponse {
    result: CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse;
    eventPoints: number;
}
declare const CMsgClientToGCClaimLeaderboardRewardsResponse: MessageFns<CMsgClientToGCClaimLeaderboardRewardsResponse>;
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

export { CMsgClientToGCEmoticonDataRequest as $, CMsgDOTAPopup as A, dOTAConnectionStateTToJSON as A$, cMsgGCToClientRemoveFilteredPlayerResponse_ResultFromJSON as A0, cMsgGCToClientRemoveFilteredPlayerResponse_ResultToJSON as A1, cMsgGCToClientRequestActiveBeaconPartiesResponse_EResponseFromJSON as A2, cMsgGCToClientRequestActiveBeaconPartiesResponse_EResponseToJSON as A3, cMsgGCToClientUpdateFilteredPlayerNoteResponse_ResultFromJSON as A4, cMsgGCToClientUpdateFilteredPlayerNoteResponse_ResultToJSON as A5, cMsgGCToClientUploadMatchClipResponse_EResponseFromJSON as A6, cMsgGCToClientUploadMatchClipResponse_EResponseToJSON as A7, cMsgInGamePrediction_EPredictionTypeFromJSON as A8, cMsgInGamePrediction_EPredictionTypeToJSON as A9, cMsgSocialFeedCommentsResponse_ResultFromJSON as AA, cMsgSocialFeedCommentsResponse_ResultToJSON as AB, cMsgSocialFeedResponse_ResultFromJSON as AC, cMsgSocialFeedResponse_ResultToJSON as AD, cMsgSpectateFriendGameResponse_EWatchLiveResultFromJSON as AE, cMsgSpectateFriendGameResponse_EWatchLiveResultToJSON as AF, cMsgWatchGameResponse_WatchGameResultFromJSON as AG, cMsgWatchGameResponse_WatchGameResultToJSON as AH, cMvpData_MvpDatum_MvpAccolade_MvpAccoladeTypeFromJSON as AI, cMvpData_MvpDatum_MvpAccolade_MvpAccoladeTypeToJSON as AJ, cSODOTALobby_LobbyTypeFromJSON as AK, cSODOTALobby_LobbyTypeToJSON as AL, cSODOTALobby_StateFromJSON as AM, cSODOTALobby_StateToJSON as AN, cSODOTAParty_StateFromJSON as AO, cSODOTAParty_StateToJSON as AP, dOTABehaviorLevelTFromJSON as AQ, dOTABehaviorLevelTToJSON as AR, dOTABotDifficultyFromJSON as AS, dOTABotDifficultyToJSON as AT, dOTAChatChannelTypeTFromJSON as AU, dOTAChatChannelTypeTToJSON as AV, dOTACommLevelTFromJSON as AW, dOTACommLevelTToJSON as AX, dOTACommTypeTFromJSON as AY, dOTACommTypeTToJSON as AZ, dOTAConnectionStateTFromJSON as A_, cMsgInGamePrediction_ERandomSelectionGroupTFromJSON as Aa, cMsgInGamePrediction_ERandomSelectionGroupTToJSON as Ab, cMsgInGamePrediction_ERawValueTypeTFromJSON as Ac, cMsgInGamePrediction_ERawValueTypeTToJSON as Ad, cMsgInGamePrediction_EResolutionTypeTFromJSON as Ae, cMsgInGamePrediction_EResolutionTypeTToJSON as Af, cMsgPlayerConductScorecard_EBehaviorRatingFromJSON as Ag, cMsgPlayerConductScorecard_EBehaviorRatingToJSON as Ah, cMsgProfileResponse_EResponseFromJSON as Ai, cMsgProfileResponse_EResponseToJSON as Aj, cMsgProfileUpdateResponse_ResultFromJSON as Ak, cMsgProfileUpdateResponse_ResultToJSON as Al, cMsgPurchaseItemWithEventPointsResponse_ResultFromJSON as Am, cMsgPurchaseItemWithEventPointsResponse_ResultToJSON as An, cMsgRedeemCodeResponse_EResultCodeFromJSON as Ao, cMsgRedeemCodeResponse_EResultCodeToJSON as Ap, cMsgRequestCrateEscalationLevelResponse_EResultFromJSON as Aq, cMsgRequestCrateEscalationLevelResponse_EResultToJSON as Ar, cMsgRequestCrateItemsResponse_EResultFromJSON as As, cMsgRequestCrateItemsResponse_EResultToJSON as At, cMsgResetStrangeGemCountResponse_EResetGemFromJSON as Au, cMsgResetStrangeGemCountResponse_EResetGemToJSON as Av, cMsgSearchForOpenGuildsResponse_EResponseFromJSON as Aw, cMsgSearchForOpenGuildsResponse_EResponseToJSON as Ax, cMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponseFromJSON as Ay, cMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponseToJSON as Az, CMsgBalancedShuffleLobby as B, eDPCFavoriteTypeFromJSON as B$, dOTAGameModeFromJSON as B0, dOTAGameModeToJSON as B1, dOTAGameStateFromJSON as B2, dOTAGameStateToJSON as B3, dOTAJoinLobbyResultFromJSON as B4, dOTAJoinLobbyResultToJSON as B5, dOTALeaverStatusTFromJSON as B6, dOTALeaverStatusTToJSON as B7, dOTALobbyReadyStateFromJSON as B8, dOTALobbyReadyStateToJSON as B9, eBadgeTypeToJSON as BA, eBroadcastTimelineEventFromJSON as BB, eBroadcastTimelineEventToJSON as BC, eCandyShopUpgradeFromJSON as BD, eCandyShopUpgradeToJSON as BE, eChatSpecialPrivilegesFromJSON as BF, eChatSpecialPrivilegesToJSON as BG, eCustomGameInstallStatusFromJSON as BH, eCustomGameInstallStatusToJSON as BI, eCustomGameWhitelistStateFromJSON as BJ, eCustomGameWhitelistStateToJSON as BK, eDOTADraftTriviaAnswerResultFromJSON as BL, eDOTADraftTriviaAnswerResultToJSON as BM, eDOTAGCMsgFromJSON as BN, eDOTAGCMsgToJSON as BO, eDOTAGCSessionNeedFromJSON as BP, eDOTAGCSessionNeedToJSON as BQ, eDOTAMMRBoostTypeFromJSON as BR, eDOTAMMRBoostTypeToJSON as BS, eDOTAMatchPlayerTimeCustomStatFromJSON as BT, eDOTAMatchPlayerTimeCustomStatToJSON as BU, eDOTAPlayerMMRTypeFromJSON as BV, eDOTAPlayerMMRTypeToJSON as BW, eDOTATriviaAnswerResultFromJSON as BX, eDOTATriviaAnswerResultToJSON as BY, eDOTATriviaQuestionCategoryFromJSON as BZ, eDOTATriviaQuestionCategoryToJSON as B_, dOTALobbyVisibilityFromJSON as Ba, dOTALobbyVisibilityToJSON as Bb, dOTALowPriorityBanTypeFromJSON as Bc, dOTALowPriorityBanTypeToJSON as Bd, dOTAMatchVoteFromJSON as Be, dOTAMatchVoteToJSON as Bf, dOTASelectionPriorityChoiceFromJSON as Bg, dOTASelectionPriorityChoiceToJSON as Bh, dOTASelectionPriorityRulesFromJSON as Bi, dOTASelectionPriorityRulesToJSON as Bj, dOTATournamentEventsFromJSON as Bk, dOTATournamentEventsToJSON as Bl, dOTAWatchReplayTypeFromJSON as Bm, dOTAWatchReplayTypeToJSON as Bn, dotaBotMode as Bo, dotaBotModeFromJSON as Bp, dotaBotModeToJSON as Bq, dotaCmPick as Br, dotaCmPickFromJSON as Bs, dotaCmPickToJSON as Bt, dotaCombatlogTypes as Bu, dotaCombatlogTypesFromJSON as Bv, dotaCombatlogTypesToJSON as Bw, dotaGcTeamFromJSON as Bx, dotaGcTeamToJSON as By, eBadgeTypeFromJSON as Bz, CMsgClientHello as C, eMatchBehaviorScoreVarianceFromJSON as C$, eDPCFavoriteTypeToJSON as C0, eDPCPushNotificationFromJSON as C1, eDPCPushNotificationToJSON as C2, eDevEventRequestResultFromJSON as C3, eDevEventRequestResultToJSON as C4, eEventActionScoreModeFromJSON as C5, eEventActionScoreModeToJSON as C6, eEventFromJSON as C7, eEventToJSON as C8, eGCBaseClientMsgFromJSON as C9, eItemEditorReservationResultToJSON as CA, eItemSuggestPreferenceFromJSON as CB, eItemSuggestPreferenceToJSON as CC, eLaneSelectionFlagsFromJSON as CD, eLaneSelectionFlagsToJSON as CE, eLaneSelectionFromJSON as CF, eLaneSelectionToJSON as CG, eLaneTypeFromJSON as CH, eLaneTypeToJSON as CI, eLeagueAuditActionFromJSON as CJ, eLeagueAuditActionToJSON as CK, eLeagueBroadcastProviderFromJSON as CL, eLeagueBroadcastProviderToJSON as CM, eLeagueDivisionFromJSON as CN, eLeagueDivisionToJSON as CO, eLeaguePhaseFromJSON as CP, eLeaguePhaseToJSON as CQ, eLeagueRegionFromJSON as CR, eLeagueRegionToJSON as CS, eLeagueStatusFromJSON as CT, eLeagueStatusToJSON as CU, eLeagueTierCategoryFromJSON as CV, eLeagueTierCategoryToJSON as CW, eLeagueTierFromJSON as CX, eLeagueTierToJSON as CY, eLobbyMemberCoachRequestStateFromJSON as CZ, eLobbyMemberCoachRequestStateToJSON as C_, eGCBaseClientMsgToJSON as Ca, eGCBaseMsgFromJSON as Cb, eGCBaseMsgToJSON as Cc, eGCEconBaseMsgFromJSON as Cd, eGCEconBaseMsgToJSON as Ce, eGCItemMsgFromJSON as Cf, eGCItemMsgToJSON as Cg, eGCMsgInitiateTradeResponseFromJSON as Ch, eGCMsgInitiateTradeResponseToJSON as Ci, eGCMsgResponseFromJSON as Cj, eGCMsgResponseToJSON as Ck, eGCMsgUseItemResponseFromJSON as Cl, eGCMsgUseItemResponseToJSON as Cm, eGCPlatformFromJSON as Cn, eGCPlatformToJSON as Co, eGuildAuditActionFromJSON as Cp, eGuildAuditActionToJSON as Cq, eGuildChatTypeFromJSON as Cr, eGuildChatTypeToJSON as Cs, eGuildEventAuditActionFromJSON as Ct, eGuildEventAuditActionToJSON as Cu, eHeroRelicRarityFromJSON as Cv, eHeroRelicRarityToJSON as Cw, eHighPriorityMMStateFromJSON as Cx, eHighPriorityMMStateToJSON as Cy, eItemEditorReservationResultFromJSON as Cz, CMsgDOTAMatchmakingStatsRequest as D, eUnderDraftResponseFromJSON as D$, eMatchBehaviorScoreVarianceToJSON as D0, eMatchGroupServerStatusFromJSON as D1, eMatchGroupServerStatusToJSON as D2, eMatchOutcomeFromJSON as D3, eMatchOutcomeToJSON as D4, eNewBloomGiftingResponseFromJSON as D5, eNewBloomGiftingResponseToJSON as D6, eOverwatchConvictionFromJSON as D7, eOverwatchConvictionToJSON as D8, eOverwatchReportReasonFromJSON as D9, eSourceEngineToJSON as DA, eSpecialPingValueFromJSON as DB, eSpecialPingValueToJSON as DC, eSteamLearnCacheDataResultFromJSON as DD, eSteamLearnCacheDataResultToJSON as DE, eSteamLearnDataTypeFromJSON as DF, eSteamLearnDataTypeToJSON as DG, eSteamLearnGetAccessTokensResultFromJSON as DH, eSteamLearnGetAccessTokensResultToJSON as DI, eSteamLearnInferenceMetadataResultFromJSON as DJ, eSteamLearnInferenceMetadataResultToJSON as DK, eSteamLearnInferenceResultFromJSON as DL, eSteamLearnInferenceResultToJSON as DM, eSteamLearnSnapshotProjectResultFromJSON as DN, eSteamLearnSnapshotProjectResultToJSON as DO, eSteammLearnRegisterDataSourceResultFromJSON as DP, eSteammLearnRegisterDataSourceResultToJSON as DQ, eStickerbookAuditActionFromJSON as DR, eStickerbookAuditActionToJSON as DS, eStickerbookPageTypeFromJSON as DT, eStickerbookPageTypeToJSON as DU, eSupportEventRequestResultFromJSON as DV, eSupportEventRequestResultToJSON as DW, eTimerAlertTypeFromJSON as DX, eTimerAlertTypeToJSON as DY, eTourneyQueueDeadlineStateFromJSON as DZ, eTourneyQueueDeadlineStateToJSON as D_, eOverwatchReportReasonToJSON as Da, eOverworldAuditActionFromJSON as Db, eOverworldAuditActionToJSON as Dc, eOverworldMinigameActionFromJSON as Dd, eOverworldMinigameActionToJSON as De, eOverworldNodeStateFromJSON as Df, eOverworldNodeStateToJSON as Dg, eOverworldPathStateFromJSON as Dh, eOverworldPathStateToJSON as Di, ePartyMatchmakingFlagsFromJSON as Dj, ePartyMatchmakingFlagsToJSON as Dk, ePlayerChallengeHistoryTypeFromJSON as Dl, ePlayerChallengeHistoryTypeToJSON as Dm, eProfileCardSlotTypeFromJSON as Dn, eProfileCardSlotTypeToJSON as Do, ePurchaseHeroRelicResultFromJSON as Dp, ePurchaseHeroRelicResultToJSON as Dq, eRankTypeFromJSON as Dr, eRankTypeToJSON as Ds, eReadyCheckRequestResultFromJSON as Dt, eReadyCheckRequestResultToJSON as Du, eReadyCheckStatusFromJSON as Dv, eReadyCheckStatusToJSON as Dw, eSOMsgFromJSON as Dx, eSOMsgToJSON as Dy, eSourceEngineFromJSON as Dz, CMsgDOTASetMatchHistoryAccess as E, eUnderDraftResponseToJSON as E0, eWeekendTourneyRichPresenceEventFromJSON as E1, eWeekendTourneyRichPresenceEventToJSON as E2, fantasyGemTypeFromJSON as E3, fantasyGemTypeToJSON as E4, fantasyRolesFromJSON as E5, fantasyRolesToJSON as E6, fantasyScoringFromJSON as E7, fantasyScoringToJSON as E8, fantasySelectionModeFromJSON as E9, fantasySelectionModeToJSON as Ea, fantasyTeamSlotsFromJSON as Eb, fantasyTeamSlotsToJSON as Ec, gCConnectionStatusFromJSON as Ed, gCConnectionStatusToJSON as Ee, gCProtoBufMsgSrcFromJSON as Ef, gCProtoBufMsgSrcToJSON as Eg, lobbyDotaPauseSettingFromJSON as Eh, lobbyDotaPauseSettingToJSON as Ei, lobbyDotaTVDelayFromJSON as Ej, lobbyDotaTVDelayToJSON as Ek, matchLanguagesFromJSON as El, matchLanguagesToJSON as Em, matchTypeFromJSON as En, matchTypeToJSON as Eo, partnerAccountTypeFromJSON as Ep, partnerAccountTypeToJSON as Eq, CMsgUpgradeLeagueItem as F, CMsgGCWatchDownloadedReplay as G, CMsgClientsRejoinChatChannels as H, CMsgGCGetHeroStandings as I, CMsgGCItemEditorReservationsRequest as J, CMsgGCItemEditorReserveItemDef as K, CMsgGCItemEditorReleaseReservation as L, CMsgFlipLobbyTeams as M, CMsgDOTANotifyAccountFlagsChange as N, CMsgDOTASetProfilePrivacy as O, CMsgClientSuspended as P, CMsgGCLobbyUpdateBroadcastChannelInfo as Q, CMsgDOTAGetEventPoints as R, CMsgPartyLeaderWatchGamePrompt as S, CMsgDOTACompendiumDataRequest as T, CMsgDOTAGetPlayerMatchHistory as U, CMsgGCNotificationsRequest as V, CMsgLeagueAdminList as W, CMsgGCNotificationsMarkReadRequest as X, CMsgGCRankedPlayerInfoSubmit as Y, CMsgGCPlayerInfoSubmit as Z, CMsgDOTAHasItemQuery as _, CMsgInviteToParty as a, CMsgDOTAAnchorPhoneNumberRequest as a$, CMsgDOTARedeemItem as a0, CMsgClientToGCGetAllHeroProgress as a1, CMsgClientToGCGetTrophyList as a2, CMsgClientToGCGetProfileCard as a3, CMsgClientToGCSetProfileCardSlots as a4, CMsgClientToGCCreateHeroStatue as a5, CMsgLobbyEventPoints as a6, CMsgClientToGCRerollPlayerChallenge as a7, CMsgClientToGCApplyGemCombiner as a8, CMsgClientToGCGetAllHeroOrder as a9, CMsgClientToGCGetProfileTickets as aA, CMsgClientToGCH264Unsupported as aB, CMsgClientToGCGetQuestProgress as aC, CMsgGCGetHeroStatsHistory as aD, CMsgClientToGCWageringRequest as aE, CMsgClientToGCHasPlayerVotedForMVP as aF, CMsgClientToGCVoteForMVP as aG, CMsgClientToGCTeammateStatsRequest as aH, CMsgClientToGCGetGiftPermissions as aI, CMsgClientToGCVoteForArcana as aJ, CMsgClientToGCRequestArcanaVotesRemaining as aK, CMsgClientToGCPublishUserStat as aL, CMsgDOTASubmitLobbyMVPVote as aM, CMsgClientToGCOpenPlayerCardPack as aN, CMsgClientToGCSelectCompendiumInGamePrediction as aO, CMsgClientToGCRecyclePlayerCard as aP, CMsgClientToGCCreatePlayerCardPack as aQ, CMsgGCGetPlayerCardItemInfo as aR, CMsgClientToGCTransferSeasonalMMRRequest as aS, CMsgClientToGCJoinPlaytest as aT, CMsgLobbyPlaytestDetails as aU, CMsgDOTASetFavoriteTeam as aV, CMsgDOTAClaimEventAction as aW, CMsgDOTAGetPeriodicResource as aX, CMsgDOTAPeriodicResourceUpdated as aY, CMsgDOTASubmitTriviaQuestionAnswer as aZ, CMsgDOTAStartTriviaSession as a_, CMsgClientToGCPlayerCardSpecificPurchaseRequest as aa, CMsgClientToGCGetFilteredPlayers as ab, CMsgClientToGCRemoveFilteredPlayer as ac, CMsgClientToGCUpdatePartyBeacon as ad, CMsgClientToGCRequestActiveBeaconParties as ae, CMsgClientToGCManageFavorites as af, CMsgClientToGCJoinPartyFromBeacon as ag, CMsgClientToGCGetFavoritePlayers as ah, CMsgClientToGCVerifyFavoritePlayers as ai, CMsgClientToGCPurchaseLabyrinthBlessings as aj, CMsgClientToGCPurchaseFilteredPlayerSlot as ak, CMsgClientToGCUpdateFilteredPlayerNote as al, CMsgClientToGCClaimSwag as am, CMsgClientToGCPlayerStatsRequest as an, CMsgClientToGCFindTopSourceTVGames as ao, CMsgClientToGCSocialFeedPostCommentRequest as ap, CMsgClientToGCCustomGamesFriendsPlayedRequest as aq, CMsgClientToGCFriendsPlayedCustomGameRequest as ar, CMsgGCTopCustomGamesList as as, CMsgClientToGCGetProfileCardStats as at, CMsgClientToGCTopLeagueMatchesRequest as au, CMsgClientToGCTopFriendMatchesRequest as av, CMsgClientToGCSocialFeedPostMessageRequest as aw, CMsgDOTACustomGameListenServerStartedLoading as ax, CMsgDOTACustomGameClientFinishedLoading as ay, CMsgClientToGCMatchesMinimalRequest as az, CMsgInvitationCreated as b, CMsgClientToGCUnderDraftRedeemReward as b$, CMsgDOTAUnanchorPhoneNumberRequest as b0, CMsgDOTAClientToGCQuickStatsRequest as b1, CMsgDOTASelectionPriorityChoiceRequest as b2, CMsgDOTAGameAutographReward as b3, CMsgDOTADestroyLobbyRequest as b4, CMsgPurchaseItemWithEventPoints as b5, CMsgPurchaseHeroRandomRelic as b6, CMsgClientToGCClaimEventActionUsingItem as b7, CMsgPartyReadyCheckRequest as b8, CMsgPartyReadyCheckAcknowledge as b9, CMsgDevDeleteEventActions as bA, CMsgDOTASubmitPlayerAvoidRequest as bB, CMsgGCtoGCAssociatedExploiterAccountInfo as bC, CMsgClientToGCUnderDraftBuy as bD, CMsgClientToGCUnderDraftReroll as bE, CMsgClientToGCCreateGuild as bF, CMsgClientToGCSetGuildInfo as bG, CMsgClientToGCAddGuildRole as bH, CMsgClientToGCModifyGuildRole as bI, CMsgClientToGCRemoveGuildRole as bJ, CMsgClientToGCJoinGuild as bK, CMsgClientToGCLeaveGuild as bL, CMsgClientToGCInviteToGuild as bM, CMsgClientToGCDeclineInviteToGuild as bN, CMsgClientToGCCancelInviteToGuild as bO, CMsgClientToGCKickGuildMember as bP, CMsgClientToGCSetGuildMemberRole as bQ, CMsgClientToGCRequestGuildData as bR, CMsgClientToGCRequestGuildMembership as bS, CMsgClientToGCAcceptInviteToGuild as bT, CMsgClientToGCSetGuildRoleOrder as bU, CMsgClientToGCRequestAccountGuildEventData as bV, CMsgClientToGCRequestActiveGuildContracts as bW, CMsgClientToGCSelectGuildContract as bX, CMsgClientToGCAddPlayerToGuildChat as bY, CMsgClientToGCUnderDraftSell as bZ, CMsgClientToGCUnderDraftRequest as b_, CMsgDOTAGetRecentPlayTimeFriendsRequest as ba, CMsgProfileRequest as bb, CMsgProfileUpdate as bc, CMsgHeroGlobalDataRequest as bd, CMsgClientToGCRequestPlusWeeklyChallengeResult as be, CMsgPrivateMetadataKeyRequest as bf, CMsgClientToGCCavernCrawlClaimRoom as bg, CMsgClientToGCCavernCrawlUseItemOnRoom as bh, CMsgClientToGCCavernCrawlUseItemOnPath as bi, CMsgClientToGCCavernCrawlRequestMapState as bj, CMsgClientToGCRequestEventPointLogV2 as bk, CMsgClientToGCRequestEventPointLogResponseV2 as bl, CMsgClientToGCCavernCrawlGetClaimedRoomCount as bm, CMsgClientToGCRecordContestVote as bn, CMsgLobbyEventGameDetails as bo, CMsgDevGrantEventPoints as bp, CMsgDevGrantEventAction as bq, CMsgDevResetEventState as br, CMsgConsumeEventSupportGrantItem as bs, CMsgServerToGCRequestPlayerRecentAccomplishments as bt, CMsgClientToGCRequestPlayerRecentAccomplishments as bu, CMsgClientToGCRequestPlayerHeroRecentAccomplishments as bv, CMsgClientToGCRequestContestVotes as bw, CMsgClientToGCMVPVoteTimeout as bx, CMsgMatchMatchmakingStats as by, CMsgClientToGCSubmitPlayerMatchSurvey as bz, CMsgKickFromParty as c, CMsgClientToGCOverworldGetDynamicImage as c$, CMsgClientToGCRequestActiveGuildChallenge as c0, CMsgClientToGCRequestReporterUpdates as c1, CMsgClientToGCAcknowledgeReporterUpdates as c2, CMsgClientToGCRequestGuildEventMembers as c3, CMsgClientToGCReportGuildContent as c4, CMsgClientToGCRequestAccountGuildPersonaInfo as c5, CMsgClientToGCRequestAccountGuildPersonaInfoBatch as c6, CMsgLobbyFeaturedGamemodeProgress as c7, CMsgClientToGCSubmitDraftTriviaMatchAnswer as c8, CMsgClientToGCUnderDraftRollBackBench as c9, CMsgClientToGCMapStatsRequest as cA, CMsgClientToGCRoadToTIGetQuests as cB, CMsgClientToGCRoadToTIGetActiveQuest as cC, CMsgClientToGCRoadToTIUseItem as cD, CMsgClientToGCRoadToTIDevForceQuest as cE, CMsgLobbyRoadToTIMatchQuestData as cF, CMsgClientToGCOverworldGetUserData as cG, CMsgClientToGCOverworldCompletePath as cH, CMsgClientToGCOverworldClaimEncounterReward as cI, CMsgClientToGCOverworldDevResetAll as cJ, CMsgClientToGCOverworldDevResetNode as cK, CMsgClientToGCOverworldDevGrantTokens as cL, CMsgClientToGCOverworldDevClearInventory as cM, CMsgClientToGCOverworldMoveToNode as cN, CMsgClientToGCNewBloomGift as cO, CMsgClientToGCSetBannedHeroes as cP, CMsgClientToGCOverworldTradeTokens as cQ, CMsgOverworldEncounterTokenTreasureData as cR, CMsgOverworldEncounterTokenQuestData as cS, CMsgOverworldEncounterChooseHeroData as cT, CMsgClientToGCUpdateComicBookStats as cU, CMsgOverworldEncounterProgressData as cV, CMsgClientToGCOverworldFeedback as cW, CMsgClientToGCOverworldVisitEncounter as cX, CMsgClientToGCOverworldGiftTokens as cY, CMsgClientToGCDotaLabsFeedback as cZ, CMsgOverworldEncounterPitFighterRewardData as c_, CMsgLobbyEventGameData as ca, CMsgClientToGCGetOWMatchDetails as cb, CMsgClientToGCSubmitOWConviction as cc, CMsgClientToGCClaimLeaderboardRewards as cd, CMsgClientToGCRecalibrateMMR as ce, CMsgClientToGCChinaSSAURLRequest as cf, CMsgClientToGCChinaSSAAcceptedRequest as cg, CMsgClientToGCStartWatchingOverwatch as ch, CMsgClientToGCStopWatchingOverwatch as ci, CMsgClientToGCGetDPCFavorites as cj, CMsgClientToGCSetDPCFavoriteState as ck, CMsgClientToGCOverwatchReplayError as cl, CMsgClientToGCSetEventActiveSeasonID as cm, CMsgClientToGCCreateTeamPlayerCardPack as cn, CMsgClientToGCGetStickerbookRequest as co, CMsgClientToGCCreateStickerbookPageRequest as cp, CMsgClientToGCDeleteStickerbookPageRequest as cq, CMsgClientToGCPlaceStickersRequest as cr, CMsgClientToGCPlaceCollectionStickersRequest as cs, CMsgClientToGCOrderStickerbookTeamPageRequest as ct, CMsgClientToGCSetHeroSticker as cu, CMsgClientToGCGetHeroStickers as cv, CMsgClientToGCSetFavoritePage as cw, CMsgClientToGCCollectorsCacheAvailableDataRequest as cx, CMsgClientToGCUploadMatchClip as cy, CMsgClientToGCRankRequest as cz, CMsgLeaveParty as d, CMsgGCToClientPartySearchInvites as d$, CMsgDOTACompendiumRemoveAllSelections as d0, CMsgClientToGCOverworldMinigameAction as d1, CMsgClientToGCOverworldRequestTokensNeededByFriend as d2, CMsgSOSingleObject as d3, CMsgSOCacheSubscribed as d4, CMsgSOCacheUnsubscribed as d5, CMsgSOMultipleObjects as d6, CMsgSOCacheSubscriptionRefresh as d7, CMsgSOCacheSubscribedUpToDate as d8, CMsgGCToClientPollConvarRequest as d9, CMsgDOTACompendiumDataResponse as dA, CMsgDOTAGetPlayerMatchHistoryResponse as dB, CMsgGCNotificationsResponse as dC, CMsgGCRankedPlayerInfoSubmitResponse as dD, CMsgGCPlayerInfoSubmitResponse as dE, CMsgDOTAHasItemResponse as dF, CMsgGCToClientTournamentItemDrop as dG, CMsgGCToClientEmoticonData as dH, CMsgDOTARedeemItemResponse as dI, CMsgClientToGCGetAllHeroProgressResponse as dJ, CMsgClientToGCGetTrophyListResponse as dK, CMsgGCToClientTrophyAwarded as dL, CMsgDOTAProfileCard as dM, CMsgGCToClientHeroStatueCreateResult as dN, CMsgGCRerollPlayerChallengeResponse as dO, CMsgClientToGCGetAllHeroOrderResponse as dP, CMsgClientToGCPlayerCardSpecificPurchaseResponse as dQ, CMsgGCToClientGetFilteredPlayersResponse as dR, CMsgGCToClientRemoveFilteredPlayerResponse as dS, CMsgGCToClientPlayerBeaconState as dT, CMsgGCToClientPartyBeaconUpdate as dU, CMsgGCToClientPartySearchInvite as dV, CMsgGCToClientRequestActiveBeaconPartiesResponse as dW, CMsgGCToClientManageFavoritesResponse as dX, CMsgGCToClientJoinPartyFromBeaconResponse as dY, CMsgGCToClientGetFavoritePlayersResponse as dZ, CMsgGCToClientVerifyFavoritePlayersResponse as d_, CMsgGCToClientPollConvarResponse as da, CMsgGCToClientRequestDropped as db, CMsgClientWelcome as dc, CMsgConnectionStatus as dd, CMsgPartyInviteResponse as de, CMsgLobbyInviteResponse as df, CMsgGCToClientPollFileRequest as dg, CMsgGCToClientPollFileResponse as dh, CMsgGCToClientApplyRemoteConVars as di, CMsgGCToClientAggregateMetricsBackoff as dj, CMsgInitialQuestionnaireResponse as dk, CMsgSpectateFriendGameResponse as dl, CMsgDOTAReportsRemainingResponse as dm, CMsgDOTASubmitPlayerReportResponse as dn, CMsgWatchGameResponse as dp, CMsgGCMatchDetailsResponse as dq, CMsgDOTAMatchmakingStatsResponse as dr, CMsgDOTASetMatchHistoryAccessResponse as ds, CMsgUpgradeLeagueItemResponse as dt, CMsgGCGetHeroStandingsResponse as du, CMsgGCItemEditorReservationsResponse as dv, CMsgGCItemEditorReserveItemDefResponse as dw, CMsgGCItemEditorReleaseReservationResponse as dx, CMsgDOTASetProfilePrivacyResponse as dy, CMsgDOTAGetEventPointsResponse as dz, CMsgServerAvailable as e, CMsgClientToGCCavernCrawlUseItemOnPathResponse as e$, CMsgClientToGCPurchaseLabyrinthBlessingsResponse as e0, CMsgGCToClientPurchaseFilteredPlayerSlotResponse as e1, CMsgGCToClientUpdateFilteredPlayerNoteResponse as e2, CMsgGCToClientPlayerStatsResponse as e3, CMsgGCToClientFindTopSourceTVGamesResponse as e4, CMsgGCToClientSocialFeedPostCommentResponse as e5, CMsgGCToClientCustomGamesFriendsPlayedResponse as e6, CMsgGCToClientFriendsPlayedCustomGameResponse as e7, CMsgGCToClientSocialFeedPostMessageResponse as e8, CMsgGCToClientTopLeagueMatchesResponse as e9, CMsgClientToGCJoinPlaytestResponse as eA, CMsgGCToClientBattlePassRollupListRequest as eB, CMsgGCToClientBattlePassRollupListResponse as eC, CMsgDOTAClaimEventActionResponse as eD, CMsgDOTAGetPeriodicResourceResponse as eE, CMsgDOTASubmitTriviaQuestionAnswerResponse as eF, CMsgDOTAStartTriviaSessionResponse as eG, CMsgDOTAAnchorPhoneNumberResponse as eH, CMsgDOTAUnanchorPhoneNumberResponse as eI, CMsgDOTAClientToGCQuickStatsResponse as eJ, CMsgDOTASelectionPriorityChoiceResponse as eK, CMsgDOTAGameAutographRewardResponse as eL, CMsgDOTADestroyLobbyResponse as eM, CMsgPurchaseItemWithEventPointsResponse as eN, CMsgPurchaseHeroRandomRelicResponse as eO, CMsgClientToGCClaimEventActionUsingItemResponse as eP, CMsgPartyReadyCheckResponse as eQ, CMsgDOTAGetRecentPlayTimeFriendsResponse as eR, CMsgGCToClientCommendNotification as eS, CMsgProfileResponse as eT, CMsgProfileUpdateResponse as eU, CMsgHeroGlobalDataResponse as eV, CMsgClientToGCRequestPlusWeeklyChallengeResultResponse as eW, CMsgPrivateMetadataKeyResponse as eX, CMsgGCToClientCavernCrawlMapPathCompleted as eY, CMsgClientToGCCavernCrawlClaimRoomResponse as eZ, CMsgClientToGCCavernCrawlUseItemOnRoomResponse as e_, CMsgGCToClientTopFriendMatchesResponse as ea, CMsgClientToGCMatchesMinimalResponse as eb, CMsgGCToClientMatchGroupsVersion as ec, CMsgClientToGCGetQuestProgressResponse as ed, CMsgGCToClientMatchSignedOut as ee, CMsgGCGetHeroStatsHistoryResponse as ef, CMsgGCToClientWageringResponse as eg, CMsgClientToGCHasPlayerVotedForMVPResponse as eh, CMsgClientToGCVoteForMVPResponse as ei, CMsgClientToGCTeammateStatsResponse as ej, CMsgClientToGCGetGiftPermissionsResponse as ek, CMsgClientToGCVoteForArcanaResponse as el, CMsgClientToGCRequestArcanaVotesRemainingResponse as em, CMsgDOTASubmitLobbyMVPVoteResponse as en, CMsgGCToClientQuestProgressUpdated as eo, CMsgGCToClientWageringUpdate as ep, CMsgGCToClientArcanaVotesUpdate as eq, CMsgClientToGCOpenPlayerCardPackResponse as er, CMsgClientToGCSelectCompendiumInGamePredictionResponse as es, CMsgClientToGCRecyclePlayerCardResponse as et, CMsgClientToGCCreatePlayerCardPackResponse as eu, CMsgGCGetPlayerCardItemInfoResponse as ev, CMsgGCToClientBattlePassRollupRequest as ew, CMsgGCToClientBattlePassRollupResponse as ex, CMsgClientToGCTransferSeasonalMMRResponse as ey, CMsgGCToClientPlaytestStatus as ez, CMsgLANServerAvailable as f, CMsgClientToGCRecalibrateMMRResponse as f$, CMsgClientToGCCavernCrawlRequestMapStateResponse as f0, CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse as f1, CMsgGCToClientRecordContestVoteResponse as f2, CMsgDevGrantEventPointsResponse as f3, CMsgDevGrantEventActionResponse as f4, CMsgDevResetEventStateResponse as f5, CMsgConsumeEventSupportGrantItemResponse as f6, CMsgGCToClientClaimEventActionUsingItemCompleted as f7, CMsgGCToClientCavernCrawlMapUpdated as f8, CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse as f9, CMsgGCToClientGuildMembershipUpdated as fA, CMsgClientToGCAcceptInviteToGuildResponse as fB, CMsgClientToGCSetGuildRoleOrderResponse as fC, CMsgClientToGCRequestGuildFeedResponse as fD, CMsgClientToGCRequestAccountGuildEventDataResponse as fE, CMsgGCToClientAccountGuildEventDataUpdated as fF, CMsgClientToGCRequestActiveGuildContractsResponse as fG, CMsgGCToClientActiveGuildContractsUpdated as fH, CMsgGCToClientGuildFeedUpdated as fI, CMsgClientToGCSelectGuildContractResponse as fJ, CMsgClientToGCAddPlayerToGuildChatResponse as fK, CMsgClientToGCUnderDraftSellResponse as fL, CMsgClientToGCUnderDraftResponse as fM, CMsgClientToGCUnderDraftRedeemRewardResponse as fN, CMsgClientToGCRequestActiveGuildChallengeResponse as fO, CMsgGCToClientActiveGuildChallengeUpdated as fP, CMsgClientToGCRequestReporterUpdatesResponse as fQ, CMsgClientToGCRequestGuildEventMembersResponse as fR, CMsgClientToGCReportGuildContentResponse as fS, CMsgClientToGCRequestAccountGuildPersonaInfoResponse as fT, CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse as fU, CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse as fV, CMsgClientToGCUnderDraftRollBackBenchResponse as fW, CMsgGCToClientGuildMembersDataUpdated as fX, CMsgClientToGCGetOWMatchDetailsResponse as fY, CMsgClientToGCSubmitOWConvictionResponse as fZ, CMsgClientToGCClaimLeaderboardRewardsResponse as f_, CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse as fa, CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse as fb, CMsgClientToGCRequestContestVotesResponse as fc, CMsgClientToGCMVPVoteTimeoutResponse as fd, CMsgClientToGCSubmitPlayerMatchSurveyResponse as fe, CMsgDevDeleteEventActionsResponse as ff, CMsgDOTASubmitPlayerAvoidRequestResponse as fg, CMsgGCtoGCAssociatedExploiterAccountInfoResponse as fh, CMsgGCToClientVACReminder as fi, CMsgClientToGCUnderDraftBuyResponse as fj, CMsgClientToGCUnderDraftRerollResponse as fk, CMsgClientToGCCreateGuildResponse as fl, CMsgClientToGCSetGuildInfoResponse as fm, CMsgClientToGCAddGuildRoleResponse as fn, CMsgClientToGCModifyGuildRoleResponse as fo, CMsgClientToGCRemoveGuildRoleResponse as fp, CMsgClientToGCJoinGuildResponse as fq, CMsgClientToGCLeaveGuildResponse as fr, CMsgClientToGCInviteToGuildResponse as fs, CMsgClientToGCDeclineInviteToGuildResponse as ft, CMsgClientToGCCancelInviteToGuildResponse as fu, CMsgClientToGCKickGuildMemberResponse as fv, CMsgClientToGCSetGuildMemberRoleResponse as fw, CMsgClientToGCRequestGuildDataResponse as fx, CMsgGCToClientGuildDataUpdated as fy, CMsgClientToGCRequestGuildMembershipResponse as fz, CMsgInviteToLobby as g, CBroadcastPostGameDataFrameRequest as g$, CMsgClientToGCChinaSSAURLResponse as g0, CMsgClientToGCChinaSSAAcceptedResponse as g1, CMsgGCToClientOverwatchCasesAvailable as g2, CMsgClientToGCGetDPCFavoritesResponse as g3, CMsgClientToGCSetDPCFavoriteStateResponse as g4, CMsgClientToGCSetEventActiveSeasonIDResponse as g5, CMsgClientToGCCreateTeamPlayerCardPackResponse as g6, CMsgClientToGCGetStickerbookResponse as g7, CMsgClientToGCCreateStickerbookPageResponse as g8, CMsgClientToGCDeleteStickerbookPageResponse as g9, CMsgClientToGCOverworldFeedbackResponse as gA, CMsgClientToGCOverworldVisitEncounterResponse as gB, CMsgClientToGCOverworldGiftTokensResponse as gC, CMsgClientToGCDotaLabsFeedbackResponse as gD, CMsgClientToGCOverworldGetDynamicImageResponse as gE, CMsgDOTACompendiumRemoveAllSelectionsResponse as gF, CMsgClientToGCOverworldMinigameActionResponse as gG, CMsgClientToGCOverworldRequestTokensNeededByFriendResponse as gH, GCConnectionStatus as gI, EDOTAGCMsg as gJ, EGCBaseClientMsg as gK, EGCBaseMsg as gL, ESOMsg as gM, CExtraMsgBlock as gN, EDOTAMMRBoostType as gO, dotaGcTeam as gP, CSOEconItemAttribute as gQ, CSOEconItemEquipped as gR, CMsgTrackedStat as gS, CMsgOverworldTokenQuantity as gT, CMvpData as gU, EEvent as gV, CMsgDOTAMatch as gW, ELeagueRegion as gX, ELeagueDivision as gY, CAttributeItemDynamicRecipeComponent as gZ, CAttributeString as g_, CMsgClientToGCPlaceStickersResponse as ga, CMsgClientToGCPlaceCollectionStickersResponse as gb, CMsgClientToGCOrderStickerbookTeamPageResponse as gc, CMsgClientToGCSetHeroStickerResponse as gd, CMsgClientToGCGetHeroStickersResponse as ge, CMsgClientToGCSetFavoritePageResponse as gf, CMsgGCToClientCollectorsCacheAvailableDataResponse as gg, CMsgGCToClientUploadMatchClipResponse as gh, CMsgGCToClientRankResponse as gi, CMsgGCToClientRankUpdate as gj, CMsgGCToClientMapStatsResponse as gk, CMsgClientToGCRoadToTIGetQuestsResponse as gl, CMsgClientToGCRoadToTIGetActiveQuestResponse as gm, CMsgGCToClientRoadToTIQuestDataUpdated as gn, CMsgClientToGCRoadToTIUseItemResponse as go, CMsgClientToGCOverworldGetUserDataResponse as gp, CMsgClientToGCOverworldCompletePathResponse as gq, CMsgClientToGCOverworldClaimEncounterRewardResponse as gr, CMsgClientToGCOverworldDevResetAllResponse as gs, CMsgClientToGCOverworldDevResetNodeResponse as gt, CMsgClientToGCOverworldDevGrantTokensResponse as gu, CMsgClientToGCOverworldDevClearInventoryResponse as gv, CMsgGCToClientOverworldUserDataUpdated as gw, CMsgClientToGCOverworldMoveToNodeResponse as gx, CMsgClientToGCNewBloomGiftResponse as gy, CMsgClientToGCOverworldTradeTokensResponse as gz, CMsgGCToGCPerformManualOp as h, CMsgApplyPennantUpgrade as h$, CCommunityClanAnnouncementInfo as h0, CCommunityGetClanAnnouncementsRequest as h1, CCommunityGetClanAnnouncementsResponse as h2, CDOTABroadcasterInfo as h3, CDOTAClientHardwareSpecs as h4, CDOTALobbyMatchQualityData as h5, CDOTAReplayDownloadInfo as h6, CDOTAReplayDownloadInfo_Highlight as h7, CDOTASaveGame as h8, CDOTASaveGame_Player as h9, CMatchHeroSelectEvent as hA, CMatchPlayerAbilityUpgrade as hB, CMatchPlayerPermanentBuff as hC, CMatchPlayerTimedCustomStat as hD, CMatchPlayerTimedStatAverages as hE, CMatchPlayerTimedStatStdDeviations as hF, CMatchPlayerTimedStats as hG, CMatchTeamTimedStats as hH, CMsgAccountGuildEventData as hI, CMsgAccountGuildInvite as hJ, CMsgAccountGuildMemberships as hK, CMsgAccountGuildsPersonaInfo as hL, CMsgActivatePlusFreeTrialResponse as hM, CMsgActivatePlusFreeTrialResponse_Result as hN, CMsgAddItemToSocket as hO, CMsgAddItemToSocketData as hP, CMsgAddItemToSocketResponse as hQ, CMsgAddItemToSocketResponse_EAddGem as hR, CMsgAddSocket as hS, CMsgAddSocketResponse as hT, CMsgAddSocketResponse_EAddSocket as hU, CMsgAdditionalLobbyStartupAccountData as hV, CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange as hW, CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange as hX, CMsgAdjustItemEquippedState as hY, CMsgApplyAutograph as hZ, CMsgApplyEggEssence as h_, CDOTASaveGame_SaveInstance as ha, CDOTASaveGame_SaveInstance_PlayerPositions as hb, CDotaMsgPredictionResult as hc, CDotaMsgPredictionResult_Prediction as hd, CDotaMsgPredictionResult_Prediction_EResult as he, CGCMsgCompressedMsgToClient as hf, CGCMsgGetIPLocationResponse as hg, CGCStorePurchaseInitLineItem as hh, CGCStoreRechargeRedirectLineItem as hi, CGCSystemMsgGetAccountDetails as hj, CGCSystemMsgGetAccountDetailsResponse as hk, CGCToGCMsgMasterAck as hl, CGCToGCMsgMasterAckResponse as hm, CGCToGCMsgMasterAck_Process as hn, CGCToGCMsgMasterStartupComplete as ho, CGCToGCMsgMasterStartupComplete_GCInfo as hp, CGCToGCMsgRouted as hq, CGCToGCMsgRoutedReply as hr, CIPLocationInfo as hs, CLobbyBroadcastChannelInfo as ht, CLobbyGuildChallenge as hu, CLobbyGuildDetails as hv, CLobbyTeamDetails as hw, CLobbyTimedRewardDetails as hx, CMatchAdditionalUnitInventory as hy, CMatchClip as hz, CMsgGCToGCPerformManualOpCompleted as i, CMsgClientToGCGetTrophyListResponse_Trophy as i$, CMsgApplyRemoteConVars as i0, CMsgApplyRemoteConVars_ConVar as i1, CMsgApplyStrangePart as i2, CMsgArcanaVoteMatchVotes as i3, CMsgAvailablePredictions as i4, CMsgAvailablePredictions_MatchPrediction as i5, CMsgBannedWordList as i6, CMsgBattleCupVictory as i7, CMsgClientPingData as i8, CMsgClientToGCAcceptInviteToGuildResponse_EResponse as i9, CMsgClientToGCCreateStaticRecipeResponse_EResponse as iA, CMsgClientToGCCreateStaticRecipeResponse_InputError as iB, CMsgClientToGCCreateStaticRecipeResponse_OutputItem as iC, CMsgClientToGCCreateStaticRecipe_Item as iD, CMsgClientToGCCreateStickerbookPageResponse_EResponse as iE, CMsgClientToGCCreateTeamPlayerCardPackResponse_Result as iF, CMsgClientToGCDeclineInviteToGuildResponse_EResponse as iG, CMsgClientToGCDeleteStickerbookPageResponse_EResponse as iH, CMsgClientToGCDotaLabsFeedbackResponse_EResponse as iI, CMsgClientToGCEquipItems as iJ, CMsgClientToGCEquipItemsResponse as iK, CMsgClientToGCGetDPCFavoritesResponse_EResponse as iL, CMsgClientToGCGetDPCFavoritesResponse_Favorite as iM, CMsgClientToGCGetEventGoals as iN, CMsgClientToGCGetGiftPermissionsResponse_FriendPermission as iO, CMsgClientToGCGetHeroStickersResponse_EResponse as iP, CMsgClientToGCGetInFlightItemCharges as iQ, CMsgClientToGCGetInFlightItemChargesResponse as iR, CMsgClientToGCGetInFlightItemChargesResponse_EResponse as iS, CMsgClientToGCGetLimitedItemPurchaseQuantity as iT, CMsgClientToGCGetLimitedItemPurchaseQuantityResponse as iU, CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse as iV, CMsgClientToGCGetOWMatchDetailsResponse_EResponse as iW, CMsgClientToGCGetOWMatchDetailsResponse_Marker as iX, CMsgClientToGCGetQuestProgressResponse_Challenge as iY, CMsgClientToGCGetQuestProgressResponse_Quest as iZ, CMsgClientToGCGetStickerbookResponse_EResponse as i_, CMsgClientToGCAddGuildRoleResponse_EResponse as ia, CMsgClientToGCAddPlayerToGuildChatResponse_EResponse as ib, CMsgClientToGCAggregateMetrics_SingleMetric as ic, CMsgClientToGCCancelInviteToGuildResponse_EResponse as id, CMsgClientToGCCancelUnfinalizedTransactions as ie, CMsgClientToGCCancelUnfinalizedTransactionsResponse as ig, CMsgClientToGCCavernCrawlClaimRoomResponse_Result as ih, CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant as ii, CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_Result as ij, CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem as ik, CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant as il, CMsgClientToGCCavernCrawlRequestMapStateResponse_Result as im, CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge as io, CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap as ip, CMsgClientToGCCavernCrawlUseItemOnPathResponse_Result as iq, CMsgClientToGCCavernCrawlUseItemOnRoomResponse_Result as ir, CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse as is, CMsgClientToGCClaimSwagResponse as it, CMsgClientToGCClaimSwagResponse_EResponse as iu, CMsgClientToGCCreateGuildResponse_EResponse as iv, CMsgClientToGCCreatePlayerCardPackResponse_Result as iw, CMsgClientToGCCreateStaticRecipe as ix, CMsgClientToGCCreateStaticRecipeResponse as iy, CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput as iz, CMsgGCToGCReloadServerRegionSettings as j, CMsgClientToGCRequestGuildMembershipResponse_EResponse as j$, CMsgClientToGCGuildFeedRequest as j0, CMsgClientToGCIntegrityStatus_keyvalue as j1, CMsgClientToGCInviteToGuildResponse_EResponse as j2, CMsgClientToGCJoinGuildResponse_EResponse as j3, CMsgClientToGCKickGuildMemberResponse_EResponse as j4, CMsgClientToGCLeaveGuildResponse_EResponse as j5, CMsgClientToGCLookupAccountName as j6, CMsgClientToGCLookupAccountNameResponse as j7, CMsgClientToGCManageFavorites_Action as j8, CMsgClientToGCModifyGuildRoleResponse_EResponse as j9, CMsgClientToGCPlaceStickersRequest_StickerItem as jA, CMsgClientToGCPlaceStickersResponse_EResponse as jB, CMsgClientToGCPlayerCardSpecificPurchaseResponse_Result as jC, CMsgClientToGCPurchaseChargeCostItems as jD, CMsgClientToGCPurchaseChargeCostItemsResponse as jE, CMsgClientToGCPurchaseChargeCostItemsResponse_EResponse as jF, CMsgClientToGCPurchaseChargeCostItems_Item as jG, CMsgClientToGCPurchaseLabyrinthBlessingsResponse_EResponse as jH, CMsgClientToGCRecalibrateMMRResponse_EResponse as jI, CMsgClientToGCRecyclePlayerCardResponse_Result as jJ, CMsgClientToGCRemoveGuildRoleResponse_EResponse as jK, CMsgClientToGCRemoveItemAttribute as jL, CMsgClientToGCRemoveItemAttributeResponse as jM, CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute as jN, CMsgClientToGCReportGuildContentResponse_EResponse as jO, CMsgClientToGCReportGuildContent_EContentFlags as jP, CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse as jQ, CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponse as jR, CMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponse as jS, CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse as jT, CMsgClientToGCRequestActiveGuildContractsResponse_EResponse as jU, CMsgClientToGCRequestContestVotesResponse_EResponse as jV, CMsgClientToGCRequestContestVotesResponse_ItemVote as jW, CMsgClientToGCRequestEventPointLogResponseV2_LogEntry as jX, CMsgClientToGCRequestGuildDataResponse_EResponse as jY, CMsgClientToGCRequestGuildEventMembersResponse_EResponse as jZ, CMsgClientToGCRequestGuildFeedResponse_EResponse as j_, CMsgClientToGCNameItem as ja, CMsgClientToGCNameItemResponse as jb, CMsgClientToGCNameItemResponse_ENameItem as jc, CMsgClientToGCOpenPlayerCardPackResponse_Result as jd, CMsgClientToGCOrderStickerbookTeamPageResponse_EResponse as je, CMsgClientToGCOverworldClaimEncounterRewardResponse_EResponse as jf, CMsgClientToGCOverworldCompletePathResponse_EResponse as jg, CMsgClientToGCOverworldDevClearInventoryResponse_EResponse as jh, CMsgClientToGCOverworldDevGrantTokensResponse_EResponse as ji, CMsgClientToGCOverworldDevResetAllResponse_EResponse as jj, CMsgClientToGCOverworldDevResetNodeResponse_EResponse as jk, CMsgClientToGCOverworldFeedbackResponse_EResponse as jl, CMsgClientToGCOverworldGetDynamicImageResponse_EDynamicImageFormat as jm, CMsgClientToGCOverworldGetDynamicImageResponse_Image as jn, CMsgClientToGCOverworldGetUserDataResponse_EResponse as jo, CMsgClientToGCOverworldGiftTokensResponse_EResponse as jp, CMsgClientToGCOverworldMinigameActionResponse_EResponse as jq, CMsgClientToGCOverworldMoveToNodeResponse_EResponse as jr, CMsgClientToGCOverworldRequestTokensNeededByFriendResponse_EResponse as js, CMsgClientToGCOverworldTradeTokensResponse_EResponse as jt, CMsgClientToGCOverworldVisitEncounterResponse_EResponse as ju, CMsgClientToGCPackBundle as jv, CMsgClientToGCPackBundleResponse as jw, CMsgClientToGCPackBundleResponse_EPackBundle as jx, CMsgClientToGCPlaceCollectionStickersRequest_Slot as jy, CMsgClientToGCPlaceCollectionStickersResponse_EResponse as jz, CMsgGCAdditionalWelcomeMsgList as k, CMsgDOTAClaimEventActionData_GrantItemGiftData as k$, CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse_EResponse as k0, CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse_EResponse as k1, CMsgClientToGCRequestReporterUpdatesResponse_EResponse as k2, CMsgClientToGCRequestReporterUpdatesResponse_ReporterUpdate as k3, CMsgClientToGCRequestSlarkGameResult as k4, CMsgClientToGCRequestSlarkGameResultResponse as k5, CMsgClientToGCRoadToTIGetActiveQuestResponse_EResponse as k6, CMsgClientToGCRoadToTIGetQuestsResponse_EResponse as k7, CMsgClientToGCRoadToTIUseItemResponse_EResponse as k8, CMsgClientToGCSelectCompendiumInGamePredictionResponse_EResult as k9, CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle as kA, CMsgClientToGCUnpackBundle as kB, CMsgClientToGCUnpackBundleResponse as kC, CMsgClientToGCUnpackBundleResponse_EUnpackBundle as kD, CMsgClientToGCUnwrapGift as kE, CMsgClientToGCUpdateComicBookStatType as kF, CMsgClientToGCUpdateComicBookStats_LanguageStats as kG, CMsgClientToGCUpdateComicBookStats_SingleStat as kH, CMsgClientToGCUpdatePartyBeacon_Action as kI, CMsgClientToGCVoteForArcanaResponse_Result as kJ, CMsgClientToGCWrapAndDeliverGift as kK, CMsgClientToGCWrapAndDeliverGiftResponse as kL, CMsgClientWelcome_Location as kM, CMsgConsumableUsage as kN, CMsgCraftStatue as kO, CMsgCraftingResponse as kP, CMsgCustomGameInstallStatus as kQ, CMsgCustomGameWhitelist as kR, CMsgCustomGameWhitelistForEdit as kS, CMsgCustomGameWhitelistForEdit_WhitelistEntry as kT, CMsgDOTAAnchorPhoneNumberResponse_Result as kU, CMsgDOTABotDebugInfo as kV, CMsgDOTABotDebugInfo_Bot as kW, CMsgDOTABotDebugInfo_Bot_Action as kX, CMsgDOTABotDebugInfo_Bot_Mode as kY, CMsgDOTABroadcastTimelineEvent as kZ, CMsgDOTAClaimEventActionData as k_, CMsgClientToGCSelectCompendiumInGamePrediction_Prediction as ka, CMsgClientToGCSelectGuildContractResponse_EResponse as kb, CMsgClientToGCSetDPCFavoriteStateResponse_EResponse as kc, CMsgClientToGCSetEventActiveSeasonIDResponse_EResponse as kd, CMsgClientToGCSetFavoritePageResponse_EResponse as ke, CMsgClientToGCSetGuildInfoResponse_EResponse as kf, CMsgClientToGCSetGuildMemberRoleResponse_EResponse as kg, CMsgClientToGCSetGuildRoleOrderResponse_EResponse as kh, CMsgClientToGCSetHeroStickerResponse_EResponse as ki, CMsgClientToGCSetItemInventoryCategory as kj, CMsgClientToGCSetItemStyle as kk, CMsgClientToGCSetItemStyleResponse as kl, CMsgClientToGCSetItemStyleResponse_ESetStyle as km, CMsgClientToGCSetProfileCardSlots_CardSlot as kn, CMsgClientToGCSubmitOWConvictionResponse_EResponse as ko, CMsgClientToGCSubmitPlayerMatchSurveyResponse_EResponse as kp, CMsgClientToGCSurvivorsGameTelemetryData as kq, CMsgClientToGCSurvivorsGameTelemetryDataResponse as kr, CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse as ks, CMsgClientToGCSurvivorsPowerUpTelemetryData as kt, CMsgClientToGCTeammateStatsResponse_TeammateStat as ku, CMsgClientToGCUnlockCrate as kv, CMsgClientToGCUnlockCrateResponse as kw, CMsgClientToGCUnlockCrateResponse_Item as kx, CMsgClientToGCUnlockItemStyle as ky, CMsgClientToGCUnlockItemStyleResponse as kz, CMsgGCToServerApplyRemoteConVars as l, CMsgDOTARealtimeGameStats_BuildingDetails as l$, CMsgDOTAClaimEventActionResponse_ActionListRewardData as l0, CMsgDOTAClaimEventActionResponse_GrantedRewardData as l1, CMsgDOTAClaimEventActionResponse_LootListRewardData as l2, CMsgDOTAClaimEventActionResponse_MysteryItemRewardData as l3, CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData as l4, CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData_TokenQuantity as l5, CMsgDOTAClaimEventActionResponse_ResultCode as l6, CMsgDOTAClientToGCQuickStatsResponse_SimpleStats as l7, CMsgDOTACombatLogEntry as l8, CMsgDOTACompendiumData as l9, CMsgDOTAMutationList_Mutation as lA, CMsgDOTAPartyRichPresence as lB, CMsgDOTAPartyRichPresence_Member as lC, CMsgDOTAPartyRichPresence_WeekendTourney as lD, CMsgDOTAPopup_PopupID as lE, CMsgDOTAPostGameItemAwardNotification as lF, CMsgDOTAProfileCard_EStatID as lG, CMsgDOTAProfileCard_Slot as lH, CMsgDOTAProfileCard_Slot_Emoticon as lI, CMsgDOTAProfileCard_Slot_Hero as lJ, CMsgDOTAProfileCard_Slot_Item as lK, CMsgDOTAProfileCard_Slot_Stat as lL, CMsgDOTAProfileCard_Slot_Team as lM, CMsgDOTAProfileCard_Slot_Trophy as lN, CMsgDOTAProfileTickets as lO, CMsgDOTAProfileTickets_LeaguePass as lP, CMsgDOTARealtimeGameStats as lQ, CMsgDOTARealtimeGameStatsTerse as lR, CMsgDOTARealtimeGameStatsTerse_BuildingDetails as lS, CMsgDOTARealtimeGameStatsTerse_GraphData as lT, CMsgDOTARealtimeGameStatsTerse_MatchDetails as lU, CMsgDOTARealtimeGameStatsTerse_PickBanDetails as lV, CMsgDOTARealtimeGameStatsTerse_PlayerDetails as lW, CMsgDOTARealtimeGameStatsTerse_TeamDetails as lX, CMsgDOTARealtimeGameStats_AbilityDetails as lY, CMsgDOTARealtimeGameStats_AbilityList as lZ, CMsgDOTARealtimeGameStats_BroadcasterDetails as l_, CMsgDOTACompendiumSelection as la, CMsgDOTACompendiumSelectionResponse as lb, CMsgDOTADestroyLobbyResponse_Result as lc, CMsgDOTAEmoticonAccessSDO as ld, CMsgDOTAFantasyPlayerMatchStats as le, CMsgDOTAFantasyPlayerStats as lf, CMsgDOTAGameAutographRewardResponse_Result as lg, CMsgDOTAGetEventPointsResponse_Action as lh, CMsgDOTAGetPlayerMatchHistoryResponse_Match as li, CMsgDOTALobbyMVPAwarded as lj, CMsgDOTALobbyRichPresence as lk, CMsgDOTAMatchMinimal as ll, CMsgDOTAMatchMinimal_Player as lm, CMsgDOTAMatchMinimal_Tourney as ln, CMsgDOTAMatchVotes as lo, CMsgDOTAMatchVotes_PlayerVote as lp, CMsgDOTAMatch_BroadcasterChannel as lq, CMsgDOTAMatch_BroadcasterInfo as lr, CMsgDOTAMatch_Coach as ls, CMsgDOTAMatch_CustomGameData as lt, CMsgDOTAMatch_Player as lu, CMsgDOTAMatch_Player_CustomGameData as lv, CMsgDOTAMatch_Player_HeroDamageReceived as lw, CMsgDOTAMatch_Player_HeroDamageType as lx, CMsgDOTAMatch_ReplayState as ly, CMsgDOTAMutationList as lz, CMsgClientToGCIntegrityStatus as m, CMsgGCGetHeroStatsHistoryResponse_EResponse as m$, CMsgDOTARealtimeGameStats_GraphData as m0, CMsgDOTARealtimeGameStats_GraphData_LocationStats as m1, CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats as m2, CMsgDOTARealtimeGameStats_GraphData_eLocation as m3, CMsgDOTARealtimeGameStats_GraphData_eStat as m4, CMsgDOTARealtimeGameStats_HeroToHeroStats as m5, CMsgDOTARealtimeGameStats_ItemDetails as m6, CMsgDOTARealtimeGameStats_KillDetails as m7, CMsgDOTARealtimeGameStats_MatchDetails as m8, CMsgDOTARealtimeGameStats_PickBanDetails as m9, CMsgDevNewItemRequest as mA, CMsgDevNewItemRequestResponse as mB, CMsgDevUnlockAllItemStyles as mC, CMsgDevUnlockAllItemStylesResponse as mD, CMsgDraftTriviaVoteCount as mE, CMsgEconPlayerStrangeCountAdjustment as mF, CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment as mG, CMsgEventActionData as mH, CMsgEventGoals as mI, CMsgEventGoals_EventGoal as mJ, CMsgEventTipsSummaryRequest as mK, CMsgEventTipsSummaryResponse as mL, CMsgEventTipsSummaryResponse_Tipper as mM, CMsgExtractGems as mN, CMsgExtractGemsResponse as mO, CMsgExtractGemsResponse_EExtractGems as mP, CMsgFindGuildByTagResponse as mQ, CMsgFindGuildByTagResponse_EResponse as mR, CMsgGCAddGiftItem as mS, CMsgGCAssertJobData as mT, CMsgGCClientPing as mU, CMsgGCClientVersionUpdated as mV, CMsgGCConCommand as mW, CMsgGCEconSQLWorkItemEmbeddedRollbackData as mX, CMsgGCGetAccountSubscriptionItem as mY, CMsgGCGetAccountSubscriptionItemResponse as mZ, CMsgGCGetHeroStandingsResponse_Hero as m_, CMsgDOTARealtimeGameStats_PlayerDetails as ma, CMsgDOTARealtimeGameStats_TeamDetails as mb, CMsgDOTARedeemItemResponse_EResultCode as mc, CMsgDOTARequestMatchesResponse as md, CMsgDOTARequestMatchesResponse_Series as me, CMsgDOTARequestMatchesSkillLevel as mf, CMsgDOTASDOHeroStatsHistory as mg, CMsgDOTASeasonPredictions as mh, CMsgDOTASeasonPredictions_Prediction as mi, CMsgDOTASeasonPredictions_Prediction_Answers as mj, CMsgDOTASeasonPredictions_Prediction_EAnswerType as mk, CMsgDOTASeasonPredictions_Prediction_EPredictionType as ml, CMsgDOTASelectionPriorityChoiceResponse_Result as mm, CMsgDOTASeries as mn, CMsgDOTASeries_LiveGame as mo, CMsgDOTASeries_TeamInfo as mp, CMsgDOTASubmitPlayerReportResponseV2_EResult as mq, CMsgDOTASubmitPlayerReportResponse_EResult as mr, CMsgDOTATriviaCurrentQuestions as ms, CMsgDOTATriviaQuestion as mt, CMsgDOTATriviaQuestionAnswersSummary as mu, CMsgDOTAUnanchorPhoneNumberResponse_Result as mv, CMsgDOTAUpdateMatchManagementStats as mw, CMsgDOTAUpdateMatchmakingStats as mx, CMsgDOTAWelcome as my, CMsgDOTAWelcome_CExtraMsg as mz, CMsgClientToGCAggregateMetrics as n, CMsgGCToClientBattlePassRollupTI9 as n$, CMsgGCGetHeroTimedStatsResponse as n0, CMsgGCGetHeroTimedStatsResponse_RankChunkedStats as n1, CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer as n2, CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo as n3, CMsgGCItemEditorReservation as n4, CMsgGCMultiplexMessage as n5, CMsgGCNotificationsNotification as n6, CMsgGCNotificationsUpdate as n7, CMsgGCNotificationsUpdate_EResult as n8, CMsgGCPlayerInfoSubmitResponse_EResult as n9, CMsgGCToClientBattlePassRollupInternational2016_Achievements as nA, CMsgGCToClientBattlePassRollupInternational2016_BattleCup as nB, CMsgGCToClientBattlePassRollupInternational2016_Bracket as nC, CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge as nD, CMsgGCToClientBattlePassRollupInternational2016_PlayerCard as nE, CMsgGCToClientBattlePassRollupInternational2016_Predictions as nF, CMsgGCToClientBattlePassRollupInternational2016_Questlines as nG, CMsgGCToClientBattlePassRollupInternational2016_Wagering as nH, CMsgGCToClientBattlePassRollupListResponse_EventInfo as nI, CMsgGCToClientBattlePassRollupTI10 as nJ, CMsgGCToClientBattlePassRollupTI7 as nK, CMsgGCToClientBattlePassRollupTI7_Achievements as nL, CMsgGCToClientBattlePassRollupTI7_BattleCup as nM, CMsgGCToClientBattlePassRollupTI7_Bracket as nN, CMsgGCToClientBattlePassRollupTI7_FantasyChallenge as nO, CMsgGCToClientBattlePassRollupTI7_PlayerCard as nP, CMsgGCToClientBattlePassRollupTI7_Predictions as nQ, CMsgGCToClientBattlePassRollupTI7_Questlines as nR, CMsgGCToClientBattlePassRollupTI7_Wagering as nS, CMsgGCToClientBattlePassRollupTI8 as nT, CMsgGCToClientBattlePassRollupTI8_Achievements as nU, CMsgGCToClientBattlePassRollupTI8_Bracket as nV, CMsgGCToClientBattlePassRollupTI8_CavernCrawl as nW, CMsgGCToClientBattlePassRollupTI8_FantasyChallenge as nX, CMsgGCToClientBattlePassRollupTI8_PlayerCard as nY, CMsgGCToClientBattlePassRollupTI8_Predictions as nZ, CMsgGCToClientBattlePassRollupTI8_Wagering as n_, CMsgGCRankedPlayerInfoSubmitResponse_EResult as na, CMsgGCRequestStoreSalesData as nb, CMsgGCRequestStoreSalesDataResponse as nc, CMsgGCRequestStoreSalesDataResponse_Price as nd, CMsgGCRequestStoreSalesDataUpToDateResponse as ne, CMsgGCRequestSubGCSessionInfo as nf, CMsgGCRequestSubGCSessionInfoResponse as ng, CMsgGCRerollPlayerChallengeResponse_EResult as nh, CMsgGCServerVersionUpdated as ni, CMsgGCSetItemPosition as nj, CMsgGCStorePurchaseCancel as nk, CMsgGCStorePurchaseCancelResponse as nl, CMsgGCStorePurchaseFinalize as nm, CMsgGCStorePurchaseFinalizeResponse as nn, CMsgGCStorePurchaseInit as no, CMsgGCStorePurchaseInitResponse as np, CMsgGCToClientBattlePassRollupFall2016 as nq, CMsgGCToClientBattlePassRollupFall2016_Achievements as nr, CMsgGCToClientBattlePassRollupFall2016_BattleCup as ns, CMsgGCToClientBattlePassRollupFall2016_Bracket as nt, CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge as nu, CMsgGCToClientBattlePassRollupFall2016_PlayerCard as nv, CMsgGCToClientBattlePassRollupFall2016_Predictions as nw, CMsgGCToClientBattlePassRollupFall2016_Questlines as nx, CMsgGCToClientBattlePassRollupFall2016_Wagering as ny, CMsgGCToClientBattlePassRollupInternational2016 as nz, CMsgGCToServerSteamLearnAccessTokensChanged as o, CMsgGCToGCMasterBroadcastMessage as o$, CMsgGCToClientBattlePassRollupWinter2017 as o0, CMsgGCToClientBattlePassRollupWinter2017_Achievements as o1, CMsgGCToClientBattlePassRollupWinter2017_BattleCup as o2, CMsgGCToClientBattlePassRollupWinter2017_Bracket as o3, CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge as o4, CMsgGCToClientBattlePassRollupWinter2017_PlayerCard as o5, CMsgGCToClientBattlePassRollupWinter2017_Predictions as o6, CMsgGCToClientBattlePassRollupWinter2017_Questlines as o7, CMsgGCToClientBattlePassRollupWinter2017_Wagering as o8, CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo as o9, CMsgGCToGCBannedWordListUpdated as oA, CMsgGCToGCBetaDeleteItems as oB, CMsgGCToGCBroadcastConsoleCommand as oC, CMsgGCToGCBroadcastMessageFromSub as oD, CMsgGCToGCCanUseDropRateBonus as oE, CMsgGCToGCClientServerVersionsUpdated as oF, CMsgGCToGCConsoleOutput as oG, CMsgGCToGCConsoleOutput_OutputLine as oH, CMsgGCToGCDirtySDOCache as oI, CMsgGCToGCFlushSteamInventoryCache as oJ, CMsgGCToGCFlushSteamInventoryCache_Key as oK, CMsgGCToGCForwardAccountDetails as oL, CMsgGCToGCGetInfuxIntervalStats as oM, CMsgGCToGCGetInfuxIntervalStatsResponse as oN, CMsgGCToGCGetUserServerMembers as oO, CMsgGCToGCGetUserServerMembersResponse as oP, CMsgGCToGCGetUserSessionServer as oQ, CMsgGCToGCGetUserSessionServerResponse as oR, CMsgGCToGCGrantAccountRolledItems as oS, CMsgGCToGCGrantAccountRolledItems_Item as oT, CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry as oU, CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute as oV, CMsgGCToGCGrantSelfMadeItemToAccount as oW, CMsgGCToGCInternalTestMsg as oX, CMsgGCToGCLeaguePredictions as oY, CMsgGCToGCLoadSessionSOCache as oZ, CMsgGCToGCLoadSessionSOCacheResponse as o_, CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote as oa, CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote_EVoteType as ob, CMsgGCToClientCurrencyPricePoints as oc, CMsgGCToClientCurrencyPricePoints_Currency as od, CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame as oe, CMsgGCToClientGetFavoritePlayersResponse_EResponse as of, CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry as og, CMsgGCToClientGetFilteredPlayersResponse_Result as oh, CMsgGCToClientGuildUnderDraftGoldUpdated as oi, CMsgGCToClientInFlightChargesUpdated as oj, CMsgGCToClientInFlightChargesUpdated_ItemCharges as ok, CMsgGCToClientJoinPartyFromBeaconResponse_EResponse as ol, CMsgGCToClientManageFavoritesResponse_EResponse as om, CMsgGCToClientMapStatsResponse_EResponse as on, CMsgGCToClientPurchaseFilteredPlayerSlotResponse_Result as oo, CMsgGCToClientQuestProgressUpdated_Challenge as op, CMsgGCToClientRankResponse_EResultCode as oq, CMsgGCToClientRecordContestVoteResponse_EResult as or, CMsgGCToClientRemoveFilteredPlayerResponse_Result as os, CMsgGCToClientRequestActiveBeaconPartiesResponse_EResponse as ot, CMsgGCToClientStoreTransactionCompleted as ou, CMsgGCToClientTopWeekendTourneyGames as ov, CMsgGCToClientUpdateFilteredPlayerNoteResponse_Result as ow, CMsgGCToClientUploadMatchClipResponse_EResponse as ox, CMsgGCToClientVerifyFavoritePlayersResponse_Result as oy, CMsgGCToGCAddSubscriptionTime as oz, CMsgGCToServerSteamLearnUseHTTP as p, CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData as p$, CMsgGCToGCMasterDestroyCache as p0, CMsgGCToGCMasterSubscribeToCache as p1, CMsgGCToGCMasterSubscribeToCacheAsync as p2, CMsgGCToGCMasterSubscribeToCacheResponse as p3, CMsgGCToGCMasterUnsubscribeFromCache as p4, CMsgGCToGCPingRequest as p5, CMsgGCToGCPingResponse as p6, CMsgGCToGCPurchaseSucceeded as p7, CMsgGCToGCRefreshSOCache as p8, CMsgGCToGCSOCacheSubscribe as p9, CMsgGameDataHeroes as pA, CMsgGameDataItemAbilityList as pB, CMsgGameDataItemAbilityList_ItemAbilityInfo as pC, CMsgGameDataItemAbilityList_ItemAbilityInfo_Recipe as pD, CMsgGameDataItems as pE, CMsgGameDataSpecialValueBonus as pF, CMsgGameDataSpecialValues as pG, CMsgGenericResult as pH, CMsgGlobalHeroAverages as pI, CMsgGlobalMapStats as pJ, CMsgGuildActiveContracts as pK, CMsgGuildChallenge as pL, CMsgGuildContract as pM, CMsgGuildContractSlot as pN, CMsgGuildData as pO, CMsgGuildEventMember as pP, CMsgGuildFeedEvent as pQ, CMsgGuildInfo as pR, CMsgGuildInvite as pS, CMsgGuildLeaderboardCombinedResponse as pT, CMsgGuildMember as pU, CMsgGuildPersonaInfo as pV, CMsgGuildRole as pW, CMsgGuildSummary as pX, CMsgGuildSummary_EventPoints as pY, CMsgHeroGlobalDataAllHeroes as pZ, CMsgHeroGlobalDataHeroesAlliesAndEnemies as p_, CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions as pa, CMsgGCToGCSOCacheUnsubscribe as pb, CMsgGCToGCSelfPing as pc, CMsgGCToGCStoreProcessCDKeyTransaction as pd, CMsgGCToGCStoreProcessCDKeyTransactionResponse as pe, CMsgGCToGCStoreProcessSettlement as pf, CMsgGCToGCStoreProcessSettlementResponse as pg, CMsgGCToGCSubGCStarting as ph, CMsgGCToGCUniverseStartup as pi, CMsgGCToGCUniverseStartupResponse as pj, CMsgGCToGCUpdateSQLKeyValue as pk, CMsgGCToGCUpdateSessionStats as pl, CMsgGCToGCUpdateSubscriptionItems as pm, CMsgGCToGCUpdateWelcomeMsg as pn, CMsgGCToGCWebAPIAccountChanged as po, CMsgGCUpdateSubGCSessionInfo as pp, CMsgGCUpdateSubGCSessionInfo_CMsgUpdate as pq, CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account as pr, CMsgGameDataAbilities as ps, CMsgGameDataAbilityOrItem as pt, CMsgGameDataAbilityOrItemList as pu, CMsgGameDataFacetAbilityBonus as pv, CMsgGameDataHero as pw, CMsgGameDataHeroList as px, CMsgGameDataHeroList_HeroInfo as py, CMsgGameDataHero_Facet as pz, CMsgDOTABroadcastNotification as q, CMsgPlayerHeroRecentAccomplishments as q$, CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData as q0, CMsgHeroGlobalDataResponse_GraphData as q1, CMsgHeroGlobalDataResponse_HeroDataPerRankChunk as q2, CMsgHeroGlobalDataResponse_WeekData as q3, CMsgHeroRoleAllRanksStats as q4, CMsgHeroRoleHeroStats as q5, CMsgHeroRoleRankStats as q6, CMsgHeroRoleStats as q7, CMsgInGamePrediction as q8, CMsgInGamePrediction_EPredictionType as q9, CMsgMatchConsumableUsage_PlayerUsage as qA, CMsgMatchEventActionGrants as qB, CMsgMatchEventActionGrants_PlayerGrants as qC, CMsgMatchTips as qD, CMsgMatchTips_SingleTip as qE, CMsgMatchmakingMatchGroupInfo as qF, CMsgOverworldEncounterData as qG, CMsgOverworldEncounterTokenQuestData_Quest as qH, CMsgOverworldEncounterTokenTreasureData_RewardOption as qI, CMsgOverworldHeroList as qJ, CMsgOverworldMatchRewards as qK, CMsgOverworldMatchRewards_Player as qL, CMsgOverworldMinigameCustomData as qM, CMsgOverworldMinigameUserData as qN, CMsgOverworldNode as qO, CMsgOverworldPath as qP, CMsgOverworldTokenCount as qQ, CMsgOverworldUserData as qR, CMsgOverworldUserData_MinigameDataEntry as qS, CMsgPartySearchPlayer as qT, CMsgPendingEventAward as qU, CMsgPeriodicResourceData as qV, CMsgPlayerCard as qW, CMsgPlayerCard_StatModifier as qX, CMsgPlayerConductScorecard as qY, CMsgPlayerConductScorecardRequest as qZ, CMsgPlayerConductScorecard_EBehaviorRating as q_, CMsgInGamePrediction_ERandomSelectionGroupT as qa, CMsgInGamePrediction_ERawValueTypeT as qb, CMsgInGamePrediction_EResolutionTypeT as qc, CMsgInGamePrediction_QueryKeyValues as qd, CMsgItemAcknowledged as qe, CMsgItemAges as qf, CMsgItemAges_MaxItemIDTimestamp as qg, CMsgLeagueWatchedGames as qh, CMsgLeagueWatchedGames_League as qi, CMsgLeagueWatchedGames_Series as qj, CMsgLeaverState as qk, CMsgLobbyAbilityDraftData as ql, CMsgLobbyBattleCupVictoryList as qm, CMsgLobbyCoachFriendRequest as qn, CMsgLobbyEventPoints_AccountPoints as qo, CMsgLobbyFeaturedGamemodeProgress_AccountProgress as qp, CMsgLobbyInitializationComplete as qq, CMsgLobbyPlayerPlusSubscriptionData as qr, CMsgLobbyPlayerPlusSubscriptionData_HeroBadge as qs, CMsgLocalServerFakeLobbyData as qt, CMsgLocalServerGuildData as qu, CMsgLookupMultipleAccountNames as qv, CMsgLookupMultipleAccountNamesResponse as qw, CMsgLookupMultipleAccountNamesResponse_Account as qx, CMsgMapStatsSnapshot as qy, CMsgMatchConsumableUsage as qz, CMsgDOTAKickedFromMatchmakingQueue as r, CMsgServerUseItem as r$, CMsgPlayerMatchRecord as r0, CMsgPlayerRecentAccomplishments as r1, CMsgPlayerRecentCommends as r2, CMsgPlayerRecentMatchInfo as r3, CMsgPlayerRecentMatchOutcomes as r4, CMsgPlayerTitleData as r5, CMsgPredictionChoice as r6, CMsgPredictionRankings as r7, CMsgPredictionRankings_Prediction as r8, CMsgPredictionRankings_PredictionLine as r9, CMsgRequestCrateItemsResponse_EResult as rA, CMsgResetStrangeGemCount as rB, CMsgResetStrangeGemCountResponse as rC, CMsgResetStrangeGemCountResponse_EResetGem as rD, CMsgRoadToTIAssignedQuest as rE, CMsgRoadToTIUserData as rF, CMsgSDOAssert as rG, CMsgSDOAssert_Request as rH, CMsgSDONoMemcached as rI, CMsgSOCacheHaveVersion as rJ, CMsgSOCacheSubscribed_SubscribedType as rK, CMsgSOCacheSubscriptionCheck as rL, CMsgSOCacheVersion as rM, CMsgSOIDOwner as rN, CMsgSOMultipleObjects_SingleObject as rO, CMsgSQLAddDropRateBonus as rP, CMsgSQLGCToGCGrantBackpackSlots as rQ, CMsgSQLGCToGCRevokeUntrustedGift as rR, CMsgSQLUpgradeBattleBooster as rS, CMsgSearchForOpenGuildsResponse as rT, CMsgSearchForOpenGuildsResponse_EResponse as rU, CMsgSearchForOpenGuildsResponse_SearchResult as rV, CMsgSerializedSOCache as rW, CMsgSerializedSOCache_Cache as rX, CMsgSerializedSOCache_Cache_Version as rY, CMsgSerializedSOCache_TypeCache as rZ, CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse as r_, CMsgPredictionResults as ra, CMsgPredictionResults_Result as rb, CMsgPredictionResults_ResultBreakdown as rc, CMsgProcessTransactionOrder as rd, CMsgProcessTransactionOrder_Item as re, CMsgProfileResponse_EResponse as rf, CMsgProfileResponse_FeaturedHero as rg, CMsgProfileResponse_MatchInfo as rh, CMsgProfileUpdateResponse_Result as ri, CMsgProtoBufHeader as rj, CMsgPullTabsData as rk, CMsgPullTabsData_Jackpot as rl, CMsgPullTabsData_Slot as rm, CMsgPurchaseItemWithEventPointsResponse_Result as rn, CMsgReadyCheckStatus as ro, CMsgReadyCheckStatus_ReadyMember as rp, CMsgRecentAccomplishments as rq, CMsgRecentMatchInfo as rr, CMsgRedeemCode as rs, CMsgRedeemCodeResponse as rt, CMsgRedeemCodeResponse_EResultCode as ru, CMsgRequestCrateEscalationLevel as rv, CMsgRequestCrateEscalationLevelResponse as rw, CMsgRequestCrateEscalationLevelResponse_EResult as rx, CMsgRequestCrateItems as ry, CMsgRequestCrateItemsResponse as rz, CMsgSpectateFriendGame as s, CMsgStickerHero as s$, CMsgSetItemPositions as s0, CMsgSetItemPositions_ItemPosition as s1, CMsgSocialFeedCommentsRequest as s2, CMsgSocialFeedCommentsResponse as s3, CMsgSocialFeedCommentsResponse_FeedComment as s4, CMsgSocialFeedCommentsResponse_Result as s5, CMsgSocialFeedRequest as s6, CMsgSocialFeedResponse as s7, CMsgSocialFeedResponse_FeedEvent as s8, CMsgSocialFeedResponse_Result as s9, CMsgSteamLearnInferenceMetadataBackendRequest as sA, CMsgSteamLearnInferenceMetadataRequest as sB, CMsgSteamLearnInferenceMetadataResponse as sC, CMsgSteamLearnInferenceMetadataResponse_AppInfo as sD, CMsgSteamLearnInferenceMetadataResponse_AppInfoEntry as sE, CMsgSteamLearnInferenceMetadataResponse_CompactTable as sF, CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry as sG, CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry as sH, CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry as sI, CMsgSteamLearnInferenceMetadataResponse_KMeans as sJ, CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster as sK, CMsgSteamLearnInferenceMetadataResponse_Range as sL, CMsgSteamLearnInferenceMetadataResponse_RowRange as sM, CMsgSteamLearnInferenceMetadataResponse_SequenceTable as sN, CMsgSteamLearnInferenceMetadataResponse_SequenceTable_Entry as sO, CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapMappingsEntry as sP, CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapValuesEntry as sQ, CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram as sR, CMsgSteamLearnInferenceMetadataResponse_StdDev as sS, CMsgSteamLearnInferenceRequest as sT, CMsgSteamLearnInferenceResponse as sU, CMsgSteamLearnRegisterDataSourceRequest as sV, CMsgSteamLearnRegisterDataSourceResponse as sW, CMsgSteamLearnServerInfo as sX, CMsgSteamLearnServerInfo_ProjectInfo as sY, CMsgSteamLearnSnapshotProjectRequest as sZ, CMsgSteamLearnSnapshotProjectResponse as s_, CMsgSortItems as sa, CMsgSpectateFriendGameResponse_EWatchLiveResult as sb, CMsgSteamLearnAccessTokens as sc, CMsgSteamLearnAccessTokens_CacheDataAccessToken as sd, CMsgSteamLearnAccessTokens_InferenceAccessToken as se, CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken as sf, CMsgSteamLearnBatchOperationRequest as sg, CMsgSteamLearnBatchOperationResponse as sh, CMsgSteamLearnCacheDataRequest as si, CMsgSteamLearnCacheDataResponse as sj, CMsgSteamLearnData as sk, CMsgSteamLearnDataElement as sl, CMsgSteamLearnDataList as sm, CMsgSteamLearnDataObject as sn, CMsgSteamLearnDataSource as so, CMsgSteamLearnDataSourceDescElement as sp, CMsgSteamLearnDataSourceDescObject as sq, CMsgSteamLearnGetAccessTokensRequest as sr, CMsgSteamLearnGetAccessTokensResponse as ss, CMsgSteamLearnInferenceBackendResponse as st, CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput as su, CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput as sv, CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput as sw, CMsgSteamLearnInferenceBackendResponse_Output as sx, CMsgSteamLearnInferenceBackendResponse_RegressionOutput as sy, CMsgSteamLearnInferenceBackendResponse_Sequence as sz, CMsgDOTAReportsRemainingRequest as t, CWorkshopGetContributorsResponse as t$, CMsgStickerHeroes as t0, CMsgStickerbook as t1, CMsgStickerbookPage as t2, CMsgStickerbookSticker as t3, CMsgStickerbookTeamPageOrderSequence as t4, CMsgSuccessfulHero as t5, CMsgSurvivorsUserData as t6, CMsgSurvivorsUserData_AttributeLevelsEntry as t7, CMsgTalentWinRates as t8, CMsgUnderDraftData as t9, CSODOTALobby as tA, CSODOTALobbyInvite as tB, CSODOTALobbyInvite_LobbyMember as tC, CSODOTALobbyMember as tD, CSODOTALobby_CExtraMsg as tE, CSODOTALobby_LobbyType as tF, CSODOTALobby_State as tG, CSODOTAMapLocationState as tH, CSODOTAParty as tI, CSODOTAPartyInvite as tJ, CSODOTAPartyInvite_PartyMember as tK, CSODOTAPartyMember as tL, CSODOTAParty_State as tM, CSODOTAPlayerChallenge as tN, CSODOTAServerLobby as tO, CSODOTAServerLobbyMember as tP, CSODOTAServerStaticLobby as tQ, CSODOTAServerStaticLobbyMember as tR, CSODOTAStaticLobby as tS, CSODOTAStaticLobbyMember as tT, CSOEconGameAccountClient as tU, CSOEconItem as tV, CSOEconItemDropRateBonus as tW, CSOEconItemTournamentPassport as tX, CSourceTVGameSmall as tY, CSourceTVGameSmall_Player as tZ, CWorkshopGetContributorsRequest as t_, CMsgUnderDraftData_BenchSlot as ta, CMsgUnderDraftData_ShopSlot as tb, CMsgUseItem as tc, CMsgUseMultipleItems as td, CMsgWatchGameResponse_WatchGameResult as te, CMvpData_MvpDatum as tf, CMvpData_MvpDatum_MvpAccolade as tg, CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType as th, CPartySearchClientParty as ti, CProtoItemHeroStatue as tj, CProtoItemSocket as tk, CProtoItemSocketAssetModifier as tl, CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY as tm, CProtoItemSocketAutograph as tn, CProtoItemSocketColor as to, CProtoItemSocketEffect as tp, CProtoItemSocketEmpty as tq, CProtoItemSocketSpectator as tr, CProtoItemSocketStaticVisuals as ts, CProtoItemSocketStrange as tt, CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY as tu, CSODOTAChatWheel as tv, CSODOTAGameAccountClient as tw, CSODOTAGameAccountClient_RoleHandicap as tx, CSODOTAGameAccountPlus as ty, CSODOTAGameHeroFavorites as tz, CMsgDOTASubmitPlayerReport as u, ELaneType as u$, CWorkshopGetItemDailyRevenueRequest as u0, CWorkshopGetItemDailyRevenueResponse as u1, CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue as u2, CWorkshopGetPackageDailyRevenueRequest as u3, CWorkshopGetPackageDailyRevenueResponse as u4, CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue as u5, CWorkshopPopulateItemDescriptionsRequest as u6, CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock as u7, CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription as u8, CWorkshopSetItemPaymentRulesRequest as u9, ECustomGameInstallStatus as uA, ECustomGameWhitelistState as uB, EDOTADraftTriviaAnswerResult as uC, EDOTAGCSessionNeed as uD, EDOTAMatchPlayerTimeCustomStat as uE, EDOTAPlayerMMRType as uF, EDOTATriviaAnswerResult as uG, EDOTATriviaQuestionCategory as uH, EDPCFavoriteType as uI, EDPCPushNotification as uJ, EDevEventRequestResult as uK, EEventActionScoreMode as uL, EGCEconBaseMsg as uM, EGCItemMsg as uN, EGCMsgInitiateTradeResponse as uO, EGCMsgResponse as uP, EGCMsgUseItemResponse as uQ, EGCPlatform as uR, EGuildAuditAction as uS, EGuildChatType as uT, EGuildEventAuditAction as uU, EHeroRelicRarity as uV, EHighPriorityMMState as uW, EItemEditorReservationResult as uX, EItemSuggestPreference as uY, ELaneSelection as uZ, ELaneSelectionFlags as u_, CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule as ua, CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule as ub, CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule as uc, CWorkshopSetItemPaymentRulesResponse as ud, DOTABehaviorLevelT as ue, DOTABotDifficulty as uf, DOTAChatChannelTypeT as ug, DOTACommLevelT as uh, DOTACommTypeT as ui, DOTAConnectionStateT as uj, DOTAGameMode as uk, DOTAGameState as ul, DOTAJoinLobbyResult as um, DOTALeaverStatusT as un, DOTALobbyReadyState as uo, DOTALobbyVisibility as up, DOTALowPriorityBanType as uq, DOTAMatchVote as ur, DOTASelectionPriorityChoice as us, DOTASelectionPriorityRules as ut, DOTATournamentEvents as uu, DOTAWatchReplayType as uv, EBadgeType as uw, EBroadcastTimelineEvent as ux, ECandyShopUpgrade as uy, EChatSpecialPrivileges as uz, CMsgDOTASubmitPlayerReportV2 as v, cMsgClientToGCAcceptInviteToGuildResponse_EResponseToJSON as v$, ELeagueAuditAction as v0, ELeagueBroadcastProvider as v1, ELeaguePhase as v2, ELeagueStatus as v3, ELeagueTier as v4, ELeagueTierCategory as v5, ELobbyMemberCoachRequestState as v6, EMatchBehaviorScoreVariance as v7, EMatchGroupServerStatus as v8, EMatchOutcome as v9, ETimerAlertType as vA, ETourneyQueueDeadlineState as vB, EUnderDraftResponse as vC, EWeekendTourneyRichPresenceEvent as vD, FantasyGemType as vE, FantasyRoles as vF, FantasyScoring as vG, FantasySelectionMode as vH, FantasyTeamSlots as vI, GCProtoBufMsgSrc as vJ, LobbyDotaPauseSetting as vK, LobbyDotaTVDelay as vL, MatchLanguages as vM, MatchType as vN, PartnerAccountType as vO, type SteamLearn as vP, SteamLearnClientImpl as vQ, SteamLearnServiceName as vR, cDotaMsgPredictionResult_Prediction_EResultFromJSON as vS, cDotaMsgPredictionResult_Prediction_EResultToJSON as vT, cMsgActivatePlusFreeTrialResponse_ResultFromJSON as vU, cMsgActivatePlusFreeTrialResponse_ResultToJSON as vV, cMsgAddItemToSocketResponse_EAddGemFromJSON as vW, cMsgAddItemToSocketResponse_EAddGemToJSON as vX, cMsgAddSocketResponse_EAddSocketFromJSON as vY, cMsgAddSocketResponse_EAddSocketToJSON as vZ, cMsgClientToGCAcceptInviteToGuildResponse_EResponseFromJSON as v_, ENewBloomGiftingResponse as va, EOverwatchConviction as vb, EOverwatchReportReason as vc, EOverworldAuditAction as vd, EOverworldMinigameAction as ve, EOverworldNodeState as vf, EOverworldPathState as vg, EPartyMatchmakingFlags as vh, EPlayerChallengeHistoryType as vi, EProfileCardSlotType as vj, EPurchaseHeroRelicResult as vk, ERankType as vl, EReadyCheckRequestResult as vm, EReadyCheckStatus as vn, ESourceEngine as vo, ESpecialPingValue as vp, ESteamLearnCacheDataResult as vq, ESteamLearnDataType as vr, ESteamLearnGetAccessTokensResult as vs, ESteamLearnInferenceMetadataResult as vt, ESteamLearnInferenceResult as vu, ESteamLearnSnapshotProjectResult as vv, ESteammLearnRegisterDataSourceResult as vw, EStickerbookAuditAction as vx, EStickerbookPageType as vy, ESupportEventRequestResult as vz, CMsgDOTASubmitPlayerReportResponseV2 as w, cMsgClientToGCOpenPlayerCardPackResponse_ResultToJSON as w$, cMsgClientToGCAddGuildRoleResponse_EResponseFromJSON as w0, cMsgClientToGCAddGuildRoleResponse_EResponseToJSON as w1, cMsgClientToGCAddPlayerToGuildChatResponse_EResponseFromJSON as w2, cMsgClientToGCAddPlayerToGuildChatResponse_EResponseToJSON as w3, cMsgClientToGCCancelInviteToGuildResponse_EResponseFromJSON as w4, cMsgClientToGCCancelInviteToGuildResponse_EResponseToJSON as w5, cMsgClientToGCCavernCrawlClaimRoomResponse_ResultFromJSON as w6, cMsgClientToGCCavernCrawlClaimRoomResponse_ResultToJSON as w7, cMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_ResultFromJSON as w8, cMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_ResultToJSON as w9, cMsgClientToGCGetDPCFavoritesResponse_EResponseFromJSON as wA, cMsgClientToGCGetDPCFavoritesResponse_EResponseToJSON as wB, cMsgClientToGCGetHeroStickersResponse_EResponseFromJSON as wC, cMsgClientToGCGetHeroStickersResponse_EResponseToJSON as wD, cMsgClientToGCGetInFlightItemChargesResponse_EResponseFromJSON as wE, cMsgClientToGCGetInFlightItemChargesResponse_EResponseToJSON as wF, cMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponseFromJSON as wG, cMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponseToJSON as wH, cMsgClientToGCGetOWMatchDetailsResponse_EResponseFromJSON as wI, cMsgClientToGCGetOWMatchDetailsResponse_EResponseToJSON as wJ, cMsgClientToGCGetStickerbookResponse_EResponseFromJSON as wK, cMsgClientToGCGetStickerbookResponse_EResponseToJSON as wL, cMsgClientToGCInviteToGuildResponse_EResponseFromJSON as wM, cMsgClientToGCInviteToGuildResponse_EResponseToJSON as wN, cMsgClientToGCJoinGuildResponse_EResponseFromJSON as wO, cMsgClientToGCJoinGuildResponse_EResponseToJSON as wP, cMsgClientToGCKickGuildMemberResponse_EResponseFromJSON as wQ, cMsgClientToGCKickGuildMemberResponse_EResponseToJSON as wR, cMsgClientToGCLeaveGuildResponse_EResponseFromJSON as wS, cMsgClientToGCLeaveGuildResponse_EResponseToJSON as wT, cMsgClientToGCManageFavorites_ActionFromJSON as wU, cMsgClientToGCManageFavorites_ActionToJSON as wV, cMsgClientToGCModifyGuildRoleResponse_EResponseFromJSON as wW, cMsgClientToGCModifyGuildRoleResponse_EResponseToJSON as wX, cMsgClientToGCNameItemResponse_ENameItemFromJSON as wY, cMsgClientToGCNameItemResponse_ENameItemToJSON as wZ, cMsgClientToGCOpenPlayerCardPackResponse_ResultFromJSON as w_, cMsgClientToGCCavernCrawlRequestMapStateResponse_ResultFromJSON as wa, cMsgClientToGCCavernCrawlRequestMapStateResponse_ResultToJSON as wb, cMsgClientToGCCavernCrawlUseItemOnPathResponse_ResultFromJSON as wc, cMsgClientToGCCavernCrawlUseItemOnPathResponse_ResultToJSON as wd, cMsgClientToGCCavernCrawlUseItemOnRoomResponse_ResultFromJSON as we, cMsgClientToGCCavernCrawlUseItemOnRoomResponse_ResultToJSON as wf, cMsgClientToGCClaimLeaderboardRewardsResponse_EResponseFromJSON as wg, cMsgClientToGCClaimLeaderboardRewardsResponse_EResponseToJSON as wh, cMsgClientToGCClaimSwagResponse_EResponseFromJSON as wi, cMsgClientToGCClaimSwagResponse_EResponseToJSON as wj, cMsgClientToGCCreateGuildResponse_EResponseFromJSON as wk, cMsgClientToGCCreateGuildResponse_EResponseToJSON as wl, cMsgClientToGCCreatePlayerCardPackResponse_ResultFromJSON as wm, cMsgClientToGCCreatePlayerCardPackResponse_ResultToJSON as wn, cMsgClientToGCCreateStaticRecipeResponse_EResponseFromJSON as wo, cMsgClientToGCCreateStaticRecipeResponse_EResponseToJSON as wp, cMsgClientToGCCreateStickerbookPageResponse_EResponseFromJSON as wq, cMsgClientToGCCreateStickerbookPageResponse_EResponseToJSON as wr, cMsgClientToGCCreateTeamPlayerCardPackResponse_ResultFromJSON as ws, cMsgClientToGCCreateTeamPlayerCardPackResponse_ResultToJSON as wt, cMsgClientToGCDeclineInviteToGuildResponse_EResponseFromJSON as wu, cMsgClientToGCDeclineInviteToGuildResponse_EResponseToJSON as wv, cMsgClientToGCDeleteStickerbookPageResponse_EResponseFromJSON as ww, cMsgClientToGCDeleteStickerbookPageResponse_EResponseToJSON as wx, cMsgClientToGCDotaLabsFeedbackResponse_EResponseFromJSON as wy, cMsgClientToGCDotaLabsFeedbackResponse_EResponseToJSON as wz, CMsgWatchGame as x, cMsgClientToGCRequestActiveGuildChallengeResponse_EResponseToJSON as x$, cMsgClientToGCOrderStickerbookTeamPageResponse_EResponseFromJSON as x0, cMsgClientToGCOrderStickerbookTeamPageResponse_EResponseToJSON as x1, cMsgClientToGCOverworldClaimEncounterRewardResponse_EResponseFromJSON as x2, cMsgClientToGCOverworldClaimEncounterRewardResponse_EResponseToJSON as x3, cMsgClientToGCOverworldCompletePathResponse_EResponseFromJSON as x4, cMsgClientToGCOverworldCompletePathResponse_EResponseToJSON as x5, cMsgClientToGCOverworldDevClearInventoryResponse_EResponseFromJSON as x6, cMsgClientToGCOverworldDevClearInventoryResponse_EResponseToJSON as x7, cMsgClientToGCOverworldDevGrantTokensResponse_EResponseFromJSON as x8, cMsgClientToGCOverworldDevGrantTokensResponse_EResponseToJSON as x9, cMsgClientToGCPlaceStickersResponse_EResponseFromJSON as xA, cMsgClientToGCPlaceStickersResponse_EResponseToJSON as xB, cMsgClientToGCPlayerCardSpecificPurchaseResponse_ResultFromJSON as xC, cMsgClientToGCPlayerCardSpecificPurchaseResponse_ResultToJSON as xD, cMsgClientToGCPurchaseChargeCostItemsResponse_EResponseFromJSON as xE, cMsgClientToGCPurchaseChargeCostItemsResponse_EResponseToJSON as xF, cMsgClientToGCPurchaseLabyrinthBlessingsResponse_EResponseFromJSON as xG, cMsgClientToGCPurchaseLabyrinthBlessingsResponse_EResponseToJSON as xH, cMsgClientToGCRecalibrateMMRResponse_EResponseFromJSON as xI, cMsgClientToGCRecalibrateMMRResponse_EResponseToJSON as xJ, cMsgClientToGCRecyclePlayerCardResponse_ResultFromJSON as xK, cMsgClientToGCRecyclePlayerCardResponse_ResultToJSON as xL, cMsgClientToGCRemoveGuildRoleResponse_EResponseFromJSON as xM, cMsgClientToGCRemoveGuildRoleResponse_EResponseToJSON as xN, cMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttributeFromJSON as xO, cMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttributeToJSON as xP, cMsgClientToGCReportGuildContentResponse_EResponseFromJSON as xQ, cMsgClientToGCReportGuildContentResponse_EResponseToJSON as xR, cMsgClientToGCReportGuildContent_EContentFlagsFromJSON as xS, cMsgClientToGCReportGuildContent_EContentFlagsToJSON as xT, cMsgClientToGCRequestAccountGuildEventDataResponse_EResponseFromJSON as xU, cMsgClientToGCRequestAccountGuildEventDataResponse_EResponseToJSON as xV, cMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponseFromJSON as xW, cMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse_EResponseToJSON as xX, cMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponseFromJSON as xY, cMsgClientToGCRequestAccountGuildPersonaInfoResponse_EResponseToJSON as xZ, cMsgClientToGCRequestActiveGuildChallengeResponse_EResponseFromJSON as x_, cMsgClientToGCOverworldDevResetAllResponse_EResponseFromJSON as xa, cMsgClientToGCOverworldDevResetAllResponse_EResponseToJSON as xb, cMsgClientToGCOverworldDevResetNodeResponse_EResponseFromJSON as xc, cMsgClientToGCOverworldDevResetNodeResponse_EResponseToJSON as xd, cMsgClientToGCOverworldFeedbackResponse_EResponseFromJSON as xe, cMsgClientToGCOverworldFeedbackResponse_EResponseToJSON as xf, cMsgClientToGCOverworldGetDynamicImageResponse_EDynamicImageFormatFromJSON as xg, cMsgClientToGCOverworldGetDynamicImageResponse_EDynamicImageFormatToJSON as xh, cMsgClientToGCOverworldGetUserDataResponse_EResponseFromJSON as xi, cMsgClientToGCOverworldGetUserDataResponse_EResponseToJSON as xj, cMsgClientToGCOverworldGiftTokensResponse_EResponseFromJSON as xk, cMsgClientToGCOverworldGiftTokensResponse_EResponseToJSON as xl, cMsgClientToGCOverworldMinigameActionResponse_EResponseFromJSON as xm, cMsgClientToGCOverworldMinigameActionResponse_EResponseToJSON as xn, cMsgClientToGCOverworldMoveToNodeResponse_EResponseFromJSON as xo, cMsgClientToGCOverworldMoveToNodeResponse_EResponseToJSON as xp, cMsgClientToGCOverworldRequestTokensNeededByFriendResponse_EResponseFromJSON as xq, cMsgClientToGCOverworldRequestTokensNeededByFriendResponse_EResponseToJSON as xr, cMsgClientToGCOverworldTradeTokensResponse_EResponseFromJSON as xs, cMsgClientToGCOverworldTradeTokensResponse_EResponseToJSON as xt, cMsgClientToGCOverworldVisitEncounterResponse_EResponseFromJSON as xu, cMsgClientToGCOverworldVisitEncounterResponse_EResponseToJSON as xv, cMsgClientToGCPackBundleResponse_EPackBundleFromJSON as xw, cMsgClientToGCPackBundleResponse_EPackBundleToJSON as xx, cMsgClientToGCPlaceCollectionStickersResponse_EResponseFromJSON as xy, cMsgClientToGCPlaceCollectionStickersResponse_EResponseToJSON as xz, CMsgGCMatchDetailsRequest as y, cMsgDOTAClaimEventActionResponse_ResultCodeToJSON as y$, cMsgClientToGCRequestActiveGuildContractsResponse_EResponseFromJSON as y0, cMsgClientToGCRequestActiveGuildContractsResponse_EResponseToJSON as y1, cMsgClientToGCRequestContestVotesResponse_EResponseFromJSON as y2, cMsgClientToGCRequestContestVotesResponse_EResponseToJSON as y3, cMsgClientToGCRequestGuildDataResponse_EResponseFromJSON as y4, cMsgClientToGCRequestGuildDataResponse_EResponseToJSON as y5, cMsgClientToGCRequestGuildEventMembersResponse_EResponseFromJSON as y6, cMsgClientToGCRequestGuildEventMembersResponse_EResponseToJSON as y7, cMsgClientToGCRequestGuildFeedResponse_EResponseFromJSON as y8, cMsgClientToGCRequestGuildFeedResponse_EResponseToJSON as y9, cMsgClientToGCSetGuildMemberRoleResponse_EResponseFromJSON as yA, cMsgClientToGCSetGuildMemberRoleResponse_EResponseToJSON as yB, cMsgClientToGCSetGuildRoleOrderResponse_EResponseFromJSON as yC, cMsgClientToGCSetGuildRoleOrderResponse_EResponseToJSON as yD, cMsgClientToGCSetHeroStickerResponse_EResponseFromJSON as yE, cMsgClientToGCSetHeroStickerResponse_EResponseToJSON as yF, cMsgClientToGCSetItemStyleResponse_ESetStyleFromJSON as yG, cMsgClientToGCSetItemStyleResponse_ESetStyleToJSON as yH, cMsgClientToGCSubmitOWConvictionResponse_EResponseFromJSON as yI, cMsgClientToGCSubmitOWConvictionResponse_EResponseToJSON as yJ, cMsgClientToGCSubmitPlayerMatchSurveyResponse_EResponseFromJSON as yK, cMsgClientToGCSubmitPlayerMatchSurveyResponse_EResponseToJSON as yL, cMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponseFromJSON as yM, cMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponseToJSON as yN, cMsgClientToGCUnlockItemStyleResponse_EUnlockStyleFromJSON as yO, cMsgClientToGCUnlockItemStyleResponse_EUnlockStyleToJSON as yP, cMsgClientToGCUnpackBundleResponse_EUnpackBundleFromJSON as yQ, cMsgClientToGCUnpackBundleResponse_EUnpackBundleToJSON as yR, cMsgClientToGCUpdateComicBookStatTypeFromJSON as yS, cMsgClientToGCUpdateComicBookStatTypeToJSON as yT, cMsgClientToGCUpdatePartyBeacon_ActionFromJSON as yU, cMsgClientToGCUpdatePartyBeacon_ActionToJSON as yV, cMsgClientToGCVoteForArcanaResponse_ResultFromJSON as yW, cMsgClientToGCVoteForArcanaResponse_ResultToJSON as yX, cMsgDOTAAnchorPhoneNumberResponse_ResultFromJSON as yY, cMsgDOTAAnchorPhoneNumberResponse_ResultToJSON as yZ, cMsgDOTAClaimEventActionResponse_ResultCodeFromJSON as y_, cMsgClientToGCRequestGuildMembershipResponse_EResponseFromJSON as ya, cMsgClientToGCRequestGuildMembershipResponse_EResponseToJSON as yb, cMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse_EResponseFromJSON as yc, cMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse_EResponseToJSON as yd, cMsgClientToGCRequestPlayerRecentAccomplishmentsResponse_EResponseFromJSON as ye, cMsgClientToGCRequestPlayerRecentAccomplishmentsResponse_EResponseToJSON as yf, cMsgClientToGCRequestReporterUpdatesResponse_EResponseFromJSON as yg, cMsgClientToGCRequestReporterUpdatesResponse_EResponseToJSON as yh, cMsgClientToGCRoadToTIGetActiveQuestResponse_EResponseFromJSON as yi, cMsgClientToGCRoadToTIGetActiveQuestResponse_EResponseToJSON as yj, cMsgClientToGCRoadToTIGetQuestsResponse_EResponseFromJSON as yk, cMsgClientToGCRoadToTIGetQuestsResponse_EResponseToJSON as yl, cMsgClientToGCRoadToTIUseItemResponse_EResponseFromJSON as ym, cMsgClientToGCRoadToTIUseItemResponse_EResponseToJSON as yn, cMsgClientToGCSelectCompendiumInGamePredictionResponse_EResultFromJSON as yo, cMsgClientToGCSelectCompendiumInGamePredictionResponse_EResultToJSON as yp, cMsgClientToGCSelectGuildContractResponse_EResponseFromJSON as yq, cMsgClientToGCSelectGuildContractResponse_EResponseToJSON as yr, cMsgClientToGCSetDPCFavoriteStateResponse_EResponseFromJSON as ys, cMsgClientToGCSetDPCFavoriteStateResponse_EResponseToJSON as yt, cMsgClientToGCSetEventActiveSeasonIDResponse_EResponseFromJSON as yu, cMsgClientToGCSetEventActiveSeasonIDResponse_EResponseToJSON as yv, cMsgClientToGCSetFavoritePageResponse_EResponseFromJSON as yw, cMsgClientToGCSetFavoritePageResponse_EResponseToJSON as yx, cMsgClientToGCSetGuildInfoResponse_EResponseFromJSON as yy, cMsgClientToGCSetGuildInfoResponse_EResponseToJSON as yz, CMsgCancelWatchGame as z, cMsgGCToClientRecordContestVoteResponse_EResultToJSON as z$, cMsgDOTADestroyLobbyResponse_ResultFromJSON as z0, cMsgDOTADestroyLobbyResponse_ResultToJSON as z1, cMsgDOTAGameAutographRewardResponse_ResultFromJSON as z2, cMsgDOTAGameAutographRewardResponse_ResultToJSON as z3, cMsgDOTAMatch_Player_HeroDamageTypeFromJSON as z4, cMsgDOTAMatch_Player_HeroDamageTypeToJSON as z5, cMsgDOTAMatch_ReplayStateFromJSON as z6, cMsgDOTAMatch_ReplayStateToJSON as z7, cMsgDOTAPopup_PopupIDFromJSON as z8, cMsgDOTAPopup_PopupIDToJSON as z9, cMsgGCGetHeroStatsHistoryResponse_EResponseFromJSON as zA, cMsgGCGetHeroStatsHistoryResponse_EResponseToJSON as zB, cMsgGCNotificationsUpdate_EResultFromJSON as zC, cMsgGCNotificationsUpdate_EResultToJSON as zD, cMsgGCPlayerInfoSubmitResponse_EResultFromJSON as zE, cMsgGCPlayerInfoSubmitResponse_EResultToJSON as zF, cMsgGCRankedPlayerInfoSubmitResponse_EResultFromJSON as zG, cMsgGCRankedPlayerInfoSubmitResponse_EResultToJSON as zH, cMsgGCRerollPlayerChallengeResponse_EResultFromJSON as zI, cMsgGCRerollPlayerChallengeResponse_EResultToJSON as zJ, cMsgGCToClientCollectorsCacheAvailableDataResponse_Vote_EVoteTypeFromJSON as zK, cMsgGCToClientCollectorsCacheAvailableDataResponse_Vote_EVoteTypeToJSON as zL, cMsgGCToClientGetFavoritePlayersResponse_EResponseFromJSON as zM, cMsgGCToClientGetFavoritePlayersResponse_EResponseToJSON as zN, cMsgGCToClientGetFilteredPlayersResponse_ResultFromJSON as zO, cMsgGCToClientGetFilteredPlayersResponse_ResultToJSON as zP, cMsgGCToClientJoinPartyFromBeaconResponse_EResponseFromJSON as zQ, cMsgGCToClientJoinPartyFromBeaconResponse_EResponseToJSON as zR, cMsgGCToClientManageFavoritesResponse_EResponseFromJSON as zS, cMsgGCToClientManageFavoritesResponse_EResponseToJSON as zT, cMsgGCToClientMapStatsResponse_EResponseFromJSON as zU, cMsgGCToClientMapStatsResponse_EResponseToJSON as zV, cMsgGCToClientPurchaseFilteredPlayerSlotResponse_ResultFromJSON as zW, cMsgGCToClientPurchaseFilteredPlayerSlotResponse_ResultToJSON as zX, cMsgGCToClientRankResponse_EResultCodeFromJSON as zY, cMsgGCToClientRankResponse_EResultCodeToJSON as zZ, cMsgGCToClientRecordContestVoteResponse_EResultFromJSON as z_, cMsgDOTAProfileCard_EStatIDFromJSON as za, cMsgDOTAProfileCard_EStatIDToJSON as zb, cMsgDOTARealtimeGameStats_GraphData_eLocationFromJSON as zc, cMsgDOTARealtimeGameStats_GraphData_eLocationToJSON as zd, cMsgDOTARealtimeGameStats_GraphData_eStatFromJSON as ze, cMsgDOTARealtimeGameStats_GraphData_eStatToJSON as zf, cMsgDOTARedeemItemResponse_EResultCodeFromJSON as zg, cMsgDOTARedeemItemResponse_EResultCodeToJSON as zh, cMsgDOTARequestMatchesSkillLevelFromJSON as zi, cMsgDOTARequestMatchesSkillLevelToJSON as zj, cMsgDOTASeasonPredictions_Prediction_EAnswerTypeFromJSON as zk, cMsgDOTASeasonPredictions_Prediction_EAnswerTypeToJSON as zl, cMsgDOTASeasonPredictions_Prediction_EPredictionTypeFromJSON as zm, cMsgDOTASeasonPredictions_Prediction_EPredictionTypeToJSON as zn, cMsgDOTASelectionPriorityChoiceResponse_ResultFromJSON as zo, cMsgDOTASelectionPriorityChoiceResponse_ResultToJSON as zp, cMsgDOTASubmitPlayerReportResponseV2_EResultFromJSON as zq, cMsgDOTASubmitPlayerReportResponseV2_EResultToJSON as zr, cMsgDOTASubmitPlayerReportResponse_EResultFromJSON as zs, cMsgDOTASubmitPlayerReportResponse_EResultToJSON as zt, cMsgDOTAUnanchorPhoneNumberResponse_ResultFromJSON as zu, cMsgDOTAUnanchorPhoneNumberResponse_ResultToJSON as zv, cMsgExtractGemsResponse_EExtractGemsFromJSON as zw, cMsgExtractGemsResponse_EExtractGemsToJSON as zx, cMsgFindGuildByTagResponse_EResponseFromJSON as zy, cMsgFindGuildByTagResponse_EResponseToJSON as zz };
