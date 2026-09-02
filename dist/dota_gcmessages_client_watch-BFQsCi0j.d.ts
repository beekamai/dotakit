import { BinaryWriter, BinaryReader } from '@bufbuild/protobuf/wire';
import { a as CMsgDOTAMatchMinimal } from './dota_gcmessages_common-D8GmtIqO.js';

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
declare const CSourceTVGameSmall: MessageFns<CSourceTVGameSmall>;
interface CSourceTVGameSmall_Player {
    accountId: number;
    heroId: number;
    teamSlot: number;
    team: number;
}
declare const CSourceTVGameSmall_Player: MessageFns<CSourceTVGameSmall_Player>;
interface CMsgClientToGCFindTopSourceTVGames {
    searchKey: string;
    leagueId: number;
    heroId: number;
    startGame: number;
    gameListIndex: number;
    lobbyIds: string[];
}
declare const CMsgClientToGCFindTopSourceTVGames: MessageFns<CMsgClientToGCFindTopSourceTVGames>;
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
declare const CMsgGCToClientFindTopSourceTVGamesResponse: MessageFns<CMsgGCToClientFindTopSourceTVGamesResponse>;
interface CMsgGCToClientTopWeekendTourneyGames {
    liveGames: CSourceTVGameSmall[];
}
declare const CMsgGCToClientTopWeekendTourneyGames: MessageFns<CMsgGCToClientTopWeekendTourneyGames>;
interface CMsgClientToGCTopLeagueMatchesRequest {
}
declare const CMsgClientToGCTopLeagueMatchesRequest: MessageFns<CMsgClientToGCTopLeagueMatchesRequest>;
interface CMsgClientToGCTopFriendMatchesRequest {
}
declare const CMsgClientToGCTopFriendMatchesRequest: MessageFns<CMsgClientToGCTopFriendMatchesRequest>;
interface CMsgClientToGCMatchesMinimalRequest {
    matchIds: string[];
}
declare const CMsgClientToGCMatchesMinimalRequest: MessageFns<CMsgClientToGCMatchesMinimalRequest>;
interface CMsgClientToGCMatchesMinimalResponse {
    matches: CMsgDOTAMatchMinimal[];
    lastMatch: boolean;
}
declare const CMsgClientToGCMatchesMinimalResponse: MessageFns<CMsgClientToGCMatchesMinimalResponse>;
interface CMsgGCToClientTopLeagueMatchesResponse {
    matches: CMsgDOTAMatchMinimal[];
}
declare const CMsgGCToClientTopLeagueMatchesResponse: MessageFns<CMsgGCToClientTopLeagueMatchesResponse>;
interface CMsgGCToClientTopFriendMatchesResponse {
    matches: CMsgDOTAMatchMinimal[];
}
declare const CMsgGCToClientTopFriendMatchesResponse: MessageFns<CMsgGCToClientTopFriendMatchesResponse>;
interface CMsgSpectateFriendGame {
    steamId: string;
    live: boolean;
}
declare const CMsgSpectateFriendGame: MessageFns<CMsgSpectateFriendGame>;
interface CMsgSpectateFriendGameResponse {
    serverSteamid: string;
    watchLiveResult: CMsgSpectateFriendGameResponse_EWatchLiveResult;
}
declare const CMsgSpectateFriendGameResponse: MessageFns<CMsgSpectateFriendGameResponse>;
interface CDOTAReplayDownloadInfo {
    match: CMsgDOTAMatchMinimal | undefined;
    title: string;
    description: string;
    size: number;
    tags: string[];
    existsOnDisk: boolean;
}
declare const CDOTAReplayDownloadInfo: MessageFns<CDOTAReplayDownloadInfo>;
interface CDOTAReplayDownloadInfo_Highlight {
    timestamp: number;
    description: string;
}
declare const CDOTAReplayDownloadInfo_Highlight: MessageFns<CDOTAReplayDownloadInfo_Highlight>;
interface CMsgWatchGame {
    serverSteamid: string;
    clientVersion: number;
    watchServerSteamid: string;
    lobbyId: string;
    regions: number[];
}
declare const CMsgWatchGame: MessageFns<CMsgWatchGame>;
interface CMsgCancelWatchGame {
}
declare const CMsgCancelWatchGame: MessageFns<CMsgCancelWatchGame>;
interface CMsgWatchGameResponse {
    watchGameResult: CMsgWatchGameResponse_WatchGameResult;
    sourceTvPublicAddr: number;
    sourceTvPrivateAddr: number;
    sourceTvPort: number;
    gameServerSteamid: string;
    watchServerSteamid: string;
    watchTvUniqueSecretCode: string;
}
declare const CMsgWatchGameResponse: MessageFns<CMsgWatchGameResponse>;
interface CMsgPartyLeaderWatchGamePrompt {
    gameServerSteamid: string;
}
declare const CMsgPartyLeaderWatchGamePrompt: MessageFns<CMsgPartyLeaderWatchGamePrompt>;
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
declare const CDOTABroadcasterInfo: MessageFns<CDOTABroadcasterInfo>;
interface CMsgDOTASeries {
    seriesId: number;
    seriesType: number;
    team1: CMsgDOTASeries_TeamInfo | undefined;
    team2: CMsgDOTASeries_TeamInfo | undefined;
    matchMinimal: CMsgDOTAMatchMinimal[];
    liveGame: CMsgDOTASeries_LiveGame | undefined;
}
declare const CMsgDOTASeries: MessageFns<CMsgDOTASeries>;
interface CMsgDOTASeries_TeamInfo {
    teamId: number;
    teamName: string;
    teamLogoUrl: string;
    wagerCount: number;
}
declare const CMsgDOTASeries_TeamInfo: MessageFns<CMsgDOTASeries_TeamInfo>;
interface CMsgDOTASeries_LiveGame {
    serverSteamId: string;
    teamRadiant: CMsgDOTASeries_TeamInfo | undefined;
    teamDire: CMsgDOTASeries_TeamInfo | undefined;
    teamRadiantScore: number;
    teamDireScore: number;
}
declare const CMsgDOTASeries_LiveGame: MessageFns<CMsgDOTASeries_LiveGame>;
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

export { cMsgWatchGameResponse_WatchGameResultFromJSON as A, cMsgWatchGameResponse_WatchGameResultToJSON as B, CSourceTVGameSmall as C, CDOTABroadcasterInfo as a, CDOTAReplayDownloadInfo as b, CDOTAReplayDownloadInfo_Highlight as c, CMsgCancelWatchGame as d, CMsgClientToGCFindTopSourceTVGames as e, CMsgClientToGCMatchesMinimalRequest as f, CMsgClientToGCMatchesMinimalResponse as g, CMsgClientToGCTopFriendMatchesRequest as h, CMsgClientToGCTopLeagueMatchesRequest as i, CMsgDOTASeries as j, CMsgDOTASeries_LiveGame as k, CMsgDOTASeries_TeamInfo as l, CMsgGCToClientFindTopSourceTVGamesResponse as m, CMsgGCToClientTopFriendMatchesResponse as n, CMsgGCToClientTopLeagueMatchesResponse as o, CMsgGCToClientTopWeekendTourneyGames as p, CMsgPartyLeaderWatchGamePrompt as q, CMsgSpectateFriendGame as r, CMsgSpectateFriendGameResponse as s, CMsgSpectateFriendGameResponse_EWatchLiveResult as t, CMsgWatchGame as u, CMsgWatchGameResponse as v, CMsgWatchGameResponse_WatchGameResult as w, CSourceTVGameSmall_Player as x, cMsgSpectateFriendGameResponse_EWatchLiveResultFromJSON as y, cMsgSpectateFriendGameResponse_EWatchLiveResultToJSON as z };
