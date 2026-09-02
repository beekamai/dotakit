import { BinaryWriter, BinaryReader } from '@bufbuild/protobuf/wire';

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
declare const CDOTAClientHardwareSpecs: MessageFns$1<CDOTAClientHardwareSpecs>;
interface CDOTASaveGame {
    matchId: string;
    saveTime: number;
    players: CDOTASaveGame_Player[];
    saveInstances: CDOTASaveGame_SaveInstance[];
}
declare const CDOTASaveGame: MessageFns$1<CDOTASaveGame>;
interface CDOTASaveGame_Player {
    team: dotaGcTeam;
    name: string;
    hero: string;
}
declare const CDOTASaveGame_Player: MessageFns$1<CDOTASaveGame_Player>;
interface CDOTASaveGame_SaveInstance {
    gameTime: number;
    team1Score: number;
    team2Score: number;
    playerPositions: CDOTASaveGame_SaveInstance_PlayerPositions[];
    saveId: number;
    saveTime: number;
}
declare const CDOTASaveGame_SaveInstance: MessageFns$1<CDOTASaveGame_SaveInstance>;
interface CDOTASaveGame_SaveInstance_PlayerPositions {
    x: number;
    y: number;
}
declare const CDOTASaveGame_SaveInstance_PlayerPositions: MessageFns$1<CDOTASaveGame_SaveInstance_PlayerPositions>;
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
declare const CMsgDOTACombatLogEntry: MessageFns$1<CMsgDOTACombatLogEntry>;
interface CMsgPendingEventAward {
    eventId: EEvent;
    actionId: number;
    numToGrant: number;
    scoreMode: EEventActionScoreMode;
    auditAction: number;
    auditData: string;
}
declare const CMsgPendingEventAward: MessageFns$1<CMsgPendingEventAward>;
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
declare const CSODOTAGameAccountClient: MessageFns<CSODOTAGameAccountClient>;
interface CSODOTAGameAccountClient_RoleHandicap {
    role: number;
    handicap: number;
}
declare const CSODOTAGameAccountClient_RoleHandicap: MessageFns<CSODOTAGameAccountClient_RoleHandicap>;
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
declare const CSODOTAGameAccountPlus: MessageFns<CSODOTAGameAccountPlus>;
interface CSODOTAChatWheel {
    messageId: number;
}
declare const CSODOTAChatWheel: MessageFns<CSODOTAChatWheel>;
interface CMsgLobbyFeaturedGamemodeProgress {
    accounts: CMsgLobbyFeaturedGamemodeProgress_AccountProgress[];
}
declare const CMsgLobbyFeaturedGamemodeProgress: MessageFns<CMsgLobbyFeaturedGamemodeProgress>;
interface CMsgLobbyFeaturedGamemodeProgress_AccountProgress {
    accountId: number;
    currentValue: number;
    maxValue: number;
}
declare const CMsgLobbyFeaturedGamemodeProgress_AccountProgress: MessageFns<CMsgLobbyFeaturedGamemodeProgress_AccountProgress>;
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
declare const CMsgBattleCupVictory: MessageFns<CMsgBattleCupVictory>;
interface CMsgLobbyBattleCupVictoryList {
    winners: CMsgBattleCupVictory[];
}
declare const CMsgLobbyBattleCupVictoryList: MessageFns<CMsgLobbyBattleCupVictoryList>;
interface CMsgDOTABroadcastNotification {
    message: string;
}
declare const CMsgDOTABroadcastNotification: MessageFns<CMsgDOTABroadcastNotification>;
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
declare const CProtoItemHeroStatue: MessageFns<CProtoItemHeroStatue>;
interface CMatchPlayerAbilityUpgrade {
    ability: number;
    time: number;
}
declare const CMatchPlayerAbilityUpgrade: MessageFns<CMatchPlayerAbilityUpgrade>;
interface CMatchPlayerTimedCustomStat {
    stat: EDOTAMatchPlayerTimeCustomStat;
    value: number;
}
declare const CMatchPlayerTimedCustomStat: MessageFns<CMatchPlayerTimedCustomStat>;
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
declare const CMatchPlayerTimedStats: MessageFns<CMatchPlayerTimedStats>;
interface CMatchTeamTimedStats {
    time: number;
    enemyTowersKilled: number;
    enemyBarracksKilled: number;
    enemyTowersStatus: number;
    enemyBarracksStatus: number;
}
declare const CMatchTeamTimedStats: MessageFns<CMatchTeamTimedStats>;
interface CMatchAdditionalUnitInventory {
    unitName: string;
    items: number[];
}
declare const CMatchAdditionalUnitInventory: MessageFns<CMatchAdditionalUnitInventory>;
interface CMatchPlayerPermanentBuff {
    permanentBuff: number;
    stackCount: number;
    grantTime: number;
}
declare const CMatchPlayerPermanentBuff: MessageFns<CMatchPlayerPermanentBuff>;
interface CMatchHeroSelectEvent {
    isPick: boolean;
    team: number;
    heroId: number;
}
declare const CMatchHeroSelectEvent: MessageFns<CMatchHeroSelectEvent>;
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
declare const CMatchClip: MessageFns<CMatchClip>;
interface CPartySearchClientParty {
    partyId: string;
    beaconType: number;
    partyMembers: number[];
}
declare const CPartySearchClientParty: MessageFns<CPartySearchClientParty>;
interface CMsgDOTAHasItemQuery {
    accountId: number;
    itemId: string;
}
declare const CMsgDOTAHasItemQuery: MessageFns<CMsgDOTAHasItemQuery>;
interface CMsgDOTAHasItemResponse {
    hasItem: boolean;
}
declare const CMsgDOTAHasItemResponse: MessageFns<CMsgDOTAHasItemResponse>;
interface CMsgGCGetPlayerCardItemInfo {
    accountId: number;
    playerCardItemIds: string[];
    allForEvent: number;
}
declare const CMsgGCGetPlayerCardItemInfo: MessageFns<CMsgGCGetPlayerCardItemInfo>;
interface CMsgGCGetPlayerCardItemInfoResponse {
    playerCardInfos: CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo[];
}
declare const CMsgGCGetPlayerCardItemInfoResponse: MessageFns<CMsgGCGetPlayerCardItemInfoResponse>;
interface CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo {
    playerCardItemId: string;
    accountId: number;
    packedBonuses: string;
}
declare const CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo: MessageFns<CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo>;
interface CSODOTAMapLocationState {
    accountId: number;
    locationId: number;
    completed: boolean;
}
declare const CSODOTAMapLocationState: MessageFns<CSODOTAMapLocationState>;
interface CMsgLeagueAdminList {
    accountIds: number[];
}
declare const CMsgLeagueAdminList: MessageFns<CMsgLeagueAdminList>;
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
declare const CMsgDOTAProfileCard: MessageFns<CMsgDOTAProfileCard>;
interface CMsgDOTAProfileCard_Slot {
    slotId: number;
    trophy: CMsgDOTAProfileCard_Slot_Trophy | undefined;
    stat: CMsgDOTAProfileCard_Slot_Stat | undefined;
    item: CMsgDOTAProfileCard_Slot_Item | undefined;
    hero: CMsgDOTAProfileCard_Slot_Hero | undefined;
    emoticon: CMsgDOTAProfileCard_Slot_Emoticon | undefined;
    team: CMsgDOTAProfileCard_Slot_Team | undefined;
}
declare const CMsgDOTAProfileCard_Slot: MessageFns<CMsgDOTAProfileCard_Slot>;
interface CMsgDOTAProfileCard_Slot_Trophy {
    trophyId: number;
    trophyScore: number;
}
declare const CMsgDOTAProfileCard_Slot_Trophy: MessageFns<CMsgDOTAProfileCard_Slot_Trophy>;
interface CMsgDOTAProfileCard_Slot_Stat {
    statId: CMsgDOTAProfileCard_EStatID;
    statScore: number;
}
declare const CMsgDOTAProfileCard_Slot_Stat: MessageFns<CMsgDOTAProfileCard_Slot_Stat>;
interface CMsgDOTAProfileCard_Slot_Item {
    serializedItem: Buffer;
    itemId: string;
}
declare const CMsgDOTAProfileCard_Slot_Item: MessageFns<CMsgDOTAProfileCard_Slot_Item>;
interface CMsgDOTAProfileCard_Slot_Hero {
    heroId: number;
    heroWins: number;
    heroLosses: number;
}
declare const CMsgDOTAProfileCard_Slot_Hero: MessageFns<CMsgDOTAProfileCard_Slot_Hero>;
interface CMsgDOTAProfileCard_Slot_Emoticon {
    emoticonId: number;
}
declare const CMsgDOTAProfileCard_Slot_Emoticon: MessageFns<CMsgDOTAProfileCard_Slot_Emoticon>;
interface CMsgDOTAProfileCard_Slot_Team {
    teamId: number;
}
declare const CMsgDOTAProfileCard_Slot_Team: MessageFns<CMsgDOTAProfileCard_Slot_Team>;
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
declare const CSODOTAPlayerChallenge: MessageFns<CSODOTAPlayerChallenge>;
interface CMsgClientToGCRerollPlayerChallenge {
    eventId: EEvent;
    sequenceId: number;
    heroId: number;
}
declare const CMsgClientToGCRerollPlayerChallenge: MessageFns<CMsgClientToGCRerollPlayerChallenge>;
interface CMsgGCRerollPlayerChallengeResponse {
    result: CMsgGCRerollPlayerChallengeResponse_EResult;
}
declare const CMsgGCRerollPlayerChallengeResponse: MessageFns<CMsgGCRerollPlayerChallengeResponse>;
interface CMsgGCTopCustomGamesList {
    topCustomGames: string[];
    gameOfTheDay: string;
}
declare const CMsgGCTopCustomGamesList: MessageFns<CMsgGCTopCustomGamesList>;
interface CMsgDOTARealtimeGameStats {
    match: CMsgDOTARealtimeGameStats_MatchDetails | undefined;
    teams: CMsgDOTARealtimeGameStats_TeamDetails[];
    buildings: CMsgDOTARealtimeGameStats_BuildingDetails[];
    graphData: CMsgDOTARealtimeGameStats_GraphData | undefined;
    deltaFrame: boolean;
}
declare const CMsgDOTARealtimeGameStats: MessageFns<CMsgDOTARealtimeGameStats>;
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
declare const CMsgDOTARealtimeGameStats_TeamDetails: MessageFns<CMsgDOTARealtimeGameStats_TeamDetails>;
interface CMsgDOTARealtimeGameStats_ItemDetails {
    itemAbilityId: number;
    name: string;
    time: number;
    sold: boolean;
    stackcount: number;
}
declare const CMsgDOTARealtimeGameStats_ItemDetails: MessageFns<CMsgDOTARealtimeGameStats_ItemDetails>;
interface CMsgDOTARealtimeGameStats_AbilityDetails {
    id: number;
    name: string;
    level: number;
    cooldown: number;
    cooldownMax: number;
}
declare const CMsgDOTARealtimeGameStats_AbilityDetails: MessageFns<CMsgDOTARealtimeGameStats_AbilityDetails>;
interface CMsgDOTARealtimeGameStats_HeroToHeroStats {
    victimid: number;
    kills: number;
    assists: number;
}
declare const CMsgDOTARealtimeGameStats_HeroToHeroStats: MessageFns<CMsgDOTARealtimeGameStats_HeroToHeroStats>;
interface CMsgDOTARealtimeGameStats_AbilityList {
    id: number[];
}
declare const CMsgDOTARealtimeGameStats_AbilityList: MessageFns<CMsgDOTARealtimeGameStats_AbilityList>;
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
declare const CMsgDOTARealtimeGameStats_PlayerDetails: MessageFns<CMsgDOTARealtimeGameStats_PlayerDetails>;
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
declare const CMsgDOTARealtimeGameStats_BuildingDetails: MessageFns<CMsgDOTARealtimeGameStats_BuildingDetails>;
interface CMsgDOTARealtimeGameStats_KillDetails {
    playerId: number;
    deathTime: number;
    killerPlayerId: number;
}
declare const CMsgDOTARealtimeGameStats_KillDetails: MessageFns<CMsgDOTARealtimeGameStats_KillDetails>;
interface CMsgDOTARealtimeGameStats_BroadcasterDetails {
    playerId: number;
}
declare const CMsgDOTARealtimeGameStats_BroadcasterDetails: MessageFns<CMsgDOTARealtimeGameStats_BroadcasterDetails>;
interface CMsgDOTARealtimeGameStats_PickBanDetails {
    hero: number;
    team: number;
}
declare const CMsgDOTARealtimeGameStats_PickBanDetails: MessageFns<CMsgDOTARealtimeGameStats_PickBanDetails>;
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
declare const CMsgDOTARealtimeGameStats_MatchDetails: MessageFns<CMsgDOTARealtimeGameStats_MatchDetails>;
interface CMsgDOTARealtimeGameStats_GraphData {
    graphGold: number[];
    graphXp: number[];
    graphKill: number[];
    graphTower: number[];
    graphRax: number[];
    teamLocStats: CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats[];
}
declare const CMsgDOTARealtimeGameStats_GraphData: MessageFns<CMsgDOTARealtimeGameStats_GraphData>;
interface CMsgDOTARealtimeGameStats_GraphData_LocationStats {
    stats: number[];
}
declare const CMsgDOTARealtimeGameStats_GraphData_LocationStats: MessageFns<CMsgDOTARealtimeGameStats_GraphData_LocationStats>;
interface CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats {
    locStats: CMsgDOTARealtimeGameStats_GraphData_LocationStats[];
}
declare const CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats: MessageFns<CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats>;
interface CMsgDOTARealtimeGameStatsTerse {
    match: CMsgDOTARealtimeGameStatsTerse_MatchDetails | undefined;
    teams: CMsgDOTARealtimeGameStatsTerse_TeamDetails[];
    buildings: CMsgDOTARealtimeGameStatsTerse_BuildingDetails[];
    graphData: CMsgDOTARealtimeGameStatsTerse_GraphData | undefined;
    deltaFrame: boolean;
}
declare const CMsgDOTARealtimeGameStatsTerse: MessageFns<CMsgDOTARealtimeGameStatsTerse>;
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
declare const CMsgDOTARealtimeGameStatsTerse_TeamDetails: MessageFns<CMsgDOTARealtimeGameStatsTerse_TeamDetails>;
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
declare const CMsgDOTARealtimeGameStatsTerse_PlayerDetails: MessageFns<CMsgDOTARealtimeGameStatsTerse_PlayerDetails>;
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
declare const CMsgDOTARealtimeGameStatsTerse_BuildingDetails: MessageFns<CMsgDOTARealtimeGameStatsTerse_BuildingDetails>;
interface CMsgDOTARealtimeGameStatsTerse_PickBanDetails {
    hero: number;
    team: number;
}
declare const CMsgDOTARealtimeGameStatsTerse_PickBanDetails: MessageFns<CMsgDOTARealtimeGameStatsTerse_PickBanDetails>;
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
declare const CMsgDOTARealtimeGameStatsTerse_MatchDetails: MessageFns<CMsgDOTARealtimeGameStatsTerse_MatchDetails>;
interface CMsgDOTARealtimeGameStatsTerse_GraphData {
    graphGold: number[];
}
declare const CMsgDOTARealtimeGameStatsTerse_GraphData: MessageFns<CMsgDOTARealtimeGameStatsTerse_GraphData>;
interface CMsgDOTABroadcastTimelineEvent {
    event: EBroadcastTimelineEvent;
    timestamp: number;
    data: number;
    stringData: string;
}
declare const CMsgDOTABroadcastTimelineEvent: MessageFns<CMsgDOTABroadcastTimelineEvent>;
interface CMsgGCToClientMatchGroupsVersion {
    matchgroupsVersion: number;
}
declare const CMsgGCToClientMatchGroupsVersion: MessageFns<CMsgGCToClientMatchGroupsVersion>;
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
declare const CMsgDOTASDOHeroStatsHistory: MessageFns<CMsgDOTASDOHeroStatsHistory>;
interface CMsgPredictionChoice {
    value: number;
    name: string;
    minRawValue: number;
    maxRawValue: number;
}
declare const CMsgPredictionChoice: MessageFns<CMsgPredictionChoice>;
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
declare const CMsgInGamePrediction: MessageFns<CMsgInGamePrediction>;
interface CMsgInGamePrediction_QueryKeyValues {
    name: string;
    value: string;
}
declare const CMsgInGamePrediction_QueryKeyValues: MessageFns<CMsgInGamePrediction_QueryKeyValues>;
interface CMsgDOTASeasonPredictions {
    predictions: CMsgDOTASeasonPredictions_Prediction[];
    inGamePredictions: CMsgInGamePrediction[];
    inGamePredictionCountPerGame: number;
    inGamePredictionVotingPeriodMinutes: number;
}
declare const CMsgDOTASeasonPredictions: MessageFns<CMsgDOTASeasonPredictions>;
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
declare const CMsgDOTASeasonPredictions_Prediction: MessageFns<CMsgDOTASeasonPredictions_Prediction>;
interface CMsgDOTASeasonPredictions_Prediction_Answers {
    answerId: number;
}
declare const CMsgDOTASeasonPredictions_Prediction_Answers: MessageFns<CMsgDOTASeasonPredictions_Prediction_Answers>;
interface CMsgAvailablePredictions {
    matchPredictions: CMsgAvailablePredictions_MatchPrediction[];
}
declare const CMsgAvailablePredictions: MessageFns<CMsgAvailablePredictions>;
interface CMsgAvailablePredictions_MatchPrediction {
    matchId: string;
    predictions: CMsgInGamePrediction[];
}
declare const CMsgAvailablePredictions_MatchPrediction: MessageFns<CMsgAvailablePredictions_MatchPrediction>;
interface CMsgLeagueWatchedGames {
    leagues: CMsgLeagueWatchedGames_League[];
}
declare const CMsgLeagueWatchedGames: MessageFns<CMsgLeagueWatchedGames>;
interface CMsgLeagueWatchedGames_Series {
    nodeId: number;
    game: number[];
}
declare const CMsgLeagueWatchedGames_Series: MessageFns<CMsgLeagueWatchedGames_Series>;
interface CMsgLeagueWatchedGames_League {
    leagueId: number;
    series: CMsgLeagueWatchedGames_Series[];
}
declare const CMsgLeagueWatchedGames_League: MessageFns<CMsgLeagueWatchedGames_League>;
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
declare const CMsgDOTAMatch: MessageFns<CMsgDOTAMatch>;
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
declare const CMsgDOTAMatch_Player: MessageFns<CMsgDOTAMatch_Player>;
interface CMsgDOTAMatch_Player_CustomGameData {
    dotaTeam: number;
    winner: boolean;
}
declare const CMsgDOTAMatch_Player_CustomGameData: MessageFns<CMsgDOTAMatch_Player_CustomGameData>;
interface CMsgDOTAMatch_Player_HeroDamageReceived {
    preReduction: number;
    postReduction: number;
    damageType: CMsgDOTAMatch_Player_HeroDamageType;
}
declare const CMsgDOTAMatch_Player_HeroDamageReceived: MessageFns<CMsgDOTAMatch_Player_HeroDamageReceived>;
interface CMsgDOTAMatch_BroadcasterInfo {
    accountId: number;
    name: string;
}
declare const CMsgDOTAMatch_BroadcasterInfo: MessageFns<CMsgDOTAMatch_BroadcasterInfo>;
interface CMsgDOTAMatch_BroadcasterChannel {
    countryCode: string;
    description: string;
    broadcasterInfos: CMsgDOTAMatch_BroadcasterInfo[];
    languageCode: string;
}
declare const CMsgDOTAMatch_BroadcasterChannel: MessageFns<CMsgDOTAMatch_BroadcasterChannel>;
interface CMsgDOTAMatch_Coach {
    accountId: number;
    coachName: string;
    coachRating: number;
    coachTeam: number;
    coachPartyId: string;
    isPrivateCoach: boolean;
}
declare const CMsgDOTAMatch_Coach: MessageFns<CMsgDOTAMatch_Coach>;
interface CMsgDOTAMatch_CustomGameData {
    customGameId: string;
    mapName: string;
}
declare const CMsgDOTAMatch_CustomGameData: MessageFns<CMsgDOTAMatch_CustomGameData>;
interface CMsgPlayerCard {
    accountId: number;
    statModifier: CMsgPlayerCard_StatModifier[];
}
declare const CMsgPlayerCard: MessageFns<CMsgPlayerCard>;
interface CMsgPlayerCard_StatModifier {
    stat: number;
    value: number;
}
declare const CMsgPlayerCard_StatModifier: MessageFns<CMsgPlayerCard_StatModifier>;
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
declare const CMsgDOTAFantasyPlayerStats: MessageFns<CMsgDOTAFantasyPlayerStats>;
interface CMsgDOTAFantasyPlayerMatchStats {
    matches: CMsgDOTAFantasyPlayerStats[];
}
declare const CMsgDOTAFantasyPlayerMatchStats: MessageFns<CMsgDOTAFantasyPlayerMatchStats>;
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
declare const CMsgDOTABotDebugInfo: MessageFns<CMsgDOTABotDebugInfo>;
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
declare const CMsgDOTABotDebugInfo_Bot: MessageFns<CMsgDOTABotDebugInfo_Bot>;
interface CMsgDOTABotDebugInfo_Bot_Mode {
    modeId: number;
    desire: number;
    targetEntity: number;
    targetX: number;
    targetY: number;
    targetZ: number;
}
declare const CMsgDOTABotDebugInfo_Bot_Mode: MessageFns<CMsgDOTABotDebugInfo_Bot_Mode>;
interface CMsgDOTABotDebugInfo_Bot_Action {
    actionId: number;
    actionTarget: string;
}
declare const CMsgDOTABotDebugInfo_Bot_Action: MessageFns<CMsgDOTABotDebugInfo_Bot_Action>;
interface CMsgSuccessfulHero {
    heroId: number;
    winPercent: number;
    longestStreak: number;
}
declare const CMsgSuccessfulHero: MessageFns<CMsgSuccessfulHero>;
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
declare const CMsgRecentMatchInfo: MessageFns<CMsgRecentMatchInfo>;
interface CMsgMatchTips {
    tips: CMsgMatchTips_SingleTip[];
}
declare const CMsgMatchTips: MessageFns<CMsgMatchTips>;
interface CMsgMatchTips_SingleTip {
    sourceAccountId: number;
    targetAccountId: number;
    tipAmount: number;
    eventId: EEvent;
}
declare const CMsgMatchTips_SingleTip: MessageFns<CMsgMatchTips_SingleTip>;
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
declare const CMsgDOTAMatchMinimal: MessageFns<CMsgDOTAMatchMinimal>;
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
declare const CMsgDOTAMatchMinimal_Player: MessageFns<CMsgDOTAMatchMinimal_Player>;
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
declare const CMsgDOTAMatchMinimal_Tourney: MessageFns<CMsgDOTAMatchMinimal_Tourney>;
interface CMsgConsumableUsage {
    itemDef: number;
    quantityChange: number;
}
declare const CMsgConsumableUsage: MessageFns<CMsgConsumableUsage>;
interface CMsgMatchConsumableUsage {
    playerConsumablesUsed: CMsgMatchConsumableUsage_PlayerUsage[];
}
declare const CMsgMatchConsumableUsage: MessageFns<CMsgMatchConsumableUsage>;
interface CMsgMatchConsumableUsage_PlayerUsage {
    accountId: number;
    consumablesUsed: CMsgConsumableUsage[];
}
declare const CMsgMatchConsumableUsage_PlayerUsage: MessageFns<CMsgMatchConsumableUsage_PlayerUsage>;
interface CMsgMatchEventActionGrants {
    playerGrants: CMsgMatchEventActionGrants_PlayerGrants[];
}
declare const CMsgMatchEventActionGrants: MessageFns<CMsgMatchEventActionGrants>;
interface CMsgMatchEventActionGrants_PlayerGrants {
    accountId: number;
    actionsGranted: CMsgPendingEventAward[];
}
declare const CMsgMatchEventActionGrants_PlayerGrants: MessageFns<CMsgMatchEventActionGrants_PlayerGrants>;
interface CMsgCustomGameWhitelist {
    version: number;
    customGamesWhitelist: string[];
    disableWhitelist: boolean;
}
declare const CMsgCustomGameWhitelist: MessageFns<CMsgCustomGameWhitelist>;
interface CMsgCustomGameWhitelistForEdit {
    whitelistEntries: CMsgCustomGameWhitelistForEdit_WhitelistEntry[];
}
declare const CMsgCustomGameWhitelistForEdit: MessageFns<CMsgCustomGameWhitelistForEdit>;
interface CMsgCustomGameWhitelistForEdit_WhitelistEntry {
    customGameId: string;
    whitelistState: ECustomGameWhitelistState;
}
declare const CMsgCustomGameWhitelistForEdit_WhitelistEntry: MessageFns<CMsgCustomGameWhitelistForEdit_WhitelistEntry>;
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
declare const CMsgPlayerRecentMatchInfo: MessageFns<CMsgPlayerRecentMatchInfo>;
interface CMsgPlayerMatchRecord {
    wins: number;
    losses: number;
}
declare const CMsgPlayerMatchRecord: MessageFns<CMsgPlayerMatchRecord>;
interface CMsgPlayerRecentMatchOutcomes {
    outcomes: number;
    matchCount: number;
}
declare const CMsgPlayerRecentMatchOutcomes: MessageFns<CMsgPlayerRecentMatchOutcomes>;
interface CMsgPlayerRecentCommends {
    commends: number;
    matchCount: number;
}
declare const CMsgPlayerRecentCommends: MessageFns<CMsgPlayerRecentCommends>;
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
declare const CMsgPlayerRecentAccomplishments: MessageFns<CMsgPlayerRecentAccomplishments>;
interface CMsgPlayerHeroRecentAccomplishments {
    recentOutcomes: CMsgPlayerRecentMatchOutcomes | undefined;
    totalRecord: CMsgPlayerMatchRecord | undefined;
    lastMatch: CMsgPlayerRecentMatchInfo | undefined;
}
declare const CMsgPlayerHeroRecentAccomplishments: MessageFns<CMsgPlayerHeroRecentAccomplishments>;
interface CMsgRecentAccomplishments {
    playerAccomplishments: CMsgPlayerRecentAccomplishments | undefined;
    heroAccomplishments: CMsgPlayerHeroRecentAccomplishments | undefined;
}
declare const CMsgRecentAccomplishments: MessageFns<CMsgRecentAccomplishments>;
interface CMsgServerToGCRequestPlayerRecentAccomplishments {
    accountId: number;
    heroId: number;
}
declare const CMsgServerToGCRequestPlayerRecentAccomplishments: MessageFns<CMsgServerToGCRequestPlayerRecentAccomplishments>;
interface CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse {
    result: CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse;
    playerAccomplishments: CMsgRecentAccomplishments | undefined;
}
declare const CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse: MessageFns<CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse>;
interface CMsgArcanaVoteMatchVotes {
    matchId: number;
    heroId: number;
    voteCount: number;
}
declare const CMsgArcanaVoteMatchVotes: MessageFns<CMsgArcanaVoteMatchVotes>;
interface CMsgGCtoGCAssociatedExploiterAccountInfo {
    accountId: number;
    numMatchesToSearch: number;
    minSharedMatchCount: number;
    numAdditionalPlayers: number;
}
declare const CMsgGCtoGCAssociatedExploiterAccountInfo: MessageFns<CMsgGCtoGCAssociatedExploiterAccountInfo>;
interface CMsgGCtoGCAssociatedExploiterAccountInfoResponse {
    accounts: CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account[];
}
declare const CMsgGCtoGCAssociatedExploiterAccountInfoResponse: MessageFns<CMsgGCtoGCAssociatedExploiterAccountInfoResponse>;
interface CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account {
    accountId: number;
    numCommonMatches: number;
    earliestCommonMatch: number;
    latestCommonMatch: number;
    generation: number;
    persona: string;
    alreadyBanned: boolean;
}
declare const CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account: MessageFns<CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account>;
interface CMsgPullTabsData {
    slots: CMsgPullTabsData_Slot[];
    jackpots: CMsgPullTabsData_Jackpot[];
    lastBoard: number;
}
declare const CMsgPullTabsData: MessageFns<CMsgPullTabsData>;
interface CMsgPullTabsData_Slot {
    eventId: number;
    boardId: number;
    heroId: number;
    actionId: number;
    redeemed: boolean;
}
declare const CMsgPullTabsData_Slot: MessageFns<CMsgPullTabsData_Slot>;
interface CMsgPullTabsData_Jackpot {
    boardId: number;
    actionId: number;
    heroId: number;
}
declare const CMsgPullTabsData_Jackpot: MessageFns<CMsgPullTabsData_Jackpot>;
interface CMsgUnderDraftData {
    benchSlots: CMsgUnderDraftData_BenchSlot[];
    shopSlots: CMsgUnderDraftData_ShopSlot[];
    gold: number;
    totalGold: number;
    notRestorable: boolean;
}
declare const CMsgUnderDraftData: MessageFns<CMsgUnderDraftData>;
interface CMsgUnderDraftData_BenchSlot {
    slotId: number;
    heroId: number;
    stars: number;
}
declare const CMsgUnderDraftData_BenchSlot: MessageFns<CMsgUnderDraftData_BenchSlot>;
interface CMsgUnderDraftData_ShopSlot {
    slotId: number;
    heroId: number;
    isSpecialReward: boolean;
}
declare const CMsgUnderDraftData_ShopSlot: MessageFns<CMsgUnderDraftData_ShopSlot>;
interface CMsgPlayerTitleData {
    title: number[];
    eventId: number[];
    active: number;
}
declare const CMsgPlayerTitleData: MessageFns<CMsgPlayerTitleData>;
interface CMsgDOTATriviaQuestion {
    questionId: number;
    category: EDOTATriviaQuestionCategory;
    timestamp: number;
    questionValue: string;
    answerValues: string[];
    correctAnswerIndex: number;
}
declare const CMsgDOTATriviaQuestion: MessageFns<CMsgDOTATriviaQuestion>;
interface CMsgDOTATriviaQuestionAnswersSummary {
    summaryAvailable: boolean;
    pickedCount: number[];
}
declare const CMsgDOTATriviaQuestionAnswersSummary: MessageFns<CMsgDOTATriviaQuestionAnswersSummary>;
interface CMsgGameDataSpecialValueBonus {
    name: string;
    value: number;
    operation: number;
}
declare const CMsgGameDataSpecialValueBonus: MessageFns<CMsgGameDataSpecialValueBonus>;
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
declare const CMsgGameDataSpecialValues: MessageFns<CMsgGameDataSpecialValues>;
interface CMsgGameDataFacetAbilityBonus {
    name: string;
    values: number[];
    operation: number;
}
declare const CMsgGameDataFacetAbilityBonus: MessageFns<CMsgGameDataFacetAbilityBonus>;
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
declare const CMsgGameDataAbilityOrItem: MessageFns<CMsgGameDataAbilityOrItem>;
interface CMsgGameDataAbilityOrItemList {
    abilities: CMsgGameDataAbilityOrItem[];
}
declare const CMsgGameDataAbilityOrItemList: MessageFns<CMsgGameDataAbilityOrItemList>;
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
declare const CMsgGameDataHero: MessageFns<CMsgGameDataHero>;
interface CMsgGameDataHero_Facet {
    color: number;
    titleLoc: string;
    descriptionLoc: string;
    name: string;
    icon: string;
    gradientId: number;
    index: number;
}
declare const CMsgGameDataHero_Facet: MessageFns<CMsgGameDataHero_Facet>;
interface CMsgGameDataAbilities {
    abilities: CMsgGameDataAbilityOrItem[];
}
declare const CMsgGameDataAbilities: MessageFns<CMsgGameDataAbilities>;
interface CMsgGameDataItems {
    items: CMsgGameDataAbilityOrItem[];
}
declare const CMsgGameDataItems: MessageFns<CMsgGameDataItems>;
interface CMsgGameDataHeroes {
    heroes: CMsgGameDataHero[];
}
declare const CMsgGameDataHeroes: MessageFns<CMsgGameDataHeroes>;
interface CMsgGameDataHeroList {
    heroes: CMsgGameDataHeroList_HeroInfo[];
}
declare const CMsgGameDataHeroList: MessageFns<CMsgGameDataHeroList>;
interface CMsgGameDataHeroList_HeroInfo {
    id: number;
    name: string;
    nameLoc: string;
    nameEnglishLoc: string;
    primaryAttr: number;
    complexity: number;
}
declare const CMsgGameDataHeroList_HeroInfo: MessageFns<CMsgGameDataHeroList_HeroInfo>;
interface CMsgGameDataItemAbilityList {
    itemabilities: CMsgGameDataItemAbilityList_ItemAbilityInfo[];
}
declare const CMsgGameDataItemAbilityList: MessageFns<CMsgGameDataItemAbilityList>;
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
declare const CMsgGameDataItemAbilityList_ItemAbilityInfo: MessageFns<CMsgGameDataItemAbilityList_ItemAbilityInfo>;
interface CMsgGameDataItemAbilityList_ItemAbilityInfo_Recipe {
    items: number[];
}
declare const CMsgGameDataItemAbilityList_ItemAbilityInfo_Recipe: MessageFns<CMsgGameDataItemAbilityList_ItemAbilityInfo_Recipe>;
interface CMsgLobbyAbilityDraftData {
    shuffleDraftOrder: boolean;
}
declare const CMsgLobbyAbilityDraftData: MessageFns<CMsgLobbyAbilityDraftData>;
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
declare const CSOEconItemDropRateBonus: MessageFns<CSOEconItemDropRateBonus>;
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
declare const CSOEconItemTournamentPassport: MessageFns<CSOEconItemTournamentPassport>;
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
declare const CMsgStickerbookSticker: MessageFns<CMsgStickerbookSticker>;
interface CMsgStickerbookPage {
    pageNum: number;
    eventId: EEvent;
    teamId: number;
    stickers: CMsgStickerbookSticker[];
    pageType: EStickerbookPageType;
}
declare const CMsgStickerbookPage: MessageFns<CMsgStickerbookPage>;
interface CMsgStickerbookTeamPageOrderSequence {
    pageNumbers: number[];
}
declare const CMsgStickerbookTeamPageOrderSequence: MessageFns<CMsgStickerbookTeamPageOrderSequence>;
interface CMsgStickerbook {
    pages: CMsgStickerbookPage[];
    teamPageOrderSequence: CMsgStickerbookTeamPageOrderSequence | undefined;
    favoritePageNum: number;
}
declare const CMsgStickerbook: MessageFns<CMsgStickerbook>;
interface CMsgStickerHero {
    heroId: number;
    itemDefId: number;
    quality: number;
    sourceItemId: string;
}
declare const CMsgStickerHero: MessageFns<CMsgStickerHero>;
interface CMsgStickerHeroes {
    heroes: CMsgStickerHero[];
}
declare const CMsgStickerHeroes: MessageFns<CMsgStickerHeroes>;
interface CMsgHeroRoleStats {
    laneSelectionFlags: number;
    matchCount: number;
    winCount: number;
}
declare const CMsgHeroRoleStats: MessageFns<CMsgHeroRoleStats>;
interface CMsgHeroRoleHeroStats {
    heroId: number;
    roleStats: CMsgHeroRoleStats[];
}
declare const CMsgHeroRoleHeroStats: MessageFns<CMsgHeroRoleHeroStats>;
interface CMsgHeroRoleRankStats {
    rankTier: number;
    heroStats: CMsgHeroRoleHeroStats[];
}
declare const CMsgHeroRoleRankStats: MessageFns<CMsgHeroRoleRankStats>;
interface CMsgHeroRoleAllRanksStats {
    startTimestamp: number;
    endTimestamp: number;
    rankStats: CMsgHeroRoleRankStats[];
}
declare const CMsgHeroRoleAllRanksStats: MessageFns<CMsgHeroRoleAllRanksStats>;
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
declare const CMsgMapStatsSnapshot: MessageFns<CMsgMapStatsSnapshot>;
interface CMsgGlobalMapStats {
    current: CMsgMapStatsSnapshot | undefined;
    windowStart: CMsgMapStatsSnapshot | undefined;
    windowEnd: CMsgMapStatsSnapshot | undefined;
}
declare const CMsgGlobalMapStats: MessageFns<CMsgGlobalMapStats>;
interface CMsgTrackedStat {
    trackedStatId: number;
    trackedStatValue: number;
}
declare const CMsgTrackedStat: MessageFns<CMsgTrackedStat>;
interface CMsgDOTAClaimEventActionResponse {
    result: CMsgDOTAClaimEventActionResponse_ResultCode;
    rewardResults: CMsgDOTAClaimEventActionResponse_GrantedRewardData[];
    actionId: number;
}
declare const CMsgDOTAClaimEventActionResponse: MessageFns<CMsgDOTAClaimEventActionResponse>;
interface CMsgDOTAClaimEventActionResponse_MysteryItemRewardData {
    itemDef: number;
    itemCategory: number;
}
declare const CMsgDOTAClaimEventActionResponse_MysteryItemRewardData: MessageFns<CMsgDOTAClaimEventActionResponse_MysteryItemRewardData>;
interface CMsgDOTAClaimEventActionResponse_LootListRewardData {
    itemDef: number[];
}
declare const CMsgDOTAClaimEventActionResponse_LootListRewardData: MessageFns<CMsgDOTAClaimEventActionResponse_LootListRewardData>;
interface CMsgDOTAClaimEventActionResponse_ActionListRewardData {
    actionId: number;
    resultRewardData: Buffer;
}
declare const CMsgDOTAClaimEventActionResponse_ActionListRewardData: MessageFns<CMsgDOTAClaimEventActionResponse_ActionListRewardData>;
interface CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData {
    tokens: CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData_TokenQuantity[];
}
declare const CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData: MessageFns<CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData>;
interface CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData_TokenQuantity {
    tokenId: number;
    tokenCount: number;
}
declare const CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData_TokenQuantity: MessageFns<CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData_TokenQuantity>;
interface CMsgDOTAClaimEventActionResponse_GrantedRewardData {
    grantIndex: number;
    scoreIndex: number;
    rewardIndex: number;
    rewardData: Buffer;
    actionId: number;
}
declare const CMsgDOTAClaimEventActionResponse_GrantedRewardData: MessageFns<CMsgDOTAClaimEventActionResponse_GrantedRewardData>;
interface CMsgClientToGCDotaLabsFeedback {
    language: number;
    feedbackItem: number;
    feedback: string;
}
declare const CMsgClientToGCDotaLabsFeedback: MessageFns<CMsgClientToGCDotaLabsFeedback>;
interface CMsgClientToGCDotaLabsFeedbackResponse {
    response: CMsgClientToGCDotaLabsFeedbackResponse_EResponse;
}
declare const CMsgClientToGCDotaLabsFeedbackResponse: MessageFns<CMsgClientToGCDotaLabsFeedbackResponse>;
interface CDotaMsgPredictionResult {
    accountId: number;
    matchId: string;
    correct: boolean;
    predictions: CDotaMsgPredictionResult_Prediction[];
}
declare const CDotaMsgPredictionResult: MessageFns<CDotaMsgPredictionResult>;
interface CDotaMsgPredictionResult_Prediction {
    itemDef: number;
    numCorrect: number;
    numFails: number;
    result: CDotaMsgPredictionResult_Prediction_EResult;
    grantedItemDefs: number[];
}
declare const CDotaMsgPredictionResult_Prediction: MessageFns<CDotaMsgPredictionResult_Prediction>;
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

export { CMsgDOTAFantasyPlayerStats as $, CMsgBattleCupVictory as A, CMsgClientToGCDotaLabsFeedback as B, CMsgDOTAProfileCard as C, CMsgClientToGCDotaLabsFeedbackResponse as D, EDOTAMMRBoostType as E, CMsgClientToGCDotaLabsFeedbackResponse_EResponse as F, CMsgClientToGCRerollPlayerChallenge as G, CMsgConsumableUsage as H, CMsgCustomGameWhitelist as I, CMsgCustomGameWhitelistForEdit as J, CMsgCustomGameWhitelistForEdit_WhitelistEntry as K, CMsgDOTABotDebugInfo as L, CMsgDOTABotDebugInfo_Bot as M, CMsgDOTABotDebugInfo_Bot_Action as N, CMsgDOTABotDebugInfo_Bot_Mode as O, CMsgDOTABroadcastNotification as P, CMsgDOTABroadcastTimelineEvent as Q, CMsgDOTAClaimEventActionResponse as R, CMsgDOTAClaimEventActionResponse_ActionListRewardData as S, CMsgDOTAClaimEventActionResponse_GrantedRewardData as T, CMsgDOTAClaimEventActionResponse_LootListRewardData as U, CMsgDOTAClaimEventActionResponse_MysteryItemRewardData as V, CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData as W, CMsgDOTAClaimEventActionResponse_OverworldTokenRewardData_TokenQuantity as X, CMsgDOTAClaimEventActionResponse_ResultCode as Y, CMsgDOTACombatLogEntry as Z, CMsgDOTAFantasyPlayerMatchStats as _, CMsgDOTAMatchMinimal as a, CMsgGameDataAbilities as a$, CMsgDOTAHasItemQuery as a0, CMsgDOTAHasItemResponse as a1, CMsgDOTAMatchMinimal_Player as a2, CMsgDOTAMatchMinimal_Tourney as a3, CMsgDOTAMatch_BroadcasterChannel as a4, CMsgDOTAMatch_BroadcasterInfo as a5, CMsgDOTAMatch_Coach as a6, CMsgDOTAMatch_CustomGameData as a7, CMsgDOTAMatch_Player as a8, CMsgDOTAMatch_Player_CustomGameData as a9, CMsgDOTARealtimeGameStats_GraphData_eLocation as aA, CMsgDOTARealtimeGameStats_GraphData_eStat as aB, CMsgDOTARealtimeGameStats_HeroToHeroStats as aC, CMsgDOTARealtimeGameStats_ItemDetails as aD, CMsgDOTARealtimeGameStats_KillDetails as aE, CMsgDOTARealtimeGameStats_MatchDetails as aF, CMsgDOTARealtimeGameStats_PickBanDetails as aG, CMsgDOTARealtimeGameStats_PlayerDetails as aH, CMsgDOTARealtimeGameStats_TeamDetails as aI, CMsgDOTASDOHeroStatsHistory as aJ, CMsgDOTASeasonPredictions as aK, CMsgDOTASeasonPredictions_Prediction as aL, CMsgDOTASeasonPredictions_Prediction_Answers as aM, CMsgDOTASeasonPredictions_Prediction_EAnswerType as aN, CMsgDOTASeasonPredictions_Prediction_EPredictionType as aO, CMsgDOTATriviaQuestion as aP, CMsgDOTATriviaQuestionAnswersSummary as aQ, CMsgGCGetPlayerCardItemInfo as aR, CMsgGCGetPlayerCardItemInfoResponse as aS, CMsgGCGetPlayerCardItemInfoResponse_PlayerCardInfo as aT, CMsgGCRerollPlayerChallengeResponse as aU, CMsgGCRerollPlayerChallengeResponse_EResult as aV, CMsgGCToClientMatchGroupsVersion as aW, CMsgGCTopCustomGamesList as aX, CMsgGCtoGCAssociatedExploiterAccountInfo as aY, CMsgGCtoGCAssociatedExploiterAccountInfoResponse as aZ, CMsgGCtoGCAssociatedExploiterAccountInfoResponse_Account as a_, CMsgDOTAMatch_Player_HeroDamageReceived as aa, CMsgDOTAMatch_Player_HeroDamageType as ab, CMsgDOTAMatch_ReplayState as ac, CMsgDOTAProfileCard_EStatID as ad, CMsgDOTAProfileCard_Slot as ae, CMsgDOTAProfileCard_Slot_Emoticon as af, CMsgDOTAProfileCard_Slot_Hero as ag, CMsgDOTAProfileCard_Slot_Item as ah, CMsgDOTAProfileCard_Slot_Stat as ai, CMsgDOTAProfileCard_Slot_Team as aj, CMsgDOTAProfileCard_Slot_Trophy as ak, CMsgDOTARealtimeGameStats as al, CMsgDOTARealtimeGameStatsTerse as am, CMsgDOTARealtimeGameStatsTerse_BuildingDetails as an, CMsgDOTARealtimeGameStatsTerse_GraphData as ao, CMsgDOTARealtimeGameStatsTerse_MatchDetails as ap, CMsgDOTARealtimeGameStatsTerse_PickBanDetails as aq, CMsgDOTARealtimeGameStatsTerse_PlayerDetails as ar, CMsgDOTARealtimeGameStatsTerse_TeamDetails as as, CMsgDOTARealtimeGameStats_AbilityDetails as at, CMsgDOTARealtimeGameStats_AbilityList as au, CMsgDOTARealtimeGameStats_BroadcasterDetails as av, CMsgDOTARealtimeGameStats_BuildingDetails as aw, CMsgDOTARealtimeGameStats_GraphData as ax, CMsgDOTARealtimeGameStats_GraphData_LocationStats as ay, CMsgDOTARealtimeGameStats_GraphData_TeamLocationStats as az, CMsgTrackedStat as b, CMsgStickerbookSticker as b$, CMsgGameDataAbilityOrItem as b0, CMsgGameDataAbilityOrItemList as b1, CMsgGameDataFacetAbilityBonus as b2, CMsgGameDataHero as b3, CMsgGameDataHeroList as b4, CMsgGameDataHeroList_HeroInfo as b5, CMsgGameDataHero_Facet as b6, CMsgGameDataHeroes as b7, CMsgGameDataItemAbilityList as b8, CMsgGameDataItemAbilityList_ItemAbilityInfo as b9, CMsgMatchEventActionGrants as bA, CMsgMatchEventActionGrants_PlayerGrants as bB, CMsgMatchTips as bC, CMsgMatchTips_SingleTip as bD, CMsgPendingEventAward as bE, CMsgPlayerCard as bF, CMsgPlayerCard_StatModifier as bG, CMsgPlayerHeroRecentAccomplishments as bH, CMsgPlayerMatchRecord as bI, CMsgPlayerRecentAccomplishments as bJ, CMsgPlayerRecentCommends as bK, CMsgPlayerRecentMatchInfo as bL, CMsgPlayerRecentMatchOutcomes as bM, CMsgPlayerTitleData as bN, CMsgPredictionChoice as bO, CMsgPullTabsData as bP, CMsgPullTabsData_Jackpot as bQ, CMsgPullTabsData_Slot as bR, CMsgRecentAccomplishments as bS, CMsgRecentMatchInfo as bT, CMsgServerToGCRequestPlayerRecentAccomplishments as bU, CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse as bV, CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponse as bW, CMsgStickerHero as bX, CMsgStickerHeroes as bY, CMsgStickerbook as bZ, CMsgStickerbookPage as b_, CMsgGameDataItemAbilityList_ItemAbilityInfo_Recipe as ba, CMsgGameDataItems as bb, CMsgGameDataSpecialValueBonus as bc, CMsgGameDataSpecialValues as bd, CMsgGlobalMapStats as be, CMsgHeroRoleAllRanksStats as bf, CMsgHeroRoleHeroStats as bg, CMsgHeroRoleRankStats as bh, CMsgHeroRoleStats as bi, CMsgInGamePrediction as bj, CMsgInGamePrediction_EPredictionType as bk, CMsgInGamePrediction_ERandomSelectionGroupT as bl, CMsgInGamePrediction_ERawValueTypeT as bm, CMsgInGamePrediction_EResolutionTypeT as bn, CMsgInGamePrediction_QueryKeyValues as bo, CMsgLeagueAdminList as bp, CMsgLeagueWatchedGames as bq, CMsgLeagueWatchedGames_League as br, CMsgLeagueWatchedGames_Series as bs, CMsgLobbyAbilityDraftData as bt, CMsgLobbyBattleCupVictoryList as bu, CMsgLobbyFeaturedGamemodeProgress as bv, CMsgLobbyFeaturedGamemodeProgress_AccountProgress as bw, CMsgMapStatsSnapshot as bx, CMsgMatchConsumableUsage as by, CMsgMatchConsumableUsage_PlayerUsage as bz, EEvent as c, EStickerbookPageType as c$, CMsgStickerbookTeamPageOrderSequence as c0, CMsgSuccessfulHero as c1, CMsgUnderDraftData as c2, CMsgUnderDraftData_BenchSlot as c3, CMsgUnderDraftData_ShopSlot as c4, CPartySearchClientParty as c5, CProtoItemHeroStatue as c6, CSODOTAChatWheel as c7, CSODOTAGameAccountClient as c8, CSODOTAGameAccountClient_RoleHandicap as c9, ECustomGameWhitelistState as cA, EDOTAGCSessionNeed as cB, EDOTAMatchPlayerTimeCustomStat as cC, EDOTAPlayerMMRType as cD, EDOTATriviaQuestionCategory as cE, EDPCFavoriteType as cF, EDPCPushNotification as cG, EEventActionScoreMode as cH, EHeroRelicRarity as cI, EItemSuggestPreference as cJ, ELaneType as cK, ELeagueAuditAction as cL, ELeagueBroadcastProvider as cM, ELeaguePhase as cN, ELeagueStatus as cO, ELeagueTier as cP, ELeagueTierCategory as cQ, EMatchGroupServerStatus as cR, EMatchOutcome as cS, ENewBloomGiftingResponse as cT, EOverwatchConviction as cU, EOverwatchReportReason as cV, EPlayerChallengeHistoryType as cW, EProfileCardSlotType as cX, ERankType as cY, ESpecialPingValue as cZ, EStickerbookAuditAction as c_, CSODOTAGameAccountPlus as ca, CSODOTAMapLocationState as cb, CSODOTAPlayerChallenge as cc, CSOEconItemDropRateBonus as cd, CSOEconItemTournamentPassport as ce, DOTABehaviorLevelT as cf, DOTABotDifficulty as cg, DOTAChatChannelTypeT as ch, DOTACommLevelT as ci, DOTACommTypeT as cj, DOTAConnectionStateT as ck, DOTAGameMode as cl, DOTAGameState as cm, DOTAJoinLobbyResult as cn, DOTALeaverStatusT as co, DOTALobbyReadyState as cp, DOTALobbyVisibility as cq, DOTALowPriorityBanType as cr, DOTAMatchVote as cs, DOTASelectionPriorityChoice as ct, DOTASelectionPriorityRules as cu, DOTATournamentEvents as cv, EBadgeType as cw, EBroadcastTimelineEvent as cx, ECandyShopUpgrade as cy, EChatSpecialPrivileges as cz, dotaGcTeam as d, dOTALobbyReadyStateToJSON as d$, ETimerAlertType as d0, ETourneyQueueDeadlineState as d1, FantasyGemType as d2, FantasyRoles as d3, FantasyScoring as d4, FantasySelectionMode as d5, FantasyTeamSlots as d6, MatchLanguages as d7, MatchType as d8, cDotaMsgPredictionResult_Prediction_EResultFromJSON as d9, cMsgInGamePrediction_ERawValueTypeTFromJSON as dA, cMsgInGamePrediction_ERawValueTypeTToJSON as dB, cMsgInGamePrediction_EResolutionTypeTFromJSON as dC, cMsgInGamePrediction_EResolutionTypeTToJSON as dD, cMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponseFromJSON as dE, cMsgServerToGCRequestPlayerRecentAccomplishmentsResponse_EResponseToJSON as dF, dOTABehaviorLevelTFromJSON as dG, dOTABehaviorLevelTToJSON as dH, dOTABotDifficultyFromJSON as dI, dOTABotDifficultyToJSON as dJ, dOTAChatChannelTypeTFromJSON as dK, dOTAChatChannelTypeTToJSON as dL, dOTACommLevelTFromJSON as dM, dOTACommLevelTToJSON as dN, dOTACommTypeTFromJSON as dO, dOTACommTypeTToJSON as dP, dOTAConnectionStateTFromJSON as dQ, dOTAConnectionStateTToJSON as dR, dOTAGameModeFromJSON as dS, dOTAGameModeToJSON as dT, dOTAGameStateFromJSON as dU, dOTAGameStateToJSON as dV, dOTAJoinLobbyResultFromJSON as dW, dOTAJoinLobbyResultToJSON as dX, dOTALeaverStatusTFromJSON as dY, dOTALeaverStatusTToJSON as dZ, dOTALobbyReadyStateFromJSON as d_, cDotaMsgPredictionResult_Prediction_EResultToJSON as da, cMsgClientToGCDotaLabsFeedbackResponse_EResponseFromJSON as db, cMsgClientToGCDotaLabsFeedbackResponse_EResponseToJSON as dc, cMsgDOTAClaimEventActionResponse_ResultCodeFromJSON as dd, cMsgDOTAClaimEventActionResponse_ResultCodeToJSON as de, cMsgDOTAMatch_Player_HeroDamageTypeFromJSON as df, cMsgDOTAMatch_Player_HeroDamageTypeToJSON as dg, cMsgDOTAMatch_ReplayStateFromJSON as dh, cMsgDOTAMatch_ReplayStateToJSON as di, cMsgDOTAProfileCard_EStatIDFromJSON as dj, cMsgDOTAProfileCard_EStatIDToJSON as dk, cMsgDOTARealtimeGameStats_GraphData_eLocationFromJSON as dl, cMsgDOTARealtimeGameStats_GraphData_eLocationToJSON as dm, cMsgDOTARealtimeGameStats_GraphData_eStatFromJSON as dn, cMsgDOTARealtimeGameStats_GraphData_eStatToJSON as dp, cMsgDOTASeasonPredictions_Prediction_EAnswerTypeFromJSON as dq, cMsgDOTASeasonPredictions_Prediction_EAnswerTypeToJSON as dr, cMsgDOTASeasonPredictions_Prediction_EPredictionTypeFromJSON as ds, cMsgDOTASeasonPredictions_Prediction_EPredictionTypeToJSON as dt, cMsgGCRerollPlayerChallengeResponse_EResultFromJSON as du, cMsgGCRerollPlayerChallengeResponse_EResultToJSON as dv, cMsgInGamePrediction_EPredictionTypeFromJSON as dw, cMsgInGamePrediction_EPredictionTypeToJSON as dx, cMsgInGamePrediction_ERandomSelectionGroupTFromJSON as dy, cMsgInGamePrediction_ERandomSelectionGroupTToJSON as dz, CMsgDOTAMatch as e, eLeaguePhaseFromJSON as e$, dOTALobbyVisibilityFromJSON as e0, dOTALobbyVisibilityToJSON as e1, dOTALowPriorityBanTypeFromJSON as e2, dOTALowPriorityBanTypeToJSON as e3, dOTAMatchVoteFromJSON as e4, dOTAMatchVoteToJSON as e5, dOTASelectionPriorityChoiceFromJSON as e6, dOTASelectionPriorityChoiceToJSON as e7, dOTASelectionPriorityRulesFromJSON as e8, dOTASelectionPriorityRulesToJSON as e9, eDOTAMMRBoostTypeToJSON as eA, eDOTAMatchPlayerTimeCustomStatFromJSON as eB, eDOTAMatchPlayerTimeCustomStatToJSON as eC, eDOTAPlayerMMRTypeFromJSON as eD, eDOTAPlayerMMRTypeToJSON as eE, eDOTATriviaQuestionCategoryFromJSON as eF, eDOTATriviaQuestionCategoryToJSON as eG, eDPCFavoriteTypeFromJSON as eH, eDPCFavoriteTypeToJSON as eI, eDPCPushNotificationFromJSON as eJ, eDPCPushNotificationToJSON as eK, eEventActionScoreModeFromJSON as eL, eEventActionScoreModeToJSON as eM, eEventFromJSON as eN, eEventToJSON as eO, eHeroRelicRarityFromJSON as eP, eHeroRelicRarityToJSON as eQ, eItemSuggestPreferenceFromJSON as eR, eItemSuggestPreferenceToJSON as eS, eLaneTypeFromJSON as eT, eLaneTypeToJSON as eU, eLeagueAuditActionFromJSON as eV, eLeagueAuditActionToJSON as eW, eLeagueBroadcastProviderFromJSON as eX, eLeagueBroadcastProviderToJSON as eY, eLeagueDivisionFromJSON as eZ, eLeagueDivisionToJSON as e_, dOTATournamentEventsFromJSON as ea, dOTATournamentEventsToJSON as eb, dotaBotMode as ec, dotaBotModeFromJSON as ed, dotaBotModeToJSON as ee, dotaCmPick as ef, dotaCmPickFromJSON as eg, dotaCmPickToJSON as eh, dotaCombatlogTypes as ei, dotaCombatlogTypesFromJSON as ej, dotaCombatlogTypesToJSON as ek, dotaGcTeamFromJSON as el, dotaGcTeamToJSON as em, eBadgeTypeFromJSON as en, eBadgeTypeToJSON as eo, eBroadcastTimelineEventFromJSON as ep, eBroadcastTimelineEventToJSON as eq, eCandyShopUpgradeFromJSON as er, eCandyShopUpgradeToJSON as es, eChatSpecialPrivilegesFromJSON as et, eChatSpecialPrivilegesToJSON as eu, eCustomGameWhitelistStateFromJSON as ev, eCustomGameWhitelistStateToJSON as ew, eDOTAGCSessionNeedFromJSON as ex, eDOTAGCSessionNeedToJSON as ey, eDOTAMMRBoostTypeFromJSON as ez, ELeagueRegion as f, eLeaguePhaseToJSON as f0, eLeagueRegionFromJSON as f1, eLeagueRegionToJSON as f2, eLeagueStatusFromJSON as f3, eLeagueStatusToJSON as f4, eLeagueTierCategoryFromJSON as f5, eLeagueTierCategoryToJSON as f6, eLeagueTierFromJSON as f7, eLeagueTierToJSON as f8, eMatchGroupServerStatusFromJSON as f9, fantasyGemTypeToJSON as fA, fantasyRolesFromJSON as fB, fantasyRolesToJSON as fC, fantasyScoringFromJSON as fD, fantasyScoringToJSON as fE, fantasySelectionModeFromJSON as fF, fantasySelectionModeToJSON as fG, fantasyTeamSlotsFromJSON as fH, fantasyTeamSlotsToJSON as fI, matchLanguagesFromJSON as fJ, matchLanguagesToJSON as fK, matchTypeFromJSON as fL, matchTypeToJSON as fM, eMatchGroupServerStatusToJSON as fa, eMatchOutcomeFromJSON as fb, eMatchOutcomeToJSON as fc, eNewBloomGiftingResponseFromJSON as fd, eNewBloomGiftingResponseToJSON as fe, eOverwatchConvictionFromJSON as ff, eOverwatchConvictionToJSON as fg, eOverwatchReportReasonFromJSON as fh, eOverwatchReportReasonToJSON as fi, ePlayerChallengeHistoryTypeFromJSON as fj, ePlayerChallengeHistoryTypeToJSON as fk, eProfileCardSlotTypeFromJSON as fl, eProfileCardSlotTypeToJSON as fm, eRankTypeFromJSON as fn, eRankTypeToJSON as fo, eSpecialPingValueFromJSON as fp, eSpecialPingValueToJSON as fq, eStickerbookAuditActionFromJSON as fr, eStickerbookAuditActionToJSON as fs, eStickerbookPageTypeFromJSON as ft, eStickerbookPageTypeToJSON as fu, eTimerAlertTypeFromJSON as fv, eTimerAlertTypeToJSON as fw, eTourneyQueueDeadlineStateFromJSON as fx, eTourneyQueueDeadlineStateToJSON as fy, fantasyGemTypeFromJSON as fz, ELeagueDivision as g, CDOTAClientHardwareSpecs as h, CDOTASaveGame as i, CDOTASaveGame_Player as j, CDOTASaveGame_SaveInstance as k, CDOTASaveGame_SaveInstance_PlayerPositions as l, CDotaMsgPredictionResult as m, CDotaMsgPredictionResult_Prediction as n, CDotaMsgPredictionResult_Prediction_EResult as o, CMatchAdditionalUnitInventory as p, CMatchClip as q, CMatchHeroSelectEvent as r, CMatchPlayerAbilityUpgrade as s, CMatchPlayerPermanentBuff as t, CMatchPlayerTimedCustomStat as u, CMatchPlayerTimedStats as v, CMatchTeamTimedStats as w, CMsgArcanaVoteMatchVotes as x, CMsgAvailablePredictions as y, CMsgAvailablePredictions_MatchPrediction as z };
