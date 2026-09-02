import {
  CMsgBalancedShuffleLobby,
  CMsgCancelWatchGame,
  CMsgClientHello,
  CMsgClientSuspended,
  CMsgClientToGCAcceptInviteToGuild,
  CMsgClientToGCAcceptInviteToGuildResponse,
  CMsgClientToGCAcknowledgeReporterUpdates,
  CMsgClientToGCAddGuildRole,
  CMsgClientToGCAddGuildRoleResponse,
  CMsgClientToGCAddPlayerToGuildChat,
  CMsgClientToGCAddPlayerToGuildChatResponse,
  CMsgClientToGCAggregateMetrics,
  CMsgClientToGCApplyGemCombiner,
  CMsgClientToGCCancelInviteToGuild,
  CMsgClientToGCCancelInviteToGuildResponse,
  CMsgClientToGCCavernCrawlClaimRoom,
  CMsgClientToGCCavernCrawlClaimRoomResponse,
  CMsgClientToGCCavernCrawlGetClaimedRoomCount,
  CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse,
  CMsgClientToGCCavernCrawlRequestMapState,
  CMsgClientToGCCavernCrawlRequestMapStateResponse,
  CMsgClientToGCCavernCrawlUseItemOnPath,
  CMsgClientToGCCavernCrawlUseItemOnPathResponse,
  CMsgClientToGCCavernCrawlUseItemOnRoom,
  CMsgClientToGCCavernCrawlUseItemOnRoomResponse,
  CMsgClientToGCChinaSSAAcceptedRequest,
  CMsgClientToGCChinaSSAAcceptedResponse,
  CMsgClientToGCChinaSSAURLRequest,
  CMsgClientToGCChinaSSAURLResponse,
  CMsgClientToGCClaimEventActionUsingItem,
  CMsgClientToGCClaimEventActionUsingItemResponse,
  CMsgClientToGCClaimLeaderboardRewards,
  CMsgClientToGCClaimLeaderboardRewardsResponse,
  CMsgClientToGCClaimSwag,
  CMsgClientToGCCollectorsCacheAvailableDataRequest,
  CMsgClientToGCCreateGuild,
  CMsgClientToGCCreateGuildResponse,
  CMsgClientToGCCreateHeroStatue,
  CMsgClientToGCCreatePlayerCardPack,
  CMsgClientToGCCreatePlayerCardPackResponse,
  CMsgClientToGCCreateStickerbookPageRequest,
  CMsgClientToGCCreateStickerbookPageResponse,
  CMsgClientToGCCreateTeamPlayerCardPack,
  CMsgClientToGCCreateTeamPlayerCardPackResponse,
  CMsgClientToGCCustomGamesFriendsPlayedRequest,
  CMsgClientToGCDeclineInviteToGuild,
  CMsgClientToGCDeclineInviteToGuildResponse,
  CMsgClientToGCDeleteStickerbookPageRequest,
  CMsgClientToGCDeleteStickerbookPageResponse,
  CMsgClientToGCDotaLabsFeedback,
  CMsgClientToGCDotaLabsFeedbackResponse,
  CMsgClientToGCEmoticonDataRequest,
  CMsgClientToGCFindTopSourceTVGames,
  CMsgClientToGCFriendsPlayedCustomGameRequest,
  CMsgClientToGCGetAllHeroOrder,
  CMsgClientToGCGetAllHeroOrderResponse,
  CMsgClientToGCGetAllHeroProgress,
  CMsgClientToGCGetAllHeroProgressResponse,
  CMsgClientToGCGetDPCFavorites,
  CMsgClientToGCGetDPCFavoritesResponse,
  CMsgClientToGCGetFavoritePlayers,
  CMsgClientToGCGetFilteredPlayers,
  CMsgClientToGCGetGiftPermissions,
  CMsgClientToGCGetGiftPermissionsResponse,
  CMsgClientToGCGetHeroStickers,
  CMsgClientToGCGetHeroStickersResponse,
  CMsgClientToGCGetOWMatchDetails,
  CMsgClientToGCGetOWMatchDetailsResponse,
  CMsgClientToGCGetProfileCard,
  CMsgClientToGCGetProfileCardStats,
  CMsgClientToGCGetProfileTickets,
  CMsgClientToGCGetQuestProgress,
  CMsgClientToGCGetQuestProgressResponse,
  CMsgClientToGCGetStickerbookRequest,
  CMsgClientToGCGetStickerbookResponse,
  CMsgClientToGCGetTrophyList,
  CMsgClientToGCGetTrophyListResponse,
  CMsgClientToGCH264Unsupported,
  CMsgClientToGCHasPlayerVotedForMVP,
  CMsgClientToGCHasPlayerVotedForMVPResponse,
  CMsgClientToGCIntegrityStatus,
  CMsgClientToGCInviteToGuild,
  CMsgClientToGCInviteToGuildResponse,
  CMsgClientToGCJoinGuild,
  CMsgClientToGCJoinGuildResponse,
  CMsgClientToGCJoinPartyFromBeacon,
  CMsgClientToGCJoinPlaytest,
  CMsgClientToGCJoinPlaytestResponse,
  CMsgClientToGCKickGuildMember,
  CMsgClientToGCKickGuildMemberResponse,
  CMsgClientToGCLeaveGuild,
  CMsgClientToGCLeaveGuildResponse,
  CMsgClientToGCMVPVoteTimeout,
  CMsgClientToGCMVPVoteTimeoutResponse,
  CMsgClientToGCManageFavorites,
  CMsgClientToGCMapStatsRequest,
  CMsgClientToGCMatchesMinimalRequest,
  CMsgClientToGCMatchesMinimalResponse,
  CMsgClientToGCModifyGuildRole,
  CMsgClientToGCModifyGuildRoleResponse,
  CMsgClientToGCNewBloomGift,
  CMsgClientToGCNewBloomGiftResponse,
  CMsgClientToGCOpenPlayerCardPack,
  CMsgClientToGCOpenPlayerCardPackResponse,
  CMsgClientToGCOrderStickerbookTeamPageRequest,
  CMsgClientToGCOrderStickerbookTeamPageResponse,
  CMsgClientToGCOverwatchReplayError,
  CMsgClientToGCOverworldClaimEncounterReward,
  CMsgClientToGCOverworldClaimEncounterRewardResponse,
  CMsgClientToGCOverworldCompletePath,
  CMsgClientToGCOverworldCompletePathResponse,
  CMsgClientToGCOverworldDevClearInventory,
  CMsgClientToGCOverworldDevClearInventoryResponse,
  CMsgClientToGCOverworldDevGrantTokens,
  CMsgClientToGCOverworldDevGrantTokensResponse,
  CMsgClientToGCOverworldDevResetAll,
  CMsgClientToGCOverworldDevResetAllResponse,
  CMsgClientToGCOverworldDevResetNode,
  CMsgClientToGCOverworldDevResetNodeResponse,
  CMsgClientToGCOverworldFeedback,
  CMsgClientToGCOverworldFeedbackResponse,
  CMsgClientToGCOverworldGetDynamicImage,
  CMsgClientToGCOverworldGetDynamicImageResponse,
  CMsgClientToGCOverworldGetUserData,
  CMsgClientToGCOverworldGetUserDataResponse,
  CMsgClientToGCOverworldGiftTokens,
  CMsgClientToGCOverworldGiftTokensResponse,
  CMsgClientToGCOverworldMinigameAction,
  CMsgClientToGCOverworldMinigameActionResponse,
  CMsgClientToGCOverworldMoveToNode,
  CMsgClientToGCOverworldMoveToNodeResponse,
  CMsgClientToGCOverworldRequestTokensNeededByFriend,
  CMsgClientToGCOverworldRequestTokensNeededByFriendResponse,
  CMsgClientToGCOverworldTradeTokens,
  CMsgClientToGCOverworldTradeTokensResponse,
  CMsgClientToGCOverworldVisitEncounter,
  CMsgClientToGCOverworldVisitEncounterResponse,
  CMsgClientToGCPlaceCollectionStickersRequest,
  CMsgClientToGCPlaceCollectionStickersResponse,
  CMsgClientToGCPlaceStickersRequest,
  CMsgClientToGCPlaceStickersResponse,
  CMsgClientToGCPlayerCardSpecificPurchaseRequest,
  CMsgClientToGCPlayerCardSpecificPurchaseResponse,
  CMsgClientToGCPlayerStatsRequest,
  CMsgClientToGCPublishUserStat,
  CMsgClientToGCPurchaseFilteredPlayerSlot,
  CMsgClientToGCPurchaseLabyrinthBlessings,
  CMsgClientToGCPurchaseLabyrinthBlessingsResponse,
  CMsgClientToGCRankRequest,
  CMsgClientToGCRecalibrateMMR,
  CMsgClientToGCRecalibrateMMRResponse,
  CMsgClientToGCRecordContestVote,
  CMsgClientToGCRecyclePlayerCard,
  CMsgClientToGCRecyclePlayerCardResponse,
  CMsgClientToGCRemoveFilteredPlayer,
  CMsgClientToGCRemoveGuildRole,
  CMsgClientToGCRemoveGuildRoleResponse,
  CMsgClientToGCReportGuildContent,
  CMsgClientToGCReportGuildContentResponse,
  CMsgClientToGCRequestAccountGuildEventData,
  CMsgClientToGCRequestAccountGuildEventDataResponse,
  CMsgClientToGCRequestAccountGuildPersonaInfo,
  CMsgClientToGCRequestAccountGuildPersonaInfoBatch,
  CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse,
  CMsgClientToGCRequestAccountGuildPersonaInfoResponse,
  CMsgClientToGCRequestActiveBeaconParties,
  CMsgClientToGCRequestActiveGuildChallenge,
  CMsgClientToGCRequestActiveGuildChallengeResponse,
  CMsgClientToGCRequestActiveGuildContracts,
  CMsgClientToGCRequestActiveGuildContractsResponse,
  CMsgClientToGCRequestArcanaVotesRemaining,
  CMsgClientToGCRequestArcanaVotesRemainingResponse,
  CMsgClientToGCRequestContestVotes,
  CMsgClientToGCRequestContestVotesResponse,
  CMsgClientToGCRequestEventPointLogResponseV2,
  CMsgClientToGCRequestEventPointLogV2,
  CMsgClientToGCRequestGuildData,
  CMsgClientToGCRequestGuildDataResponse,
  CMsgClientToGCRequestGuildEventMembers,
  CMsgClientToGCRequestGuildEventMembersResponse,
  CMsgClientToGCRequestGuildFeedResponse,
  CMsgClientToGCRequestGuildMembership,
  CMsgClientToGCRequestGuildMembershipResponse,
  CMsgClientToGCRequestPlayerHeroRecentAccomplishments,
  CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse,
  CMsgClientToGCRequestPlayerRecentAccomplishments,
  CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse,
  CMsgClientToGCRequestPlusWeeklyChallengeResult,
  CMsgClientToGCRequestPlusWeeklyChallengeResultResponse,
  CMsgClientToGCRequestReporterUpdates,
  CMsgClientToGCRequestReporterUpdatesResponse,
  CMsgClientToGCRerollPlayerChallenge,
  CMsgClientToGCRoadToTIDevForceQuest,
  CMsgClientToGCRoadToTIGetActiveQuest,
  CMsgClientToGCRoadToTIGetActiveQuestResponse,
  CMsgClientToGCRoadToTIGetQuests,
  CMsgClientToGCRoadToTIGetQuestsResponse,
  CMsgClientToGCRoadToTIUseItem,
  CMsgClientToGCRoadToTIUseItemResponse,
  CMsgClientToGCSelectCompendiumInGamePrediction,
  CMsgClientToGCSelectCompendiumInGamePredictionResponse,
  CMsgClientToGCSelectGuildContract,
  CMsgClientToGCSelectGuildContractResponse,
  CMsgClientToGCSetBannedHeroes,
  CMsgClientToGCSetDPCFavoriteState,
  CMsgClientToGCSetDPCFavoriteStateResponse,
  CMsgClientToGCSetEventActiveSeasonID,
  CMsgClientToGCSetEventActiveSeasonIDResponse,
  CMsgClientToGCSetFavoritePage,
  CMsgClientToGCSetFavoritePageResponse,
  CMsgClientToGCSetGuildInfo,
  CMsgClientToGCSetGuildInfoResponse,
  CMsgClientToGCSetGuildMemberRole,
  CMsgClientToGCSetGuildMemberRoleResponse,
  CMsgClientToGCSetGuildRoleOrder,
  CMsgClientToGCSetGuildRoleOrderResponse,
  CMsgClientToGCSetHeroSticker,
  CMsgClientToGCSetHeroStickerResponse,
  CMsgClientToGCSetProfileCardSlots,
  CMsgClientToGCSocialFeedPostCommentRequest,
  CMsgClientToGCSocialFeedPostMessageRequest,
  CMsgClientToGCStartWatchingOverwatch,
  CMsgClientToGCStopWatchingOverwatch,
  CMsgClientToGCSubmitDraftTriviaMatchAnswer,
  CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse,
  CMsgClientToGCSubmitOWConviction,
  CMsgClientToGCSubmitOWConvictionResponse,
  CMsgClientToGCSubmitPlayerMatchSurvey,
  CMsgClientToGCSubmitPlayerMatchSurveyResponse,
  CMsgClientToGCTeammateStatsRequest,
  CMsgClientToGCTeammateStatsResponse,
  CMsgClientToGCTopFriendMatchesRequest,
  CMsgClientToGCTopLeagueMatchesRequest,
  CMsgClientToGCTransferSeasonalMMRRequest,
  CMsgClientToGCTransferSeasonalMMRResponse,
  CMsgClientToGCUnderDraftBuy,
  CMsgClientToGCUnderDraftBuyResponse,
  CMsgClientToGCUnderDraftRedeemReward,
  CMsgClientToGCUnderDraftRedeemRewardResponse,
  CMsgClientToGCUnderDraftRequest,
  CMsgClientToGCUnderDraftReroll,
  CMsgClientToGCUnderDraftRerollResponse,
  CMsgClientToGCUnderDraftResponse,
  CMsgClientToGCUnderDraftRollBackBench,
  CMsgClientToGCUnderDraftRollBackBenchResponse,
  CMsgClientToGCUnderDraftSell,
  CMsgClientToGCUnderDraftSellResponse,
  CMsgClientToGCUpdateComicBookStats,
  CMsgClientToGCUpdateFilteredPlayerNote,
  CMsgClientToGCUpdatePartyBeacon,
  CMsgClientToGCUploadMatchClip,
  CMsgClientToGCVerifyFavoritePlayers,
  CMsgClientToGCVoteForArcana,
  CMsgClientToGCVoteForArcanaResponse,
  CMsgClientToGCVoteForMVP,
  CMsgClientToGCVoteForMVPResponse,
  CMsgClientToGCWageringRequest,
  CMsgClientWelcome,
  CMsgClientsRejoinChatChannels,
  CMsgConnectionStatus,
  CMsgConsumeEventSupportGrantItem,
  CMsgConsumeEventSupportGrantItemResponse,
  CMsgDOTAAnchorPhoneNumberRequest,
  CMsgDOTAAnchorPhoneNumberResponse,
  CMsgDOTABroadcastNotification,
  CMsgDOTAClaimEventAction,
  CMsgDOTAClaimEventActionResponse,
  CMsgDOTAClientToGCQuickStatsRequest,
  CMsgDOTAClientToGCQuickStatsResponse,
  CMsgDOTACompendiumDataRequest,
  CMsgDOTACompendiumDataResponse,
  CMsgDOTACompendiumRemoveAllSelections,
  CMsgDOTACompendiumRemoveAllSelectionsResponse,
  CMsgDOTACustomGameClientFinishedLoading,
  CMsgDOTACustomGameListenServerStartedLoading,
  CMsgDOTADestroyLobbyRequest,
  CMsgDOTADestroyLobbyResponse,
  CMsgDOTAGameAutographReward,
  CMsgDOTAGameAutographRewardResponse,
  CMsgDOTAGetEventPoints,
  CMsgDOTAGetEventPointsResponse,
  CMsgDOTAGetPeriodicResource,
  CMsgDOTAGetPeriodicResourceResponse,
  CMsgDOTAGetPlayerMatchHistory,
  CMsgDOTAGetPlayerMatchHistoryResponse,
  CMsgDOTAGetRecentPlayTimeFriendsRequest,
  CMsgDOTAGetRecentPlayTimeFriendsResponse,
  CMsgDOTAHasItemQuery,
  CMsgDOTAHasItemResponse,
  CMsgDOTAKickedFromMatchmakingQueue,
  CMsgDOTAMatchmakingStatsRequest,
  CMsgDOTAMatchmakingStatsResponse,
  CMsgDOTANotifyAccountFlagsChange,
  CMsgDOTAPeriodicResourceUpdated,
  CMsgDOTAPopup,
  CMsgDOTAProfileCard,
  CMsgDOTARedeemItem,
  CMsgDOTARedeemItemResponse,
  CMsgDOTAReportsRemainingRequest,
  CMsgDOTAReportsRemainingResponse,
  CMsgDOTASelectionPriorityChoiceRequest,
  CMsgDOTASelectionPriorityChoiceResponse,
  CMsgDOTASetFavoriteTeam,
  CMsgDOTASetMatchHistoryAccess,
  CMsgDOTASetMatchHistoryAccessResponse,
  CMsgDOTASetProfilePrivacy,
  CMsgDOTASetProfilePrivacyResponse,
  CMsgDOTAStartTriviaSession,
  CMsgDOTAStartTriviaSessionResponse,
  CMsgDOTASubmitLobbyMVPVote,
  CMsgDOTASubmitLobbyMVPVoteResponse,
  CMsgDOTASubmitPlayerAvoidRequest,
  CMsgDOTASubmitPlayerAvoidRequestResponse,
  CMsgDOTASubmitPlayerReport,
  CMsgDOTASubmitPlayerReportResponse,
  CMsgDOTASubmitPlayerReportResponseV2,
  CMsgDOTASubmitPlayerReportV2,
  CMsgDOTASubmitTriviaQuestionAnswer,
  CMsgDOTASubmitTriviaQuestionAnswerResponse,
  CMsgDOTAUnanchorPhoneNumberRequest,
  CMsgDOTAUnanchorPhoneNumberResponse,
  CMsgDevDeleteEventActions,
  CMsgDevDeleteEventActionsResponse,
  CMsgDevGrantEventAction,
  CMsgDevGrantEventActionResponse,
  CMsgDevGrantEventPoints,
  CMsgDevGrantEventPointsResponse,
  CMsgDevResetEventState,
  CMsgDevResetEventStateResponse,
  CMsgFlipLobbyTeams,
  CMsgGCAdditionalWelcomeMsgList,
  CMsgGCGetHeroStandings,
  CMsgGCGetHeroStandingsResponse,
  CMsgGCGetHeroStatsHistory,
  CMsgGCGetHeroStatsHistoryResponse,
  CMsgGCGetPlayerCardItemInfo,
  CMsgGCGetPlayerCardItemInfoResponse,
  CMsgGCItemEditorReleaseReservation,
  CMsgGCItemEditorReleaseReservationResponse,
  CMsgGCItemEditorReservationsRequest,
  CMsgGCItemEditorReservationsResponse,
  CMsgGCItemEditorReserveItemDef,
  CMsgGCItemEditorReserveItemDefResponse,
  CMsgGCLobbyUpdateBroadcastChannelInfo,
  CMsgGCMatchDetailsRequest,
  CMsgGCMatchDetailsResponse,
  CMsgGCNotificationsMarkReadRequest,
  CMsgGCNotificationsRequest,
  CMsgGCNotificationsResponse,
  CMsgGCPlayerInfoSubmit,
  CMsgGCPlayerInfoSubmitResponse,
  CMsgGCRankedPlayerInfoSubmit,
  CMsgGCRankedPlayerInfoSubmitResponse,
  CMsgGCRerollPlayerChallengeResponse,
  CMsgGCToClientAccountGuildEventDataUpdated,
  CMsgGCToClientActiveGuildChallengeUpdated,
  CMsgGCToClientActiveGuildContractsUpdated,
  CMsgGCToClientAggregateMetricsBackoff,
  CMsgGCToClientApplyRemoteConVars,
  CMsgGCToClientArcanaVotesUpdate,
  CMsgGCToClientBattlePassRollupListRequest,
  CMsgGCToClientBattlePassRollupListResponse,
  CMsgGCToClientBattlePassRollupRequest,
  CMsgGCToClientBattlePassRollupResponse,
  CMsgGCToClientCavernCrawlMapPathCompleted,
  CMsgGCToClientCavernCrawlMapUpdated,
  CMsgGCToClientClaimEventActionUsingItemCompleted,
  CMsgGCToClientCollectorsCacheAvailableDataResponse,
  CMsgGCToClientCommendNotification,
  CMsgGCToClientCustomGamesFriendsPlayedResponse,
  CMsgGCToClientEmoticonData,
  CMsgGCToClientFindTopSourceTVGamesResponse,
  CMsgGCToClientFriendsPlayedCustomGameResponse,
  CMsgGCToClientGetFavoritePlayersResponse,
  CMsgGCToClientGetFilteredPlayersResponse,
  CMsgGCToClientGuildDataUpdated,
  CMsgGCToClientGuildFeedUpdated,
  CMsgGCToClientGuildMembersDataUpdated,
  CMsgGCToClientGuildMembershipUpdated,
  CMsgGCToClientHeroStatueCreateResult,
  CMsgGCToClientJoinPartyFromBeaconResponse,
  CMsgGCToClientManageFavoritesResponse,
  CMsgGCToClientMapStatsResponse,
  CMsgGCToClientMatchGroupsVersion,
  CMsgGCToClientMatchSignedOut,
  CMsgGCToClientOverwatchCasesAvailable,
  CMsgGCToClientOverworldUserDataUpdated,
  CMsgGCToClientPartyBeaconUpdate,
  CMsgGCToClientPartySearchInvite,
  CMsgGCToClientPartySearchInvites,
  CMsgGCToClientPlayerBeaconState,
  CMsgGCToClientPlayerStatsResponse,
  CMsgGCToClientPlaytestStatus,
  CMsgGCToClientPollConvarRequest,
  CMsgGCToClientPollConvarResponse,
  CMsgGCToClientPollFileRequest,
  CMsgGCToClientPollFileResponse,
  CMsgGCToClientPurchaseFilteredPlayerSlotResponse,
  CMsgGCToClientQuestProgressUpdated,
  CMsgGCToClientRankResponse,
  CMsgGCToClientRankUpdate,
  CMsgGCToClientRecordContestVoteResponse,
  CMsgGCToClientRemoveFilteredPlayerResponse,
  CMsgGCToClientRequestActiveBeaconPartiesResponse,
  CMsgGCToClientRequestDropped,
  CMsgGCToClientRoadToTIQuestDataUpdated,
  CMsgGCToClientSocialFeedPostCommentResponse,
  CMsgGCToClientSocialFeedPostMessageResponse,
  CMsgGCToClientTopFriendMatchesResponse,
  CMsgGCToClientTopLeagueMatchesResponse,
  CMsgGCToClientTournamentItemDrop,
  CMsgGCToClientTrophyAwarded,
  CMsgGCToClientUpdateFilteredPlayerNoteResponse,
  CMsgGCToClientUploadMatchClipResponse,
  CMsgGCToClientVACReminder,
  CMsgGCToClientVerifyFavoritePlayersResponse,
  CMsgGCToClientWageringResponse,
  CMsgGCToClientWageringUpdate,
  CMsgGCToGCPerformManualOp,
  CMsgGCToGCPerformManualOpCompleted,
  CMsgGCToGCReloadServerRegionSettings,
  CMsgGCToServerApplyRemoteConVars,
  CMsgGCToServerSteamLearnAccessTokensChanged,
  CMsgGCToServerSteamLearnUseHTTP,
  CMsgGCTopCustomGamesList,
  CMsgGCWatchDownloadedReplay,
  CMsgGCtoGCAssociatedExploiterAccountInfo,
  CMsgGCtoGCAssociatedExploiterAccountInfoResponse,
  CMsgHeroGlobalDataRequest,
  CMsgHeroGlobalDataResponse,
  CMsgInitialQuestionnaireResponse,
  CMsgInvitationCreated,
  CMsgInviteToLobby,
  CMsgInviteToParty,
  CMsgKickFromParty,
  CMsgLANServerAvailable,
  CMsgLeagueAdminList,
  CMsgLeaveParty,
  CMsgLobbyEventGameData,
  CMsgLobbyEventGameDetails,
  CMsgLobbyEventPoints,
  CMsgLobbyFeaturedGamemodeProgress,
  CMsgLobbyInviteResponse,
  CMsgLobbyPlaytestDetails,
  CMsgLobbyRoadToTIMatchQuestData,
  CMsgMatchMatchmakingStats,
  CMsgOverworldEncounterChooseHeroData,
  CMsgOverworldEncounterPitFighterRewardData,
  CMsgOverworldEncounterProgressData,
  CMsgOverworldEncounterTokenQuestData,
  CMsgOverworldEncounterTokenTreasureData,
  CMsgPartyInviteResponse,
  CMsgPartyLeaderWatchGamePrompt,
  CMsgPartyReadyCheckAcknowledge,
  CMsgPartyReadyCheckRequest,
  CMsgPartyReadyCheckResponse,
  CMsgPrivateMetadataKeyRequest,
  CMsgPrivateMetadataKeyResponse,
  CMsgProfileRequest,
  CMsgProfileResponse,
  CMsgProfileUpdate,
  CMsgProfileUpdateResponse,
  CMsgPurchaseHeroRandomRelic,
  CMsgPurchaseHeroRandomRelicResponse,
  CMsgPurchaseItemWithEventPoints,
  CMsgPurchaseItemWithEventPointsResponse,
  CMsgSOCacheSubscribed,
  CMsgSOCacheSubscribedUpToDate,
  CMsgSOCacheSubscriptionRefresh,
  CMsgSOCacheUnsubscribed,
  CMsgSOMultipleObjects,
  CMsgSOSingleObject,
  CMsgServerAvailable,
  CMsgServerToGCRequestPlayerRecentAccomplishments,
  CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse,
  CMsgSpectateFriendGame,
  CMsgSpectateFriendGameResponse,
  CMsgUpgradeLeagueItem,
  CMsgUpgradeLeagueItemResponse,
  CMsgWatchGame,
  CMsgWatchGameResponse,
  EDOTAGCMsg,
  EGCBaseClientMsg,
  EGCBaseMsg,
  ESOMsg,
  GCConnectionStatus
} from "./chunk-HJGW3TNP.js";

// src/client.ts
import { EventEmitter as EventEmitter2 } from "events";

// src/errors.ts
var Dota2GCError = class extends Error {
  constructor(message, options) {
    super(message, options);
    this.name = new.target.name;
  }
};
var NoEncoderError = class extends Dota2GCError {
  constructor(msgId, messageName) {
    super(`No protobuf encoder for GC message ${messageName ?? msgId} (${msgId})`);
    this.msgId = msgId;
    this.messageName = messageName;
  }
  msgId;
  messageName;
};
var NoDecoderError = class extends Dota2GCError {
  constructor(msgId, payload, messageName) {
    super(`No protobuf decoder for GC message ${messageName ?? msgId} (${msgId}), ${payload.length} raw bytes attached`);
    this.msgId = msgId;
    this.payload = payload;
    this.messageName = messageName;
  }
  msgId;
  payload;
  messageName;
};
var UnexpectedResponseError = class extends Dota2GCError {
  constructor(requestId, expectedId, msgId, payload, messageName) {
    super(
      `GC answered request ${requestId} with ${messageName ?? msgId} (${msgId}), expected ${expectedId}; ${payload.length} raw bytes attached`
    );
    this.requestId = requestId;
    this.expectedId = expectedId;
    this.msgId = msgId;
    this.payload = payload;
    this.messageName = messageName;
  }
  requestId;
  expectedId;
  msgId;
  payload;
  messageName;
};
var JobTimeoutError = class extends Dota2GCError {
  constructor(msgId, timeoutMs) {
    super(`GC job ${msgId} timed out after ${timeoutMs} ms`);
    this.msgId = msgId;
    this.timeoutMs = timeoutMs;
  }
  msgId;
  timeoutMs;
};
var JobAbortedError = class extends Dota2GCError {
  constructor(msgId, cause) {
    super(`GC job ${msgId} aborted`, { cause });
    this.msgId = msgId;
  }
  msgId;
};
var NotConnectedError = class extends Dota2GCError {
  constructor(message = "Cannot send GC message: not logged into Steam") {
    super(message);
  }
};

// src/messages.ts
var clientMessages = {
  /** k_EMsgGCClientHello */
  4006: CMsgClientHello,
  /** k_EMsgGCServerHello */
  4007: CMsgClientHello,
  /** k_EMsgGCInviteToParty */
  4501: CMsgInviteToParty,
  /** k_EMsgGCInvitationCreated */
  4502: CMsgInvitationCreated,
  /** k_EMsgGCKickFromParty */
  4504: CMsgKickFromParty,
  /** k_EMsgGCLeaveParty */
  4505: CMsgLeaveParty,
  /** k_EMsgGCServerAvailable */
  4506: CMsgServerAvailable,
  /** k_EMsgGCLANServerAvailable */
  4511: CMsgLANServerAvailable,
  /** k_EMsgGCInviteToLobby */
  4512: CMsgInviteToLobby,
  /** k_EMsgGCToGCPerformManualOp */
  4516: CMsgGCToGCPerformManualOp,
  /** k_EMsgGCToGCPerformManualOpCompleted */
  4517: CMsgGCToGCPerformManualOpCompleted,
  /** k_EMsgGCToGCReloadServerRegionSettings */
  4518: CMsgGCToGCReloadServerRegionSettings,
  /** k_EMsgGCAdditionalWelcomeMsgList */
  4519: CMsgGCAdditionalWelcomeMsgList,
  /** k_EMsgGCToServerApplyRemoteConVars */
  4521: CMsgGCToServerApplyRemoteConVars,
  /** k_EMsgClientToGCIntegrityStatus */
  4522: CMsgClientToGCIntegrityStatus,
  /** k_EMsgClientToGCAggregateMetrics */
  4523: CMsgClientToGCAggregateMetrics,
  /** k_EMsgGCToServerSteamLearnAccessTokensChanged */
  4525: CMsgGCToServerSteamLearnAccessTokensChanged,
  /** k_EMsgGCToServerSteamLearnUseHTTP */
  4526: CMsgGCToServerSteamLearnUseHTTP,
  /** k_EMsgGCBroadcastNotification */
  7056: CMsgDOTABroadcastNotification,
  /** k_EMsgGCKickedFromMatchmakingQueue */
  7071: CMsgDOTAKickedFromMatchmakingQueue,
  /** k_EMsgGCSpectateFriendGame */
  7073: CMsgSpectateFriendGame,
  /** k_EMsgGCReportsRemainingRequest */
  7076: CMsgDOTAReportsRemainingRequest,
  /** k_EMsgGCSubmitPlayerReport */
  7078: CMsgDOTASubmitPlayerReport,
  /** k_EMsgGCSubmitPlayerReportV2 */
  7082: CMsgDOTASubmitPlayerReportV2,
  /** k_EMsgGCSubmitPlayerReportResponseV2 */
  7083: CMsgDOTASubmitPlayerReportResponseV2,
  /** k_EMsgGCWatchGame */
  7091: CMsgWatchGame,
  /** k_EMsgGCMatchDetailsRequest */
  7095: CMsgGCMatchDetailsRequest,
  /** k_EMsgGCCancelWatchGame */
  7097: CMsgCancelWatchGame,
  /** k_EMsgGCPopup */
  7102: CMsgDOTAPopup,
  /** k_EMsgGCBalancedShuffleLobby */
  7188: CMsgBalancedShuffleLobby,
  /** k_EMsgGCMatchmakingStatsRequest */
  7197: CMsgDOTAMatchmakingStatsRequest,
  /** k_EMsgGCSetMatchHistoryAccess */
  7200: CMsgDOTASetMatchHistoryAccess,
  /** k_EMsgUpgradeLeagueItem */
  7203: CMsgUpgradeLeagueItem,
  /** k_EMsgGCWatchDownloadedReplay */
  7206: CMsgGCWatchDownloadedReplay,
  /** k_EMsgClientsRejoinChatChannels */
  7217: CMsgClientsRejoinChatChannels,
  /** k_EMsgGCGetHeroStandings */
  7274: CMsgGCGetHeroStandings,
  /** k_EMsgGCItemEditorReservationsRequest */
  7283: CMsgGCItemEditorReservationsRequest,
  /** k_EMsgGCItemEditorReserveItemDef */
  7285: CMsgGCItemEditorReserveItemDef,
  /** k_EMsgGCItemEditorReleaseReservation */
  7287: CMsgGCItemEditorReleaseReservation,
  /** k_EMsgGCFlipLobbyTeams */
  7320: CMsgFlipLobbyTeams,
  /** k_EMsgGCNotifyAccountFlagsChange */
  7326: CMsgDOTANotifyAccountFlagsChange,
  /** k_EMsgGCSetProfilePrivacy */
  7327: CMsgDOTASetProfilePrivacy,
  /** k_EMsgGCClientSuspended */
  7342: CMsgClientSuspended,
  /** k_EMsgGCLobbyUpdateBroadcastChannelInfo */
  7367: CMsgGCLobbyUpdateBroadcastChannelInfo,
  /** k_EMsgDOTAGetEventPoints */
  7387: CMsgDOTAGetEventPoints,
  /** k_EMsgGCPartyLeaderWatchGamePrompt */
  7397: CMsgPartyLeaderWatchGamePrompt,
  /** k_EMsgGCCompendiumDataRequest */
  7406: CMsgDOTACompendiumDataRequest,
  /** k_EMsgDOTAGetPlayerMatchHistory */
  7408: CMsgDOTAGetPlayerMatchHistory,
  /** k_EMsgGCNotificationsRequest */
  7427: CMsgGCNotificationsRequest,
  /** k_EMsgGCLeagueAdminList */
  7434: CMsgLeagueAdminList,
  /** k_EMsgGCNotificationsMarkReadRequest */
  7435: CMsgGCNotificationsMarkReadRequest,
  /** k_EMsgGCRankedPlayerInfoSubmit */
  7454: CMsgGCRankedPlayerInfoSubmit,
  /** k_EMsgGCPlayerInfoSubmit */
  7456: CMsgGCPlayerInfoSubmit,
  /** k_EMsgGCHasItemQuery */
  7484: CMsgDOTAHasItemQuery,
  /** k_EMsgClientToGCEmoticonDataRequest */
  7503: CMsgClientToGCEmoticonDataRequest,
  /** k_EMsgDOTARedeemItem */
  7518: CMsgDOTARedeemItem,
  /** k_EMsgClientToGCGetAllHeroProgress */
  7521: CMsgClientToGCGetAllHeroProgress,
  /** k_EMsgClientToGCGetTrophyList */
  7527: CMsgClientToGCGetTrophyList,
  /** k_EMsgClientToGCGetProfileCard */
  7534: CMsgClientToGCGetProfileCard,
  /** k_EMsgClientToGCSetProfileCardSlots */
  7538: CMsgClientToGCSetProfileCardSlots,
  /** k_EMsgClientToGCCreateHeroStatue */
  7547: CMsgClientToGCCreateHeroStatue,
  /** k_EMsgLobbyEventPoints */
  7572: CMsgLobbyEventPoints,
  /** k_EMsgClientToGCRerollPlayerChallenge */
  7584: CMsgClientToGCRerollPlayerChallenge,
  /** k_EMsgClientToGCApplyGemCombiner */
  7603: CMsgClientToGCApplyGemCombiner,
  /** k_EMsgClientToGCGetAllHeroOrder */
  7606: CMsgClientToGCGetAllHeroOrder,
  /** k_EMsgClientToGCPlayerCardSpecificPurchaseRequest */
  7627: CMsgClientToGCPlayerCardSpecificPurchaseRequest,
  /** k_EMsgClientToGCGetFilteredPlayers */
  7662: CMsgClientToGCGetFilteredPlayers,
  /** k_EMsgClientToGCRemoveFilteredPlayer */
  7664: CMsgClientToGCRemoveFilteredPlayer,
  /** k_EMsgClientToGCUpdatePartyBeacon */
  7669: CMsgClientToGCUpdatePartyBeacon,
  /** k_EMsgClientToGCRequestActiveBeaconParties */
  7670: CMsgClientToGCRequestActiveBeaconParties,
  /** k_EMsgClientToGCManageFavorites */
  7672: CMsgClientToGCManageFavorites,
  /** k_EMsgClientToGCJoinPartyFromBeacon */
  7674: CMsgClientToGCJoinPartyFromBeacon,
  /** k_EMsgClientToGCGetFavoritePlayers */
  7676: CMsgClientToGCGetFavoritePlayers,
  /** k_EMsgClientToGCVerifyFavoritePlayers */
  7678: CMsgClientToGCVerifyFavoritePlayers,
  /** k_EMsgClientToGCPurchaseLabyrinthBlessings */
  7684: CMsgClientToGCPurchaseLabyrinthBlessings,
  /** k_EMsgClientToGCPurchaseFilteredPlayerSlot */
  7686: CMsgClientToGCPurchaseFilteredPlayerSlot,
  /** k_EMsgClientToGCUpdateFilteredPlayerNote */
  7688: CMsgClientToGCUpdateFilteredPlayerNote,
  /** k_EMsgClientToGCClaimSwag */
  7690: CMsgClientToGCClaimSwag,
  /** k_EMsgClientToGCPlayerStatsRequest */
  8006: CMsgClientToGCPlayerStatsRequest,
  /** k_EMsgClientToGCFindTopSourceTVGames */
  8009: CMsgClientToGCFindTopSourceTVGames,
  /** k_EMsgClientToGCSocialFeedPostCommentRequest */
  8016: CMsgClientToGCSocialFeedPostCommentRequest,
  /** k_EMsgClientToGCCustomGamesFriendsPlayedRequest */
  8018: CMsgClientToGCCustomGamesFriendsPlayedRequest,
  /** k_EMsgClientToGCFriendsPlayedCustomGameRequest */
  8020: CMsgClientToGCFriendsPlayedCustomGameRequest,
  /** k_EMsgGCTopCustomGamesList */
  8024: CMsgGCTopCustomGamesList,
  /** k_EMsgClientToGCGetProfileCardStats */
  8034: CMsgClientToGCGetProfileCardStats,
  /** k_EMsgClientToGCTopLeagueMatchesRequest */
  8036: CMsgClientToGCTopLeagueMatchesRequest,
  /** k_EMsgClientToGCTopFriendMatchesRequest */
  8037: CMsgClientToGCTopFriendMatchesRequest,
  /** k_EMsgClientToGCSocialFeedPostMessageRequest */
  8050: CMsgClientToGCSocialFeedPostMessageRequest,
  /** k_EMsgCustomGameListenServerStartedLoading */
  8052: CMsgDOTACustomGameListenServerStartedLoading,
  /** k_EMsgCustomGameClientFinishedLoading */
  8053: CMsgDOTACustomGameClientFinishedLoading,
  /** k_EMsgClientToGCMatchesMinimalRequest */
  8063: CMsgClientToGCMatchesMinimalRequest,
  /** k_EMsgClientToGCGetProfileTickets */
  8073: CMsgClientToGCGetProfileTickets,
  /** k_EMsgClientToGCH264Unsupported */
  8076: CMsgClientToGCH264Unsupported,
  /** k_EMsgClientToGCGetQuestProgress */
  8078: CMsgClientToGCGetQuestProgress,
  /** k_EMsgGCGetHeroStatsHistory */
  8082: CMsgGCGetHeroStatsHistory,
  /** k_EMsgClientToGCWageringRequest */
  8099: CMsgClientToGCWageringRequest,
  /** k_EMsgClientToGCHasPlayerVotedForMVP */
  8111: CMsgClientToGCHasPlayerVotedForMVP,
  /** k_EMsgClientToGCVoteForMVP */
  8113: CMsgClientToGCVoteForMVP,
  /** k_EMsgClientToGCTeammateStatsRequest */
  8124: CMsgClientToGCTeammateStatsRequest,
  /** k_EMsgClientToGCGetGiftPermissions */
  8126: CMsgClientToGCGetGiftPermissions,
  /** k_EMsgClientToGCVoteForArcana */
  8128: CMsgClientToGCVoteForArcana,
  /** k_EMsgClientToGCRequestArcanaVotesRemaining */
  8130: CMsgClientToGCRequestArcanaVotesRemaining,
  /** k_EMsgClientToGCPublishUserStat */
  8140: CMsgClientToGCPublishUserStat,
  /** k_EMsgGCSubmitLobbyMVPVote */
  8144: CMsgDOTASubmitLobbyMVPVote,
  /** k_EMsgClientToGCOpenPlayerCardPack */
  8168: CMsgClientToGCOpenPlayerCardPack,
  /** k_EMsgClientToGCSelectCompendiumInGamePrediction */
  8170: CMsgClientToGCSelectCompendiumInGamePrediction,
  /** k_EMsgClientToGCRecyclePlayerCard */
  8174: CMsgClientToGCRecyclePlayerCard,
  /** k_EMsgClientToGCCreatePlayerCardPack */
  8176: CMsgClientToGCCreatePlayerCardPack,
  /** k_EMsgGCGetPlayerCardItemInfo */
  8187: CMsgGCGetPlayerCardItemInfo,
  /** k_EMsgClientToGCTransferSeasonalMMRRequest */
  8193: CMsgClientToGCTransferSeasonalMMRRequest,
  /** k_EMsgClientToGCJoinPlaytest */
  8201: CMsgClientToGCJoinPlaytest,
  /** k_EMsgLobbyPlaytestDetails */
  8203: CMsgLobbyPlaytestDetails,
  /** k_EMsgDOTASetFavoriteTeam */
  8204: CMsgDOTASetFavoriteTeam,
  /** k_EMsgDOTAClaimEventAction */
  8209: CMsgDOTAClaimEventAction,
  /** k_EMsgDOTAGetPeriodicResource */
  8211: CMsgDOTAGetPeriodicResource,
  /** k_EMsgDOTAPeriodicResourceUpdated */
  8213: CMsgDOTAPeriodicResourceUpdated,
  /** k_EMsgSubmitTriviaQuestionAnswer */
  8216: CMsgDOTASubmitTriviaQuestionAnswer,
  /** k_EMsgStartTriviaSession */
  8220: CMsgDOTAStartTriviaSession,
  /** k_EMsgAnchorPhoneNumberRequest */
  8222: CMsgDOTAAnchorPhoneNumberRequest,
  /** k_EMsgUnanchorPhoneNumberRequest */
  8224: CMsgDOTAUnanchorPhoneNumberRequest,
  /** k_EMsgClientToGCQuickStatsRequest */
  8238: CMsgDOTAClientToGCQuickStatsRequest,
  /** k_EMsgSelectionPriorityChoiceRequest */
  8241: CMsgDOTASelectionPriorityChoiceRequest,
  /** k_EMsgGameAutographReward */
  8244: CMsgDOTAGameAutographReward,
  /** k_EMsgDestroyLobbyRequest */
  8246: CMsgDOTADestroyLobbyRequest,
  /** k_EMsgPurchaseItemWithEventPoints */
  8248: CMsgPurchaseItemWithEventPoints,
  /** k_EMsgPurchaseHeroRandomRelic */
  8258: CMsgPurchaseHeroRandomRelic,
  /** k_EMsgClientToGCClaimEventActionUsingItem */
  8260: CMsgClientToGCClaimEventActionUsingItem,
  /** k_EMsgPartyReadyCheckRequest */
  8262: CMsgPartyReadyCheckRequest,
  /** k_EMsgPartyReadyCheckAcknowledge */
  8264: CMsgPartyReadyCheckAcknowledge,
  /** k_EMsgGetRecentPlayTimeFriendsRequest */
  8265: CMsgDOTAGetRecentPlayTimeFriendsRequest,
  /** k_EMsgProfileRequest */
  8268: CMsgProfileRequest,
  /** k_EMsgProfileUpdate */
  8270: CMsgProfileUpdate,
  /** k_EMsgHeroGlobalDataRequest */
  8274: CMsgHeroGlobalDataRequest,
  /** k_EMsgClientToGCRequestPlusWeeklyChallengeResult */
  8276: CMsgClientToGCRequestPlusWeeklyChallengeResult,
  /** k_EMsgPrivateMetadataKeyRequest */
  8279: CMsgPrivateMetadataKeyRequest,
  /** k_EMsgClientToGCCavernCrawlClaimRoom */
  8289: CMsgClientToGCCavernCrawlClaimRoom,
  /** k_EMsgClientToGCCavernCrawlUseItemOnRoom */
  8291: CMsgClientToGCCavernCrawlUseItemOnRoom,
  /** k_EMsgClientToGCCavernCrawlUseItemOnPath */
  8293: CMsgClientToGCCavernCrawlUseItemOnPath,
  /** k_EMsgClientToGCCavernCrawlRequestMapState */
  8295: CMsgClientToGCCavernCrawlRequestMapState,
  /** k_EMsgClientToGCRequestEventPointLogV2 */
  8298: CMsgClientToGCRequestEventPointLogV2,
  /** k_EMsgClientToGCRequestEventPointLogResponseV2 */
  8299: CMsgClientToGCRequestEventPointLogResponseV2,
  /** k_EMsgClientToGCCavernCrawlGetClaimedRoomCount */
  8308: CMsgClientToGCCavernCrawlGetClaimedRoomCount,
  /** k_EMsgClientToGCRecordContestVote */
  8313: CMsgClientToGCRecordContestVote,
  /** k_EMsgLobbyEventGameDetails */
  8318: CMsgLobbyEventGameDetails,
  /** k_EMsgDevGrantEventPoints */
  8319: CMsgDevGrantEventPoints,
  /** k_EMsgDevGrantEventAction */
  8321: CMsgDevGrantEventAction,
  /** k_EMsgDevResetEventState */
  8323: CMsgDevResetEventState,
  /** k_EMsgConsumeEventSupportGrantItem */
  8326: CMsgConsumeEventSupportGrantItem,
  /** k_EMsgServerToGCRequestPlayerRecentAccomplishments */
  8330: CMsgServerToGCRequestPlayerRecentAccomplishments,
  /** k_EMsgClientToGCRequestPlayerRecentAccomplishments */
  8332: CMsgClientToGCRequestPlayerRecentAccomplishments,
  /** k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments */
  8334: CMsgClientToGCRequestPlayerHeroRecentAccomplishments,
  /** k_EMsgClientToGCRequestContestVotes */
  8347: CMsgClientToGCRequestContestVotes,
  /** k_EMsgClientToGCMVPVoteTimeout */
  8349: CMsgClientToGCMVPVoteTimeout,
  /** k_EMsgMatchMatchmakingStats */
  8360: CMsgMatchMatchmakingStats,
  /** k_EMsgClientToGCSubmitPlayerMatchSurvey */
  8361: CMsgClientToGCSubmitPlayerMatchSurvey,
  /** k_EMsgDevDeleteEventActions */
  8365: CMsgDevDeleteEventActions,
  /** k_EMsgGCSubmitPlayerAvoidRequest */
  8637: CMsgDOTASubmitPlayerAvoidRequest,
  /** k_EMsgGCtoGCAssociatedExploiterAccountInfo */
  8640: CMsgGCtoGCAssociatedExploiterAccountInfo,
  /** k_EMsgClientToGCUnderDraftBuy */
  8644: CMsgClientToGCUnderDraftBuy,
  /** k_EMsgClientToGCUnderDraftReroll */
  8646: CMsgClientToGCUnderDraftReroll,
  /** k_EMsgClientToGCCreateGuild */
  8649: CMsgClientToGCCreateGuild,
  /** k_EMsgClientToGCSetGuildInfo */
  8651: CMsgClientToGCSetGuildInfo,
  /** k_EMsgClientToGCAddGuildRole */
  8653: CMsgClientToGCAddGuildRole,
  /** k_EMsgClientToGCModifyGuildRole */
  8655: CMsgClientToGCModifyGuildRole,
  /** k_EMsgClientToGCRemoveGuildRole */
  8657: CMsgClientToGCRemoveGuildRole,
  /** k_EMsgClientToGCJoinGuild */
  8659: CMsgClientToGCJoinGuild,
  /** k_EMsgClientToGCLeaveGuild */
  8661: CMsgClientToGCLeaveGuild,
  /** k_EMsgClientToGCInviteToGuild */
  8663: CMsgClientToGCInviteToGuild,
  /** k_EMsgClientToGCDeclineInviteToGuild */
  8665: CMsgClientToGCDeclineInviteToGuild,
  /** k_EMsgClientToGCCancelInviteToGuild */
  8667: CMsgClientToGCCancelInviteToGuild,
  /** k_EMsgClientToGCKickGuildMember */
  8669: CMsgClientToGCKickGuildMember,
  /** k_EMsgClientToGCSetGuildMemberRole */
  8671: CMsgClientToGCSetGuildMemberRole,
  /** k_EMsgClientToGCRequestGuildData */
  8673: CMsgClientToGCRequestGuildData,
  /** k_EMsgClientToGCRequestGuildMembership */
  8676: CMsgClientToGCRequestGuildMembership,
  /** k_EMsgClientToGCAcceptInviteToGuild */
  8681: CMsgClientToGCAcceptInviteToGuild,
  /** k_EMsgClientToGCSetGuildRoleOrder */
  8683: CMsgClientToGCSetGuildRoleOrder,
  /** k_EMsgClientToGCRequestAccountGuildEventData */
  8687: CMsgClientToGCRequestAccountGuildEventData,
  /** k_EMsgClientToGCRequestActiveGuildContracts */
  8690: CMsgClientToGCRequestActiveGuildContracts,
  /** k_EMsgClientToGCSelectGuildContract */
  8694: CMsgClientToGCSelectGuildContract,
  /** k_EMsgClientToGCAddPlayerToGuildChat */
  8698: CMsgClientToGCAddPlayerToGuildChat,
  /** k_EMsgClientToGCUnderDraftSell */
  8700: CMsgClientToGCUnderDraftSell,
  /** k_EMsgClientToGCUnderDraftRequest */
  8702: CMsgClientToGCUnderDraftRequest,
  /** k_EMsgClientToGCUnderDraftRedeemReward */
  8704: CMsgClientToGCUnderDraftRedeemReward,
  /** k_EMsgClientToGCRequestActiveGuildChallenge */
  8713: CMsgClientToGCRequestActiveGuildChallenge,
  /** k_EMsgClientToGCRequestReporterUpdates */
  8716: CMsgClientToGCRequestReporterUpdates,
  /** k_EMsgClientToGCAcknowledgeReporterUpdates */
  8718: CMsgClientToGCAcknowledgeReporterUpdates,
  /** k_EMsgClientToGCRequestGuildEventMembers */
  8721: CMsgClientToGCRequestGuildEventMembers,
  /** k_EMsgClientToGCReportGuildContent */
  8725: CMsgClientToGCReportGuildContent,
  /** k_EMsgClientToGCRequestAccountGuildPersonaInfo */
  8727: CMsgClientToGCRequestAccountGuildPersonaInfo,
  /** k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch */
  8729: CMsgClientToGCRequestAccountGuildPersonaInfoBatch,
  /** k_EMsgLobbyFeaturedGamemodeProgress */
  8734: CMsgLobbyFeaturedGamemodeProgress,
  /** k_EMsgClientToGCSubmitDraftTriviaMatchAnswer */
  8736: CMsgClientToGCSubmitDraftTriviaMatchAnswer,
  /** k_EMsgClientToGCUnderDraftRollBackBench */
  8740: CMsgClientToGCUnderDraftRollBackBench,
  /** k_EMsgLobbyEventGameData */
  8746: CMsgLobbyEventGameData,
  /** k_EMsgClientToGCGetOWMatchDetails */
  8751: CMsgClientToGCGetOWMatchDetails,
  /** k_EMsgClientToGCSubmitOWConviction */
  8753: CMsgClientToGCSubmitOWConviction,
  /** k_EMsgClientToGCClaimLeaderboardRewards */
  8757: CMsgClientToGCClaimLeaderboardRewards,
  /** k_EMsgClientToGCRecalibrateMMR */
  8759: CMsgClientToGCRecalibrateMMR,
  /** k_EMsgClientToGCChinaSSAURLRequest */
  8764: CMsgClientToGCChinaSSAURLRequest,
  /** k_EMsgClientToGCChinaSSAAcceptedRequest */
  8766: CMsgClientToGCChinaSSAAcceptedRequest,
  /** k_EMsgClientToGCStartWatchingOverwatch */
  8774: CMsgClientToGCStartWatchingOverwatch,
  /** k_EMsgClientToGCStopWatchingOverwatch */
  8775: CMsgClientToGCStopWatchingOverwatch,
  /** k_EMsgClientToGCGetDPCFavorites */
  8777: CMsgClientToGCGetDPCFavorites,
  /** k_EMsgClientToGCSetDPCFavoriteState */
  8779: CMsgClientToGCSetDPCFavoriteState,
  /** k_EMsgClientToGCOverwatchReplayError */
  8781: CMsgClientToGCOverwatchReplayError,
  /** k_EMsgClientToGCSetEventActiveSeasonID */
  8806: CMsgClientToGCSetEventActiveSeasonID,
  /** k_EMsgClientToGCCreateTeamPlayerCardPack */
  8810: CMsgClientToGCCreateTeamPlayerCardPack,
  /** k_EMsgClientToGCGetStickerbookRequest */
  8825: CMsgClientToGCGetStickerbookRequest,
  /** k_EMsgClientToGCCreateStickerbookPageRequest */
  8827: CMsgClientToGCCreateStickerbookPageRequest,
  /** k_EMsgClientToGCDeleteStickerbookPageRequest */
  8829: CMsgClientToGCDeleteStickerbookPageRequest,
  /** k_EMsgClientToGCPlaceStickersRequest */
  8831: CMsgClientToGCPlaceStickersRequest,
  /** k_EMsgClientToGCPlaceCollectionStickersRequest */
  8833: CMsgClientToGCPlaceCollectionStickersRequest,
  /** k_EMsgClientToGCOrderStickerbookTeamPageRequest */
  8835: CMsgClientToGCOrderStickerbookTeamPageRequest,
  /** k_EMsgClientToGCSetHeroSticker */
  8851: CMsgClientToGCSetHeroSticker,
  /** k_EMsgClientToGCGetHeroStickers */
  8853: CMsgClientToGCGetHeroStickers,
  /** k_EMsgClientToGCSetFavoritePage */
  8855: CMsgClientToGCSetFavoritePage,
  /** k_EMsgClientToGCCollectorsCacheAvailableDataRequest */
  8871: CMsgClientToGCCollectorsCacheAvailableDataRequest,
  /** k_EMsgClientToGCUploadMatchClip */
  8873: CMsgClientToGCUploadMatchClip,
  /** k_EMsgClientToGCRankRequest */
  8879: CMsgClientToGCRankRequest,
  /** k_EMsgClientToGCMapStatsRequest */
  8883: CMsgClientToGCMapStatsRequest,
  /** k_EMsgClientToGCRoadToTIGetQuests */
  8897: CMsgClientToGCRoadToTIGetQuests,
  /** k_EMsgClientToGCRoadToTIGetActiveQuest */
  8899: CMsgClientToGCRoadToTIGetActiveQuest,
  /** k_EMsgClientToGCRoadToTIUseItem */
  8911: CMsgClientToGCRoadToTIUseItem,
  /** k_EMsgClientToGCRoadToTIDevForceQuest */
  8935: CMsgClientToGCRoadToTIDevForceQuest,
  /** k_EMsgLobbyRoadToTIMatchQuestData */
  8939: CMsgLobbyRoadToTIMatchQuestData,
  /** k_EMsgClientToGCOverworldGetUserData */
  8944: CMsgClientToGCOverworldGetUserData,
  /** k_EMsgClientToGCOverworldCompletePath */
  8946: CMsgClientToGCOverworldCompletePath,
  /** k_EMsgClientToGCOverworldClaimEncounterReward */
  8948: CMsgClientToGCOverworldClaimEncounterReward,
  /** k_EMsgClientToGCOverworldDevResetAll */
  8950: CMsgClientToGCOverworldDevResetAll,
  /** k_EMsgClientToGCOverworldDevResetNode */
  8952: CMsgClientToGCOverworldDevResetNode,
  /** k_EMsgClientToGCOverworldDevGrantTokens */
  8956: CMsgClientToGCOverworldDevGrantTokens,
  /** k_EMsgClientToGCOverworldDevClearInventory */
  8958: CMsgClientToGCOverworldDevClearInventory,
  /** k_EMsgClientToGCOverworldMoveToNode */
  8963: CMsgClientToGCOverworldMoveToNode,
  /** k_EMsgClientToGCNewBloomGift */
  8965: CMsgClientToGCNewBloomGift,
  /** k_EMsgClientToGCSetBannedHeroes */
  8969: CMsgClientToGCSetBannedHeroes,
  /** k_EMsgClientToGCOverworldTradeTokens */
  8970: CMsgClientToGCOverworldTradeTokens,
  /** k_EMsgOverworldEncounterTokenTreasureData */
  8972: CMsgOverworldEncounterTokenTreasureData,
  /** k_EMsgOverworldEncounterTokenQuestData */
  8973: CMsgOverworldEncounterTokenQuestData,
  /** k_EMsgOverworldEncounterChooseHeroData */
  8974: CMsgOverworldEncounterChooseHeroData,
  /** k_EMsgClientToGCUpdateComicBookStats */
  8975: CMsgClientToGCUpdateComicBookStats,
  /** k_EMsgOverworldEncounterProgressData */
  8978: CMsgOverworldEncounterProgressData,
  /** k_EMsgClientToGCOverworldFeedback */
  8979: CMsgClientToGCOverworldFeedback,
  /** k_EMsgClientToGCOverworldVisitEncounter */
  8981: CMsgClientToGCOverworldVisitEncounter,
  /** k_EMsgClientToGCOverworldGiftTokens */
  8983: CMsgClientToGCOverworldGiftTokens,
  /** k_EMsgClientToGCDotaLabsFeedback */
  8985: CMsgClientToGCDotaLabsFeedback,
  /** k_EMsgOverworldEncounterPitFighterRewardData */
  8987: CMsgOverworldEncounterPitFighterRewardData,
  /** k_EMsgClientToGCOverworldGetDynamicImage */
  8988: CMsgClientToGCOverworldGetDynamicImage,
  /** k_EMsgGCCompendiumRemoveAllSelections */
  9007: CMsgDOTACompendiumRemoveAllSelections,
  /** k_EMsgClientToGCOverworldMinigameAction */
  9009: CMsgClientToGCOverworldMinigameAction,
  /** k_EMsgClientToGCOverworldRequestTokensNeededByFriend */
  9013: CMsgClientToGCOverworldRequestTokensNeededByFriend
};
var gcMessages = {
  /** k_ESOMsg_Create */
  21: CMsgSOSingleObject,
  /** k_ESOMsg_Update */
  22: CMsgSOSingleObject,
  /** k_ESOMsg_Destroy */
  23: CMsgSOSingleObject,
  /** k_ESOMsg_CacheSubscribed */
  24: CMsgSOCacheSubscribed,
  /** k_ESOMsg_CacheUnsubscribed */
  25: CMsgSOCacheUnsubscribed,
  /** k_ESOMsg_UpdateMultiple */
  26: CMsgSOMultipleObjects,
  /** k_ESOMsg_CacheSubscriptionRefresh */
  28: CMsgSOCacheSubscriptionRefresh,
  /** k_ESOMsg_CacheSubscribedUpToDate */
  29: CMsgSOCacheSubscribedUpToDate,
  /** k_EMsgGCToClientPollConvarRequest */
  3003: CMsgGCToClientPollConvarRequest,
  /** k_EMsgGCToClientPollConvarResponse */
  3004: CMsgGCToClientPollConvarResponse,
  /** k_EMsgGCToClientRequestDropped */
  3006: CMsgGCToClientRequestDropped,
  /** k_EMsgGCClientWelcome */
  4004: CMsgClientWelcome,
  /** k_EMsgGCServerWelcome */
  4005: CMsgClientWelcome,
  /** k_EMsgGCClientConnectionStatus */
  4009: CMsgConnectionStatus,
  /** k_EMsgGCServerConnectionStatus */
  4010: CMsgConnectionStatus,
  /** k_EMsgGCPartyInviteResponse */
  4503: CMsgPartyInviteResponse,
  /** k_EMsgGCLobbyInviteResponse */
  4513: CMsgLobbyInviteResponse,
  /** k_EMsgGCToClientPollFileRequest */
  4514: CMsgGCToClientPollFileRequest,
  /** k_EMsgGCToClientPollFileResponse */
  4515: CMsgGCToClientPollFileResponse,
  /** k_EMsgGCToClientApplyRemoteConVars */
  4520: CMsgGCToClientApplyRemoteConVars,
  /** k_EMsgGCToClientAggregateMetricsBackoff */
  4524: CMsgGCToClientAggregateMetricsBackoff,
  /** k_EMsgGCInitialQuestionnaireResponse */
  7049: CMsgInitialQuestionnaireResponse,
  /** k_EMsgGCSpectateFriendGameResponse */
  7074: CMsgSpectateFriendGameResponse,
  /** k_EMsgGCReportsRemainingResponse */
  7077: CMsgDOTAReportsRemainingResponse,
  /** k_EMsgGCSubmitPlayerReportResponse */
  7079: CMsgDOTASubmitPlayerReportResponse,
  /** k_EMsgGCWatchGameResponse */
  7092: CMsgWatchGameResponse,
  /** k_EMsgGCMatchDetailsResponse */
  7096: CMsgGCMatchDetailsResponse,
  /** k_EMsgGCMatchmakingStatsResponse */
  7198: CMsgDOTAMatchmakingStatsResponse,
  /** k_EMsgGCSetMatchHistoryAccessResponse */
  7201: CMsgDOTASetMatchHistoryAccessResponse,
  /** k_EMsgUpgradeLeagueItemResponse */
  7204: CMsgUpgradeLeagueItemResponse,
  /** k_EMsgGCGetHeroStandingsResponse */
  7275: CMsgGCGetHeroStandingsResponse,
  /** k_EMsgGCItemEditorReservationsResponse */
  7284: CMsgGCItemEditorReservationsResponse,
  /** k_EMsgGCItemEditorReserveItemDefResponse */
  7286: CMsgGCItemEditorReserveItemDefResponse,
  /** k_EMsgGCItemEditorReleaseReservationResponse */
  7288: CMsgGCItemEditorReleaseReservationResponse,
  /** k_EMsgGCSetProfilePrivacyResponse */
  7328: CMsgDOTASetProfilePrivacyResponse,
  /** k_EMsgDOTAGetEventPointsResponse */
  7388: CMsgDOTAGetEventPointsResponse,
  /** k_EMsgGCCompendiumDataResponse */
  7407: CMsgDOTACompendiumDataResponse,
  /** k_EMsgDOTAGetPlayerMatchHistoryResponse */
  7409: CMsgDOTAGetPlayerMatchHistoryResponse,
  /** k_EMsgGCNotificationsResponse */
  7428: CMsgGCNotificationsResponse,
  /** k_EMsgGCRankedPlayerInfoSubmitResponse */
  7455: CMsgGCRankedPlayerInfoSubmitResponse,
  /** k_EMsgGCPlayerInfoSubmitResponse */
  7457: CMsgGCPlayerInfoSubmitResponse,
  /** k_EMsgGCHasItemResponse */
  7485: CMsgDOTAHasItemResponse,
  /** k_EMsgGCToClientTournamentItemDrop */
  7495: CMsgGCToClientTournamentItemDrop,
  /** k_EMsgGCToClientEmoticonData */
  7504: CMsgGCToClientEmoticonData,
  /** k_EMsgDOTARedeemItemResponse */
  7519: CMsgDOTARedeemItemResponse,
  /** k_EMsgClientToGCGetAllHeroProgressResponse */
  7522: CMsgClientToGCGetAllHeroProgressResponse,
  /** k_EMsgClientToGCGetTrophyListResponse */
  7528: CMsgClientToGCGetTrophyListResponse,
  /** k_EMsgGCToClientTrophyAwarded */
  7529: CMsgGCToClientTrophyAwarded,
  /** k_EMsgClientToGCGetProfileCardResponse */
  7535: CMsgDOTAProfileCard,
  /** k_EMsgGCToClientHeroStatueCreateResult */
  7548: CMsgGCToClientHeroStatueCreateResult,
  /** k_EMsgGCRerollPlayerChallengeResponse */
  7586: CMsgGCRerollPlayerChallengeResponse,
  /** k_EMsgClientToGCGetAllHeroOrderResponse */
  7607: CMsgClientToGCGetAllHeroOrderResponse,
  /** k_EMsgClientToGCPlayerCardSpecificPurchaseResponse */
  7628: CMsgClientToGCPlayerCardSpecificPurchaseResponse,
  /** k_EMsgGCToClientGetFilteredPlayersResponse */
  7663: CMsgGCToClientGetFilteredPlayersResponse,
  /** k_EMsgGCToClientRemoveFilteredPlayerResponse */
  7665: CMsgGCToClientRemoveFilteredPlayerResponse,
  /** k_EMsgGCToClientPlayerBeaconState */
  7666: CMsgGCToClientPlayerBeaconState,
  /** k_EMsgGCToClientPartyBeaconUpdate */
  7667: CMsgGCToClientPartyBeaconUpdate,
  /** k_EMsgGCToClientPartySearchInvite */
  7668: CMsgGCToClientPartySearchInvite,
  /** k_EMsgGCToClientRequestActiveBeaconPartiesResponse */
  7671: CMsgGCToClientRequestActiveBeaconPartiesResponse,
  /** k_EMsgGCToClientManageFavoritesResponse */
  7673: CMsgGCToClientManageFavoritesResponse,
  /** k_EMsgGCToClientJoinPartyFromBeaconResponse */
  7675: CMsgGCToClientJoinPartyFromBeaconResponse,
  /** k_EMsgGCToClientGetFavoritePlayersResponse */
  7677: CMsgGCToClientGetFavoritePlayersResponse,
  /** k_EMsgGCToClientVerifyFavoritePlayersResponse */
  7679: CMsgGCToClientVerifyFavoritePlayersResponse,
  /** k_EMsgGCToClientPartySearchInvites */
  7680: CMsgGCToClientPartySearchInvites,
  /** k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse */
  7685: CMsgClientToGCPurchaseLabyrinthBlessingsResponse,
  /** k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse */
  7687: CMsgGCToClientPurchaseFilteredPlayerSlotResponse,
  /** k_EMsgGCToClientUpdateFilteredPlayerNoteResponse */
  7689: CMsgGCToClientUpdateFilteredPlayerNoteResponse,
  /** k_EMsgGCToClientPlayerStatsResponse */
  8007: CMsgGCToClientPlayerStatsResponse,
  /** k_EMsgGCToClientFindTopSourceTVGamesResponse */
  8010: CMsgGCToClientFindTopSourceTVGamesResponse,
  /** k_EMsgGCToClientSocialFeedPostCommentResponse */
  8017: CMsgGCToClientSocialFeedPostCommentResponse,
  /** k_EMsgGCToClientCustomGamesFriendsPlayedResponse */
  8019: CMsgGCToClientCustomGamesFriendsPlayedResponse,
  /** k_EMsgGCToClientFriendsPlayedCustomGameResponse */
  8021: CMsgGCToClientFriendsPlayedCustomGameResponse,
  /** k_EMsgGCToClientSocialFeedPostMessageResponse */
  8051: CMsgGCToClientSocialFeedPostMessageResponse,
  /** k_EMsgGCToClientTopLeagueMatchesResponse */
  8061: CMsgGCToClientTopLeagueMatchesResponse,
  /** k_EMsgGCToClientTopFriendMatchesResponse */
  8062: CMsgGCToClientTopFriendMatchesResponse,
  /** k_EMsgClientToGCMatchesMinimalResponse */
  8064: CMsgClientToGCMatchesMinimalResponse,
  /** k_EMsgGCToClientMatchGroupsVersion */
  8075: CMsgGCToClientMatchGroupsVersion,
  /** k_EMsgClientToGCGetQuestProgressResponse */
  8079: CMsgClientToGCGetQuestProgressResponse,
  /** k_EMsgGCToClientMatchSignedOut */
  8081: CMsgGCToClientMatchSignedOut,
  /** k_EMsgGCGetHeroStatsHistoryResponse */
  8083: CMsgGCGetHeroStatsHistoryResponse,
  /** k_EMsgGCToClientWageringResponse */
  8100: CMsgGCToClientWageringResponse,
  /** k_EMsgClientToGCHasPlayerVotedForMVPResponse */
  8112: CMsgClientToGCHasPlayerVotedForMVPResponse,
  /** k_EMsgClientToGCVoteForMVPResponse */
  8114: CMsgClientToGCVoteForMVPResponse,
  /** k_EMsgClientToGCTeammateStatsResponse */
  8125: CMsgClientToGCTeammateStatsResponse,
  /** k_EMsgClientToGCGetGiftPermissionsResponse */
  8127: CMsgClientToGCGetGiftPermissionsResponse,
  /** k_EMsgClientToGCVoteForArcanaResponse */
  8129: CMsgClientToGCVoteForArcanaResponse,
  /** k_EMsgClientToGCRequestArcanaVotesRemainingResponse */
  8131: CMsgClientToGCRequestArcanaVotesRemainingResponse,
  /** k_EMsgGCSubmitLobbyMVPVoteResponse */
  8145: CMsgDOTASubmitLobbyMVPVoteResponse,
  /** k_EMsgGCToClientQuestProgressUpdated */
  8153: CMsgGCToClientQuestProgressUpdated,
  /** k_EMsgGCToClientWageringUpdate */
  8154: CMsgGCToClientWageringUpdate,
  /** k_EMsgGCToClientArcanaVotesUpdate */
  8155: CMsgGCToClientArcanaVotesUpdate,
  /** k_EMsgClientToGCOpenPlayerCardPackResponse */
  8169: CMsgClientToGCOpenPlayerCardPackResponse,
  /** k_EMsgClientToGCSelectCompendiumInGamePredictionResponse */
  8171: CMsgClientToGCSelectCompendiumInGamePredictionResponse,
  /** k_EMsgClientToGCRecyclePlayerCardResponse */
  8175: CMsgClientToGCRecyclePlayerCardResponse,
  /** k_EMsgClientToGCCreatePlayerCardPackResponse */
  8177: CMsgClientToGCCreatePlayerCardPackResponse,
  /** k_EMsgGCGetPlayerCardItemInfoResponse */
  8188: CMsgGCGetPlayerCardItemInfoResponse,
  /** k_EMsgGCToClientBattlePassRollupRequest */
  8191: CMsgGCToClientBattlePassRollupRequest,
  /** k_EMsgGCToClientBattlePassRollupResponse */
  8192: CMsgGCToClientBattlePassRollupResponse,
  /** k_EMsgClientToGCTransferSeasonalMMRResponse */
  8194: CMsgClientToGCTransferSeasonalMMRResponse,
  /** k_EMsgGCToClientPlaytestStatus */
  8200: CMsgGCToClientPlaytestStatus,
  /** k_EMsgClientToGCJoinPlaytestResponse */
  8202: CMsgClientToGCJoinPlaytestResponse,
  /** k_EMsgGCToClientBattlePassRollupListRequest */
  8205: CMsgGCToClientBattlePassRollupListRequest,
  /** k_EMsgGCToClientBattlePassRollupListResponse */
  8206: CMsgGCToClientBattlePassRollupListResponse,
  /** k_EMsgDOTAClaimEventActionResponse */
  8210: CMsgDOTAClaimEventActionResponse,
  /** k_EMsgDOTAGetPeriodicResourceResponse */
  8212: CMsgDOTAGetPeriodicResourceResponse,
  /** k_EMsgSubmitTriviaQuestionAnswerResponse */
  8217: CMsgDOTASubmitTriviaQuestionAnswerResponse,
  /** k_EMsgStartTriviaSessionResponse */
  8221: CMsgDOTAStartTriviaSessionResponse,
  /** k_EMsgAnchorPhoneNumberResponse */
  8223: CMsgDOTAAnchorPhoneNumberResponse,
  /** k_EMsgUnanchorPhoneNumberResponse */
  8225: CMsgDOTAUnanchorPhoneNumberResponse,
  /** k_EMsgClientToGCQuickStatsResponse */
  8239: CMsgDOTAClientToGCQuickStatsResponse,
  /** k_EMsgSelectionPriorityChoiceResponse */
  8242: CMsgDOTASelectionPriorityChoiceResponse,
  /** k_EMsgGameAutographRewardResponse */
  8245: CMsgDOTAGameAutographRewardResponse,
  /** k_EMsgDestroyLobbyResponse */
  8247: CMsgDOTADestroyLobbyResponse,
  /** k_EMsgPurchaseItemWithEventPointsResponse */
  8249: CMsgPurchaseItemWithEventPointsResponse,
  /** k_EMsgPurchaseHeroRandomRelicResponse */
  8259: CMsgPurchaseHeroRandomRelicResponse,
  /** k_EMsgClientToGCClaimEventActionUsingItemResponse */
  8261: CMsgClientToGCClaimEventActionUsingItemResponse,
  /** k_EMsgPartyReadyCheckResponse */
  8263: CMsgPartyReadyCheckResponse,
  /** k_EMsgGetRecentPlayTimeFriendsResponse */
  8266: CMsgDOTAGetRecentPlayTimeFriendsResponse,
  /** k_EMsgGCToClientCommendNotification */
  8267: CMsgGCToClientCommendNotification,
  /** k_EMsgProfileResponse */
  8269: CMsgProfileResponse,
  /** k_EMsgProfileUpdateResponse */
  8271: CMsgProfileUpdateResponse,
  /** k_EMsgHeroGlobalDataResponse */
  8275: CMsgHeroGlobalDataResponse,
  /** k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse */
  8277: CMsgClientToGCRequestPlusWeeklyChallengeResultResponse,
  /** k_EMsgPrivateMetadataKeyResponse */
  8280: CMsgPrivateMetadataKeyResponse,
  /** k_EMsgGCToClientCavernCrawlMapPathCompleted */
  8288: CMsgGCToClientCavernCrawlMapPathCompleted,
  /** k_EMsgClientToGCCavernCrawlClaimRoomResponse */
  8290: CMsgClientToGCCavernCrawlClaimRoomResponse,
  /** k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse */
  8292: CMsgClientToGCCavernCrawlUseItemOnRoomResponse,
  /** k_EMsgClientToGCCavernCrawlUseItemOnPathResponse */
  8294: CMsgClientToGCCavernCrawlUseItemOnPathResponse,
  /** k_EMsgClientToGCCavernCrawlRequestMapStateResponse */
  8296: CMsgClientToGCCavernCrawlRequestMapStateResponse,
  /** k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse */
  8309: CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse,
  /** k_EMsgGCToClientRecordContestVoteResponse */
  8314: CMsgGCToClientRecordContestVoteResponse,
  /** k_EMsgDevGrantEventPointsResponse */
  8320: CMsgDevGrantEventPointsResponse,
  /** k_EMsgDevGrantEventActionResponse */
  8322: CMsgDevGrantEventActionResponse,
  /** k_EMsgDevResetEventStateResponse */
  8324: CMsgDevResetEventStateResponse,
  /** k_EMsgConsumeEventSupportGrantItemResponse */
  8327: CMsgConsumeEventSupportGrantItemResponse,
  /** k_EMsgGCToClientClaimEventActionUsingItemCompleted */
  8328: CMsgGCToClientClaimEventActionUsingItemCompleted,
  /** k_EMsgGCToClientCavernCrawlMapUpdated */
  8329: CMsgGCToClientCavernCrawlMapUpdated,
  /** k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse */
  8331: CMsgServerToGCRequestPlayerRecentAccomplishmentsResponse,
  /** k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse */
  8333: CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse,
  /** k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse */
  8335: CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse,
  /** k_EMsgClientToGCRequestContestVotesResponse */
  8348: CMsgClientToGCRequestContestVotesResponse,
  /** k_EMsgClientToGCMVPVoteTimeoutResponse */
  8350: CMsgClientToGCMVPVoteTimeoutResponse,
  /** k_EMsgClientToGCSubmitPlayerMatchSurveyResponse */
  8362: CMsgClientToGCSubmitPlayerMatchSurveyResponse,
  /** k_EMsgDevDeleteEventActionsResponse */
  8366: CMsgDevDeleteEventActionsResponse,
  /** k_EMsgGCSubmitPlayerAvoidRequestResponse */
  8638: CMsgDOTASubmitPlayerAvoidRequestResponse,
  /** k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse */
  8641: CMsgGCtoGCAssociatedExploiterAccountInfoResponse,
  /** k_EMsgGCToClientVACReminder */
  8643: CMsgGCToClientVACReminder,
  /** k_EMsgClientToGCUnderDraftBuyResponse */
  8645: CMsgClientToGCUnderDraftBuyResponse,
  /** k_EMsgClientToGCUnderDraftRerollResponse */
  8647: CMsgClientToGCUnderDraftRerollResponse,
  /** k_EMsgClientToGCCreateGuildResponse */
  8650: CMsgClientToGCCreateGuildResponse,
  /** k_EMsgClientToGCSetGuildInfoResponse */
  8652: CMsgClientToGCSetGuildInfoResponse,
  /** k_EMsgClientToGCAddGuildRoleResponse */
  8654: CMsgClientToGCAddGuildRoleResponse,
  /** k_EMsgClientToGCModifyGuildRoleResponse */
  8656: CMsgClientToGCModifyGuildRoleResponse,
  /** k_EMsgClientToGCRemoveGuildRoleResponse */
  8658: CMsgClientToGCRemoveGuildRoleResponse,
  /** k_EMsgClientToGCJoinGuildResponse */
  8660: CMsgClientToGCJoinGuildResponse,
  /** k_EMsgClientToGCLeaveGuildResponse */
  8662: CMsgClientToGCLeaveGuildResponse,
  /** k_EMsgClientToGCInviteToGuildResponse */
  8664: CMsgClientToGCInviteToGuildResponse,
  /** k_EMsgClientToGCDeclineInviteToGuildResponse */
  8666: CMsgClientToGCDeclineInviteToGuildResponse,
  /** k_EMsgClientToGCCancelInviteToGuildResponse */
  8668: CMsgClientToGCCancelInviteToGuildResponse,
  /** k_EMsgClientToGCKickGuildMemberResponse */
  8670: CMsgClientToGCKickGuildMemberResponse,
  /** k_EMsgClientToGCSetGuildMemberRoleResponse */
  8672: CMsgClientToGCSetGuildMemberRoleResponse,
  /** k_EMsgClientToGCRequestGuildDataResponse */
  8674: CMsgClientToGCRequestGuildDataResponse,
  /** k_EMsgGCToClientGuildDataUpdated */
  8675: CMsgGCToClientGuildDataUpdated,
  /** k_EMsgClientToGCRequestGuildMembershipResponse */
  8677: CMsgClientToGCRequestGuildMembershipResponse,
  /** k_EMsgGCToClientGuildMembershipUpdated */
  8678: CMsgGCToClientGuildMembershipUpdated,
  /** k_EMsgClientToGCAcceptInviteToGuildResponse */
  8682: CMsgClientToGCAcceptInviteToGuildResponse,
  /** k_EMsgClientToGCSetGuildRoleOrderResponse */
  8684: CMsgClientToGCSetGuildRoleOrderResponse,
  /** k_EMsgClientToGCRequestGuildFeedResponse */
  8686: CMsgClientToGCRequestGuildFeedResponse,
  /** k_EMsgClientToGCRequestAccountGuildEventDataResponse */
  8688: CMsgClientToGCRequestAccountGuildEventDataResponse,
  /** k_EMsgGCToClientAccountGuildEventDataUpdated */
  8689: CMsgGCToClientAccountGuildEventDataUpdated,
  /** k_EMsgClientToGCRequestActiveGuildContractsResponse */
  8691: CMsgClientToGCRequestActiveGuildContractsResponse,
  /** k_EMsgGCToClientActiveGuildContractsUpdated */
  8692: CMsgGCToClientActiveGuildContractsUpdated,
  /** k_EMsgGCToClientGuildFeedUpdated */
  8693: CMsgGCToClientGuildFeedUpdated,
  /** k_EMsgClientToGCSelectGuildContractResponse */
  8695: CMsgClientToGCSelectGuildContractResponse,
  /** k_EMsgClientToGCAddPlayerToGuildChatResponse */
  8699: CMsgClientToGCAddPlayerToGuildChatResponse,
  /** k_EMsgClientToGCUnderDraftSellResponse */
  8701: CMsgClientToGCUnderDraftSellResponse,
  /** k_EMsgClientToGCUnderDraftResponse */
  8703: CMsgClientToGCUnderDraftResponse,
  /** k_EMsgClientToGCUnderDraftRedeemRewardResponse */
  8705: CMsgClientToGCUnderDraftRedeemRewardResponse,
  /** k_EMsgClientToGCRequestActiveGuildChallengeResponse */
  8714: CMsgClientToGCRequestActiveGuildChallengeResponse,
  /** k_EMsgGCToClientActiveGuildChallengeUpdated */
  8715: CMsgGCToClientActiveGuildChallengeUpdated,
  /** k_EMsgClientToGCRequestReporterUpdatesResponse */
  8717: CMsgClientToGCRequestReporterUpdatesResponse,
  /** k_EMsgClientToGCRequestGuildEventMembersResponse */
  8722: CMsgClientToGCRequestGuildEventMembersResponse,
  /** k_EMsgClientToGCReportGuildContentResponse */
  8726: CMsgClientToGCReportGuildContentResponse,
  /** k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse */
  8728: CMsgClientToGCRequestAccountGuildPersonaInfoResponse,
  /** k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse */
  8730: CMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse,
  /** k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse */
  8737: CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse,
  /** k_EMsgClientToGCUnderDraftRollBackBenchResponse */
  8741: CMsgClientToGCUnderDraftRollBackBenchResponse,
  /** k_EMsgGCToClientGuildMembersDataUpdated */
  8747: CMsgGCToClientGuildMembersDataUpdated,
  /** k_EMsgClientToGCGetOWMatchDetailsResponse */
  8752: CMsgClientToGCGetOWMatchDetailsResponse,
  /** k_EMsgClientToGCSubmitOWConvictionResponse */
  8754: CMsgClientToGCSubmitOWConvictionResponse,
  /** k_EMsgClientToGCClaimLeaderboardRewardsResponse */
  8758: CMsgClientToGCClaimLeaderboardRewardsResponse,
  /** k_EMsgClientToGCRecalibrateMMRResponse */
  8760: CMsgClientToGCRecalibrateMMRResponse,
  /** k_EMsgClientToGCChinaSSAURLResponse */
  8765: CMsgClientToGCChinaSSAURLResponse,
  /** k_EMsgClientToGCChinaSSAAcceptedResponse */
  8767: CMsgClientToGCChinaSSAAcceptedResponse,
  /** k_EMsgGCToClientOverwatchCasesAvailable */
  8772: CMsgGCToClientOverwatchCasesAvailable,
  /** k_EMsgClientToGCGetDPCFavoritesResponse */
  8778: CMsgClientToGCGetDPCFavoritesResponse,
  /** k_EMsgClientToGCSetDPCFavoriteStateResponse */
  8780: CMsgClientToGCSetDPCFavoriteStateResponse,
  /** k_EMsgClientToGCSetEventActiveSeasonIDResponse */
  8807: CMsgClientToGCSetEventActiveSeasonIDResponse,
  /** k_EMsgClientToGCCreateTeamPlayerCardPackResponse */
  8811: CMsgClientToGCCreateTeamPlayerCardPackResponse,
  /** k_EMsgClientToGCGetStickerbookResponse */
  8826: CMsgClientToGCGetStickerbookResponse,
  /** k_EMsgClientToGCCreateStickerbookPageResponse */
  8828: CMsgClientToGCCreateStickerbookPageResponse,
  /** k_EMsgClientToGCDeleteStickerbookPageResponse */
  8830: CMsgClientToGCDeleteStickerbookPageResponse,
  /** k_EMsgClientToGCPlaceStickersResponse */
  8832: CMsgClientToGCPlaceStickersResponse,
  /** k_EMsgClientToGCPlaceCollectionStickersResponse */
  8834: CMsgClientToGCPlaceCollectionStickersResponse,
  /** k_EMsgClientToGCOrderStickerbookTeamPageResponse */
  8836: CMsgClientToGCOrderStickerbookTeamPageResponse,
  /** k_EMsgClientToGCSetHeroStickerResponse */
  8852: CMsgClientToGCSetHeroStickerResponse,
  /** k_EMsgClientToGCGetHeroStickersResponse */
  8854: CMsgClientToGCGetHeroStickersResponse,
  /** k_EMsgClientToGCSetFavoritePageResponse */
  8856: CMsgClientToGCSetFavoritePageResponse,
  /** k_EMsgGCToClientCollectorsCacheAvailableDataResponse */
  8872: CMsgGCToClientCollectorsCacheAvailableDataResponse,
  /** k_EMsgGCToClientUploadMatchClipResponse */
  8874: CMsgGCToClientUploadMatchClipResponse,
  /** k_EMsgGCToClientRankResponse */
  8880: CMsgGCToClientRankResponse,
  /** k_EMsgGCToClientRankUpdate */
  8881: CMsgGCToClientRankUpdate,
  /** k_EMsgGCToClientMapStatsResponse */
  8884: CMsgGCToClientMapStatsResponse,
  /** k_EMsgClientToGCRoadToTIGetQuestsResponse */
  8898: CMsgClientToGCRoadToTIGetQuestsResponse,
  /** k_EMsgClientToGCRoadToTIGetActiveQuestResponse */
  8900: CMsgClientToGCRoadToTIGetActiveQuestResponse,
  /** k_EMsgGCToClientRoadToTIQuestDataUpdated */
  8910: CMsgGCToClientRoadToTIQuestDataUpdated,
  /** k_EMsgClientToGCRoadToTIUseItemResponse */
  8912: CMsgClientToGCRoadToTIUseItemResponse,
  /** k_EMsgClientToGCOverworldGetUserDataResponse */
  8945: CMsgClientToGCOverworldGetUserDataResponse,
  /** k_EMsgClientToGCOverworldCompletePathResponse */
  8947: CMsgClientToGCOverworldCompletePathResponse,
  /** k_EMsgClientToGCOverworldClaimEncounterRewardResponse */
  8949: CMsgClientToGCOverworldClaimEncounterRewardResponse,
  /** k_EMsgClientToGCOverworldDevResetAllResponse */
  8951: CMsgClientToGCOverworldDevResetAllResponse,
  /** k_EMsgClientToGCOverworldDevResetNodeResponse */
  8953: CMsgClientToGCOverworldDevResetNodeResponse,
  /** k_EMsgClientToGCOverworldDevGrantTokensResponse */
  8957: CMsgClientToGCOverworldDevGrantTokensResponse,
  /** k_EMsgClientToGCOverworldDevClearInventoryResponse */
  8959: CMsgClientToGCOverworldDevClearInventoryResponse,
  /** k_EMsgGCToClientOverworldUserDataUpdated */
  8962: CMsgGCToClientOverworldUserDataUpdated,
  /** k_EMsgClientToGCOverworldMoveToNodeResponse */
  8964: CMsgClientToGCOverworldMoveToNodeResponse,
  /** k_EMsgClientToGCNewBloomGiftResponse */
  8966: CMsgClientToGCNewBloomGiftResponse,
  /** k_EMsgClientToGCOverworldTradeTokensResponse */
  8971: CMsgClientToGCOverworldTradeTokensResponse,
  /** k_EMsgClientToGCOverworldFeedbackResponse */
  8980: CMsgClientToGCOverworldFeedbackResponse,
  /** k_EMsgClientToGCOverworldVisitEncounterResponse */
  8982: CMsgClientToGCOverworldVisitEncounterResponse,
  /** k_EMsgClientToGCOverworldGiftTokensResponse */
  8984: CMsgClientToGCOverworldGiftTokensResponse,
  /** k_EMsgClientToGCDotaLabsFeedbackResponse */
  8986: CMsgClientToGCDotaLabsFeedbackResponse,
  /** k_EMsgClientToGCOverworldGetDynamicImageResponse */
  8989: CMsgClientToGCOverworldGetDynamicImageResponse,
  /** k_EMsgGCCompendiumRemoveAllSelectionsResponse */
  9008: CMsgDOTACompendiumRemoveAllSelectionsResponse,
  /** k_EMsgClientToGCOverworldMinigameActionResponse */
  9010: CMsgClientToGCOverworldMinigameActionResponse,
  /** k_EMsgClientToGCOverworldRequestTokensNeededByFriendResponse */
  9014: CMsgClientToGCOverworldRequestTokensNeededByFriendResponse
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

// src/router.ts
import { EventEmitter } from "events";
var UNKNOWN = "unknown";
var DECODE_ERROR = "decodeError";
var GCRouter = class {
  constructor(logger) {
    this.logger = logger;
    this.emitter.setMaxListeners(0);
  }
  logger;
  emitter = new EventEmitter();
  anyListeners = /* @__PURE__ */ new Set();
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
      this.logger?.debug?.("dota2-gc: no decoder for inbound GC message %s", msgId);
      this.emitAny(msgId, payload);
      this.dispatch(UNKNOWN, msgId, payload);
      return;
    }
    let decoded;
    try {
      decoded = codec.decode(payload);
    } catch (error) {
      this.logger?.warn?.("dota2-gc: failed to decode GC message %s", msgId, error);
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
      this.logger?.error?.("dota2-gc: listener threw while routing %s", event, error);
    }
  }
  emitAny(msgId, payload) {
    for (const listener of this.anyListeners) {
      try {
        listener(msgId, payload);
      } catch (error) {
        this.logger?.error?.("dota2-gc: onAny listener threw for message %s", msgId, error);
      }
    }
  }
};

// src/client.ts
var DOTA2_APPID = 570;
var MAX_TIMEOUT_MS = 2147483647;
function normalizeTimeout(value, fallback, name) {
  const ms = value ?? fallback;
  if (!Number.isFinite(ms) || ms < 0) throw new Dota2GCError(`${name} must be a finite number >= 0, got ${ms}`);
  return Math.min(ms, MAX_TIMEOUT_MS);
}
var Dota2GC = class extends EventEmitter2 {
  static STEAM_APPID = DOTA2_APPID;
  router;
  appid;
  steam;
  logger;
  timers;
  jobTimeoutMs;
  helloInitialMs;
  helloBaseMs;
  helloBackoffMaxMs;
  autoGamesPlayed;
  pending = /* @__PURE__ */ new Set();
  hooks = [];
  waiters = /* @__PURE__ */ new Set();
  destroyed = false;
  _inApp = false;
  _haveGCSession = false;
  _welcome;
  helloTimer;
  helloDelayMs;
  constructor(steam, options = {}) {
    super();
    this.steam = steam;
    this.appid = options.appid ?? DOTA2_APPID;
    this.logger = options.logger;
    this.timers = options.timers ?? globalThis;
    this.jobTimeoutMs = normalizeTimeout(options.jobTimeoutMs, 1e4, "jobTimeoutMs");
    this.helloInitialMs = options.helloInitialMs ?? 500;
    this.helloBaseMs = options.helloBaseMs ?? 1e3;
    this.helloBackoffMaxMs = options.helloBackoffMaxMs ?? 6e4;
    this.autoGamesPlayed = options.autoGamesPlayed ?? false;
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
    const remove = this.steam.off ?? this.steam.removeListener;
    if (remove) for (const [event, listener] of this.hooks) remove.call(this.steam, event, listener);
    else this.logger?.warn?.("dota2-gc: transport has neither off() nor removeListener(); %s hooks stay attached", this.hooks.length);
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
    const decodeId = options.responseId ?? expected ?? reply.msgId;
    const codec = allMessages[decodeId];
    if (!codec) throw new NoDecoderError(decodeId, reply.payload, messageNames[decodeId]);
    try {
      return codec.decode(reply.payload);
    } catch (cause) {
      throw new Dota2GCError(`Failed to decode GC reply ${messageNames[decodeId] ?? decodeId}`, { cause });
    }
  }
  /** Sends an already-encoded payload. `callback` receives the GC reply, if any. */
  sendRaw(msgId, payload, callback) {
    if (this.destroyed) throw new NotConnectedError("Dota2GC was destroyed");
    if (!this.steam.steamID) throw new NotConnectedError();
    this.logger?.debug?.("dota2-gc: sending %s (%s), %s bytes", messageNames[msgId] ?? "unknown", msgId, payload.length);
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
      if (signal?.aborted) {
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
        signal?.removeEventListener("abort", onAbort);
      };
      function settle(error) {
        if (settled) return;
        cleanup();
        reject(error);
      }
      this.pending.add(job);
      signal?.addEventListener("abort", onAbort, { once: true });
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
      this.logger?.debug?.("dota2-gc: GC session established");
      this._haveGCSession = true;
      this._welcome = welcome;
      this.clearHelloTimer();
      this.emit("connected", this._welcome);
    });
    this.router.on(4009 /* k_EMsgGCClientConnectionStatus */, (message) => {
      const { status } = message;
      if (status === 0 /* GCConnectionStatus_HAVE_SESSION */) return;
      if (!this._haveGCSession) return;
      this.logger?.debug?.("dota2-gc: GC session lost, status %s", status);
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
      this.logger?.warn?.("dota2-gc: hello could not be sent", error);
    }
    if (this.helloTimer !== void 0 || !this._inApp || this._haveGCSession) return;
    this.helloDelayMs = Math.min(this.helloBackoffMaxMs, this.helloDelayMs ? this.helloDelayMs * 2 : this.helloBaseMs);
    this.logger?.debug?.("dota2-gc: hello sent, next attempt in %s ms", this.helloDelayMs);
    this.helloTimer = this.timers.setTimeout(() => this.sendHello(), this.helloDelayMs);
  }
  clearHelloTimer() {
    if (this.helloTimer !== void 0) this.timers.clearTimeout(this.helloTimer);
    this.helloTimer = void 0;
    this.helloDelayMs = void 0;
  }
};
export {
  DOTA2_APPID,
  Dota2GC,
  Dota2GCError,
  EDOTAGCMsg,
  EGCBaseClientMsg,
  EGCBaseMsg,
  ESOMsg,
  GCConnectionStatus,
  GCRouter,
  JobAbortedError,
  JobTimeoutError,
  NoDecoderError,
  NoEncoderError,
  NotConnectedError,
  UnexpectedResponseError,
  allMessages,
  clientMessages,
  gcMessages,
  jobResponses,
  messageNames
};
//# sourceMappingURL=index.js.map