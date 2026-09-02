"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; } var _class; var _class2;

































































































































































































































































































































































































































































































var _chunkCU4ZEV3Ucjs = require('./chunk-CU4ZEV3U.cjs');

// src/gc/client.ts
var _events = require('events');

// src/gc/errors.ts
var Dota2GCError = class extends Error {
  constructor(message, options) {
    super(message, options);
    this.name = new.target.name;
  }
};
var NoEncoderError = class extends Dota2GCError {
  constructor(msgId, messageName) {
    super(`No protobuf encoder for GC message ${_nullishCoalesce(messageName, () => ( msgId))} (${msgId})`);
    this.msgId = msgId;
    this.messageName = messageName;
  }
  
  
};
var NoDecoderError = class extends Dota2GCError {
  constructor(msgId, payload, messageName) {
    super(`No protobuf decoder for GC message ${_nullishCoalesce(messageName, () => ( msgId))} (${msgId}), ${payload.length} raw bytes attached`);
    this.msgId = msgId;
    this.payload = payload;
    this.messageName = messageName;
  }
  
  
  
};
var UnexpectedResponseError = class extends Dota2GCError {
  constructor(requestId, expectedId, msgId, payload, messageName) {
    super(
      `GC answered request ${requestId} with ${_nullishCoalesce(messageName, () => ( msgId))} (${msgId}), expected ${expectedId}; ${payload.length} raw bytes attached`
    );
    this.requestId = requestId;
    this.expectedId = expectedId;
    this.msgId = msgId;
    this.payload = payload;
    this.messageName = messageName;
  }
  
  
  
  
  
};
var JobTimeoutError = class extends Dota2GCError {
  constructor(msgId, timeoutMs) {
    super(`GC job ${msgId} timed out after ${timeoutMs} ms`);
    this.msgId = msgId;
    this.timeoutMs = timeoutMs;
  }
  
  
};
var JobAbortedError = class extends Dota2GCError {
  constructor(msgId, cause) {
    super(`GC job ${msgId} aborted`, { cause });
    this.msgId = msgId;
  }
  
};
var NotConnectedError = class extends Dota2GCError {
  constructor(message = "Cannot send GC message: not logged into Steam") {
    super(message);
  }
};

// src/gc/messages.ts
var clientMessages = {
  /** k_EMsgGCClientHello */
  4006: _chunkCU4ZEV3Ucjs.CMsgClientHello,
  /** k_EMsgGCServerHello */
  4007: _chunkCU4ZEV3Ucjs.CMsgClientHello,
  /** k_EMsgGCInviteToParty */
  4501: _chunkCU4ZEV3Ucjs.CMsgInviteToParty,
  /** k_EMsgGCInvitationCreated */
  4502: _chunkCU4ZEV3Ucjs.CMsgInvitationCreated,
  /** k_EMsgGCKickFromParty */
  4504: _chunkCU4ZEV3Ucjs.CMsgKickFromParty,
  /** k_EMsgGCLeaveParty */
  4505: _chunkCU4ZEV3Ucjs.CMsgLeaveParty,
  /** k_EMsgGCServerAvailable */
  4506: _chunkCU4ZEV3Ucjs.CMsgServerAvailable,
  /** k_EMsgGCLANServerAvailable */
  4511: _chunkCU4ZEV3Ucjs.CMsgLANServerAvailable,
  /** k_EMsgGCInviteToLobby */
  4512: _chunkCU4ZEV3Ucjs.CMsgInviteToLobby,
  /** k_EMsgGCToGCPerformManualOp */
  4516: _chunkCU4ZEV3Ucjs.CMsgGCToGCPerformManualOp,
  /** k_EMsgGCToGCPerformManualOpCompleted */
  4517: _chunkCU4ZEV3Ucjs.CMsgGCToGCPerformManualOpCompleted,
  /** k_EMsgGCToGCReloadServerRegionSettings */
  4518: _chunkCU4ZEV3Ucjs.CMsgGCToGCReloadServerRegionSettings,
  /** k_EMsgGCAdditionalWelcomeMsgList */
  4519: _chunkCU4ZEV3Ucjs.CMsgGCAdditionalWelcomeMsgList,
  /** k_EMsgGCToServerApplyRemoteConVars */
  4521: _chunkCU4ZEV3Ucjs.CMsgGCToServerApplyRemoteConVars,
  /** k_EMsgClientToGCIntegrityStatus */
  4522: _chunkCU4ZEV3Ucjs.CMsgClientToGCIntegrityStatus,
  /** k_EMsgClientToGCAggregateMetrics */
  4523: _chunkCU4ZEV3Ucjs.CMsgClientToGCAggregateMetrics,
  /** k_EMsgGCToServerSteamLearnAccessTokensChanged */
  4525: _chunkCU4ZEV3Ucjs.CMsgGCToServerSteamLearnAccessTokensChanged,
  /** k_EMsgGCToServerSteamLearnUseHTTP */
  4526: _chunkCU4ZEV3Ucjs.CMsgGCToServerSteamLearnUseHTTP,
  /** k_EMsgGCBroadcastNotification */
  7056: _chunkCU4ZEV3Ucjs.CMsgDOTABroadcastNotification,
  /** k_EMsgGCKickedFromMatchmakingQueue */
  7071: _chunkCU4ZEV3Ucjs.CMsgDOTAKickedFromMatchmakingQueue,
  /** k_EMsgGCSpectateFriendGame */
  7073: _chunkCU4ZEV3Ucjs.CMsgSpectateFriendGame,
  /** k_EMsgGCReportsRemainingRequest */
  7076: _chunkCU4ZEV3Ucjs.CMsgDOTAReportsRemainingRequest,
  /** k_EMsgGCSubmitPlayerReport */
  7078: _chunkCU4ZEV3Ucjs.CMsgDOTASubmitPlayerReport,
  /** k_EMsgGCSubmitPlayerReportV2 */
  7082: _chunkCU4ZEV3Ucjs.CMsgDOTASubmitPlayerReportV2,
  /** k_EMsgGCSubmitPlayerReportResponseV2 */
  7083: _chunkCU4ZEV3Ucjs.CMsgDOTASubmitPlayerReportResponseV2,
  /** k_EMsgGCWatchGame */
  7091: _chunkCU4ZEV3Ucjs.CMsgWatchGame,
  /** k_EMsgGCMatchDetailsRequest */
  7095: _chunkCU4ZEV3Ucjs.CMsgGCMatchDetailsRequest,
  /** k_EMsgGCCancelWatchGame */
  7097: _chunkCU4ZEV3Ucjs.CMsgCancelWatchGame,
  /** k_EMsgGCPopup */
  7102: _chunkCU4ZEV3Ucjs.CMsgDOTAPopup,
  /** k_EMsgGCBalancedShuffleLobby */
  7188: _chunkCU4ZEV3Ucjs.CMsgBalancedShuffleLobby,
  /** k_EMsgGCMatchmakingStatsRequest */
  7197: _chunkCU4ZEV3Ucjs.CMsgDOTAMatchmakingStatsRequest,
  /** k_EMsgGCSetMatchHistoryAccess */
  7200: _chunkCU4ZEV3Ucjs.CMsgDOTASetMatchHistoryAccess,
  /** k_EMsgUpgradeLeagueItem */
  7203: _chunkCU4ZEV3Ucjs.CMsgUpgradeLeagueItem,
  /** k_EMsgGCWatchDownloadedReplay */
  7206: _chunkCU4ZEV3Ucjs.CMsgGCWatchDownloadedReplay,
  /** k_EMsgClientsRejoinChatChannels */
  7217: _chunkCU4ZEV3Ucjs.CMsgClientsRejoinChatChannels,
  /** k_EMsgGCGetHeroStandings */
  7274: _chunkCU4ZEV3Ucjs.CMsgGCGetHeroStandings,
  /** k_EMsgGCItemEditorReservationsRequest */
  7283: _chunkCU4ZEV3Ucjs.CMsgGCItemEditorReservationsRequest,
  /** k_EMsgGCItemEditorReserveItemDef */
  7285: _chunkCU4ZEV3Ucjs.CMsgGCItemEditorReserveItemDef,
  /** k_EMsgGCItemEditorReleaseReservation */
  7287: _chunkCU4ZEV3Ucjs.CMsgGCItemEditorReleaseReservation,
  /** k_EMsgGCFlipLobbyTeams */
  7320: _chunkCU4ZEV3Ucjs.CMsgFlipLobbyTeams,
  /** k_EMsgGCNotifyAccountFlagsChange */
  7326: _chunkCU4ZEV3Ucjs.CMsgDOTANotifyAccountFlagsChange,
  /** k_EMsgGCSetProfilePrivacy */
  7327: _chunkCU4ZEV3Ucjs.CMsgDOTASetProfilePrivacy,
  /** k_EMsgGCClientSuspended */
  7342: _chunkCU4ZEV3Ucjs.CMsgClientSuspended,
  /** k_EMsgGCLobbyUpdateBroadcastChannelInfo */
  7367: _chunkCU4ZEV3Ucjs.CMsgGCLobbyUpdateBroadcastChannelInfo,
  /** k_EMsgDOTAGetEventPoints */
  7387: _chunkCU4ZEV3Ucjs.CMsgDOTAGetEventPoints,
  /** k_EMsgGCPartyLeaderWatchGamePrompt */
  7397: _chunkCU4ZEV3Ucjs.CMsgPartyLeaderWatchGamePrompt,
  /** k_EMsgGCCompendiumDataRequest */
  7406: _chunkCU4ZEV3Ucjs.CMsgDOTACompendiumDataRequest,
  /** k_EMsgDOTAGetPlayerMatchHistory */
  7408: _chunkCU4ZEV3Ucjs.CMsgDOTAGetPlayerMatchHistory,
  /** k_EMsgGCNotificationsRequest */
  7427: _chunkCU4ZEV3Ucjs.CMsgGCNotificationsRequest,
  /** k_EMsgGCLeagueAdminList */
  7434: _chunkCU4ZEV3Ucjs.CMsgLeagueAdminList,
  /** k_EMsgGCNotificationsMarkReadRequest */
  7435: _chunkCU4ZEV3Ucjs.CMsgGCNotificationsMarkReadRequest,
  /** k_EMsgGCRankedPlayerInfoSubmit */
  7454: _chunkCU4ZEV3Ucjs.CMsgGCRankedPlayerInfoSubmit,
  /** k_EMsgGCPlayerInfoSubmit */
  7456: _chunkCU4ZEV3Ucjs.CMsgGCPlayerInfoSubmit,
  /** k_EMsgGCHasItemQuery */
  7484: _chunkCU4ZEV3Ucjs.CMsgDOTAHasItemQuery,
  /** k_EMsgClientToGCEmoticonDataRequest */
  7503: _chunkCU4ZEV3Ucjs.CMsgClientToGCEmoticonDataRequest,
  /** k_EMsgDOTARedeemItem */
  7518: _chunkCU4ZEV3Ucjs.CMsgDOTARedeemItem,
  /** k_EMsgClientToGCGetAllHeroProgress */
  7521: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetAllHeroProgress,
  /** k_EMsgClientToGCGetTrophyList */
  7527: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetTrophyList,
  /** k_EMsgClientToGCGetProfileCard */
  7534: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetProfileCard,
  /** k_EMsgClientToGCSetProfileCardSlots */
  7538: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetProfileCardSlots,
  /** k_EMsgClientToGCCreateHeroStatue */
  7547: _chunkCU4ZEV3Ucjs.CMsgClientToGCCreateHeroStatue,
  /** k_EMsgLobbyEventPoints */
  7572: _chunkCU4ZEV3Ucjs.CMsgLobbyEventPoints,
  /** k_EMsgClientToGCRerollPlayerChallenge */
  7584: _chunkCU4ZEV3Ucjs.CMsgClientToGCRerollPlayerChallenge,
  /** k_EMsgClientToGCApplyGemCombiner */
  7603: _chunkCU4ZEV3Ucjs.CMsgClientToGCApplyGemCombiner,
  /** k_EMsgClientToGCGetAllHeroOrder */
  7606: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetAllHeroOrder,
  /** k_EMsgClientToGCPlayerCardSpecificPurchaseRequest */
  7627: _chunkCU4ZEV3Ucjs.CMsgClientToGCPlayerCardSpecificPurchaseRequest,
  /** k_EMsgClientToGCGetFilteredPlayers */
  7662: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetFilteredPlayers,
  /** k_EMsgClientToGCRemoveFilteredPlayer */
  7664: _chunkCU4ZEV3Ucjs.CMsgClientToGCRemoveFilteredPlayer,
  /** k_EMsgClientToGCUpdatePartyBeacon */
  7669: _chunkCU4ZEV3Ucjs.CMsgClientToGCUpdatePartyBeacon,
  /** k_EMsgClientToGCRequestActiveBeaconParties */
  7670: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestActiveBeaconParties,
  /** k_EMsgClientToGCManageFavorites */
  7672: _chunkCU4ZEV3Ucjs.CMsgClientToGCManageFavorites,
  /** k_EMsgClientToGCJoinPartyFromBeacon */
  7674: _chunkCU4ZEV3Ucjs.CMsgClientToGCJoinPartyFromBeacon,
  /** k_EMsgClientToGCGetFavoritePlayers */
  7676: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetFavoritePlayers,
  /** k_EMsgClientToGCVerifyFavoritePlayers */
  7678: _chunkCU4ZEV3Ucjs.CMsgClientToGCVerifyFavoritePlayers,
  /** k_EMsgClientToGCPurchaseLabyrinthBlessings */
  7684: _chunkCU4ZEV3Ucjs.CMsgClientToGCPurchaseLabyrinthBlessings,
  /** k_EMsgClientToGCPurchaseFilteredPlayerSlot */
  7686: _chunkCU4ZEV3Ucjs.CMsgClientToGCPurchaseFilteredPlayerSlot,
  /** k_EMsgClientToGCUpdateFilteredPlayerNote */
  7688: _chunkCU4ZEV3Ucjs.CMsgClientToGCUpdateFilteredPlayerNote,
  /** k_EMsgClientToGCClaimSwag */
  7690: _chunkCU4ZEV3Ucjs.CMsgClientToGCClaimSwag,
  /** k_EMsgClientToGCPlayerStatsRequest */
  8006: _chunkCU4ZEV3Ucjs.CMsgClientToGCPlayerStatsRequest,
  /** k_EMsgClientToGCFindTopSourceTVGames */
  8009: _chunkCU4ZEV3Ucjs.CMsgClientToGCFindTopSourceTVGames,
  /** k_EMsgClientToGCSocialFeedPostCommentRequest */
  8016: _chunkCU4ZEV3Ucjs.CMsgClientToGCSocialFeedPostCommentRequest,
  /** k_EMsgClientToGCCustomGamesFriendsPlayedRequest */
  8018: _chunkCU4ZEV3Ucjs.CMsgClientToGCCustomGamesFriendsPlayedRequest,
  /** k_EMsgClientToGCFriendsPlayedCustomGameRequest */
  8020: _chunkCU4ZEV3Ucjs.CMsgClientToGCFriendsPlayedCustomGameRequest,
  /** k_EMsgGCTopCustomGamesList */
  8024: _chunkCU4ZEV3Ucjs.CMsgGCTopCustomGamesList,
  /** k_EMsgClientToGCGetProfileCardStats */
  8034: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetProfileCardStats,
  /** k_EMsgClientToGCTopLeagueMatchesRequest */
  8036: _chunkCU4ZEV3Ucjs.CMsgClientToGCTopLeagueMatchesRequest,
  /** k_EMsgClientToGCTopFriendMatchesRequest */
  8037: _chunkCU4ZEV3Ucjs.CMsgClientToGCTopFriendMatchesRequest,
  /** k_EMsgClientToGCSocialFeedPostMessageRequest */
  8050: _chunkCU4ZEV3Ucjs.CMsgClientToGCSocialFeedPostMessageRequest,
  /** k_EMsgCustomGameListenServerStartedLoading */
  8052: _chunkCU4ZEV3Ucjs.CMsgDOTACustomGameListenServerStartedLoading,
  /** k_EMsgCustomGameClientFinishedLoading */
  8053: _chunkCU4ZEV3Ucjs.CMsgDOTACustomGameClientFinishedLoading,
  /** k_EMsgClientToGCMatchesMinimalRequest */
  8063: _chunkCU4ZEV3Ucjs.CMsgClientToGCMatchesMinimalRequest,
  /** k_EMsgClientToGCGetProfileTickets */
  8073: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetProfileTickets,
  /** k_EMsgClientToGCH264Unsupported */
  8076: _chunkCU4ZEV3Ucjs.CMsgClientToGCH264Unsupported,
  /** k_EMsgClientToGCGetQuestProgress */
  8078: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetQuestProgress,
  /** k_EMsgGCGetHeroStatsHistory */
  8082: _chunkCU4ZEV3Ucjs.CMsgGCGetHeroStatsHistory,
  /** k_EMsgClientToGCWageringRequest */
  8099: _chunkCU4ZEV3Ucjs.CMsgClientToGCWageringRequest,
  /** k_EMsgClientToGCHasPlayerVotedForMVP */
  8111: _chunkCU4ZEV3Ucjs.CMsgClientToGCHasPlayerVotedForMVP,
  /** k_EMsgClientToGCVoteForMVP */
  8113: _chunkCU4ZEV3Ucjs.CMsgClientToGCVoteForMVP,
  /** k_EMsgClientToGCTeammateStatsRequest */
  8124: _chunkCU4ZEV3Ucjs.CMsgClientToGCTeammateStatsRequest,
  /** k_EMsgClientToGCGetGiftPermissions */
  8126: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetGiftPermissions,
  /** k_EMsgClientToGCVoteForArcana */
  8128: _chunkCU4ZEV3Ucjs.CMsgClientToGCVoteForArcana,
  /** k_EMsgClientToGCRequestArcanaVotesRemaining */
  8130: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestArcanaVotesRemaining,
  /** k_EMsgClientToGCPublishUserStat */
  8140: _chunkCU4ZEV3Ucjs.CMsgClientToGCPublishUserStat,
  /** k_EMsgGCSubmitLobbyMVPVote */
  8144: _chunkCU4ZEV3Ucjs.CMsgDOTASubmitLobbyMVPVote,
  /** k_EMsgClientToGCOpenPlayerCardPack */
  8168: _chunkCU4ZEV3Ucjs.CMsgClientToGCOpenPlayerCardPack,
  /** k_EMsgClientToGCSelectCompendiumInGamePrediction */
  8170: _chunkCU4ZEV3Ucjs.CMsgClientToGCSelectCompendiumInGamePrediction,
  /** k_EMsgClientToGCRecyclePlayerCard */
  8174: _chunkCU4ZEV3Ucjs.CMsgClientToGCRecyclePlayerCard,
  /** k_EMsgClientToGCCreatePlayerCardPack */
  8176: _chunkCU4ZEV3Ucjs.CMsgClientToGCCreatePlayerCardPack,
  /** k_EMsgGCGetPlayerCardItemInfo */
  8187: _chunkCU4ZEV3Ucjs.CMsgGCGetPlayerCardItemInfo,
  /** k_EMsgClientToGCTransferSeasonalMMRRequest */
  8193: _chunkCU4ZEV3Ucjs.CMsgClientToGCTransferSeasonalMMRRequest,
  /** k_EMsgClientToGCJoinPlaytest */
  8201: _chunkCU4ZEV3Ucjs.CMsgClientToGCJoinPlaytest,
  /** k_EMsgLobbyPlaytestDetails */
  8203: _chunkCU4ZEV3Ucjs.CMsgLobbyPlaytestDetails,
  /** k_EMsgDOTASetFavoriteTeam */
  8204: _chunkCU4ZEV3Ucjs.CMsgDOTASetFavoriteTeam,
  /** k_EMsgDOTAClaimEventAction */
  8209: _chunkCU4ZEV3Ucjs.CMsgDOTAClaimEventAction,
  /** k_EMsgDOTAGetPeriodicResource */
  8211: _chunkCU4ZEV3Ucjs.CMsgDOTAGetPeriodicResource,
  /** k_EMsgDOTAPeriodicResourceUpdated */
  8213: _chunkCU4ZEV3Ucjs.CMsgDOTAPeriodicResourceUpdated,
  /** k_EMsgSubmitTriviaQuestionAnswer */
  8216: _chunkCU4ZEV3Ucjs.CMsgDOTASubmitTriviaQuestionAnswer,
  /** k_EMsgStartTriviaSession */
  8220: _chunkCU4ZEV3Ucjs.CMsgDOTAStartTriviaSession,
  /** k_EMsgAnchorPhoneNumberRequest */
  8222: _chunkCU4ZEV3Ucjs.CMsgDOTAAnchorPhoneNumberRequest,
  /** k_EMsgUnanchorPhoneNumberRequest */
  8224: _chunkCU4ZEV3Ucjs.CMsgDOTAUnanchorPhoneNumberRequest,
  /** k_EMsgClientToGCQuickStatsRequest */
  8238: _chunkCU4ZEV3Ucjs.CMsgDOTAClientToGCQuickStatsRequest,
  /** k_EMsgSelectionPriorityChoiceRequest */
  8241: _chunkCU4ZEV3Ucjs.CMsgDOTASelectionPriorityChoiceRequest,
  /** k_EMsgGameAutographReward */
  8244: _chunkCU4ZEV3Ucjs.CMsgDOTAGameAutographReward,
  /** k_EMsgDestroyLobbyRequest */
  8246: _chunkCU4ZEV3Ucjs.CMsgDOTADestroyLobbyRequest,
  /** k_EMsgPurchaseItemWithEventPoints */
  8248: _chunkCU4ZEV3Ucjs.CMsgPurchaseItemWithEventPoints,
  /** k_EMsgPurchaseHeroRandomRelic */
  8258: _chunkCU4ZEV3Ucjs.CMsgPurchaseHeroRandomRelic,
  /** k_EMsgClientToGCClaimEventActionUsingItem */
  8260: _chunkCU4ZEV3Ucjs.CMsgClientToGCClaimEventActionUsingItem,
  /** k_EMsgPartyReadyCheckRequest */
  8262: _chunkCU4ZEV3Ucjs.CMsgPartyReadyCheckRequest,
  /** k_EMsgPartyReadyCheckAcknowledge */
  8264: _chunkCU4ZEV3Ucjs.CMsgPartyReadyCheckAcknowledge,
  /** k_EMsgGetRecentPlayTimeFriendsRequest */
  8265: _chunkCU4ZEV3Ucjs.CMsgDOTAGetRecentPlayTimeFriendsRequest,
  /** k_EMsgProfileRequest */
  8268: _chunkCU4ZEV3Ucjs.CMsgProfileRequest,
  /** k_EMsgProfileUpdate */
  8270: _chunkCU4ZEV3Ucjs.CMsgProfileUpdate,
  /** k_EMsgHeroGlobalDataRequest */
  8274: _chunkCU4ZEV3Ucjs.CMsgHeroGlobalDataRequest,
  /** k_EMsgClientToGCRequestPlusWeeklyChallengeResult */
  8276: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestPlusWeeklyChallengeResult,
  /** k_EMsgPrivateMetadataKeyRequest */
  8279: _chunkCU4ZEV3Ucjs.CMsgPrivateMetadataKeyRequest,
  /** k_EMsgClientToGCCavernCrawlClaimRoom */
  8289: _chunkCU4ZEV3Ucjs.CMsgClientToGCCavernCrawlClaimRoom,
  /** k_EMsgClientToGCCavernCrawlUseItemOnRoom */
  8291: _chunkCU4ZEV3Ucjs.CMsgClientToGCCavernCrawlUseItemOnRoom,
  /** k_EMsgClientToGCCavernCrawlUseItemOnPath */
  8293: _chunkCU4ZEV3Ucjs.CMsgClientToGCCavernCrawlUseItemOnPath,
  /** k_EMsgClientToGCCavernCrawlRequestMapState */
  8295: _chunkCU4ZEV3Ucjs.CMsgClientToGCCavernCrawlRequestMapState,
  /** k_EMsgClientToGCRequestEventPointLogV2 */
  8298: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestEventPointLogV2,
  /** k_EMsgClientToGCRequestEventPointLogResponseV2 */
  8299: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestEventPointLogResponseV2,
  /** k_EMsgClientToGCCavernCrawlGetClaimedRoomCount */
  8308: _chunkCU4ZEV3Ucjs.CMsgClientToGCCavernCrawlGetClaimedRoomCount,
  /** k_EMsgClientToGCRecordContestVote */
  8313: _chunkCU4ZEV3Ucjs.CMsgClientToGCRecordContestVote,
  /** k_EMsgLobbyEventGameDetails */
  8318: _chunkCU4ZEV3Ucjs.CMsgLobbyEventGameDetails,
  /** k_EMsgDevGrantEventPoints */
  8319: _chunkCU4ZEV3Ucjs.CMsgDevGrantEventPoints,
  /** k_EMsgDevGrantEventAction */
  8321: _chunkCU4ZEV3Ucjs.CMsgDevGrantEventAction,
  /** k_EMsgDevResetEventState */
  8323: _chunkCU4ZEV3Ucjs.CMsgDevResetEventState,
  /** k_EMsgConsumeEventSupportGrantItem */
  8326: _chunkCU4ZEV3Ucjs.CMsgConsumeEventSupportGrantItem,
  /** k_EMsgServerToGCRequestPlayerRecentAccomplishments */
  8330: _chunkCU4ZEV3Ucjs.CMsgServerToGCRequestPlayerRecentAccomplishments,
  /** k_EMsgClientToGCRequestPlayerRecentAccomplishments */
  8332: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestPlayerRecentAccomplishments,
  /** k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments */
  8334: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestPlayerHeroRecentAccomplishments,
  /** k_EMsgClientToGCRequestContestVotes */
  8347: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestContestVotes,
  /** k_EMsgClientToGCMVPVoteTimeout */
  8349: _chunkCU4ZEV3Ucjs.CMsgClientToGCMVPVoteTimeout,
  /** k_EMsgMatchMatchmakingStats */
  8360: _chunkCU4ZEV3Ucjs.CMsgMatchMatchmakingStats,
  /** k_EMsgClientToGCSubmitPlayerMatchSurvey */
  8361: _chunkCU4ZEV3Ucjs.CMsgClientToGCSubmitPlayerMatchSurvey,
  /** k_EMsgDevDeleteEventActions */
  8365: _chunkCU4ZEV3Ucjs.CMsgDevDeleteEventActions,
  /** k_EMsgGCSubmitPlayerAvoidRequest */
  8637: _chunkCU4ZEV3Ucjs.CMsgDOTASubmitPlayerAvoidRequest,
  /** k_EMsgGCtoGCAssociatedExploiterAccountInfo */
  8640: _chunkCU4ZEV3Ucjs.CMsgGCtoGCAssociatedExploiterAccountInfo,
  /** k_EMsgClientToGCUnderDraftBuy */
  8644: _chunkCU4ZEV3Ucjs.CMsgClientToGCUnderDraftBuy,
  /** k_EMsgClientToGCUnderDraftReroll */
  8646: _chunkCU4ZEV3Ucjs.CMsgClientToGCUnderDraftReroll,
  /** k_EMsgClientToGCCreateGuild */
  8649: _chunkCU4ZEV3Ucjs.CMsgClientToGCCreateGuild,
  /** k_EMsgClientToGCSetGuildInfo */
  8651: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetGuildInfo,
  /** k_EMsgClientToGCAddGuildRole */
  8653: _chunkCU4ZEV3Ucjs.CMsgClientToGCAddGuildRole,
  /** k_EMsgClientToGCModifyGuildRole */
  8655: _chunkCU4ZEV3Ucjs.CMsgClientToGCModifyGuildRole,
  /** k_EMsgClientToGCRemoveGuildRole */
  8657: _chunkCU4ZEV3Ucjs.CMsgClientToGCRemoveGuildRole,
  /** k_EMsgClientToGCJoinGuild */
  8659: _chunkCU4ZEV3Ucjs.CMsgClientToGCJoinGuild,
  /** k_EMsgClientToGCLeaveGuild */
  8661: _chunkCU4ZEV3Ucjs.CMsgClientToGCLeaveGuild,
  /** k_EMsgClientToGCInviteToGuild */
  8663: _chunkCU4ZEV3Ucjs.CMsgClientToGCInviteToGuild,
  /** k_EMsgClientToGCDeclineInviteToGuild */
  8665: _chunkCU4ZEV3Ucjs.CMsgClientToGCDeclineInviteToGuild,
  /** k_EMsgClientToGCCancelInviteToGuild */
  8667: _chunkCU4ZEV3Ucjs.CMsgClientToGCCancelInviteToGuild,
  /** k_EMsgClientToGCKickGuildMember */
  8669: _chunkCU4ZEV3Ucjs.CMsgClientToGCKickGuildMember,
  /** k_EMsgClientToGCSetGuildMemberRole */
  8671: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetGuildMemberRole,
  /** k_EMsgClientToGCRequestGuildData */
  8673: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestGuildData,
  /** k_EMsgClientToGCRequestGuildMembership */
  8676: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestGuildMembership,
  /** k_EMsgClientToGCAcceptInviteToGuild */
  8681: _chunkCU4ZEV3Ucjs.CMsgClientToGCAcceptInviteToGuild,
  /** k_EMsgClientToGCSetGuildRoleOrder */
  8683: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetGuildRoleOrder,
  /** k_EMsgClientToGCRequestAccountGuildEventData */
  8687: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestAccountGuildEventData,
  /** k_EMsgClientToGCRequestActiveGuildContracts */
  8690: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestActiveGuildContracts,
  /** k_EMsgClientToGCSelectGuildContract */
  8694: _chunkCU4ZEV3Ucjs.CMsgClientToGCSelectGuildContract,
  /** k_EMsgClientToGCAddPlayerToGuildChat */
  8698: _chunkCU4ZEV3Ucjs.CMsgClientToGCAddPlayerToGuildChat,
  /** k_EMsgClientToGCUnderDraftSell */
  8700: _chunkCU4ZEV3Ucjs.CMsgClientToGCUnderDraftSell,
  /** k_EMsgClientToGCUnderDraftRequest */
  8702: _chunkCU4ZEV3Ucjs.CMsgClientToGCUnderDraftRequest,
  /** k_EMsgClientToGCUnderDraftRedeemReward */
  8704: _chunkCU4ZEV3Ucjs.CMsgClientToGCUnderDraftRedeemReward,
  /** k_EMsgClientToGCRequestActiveGuildChallenge */
  8713: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestActiveGuildChallenge,
  /** k_EMsgClientToGCRequestReporterUpdates */
  8716: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestReporterUpdates,
  /** k_EMsgClientToGCAcknowledgeReporterUpdates */
  8718: _chunkCU4ZEV3Ucjs.CMsgClientToGCAcknowledgeReporterUpdates,
  /** k_EMsgClientToGCRequestGuildEventMembers */
  8721: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestGuildEventMembers,
  /** k_EMsgClientToGCReportGuildContent */
  8725: _chunkCU4ZEV3Ucjs.CMsgClientToGCReportGuildContent,
  /** k_EMsgClientToGCRequestAccountGuildPersonaInfo */
  8727: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestAccountGuildPersonaInfo,
  /** k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch */
  8729: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestAccountGuildPersonaInfoBatch,
  /** k_EMsgLobbyFeaturedGamemodeProgress */
  8734: _chunkCU4ZEV3Ucjs.CMsgLobbyFeaturedGamemodeProgress,
  /** k_EMsgClientToGCSubmitDraftTriviaMatchAnswer */
  8736: _chunkCU4ZEV3Ucjs.CMsgClientToGCSubmitDraftTriviaMatchAnswer,
  /** k_EMsgClientToGCUnderDraftRollBackBench */
  8740: _chunkCU4ZEV3Ucjs.CMsgClientToGCUnderDraftRollBackBench,
  /** k_EMsgLobbyEventGameData */
  8746: _chunkCU4ZEV3Ucjs.CMsgLobbyEventGameData,
  /** k_EMsgClientToGCGetOWMatchDetails */
  8751: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetOWMatchDetails,
  /** k_EMsgClientToGCSubmitOWConviction */
  8753: _chunkCU4ZEV3Ucjs.CMsgClientToGCSubmitOWConviction,
  /** k_EMsgClientToGCClaimLeaderboardRewards */
  8757: _chunkCU4ZEV3Ucjs.CMsgClientToGCClaimLeaderboardRewards,
  /** k_EMsgClientToGCRecalibrateMMR */
  8759: _chunkCU4ZEV3Ucjs.CMsgClientToGCRecalibrateMMR,
  /** k_EMsgClientToGCChinaSSAURLRequest */
  8764: _chunkCU4ZEV3Ucjs.CMsgClientToGCChinaSSAURLRequest,
  /** k_EMsgClientToGCChinaSSAAcceptedRequest */
  8766: _chunkCU4ZEV3Ucjs.CMsgClientToGCChinaSSAAcceptedRequest,
  /** k_EMsgClientToGCStartWatchingOverwatch */
  8774: _chunkCU4ZEV3Ucjs.CMsgClientToGCStartWatchingOverwatch,
  /** k_EMsgClientToGCStopWatchingOverwatch */
  8775: _chunkCU4ZEV3Ucjs.CMsgClientToGCStopWatchingOverwatch,
  /** k_EMsgClientToGCGetDPCFavorites */
  8777: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetDPCFavorites,
  /** k_EMsgClientToGCSetDPCFavoriteState */
  8779: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetDPCFavoriteState,
  /** k_EMsgClientToGCOverwatchReplayError */
  8781: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverwatchReplayError,
  /** k_EMsgClientToGCSetEventActiveSeasonID */
  8806: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetEventActiveSeasonID,
  /** k_EMsgClientToGCCreateTeamPlayerCardPack */
  8810: _chunkCU4ZEV3Ucjs.CMsgClientToGCCreateTeamPlayerCardPack,
  /** k_EMsgClientToGCGetStickerbookRequest */
  8825: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetStickerbookRequest,
  /** k_EMsgClientToGCCreateStickerbookPageRequest */
  8827: _chunkCU4ZEV3Ucjs.CMsgClientToGCCreateStickerbookPageRequest,
  /** k_EMsgClientToGCDeleteStickerbookPageRequest */
  8829: _chunkCU4ZEV3Ucjs.CMsgClientToGCDeleteStickerbookPageRequest,
  /** k_EMsgClientToGCPlaceStickersRequest */
  8831: _chunkCU4ZEV3Ucjs.CMsgClientToGCPlaceStickersRequest,
  /** k_EMsgClientToGCPlaceCollectionStickersRequest */
  8833: _chunkCU4ZEV3Ucjs.CMsgClientToGCPlaceCollectionStickersRequest,
  /** k_EMsgClientToGCOrderStickerbookTeamPageRequest */
  8835: _chunkCU4ZEV3Ucjs.CMsgClientToGCOrderStickerbookTeamPageRequest,
  /** k_EMsgClientToGCSetHeroSticker */
  8851: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetHeroSticker,
  /** k_EMsgClientToGCGetHeroStickers */
  8853: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetHeroStickers,
  /** k_EMsgClientToGCSetFavoritePage */
  8855: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetFavoritePage,
  /** k_EMsgClientToGCCollectorsCacheAvailableDataRequest */
  8871: _chunkCU4ZEV3Ucjs.CMsgClientToGCCollectorsCacheAvailableDataRequest,
  /** k_EMsgClientToGCUploadMatchClip */
  8873: _chunkCU4ZEV3Ucjs.CMsgClientToGCUploadMatchClip,
  /** k_EMsgClientToGCRankRequest */
  8879: _chunkCU4ZEV3Ucjs.CMsgClientToGCRankRequest,
  /** k_EMsgClientToGCMapStatsRequest */
  8883: _chunkCU4ZEV3Ucjs.CMsgClientToGCMapStatsRequest,
  /** k_EMsgClientToGCRoadToTIGetQuests */
  8897: _chunkCU4ZEV3Ucjs.CMsgClientToGCRoadToTIGetQuests,
  /** k_EMsgClientToGCRoadToTIGetActiveQuest */
  8899: _chunkCU4ZEV3Ucjs.CMsgClientToGCRoadToTIGetActiveQuest,
  /** k_EMsgClientToGCRoadToTIUseItem */
  8911: _chunkCU4ZEV3Ucjs.CMsgClientToGCRoadToTIUseItem,
  /** k_EMsgClientToGCRoadToTIDevForceQuest */
  8935: _chunkCU4ZEV3Ucjs.CMsgClientToGCRoadToTIDevForceQuest,
  /** k_EMsgLobbyRoadToTIMatchQuestData */
  8939: _chunkCU4ZEV3Ucjs.CMsgLobbyRoadToTIMatchQuestData,
  /** k_EMsgClientToGCOverworldGetUserData */
  8944: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldGetUserData,
  /** k_EMsgClientToGCOverworldCompletePath */
  8946: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldCompletePath,
  /** k_EMsgClientToGCOverworldClaimEncounterReward */
  8948: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldClaimEncounterReward,
  /** k_EMsgClientToGCOverworldDevResetAll */
  8950: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldDevResetAll,
  /** k_EMsgClientToGCOverworldDevResetNode */
  8952: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldDevResetNode,
  /** k_EMsgClientToGCOverworldDevGrantTokens */
  8956: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldDevGrantTokens,
  /** k_EMsgClientToGCOverworldDevClearInventory */
  8958: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldDevClearInventory,
  /** k_EMsgClientToGCOverworldMoveToNode */
  8963: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldMoveToNode,
  /** k_EMsgClientToGCNewBloomGift */
  8965: _chunkCU4ZEV3Ucjs.CMsgClientToGCNewBloomGift,
  /** k_EMsgClientToGCSetBannedHeroes */
  8969: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetBannedHeroes,
  /** k_EMsgClientToGCOverworldTradeTokens */
  8970: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldTradeTokens,
  /** k_EMsgOverworldEncounterTokenTreasureData */
  8972: _chunkCU4ZEV3Ucjs.CMsgOverworldEncounterTokenTreasureData,
  /** k_EMsgOverworldEncounterTokenQuestData */
  8973: _chunkCU4ZEV3Ucjs.CMsgOverworldEncounterTokenQuestData,
  /** k_EMsgOverworldEncounterChooseHeroData */
  8974: _chunkCU4ZEV3Ucjs.CMsgOverworldEncounterChooseHeroData,
  /** k_EMsgClientToGCUpdateComicBookStats */
  8975: _chunkCU4ZEV3Ucjs.CMsgClientToGCUpdateComicBookStats,
  /** k_EMsgOverworldEncounterProgressData */
  8978: _chunkCU4ZEV3Ucjs.CMsgOverworldEncounterProgressData,
  /** k_EMsgClientToGCOverworldFeedback */
  8979: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldFeedback,
  /** k_EMsgClientToGCOverworldVisitEncounter */
  8981: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldVisitEncounter,
  /** k_EMsgClientToGCOverworldGiftTokens */
  8983: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldGiftTokens,
  /** k_EMsgClientToGCDotaLabsFeedback */
  8985: _chunkCU4ZEV3Ucjs.CMsgClientToGCDotaLabsFeedback,
  /** k_EMsgOverworldEncounterPitFighterRewardData */
  8987: _chunkCU4ZEV3Ucjs.CMsgOverworldEncounterPitFighterRewardData,
  /** k_EMsgClientToGCOverworldGetDynamicImage */
  8988: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldGetDynamicImage,
  /** k_EMsgGCCompendiumRemoveAllSelections */
  9007: _chunkCU4ZEV3Ucjs.CMsgDOTACompendiumRemoveAllSelections,
  /** k_EMsgClientToGCOverworldMinigameAction */
  9009: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldMinigameAction,
  /** k_EMsgClientToGCOverworldRequestTokensNeededByFriend */
  9013: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldRequestTokensNeededByFriend
};
var gcMessages = {
  /** k_ESOMsg_Create */
  21: _chunkCU4ZEV3Ucjs.CMsgSOSingleObject,
  /** k_ESOMsg_Update */
  22: _chunkCU4ZEV3Ucjs.CMsgSOSingleObject,
  /** k_ESOMsg_Destroy */
  23: _chunkCU4ZEV3Ucjs.CMsgSOSingleObject,
  /** k_ESOMsg_CacheSubscribed */
  24: _chunkCU4ZEV3Ucjs.CMsgSOCacheSubscribed,
  /** k_ESOMsg_CacheUnsubscribed */
  25: _chunkCU4ZEV3Ucjs.CMsgSOCacheUnsubscribed,
  /** k_ESOMsg_UpdateMultiple */
  26: _chunkCU4ZEV3Ucjs.CMsgSOMultipleObjects,
  /** k_ESOMsg_CacheSubscriptionRefresh */
  28: _chunkCU4ZEV3Ucjs.CMsgSOCacheSubscriptionRefresh,
  /** k_ESOMsg_CacheSubscribedUpToDate */
  29: _chunkCU4ZEV3Ucjs.CMsgSOCacheSubscribedUpToDate,
  /** k_EMsgGCToClientPollConvarRequest */
  3003: _chunkCU4ZEV3Ucjs.CMsgGCToClientPollConvarRequest,
  /** k_EMsgGCToClientPollConvarResponse */
  3004: _chunkCU4ZEV3Ucjs.CMsgGCToClientPollConvarResponse,
  /** k_EMsgGCToClientRequestDropped */
  3006: _chunkCU4ZEV3Ucjs.CMsgGCToClientRequestDropped,
  /** k_EMsgGCClientWelcome */
  4004: _chunkCU4ZEV3Ucjs.CMsgClientWelcome,
  /** k_EMsgGCServerWelcome */
  4005: _chunkCU4ZEV3Ucjs.CMsgClientWelcome,
  /** k_EMsgGCClientConnectionStatus */
  4009: _chunkCU4ZEV3Ucjs.CMsgConnectionStatus,
  /** k_EMsgGCServerConnectionStatus */
  4010: _chunkCU4ZEV3Ucjs.CMsgConnectionStatus,
  /** k_EMsgGCPartyInviteResponse */
  4503: _chunkCU4ZEV3Ucjs.CMsgPartyInviteResponse,
  /** k_EMsgGCLobbyInviteResponse */
  4513: _chunkCU4ZEV3Ucjs.CMsgLobbyInviteResponse,
  /** k_EMsgGCToClientPollFileRequest */
  4514: _chunkCU4ZEV3Ucjs.CMsgGCToClientPollFileRequest,
  /** k_EMsgGCToClientPollFileResponse */
  4515: _chunkCU4ZEV3Ucjs.CMsgGCToClientPollFileResponse,
  /** k_EMsgGCToClientApplyRemoteConVars */
  4520: _chunkCU4ZEV3Ucjs.CMsgGCToClientApplyRemoteConVars,
  /** k_EMsgGCToClientAggregateMetricsBackoff */
  4524: _chunkCU4ZEV3Ucjs.CMsgGCToClientAggregateMetricsBackoff,
  /** k_EMsgGCInitialQuestionnaireResponse */
  7049: _chunkCU4ZEV3Ucjs.CMsgInitialQuestionnaireResponse,
  /** k_EMsgGCSpectateFriendGameResponse */
  7074: _chunkCU4ZEV3Ucjs.CMsgSpectateFriendGameResponse,
  /** k_EMsgGCReportsRemainingResponse */
  7077: _chunkCU4ZEV3Ucjs.CMsgDOTAReportsRemainingResponse,
  /** k_EMsgGCSubmitPlayerReportResponse */
  7079: _chunkCU4ZEV3Ucjs.CMsgDOTASubmitPlayerReportResponse,
  /** k_EMsgGCWatchGameResponse */
  7092: _chunkCU4ZEV3Ucjs.CMsgWatchGameResponse,
  /** k_EMsgGCMatchDetailsResponse */
  7096: _chunkCU4ZEV3Ucjs.CMsgGCMatchDetailsResponse,
  /** k_EMsgGCMatchmakingStatsResponse */
  7198: _chunkCU4ZEV3Ucjs.CMsgDOTAMatchmakingStatsResponse,
  /** k_EMsgGCSetMatchHistoryAccessResponse */
  7201: _chunkCU4ZEV3Ucjs.CMsgDOTASetMatchHistoryAccessResponse,
  /** k_EMsgUpgradeLeagueItemResponse */
  7204: _chunkCU4ZEV3Ucjs.CMsgUpgradeLeagueItemResponse,
  /** k_EMsgGCGetHeroStandingsResponse */
  7275: _chunkCU4ZEV3Ucjs.CMsgGCGetHeroStandingsResponse,
  /** k_EMsgGCItemEditorReservationsResponse */
  7284: _chunkCU4ZEV3Ucjs.CMsgGCItemEditorReservationsResponse,
  /** k_EMsgGCItemEditorReserveItemDefResponse */
  7286: _chunkCU4ZEV3Ucjs.CMsgGCItemEditorReserveItemDefResponse,
  /** k_EMsgGCItemEditorReleaseReservationResponse */
  7288: _chunkCU4ZEV3Ucjs.CMsgGCItemEditorReleaseReservationResponse,
  /** k_EMsgGCSetProfilePrivacyResponse */
  7328: _chunkCU4ZEV3Ucjs.CMsgDOTASetProfilePrivacyResponse,
  /** k_EMsgDOTAGetEventPointsResponse */
  7388: _chunkCU4ZEV3Ucjs.CMsgDOTAGetEventPointsResponse,
  /** k_EMsgGCCompendiumDataResponse */
  7407: _chunkCU4ZEV3Ucjs.CMsgDOTACompendiumDataResponse,
  /** k_EMsgDOTAGetPlayerMatchHistoryResponse */
  7409: _chunkCU4ZEV3Ucjs.CMsgDOTAGetPlayerMatchHistoryResponse,
  /** k_EMsgGCNotificationsResponse */
  7428: _chunkCU4ZEV3Ucjs.CMsgGCNotificationsResponse,
  /** k_EMsgGCRankedPlayerInfoSubmitResponse */
  7455: _chunkCU4ZEV3Ucjs.CMsgGCRankedPlayerInfoSubmitResponse,
  /** k_EMsgGCPlayerInfoSubmitResponse */
  7457: _chunkCU4ZEV3Ucjs.CMsgGCPlayerInfoSubmitResponse,
  /** k_EMsgGCHasItemResponse */
  7485: _chunkCU4ZEV3Ucjs.CMsgDOTAHasItemResponse,
  /** k_EMsgGCToClientTournamentItemDrop */
  7495: _chunkCU4ZEV3Ucjs.CMsgGCToClientTournamentItemDrop,
  /** k_EMsgGCToClientEmoticonData */
  7504: _chunkCU4ZEV3Ucjs.CMsgGCToClientEmoticonData,
  /** k_EMsgDOTARedeemItemResponse */
  7519: _chunkCU4ZEV3Ucjs.CMsgDOTARedeemItemResponse,
  /** k_EMsgClientToGCGetAllHeroProgressResponse */
  7522: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetAllHeroProgressResponse,
  /** k_EMsgClientToGCGetTrophyListResponse */
  7528: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetTrophyListResponse,
  /** k_EMsgGCToClientTrophyAwarded */
  7529: _chunkCU4ZEV3Ucjs.CMsgGCToClientTrophyAwarded,
  /** k_EMsgClientToGCGetProfileCardResponse */
  7535: _chunkCU4ZEV3Ucjs.CMsgDOTAProfileCard,
  /** k_EMsgGCToClientHeroStatueCreateResult */
  7548: _chunkCU4ZEV3Ucjs.CMsgGCToClientHeroStatueCreateResult,
  /** k_EMsgGCRerollPlayerChallengeResponse */
  7586: _chunkCU4ZEV3Ucjs.CMsgGCRerollPlayerChallengeResponse,
  /** k_EMsgClientToGCGetAllHeroOrderResponse */
  7607: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetAllHeroOrderResponse,
  /** k_EMsgClientToGCPlayerCardSpecificPurchaseResponse */
  7628: _chunkCU4ZEV3Ucjs.CMsgClientToGCPlayerCardSpecificPurchaseResponse,
  /** k_EMsgGCToClientGetFilteredPlayersResponse */
  7663: _chunkCU4ZEV3Ucjs.CMsgGCToClientGetFilteredPlayersResponse,
  /** k_EMsgGCToClientRemoveFilteredPlayerResponse */
  7665: _chunkCU4ZEV3Ucjs.CMsgGCToClientRemoveFilteredPlayerResponse,
  /** k_EMsgGCToClientPlayerBeaconState */
  7666: _chunkCU4ZEV3Ucjs.CMsgGCToClientPlayerBeaconState,
  /** k_EMsgGCToClientPartyBeaconUpdate */
  7667: _chunkCU4ZEV3Ucjs.CMsgGCToClientPartyBeaconUpdate,
  /** k_EMsgGCToClientPartySearchInvite */
  7668: _chunkCU4ZEV3Ucjs.CMsgGCToClientPartySearchInvite,
  /** k_EMsgGCToClientRequestActiveBeaconPartiesResponse */
  7671: _chunkCU4ZEV3Ucjs.CMsgGCToClientRequestActiveBeaconPartiesResponse,
  /** k_EMsgGCToClientManageFavoritesResponse */
  7673: _chunkCU4ZEV3Ucjs.CMsgGCToClientManageFavoritesResponse,
  /** k_EMsgGCToClientJoinPartyFromBeaconResponse */
  7675: _chunkCU4ZEV3Ucjs.CMsgGCToClientJoinPartyFromBeaconResponse,
  /** k_EMsgGCToClientGetFavoritePlayersResponse */
  7677: _chunkCU4ZEV3Ucjs.CMsgGCToClientGetFavoritePlayersResponse,
  /** k_EMsgGCToClientVerifyFavoritePlayersResponse */
  7679: _chunkCU4ZEV3Ucjs.CMsgGCToClientVerifyFavoritePlayersResponse,
  /** k_EMsgGCToClientPartySearchInvites */
  7680: _chunkCU4ZEV3Ucjs.CMsgGCToClientPartySearchInvites,
  /** k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse */
  7685: _chunkCU4ZEV3Ucjs.CMsgClientToGCPurchaseLabyrinthBlessingsResponse,
  /** k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse */
  7687: _chunkCU4ZEV3Ucjs.CMsgGCToClientPurchaseFilteredPlayerSlotResponse,
  /** k_EMsgGCToClientUpdateFilteredPlayerNoteResponse */
  7689: _chunkCU4ZEV3Ucjs.CMsgGCToClientUpdateFilteredPlayerNoteResponse,
  /** k_EMsgGCToClientPlayerStatsResponse */
  8007: _chunkCU4ZEV3Ucjs.CMsgGCToClientPlayerStatsResponse,
  /** k_EMsgGCToClientFindTopSourceTVGamesResponse */
  8010: _chunkCU4ZEV3Ucjs.CMsgGCToClientFindTopSourceTVGamesResponse,
  /** k_EMsgGCToClientSocialFeedPostCommentResponse */
  8017: _chunkCU4ZEV3Ucjs.CMsgGCToClientSocialFeedPostCommentResponse,
  /** k_EMsgGCToClientCustomGamesFriendsPlayedResponse */
  8019: _chunkCU4ZEV3Ucjs.CMsgGCToClientCustomGamesFriendsPlayedResponse,
  /** k_EMsgGCToClientFriendsPlayedCustomGameResponse */
  8021: _chunkCU4ZEV3Ucjs.CMsgGCToClientFriendsPlayedCustomGameResponse,
  /** k_EMsgGCToClientSocialFeedPostMessageResponse */
  8051: _chunkCU4ZEV3Ucjs.CMsgGCToClientSocialFeedPostMessageResponse,
  /** k_EMsgGCToClientTopLeagueMatchesResponse */
  8061: _chunkCU4ZEV3Ucjs.CMsgGCToClientTopLeagueMatchesResponse,
  /** k_EMsgGCToClientTopFriendMatchesResponse */
  8062: _chunkCU4ZEV3Ucjs.CMsgGCToClientTopFriendMatchesResponse,
  /** k_EMsgClientToGCMatchesMinimalResponse */
  8064: _chunkCU4ZEV3Ucjs.CMsgClientToGCMatchesMinimalResponse,
  /** k_EMsgGCToClientMatchGroupsVersion */
  8075: _chunkCU4ZEV3Ucjs.CMsgGCToClientMatchGroupsVersion,
  /** k_EMsgClientToGCGetQuestProgressResponse */
  8079: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetQuestProgressResponse,
  /** k_EMsgGCToClientMatchSignedOut */
  8081: _chunkCU4ZEV3Ucjs.CMsgGCToClientMatchSignedOut,
  /** k_EMsgGCGetHeroStatsHistoryResponse */
  8083: _chunkCU4ZEV3Ucjs.CMsgGCGetHeroStatsHistoryResponse,
  /** k_EMsgGCToClientWageringResponse */
  8100: _chunkCU4ZEV3Ucjs.CMsgGCToClientWageringResponse,
  /** k_EMsgClientToGCHasPlayerVotedForMVPResponse */
  8112: _chunkCU4ZEV3Ucjs.CMsgClientToGCHasPlayerVotedForMVPResponse,
  /** k_EMsgClientToGCVoteForMVPResponse */
  8114: _chunkCU4ZEV3Ucjs.CMsgClientToGCVoteForMVPResponse,
  /** k_EMsgClientToGCTeammateStatsResponse */
  8125: _chunkCU4ZEV3Ucjs.CMsgClientToGCTeammateStatsResponse,
  /** k_EMsgClientToGCGetGiftPermissionsResponse */
  8127: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetGiftPermissionsResponse,
  /** k_EMsgClientToGCVoteForArcanaResponse */
  8129: _chunkCU4ZEV3Ucjs.CMsgClientToGCVoteForArcanaResponse,
  /** k_EMsgClientToGCRequestArcanaVotesRemainingResponse */
  8131: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestArcanaVotesRemainingResponse,
  /** k_EMsgGCSubmitLobbyMVPVoteResponse */
  8145: _chunkCU4ZEV3Ucjs.CMsgDOTASubmitLobbyMVPVoteResponse,
  /** k_EMsgGCToClientQuestProgressUpdated */
  8153: _chunkCU4ZEV3Ucjs.CMsgGCToClientQuestProgressUpdated,
  /** k_EMsgGCToClientWageringUpdate */
  8154: _chunkCU4ZEV3Ucjs.CMsgGCToClientWageringUpdate,
  /** k_EMsgGCToClientArcanaVotesUpdate */
  8155: _chunkCU4ZEV3Ucjs.CMsgGCToClientArcanaVotesUpdate,
  /** k_EMsgClientToGCOpenPlayerCardPackResponse */
  8169: _chunkCU4ZEV3Ucjs.CMsgClientToGCOpenPlayerCardPackResponse,
  /** k_EMsgClientToGCSelectCompendiumInGamePredictionResponse */
  8171: _chunkCU4ZEV3Ucjs.CMsgClientToGCSelectCompendiumInGamePredictionResponse,
  /** k_EMsgClientToGCRecyclePlayerCardResponse */
  8175: _chunkCU4ZEV3Ucjs.CMsgClientToGCRecyclePlayerCardResponse,
  /** k_EMsgClientToGCCreatePlayerCardPackResponse */
  8177: _chunkCU4ZEV3Ucjs.CMsgClientToGCCreatePlayerCardPackResponse,
  /** k_EMsgGCGetPlayerCardItemInfoResponse */
  8188: _chunkCU4ZEV3Ucjs.CMsgGCGetPlayerCardItemInfoResponse,
  /** k_EMsgGCToClientBattlePassRollupRequest */
  8191: _chunkCU4ZEV3Ucjs.CMsgGCToClientBattlePassRollupRequest,
  /** k_EMsgGCToClientBattlePassRollupResponse */
  8192: _chunkCU4ZEV3Ucjs.CMsgGCToClientBattlePassRollupResponse,
  /** k_EMsgClientToGCTransferSeasonalMMRResponse */
  8194: _chunkCU4ZEV3Ucjs.CMsgClientToGCTransferSeasonalMMRResponse,
  /** k_EMsgGCToClientPlaytestStatus */
  8200: _chunkCU4ZEV3Ucjs.CMsgGCToClientPlaytestStatus,
  /** k_EMsgClientToGCJoinPlaytestResponse */
  8202: _chunkCU4ZEV3Ucjs.CMsgClientToGCJoinPlaytestResponse,
  /** k_EMsgGCToClientBattlePassRollupListRequest */
  8205: _chunkCU4ZEV3Ucjs.CMsgGCToClientBattlePassRollupListRequest,
  /** k_EMsgGCToClientBattlePassRollupListResponse */
  8206: _chunkCU4ZEV3Ucjs.CMsgGCToClientBattlePassRollupListResponse,
  /** k_EMsgDOTAClaimEventActionResponse */
  8210: _chunkCU4ZEV3Ucjs.CMsgDOTAClaimEventActionResponse,
  /** k_EMsgDOTAGetPeriodicResourceResponse */
  8212: _chunkCU4ZEV3Ucjs.CMsgDOTAGetPeriodicResourceResponse,
  /** k_EMsgSubmitTriviaQuestionAnswerResponse */
  8217: _chunkCU4ZEV3Ucjs.CMsgDOTASubmitTriviaQuestionAnswerResponse,
  /** k_EMsgStartTriviaSessionResponse */
  8221: _chunkCU4ZEV3Ucjs.CMsgDOTAStartTriviaSessionResponse,
  /** k_EMsgAnchorPhoneNumberResponse */
  8223: _chunkCU4ZEV3Ucjs.CMsgDOTAAnchorPhoneNumberResponse,
  /** k_EMsgUnanchorPhoneNumberResponse */
  8225: _chunkCU4ZEV3Ucjs.CMsgDOTAUnanchorPhoneNumberResponse,
  /** k_EMsgClientToGCQuickStatsResponse */
  8239: _chunkCU4ZEV3Ucjs.CMsgDOTAClientToGCQuickStatsResponse,
  /** k_EMsgSelectionPriorityChoiceResponse */
  8242: _chunkCU4ZEV3Ucjs.CMsgDOTASelectionPriorityChoiceResponse,
  /** k_EMsgGameAutographRewardResponse */
  8245: _chunkCU4ZEV3Ucjs.CMsgDOTAGameAutographRewardResponse,
  /** k_EMsgDestroyLobbyResponse */
  8247: _chunkCU4ZEV3Ucjs.CMsgDOTADestroyLobbyResponse,
  /** k_EMsgPurchaseItemWithEventPointsResponse */
  8249: _chunkCU4ZEV3Ucjs.CMsgPurchaseItemWithEventPointsResponse,
  /** k_EMsgPurchaseHeroRandomRelicResponse */
  8259: _chunkCU4ZEV3Ucjs.CMsgPurchaseHeroRandomRelicResponse,
  /** k_EMsgClientToGCClaimEventActionUsingItemResponse */
  8261: _chunkCU4ZEV3Ucjs.CMsgClientToGCClaimEventActionUsingItemResponse,
  /** k_EMsgPartyReadyCheckResponse */
  8263: _chunkCU4ZEV3Ucjs.CMsgPartyReadyCheckResponse,
  /** k_EMsgGetRecentPlayTimeFriendsResponse */
  8266: _chunkCU4ZEV3Ucjs.CMsgDOTAGetRecentPlayTimeFriendsResponse,
  /** k_EMsgGCToClientCommendNotification */
  8267: _chunkCU4ZEV3Ucjs.CMsgGCToClientCommendNotification,
  /** k_EMsgProfileResponse */
  8269: _chunkCU4ZEV3Ucjs.CMsgProfileResponse,
  /** k_EMsgProfileUpdateResponse */
  8271: _chunkCU4ZEV3Ucjs.CMsgProfileUpdateResponse,
  /** k_EMsgHeroGlobalDataResponse */
  8275: _chunkCU4ZEV3Ucjs.CMsgHeroGlobalDataResponse,
  /** k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse */
  8277: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestPlusWeeklyChallengeResultResponse,
  /** k_EMsgPrivateMetadataKeyResponse */
  8280: _chunkCU4ZEV3Ucjs.CMsgPrivateMetadataKeyResponse,
  /** k_EMsgGCToClientCavernCrawlMapPathCompleted */
  8288: _chunkCU4ZEV3Ucjs.CMsgGCToClientCavernCrawlMapPathCompleted,
  /** k_EMsgClientToGCCavernCrawlClaimRoomResponse */
  8290: _chunkCU4ZEV3Ucjs.CMsgClientToGCCavernCrawlClaimRoomResponse,
  /** k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse */
  8292: _chunkCU4ZEV3Ucjs.CMsgClientToGCCavernCrawlUseItemOnRoomResponse,
  /** k_EMsgClientToGCCavernCrawlUseItemOnPathResponse */
  8294: _chunkCU4ZEV3Ucjs.CMsgClientToGCCavernCrawlUseItemOnPathResponse,
  /** k_EMsgClientToGCCavernCrawlRequestMapStateResponse */
  8296: _chunkCU4ZEV3Ucjs.CMsgClientToGCCavernCrawlRequestMapStateResponse,
  /** k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse */
  8309: _chunkCU4ZEV3Ucjs.CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse,
  /** k_EMsgGCToClientRecordContestVoteResponse */
  8314: _chunkCU4ZEV3Ucjs.CMsgGCToClientRecordContestVoteResponse,
  /** k_EMsgDevGrantEventPointsResponse */
  8320: _chunkCU4ZEV3Ucjs.CMsgDevGrantEventPointsResponse,
  /** k_EMsgDevGrantEventActionResponse */
  8322: _chunkCU4ZEV3Ucjs.CMsgDevGrantEventActionResponse,
  /** k_EMsgDevResetEventStateResponse */
  8324: _chunkCU4ZEV3Ucjs.CMsgDevResetEventStateResponse,
  /** k_EMsgConsumeEventSupportGrantItemResponse */
  8327: _chunkCU4ZEV3Ucjs.CMsgConsumeEventSupportGrantItemResponse,
  /** k_EMsgGCToClientClaimEventActionUsingItemCompleted */
  8328: _chunkCU4ZEV3Ucjs.CMsgGCToClientClaimEventActionUsingItemCompleted,
  /** k_EMsgGCToClientCavernCrawlMapUpdated */
  8329: _chunkCU4ZEV3Ucjs.CMsgGCToClientCavernCrawlMapUpdated,
  /** k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse */
  8331: _chunkCU4ZEV3Ucjs.CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse,
  /** k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse */
  8333: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse,
  /** k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse */
  8335: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse,
  /** k_EMsgClientToGCRequestContestVotesResponse */
  8348: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestContestVotesResponse,
  /** k_EMsgClientToGCMVPVoteTimeoutResponse */
  8350: _chunkCU4ZEV3Ucjs.CMsgClientToGCMVPVoteTimeoutResponse,
  /** k_EMsgClientToGCSubmitPlayerMatchSurveyResponse */
  8362: _chunkCU4ZEV3Ucjs.CMsgClientToGCSubmitPlayerMatchSurveyResponse,
  /** k_EMsgDevDeleteEventActionsResponse */
  8366: _chunkCU4ZEV3Ucjs.CMsgDevDeleteEventActionsResponse,
  /** k_EMsgGCSubmitPlayerAvoidRequestResponse */
  8638: _chunkCU4ZEV3Ucjs.CMsgDOTASubmitPlayerAvoidRequestResponse,
  /** k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse */
  8641: _chunkCU4ZEV3Ucjs.CMsgGCtoGCAssociatedExploiterAccountInfoResponse,
  /** k_EMsgGCToClientVACReminder */
  8643: _chunkCU4ZEV3Ucjs.CMsgGCToClientVACReminder,
  /** k_EMsgClientToGCUnderDraftBuyResponse */
  8645: _chunkCU4ZEV3Ucjs.CMsgClientToGCUnderDraftBuyResponse,
  /** k_EMsgClientToGCUnderDraftRerollResponse */
  8647: _chunkCU4ZEV3Ucjs.CMsgClientToGCUnderDraftRerollResponse,
  /** k_EMsgClientToGCCreateGuildResponse */
  8650: _chunkCU4ZEV3Ucjs.CMsgClientToGCCreateGuildResponse,
  /** k_EMsgClientToGCSetGuildInfoResponse */
  8652: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetGuildInfoResponse,
  /** k_EMsgClientToGCAddGuildRoleResponse */
  8654: _chunkCU4ZEV3Ucjs.CMsgClientToGCAddGuildRoleResponse,
  /** k_EMsgClientToGCModifyGuildRoleResponse */
  8656: _chunkCU4ZEV3Ucjs.CMsgClientToGCModifyGuildRoleResponse,
  /** k_EMsgClientToGCRemoveGuildRoleResponse */
  8658: _chunkCU4ZEV3Ucjs.CMsgClientToGCRemoveGuildRoleResponse,
  /** k_EMsgClientToGCJoinGuildResponse */
  8660: _chunkCU4ZEV3Ucjs.CMsgClientToGCJoinGuildResponse,
  /** k_EMsgClientToGCLeaveGuildResponse */
  8662: _chunkCU4ZEV3Ucjs.CMsgClientToGCLeaveGuildResponse,
  /** k_EMsgClientToGCInviteToGuildResponse */
  8664: _chunkCU4ZEV3Ucjs.CMsgClientToGCInviteToGuildResponse,
  /** k_EMsgClientToGCDeclineInviteToGuildResponse */
  8666: _chunkCU4ZEV3Ucjs.CMsgClientToGCDeclineInviteToGuildResponse,
  /** k_EMsgClientToGCCancelInviteToGuildResponse */
  8668: _chunkCU4ZEV3Ucjs.CMsgClientToGCCancelInviteToGuildResponse,
  /** k_EMsgClientToGCKickGuildMemberResponse */
  8670: _chunkCU4ZEV3Ucjs.CMsgClientToGCKickGuildMemberResponse,
  /** k_EMsgClientToGCSetGuildMemberRoleResponse */
  8672: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetGuildMemberRoleResponse,
  /** k_EMsgClientToGCRequestGuildDataResponse */
  8674: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestGuildDataResponse,
  /** k_EMsgGCToClientGuildDataUpdated */
  8675: _chunkCU4ZEV3Ucjs.CMsgGCToClientGuildDataUpdated,
  /** k_EMsgClientToGCRequestGuildMembershipResponse */
  8677: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestGuildMembershipResponse,
  /** k_EMsgGCToClientGuildMembershipUpdated */
  8678: _chunkCU4ZEV3Ucjs.CMsgGCToClientGuildMembershipUpdated,
  /** k_EMsgClientToGCAcceptInviteToGuildResponse */
  8682: _chunkCU4ZEV3Ucjs.CMsgClientToGCAcceptInviteToGuildResponse,
  /** k_EMsgClientToGCSetGuildRoleOrderResponse */
  8684: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetGuildRoleOrderResponse,
  /** k_EMsgClientToGCRequestGuildFeedResponse */
  8686: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestGuildFeedResponse,
  /** k_EMsgClientToGCRequestAccountGuildEventDataResponse */
  8688: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestAccountGuildEventDataResponse,
  /** k_EMsgGCToClientAccountGuildEventDataUpdated */
  8689: _chunkCU4ZEV3Ucjs.CMsgGCToClientAccountGuildEventDataUpdated,
  /** k_EMsgClientToGCRequestActiveGuildContractsResponse */
  8691: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestActiveGuildContractsResponse,
  /** k_EMsgGCToClientActiveGuildContractsUpdated */
  8692: _chunkCU4ZEV3Ucjs.CMsgGCToClientActiveGuildContractsUpdated,
  /** k_EMsgGCToClientGuildFeedUpdated */
  8693: _chunkCU4ZEV3Ucjs.CMsgGCToClientGuildFeedUpdated,
  /** k_EMsgClientToGCSelectGuildContractResponse */
  8695: _chunkCU4ZEV3Ucjs.CMsgClientToGCSelectGuildContractResponse,
  /** k_EMsgClientToGCAddPlayerToGuildChatResponse */
  8699: _chunkCU4ZEV3Ucjs.CMsgClientToGCAddPlayerToGuildChatResponse,
  /** k_EMsgClientToGCUnderDraftSellResponse */
  8701: _chunkCU4ZEV3Ucjs.CMsgClientToGCUnderDraftSellResponse,
  /** k_EMsgClientToGCUnderDraftResponse */
  8703: _chunkCU4ZEV3Ucjs.CMsgClientToGCUnderDraftResponse,
  /** k_EMsgClientToGCUnderDraftRedeemRewardResponse */
  8705: _chunkCU4ZEV3Ucjs.CMsgClientToGCUnderDraftRedeemRewardResponse,
  /** k_EMsgClientToGCRequestActiveGuildChallengeResponse */
  8714: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestActiveGuildChallengeResponse,
  /** k_EMsgGCToClientActiveGuildChallengeUpdated */
  8715: _chunkCU4ZEV3Ucjs.CMsgGCToClientActiveGuildChallengeUpdated,
  /** k_EMsgClientToGCRequestReporterUpdatesResponse */
  8717: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestReporterUpdatesResponse,
  /** k_EMsgClientToGCRequestGuildEventMembersResponse */
  8722: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestGuildEventMembersResponse,
  /** k_EMsgClientToGCReportGuildContentResponse */
  8726: _chunkCU4ZEV3Ucjs.CMsgClientToGCReportGuildContentResponse,
  /** k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse */
  8728: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestAccountGuildPersonaInfoResponse,
  /** k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse */
  8730: _chunkCU4ZEV3Ucjs.CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse,
  /** k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse */
  8737: _chunkCU4ZEV3Ucjs.CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse,
  /** k_EMsgClientToGCUnderDraftRollBackBenchResponse */
  8741: _chunkCU4ZEV3Ucjs.CMsgClientToGCUnderDraftRollBackBenchResponse,
  /** k_EMsgGCToClientGuildMembersDataUpdated */
  8747: _chunkCU4ZEV3Ucjs.CMsgGCToClientGuildMembersDataUpdated,
  /** k_EMsgClientToGCGetOWMatchDetailsResponse */
  8752: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetOWMatchDetailsResponse,
  /** k_EMsgClientToGCSubmitOWConvictionResponse */
  8754: _chunkCU4ZEV3Ucjs.CMsgClientToGCSubmitOWConvictionResponse,
  /** k_EMsgClientToGCClaimLeaderboardRewardsResponse */
  8758: _chunkCU4ZEV3Ucjs.CMsgClientToGCClaimLeaderboardRewardsResponse,
  /** k_EMsgClientToGCRecalibrateMMRResponse */
  8760: _chunkCU4ZEV3Ucjs.CMsgClientToGCRecalibrateMMRResponse,
  /** k_EMsgClientToGCChinaSSAURLResponse */
  8765: _chunkCU4ZEV3Ucjs.CMsgClientToGCChinaSSAURLResponse,
  /** k_EMsgClientToGCChinaSSAAcceptedResponse */
  8767: _chunkCU4ZEV3Ucjs.CMsgClientToGCChinaSSAAcceptedResponse,
  /** k_EMsgGCToClientOverwatchCasesAvailable */
  8772: _chunkCU4ZEV3Ucjs.CMsgGCToClientOverwatchCasesAvailable,
  /** k_EMsgClientToGCGetDPCFavoritesResponse */
  8778: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetDPCFavoritesResponse,
  /** k_EMsgClientToGCSetDPCFavoriteStateResponse */
  8780: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetDPCFavoriteStateResponse,
  /** k_EMsgClientToGCSetEventActiveSeasonIDResponse */
  8807: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetEventActiveSeasonIDResponse,
  /** k_EMsgClientToGCCreateTeamPlayerCardPackResponse */
  8811: _chunkCU4ZEV3Ucjs.CMsgClientToGCCreateTeamPlayerCardPackResponse,
  /** k_EMsgClientToGCGetStickerbookResponse */
  8826: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetStickerbookResponse,
  /** k_EMsgClientToGCCreateStickerbookPageResponse */
  8828: _chunkCU4ZEV3Ucjs.CMsgClientToGCCreateStickerbookPageResponse,
  /** k_EMsgClientToGCDeleteStickerbookPageResponse */
  8830: _chunkCU4ZEV3Ucjs.CMsgClientToGCDeleteStickerbookPageResponse,
  /** k_EMsgClientToGCPlaceStickersResponse */
  8832: _chunkCU4ZEV3Ucjs.CMsgClientToGCPlaceStickersResponse,
  /** k_EMsgClientToGCPlaceCollectionStickersResponse */
  8834: _chunkCU4ZEV3Ucjs.CMsgClientToGCPlaceCollectionStickersResponse,
  /** k_EMsgClientToGCOrderStickerbookTeamPageResponse */
  8836: _chunkCU4ZEV3Ucjs.CMsgClientToGCOrderStickerbookTeamPageResponse,
  /** k_EMsgClientToGCSetHeroStickerResponse */
  8852: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetHeroStickerResponse,
  /** k_EMsgClientToGCGetHeroStickersResponse */
  8854: _chunkCU4ZEV3Ucjs.CMsgClientToGCGetHeroStickersResponse,
  /** k_EMsgClientToGCSetFavoritePageResponse */
  8856: _chunkCU4ZEV3Ucjs.CMsgClientToGCSetFavoritePageResponse,
  /** k_EMsgGCToClientCollectorsCacheAvailableDataResponse */
  8872: _chunkCU4ZEV3Ucjs.CMsgGCToClientCollectorsCacheAvailableDataResponse,
  /** k_EMsgGCToClientUploadMatchClipResponse */
  8874: _chunkCU4ZEV3Ucjs.CMsgGCToClientUploadMatchClipResponse,
  /** k_EMsgGCToClientRankResponse */
  8880: _chunkCU4ZEV3Ucjs.CMsgGCToClientRankResponse,
  /** k_EMsgGCToClientRankUpdate */
  8881: _chunkCU4ZEV3Ucjs.CMsgGCToClientRankUpdate,
  /** k_EMsgGCToClientMapStatsResponse */
  8884: _chunkCU4ZEV3Ucjs.CMsgGCToClientMapStatsResponse,
  /** k_EMsgClientToGCRoadToTIGetQuestsResponse */
  8898: _chunkCU4ZEV3Ucjs.CMsgClientToGCRoadToTIGetQuestsResponse,
  /** k_EMsgClientToGCRoadToTIGetActiveQuestResponse */
  8900: _chunkCU4ZEV3Ucjs.CMsgClientToGCRoadToTIGetActiveQuestResponse,
  /** k_EMsgGCToClientRoadToTIQuestDataUpdated */
  8910: _chunkCU4ZEV3Ucjs.CMsgGCToClientRoadToTIQuestDataUpdated,
  /** k_EMsgClientToGCRoadToTIUseItemResponse */
  8912: _chunkCU4ZEV3Ucjs.CMsgClientToGCRoadToTIUseItemResponse,
  /** k_EMsgClientToGCOverworldGetUserDataResponse */
  8945: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldGetUserDataResponse,
  /** k_EMsgClientToGCOverworldCompletePathResponse */
  8947: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldCompletePathResponse,
  /** k_EMsgClientToGCOverworldClaimEncounterRewardResponse */
  8949: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldClaimEncounterRewardResponse,
  /** k_EMsgClientToGCOverworldDevResetAllResponse */
  8951: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldDevResetAllResponse,
  /** k_EMsgClientToGCOverworldDevResetNodeResponse */
  8953: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldDevResetNodeResponse,
  /** k_EMsgClientToGCOverworldDevGrantTokensResponse */
  8957: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldDevGrantTokensResponse,
  /** k_EMsgClientToGCOverworldDevClearInventoryResponse */
  8959: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldDevClearInventoryResponse,
  /** k_EMsgGCToClientOverworldUserDataUpdated */
  8962: _chunkCU4ZEV3Ucjs.CMsgGCToClientOverworldUserDataUpdated,
  /** k_EMsgClientToGCOverworldMoveToNodeResponse */
  8964: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldMoveToNodeResponse,
  /** k_EMsgClientToGCNewBloomGiftResponse */
  8966: _chunkCU4ZEV3Ucjs.CMsgClientToGCNewBloomGiftResponse,
  /** k_EMsgClientToGCOverworldTradeTokensResponse */
  8971: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldTradeTokensResponse,
  /** k_EMsgClientToGCOverworldFeedbackResponse */
  8980: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldFeedbackResponse,
  /** k_EMsgClientToGCOverworldVisitEncounterResponse */
  8982: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldVisitEncounterResponse,
  /** k_EMsgClientToGCOverworldGiftTokensResponse */
  8984: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldGiftTokensResponse,
  /** k_EMsgClientToGCDotaLabsFeedbackResponse */
  8986: _chunkCU4ZEV3Ucjs.CMsgClientToGCDotaLabsFeedbackResponse,
  /** k_EMsgClientToGCOverworldGetDynamicImageResponse */
  8989: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldGetDynamicImageResponse,
  /** k_EMsgGCCompendiumRemoveAllSelectionsResponse */
  9008: _chunkCU4ZEV3Ucjs.CMsgDOTACompendiumRemoveAllSelectionsResponse,
  /** k_EMsgClientToGCOverworldMinigameActionResponse */
  9010: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldMinigameActionResponse,
  /** k_EMsgClientToGCOverworldRequestTokensNeededByFriendResponse */
  9014: _chunkCU4ZEV3Ucjs.CMsgClientToGCOverworldRequestTokensNeededByFriendResponse
};
var allMessages = { ...clientMessages, ...gcMessages };
var jobResponses = {
  7073: 7074,
  7078: 7079,
  7091: 7092,
  7200: 7201,
  7203: 7204,
  7274: 7275,
  7285: 7286,
  7287: 7288,
  7327: 7328,
  7387: 7388,
  7408: 7409,
  7454: 7455,
  7456: 7457,
  7518: 7519,
  7521: 7522,
  7527: 7528,
  7534: 7535,
  7606: 7607,
  7662: 7663,
  7664: 7665,
  7670: 7671,
  7672: 7673,
  7674: 7675,
  7676: 7677,
  7678: 7679,
  7684: 7685,
  7686: 7687,
  7688: 7689,
  8009: 8010,
  8078: 8079,
  8082: 8083,
  8111: 8112,
  8113: 8114,
  8126: 8127,
  8128: 8129,
  8130: 8131,
  8144: 8145,
  8168: 8169,
  8170: 8171,
  8174: 8175,
  8176: 8177,
  8187: 8188,
  8201: 8202,
  8209: 8210,
  8211: 8212,
  8216: 8217,
  8220: 8221,
  8244: 8245,
  8248: 8249,
  8258: 8259,
  8260: 8261,
  8270: 8271,
  8276: 8277,
  8289: 8290,
  8291: 8292,
  8293: 8294,
  8295: 8296,
  8308: 8309,
  8313: 8314,
  8319: 8320,
  8321: 8322,
  8323: 8324,
  8326: 8327,
  8330: 8331,
  8332: 8333,
  8334: 8335,
  8347: 8348,
  8349: 8350,
  8361: 8362,
  8365: 8366,
  8637: 8638,
  8640: 8641,
  8644: 8645,
  8646: 8647,
  8649: 8650,
  8651: 8652,
  8653: 8654,
  8655: 8656,
  8657: 8658,
  8659: 8660,
  8661: 8662,
  8663: 8664,
  8665: 8666,
  8667: 8668,
  8669: 8670,
  8671: 8672,
  8673: 8674,
  8676: 8677,
  8681: 8682,
  8683: 8684,
  8687: 8688,
  8690: 8691,
  8694: 8695,
  8698: 8699,
  8700: 8701,
  8704: 8705,
  8713: 8714,
  8716: 8717,
  8721: 8722,
  8725: 8726,
  8727: 8728,
  8729: 8730,
  8736: 8737,
  8740: 8741,
  8751: 8752,
  8753: 8754,
  8757: 8758,
  8759: 8760,
  8777: 8778,
  8779: 8780,
  8806: 8807,
  8810: 8811,
  8851: 8852,
  8853: 8854,
  8855: 8856,
  8873: 8874,
  8897: 8898,
  8899: 8900,
  8911: 8912,
  8944: 8945,
  8946: 8947,
  8948: 8949,
  8950: 8951,
  8952: 8953,
  8956: 8957,
  8958: 8959,
  8963: 8964,
  8965: 8966,
  8970: 8971,
  8979: 8980,
  8981: 8982,
  8983: 8984,
  8985: 8986,
  8988: 8989,
  9007: 9008,
  9009: 9010,
  9013: 9014
};
var messageNames = {
  21: "k_ESOMsg_Create",
  22: "k_ESOMsg_Update",
  23: "k_ESOMsg_Destroy",
  24: "k_ESOMsg_CacheSubscribed",
  25: "k_ESOMsg_CacheUnsubscribed",
  26: "k_ESOMsg_UpdateMultiple",
  28: "k_ESOMsg_CacheSubscriptionRefresh",
  29: "k_ESOMsg_CacheSubscribedUpToDate",
  3003: "k_EMsgGCToClientPollConvarRequest",
  3004: "k_EMsgGCToClientPollConvarResponse",
  3006: "k_EMsgGCToClientRequestDropped",
  4004: "k_EMsgGCClientWelcome",
  4005: "k_EMsgGCServerWelcome",
  4006: "k_EMsgGCClientHello",
  4007: "k_EMsgGCServerHello",
  4009: "k_EMsgGCClientConnectionStatus",
  4010: "k_EMsgGCServerConnectionStatus",
  4501: "k_EMsgGCInviteToParty",
  4502: "k_EMsgGCInvitationCreated",
  4503: "k_EMsgGCPartyInviteResponse",
  4504: "k_EMsgGCKickFromParty",
  4505: "k_EMsgGCLeaveParty",
  4506: "k_EMsgGCServerAvailable",
  4511: "k_EMsgGCLANServerAvailable",
  4512: "k_EMsgGCInviteToLobby",
  4513: "k_EMsgGCLobbyInviteResponse",
  4514: "k_EMsgGCToClientPollFileRequest",
  4515: "k_EMsgGCToClientPollFileResponse",
  4516: "k_EMsgGCToGCPerformManualOp",
  4517: "k_EMsgGCToGCPerformManualOpCompleted",
  4518: "k_EMsgGCToGCReloadServerRegionSettings",
  4519: "k_EMsgGCAdditionalWelcomeMsgList",
  4520: "k_EMsgGCToClientApplyRemoteConVars",
  4521: "k_EMsgGCToServerApplyRemoteConVars",
  4522: "k_EMsgClientToGCIntegrityStatus",
  4523: "k_EMsgClientToGCAggregateMetrics",
  4524: "k_EMsgGCToClientAggregateMetricsBackoff",
  4525: "k_EMsgGCToServerSteamLearnAccessTokensChanged",
  4526: "k_EMsgGCToServerSteamLearnUseHTTP",
  7049: "k_EMsgGCInitialQuestionnaireResponse",
  7056: "k_EMsgGCBroadcastNotification",
  7071: "k_EMsgGCKickedFromMatchmakingQueue",
  7073: "k_EMsgGCSpectateFriendGame",
  7074: "k_EMsgGCSpectateFriendGameResponse",
  7076: "k_EMsgGCReportsRemainingRequest",
  7077: "k_EMsgGCReportsRemainingResponse",
  7078: "k_EMsgGCSubmitPlayerReport",
  7079: "k_EMsgGCSubmitPlayerReportResponse",
  7082: "k_EMsgGCSubmitPlayerReportV2",
  7083: "k_EMsgGCSubmitPlayerReportResponseV2",
  7091: "k_EMsgGCWatchGame",
  7092: "k_EMsgGCWatchGameResponse",
  7095: "k_EMsgGCMatchDetailsRequest",
  7096: "k_EMsgGCMatchDetailsResponse",
  7097: "k_EMsgGCCancelWatchGame",
  7102: "k_EMsgGCPopup",
  7188: "k_EMsgGCBalancedShuffleLobby",
  7197: "k_EMsgGCMatchmakingStatsRequest",
  7198: "k_EMsgGCMatchmakingStatsResponse",
  7200: "k_EMsgGCSetMatchHistoryAccess",
  7201: "k_EMsgGCSetMatchHistoryAccessResponse",
  7203: "k_EMsgUpgradeLeagueItem",
  7204: "k_EMsgUpgradeLeagueItemResponse",
  7206: "k_EMsgGCWatchDownloadedReplay",
  7217: "k_EMsgClientsRejoinChatChannels",
  7274: "k_EMsgGCGetHeroStandings",
  7275: "k_EMsgGCGetHeroStandingsResponse",
  7283: "k_EMsgGCItemEditorReservationsRequest",
  7284: "k_EMsgGCItemEditorReservationsResponse",
  7285: "k_EMsgGCItemEditorReserveItemDef",
  7286: "k_EMsgGCItemEditorReserveItemDefResponse",
  7287: "k_EMsgGCItemEditorReleaseReservation",
  7288: "k_EMsgGCItemEditorReleaseReservationResponse",
  7320: "k_EMsgGCFlipLobbyTeams",
  7326: "k_EMsgGCNotifyAccountFlagsChange",
  7327: "k_EMsgGCSetProfilePrivacy",
  7328: "k_EMsgGCSetProfilePrivacyResponse",
  7342: "k_EMsgGCClientSuspended",
  7367: "k_EMsgGCLobbyUpdateBroadcastChannelInfo",
  7387: "k_EMsgDOTAGetEventPoints",
  7388: "k_EMsgDOTAGetEventPointsResponse",
  7397: "k_EMsgGCPartyLeaderWatchGamePrompt",
  7406: "k_EMsgGCCompendiumDataRequest",
  7407: "k_EMsgGCCompendiumDataResponse",
  7408: "k_EMsgDOTAGetPlayerMatchHistory",
  7409: "k_EMsgDOTAGetPlayerMatchHistoryResponse",
  7427: "k_EMsgGCNotificationsRequest",
  7428: "k_EMsgGCNotificationsResponse",
  7434: "k_EMsgGCLeagueAdminList",
  7435: "k_EMsgGCNotificationsMarkReadRequest",
  7454: "k_EMsgGCRankedPlayerInfoSubmit",
  7455: "k_EMsgGCRankedPlayerInfoSubmitResponse",
  7456: "k_EMsgGCPlayerInfoSubmit",
  7457: "k_EMsgGCPlayerInfoSubmitResponse",
  7484: "k_EMsgGCHasItemQuery",
  7485: "k_EMsgGCHasItemResponse",
  7495: "k_EMsgGCToClientTournamentItemDrop",
  7503: "k_EMsgClientToGCEmoticonDataRequest",
  7504: "k_EMsgGCToClientEmoticonData",
  7518: "k_EMsgDOTARedeemItem",
  7519: "k_EMsgDOTARedeemItemResponse",
  7521: "k_EMsgClientToGCGetAllHeroProgress",
  7522: "k_EMsgClientToGCGetAllHeroProgressResponse",
  7527: "k_EMsgClientToGCGetTrophyList",
  7528: "k_EMsgClientToGCGetTrophyListResponse",
  7529: "k_EMsgGCToClientTrophyAwarded",
  7534: "k_EMsgClientToGCGetProfileCard",
  7535: "k_EMsgClientToGCGetProfileCardResponse",
  7538: "k_EMsgClientToGCSetProfileCardSlots",
  7547: "k_EMsgClientToGCCreateHeroStatue",
  7548: "k_EMsgGCToClientHeroStatueCreateResult",
  7572: "k_EMsgLobbyEventPoints",
  7584: "k_EMsgClientToGCRerollPlayerChallenge",
  7586: "k_EMsgGCRerollPlayerChallengeResponse",
  7603: "k_EMsgClientToGCApplyGemCombiner",
  7606: "k_EMsgClientToGCGetAllHeroOrder",
  7607: "k_EMsgClientToGCGetAllHeroOrderResponse",
  7627: "k_EMsgClientToGCPlayerCardSpecificPurchaseRequest",
  7628: "k_EMsgClientToGCPlayerCardSpecificPurchaseResponse",
  7662: "k_EMsgClientToGCGetFilteredPlayers",
  7663: "k_EMsgGCToClientGetFilteredPlayersResponse",
  7664: "k_EMsgClientToGCRemoveFilteredPlayer",
  7665: "k_EMsgGCToClientRemoveFilteredPlayerResponse",
  7666: "k_EMsgGCToClientPlayerBeaconState",
  7667: "k_EMsgGCToClientPartyBeaconUpdate",
  7668: "k_EMsgGCToClientPartySearchInvite",
  7669: "k_EMsgClientToGCUpdatePartyBeacon",
  7670: "k_EMsgClientToGCRequestActiveBeaconParties",
  7671: "k_EMsgGCToClientRequestActiveBeaconPartiesResponse",
  7672: "k_EMsgClientToGCManageFavorites",
  7673: "k_EMsgGCToClientManageFavoritesResponse",
  7674: "k_EMsgClientToGCJoinPartyFromBeacon",
  7675: "k_EMsgGCToClientJoinPartyFromBeaconResponse",
  7676: "k_EMsgClientToGCGetFavoritePlayers",
  7677: "k_EMsgGCToClientGetFavoritePlayersResponse",
  7678: "k_EMsgClientToGCVerifyFavoritePlayers",
  7679: "k_EMsgGCToClientVerifyFavoritePlayersResponse",
  7680: "k_EMsgGCToClientPartySearchInvites",
  7684: "k_EMsgClientToGCPurchaseLabyrinthBlessings",
  7685: "k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse",
  7686: "k_EMsgClientToGCPurchaseFilteredPlayerSlot",
  7687: "k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse",
  7688: "k_EMsgClientToGCUpdateFilteredPlayerNote",
  7689: "k_EMsgGCToClientUpdateFilteredPlayerNoteResponse",
  7690: "k_EMsgClientToGCClaimSwag",
  8006: "k_EMsgClientToGCPlayerStatsRequest",
  8007: "k_EMsgGCToClientPlayerStatsResponse",
  8009: "k_EMsgClientToGCFindTopSourceTVGames",
  8010: "k_EMsgGCToClientFindTopSourceTVGamesResponse",
  8016: "k_EMsgClientToGCSocialFeedPostCommentRequest",
  8017: "k_EMsgGCToClientSocialFeedPostCommentResponse",
  8018: "k_EMsgClientToGCCustomGamesFriendsPlayedRequest",
  8019: "k_EMsgGCToClientCustomGamesFriendsPlayedResponse",
  8020: "k_EMsgClientToGCFriendsPlayedCustomGameRequest",
  8021: "k_EMsgGCToClientFriendsPlayedCustomGameResponse",
  8024: "k_EMsgGCTopCustomGamesList",
  8034: "k_EMsgClientToGCGetProfileCardStats",
  8036: "k_EMsgClientToGCTopLeagueMatchesRequest",
  8037: "k_EMsgClientToGCTopFriendMatchesRequest",
  8050: "k_EMsgClientToGCSocialFeedPostMessageRequest",
  8051: "k_EMsgGCToClientSocialFeedPostMessageResponse",
  8052: "k_EMsgCustomGameListenServerStartedLoading",
  8053: "k_EMsgCustomGameClientFinishedLoading",
  8061: "k_EMsgGCToClientTopLeagueMatchesResponse",
  8062: "k_EMsgGCToClientTopFriendMatchesResponse",
  8063: "k_EMsgClientToGCMatchesMinimalRequest",
  8064: "k_EMsgClientToGCMatchesMinimalResponse",
  8073: "k_EMsgClientToGCGetProfileTickets",
  8075: "k_EMsgGCToClientMatchGroupsVersion",
  8076: "k_EMsgClientToGCH264Unsupported",
  8078: "k_EMsgClientToGCGetQuestProgress",
  8079: "k_EMsgClientToGCGetQuestProgressResponse",
  8081: "k_EMsgGCToClientMatchSignedOut",
  8082: "k_EMsgGCGetHeroStatsHistory",
  8083: "k_EMsgGCGetHeroStatsHistoryResponse",
  8099: "k_EMsgClientToGCWageringRequest",
  8100: "k_EMsgGCToClientWageringResponse",
  8111: "k_EMsgClientToGCHasPlayerVotedForMVP",
  8112: "k_EMsgClientToGCHasPlayerVotedForMVPResponse",
  8113: "k_EMsgClientToGCVoteForMVP",
  8114: "k_EMsgClientToGCVoteForMVPResponse",
  8124: "k_EMsgClientToGCTeammateStatsRequest",
  8125: "k_EMsgClientToGCTeammateStatsResponse",
  8126: "k_EMsgClientToGCGetGiftPermissions",
  8127: "k_EMsgClientToGCGetGiftPermissionsResponse",
  8128: "k_EMsgClientToGCVoteForArcana",
  8129: "k_EMsgClientToGCVoteForArcanaResponse",
  8130: "k_EMsgClientToGCRequestArcanaVotesRemaining",
  8131: "k_EMsgClientToGCRequestArcanaVotesRemainingResponse",
  8140: "k_EMsgClientToGCPublishUserStat",
  8144: "k_EMsgGCSubmitLobbyMVPVote",
  8145: "k_EMsgGCSubmitLobbyMVPVoteResponse",
  8153: "k_EMsgGCToClientQuestProgressUpdated",
  8154: "k_EMsgGCToClientWageringUpdate",
  8155: "k_EMsgGCToClientArcanaVotesUpdate",
  8168: "k_EMsgClientToGCOpenPlayerCardPack",
  8169: "k_EMsgClientToGCOpenPlayerCardPackResponse",
  8170: "k_EMsgClientToGCSelectCompendiumInGamePrediction",
  8171: "k_EMsgClientToGCSelectCompendiumInGamePredictionResponse",
  8174: "k_EMsgClientToGCRecyclePlayerCard",
  8175: "k_EMsgClientToGCRecyclePlayerCardResponse",
  8176: "k_EMsgClientToGCCreatePlayerCardPack",
  8177: "k_EMsgClientToGCCreatePlayerCardPackResponse",
  8187: "k_EMsgGCGetPlayerCardItemInfo",
  8188: "k_EMsgGCGetPlayerCardItemInfoResponse",
  8191: "k_EMsgGCToClientBattlePassRollupRequest",
  8192: "k_EMsgGCToClientBattlePassRollupResponse",
  8193: "k_EMsgClientToGCTransferSeasonalMMRRequest",
  8194: "k_EMsgClientToGCTransferSeasonalMMRResponse",
  8200: "k_EMsgGCToClientPlaytestStatus",
  8201: "k_EMsgClientToGCJoinPlaytest",
  8202: "k_EMsgClientToGCJoinPlaytestResponse",
  8203: "k_EMsgLobbyPlaytestDetails",
  8204: "k_EMsgDOTASetFavoriteTeam",
  8205: "k_EMsgGCToClientBattlePassRollupListRequest",
  8206: "k_EMsgGCToClientBattlePassRollupListResponse",
  8209: "k_EMsgDOTAClaimEventAction",
  8210: "k_EMsgDOTAClaimEventActionResponse",
  8211: "k_EMsgDOTAGetPeriodicResource",
  8212: "k_EMsgDOTAGetPeriodicResourceResponse",
  8213: "k_EMsgDOTAPeriodicResourceUpdated",
  8216: "k_EMsgSubmitTriviaQuestionAnswer",
  8217: "k_EMsgSubmitTriviaQuestionAnswerResponse",
  8220: "k_EMsgStartTriviaSession",
  8221: "k_EMsgStartTriviaSessionResponse",
  8222: "k_EMsgAnchorPhoneNumberRequest",
  8223: "k_EMsgAnchorPhoneNumberResponse",
  8224: "k_EMsgUnanchorPhoneNumberRequest",
  8225: "k_EMsgUnanchorPhoneNumberResponse",
  8238: "k_EMsgClientToGCQuickStatsRequest",
  8239: "k_EMsgClientToGCQuickStatsResponse",
  8241: "k_EMsgSelectionPriorityChoiceRequest",
  8242: "k_EMsgSelectionPriorityChoiceResponse",
  8244: "k_EMsgGameAutographReward",
  8245: "k_EMsgGameAutographRewardResponse",
  8246: "k_EMsgDestroyLobbyRequest",
  8247: "k_EMsgDestroyLobbyResponse",
  8248: "k_EMsgPurchaseItemWithEventPoints",
  8249: "k_EMsgPurchaseItemWithEventPointsResponse",
  8258: "k_EMsgPurchaseHeroRandomRelic",
  8259: "k_EMsgPurchaseHeroRandomRelicResponse",
  8260: "k_EMsgClientToGCClaimEventActionUsingItem",
  8261: "k_EMsgClientToGCClaimEventActionUsingItemResponse",
  8262: "k_EMsgPartyReadyCheckRequest",
  8263: "k_EMsgPartyReadyCheckResponse",
  8264: "k_EMsgPartyReadyCheckAcknowledge",
  8265: "k_EMsgGetRecentPlayTimeFriendsRequest",
  8266: "k_EMsgGetRecentPlayTimeFriendsResponse",
  8267: "k_EMsgGCToClientCommendNotification",
  8268: "k_EMsgProfileRequest",
  8269: "k_EMsgProfileResponse",
  8270: "k_EMsgProfileUpdate",
  8271: "k_EMsgProfileUpdateResponse",
  8274: "k_EMsgHeroGlobalDataRequest",
  8275: "k_EMsgHeroGlobalDataResponse",
  8276: "k_EMsgClientToGCRequestPlusWeeklyChallengeResult",
  8277: "k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse",
  8279: "k_EMsgPrivateMetadataKeyRequest",
  8280: "k_EMsgPrivateMetadataKeyResponse",
  8288: "k_EMsgGCToClientCavernCrawlMapPathCompleted",
  8289: "k_EMsgClientToGCCavernCrawlClaimRoom",
  8290: "k_EMsgClientToGCCavernCrawlClaimRoomResponse",
  8291: "k_EMsgClientToGCCavernCrawlUseItemOnRoom",
  8292: "k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse",
  8293: "k_EMsgClientToGCCavernCrawlUseItemOnPath",
  8294: "k_EMsgClientToGCCavernCrawlUseItemOnPathResponse",
  8295: "k_EMsgClientToGCCavernCrawlRequestMapState",
  8296: "k_EMsgClientToGCCavernCrawlRequestMapStateResponse",
  8298: "k_EMsgClientToGCRequestEventPointLogV2",
  8299: "k_EMsgClientToGCRequestEventPointLogResponseV2",
  8308: "k_EMsgClientToGCCavernCrawlGetClaimedRoomCount",
  8309: "k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse",
  8313: "k_EMsgClientToGCRecordContestVote",
  8314: "k_EMsgGCToClientRecordContestVoteResponse",
  8318: "k_EMsgLobbyEventGameDetails",
  8319: "k_EMsgDevGrantEventPoints",
  8320: "k_EMsgDevGrantEventPointsResponse",
  8321: "k_EMsgDevGrantEventAction",
  8322: "k_EMsgDevGrantEventActionResponse",
  8323: "k_EMsgDevResetEventState",
  8324: "k_EMsgDevResetEventStateResponse",
  8326: "k_EMsgConsumeEventSupportGrantItem",
  8327: "k_EMsgConsumeEventSupportGrantItemResponse",
  8328: "k_EMsgGCToClientClaimEventActionUsingItemCompleted",
  8329: "k_EMsgGCToClientCavernCrawlMapUpdated",
  8330: "k_EMsgServerToGCRequestPlayerRecentAccomplishments",
  8331: "k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse",
  8332: "k_EMsgClientToGCRequestPlayerRecentAccomplishments",
  8333: "k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse",
  8334: "k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments",
  8335: "k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse",
  8347: "k_EMsgClientToGCRequestContestVotes",
  8348: "k_EMsgClientToGCRequestContestVotesResponse",
  8349: "k_EMsgClientToGCMVPVoteTimeout",
  8350: "k_EMsgClientToGCMVPVoteTimeoutResponse",
  8360: "k_EMsgMatchMatchmakingStats",
  8361: "k_EMsgClientToGCSubmitPlayerMatchSurvey",
  8362: "k_EMsgClientToGCSubmitPlayerMatchSurveyResponse",
  8365: "k_EMsgDevDeleteEventActions",
  8366: "k_EMsgDevDeleteEventActionsResponse",
  8637: "k_EMsgGCSubmitPlayerAvoidRequest",
  8638: "k_EMsgGCSubmitPlayerAvoidRequestResponse",
  8640: "k_EMsgGCtoGCAssociatedExploiterAccountInfo",
  8641: "k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse",
  8643: "k_EMsgGCToClientVACReminder",
  8644: "k_EMsgClientToGCUnderDraftBuy",
  8645: "k_EMsgClientToGCUnderDraftBuyResponse",
  8646: "k_EMsgClientToGCUnderDraftReroll",
  8647: "k_EMsgClientToGCUnderDraftRerollResponse",
  8649: "k_EMsgClientToGCCreateGuild",
  8650: "k_EMsgClientToGCCreateGuildResponse",
  8651: "k_EMsgClientToGCSetGuildInfo",
  8652: "k_EMsgClientToGCSetGuildInfoResponse",
  8653: "k_EMsgClientToGCAddGuildRole",
  8654: "k_EMsgClientToGCAddGuildRoleResponse",
  8655: "k_EMsgClientToGCModifyGuildRole",
  8656: "k_EMsgClientToGCModifyGuildRoleResponse",
  8657: "k_EMsgClientToGCRemoveGuildRole",
  8658: "k_EMsgClientToGCRemoveGuildRoleResponse",
  8659: "k_EMsgClientToGCJoinGuild",
  8660: "k_EMsgClientToGCJoinGuildResponse",
  8661: "k_EMsgClientToGCLeaveGuild",
  8662: "k_EMsgClientToGCLeaveGuildResponse",
  8663: "k_EMsgClientToGCInviteToGuild",
  8664: "k_EMsgClientToGCInviteToGuildResponse",
  8665: "k_EMsgClientToGCDeclineInviteToGuild",
  8666: "k_EMsgClientToGCDeclineInviteToGuildResponse",
  8667: "k_EMsgClientToGCCancelInviteToGuild",
  8668: "k_EMsgClientToGCCancelInviteToGuildResponse",
  8669: "k_EMsgClientToGCKickGuildMember",
  8670: "k_EMsgClientToGCKickGuildMemberResponse",
  8671: "k_EMsgClientToGCSetGuildMemberRole",
  8672: "k_EMsgClientToGCSetGuildMemberRoleResponse",
  8673: "k_EMsgClientToGCRequestGuildData",
  8674: "k_EMsgClientToGCRequestGuildDataResponse",
  8675: "k_EMsgGCToClientGuildDataUpdated",
  8676: "k_EMsgClientToGCRequestGuildMembership",
  8677: "k_EMsgClientToGCRequestGuildMembershipResponse",
  8678: "k_EMsgGCToClientGuildMembershipUpdated",
  8681: "k_EMsgClientToGCAcceptInviteToGuild",
  8682: "k_EMsgClientToGCAcceptInviteToGuildResponse",
  8683: "k_EMsgClientToGCSetGuildRoleOrder",
  8684: "k_EMsgClientToGCSetGuildRoleOrderResponse",
  8686: "k_EMsgClientToGCRequestGuildFeedResponse",
  8687: "k_EMsgClientToGCRequestAccountGuildEventData",
  8688: "k_EMsgClientToGCRequestAccountGuildEventDataResponse",
  8689: "k_EMsgGCToClientAccountGuildEventDataUpdated",
  8690: "k_EMsgClientToGCRequestActiveGuildContracts",
  8691: "k_EMsgClientToGCRequestActiveGuildContractsResponse",
  8692: "k_EMsgGCToClientActiveGuildContractsUpdated",
  8693: "k_EMsgGCToClientGuildFeedUpdated",
  8694: "k_EMsgClientToGCSelectGuildContract",
  8695: "k_EMsgClientToGCSelectGuildContractResponse",
  8698: "k_EMsgClientToGCAddPlayerToGuildChat",
  8699: "k_EMsgClientToGCAddPlayerToGuildChatResponse",
  8700: "k_EMsgClientToGCUnderDraftSell",
  8701: "k_EMsgClientToGCUnderDraftSellResponse",
  8702: "k_EMsgClientToGCUnderDraftRequest",
  8703: "k_EMsgClientToGCUnderDraftResponse",
  8704: "k_EMsgClientToGCUnderDraftRedeemReward",
  8705: "k_EMsgClientToGCUnderDraftRedeemRewardResponse",
  8713: "k_EMsgClientToGCRequestActiveGuildChallenge",
  8714: "k_EMsgClientToGCRequestActiveGuildChallengeResponse",
  8715: "k_EMsgGCToClientActiveGuildChallengeUpdated",
  8716: "k_EMsgClientToGCRequestReporterUpdates",
  8717: "k_EMsgClientToGCRequestReporterUpdatesResponse",
  8718: "k_EMsgClientToGCAcknowledgeReporterUpdates",
  8721: "k_EMsgClientToGCRequestGuildEventMembers",
  8722: "k_EMsgClientToGCRequestGuildEventMembersResponse",
  8725: "k_EMsgClientToGCReportGuildContent",
  8726: "k_EMsgClientToGCReportGuildContentResponse",
  8727: "k_EMsgClientToGCRequestAccountGuildPersonaInfo",
  8728: "k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse",
  8729: "k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch",
  8730: "k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse",
  8734: "k_EMsgLobbyFeaturedGamemodeProgress",
  8736: "k_EMsgClientToGCSubmitDraftTriviaMatchAnswer",
  8737: "k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse",
  8740: "k_EMsgClientToGCUnderDraftRollBackBench",
  8741: "k_EMsgClientToGCUnderDraftRollBackBenchResponse",
  8746: "k_EMsgLobbyEventGameData",
  8747: "k_EMsgGCToClientGuildMembersDataUpdated",
  8751: "k_EMsgClientToGCGetOWMatchDetails",
  8752: "k_EMsgClientToGCGetOWMatchDetailsResponse",
  8753: "k_EMsgClientToGCSubmitOWConviction",
  8754: "k_EMsgClientToGCSubmitOWConvictionResponse",
  8757: "k_EMsgClientToGCClaimLeaderboardRewards",
  8758: "k_EMsgClientToGCClaimLeaderboardRewardsResponse",
  8759: "k_EMsgClientToGCRecalibrateMMR",
  8760: "k_EMsgClientToGCRecalibrateMMRResponse",
  8764: "k_EMsgClientToGCChinaSSAURLRequest",
  8765: "k_EMsgClientToGCChinaSSAURLResponse",
  8766: "k_EMsgClientToGCChinaSSAAcceptedRequest",
  8767: "k_EMsgClientToGCChinaSSAAcceptedResponse",
  8772: "k_EMsgGCToClientOverwatchCasesAvailable",
  8774: "k_EMsgClientToGCStartWatchingOverwatch",
  8775: "k_EMsgClientToGCStopWatchingOverwatch",
  8777: "k_EMsgClientToGCGetDPCFavorites",
  8778: "k_EMsgClientToGCGetDPCFavoritesResponse",
  8779: "k_EMsgClientToGCSetDPCFavoriteState",
  8780: "k_EMsgClientToGCSetDPCFavoriteStateResponse",
  8781: "k_EMsgClientToGCOverwatchReplayError",
  8806: "k_EMsgClientToGCSetEventActiveSeasonID",
  8807: "k_EMsgClientToGCSetEventActiveSeasonIDResponse",
  8810: "k_EMsgClientToGCCreateTeamPlayerCardPack",
  8811: "k_EMsgClientToGCCreateTeamPlayerCardPackResponse",
  8825: "k_EMsgClientToGCGetStickerbookRequest",
  8826: "k_EMsgClientToGCGetStickerbookResponse",
  8827: "k_EMsgClientToGCCreateStickerbookPageRequest",
  8828: "k_EMsgClientToGCCreateStickerbookPageResponse",
  8829: "k_EMsgClientToGCDeleteStickerbookPageRequest",
  8830: "k_EMsgClientToGCDeleteStickerbookPageResponse",
  8831: "k_EMsgClientToGCPlaceStickersRequest",
  8832: "k_EMsgClientToGCPlaceStickersResponse",
  8833: "k_EMsgClientToGCPlaceCollectionStickersRequest",
  8834: "k_EMsgClientToGCPlaceCollectionStickersResponse",
  8835: "k_EMsgClientToGCOrderStickerbookTeamPageRequest",
  8836: "k_EMsgClientToGCOrderStickerbookTeamPageResponse",
  8851: "k_EMsgClientToGCSetHeroSticker",
  8852: "k_EMsgClientToGCSetHeroStickerResponse",
  8853: "k_EMsgClientToGCGetHeroStickers",
  8854: "k_EMsgClientToGCGetHeroStickersResponse",
  8855: "k_EMsgClientToGCSetFavoritePage",
  8856: "k_EMsgClientToGCSetFavoritePageResponse",
  8871: "k_EMsgClientToGCCollectorsCacheAvailableDataRequest",
  8872: "k_EMsgGCToClientCollectorsCacheAvailableDataResponse",
  8873: "k_EMsgClientToGCUploadMatchClip",
  8874: "k_EMsgGCToClientUploadMatchClipResponse",
  8879: "k_EMsgClientToGCRankRequest",
  8880: "k_EMsgGCToClientRankResponse",
  8881: "k_EMsgGCToClientRankUpdate",
  8883: "k_EMsgClientToGCMapStatsRequest",
  8884: "k_EMsgGCToClientMapStatsResponse",
  8897: "k_EMsgClientToGCRoadToTIGetQuests",
  8898: "k_EMsgClientToGCRoadToTIGetQuestsResponse",
  8899: "k_EMsgClientToGCRoadToTIGetActiveQuest",
  8900: "k_EMsgClientToGCRoadToTIGetActiveQuestResponse",
  8910: "k_EMsgGCToClientRoadToTIQuestDataUpdated",
  8911: "k_EMsgClientToGCRoadToTIUseItem",
  8912: "k_EMsgClientToGCRoadToTIUseItemResponse",
  8935: "k_EMsgClientToGCRoadToTIDevForceQuest",
  8939: "k_EMsgLobbyRoadToTIMatchQuestData",
  8944: "k_EMsgClientToGCOverworldGetUserData",
  8945: "k_EMsgClientToGCOverworldGetUserDataResponse",
  8946: "k_EMsgClientToGCOverworldCompletePath",
  8947: "k_EMsgClientToGCOverworldCompletePathResponse",
  8948: "k_EMsgClientToGCOverworldClaimEncounterReward",
  8949: "k_EMsgClientToGCOverworldClaimEncounterRewardResponse",
  8950: "k_EMsgClientToGCOverworldDevResetAll",
  8951: "k_EMsgClientToGCOverworldDevResetAllResponse",
  8952: "k_EMsgClientToGCOverworldDevResetNode",
  8953: "k_EMsgClientToGCOverworldDevResetNodeResponse",
  8956: "k_EMsgClientToGCOverworldDevGrantTokens",
  8957: "k_EMsgClientToGCOverworldDevGrantTokensResponse",
  8958: "k_EMsgClientToGCOverworldDevClearInventory",
  8959: "k_EMsgClientToGCOverworldDevClearInventoryResponse",
  8962: "k_EMsgGCToClientOverworldUserDataUpdated",
  8963: "k_EMsgClientToGCOverworldMoveToNode",
  8964: "k_EMsgClientToGCOverworldMoveToNodeResponse",
  8965: "k_EMsgClientToGCNewBloomGift",
  8966: "k_EMsgClientToGCNewBloomGiftResponse",
  8969: "k_EMsgClientToGCSetBannedHeroes",
  8970: "k_EMsgClientToGCOverworldTradeTokens",
  8971: "k_EMsgClientToGCOverworldTradeTokensResponse",
  8972: "k_EMsgOverworldEncounterTokenTreasureData",
  8973: "k_EMsgOverworldEncounterTokenQuestData",
  8974: "k_EMsgOverworldEncounterChooseHeroData",
  8975: "k_EMsgClientToGCUpdateComicBookStats",
  8978: "k_EMsgOverworldEncounterProgressData",
  8979: "k_EMsgClientToGCOverworldFeedback",
  8980: "k_EMsgClientToGCOverworldFeedbackResponse",
  8981: "k_EMsgClientToGCOverworldVisitEncounter",
  8982: "k_EMsgClientToGCOverworldVisitEncounterResponse",
  8983: "k_EMsgClientToGCOverworldGiftTokens",
  8984: "k_EMsgClientToGCOverworldGiftTokensResponse",
  8985: "k_EMsgClientToGCDotaLabsFeedback",
  8986: "k_EMsgClientToGCDotaLabsFeedbackResponse",
  8987: "k_EMsgOverworldEncounterPitFighterRewardData",
  8988: "k_EMsgClientToGCOverworldGetDynamicImage",
  8989: "k_EMsgClientToGCOverworldGetDynamicImageResponse",
  9007: "k_EMsgGCCompendiumRemoveAllSelections",
  9008: "k_EMsgGCCompendiumRemoveAllSelectionsResponse",
  9009: "k_EMsgClientToGCOverworldMinigameAction",
  9010: "k_EMsgClientToGCOverworldMinigameActionResponse",
  9013: "k_EMsgClientToGCOverworldRequestTokensNeededByFriend",
  9014: "k_EMsgClientToGCOverworldRequestTokensNeededByFriendResponse"
};

// src/gc/router.ts

var UNKNOWN = "unknown";
var DECODE_ERROR = "decodeError";
var GCRouter = (_class = class {
  constructor(logger) {;_class.prototype.__init.call(this);_class.prototype.__init2.call(this);
    this.logger = logger;
    this.emitter.setMaxListeners(0);
  }
  
  __init() {this.emitter = new (0, _events.EventEmitter)()}
  __init2() {this.anyListeners = /* @__PURE__ */ new Set()}
  on(msgId, listener) {
    this.emitter.on(String(msgId), listener);
    return this;
  }
  once(msgId, listener) {
    this.emitter.once(String(msgId), listener);
    return this;
  }
  off(msgId, listener) {
    this.emitter.off(String(msgId), listener);
    return this;
  }
  /** Fires for every routed message, decoded when possible and raw otherwise. */
  onAny(listener) {
    this.anyListeners.add(listener);
    return this;
  }
  offAny(listener) {
    this.anyListeners.delete(listener);
    return this;
  }
  removeAllListeners(msgId) {
    if (msgId === void 0) {
      this.emitter.removeAllListeners();
      this.anyListeners.clear();
    } else {
      this.emitter.removeAllListeners(String(msgId));
    }
    return this;
  }
  listenerCount(msgId) {
    return this.emitter.listenerCount(String(msgId));
  }
  hasDecoder(msgId) {
    return msgId in allMessages;
  }
  /** Enum member name for a message id, or `undefined` if the id is unknown. */
  messageName(msgId) {
    return messageNames[msgId];
  }
  /**
   * Decodes a raw GC message and dispatches it. Never throws: unknown ids and
   * malformed payloads become `unknown` / `decodeError` events, and an exception
   * from a listener is logged rather than escaping into the transport's callback.
   */
  route(msgId, payload) {
    const codec = allMessages[msgId];
    if (!codec) {
      _optionalChain([this, 'access', _ => _.logger, 'optionalAccess', _2 => _2.debug, 'optionalCall', _3 => _3("dotakit: no decoder for inbound GC message %s", msgId)]);
      this.emitAny(msgId, payload);
      this.dispatch(UNKNOWN, msgId, payload);
      return;
    }
    let decoded;
    try {
      decoded = codec.decode(payload);
    } catch (error) {
      _optionalChain([this, 'access', _4 => _4.logger, 'optionalAccess', _5 => _5.warn, 'optionalCall', _6 => _6("dotakit: failed to decode GC message %s", msgId, error)]);
      this.dispatch(DECODE_ERROR, msgId, payload, error);
      return;
    }
    this.emitAny(msgId, decoded);
    this.dispatch(String(msgId), decoded);
  }
  /* route() runs inside the transport's own event handler, so a listener that throws
     would escape into the socket callback and take the process down with it. */
  dispatch(event, ...args) {
    try {
      this.emitter.emit(event, ...args);
    } catch (error) {
      _optionalChain([this, 'access', _7 => _7.logger, 'optionalAccess', _8 => _8.error, 'optionalCall', _9 => _9("dotakit: listener threw while routing %s", event, error)]);
    }
  }
  emitAny(msgId, payload) {
    for (const listener of this.anyListeners) {
      try {
        listener(msgId, payload);
      } catch (error) {
        _optionalChain([this, 'access', _10 => _10.logger, 'optionalAccess', _11 => _11.error, 'optionalCall', _12 => _12("dotakit: onAny listener threw for message %s", msgId, error)]);
      }
    }
  }
}, _class);

// src/gc/client.ts
var DOTA2_APPID = 570;
var MAX_TIMEOUT_MS = 2147483647;
function normalizeTimeout(value, fallback, name) {
  const ms = _nullishCoalesce(value, () => ( fallback));
  if (!Number.isFinite(ms) || ms < 0) throw new Dota2GCError(`${name} must be a finite number >= 0, got ${ms}`);
  return Math.min(ms, MAX_TIMEOUT_MS);
}
var Dota2GC = (_class2 = class extends _events.EventEmitter {
  static __initStatic() {this.STEAM_APPID = DOTA2_APPID}
  
  
  
  
  
  
  
  
  
  
  __init3() {this.pending = /* @__PURE__ */ new Set()}
  __init4() {this.hooks = []}
  __init5() {this.waiters = /* @__PURE__ */ new Set()}
  __init6() {this.destroyed = false}
  __init7() {this._inApp = false}
  __init8() {this._haveGCSession = false}
  
  
  
  constructor(steam, options = {}) {
    super();_class2.prototype.__init3.call(this);_class2.prototype.__init4.call(this);_class2.prototype.__init5.call(this);_class2.prototype.__init6.call(this);_class2.prototype.__init7.call(this);_class2.prototype.__init8.call(this);;
    this.steam = steam;
    this.appid = _nullishCoalesce(options.appid, () => ( DOTA2_APPID));
    this.logger = options.logger;
    this.timers = _nullishCoalesce(options.timers, () => ( globalThis));
    this.jobTimeoutMs = normalizeTimeout(options.jobTimeoutMs, 1e4, "jobTimeoutMs");
    this.helloInitialMs = _nullishCoalesce(options.helloInitialMs, () => ( 500));
    this.helloBaseMs = _nullishCoalesce(options.helloBaseMs, () => ( 1e3));
    this.helloBackoffMaxMs = _nullishCoalesce(options.helloBackoffMaxMs, () => ( 6e4));
    this.autoGamesPlayed = _nullishCoalesce(options.autoGamesPlayed, () => ( false));
    this.router = new GCRouter(this.logger);
    this.setMaxListeners(0);
    this.hookRouter();
    this.hookTransport();
  }
  /** The Steam client has the app running, so the GC is reachable. */
  get inApp() {
    return this._inApp;
  }
  /** A GC session is established (a welcome arrived and was not invalidated). */
  get haveGCSession() {
    return this._haveGCSession;
  }
  /** The most recent GC welcome, if any. */
  get welcome() {
    return this._welcome;
  }
  // ---------------------------------------------------------------- lifecycle
  /**
   * Resolves with the GC welcome once a session exists. Resolves immediately if one
   * already does. With `autoGamesPlayed` it also asks Steam to launch the app.
   */
  connect(options = {}) {
    if (this.destroyed) return Promise.reject(new NotConnectedError("Dota2GC was destroyed"));
    if (this._haveGCSession && this._welcome) return Promise.resolve(this._welcome);
    let timeoutMs;
    try {
      timeoutMs = normalizeTimeout(options.timeoutMs, 0, "timeoutMs");
    } catch (error) {
      return Promise.reject(error);
    }
    return new Promise((resolve, reject) => {
      let settled = false;
      let timer;
      const finish = () => {
        settled = true;
        this.off("connected", onConnected);
        this.waiters.delete(fail);
        if (timer !== void 0) this.timers.clearTimeout(timer);
      };
      const fail = (error) => {
        if (settled) return;
        finish();
        reject(error);
      };
      const onConnected = (welcome) => {
        if (settled) return;
        finish();
        resolve(welcome);
      };
      this.once("connected", onConnected);
      this.waiters.add(fail);
      if (timeoutMs > 0) {
        timer = this.timers.setTimeout(
          () => fail(new Dota2GCError(`Timed out after ${timeoutMs} ms waiting for a GC session`)),
          timeoutMs
        );
      }
      if (this._inApp && !this._haveGCSession) this.startHelloTimer();
      if (this.autoGamesPlayed) {
        if (!this.steam.gamesPlayed) {
          fail(new Dota2GCError("autoGamesPlayed is on but the transport has no gamesPlayed()"));
          return;
        }
        try {
          this.steam.gamesPlayed([this.appid]);
        } catch (error) {
          fail(error instanceof Error ? error : new Dota2GCError(String(error)));
        }
      }
    });
  }
  /** Stops the handshake and forgets the session. Does not unhook the transport. */
  disconnect() {
    this.clearHelloTimer();
    const hadSession = this._haveGCSession;
    this._haveGCSession = false;
    this._welcome = void 0;
    if (this.autoGamesPlayed && this.steam.gamesPlayed) {
      this._inApp = false;
      this.steam.gamesPlayed([]);
    }
    this.rejectPending(new NotConnectedError("GC session closed"));
    if (hadSession) this.emit("disconnected", 2 /* GCConnectionStatus_NO_SESSION */);
  }
  /** Disconnects, detaches every transport listener and rejects in-flight jobs. */
  destroy() {
    if (this.destroyed) return;
    this.disconnect();
    this.destroyed = true;
    const remove = _nullishCoalesce(this.steam.off, () => ( this.steam.removeListener));
    if (remove) for (const [event, listener] of this.hooks) remove.call(this.steam, event, listener);
    else _optionalChain([this, 'access', _13 => _13.logger, 'optionalAccess', _14 => _14.warn, 'optionalCall', _15 => _15("dotakit: transport has neither off() nor removeListener(); %s hooks stay attached", this.hooks.length)]);
    this.hooks.length = 0;
    const error = new NotConnectedError("Dota2GC was destroyed");
    this.rejectPending(error);
    this.failWaiters(error);
    this.router.removeAllListeners();
    this.removeAllListeners();
  }
  // ----------------------------------------------------------------- sending
  /** Encodes `body` (all fields optional) and sends it to the GC. */
  send(msgId, body) {
    this.sendRaw(msgId, this.encode(msgId, body));
  }
  /**
   * Sends a request and resolves with the decoded reply.
   *
   * Rejects with {@link JobTimeoutError} on the deadline, {@link JobAbortedError} when
   * `signal` fires, and {@link NoDecoderError} — carrying the raw bytes — when the GC
   * answers with a message id this library has no codec for. It never hangs.
   */
  async sendJob(msgId, body, options = {}) {
    const expected = jobResponses[msgId];
    const reply = await this.rawJob(msgId, this.encode(msgId, body), options);
    if (options.responseId === void 0 && expected !== void 0 && reply.msgId !== expected) {
      throw new UnexpectedResponseError(msgId, expected, reply.msgId, reply.payload, messageNames[reply.msgId]);
    }
    const decodeId = _nullishCoalesce(_nullishCoalesce(options.responseId, () => ( expected)), () => ( reply.msgId));
    const codec = allMessages[decodeId];
    if (!codec) throw new NoDecoderError(decodeId, reply.payload, messageNames[decodeId]);
    try {
      return codec.decode(reply.payload);
    } catch (cause) {
      throw new Dota2GCError(`Failed to decode GC reply ${_nullishCoalesce(messageNames[decodeId], () => ( decodeId))}`, { cause });
    }
  }
  /** Sends an already-encoded payload. `callback` receives the GC reply, if any. */
  sendRaw(msgId, payload, callback) {
    if (this.destroyed) throw new NotConnectedError("Dota2GC was destroyed");
    if (!this.steam.steamID) throw new NotConnectedError();
    _optionalChain([this, 'access', _16 => _16.logger, 'optionalAccess', _17 => _17.debug, 'optionalCall', _18 => _18("dotakit: sending %s (%s), %s bytes", _nullishCoalesce(messageNames[msgId], () => ( "unknown")), msgId, payload.length)]);
    this.steam.sendToGC(this.appid, msgId, {}, payload, callback);
  }
  /** Like {@link sendJob} but with raw bytes in and raw bytes out. */
  async sendJobRaw(msgId, payload, options = {}) {
    return (await this.rawJob(msgId, payload, options)).payload;
  }
  on(event, listener) {
    return super.on(event, listener);
  }
  once(event, listener) {
    return super.once(event, listener);
  }
  off(event, listener) {
    return super.off(event, listener);
  }
  // ----------------------------------------------------------------- internals
  encode(msgId, body) {
    const codec = allMessages[msgId];
    if (!codec) throw new NoEncoderError(msgId, messageNames[msgId]);
    return Buffer.from(codec.encode(codec.fromPartial(body)).finish());
  }
  rawJob(msgId, payload, options) {
    const timeoutMs = normalizeTimeout(options.timeoutMs, this.jobTimeoutMs, "timeoutMs");
    const signal = options.signal;
    return new Promise((resolve, reject) => {
      if (_optionalChain([signal, 'optionalAccess', _19 => _19.aborted])) {
        reject(new JobAbortedError(msgId, signal.reason));
        return;
      }
      let settled = false;
      let timer;
      const onAbort = () => settle(new JobAbortedError(msgId, signal.reason));
      const job = { settle: (error) => settle(error) };
      const cleanup = () => {
        settled = true;
        this.pending.delete(job);
        if (timer !== void 0) this.timers.clearTimeout(timer);
        _optionalChain([signal, 'optionalAccess', _20 => _20.removeEventListener, 'call', _21 => _21("abort", onAbort)]);
      };
      function settle(error) {
        if (settled) return;
        cleanup();
        reject(error);
      }
      this.pending.add(job);
      _optionalChain([signal, 'optionalAccess', _22 => _22.addEventListener, 'call', _23 => _23("abort", onAbort, { once: true })]);
      if (timeoutMs > 0) {
        timer = this.timers.setTimeout(() => settle(new JobTimeoutError(msgId, timeoutMs)), timeoutMs);
      }
      try {
        this.sendRaw(msgId, payload, (_appid, replyId, replyPayload) => {
          if (settled) return;
          cleanup();
          resolve({ msgId: replyId, payload: replyPayload });
        });
      } catch (error) {
        settle(error instanceof Error ? error : new Dota2GCError(String(error)));
      }
    });
  }
  rejectPending(error) {
    for (const job of [...this.pending]) job.settle(error);
    this.pending.clear();
  }
  failWaiters(error) {
    for (const fail of [...this.waiters]) fail(error);
    this.waiters.clear();
  }
  hookRouter() {
    this.router.on(4004 /* k_EMsgGCClientWelcome */, (welcome) => {
      _optionalChain([this, 'access', _24 => _24.logger, 'optionalAccess', _25 => _25.debug, 'optionalCall', _26 => _26("dotakit: GC session established")]);
      this._haveGCSession = true;
      this._welcome = welcome;
      this.clearHelloTimer();
      this.emit("connected", this._welcome);
    });
    this.router.on(4009 /* k_EMsgGCClientConnectionStatus */, (message) => {
      const { status } = message;
      if (status === 0 /* GCConnectionStatus_HAVE_SESSION */) return;
      if (!this._haveGCSession) return;
      _optionalChain([this, 'access', _27 => _27.logger, 'optionalAccess', _28 => _28.debug, 'optionalCall', _29 => _29("dotakit: GC session lost, status %s", status)]);
      this._haveGCSession = false;
      this._welcome = void 0;
      this.rejectPending(new NotConnectedError("GC session lost"));
      this.emit("disconnected", status);
      this.startHelloTimer();
    });
  }
  hookTransport() {
    this.hook("receivedFromGC", (appid, msgId, payload) => {
      if (appid !== this.appid) return;
      this.router.route(msgId, payload);
    });
    this.hook("appLaunched", (appid) => {
      if (appid !== this.appid || this._inApp) return;
      this._inApp = true;
      if (!this._haveGCSession) this.startHelloTimer();
    });
    this.hook("appQuit", (appid) => {
      if (appid !== this.appid || !this._inApp) return;
      this.handleAppGone();
    });
    this.hook("disconnected", () => this.handleAppGone());
    this.hook("error", () => this.handleAppGone());
  }
  hook(event, listener) {
    this.hooks.push([event, listener]);
    this.steam.on(event, listener);
  }
  /** The app or Steam went away: the session is gone, tell anyone who had one. */
  handleAppGone() {
    this.clearHelloTimer();
    const hadSession = this._haveGCSession;
    this._inApp = false;
    this._haveGCSession = false;
    this._welcome = void 0;
    this.rejectPending(new NotConnectedError("GC session lost"));
    if (hadSession) this.emit("disconnected", 2 /* GCConnectionStatus_NO_SESSION */);
  }
  startHelloTimer() {
    if (!this._inApp || this.helloTimer !== void 0) return;
    this.helloTimer = this.timers.setTimeout(() => this.sendHello(), this.helloInitialMs);
  }
  sendHello() {
    this.helloTimer = void 0;
    if (!this._inApp || this._haveGCSession) {
      this.clearHelloTimer();
      return;
    }
    try {
      this.send(4006 /* k_EMsgGCClientHello */, {});
    } catch (error) {
      _optionalChain([this, 'access', _30 => _30.logger, 'optionalAccess', _31 => _31.warn, 'optionalCall', _32 => _32("dotakit: hello could not be sent", error)]);
    }
    if (this.helloTimer !== void 0 || !this._inApp || this._haveGCSession) return;
    this.helloDelayMs = Math.min(this.helloBackoffMaxMs, this.helloDelayMs ? this.helloDelayMs * 2 : this.helloBaseMs);
    _optionalChain([this, 'access', _33 => _33.logger, 'optionalAccess', _34 => _34.debug, 'optionalCall', _35 => _35("dotakit: hello sent, next attempt in %s ms", this.helloDelayMs)]);
    this.helloTimer = this.timers.setTimeout(() => this.sendHello(), this.helloDelayMs);
  }
  clearHelloTimer() {
    if (this.helloTimer !== void 0) this.timers.clearTimeout(this.helloTimer);
    this.helloTimer = void 0;
    this.helloDelayMs = void 0;
  }
}, _class2.__initStatic(), _class2);

















exports.Dota2GCError = Dota2GCError; exports.NoEncoderError = NoEncoderError; exports.NoDecoderError = NoDecoderError; exports.UnexpectedResponseError = UnexpectedResponseError; exports.JobTimeoutError = JobTimeoutError; exports.JobAbortedError = JobAbortedError; exports.NotConnectedError = NotConnectedError; exports.clientMessages = clientMessages; exports.gcMessages = gcMessages; exports.allMessages = allMessages; exports.jobResponses = jobResponses; exports.messageNames = messageNames; exports.GCRouter = GCRouter; exports.DOTA2_APPID = DOTA2_APPID; exports.Dota2GC = Dota2GC;
//# sourceMappingURL=chunk-CEY2YADC.cjs.map