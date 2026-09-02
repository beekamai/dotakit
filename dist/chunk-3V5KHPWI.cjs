"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/protobufs/dota_gcmessages_msgid.ts
var EDOTAGCMsg = /* @__PURE__ */ ((EDOTAGCMsg2) => {
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCDOTABase"] = 7e3] = "k_EMsgGCDOTABase";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCGameMatchSignOut"] = 7004] = "k_EMsgGCGameMatchSignOut";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCGameMatchSignOutResponse"] = 7005] = "k_EMsgGCGameMatchSignOutResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCJoinChatChannel"] = 7009] = "k_EMsgGCJoinChatChannel";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCJoinChatChannelResponse"] = 7010] = "k_EMsgGCJoinChatChannelResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCOtherJoinedChannel"] = 7013] = "k_EMsgGCOtherJoinedChannel";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCOtherLeftChannel"] = 7014] = "k_EMsgGCOtherLeftChannel";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCRequestStatus"] = 7026] = "k_EMsgServerToGCRequestStatus";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCStartFindingMatch"] = 7033] = "k_EMsgGCStartFindingMatch";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCConnectedPlayers"] = 7034] = "k_EMsgGCConnectedPlayers";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCAbandonCurrentGame"] = 7035] = "k_EMsgGCAbandonCurrentGame";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCStopFindingMatch"] = 7036] = "k_EMsgGCStopFindingMatch";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbyCreate"] = 7038] = "k_EMsgGCPracticeLobbyCreate";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbyLeave"] = 7040] = "k_EMsgGCPracticeLobbyLeave";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbyLaunch"] = 7041] = "k_EMsgGCPracticeLobbyLaunch";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbyList"] = 7042] = "k_EMsgGCPracticeLobbyList";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbyListResponse"] = 7043] = "k_EMsgGCPracticeLobbyListResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbyJoin"] = 7044] = "k_EMsgGCPracticeLobbyJoin";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbySetDetails"] = 7046] = "k_EMsgGCPracticeLobbySetDetails";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbySetTeamSlot"] = 7047] = "k_EMsgGCPracticeLobbySetTeamSlot";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCInitialQuestionnaireResponse"] = 7049] = "k_EMsgGCInitialQuestionnaireResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbyResponse"] = 7055] = "k_EMsgGCPracticeLobbyResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCBroadcastNotification"] = 7056] = "k_EMsgGCBroadcastNotification";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCLiveScoreboardUpdate"] = 7057] = "k_EMsgGCLiveScoreboardUpdate";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCRequestChatChannelList"] = 7060] = "k_EMsgGCRequestChatChannelList";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCRequestChatChannelListResponse"] = 7061] = "k_EMsgGCRequestChatChannelListResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCReadyUp"] = 7070] = "k_EMsgGCReadyUp";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCKickedFromMatchmakingQueue"] = 7071] = "k_EMsgGCKickedFromMatchmakingQueue";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCLeaverDetected"] = 7072] = "k_EMsgGCLeaverDetected";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCSpectateFriendGame"] = 7073] = "k_EMsgGCSpectateFriendGame";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCSpectateFriendGameResponse"] = 7074] = "k_EMsgGCSpectateFriendGameResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCReportsRemainingRequest"] = 7076] = "k_EMsgGCReportsRemainingRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCReportsRemainingResponse"] = 7077] = "k_EMsgGCReportsRemainingResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCSubmitPlayerReport"] = 7078] = "k_EMsgGCSubmitPlayerReport";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCSubmitPlayerReportResponse"] = 7079] = "k_EMsgGCSubmitPlayerReportResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbyKick"] = 7081] = "k_EMsgGCPracticeLobbyKick";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCSubmitPlayerReportV2"] = 7082] = "k_EMsgGCSubmitPlayerReportV2";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCSubmitPlayerReportResponseV2"] = 7083] = "k_EMsgGCSubmitPlayerReportResponseV2";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCRequestSaveGames"] = 7084] = "k_EMsgGCRequestSaveGames";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCRequestSaveGamesServer"] = 7085] = "k_EMsgGCRequestSaveGamesServer";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCRequestSaveGamesResponse"] = 7086] = "k_EMsgGCRequestSaveGamesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCLeaverDetectedResponse"] = 7087] = "k_EMsgGCLeaverDetectedResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPlayerFailedToConnect"] = 7088] = "k_EMsgGCPlayerFailedToConnect";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCGCToRelayConnect"] = 7089] = "k_EMsgGCGCToRelayConnect";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCGCToRelayConnectresponse"] = 7090] = "k_EMsgGCGCToRelayConnectresponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCWatchGame"] = 7091] = "k_EMsgGCWatchGame";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCWatchGameResponse"] = 7092] = "k_EMsgGCWatchGameResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCBanStatusRequest"] = 7093] = "k_EMsgGCBanStatusRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCBanStatusResponse"] = 7094] = "k_EMsgGCBanStatusResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCMatchDetailsRequest"] = 7095] = "k_EMsgGCMatchDetailsRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCMatchDetailsResponse"] = 7096] = "k_EMsgGCMatchDetailsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCCancelWatchGame"] = 7097] = "k_EMsgGCCancelWatchGame";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPopup"] = 7102] = "k_EMsgGCPopup";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCFriendPracticeLobbyListRequest"] = 7111] = "k_EMsgGCFriendPracticeLobbyListRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCFriendPracticeLobbyListResponse"] = 7112] = "k_EMsgGCFriendPracticeLobbyListResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbyJoinResponse"] = 7113] = "k_EMsgGCPracticeLobbyJoinResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCCreateTeam"] = 7115] = "k_EMsgGCCreateTeam";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCCreateTeamResponse"] = 7116] = "k_EMsgGCCreateTeamResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCTeamInvite_InviterToGC"] = 7122] = "k_EMsgGCTeamInvite_InviterToGC";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCTeamInvite_GCImmediateResponseToInviter"] = 7123] = "k_EMsgGCTeamInvite_GCImmediateResponseToInviter";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCTeamInvite_GCRequestToInvitee"] = 7124] = "k_EMsgGCTeamInvite_GCRequestToInvitee";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCTeamInvite_InviteeResponseToGC"] = 7125] = "k_EMsgGCTeamInvite_InviteeResponseToGC";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCTeamInvite_GCResponseToInviter"] = 7126] = "k_EMsgGCTeamInvite_GCResponseToInviter";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCTeamInvite_GCResponseToInvitee"] = 7127] = "k_EMsgGCTeamInvite_GCResponseToInvitee";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCKickTeamMember"] = 7128] = "k_EMsgGCKickTeamMember";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCKickTeamMemberResponse"] = 7129] = "k_EMsgGCKickTeamMemberResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCLeaveTeam"] = 7130] = "k_EMsgGCLeaveTeam";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCLeaveTeamResponse"] = 7131] = "k_EMsgGCLeaveTeamResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCApplyTeamToPracticeLobby"] = 7142] = "k_EMsgGCApplyTeamToPracticeLobby";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCTransferTeamAdmin"] = 7144] = "k_EMsgGCTransferTeamAdmin";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbyJoinBroadcastChannel"] = 7149] = "k_EMsgGCPracticeLobbyJoinBroadcastChannel";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGC_TournamentItemEvent"] = 7150] = "k_EMsgGC_TournamentItemEvent";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGC_TournamentItemEventResponse"] = 7151] = "k_EMsgGC_TournamentItemEventResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgTeamFanfare"] = 7156] = "k_EMsgTeamFanfare";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgResponseTeamFanfare"] = 7157] = "k_EMsgResponseTeamFanfare";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCEditTeamDetails"] = 7166] = "k_EMsgGCEditTeamDetails";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCEditTeamDetailsResponse"] = 7167] = "k_EMsgGCEditTeamDetailsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCReadyUpStatus"] = 7170] = "k_EMsgGCReadyUpStatus";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCMatchCompleted"] = 7186] = "k_EMsgGCToGCMatchCompleted";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCBalancedShuffleLobby"] = 7188] = "k_EMsgGCBalancedShuffleLobby";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCMatchmakingStatsRequest"] = 7197] = "k_EMsgGCMatchmakingStatsRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCMatchmakingStatsResponse"] = 7198] = "k_EMsgGCMatchmakingStatsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCBotGameCreate"] = 7199] = "k_EMsgGCBotGameCreate";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCSetMatchHistoryAccess"] = 7200] = "k_EMsgGCSetMatchHistoryAccess";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCSetMatchHistoryAccessResponse"] = 7201] = "k_EMsgGCSetMatchHistoryAccessResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgUpgradeLeagueItem"] = 7203] = "k_EMsgUpgradeLeagueItem";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgUpgradeLeagueItemResponse"] = 7204] = "k_EMsgUpgradeLeagueItemResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCWatchDownloadedReplay"] = 7206] = "k_EMsgGCWatchDownloadedReplay";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientsRejoinChatChannels"] = 7217] = "k_EMsgClientsRejoinChatChannels";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetUserChatInfo"] = 7218] = "k_EMsgGCToGCGetUserChatInfo";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetUserChatInfoResponse"] = 7219] = "k_EMsgGCToGCGetUserChatInfoResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCLeaveAllChatChannels"] = 7220] = "k_EMsgGCToGCLeaveAllChatChannels";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCUpdateAccountChatBan"] = 7221] = "k_EMsgGCToGCUpdateAccountChatBan";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCCanInviteUserToTeam"] = 7234] = "k_EMsgGCToGCCanInviteUserToTeam";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCCanInviteUserToTeamResponse"] = 7235] = "k_EMsgGCToGCCanInviteUserToTeamResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetUserRank"] = 7236] = "k_EMsgGCToGCGetUserRank";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetUserRankResponse"] = 7237] = "k_EMsgGCToGCGetUserRankResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCAdjustUserRank"] = 7238] = "k_EMsgGCToGCAdjustUserRank";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCAdjustUserRankResponse"] = 7239] = "k_EMsgGCToGCAdjustUserRankResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCUpdateTeamStats"] = 7240] = "k_EMsgGCToGCUpdateTeamStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCValidateTeam"] = 7241] = "k_EMsgGCToGCValidateTeam";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCValidateTeamResponse"] = 7242] = "k_EMsgGCToGCValidateTeamResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetLeagueAdmin"] = 7255] = "k_EMsgGCToGCGetLeagueAdmin";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetLeagueAdminResponse"] = 7256] = "k_EMsgGCToGCGetLeagueAdminResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCLeaveChatChannel"] = 7272] = "k_EMsgGCLeaveChatChannel";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCChatMessage"] = 7273] = "k_EMsgGCChatMessage";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCGetHeroStandings"] = 7274] = "k_EMsgGCGetHeroStandings";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCGetHeroStandingsResponse"] = 7275] = "k_EMsgGCGetHeroStandingsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCItemEditorReservationsRequest"] = 7283] = "k_EMsgGCItemEditorReservationsRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCItemEditorReservationsResponse"] = 7284] = "k_EMsgGCItemEditorReservationsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCItemEditorReserveItemDef"] = 7285] = "k_EMsgGCItemEditorReserveItemDef";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCItemEditorReserveItemDefResponse"] = 7286] = "k_EMsgGCItemEditorReserveItemDefResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCItemEditorReleaseReservation"] = 7287] = "k_EMsgGCItemEditorReleaseReservation";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCItemEditorReleaseReservationResponse"] = 7288] = "k_EMsgGCItemEditorReleaseReservationResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCFantasyLivePlayerStats"] = 7308] = "k_EMsgGCFantasyLivePlayerStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCFantasyFinalPlayerStats"] = 7309] = "k_EMsgGCFantasyFinalPlayerStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCFlipLobbyTeams"] = 7320] = "k_EMsgGCFlipLobbyTeams";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCEvaluateReportedPlayer"] = 7322] = "k_EMsgGCToGCEvaluateReportedPlayer";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCEvaluateReportedPlayerResponse"] = 7323] = "k_EMsgGCToGCEvaluateReportedPlayerResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCProcessPlayerReportForTarget"] = 7324] = "k_EMsgGCToGCProcessPlayerReportForTarget";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCProcessReportSuccess"] = 7325] = "k_EMsgGCToGCProcessReportSuccess";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCNotifyAccountFlagsChange"] = 7326] = "k_EMsgGCNotifyAccountFlagsChange";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCSetProfilePrivacy"] = 7327] = "k_EMsgGCSetProfilePrivacy";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCSetProfilePrivacyResponse"] = 7328] = "k_EMsgGCSetProfilePrivacyResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCClientSuspended"] = 7342] = "k_EMsgGCClientSuspended";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPartyMemberSetCoach"] = 7343] = "k_EMsgGCPartyMemberSetCoach";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbySetCoach"] = 7346] = "k_EMsgGCPracticeLobbySetCoach";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCChatModeratorBan"] = 7359] = "k_EMsgGCChatModeratorBan";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCLobbyUpdateBroadcastChannelInfo"] = 7367] = "k_EMsgGCLobbyUpdateBroadcastChannelInfo";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGrantTournamentItem"] = 7372] = "k_EMsgGCToGCGrantTournamentItem";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCUpgradeTwitchViewerItems"] = 7375] = "k_EMsgGCToGCUpgradeTwitchViewerItems";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetLiveMatchAffiliates"] = 7376] = "k_EMsgGCToGCGetLiveMatchAffiliates";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetLiveMatchAffiliatesResponse"] = 7377] = "k_EMsgGCToGCGetLiveMatchAffiliatesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCUpdatePlayerPennantCounts"] = 7378] = "k_EMsgGCToGCUpdatePlayerPennantCounts";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetPlayerPennantCounts"] = 7379] = "k_EMsgGCToGCGetPlayerPennantCounts";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetPlayerPennantCountsResponse"] = 7380] = "k_EMsgGCToGCGetPlayerPennantCountsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCGameMatchSignOutPermissionRequest"] = 7381] = "k_EMsgGCGameMatchSignOutPermissionRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCGameMatchSignOutPermissionResponse"] = 7382] = "k_EMsgGCGameMatchSignOutPermissionResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTAAwardEventPoints"] = 7384] = "k_EMsgDOTAAwardEventPoints";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTAGetEventPoints"] = 7387] = "k_EMsgDOTAGetEventPoints";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTAGetEventPointsResponse"] = 7388] = "k_EMsgDOTAGetEventPointsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPartyLeaderWatchGamePrompt"] = 7397] = "k_EMsgGCPartyLeaderWatchGamePrompt";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCCompendiumSetSelection"] = 7405] = "k_EMsgGCCompendiumSetSelection";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCCompendiumDataRequest"] = 7406] = "k_EMsgGCCompendiumDataRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCCompendiumDataResponse"] = 7407] = "k_EMsgGCCompendiumDataResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTAGetPlayerMatchHistory"] = 7408] = "k_EMsgDOTAGetPlayerMatchHistory";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTAGetPlayerMatchHistoryResponse"] = 7409] = "k_EMsgDOTAGetPlayerMatchHistoryResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCMatchmakingAddParty"] = 7410] = "k_EMsgGCToGCMatchmakingAddParty";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCMatchmakingRemoveParty"] = 7411] = "k_EMsgGCToGCMatchmakingRemoveParty";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCMatchmakingRemoveAllParties"] = 7412] = "k_EMsgGCToGCMatchmakingRemoveAllParties";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCMatchmakingMatchFound"] = 7413] = "k_EMsgGCToGCMatchmakingMatchFound";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCUpdateMatchManagementStats"] = 7414] = "k_EMsgGCToGCUpdateMatchManagementStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCUpdateMatchmakingStats"] = 7415] = "k_EMsgGCToGCUpdateMatchmakingStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToServerPingRequest"] = 7416] = "k_EMsgGCToServerPingRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToServerPingResponse"] = 7417] = "k_EMsgGCToServerPingResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToServerEvaluateToxicChat"] = 7418] = "k_EMsgGCToServerEvaluateToxicChat";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCEvaluateToxicChat"] = 7419] = "k_EMsgServerToGCEvaluateToxicChat";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCEvaluateToxicChatResponse"] = 7420] = "k_EMsgServerToGCEvaluateToxicChatResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCProcessMatchLeaver"] = 7426] = "k_EMsgGCToGCProcessMatchLeaver";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCNotificationsRequest"] = 7427] = "k_EMsgGCNotificationsRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCNotificationsResponse"] = 7428] = "k_EMsgGCNotificationsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCModifyNotification"] = 7429] = "k_EMsgGCToGCModifyNotification";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCLeagueAdminList"] = 7434] = "k_EMsgGCLeagueAdminList";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCNotificationsMarkReadRequest"] = 7435] = "k_EMsgGCNotificationsMarkReadRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCRequestBatchPlayerResources"] = 7450] = "k_EMsgServerToGCRequestBatchPlayerResources";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCRequestBatchPlayerResourcesResponse"] = 7451] = "k_EMsgServerToGCRequestBatchPlayerResourcesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCCompendiumSetSelectionResponse"] = 7453] = "k_EMsgGCCompendiumSetSelectionResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCRankedPlayerInfoSubmit"] = 7454] = "k_EMsgGCRankedPlayerInfoSubmit";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCRankedPlayerInfoSubmitResponse"] = 7455] = "k_EMsgGCRankedPlayerInfoSubmitResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPlayerInfoSubmit"] = 7456] = "k_EMsgGCPlayerInfoSubmit";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPlayerInfoSubmitResponse"] = 7457] = "k_EMsgGCPlayerInfoSubmitResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetAccountLevel"] = 7458] = "k_EMsgGCToGCGetAccountLevel";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetAccountLevelResponse"] = 7459] = "k_EMsgGCToGCGetAccountLevelResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTAGetWeekendTourneySchedule"] = 7464] = "k_EMsgDOTAGetWeekendTourneySchedule";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTAWeekendTourneySchedule"] = 7465] = "k_EMsgDOTAWeekendTourneySchedule";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCJoinableCustomGameModesRequest"] = 7466] = "k_EMsgGCJoinableCustomGameModesRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCJoinableCustomGameModesResponse"] = 7467] = "k_EMsgGCJoinableCustomGameModesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCJoinableCustomLobbiesRequest"] = 7468] = "k_EMsgGCJoinableCustomLobbiesRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCJoinableCustomLobbiesResponse"] = 7469] = "k_EMsgGCJoinableCustomLobbiesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCQuickJoinCustomLobby"] = 7470] = "k_EMsgGCQuickJoinCustomLobby";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCQuickJoinCustomLobbyResponse"] = 7471] = "k_EMsgGCQuickJoinCustomLobbyResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGrantEventPointAction"] = 7472] = "k_EMsgGCToGCGrantEventPointAction";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCSetCompendiumSelection"] = 7478] = "k_EMsgGCToGCSetCompendiumSelection";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCHasItemQuery"] = 7484] = "k_EMsgGCHasItemQuery";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCHasItemResponse"] = 7485] = "k_EMsgGCHasItemResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGrantEventPointActionMsg"] = 7488] = "k_EMsgGCToGCGrantEventPointActionMsg";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetCompendiumSelections"] = 7492] = "k_EMsgGCToGCGetCompendiumSelections";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetCompendiumSelectionsResponse"] = 7493] = "k_EMsgGCToGCGetCompendiumSelectionsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCMatchConnectionStats"] = 7494] = "k_EMsgServerToGCMatchConnectionStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientTournamentItemDrop"] = 7495] = "k_EMsgGCToClientTournamentItemDrop";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSQLDelayedGrantLeagueDrop"] = 7496] = "k_EMsgSQLDelayedGrantLeagueDrop";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerGCUpdateSpectatorCount"] = 7497] = "k_EMsgServerGCUpdateSpectatorCount";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCEmoticonUnlock"] = 7501] = "k_EMsgGCToGCEmoticonUnlock";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutDraftInfo"] = 7502] = "k_EMsgSignOutDraftInfo";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCEmoticonDataRequest"] = 7503] = "k_EMsgClientToGCEmoticonDataRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientEmoticonData"] = 7504] = "k_EMsgGCToClientEmoticonData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbyToggleBroadcastChannelCameramanStatus"] = 7505] = "k_EMsgGCPracticeLobbyToggleBroadcastChannelCameramanStatus";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTARedeemItem"] = 7518] = "k_EMsgDOTARedeemItem";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTARedeemItemResponse"] = 7519] = "k_EMsgDOTARedeemItemResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetAllHeroProgress"] = 7521] = "k_EMsgClientToGCGetAllHeroProgress";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetAllHeroProgressResponse"] = 7522] = "k_EMsgClientToGCGetAllHeroProgressResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetServerForClient"] = 7523] = "k_EMsgGCToGCGetServerForClient";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetServerForClientResponse"] = 7524] = "k_EMsgGCToGCGetServerForClientResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSQLProcessTournamentGameOutcome"] = 7525] = "k_EMsgSQLProcessTournamentGameOutcome";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSQLGrantTrophyToAccount"] = 7526] = "k_EMsgSQLGrantTrophyToAccount";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetTrophyList"] = 7527] = "k_EMsgClientToGCGetTrophyList";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetTrophyListResponse"] = 7528] = "k_EMsgClientToGCGetTrophyListResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientTrophyAwarded"] = 7529] = "k_EMsgGCToClientTrophyAwarded";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCGameBotMatchSignOut"] = 7530] = "k_EMsgGCGameBotMatchSignOut";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCGameBotMatchSignOutPermissionRequest"] = 7531] = "k_EMsgGCGameBotMatchSignOutPermissionRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutBotInfo"] = 7532] = "k_EMsgSignOutBotInfo";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCUpdateProfileCards"] = 7533] = "k_EMsgGCToGCUpdateProfileCards";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetProfileCard"] = 7534] = "k_EMsgClientToGCGetProfileCard";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetProfileCardResponse"] = 7535] = "k_EMsgClientToGCGetProfileCardResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetBattleReport"] = 7536] = "k_EMsgClientToGCGetBattleReport";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetBattleReportResponse"] = 7537] = "k_EMsgClientToGCGetBattleReportResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetProfileCardSlots"] = 7538] = "k_EMsgClientToGCSetProfileCardSlots";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientProfileCardUpdated"] = 7539] = "k_EMsgGCToClientProfileCardUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCVictoryPredictions"] = 7540] = "k_EMsgServerToGCVictoryPredictions";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetBattleReportAggregateStats"] = 7541] = "k_EMsgClientToGCGetBattleReportAggregateStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetBattleReportAggregateStatsResponse"] = 7542] = "k_EMsgClientToGCGetBattleReportAggregateStatsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetBattleReportInfo"] = 7543] = "k_EMsgClientToGCGetBattleReportInfo";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetBattleReportInfoResponse"] = 7544] = "k_EMsgClientToGCGetBattleReportInfoResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutCommunicationSummary"] = 7545] = "k_EMsgSignOutCommunicationSummary";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCRequestStatus_Response"] = 7546] = "k_EMsgServerToGCRequestStatus_Response";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCreateHeroStatue"] = 7547] = "k_EMsgClientToGCCreateHeroStatue";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientHeroStatueCreateResult"] = 7548] = "k_EMsgGCToClientHeroStatueCreateResult";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCGCToLANServerRelayConnect"] = 7549] = "k_EMsgGCGCToLANServerRelayConnect";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCAcknowledgeBattleReport"] = 7550] = "k_EMsgClientToGCAcknowledgeBattleReport";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCAcknowledgeBattleReportResponse"] = 7551] = "k_EMsgClientToGCAcknowledgeBattleReportResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetBattleReportMatchHistory"] = 7552] = "k_EMsgClientToGCGetBattleReportMatchHistory";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetBattleReportMatchHistoryResponse"] = 7553] = "k_EMsgClientToGCGetBattleReportMatchHistoryResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCReportKillSummaries"] = 7554] = "k_EMsgServerToGCReportKillSummaries";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCUpdatePlayerPredictions"] = 7561] = "k_EMsgGCToGCUpdatePlayerPredictions";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToServerPredictionResult"] = 7562] = "k_EMsgGCToServerPredictionResult";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCReplayMonitorValidateReplay"] = 7569] = "k_EMsgGCToGCReplayMonitorValidateReplay";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgLobbyEventPoints"] = 7572] = "k_EMsgLobbyEventPoints";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetCustomGameTickets"] = 7573] = "k_EMsgGCToGCGetCustomGameTickets";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetCustomGameTicketsResponse"] = 7574] = "k_EMsgGCToGCGetCustomGameTicketsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCCustomGamePlayed"] = 7576] = "k_EMsgGCToGCCustomGamePlayed";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGrantEventPointsToUser"] = 7577] = "k_EMsgGCToGCGrantEventPointsToUser";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGameserverCrashReport"] = 7579] = "k_EMsgGameserverCrashReport";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGameserverCrashReportResponse"] = 7580] = "k_EMsgGameserverCrashReportResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientSteamDatagramTicket"] = 7581] = "k_EMsgGCToClientSteamDatagramTicket";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCSendAccountsEventPoints"] = 7583] = "k_EMsgGCToGCSendAccountsEventPoints";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRerollPlayerChallenge"] = 7584] = "k_EMsgClientToGCRerollPlayerChallenge";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCRerollPlayerChallenge"] = 7585] = "k_EMsgServerToGCRerollPlayerChallenge";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCRerollPlayerChallengeResponse"] = 7586] = "k_EMsgGCRerollPlayerChallengeResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutUpdatePlayerChallenge"] = 7587] = "k_EMsgSignOutUpdatePlayerChallenge";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetPartyLeader"] = 7588] = "k_EMsgClientToGCSetPartyLeader";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCancelPartyInvites"] = 7589] = "k_EMsgClientToGCCancelPartyInvites";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSQLGrantLeagueMatchToTicketHolders"] = 7592] = "k_EMsgSQLGrantLeagueMatchToTicketHolders";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCEmoticonUnlockNoRollback"] = 7594] = "k_EMsgGCToGCEmoticonUnlockNoRollback";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCApplyGemCombiner"] = 7603] = "k_EMsgClientToGCApplyGemCombiner";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetAllHeroOrder"] = 7606] = "k_EMsgClientToGCGetAllHeroOrder";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetAllHeroOrderResponse"] = 7607] = "k_EMsgClientToGCGetAllHeroOrderResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSQLGCToGCGrantBadgePoints"] = 7608] = "k_EMsgSQLGCToGCGrantBadgePoints";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCCheckOwnsEntireEmoticonRange"] = 7611] = "k_EMsgGCToGCCheckOwnsEntireEmoticonRange";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCCheckOwnsEntireEmoticonRangeResponse"] = 7612] = "k_EMsgGCToGCCheckOwnsEntireEmoticonRangeResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientRequestLaneSelection"] = 7623] = "k_EMsgGCToClientRequestLaneSelection";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientRequestLaneSelectionResponse"] = 7624] = "k_EMsgGCToClientRequestLaneSelectionResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCCavernCrawlIsHeroActive"] = 7625] = "k_EMsgServerToGCCavernCrawlIsHeroActive";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCCavernCrawlIsHeroActiveResponse"] = 7626] = "k_EMsgServerToGCCavernCrawlIsHeroActiveResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPlayerCardSpecificPurchaseRequest"] = 7627] = "k_EMsgClientToGCPlayerCardSpecificPurchaseRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPlayerCardSpecificPurchaseResponse"] = 7628] = "k_EMsgClientToGCPlayerCardSpecificPurchaseResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSQLSetIsLeagueAdmin"] = 7630] = "k_EMsgSQLSetIsLeagueAdmin";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetLiveLeagueMatches"] = 7631] = "k_EMsgGCToGCGetLiveLeagueMatches";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetLiveLeagueMatchesResponse"] = 7632] = "k_EMsgGCToGCGetLiveLeagueMatchesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTALeagueInfoListAdminsRequest"] = 7633] = "k_EMsgDOTALeagueInfoListAdminsRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTALeagueInfoListAdminsReponse"] = 7634] = "k_EMsgDOTALeagueInfoListAdminsReponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCLeagueMatchStarted"] = 7645] = "k_EMsgGCToGCLeagueMatchStarted";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCLeagueMatchCompleted"] = 7646] = "k_EMsgGCToGCLeagueMatchCompleted";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCLeagueMatchStartedResponse"] = 7647] = "k_EMsgGCToGCLeagueMatchStartedResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTALeagueAvailableLobbyNodesRequest"] = 7650] = "k_EMsgDOTALeagueAvailableLobbyNodesRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTALeagueAvailableLobbyNodes"] = 7651] = "k_EMsgDOTALeagueAvailableLobbyNodes";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCLeagueRequest"] = 7652] = "k_EMsgGCToGCLeagueRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCLeagueResponse"] = 7653] = "k_EMsgGCToGCLeagueResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCLeagueNodeGroupRequest"] = 7654] = "k_EMsgGCToGCLeagueNodeGroupRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCLeagueNodeGroupResponse"] = 7655] = "k_EMsgGCToGCLeagueNodeGroupResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCLeagueNodeRequest"] = 7656] = "k_EMsgGCToGCLeagueNodeRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCLeagueNodeResponse"] = 7657] = "k_EMsgGCToGCLeagueNodeResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCRealtimeStatsTerseRequest"] = 7658] = "k_EMsgGCToGCRealtimeStatsTerseRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCRealtimeStatsTerseResponse"] = 7659] = "k_EMsgGCToGCRealtimeStatsTerseResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetTopMatchesRequest"] = 7660] = "k_EMsgGCToGCGetTopMatchesRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetTopMatchesResponse"] = 7661] = "k_EMsgGCToGCGetTopMatchesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetFilteredPlayers"] = 7662] = "k_EMsgClientToGCGetFilteredPlayers";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientGetFilteredPlayersResponse"] = 7663] = "k_EMsgGCToClientGetFilteredPlayersResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRemoveFilteredPlayer"] = 7664] = "k_EMsgClientToGCRemoveFilteredPlayer";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientRemoveFilteredPlayerResponse"] = 7665] = "k_EMsgGCToClientRemoveFilteredPlayerResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientPlayerBeaconState"] = 7666] = "k_EMsgGCToClientPlayerBeaconState";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientPartyBeaconUpdate"] = 7667] = "k_EMsgGCToClientPartyBeaconUpdate";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientPartySearchInvite"] = 7668] = "k_EMsgGCToClientPartySearchInvite";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUpdatePartyBeacon"] = 7669] = "k_EMsgClientToGCUpdatePartyBeacon";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestActiveBeaconParties"] = 7670] = "k_EMsgClientToGCRequestActiveBeaconParties";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientRequestActiveBeaconPartiesResponse"] = 7671] = "k_EMsgGCToClientRequestActiveBeaconPartiesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCManageFavorites"] = 7672] = "k_EMsgClientToGCManageFavorites";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientManageFavoritesResponse"] = 7673] = "k_EMsgGCToClientManageFavoritesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCJoinPartyFromBeacon"] = 7674] = "k_EMsgClientToGCJoinPartyFromBeacon";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientJoinPartyFromBeaconResponse"] = 7675] = "k_EMsgGCToClientJoinPartyFromBeaconResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetFavoritePlayers"] = 7676] = "k_EMsgClientToGCGetFavoritePlayers";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientGetFavoritePlayersResponse"] = 7677] = "k_EMsgGCToClientGetFavoritePlayersResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCVerifyFavoritePlayers"] = 7678] = "k_EMsgClientToGCVerifyFavoritePlayers";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientVerifyFavoritePlayersResponse"] = 7679] = "k_EMsgGCToClientVerifyFavoritePlayersResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientPartySearchInvites"] = 7680] = "k_EMsgGCToClientPartySearchInvites";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientRequestMMInfo"] = 7681] = "k_EMsgGCToClientRequestMMInfo";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCMMInfo"] = 7682] = "k_EMsgClientToGCMMInfo";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutTextMuteInfo"] = 7683] = "k_EMsgSignOutTextMuteInfo";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPurchaseLabyrinthBlessings"] = 7684] = "k_EMsgClientToGCPurchaseLabyrinthBlessings";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse"] = 7685] = "k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPurchaseFilteredPlayerSlot"] = 7686] = "k_EMsgClientToGCPurchaseFilteredPlayerSlot";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse"] = 7687] = "k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUpdateFilteredPlayerNote"] = 7688] = "k_EMsgClientToGCUpdateFilteredPlayerNote";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientUpdateFilteredPlayerNoteResponse"] = 7689] = "k_EMsgGCToClientUpdateFilteredPlayerNoteResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCClaimSwag"] = 7690] = "k_EMsgClientToGCClaimSwag";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientClaimSwagResponse"] = 7691] = "k_EMsgGCToClientClaimSwagResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCLockCharmTrading"] = 8004] = "k_EMsgServerToGCLockCharmTrading";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPlayerStatsRequest"] = 8006] = "k_EMsgClientToGCPlayerStatsRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientPlayerStatsResponse"] = 8007] = "k_EMsgGCToClientPlayerStatsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCClearPracticeLobbyTeam"] = 8008] = "k_EMsgGCClearPracticeLobbyTeam";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFindTopSourceTVGames"] = 8009] = "k_EMsgClientToGCFindTopSourceTVGames";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientFindTopSourceTVGamesResponse"] = 8010] = "k_EMsgGCToClientFindTopSourceTVGamesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCLobbyList"] = 8011] = "k_EMsgGCLobbyList";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCLobbyListResponse"] = 8012] = "k_EMsgGCLobbyListResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPlayerStatsMatchSignOut"] = 8013] = "k_EMsgGCPlayerStatsMatchSignOut";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSocialFeedPostCommentRequest"] = 8016] = "k_EMsgClientToGCSocialFeedPostCommentRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientSocialFeedPostCommentResponse"] = 8017] = "k_EMsgGCToClientSocialFeedPostCommentResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCustomGamesFriendsPlayedRequest"] = 8018] = "k_EMsgClientToGCCustomGamesFriendsPlayedRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientCustomGamesFriendsPlayedResponse"] = 8019] = "k_EMsgGCToClientCustomGamesFriendsPlayedResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFriendsPlayedCustomGameRequest"] = 8020] = "k_EMsgClientToGCFriendsPlayedCustomGameRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientFriendsPlayedCustomGameResponse"] = 8021] = "k_EMsgGCToClientFriendsPlayedCustomGameResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCTopCustomGamesList"] = 8024] = "k_EMsgGCTopCustomGamesList";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetPartyOpen"] = 8029] = "k_EMsgClientToGCSetPartyOpen";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCMergePartyInvite"] = 8030] = "k_EMsgClientToGCMergePartyInvite";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientMergeGroupInviteReply"] = 8031] = "k_EMsgGCToClientMergeGroupInviteReply";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCMergePartyResponse"] = 8032] = "k_EMsgClientToGCMergePartyResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientMergePartyResponseReply"] = 8033] = "k_EMsgGCToClientMergePartyResponseReply";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetProfileCardStats"] = 8034] = "k_EMsgClientToGCGetProfileCardStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetProfileCardStatsResponse"] = 8035] = "k_EMsgClientToGCGetProfileCardStatsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCTopLeagueMatchesRequest"] = 8036] = "k_EMsgClientToGCTopLeagueMatchesRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCTopFriendMatchesRequest"] = 8037] = "k_EMsgClientToGCTopFriendMatchesRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientProfileCardStatsUpdated"] = 8040] = "k_EMsgGCToClientProfileCardStatsUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCRealtimeStats"] = 8041] = "k_EMsgServerToGCRealtimeStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToServerRealtimeStatsStartStop"] = 8042] = "k_EMsgGCToServerRealtimeStatsStartStop";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetServersForClients"] = 8045] = "k_EMsgGCToGCGetServersForClients";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetServersForClientsResponse"] = 8046] = "k_EMsgGCToGCGetServersForClientsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbyKickFromTeam"] = 8047] = "k_EMsgGCPracticeLobbyKickFromTeam";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTAChatGetMemberCount"] = 8048] = "k_EMsgDOTAChatGetMemberCount";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTAChatGetMemberCountResponse"] = 8049] = "k_EMsgDOTAChatGetMemberCountResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSocialFeedPostMessageRequest"] = 8050] = "k_EMsgClientToGCSocialFeedPostMessageRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientSocialFeedPostMessageResponse"] = 8051] = "k_EMsgGCToClientSocialFeedPostMessageResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgCustomGameListenServerStartedLoading"] = 8052] = "k_EMsgCustomGameListenServerStartedLoading";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgCustomGameClientFinishedLoading"] = 8053] = "k_EMsgCustomGameClientFinishedLoading";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCPracticeLobbyCloseBroadcastChannel"] = 8054] = "k_EMsgGCPracticeLobbyCloseBroadcastChannel";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCStartFindingMatchResponse"] = 8055] = "k_EMsgGCStartFindingMatchResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSQLGCToGCGrantAccountFlag"] = 8057] = "k_EMsgSQLGCToGCGrantAccountFlag";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientTopLeagueMatchesResponse"] = 8061] = "k_EMsgGCToClientTopLeagueMatchesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientTopFriendMatchesResponse"] = 8062] = "k_EMsgGCToClientTopFriendMatchesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCMatchesMinimalRequest"] = 8063] = "k_EMsgClientToGCMatchesMinimalRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCMatchesMinimalResponse"] = 8064] = "k_EMsgClientToGCMatchesMinimalResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientChatRegionsEnabled"] = 8067] = "k_EMsgGCToClientChatRegionsEnabled";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPingData"] = 8068] = "k_EMsgClientToGCPingData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCEnsureAccountInParty"] = 8071] = "k_EMsgGCToGCEnsureAccountInParty";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCEnsureAccountInPartyResponse"] = 8072] = "k_EMsgGCToGCEnsureAccountInPartyResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetProfileTickets"] = 8073] = "k_EMsgClientToGCGetProfileTickets";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetProfileTicketsResponse"] = 8074] = "k_EMsgClientToGCGetProfileTicketsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientMatchGroupsVersion"] = 8075] = "k_EMsgGCToClientMatchGroupsVersion";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCH264Unsupported"] = 8076] = "k_EMsgClientToGCH264Unsupported";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetQuestProgress"] = 8078] = "k_EMsgClientToGCGetQuestProgress";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetQuestProgressResponse"] = 8079] = "k_EMsgClientToGCGetQuestProgressResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutXPCoins"] = 8080] = "k_EMsgSignOutXPCoins";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientMatchSignedOut"] = 8081] = "k_EMsgGCToClientMatchSignedOut";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCGetHeroStatsHistory"] = 8082] = "k_EMsgGCGetHeroStatsHistory";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCGetHeroStatsHistoryResponse"] = 8083] = "k_EMsgGCGetHeroStatsHistoryResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPrivateChatInvite"] = 8084] = "k_EMsgClientToGCPrivateChatInvite";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPrivateChatKick"] = 8088] = "k_EMsgClientToGCPrivateChatKick";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPrivateChatPromote"] = 8089] = "k_EMsgClientToGCPrivateChatPromote";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPrivateChatDemote"] = 8090] = "k_EMsgClientToGCPrivateChatDemote";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientPrivateChatResponse"] = 8091] = "k_EMsgGCToClientPrivateChatResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCLatestConductScorecardRequest"] = 8095] = "k_EMsgClientToGCLatestConductScorecardRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCLatestConductScorecard"] = 8096] = "k_EMsgClientToGCLatestConductScorecard";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCWageringRequest"] = 8099] = "k_EMsgClientToGCWageringRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientWageringResponse"] = 8100] = "k_EMsgGCToClientWageringResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCEventGoalsRequest"] = 8103] = "k_EMsgClientToGCEventGoalsRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCEventGoalsResponse"] = 8104] = "k_EMsgClientToGCEventGoalsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCLeaguePredictionsUpdate"] = 8108] = "k_EMsgGCToGCLeaguePredictionsUpdate";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCAddUserToPostGameChat"] = 8110] = "k_EMsgGCToGCAddUserToPostGameChat";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCHasPlayerVotedForMVP"] = 8111] = "k_EMsgClientToGCHasPlayerVotedForMVP";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCHasPlayerVotedForMVPResponse"] = 8112] = "k_EMsgClientToGCHasPlayerVotedForMVPResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCVoteForMVP"] = 8113] = "k_EMsgClientToGCVoteForMVP";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCVoteForMVPResponse"] = 8114] = "k_EMsgClientToGCVoteForMVPResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetEventParticipation"] = 8115] = "k_EMsgGCToGCGetEventParticipation";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetEventParticipationResponse"] = 8116] = "k_EMsgGCToGCGetEventParticipationResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientAutomatedTournamentStateChange"] = 8117] = "k_EMsgGCToClientAutomatedTournamentStateChange";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCWeekendTourneyOpts"] = 8118] = "k_EMsgClientToGCWeekendTourneyOpts";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCWeekendTourneyOptsResponse"] = 8119] = "k_EMsgClientToGCWeekendTourneyOptsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCWeekendTourneyLeave"] = 8120] = "k_EMsgClientToGCWeekendTourneyLeave";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCWeekendTourneyLeaveResponse"] = 8121] = "k_EMsgClientToGCWeekendTourneyLeaveResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCTeammateStatsRequest"] = 8124] = "k_EMsgClientToGCTeammateStatsRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCTeammateStatsResponse"] = 8125] = "k_EMsgClientToGCTeammateStatsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetGiftPermissions"] = 8126] = "k_EMsgClientToGCGetGiftPermissions";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetGiftPermissionsResponse"] = 8127] = "k_EMsgClientToGCGetGiftPermissionsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCVoteForArcana"] = 8128] = "k_EMsgClientToGCVoteForArcana";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCVoteForArcanaResponse"] = 8129] = "k_EMsgClientToGCVoteForArcanaResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestArcanaVotesRemaining"] = 8130] = "k_EMsgClientToGCRequestArcanaVotesRemaining";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestArcanaVotesRemainingResponse"] = 8131] = "k_EMsgClientToGCRequestArcanaVotesRemainingResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCTransferTeamAdminResponse"] = 8132] = "k_EMsgGCTransferTeamAdminResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientTeamInfo"] = 8135] = "k_EMsgGCToClientTeamInfo";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientTeamsInfo"] = 8136] = "k_EMsgGCToClientTeamsInfo";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCMyTeamInfoRequest"] = 8137] = "k_EMsgClientToGCMyTeamInfoRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPublishUserStat"] = 8140] = "k_EMsgClientToGCPublishUserStat";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCSignoutSpendWager"] = 8141] = "k_EMsgGCToGCSignoutSpendWager";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCSubmitLobbyMVPVote"] = 8144] = "k_EMsgGCSubmitLobbyMVPVote";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCSubmitLobbyMVPVoteResponse"] = 8145] = "k_EMsgGCSubmitLobbyMVPVoteResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutCommunityGoalProgress"] = 8150] = "k_EMsgSignOutCommunityGoalProgress";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientLobbyMVPAwarded"] = 8152] = "k_EMsgGCToClientLobbyMVPAwarded";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientQuestProgressUpdated"] = 8153] = "k_EMsgGCToClientQuestProgressUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientWageringUpdate"] = 8154] = "k_EMsgGCToClientWageringUpdate";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientArcanaVotesUpdate"] = 8155] = "k_EMsgGCToClientArcanaVotesUpdate";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetSpectatorLobbyDetails"] = 8157] = "k_EMsgClientToGCSetSpectatorLobbyDetails";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetSpectatorLobbyDetailsResponse"] = 8158] = "k_EMsgClientToGCSetSpectatorLobbyDetailsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCreateSpectatorLobby"] = 8159] = "k_EMsgClientToGCCreateSpectatorLobby";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCreateSpectatorLobbyResponse"] = 8160] = "k_EMsgClientToGCCreateSpectatorLobbyResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSpectatorLobbyList"] = 8161] = "k_EMsgClientToGCSpectatorLobbyList";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSpectatorLobbyListResponse"] = 8162] = "k_EMsgClientToGCSpectatorLobbyListResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSpectatorLobbyGameDetails"] = 8163] = "k_EMsgSpectatorLobbyGameDetails";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCCompendiumInGamePredictionResults"] = 8166] = "k_EMsgServerToGCCompendiumInGamePredictionResults";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCCloseCompendiumInGamePredictionVoting"] = 8167] = "k_EMsgServerToGCCloseCompendiumInGamePredictionVoting";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOpenPlayerCardPack"] = 8168] = "k_EMsgClientToGCOpenPlayerCardPack";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOpenPlayerCardPackResponse"] = 8169] = "k_EMsgClientToGCOpenPlayerCardPackResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSelectCompendiumInGamePrediction"] = 8170] = "k_EMsgClientToGCSelectCompendiumInGamePrediction";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSelectCompendiumInGamePredictionResponse"] = 8171] = "k_EMsgClientToGCSelectCompendiumInGamePredictionResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCWeekendTourneyGetPlayerStats"] = 8172] = "k_EMsgClientToGCWeekendTourneyGetPlayerStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCWeekendTourneyGetPlayerStatsResponse"] = 8173] = "k_EMsgClientToGCWeekendTourneyGetPlayerStatsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRecyclePlayerCard"] = 8174] = "k_EMsgClientToGCRecyclePlayerCard";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRecyclePlayerCardResponse"] = 8175] = "k_EMsgClientToGCRecyclePlayerCardResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCreatePlayerCardPack"] = 8176] = "k_EMsgClientToGCCreatePlayerCardPack";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCreatePlayerCardPackResponse"] = 8177] = "k_EMsgClientToGCCreatePlayerCardPackResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetPlayerCardRosterRequest"] = 8178] = "k_EMsgClientToGCGetPlayerCardRosterRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetPlayerCardRosterResponse"] = 8179] = "k_EMsgClientToGCGetPlayerCardRosterResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetPlayerCardRosterRequest"] = 8180] = "k_EMsgClientToGCSetPlayerCardRosterRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetPlayerCardRosterResponse"] = 8181] = "k_EMsgClientToGCSetPlayerCardRosterResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCCloseCompendiumInGamePredictionVotingResponse"] = 8183] = "k_EMsgServerToGCCloseCompendiumInGamePredictionVotingResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgLobbyBattleCupVictory"] = 8186] = "k_EMsgLobbyBattleCupVictory";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCGetPlayerCardItemInfo"] = 8187] = "k_EMsgGCGetPlayerCardItemInfo";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCGetPlayerCardItemInfoResponse"] = 8188] = "k_EMsgGCGetPlayerCardItemInfoResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestSteamDatagramTicket"] = 8189] = "k_EMsgClientToGCRequestSteamDatagramTicket";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestSteamDatagramTicketResponse"] = 8190] = "k_EMsgClientToGCRequestSteamDatagramTicketResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientBattlePassRollupRequest"] = 8191] = "k_EMsgGCToClientBattlePassRollupRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientBattlePassRollupResponse"] = 8192] = "k_EMsgGCToClientBattlePassRollupResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCTransferSeasonalMMRRequest"] = 8193] = "k_EMsgClientToGCTransferSeasonalMMRRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCTransferSeasonalMMRResponse"] = 8194] = "k_EMsgClientToGCTransferSeasonalMMRResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCPublicChatCommunicationBan"] = 8195] = "k_EMsgGCToGCPublicChatCommunicationBan";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCUpdateAccountInfo"] = 8196] = "k_EMsgGCToGCUpdateAccountInfo";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCChatReportPublicSpam"] = 8197] = "k_EMsgGCChatReportPublicSpam";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetPartyBuilderOptions"] = 8198] = "k_EMsgClientToGCSetPartyBuilderOptions";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetPartyBuilderOptionsResponse"] = 8199] = "k_EMsgClientToGCSetPartyBuilderOptionsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientPlaytestStatus"] = 8200] = "k_EMsgGCToClientPlaytestStatus";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCJoinPlaytest"] = 8201] = "k_EMsgClientToGCJoinPlaytest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCJoinPlaytestResponse"] = 8202] = "k_EMsgClientToGCJoinPlaytestResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgLobbyPlaytestDetails"] = 8203] = "k_EMsgLobbyPlaytestDetails";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTASetFavoriteTeam"] = 8204] = "k_EMsgDOTASetFavoriteTeam";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientBattlePassRollupListRequest"] = 8205] = "k_EMsgGCToClientBattlePassRollupListRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientBattlePassRollupListResponse"] = 8206] = "k_EMsgGCToClientBattlePassRollupListResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTAClaimEventAction"] = 8209] = "k_EMsgDOTAClaimEventAction";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTAClaimEventActionResponse"] = 8210] = "k_EMsgDOTAClaimEventActionResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTAGetPeriodicResource"] = 8211] = "k_EMsgDOTAGetPeriodicResource";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTAGetPeriodicResourceResponse"] = 8212] = "k_EMsgDOTAGetPeriodicResourceResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDOTAPeriodicResourceUpdated"] = 8213] = "k_EMsgDOTAPeriodicResourceUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCSpendWager"] = 8214] = "k_EMsgServerToGCSpendWager";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCSignoutSpendWagerToken"] = 8215] = "k_EMsgGCToGCSignoutSpendWagerToken";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSubmitTriviaQuestionAnswer"] = 8216] = "k_EMsgSubmitTriviaQuestionAnswer";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSubmitTriviaQuestionAnswerResponse"] = 8217] = "k_EMsgSubmitTriviaQuestionAnswerResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGiveTip"] = 8218] = "k_EMsgClientToGCGiveTip";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGiveTipResponse"] = 8219] = "k_EMsgClientToGCGiveTipResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgStartTriviaSession"] = 8220] = "k_EMsgStartTriviaSession";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgStartTriviaSessionResponse"] = 8221] = "k_EMsgStartTriviaSessionResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgAnchorPhoneNumberRequest"] = 8222] = "k_EMsgAnchorPhoneNumberRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgAnchorPhoneNumberResponse"] = 8223] = "k_EMsgAnchorPhoneNumberResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgUnanchorPhoneNumberRequest"] = 8224] = "k_EMsgUnanchorPhoneNumberRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgUnanchorPhoneNumberResponse"] = 8225] = "k_EMsgUnanchorPhoneNumberResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCSignoutSpendRankWager"] = 8229] = "k_EMsgGCToGCSignoutSpendRankWager";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetFavoriteTeam"] = 8230] = "k_EMsgGCToGCGetFavoriteTeam";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetFavoriteTeamResponse"] = 8231] = "k_EMsgGCToGCGetFavoriteTeamResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutEventGameData"] = 8232] = "k_EMsgSignOutEventGameData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCQuickStatsRequest"] = 8238] = "k_EMsgClientToGCQuickStatsRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCQuickStatsResponse"] = 8239] = "k_EMsgClientToGCQuickStatsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCSubtractEventPointsFromUser"] = 8240] = "k_EMsgGCToGCSubtractEventPointsFromUser";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSelectionPriorityChoiceRequest"] = 8241] = "k_EMsgSelectionPriorityChoiceRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSelectionPriorityChoiceResponse"] = 8242] = "k_EMsgSelectionPriorityChoiceResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCCompendiumInGamePredictionResults"] = 8243] = "k_EMsgGCToGCCompendiumInGamePredictionResults";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGameAutographReward"] = 8244] = "k_EMsgGameAutographReward";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGameAutographRewardResponse"] = 8245] = "k_EMsgGameAutographRewardResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDestroyLobbyRequest"] = 8246] = "k_EMsgDestroyLobbyRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDestroyLobbyResponse"] = 8247] = "k_EMsgDestroyLobbyResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgPurchaseItemWithEventPoints"] = 8248] = "k_EMsgPurchaseItemWithEventPoints";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgPurchaseItemWithEventPointsResponse"] = 8249] = "k_EMsgPurchaseItemWithEventPointsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCMatchPlayerItemPurchaseHistory"] = 8250] = "k_EMsgServerToGCMatchPlayerItemPurchaseHistory";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGrantPlusHeroMatchResults"] = 8251] = "k_EMsgGCToGCGrantPlusHeroMatchResults";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCMatchStateHistory"] = 8255] = "k_EMsgServerToGCMatchStateHistory";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgPurchaseHeroRandomRelic"] = 8258] = "k_EMsgPurchaseHeroRandomRelic";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgPurchaseHeroRandomRelicResponse"] = 8259] = "k_EMsgPurchaseHeroRandomRelicResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCClaimEventActionUsingItem"] = 8260] = "k_EMsgClientToGCClaimEventActionUsingItem";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCClaimEventActionUsingItemResponse"] = 8261] = "k_EMsgClientToGCClaimEventActionUsingItemResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgPartyReadyCheckRequest"] = 8262] = "k_EMsgPartyReadyCheckRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgPartyReadyCheckResponse"] = 8263] = "k_EMsgPartyReadyCheckResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgPartyReadyCheckAcknowledge"] = 8264] = "k_EMsgPartyReadyCheckAcknowledge";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGetRecentPlayTimeFriendsRequest"] = 8265] = "k_EMsgGetRecentPlayTimeFriendsRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGetRecentPlayTimeFriendsResponse"] = 8266] = "k_EMsgGetRecentPlayTimeFriendsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientCommendNotification"] = 8267] = "k_EMsgGCToClientCommendNotification";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgProfileRequest"] = 8268] = "k_EMsgProfileRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgProfileResponse"] = 8269] = "k_EMsgProfileResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgProfileUpdate"] = 8270] = "k_EMsgProfileUpdate";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgProfileUpdateResponse"] = 8271] = "k_EMsgProfileUpdateResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgHeroGlobalDataRequest"] = 8274] = "k_EMsgHeroGlobalDataRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgHeroGlobalDataResponse"] = 8275] = "k_EMsgHeroGlobalDataResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestPlusWeeklyChallengeResult"] = 8276] = "k_EMsgClientToGCRequestPlusWeeklyChallengeResult";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse"] = 8277] = "k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGrantPlusPrepaidTime"] = 8278] = "k_EMsgGCToGCGrantPlusPrepaidTime";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgPrivateMetadataKeyRequest"] = 8279] = "k_EMsgPrivateMetadataKeyRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgPrivateMetadataKeyResponse"] = 8280] = "k_EMsgPrivateMetadataKeyResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCReconcilePlusStatus"] = 8281] = "k_EMsgGCToGCReconcilePlusStatus";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCCheckPlusStatus"] = 8282] = "k_EMsgGCToGCCheckPlusStatus";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCCheckPlusStatusResponse"] = 8283] = "k_EMsgGCToGCCheckPlusStatusResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCReconcilePlusAutoGrantItems"] = 8284] = "k_EMsgGCToGCReconcilePlusAutoGrantItems";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCReconcilePlusStatusUnreliable"] = 8285] = "k_EMsgGCToGCReconcilePlusStatusUnreliable";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientCavernCrawlMapPathCompleted"] = 8288] = "k_EMsgGCToClientCavernCrawlMapPathCompleted";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCavernCrawlClaimRoom"] = 8289] = "k_EMsgClientToGCCavernCrawlClaimRoom";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCavernCrawlClaimRoomResponse"] = 8290] = "k_EMsgClientToGCCavernCrawlClaimRoomResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCavernCrawlUseItemOnRoom"] = 8291] = "k_EMsgClientToGCCavernCrawlUseItemOnRoom";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse"] = 8292] = "k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCavernCrawlUseItemOnPath"] = 8293] = "k_EMsgClientToGCCavernCrawlUseItemOnPath";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCavernCrawlUseItemOnPathResponse"] = 8294] = "k_EMsgClientToGCCavernCrawlUseItemOnPathResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCavernCrawlRequestMapState"] = 8295] = "k_EMsgClientToGCCavernCrawlRequestMapState";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCavernCrawlRequestMapStateResponse"] = 8296] = "k_EMsgClientToGCCavernCrawlRequestMapStateResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutTips"] = 8297] = "k_EMsgSignOutTips";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestEventPointLogV2"] = 8298] = "k_EMsgClientToGCRequestEventPointLogV2";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestEventPointLogResponseV2"] = 8299] = "k_EMsgClientToGCRequestEventPointLogResponseV2";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestEventTipsSummary"] = 8300] = "k_EMsgClientToGCRequestEventTipsSummary";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestEventTipsSummaryResponse"] = 8301] = "k_EMsgClientToGCRequestEventTipsSummaryResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestSocialFeed"] = 8303] = "k_EMsgClientToGCRequestSocialFeed";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestSocialFeedResponse"] = 8304] = "k_EMsgClientToGCRequestSocialFeedResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestSocialFeedComments"] = 8305] = "k_EMsgClientToGCRequestSocialFeedComments";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestSocialFeedCommentsResponse"] = 8306] = "k_EMsgClientToGCRequestSocialFeedCommentsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCavernCrawlGetClaimedRoomCount"] = 8308] = "k_EMsgClientToGCCavernCrawlGetClaimedRoomCount";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse"] = 8309] = "k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCReconcilePlusAutoGrantItemsUnreliable"] = 8310] = "k_EMsgGCToGCReconcilePlusAutoGrantItemsUnreliable";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCAddBroadcastTimelineEvent"] = 8311] = "k_EMsgServerToGCAddBroadcastTimelineEvent";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToServerUpdateSteamBroadcasting"] = 8312] = "k_EMsgGCToServerUpdateSteamBroadcasting";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRecordContestVote"] = 8313] = "k_EMsgClientToGCRecordContestVote";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientRecordContestVoteResponse"] = 8314] = "k_EMsgGCToClientRecordContestVoteResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGrantAutograph"] = 8315] = "k_EMsgGCToGCGrantAutograph";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGrantAutographResponse"] = 8316] = "k_EMsgGCToGCGrantAutographResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutConsumableUsage"] = 8317] = "k_EMsgSignOutConsumableUsage";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgLobbyEventGameDetails"] = 8318] = "k_EMsgLobbyEventGameDetails";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDevGrantEventPoints"] = 8319] = "k_EMsgDevGrantEventPoints";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDevGrantEventPointsResponse"] = 8320] = "k_EMsgDevGrantEventPointsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDevGrantEventAction"] = 8321] = "k_EMsgDevGrantEventAction";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDevGrantEventActionResponse"] = 8322] = "k_EMsgDevGrantEventActionResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDevResetEventState"] = 8323] = "k_EMsgDevResetEventState";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDevResetEventStateResponse"] = 8324] = "k_EMsgDevResetEventStateResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCReconcileEventOwnership"] = 8325] = "k_EMsgGCToGCReconcileEventOwnership";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgConsumeEventSupportGrantItem"] = 8326] = "k_EMsgConsumeEventSupportGrantItem";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgConsumeEventSupportGrantItemResponse"] = 8327] = "k_EMsgConsumeEventSupportGrantItemResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientClaimEventActionUsingItemCompleted"] = 8328] = "k_EMsgGCToClientClaimEventActionUsingItemCompleted";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientCavernCrawlMapUpdated"] = 8329] = "k_EMsgGCToClientCavernCrawlMapUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCRequestPlayerRecentAccomplishments"] = 8330] = "k_EMsgServerToGCRequestPlayerRecentAccomplishments";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse"] = 8331] = "k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestPlayerRecentAccomplishments"] = 8332] = "k_EMsgClientToGCRequestPlayerRecentAccomplishments";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse"] = 8333] = "k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments"] = 8334] = "k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse"] = 8335] = "k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutEventActionGrants"] = 8336] = "k_EMsgSignOutEventActionGrants";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestPlayerCoachMatches"] = 8337] = "k_EMsgClientToGCRequestPlayerCoachMatches";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestPlayerCoachMatchesResponse"] = 8338] = "k_EMsgClientToGCRequestPlayerCoachMatchesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSubmitCoachTeammateRating"] = 8341] = "k_EMsgClientToGCSubmitCoachTeammateRating";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSubmitCoachTeammateRatingResponse"] = 8342] = "k_EMsgClientToGCSubmitCoachTeammateRatingResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientCoachTeammateRatingsChanged"] = 8343] = "k_EMsgGCToClientCoachTeammateRatingsChanged";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestPlayerCoachMatch"] = 8345] = "k_EMsgClientToGCRequestPlayerCoachMatch";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestPlayerCoachMatchResponse"] = 8346] = "k_EMsgClientToGCRequestPlayerCoachMatchResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestContestVotes"] = 8347] = "k_EMsgClientToGCRequestContestVotes";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestContestVotesResponse"] = 8348] = "k_EMsgClientToGCRequestContestVotesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCMVPVoteTimeout"] = 8349] = "k_EMsgClientToGCMVPVoteTimeout";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCMVPVoteTimeoutResponse"] = 8350] = "k_EMsgClientToGCMVPVoteTimeoutResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgMatchMatchmakingStats"] = 8360] = "k_EMsgMatchMatchmakingStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSubmitPlayerMatchSurvey"] = 8361] = "k_EMsgClientToGCSubmitPlayerMatchSurvey";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSubmitPlayerMatchSurveyResponse"] = 8362] = "k_EMsgClientToGCSubmitPlayerMatchSurveyResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSQLGCToGCGrantAllHeroProgressAccount"] = 8363] = "k_EMsgSQLGCToGCGrantAllHeroProgressAccount";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSQLGCToGCGrantAllHeroProgressVictory"] = 8364] = "k_EMsgSQLGCToGCGrantAllHeroProgressVictory";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDevDeleteEventActions"] = 8365] = "k_EMsgDevDeleteEventActions";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgDevDeleteEventActionsResponse"] = 8366] = "k_EMsgDevDeleteEventActionsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetAllHeroCurrent"] = 8635] = "k_EMsgGCToGCGetAllHeroCurrent";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetAllHeroCurrentResponse"] = 8636] = "k_EMsgGCToGCGetAllHeroCurrentResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCSubmitPlayerAvoidRequest"] = 8637] = "k_EMsgGCSubmitPlayerAvoidRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCSubmitPlayerAvoidRequestResponse"] = 8638] = "k_EMsgGCSubmitPlayerAvoidRequestResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientNotificationsUpdated"] = 8639] = "k_EMsgGCToClientNotificationsUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCtoGCAssociatedExploiterAccountInfo"] = 8640] = "k_EMsgGCtoGCAssociatedExploiterAccountInfo";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse"] = 8641] = "k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCtoGCRequestRecalibrationCheck"] = 8642] = "k_EMsgGCtoGCRequestRecalibrationCheck";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientVACReminder"] = 8643] = "k_EMsgGCToClientVACReminder";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUnderDraftBuy"] = 8644] = "k_EMsgClientToGCUnderDraftBuy";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUnderDraftBuyResponse"] = 8645] = "k_EMsgClientToGCUnderDraftBuyResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUnderDraftReroll"] = 8646] = "k_EMsgClientToGCUnderDraftReroll";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUnderDraftRerollResponse"] = 8647] = "k_EMsgClientToGCUnderDraftRerollResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgNeutralItemStats"] = 8648] = "k_EMsgNeutralItemStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCreateGuild"] = 8649] = "k_EMsgClientToGCCreateGuild";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCreateGuildResponse"] = 8650] = "k_EMsgClientToGCCreateGuildResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetGuildInfo"] = 8651] = "k_EMsgClientToGCSetGuildInfo";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetGuildInfoResponse"] = 8652] = "k_EMsgClientToGCSetGuildInfoResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCAddGuildRole"] = 8653] = "k_EMsgClientToGCAddGuildRole";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCAddGuildRoleResponse"] = 8654] = "k_EMsgClientToGCAddGuildRoleResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCModifyGuildRole"] = 8655] = "k_EMsgClientToGCModifyGuildRole";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCModifyGuildRoleResponse"] = 8656] = "k_EMsgClientToGCModifyGuildRoleResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRemoveGuildRole"] = 8657] = "k_EMsgClientToGCRemoveGuildRole";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRemoveGuildRoleResponse"] = 8658] = "k_EMsgClientToGCRemoveGuildRoleResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCJoinGuild"] = 8659] = "k_EMsgClientToGCJoinGuild";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCJoinGuildResponse"] = 8660] = "k_EMsgClientToGCJoinGuildResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCLeaveGuild"] = 8661] = "k_EMsgClientToGCLeaveGuild";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCLeaveGuildResponse"] = 8662] = "k_EMsgClientToGCLeaveGuildResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCInviteToGuild"] = 8663] = "k_EMsgClientToGCInviteToGuild";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCInviteToGuildResponse"] = 8664] = "k_EMsgClientToGCInviteToGuildResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCDeclineInviteToGuild"] = 8665] = "k_EMsgClientToGCDeclineInviteToGuild";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCDeclineInviteToGuildResponse"] = 8666] = "k_EMsgClientToGCDeclineInviteToGuildResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCancelInviteToGuild"] = 8667] = "k_EMsgClientToGCCancelInviteToGuild";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCancelInviteToGuildResponse"] = 8668] = "k_EMsgClientToGCCancelInviteToGuildResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCKickGuildMember"] = 8669] = "k_EMsgClientToGCKickGuildMember";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCKickGuildMemberResponse"] = 8670] = "k_EMsgClientToGCKickGuildMemberResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetGuildMemberRole"] = 8671] = "k_EMsgClientToGCSetGuildMemberRole";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetGuildMemberRoleResponse"] = 8672] = "k_EMsgClientToGCSetGuildMemberRoleResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestGuildData"] = 8673] = "k_EMsgClientToGCRequestGuildData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestGuildDataResponse"] = 8674] = "k_EMsgClientToGCRequestGuildDataResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientGuildDataUpdated"] = 8675] = "k_EMsgGCToClientGuildDataUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestGuildMembership"] = 8676] = "k_EMsgClientToGCRequestGuildMembership";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestGuildMembershipResponse"] = 8677] = "k_EMsgClientToGCRequestGuildMembershipResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientGuildMembershipUpdated"] = 8678] = "k_EMsgGCToClientGuildMembershipUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCAcceptInviteToGuild"] = 8681] = "k_EMsgClientToGCAcceptInviteToGuild";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCAcceptInviteToGuildResponse"] = 8682] = "k_EMsgClientToGCAcceptInviteToGuildResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetGuildRoleOrder"] = 8683] = "k_EMsgClientToGCSetGuildRoleOrder";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetGuildRoleOrderResponse"] = 8684] = "k_EMsgClientToGCSetGuildRoleOrderResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestGuildFeed"] = 8685] = "k_EMsgClientToGCRequestGuildFeed";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestGuildFeedResponse"] = 8686] = "k_EMsgClientToGCRequestGuildFeedResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestAccountGuildEventData"] = 8687] = "k_EMsgClientToGCRequestAccountGuildEventData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestAccountGuildEventDataResponse"] = 8688] = "k_EMsgClientToGCRequestAccountGuildEventDataResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientAccountGuildEventDataUpdated"] = 8689] = "k_EMsgGCToClientAccountGuildEventDataUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestActiveGuildContracts"] = 8690] = "k_EMsgClientToGCRequestActiveGuildContracts";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestActiveGuildContractsResponse"] = 8691] = "k_EMsgClientToGCRequestActiveGuildContractsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientActiveGuildContractsUpdated"] = 8692] = "k_EMsgGCToClientActiveGuildContractsUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientGuildFeedUpdated"] = 8693] = "k_EMsgGCToClientGuildFeedUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSelectGuildContract"] = 8694] = "k_EMsgClientToGCSelectGuildContract";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSelectGuildContractResponse"] = 8695] = "k_EMsgClientToGCSelectGuildContractResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCCompleteGuildContracts"] = 8696] = "k_EMsgGCToGCCompleteGuildContracts";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCAddPlayerToGuildChat"] = 8698] = "k_EMsgClientToGCAddPlayerToGuildChat";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCAddPlayerToGuildChatResponse"] = 8699] = "k_EMsgClientToGCAddPlayerToGuildChatResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUnderDraftSell"] = 8700] = "k_EMsgClientToGCUnderDraftSell";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUnderDraftSellResponse"] = 8701] = "k_EMsgClientToGCUnderDraftSellResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUnderDraftRequest"] = 8702] = "k_EMsgClientToGCUnderDraftRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUnderDraftResponse"] = 8703] = "k_EMsgClientToGCUnderDraftResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUnderDraftRedeemReward"] = 8704] = "k_EMsgClientToGCUnderDraftRedeemReward";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUnderDraftRedeemRewardResponse"] = 8705] = "k_EMsgClientToGCUnderDraftRedeemRewardResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToServerLobbyHeroBanRates"] = 8708] = "k_EMsgGCToServerLobbyHeroBanRates";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutGuildContractProgress"] = 8711] = "k_EMsgSignOutGuildContractProgress";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutMVPStats"] = 8712] = "k_EMsgSignOutMVPStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestActiveGuildChallenge"] = 8713] = "k_EMsgClientToGCRequestActiveGuildChallenge";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestActiveGuildChallengeResponse"] = 8714] = "k_EMsgClientToGCRequestActiveGuildChallengeResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientActiveGuildChallengeUpdated"] = 8715] = "k_EMsgGCToClientActiveGuildChallengeUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestReporterUpdates"] = 8716] = "k_EMsgClientToGCRequestReporterUpdates";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestReporterUpdatesResponse"] = 8717] = "k_EMsgClientToGCRequestReporterUpdatesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCAcknowledgeReporterUpdates"] = 8718] = "k_EMsgClientToGCAcknowledgeReporterUpdates";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutGuildChallengeProgress"] = 8720] = "k_EMsgSignOutGuildChallengeProgress";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestGuildEventMembers"] = 8721] = "k_EMsgClientToGCRequestGuildEventMembers";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestGuildEventMembersResponse"] = 8722] = "k_EMsgClientToGCRequestGuildEventMembersResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCReportGuildContent"] = 8725] = "k_EMsgClientToGCReportGuildContent";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCReportGuildContentResponse"] = 8726] = "k_EMsgClientToGCReportGuildContentResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestAccountGuildPersonaInfo"] = 8727] = "k_EMsgClientToGCRequestAccountGuildPersonaInfo";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse"] = 8728] = "k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch"] = 8729] = "k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse"] = 8730] = "k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientUnderDraftGoldUpdated"] = 8731] = "k_EMsgGCToClientUnderDraftGoldUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToServerRecordTrainingData"] = 8732] = "k_EMsgGCToServerRecordTrainingData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutBounties"] = 8733] = "k_EMsgSignOutBounties";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgLobbyFeaturedGamemodeProgress"] = 8734] = "k_EMsgLobbyFeaturedGamemodeProgress";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgLobbyGauntletProgress"] = 8735] = "k_EMsgLobbyGauntletProgress";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSubmitDraftTriviaMatchAnswer"] = 8736] = "k_EMsgClientToGCSubmitDraftTriviaMatchAnswer";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse"] = 8737] = "k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCSignoutSpendBounty"] = 8738] = "k_EMsgGCToGCSignoutSpendBounty";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCApplyGauntletTicket"] = 8739] = "k_EMsgClientToGCApplyGauntletTicket";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUnderDraftRollBackBench"] = 8740] = "k_EMsgClientToGCUnderDraftRollBackBench";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUnderDraftRollBackBenchResponse"] = 8741] = "k_EMsgClientToGCUnderDraftRollBackBenchResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetEventActionScore"] = 8742] = "k_EMsgGCToGCGetEventActionScore";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetEventActionScoreResponse"] = 8743] = "k_EMsgGCToGCGetEventActionScoreResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCGetGuildContracts"] = 8744] = "k_EMsgServerToGCGetGuildContracts";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCGetGuildContractsResponse"] = 8745] = "k_EMsgServerToGCGetGuildContractsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgLobbyEventGameData"] = 8746] = "k_EMsgLobbyEventGameData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientGuildMembersDataUpdated"] = 8747] = "k_EMsgGCToClientGuildMembersDataUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutReportActivityMarkers"] = 8748] = "k_EMsgSignOutReportActivityMarkers";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutDiretideCandy"] = 8749] = "k_EMsgSignOutDiretideCandy";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientPostGameItemAwardNotification"] = 8750] = "k_EMsgGCToClientPostGameItemAwardNotification";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetOWMatchDetails"] = 8751] = "k_EMsgClientToGCGetOWMatchDetails";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetOWMatchDetailsResponse"] = 8752] = "k_EMsgClientToGCGetOWMatchDetailsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSubmitOWConviction"] = 8753] = "k_EMsgClientToGCSubmitOWConviction";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSubmitOWConvictionResponse"] = 8754] = "k_EMsgClientToGCSubmitOWConvictionResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetAccountSteamChina"] = 8755] = "k_EMsgGCToGCGetAccountSteamChina";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGetAccountSteamChinaResponse"] = 8756] = "k_EMsgGCToGCGetAccountSteamChinaResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCClaimLeaderboardRewards"] = 8757] = "k_EMsgClientToGCClaimLeaderboardRewards";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCClaimLeaderboardRewardsResponse"] = 8758] = "k_EMsgClientToGCClaimLeaderboardRewardsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRecalibrateMMR"] = 8759] = "k_EMsgClientToGCRecalibrateMMR";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRecalibrateMMRResponse"] = 8760] = "k_EMsgClientToGCRecalibrateMMRResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGrantEventPointActionList"] = 8761] = "k_EMsgGCToGCGrantEventPointActionList";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCChinaSSAURLRequest"] = 8764] = "k_EMsgClientToGCChinaSSAURLRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCChinaSSAURLResponse"] = 8765] = "k_EMsgClientToGCChinaSSAURLResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCChinaSSAAcceptedRequest"] = 8766] = "k_EMsgClientToGCChinaSSAAcceptedRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCChinaSSAAcceptedResponse"] = 8767] = "k_EMsgClientToGCChinaSSAAcceptedResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutOverwatchSuspicion"] = 8768] = "k_EMsgSignOutOverwatchSuspicion";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCGetSuspicionConfig"] = 8769] = "k_EMsgServerToGCGetSuspicionConfig";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCGetSuspicionConfigResponse"] = 8770] = "k_EMsgServerToGCGetSuspicionConfigResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGrantPlusHeroChallengeMatchResults"] = 8771] = "k_EMsgGCToGCGrantPlusHeroChallengeMatchResults";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientOverwatchCasesAvailable"] = 8772] = "k_EMsgGCToClientOverwatchCasesAvailable";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCAccountCheck"] = 8773] = "k_EMsgServerToGCAccountCheck";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCStartWatchingOverwatch"] = 8774] = "k_EMsgClientToGCStartWatchingOverwatch";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCStopWatchingOverwatch"] = 8775] = "k_EMsgClientToGCStopWatchingOverwatch";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutPerfData"] = 8776] = "k_EMsgSignOutPerfData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetDPCFavorites"] = 8777] = "k_EMsgClientToGCGetDPCFavorites";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetDPCFavoritesResponse"] = 8778] = "k_EMsgClientToGCGetDPCFavoritesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetDPCFavoriteState"] = 8779] = "k_EMsgClientToGCSetDPCFavoriteState";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetDPCFavoriteStateResponse"] = 8780] = "k_EMsgClientToGCSetDPCFavoriteStateResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverwatchReplayError"] = 8781] = "k_EMsgClientToGCOverwatchReplayError";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCPlayerChallengeHistory"] = 8782] = "k_EMsgServerToGCPlayerChallengeHistory";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutBanData"] = 8783] = "k_EMsgSignOutBanData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgWebapiDPCSeasonResults"] = 8784] = "k_EMsgWebapiDPCSeasonResults";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCoachFriend"] = 8785] = "k_EMsgClientToGCCoachFriend";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCoachFriendResponse"] = 8786] = "k_EMsgClientToGCCoachFriendResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestPrivateCoachingSession"] = 8787] = "k_EMsgClientToGCRequestPrivateCoachingSession";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRequestPrivateCoachingSessionResponse"] = 8788] = "k_EMsgClientToGCRequestPrivateCoachingSessionResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCAcceptPrivateCoachingSession"] = 8789] = "k_EMsgClientToGCAcceptPrivateCoachingSession";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCAcceptPrivateCoachingSessionResponse"] = 8790] = "k_EMsgClientToGCAcceptPrivateCoachingSessionResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCLeavePrivateCoachingSession"] = 8791] = "k_EMsgClientToGCLeavePrivateCoachingSession";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCLeavePrivateCoachingSessionResponse"] = 8792] = "k_EMsgClientToGCLeavePrivateCoachingSessionResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetCurrentPrivateCoachingSession"] = 8793] = "k_EMsgClientToGCGetCurrentPrivateCoachingSession";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetCurrentPrivateCoachingSessionResponse"] = 8794] = "k_EMsgClientToGCGetCurrentPrivateCoachingSessionResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientPrivateCoachingSessionUpdated"] = 8795] = "k_EMsgGCToClientPrivateCoachingSessionUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSubmitPrivateCoachingSessionRating"] = 8796] = "k_EMsgClientToGCSubmitPrivateCoachingSessionRating";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSubmitPrivateCoachingSessionRatingResponse"] = 8797] = "k_EMsgClientToGCSubmitPrivateCoachingSessionRatingResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetAvailablePrivateCoachingSessions"] = 8798] = "k_EMsgClientToGCGetAvailablePrivateCoachingSessions";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetAvailablePrivateCoachingSessionsResponse"] = 8799] = "k_EMsgClientToGCGetAvailablePrivateCoachingSessionsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummary"] = 8800] = "k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummary";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse"] = 8801] = "k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCJoinPrivateCoachingSessionLobby"] = 8802] = "k_EMsgClientToGCJoinPrivateCoachingSessionLobby";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCJoinPrivateCoachingSessionLobbyResponse"] = 8803] = "k_EMsgClientToGCJoinPrivateCoachingSessionLobbyResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRespondToCoachFriendRequest"] = 8804] = "k_EMsgClientToGCRespondToCoachFriendRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRespondToCoachFriendRequestResponse"] = 8805] = "k_EMsgClientToGCRespondToCoachFriendRequestResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetEventActiveSeasonID"] = 8806] = "k_EMsgClientToGCSetEventActiveSeasonID";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetEventActiveSeasonIDResponse"] = 8807] = "k_EMsgClientToGCSetEventActiveSeasonIDResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCMatchPlayerNeutralItemEquipHistory"] = 8808] = "k_EMsgServerToGCMatchPlayerNeutralItemEquipHistory";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCCompendiumChosenInGamePredictions"] = 8809] = "k_EMsgServerToGCCompendiumChosenInGamePredictions";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCreateTeamPlayerCardPack"] = 8810] = "k_EMsgClientToGCCreateTeamPlayerCardPack";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCreateTeamPlayerCardPackResponse"] = 8811] = "k_EMsgClientToGCCreateTeamPlayerCardPackResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToServerSubmitCheerData"] = 8812] = "k_EMsgGCToServerSubmitCheerData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToServerCheerConfig"] = 8813] = "k_EMsgGCToServerCheerConfig";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCGetCheerConfig"] = 8814] = "k_EMsgServerToGCGetCheerConfig";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCGetCheerConfigResponse"] = 8815] = "k_EMsgServerToGCGetCheerConfigResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToGCGrantAutographByID"] = 8816] = "k_EMsgGCToGCGrantAutographByID";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToServerCheerScalesOverride"] = 8817] = "k_EMsgGCToServerCheerScalesOverride";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToServerGetCheerState"] = 8818] = "k_EMsgGCToServerGetCheerState";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCReportCheerState"] = 8819] = "k_EMsgServerToGCReportCheerState";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToServerScenarioSave"] = 8820] = "k_EMsgGCToServerScenarioSave";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToServerAbilityDraftLobbyData"] = 8821] = "k_EMsgGCToServerAbilityDraftLobbyData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutReportCommunications"] = 8822] = "k_EMsgSignOutReportCommunications";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBatchGetPlayerCardRosterRequest"] = 8823] = "k_EMsgClientToGCBatchGetPlayerCardRosterRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBatchGetPlayerCardRosterResponse"] = 8824] = "k_EMsgClientToGCBatchGetPlayerCardRosterResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetStickerbookRequest"] = 8825] = "k_EMsgClientToGCGetStickerbookRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetStickerbookResponse"] = 8826] = "k_EMsgClientToGCGetStickerbookResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCreateStickerbookPageRequest"] = 8827] = "k_EMsgClientToGCCreateStickerbookPageRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCreateStickerbookPageResponse"] = 8828] = "k_EMsgClientToGCCreateStickerbookPageResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCDeleteStickerbookPageRequest"] = 8829] = "k_EMsgClientToGCDeleteStickerbookPageRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCDeleteStickerbookPageResponse"] = 8830] = "k_EMsgClientToGCDeleteStickerbookPageResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPlaceStickersRequest"] = 8831] = "k_EMsgClientToGCPlaceStickersRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPlaceStickersResponse"] = 8832] = "k_EMsgClientToGCPlaceStickersResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPlaceCollectionStickersRequest"] = 8833] = "k_EMsgClientToGCPlaceCollectionStickersRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCPlaceCollectionStickersResponse"] = 8834] = "k_EMsgClientToGCPlaceCollectionStickersResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOrderStickerbookTeamPageRequest"] = 8835] = "k_EMsgClientToGCOrderStickerbookTeamPageRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOrderStickerbookTeamPageResponse"] = 8836] = "k_EMsgClientToGCOrderStickerbookTeamPageResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCGetStickerHeroes"] = 8837] = "k_EMsgServerToGCGetStickerHeroes";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCGetStickerHeroesResponse"] = 8838] = "k_EMsgServerToGCGetStickerHeroesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopGetUserData"] = 8840] = "k_EMsgClientToGCCandyShopGetUserData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopGetUserDataResponse"] = 8841] = "k_EMsgClientToGCCandyShopGetUserDataResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientCandyShopUserDataUpdated"] = 8842] = "k_EMsgGCToClientCandyShopUserDataUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopPurchaseReward"] = 8843] = "k_EMsgClientToGCCandyShopPurchaseReward";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopPurchaseRewardResponse"] = 8844] = "k_EMsgClientToGCCandyShopPurchaseRewardResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDoExchange"] = 8845] = "k_EMsgClientToGCCandyShopDoExchange";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDoExchangeResponse"] = 8846] = "k_EMsgClientToGCCandyShopDoExchangeResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDoVariableExchange"] = 8847] = "k_EMsgClientToGCCandyShopDoVariableExchange";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDoVariableExchangeResponse"] = 8848] = "k_EMsgClientToGCCandyShopDoVariableExchangeResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopRerollRewards"] = 8849] = "k_EMsgClientToGCCandyShopRerollRewards";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopRerollRewardsResponse"] = 8850] = "k_EMsgClientToGCCandyShopRerollRewardsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetHeroSticker"] = 8851] = "k_EMsgClientToGCSetHeroSticker";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetHeroStickerResponse"] = 8852] = "k_EMsgClientToGCSetHeroStickerResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetHeroStickers"] = 8853] = "k_EMsgClientToGCGetHeroStickers";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCGetHeroStickersResponse"] = 8854] = "k_EMsgClientToGCGetHeroStickersResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetFavoritePage"] = 8855] = "k_EMsgClientToGCSetFavoritePage";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetFavoritePageResponse"] = 8856] = "k_EMsgClientToGCSetFavoritePageResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDevGrantCandy"] = 8857] = "k_EMsgClientToGCCandyShopDevGrantCandy";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDevGrantCandyResponse"] = 8858] = "k_EMsgClientToGCCandyShopDevGrantCandyResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDevClearInventory"] = 8859] = "k_EMsgClientToGCCandyShopDevClearInventory";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDevClearInventoryResponse"] = 8860] = "k_EMsgClientToGCCandyShopDevClearInventoryResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopOpenBags"] = 8861] = "k_EMsgClientToGCCandyShopOpenBags";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopOpenBagsResponse"] = 8862] = "k_EMsgClientToGCCandyShopOpenBagsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDevGrantCandyBags"] = 8863] = "k_EMsgClientToGCCandyShopDevGrantCandyBags";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDevGrantCandyBagsResponse"] = 8864] = "k_EMsgClientToGCCandyShopDevGrantCandyBagsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDevShuffleExchange"] = 8865] = "k_EMsgClientToGCCandyShopDevShuffleExchange";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDevShuffleExchangeResponse"] = 8866] = "k_EMsgClientToGCCandyShopDevShuffleExchangeResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDevGrantRerollCharges"] = 8867] = "k_EMsgClientToGCCandyShopDevGrantRerollCharges";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDevGrantRerollChargesResponse"] = 8868] = "k_EMsgClientToGCCandyShopDevGrantRerollChargesResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgLobbyAdditionalAccountData"] = 8869] = "k_EMsgLobbyAdditionalAccountData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCLobbyInitialized"] = 8870] = "k_EMsgServerToGCLobbyInitialized";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCollectorsCacheAvailableDataRequest"] = 8871] = "k_EMsgClientToGCCollectorsCacheAvailableDataRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientCollectorsCacheAvailableDataResponse"] = 8872] = "k_EMsgGCToClientCollectorsCacheAvailableDataResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUploadMatchClip"] = 8873] = "k_EMsgClientToGCUploadMatchClip";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientUploadMatchClipResponse"] = 8874] = "k_EMsgGCToClientUploadMatchClipResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutMuertaMinigame"] = 8877] = "k_EMsgSignOutMuertaMinigame";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToServerLobbyHeroRoleStats"] = 8878] = "k_EMsgGCToServerLobbyHeroRoleStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRankRequest"] = 8879] = "k_EMsgClientToGCRankRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientRankResponse"] = 8880] = "k_EMsgGCToClientRankResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientRankUpdate"] = 8881] = "k_EMsgGCToClientRankUpdate";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutMapStats"] = 8882] = "k_EMsgSignOutMapStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCMapStatsRequest"] = 8883] = "k_EMsgClientToGCMapStatsRequest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientMapStatsResponse"] = 8884] = "k_EMsgGCToClientMapStatsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseGetUserData"] = 8886] = "k_EMsgClientToGCShowcaseGetUserData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseGetUserDataResponse"] = 8887] = "k_EMsgClientToGCShowcaseGetUserDataResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseSetUserData"] = 8888] = "k_EMsgClientToGCShowcaseSetUserData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseSetUserDataResponse"] = 8889] = "k_EMsgClientToGCShowcaseSetUserDataResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFantasyCraftingGetData"] = 8890] = "k_EMsgClientToGCFantasyCraftingGetData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFantasyCraftingGetDataResponse"] = 8891] = "k_EMsgClientToGCFantasyCraftingGetDataResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFantasyCraftingPerformOperation"] = 8892] = "k_EMsgClientToGCFantasyCraftingPerformOperation";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFantasyCraftingPerformOperationResponse"] = 8893] = "k_EMsgClientToGCFantasyCraftingPerformOperationResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientFantasyCraftingGetDataUpdated"] = 8894] = "k_EMsgGCToClientFantasyCraftingGetDataUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFantasyCraftingDevModifyTablet"] = 8895] = "k_EMsgClientToGCFantasyCraftingDevModifyTablet";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFantasyCraftingDevModifyTabletResponse"] = 8896] = "k_EMsgClientToGCFantasyCraftingDevModifyTabletResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRoadToTIGetQuests"] = 8897] = "k_EMsgClientToGCRoadToTIGetQuests";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRoadToTIGetQuestsResponse"] = 8898] = "k_EMsgClientToGCRoadToTIGetQuestsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRoadToTIGetActiveQuest"] = 8899] = "k_EMsgClientToGCRoadToTIGetActiveQuest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRoadToTIGetActiveQuestResponse"] = 8900] = "k_EMsgClientToGCRoadToTIGetActiveQuestResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoGetUserData"] = 8901] = "k_EMsgClientToGCBingoGetUserData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoGetUserDataResponse"] = 8902] = "k_EMsgClientToGCBingoGetUserDataResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoClaimRow"] = 8903] = "k_EMsgClientToGCBingoClaimRow";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoClaimRowResponse"] = 8904] = "k_EMsgClientToGCBingoClaimRowResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoDevRerollCard"] = 8905] = "k_EMsgClientToGCBingoDevRerollCard";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoDevRerollCardResponse"] = 8906] = "k_EMsgClientToGCBingoDevRerollCardResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoGetStatsData"] = 8907] = "k_EMsgClientToGCBingoGetStatsData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoGetStatsDataResponse"] = 8908] = "k_EMsgClientToGCBingoGetStatsDataResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientBingoUserDataUpdated"] = 8909] = "k_EMsgGCToClientBingoUserDataUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientRoadToTIQuestDataUpdated"] = 8910] = "k_EMsgGCToClientRoadToTIQuestDataUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRoadToTIUseItem"] = 8911] = "k_EMsgClientToGCRoadToTIUseItem";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRoadToTIUseItemResponse"] = 8912] = "k_EMsgClientToGCRoadToTIUseItemResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseSubmitReport"] = 8913] = "k_EMsgClientToGCShowcaseSubmitReport";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseSubmitReportResponse"] = 8914] = "k_EMsgClientToGCShowcaseSubmitReportResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseAdminGetReportsRollupList"] = 8915] = "k_EMsgClientToGCShowcaseAdminGetReportsRollupList";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseAdminGetReportsRollupListResponse"] = 8916] = "k_EMsgClientToGCShowcaseAdminGetReportsRollupListResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseAdminGetReportsRollup"] = 8917] = "k_EMsgClientToGCShowcaseAdminGetReportsRollup";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseAdminGetReportsRollupResponse"] = 8918] = "k_EMsgClientToGCShowcaseAdminGetReportsRollupResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseAdminGetUserDetails"] = 8919] = "k_EMsgClientToGCShowcaseAdminGetUserDetails";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseAdminGetUserDetailsResponse"] = 8920] = "k_EMsgClientToGCShowcaseAdminGetUserDetailsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseAdminConvict"] = 8921] = "k_EMsgClientToGCShowcaseAdminConvict";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseAdminConvictResponse"] = 8922] = "k_EMsgClientToGCShowcaseAdminConvictResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseAdminExonerate"] = 8923] = "k_EMsgClientToGCShowcaseAdminExonerate";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseAdminExonerateResponse"] = 8924] = "k_EMsgClientToGCShowcaseAdminExonerateResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseAdminReset"] = 8925] = "k_EMsgClientToGCShowcaseAdminReset";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseAdminResetResponse"] = 8926] = "k_EMsgClientToGCShowcaseAdminResetResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseAdminLockAccount"] = 8927] = "k_EMsgClientToGCShowcaseAdminLockAccount";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseAdminLockAccountResponse"] = 8928] = "k_EMsgClientToGCShowcaseAdminLockAccountResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFantasyCraftingSelectPlayer"] = 8929] = "k_EMsgClientToGCFantasyCraftingSelectPlayer";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFantasyCraftingSelectPlayerResponse"] = 8930] = "k_EMsgClientToGCFantasyCraftingSelectPlayerResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFantasyCraftingGenerateTablets"] = 8931] = "k_EMsgClientToGCFantasyCraftingGenerateTablets";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFantasyCraftingGenerateTabletsResponse"] = 8932] = "k_EMsgClientToGCFantasyCraftingGenerateTabletsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGcFantasyCraftingUpgradeTablets"] = 8933] = "k_EMsgClientToGcFantasyCraftingUpgradeTablets";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGcFantasyCraftingUpgradeTabletsResponse"] = 8934] = "k_EMsgClientToGcFantasyCraftingUpgradeTabletsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFantasyCraftingRerollOptions"] = 8936] = "k_EMsgClientToGCFantasyCraftingRerollOptions";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFantasyCraftingRerollOptionsResponse"] = 8937] = "k_EMsgClientToGCFantasyCraftingRerollOptionsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCRoadToTIDevForceQuest"] = 8935] = "k_EMsgClientToGCRoadToTIDevForceQuest";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgLobbyRoadToTIMatchQuestData"] = 8939] = "k_EMsgLobbyRoadToTIMatchQuestData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseModerationGetQueue"] = 8940] = "k_EMsgClientToGCShowcaseModerationGetQueue";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseModerationGetQueueResponse"] = 8941] = "k_EMsgClientToGCShowcaseModerationGetQueueResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseModerationApplyModeration"] = 8942] = "k_EMsgClientToGCShowcaseModerationApplyModeration";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCShowcaseModerationApplyModerationResponse"] = 8943] = "k_EMsgClientToGCShowcaseModerationApplyModerationResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldGetUserData"] = 8944] = "k_EMsgClientToGCOverworldGetUserData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldGetUserDataResponse"] = 8945] = "k_EMsgClientToGCOverworldGetUserDataResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldCompletePath"] = 8946] = "k_EMsgClientToGCOverworldCompletePath";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldCompletePathResponse"] = 8947] = "k_EMsgClientToGCOverworldCompletePathResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldClaimEncounterReward"] = 8948] = "k_EMsgClientToGCOverworldClaimEncounterReward";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldClaimEncounterRewardResponse"] = 8949] = "k_EMsgClientToGCOverworldClaimEncounterRewardResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldDevResetAll"] = 8950] = "k_EMsgClientToGCOverworldDevResetAll";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldDevResetAllResponse"] = 8951] = "k_EMsgClientToGCOverworldDevResetAllResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldDevResetNode"] = 8952] = "k_EMsgClientToGCOverworldDevResetNode";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldDevResetNodeResponse"] = 8953] = "k_EMsgClientToGCOverworldDevResetNodeResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldDevResetPath"] = 8954] = "k_EMsgClientToGCOverworldDevResetPath";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldDevResetPathResponse"] = 8955] = "k_EMsgClientToGCOverworldDevResetPathResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldDevGrantTokens"] = 8956] = "k_EMsgClientToGCOverworldDevGrantTokens";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldDevGrantTokensResponse"] = 8957] = "k_EMsgClientToGCOverworldDevGrantTokensResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldDevClearInventory"] = 8958] = "k_EMsgClientToGCOverworldDevClearInventory";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldDevClearInventoryResponse"] = 8959] = "k_EMsgClientToGCOverworldDevClearInventoryResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCNewBloomGift"] = 8960] = "k_EMsgServerToGCNewBloomGift";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgServerToGCNewBloomGiftResponse"] = 8961] = "k_EMsgServerToGCNewBloomGiftResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientOverworldUserDataUpdated"] = 8962] = "k_EMsgGCToClientOverworldUserDataUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldMoveToNode"] = 8963] = "k_EMsgClientToGCOverworldMoveToNode";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldMoveToNodeResponse"] = 8964] = "k_EMsgClientToGCOverworldMoveToNodeResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCNewBloomGift"] = 8965] = "k_EMsgClientToGCNewBloomGift";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCNewBloomGiftResponse"] = 8966] = "k_EMsgClientToGCNewBloomGiftResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutOverworld"] = 8967] = "k_EMsgSignOutOverworld";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSetBannedHeroes"] = 8969] = "k_EMsgClientToGCSetBannedHeroes";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldTradeTokens"] = 8970] = "k_EMsgClientToGCOverworldTradeTokens";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldTradeTokensResponse"] = 8971] = "k_EMsgClientToGCOverworldTradeTokensResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgOverworldEncounterTokenTreasureData"] = 8972] = "k_EMsgOverworldEncounterTokenTreasureData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgOverworldEncounterTokenQuestData"] = 8973] = "k_EMsgOverworldEncounterTokenQuestData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgOverworldEncounterChooseHeroData"] = 8974] = "k_EMsgOverworldEncounterChooseHeroData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCUpdateComicBookStats"] = 8975] = "k_EMsgClientToGCUpdateComicBookStats";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDevResetShop"] = 8976] = "k_EMsgClientToGCCandyShopDevResetShop";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCandyShopDevResetShopResponse"] = 8977] = "k_EMsgClientToGCCandyShopDevResetShopResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgOverworldEncounterProgressData"] = 8978] = "k_EMsgOverworldEncounterProgressData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldFeedback"] = 8979] = "k_EMsgClientToGCOverworldFeedback";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldFeedbackResponse"] = 8980] = "k_EMsgClientToGCOverworldFeedbackResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldVisitEncounter"] = 8981] = "k_EMsgClientToGCOverworldVisitEncounter";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldVisitEncounterResponse"] = 8982] = "k_EMsgClientToGCOverworldVisitEncounterResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldGiftTokens"] = 8983] = "k_EMsgClientToGCOverworldGiftTokens";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldGiftTokensResponse"] = 8984] = "k_EMsgClientToGCOverworldGiftTokensResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCDotaLabsFeedback"] = 8985] = "k_EMsgClientToGCDotaLabsFeedback";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCDotaLabsFeedbackResponse"] = 8986] = "k_EMsgClientToGCDotaLabsFeedbackResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgOverworldEncounterPitFighterRewardData"] = 8987] = "k_EMsgOverworldEncounterPitFighterRewardData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldGetDynamicImage"] = 8988] = "k_EMsgClientToGCOverworldGetDynamicImage";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldGetDynamicImageResponse"] = 8989] = "k_EMsgClientToGCOverworldGetDynamicImageResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFightingGameChallengeFriend"] = 8990] = "k_EMsgClientToGCFightingGameChallengeFriend";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFightingGameChallengeFriendResponse"] = 8991] = "k_EMsgClientToGCFightingGameChallengeFriendResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFightingGameCancelChallengeFriend"] = 8992] = "k_EMsgClientToGCFightingGameCancelChallengeFriend";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFightingGameAnswerChallenge"] = 8993] = "k_EMsgClientToGCFightingGameAnswerChallenge";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCFightingGameAnswerChallengeResponse"] = 8994] = "k_EMsgClientToGCFightingGameAnswerChallengeResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientFightingGameChallenge"] = 8995] = "k_EMsgGCToClientFightingGameChallenge";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientFightingGameStartMatch"] = 8996] = "k_EMsgGCToClientFightingGameStartMatch";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientFightingGameChallengeCanceled"] = 8997] = "k_EMsgGCToClientFightingGameChallengeCanceled";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoShuffleCard"] = 8999] = "k_EMsgClientToGCBingoShuffleCard";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoShuffleCardResponse"] = 9e3] = "k_EMsgClientToGCBingoShuffleCardResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoModifySquare"] = 9001] = "k_EMsgClientToGCBingoModifySquare";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoModifySquareResponse"] = 9002] = "k_EMsgClientToGCBingoModifySquareResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoDevAddTokens"] = 9003] = "k_EMsgClientToGCBingoDevAddTokens";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoDevAddTokensResponse"] = 9004] = "k_EMsgClientToGCBingoDevAddTokensResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoDevClearInventory"] = 9005] = "k_EMsgClientToGCBingoDevClearInventory";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCBingoDevClearInventoryResponse"] = 9006] = "k_EMsgClientToGCBingoDevClearInventoryResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCCompendiumRemoveAllSelections"] = 9007] = "k_EMsgGCCompendiumRemoveAllSelections";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCCompendiumRemoveAllSelectionsResponse"] = 9008] = "k_EMsgGCCompendiumRemoveAllSelectionsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldMinigameAction"] = 9009] = "k_EMsgClientToGCOverworldMinigameAction";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldMinigameActionResponse"] = 9010] = "k_EMsgClientToGCOverworldMinigameActionResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSurvivorsTelemetry"] = 9011] = "k_EMsgClientToGCSurvivorsTelemetry";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCSurvivorsTelemetryResponse"] = 9012] = "k_EMsgClientToGCSurvivorsTelemetryResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldRequestTokensNeededByFriend"] = 9013] = "k_EMsgClientToGCOverworldRequestTokensNeededByFriend";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCOverworldRequestTokensNeededByFriendResponse"] = 9014] = "k_EMsgClientToGCOverworldRequestTokensNeededByFriendResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCraftworksGetUserData"] = 9015] = "k_EMsgClientToGCCraftworksGetUserData";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCraftworksGetUserDataResponse"] = 9016] = "k_EMsgClientToGCCraftworksGetUserDataResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgGCToClientCraftworksUserDataUpdated"] = 9017] = "k_EMsgGCToClientCraftworksUserDataUpdated";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCraftworksCraftRecipe"] = 9018] = "k_EMsgClientToGCCraftworksCraftRecipe";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCraftworksCraftRecipeResponse"] = 9019] = "k_EMsgClientToGCCraftworksCraftRecipeResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCraftworksDevModifyComponents"] = 9020] = "k_EMsgClientToGCCraftworksDevModifyComponents";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgClientToGCCraftworksDevModifyComponentsResponse"] = 9021] = "k_EMsgClientToGCCraftworksDevModifyComponentsResponse";
  EDOTAGCMsg2[EDOTAGCMsg2["k_EMsgSignOutCraftworks"] = 9022] = "k_EMsgSignOutCraftworks";
  return EDOTAGCMsg2;
})(EDOTAGCMsg || {});
function eDOTAGCMsgFromJSON(object) {
  switch (object) {
    case 7e3:
    case "k_EMsgGCDOTABase":
      return 7e3 /* k_EMsgGCDOTABase */;
    case 7004:
    case "k_EMsgGCGameMatchSignOut":
      return 7004 /* k_EMsgGCGameMatchSignOut */;
    case 7005:
    case "k_EMsgGCGameMatchSignOutResponse":
      return 7005 /* k_EMsgGCGameMatchSignOutResponse */;
    case 7009:
    case "k_EMsgGCJoinChatChannel":
      return 7009 /* k_EMsgGCJoinChatChannel */;
    case 7010:
    case "k_EMsgGCJoinChatChannelResponse":
      return 7010 /* k_EMsgGCJoinChatChannelResponse */;
    case 7013:
    case "k_EMsgGCOtherJoinedChannel":
      return 7013 /* k_EMsgGCOtherJoinedChannel */;
    case 7014:
    case "k_EMsgGCOtherLeftChannel":
      return 7014 /* k_EMsgGCOtherLeftChannel */;
    case 7026:
    case "k_EMsgServerToGCRequestStatus":
      return 7026 /* k_EMsgServerToGCRequestStatus */;
    case 7033:
    case "k_EMsgGCStartFindingMatch":
      return 7033 /* k_EMsgGCStartFindingMatch */;
    case 7034:
    case "k_EMsgGCConnectedPlayers":
      return 7034 /* k_EMsgGCConnectedPlayers */;
    case 7035:
    case "k_EMsgGCAbandonCurrentGame":
      return 7035 /* k_EMsgGCAbandonCurrentGame */;
    case 7036:
    case "k_EMsgGCStopFindingMatch":
      return 7036 /* k_EMsgGCStopFindingMatch */;
    case 7038:
    case "k_EMsgGCPracticeLobbyCreate":
      return 7038 /* k_EMsgGCPracticeLobbyCreate */;
    case 7040:
    case "k_EMsgGCPracticeLobbyLeave":
      return 7040 /* k_EMsgGCPracticeLobbyLeave */;
    case 7041:
    case "k_EMsgGCPracticeLobbyLaunch":
      return 7041 /* k_EMsgGCPracticeLobbyLaunch */;
    case 7042:
    case "k_EMsgGCPracticeLobbyList":
      return 7042 /* k_EMsgGCPracticeLobbyList */;
    case 7043:
    case "k_EMsgGCPracticeLobbyListResponse":
      return 7043 /* k_EMsgGCPracticeLobbyListResponse */;
    case 7044:
    case "k_EMsgGCPracticeLobbyJoin":
      return 7044 /* k_EMsgGCPracticeLobbyJoin */;
    case 7046:
    case "k_EMsgGCPracticeLobbySetDetails":
      return 7046 /* k_EMsgGCPracticeLobbySetDetails */;
    case 7047:
    case "k_EMsgGCPracticeLobbySetTeamSlot":
      return 7047 /* k_EMsgGCPracticeLobbySetTeamSlot */;
    case 7049:
    case "k_EMsgGCInitialQuestionnaireResponse":
      return 7049 /* k_EMsgGCInitialQuestionnaireResponse */;
    case 7055:
    case "k_EMsgGCPracticeLobbyResponse":
      return 7055 /* k_EMsgGCPracticeLobbyResponse */;
    case 7056:
    case "k_EMsgGCBroadcastNotification":
      return 7056 /* k_EMsgGCBroadcastNotification */;
    case 7057:
    case "k_EMsgGCLiveScoreboardUpdate":
      return 7057 /* k_EMsgGCLiveScoreboardUpdate */;
    case 7060:
    case "k_EMsgGCRequestChatChannelList":
      return 7060 /* k_EMsgGCRequestChatChannelList */;
    case 7061:
    case "k_EMsgGCRequestChatChannelListResponse":
      return 7061 /* k_EMsgGCRequestChatChannelListResponse */;
    case 7070:
    case "k_EMsgGCReadyUp":
      return 7070 /* k_EMsgGCReadyUp */;
    case 7071:
    case "k_EMsgGCKickedFromMatchmakingQueue":
      return 7071 /* k_EMsgGCKickedFromMatchmakingQueue */;
    case 7072:
    case "k_EMsgGCLeaverDetected":
      return 7072 /* k_EMsgGCLeaverDetected */;
    case 7073:
    case "k_EMsgGCSpectateFriendGame":
      return 7073 /* k_EMsgGCSpectateFriendGame */;
    case 7074:
    case "k_EMsgGCSpectateFriendGameResponse":
      return 7074 /* k_EMsgGCSpectateFriendGameResponse */;
    case 7076:
    case "k_EMsgGCReportsRemainingRequest":
      return 7076 /* k_EMsgGCReportsRemainingRequest */;
    case 7077:
    case "k_EMsgGCReportsRemainingResponse":
      return 7077 /* k_EMsgGCReportsRemainingResponse */;
    case 7078:
    case "k_EMsgGCSubmitPlayerReport":
      return 7078 /* k_EMsgGCSubmitPlayerReport */;
    case 7079:
    case "k_EMsgGCSubmitPlayerReportResponse":
      return 7079 /* k_EMsgGCSubmitPlayerReportResponse */;
    case 7081:
    case "k_EMsgGCPracticeLobbyKick":
      return 7081 /* k_EMsgGCPracticeLobbyKick */;
    case 7082:
    case "k_EMsgGCSubmitPlayerReportV2":
      return 7082 /* k_EMsgGCSubmitPlayerReportV2 */;
    case 7083:
    case "k_EMsgGCSubmitPlayerReportResponseV2":
      return 7083 /* k_EMsgGCSubmitPlayerReportResponseV2 */;
    case 7084:
    case "k_EMsgGCRequestSaveGames":
      return 7084 /* k_EMsgGCRequestSaveGames */;
    case 7085:
    case "k_EMsgGCRequestSaveGamesServer":
      return 7085 /* k_EMsgGCRequestSaveGamesServer */;
    case 7086:
    case "k_EMsgGCRequestSaveGamesResponse":
      return 7086 /* k_EMsgGCRequestSaveGamesResponse */;
    case 7087:
    case "k_EMsgGCLeaverDetectedResponse":
      return 7087 /* k_EMsgGCLeaverDetectedResponse */;
    case 7088:
    case "k_EMsgGCPlayerFailedToConnect":
      return 7088 /* k_EMsgGCPlayerFailedToConnect */;
    case 7089:
    case "k_EMsgGCGCToRelayConnect":
      return 7089 /* k_EMsgGCGCToRelayConnect */;
    case 7090:
    case "k_EMsgGCGCToRelayConnectresponse":
      return 7090 /* k_EMsgGCGCToRelayConnectresponse */;
    case 7091:
    case "k_EMsgGCWatchGame":
      return 7091 /* k_EMsgGCWatchGame */;
    case 7092:
    case "k_EMsgGCWatchGameResponse":
      return 7092 /* k_EMsgGCWatchGameResponse */;
    case 7093:
    case "k_EMsgGCBanStatusRequest":
      return 7093 /* k_EMsgGCBanStatusRequest */;
    case 7094:
    case "k_EMsgGCBanStatusResponse":
      return 7094 /* k_EMsgGCBanStatusResponse */;
    case 7095:
    case "k_EMsgGCMatchDetailsRequest":
      return 7095 /* k_EMsgGCMatchDetailsRequest */;
    case 7096:
    case "k_EMsgGCMatchDetailsResponse":
      return 7096 /* k_EMsgGCMatchDetailsResponse */;
    case 7097:
    case "k_EMsgGCCancelWatchGame":
      return 7097 /* k_EMsgGCCancelWatchGame */;
    case 7102:
    case "k_EMsgGCPopup":
      return 7102 /* k_EMsgGCPopup */;
    case 7111:
    case "k_EMsgGCFriendPracticeLobbyListRequest":
      return 7111 /* k_EMsgGCFriendPracticeLobbyListRequest */;
    case 7112:
    case "k_EMsgGCFriendPracticeLobbyListResponse":
      return 7112 /* k_EMsgGCFriendPracticeLobbyListResponse */;
    case 7113:
    case "k_EMsgGCPracticeLobbyJoinResponse":
      return 7113 /* k_EMsgGCPracticeLobbyJoinResponse */;
    case 7115:
    case "k_EMsgGCCreateTeam":
      return 7115 /* k_EMsgGCCreateTeam */;
    case 7116:
    case "k_EMsgGCCreateTeamResponse":
      return 7116 /* k_EMsgGCCreateTeamResponse */;
    case 7122:
    case "k_EMsgGCTeamInvite_InviterToGC":
      return 7122 /* k_EMsgGCTeamInvite_InviterToGC */;
    case 7123:
    case "k_EMsgGCTeamInvite_GCImmediateResponseToInviter":
      return 7123 /* k_EMsgGCTeamInvite_GCImmediateResponseToInviter */;
    case 7124:
    case "k_EMsgGCTeamInvite_GCRequestToInvitee":
      return 7124 /* k_EMsgGCTeamInvite_GCRequestToInvitee */;
    case 7125:
    case "k_EMsgGCTeamInvite_InviteeResponseToGC":
      return 7125 /* k_EMsgGCTeamInvite_InviteeResponseToGC */;
    case 7126:
    case "k_EMsgGCTeamInvite_GCResponseToInviter":
      return 7126 /* k_EMsgGCTeamInvite_GCResponseToInviter */;
    case 7127:
    case "k_EMsgGCTeamInvite_GCResponseToInvitee":
      return 7127 /* k_EMsgGCTeamInvite_GCResponseToInvitee */;
    case 7128:
    case "k_EMsgGCKickTeamMember":
      return 7128 /* k_EMsgGCKickTeamMember */;
    case 7129:
    case "k_EMsgGCKickTeamMemberResponse":
      return 7129 /* k_EMsgGCKickTeamMemberResponse */;
    case 7130:
    case "k_EMsgGCLeaveTeam":
      return 7130 /* k_EMsgGCLeaveTeam */;
    case 7131:
    case "k_EMsgGCLeaveTeamResponse":
      return 7131 /* k_EMsgGCLeaveTeamResponse */;
    case 7142:
    case "k_EMsgGCApplyTeamToPracticeLobby":
      return 7142 /* k_EMsgGCApplyTeamToPracticeLobby */;
    case 7144:
    case "k_EMsgGCTransferTeamAdmin":
      return 7144 /* k_EMsgGCTransferTeamAdmin */;
    case 7149:
    case "k_EMsgGCPracticeLobbyJoinBroadcastChannel":
      return 7149 /* k_EMsgGCPracticeLobbyJoinBroadcastChannel */;
    case 7150:
    case "k_EMsgGC_TournamentItemEvent":
      return 7150 /* k_EMsgGC_TournamentItemEvent */;
    case 7151:
    case "k_EMsgGC_TournamentItemEventResponse":
      return 7151 /* k_EMsgGC_TournamentItemEventResponse */;
    case 7156:
    case "k_EMsgTeamFanfare":
      return 7156 /* k_EMsgTeamFanfare */;
    case 7157:
    case "k_EMsgResponseTeamFanfare":
      return 7157 /* k_EMsgResponseTeamFanfare */;
    case 7166:
    case "k_EMsgGCEditTeamDetails":
      return 7166 /* k_EMsgGCEditTeamDetails */;
    case 7167:
    case "k_EMsgGCEditTeamDetailsResponse":
      return 7167 /* k_EMsgGCEditTeamDetailsResponse */;
    case 7170:
    case "k_EMsgGCReadyUpStatus":
      return 7170 /* k_EMsgGCReadyUpStatus */;
    case 7186:
    case "k_EMsgGCToGCMatchCompleted":
      return 7186 /* k_EMsgGCToGCMatchCompleted */;
    case 7188:
    case "k_EMsgGCBalancedShuffleLobby":
      return 7188 /* k_EMsgGCBalancedShuffleLobby */;
    case 7197:
    case "k_EMsgGCMatchmakingStatsRequest":
      return 7197 /* k_EMsgGCMatchmakingStatsRequest */;
    case 7198:
    case "k_EMsgGCMatchmakingStatsResponse":
      return 7198 /* k_EMsgGCMatchmakingStatsResponse */;
    case 7199:
    case "k_EMsgGCBotGameCreate":
      return 7199 /* k_EMsgGCBotGameCreate */;
    case 7200:
    case "k_EMsgGCSetMatchHistoryAccess":
      return 7200 /* k_EMsgGCSetMatchHistoryAccess */;
    case 7201:
    case "k_EMsgGCSetMatchHistoryAccessResponse":
      return 7201 /* k_EMsgGCSetMatchHistoryAccessResponse */;
    case 7203:
    case "k_EMsgUpgradeLeagueItem":
      return 7203 /* k_EMsgUpgradeLeagueItem */;
    case 7204:
    case "k_EMsgUpgradeLeagueItemResponse":
      return 7204 /* k_EMsgUpgradeLeagueItemResponse */;
    case 7206:
    case "k_EMsgGCWatchDownloadedReplay":
      return 7206 /* k_EMsgGCWatchDownloadedReplay */;
    case 7217:
    case "k_EMsgClientsRejoinChatChannels":
      return 7217 /* k_EMsgClientsRejoinChatChannels */;
    case 7218:
    case "k_EMsgGCToGCGetUserChatInfo":
      return 7218 /* k_EMsgGCToGCGetUserChatInfo */;
    case 7219:
    case "k_EMsgGCToGCGetUserChatInfoResponse":
      return 7219 /* k_EMsgGCToGCGetUserChatInfoResponse */;
    case 7220:
    case "k_EMsgGCToGCLeaveAllChatChannels":
      return 7220 /* k_EMsgGCToGCLeaveAllChatChannels */;
    case 7221:
    case "k_EMsgGCToGCUpdateAccountChatBan":
      return 7221 /* k_EMsgGCToGCUpdateAccountChatBan */;
    case 7234:
    case "k_EMsgGCToGCCanInviteUserToTeam":
      return 7234 /* k_EMsgGCToGCCanInviteUserToTeam */;
    case 7235:
    case "k_EMsgGCToGCCanInviteUserToTeamResponse":
      return 7235 /* k_EMsgGCToGCCanInviteUserToTeamResponse */;
    case 7236:
    case "k_EMsgGCToGCGetUserRank":
      return 7236 /* k_EMsgGCToGCGetUserRank */;
    case 7237:
    case "k_EMsgGCToGCGetUserRankResponse":
      return 7237 /* k_EMsgGCToGCGetUserRankResponse */;
    case 7238:
    case "k_EMsgGCToGCAdjustUserRank":
      return 7238 /* k_EMsgGCToGCAdjustUserRank */;
    case 7239:
    case "k_EMsgGCToGCAdjustUserRankResponse":
      return 7239 /* k_EMsgGCToGCAdjustUserRankResponse */;
    case 7240:
    case "k_EMsgGCToGCUpdateTeamStats":
      return 7240 /* k_EMsgGCToGCUpdateTeamStats */;
    case 7241:
    case "k_EMsgGCToGCValidateTeam":
      return 7241 /* k_EMsgGCToGCValidateTeam */;
    case 7242:
    case "k_EMsgGCToGCValidateTeamResponse":
      return 7242 /* k_EMsgGCToGCValidateTeamResponse */;
    case 7255:
    case "k_EMsgGCToGCGetLeagueAdmin":
      return 7255 /* k_EMsgGCToGCGetLeagueAdmin */;
    case 7256:
    case "k_EMsgGCToGCGetLeagueAdminResponse":
      return 7256 /* k_EMsgGCToGCGetLeagueAdminResponse */;
    case 7272:
    case "k_EMsgGCLeaveChatChannel":
      return 7272 /* k_EMsgGCLeaveChatChannel */;
    case 7273:
    case "k_EMsgGCChatMessage":
      return 7273 /* k_EMsgGCChatMessage */;
    case 7274:
    case "k_EMsgGCGetHeroStandings":
      return 7274 /* k_EMsgGCGetHeroStandings */;
    case 7275:
    case "k_EMsgGCGetHeroStandingsResponse":
      return 7275 /* k_EMsgGCGetHeroStandingsResponse */;
    case 7283:
    case "k_EMsgGCItemEditorReservationsRequest":
      return 7283 /* k_EMsgGCItemEditorReservationsRequest */;
    case 7284:
    case "k_EMsgGCItemEditorReservationsResponse":
      return 7284 /* k_EMsgGCItemEditorReservationsResponse */;
    case 7285:
    case "k_EMsgGCItemEditorReserveItemDef":
      return 7285 /* k_EMsgGCItemEditorReserveItemDef */;
    case 7286:
    case "k_EMsgGCItemEditorReserveItemDefResponse":
      return 7286 /* k_EMsgGCItemEditorReserveItemDefResponse */;
    case 7287:
    case "k_EMsgGCItemEditorReleaseReservation":
      return 7287 /* k_EMsgGCItemEditorReleaseReservation */;
    case 7288:
    case "k_EMsgGCItemEditorReleaseReservationResponse":
      return 7288 /* k_EMsgGCItemEditorReleaseReservationResponse */;
    case 7308:
    case "k_EMsgGCFantasyLivePlayerStats":
      return 7308 /* k_EMsgGCFantasyLivePlayerStats */;
    case 7309:
    case "k_EMsgGCFantasyFinalPlayerStats":
      return 7309 /* k_EMsgGCFantasyFinalPlayerStats */;
    case 7320:
    case "k_EMsgGCFlipLobbyTeams":
      return 7320 /* k_EMsgGCFlipLobbyTeams */;
    case 7322:
    case "k_EMsgGCToGCEvaluateReportedPlayer":
      return 7322 /* k_EMsgGCToGCEvaluateReportedPlayer */;
    case 7323:
    case "k_EMsgGCToGCEvaluateReportedPlayerResponse":
      return 7323 /* k_EMsgGCToGCEvaluateReportedPlayerResponse */;
    case 7324:
    case "k_EMsgGCToGCProcessPlayerReportForTarget":
      return 7324 /* k_EMsgGCToGCProcessPlayerReportForTarget */;
    case 7325:
    case "k_EMsgGCToGCProcessReportSuccess":
      return 7325 /* k_EMsgGCToGCProcessReportSuccess */;
    case 7326:
    case "k_EMsgGCNotifyAccountFlagsChange":
      return 7326 /* k_EMsgGCNotifyAccountFlagsChange */;
    case 7327:
    case "k_EMsgGCSetProfilePrivacy":
      return 7327 /* k_EMsgGCSetProfilePrivacy */;
    case 7328:
    case "k_EMsgGCSetProfilePrivacyResponse":
      return 7328 /* k_EMsgGCSetProfilePrivacyResponse */;
    case 7342:
    case "k_EMsgGCClientSuspended":
      return 7342 /* k_EMsgGCClientSuspended */;
    case 7343:
    case "k_EMsgGCPartyMemberSetCoach":
      return 7343 /* k_EMsgGCPartyMemberSetCoach */;
    case 7346:
    case "k_EMsgGCPracticeLobbySetCoach":
      return 7346 /* k_EMsgGCPracticeLobbySetCoach */;
    case 7359:
    case "k_EMsgGCChatModeratorBan":
      return 7359 /* k_EMsgGCChatModeratorBan */;
    case 7367:
    case "k_EMsgGCLobbyUpdateBroadcastChannelInfo":
      return 7367 /* k_EMsgGCLobbyUpdateBroadcastChannelInfo */;
    case 7372:
    case "k_EMsgGCToGCGrantTournamentItem":
      return 7372 /* k_EMsgGCToGCGrantTournamentItem */;
    case 7375:
    case "k_EMsgGCToGCUpgradeTwitchViewerItems":
      return 7375 /* k_EMsgGCToGCUpgradeTwitchViewerItems */;
    case 7376:
    case "k_EMsgGCToGCGetLiveMatchAffiliates":
      return 7376 /* k_EMsgGCToGCGetLiveMatchAffiliates */;
    case 7377:
    case "k_EMsgGCToGCGetLiveMatchAffiliatesResponse":
      return 7377 /* k_EMsgGCToGCGetLiveMatchAffiliatesResponse */;
    case 7378:
    case "k_EMsgGCToGCUpdatePlayerPennantCounts":
      return 7378 /* k_EMsgGCToGCUpdatePlayerPennantCounts */;
    case 7379:
    case "k_EMsgGCToGCGetPlayerPennantCounts":
      return 7379 /* k_EMsgGCToGCGetPlayerPennantCounts */;
    case 7380:
    case "k_EMsgGCToGCGetPlayerPennantCountsResponse":
      return 7380 /* k_EMsgGCToGCGetPlayerPennantCountsResponse */;
    case 7381:
    case "k_EMsgGCGameMatchSignOutPermissionRequest":
      return 7381 /* k_EMsgGCGameMatchSignOutPermissionRequest */;
    case 7382:
    case "k_EMsgGCGameMatchSignOutPermissionResponse":
      return 7382 /* k_EMsgGCGameMatchSignOutPermissionResponse */;
    case 7384:
    case "k_EMsgDOTAAwardEventPoints":
      return 7384 /* k_EMsgDOTAAwardEventPoints */;
    case 7387:
    case "k_EMsgDOTAGetEventPoints":
      return 7387 /* k_EMsgDOTAGetEventPoints */;
    case 7388:
    case "k_EMsgDOTAGetEventPointsResponse":
      return 7388 /* k_EMsgDOTAGetEventPointsResponse */;
    case 7397:
    case "k_EMsgGCPartyLeaderWatchGamePrompt":
      return 7397 /* k_EMsgGCPartyLeaderWatchGamePrompt */;
    case 7405:
    case "k_EMsgGCCompendiumSetSelection":
      return 7405 /* k_EMsgGCCompendiumSetSelection */;
    case 7406:
    case "k_EMsgGCCompendiumDataRequest":
      return 7406 /* k_EMsgGCCompendiumDataRequest */;
    case 7407:
    case "k_EMsgGCCompendiumDataResponse":
      return 7407 /* k_EMsgGCCompendiumDataResponse */;
    case 7408:
    case "k_EMsgDOTAGetPlayerMatchHistory":
      return 7408 /* k_EMsgDOTAGetPlayerMatchHistory */;
    case 7409:
    case "k_EMsgDOTAGetPlayerMatchHistoryResponse":
      return 7409 /* k_EMsgDOTAGetPlayerMatchHistoryResponse */;
    case 7410:
    case "k_EMsgGCToGCMatchmakingAddParty":
      return 7410 /* k_EMsgGCToGCMatchmakingAddParty */;
    case 7411:
    case "k_EMsgGCToGCMatchmakingRemoveParty":
      return 7411 /* k_EMsgGCToGCMatchmakingRemoveParty */;
    case 7412:
    case "k_EMsgGCToGCMatchmakingRemoveAllParties":
      return 7412 /* k_EMsgGCToGCMatchmakingRemoveAllParties */;
    case 7413:
    case "k_EMsgGCToGCMatchmakingMatchFound":
      return 7413 /* k_EMsgGCToGCMatchmakingMatchFound */;
    case 7414:
    case "k_EMsgGCToGCUpdateMatchManagementStats":
      return 7414 /* k_EMsgGCToGCUpdateMatchManagementStats */;
    case 7415:
    case "k_EMsgGCToGCUpdateMatchmakingStats":
      return 7415 /* k_EMsgGCToGCUpdateMatchmakingStats */;
    case 7416:
    case "k_EMsgGCToServerPingRequest":
      return 7416 /* k_EMsgGCToServerPingRequest */;
    case 7417:
    case "k_EMsgGCToServerPingResponse":
      return 7417 /* k_EMsgGCToServerPingResponse */;
    case 7418:
    case "k_EMsgGCToServerEvaluateToxicChat":
      return 7418 /* k_EMsgGCToServerEvaluateToxicChat */;
    case 7419:
    case "k_EMsgServerToGCEvaluateToxicChat":
      return 7419 /* k_EMsgServerToGCEvaluateToxicChat */;
    case 7420:
    case "k_EMsgServerToGCEvaluateToxicChatResponse":
      return 7420 /* k_EMsgServerToGCEvaluateToxicChatResponse */;
    case 7426:
    case "k_EMsgGCToGCProcessMatchLeaver":
      return 7426 /* k_EMsgGCToGCProcessMatchLeaver */;
    case 7427:
    case "k_EMsgGCNotificationsRequest":
      return 7427 /* k_EMsgGCNotificationsRequest */;
    case 7428:
    case "k_EMsgGCNotificationsResponse":
      return 7428 /* k_EMsgGCNotificationsResponse */;
    case 7429:
    case "k_EMsgGCToGCModifyNotification":
      return 7429 /* k_EMsgGCToGCModifyNotification */;
    case 7434:
    case "k_EMsgGCLeagueAdminList":
      return 7434 /* k_EMsgGCLeagueAdminList */;
    case 7435:
    case "k_EMsgGCNotificationsMarkReadRequest":
      return 7435 /* k_EMsgGCNotificationsMarkReadRequest */;
    case 7450:
    case "k_EMsgServerToGCRequestBatchPlayerResources":
      return 7450 /* k_EMsgServerToGCRequestBatchPlayerResources */;
    case 7451:
    case "k_EMsgServerToGCRequestBatchPlayerResourcesResponse":
      return 7451 /* k_EMsgServerToGCRequestBatchPlayerResourcesResponse */;
    case 7453:
    case "k_EMsgGCCompendiumSetSelectionResponse":
      return 7453 /* k_EMsgGCCompendiumSetSelectionResponse */;
    case 7454:
    case "k_EMsgGCRankedPlayerInfoSubmit":
      return 7454 /* k_EMsgGCRankedPlayerInfoSubmit */;
    case 7455:
    case "k_EMsgGCRankedPlayerInfoSubmitResponse":
      return 7455 /* k_EMsgGCRankedPlayerInfoSubmitResponse */;
    case 7456:
    case "k_EMsgGCPlayerInfoSubmit":
      return 7456 /* k_EMsgGCPlayerInfoSubmit */;
    case 7457:
    case "k_EMsgGCPlayerInfoSubmitResponse":
      return 7457 /* k_EMsgGCPlayerInfoSubmitResponse */;
    case 7458:
    case "k_EMsgGCToGCGetAccountLevel":
      return 7458 /* k_EMsgGCToGCGetAccountLevel */;
    case 7459:
    case "k_EMsgGCToGCGetAccountLevelResponse":
      return 7459 /* k_EMsgGCToGCGetAccountLevelResponse */;
    case 7464:
    case "k_EMsgDOTAGetWeekendTourneySchedule":
      return 7464 /* k_EMsgDOTAGetWeekendTourneySchedule */;
    case 7465:
    case "k_EMsgDOTAWeekendTourneySchedule":
      return 7465 /* k_EMsgDOTAWeekendTourneySchedule */;
    case 7466:
    case "k_EMsgGCJoinableCustomGameModesRequest":
      return 7466 /* k_EMsgGCJoinableCustomGameModesRequest */;
    case 7467:
    case "k_EMsgGCJoinableCustomGameModesResponse":
      return 7467 /* k_EMsgGCJoinableCustomGameModesResponse */;
    case 7468:
    case "k_EMsgGCJoinableCustomLobbiesRequest":
      return 7468 /* k_EMsgGCJoinableCustomLobbiesRequest */;
    case 7469:
    case "k_EMsgGCJoinableCustomLobbiesResponse":
      return 7469 /* k_EMsgGCJoinableCustomLobbiesResponse */;
    case 7470:
    case "k_EMsgGCQuickJoinCustomLobby":
      return 7470 /* k_EMsgGCQuickJoinCustomLobby */;
    case 7471:
    case "k_EMsgGCQuickJoinCustomLobbyResponse":
      return 7471 /* k_EMsgGCQuickJoinCustomLobbyResponse */;
    case 7472:
    case "k_EMsgGCToGCGrantEventPointAction":
      return 7472 /* k_EMsgGCToGCGrantEventPointAction */;
    case 7478:
    case "k_EMsgGCToGCSetCompendiumSelection":
      return 7478 /* k_EMsgGCToGCSetCompendiumSelection */;
    case 7484:
    case "k_EMsgGCHasItemQuery":
      return 7484 /* k_EMsgGCHasItemQuery */;
    case 7485:
    case "k_EMsgGCHasItemResponse":
      return 7485 /* k_EMsgGCHasItemResponse */;
    case 7488:
    case "k_EMsgGCToGCGrantEventPointActionMsg":
      return 7488 /* k_EMsgGCToGCGrantEventPointActionMsg */;
    case 7492:
    case "k_EMsgGCToGCGetCompendiumSelections":
      return 7492 /* k_EMsgGCToGCGetCompendiumSelections */;
    case 7493:
    case "k_EMsgGCToGCGetCompendiumSelectionsResponse":
      return 7493 /* k_EMsgGCToGCGetCompendiumSelectionsResponse */;
    case 7494:
    case "k_EMsgServerToGCMatchConnectionStats":
      return 7494 /* k_EMsgServerToGCMatchConnectionStats */;
    case 7495:
    case "k_EMsgGCToClientTournamentItemDrop":
      return 7495 /* k_EMsgGCToClientTournamentItemDrop */;
    case 7496:
    case "k_EMsgSQLDelayedGrantLeagueDrop":
      return 7496 /* k_EMsgSQLDelayedGrantLeagueDrop */;
    case 7497:
    case "k_EMsgServerGCUpdateSpectatorCount":
      return 7497 /* k_EMsgServerGCUpdateSpectatorCount */;
    case 7501:
    case "k_EMsgGCToGCEmoticonUnlock":
      return 7501 /* k_EMsgGCToGCEmoticonUnlock */;
    case 7502:
    case "k_EMsgSignOutDraftInfo":
      return 7502 /* k_EMsgSignOutDraftInfo */;
    case 7503:
    case "k_EMsgClientToGCEmoticonDataRequest":
      return 7503 /* k_EMsgClientToGCEmoticonDataRequest */;
    case 7504:
    case "k_EMsgGCToClientEmoticonData":
      return 7504 /* k_EMsgGCToClientEmoticonData */;
    case 7505:
    case "k_EMsgGCPracticeLobbyToggleBroadcastChannelCameramanStatus":
      return 7505 /* k_EMsgGCPracticeLobbyToggleBroadcastChannelCameramanStatus */;
    case 7518:
    case "k_EMsgDOTARedeemItem":
      return 7518 /* k_EMsgDOTARedeemItem */;
    case 7519:
    case "k_EMsgDOTARedeemItemResponse":
      return 7519 /* k_EMsgDOTARedeemItemResponse */;
    case 7521:
    case "k_EMsgClientToGCGetAllHeroProgress":
      return 7521 /* k_EMsgClientToGCGetAllHeroProgress */;
    case 7522:
    case "k_EMsgClientToGCGetAllHeroProgressResponse":
      return 7522 /* k_EMsgClientToGCGetAllHeroProgressResponse */;
    case 7523:
    case "k_EMsgGCToGCGetServerForClient":
      return 7523 /* k_EMsgGCToGCGetServerForClient */;
    case 7524:
    case "k_EMsgGCToGCGetServerForClientResponse":
      return 7524 /* k_EMsgGCToGCGetServerForClientResponse */;
    case 7525:
    case "k_EMsgSQLProcessTournamentGameOutcome":
      return 7525 /* k_EMsgSQLProcessTournamentGameOutcome */;
    case 7526:
    case "k_EMsgSQLGrantTrophyToAccount":
      return 7526 /* k_EMsgSQLGrantTrophyToAccount */;
    case 7527:
    case "k_EMsgClientToGCGetTrophyList":
      return 7527 /* k_EMsgClientToGCGetTrophyList */;
    case 7528:
    case "k_EMsgClientToGCGetTrophyListResponse":
      return 7528 /* k_EMsgClientToGCGetTrophyListResponse */;
    case 7529:
    case "k_EMsgGCToClientTrophyAwarded":
      return 7529 /* k_EMsgGCToClientTrophyAwarded */;
    case 7530:
    case "k_EMsgGCGameBotMatchSignOut":
      return 7530 /* k_EMsgGCGameBotMatchSignOut */;
    case 7531:
    case "k_EMsgGCGameBotMatchSignOutPermissionRequest":
      return 7531 /* k_EMsgGCGameBotMatchSignOutPermissionRequest */;
    case 7532:
    case "k_EMsgSignOutBotInfo":
      return 7532 /* k_EMsgSignOutBotInfo */;
    case 7533:
    case "k_EMsgGCToGCUpdateProfileCards":
      return 7533 /* k_EMsgGCToGCUpdateProfileCards */;
    case 7534:
    case "k_EMsgClientToGCGetProfileCard":
      return 7534 /* k_EMsgClientToGCGetProfileCard */;
    case 7535:
    case "k_EMsgClientToGCGetProfileCardResponse":
      return 7535 /* k_EMsgClientToGCGetProfileCardResponse */;
    case 7536:
    case "k_EMsgClientToGCGetBattleReport":
      return 7536 /* k_EMsgClientToGCGetBattleReport */;
    case 7537:
    case "k_EMsgClientToGCGetBattleReportResponse":
      return 7537 /* k_EMsgClientToGCGetBattleReportResponse */;
    case 7538:
    case "k_EMsgClientToGCSetProfileCardSlots":
      return 7538 /* k_EMsgClientToGCSetProfileCardSlots */;
    case 7539:
    case "k_EMsgGCToClientProfileCardUpdated":
      return 7539 /* k_EMsgGCToClientProfileCardUpdated */;
    case 7540:
    case "k_EMsgServerToGCVictoryPredictions":
      return 7540 /* k_EMsgServerToGCVictoryPredictions */;
    case 7541:
    case "k_EMsgClientToGCGetBattleReportAggregateStats":
      return 7541 /* k_EMsgClientToGCGetBattleReportAggregateStats */;
    case 7542:
    case "k_EMsgClientToGCGetBattleReportAggregateStatsResponse":
      return 7542 /* k_EMsgClientToGCGetBattleReportAggregateStatsResponse */;
    case 7543:
    case "k_EMsgClientToGCGetBattleReportInfo":
      return 7543 /* k_EMsgClientToGCGetBattleReportInfo */;
    case 7544:
    case "k_EMsgClientToGCGetBattleReportInfoResponse":
      return 7544 /* k_EMsgClientToGCGetBattleReportInfoResponse */;
    case 7545:
    case "k_EMsgSignOutCommunicationSummary":
      return 7545 /* k_EMsgSignOutCommunicationSummary */;
    case 7546:
    case "k_EMsgServerToGCRequestStatus_Response":
      return 7546 /* k_EMsgServerToGCRequestStatus_Response */;
    case 7547:
    case "k_EMsgClientToGCCreateHeroStatue":
      return 7547 /* k_EMsgClientToGCCreateHeroStatue */;
    case 7548:
    case "k_EMsgGCToClientHeroStatueCreateResult":
      return 7548 /* k_EMsgGCToClientHeroStatueCreateResult */;
    case 7549:
    case "k_EMsgGCGCToLANServerRelayConnect":
      return 7549 /* k_EMsgGCGCToLANServerRelayConnect */;
    case 7550:
    case "k_EMsgClientToGCAcknowledgeBattleReport":
      return 7550 /* k_EMsgClientToGCAcknowledgeBattleReport */;
    case 7551:
    case "k_EMsgClientToGCAcknowledgeBattleReportResponse":
      return 7551 /* k_EMsgClientToGCAcknowledgeBattleReportResponse */;
    case 7552:
    case "k_EMsgClientToGCGetBattleReportMatchHistory":
      return 7552 /* k_EMsgClientToGCGetBattleReportMatchHistory */;
    case 7553:
    case "k_EMsgClientToGCGetBattleReportMatchHistoryResponse":
      return 7553 /* k_EMsgClientToGCGetBattleReportMatchHistoryResponse */;
    case 7554:
    case "k_EMsgServerToGCReportKillSummaries":
      return 7554 /* k_EMsgServerToGCReportKillSummaries */;
    case 7561:
    case "k_EMsgGCToGCUpdatePlayerPredictions":
      return 7561 /* k_EMsgGCToGCUpdatePlayerPredictions */;
    case 7562:
    case "k_EMsgGCToServerPredictionResult":
      return 7562 /* k_EMsgGCToServerPredictionResult */;
    case 7569:
    case "k_EMsgGCToGCReplayMonitorValidateReplay":
      return 7569 /* k_EMsgGCToGCReplayMonitorValidateReplay */;
    case 7572:
    case "k_EMsgLobbyEventPoints":
      return 7572 /* k_EMsgLobbyEventPoints */;
    case 7573:
    case "k_EMsgGCToGCGetCustomGameTickets":
      return 7573 /* k_EMsgGCToGCGetCustomGameTickets */;
    case 7574:
    case "k_EMsgGCToGCGetCustomGameTicketsResponse":
      return 7574 /* k_EMsgGCToGCGetCustomGameTicketsResponse */;
    case 7576:
    case "k_EMsgGCToGCCustomGamePlayed":
      return 7576 /* k_EMsgGCToGCCustomGamePlayed */;
    case 7577:
    case "k_EMsgGCToGCGrantEventPointsToUser":
      return 7577 /* k_EMsgGCToGCGrantEventPointsToUser */;
    case 7579:
    case "k_EMsgGameserverCrashReport":
      return 7579 /* k_EMsgGameserverCrashReport */;
    case 7580:
    case "k_EMsgGameserverCrashReportResponse":
      return 7580 /* k_EMsgGameserverCrashReportResponse */;
    case 7581:
    case "k_EMsgGCToClientSteamDatagramTicket":
      return 7581 /* k_EMsgGCToClientSteamDatagramTicket */;
    case 7583:
    case "k_EMsgGCToGCSendAccountsEventPoints":
      return 7583 /* k_EMsgGCToGCSendAccountsEventPoints */;
    case 7584:
    case "k_EMsgClientToGCRerollPlayerChallenge":
      return 7584 /* k_EMsgClientToGCRerollPlayerChallenge */;
    case 7585:
    case "k_EMsgServerToGCRerollPlayerChallenge":
      return 7585 /* k_EMsgServerToGCRerollPlayerChallenge */;
    case 7586:
    case "k_EMsgGCRerollPlayerChallengeResponse":
      return 7586 /* k_EMsgGCRerollPlayerChallengeResponse */;
    case 7587:
    case "k_EMsgSignOutUpdatePlayerChallenge":
      return 7587 /* k_EMsgSignOutUpdatePlayerChallenge */;
    case 7588:
    case "k_EMsgClientToGCSetPartyLeader":
      return 7588 /* k_EMsgClientToGCSetPartyLeader */;
    case 7589:
    case "k_EMsgClientToGCCancelPartyInvites":
      return 7589 /* k_EMsgClientToGCCancelPartyInvites */;
    case 7592:
    case "k_EMsgSQLGrantLeagueMatchToTicketHolders":
      return 7592 /* k_EMsgSQLGrantLeagueMatchToTicketHolders */;
    case 7594:
    case "k_EMsgGCToGCEmoticonUnlockNoRollback":
      return 7594 /* k_EMsgGCToGCEmoticonUnlockNoRollback */;
    case 7603:
    case "k_EMsgClientToGCApplyGemCombiner":
      return 7603 /* k_EMsgClientToGCApplyGemCombiner */;
    case 7606:
    case "k_EMsgClientToGCGetAllHeroOrder":
      return 7606 /* k_EMsgClientToGCGetAllHeroOrder */;
    case 7607:
    case "k_EMsgClientToGCGetAllHeroOrderResponse":
      return 7607 /* k_EMsgClientToGCGetAllHeroOrderResponse */;
    case 7608:
    case "k_EMsgSQLGCToGCGrantBadgePoints":
      return 7608 /* k_EMsgSQLGCToGCGrantBadgePoints */;
    case 7611:
    case "k_EMsgGCToGCCheckOwnsEntireEmoticonRange":
      return 7611 /* k_EMsgGCToGCCheckOwnsEntireEmoticonRange */;
    case 7612:
    case "k_EMsgGCToGCCheckOwnsEntireEmoticonRangeResponse":
      return 7612 /* k_EMsgGCToGCCheckOwnsEntireEmoticonRangeResponse */;
    case 7623:
    case "k_EMsgGCToClientRequestLaneSelection":
      return 7623 /* k_EMsgGCToClientRequestLaneSelection */;
    case 7624:
    case "k_EMsgGCToClientRequestLaneSelectionResponse":
      return 7624 /* k_EMsgGCToClientRequestLaneSelectionResponse */;
    case 7625:
    case "k_EMsgServerToGCCavernCrawlIsHeroActive":
      return 7625 /* k_EMsgServerToGCCavernCrawlIsHeroActive */;
    case 7626:
    case "k_EMsgServerToGCCavernCrawlIsHeroActiveResponse":
      return 7626 /* k_EMsgServerToGCCavernCrawlIsHeroActiveResponse */;
    case 7627:
    case "k_EMsgClientToGCPlayerCardSpecificPurchaseRequest":
      return 7627 /* k_EMsgClientToGCPlayerCardSpecificPurchaseRequest */;
    case 7628:
    case "k_EMsgClientToGCPlayerCardSpecificPurchaseResponse":
      return 7628 /* k_EMsgClientToGCPlayerCardSpecificPurchaseResponse */;
    case 7630:
    case "k_EMsgSQLSetIsLeagueAdmin":
      return 7630 /* k_EMsgSQLSetIsLeagueAdmin */;
    case 7631:
    case "k_EMsgGCToGCGetLiveLeagueMatches":
      return 7631 /* k_EMsgGCToGCGetLiveLeagueMatches */;
    case 7632:
    case "k_EMsgGCToGCGetLiveLeagueMatchesResponse":
      return 7632 /* k_EMsgGCToGCGetLiveLeagueMatchesResponse */;
    case 7633:
    case "k_EMsgDOTALeagueInfoListAdminsRequest":
      return 7633 /* k_EMsgDOTALeagueInfoListAdminsRequest */;
    case 7634:
    case "k_EMsgDOTALeagueInfoListAdminsReponse":
      return 7634 /* k_EMsgDOTALeagueInfoListAdminsReponse */;
    case 7645:
    case "k_EMsgGCToGCLeagueMatchStarted":
      return 7645 /* k_EMsgGCToGCLeagueMatchStarted */;
    case 7646:
    case "k_EMsgGCToGCLeagueMatchCompleted":
      return 7646 /* k_EMsgGCToGCLeagueMatchCompleted */;
    case 7647:
    case "k_EMsgGCToGCLeagueMatchStartedResponse":
      return 7647 /* k_EMsgGCToGCLeagueMatchStartedResponse */;
    case 7650:
    case "k_EMsgDOTALeagueAvailableLobbyNodesRequest":
      return 7650 /* k_EMsgDOTALeagueAvailableLobbyNodesRequest */;
    case 7651:
    case "k_EMsgDOTALeagueAvailableLobbyNodes":
      return 7651 /* k_EMsgDOTALeagueAvailableLobbyNodes */;
    case 7652:
    case "k_EMsgGCToGCLeagueRequest":
      return 7652 /* k_EMsgGCToGCLeagueRequest */;
    case 7653:
    case "k_EMsgGCToGCLeagueResponse":
      return 7653 /* k_EMsgGCToGCLeagueResponse */;
    case 7654:
    case "k_EMsgGCToGCLeagueNodeGroupRequest":
      return 7654 /* k_EMsgGCToGCLeagueNodeGroupRequest */;
    case 7655:
    case "k_EMsgGCToGCLeagueNodeGroupResponse":
      return 7655 /* k_EMsgGCToGCLeagueNodeGroupResponse */;
    case 7656:
    case "k_EMsgGCToGCLeagueNodeRequest":
      return 7656 /* k_EMsgGCToGCLeagueNodeRequest */;
    case 7657:
    case "k_EMsgGCToGCLeagueNodeResponse":
      return 7657 /* k_EMsgGCToGCLeagueNodeResponse */;
    case 7658:
    case "k_EMsgGCToGCRealtimeStatsTerseRequest":
      return 7658 /* k_EMsgGCToGCRealtimeStatsTerseRequest */;
    case 7659:
    case "k_EMsgGCToGCRealtimeStatsTerseResponse":
      return 7659 /* k_EMsgGCToGCRealtimeStatsTerseResponse */;
    case 7660:
    case "k_EMsgGCToGCGetTopMatchesRequest":
      return 7660 /* k_EMsgGCToGCGetTopMatchesRequest */;
    case 7661:
    case "k_EMsgGCToGCGetTopMatchesResponse":
      return 7661 /* k_EMsgGCToGCGetTopMatchesResponse */;
    case 7662:
    case "k_EMsgClientToGCGetFilteredPlayers":
      return 7662 /* k_EMsgClientToGCGetFilteredPlayers */;
    case 7663:
    case "k_EMsgGCToClientGetFilteredPlayersResponse":
      return 7663 /* k_EMsgGCToClientGetFilteredPlayersResponse */;
    case 7664:
    case "k_EMsgClientToGCRemoveFilteredPlayer":
      return 7664 /* k_EMsgClientToGCRemoveFilteredPlayer */;
    case 7665:
    case "k_EMsgGCToClientRemoveFilteredPlayerResponse":
      return 7665 /* k_EMsgGCToClientRemoveFilteredPlayerResponse */;
    case 7666:
    case "k_EMsgGCToClientPlayerBeaconState":
      return 7666 /* k_EMsgGCToClientPlayerBeaconState */;
    case 7667:
    case "k_EMsgGCToClientPartyBeaconUpdate":
      return 7667 /* k_EMsgGCToClientPartyBeaconUpdate */;
    case 7668:
    case "k_EMsgGCToClientPartySearchInvite":
      return 7668 /* k_EMsgGCToClientPartySearchInvite */;
    case 7669:
    case "k_EMsgClientToGCUpdatePartyBeacon":
      return 7669 /* k_EMsgClientToGCUpdatePartyBeacon */;
    case 7670:
    case "k_EMsgClientToGCRequestActiveBeaconParties":
      return 7670 /* k_EMsgClientToGCRequestActiveBeaconParties */;
    case 7671:
    case "k_EMsgGCToClientRequestActiveBeaconPartiesResponse":
      return 7671 /* k_EMsgGCToClientRequestActiveBeaconPartiesResponse */;
    case 7672:
    case "k_EMsgClientToGCManageFavorites":
      return 7672 /* k_EMsgClientToGCManageFavorites */;
    case 7673:
    case "k_EMsgGCToClientManageFavoritesResponse":
      return 7673 /* k_EMsgGCToClientManageFavoritesResponse */;
    case 7674:
    case "k_EMsgClientToGCJoinPartyFromBeacon":
      return 7674 /* k_EMsgClientToGCJoinPartyFromBeacon */;
    case 7675:
    case "k_EMsgGCToClientJoinPartyFromBeaconResponse":
      return 7675 /* k_EMsgGCToClientJoinPartyFromBeaconResponse */;
    case 7676:
    case "k_EMsgClientToGCGetFavoritePlayers":
      return 7676 /* k_EMsgClientToGCGetFavoritePlayers */;
    case 7677:
    case "k_EMsgGCToClientGetFavoritePlayersResponse":
      return 7677 /* k_EMsgGCToClientGetFavoritePlayersResponse */;
    case 7678:
    case "k_EMsgClientToGCVerifyFavoritePlayers":
      return 7678 /* k_EMsgClientToGCVerifyFavoritePlayers */;
    case 7679:
    case "k_EMsgGCToClientVerifyFavoritePlayersResponse":
      return 7679 /* k_EMsgGCToClientVerifyFavoritePlayersResponse */;
    case 7680:
    case "k_EMsgGCToClientPartySearchInvites":
      return 7680 /* k_EMsgGCToClientPartySearchInvites */;
    case 7681:
    case "k_EMsgGCToClientRequestMMInfo":
      return 7681 /* k_EMsgGCToClientRequestMMInfo */;
    case 7682:
    case "k_EMsgClientToGCMMInfo":
      return 7682 /* k_EMsgClientToGCMMInfo */;
    case 7683:
    case "k_EMsgSignOutTextMuteInfo":
      return 7683 /* k_EMsgSignOutTextMuteInfo */;
    case 7684:
    case "k_EMsgClientToGCPurchaseLabyrinthBlessings":
      return 7684 /* k_EMsgClientToGCPurchaseLabyrinthBlessings */;
    case 7685:
    case "k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse":
      return 7685 /* k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse */;
    case 7686:
    case "k_EMsgClientToGCPurchaseFilteredPlayerSlot":
      return 7686 /* k_EMsgClientToGCPurchaseFilteredPlayerSlot */;
    case 7687:
    case "k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse":
      return 7687 /* k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse */;
    case 7688:
    case "k_EMsgClientToGCUpdateFilteredPlayerNote":
      return 7688 /* k_EMsgClientToGCUpdateFilteredPlayerNote */;
    case 7689:
    case "k_EMsgGCToClientUpdateFilteredPlayerNoteResponse":
      return 7689 /* k_EMsgGCToClientUpdateFilteredPlayerNoteResponse */;
    case 7690:
    case "k_EMsgClientToGCClaimSwag":
      return 7690 /* k_EMsgClientToGCClaimSwag */;
    case 7691:
    case "k_EMsgGCToClientClaimSwagResponse":
      return 7691 /* k_EMsgGCToClientClaimSwagResponse */;
    case 8004:
    case "k_EMsgServerToGCLockCharmTrading":
      return 8004 /* k_EMsgServerToGCLockCharmTrading */;
    case 8006:
    case "k_EMsgClientToGCPlayerStatsRequest":
      return 8006 /* k_EMsgClientToGCPlayerStatsRequest */;
    case 8007:
    case "k_EMsgGCToClientPlayerStatsResponse":
      return 8007 /* k_EMsgGCToClientPlayerStatsResponse */;
    case 8008:
    case "k_EMsgGCClearPracticeLobbyTeam":
      return 8008 /* k_EMsgGCClearPracticeLobbyTeam */;
    case 8009:
    case "k_EMsgClientToGCFindTopSourceTVGames":
      return 8009 /* k_EMsgClientToGCFindTopSourceTVGames */;
    case 8010:
    case "k_EMsgGCToClientFindTopSourceTVGamesResponse":
      return 8010 /* k_EMsgGCToClientFindTopSourceTVGamesResponse */;
    case 8011:
    case "k_EMsgGCLobbyList":
      return 8011 /* k_EMsgGCLobbyList */;
    case 8012:
    case "k_EMsgGCLobbyListResponse":
      return 8012 /* k_EMsgGCLobbyListResponse */;
    case 8013:
    case "k_EMsgGCPlayerStatsMatchSignOut":
      return 8013 /* k_EMsgGCPlayerStatsMatchSignOut */;
    case 8016:
    case "k_EMsgClientToGCSocialFeedPostCommentRequest":
      return 8016 /* k_EMsgClientToGCSocialFeedPostCommentRequest */;
    case 8017:
    case "k_EMsgGCToClientSocialFeedPostCommentResponse":
      return 8017 /* k_EMsgGCToClientSocialFeedPostCommentResponse */;
    case 8018:
    case "k_EMsgClientToGCCustomGamesFriendsPlayedRequest":
      return 8018 /* k_EMsgClientToGCCustomGamesFriendsPlayedRequest */;
    case 8019:
    case "k_EMsgGCToClientCustomGamesFriendsPlayedResponse":
      return 8019 /* k_EMsgGCToClientCustomGamesFriendsPlayedResponse */;
    case 8020:
    case "k_EMsgClientToGCFriendsPlayedCustomGameRequest":
      return 8020 /* k_EMsgClientToGCFriendsPlayedCustomGameRequest */;
    case 8021:
    case "k_EMsgGCToClientFriendsPlayedCustomGameResponse":
      return 8021 /* k_EMsgGCToClientFriendsPlayedCustomGameResponse */;
    case 8024:
    case "k_EMsgGCTopCustomGamesList":
      return 8024 /* k_EMsgGCTopCustomGamesList */;
    case 8029:
    case "k_EMsgClientToGCSetPartyOpen":
      return 8029 /* k_EMsgClientToGCSetPartyOpen */;
    case 8030:
    case "k_EMsgClientToGCMergePartyInvite":
      return 8030 /* k_EMsgClientToGCMergePartyInvite */;
    case 8031:
    case "k_EMsgGCToClientMergeGroupInviteReply":
      return 8031 /* k_EMsgGCToClientMergeGroupInviteReply */;
    case 8032:
    case "k_EMsgClientToGCMergePartyResponse":
      return 8032 /* k_EMsgClientToGCMergePartyResponse */;
    case 8033:
    case "k_EMsgGCToClientMergePartyResponseReply":
      return 8033 /* k_EMsgGCToClientMergePartyResponseReply */;
    case 8034:
    case "k_EMsgClientToGCGetProfileCardStats":
      return 8034 /* k_EMsgClientToGCGetProfileCardStats */;
    case 8035:
    case "k_EMsgClientToGCGetProfileCardStatsResponse":
      return 8035 /* k_EMsgClientToGCGetProfileCardStatsResponse */;
    case 8036:
    case "k_EMsgClientToGCTopLeagueMatchesRequest":
      return 8036 /* k_EMsgClientToGCTopLeagueMatchesRequest */;
    case 8037:
    case "k_EMsgClientToGCTopFriendMatchesRequest":
      return 8037 /* k_EMsgClientToGCTopFriendMatchesRequest */;
    case 8040:
    case "k_EMsgGCToClientProfileCardStatsUpdated":
      return 8040 /* k_EMsgGCToClientProfileCardStatsUpdated */;
    case 8041:
    case "k_EMsgServerToGCRealtimeStats":
      return 8041 /* k_EMsgServerToGCRealtimeStats */;
    case 8042:
    case "k_EMsgGCToServerRealtimeStatsStartStop":
      return 8042 /* k_EMsgGCToServerRealtimeStatsStartStop */;
    case 8045:
    case "k_EMsgGCToGCGetServersForClients":
      return 8045 /* k_EMsgGCToGCGetServersForClients */;
    case 8046:
    case "k_EMsgGCToGCGetServersForClientsResponse":
      return 8046 /* k_EMsgGCToGCGetServersForClientsResponse */;
    case 8047:
    case "k_EMsgGCPracticeLobbyKickFromTeam":
      return 8047 /* k_EMsgGCPracticeLobbyKickFromTeam */;
    case 8048:
    case "k_EMsgDOTAChatGetMemberCount":
      return 8048 /* k_EMsgDOTAChatGetMemberCount */;
    case 8049:
    case "k_EMsgDOTAChatGetMemberCountResponse":
      return 8049 /* k_EMsgDOTAChatGetMemberCountResponse */;
    case 8050:
    case "k_EMsgClientToGCSocialFeedPostMessageRequest":
      return 8050 /* k_EMsgClientToGCSocialFeedPostMessageRequest */;
    case 8051:
    case "k_EMsgGCToClientSocialFeedPostMessageResponse":
      return 8051 /* k_EMsgGCToClientSocialFeedPostMessageResponse */;
    case 8052:
    case "k_EMsgCustomGameListenServerStartedLoading":
      return 8052 /* k_EMsgCustomGameListenServerStartedLoading */;
    case 8053:
    case "k_EMsgCustomGameClientFinishedLoading":
      return 8053 /* k_EMsgCustomGameClientFinishedLoading */;
    case 8054:
    case "k_EMsgGCPracticeLobbyCloseBroadcastChannel":
      return 8054 /* k_EMsgGCPracticeLobbyCloseBroadcastChannel */;
    case 8055:
    case "k_EMsgGCStartFindingMatchResponse":
      return 8055 /* k_EMsgGCStartFindingMatchResponse */;
    case 8057:
    case "k_EMsgSQLGCToGCGrantAccountFlag":
      return 8057 /* k_EMsgSQLGCToGCGrantAccountFlag */;
    case 8061:
    case "k_EMsgGCToClientTopLeagueMatchesResponse":
      return 8061 /* k_EMsgGCToClientTopLeagueMatchesResponse */;
    case 8062:
    case "k_EMsgGCToClientTopFriendMatchesResponse":
      return 8062 /* k_EMsgGCToClientTopFriendMatchesResponse */;
    case 8063:
    case "k_EMsgClientToGCMatchesMinimalRequest":
      return 8063 /* k_EMsgClientToGCMatchesMinimalRequest */;
    case 8064:
    case "k_EMsgClientToGCMatchesMinimalResponse":
      return 8064 /* k_EMsgClientToGCMatchesMinimalResponse */;
    case 8067:
    case "k_EMsgGCToClientChatRegionsEnabled":
      return 8067 /* k_EMsgGCToClientChatRegionsEnabled */;
    case 8068:
    case "k_EMsgClientToGCPingData":
      return 8068 /* k_EMsgClientToGCPingData */;
    case 8071:
    case "k_EMsgGCToGCEnsureAccountInParty":
      return 8071 /* k_EMsgGCToGCEnsureAccountInParty */;
    case 8072:
    case "k_EMsgGCToGCEnsureAccountInPartyResponse":
      return 8072 /* k_EMsgGCToGCEnsureAccountInPartyResponse */;
    case 8073:
    case "k_EMsgClientToGCGetProfileTickets":
      return 8073 /* k_EMsgClientToGCGetProfileTickets */;
    case 8074:
    case "k_EMsgClientToGCGetProfileTicketsResponse":
      return 8074 /* k_EMsgClientToGCGetProfileTicketsResponse */;
    case 8075:
    case "k_EMsgGCToClientMatchGroupsVersion":
      return 8075 /* k_EMsgGCToClientMatchGroupsVersion */;
    case 8076:
    case "k_EMsgClientToGCH264Unsupported":
      return 8076 /* k_EMsgClientToGCH264Unsupported */;
    case 8078:
    case "k_EMsgClientToGCGetQuestProgress":
      return 8078 /* k_EMsgClientToGCGetQuestProgress */;
    case 8079:
    case "k_EMsgClientToGCGetQuestProgressResponse":
      return 8079 /* k_EMsgClientToGCGetQuestProgressResponse */;
    case 8080:
    case "k_EMsgSignOutXPCoins":
      return 8080 /* k_EMsgSignOutXPCoins */;
    case 8081:
    case "k_EMsgGCToClientMatchSignedOut":
      return 8081 /* k_EMsgGCToClientMatchSignedOut */;
    case 8082:
    case "k_EMsgGCGetHeroStatsHistory":
      return 8082 /* k_EMsgGCGetHeroStatsHistory */;
    case 8083:
    case "k_EMsgGCGetHeroStatsHistoryResponse":
      return 8083 /* k_EMsgGCGetHeroStatsHistoryResponse */;
    case 8084:
    case "k_EMsgClientToGCPrivateChatInvite":
      return 8084 /* k_EMsgClientToGCPrivateChatInvite */;
    case 8088:
    case "k_EMsgClientToGCPrivateChatKick":
      return 8088 /* k_EMsgClientToGCPrivateChatKick */;
    case 8089:
    case "k_EMsgClientToGCPrivateChatPromote":
      return 8089 /* k_EMsgClientToGCPrivateChatPromote */;
    case 8090:
    case "k_EMsgClientToGCPrivateChatDemote":
      return 8090 /* k_EMsgClientToGCPrivateChatDemote */;
    case 8091:
    case "k_EMsgGCToClientPrivateChatResponse":
      return 8091 /* k_EMsgGCToClientPrivateChatResponse */;
    case 8095:
    case "k_EMsgClientToGCLatestConductScorecardRequest":
      return 8095 /* k_EMsgClientToGCLatestConductScorecardRequest */;
    case 8096:
    case "k_EMsgClientToGCLatestConductScorecard":
      return 8096 /* k_EMsgClientToGCLatestConductScorecard */;
    case 8099:
    case "k_EMsgClientToGCWageringRequest":
      return 8099 /* k_EMsgClientToGCWageringRequest */;
    case 8100:
    case "k_EMsgGCToClientWageringResponse":
      return 8100 /* k_EMsgGCToClientWageringResponse */;
    case 8103:
    case "k_EMsgClientToGCEventGoalsRequest":
      return 8103 /* k_EMsgClientToGCEventGoalsRequest */;
    case 8104:
    case "k_EMsgClientToGCEventGoalsResponse":
      return 8104 /* k_EMsgClientToGCEventGoalsResponse */;
    case 8108:
    case "k_EMsgGCToGCLeaguePredictionsUpdate":
      return 8108 /* k_EMsgGCToGCLeaguePredictionsUpdate */;
    case 8110:
    case "k_EMsgGCToGCAddUserToPostGameChat":
      return 8110 /* k_EMsgGCToGCAddUserToPostGameChat */;
    case 8111:
    case "k_EMsgClientToGCHasPlayerVotedForMVP":
      return 8111 /* k_EMsgClientToGCHasPlayerVotedForMVP */;
    case 8112:
    case "k_EMsgClientToGCHasPlayerVotedForMVPResponse":
      return 8112 /* k_EMsgClientToGCHasPlayerVotedForMVPResponse */;
    case 8113:
    case "k_EMsgClientToGCVoteForMVP":
      return 8113 /* k_EMsgClientToGCVoteForMVP */;
    case 8114:
    case "k_EMsgClientToGCVoteForMVPResponse":
      return 8114 /* k_EMsgClientToGCVoteForMVPResponse */;
    case 8115:
    case "k_EMsgGCToGCGetEventParticipation":
      return 8115 /* k_EMsgGCToGCGetEventParticipation */;
    case 8116:
    case "k_EMsgGCToGCGetEventParticipationResponse":
      return 8116 /* k_EMsgGCToGCGetEventParticipationResponse */;
    case 8117:
    case "k_EMsgGCToClientAutomatedTournamentStateChange":
      return 8117 /* k_EMsgGCToClientAutomatedTournamentStateChange */;
    case 8118:
    case "k_EMsgClientToGCWeekendTourneyOpts":
      return 8118 /* k_EMsgClientToGCWeekendTourneyOpts */;
    case 8119:
    case "k_EMsgClientToGCWeekendTourneyOptsResponse":
      return 8119 /* k_EMsgClientToGCWeekendTourneyOptsResponse */;
    case 8120:
    case "k_EMsgClientToGCWeekendTourneyLeave":
      return 8120 /* k_EMsgClientToGCWeekendTourneyLeave */;
    case 8121:
    case "k_EMsgClientToGCWeekendTourneyLeaveResponse":
      return 8121 /* k_EMsgClientToGCWeekendTourneyLeaveResponse */;
    case 8124:
    case "k_EMsgClientToGCTeammateStatsRequest":
      return 8124 /* k_EMsgClientToGCTeammateStatsRequest */;
    case 8125:
    case "k_EMsgClientToGCTeammateStatsResponse":
      return 8125 /* k_EMsgClientToGCTeammateStatsResponse */;
    case 8126:
    case "k_EMsgClientToGCGetGiftPermissions":
      return 8126 /* k_EMsgClientToGCGetGiftPermissions */;
    case 8127:
    case "k_EMsgClientToGCGetGiftPermissionsResponse":
      return 8127 /* k_EMsgClientToGCGetGiftPermissionsResponse */;
    case 8128:
    case "k_EMsgClientToGCVoteForArcana":
      return 8128 /* k_EMsgClientToGCVoteForArcana */;
    case 8129:
    case "k_EMsgClientToGCVoteForArcanaResponse":
      return 8129 /* k_EMsgClientToGCVoteForArcanaResponse */;
    case 8130:
    case "k_EMsgClientToGCRequestArcanaVotesRemaining":
      return 8130 /* k_EMsgClientToGCRequestArcanaVotesRemaining */;
    case 8131:
    case "k_EMsgClientToGCRequestArcanaVotesRemainingResponse":
      return 8131 /* k_EMsgClientToGCRequestArcanaVotesRemainingResponse */;
    case 8132:
    case "k_EMsgGCTransferTeamAdminResponse":
      return 8132 /* k_EMsgGCTransferTeamAdminResponse */;
    case 8135:
    case "k_EMsgGCToClientTeamInfo":
      return 8135 /* k_EMsgGCToClientTeamInfo */;
    case 8136:
    case "k_EMsgGCToClientTeamsInfo":
      return 8136 /* k_EMsgGCToClientTeamsInfo */;
    case 8137:
    case "k_EMsgClientToGCMyTeamInfoRequest":
      return 8137 /* k_EMsgClientToGCMyTeamInfoRequest */;
    case 8140:
    case "k_EMsgClientToGCPublishUserStat":
      return 8140 /* k_EMsgClientToGCPublishUserStat */;
    case 8141:
    case "k_EMsgGCToGCSignoutSpendWager":
      return 8141 /* k_EMsgGCToGCSignoutSpendWager */;
    case 8144:
    case "k_EMsgGCSubmitLobbyMVPVote":
      return 8144 /* k_EMsgGCSubmitLobbyMVPVote */;
    case 8145:
    case "k_EMsgGCSubmitLobbyMVPVoteResponse":
      return 8145 /* k_EMsgGCSubmitLobbyMVPVoteResponse */;
    case 8150:
    case "k_EMsgSignOutCommunityGoalProgress":
      return 8150 /* k_EMsgSignOutCommunityGoalProgress */;
    case 8152:
    case "k_EMsgGCToClientLobbyMVPAwarded":
      return 8152 /* k_EMsgGCToClientLobbyMVPAwarded */;
    case 8153:
    case "k_EMsgGCToClientQuestProgressUpdated":
      return 8153 /* k_EMsgGCToClientQuestProgressUpdated */;
    case 8154:
    case "k_EMsgGCToClientWageringUpdate":
      return 8154 /* k_EMsgGCToClientWageringUpdate */;
    case 8155:
    case "k_EMsgGCToClientArcanaVotesUpdate":
      return 8155 /* k_EMsgGCToClientArcanaVotesUpdate */;
    case 8157:
    case "k_EMsgClientToGCSetSpectatorLobbyDetails":
      return 8157 /* k_EMsgClientToGCSetSpectatorLobbyDetails */;
    case 8158:
    case "k_EMsgClientToGCSetSpectatorLobbyDetailsResponse":
      return 8158 /* k_EMsgClientToGCSetSpectatorLobbyDetailsResponse */;
    case 8159:
    case "k_EMsgClientToGCCreateSpectatorLobby":
      return 8159 /* k_EMsgClientToGCCreateSpectatorLobby */;
    case 8160:
    case "k_EMsgClientToGCCreateSpectatorLobbyResponse":
      return 8160 /* k_EMsgClientToGCCreateSpectatorLobbyResponse */;
    case 8161:
    case "k_EMsgClientToGCSpectatorLobbyList":
      return 8161 /* k_EMsgClientToGCSpectatorLobbyList */;
    case 8162:
    case "k_EMsgClientToGCSpectatorLobbyListResponse":
      return 8162 /* k_EMsgClientToGCSpectatorLobbyListResponse */;
    case 8163:
    case "k_EMsgSpectatorLobbyGameDetails":
      return 8163 /* k_EMsgSpectatorLobbyGameDetails */;
    case 8166:
    case "k_EMsgServerToGCCompendiumInGamePredictionResults":
      return 8166 /* k_EMsgServerToGCCompendiumInGamePredictionResults */;
    case 8167:
    case "k_EMsgServerToGCCloseCompendiumInGamePredictionVoting":
      return 8167 /* k_EMsgServerToGCCloseCompendiumInGamePredictionVoting */;
    case 8168:
    case "k_EMsgClientToGCOpenPlayerCardPack":
      return 8168 /* k_EMsgClientToGCOpenPlayerCardPack */;
    case 8169:
    case "k_EMsgClientToGCOpenPlayerCardPackResponse":
      return 8169 /* k_EMsgClientToGCOpenPlayerCardPackResponse */;
    case 8170:
    case "k_EMsgClientToGCSelectCompendiumInGamePrediction":
      return 8170 /* k_EMsgClientToGCSelectCompendiumInGamePrediction */;
    case 8171:
    case "k_EMsgClientToGCSelectCompendiumInGamePredictionResponse":
      return 8171 /* k_EMsgClientToGCSelectCompendiumInGamePredictionResponse */;
    case 8172:
    case "k_EMsgClientToGCWeekendTourneyGetPlayerStats":
      return 8172 /* k_EMsgClientToGCWeekendTourneyGetPlayerStats */;
    case 8173:
    case "k_EMsgClientToGCWeekendTourneyGetPlayerStatsResponse":
      return 8173 /* k_EMsgClientToGCWeekendTourneyGetPlayerStatsResponse */;
    case 8174:
    case "k_EMsgClientToGCRecyclePlayerCard":
      return 8174 /* k_EMsgClientToGCRecyclePlayerCard */;
    case 8175:
    case "k_EMsgClientToGCRecyclePlayerCardResponse":
      return 8175 /* k_EMsgClientToGCRecyclePlayerCardResponse */;
    case 8176:
    case "k_EMsgClientToGCCreatePlayerCardPack":
      return 8176 /* k_EMsgClientToGCCreatePlayerCardPack */;
    case 8177:
    case "k_EMsgClientToGCCreatePlayerCardPackResponse":
      return 8177 /* k_EMsgClientToGCCreatePlayerCardPackResponse */;
    case 8178:
    case "k_EMsgClientToGCGetPlayerCardRosterRequest":
      return 8178 /* k_EMsgClientToGCGetPlayerCardRosterRequest */;
    case 8179:
    case "k_EMsgClientToGCGetPlayerCardRosterResponse":
      return 8179 /* k_EMsgClientToGCGetPlayerCardRosterResponse */;
    case 8180:
    case "k_EMsgClientToGCSetPlayerCardRosterRequest":
      return 8180 /* k_EMsgClientToGCSetPlayerCardRosterRequest */;
    case 8181:
    case "k_EMsgClientToGCSetPlayerCardRosterResponse":
      return 8181 /* k_EMsgClientToGCSetPlayerCardRosterResponse */;
    case 8183:
    case "k_EMsgServerToGCCloseCompendiumInGamePredictionVotingResponse":
      return 8183 /* k_EMsgServerToGCCloseCompendiumInGamePredictionVotingResponse */;
    case 8186:
    case "k_EMsgLobbyBattleCupVictory":
      return 8186 /* k_EMsgLobbyBattleCupVictory */;
    case 8187:
    case "k_EMsgGCGetPlayerCardItemInfo":
      return 8187 /* k_EMsgGCGetPlayerCardItemInfo */;
    case 8188:
    case "k_EMsgGCGetPlayerCardItemInfoResponse":
      return 8188 /* k_EMsgGCGetPlayerCardItemInfoResponse */;
    case 8189:
    case "k_EMsgClientToGCRequestSteamDatagramTicket":
      return 8189 /* k_EMsgClientToGCRequestSteamDatagramTicket */;
    case 8190:
    case "k_EMsgClientToGCRequestSteamDatagramTicketResponse":
      return 8190 /* k_EMsgClientToGCRequestSteamDatagramTicketResponse */;
    case 8191:
    case "k_EMsgGCToClientBattlePassRollupRequest":
      return 8191 /* k_EMsgGCToClientBattlePassRollupRequest */;
    case 8192:
    case "k_EMsgGCToClientBattlePassRollupResponse":
      return 8192 /* k_EMsgGCToClientBattlePassRollupResponse */;
    case 8193:
    case "k_EMsgClientToGCTransferSeasonalMMRRequest":
      return 8193 /* k_EMsgClientToGCTransferSeasonalMMRRequest */;
    case 8194:
    case "k_EMsgClientToGCTransferSeasonalMMRResponse":
      return 8194 /* k_EMsgClientToGCTransferSeasonalMMRResponse */;
    case 8195:
    case "k_EMsgGCToGCPublicChatCommunicationBan":
      return 8195 /* k_EMsgGCToGCPublicChatCommunicationBan */;
    case 8196:
    case "k_EMsgGCToGCUpdateAccountInfo":
      return 8196 /* k_EMsgGCToGCUpdateAccountInfo */;
    case 8197:
    case "k_EMsgGCChatReportPublicSpam":
      return 8197 /* k_EMsgGCChatReportPublicSpam */;
    case 8198:
    case "k_EMsgClientToGCSetPartyBuilderOptions":
      return 8198 /* k_EMsgClientToGCSetPartyBuilderOptions */;
    case 8199:
    case "k_EMsgClientToGCSetPartyBuilderOptionsResponse":
      return 8199 /* k_EMsgClientToGCSetPartyBuilderOptionsResponse */;
    case 8200:
    case "k_EMsgGCToClientPlaytestStatus":
      return 8200 /* k_EMsgGCToClientPlaytestStatus */;
    case 8201:
    case "k_EMsgClientToGCJoinPlaytest":
      return 8201 /* k_EMsgClientToGCJoinPlaytest */;
    case 8202:
    case "k_EMsgClientToGCJoinPlaytestResponse":
      return 8202 /* k_EMsgClientToGCJoinPlaytestResponse */;
    case 8203:
    case "k_EMsgLobbyPlaytestDetails":
      return 8203 /* k_EMsgLobbyPlaytestDetails */;
    case 8204:
    case "k_EMsgDOTASetFavoriteTeam":
      return 8204 /* k_EMsgDOTASetFavoriteTeam */;
    case 8205:
    case "k_EMsgGCToClientBattlePassRollupListRequest":
      return 8205 /* k_EMsgGCToClientBattlePassRollupListRequest */;
    case 8206:
    case "k_EMsgGCToClientBattlePassRollupListResponse":
      return 8206 /* k_EMsgGCToClientBattlePassRollupListResponse */;
    case 8209:
    case "k_EMsgDOTAClaimEventAction":
      return 8209 /* k_EMsgDOTAClaimEventAction */;
    case 8210:
    case "k_EMsgDOTAClaimEventActionResponse":
      return 8210 /* k_EMsgDOTAClaimEventActionResponse */;
    case 8211:
    case "k_EMsgDOTAGetPeriodicResource":
      return 8211 /* k_EMsgDOTAGetPeriodicResource */;
    case 8212:
    case "k_EMsgDOTAGetPeriodicResourceResponse":
      return 8212 /* k_EMsgDOTAGetPeriodicResourceResponse */;
    case 8213:
    case "k_EMsgDOTAPeriodicResourceUpdated":
      return 8213 /* k_EMsgDOTAPeriodicResourceUpdated */;
    case 8214:
    case "k_EMsgServerToGCSpendWager":
      return 8214 /* k_EMsgServerToGCSpendWager */;
    case 8215:
    case "k_EMsgGCToGCSignoutSpendWagerToken":
      return 8215 /* k_EMsgGCToGCSignoutSpendWagerToken */;
    case 8216:
    case "k_EMsgSubmitTriviaQuestionAnswer":
      return 8216 /* k_EMsgSubmitTriviaQuestionAnswer */;
    case 8217:
    case "k_EMsgSubmitTriviaQuestionAnswerResponse":
      return 8217 /* k_EMsgSubmitTriviaQuestionAnswerResponse */;
    case 8218:
    case "k_EMsgClientToGCGiveTip":
      return 8218 /* k_EMsgClientToGCGiveTip */;
    case 8219:
    case "k_EMsgClientToGCGiveTipResponse":
      return 8219 /* k_EMsgClientToGCGiveTipResponse */;
    case 8220:
    case "k_EMsgStartTriviaSession":
      return 8220 /* k_EMsgStartTriviaSession */;
    case 8221:
    case "k_EMsgStartTriviaSessionResponse":
      return 8221 /* k_EMsgStartTriviaSessionResponse */;
    case 8222:
    case "k_EMsgAnchorPhoneNumberRequest":
      return 8222 /* k_EMsgAnchorPhoneNumberRequest */;
    case 8223:
    case "k_EMsgAnchorPhoneNumberResponse":
      return 8223 /* k_EMsgAnchorPhoneNumberResponse */;
    case 8224:
    case "k_EMsgUnanchorPhoneNumberRequest":
      return 8224 /* k_EMsgUnanchorPhoneNumberRequest */;
    case 8225:
    case "k_EMsgUnanchorPhoneNumberResponse":
      return 8225 /* k_EMsgUnanchorPhoneNumberResponse */;
    case 8229:
    case "k_EMsgGCToGCSignoutSpendRankWager":
      return 8229 /* k_EMsgGCToGCSignoutSpendRankWager */;
    case 8230:
    case "k_EMsgGCToGCGetFavoriteTeam":
      return 8230 /* k_EMsgGCToGCGetFavoriteTeam */;
    case 8231:
    case "k_EMsgGCToGCGetFavoriteTeamResponse":
      return 8231 /* k_EMsgGCToGCGetFavoriteTeamResponse */;
    case 8232:
    case "k_EMsgSignOutEventGameData":
      return 8232 /* k_EMsgSignOutEventGameData */;
    case 8238:
    case "k_EMsgClientToGCQuickStatsRequest":
      return 8238 /* k_EMsgClientToGCQuickStatsRequest */;
    case 8239:
    case "k_EMsgClientToGCQuickStatsResponse":
      return 8239 /* k_EMsgClientToGCQuickStatsResponse */;
    case 8240:
    case "k_EMsgGCToGCSubtractEventPointsFromUser":
      return 8240 /* k_EMsgGCToGCSubtractEventPointsFromUser */;
    case 8241:
    case "k_EMsgSelectionPriorityChoiceRequest":
      return 8241 /* k_EMsgSelectionPriorityChoiceRequest */;
    case 8242:
    case "k_EMsgSelectionPriorityChoiceResponse":
      return 8242 /* k_EMsgSelectionPriorityChoiceResponse */;
    case 8243:
    case "k_EMsgGCToGCCompendiumInGamePredictionResults":
      return 8243 /* k_EMsgGCToGCCompendiumInGamePredictionResults */;
    case 8244:
    case "k_EMsgGameAutographReward":
      return 8244 /* k_EMsgGameAutographReward */;
    case 8245:
    case "k_EMsgGameAutographRewardResponse":
      return 8245 /* k_EMsgGameAutographRewardResponse */;
    case 8246:
    case "k_EMsgDestroyLobbyRequest":
      return 8246 /* k_EMsgDestroyLobbyRequest */;
    case 8247:
    case "k_EMsgDestroyLobbyResponse":
      return 8247 /* k_EMsgDestroyLobbyResponse */;
    case 8248:
    case "k_EMsgPurchaseItemWithEventPoints":
      return 8248 /* k_EMsgPurchaseItemWithEventPoints */;
    case 8249:
    case "k_EMsgPurchaseItemWithEventPointsResponse":
      return 8249 /* k_EMsgPurchaseItemWithEventPointsResponse */;
    case 8250:
    case "k_EMsgServerToGCMatchPlayerItemPurchaseHistory":
      return 8250 /* k_EMsgServerToGCMatchPlayerItemPurchaseHistory */;
    case 8251:
    case "k_EMsgGCToGCGrantPlusHeroMatchResults":
      return 8251 /* k_EMsgGCToGCGrantPlusHeroMatchResults */;
    case 8255:
    case "k_EMsgServerToGCMatchStateHistory":
      return 8255 /* k_EMsgServerToGCMatchStateHistory */;
    case 8258:
    case "k_EMsgPurchaseHeroRandomRelic":
      return 8258 /* k_EMsgPurchaseHeroRandomRelic */;
    case 8259:
    case "k_EMsgPurchaseHeroRandomRelicResponse":
      return 8259 /* k_EMsgPurchaseHeroRandomRelicResponse */;
    case 8260:
    case "k_EMsgClientToGCClaimEventActionUsingItem":
      return 8260 /* k_EMsgClientToGCClaimEventActionUsingItem */;
    case 8261:
    case "k_EMsgClientToGCClaimEventActionUsingItemResponse":
      return 8261 /* k_EMsgClientToGCClaimEventActionUsingItemResponse */;
    case 8262:
    case "k_EMsgPartyReadyCheckRequest":
      return 8262 /* k_EMsgPartyReadyCheckRequest */;
    case 8263:
    case "k_EMsgPartyReadyCheckResponse":
      return 8263 /* k_EMsgPartyReadyCheckResponse */;
    case 8264:
    case "k_EMsgPartyReadyCheckAcknowledge":
      return 8264 /* k_EMsgPartyReadyCheckAcknowledge */;
    case 8265:
    case "k_EMsgGetRecentPlayTimeFriendsRequest":
      return 8265 /* k_EMsgGetRecentPlayTimeFriendsRequest */;
    case 8266:
    case "k_EMsgGetRecentPlayTimeFriendsResponse":
      return 8266 /* k_EMsgGetRecentPlayTimeFriendsResponse */;
    case 8267:
    case "k_EMsgGCToClientCommendNotification":
      return 8267 /* k_EMsgGCToClientCommendNotification */;
    case 8268:
    case "k_EMsgProfileRequest":
      return 8268 /* k_EMsgProfileRequest */;
    case 8269:
    case "k_EMsgProfileResponse":
      return 8269 /* k_EMsgProfileResponse */;
    case 8270:
    case "k_EMsgProfileUpdate":
      return 8270 /* k_EMsgProfileUpdate */;
    case 8271:
    case "k_EMsgProfileUpdateResponse":
      return 8271 /* k_EMsgProfileUpdateResponse */;
    case 8274:
    case "k_EMsgHeroGlobalDataRequest":
      return 8274 /* k_EMsgHeroGlobalDataRequest */;
    case 8275:
    case "k_EMsgHeroGlobalDataResponse":
      return 8275 /* k_EMsgHeroGlobalDataResponse */;
    case 8276:
    case "k_EMsgClientToGCRequestPlusWeeklyChallengeResult":
      return 8276 /* k_EMsgClientToGCRequestPlusWeeklyChallengeResult */;
    case 8277:
    case "k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse":
      return 8277 /* k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse */;
    case 8278:
    case "k_EMsgGCToGCGrantPlusPrepaidTime":
      return 8278 /* k_EMsgGCToGCGrantPlusPrepaidTime */;
    case 8279:
    case "k_EMsgPrivateMetadataKeyRequest":
      return 8279 /* k_EMsgPrivateMetadataKeyRequest */;
    case 8280:
    case "k_EMsgPrivateMetadataKeyResponse":
      return 8280 /* k_EMsgPrivateMetadataKeyResponse */;
    case 8281:
    case "k_EMsgGCToGCReconcilePlusStatus":
      return 8281 /* k_EMsgGCToGCReconcilePlusStatus */;
    case 8282:
    case "k_EMsgGCToGCCheckPlusStatus":
      return 8282 /* k_EMsgGCToGCCheckPlusStatus */;
    case 8283:
    case "k_EMsgGCToGCCheckPlusStatusResponse":
      return 8283 /* k_EMsgGCToGCCheckPlusStatusResponse */;
    case 8284:
    case "k_EMsgGCToGCReconcilePlusAutoGrantItems":
      return 8284 /* k_EMsgGCToGCReconcilePlusAutoGrantItems */;
    case 8285:
    case "k_EMsgGCToGCReconcilePlusStatusUnreliable":
      return 8285 /* k_EMsgGCToGCReconcilePlusStatusUnreliable */;
    case 8288:
    case "k_EMsgGCToClientCavernCrawlMapPathCompleted":
      return 8288 /* k_EMsgGCToClientCavernCrawlMapPathCompleted */;
    case 8289:
    case "k_EMsgClientToGCCavernCrawlClaimRoom":
      return 8289 /* k_EMsgClientToGCCavernCrawlClaimRoom */;
    case 8290:
    case "k_EMsgClientToGCCavernCrawlClaimRoomResponse":
      return 8290 /* k_EMsgClientToGCCavernCrawlClaimRoomResponse */;
    case 8291:
    case "k_EMsgClientToGCCavernCrawlUseItemOnRoom":
      return 8291 /* k_EMsgClientToGCCavernCrawlUseItemOnRoom */;
    case 8292:
    case "k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse":
      return 8292 /* k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse */;
    case 8293:
    case "k_EMsgClientToGCCavernCrawlUseItemOnPath":
      return 8293 /* k_EMsgClientToGCCavernCrawlUseItemOnPath */;
    case 8294:
    case "k_EMsgClientToGCCavernCrawlUseItemOnPathResponse":
      return 8294 /* k_EMsgClientToGCCavernCrawlUseItemOnPathResponse */;
    case 8295:
    case "k_EMsgClientToGCCavernCrawlRequestMapState":
      return 8295 /* k_EMsgClientToGCCavernCrawlRequestMapState */;
    case 8296:
    case "k_EMsgClientToGCCavernCrawlRequestMapStateResponse":
      return 8296 /* k_EMsgClientToGCCavernCrawlRequestMapStateResponse */;
    case 8297:
    case "k_EMsgSignOutTips":
      return 8297 /* k_EMsgSignOutTips */;
    case 8298:
    case "k_EMsgClientToGCRequestEventPointLogV2":
      return 8298 /* k_EMsgClientToGCRequestEventPointLogV2 */;
    case 8299:
    case "k_EMsgClientToGCRequestEventPointLogResponseV2":
      return 8299 /* k_EMsgClientToGCRequestEventPointLogResponseV2 */;
    case 8300:
    case "k_EMsgClientToGCRequestEventTipsSummary":
      return 8300 /* k_EMsgClientToGCRequestEventTipsSummary */;
    case 8301:
    case "k_EMsgClientToGCRequestEventTipsSummaryResponse":
      return 8301 /* k_EMsgClientToGCRequestEventTipsSummaryResponse */;
    case 8303:
    case "k_EMsgClientToGCRequestSocialFeed":
      return 8303 /* k_EMsgClientToGCRequestSocialFeed */;
    case 8304:
    case "k_EMsgClientToGCRequestSocialFeedResponse":
      return 8304 /* k_EMsgClientToGCRequestSocialFeedResponse */;
    case 8305:
    case "k_EMsgClientToGCRequestSocialFeedComments":
      return 8305 /* k_EMsgClientToGCRequestSocialFeedComments */;
    case 8306:
    case "k_EMsgClientToGCRequestSocialFeedCommentsResponse":
      return 8306 /* k_EMsgClientToGCRequestSocialFeedCommentsResponse */;
    case 8308:
    case "k_EMsgClientToGCCavernCrawlGetClaimedRoomCount":
      return 8308 /* k_EMsgClientToGCCavernCrawlGetClaimedRoomCount */;
    case 8309:
    case "k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse":
      return 8309 /* k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse */;
    case 8310:
    case "k_EMsgGCToGCReconcilePlusAutoGrantItemsUnreliable":
      return 8310 /* k_EMsgGCToGCReconcilePlusAutoGrantItemsUnreliable */;
    case 8311:
    case "k_EMsgServerToGCAddBroadcastTimelineEvent":
      return 8311 /* k_EMsgServerToGCAddBroadcastTimelineEvent */;
    case 8312:
    case "k_EMsgGCToServerUpdateSteamBroadcasting":
      return 8312 /* k_EMsgGCToServerUpdateSteamBroadcasting */;
    case 8313:
    case "k_EMsgClientToGCRecordContestVote":
      return 8313 /* k_EMsgClientToGCRecordContestVote */;
    case 8314:
    case "k_EMsgGCToClientRecordContestVoteResponse":
      return 8314 /* k_EMsgGCToClientRecordContestVoteResponse */;
    case 8315:
    case "k_EMsgGCToGCGrantAutograph":
      return 8315 /* k_EMsgGCToGCGrantAutograph */;
    case 8316:
    case "k_EMsgGCToGCGrantAutographResponse":
      return 8316 /* k_EMsgGCToGCGrantAutographResponse */;
    case 8317:
    case "k_EMsgSignOutConsumableUsage":
      return 8317 /* k_EMsgSignOutConsumableUsage */;
    case 8318:
    case "k_EMsgLobbyEventGameDetails":
      return 8318 /* k_EMsgLobbyEventGameDetails */;
    case 8319:
    case "k_EMsgDevGrantEventPoints":
      return 8319 /* k_EMsgDevGrantEventPoints */;
    case 8320:
    case "k_EMsgDevGrantEventPointsResponse":
      return 8320 /* k_EMsgDevGrantEventPointsResponse */;
    case 8321:
    case "k_EMsgDevGrantEventAction":
      return 8321 /* k_EMsgDevGrantEventAction */;
    case 8322:
    case "k_EMsgDevGrantEventActionResponse":
      return 8322 /* k_EMsgDevGrantEventActionResponse */;
    case 8323:
    case "k_EMsgDevResetEventState":
      return 8323 /* k_EMsgDevResetEventState */;
    case 8324:
    case "k_EMsgDevResetEventStateResponse":
      return 8324 /* k_EMsgDevResetEventStateResponse */;
    case 8325:
    case "k_EMsgGCToGCReconcileEventOwnership":
      return 8325 /* k_EMsgGCToGCReconcileEventOwnership */;
    case 8326:
    case "k_EMsgConsumeEventSupportGrantItem":
      return 8326 /* k_EMsgConsumeEventSupportGrantItem */;
    case 8327:
    case "k_EMsgConsumeEventSupportGrantItemResponse":
      return 8327 /* k_EMsgConsumeEventSupportGrantItemResponse */;
    case 8328:
    case "k_EMsgGCToClientClaimEventActionUsingItemCompleted":
      return 8328 /* k_EMsgGCToClientClaimEventActionUsingItemCompleted */;
    case 8329:
    case "k_EMsgGCToClientCavernCrawlMapUpdated":
      return 8329 /* k_EMsgGCToClientCavernCrawlMapUpdated */;
    case 8330:
    case "k_EMsgServerToGCRequestPlayerRecentAccomplishments":
      return 8330 /* k_EMsgServerToGCRequestPlayerRecentAccomplishments */;
    case 8331:
    case "k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse":
      return 8331 /* k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse */;
    case 8332:
    case "k_EMsgClientToGCRequestPlayerRecentAccomplishments":
      return 8332 /* k_EMsgClientToGCRequestPlayerRecentAccomplishments */;
    case 8333:
    case "k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse":
      return 8333 /* k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse */;
    case 8334:
    case "k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments":
      return 8334 /* k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments */;
    case 8335:
    case "k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse":
      return 8335 /* k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse */;
    case 8336:
    case "k_EMsgSignOutEventActionGrants":
      return 8336 /* k_EMsgSignOutEventActionGrants */;
    case 8337:
    case "k_EMsgClientToGCRequestPlayerCoachMatches":
      return 8337 /* k_EMsgClientToGCRequestPlayerCoachMatches */;
    case 8338:
    case "k_EMsgClientToGCRequestPlayerCoachMatchesResponse":
      return 8338 /* k_EMsgClientToGCRequestPlayerCoachMatchesResponse */;
    case 8341:
    case "k_EMsgClientToGCSubmitCoachTeammateRating":
      return 8341 /* k_EMsgClientToGCSubmitCoachTeammateRating */;
    case 8342:
    case "k_EMsgClientToGCSubmitCoachTeammateRatingResponse":
      return 8342 /* k_EMsgClientToGCSubmitCoachTeammateRatingResponse */;
    case 8343:
    case "k_EMsgGCToClientCoachTeammateRatingsChanged":
      return 8343 /* k_EMsgGCToClientCoachTeammateRatingsChanged */;
    case 8345:
    case "k_EMsgClientToGCRequestPlayerCoachMatch":
      return 8345 /* k_EMsgClientToGCRequestPlayerCoachMatch */;
    case 8346:
    case "k_EMsgClientToGCRequestPlayerCoachMatchResponse":
      return 8346 /* k_EMsgClientToGCRequestPlayerCoachMatchResponse */;
    case 8347:
    case "k_EMsgClientToGCRequestContestVotes":
      return 8347 /* k_EMsgClientToGCRequestContestVotes */;
    case 8348:
    case "k_EMsgClientToGCRequestContestVotesResponse":
      return 8348 /* k_EMsgClientToGCRequestContestVotesResponse */;
    case 8349:
    case "k_EMsgClientToGCMVPVoteTimeout":
      return 8349 /* k_EMsgClientToGCMVPVoteTimeout */;
    case 8350:
    case "k_EMsgClientToGCMVPVoteTimeoutResponse":
      return 8350 /* k_EMsgClientToGCMVPVoteTimeoutResponse */;
    case 8360:
    case "k_EMsgMatchMatchmakingStats":
      return 8360 /* k_EMsgMatchMatchmakingStats */;
    case 8361:
    case "k_EMsgClientToGCSubmitPlayerMatchSurvey":
      return 8361 /* k_EMsgClientToGCSubmitPlayerMatchSurvey */;
    case 8362:
    case "k_EMsgClientToGCSubmitPlayerMatchSurveyResponse":
      return 8362 /* k_EMsgClientToGCSubmitPlayerMatchSurveyResponse */;
    case 8363:
    case "k_EMsgSQLGCToGCGrantAllHeroProgressAccount":
      return 8363 /* k_EMsgSQLGCToGCGrantAllHeroProgressAccount */;
    case 8364:
    case "k_EMsgSQLGCToGCGrantAllHeroProgressVictory":
      return 8364 /* k_EMsgSQLGCToGCGrantAllHeroProgressVictory */;
    case 8365:
    case "k_EMsgDevDeleteEventActions":
      return 8365 /* k_EMsgDevDeleteEventActions */;
    case 8366:
    case "k_EMsgDevDeleteEventActionsResponse":
      return 8366 /* k_EMsgDevDeleteEventActionsResponse */;
    case 8635:
    case "k_EMsgGCToGCGetAllHeroCurrent":
      return 8635 /* k_EMsgGCToGCGetAllHeroCurrent */;
    case 8636:
    case "k_EMsgGCToGCGetAllHeroCurrentResponse":
      return 8636 /* k_EMsgGCToGCGetAllHeroCurrentResponse */;
    case 8637:
    case "k_EMsgGCSubmitPlayerAvoidRequest":
      return 8637 /* k_EMsgGCSubmitPlayerAvoidRequest */;
    case 8638:
    case "k_EMsgGCSubmitPlayerAvoidRequestResponse":
      return 8638 /* k_EMsgGCSubmitPlayerAvoidRequestResponse */;
    case 8639:
    case "k_EMsgGCToClientNotificationsUpdated":
      return 8639 /* k_EMsgGCToClientNotificationsUpdated */;
    case 8640:
    case "k_EMsgGCtoGCAssociatedExploiterAccountInfo":
      return 8640 /* k_EMsgGCtoGCAssociatedExploiterAccountInfo */;
    case 8641:
    case "k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse":
      return 8641 /* k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse */;
    case 8642:
    case "k_EMsgGCtoGCRequestRecalibrationCheck":
      return 8642 /* k_EMsgGCtoGCRequestRecalibrationCheck */;
    case 8643:
    case "k_EMsgGCToClientVACReminder":
      return 8643 /* k_EMsgGCToClientVACReminder */;
    case 8644:
    case "k_EMsgClientToGCUnderDraftBuy":
      return 8644 /* k_EMsgClientToGCUnderDraftBuy */;
    case 8645:
    case "k_EMsgClientToGCUnderDraftBuyResponse":
      return 8645 /* k_EMsgClientToGCUnderDraftBuyResponse */;
    case 8646:
    case "k_EMsgClientToGCUnderDraftReroll":
      return 8646 /* k_EMsgClientToGCUnderDraftReroll */;
    case 8647:
    case "k_EMsgClientToGCUnderDraftRerollResponse":
      return 8647 /* k_EMsgClientToGCUnderDraftRerollResponse */;
    case 8648:
    case "k_EMsgNeutralItemStats":
      return 8648 /* k_EMsgNeutralItemStats */;
    case 8649:
    case "k_EMsgClientToGCCreateGuild":
      return 8649 /* k_EMsgClientToGCCreateGuild */;
    case 8650:
    case "k_EMsgClientToGCCreateGuildResponse":
      return 8650 /* k_EMsgClientToGCCreateGuildResponse */;
    case 8651:
    case "k_EMsgClientToGCSetGuildInfo":
      return 8651 /* k_EMsgClientToGCSetGuildInfo */;
    case 8652:
    case "k_EMsgClientToGCSetGuildInfoResponse":
      return 8652 /* k_EMsgClientToGCSetGuildInfoResponse */;
    case 8653:
    case "k_EMsgClientToGCAddGuildRole":
      return 8653 /* k_EMsgClientToGCAddGuildRole */;
    case 8654:
    case "k_EMsgClientToGCAddGuildRoleResponse":
      return 8654 /* k_EMsgClientToGCAddGuildRoleResponse */;
    case 8655:
    case "k_EMsgClientToGCModifyGuildRole":
      return 8655 /* k_EMsgClientToGCModifyGuildRole */;
    case 8656:
    case "k_EMsgClientToGCModifyGuildRoleResponse":
      return 8656 /* k_EMsgClientToGCModifyGuildRoleResponse */;
    case 8657:
    case "k_EMsgClientToGCRemoveGuildRole":
      return 8657 /* k_EMsgClientToGCRemoveGuildRole */;
    case 8658:
    case "k_EMsgClientToGCRemoveGuildRoleResponse":
      return 8658 /* k_EMsgClientToGCRemoveGuildRoleResponse */;
    case 8659:
    case "k_EMsgClientToGCJoinGuild":
      return 8659 /* k_EMsgClientToGCJoinGuild */;
    case 8660:
    case "k_EMsgClientToGCJoinGuildResponse":
      return 8660 /* k_EMsgClientToGCJoinGuildResponse */;
    case 8661:
    case "k_EMsgClientToGCLeaveGuild":
      return 8661 /* k_EMsgClientToGCLeaveGuild */;
    case 8662:
    case "k_EMsgClientToGCLeaveGuildResponse":
      return 8662 /* k_EMsgClientToGCLeaveGuildResponse */;
    case 8663:
    case "k_EMsgClientToGCInviteToGuild":
      return 8663 /* k_EMsgClientToGCInviteToGuild */;
    case 8664:
    case "k_EMsgClientToGCInviteToGuildResponse":
      return 8664 /* k_EMsgClientToGCInviteToGuildResponse */;
    case 8665:
    case "k_EMsgClientToGCDeclineInviteToGuild":
      return 8665 /* k_EMsgClientToGCDeclineInviteToGuild */;
    case 8666:
    case "k_EMsgClientToGCDeclineInviteToGuildResponse":
      return 8666 /* k_EMsgClientToGCDeclineInviteToGuildResponse */;
    case 8667:
    case "k_EMsgClientToGCCancelInviteToGuild":
      return 8667 /* k_EMsgClientToGCCancelInviteToGuild */;
    case 8668:
    case "k_EMsgClientToGCCancelInviteToGuildResponse":
      return 8668 /* k_EMsgClientToGCCancelInviteToGuildResponse */;
    case 8669:
    case "k_EMsgClientToGCKickGuildMember":
      return 8669 /* k_EMsgClientToGCKickGuildMember */;
    case 8670:
    case "k_EMsgClientToGCKickGuildMemberResponse":
      return 8670 /* k_EMsgClientToGCKickGuildMemberResponse */;
    case 8671:
    case "k_EMsgClientToGCSetGuildMemberRole":
      return 8671 /* k_EMsgClientToGCSetGuildMemberRole */;
    case 8672:
    case "k_EMsgClientToGCSetGuildMemberRoleResponse":
      return 8672 /* k_EMsgClientToGCSetGuildMemberRoleResponse */;
    case 8673:
    case "k_EMsgClientToGCRequestGuildData":
      return 8673 /* k_EMsgClientToGCRequestGuildData */;
    case 8674:
    case "k_EMsgClientToGCRequestGuildDataResponse":
      return 8674 /* k_EMsgClientToGCRequestGuildDataResponse */;
    case 8675:
    case "k_EMsgGCToClientGuildDataUpdated":
      return 8675 /* k_EMsgGCToClientGuildDataUpdated */;
    case 8676:
    case "k_EMsgClientToGCRequestGuildMembership":
      return 8676 /* k_EMsgClientToGCRequestGuildMembership */;
    case 8677:
    case "k_EMsgClientToGCRequestGuildMembershipResponse":
      return 8677 /* k_EMsgClientToGCRequestGuildMembershipResponse */;
    case 8678:
    case "k_EMsgGCToClientGuildMembershipUpdated":
      return 8678 /* k_EMsgGCToClientGuildMembershipUpdated */;
    case 8681:
    case "k_EMsgClientToGCAcceptInviteToGuild":
      return 8681 /* k_EMsgClientToGCAcceptInviteToGuild */;
    case 8682:
    case "k_EMsgClientToGCAcceptInviteToGuildResponse":
      return 8682 /* k_EMsgClientToGCAcceptInviteToGuildResponse */;
    case 8683:
    case "k_EMsgClientToGCSetGuildRoleOrder":
      return 8683 /* k_EMsgClientToGCSetGuildRoleOrder */;
    case 8684:
    case "k_EMsgClientToGCSetGuildRoleOrderResponse":
      return 8684 /* k_EMsgClientToGCSetGuildRoleOrderResponse */;
    case 8685:
    case "k_EMsgClientToGCRequestGuildFeed":
      return 8685 /* k_EMsgClientToGCRequestGuildFeed */;
    case 8686:
    case "k_EMsgClientToGCRequestGuildFeedResponse":
      return 8686 /* k_EMsgClientToGCRequestGuildFeedResponse */;
    case 8687:
    case "k_EMsgClientToGCRequestAccountGuildEventData":
      return 8687 /* k_EMsgClientToGCRequestAccountGuildEventData */;
    case 8688:
    case "k_EMsgClientToGCRequestAccountGuildEventDataResponse":
      return 8688 /* k_EMsgClientToGCRequestAccountGuildEventDataResponse */;
    case 8689:
    case "k_EMsgGCToClientAccountGuildEventDataUpdated":
      return 8689 /* k_EMsgGCToClientAccountGuildEventDataUpdated */;
    case 8690:
    case "k_EMsgClientToGCRequestActiveGuildContracts":
      return 8690 /* k_EMsgClientToGCRequestActiveGuildContracts */;
    case 8691:
    case "k_EMsgClientToGCRequestActiveGuildContractsResponse":
      return 8691 /* k_EMsgClientToGCRequestActiveGuildContractsResponse */;
    case 8692:
    case "k_EMsgGCToClientActiveGuildContractsUpdated":
      return 8692 /* k_EMsgGCToClientActiveGuildContractsUpdated */;
    case 8693:
    case "k_EMsgGCToClientGuildFeedUpdated":
      return 8693 /* k_EMsgGCToClientGuildFeedUpdated */;
    case 8694:
    case "k_EMsgClientToGCSelectGuildContract":
      return 8694 /* k_EMsgClientToGCSelectGuildContract */;
    case 8695:
    case "k_EMsgClientToGCSelectGuildContractResponse":
      return 8695 /* k_EMsgClientToGCSelectGuildContractResponse */;
    case 8696:
    case "k_EMsgGCToGCCompleteGuildContracts":
      return 8696 /* k_EMsgGCToGCCompleteGuildContracts */;
    case 8698:
    case "k_EMsgClientToGCAddPlayerToGuildChat":
      return 8698 /* k_EMsgClientToGCAddPlayerToGuildChat */;
    case 8699:
    case "k_EMsgClientToGCAddPlayerToGuildChatResponse":
      return 8699 /* k_EMsgClientToGCAddPlayerToGuildChatResponse */;
    case 8700:
    case "k_EMsgClientToGCUnderDraftSell":
      return 8700 /* k_EMsgClientToGCUnderDraftSell */;
    case 8701:
    case "k_EMsgClientToGCUnderDraftSellResponse":
      return 8701 /* k_EMsgClientToGCUnderDraftSellResponse */;
    case 8702:
    case "k_EMsgClientToGCUnderDraftRequest":
      return 8702 /* k_EMsgClientToGCUnderDraftRequest */;
    case 8703:
    case "k_EMsgClientToGCUnderDraftResponse":
      return 8703 /* k_EMsgClientToGCUnderDraftResponse */;
    case 8704:
    case "k_EMsgClientToGCUnderDraftRedeemReward":
      return 8704 /* k_EMsgClientToGCUnderDraftRedeemReward */;
    case 8705:
    case "k_EMsgClientToGCUnderDraftRedeemRewardResponse":
      return 8705 /* k_EMsgClientToGCUnderDraftRedeemRewardResponse */;
    case 8708:
    case "k_EMsgGCToServerLobbyHeroBanRates":
      return 8708 /* k_EMsgGCToServerLobbyHeroBanRates */;
    case 8711:
    case "k_EMsgSignOutGuildContractProgress":
      return 8711 /* k_EMsgSignOutGuildContractProgress */;
    case 8712:
    case "k_EMsgSignOutMVPStats":
      return 8712 /* k_EMsgSignOutMVPStats */;
    case 8713:
    case "k_EMsgClientToGCRequestActiveGuildChallenge":
      return 8713 /* k_EMsgClientToGCRequestActiveGuildChallenge */;
    case 8714:
    case "k_EMsgClientToGCRequestActiveGuildChallengeResponse":
      return 8714 /* k_EMsgClientToGCRequestActiveGuildChallengeResponse */;
    case 8715:
    case "k_EMsgGCToClientActiveGuildChallengeUpdated":
      return 8715 /* k_EMsgGCToClientActiveGuildChallengeUpdated */;
    case 8716:
    case "k_EMsgClientToGCRequestReporterUpdates":
      return 8716 /* k_EMsgClientToGCRequestReporterUpdates */;
    case 8717:
    case "k_EMsgClientToGCRequestReporterUpdatesResponse":
      return 8717 /* k_EMsgClientToGCRequestReporterUpdatesResponse */;
    case 8718:
    case "k_EMsgClientToGCAcknowledgeReporterUpdates":
      return 8718 /* k_EMsgClientToGCAcknowledgeReporterUpdates */;
    case 8720:
    case "k_EMsgSignOutGuildChallengeProgress":
      return 8720 /* k_EMsgSignOutGuildChallengeProgress */;
    case 8721:
    case "k_EMsgClientToGCRequestGuildEventMembers":
      return 8721 /* k_EMsgClientToGCRequestGuildEventMembers */;
    case 8722:
    case "k_EMsgClientToGCRequestGuildEventMembersResponse":
      return 8722 /* k_EMsgClientToGCRequestGuildEventMembersResponse */;
    case 8725:
    case "k_EMsgClientToGCReportGuildContent":
      return 8725 /* k_EMsgClientToGCReportGuildContent */;
    case 8726:
    case "k_EMsgClientToGCReportGuildContentResponse":
      return 8726 /* k_EMsgClientToGCReportGuildContentResponse */;
    case 8727:
    case "k_EMsgClientToGCRequestAccountGuildPersonaInfo":
      return 8727 /* k_EMsgClientToGCRequestAccountGuildPersonaInfo */;
    case 8728:
    case "k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse":
      return 8728 /* k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse */;
    case 8729:
    case "k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch":
      return 8729 /* k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch */;
    case 8730:
    case "k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse":
      return 8730 /* k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse */;
    case 8731:
    case "k_EMsgGCToClientUnderDraftGoldUpdated":
      return 8731 /* k_EMsgGCToClientUnderDraftGoldUpdated */;
    case 8732:
    case "k_EMsgGCToServerRecordTrainingData":
      return 8732 /* k_EMsgGCToServerRecordTrainingData */;
    case 8733:
    case "k_EMsgSignOutBounties":
      return 8733 /* k_EMsgSignOutBounties */;
    case 8734:
    case "k_EMsgLobbyFeaturedGamemodeProgress":
      return 8734 /* k_EMsgLobbyFeaturedGamemodeProgress */;
    case 8735:
    case "k_EMsgLobbyGauntletProgress":
      return 8735 /* k_EMsgLobbyGauntletProgress */;
    case 8736:
    case "k_EMsgClientToGCSubmitDraftTriviaMatchAnswer":
      return 8736 /* k_EMsgClientToGCSubmitDraftTriviaMatchAnswer */;
    case 8737:
    case "k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse":
      return 8737 /* k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse */;
    case 8738:
    case "k_EMsgGCToGCSignoutSpendBounty":
      return 8738 /* k_EMsgGCToGCSignoutSpendBounty */;
    case 8739:
    case "k_EMsgClientToGCApplyGauntletTicket":
      return 8739 /* k_EMsgClientToGCApplyGauntletTicket */;
    case 8740:
    case "k_EMsgClientToGCUnderDraftRollBackBench":
      return 8740 /* k_EMsgClientToGCUnderDraftRollBackBench */;
    case 8741:
    case "k_EMsgClientToGCUnderDraftRollBackBenchResponse":
      return 8741 /* k_EMsgClientToGCUnderDraftRollBackBenchResponse */;
    case 8742:
    case "k_EMsgGCToGCGetEventActionScore":
      return 8742 /* k_EMsgGCToGCGetEventActionScore */;
    case 8743:
    case "k_EMsgGCToGCGetEventActionScoreResponse":
      return 8743 /* k_EMsgGCToGCGetEventActionScoreResponse */;
    case 8744:
    case "k_EMsgServerToGCGetGuildContracts":
      return 8744 /* k_EMsgServerToGCGetGuildContracts */;
    case 8745:
    case "k_EMsgServerToGCGetGuildContractsResponse":
      return 8745 /* k_EMsgServerToGCGetGuildContractsResponse */;
    case 8746:
    case "k_EMsgLobbyEventGameData":
      return 8746 /* k_EMsgLobbyEventGameData */;
    case 8747:
    case "k_EMsgGCToClientGuildMembersDataUpdated":
      return 8747 /* k_EMsgGCToClientGuildMembersDataUpdated */;
    case 8748:
    case "k_EMsgSignOutReportActivityMarkers":
      return 8748 /* k_EMsgSignOutReportActivityMarkers */;
    case 8749:
    case "k_EMsgSignOutDiretideCandy":
      return 8749 /* k_EMsgSignOutDiretideCandy */;
    case 8750:
    case "k_EMsgGCToClientPostGameItemAwardNotification":
      return 8750 /* k_EMsgGCToClientPostGameItemAwardNotification */;
    case 8751:
    case "k_EMsgClientToGCGetOWMatchDetails":
      return 8751 /* k_EMsgClientToGCGetOWMatchDetails */;
    case 8752:
    case "k_EMsgClientToGCGetOWMatchDetailsResponse":
      return 8752 /* k_EMsgClientToGCGetOWMatchDetailsResponse */;
    case 8753:
    case "k_EMsgClientToGCSubmitOWConviction":
      return 8753 /* k_EMsgClientToGCSubmitOWConviction */;
    case 8754:
    case "k_EMsgClientToGCSubmitOWConvictionResponse":
      return 8754 /* k_EMsgClientToGCSubmitOWConvictionResponse */;
    case 8755:
    case "k_EMsgGCToGCGetAccountSteamChina":
      return 8755 /* k_EMsgGCToGCGetAccountSteamChina */;
    case 8756:
    case "k_EMsgGCToGCGetAccountSteamChinaResponse":
      return 8756 /* k_EMsgGCToGCGetAccountSteamChinaResponse */;
    case 8757:
    case "k_EMsgClientToGCClaimLeaderboardRewards":
      return 8757 /* k_EMsgClientToGCClaimLeaderboardRewards */;
    case 8758:
    case "k_EMsgClientToGCClaimLeaderboardRewardsResponse":
      return 8758 /* k_EMsgClientToGCClaimLeaderboardRewardsResponse */;
    case 8759:
    case "k_EMsgClientToGCRecalibrateMMR":
      return 8759 /* k_EMsgClientToGCRecalibrateMMR */;
    case 8760:
    case "k_EMsgClientToGCRecalibrateMMRResponse":
      return 8760 /* k_EMsgClientToGCRecalibrateMMRResponse */;
    case 8761:
    case "k_EMsgGCToGCGrantEventPointActionList":
      return 8761 /* k_EMsgGCToGCGrantEventPointActionList */;
    case 8764:
    case "k_EMsgClientToGCChinaSSAURLRequest":
      return 8764 /* k_EMsgClientToGCChinaSSAURLRequest */;
    case 8765:
    case "k_EMsgClientToGCChinaSSAURLResponse":
      return 8765 /* k_EMsgClientToGCChinaSSAURLResponse */;
    case 8766:
    case "k_EMsgClientToGCChinaSSAAcceptedRequest":
      return 8766 /* k_EMsgClientToGCChinaSSAAcceptedRequest */;
    case 8767:
    case "k_EMsgClientToGCChinaSSAAcceptedResponse":
      return 8767 /* k_EMsgClientToGCChinaSSAAcceptedResponse */;
    case 8768:
    case "k_EMsgSignOutOverwatchSuspicion":
      return 8768 /* k_EMsgSignOutOverwatchSuspicion */;
    case 8769:
    case "k_EMsgServerToGCGetSuspicionConfig":
      return 8769 /* k_EMsgServerToGCGetSuspicionConfig */;
    case 8770:
    case "k_EMsgServerToGCGetSuspicionConfigResponse":
      return 8770 /* k_EMsgServerToGCGetSuspicionConfigResponse */;
    case 8771:
    case "k_EMsgGCToGCGrantPlusHeroChallengeMatchResults":
      return 8771 /* k_EMsgGCToGCGrantPlusHeroChallengeMatchResults */;
    case 8772:
    case "k_EMsgGCToClientOverwatchCasesAvailable":
      return 8772 /* k_EMsgGCToClientOverwatchCasesAvailable */;
    case 8773:
    case "k_EMsgServerToGCAccountCheck":
      return 8773 /* k_EMsgServerToGCAccountCheck */;
    case 8774:
    case "k_EMsgClientToGCStartWatchingOverwatch":
      return 8774 /* k_EMsgClientToGCStartWatchingOverwatch */;
    case 8775:
    case "k_EMsgClientToGCStopWatchingOverwatch":
      return 8775 /* k_EMsgClientToGCStopWatchingOverwatch */;
    case 8776:
    case "k_EMsgSignOutPerfData":
      return 8776 /* k_EMsgSignOutPerfData */;
    case 8777:
    case "k_EMsgClientToGCGetDPCFavorites":
      return 8777 /* k_EMsgClientToGCGetDPCFavorites */;
    case 8778:
    case "k_EMsgClientToGCGetDPCFavoritesResponse":
      return 8778 /* k_EMsgClientToGCGetDPCFavoritesResponse */;
    case 8779:
    case "k_EMsgClientToGCSetDPCFavoriteState":
      return 8779 /* k_EMsgClientToGCSetDPCFavoriteState */;
    case 8780:
    case "k_EMsgClientToGCSetDPCFavoriteStateResponse":
      return 8780 /* k_EMsgClientToGCSetDPCFavoriteStateResponse */;
    case 8781:
    case "k_EMsgClientToGCOverwatchReplayError":
      return 8781 /* k_EMsgClientToGCOverwatchReplayError */;
    case 8782:
    case "k_EMsgServerToGCPlayerChallengeHistory":
      return 8782 /* k_EMsgServerToGCPlayerChallengeHistory */;
    case 8783:
    case "k_EMsgSignOutBanData":
      return 8783 /* k_EMsgSignOutBanData */;
    case 8784:
    case "k_EMsgWebapiDPCSeasonResults":
      return 8784 /* k_EMsgWebapiDPCSeasonResults */;
    case 8785:
    case "k_EMsgClientToGCCoachFriend":
      return 8785 /* k_EMsgClientToGCCoachFriend */;
    case 8786:
    case "k_EMsgClientToGCCoachFriendResponse":
      return 8786 /* k_EMsgClientToGCCoachFriendResponse */;
    case 8787:
    case "k_EMsgClientToGCRequestPrivateCoachingSession":
      return 8787 /* k_EMsgClientToGCRequestPrivateCoachingSession */;
    case 8788:
    case "k_EMsgClientToGCRequestPrivateCoachingSessionResponse":
      return 8788 /* k_EMsgClientToGCRequestPrivateCoachingSessionResponse */;
    case 8789:
    case "k_EMsgClientToGCAcceptPrivateCoachingSession":
      return 8789 /* k_EMsgClientToGCAcceptPrivateCoachingSession */;
    case 8790:
    case "k_EMsgClientToGCAcceptPrivateCoachingSessionResponse":
      return 8790 /* k_EMsgClientToGCAcceptPrivateCoachingSessionResponse */;
    case 8791:
    case "k_EMsgClientToGCLeavePrivateCoachingSession":
      return 8791 /* k_EMsgClientToGCLeavePrivateCoachingSession */;
    case 8792:
    case "k_EMsgClientToGCLeavePrivateCoachingSessionResponse":
      return 8792 /* k_EMsgClientToGCLeavePrivateCoachingSessionResponse */;
    case 8793:
    case "k_EMsgClientToGCGetCurrentPrivateCoachingSession":
      return 8793 /* k_EMsgClientToGCGetCurrentPrivateCoachingSession */;
    case 8794:
    case "k_EMsgClientToGCGetCurrentPrivateCoachingSessionResponse":
      return 8794 /* k_EMsgClientToGCGetCurrentPrivateCoachingSessionResponse */;
    case 8795:
    case "k_EMsgGCToClientPrivateCoachingSessionUpdated":
      return 8795 /* k_EMsgGCToClientPrivateCoachingSessionUpdated */;
    case 8796:
    case "k_EMsgClientToGCSubmitPrivateCoachingSessionRating":
      return 8796 /* k_EMsgClientToGCSubmitPrivateCoachingSessionRating */;
    case 8797:
    case "k_EMsgClientToGCSubmitPrivateCoachingSessionRatingResponse":
      return 8797 /* k_EMsgClientToGCSubmitPrivateCoachingSessionRatingResponse */;
    case 8798:
    case "k_EMsgClientToGCGetAvailablePrivateCoachingSessions":
      return 8798 /* k_EMsgClientToGCGetAvailablePrivateCoachingSessions */;
    case 8799:
    case "k_EMsgClientToGCGetAvailablePrivateCoachingSessionsResponse":
      return 8799 /* k_EMsgClientToGCGetAvailablePrivateCoachingSessionsResponse */;
    case 8800:
    case "k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummary":
      return 8800 /* k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummary */;
    case 8801:
    case "k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse":
      return 8801 /* k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse */;
    case 8802:
    case "k_EMsgClientToGCJoinPrivateCoachingSessionLobby":
      return 8802 /* k_EMsgClientToGCJoinPrivateCoachingSessionLobby */;
    case 8803:
    case "k_EMsgClientToGCJoinPrivateCoachingSessionLobbyResponse":
      return 8803 /* k_EMsgClientToGCJoinPrivateCoachingSessionLobbyResponse */;
    case 8804:
    case "k_EMsgClientToGCRespondToCoachFriendRequest":
      return 8804 /* k_EMsgClientToGCRespondToCoachFriendRequest */;
    case 8805:
    case "k_EMsgClientToGCRespondToCoachFriendRequestResponse":
      return 8805 /* k_EMsgClientToGCRespondToCoachFriendRequestResponse */;
    case 8806:
    case "k_EMsgClientToGCSetEventActiveSeasonID":
      return 8806 /* k_EMsgClientToGCSetEventActiveSeasonID */;
    case 8807:
    case "k_EMsgClientToGCSetEventActiveSeasonIDResponse":
      return 8807 /* k_EMsgClientToGCSetEventActiveSeasonIDResponse */;
    case 8808:
    case "k_EMsgServerToGCMatchPlayerNeutralItemEquipHistory":
      return 8808 /* k_EMsgServerToGCMatchPlayerNeutralItemEquipHistory */;
    case 8809:
    case "k_EMsgServerToGCCompendiumChosenInGamePredictions":
      return 8809 /* k_EMsgServerToGCCompendiumChosenInGamePredictions */;
    case 8810:
    case "k_EMsgClientToGCCreateTeamPlayerCardPack":
      return 8810 /* k_EMsgClientToGCCreateTeamPlayerCardPack */;
    case 8811:
    case "k_EMsgClientToGCCreateTeamPlayerCardPackResponse":
      return 8811 /* k_EMsgClientToGCCreateTeamPlayerCardPackResponse */;
    case 8812:
    case "k_EMsgGCToServerSubmitCheerData":
      return 8812 /* k_EMsgGCToServerSubmitCheerData */;
    case 8813:
    case "k_EMsgGCToServerCheerConfig":
      return 8813 /* k_EMsgGCToServerCheerConfig */;
    case 8814:
    case "k_EMsgServerToGCGetCheerConfig":
      return 8814 /* k_EMsgServerToGCGetCheerConfig */;
    case 8815:
    case "k_EMsgServerToGCGetCheerConfigResponse":
      return 8815 /* k_EMsgServerToGCGetCheerConfigResponse */;
    case 8816:
    case "k_EMsgGCToGCGrantAutographByID":
      return 8816 /* k_EMsgGCToGCGrantAutographByID */;
    case 8817:
    case "k_EMsgGCToServerCheerScalesOverride":
      return 8817 /* k_EMsgGCToServerCheerScalesOverride */;
    case 8818:
    case "k_EMsgGCToServerGetCheerState":
      return 8818 /* k_EMsgGCToServerGetCheerState */;
    case 8819:
    case "k_EMsgServerToGCReportCheerState":
      return 8819 /* k_EMsgServerToGCReportCheerState */;
    case 8820:
    case "k_EMsgGCToServerScenarioSave":
      return 8820 /* k_EMsgGCToServerScenarioSave */;
    case 8821:
    case "k_EMsgGCToServerAbilityDraftLobbyData":
      return 8821 /* k_EMsgGCToServerAbilityDraftLobbyData */;
    case 8822:
    case "k_EMsgSignOutReportCommunications":
      return 8822 /* k_EMsgSignOutReportCommunications */;
    case 8823:
    case "k_EMsgClientToGCBatchGetPlayerCardRosterRequest":
      return 8823 /* k_EMsgClientToGCBatchGetPlayerCardRosterRequest */;
    case 8824:
    case "k_EMsgClientToGCBatchGetPlayerCardRosterResponse":
      return 8824 /* k_EMsgClientToGCBatchGetPlayerCardRosterResponse */;
    case 8825:
    case "k_EMsgClientToGCGetStickerbookRequest":
      return 8825 /* k_EMsgClientToGCGetStickerbookRequest */;
    case 8826:
    case "k_EMsgClientToGCGetStickerbookResponse":
      return 8826 /* k_EMsgClientToGCGetStickerbookResponse */;
    case 8827:
    case "k_EMsgClientToGCCreateStickerbookPageRequest":
      return 8827 /* k_EMsgClientToGCCreateStickerbookPageRequest */;
    case 8828:
    case "k_EMsgClientToGCCreateStickerbookPageResponse":
      return 8828 /* k_EMsgClientToGCCreateStickerbookPageResponse */;
    case 8829:
    case "k_EMsgClientToGCDeleteStickerbookPageRequest":
      return 8829 /* k_EMsgClientToGCDeleteStickerbookPageRequest */;
    case 8830:
    case "k_EMsgClientToGCDeleteStickerbookPageResponse":
      return 8830 /* k_EMsgClientToGCDeleteStickerbookPageResponse */;
    case 8831:
    case "k_EMsgClientToGCPlaceStickersRequest":
      return 8831 /* k_EMsgClientToGCPlaceStickersRequest */;
    case 8832:
    case "k_EMsgClientToGCPlaceStickersResponse":
      return 8832 /* k_EMsgClientToGCPlaceStickersResponse */;
    case 8833:
    case "k_EMsgClientToGCPlaceCollectionStickersRequest":
      return 8833 /* k_EMsgClientToGCPlaceCollectionStickersRequest */;
    case 8834:
    case "k_EMsgClientToGCPlaceCollectionStickersResponse":
      return 8834 /* k_EMsgClientToGCPlaceCollectionStickersResponse */;
    case 8835:
    case "k_EMsgClientToGCOrderStickerbookTeamPageRequest":
      return 8835 /* k_EMsgClientToGCOrderStickerbookTeamPageRequest */;
    case 8836:
    case "k_EMsgClientToGCOrderStickerbookTeamPageResponse":
      return 8836 /* k_EMsgClientToGCOrderStickerbookTeamPageResponse */;
    case 8837:
    case "k_EMsgServerToGCGetStickerHeroes":
      return 8837 /* k_EMsgServerToGCGetStickerHeroes */;
    case 8838:
    case "k_EMsgServerToGCGetStickerHeroesResponse":
      return 8838 /* k_EMsgServerToGCGetStickerHeroesResponse */;
    case 8840:
    case "k_EMsgClientToGCCandyShopGetUserData":
      return 8840 /* k_EMsgClientToGCCandyShopGetUserData */;
    case 8841:
    case "k_EMsgClientToGCCandyShopGetUserDataResponse":
      return 8841 /* k_EMsgClientToGCCandyShopGetUserDataResponse */;
    case 8842:
    case "k_EMsgGCToClientCandyShopUserDataUpdated":
      return 8842 /* k_EMsgGCToClientCandyShopUserDataUpdated */;
    case 8843:
    case "k_EMsgClientToGCCandyShopPurchaseReward":
      return 8843 /* k_EMsgClientToGCCandyShopPurchaseReward */;
    case 8844:
    case "k_EMsgClientToGCCandyShopPurchaseRewardResponse":
      return 8844 /* k_EMsgClientToGCCandyShopPurchaseRewardResponse */;
    case 8845:
    case "k_EMsgClientToGCCandyShopDoExchange":
      return 8845 /* k_EMsgClientToGCCandyShopDoExchange */;
    case 8846:
    case "k_EMsgClientToGCCandyShopDoExchangeResponse":
      return 8846 /* k_EMsgClientToGCCandyShopDoExchangeResponse */;
    case 8847:
    case "k_EMsgClientToGCCandyShopDoVariableExchange":
      return 8847 /* k_EMsgClientToGCCandyShopDoVariableExchange */;
    case 8848:
    case "k_EMsgClientToGCCandyShopDoVariableExchangeResponse":
      return 8848 /* k_EMsgClientToGCCandyShopDoVariableExchangeResponse */;
    case 8849:
    case "k_EMsgClientToGCCandyShopRerollRewards":
      return 8849 /* k_EMsgClientToGCCandyShopRerollRewards */;
    case 8850:
    case "k_EMsgClientToGCCandyShopRerollRewardsResponse":
      return 8850 /* k_EMsgClientToGCCandyShopRerollRewardsResponse */;
    case 8851:
    case "k_EMsgClientToGCSetHeroSticker":
      return 8851 /* k_EMsgClientToGCSetHeroSticker */;
    case 8852:
    case "k_EMsgClientToGCSetHeroStickerResponse":
      return 8852 /* k_EMsgClientToGCSetHeroStickerResponse */;
    case 8853:
    case "k_EMsgClientToGCGetHeroStickers":
      return 8853 /* k_EMsgClientToGCGetHeroStickers */;
    case 8854:
    case "k_EMsgClientToGCGetHeroStickersResponse":
      return 8854 /* k_EMsgClientToGCGetHeroStickersResponse */;
    case 8855:
    case "k_EMsgClientToGCSetFavoritePage":
      return 8855 /* k_EMsgClientToGCSetFavoritePage */;
    case 8856:
    case "k_EMsgClientToGCSetFavoritePageResponse":
      return 8856 /* k_EMsgClientToGCSetFavoritePageResponse */;
    case 8857:
    case "k_EMsgClientToGCCandyShopDevGrantCandy":
      return 8857 /* k_EMsgClientToGCCandyShopDevGrantCandy */;
    case 8858:
    case "k_EMsgClientToGCCandyShopDevGrantCandyResponse":
      return 8858 /* k_EMsgClientToGCCandyShopDevGrantCandyResponse */;
    case 8859:
    case "k_EMsgClientToGCCandyShopDevClearInventory":
      return 8859 /* k_EMsgClientToGCCandyShopDevClearInventory */;
    case 8860:
    case "k_EMsgClientToGCCandyShopDevClearInventoryResponse":
      return 8860 /* k_EMsgClientToGCCandyShopDevClearInventoryResponse */;
    case 8861:
    case "k_EMsgClientToGCCandyShopOpenBags":
      return 8861 /* k_EMsgClientToGCCandyShopOpenBags */;
    case 8862:
    case "k_EMsgClientToGCCandyShopOpenBagsResponse":
      return 8862 /* k_EMsgClientToGCCandyShopOpenBagsResponse */;
    case 8863:
    case "k_EMsgClientToGCCandyShopDevGrantCandyBags":
      return 8863 /* k_EMsgClientToGCCandyShopDevGrantCandyBags */;
    case 8864:
    case "k_EMsgClientToGCCandyShopDevGrantCandyBagsResponse":
      return 8864 /* k_EMsgClientToGCCandyShopDevGrantCandyBagsResponse */;
    case 8865:
    case "k_EMsgClientToGCCandyShopDevShuffleExchange":
      return 8865 /* k_EMsgClientToGCCandyShopDevShuffleExchange */;
    case 8866:
    case "k_EMsgClientToGCCandyShopDevShuffleExchangeResponse":
      return 8866 /* k_EMsgClientToGCCandyShopDevShuffleExchangeResponse */;
    case 8867:
    case "k_EMsgClientToGCCandyShopDevGrantRerollCharges":
      return 8867 /* k_EMsgClientToGCCandyShopDevGrantRerollCharges */;
    case 8868:
    case "k_EMsgClientToGCCandyShopDevGrantRerollChargesResponse":
      return 8868 /* k_EMsgClientToGCCandyShopDevGrantRerollChargesResponse */;
    case 8869:
    case "k_EMsgLobbyAdditionalAccountData":
      return 8869 /* k_EMsgLobbyAdditionalAccountData */;
    case 8870:
    case "k_EMsgServerToGCLobbyInitialized":
      return 8870 /* k_EMsgServerToGCLobbyInitialized */;
    case 8871:
    case "k_EMsgClientToGCCollectorsCacheAvailableDataRequest":
      return 8871 /* k_EMsgClientToGCCollectorsCacheAvailableDataRequest */;
    case 8872:
    case "k_EMsgGCToClientCollectorsCacheAvailableDataResponse":
      return 8872 /* k_EMsgGCToClientCollectorsCacheAvailableDataResponse */;
    case 8873:
    case "k_EMsgClientToGCUploadMatchClip":
      return 8873 /* k_EMsgClientToGCUploadMatchClip */;
    case 8874:
    case "k_EMsgGCToClientUploadMatchClipResponse":
      return 8874 /* k_EMsgGCToClientUploadMatchClipResponse */;
    case 8877:
    case "k_EMsgSignOutMuertaMinigame":
      return 8877 /* k_EMsgSignOutMuertaMinigame */;
    case 8878:
    case "k_EMsgGCToServerLobbyHeroRoleStats":
      return 8878 /* k_EMsgGCToServerLobbyHeroRoleStats */;
    case 8879:
    case "k_EMsgClientToGCRankRequest":
      return 8879 /* k_EMsgClientToGCRankRequest */;
    case 8880:
    case "k_EMsgGCToClientRankResponse":
      return 8880 /* k_EMsgGCToClientRankResponse */;
    case 8881:
    case "k_EMsgGCToClientRankUpdate":
      return 8881 /* k_EMsgGCToClientRankUpdate */;
    case 8882:
    case "k_EMsgSignOutMapStats":
      return 8882 /* k_EMsgSignOutMapStats */;
    case 8883:
    case "k_EMsgClientToGCMapStatsRequest":
      return 8883 /* k_EMsgClientToGCMapStatsRequest */;
    case 8884:
    case "k_EMsgGCToClientMapStatsResponse":
      return 8884 /* k_EMsgGCToClientMapStatsResponse */;
    case 8886:
    case "k_EMsgClientToGCShowcaseGetUserData":
      return 8886 /* k_EMsgClientToGCShowcaseGetUserData */;
    case 8887:
    case "k_EMsgClientToGCShowcaseGetUserDataResponse":
      return 8887 /* k_EMsgClientToGCShowcaseGetUserDataResponse */;
    case 8888:
    case "k_EMsgClientToGCShowcaseSetUserData":
      return 8888 /* k_EMsgClientToGCShowcaseSetUserData */;
    case 8889:
    case "k_EMsgClientToGCShowcaseSetUserDataResponse":
      return 8889 /* k_EMsgClientToGCShowcaseSetUserDataResponse */;
    case 8890:
    case "k_EMsgClientToGCFantasyCraftingGetData":
      return 8890 /* k_EMsgClientToGCFantasyCraftingGetData */;
    case 8891:
    case "k_EMsgClientToGCFantasyCraftingGetDataResponse":
      return 8891 /* k_EMsgClientToGCFantasyCraftingGetDataResponse */;
    case 8892:
    case "k_EMsgClientToGCFantasyCraftingPerformOperation":
      return 8892 /* k_EMsgClientToGCFantasyCraftingPerformOperation */;
    case 8893:
    case "k_EMsgClientToGCFantasyCraftingPerformOperationResponse":
      return 8893 /* k_EMsgClientToGCFantasyCraftingPerformOperationResponse */;
    case 8894:
    case "k_EMsgGCToClientFantasyCraftingGetDataUpdated":
      return 8894 /* k_EMsgGCToClientFantasyCraftingGetDataUpdated */;
    case 8895:
    case "k_EMsgClientToGCFantasyCraftingDevModifyTablet":
      return 8895 /* k_EMsgClientToGCFantasyCraftingDevModifyTablet */;
    case 8896:
    case "k_EMsgClientToGCFantasyCraftingDevModifyTabletResponse":
      return 8896 /* k_EMsgClientToGCFantasyCraftingDevModifyTabletResponse */;
    case 8897:
    case "k_EMsgClientToGCRoadToTIGetQuests":
      return 8897 /* k_EMsgClientToGCRoadToTIGetQuests */;
    case 8898:
    case "k_EMsgClientToGCRoadToTIGetQuestsResponse":
      return 8898 /* k_EMsgClientToGCRoadToTIGetQuestsResponse */;
    case 8899:
    case "k_EMsgClientToGCRoadToTIGetActiveQuest":
      return 8899 /* k_EMsgClientToGCRoadToTIGetActiveQuest */;
    case 8900:
    case "k_EMsgClientToGCRoadToTIGetActiveQuestResponse":
      return 8900 /* k_EMsgClientToGCRoadToTIGetActiveQuestResponse */;
    case 8901:
    case "k_EMsgClientToGCBingoGetUserData":
      return 8901 /* k_EMsgClientToGCBingoGetUserData */;
    case 8902:
    case "k_EMsgClientToGCBingoGetUserDataResponse":
      return 8902 /* k_EMsgClientToGCBingoGetUserDataResponse */;
    case 8903:
    case "k_EMsgClientToGCBingoClaimRow":
      return 8903 /* k_EMsgClientToGCBingoClaimRow */;
    case 8904:
    case "k_EMsgClientToGCBingoClaimRowResponse":
      return 8904 /* k_EMsgClientToGCBingoClaimRowResponse */;
    case 8905:
    case "k_EMsgClientToGCBingoDevRerollCard":
      return 8905 /* k_EMsgClientToGCBingoDevRerollCard */;
    case 8906:
    case "k_EMsgClientToGCBingoDevRerollCardResponse":
      return 8906 /* k_EMsgClientToGCBingoDevRerollCardResponse */;
    case 8907:
    case "k_EMsgClientToGCBingoGetStatsData":
      return 8907 /* k_EMsgClientToGCBingoGetStatsData */;
    case 8908:
    case "k_EMsgClientToGCBingoGetStatsDataResponse":
      return 8908 /* k_EMsgClientToGCBingoGetStatsDataResponse */;
    case 8909:
    case "k_EMsgGCToClientBingoUserDataUpdated":
      return 8909 /* k_EMsgGCToClientBingoUserDataUpdated */;
    case 8910:
    case "k_EMsgGCToClientRoadToTIQuestDataUpdated":
      return 8910 /* k_EMsgGCToClientRoadToTIQuestDataUpdated */;
    case 8911:
    case "k_EMsgClientToGCRoadToTIUseItem":
      return 8911 /* k_EMsgClientToGCRoadToTIUseItem */;
    case 8912:
    case "k_EMsgClientToGCRoadToTIUseItemResponse":
      return 8912 /* k_EMsgClientToGCRoadToTIUseItemResponse */;
    case 8913:
    case "k_EMsgClientToGCShowcaseSubmitReport":
      return 8913 /* k_EMsgClientToGCShowcaseSubmitReport */;
    case 8914:
    case "k_EMsgClientToGCShowcaseSubmitReportResponse":
      return 8914 /* k_EMsgClientToGCShowcaseSubmitReportResponse */;
    case 8915:
    case "k_EMsgClientToGCShowcaseAdminGetReportsRollupList":
      return 8915 /* k_EMsgClientToGCShowcaseAdminGetReportsRollupList */;
    case 8916:
    case "k_EMsgClientToGCShowcaseAdminGetReportsRollupListResponse":
      return 8916 /* k_EMsgClientToGCShowcaseAdminGetReportsRollupListResponse */;
    case 8917:
    case "k_EMsgClientToGCShowcaseAdminGetReportsRollup":
      return 8917 /* k_EMsgClientToGCShowcaseAdminGetReportsRollup */;
    case 8918:
    case "k_EMsgClientToGCShowcaseAdminGetReportsRollupResponse":
      return 8918 /* k_EMsgClientToGCShowcaseAdminGetReportsRollupResponse */;
    case 8919:
    case "k_EMsgClientToGCShowcaseAdminGetUserDetails":
      return 8919 /* k_EMsgClientToGCShowcaseAdminGetUserDetails */;
    case 8920:
    case "k_EMsgClientToGCShowcaseAdminGetUserDetailsResponse":
      return 8920 /* k_EMsgClientToGCShowcaseAdminGetUserDetailsResponse */;
    case 8921:
    case "k_EMsgClientToGCShowcaseAdminConvict":
      return 8921 /* k_EMsgClientToGCShowcaseAdminConvict */;
    case 8922:
    case "k_EMsgClientToGCShowcaseAdminConvictResponse":
      return 8922 /* k_EMsgClientToGCShowcaseAdminConvictResponse */;
    case 8923:
    case "k_EMsgClientToGCShowcaseAdminExonerate":
      return 8923 /* k_EMsgClientToGCShowcaseAdminExonerate */;
    case 8924:
    case "k_EMsgClientToGCShowcaseAdminExonerateResponse":
      return 8924 /* k_EMsgClientToGCShowcaseAdminExonerateResponse */;
    case 8925:
    case "k_EMsgClientToGCShowcaseAdminReset":
      return 8925 /* k_EMsgClientToGCShowcaseAdminReset */;
    case 8926:
    case "k_EMsgClientToGCShowcaseAdminResetResponse":
      return 8926 /* k_EMsgClientToGCShowcaseAdminResetResponse */;
    case 8927:
    case "k_EMsgClientToGCShowcaseAdminLockAccount":
      return 8927 /* k_EMsgClientToGCShowcaseAdminLockAccount */;
    case 8928:
    case "k_EMsgClientToGCShowcaseAdminLockAccountResponse":
      return 8928 /* k_EMsgClientToGCShowcaseAdminLockAccountResponse */;
    case 8929:
    case "k_EMsgClientToGCFantasyCraftingSelectPlayer":
      return 8929 /* k_EMsgClientToGCFantasyCraftingSelectPlayer */;
    case 8930:
    case "k_EMsgClientToGCFantasyCraftingSelectPlayerResponse":
      return 8930 /* k_EMsgClientToGCFantasyCraftingSelectPlayerResponse */;
    case 8931:
    case "k_EMsgClientToGCFantasyCraftingGenerateTablets":
      return 8931 /* k_EMsgClientToGCFantasyCraftingGenerateTablets */;
    case 8932:
    case "k_EMsgClientToGCFantasyCraftingGenerateTabletsResponse":
      return 8932 /* k_EMsgClientToGCFantasyCraftingGenerateTabletsResponse */;
    case 8933:
    case "k_EMsgClientToGcFantasyCraftingUpgradeTablets":
      return 8933 /* k_EMsgClientToGcFantasyCraftingUpgradeTablets */;
    case 8934:
    case "k_EMsgClientToGcFantasyCraftingUpgradeTabletsResponse":
      return 8934 /* k_EMsgClientToGcFantasyCraftingUpgradeTabletsResponse */;
    case 8936:
    case "k_EMsgClientToGCFantasyCraftingRerollOptions":
      return 8936 /* k_EMsgClientToGCFantasyCraftingRerollOptions */;
    case 8937:
    case "k_EMsgClientToGCFantasyCraftingRerollOptionsResponse":
      return 8937 /* k_EMsgClientToGCFantasyCraftingRerollOptionsResponse */;
    case 8935:
    case "k_EMsgClientToGCRoadToTIDevForceQuest":
      return 8935 /* k_EMsgClientToGCRoadToTIDevForceQuest */;
    case 8939:
    case "k_EMsgLobbyRoadToTIMatchQuestData":
      return 8939 /* k_EMsgLobbyRoadToTIMatchQuestData */;
    case 8940:
    case "k_EMsgClientToGCShowcaseModerationGetQueue":
      return 8940 /* k_EMsgClientToGCShowcaseModerationGetQueue */;
    case 8941:
    case "k_EMsgClientToGCShowcaseModerationGetQueueResponse":
      return 8941 /* k_EMsgClientToGCShowcaseModerationGetQueueResponse */;
    case 8942:
    case "k_EMsgClientToGCShowcaseModerationApplyModeration":
      return 8942 /* k_EMsgClientToGCShowcaseModerationApplyModeration */;
    case 8943:
    case "k_EMsgClientToGCShowcaseModerationApplyModerationResponse":
      return 8943 /* k_EMsgClientToGCShowcaseModerationApplyModerationResponse */;
    case 8944:
    case "k_EMsgClientToGCOverworldGetUserData":
      return 8944 /* k_EMsgClientToGCOverworldGetUserData */;
    case 8945:
    case "k_EMsgClientToGCOverworldGetUserDataResponse":
      return 8945 /* k_EMsgClientToGCOverworldGetUserDataResponse */;
    case 8946:
    case "k_EMsgClientToGCOverworldCompletePath":
      return 8946 /* k_EMsgClientToGCOverworldCompletePath */;
    case 8947:
    case "k_EMsgClientToGCOverworldCompletePathResponse":
      return 8947 /* k_EMsgClientToGCOverworldCompletePathResponse */;
    case 8948:
    case "k_EMsgClientToGCOverworldClaimEncounterReward":
      return 8948 /* k_EMsgClientToGCOverworldClaimEncounterReward */;
    case 8949:
    case "k_EMsgClientToGCOverworldClaimEncounterRewardResponse":
      return 8949 /* k_EMsgClientToGCOverworldClaimEncounterRewardResponse */;
    case 8950:
    case "k_EMsgClientToGCOverworldDevResetAll":
      return 8950 /* k_EMsgClientToGCOverworldDevResetAll */;
    case 8951:
    case "k_EMsgClientToGCOverworldDevResetAllResponse":
      return 8951 /* k_EMsgClientToGCOverworldDevResetAllResponse */;
    case 8952:
    case "k_EMsgClientToGCOverworldDevResetNode":
      return 8952 /* k_EMsgClientToGCOverworldDevResetNode */;
    case 8953:
    case "k_EMsgClientToGCOverworldDevResetNodeResponse":
      return 8953 /* k_EMsgClientToGCOverworldDevResetNodeResponse */;
    case 8954:
    case "k_EMsgClientToGCOverworldDevResetPath":
      return 8954 /* k_EMsgClientToGCOverworldDevResetPath */;
    case 8955:
    case "k_EMsgClientToGCOverworldDevResetPathResponse":
      return 8955 /* k_EMsgClientToGCOverworldDevResetPathResponse */;
    case 8956:
    case "k_EMsgClientToGCOverworldDevGrantTokens":
      return 8956 /* k_EMsgClientToGCOverworldDevGrantTokens */;
    case 8957:
    case "k_EMsgClientToGCOverworldDevGrantTokensResponse":
      return 8957 /* k_EMsgClientToGCOverworldDevGrantTokensResponse */;
    case 8958:
    case "k_EMsgClientToGCOverworldDevClearInventory":
      return 8958 /* k_EMsgClientToGCOverworldDevClearInventory */;
    case 8959:
    case "k_EMsgClientToGCOverworldDevClearInventoryResponse":
      return 8959 /* k_EMsgClientToGCOverworldDevClearInventoryResponse */;
    case 8960:
    case "k_EMsgServerToGCNewBloomGift":
      return 8960 /* k_EMsgServerToGCNewBloomGift */;
    case 8961:
    case "k_EMsgServerToGCNewBloomGiftResponse":
      return 8961 /* k_EMsgServerToGCNewBloomGiftResponse */;
    case 8962:
    case "k_EMsgGCToClientOverworldUserDataUpdated":
      return 8962 /* k_EMsgGCToClientOverworldUserDataUpdated */;
    case 8963:
    case "k_EMsgClientToGCOverworldMoveToNode":
      return 8963 /* k_EMsgClientToGCOverworldMoveToNode */;
    case 8964:
    case "k_EMsgClientToGCOverworldMoveToNodeResponse":
      return 8964 /* k_EMsgClientToGCOverworldMoveToNodeResponse */;
    case 8965:
    case "k_EMsgClientToGCNewBloomGift":
      return 8965 /* k_EMsgClientToGCNewBloomGift */;
    case 8966:
    case "k_EMsgClientToGCNewBloomGiftResponse":
      return 8966 /* k_EMsgClientToGCNewBloomGiftResponse */;
    case 8967:
    case "k_EMsgSignOutOverworld":
      return 8967 /* k_EMsgSignOutOverworld */;
    case 8969:
    case "k_EMsgClientToGCSetBannedHeroes":
      return 8969 /* k_EMsgClientToGCSetBannedHeroes */;
    case 8970:
    case "k_EMsgClientToGCOverworldTradeTokens":
      return 8970 /* k_EMsgClientToGCOverworldTradeTokens */;
    case 8971:
    case "k_EMsgClientToGCOverworldTradeTokensResponse":
      return 8971 /* k_EMsgClientToGCOverworldTradeTokensResponse */;
    case 8972:
    case "k_EMsgOverworldEncounterTokenTreasureData":
      return 8972 /* k_EMsgOverworldEncounterTokenTreasureData */;
    case 8973:
    case "k_EMsgOverworldEncounterTokenQuestData":
      return 8973 /* k_EMsgOverworldEncounterTokenQuestData */;
    case 8974:
    case "k_EMsgOverworldEncounterChooseHeroData":
      return 8974 /* k_EMsgOverworldEncounterChooseHeroData */;
    case 8975:
    case "k_EMsgClientToGCUpdateComicBookStats":
      return 8975 /* k_EMsgClientToGCUpdateComicBookStats */;
    case 8976:
    case "k_EMsgClientToGCCandyShopDevResetShop":
      return 8976 /* k_EMsgClientToGCCandyShopDevResetShop */;
    case 8977:
    case "k_EMsgClientToGCCandyShopDevResetShopResponse":
      return 8977 /* k_EMsgClientToGCCandyShopDevResetShopResponse */;
    case 8978:
    case "k_EMsgOverworldEncounterProgressData":
      return 8978 /* k_EMsgOverworldEncounterProgressData */;
    case 8979:
    case "k_EMsgClientToGCOverworldFeedback":
      return 8979 /* k_EMsgClientToGCOverworldFeedback */;
    case 8980:
    case "k_EMsgClientToGCOverworldFeedbackResponse":
      return 8980 /* k_EMsgClientToGCOverworldFeedbackResponse */;
    case 8981:
    case "k_EMsgClientToGCOverworldVisitEncounter":
      return 8981 /* k_EMsgClientToGCOverworldVisitEncounter */;
    case 8982:
    case "k_EMsgClientToGCOverworldVisitEncounterResponse":
      return 8982 /* k_EMsgClientToGCOverworldVisitEncounterResponse */;
    case 8983:
    case "k_EMsgClientToGCOverworldGiftTokens":
      return 8983 /* k_EMsgClientToGCOverworldGiftTokens */;
    case 8984:
    case "k_EMsgClientToGCOverworldGiftTokensResponse":
      return 8984 /* k_EMsgClientToGCOverworldGiftTokensResponse */;
    case 8985:
    case "k_EMsgClientToGCDotaLabsFeedback":
      return 8985 /* k_EMsgClientToGCDotaLabsFeedback */;
    case 8986:
    case "k_EMsgClientToGCDotaLabsFeedbackResponse":
      return 8986 /* k_EMsgClientToGCDotaLabsFeedbackResponse */;
    case 8987:
    case "k_EMsgOverworldEncounterPitFighterRewardData":
      return 8987 /* k_EMsgOverworldEncounterPitFighterRewardData */;
    case 8988:
    case "k_EMsgClientToGCOverworldGetDynamicImage":
      return 8988 /* k_EMsgClientToGCOverworldGetDynamicImage */;
    case 8989:
    case "k_EMsgClientToGCOverworldGetDynamicImageResponse":
      return 8989 /* k_EMsgClientToGCOverworldGetDynamicImageResponse */;
    case 8990:
    case "k_EMsgClientToGCFightingGameChallengeFriend":
      return 8990 /* k_EMsgClientToGCFightingGameChallengeFriend */;
    case 8991:
    case "k_EMsgClientToGCFightingGameChallengeFriendResponse":
      return 8991 /* k_EMsgClientToGCFightingGameChallengeFriendResponse */;
    case 8992:
    case "k_EMsgClientToGCFightingGameCancelChallengeFriend":
      return 8992 /* k_EMsgClientToGCFightingGameCancelChallengeFriend */;
    case 8993:
    case "k_EMsgClientToGCFightingGameAnswerChallenge":
      return 8993 /* k_EMsgClientToGCFightingGameAnswerChallenge */;
    case 8994:
    case "k_EMsgClientToGCFightingGameAnswerChallengeResponse":
      return 8994 /* k_EMsgClientToGCFightingGameAnswerChallengeResponse */;
    case 8995:
    case "k_EMsgGCToClientFightingGameChallenge":
      return 8995 /* k_EMsgGCToClientFightingGameChallenge */;
    case 8996:
    case "k_EMsgGCToClientFightingGameStartMatch":
      return 8996 /* k_EMsgGCToClientFightingGameStartMatch */;
    case 8997:
    case "k_EMsgGCToClientFightingGameChallengeCanceled":
      return 8997 /* k_EMsgGCToClientFightingGameChallengeCanceled */;
    case 8999:
    case "k_EMsgClientToGCBingoShuffleCard":
      return 8999 /* k_EMsgClientToGCBingoShuffleCard */;
    case 9e3:
    case "k_EMsgClientToGCBingoShuffleCardResponse":
      return 9e3 /* k_EMsgClientToGCBingoShuffleCardResponse */;
    case 9001:
    case "k_EMsgClientToGCBingoModifySquare":
      return 9001 /* k_EMsgClientToGCBingoModifySquare */;
    case 9002:
    case "k_EMsgClientToGCBingoModifySquareResponse":
      return 9002 /* k_EMsgClientToGCBingoModifySquareResponse */;
    case 9003:
    case "k_EMsgClientToGCBingoDevAddTokens":
      return 9003 /* k_EMsgClientToGCBingoDevAddTokens */;
    case 9004:
    case "k_EMsgClientToGCBingoDevAddTokensResponse":
      return 9004 /* k_EMsgClientToGCBingoDevAddTokensResponse */;
    case 9005:
    case "k_EMsgClientToGCBingoDevClearInventory":
      return 9005 /* k_EMsgClientToGCBingoDevClearInventory */;
    case 9006:
    case "k_EMsgClientToGCBingoDevClearInventoryResponse":
      return 9006 /* k_EMsgClientToGCBingoDevClearInventoryResponse */;
    case 9007:
    case "k_EMsgGCCompendiumRemoveAllSelections":
      return 9007 /* k_EMsgGCCompendiumRemoveAllSelections */;
    case 9008:
    case "k_EMsgGCCompendiumRemoveAllSelectionsResponse":
      return 9008 /* k_EMsgGCCompendiumRemoveAllSelectionsResponse */;
    case 9009:
    case "k_EMsgClientToGCOverworldMinigameAction":
      return 9009 /* k_EMsgClientToGCOverworldMinigameAction */;
    case 9010:
    case "k_EMsgClientToGCOverworldMinigameActionResponse":
      return 9010 /* k_EMsgClientToGCOverworldMinigameActionResponse */;
    case 9011:
    case "k_EMsgClientToGCSurvivorsTelemetry":
      return 9011 /* k_EMsgClientToGCSurvivorsTelemetry */;
    case 9012:
    case "k_EMsgClientToGCSurvivorsTelemetryResponse":
      return 9012 /* k_EMsgClientToGCSurvivorsTelemetryResponse */;
    case 9013:
    case "k_EMsgClientToGCOverworldRequestTokensNeededByFriend":
      return 9013 /* k_EMsgClientToGCOverworldRequestTokensNeededByFriend */;
    case 9014:
    case "k_EMsgClientToGCOverworldRequestTokensNeededByFriendResponse":
      return 9014 /* k_EMsgClientToGCOverworldRequestTokensNeededByFriendResponse */;
    case 9015:
    case "k_EMsgClientToGCCraftworksGetUserData":
      return 9015 /* k_EMsgClientToGCCraftworksGetUserData */;
    case 9016:
    case "k_EMsgClientToGCCraftworksGetUserDataResponse":
      return 9016 /* k_EMsgClientToGCCraftworksGetUserDataResponse */;
    case 9017:
    case "k_EMsgGCToClientCraftworksUserDataUpdated":
      return 9017 /* k_EMsgGCToClientCraftworksUserDataUpdated */;
    case 9018:
    case "k_EMsgClientToGCCraftworksCraftRecipe":
      return 9018 /* k_EMsgClientToGCCraftworksCraftRecipe */;
    case 9019:
    case "k_EMsgClientToGCCraftworksCraftRecipeResponse":
      return 9019 /* k_EMsgClientToGCCraftworksCraftRecipeResponse */;
    case 9020:
    case "k_EMsgClientToGCCraftworksDevModifyComponents":
      return 9020 /* k_EMsgClientToGCCraftworksDevModifyComponents */;
    case 9021:
    case "k_EMsgClientToGCCraftworksDevModifyComponentsResponse":
      return 9021 /* k_EMsgClientToGCCraftworksDevModifyComponentsResponse */;
    case 9022:
    case "k_EMsgSignOutCraftworks":
      return 9022 /* k_EMsgSignOutCraftworks */;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum EDOTAGCMsg");
  }
}
function eDOTAGCMsgToJSON(object) {
  switch (object) {
    case 7e3 /* k_EMsgGCDOTABase */:
      return "k_EMsgGCDOTABase";
    case 7004 /* k_EMsgGCGameMatchSignOut */:
      return "k_EMsgGCGameMatchSignOut";
    case 7005 /* k_EMsgGCGameMatchSignOutResponse */:
      return "k_EMsgGCGameMatchSignOutResponse";
    case 7009 /* k_EMsgGCJoinChatChannel */:
      return "k_EMsgGCJoinChatChannel";
    case 7010 /* k_EMsgGCJoinChatChannelResponse */:
      return "k_EMsgGCJoinChatChannelResponse";
    case 7013 /* k_EMsgGCOtherJoinedChannel */:
      return "k_EMsgGCOtherJoinedChannel";
    case 7014 /* k_EMsgGCOtherLeftChannel */:
      return "k_EMsgGCOtherLeftChannel";
    case 7026 /* k_EMsgServerToGCRequestStatus */:
      return "k_EMsgServerToGCRequestStatus";
    case 7033 /* k_EMsgGCStartFindingMatch */:
      return "k_EMsgGCStartFindingMatch";
    case 7034 /* k_EMsgGCConnectedPlayers */:
      return "k_EMsgGCConnectedPlayers";
    case 7035 /* k_EMsgGCAbandonCurrentGame */:
      return "k_EMsgGCAbandonCurrentGame";
    case 7036 /* k_EMsgGCStopFindingMatch */:
      return "k_EMsgGCStopFindingMatch";
    case 7038 /* k_EMsgGCPracticeLobbyCreate */:
      return "k_EMsgGCPracticeLobbyCreate";
    case 7040 /* k_EMsgGCPracticeLobbyLeave */:
      return "k_EMsgGCPracticeLobbyLeave";
    case 7041 /* k_EMsgGCPracticeLobbyLaunch */:
      return "k_EMsgGCPracticeLobbyLaunch";
    case 7042 /* k_EMsgGCPracticeLobbyList */:
      return "k_EMsgGCPracticeLobbyList";
    case 7043 /* k_EMsgGCPracticeLobbyListResponse */:
      return "k_EMsgGCPracticeLobbyListResponse";
    case 7044 /* k_EMsgGCPracticeLobbyJoin */:
      return "k_EMsgGCPracticeLobbyJoin";
    case 7046 /* k_EMsgGCPracticeLobbySetDetails */:
      return "k_EMsgGCPracticeLobbySetDetails";
    case 7047 /* k_EMsgGCPracticeLobbySetTeamSlot */:
      return "k_EMsgGCPracticeLobbySetTeamSlot";
    case 7049 /* k_EMsgGCInitialQuestionnaireResponse */:
      return "k_EMsgGCInitialQuestionnaireResponse";
    case 7055 /* k_EMsgGCPracticeLobbyResponse */:
      return "k_EMsgGCPracticeLobbyResponse";
    case 7056 /* k_EMsgGCBroadcastNotification */:
      return "k_EMsgGCBroadcastNotification";
    case 7057 /* k_EMsgGCLiveScoreboardUpdate */:
      return "k_EMsgGCLiveScoreboardUpdate";
    case 7060 /* k_EMsgGCRequestChatChannelList */:
      return "k_EMsgGCRequestChatChannelList";
    case 7061 /* k_EMsgGCRequestChatChannelListResponse */:
      return "k_EMsgGCRequestChatChannelListResponse";
    case 7070 /* k_EMsgGCReadyUp */:
      return "k_EMsgGCReadyUp";
    case 7071 /* k_EMsgGCKickedFromMatchmakingQueue */:
      return "k_EMsgGCKickedFromMatchmakingQueue";
    case 7072 /* k_EMsgGCLeaverDetected */:
      return "k_EMsgGCLeaverDetected";
    case 7073 /* k_EMsgGCSpectateFriendGame */:
      return "k_EMsgGCSpectateFriendGame";
    case 7074 /* k_EMsgGCSpectateFriendGameResponse */:
      return "k_EMsgGCSpectateFriendGameResponse";
    case 7076 /* k_EMsgGCReportsRemainingRequest */:
      return "k_EMsgGCReportsRemainingRequest";
    case 7077 /* k_EMsgGCReportsRemainingResponse */:
      return "k_EMsgGCReportsRemainingResponse";
    case 7078 /* k_EMsgGCSubmitPlayerReport */:
      return "k_EMsgGCSubmitPlayerReport";
    case 7079 /* k_EMsgGCSubmitPlayerReportResponse */:
      return "k_EMsgGCSubmitPlayerReportResponse";
    case 7081 /* k_EMsgGCPracticeLobbyKick */:
      return "k_EMsgGCPracticeLobbyKick";
    case 7082 /* k_EMsgGCSubmitPlayerReportV2 */:
      return "k_EMsgGCSubmitPlayerReportV2";
    case 7083 /* k_EMsgGCSubmitPlayerReportResponseV2 */:
      return "k_EMsgGCSubmitPlayerReportResponseV2";
    case 7084 /* k_EMsgGCRequestSaveGames */:
      return "k_EMsgGCRequestSaveGames";
    case 7085 /* k_EMsgGCRequestSaveGamesServer */:
      return "k_EMsgGCRequestSaveGamesServer";
    case 7086 /* k_EMsgGCRequestSaveGamesResponse */:
      return "k_EMsgGCRequestSaveGamesResponse";
    case 7087 /* k_EMsgGCLeaverDetectedResponse */:
      return "k_EMsgGCLeaverDetectedResponse";
    case 7088 /* k_EMsgGCPlayerFailedToConnect */:
      return "k_EMsgGCPlayerFailedToConnect";
    case 7089 /* k_EMsgGCGCToRelayConnect */:
      return "k_EMsgGCGCToRelayConnect";
    case 7090 /* k_EMsgGCGCToRelayConnectresponse */:
      return "k_EMsgGCGCToRelayConnectresponse";
    case 7091 /* k_EMsgGCWatchGame */:
      return "k_EMsgGCWatchGame";
    case 7092 /* k_EMsgGCWatchGameResponse */:
      return "k_EMsgGCWatchGameResponse";
    case 7093 /* k_EMsgGCBanStatusRequest */:
      return "k_EMsgGCBanStatusRequest";
    case 7094 /* k_EMsgGCBanStatusResponse */:
      return "k_EMsgGCBanStatusResponse";
    case 7095 /* k_EMsgGCMatchDetailsRequest */:
      return "k_EMsgGCMatchDetailsRequest";
    case 7096 /* k_EMsgGCMatchDetailsResponse */:
      return "k_EMsgGCMatchDetailsResponse";
    case 7097 /* k_EMsgGCCancelWatchGame */:
      return "k_EMsgGCCancelWatchGame";
    case 7102 /* k_EMsgGCPopup */:
      return "k_EMsgGCPopup";
    case 7111 /* k_EMsgGCFriendPracticeLobbyListRequest */:
      return "k_EMsgGCFriendPracticeLobbyListRequest";
    case 7112 /* k_EMsgGCFriendPracticeLobbyListResponse */:
      return "k_EMsgGCFriendPracticeLobbyListResponse";
    case 7113 /* k_EMsgGCPracticeLobbyJoinResponse */:
      return "k_EMsgGCPracticeLobbyJoinResponse";
    case 7115 /* k_EMsgGCCreateTeam */:
      return "k_EMsgGCCreateTeam";
    case 7116 /* k_EMsgGCCreateTeamResponse */:
      return "k_EMsgGCCreateTeamResponse";
    case 7122 /* k_EMsgGCTeamInvite_InviterToGC */:
      return "k_EMsgGCTeamInvite_InviterToGC";
    case 7123 /* k_EMsgGCTeamInvite_GCImmediateResponseToInviter */:
      return "k_EMsgGCTeamInvite_GCImmediateResponseToInviter";
    case 7124 /* k_EMsgGCTeamInvite_GCRequestToInvitee */:
      return "k_EMsgGCTeamInvite_GCRequestToInvitee";
    case 7125 /* k_EMsgGCTeamInvite_InviteeResponseToGC */:
      return "k_EMsgGCTeamInvite_InviteeResponseToGC";
    case 7126 /* k_EMsgGCTeamInvite_GCResponseToInviter */:
      return "k_EMsgGCTeamInvite_GCResponseToInviter";
    case 7127 /* k_EMsgGCTeamInvite_GCResponseToInvitee */:
      return "k_EMsgGCTeamInvite_GCResponseToInvitee";
    case 7128 /* k_EMsgGCKickTeamMember */:
      return "k_EMsgGCKickTeamMember";
    case 7129 /* k_EMsgGCKickTeamMemberResponse */:
      return "k_EMsgGCKickTeamMemberResponse";
    case 7130 /* k_EMsgGCLeaveTeam */:
      return "k_EMsgGCLeaveTeam";
    case 7131 /* k_EMsgGCLeaveTeamResponse */:
      return "k_EMsgGCLeaveTeamResponse";
    case 7142 /* k_EMsgGCApplyTeamToPracticeLobby */:
      return "k_EMsgGCApplyTeamToPracticeLobby";
    case 7144 /* k_EMsgGCTransferTeamAdmin */:
      return "k_EMsgGCTransferTeamAdmin";
    case 7149 /* k_EMsgGCPracticeLobbyJoinBroadcastChannel */:
      return "k_EMsgGCPracticeLobbyJoinBroadcastChannel";
    case 7150 /* k_EMsgGC_TournamentItemEvent */:
      return "k_EMsgGC_TournamentItemEvent";
    case 7151 /* k_EMsgGC_TournamentItemEventResponse */:
      return "k_EMsgGC_TournamentItemEventResponse";
    case 7156 /* k_EMsgTeamFanfare */:
      return "k_EMsgTeamFanfare";
    case 7157 /* k_EMsgResponseTeamFanfare */:
      return "k_EMsgResponseTeamFanfare";
    case 7166 /* k_EMsgGCEditTeamDetails */:
      return "k_EMsgGCEditTeamDetails";
    case 7167 /* k_EMsgGCEditTeamDetailsResponse */:
      return "k_EMsgGCEditTeamDetailsResponse";
    case 7170 /* k_EMsgGCReadyUpStatus */:
      return "k_EMsgGCReadyUpStatus";
    case 7186 /* k_EMsgGCToGCMatchCompleted */:
      return "k_EMsgGCToGCMatchCompleted";
    case 7188 /* k_EMsgGCBalancedShuffleLobby */:
      return "k_EMsgGCBalancedShuffleLobby";
    case 7197 /* k_EMsgGCMatchmakingStatsRequest */:
      return "k_EMsgGCMatchmakingStatsRequest";
    case 7198 /* k_EMsgGCMatchmakingStatsResponse */:
      return "k_EMsgGCMatchmakingStatsResponse";
    case 7199 /* k_EMsgGCBotGameCreate */:
      return "k_EMsgGCBotGameCreate";
    case 7200 /* k_EMsgGCSetMatchHistoryAccess */:
      return "k_EMsgGCSetMatchHistoryAccess";
    case 7201 /* k_EMsgGCSetMatchHistoryAccessResponse */:
      return "k_EMsgGCSetMatchHistoryAccessResponse";
    case 7203 /* k_EMsgUpgradeLeagueItem */:
      return "k_EMsgUpgradeLeagueItem";
    case 7204 /* k_EMsgUpgradeLeagueItemResponse */:
      return "k_EMsgUpgradeLeagueItemResponse";
    case 7206 /* k_EMsgGCWatchDownloadedReplay */:
      return "k_EMsgGCWatchDownloadedReplay";
    case 7217 /* k_EMsgClientsRejoinChatChannels */:
      return "k_EMsgClientsRejoinChatChannels";
    case 7218 /* k_EMsgGCToGCGetUserChatInfo */:
      return "k_EMsgGCToGCGetUserChatInfo";
    case 7219 /* k_EMsgGCToGCGetUserChatInfoResponse */:
      return "k_EMsgGCToGCGetUserChatInfoResponse";
    case 7220 /* k_EMsgGCToGCLeaveAllChatChannels */:
      return "k_EMsgGCToGCLeaveAllChatChannels";
    case 7221 /* k_EMsgGCToGCUpdateAccountChatBan */:
      return "k_EMsgGCToGCUpdateAccountChatBan";
    case 7234 /* k_EMsgGCToGCCanInviteUserToTeam */:
      return "k_EMsgGCToGCCanInviteUserToTeam";
    case 7235 /* k_EMsgGCToGCCanInviteUserToTeamResponse */:
      return "k_EMsgGCToGCCanInviteUserToTeamResponse";
    case 7236 /* k_EMsgGCToGCGetUserRank */:
      return "k_EMsgGCToGCGetUserRank";
    case 7237 /* k_EMsgGCToGCGetUserRankResponse */:
      return "k_EMsgGCToGCGetUserRankResponse";
    case 7238 /* k_EMsgGCToGCAdjustUserRank */:
      return "k_EMsgGCToGCAdjustUserRank";
    case 7239 /* k_EMsgGCToGCAdjustUserRankResponse */:
      return "k_EMsgGCToGCAdjustUserRankResponse";
    case 7240 /* k_EMsgGCToGCUpdateTeamStats */:
      return "k_EMsgGCToGCUpdateTeamStats";
    case 7241 /* k_EMsgGCToGCValidateTeam */:
      return "k_EMsgGCToGCValidateTeam";
    case 7242 /* k_EMsgGCToGCValidateTeamResponse */:
      return "k_EMsgGCToGCValidateTeamResponse";
    case 7255 /* k_EMsgGCToGCGetLeagueAdmin */:
      return "k_EMsgGCToGCGetLeagueAdmin";
    case 7256 /* k_EMsgGCToGCGetLeagueAdminResponse */:
      return "k_EMsgGCToGCGetLeagueAdminResponse";
    case 7272 /* k_EMsgGCLeaveChatChannel */:
      return "k_EMsgGCLeaveChatChannel";
    case 7273 /* k_EMsgGCChatMessage */:
      return "k_EMsgGCChatMessage";
    case 7274 /* k_EMsgGCGetHeroStandings */:
      return "k_EMsgGCGetHeroStandings";
    case 7275 /* k_EMsgGCGetHeroStandingsResponse */:
      return "k_EMsgGCGetHeroStandingsResponse";
    case 7283 /* k_EMsgGCItemEditorReservationsRequest */:
      return "k_EMsgGCItemEditorReservationsRequest";
    case 7284 /* k_EMsgGCItemEditorReservationsResponse */:
      return "k_EMsgGCItemEditorReservationsResponse";
    case 7285 /* k_EMsgGCItemEditorReserveItemDef */:
      return "k_EMsgGCItemEditorReserveItemDef";
    case 7286 /* k_EMsgGCItemEditorReserveItemDefResponse */:
      return "k_EMsgGCItemEditorReserveItemDefResponse";
    case 7287 /* k_EMsgGCItemEditorReleaseReservation */:
      return "k_EMsgGCItemEditorReleaseReservation";
    case 7288 /* k_EMsgGCItemEditorReleaseReservationResponse */:
      return "k_EMsgGCItemEditorReleaseReservationResponse";
    case 7308 /* k_EMsgGCFantasyLivePlayerStats */:
      return "k_EMsgGCFantasyLivePlayerStats";
    case 7309 /* k_EMsgGCFantasyFinalPlayerStats */:
      return "k_EMsgGCFantasyFinalPlayerStats";
    case 7320 /* k_EMsgGCFlipLobbyTeams */:
      return "k_EMsgGCFlipLobbyTeams";
    case 7322 /* k_EMsgGCToGCEvaluateReportedPlayer */:
      return "k_EMsgGCToGCEvaluateReportedPlayer";
    case 7323 /* k_EMsgGCToGCEvaluateReportedPlayerResponse */:
      return "k_EMsgGCToGCEvaluateReportedPlayerResponse";
    case 7324 /* k_EMsgGCToGCProcessPlayerReportForTarget */:
      return "k_EMsgGCToGCProcessPlayerReportForTarget";
    case 7325 /* k_EMsgGCToGCProcessReportSuccess */:
      return "k_EMsgGCToGCProcessReportSuccess";
    case 7326 /* k_EMsgGCNotifyAccountFlagsChange */:
      return "k_EMsgGCNotifyAccountFlagsChange";
    case 7327 /* k_EMsgGCSetProfilePrivacy */:
      return "k_EMsgGCSetProfilePrivacy";
    case 7328 /* k_EMsgGCSetProfilePrivacyResponse */:
      return "k_EMsgGCSetProfilePrivacyResponse";
    case 7342 /* k_EMsgGCClientSuspended */:
      return "k_EMsgGCClientSuspended";
    case 7343 /* k_EMsgGCPartyMemberSetCoach */:
      return "k_EMsgGCPartyMemberSetCoach";
    case 7346 /* k_EMsgGCPracticeLobbySetCoach */:
      return "k_EMsgGCPracticeLobbySetCoach";
    case 7359 /* k_EMsgGCChatModeratorBan */:
      return "k_EMsgGCChatModeratorBan";
    case 7367 /* k_EMsgGCLobbyUpdateBroadcastChannelInfo */:
      return "k_EMsgGCLobbyUpdateBroadcastChannelInfo";
    case 7372 /* k_EMsgGCToGCGrantTournamentItem */:
      return "k_EMsgGCToGCGrantTournamentItem";
    case 7375 /* k_EMsgGCToGCUpgradeTwitchViewerItems */:
      return "k_EMsgGCToGCUpgradeTwitchViewerItems";
    case 7376 /* k_EMsgGCToGCGetLiveMatchAffiliates */:
      return "k_EMsgGCToGCGetLiveMatchAffiliates";
    case 7377 /* k_EMsgGCToGCGetLiveMatchAffiliatesResponse */:
      return "k_EMsgGCToGCGetLiveMatchAffiliatesResponse";
    case 7378 /* k_EMsgGCToGCUpdatePlayerPennantCounts */:
      return "k_EMsgGCToGCUpdatePlayerPennantCounts";
    case 7379 /* k_EMsgGCToGCGetPlayerPennantCounts */:
      return "k_EMsgGCToGCGetPlayerPennantCounts";
    case 7380 /* k_EMsgGCToGCGetPlayerPennantCountsResponse */:
      return "k_EMsgGCToGCGetPlayerPennantCountsResponse";
    case 7381 /* k_EMsgGCGameMatchSignOutPermissionRequest */:
      return "k_EMsgGCGameMatchSignOutPermissionRequest";
    case 7382 /* k_EMsgGCGameMatchSignOutPermissionResponse */:
      return "k_EMsgGCGameMatchSignOutPermissionResponse";
    case 7384 /* k_EMsgDOTAAwardEventPoints */:
      return "k_EMsgDOTAAwardEventPoints";
    case 7387 /* k_EMsgDOTAGetEventPoints */:
      return "k_EMsgDOTAGetEventPoints";
    case 7388 /* k_EMsgDOTAGetEventPointsResponse */:
      return "k_EMsgDOTAGetEventPointsResponse";
    case 7397 /* k_EMsgGCPartyLeaderWatchGamePrompt */:
      return "k_EMsgGCPartyLeaderWatchGamePrompt";
    case 7405 /* k_EMsgGCCompendiumSetSelection */:
      return "k_EMsgGCCompendiumSetSelection";
    case 7406 /* k_EMsgGCCompendiumDataRequest */:
      return "k_EMsgGCCompendiumDataRequest";
    case 7407 /* k_EMsgGCCompendiumDataResponse */:
      return "k_EMsgGCCompendiumDataResponse";
    case 7408 /* k_EMsgDOTAGetPlayerMatchHistory */:
      return "k_EMsgDOTAGetPlayerMatchHistory";
    case 7409 /* k_EMsgDOTAGetPlayerMatchHistoryResponse */:
      return "k_EMsgDOTAGetPlayerMatchHistoryResponse";
    case 7410 /* k_EMsgGCToGCMatchmakingAddParty */:
      return "k_EMsgGCToGCMatchmakingAddParty";
    case 7411 /* k_EMsgGCToGCMatchmakingRemoveParty */:
      return "k_EMsgGCToGCMatchmakingRemoveParty";
    case 7412 /* k_EMsgGCToGCMatchmakingRemoveAllParties */:
      return "k_EMsgGCToGCMatchmakingRemoveAllParties";
    case 7413 /* k_EMsgGCToGCMatchmakingMatchFound */:
      return "k_EMsgGCToGCMatchmakingMatchFound";
    case 7414 /* k_EMsgGCToGCUpdateMatchManagementStats */:
      return "k_EMsgGCToGCUpdateMatchManagementStats";
    case 7415 /* k_EMsgGCToGCUpdateMatchmakingStats */:
      return "k_EMsgGCToGCUpdateMatchmakingStats";
    case 7416 /* k_EMsgGCToServerPingRequest */:
      return "k_EMsgGCToServerPingRequest";
    case 7417 /* k_EMsgGCToServerPingResponse */:
      return "k_EMsgGCToServerPingResponse";
    case 7418 /* k_EMsgGCToServerEvaluateToxicChat */:
      return "k_EMsgGCToServerEvaluateToxicChat";
    case 7419 /* k_EMsgServerToGCEvaluateToxicChat */:
      return "k_EMsgServerToGCEvaluateToxicChat";
    case 7420 /* k_EMsgServerToGCEvaluateToxicChatResponse */:
      return "k_EMsgServerToGCEvaluateToxicChatResponse";
    case 7426 /* k_EMsgGCToGCProcessMatchLeaver */:
      return "k_EMsgGCToGCProcessMatchLeaver";
    case 7427 /* k_EMsgGCNotificationsRequest */:
      return "k_EMsgGCNotificationsRequest";
    case 7428 /* k_EMsgGCNotificationsResponse */:
      return "k_EMsgGCNotificationsResponse";
    case 7429 /* k_EMsgGCToGCModifyNotification */:
      return "k_EMsgGCToGCModifyNotification";
    case 7434 /* k_EMsgGCLeagueAdminList */:
      return "k_EMsgGCLeagueAdminList";
    case 7435 /* k_EMsgGCNotificationsMarkReadRequest */:
      return "k_EMsgGCNotificationsMarkReadRequest";
    case 7450 /* k_EMsgServerToGCRequestBatchPlayerResources */:
      return "k_EMsgServerToGCRequestBatchPlayerResources";
    case 7451 /* k_EMsgServerToGCRequestBatchPlayerResourcesResponse */:
      return "k_EMsgServerToGCRequestBatchPlayerResourcesResponse";
    case 7453 /* k_EMsgGCCompendiumSetSelectionResponse */:
      return "k_EMsgGCCompendiumSetSelectionResponse";
    case 7454 /* k_EMsgGCRankedPlayerInfoSubmit */:
      return "k_EMsgGCRankedPlayerInfoSubmit";
    case 7455 /* k_EMsgGCRankedPlayerInfoSubmitResponse */:
      return "k_EMsgGCRankedPlayerInfoSubmitResponse";
    case 7456 /* k_EMsgGCPlayerInfoSubmit */:
      return "k_EMsgGCPlayerInfoSubmit";
    case 7457 /* k_EMsgGCPlayerInfoSubmitResponse */:
      return "k_EMsgGCPlayerInfoSubmitResponse";
    case 7458 /* k_EMsgGCToGCGetAccountLevel */:
      return "k_EMsgGCToGCGetAccountLevel";
    case 7459 /* k_EMsgGCToGCGetAccountLevelResponse */:
      return "k_EMsgGCToGCGetAccountLevelResponse";
    case 7464 /* k_EMsgDOTAGetWeekendTourneySchedule */:
      return "k_EMsgDOTAGetWeekendTourneySchedule";
    case 7465 /* k_EMsgDOTAWeekendTourneySchedule */:
      return "k_EMsgDOTAWeekendTourneySchedule";
    case 7466 /* k_EMsgGCJoinableCustomGameModesRequest */:
      return "k_EMsgGCJoinableCustomGameModesRequest";
    case 7467 /* k_EMsgGCJoinableCustomGameModesResponse */:
      return "k_EMsgGCJoinableCustomGameModesResponse";
    case 7468 /* k_EMsgGCJoinableCustomLobbiesRequest */:
      return "k_EMsgGCJoinableCustomLobbiesRequest";
    case 7469 /* k_EMsgGCJoinableCustomLobbiesResponse */:
      return "k_EMsgGCJoinableCustomLobbiesResponse";
    case 7470 /* k_EMsgGCQuickJoinCustomLobby */:
      return "k_EMsgGCQuickJoinCustomLobby";
    case 7471 /* k_EMsgGCQuickJoinCustomLobbyResponse */:
      return "k_EMsgGCQuickJoinCustomLobbyResponse";
    case 7472 /* k_EMsgGCToGCGrantEventPointAction */:
      return "k_EMsgGCToGCGrantEventPointAction";
    case 7478 /* k_EMsgGCToGCSetCompendiumSelection */:
      return "k_EMsgGCToGCSetCompendiumSelection";
    case 7484 /* k_EMsgGCHasItemQuery */:
      return "k_EMsgGCHasItemQuery";
    case 7485 /* k_EMsgGCHasItemResponse */:
      return "k_EMsgGCHasItemResponse";
    case 7488 /* k_EMsgGCToGCGrantEventPointActionMsg */:
      return "k_EMsgGCToGCGrantEventPointActionMsg";
    case 7492 /* k_EMsgGCToGCGetCompendiumSelections */:
      return "k_EMsgGCToGCGetCompendiumSelections";
    case 7493 /* k_EMsgGCToGCGetCompendiumSelectionsResponse */:
      return "k_EMsgGCToGCGetCompendiumSelectionsResponse";
    case 7494 /* k_EMsgServerToGCMatchConnectionStats */:
      return "k_EMsgServerToGCMatchConnectionStats";
    case 7495 /* k_EMsgGCToClientTournamentItemDrop */:
      return "k_EMsgGCToClientTournamentItemDrop";
    case 7496 /* k_EMsgSQLDelayedGrantLeagueDrop */:
      return "k_EMsgSQLDelayedGrantLeagueDrop";
    case 7497 /* k_EMsgServerGCUpdateSpectatorCount */:
      return "k_EMsgServerGCUpdateSpectatorCount";
    case 7501 /* k_EMsgGCToGCEmoticonUnlock */:
      return "k_EMsgGCToGCEmoticonUnlock";
    case 7502 /* k_EMsgSignOutDraftInfo */:
      return "k_EMsgSignOutDraftInfo";
    case 7503 /* k_EMsgClientToGCEmoticonDataRequest */:
      return "k_EMsgClientToGCEmoticonDataRequest";
    case 7504 /* k_EMsgGCToClientEmoticonData */:
      return "k_EMsgGCToClientEmoticonData";
    case 7505 /* k_EMsgGCPracticeLobbyToggleBroadcastChannelCameramanStatus */:
      return "k_EMsgGCPracticeLobbyToggleBroadcastChannelCameramanStatus";
    case 7518 /* k_EMsgDOTARedeemItem */:
      return "k_EMsgDOTARedeemItem";
    case 7519 /* k_EMsgDOTARedeemItemResponse */:
      return "k_EMsgDOTARedeemItemResponse";
    case 7521 /* k_EMsgClientToGCGetAllHeroProgress */:
      return "k_EMsgClientToGCGetAllHeroProgress";
    case 7522 /* k_EMsgClientToGCGetAllHeroProgressResponse */:
      return "k_EMsgClientToGCGetAllHeroProgressResponse";
    case 7523 /* k_EMsgGCToGCGetServerForClient */:
      return "k_EMsgGCToGCGetServerForClient";
    case 7524 /* k_EMsgGCToGCGetServerForClientResponse */:
      return "k_EMsgGCToGCGetServerForClientResponse";
    case 7525 /* k_EMsgSQLProcessTournamentGameOutcome */:
      return "k_EMsgSQLProcessTournamentGameOutcome";
    case 7526 /* k_EMsgSQLGrantTrophyToAccount */:
      return "k_EMsgSQLGrantTrophyToAccount";
    case 7527 /* k_EMsgClientToGCGetTrophyList */:
      return "k_EMsgClientToGCGetTrophyList";
    case 7528 /* k_EMsgClientToGCGetTrophyListResponse */:
      return "k_EMsgClientToGCGetTrophyListResponse";
    case 7529 /* k_EMsgGCToClientTrophyAwarded */:
      return "k_EMsgGCToClientTrophyAwarded";
    case 7530 /* k_EMsgGCGameBotMatchSignOut */:
      return "k_EMsgGCGameBotMatchSignOut";
    case 7531 /* k_EMsgGCGameBotMatchSignOutPermissionRequest */:
      return "k_EMsgGCGameBotMatchSignOutPermissionRequest";
    case 7532 /* k_EMsgSignOutBotInfo */:
      return "k_EMsgSignOutBotInfo";
    case 7533 /* k_EMsgGCToGCUpdateProfileCards */:
      return "k_EMsgGCToGCUpdateProfileCards";
    case 7534 /* k_EMsgClientToGCGetProfileCard */:
      return "k_EMsgClientToGCGetProfileCard";
    case 7535 /* k_EMsgClientToGCGetProfileCardResponse */:
      return "k_EMsgClientToGCGetProfileCardResponse";
    case 7536 /* k_EMsgClientToGCGetBattleReport */:
      return "k_EMsgClientToGCGetBattleReport";
    case 7537 /* k_EMsgClientToGCGetBattleReportResponse */:
      return "k_EMsgClientToGCGetBattleReportResponse";
    case 7538 /* k_EMsgClientToGCSetProfileCardSlots */:
      return "k_EMsgClientToGCSetProfileCardSlots";
    case 7539 /* k_EMsgGCToClientProfileCardUpdated */:
      return "k_EMsgGCToClientProfileCardUpdated";
    case 7540 /* k_EMsgServerToGCVictoryPredictions */:
      return "k_EMsgServerToGCVictoryPredictions";
    case 7541 /* k_EMsgClientToGCGetBattleReportAggregateStats */:
      return "k_EMsgClientToGCGetBattleReportAggregateStats";
    case 7542 /* k_EMsgClientToGCGetBattleReportAggregateStatsResponse */:
      return "k_EMsgClientToGCGetBattleReportAggregateStatsResponse";
    case 7543 /* k_EMsgClientToGCGetBattleReportInfo */:
      return "k_EMsgClientToGCGetBattleReportInfo";
    case 7544 /* k_EMsgClientToGCGetBattleReportInfoResponse */:
      return "k_EMsgClientToGCGetBattleReportInfoResponse";
    case 7545 /* k_EMsgSignOutCommunicationSummary */:
      return "k_EMsgSignOutCommunicationSummary";
    case 7546 /* k_EMsgServerToGCRequestStatus_Response */:
      return "k_EMsgServerToGCRequestStatus_Response";
    case 7547 /* k_EMsgClientToGCCreateHeroStatue */:
      return "k_EMsgClientToGCCreateHeroStatue";
    case 7548 /* k_EMsgGCToClientHeroStatueCreateResult */:
      return "k_EMsgGCToClientHeroStatueCreateResult";
    case 7549 /* k_EMsgGCGCToLANServerRelayConnect */:
      return "k_EMsgGCGCToLANServerRelayConnect";
    case 7550 /* k_EMsgClientToGCAcknowledgeBattleReport */:
      return "k_EMsgClientToGCAcknowledgeBattleReport";
    case 7551 /* k_EMsgClientToGCAcknowledgeBattleReportResponse */:
      return "k_EMsgClientToGCAcknowledgeBattleReportResponse";
    case 7552 /* k_EMsgClientToGCGetBattleReportMatchHistory */:
      return "k_EMsgClientToGCGetBattleReportMatchHistory";
    case 7553 /* k_EMsgClientToGCGetBattleReportMatchHistoryResponse */:
      return "k_EMsgClientToGCGetBattleReportMatchHistoryResponse";
    case 7554 /* k_EMsgServerToGCReportKillSummaries */:
      return "k_EMsgServerToGCReportKillSummaries";
    case 7561 /* k_EMsgGCToGCUpdatePlayerPredictions */:
      return "k_EMsgGCToGCUpdatePlayerPredictions";
    case 7562 /* k_EMsgGCToServerPredictionResult */:
      return "k_EMsgGCToServerPredictionResult";
    case 7569 /* k_EMsgGCToGCReplayMonitorValidateReplay */:
      return "k_EMsgGCToGCReplayMonitorValidateReplay";
    case 7572 /* k_EMsgLobbyEventPoints */:
      return "k_EMsgLobbyEventPoints";
    case 7573 /* k_EMsgGCToGCGetCustomGameTickets */:
      return "k_EMsgGCToGCGetCustomGameTickets";
    case 7574 /* k_EMsgGCToGCGetCustomGameTicketsResponse */:
      return "k_EMsgGCToGCGetCustomGameTicketsResponse";
    case 7576 /* k_EMsgGCToGCCustomGamePlayed */:
      return "k_EMsgGCToGCCustomGamePlayed";
    case 7577 /* k_EMsgGCToGCGrantEventPointsToUser */:
      return "k_EMsgGCToGCGrantEventPointsToUser";
    case 7579 /* k_EMsgGameserverCrashReport */:
      return "k_EMsgGameserverCrashReport";
    case 7580 /* k_EMsgGameserverCrashReportResponse */:
      return "k_EMsgGameserverCrashReportResponse";
    case 7581 /* k_EMsgGCToClientSteamDatagramTicket */:
      return "k_EMsgGCToClientSteamDatagramTicket";
    case 7583 /* k_EMsgGCToGCSendAccountsEventPoints */:
      return "k_EMsgGCToGCSendAccountsEventPoints";
    case 7584 /* k_EMsgClientToGCRerollPlayerChallenge */:
      return "k_EMsgClientToGCRerollPlayerChallenge";
    case 7585 /* k_EMsgServerToGCRerollPlayerChallenge */:
      return "k_EMsgServerToGCRerollPlayerChallenge";
    case 7586 /* k_EMsgGCRerollPlayerChallengeResponse */:
      return "k_EMsgGCRerollPlayerChallengeResponse";
    case 7587 /* k_EMsgSignOutUpdatePlayerChallenge */:
      return "k_EMsgSignOutUpdatePlayerChallenge";
    case 7588 /* k_EMsgClientToGCSetPartyLeader */:
      return "k_EMsgClientToGCSetPartyLeader";
    case 7589 /* k_EMsgClientToGCCancelPartyInvites */:
      return "k_EMsgClientToGCCancelPartyInvites";
    case 7592 /* k_EMsgSQLGrantLeagueMatchToTicketHolders */:
      return "k_EMsgSQLGrantLeagueMatchToTicketHolders";
    case 7594 /* k_EMsgGCToGCEmoticonUnlockNoRollback */:
      return "k_EMsgGCToGCEmoticonUnlockNoRollback";
    case 7603 /* k_EMsgClientToGCApplyGemCombiner */:
      return "k_EMsgClientToGCApplyGemCombiner";
    case 7606 /* k_EMsgClientToGCGetAllHeroOrder */:
      return "k_EMsgClientToGCGetAllHeroOrder";
    case 7607 /* k_EMsgClientToGCGetAllHeroOrderResponse */:
      return "k_EMsgClientToGCGetAllHeroOrderResponse";
    case 7608 /* k_EMsgSQLGCToGCGrantBadgePoints */:
      return "k_EMsgSQLGCToGCGrantBadgePoints";
    case 7611 /* k_EMsgGCToGCCheckOwnsEntireEmoticonRange */:
      return "k_EMsgGCToGCCheckOwnsEntireEmoticonRange";
    case 7612 /* k_EMsgGCToGCCheckOwnsEntireEmoticonRangeResponse */:
      return "k_EMsgGCToGCCheckOwnsEntireEmoticonRangeResponse";
    case 7623 /* k_EMsgGCToClientRequestLaneSelection */:
      return "k_EMsgGCToClientRequestLaneSelection";
    case 7624 /* k_EMsgGCToClientRequestLaneSelectionResponse */:
      return "k_EMsgGCToClientRequestLaneSelectionResponse";
    case 7625 /* k_EMsgServerToGCCavernCrawlIsHeroActive */:
      return "k_EMsgServerToGCCavernCrawlIsHeroActive";
    case 7626 /* k_EMsgServerToGCCavernCrawlIsHeroActiveResponse */:
      return "k_EMsgServerToGCCavernCrawlIsHeroActiveResponse";
    case 7627 /* k_EMsgClientToGCPlayerCardSpecificPurchaseRequest */:
      return "k_EMsgClientToGCPlayerCardSpecificPurchaseRequest";
    case 7628 /* k_EMsgClientToGCPlayerCardSpecificPurchaseResponse */:
      return "k_EMsgClientToGCPlayerCardSpecificPurchaseResponse";
    case 7630 /* k_EMsgSQLSetIsLeagueAdmin */:
      return "k_EMsgSQLSetIsLeagueAdmin";
    case 7631 /* k_EMsgGCToGCGetLiveLeagueMatches */:
      return "k_EMsgGCToGCGetLiveLeagueMatches";
    case 7632 /* k_EMsgGCToGCGetLiveLeagueMatchesResponse */:
      return "k_EMsgGCToGCGetLiveLeagueMatchesResponse";
    case 7633 /* k_EMsgDOTALeagueInfoListAdminsRequest */:
      return "k_EMsgDOTALeagueInfoListAdminsRequest";
    case 7634 /* k_EMsgDOTALeagueInfoListAdminsReponse */:
      return "k_EMsgDOTALeagueInfoListAdminsReponse";
    case 7645 /* k_EMsgGCToGCLeagueMatchStarted */:
      return "k_EMsgGCToGCLeagueMatchStarted";
    case 7646 /* k_EMsgGCToGCLeagueMatchCompleted */:
      return "k_EMsgGCToGCLeagueMatchCompleted";
    case 7647 /* k_EMsgGCToGCLeagueMatchStartedResponse */:
      return "k_EMsgGCToGCLeagueMatchStartedResponse";
    case 7650 /* k_EMsgDOTALeagueAvailableLobbyNodesRequest */:
      return "k_EMsgDOTALeagueAvailableLobbyNodesRequest";
    case 7651 /* k_EMsgDOTALeagueAvailableLobbyNodes */:
      return "k_EMsgDOTALeagueAvailableLobbyNodes";
    case 7652 /* k_EMsgGCToGCLeagueRequest */:
      return "k_EMsgGCToGCLeagueRequest";
    case 7653 /* k_EMsgGCToGCLeagueResponse */:
      return "k_EMsgGCToGCLeagueResponse";
    case 7654 /* k_EMsgGCToGCLeagueNodeGroupRequest */:
      return "k_EMsgGCToGCLeagueNodeGroupRequest";
    case 7655 /* k_EMsgGCToGCLeagueNodeGroupResponse */:
      return "k_EMsgGCToGCLeagueNodeGroupResponse";
    case 7656 /* k_EMsgGCToGCLeagueNodeRequest */:
      return "k_EMsgGCToGCLeagueNodeRequest";
    case 7657 /* k_EMsgGCToGCLeagueNodeResponse */:
      return "k_EMsgGCToGCLeagueNodeResponse";
    case 7658 /* k_EMsgGCToGCRealtimeStatsTerseRequest */:
      return "k_EMsgGCToGCRealtimeStatsTerseRequest";
    case 7659 /* k_EMsgGCToGCRealtimeStatsTerseResponse */:
      return "k_EMsgGCToGCRealtimeStatsTerseResponse";
    case 7660 /* k_EMsgGCToGCGetTopMatchesRequest */:
      return "k_EMsgGCToGCGetTopMatchesRequest";
    case 7661 /* k_EMsgGCToGCGetTopMatchesResponse */:
      return "k_EMsgGCToGCGetTopMatchesResponse";
    case 7662 /* k_EMsgClientToGCGetFilteredPlayers */:
      return "k_EMsgClientToGCGetFilteredPlayers";
    case 7663 /* k_EMsgGCToClientGetFilteredPlayersResponse */:
      return "k_EMsgGCToClientGetFilteredPlayersResponse";
    case 7664 /* k_EMsgClientToGCRemoveFilteredPlayer */:
      return "k_EMsgClientToGCRemoveFilteredPlayer";
    case 7665 /* k_EMsgGCToClientRemoveFilteredPlayerResponse */:
      return "k_EMsgGCToClientRemoveFilteredPlayerResponse";
    case 7666 /* k_EMsgGCToClientPlayerBeaconState */:
      return "k_EMsgGCToClientPlayerBeaconState";
    case 7667 /* k_EMsgGCToClientPartyBeaconUpdate */:
      return "k_EMsgGCToClientPartyBeaconUpdate";
    case 7668 /* k_EMsgGCToClientPartySearchInvite */:
      return "k_EMsgGCToClientPartySearchInvite";
    case 7669 /* k_EMsgClientToGCUpdatePartyBeacon */:
      return "k_EMsgClientToGCUpdatePartyBeacon";
    case 7670 /* k_EMsgClientToGCRequestActiveBeaconParties */:
      return "k_EMsgClientToGCRequestActiveBeaconParties";
    case 7671 /* k_EMsgGCToClientRequestActiveBeaconPartiesResponse */:
      return "k_EMsgGCToClientRequestActiveBeaconPartiesResponse";
    case 7672 /* k_EMsgClientToGCManageFavorites */:
      return "k_EMsgClientToGCManageFavorites";
    case 7673 /* k_EMsgGCToClientManageFavoritesResponse */:
      return "k_EMsgGCToClientManageFavoritesResponse";
    case 7674 /* k_EMsgClientToGCJoinPartyFromBeacon */:
      return "k_EMsgClientToGCJoinPartyFromBeacon";
    case 7675 /* k_EMsgGCToClientJoinPartyFromBeaconResponse */:
      return "k_EMsgGCToClientJoinPartyFromBeaconResponse";
    case 7676 /* k_EMsgClientToGCGetFavoritePlayers */:
      return "k_EMsgClientToGCGetFavoritePlayers";
    case 7677 /* k_EMsgGCToClientGetFavoritePlayersResponse */:
      return "k_EMsgGCToClientGetFavoritePlayersResponse";
    case 7678 /* k_EMsgClientToGCVerifyFavoritePlayers */:
      return "k_EMsgClientToGCVerifyFavoritePlayers";
    case 7679 /* k_EMsgGCToClientVerifyFavoritePlayersResponse */:
      return "k_EMsgGCToClientVerifyFavoritePlayersResponse";
    case 7680 /* k_EMsgGCToClientPartySearchInvites */:
      return "k_EMsgGCToClientPartySearchInvites";
    case 7681 /* k_EMsgGCToClientRequestMMInfo */:
      return "k_EMsgGCToClientRequestMMInfo";
    case 7682 /* k_EMsgClientToGCMMInfo */:
      return "k_EMsgClientToGCMMInfo";
    case 7683 /* k_EMsgSignOutTextMuteInfo */:
      return "k_EMsgSignOutTextMuteInfo";
    case 7684 /* k_EMsgClientToGCPurchaseLabyrinthBlessings */:
      return "k_EMsgClientToGCPurchaseLabyrinthBlessings";
    case 7685 /* k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse */:
      return "k_EMsgClientToGCPurchaseLabyrinthBlessingsResponse";
    case 7686 /* k_EMsgClientToGCPurchaseFilteredPlayerSlot */:
      return "k_EMsgClientToGCPurchaseFilteredPlayerSlot";
    case 7687 /* k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse */:
      return "k_EMsgGCToClientPurchaseFilteredPlayerSlotResponse";
    case 7688 /* k_EMsgClientToGCUpdateFilteredPlayerNote */:
      return "k_EMsgClientToGCUpdateFilteredPlayerNote";
    case 7689 /* k_EMsgGCToClientUpdateFilteredPlayerNoteResponse */:
      return "k_EMsgGCToClientUpdateFilteredPlayerNoteResponse";
    case 7690 /* k_EMsgClientToGCClaimSwag */:
      return "k_EMsgClientToGCClaimSwag";
    case 7691 /* k_EMsgGCToClientClaimSwagResponse */:
      return "k_EMsgGCToClientClaimSwagResponse";
    case 8004 /* k_EMsgServerToGCLockCharmTrading */:
      return "k_EMsgServerToGCLockCharmTrading";
    case 8006 /* k_EMsgClientToGCPlayerStatsRequest */:
      return "k_EMsgClientToGCPlayerStatsRequest";
    case 8007 /* k_EMsgGCToClientPlayerStatsResponse */:
      return "k_EMsgGCToClientPlayerStatsResponse";
    case 8008 /* k_EMsgGCClearPracticeLobbyTeam */:
      return "k_EMsgGCClearPracticeLobbyTeam";
    case 8009 /* k_EMsgClientToGCFindTopSourceTVGames */:
      return "k_EMsgClientToGCFindTopSourceTVGames";
    case 8010 /* k_EMsgGCToClientFindTopSourceTVGamesResponse */:
      return "k_EMsgGCToClientFindTopSourceTVGamesResponse";
    case 8011 /* k_EMsgGCLobbyList */:
      return "k_EMsgGCLobbyList";
    case 8012 /* k_EMsgGCLobbyListResponse */:
      return "k_EMsgGCLobbyListResponse";
    case 8013 /* k_EMsgGCPlayerStatsMatchSignOut */:
      return "k_EMsgGCPlayerStatsMatchSignOut";
    case 8016 /* k_EMsgClientToGCSocialFeedPostCommentRequest */:
      return "k_EMsgClientToGCSocialFeedPostCommentRequest";
    case 8017 /* k_EMsgGCToClientSocialFeedPostCommentResponse */:
      return "k_EMsgGCToClientSocialFeedPostCommentResponse";
    case 8018 /* k_EMsgClientToGCCustomGamesFriendsPlayedRequest */:
      return "k_EMsgClientToGCCustomGamesFriendsPlayedRequest";
    case 8019 /* k_EMsgGCToClientCustomGamesFriendsPlayedResponse */:
      return "k_EMsgGCToClientCustomGamesFriendsPlayedResponse";
    case 8020 /* k_EMsgClientToGCFriendsPlayedCustomGameRequest */:
      return "k_EMsgClientToGCFriendsPlayedCustomGameRequest";
    case 8021 /* k_EMsgGCToClientFriendsPlayedCustomGameResponse */:
      return "k_EMsgGCToClientFriendsPlayedCustomGameResponse";
    case 8024 /* k_EMsgGCTopCustomGamesList */:
      return "k_EMsgGCTopCustomGamesList";
    case 8029 /* k_EMsgClientToGCSetPartyOpen */:
      return "k_EMsgClientToGCSetPartyOpen";
    case 8030 /* k_EMsgClientToGCMergePartyInvite */:
      return "k_EMsgClientToGCMergePartyInvite";
    case 8031 /* k_EMsgGCToClientMergeGroupInviteReply */:
      return "k_EMsgGCToClientMergeGroupInviteReply";
    case 8032 /* k_EMsgClientToGCMergePartyResponse */:
      return "k_EMsgClientToGCMergePartyResponse";
    case 8033 /* k_EMsgGCToClientMergePartyResponseReply */:
      return "k_EMsgGCToClientMergePartyResponseReply";
    case 8034 /* k_EMsgClientToGCGetProfileCardStats */:
      return "k_EMsgClientToGCGetProfileCardStats";
    case 8035 /* k_EMsgClientToGCGetProfileCardStatsResponse */:
      return "k_EMsgClientToGCGetProfileCardStatsResponse";
    case 8036 /* k_EMsgClientToGCTopLeagueMatchesRequest */:
      return "k_EMsgClientToGCTopLeagueMatchesRequest";
    case 8037 /* k_EMsgClientToGCTopFriendMatchesRequest */:
      return "k_EMsgClientToGCTopFriendMatchesRequest";
    case 8040 /* k_EMsgGCToClientProfileCardStatsUpdated */:
      return "k_EMsgGCToClientProfileCardStatsUpdated";
    case 8041 /* k_EMsgServerToGCRealtimeStats */:
      return "k_EMsgServerToGCRealtimeStats";
    case 8042 /* k_EMsgGCToServerRealtimeStatsStartStop */:
      return "k_EMsgGCToServerRealtimeStatsStartStop";
    case 8045 /* k_EMsgGCToGCGetServersForClients */:
      return "k_EMsgGCToGCGetServersForClients";
    case 8046 /* k_EMsgGCToGCGetServersForClientsResponse */:
      return "k_EMsgGCToGCGetServersForClientsResponse";
    case 8047 /* k_EMsgGCPracticeLobbyKickFromTeam */:
      return "k_EMsgGCPracticeLobbyKickFromTeam";
    case 8048 /* k_EMsgDOTAChatGetMemberCount */:
      return "k_EMsgDOTAChatGetMemberCount";
    case 8049 /* k_EMsgDOTAChatGetMemberCountResponse */:
      return "k_EMsgDOTAChatGetMemberCountResponse";
    case 8050 /* k_EMsgClientToGCSocialFeedPostMessageRequest */:
      return "k_EMsgClientToGCSocialFeedPostMessageRequest";
    case 8051 /* k_EMsgGCToClientSocialFeedPostMessageResponse */:
      return "k_EMsgGCToClientSocialFeedPostMessageResponse";
    case 8052 /* k_EMsgCustomGameListenServerStartedLoading */:
      return "k_EMsgCustomGameListenServerStartedLoading";
    case 8053 /* k_EMsgCustomGameClientFinishedLoading */:
      return "k_EMsgCustomGameClientFinishedLoading";
    case 8054 /* k_EMsgGCPracticeLobbyCloseBroadcastChannel */:
      return "k_EMsgGCPracticeLobbyCloseBroadcastChannel";
    case 8055 /* k_EMsgGCStartFindingMatchResponse */:
      return "k_EMsgGCStartFindingMatchResponse";
    case 8057 /* k_EMsgSQLGCToGCGrantAccountFlag */:
      return "k_EMsgSQLGCToGCGrantAccountFlag";
    case 8061 /* k_EMsgGCToClientTopLeagueMatchesResponse */:
      return "k_EMsgGCToClientTopLeagueMatchesResponse";
    case 8062 /* k_EMsgGCToClientTopFriendMatchesResponse */:
      return "k_EMsgGCToClientTopFriendMatchesResponse";
    case 8063 /* k_EMsgClientToGCMatchesMinimalRequest */:
      return "k_EMsgClientToGCMatchesMinimalRequest";
    case 8064 /* k_EMsgClientToGCMatchesMinimalResponse */:
      return "k_EMsgClientToGCMatchesMinimalResponse";
    case 8067 /* k_EMsgGCToClientChatRegionsEnabled */:
      return "k_EMsgGCToClientChatRegionsEnabled";
    case 8068 /* k_EMsgClientToGCPingData */:
      return "k_EMsgClientToGCPingData";
    case 8071 /* k_EMsgGCToGCEnsureAccountInParty */:
      return "k_EMsgGCToGCEnsureAccountInParty";
    case 8072 /* k_EMsgGCToGCEnsureAccountInPartyResponse */:
      return "k_EMsgGCToGCEnsureAccountInPartyResponse";
    case 8073 /* k_EMsgClientToGCGetProfileTickets */:
      return "k_EMsgClientToGCGetProfileTickets";
    case 8074 /* k_EMsgClientToGCGetProfileTicketsResponse */:
      return "k_EMsgClientToGCGetProfileTicketsResponse";
    case 8075 /* k_EMsgGCToClientMatchGroupsVersion */:
      return "k_EMsgGCToClientMatchGroupsVersion";
    case 8076 /* k_EMsgClientToGCH264Unsupported */:
      return "k_EMsgClientToGCH264Unsupported";
    case 8078 /* k_EMsgClientToGCGetQuestProgress */:
      return "k_EMsgClientToGCGetQuestProgress";
    case 8079 /* k_EMsgClientToGCGetQuestProgressResponse */:
      return "k_EMsgClientToGCGetQuestProgressResponse";
    case 8080 /* k_EMsgSignOutXPCoins */:
      return "k_EMsgSignOutXPCoins";
    case 8081 /* k_EMsgGCToClientMatchSignedOut */:
      return "k_EMsgGCToClientMatchSignedOut";
    case 8082 /* k_EMsgGCGetHeroStatsHistory */:
      return "k_EMsgGCGetHeroStatsHistory";
    case 8083 /* k_EMsgGCGetHeroStatsHistoryResponse */:
      return "k_EMsgGCGetHeroStatsHistoryResponse";
    case 8084 /* k_EMsgClientToGCPrivateChatInvite */:
      return "k_EMsgClientToGCPrivateChatInvite";
    case 8088 /* k_EMsgClientToGCPrivateChatKick */:
      return "k_EMsgClientToGCPrivateChatKick";
    case 8089 /* k_EMsgClientToGCPrivateChatPromote */:
      return "k_EMsgClientToGCPrivateChatPromote";
    case 8090 /* k_EMsgClientToGCPrivateChatDemote */:
      return "k_EMsgClientToGCPrivateChatDemote";
    case 8091 /* k_EMsgGCToClientPrivateChatResponse */:
      return "k_EMsgGCToClientPrivateChatResponse";
    case 8095 /* k_EMsgClientToGCLatestConductScorecardRequest */:
      return "k_EMsgClientToGCLatestConductScorecardRequest";
    case 8096 /* k_EMsgClientToGCLatestConductScorecard */:
      return "k_EMsgClientToGCLatestConductScorecard";
    case 8099 /* k_EMsgClientToGCWageringRequest */:
      return "k_EMsgClientToGCWageringRequest";
    case 8100 /* k_EMsgGCToClientWageringResponse */:
      return "k_EMsgGCToClientWageringResponse";
    case 8103 /* k_EMsgClientToGCEventGoalsRequest */:
      return "k_EMsgClientToGCEventGoalsRequest";
    case 8104 /* k_EMsgClientToGCEventGoalsResponse */:
      return "k_EMsgClientToGCEventGoalsResponse";
    case 8108 /* k_EMsgGCToGCLeaguePredictionsUpdate */:
      return "k_EMsgGCToGCLeaguePredictionsUpdate";
    case 8110 /* k_EMsgGCToGCAddUserToPostGameChat */:
      return "k_EMsgGCToGCAddUserToPostGameChat";
    case 8111 /* k_EMsgClientToGCHasPlayerVotedForMVP */:
      return "k_EMsgClientToGCHasPlayerVotedForMVP";
    case 8112 /* k_EMsgClientToGCHasPlayerVotedForMVPResponse */:
      return "k_EMsgClientToGCHasPlayerVotedForMVPResponse";
    case 8113 /* k_EMsgClientToGCVoteForMVP */:
      return "k_EMsgClientToGCVoteForMVP";
    case 8114 /* k_EMsgClientToGCVoteForMVPResponse */:
      return "k_EMsgClientToGCVoteForMVPResponse";
    case 8115 /* k_EMsgGCToGCGetEventParticipation */:
      return "k_EMsgGCToGCGetEventParticipation";
    case 8116 /* k_EMsgGCToGCGetEventParticipationResponse */:
      return "k_EMsgGCToGCGetEventParticipationResponse";
    case 8117 /* k_EMsgGCToClientAutomatedTournamentStateChange */:
      return "k_EMsgGCToClientAutomatedTournamentStateChange";
    case 8118 /* k_EMsgClientToGCWeekendTourneyOpts */:
      return "k_EMsgClientToGCWeekendTourneyOpts";
    case 8119 /* k_EMsgClientToGCWeekendTourneyOptsResponse */:
      return "k_EMsgClientToGCWeekendTourneyOptsResponse";
    case 8120 /* k_EMsgClientToGCWeekendTourneyLeave */:
      return "k_EMsgClientToGCWeekendTourneyLeave";
    case 8121 /* k_EMsgClientToGCWeekendTourneyLeaveResponse */:
      return "k_EMsgClientToGCWeekendTourneyLeaveResponse";
    case 8124 /* k_EMsgClientToGCTeammateStatsRequest */:
      return "k_EMsgClientToGCTeammateStatsRequest";
    case 8125 /* k_EMsgClientToGCTeammateStatsResponse */:
      return "k_EMsgClientToGCTeammateStatsResponse";
    case 8126 /* k_EMsgClientToGCGetGiftPermissions */:
      return "k_EMsgClientToGCGetGiftPermissions";
    case 8127 /* k_EMsgClientToGCGetGiftPermissionsResponse */:
      return "k_EMsgClientToGCGetGiftPermissionsResponse";
    case 8128 /* k_EMsgClientToGCVoteForArcana */:
      return "k_EMsgClientToGCVoteForArcana";
    case 8129 /* k_EMsgClientToGCVoteForArcanaResponse */:
      return "k_EMsgClientToGCVoteForArcanaResponse";
    case 8130 /* k_EMsgClientToGCRequestArcanaVotesRemaining */:
      return "k_EMsgClientToGCRequestArcanaVotesRemaining";
    case 8131 /* k_EMsgClientToGCRequestArcanaVotesRemainingResponse */:
      return "k_EMsgClientToGCRequestArcanaVotesRemainingResponse";
    case 8132 /* k_EMsgGCTransferTeamAdminResponse */:
      return "k_EMsgGCTransferTeamAdminResponse";
    case 8135 /* k_EMsgGCToClientTeamInfo */:
      return "k_EMsgGCToClientTeamInfo";
    case 8136 /* k_EMsgGCToClientTeamsInfo */:
      return "k_EMsgGCToClientTeamsInfo";
    case 8137 /* k_EMsgClientToGCMyTeamInfoRequest */:
      return "k_EMsgClientToGCMyTeamInfoRequest";
    case 8140 /* k_EMsgClientToGCPublishUserStat */:
      return "k_EMsgClientToGCPublishUserStat";
    case 8141 /* k_EMsgGCToGCSignoutSpendWager */:
      return "k_EMsgGCToGCSignoutSpendWager";
    case 8144 /* k_EMsgGCSubmitLobbyMVPVote */:
      return "k_EMsgGCSubmitLobbyMVPVote";
    case 8145 /* k_EMsgGCSubmitLobbyMVPVoteResponse */:
      return "k_EMsgGCSubmitLobbyMVPVoteResponse";
    case 8150 /* k_EMsgSignOutCommunityGoalProgress */:
      return "k_EMsgSignOutCommunityGoalProgress";
    case 8152 /* k_EMsgGCToClientLobbyMVPAwarded */:
      return "k_EMsgGCToClientLobbyMVPAwarded";
    case 8153 /* k_EMsgGCToClientQuestProgressUpdated */:
      return "k_EMsgGCToClientQuestProgressUpdated";
    case 8154 /* k_EMsgGCToClientWageringUpdate */:
      return "k_EMsgGCToClientWageringUpdate";
    case 8155 /* k_EMsgGCToClientArcanaVotesUpdate */:
      return "k_EMsgGCToClientArcanaVotesUpdate";
    case 8157 /* k_EMsgClientToGCSetSpectatorLobbyDetails */:
      return "k_EMsgClientToGCSetSpectatorLobbyDetails";
    case 8158 /* k_EMsgClientToGCSetSpectatorLobbyDetailsResponse */:
      return "k_EMsgClientToGCSetSpectatorLobbyDetailsResponse";
    case 8159 /* k_EMsgClientToGCCreateSpectatorLobby */:
      return "k_EMsgClientToGCCreateSpectatorLobby";
    case 8160 /* k_EMsgClientToGCCreateSpectatorLobbyResponse */:
      return "k_EMsgClientToGCCreateSpectatorLobbyResponse";
    case 8161 /* k_EMsgClientToGCSpectatorLobbyList */:
      return "k_EMsgClientToGCSpectatorLobbyList";
    case 8162 /* k_EMsgClientToGCSpectatorLobbyListResponse */:
      return "k_EMsgClientToGCSpectatorLobbyListResponse";
    case 8163 /* k_EMsgSpectatorLobbyGameDetails */:
      return "k_EMsgSpectatorLobbyGameDetails";
    case 8166 /* k_EMsgServerToGCCompendiumInGamePredictionResults */:
      return "k_EMsgServerToGCCompendiumInGamePredictionResults";
    case 8167 /* k_EMsgServerToGCCloseCompendiumInGamePredictionVoting */:
      return "k_EMsgServerToGCCloseCompendiumInGamePredictionVoting";
    case 8168 /* k_EMsgClientToGCOpenPlayerCardPack */:
      return "k_EMsgClientToGCOpenPlayerCardPack";
    case 8169 /* k_EMsgClientToGCOpenPlayerCardPackResponse */:
      return "k_EMsgClientToGCOpenPlayerCardPackResponse";
    case 8170 /* k_EMsgClientToGCSelectCompendiumInGamePrediction */:
      return "k_EMsgClientToGCSelectCompendiumInGamePrediction";
    case 8171 /* k_EMsgClientToGCSelectCompendiumInGamePredictionResponse */:
      return "k_EMsgClientToGCSelectCompendiumInGamePredictionResponse";
    case 8172 /* k_EMsgClientToGCWeekendTourneyGetPlayerStats */:
      return "k_EMsgClientToGCWeekendTourneyGetPlayerStats";
    case 8173 /* k_EMsgClientToGCWeekendTourneyGetPlayerStatsResponse */:
      return "k_EMsgClientToGCWeekendTourneyGetPlayerStatsResponse";
    case 8174 /* k_EMsgClientToGCRecyclePlayerCard */:
      return "k_EMsgClientToGCRecyclePlayerCard";
    case 8175 /* k_EMsgClientToGCRecyclePlayerCardResponse */:
      return "k_EMsgClientToGCRecyclePlayerCardResponse";
    case 8176 /* k_EMsgClientToGCCreatePlayerCardPack */:
      return "k_EMsgClientToGCCreatePlayerCardPack";
    case 8177 /* k_EMsgClientToGCCreatePlayerCardPackResponse */:
      return "k_EMsgClientToGCCreatePlayerCardPackResponse";
    case 8178 /* k_EMsgClientToGCGetPlayerCardRosterRequest */:
      return "k_EMsgClientToGCGetPlayerCardRosterRequest";
    case 8179 /* k_EMsgClientToGCGetPlayerCardRosterResponse */:
      return "k_EMsgClientToGCGetPlayerCardRosterResponse";
    case 8180 /* k_EMsgClientToGCSetPlayerCardRosterRequest */:
      return "k_EMsgClientToGCSetPlayerCardRosterRequest";
    case 8181 /* k_EMsgClientToGCSetPlayerCardRosterResponse */:
      return "k_EMsgClientToGCSetPlayerCardRosterResponse";
    case 8183 /* k_EMsgServerToGCCloseCompendiumInGamePredictionVotingResponse */:
      return "k_EMsgServerToGCCloseCompendiumInGamePredictionVotingResponse";
    case 8186 /* k_EMsgLobbyBattleCupVictory */:
      return "k_EMsgLobbyBattleCupVictory";
    case 8187 /* k_EMsgGCGetPlayerCardItemInfo */:
      return "k_EMsgGCGetPlayerCardItemInfo";
    case 8188 /* k_EMsgGCGetPlayerCardItemInfoResponse */:
      return "k_EMsgGCGetPlayerCardItemInfoResponse";
    case 8189 /* k_EMsgClientToGCRequestSteamDatagramTicket */:
      return "k_EMsgClientToGCRequestSteamDatagramTicket";
    case 8190 /* k_EMsgClientToGCRequestSteamDatagramTicketResponse */:
      return "k_EMsgClientToGCRequestSteamDatagramTicketResponse";
    case 8191 /* k_EMsgGCToClientBattlePassRollupRequest */:
      return "k_EMsgGCToClientBattlePassRollupRequest";
    case 8192 /* k_EMsgGCToClientBattlePassRollupResponse */:
      return "k_EMsgGCToClientBattlePassRollupResponse";
    case 8193 /* k_EMsgClientToGCTransferSeasonalMMRRequest */:
      return "k_EMsgClientToGCTransferSeasonalMMRRequest";
    case 8194 /* k_EMsgClientToGCTransferSeasonalMMRResponse */:
      return "k_EMsgClientToGCTransferSeasonalMMRResponse";
    case 8195 /* k_EMsgGCToGCPublicChatCommunicationBan */:
      return "k_EMsgGCToGCPublicChatCommunicationBan";
    case 8196 /* k_EMsgGCToGCUpdateAccountInfo */:
      return "k_EMsgGCToGCUpdateAccountInfo";
    case 8197 /* k_EMsgGCChatReportPublicSpam */:
      return "k_EMsgGCChatReportPublicSpam";
    case 8198 /* k_EMsgClientToGCSetPartyBuilderOptions */:
      return "k_EMsgClientToGCSetPartyBuilderOptions";
    case 8199 /* k_EMsgClientToGCSetPartyBuilderOptionsResponse */:
      return "k_EMsgClientToGCSetPartyBuilderOptionsResponse";
    case 8200 /* k_EMsgGCToClientPlaytestStatus */:
      return "k_EMsgGCToClientPlaytestStatus";
    case 8201 /* k_EMsgClientToGCJoinPlaytest */:
      return "k_EMsgClientToGCJoinPlaytest";
    case 8202 /* k_EMsgClientToGCJoinPlaytestResponse */:
      return "k_EMsgClientToGCJoinPlaytestResponse";
    case 8203 /* k_EMsgLobbyPlaytestDetails */:
      return "k_EMsgLobbyPlaytestDetails";
    case 8204 /* k_EMsgDOTASetFavoriteTeam */:
      return "k_EMsgDOTASetFavoriteTeam";
    case 8205 /* k_EMsgGCToClientBattlePassRollupListRequest */:
      return "k_EMsgGCToClientBattlePassRollupListRequest";
    case 8206 /* k_EMsgGCToClientBattlePassRollupListResponse */:
      return "k_EMsgGCToClientBattlePassRollupListResponse";
    case 8209 /* k_EMsgDOTAClaimEventAction */:
      return "k_EMsgDOTAClaimEventAction";
    case 8210 /* k_EMsgDOTAClaimEventActionResponse */:
      return "k_EMsgDOTAClaimEventActionResponse";
    case 8211 /* k_EMsgDOTAGetPeriodicResource */:
      return "k_EMsgDOTAGetPeriodicResource";
    case 8212 /* k_EMsgDOTAGetPeriodicResourceResponse */:
      return "k_EMsgDOTAGetPeriodicResourceResponse";
    case 8213 /* k_EMsgDOTAPeriodicResourceUpdated */:
      return "k_EMsgDOTAPeriodicResourceUpdated";
    case 8214 /* k_EMsgServerToGCSpendWager */:
      return "k_EMsgServerToGCSpendWager";
    case 8215 /* k_EMsgGCToGCSignoutSpendWagerToken */:
      return "k_EMsgGCToGCSignoutSpendWagerToken";
    case 8216 /* k_EMsgSubmitTriviaQuestionAnswer */:
      return "k_EMsgSubmitTriviaQuestionAnswer";
    case 8217 /* k_EMsgSubmitTriviaQuestionAnswerResponse */:
      return "k_EMsgSubmitTriviaQuestionAnswerResponse";
    case 8218 /* k_EMsgClientToGCGiveTip */:
      return "k_EMsgClientToGCGiveTip";
    case 8219 /* k_EMsgClientToGCGiveTipResponse */:
      return "k_EMsgClientToGCGiveTipResponse";
    case 8220 /* k_EMsgStartTriviaSession */:
      return "k_EMsgStartTriviaSession";
    case 8221 /* k_EMsgStartTriviaSessionResponse */:
      return "k_EMsgStartTriviaSessionResponse";
    case 8222 /* k_EMsgAnchorPhoneNumberRequest */:
      return "k_EMsgAnchorPhoneNumberRequest";
    case 8223 /* k_EMsgAnchorPhoneNumberResponse */:
      return "k_EMsgAnchorPhoneNumberResponse";
    case 8224 /* k_EMsgUnanchorPhoneNumberRequest */:
      return "k_EMsgUnanchorPhoneNumberRequest";
    case 8225 /* k_EMsgUnanchorPhoneNumberResponse */:
      return "k_EMsgUnanchorPhoneNumberResponse";
    case 8229 /* k_EMsgGCToGCSignoutSpendRankWager */:
      return "k_EMsgGCToGCSignoutSpendRankWager";
    case 8230 /* k_EMsgGCToGCGetFavoriteTeam */:
      return "k_EMsgGCToGCGetFavoriteTeam";
    case 8231 /* k_EMsgGCToGCGetFavoriteTeamResponse */:
      return "k_EMsgGCToGCGetFavoriteTeamResponse";
    case 8232 /* k_EMsgSignOutEventGameData */:
      return "k_EMsgSignOutEventGameData";
    case 8238 /* k_EMsgClientToGCQuickStatsRequest */:
      return "k_EMsgClientToGCQuickStatsRequest";
    case 8239 /* k_EMsgClientToGCQuickStatsResponse */:
      return "k_EMsgClientToGCQuickStatsResponse";
    case 8240 /* k_EMsgGCToGCSubtractEventPointsFromUser */:
      return "k_EMsgGCToGCSubtractEventPointsFromUser";
    case 8241 /* k_EMsgSelectionPriorityChoiceRequest */:
      return "k_EMsgSelectionPriorityChoiceRequest";
    case 8242 /* k_EMsgSelectionPriorityChoiceResponse */:
      return "k_EMsgSelectionPriorityChoiceResponse";
    case 8243 /* k_EMsgGCToGCCompendiumInGamePredictionResults */:
      return "k_EMsgGCToGCCompendiumInGamePredictionResults";
    case 8244 /* k_EMsgGameAutographReward */:
      return "k_EMsgGameAutographReward";
    case 8245 /* k_EMsgGameAutographRewardResponse */:
      return "k_EMsgGameAutographRewardResponse";
    case 8246 /* k_EMsgDestroyLobbyRequest */:
      return "k_EMsgDestroyLobbyRequest";
    case 8247 /* k_EMsgDestroyLobbyResponse */:
      return "k_EMsgDestroyLobbyResponse";
    case 8248 /* k_EMsgPurchaseItemWithEventPoints */:
      return "k_EMsgPurchaseItemWithEventPoints";
    case 8249 /* k_EMsgPurchaseItemWithEventPointsResponse */:
      return "k_EMsgPurchaseItemWithEventPointsResponse";
    case 8250 /* k_EMsgServerToGCMatchPlayerItemPurchaseHistory */:
      return "k_EMsgServerToGCMatchPlayerItemPurchaseHistory";
    case 8251 /* k_EMsgGCToGCGrantPlusHeroMatchResults */:
      return "k_EMsgGCToGCGrantPlusHeroMatchResults";
    case 8255 /* k_EMsgServerToGCMatchStateHistory */:
      return "k_EMsgServerToGCMatchStateHistory";
    case 8258 /* k_EMsgPurchaseHeroRandomRelic */:
      return "k_EMsgPurchaseHeroRandomRelic";
    case 8259 /* k_EMsgPurchaseHeroRandomRelicResponse */:
      return "k_EMsgPurchaseHeroRandomRelicResponse";
    case 8260 /* k_EMsgClientToGCClaimEventActionUsingItem */:
      return "k_EMsgClientToGCClaimEventActionUsingItem";
    case 8261 /* k_EMsgClientToGCClaimEventActionUsingItemResponse */:
      return "k_EMsgClientToGCClaimEventActionUsingItemResponse";
    case 8262 /* k_EMsgPartyReadyCheckRequest */:
      return "k_EMsgPartyReadyCheckRequest";
    case 8263 /* k_EMsgPartyReadyCheckResponse */:
      return "k_EMsgPartyReadyCheckResponse";
    case 8264 /* k_EMsgPartyReadyCheckAcknowledge */:
      return "k_EMsgPartyReadyCheckAcknowledge";
    case 8265 /* k_EMsgGetRecentPlayTimeFriendsRequest */:
      return "k_EMsgGetRecentPlayTimeFriendsRequest";
    case 8266 /* k_EMsgGetRecentPlayTimeFriendsResponse */:
      return "k_EMsgGetRecentPlayTimeFriendsResponse";
    case 8267 /* k_EMsgGCToClientCommendNotification */:
      return "k_EMsgGCToClientCommendNotification";
    case 8268 /* k_EMsgProfileRequest */:
      return "k_EMsgProfileRequest";
    case 8269 /* k_EMsgProfileResponse */:
      return "k_EMsgProfileResponse";
    case 8270 /* k_EMsgProfileUpdate */:
      return "k_EMsgProfileUpdate";
    case 8271 /* k_EMsgProfileUpdateResponse */:
      return "k_EMsgProfileUpdateResponse";
    case 8274 /* k_EMsgHeroGlobalDataRequest */:
      return "k_EMsgHeroGlobalDataRequest";
    case 8275 /* k_EMsgHeroGlobalDataResponse */:
      return "k_EMsgHeroGlobalDataResponse";
    case 8276 /* k_EMsgClientToGCRequestPlusWeeklyChallengeResult */:
      return "k_EMsgClientToGCRequestPlusWeeklyChallengeResult";
    case 8277 /* k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse */:
      return "k_EMsgClientToGCRequestPlusWeeklyChallengeResultResponse";
    case 8278 /* k_EMsgGCToGCGrantPlusPrepaidTime */:
      return "k_EMsgGCToGCGrantPlusPrepaidTime";
    case 8279 /* k_EMsgPrivateMetadataKeyRequest */:
      return "k_EMsgPrivateMetadataKeyRequest";
    case 8280 /* k_EMsgPrivateMetadataKeyResponse */:
      return "k_EMsgPrivateMetadataKeyResponse";
    case 8281 /* k_EMsgGCToGCReconcilePlusStatus */:
      return "k_EMsgGCToGCReconcilePlusStatus";
    case 8282 /* k_EMsgGCToGCCheckPlusStatus */:
      return "k_EMsgGCToGCCheckPlusStatus";
    case 8283 /* k_EMsgGCToGCCheckPlusStatusResponse */:
      return "k_EMsgGCToGCCheckPlusStatusResponse";
    case 8284 /* k_EMsgGCToGCReconcilePlusAutoGrantItems */:
      return "k_EMsgGCToGCReconcilePlusAutoGrantItems";
    case 8285 /* k_EMsgGCToGCReconcilePlusStatusUnreliable */:
      return "k_EMsgGCToGCReconcilePlusStatusUnreliable";
    case 8288 /* k_EMsgGCToClientCavernCrawlMapPathCompleted */:
      return "k_EMsgGCToClientCavernCrawlMapPathCompleted";
    case 8289 /* k_EMsgClientToGCCavernCrawlClaimRoom */:
      return "k_EMsgClientToGCCavernCrawlClaimRoom";
    case 8290 /* k_EMsgClientToGCCavernCrawlClaimRoomResponse */:
      return "k_EMsgClientToGCCavernCrawlClaimRoomResponse";
    case 8291 /* k_EMsgClientToGCCavernCrawlUseItemOnRoom */:
      return "k_EMsgClientToGCCavernCrawlUseItemOnRoom";
    case 8292 /* k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse */:
      return "k_EMsgClientToGCCavernCrawlUseItemOnRoomResponse";
    case 8293 /* k_EMsgClientToGCCavernCrawlUseItemOnPath */:
      return "k_EMsgClientToGCCavernCrawlUseItemOnPath";
    case 8294 /* k_EMsgClientToGCCavernCrawlUseItemOnPathResponse */:
      return "k_EMsgClientToGCCavernCrawlUseItemOnPathResponse";
    case 8295 /* k_EMsgClientToGCCavernCrawlRequestMapState */:
      return "k_EMsgClientToGCCavernCrawlRequestMapState";
    case 8296 /* k_EMsgClientToGCCavernCrawlRequestMapStateResponse */:
      return "k_EMsgClientToGCCavernCrawlRequestMapStateResponse";
    case 8297 /* k_EMsgSignOutTips */:
      return "k_EMsgSignOutTips";
    case 8298 /* k_EMsgClientToGCRequestEventPointLogV2 */:
      return "k_EMsgClientToGCRequestEventPointLogV2";
    case 8299 /* k_EMsgClientToGCRequestEventPointLogResponseV2 */:
      return "k_EMsgClientToGCRequestEventPointLogResponseV2";
    case 8300 /* k_EMsgClientToGCRequestEventTipsSummary */:
      return "k_EMsgClientToGCRequestEventTipsSummary";
    case 8301 /* k_EMsgClientToGCRequestEventTipsSummaryResponse */:
      return "k_EMsgClientToGCRequestEventTipsSummaryResponse";
    case 8303 /* k_EMsgClientToGCRequestSocialFeed */:
      return "k_EMsgClientToGCRequestSocialFeed";
    case 8304 /* k_EMsgClientToGCRequestSocialFeedResponse */:
      return "k_EMsgClientToGCRequestSocialFeedResponse";
    case 8305 /* k_EMsgClientToGCRequestSocialFeedComments */:
      return "k_EMsgClientToGCRequestSocialFeedComments";
    case 8306 /* k_EMsgClientToGCRequestSocialFeedCommentsResponse */:
      return "k_EMsgClientToGCRequestSocialFeedCommentsResponse";
    case 8308 /* k_EMsgClientToGCCavernCrawlGetClaimedRoomCount */:
      return "k_EMsgClientToGCCavernCrawlGetClaimedRoomCount";
    case 8309 /* k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse */:
      return "k_EMsgClientToGCCavernCrawlGetClaimedRoomCountResponse";
    case 8310 /* k_EMsgGCToGCReconcilePlusAutoGrantItemsUnreliable */:
      return "k_EMsgGCToGCReconcilePlusAutoGrantItemsUnreliable";
    case 8311 /* k_EMsgServerToGCAddBroadcastTimelineEvent */:
      return "k_EMsgServerToGCAddBroadcastTimelineEvent";
    case 8312 /* k_EMsgGCToServerUpdateSteamBroadcasting */:
      return "k_EMsgGCToServerUpdateSteamBroadcasting";
    case 8313 /* k_EMsgClientToGCRecordContestVote */:
      return "k_EMsgClientToGCRecordContestVote";
    case 8314 /* k_EMsgGCToClientRecordContestVoteResponse */:
      return "k_EMsgGCToClientRecordContestVoteResponse";
    case 8315 /* k_EMsgGCToGCGrantAutograph */:
      return "k_EMsgGCToGCGrantAutograph";
    case 8316 /* k_EMsgGCToGCGrantAutographResponse */:
      return "k_EMsgGCToGCGrantAutographResponse";
    case 8317 /* k_EMsgSignOutConsumableUsage */:
      return "k_EMsgSignOutConsumableUsage";
    case 8318 /* k_EMsgLobbyEventGameDetails */:
      return "k_EMsgLobbyEventGameDetails";
    case 8319 /* k_EMsgDevGrantEventPoints */:
      return "k_EMsgDevGrantEventPoints";
    case 8320 /* k_EMsgDevGrantEventPointsResponse */:
      return "k_EMsgDevGrantEventPointsResponse";
    case 8321 /* k_EMsgDevGrantEventAction */:
      return "k_EMsgDevGrantEventAction";
    case 8322 /* k_EMsgDevGrantEventActionResponse */:
      return "k_EMsgDevGrantEventActionResponse";
    case 8323 /* k_EMsgDevResetEventState */:
      return "k_EMsgDevResetEventState";
    case 8324 /* k_EMsgDevResetEventStateResponse */:
      return "k_EMsgDevResetEventStateResponse";
    case 8325 /* k_EMsgGCToGCReconcileEventOwnership */:
      return "k_EMsgGCToGCReconcileEventOwnership";
    case 8326 /* k_EMsgConsumeEventSupportGrantItem */:
      return "k_EMsgConsumeEventSupportGrantItem";
    case 8327 /* k_EMsgConsumeEventSupportGrantItemResponse */:
      return "k_EMsgConsumeEventSupportGrantItemResponse";
    case 8328 /* k_EMsgGCToClientClaimEventActionUsingItemCompleted */:
      return "k_EMsgGCToClientClaimEventActionUsingItemCompleted";
    case 8329 /* k_EMsgGCToClientCavernCrawlMapUpdated */:
      return "k_EMsgGCToClientCavernCrawlMapUpdated";
    case 8330 /* k_EMsgServerToGCRequestPlayerRecentAccomplishments */:
      return "k_EMsgServerToGCRequestPlayerRecentAccomplishments";
    case 8331 /* k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse */:
      return "k_EMsgServerToGCRequestPlayerRecentAccomplishmentsResponse";
    case 8332 /* k_EMsgClientToGCRequestPlayerRecentAccomplishments */:
      return "k_EMsgClientToGCRequestPlayerRecentAccomplishments";
    case 8333 /* k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse */:
      return "k_EMsgClientToGCRequestPlayerRecentAccomplishmentsResponse";
    case 8334 /* k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments */:
      return "k_EMsgClientToGCRequestPlayerHeroRecentAccomplishments";
    case 8335 /* k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse */:
      return "k_EMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse";
    case 8336 /* k_EMsgSignOutEventActionGrants */:
      return "k_EMsgSignOutEventActionGrants";
    case 8337 /* k_EMsgClientToGCRequestPlayerCoachMatches */:
      return "k_EMsgClientToGCRequestPlayerCoachMatches";
    case 8338 /* k_EMsgClientToGCRequestPlayerCoachMatchesResponse */:
      return "k_EMsgClientToGCRequestPlayerCoachMatchesResponse";
    case 8341 /* k_EMsgClientToGCSubmitCoachTeammateRating */:
      return "k_EMsgClientToGCSubmitCoachTeammateRating";
    case 8342 /* k_EMsgClientToGCSubmitCoachTeammateRatingResponse */:
      return "k_EMsgClientToGCSubmitCoachTeammateRatingResponse";
    case 8343 /* k_EMsgGCToClientCoachTeammateRatingsChanged */:
      return "k_EMsgGCToClientCoachTeammateRatingsChanged";
    case 8345 /* k_EMsgClientToGCRequestPlayerCoachMatch */:
      return "k_EMsgClientToGCRequestPlayerCoachMatch";
    case 8346 /* k_EMsgClientToGCRequestPlayerCoachMatchResponse */:
      return "k_EMsgClientToGCRequestPlayerCoachMatchResponse";
    case 8347 /* k_EMsgClientToGCRequestContestVotes */:
      return "k_EMsgClientToGCRequestContestVotes";
    case 8348 /* k_EMsgClientToGCRequestContestVotesResponse */:
      return "k_EMsgClientToGCRequestContestVotesResponse";
    case 8349 /* k_EMsgClientToGCMVPVoteTimeout */:
      return "k_EMsgClientToGCMVPVoteTimeout";
    case 8350 /* k_EMsgClientToGCMVPVoteTimeoutResponse */:
      return "k_EMsgClientToGCMVPVoteTimeoutResponse";
    case 8360 /* k_EMsgMatchMatchmakingStats */:
      return "k_EMsgMatchMatchmakingStats";
    case 8361 /* k_EMsgClientToGCSubmitPlayerMatchSurvey */:
      return "k_EMsgClientToGCSubmitPlayerMatchSurvey";
    case 8362 /* k_EMsgClientToGCSubmitPlayerMatchSurveyResponse */:
      return "k_EMsgClientToGCSubmitPlayerMatchSurveyResponse";
    case 8363 /* k_EMsgSQLGCToGCGrantAllHeroProgressAccount */:
      return "k_EMsgSQLGCToGCGrantAllHeroProgressAccount";
    case 8364 /* k_EMsgSQLGCToGCGrantAllHeroProgressVictory */:
      return "k_EMsgSQLGCToGCGrantAllHeroProgressVictory";
    case 8365 /* k_EMsgDevDeleteEventActions */:
      return "k_EMsgDevDeleteEventActions";
    case 8366 /* k_EMsgDevDeleteEventActionsResponse */:
      return "k_EMsgDevDeleteEventActionsResponse";
    case 8635 /* k_EMsgGCToGCGetAllHeroCurrent */:
      return "k_EMsgGCToGCGetAllHeroCurrent";
    case 8636 /* k_EMsgGCToGCGetAllHeroCurrentResponse */:
      return "k_EMsgGCToGCGetAllHeroCurrentResponse";
    case 8637 /* k_EMsgGCSubmitPlayerAvoidRequest */:
      return "k_EMsgGCSubmitPlayerAvoidRequest";
    case 8638 /* k_EMsgGCSubmitPlayerAvoidRequestResponse */:
      return "k_EMsgGCSubmitPlayerAvoidRequestResponse";
    case 8639 /* k_EMsgGCToClientNotificationsUpdated */:
      return "k_EMsgGCToClientNotificationsUpdated";
    case 8640 /* k_EMsgGCtoGCAssociatedExploiterAccountInfo */:
      return "k_EMsgGCtoGCAssociatedExploiterAccountInfo";
    case 8641 /* k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse */:
      return "k_EMsgGCtoGCAssociatedExploiterAccountInfoResponse";
    case 8642 /* k_EMsgGCtoGCRequestRecalibrationCheck */:
      return "k_EMsgGCtoGCRequestRecalibrationCheck";
    case 8643 /* k_EMsgGCToClientVACReminder */:
      return "k_EMsgGCToClientVACReminder";
    case 8644 /* k_EMsgClientToGCUnderDraftBuy */:
      return "k_EMsgClientToGCUnderDraftBuy";
    case 8645 /* k_EMsgClientToGCUnderDraftBuyResponse */:
      return "k_EMsgClientToGCUnderDraftBuyResponse";
    case 8646 /* k_EMsgClientToGCUnderDraftReroll */:
      return "k_EMsgClientToGCUnderDraftReroll";
    case 8647 /* k_EMsgClientToGCUnderDraftRerollResponse */:
      return "k_EMsgClientToGCUnderDraftRerollResponse";
    case 8648 /* k_EMsgNeutralItemStats */:
      return "k_EMsgNeutralItemStats";
    case 8649 /* k_EMsgClientToGCCreateGuild */:
      return "k_EMsgClientToGCCreateGuild";
    case 8650 /* k_EMsgClientToGCCreateGuildResponse */:
      return "k_EMsgClientToGCCreateGuildResponse";
    case 8651 /* k_EMsgClientToGCSetGuildInfo */:
      return "k_EMsgClientToGCSetGuildInfo";
    case 8652 /* k_EMsgClientToGCSetGuildInfoResponse */:
      return "k_EMsgClientToGCSetGuildInfoResponse";
    case 8653 /* k_EMsgClientToGCAddGuildRole */:
      return "k_EMsgClientToGCAddGuildRole";
    case 8654 /* k_EMsgClientToGCAddGuildRoleResponse */:
      return "k_EMsgClientToGCAddGuildRoleResponse";
    case 8655 /* k_EMsgClientToGCModifyGuildRole */:
      return "k_EMsgClientToGCModifyGuildRole";
    case 8656 /* k_EMsgClientToGCModifyGuildRoleResponse */:
      return "k_EMsgClientToGCModifyGuildRoleResponse";
    case 8657 /* k_EMsgClientToGCRemoveGuildRole */:
      return "k_EMsgClientToGCRemoveGuildRole";
    case 8658 /* k_EMsgClientToGCRemoveGuildRoleResponse */:
      return "k_EMsgClientToGCRemoveGuildRoleResponse";
    case 8659 /* k_EMsgClientToGCJoinGuild */:
      return "k_EMsgClientToGCJoinGuild";
    case 8660 /* k_EMsgClientToGCJoinGuildResponse */:
      return "k_EMsgClientToGCJoinGuildResponse";
    case 8661 /* k_EMsgClientToGCLeaveGuild */:
      return "k_EMsgClientToGCLeaveGuild";
    case 8662 /* k_EMsgClientToGCLeaveGuildResponse */:
      return "k_EMsgClientToGCLeaveGuildResponse";
    case 8663 /* k_EMsgClientToGCInviteToGuild */:
      return "k_EMsgClientToGCInviteToGuild";
    case 8664 /* k_EMsgClientToGCInviteToGuildResponse */:
      return "k_EMsgClientToGCInviteToGuildResponse";
    case 8665 /* k_EMsgClientToGCDeclineInviteToGuild */:
      return "k_EMsgClientToGCDeclineInviteToGuild";
    case 8666 /* k_EMsgClientToGCDeclineInviteToGuildResponse */:
      return "k_EMsgClientToGCDeclineInviteToGuildResponse";
    case 8667 /* k_EMsgClientToGCCancelInviteToGuild */:
      return "k_EMsgClientToGCCancelInviteToGuild";
    case 8668 /* k_EMsgClientToGCCancelInviteToGuildResponse */:
      return "k_EMsgClientToGCCancelInviteToGuildResponse";
    case 8669 /* k_EMsgClientToGCKickGuildMember */:
      return "k_EMsgClientToGCKickGuildMember";
    case 8670 /* k_EMsgClientToGCKickGuildMemberResponse */:
      return "k_EMsgClientToGCKickGuildMemberResponse";
    case 8671 /* k_EMsgClientToGCSetGuildMemberRole */:
      return "k_EMsgClientToGCSetGuildMemberRole";
    case 8672 /* k_EMsgClientToGCSetGuildMemberRoleResponse */:
      return "k_EMsgClientToGCSetGuildMemberRoleResponse";
    case 8673 /* k_EMsgClientToGCRequestGuildData */:
      return "k_EMsgClientToGCRequestGuildData";
    case 8674 /* k_EMsgClientToGCRequestGuildDataResponse */:
      return "k_EMsgClientToGCRequestGuildDataResponse";
    case 8675 /* k_EMsgGCToClientGuildDataUpdated */:
      return "k_EMsgGCToClientGuildDataUpdated";
    case 8676 /* k_EMsgClientToGCRequestGuildMembership */:
      return "k_EMsgClientToGCRequestGuildMembership";
    case 8677 /* k_EMsgClientToGCRequestGuildMembershipResponse */:
      return "k_EMsgClientToGCRequestGuildMembershipResponse";
    case 8678 /* k_EMsgGCToClientGuildMembershipUpdated */:
      return "k_EMsgGCToClientGuildMembershipUpdated";
    case 8681 /* k_EMsgClientToGCAcceptInviteToGuild */:
      return "k_EMsgClientToGCAcceptInviteToGuild";
    case 8682 /* k_EMsgClientToGCAcceptInviteToGuildResponse */:
      return "k_EMsgClientToGCAcceptInviteToGuildResponse";
    case 8683 /* k_EMsgClientToGCSetGuildRoleOrder */:
      return "k_EMsgClientToGCSetGuildRoleOrder";
    case 8684 /* k_EMsgClientToGCSetGuildRoleOrderResponse */:
      return "k_EMsgClientToGCSetGuildRoleOrderResponse";
    case 8685 /* k_EMsgClientToGCRequestGuildFeed */:
      return "k_EMsgClientToGCRequestGuildFeed";
    case 8686 /* k_EMsgClientToGCRequestGuildFeedResponse */:
      return "k_EMsgClientToGCRequestGuildFeedResponse";
    case 8687 /* k_EMsgClientToGCRequestAccountGuildEventData */:
      return "k_EMsgClientToGCRequestAccountGuildEventData";
    case 8688 /* k_EMsgClientToGCRequestAccountGuildEventDataResponse */:
      return "k_EMsgClientToGCRequestAccountGuildEventDataResponse";
    case 8689 /* k_EMsgGCToClientAccountGuildEventDataUpdated */:
      return "k_EMsgGCToClientAccountGuildEventDataUpdated";
    case 8690 /* k_EMsgClientToGCRequestActiveGuildContracts */:
      return "k_EMsgClientToGCRequestActiveGuildContracts";
    case 8691 /* k_EMsgClientToGCRequestActiveGuildContractsResponse */:
      return "k_EMsgClientToGCRequestActiveGuildContractsResponse";
    case 8692 /* k_EMsgGCToClientActiveGuildContractsUpdated */:
      return "k_EMsgGCToClientActiveGuildContractsUpdated";
    case 8693 /* k_EMsgGCToClientGuildFeedUpdated */:
      return "k_EMsgGCToClientGuildFeedUpdated";
    case 8694 /* k_EMsgClientToGCSelectGuildContract */:
      return "k_EMsgClientToGCSelectGuildContract";
    case 8695 /* k_EMsgClientToGCSelectGuildContractResponse */:
      return "k_EMsgClientToGCSelectGuildContractResponse";
    case 8696 /* k_EMsgGCToGCCompleteGuildContracts */:
      return "k_EMsgGCToGCCompleteGuildContracts";
    case 8698 /* k_EMsgClientToGCAddPlayerToGuildChat */:
      return "k_EMsgClientToGCAddPlayerToGuildChat";
    case 8699 /* k_EMsgClientToGCAddPlayerToGuildChatResponse */:
      return "k_EMsgClientToGCAddPlayerToGuildChatResponse";
    case 8700 /* k_EMsgClientToGCUnderDraftSell */:
      return "k_EMsgClientToGCUnderDraftSell";
    case 8701 /* k_EMsgClientToGCUnderDraftSellResponse */:
      return "k_EMsgClientToGCUnderDraftSellResponse";
    case 8702 /* k_EMsgClientToGCUnderDraftRequest */:
      return "k_EMsgClientToGCUnderDraftRequest";
    case 8703 /* k_EMsgClientToGCUnderDraftResponse */:
      return "k_EMsgClientToGCUnderDraftResponse";
    case 8704 /* k_EMsgClientToGCUnderDraftRedeemReward */:
      return "k_EMsgClientToGCUnderDraftRedeemReward";
    case 8705 /* k_EMsgClientToGCUnderDraftRedeemRewardResponse */:
      return "k_EMsgClientToGCUnderDraftRedeemRewardResponse";
    case 8708 /* k_EMsgGCToServerLobbyHeroBanRates */:
      return "k_EMsgGCToServerLobbyHeroBanRates";
    case 8711 /* k_EMsgSignOutGuildContractProgress */:
      return "k_EMsgSignOutGuildContractProgress";
    case 8712 /* k_EMsgSignOutMVPStats */:
      return "k_EMsgSignOutMVPStats";
    case 8713 /* k_EMsgClientToGCRequestActiveGuildChallenge */:
      return "k_EMsgClientToGCRequestActiveGuildChallenge";
    case 8714 /* k_EMsgClientToGCRequestActiveGuildChallengeResponse */:
      return "k_EMsgClientToGCRequestActiveGuildChallengeResponse";
    case 8715 /* k_EMsgGCToClientActiveGuildChallengeUpdated */:
      return "k_EMsgGCToClientActiveGuildChallengeUpdated";
    case 8716 /* k_EMsgClientToGCRequestReporterUpdates */:
      return "k_EMsgClientToGCRequestReporterUpdates";
    case 8717 /* k_EMsgClientToGCRequestReporterUpdatesResponse */:
      return "k_EMsgClientToGCRequestReporterUpdatesResponse";
    case 8718 /* k_EMsgClientToGCAcknowledgeReporterUpdates */:
      return "k_EMsgClientToGCAcknowledgeReporterUpdates";
    case 8720 /* k_EMsgSignOutGuildChallengeProgress */:
      return "k_EMsgSignOutGuildChallengeProgress";
    case 8721 /* k_EMsgClientToGCRequestGuildEventMembers */:
      return "k_EMsgClientToGCRequestGuildEventMembers";
    case 8722 /* k_EMsgClientToGCRequestGuildEventMembersResponse */:
      return "k_EMsgClientToGCRequestGuildEventMembersResponse";
    case 8725 /* k_EMsgClientToGCReportGuildContent */:
      return "k_EMsgClientToGCReportGuildContent";
    case 8726 /* k_EMsgClientToGCReportGuildContentResponse */:
      return "k_EMsgClientToGCReportGuildContentResponse";
    case 8727 /* k_EMsgClientToGCRequestAccountGuildPersonaInfo */:
      return "k_EMsgClientToGCRequestAccountGuildPersonaInfo";
    case 8728 /* k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse */:
      return "k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse";
    case 8729 /* k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch */:
      return "k_EMsgClientToGCRequestAccountGuildPersonaInfoBatch";
    case 8730 /* k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse */:
      return "k_EMsgClientToGCRequestAccountGuildPersonaInfoBatchResponse";
    case 8731 /* k_EMsgGCToClientUnderDraftGoldUpdated */:
      return "k_EMsgGCToClientUnderDraftGoldUpdated";
    case 8732 /* k_EMsgGCToServerRecordTrainingData */:
      return "k_EMsgGCToServerRecordTrainingData";
    case 8733 /* k_EMsgSignOutBounties */:
      return "k_EMsgSignOutBounties";
    case 8734 /* k_EMsgLobbyFeaturedGamemodeProgress */:
      return "k_EMsgLobbyFeaturedGamemodeProgress";
    case 8735 /* k_EMsgLobbyGauntletProgress */:
      return "k_EMsgLobbyGauntletProgress";
    case 8736 /* k_EMsgClientToGCSubmitDraftTriviaMatchAnswer */:
      return "k_EMsgClientToGCSubmitDraftTriviaMatchAnswer";
    case 8737 /* k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse */:
      return "k_EMsgClientToGCSubmitDraftTriviaMatchAnswerResponse";
    case 8738 /* k_EMsgGCToGCSignoutSpendBounty */:
      return "k_EMsgGCToGCSignoutSpendBounty";
    case 8739 /* k_EMsgClientToGCApplyGauntletTicket */:
      return "k_EMsgClientToGCApplyGauntletTicket";
    case 8740 /* k_EMsgClientToGCUnderDraftRollBackBench */:
      return "k_EMsgClientToGCUnderDraftRollBackBench";
    case 8741 /* k_EMsgClientToGCUnderDraftRollBackBenchResponse */:
      return "k_EMsgClientToGCUnderDraftRollBackBenchResponse";
    case 8742 /* k_EMsgGCToGCGetEventActionScore */:
      return "k_EMsgGCToGCGetEventActionScore";
    case 8743 /* k_EMsgGCToGCGetEventActionScoreResponse */:
      return "k_EMsgGCToGCGetEventActionScoreResponse";
    case 8744 /* k_EMsgServerToGCGetGuildContracts */:
      return "k_EMsgServerToGCGetGuildContracts";
    case 8745 /* k_EMsgServerToGCGetGuildContractsResponse */:
      return "k_EMsgServerToGCGetGuildContractsResponse";
    case 8746 /* k_EMsgLobbyEventGameData */:
      return "k_EMsgLobbyEventGameData";
    case 8747 /* k_EMsgGCToClientGuildMembersDataUpdated */:
      return "k_EMsgGCToClientGuildMembersDataUpdated";
    case 8748 /* k_EMsgSignOutReportActivityMarkers */:
      return "k_EMsgSignOutReportActivityMarkers";
    case 8749 /* k_EMsgSignOutDiretideCandy */:
      return "k_EMsgSignOutDiretideCandy";
    case 8750 /* k_EMsgGCToClientPostGameItemAwardNotification */:
      return "k_EMsgGCToClientPostGameItemAwardNotification";
    case 8751 /* k_EMsgClientToGCGetOWMatchDetails */:
      return "k_EMsgClientToGCGetOWMatchDetails";
    case 8752 /* k_EMsgClientToGCGetOWMatchDetailsResponse */:
      return "k_EMsgClientToGCGetOWMatchDetailsResponse";
    case 8753 /* k_EMsgClientToGCSubmitOWConviction */:
      return "k_EMsgClientToGCSubmitOWConviction";
    case 8754 /* k_EMsgClientToGCSubmitOWConvictionResponse */:
      return "k_EMsgClientToGCSubmitOWConvictionResponse";
    case 8755 /* k_EMsgGCToGCGetAccountSteamChina */:
      return "k_EMsgGCToGCGetAccountSteamChina";
    case 8756 /* k_EMsgGCToGCGetAccountSteamChinaResponse */:
      return "k_EMsgGCToGCGetAccountSteamChinaResponse";
    case 8757 /* k_EMsgClientToGCClaimLeaderboardRewards */:
      return "k_EMsgClientToGCClaimLeaderboardRewards";
    case 8758 /* k_EMsgClientToGCClaimLeaderboardRewardsResponse */:
      return "k_EMsgClientToGCClaimLeaderboardRewardsResponse";
    case 8759 /* k_EMsgClientToGCRecalibrateMMR */:
      return "k_EMsgClientToGCRecalibrateMMR";
    case 8760 /* k_EMsgClientToGCRecalibrateMMRResponse */:
      return "k_EMsgClientToGCRecalibrateMMRResponse";
    case 8761 /* k_EMsgGCToGCGrantEventPointActionList */:
      return "k_EMsgGCToGCGrantEventPointActionList";
    case 8764 /* k_EMsgClientToGCChinaSSAURLRequest */:
      return "k_EMsgClientToGCChinaSSAURLRequest";
    case 8765 /* k_EMsgClientToGCChinaSSAURLResponse */:
      return "k_EMsgClientToGCChinaSSAURLResponse";
    case 8766 /* k_EMsgClientToGCChinaSSAAcceptedRequest */:
      return "k_EMsgClientToGCChinaSSAAcceptedRequest";
    case 8767 /* k_EMsgClientToGCChinaSSAAcceptedResponse */:
      return "k_EMsgClientToGCChinaSSAAcceptedResponse";
    case 8768 /* k_EMsgSignOutOverwatchSuspicion */:
      return "k_EMsgSignOutOverwatchSuspicion";
    case 8769 /* k_EMsgServerToGCGetSuspicionConfig */:
      return "k_EMsgServerToGCGetSuspicionConfig";
    case 8770 /* k_EMsgServerToGCGetSuspicionConfigResponse */:
      return "k_EMsgServerToGCGetSuspicionConfigResponse";
    case 8771 /* k_EMsgGCToGCGrantPlusHeroChallengeMatchResults */:
      return "k_EMsgGCToGCGrantPlusHeroChallengeMatchResults";
    case 8772 /* k_EMsgGCToClientOverwatchCasesAvailable */:
      return "k_EMsgGCToClientOverwatchCasesAvailable";
    case 8773 /* k_EMsgServerToGCAccountCheck */:
      return "k_EMsgServerToGCAccountCheck";
    case 8774 /* k_EMsgClientToGCStartWatchingOverwatch */:
      return "k_EMsgClientToGCStartWatchingOverwatch";
    case 8775 /* k_EMsgClientToGCStopWatchingOverwatch */:
      return "k_EMsgClientToGCStopWatchingOverwatch";
    case 8776 /* k_EMsgSignOutPerfData */:
      return "k_EMsgSignOutPerfData";
    case 8777 /* k_EMsgClientToGCGetDPCFavorites */:
      return "k_EMsgClientToGCGetDPCFavorites";
    case 8778 /* k_EMsgClientToGCGetDPCFavoritesResponse */:
      return "k_EMsgClientToGCGetDPCFavoritesResponse";
    case 8779 /* k_EMsgClientToGCSetDPCFavoriteState */:
      return "k_EMsgClientToGCSetDPCFavoriteState";
    case 8780 /* k_EMsgClientToGCSetDPCFavoriteStateResponse */:
      return "k_EMsgClientToGCSetDPCFavoriteStateResponse";
    case 8781 /* k_EMsgClientToGCOverwatchReplayError */:
      return "k_EMsgClientToGCOverwatchReplayError";
    case 8782 /* k_EMsgServerToGCPlayerChallengeHistory */:
      return "k_EMsgServerToGCPlayerChallengeHistory";
    case 8783 /* k_EMsgSignOutBanData */:
      return "k_EMsgSignOutBanData";
    case 8784 /* k_EMsgWebapiDPCSeasonResults */:
      return "k_EMsgWebapiDPCSeasonResults";
    case 8785 /* k_EMsgClientToGCCoachFriend */:
      return "k_EMsgClientToGCCoachFriend";
    case 8786 /* k_EMsgClientToGCCoachFriendResponse */:
      return "k_EMsgClientToGCCoachFriendResponse";
    case 8787 /* k_EMsgClientToGCRequestPrivateCoachingSession */:
      return "k_EMsgClientToGCRequestPrivateCoachingSession";
    case 8788 /* k_EMsgClientToGCRequestPrivateCoachingSessionResponse */:
      return "k_EMsgClientToGCRequestPrivateCoachingSessionResponse";
    case 8789 /* k_EMsgClientToGCAcceptPrivateCoachingSession */:
      return "k_EMsgClientToGCAcceptPrivateCoachingSession";
    case 8790 /* k_EMsgClientToGCAcceptPrivateCoachingSessionResponse */:
      return "k_EMsgClientToGCAcceptPrivateCoachingSessionResponse";
    case 8791 /* k_EMsgClientToGCLeavePrivateCoachingSession */:
      return "k_EMsgClientToGCLeavePrivateCoachingSession";
    case 8792 /* k_EMsgClientToGCLeavePrivateCoachingSessionResponse */:
      return "k_EMsgClientToGCLeavePrivateCoachingSessionResponse";
    case 8793 /* k_EMsgClientToGCGetCurrentPrivateCoachingSession */:
      return "k_EMsgClientToGCGetCurrentPrivateCoachingSession";
    case 8794 /* k_EMsgClientToGCGetCurrentPrivateCoachingSessionResponse */:
      return "k_EMsgClientToGCGetCurrentPrivateCoachingSessionResponse";
    case 8795 /* k_EMsgGCToClientPrivateCoachingSessionUpdated */:
      return "k_EMsgGCToClientPrivateCoachingSessionUpdated";
    case 8796 /* k_EMsgClientToGCSubmitPrivateCoachingSessionRating */:
      return "k_EMsgClientToGCSubmitPrivateCoachingSessionRating";
    case 8797 /* k_EMsgClientToGCSubmitPrivateCoachingSessionRatingResponse */:
      return "k_EMsgClientToGCSubmitPrivateCoachingSessionRatingResponse";
    case 8798 /* k_EMsgClientToGCGetAvailablePrivateCoachingSessions */:
      return "k_EMsgClientToGCGetAvailablePrivateCoachingSessions";
    case 8799 /* k_EMsgClientToGCGetAvailablePrivateCoachingSessionsResponse */:
      return "k_EMsgClientToGCGetAvailablePrivateCoachingSessionsResponse";
    case 8800 /* k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummary */:
      return "k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummary";
    case 8801 /* k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse */:
      return "k_EMsgClientToGCGetAvailablePrivateCoachingSessionsSummaryResponse";
    case 8802 /* k_EMsgClientToGCJoinPrivateCoachingSessionLobby */:
      return "k_EMsgClientToGCJoinPrivateCoachingSessionLobby";
    case 8803 /* k_EMsgClientToGCJoinPrivateCoachingSessionLobbyResponse */:
      return "k_EMsgClientToGCJoinPrivateCoachingSessionLobbyResponse";
    case 8804 /* k_EMsgClientToGCRespondToCoachFriendRequest */:
      return "k_EMsgClientToGCRespondToCoachFriendRequest";
    case 8805 /* k_EMsgClientToGCRespondToCoachFriendRequestResponse */:
      return "k_EMsgClientToGCRespondToCoachFriendRequestResponse";
    case 8806 /* k_EMsgClientToGCSetEventActiveSeasonID */:
      return "k_EMsgClientToGCSetEventActiveSeasonID";
    case 8807 /* k_EMsgClientToGCSetEventActiveSeasonIDResponse */:
      return "k_EMsgClientToGCSetEventActiveSeasonIDResponse";
    case 8808 /* k_EMsgServerToGCMatchPlayerNeutralItemEquipHistory */:
      return "k_EMsgServerToGCMatchPlayerNeutralItemEquipHistory";
    case 8809 /* k_EMsgServerToGCCompendiumChosenInGamePredictions */:
      return "k_EMsgServerToGCCompendiumChosenInGamePredictions";
    case 8810 /* k_EMsgClientToGCCreateTeamPlayerCardPack */:
      return "k_EMsgClientToGCCreateTeamPlayerCardPack";
    case 8811 /* k_EMsgClientToGCCreateTeamPlayerCardPackResponse */:
      return "k_EMsgClientToGCCreateTeamPlayerCardPackResponse";
    case 8812 /* k_EMsgGCToServerSubmitCheerData */:
      return "k_EMsgGCToServerSubmitCheerData";
    case 8813 /* k_EMsgGCToServerCheerConfig */:
      return "k_EMsgGCToServerCheerConfig";
    case 8814 /* k_EMsgServerToGCGetCheerConfig */:
      return "k_EMsgServerToGCGetCheerConfig";
    case 8815 /* k_EMsgServerToGCGetCheerConfigResponse */:
      return "k_EMsgServerToGCGetCheerConfigResponse";
    case 8816 /* k_EMsgGCToGCGrantAutographByID */:
      return "k_EMsgGCToGCGrantAutographByID";
    case 8817 /* k_EMsgGCToServerCheerScalesOverride */:
      return "k_EMsgGCToServerCheerScalesOverride";
    case 8818 /* k_EMsgGCToServerGetCheerState */:
      return "k_EMsgGCToServerGetCheerState";
    case 8819 /* k_EMsgServerToGCReportCheerState */:
      return "k_EMsgServerToGCReportCheerState";
    case 8820 /* k_EMsgGCToServerScenarioSave */:
      return "k_EMsgGCToServerScenarioSave";
    case 8821 /* k_EMsgGCToServerAbilityDraftLobbyData */:
      return "k_EMsgGCToServerAbilityDraftLobbyData";
    case 8822 /* k_EMsgSignOutReportCommunications */:
      return "k_EMsgSignOutReportCommunications";
    case 8823 /* k_EMsgClientToGCBatchGetPlayerCardRosterRequest */:
      return "k_EMsgClientToGCBatchGetPlayerCardRosterRequest";
    case 8824 /* k_EMsgClientToGCBatchGetPlayerCardRosterResponse */:
      return "k_EMsgClientToGCBatchGetPlayerCardRosterResponse";
    case 8825 /* k_EMsgClientToGCGetStickerbookRequest */:
      return "k_EMsgClientToGCGetStickerbookRequest";
    case 8826 /* k_EMsgClientToGCGetStickerbookResponse */:
      return "k_EMsgClientToGCGetStickerbookResponse";
    case 8827 /* k_EMsgClientToGCCreateStickerbookPageRequest */:
      return "k_EMsgClientToGCCreateStickerbookPageRequest";
    case 8828 /* k_EMsgClientToGCCreateStickerbookPageResponse */:
      return "k_EMsgClientToGCCreateStickerbookPageResponse";
    case 8829 /* k_EMsgClientToGCDeleteStickerbookPageRequest */:
      return "k_EMsgClientToGCDeleteStickerbookPageRequest";
    case 8830 /* k_EMsgClientToGCDeleteStickerbookPageResponse */:
      return "k_EMsgClientToGCDeleteStickerbookPageResponse";
    case 8831 /* k_EMsgClientToGCPlaceStickersRequest */:
      return "k_EMsgClientToGCPlaceStickersRequest";
    case 8832 /* k_EMsgClientToGCPlaceStickersResponse */:
      return "k_EMsgClientToGCPlaceStickersResponse";
    case 8833 /* k_EMsgClientToGCPlaceCollectionStickersRequest */:
      return "k_EMsgClientToGCPlaceCollectionStickersRequest";
    case 8834 /* k_EMsgClientToGCPlaceCollectionStickersResponse */:
      return "k_EMsgClientToGCPlaceCollectionStickersResponse";
    case 8835 /* k_EMsgClientToGCOrderStickerbookTeamPageRequest */:
      return "k_EMsgClientToGCOrderStickerbookTeamPageRequest";
    case 8836 /* k_EMsgClientToGCOrderStickerbookTeamPageResponse */:
      return "k_EMsgClientToGCOrderStickerbookTeamPageResponse";
    case 8837 /* k_EMsgServerToGCGetStickerHeroes */:
      return "k_EMsgServerToGCGetStickerHeroes";
    case 8838 /* k_EMsgServerToGCGetStickerHeroesResponse */:
      return "k_EMsgServerToGCGetStickerHeroesResponse";
    case 8840 /* k_EMsgClientToGCCandyShopGetUserData */:
      return "k_EMsgClientToGCCandyShopGetUserData";
    case 8841 /* k_EMsgClientToGCCandyShopGetUserDataResponse */:
      return "k_EMsgClientToGCCandyShopGetUserDataResponse";
    case 8842 /* k_EMsgGCToClientCandyShopUserDataUpdated */:
      return "k_EMsgGCToClientCandyShopUserDataUpdated";
    case 8843 /* k_EMsgClientToGCCandyShopPurchaseReward */:
      return "k_EMsgClientToGCCandyShopPurchaseReward";
    case 8844 /* k_EMsgClientToGCCandyShopPurchaseRewardResponse */:
      return "k_EMsgClientToGCCandyShopPurchaseRewardResponse";
    case 8845 /* k_EMsgClientToGCCandyShopDoExchange */:
      return "k_EMsgClientToGCCandyShopDoExchange";
    case 8846 /* k_EMsgClientToGCCandyShopDoExchangeResponse */:
      return "k_EMsgClientToGCCandyShopDoExchangeResponse";
    case 8847 /* k_EMsgClientToGCCandyShopDoVariableExchange */:
      return "k_EMsgClientToGCCandyShopDoVariableExchange";
    case 8848 /* k_EMsgClientToGCCandyShopDoVariableExchangeResponse */:
      return "k_EMsgClientToGCCandyShopDoVariableExchangeResponse";
    case 8849 /* k_EMsgClientToGCCandyShopRerollRewards */:
      return "k_EMsgClientToGCCandyShopRerollRewards";
    case 8850 /* k_EMsgClientToGCCandyShopRerollRewardsResponse */:
      return "k_EMsgClientToGCCandyShopRerollRewardsResponse";
    case 8851 /* k_EMsgClientToGCSetHeroSticker */:
      return "k_EMsgClientToGCSetHeroSticker";
    case 8852 /* k_EMsgClientToGCSetHeroStickerResponse */:
      return "k_EMsgClientToGCSetHeroStickerResponse";
    case 8853 /* k_EMsgClientToGCGetHeroStickers */:
      return "k_EMsgClientToGCGetHeroStickers";
    case 8854 /* k_EMsgClientToGCGetHeroStickersResponse */:
      return "k_EMsgClientToGCGetHeroStickersResponse";
    case 8855 /* k_EMsgClientToGCSetFavoritePage */:
      return "k_EMsgClientToGCSetFavoritePage";
    case 8856 /* k_EMsgClientToGCSetFavoritePageResponse */:
      return "k_EMsgClientToGCSetFavoritePageResponse";
    case 8857 /* k_EMsgClientToGCCandyShopDevGrantCandy */:
      return "k_EMsgClientToGCCandyShopDevGrantCandy";
    case 8858 /* k_EMsgClientToGCCandyShopDevGrantCandyResponse */:
      return "k_EMsgClientToGCCandyShopDevGrantCandyResponse";
    case 8859 /* k_EMsgClientToGCCandyShopDevClearInventory */:
      return "k_EMsgClientToGCCandyShopDevClearInventory";
    case 8860 /* k_EMsgClientToGCCandyShopDevClearInventoryResponse */:
      return "k_EMsgClientToGCCandyShopDevClearInventoryResponse";
    case 8861 /* k_EMsgClientToGCCandyShopOpenBags */:
      return "k_EMsgClientToGCCandyShopOpenBags";
    case 8862 /* k_EMsgClientToGCCandyShopOpenBagsResponse */:
      return "k_EMsgClientToGCCandyShopOpenBagsResponse";
    case 8863 /* k_EMsgClientToGCCandyShopDevGrantCandyBags */:
      return "k_EMsgClientToGCCandyShopDevGrantCandyBags";
    case 8864 /* k_EMsgClientToGCCandyShopDevGrantCandyBagsResponse */:
      return "k_EMsgClientToGCCandyShopDevGrantCandyBagsResponse";
    case 8865 /* k_EMsgClientToGCCandyShopDevShuffleExchange */:
      return "k_EMsgClientToGCCandyShopDevShuffleExchange";
    case 8866 /* k_EMsgClientToGCCandyShopDevShuffleExchangeResponse */:
      return "k_EMsgClientToGCCandyShopDevShuffleExchangeResponse";
    case 8867 /* k_EMsgClientToGCCandyShopDevGrantRerollCharges */:
      return "k_EMsgClientToGCCandyShopDevGrantRerollCharges";
    case 8868 /* k_EMsgClientToGCCandyShopDevGrantRerollChargesResponse */:
      return "k_EMsgClientToGCCandyShopDevGrantRerollChargesResponse";
    case 8869 /* k_EMsgLobbyAdditionalAccountData */:
      return "k_EMsgLobbyAdditionalAccountData";
    case 8870 /* k_EMsgServerToGCLobbyInitialized */:
      return "k_EMsgServerToGCLobbyInitialized";
    case 8871 /* k_EMsgClientToGCCollectorsCacheAvailableDataRequest */:
      return "k_EMsgClientToGCCollectorsCacheAvailableDataRequest";
    case 8872 /* k_EMsgGCToClientCollectorsCacheAvailableDataResponse */:
      return "k_EMsgGCToClientCollectorsCacheAvailableDataResponse";
    case 8873 /* k_EMsgClientToGCUploadMatchClip */:
      return "k_EMsgClientToGCUploadMatchClip";
    case 8874 /* k_EMsgGCToClientUploadMatchClipResponse */:
      return "k_EMsgGCToClientUploadMatchClipResponse";
    case 8877 /* k_EMsgSignOutMuertaMinigame */:
      return "k_EMsgSignOutMuertaMinigame";
    case 8878 /* k_EMsgGCToServerLobbyHeroRoleStats */:
      return "k_EMsgGCToServerLobbyHeroRoleStats";
    case 8879 /* k_EMsgClientToGCRankRequest */:
      return "k_EMsgClientToGCRankRequest";
    case 8880 /* k_EMsgGCToClientRankResponse */:
      return "k_EMsgGCToClientRankResponse";
    case 8881 /* k_EMsgGCToClientRankUpdate */:
      return "k_EMsgGCToClientRankUpdate";
    case 8882 /* k_EMsgSignOutMapStats */:
      return "k_EMsgSignOutMapStats";
    case 8883 /* k_EMsgClientToGCMapStatsRequest */:
      return "k_EMsgClientToGCMapStatsRequest";
    case 8884 /* k_EMsgGCToClientMapStatsResponse */:
      return "k_EMsgGCToClientMapStatsResponse";
    case 8886 /* k_EMsgClientToGCShowcaseGetUserData */:
      return "k_EMsgClientToGCShowcaseGetUserData";
    case 8887 /* k_EMsgClientToGCShowcaseGetUserDataResponse */:
      return "k_EMsgClientToGCShowcaseGetUserDataResponse";
    case 8888 /* k_EMsgClientToGCShowcaseSetUserData */:
      return "k_EMsgClientToGCShowcaseSetUserData";
    case 8889 /* k_EMsgClientToGCShowcaseSetUserDataResponse */:
      return "k_EMsgClientToGCShowcaseSetUserDataResponse";
    case 8890 /* k_EMsgClientToGCFantasyCraftingGetData */:
      return "k_EMsgClientToGCFantasyCraftingGetData";
    case 8891 /* k_EMsgClientToGCFantasyCraftingGetDataResponse */:
      return "k_EMsgClientToGCFantasyCraftingGetDataResponse";
    case 8892 /* k_EMsgClientToGCFantasyCraftingPerformOperation */:
      return "k_EMsgClientToGCFantasyCraftingPerformOperation";
    case 8893 /* k_EMsgClientToGCFantasyCraftingPerformOperationResponse */:
      return "k_EMsgClientToGCFantasyCraftingPerformOperationResponse";
    case 8894 /* k_EMsgGCToClientFantasyCraftingGetDataUpdated */:
      return "k_EMsgGCToClientFantasyCraftingGetDataUpdated";
    case 8895 /* k_EMsgClientToGCFantasyCraftingDevModifyTablet */:
      return "k_EMsgClientToGCFantasyCraftingDevModifyTablet";
    case 8896 /* k_EMsgClientToGCFantasyCraftingDevModifyTabletResponse */:
      return "k_EMsgClientToGCFantasyCraftingDevModifyTabletResponse";
    case 8897 /* k_EMsgClientToGCRoadToTIGetQuests */:
      return "k_EMsgClientToGCRoadToTIGetQuests";
    case 8898 /* k_EMsgClientToGCRoadToTIGetQuestsResponse */:
      return "k_EMsgClientToGCRoadToTIGetQuestsResponse";
    case 8899 /* k_EMsgClientToGCRoadToTIGetActiveQuest */:
      return "k_EMsgClientToGCRoadToTIGetActiveQuest";
    case 8900 /* k_EMsgClientToGCRoadToTIGetActiveQuestResponse */:
      return "k_EMsgClientToGCRoadToTIGetActiveQuestResponse";
    case 8901 /* k_EMsgClientToGCBingoGetUserData */:
      return "k_EMsgClientToGCBingoGetUserData";
    case 8902 /* k_EMsgClientToGCBingoGetUserDataResponse */:
      return "k_EMsgClientToGCBingoGetUserDataResponse";
    case 8903 /* k_EMsgClientToGCBingoClaimRow */:
      return "k_EMsgClientToGCBingoClaimRow";
    case 8904 /* k_EMsgClientToGCBingoClaimRowResponse */:
      return "k_EMsgClientToGCBingoClaimRowResponse";
    case 8905 /* k_EMsgClientToGCBingoDevRerollCard */:
      return "k_EMsgClientToGCBingoDevRerollCard";
    case 8906 /* k_EMsgClientToGCBingoDevRerollCardResponse */:
      return "k_EMsgClientToGCBingoDevRerollCardResponse";
    case 8907 /* k_EMsgClientToGCBingoGetStatsData */:
      return "k_EMsgClientToGCBingoGetStatsData";
    case 8908 /* k_EMsgClientToGCBingoGetStatsDataResponse */:
      return "k_EMsgClientToGCBingoGetStatsDataResponse";
    case 8909 /* k_EMsgGCToClientBingoUserDataUpdated */:
      return "k_EMsgGCToClientBingoUserDataUpdated";
    case 8910 /* k_EMsgGCToClientRoadToTIQuestDataUpdated */:
      return "k_EMsgGCToClientRoadToTIQuestDataUpdated";
    case 8911 /* k_EMsgClientToGCRoadToTIUseItem */:
      return "k_EMsgClientToGCRoadToTIUseItem";
    case 8912 /* k_EMsgClientToGCRoadToTIUseItemResponse */:
      return "k_EMsgClientToGCRoadToTIUseItemResponse";
    case 8913 /* k_EMsgClientToGCShowcaseSubmitReport */:
      return "k_EMsgClientToGCShowcaseSubmitReport";
    case 8914 /* k_EMsgClientToGCShowcaseSubmitReportResponse */:
      return "k_EMsgClientToGCShowcaseSubmitReportResponse";
    case 8915 /* k_EMsgClientToGCShowcaseAdminGetReportsRollupList */:
      return "k_EMsgClientToGCShowcaseAdminGetReportsRollupList";
    case 8916 /* k_EMsgClientToGCShowcaseAdminGetReportsRollupListResponse */:
      return "k_EMsgClientToGCShowcaseAdminGetReportsRollupListResponse";
    case 8917 /* k_EMsgClientToGCShowcaseAdminGetReportsRollup */:
      return "k_EMsgClientToGCShowcaseAdminGetReportsRollup";
    case 8918 /* k_EMsgClientToGCShowcaseAdminGetReportsRollupResponse */:
      return "k_EMsgClientToGCShowcaseAdminGetReportsRollupResponse";
    case 8919 /* k_EMsgClientToGCShowcaseAdminGetUserDetails */:
      return "k_EMsgClientToGCShowcaseAdminGetUserDetails";
    case 8920 /* k_EMsgClientToGCShowcaseAdminGetUserDetailsResponse */:
      return "k_EMsgClientToGCShowcaseAdminGetUserDetailsResponse";
    case 8921 /* k_EMsgClientToGCShowcaseAdminConvict */:
      return "k_EMsgClientToGCShowcaseAdminConvict";
    case 8922 /* k_EMsgClientToGCShowcaseAdminConvictResponse */:
      return "k_EMsgClientToGCShowcaseAdminConvictResponse";
    case 8923 /* k_EMsgClientToGCShowcaseAdminExonerate */:
      return "k_EMsgClientToGCShowcaseAdminExonerate";
    case 8924 /* k_EMsgClientToGCShowcaseAdminExonerateResponse */:
      return "k_EMsgClientToGCShowcaseAdminExonerateResponse";
    case 8925 /* k_EMsgClientToGCShowcaseAdminReset */:
      return "k_EMsgClientToGCShowcaseAdminReset";
    case 8926 /* k_EMsgClientToGCShowcaseAdminResetResponse */:
      return "k_EMsgClientToGCShowcaseAdminResetResponse";
    case 8927 /* k_EMsgClientToGCShowcaseAdminLockAccount */:
      return "k_EMsgClientToGCShowcaseAdminLockAccount";
    case 8928 /* k_EMsgClientToGCShowcaseAdminLockAccountResponse */:
      return "k_EMsgClientToGCShowcaseAdminLockAccountResponse";
    case 8929 /* k_EMsgClientToGCFantasyCraftingSelectPlayer */:
      return "k_EMsgClientToGCFantasyCraftingSelectPlayer";
    case 8930 /* k_EMsgClientToGCFantasyCraftingSelectPlayerResponse */:
      return "k_EMsgClientToGCFantasyCraftingSelectPlayerResponse";
    case 8931 /* k_EMsgClientToGCFantasyCraftingGenerateTablets */:
      return "k_EMsgClientToGCFantasyCraftingGenerateTablets";
    case 8932 /* k_EMsgClientToGCFantasyCraftingGenerateTabletsResponse */:
      return "k_EMsgClientToGCFantasyCraftingGenerateTabletsResponse";
    case 8933 /* k_EMsgClientToGcFantasyCraftingUpgradeTablets */:
      return "k_EMsgClientToGcFantasyCraftingUpgradeTablets";
    case 8934 /* k_EMsgClientToGcFantasyCraftingUpgradeTabletsResponse */:
      return "k_EMsgClientToGcFantasyCraftingUpgradeTabletsResponse";
    case 8936 /* k_EMsgClientToGCFantasyCraftingRerollOptions */:
      return "k_EMsgClientToGCFantasyCraftingRerollOptions";
    case 8937 /* k_EMsgClientToGCFantasyCraftingRerollOptionsResponse */:
      return "k_EMsgClientToGCFantasyCraftingRerollOptionsResponse";
    case 8935 /* k_EMsgClientToGCRoadToTIDevForceQuest */:
      return "k_EMsgClientToGCRoadToTIDevForceQuest";
    case 8939 /* k_EMsgLobbyRoadToTIMatchQuestData */:
      return "k_EMsgLobbyRoadToTIMatchQuestData";
    case 8940 /* k_EMsgClientToGCShowcaseModerationGetQueue */:
      return "k_EMsgClientToGCShowcaseModerationGetQueue";
    case 8941 /* k_EMsgClientToGCShowcaseModerationGetQueueResponse */:
      return "k_EMsgClientToGCShowcaseModerationGetQueueResponse";
    case 8942 /* k_EMsgClientToGCShowcaseModerationApplyModeration */:
      return "k_EMsgClientToGCShowcaseModerationApplyModeration";
    case 8943 /* k_EMsgClientToGCShowcaseModerationApplyModerationResponse */:
      return "k_EMsgClientToGCShowcaseModerationApplyModerationResponse";
    case 8944 /* k_EMsgClientToGCOverworldGetUserData */:
      return "k_EMsgClientToGCOverworldGetUserData";
    case 8945 /* k_EMsgClientToGCOverworldGetUserDataResponse */:
      return "k_EMsgClientToGCOverworldGetUserDataResponse";
    case 8946 /* k_EMsgClientToGCOverworldCompletePath */:
      return "k_EMsgClientToGCOverworldCompletePath";
    case 8947 /* k_EMsgClientToGCOverworldCompletePathResponse */:
      return "k_EMsgClientToGCOverworldCompletePathResponse";
    case 8948 /* k_EMsgClientToGCOverworldClaimEncounterReward */:
      return "k_EMsgClientToGCOverworldClaimEncounterReward";
    case 8949 /* k_EMsgClientToGCOverworldClaimEncounterRewardResponse */:
      return "k_EMsgClientToGCOverworldClaimEncounterRewardResponse";
    case 8950 /* k_EMsgClientToGCOverworldDevResetAll */:
      return "k_EMsgClientToGCOverworldDevResetAll";
    case 8951 /* k_EMsgClientToGCOverworldDevResetAllResponse */:
      return "k_EMsgClientToGCOverworldDevResetAllResponse";
    case 8952 /* k_EMsgClientToGCOverworldDevResetNode */:
      return "k_EMsgClientToGCOverworldDevResetNode";
    case 8953 /* k_EMsgClientToGCOverworldDevResetNodeResponse */:
      return "k_EMsgClientToGCOverworldDevResetNodeResponse";
    case 8954 /* k_EMsgClientToGCOverworldDevResetPath */:
      return "k_EMsgClientToGCOverworldDevResetPath";
    case 8955 /* k_EMsgClientToGCOverworldDevResetPathResponse */:
      return "k_EMsgClientToGCOverworldDevResetPathResponse";
    case 8956 /* k_EMsgClientToGCOverworldDevGrantTokens */:
      return "k_EMsgClientToGCOverworldDevGrantTokens";
    case 8957 /* k_EMsgClientToGCOverworldDevGrantTokensResponse */:
      return "k_EMsgClientToGCOverworldDevGrantTokensResponse";
    case 8958 /* k_EMsgClientToGCOverworldDevClearInventory */:
      return "k_EMsgClientToGCOverworldDevClearInventory";
    case 8959 /* k_EMsgClientToGCOverworldDevClearInventoryResponse */:
      return "k_EMsgClientToGCOverworldDevClearInventoryResponse";
    case 8960 /* k_EMsgServerToGCNewBloomGift */:
      return "k_EMsgServerToGCNewBloomGift";
    case 8961 /* k_EMsgServerToGCNewBloomGiftResponse */:
      return "k_EMsgServerToGCNewBloomGiftResponse";
    case 8962 /* k_EMsgGCToClientOverworldUserDataUpdated */:
      return "k_EMsgGCToClientOverworldUserDataUpdated";
    case 8963 /* k_EMsgClientToGCOverworldMoveToNode */:
      return "k_EMsgClientToGCOverworldMoveToNode";
    case 8964 /* k_EMsgClientToGCOverworldMoveToNodeResponse */:
      return "k_EMsgClientToGCOverworldMoveToNodeResponse";
    case 8965 /* k_EMsgClientToGCNewBloomGift */:
      return "k_EMsgClientToGCNewBloomGift";
    case 8966 /* k_EMsgClientToGCNewBloomGiftResponse */:
      return "k_EMsgClientToGCNewBloomGiftResponse";
    case 8967 /* k_EMsgSignOutOverworld */:
      return "k_EMsgSignOutOverworld";
    case 8969 /* k_EMsgClientToGCSetBannedHeroes */:
      return "k_EMsgClientToGCSetBannedHeroes";
    case 8970 /* k_EMsgClientToGCOverworldTradeTokens */:
      return "k_EMsgClientToGCOverworldTradeTokens";
    case 8971 /* k_EMsgClientToGCOverworldTradeTokensResponse */:
      return "k_EMsgClientToGCOverworldTradeTokensResponse";
    case 8972 /* k_EMsgOverworldEncounterTokenTreasureData */:
      return "k_EMsgOverworldEncounterTokenTreasureData";
    case 8973 /* k_EMsgOverworldEncounterTokenQuestData */:
      return "k_EMsgOverworldEncounterTokenQuestData";
    case 8974 /* k_EMsgOverworldEncounterChooseHeroData */:
      return "k_EMsgOverworldEncounterChooseHeroData";
    case 8975 /* k_EMsgClientToGCUpdateComicBookStats */:
      return "k_EMsgClientToGCUpdateComicBookStats";
    case 8976 /* k_EMsgClientToGCCandyShopDevResetShop */:
      return "k_EMsgClientToGCCandyShopDevResetShop";
    case 8977 /* k_EMsgClientToGCCandyShopDevResetShopResponse */:
      return "k_EMsgClientToGCCandyShopDevResetShopResponse";
    case 8978 /* k_EMsgOverworldEncounterProgressData */:
      return "k_EMsgOverworldEncounterProgressData";
    case 8979 /* k_EMsgClientToGCOverworldFeedback */:
      return "k_EMsgClientToGCOverworldFeedback";
    case 8980 /* k_EMsgClientToGCOverworldFeedbackResponse */:
      return "k_EMsgClientToGCOverworldFeedbackResponse";
    case 8981 /* k_EMsgClientToGCOverworldVisitEncounter */:
      return "k_EMsgClientToGCOverworldVisitEncounter";
    case 8982 /* k_EMsgClientToGCOverworldVisitEncounterResponse */:
      return "k_EMsgClientToGCOverworldVisitEncounterResponse";
    case 8983 /* k_EMsgClientToGCOverworldGiftTokens */:
      return "k_EMsgClientToGCOverworldGiftTokens";
    case 8984 /* k_EMsgClientToGCOverworldGiftTokensResponse */:
      return "k_EMsgClientToGCOverworldGiftTokensResponse";
    case 8985 /* k_EMsgClientToGCDotaLabsFeedback */:
      return "k_EMsgClientToGCDotaLabsFeedback";
    case 8986 /* k_EMsgClientToGCDotaLabsFeedbackResponse */:
      return "k_EMsgClientToGCDotaLabsFeedbackResponse";
    case 8987 /* k_EMsgOverworldEncounterPitFighterRewardData */:
      return "k_EMsgOverworldEncounterPitFighterRewardData";
    case 8988 /* k_EMsgClientToGCOverworldGetDynamicImage */:
      return "k_EMsgClientToGCOverworldGetDynamicImage";
    case 8989 /* k_EMsgClientToGCOverworldGetDynamicImageResponse */:
      return "k_EMsgClientToGCOverworldGetDynamicImageResponse";
    case 8990 /* k_EMsgClientToGCFightingGameChallengeFriend */:
      return "k_EMsgClientToGCFightingGameChallengeFriend";
    case 8991 /* k_EMsgClientToGCFightingGameChallengeFriendResponse */:
      return "k_EMsgClientToGCFightingGameChallengeFriendResponse";
    case 8992 /* k_EMsgClientToGCFightingGameCancelChallengeFriend */:
      return "k_EMsgClientToGCFightingGameCancelChallengeFriend";
    case 8993 /* k_EMsgClientToGCFightingGameAnswerChallenge */:
      return "k_EMsgClientToGCFightingGameAnswerChallenge";
    case 8994 /* k_EMsgClientToGCFightingGameAnswerChallengeResponse */:
      return "k_EMsgClientToGCFightingGameAnswerChallengeResponse";
    case 8995 /* k_EMsgGCToClientFightingGameChallenge */:
      return "k_EMsgGCToClientFightingGameChallenge";
    case 8996 /* k_EMsgGCToClientFightingGameStartMatch */:
      return "k_EMsgGCToClientFightingGameStartMatch";
    case 8997 /* k_EMsgGCToClientFightingGameChallengeCanceled */:
      return "k_EMsgGCToClientFightingGameChallengeCanceled";
    case 8999 /* k_EMsgClientToGCBingoShuffleCard */:
      return "k_EMsgClientToGCBingoShuffleCard";
    case 9e3 /* k_EMsgClientToGCBingoShuffleCardResponse */:
      return "k_EMsgClientToGCBingoShuffleCardResponse";
    case 9001 /* k_EMsgClientToGCBingoModifySquare */:
      return "k_EMsgClientToGCBingoModifySquare";
    case 9002 /* k_EMsgClientToGCBingoModifySquareResponse */:
      return "k_EMsgClientToGCBingoModifySquareResponse";
    case 9003 /* k_EMsgClientToGCBingoDevAddTokens */:
      return "k_EMsgClientToGCBingoDevAddTokens";
    case 9004 /* k_EMsgClientToGCBingoDevAddTokensResponse */:
      return "k_EMsgClientToGCBingoDevAddTokensResponse";
    case 9005 /* k_EMsgClientToGCBingoDevClearInventory */:
      return "k_EMsgClientToGCBingoDevClearInventory";
    case 9006 /* k_EMsgClientToGCBingoDevClearInventoryResponse */:
      return "k_EMsgClientToGCBingoDevClearInventoryResponse";
    case 9007 /* k_EMsgGCCompendiumRemoveAllSelections */:
      return "k_EMsgGCCompendiumRemoveAllSelections";
    case 9008 /* k_EMsgGCCompendiumRemoveAllSelectionsResponse */:
      return "k_EMsgGCCompendiumRemoveAllSelectionsResponse";
    case 9009 /* k_EMsgClientToGCOverworldMinigameAction */:
      return "k_EMsgClientToGCOverworldMinigameAction";
    case 9010 /* k_EMsgClientToGCOverworldMinigameActionResponse */:
      return "k_EMsgClientToGCOverworldMinigameActionResponse";
    case 9011 /* k_EMsgClientToGCSurvivorsTelemetry */:
      return "k_EMsgClientToGCSurvivorsTelemetry";
    case 9012 /* k_EMsgClientToGCSurvivorsTelemetryResponse */:
      return "k_EMsgClientToGCSurvivorsTelemetryResponse";
    case 9013 /* k_EMsgClientToGCOverworldRequestTokensNeededByFriend */:
      return "k_EMsgClientToGCOverworldRequestTokensNeededByFriend";
    case 9014 /* k_EMsgClientToGCOverworldRequestTokensNeededByFriendResponse */:
      return "k_EMsgClientToGCOverworldRequestTokensNeededByFriendResponse";
    case 9015 /* k_EMsgClientToGCCraftworksGetUserData */:
      return "k_EMsgClientToGCCraftworksGetUserData";
    case 9016 /* k_EMsgClientToGCCraftworksGetUserDataResponse */:
      return "k_EMsgClientToGCCraftworksGetUserDataResponse";
    case 9017 /* k_EMsgGCToClientCraftworksUserDataUpdated */:
      return "k_EMsgGCToClientCraftworksUserDataUpdated";
    case 9018 /* k_EMsgClientToGCCraftworksCraftRecipe */:
      return "k_EMsgClientToGCCraftworksCraftRecipe";
    case 9019 /* k_EMsgClientToGCCraftworksCraftRecipeResponse */:
      return "k_EMsgClientToGCCraftworksCraftRecipeResponse";
    case 9020 /* k_EMsgClientToGCCraftworksDevModifyComponents */:
      return "k_EMsgClientToGCCraftworksDevModifyComponents";
    case 9021 /* k_EMsgClientToGCCraftworksDevModifyComponentsResponse */:
      return "k_EMsgClientToGCCraftworksDevModifyComponentsResponse";
    case 9022 /* k_EMsgSignOutCraftworks */:
      return "k_EMsgSignOutCraftworks";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum EDOTAGCMsg");
  }
}





exports.EDOTAGCMsg = EDOTAGCMsg; exports.eDOTAGCMsgFromJSON = eDOTAGCMsgFromJSON; exports.eDOTAGCMsgToJSON = eDOTAGCMsgToJSON;
//# sourceMappingURL=chunk-3V5KHPWI.cjs.map