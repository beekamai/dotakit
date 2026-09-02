import { BinaryWriter, BinaryReader } from '@bufbuild/protobuf/wire';
import { cm as DOTAGameState, d8 as MatchType, d1 as ETourneyQueueDeadlineState, c as EEvent, d as dotaGcTeam, co as DOTALeaverStatusT, bE as CMsgPendingEventAward, ef as dotaCmPick, cg as DOTABotDifficulty, cS as EMatchOutcome, cq as DOTALobbyVisibility, cu as DOTASelectionPriorityRules, ct as DOTASelectionPriorityChoice, E as EDOTAMMRBoostType, R as CMsgDOTAClaimEventActionResponse, cX as EProfileCardSlotType, x as CMsgArcanaVoteMatchVotes, f as ELeagueRegion, cH as EEventActionScoreMode, cI as EHeroRelicRarity, cU as EOverwatchConviction, cF as EDPCFavoriteType, c$ as EStickerbookPageType, b$ as CMsgStickerbookSticker, c0 as CMsgStickerbookTeamPageOrderSequence, q as CMatchClip, cY as ERankType, e as CMsgDOTAMatch, cs as DOTAMatchVote, cR as EMatchGroupServerStatus, c5 as CPartySearchClientParty, aJ as CMsgDOTASDOHeroStatsHistory, c1 as CMsgSuccessfulHero, bT as CMsgRecentMatchInfo, b_ as CMsgStickerbookPage, bJ as CMsgPlayerRecentAccomplishments, bH as CMsgPlayerHeroRecentAccomplishments, c2 as CMsgUnderDraftData, cV as EOverwatchReportReason, bZ as CMsgStickerbook, bY as CMsgStickerHeroes, bx as CMsgMapStatsSnapshot, be as CMsgGlobalMapStats, cT as ENewBloomGiftingResponse, cl as DOTAGameMode, aP as CMsgDOTATriviaQuestion } from './dota_gcmessages_common-D8GmtIqO.cjs';

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
declare const CMsgProtoBufHeader: MessageFns$b<CMsgProtoBufHeader>;
interface CGCSystemMsgGetAccountDetails {
    steamid: string;
    appid: number;
}
declare const CGCSystemMsgGetAccountDetails: MessageFns$b<CGCSystemMsgGetAccountDetails>;
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
declare const CGCSystemMsgGetAccountDetailsResponse: MessageFns$b<CGCSystemMsgGetAccountDetailsResponse>;
interface CIPLocationInfo {
    ip: number;
    latitude: number;
    longitude: number;
    country: string;
    state: string;
    city: string;
}
declare const CIPLocationInfo: MessageFns$b<CIPLocationInfo>;
interface CGCMsgGetIPLocationResponse {
    infos: CIPLocationInfo[];
}
declare const CGCMsgGetIPLocationResponse: MessageFns$b<CGCMsgGetIPLocationResponse>;
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
declare const CMsgSteamLearnDataSourceDescObject: MessageFns$a<CMsgSteamLearnDataSourceDescObject>;
interface CMsgSteamLearnDataSourceDescElement {
    name: string;
    dataType: ESteamLearnDataType;
    object: CMsgSteamLearnDataSourceDescObject | undefined;
    count: number;
}
declare const CMsgSteamLearnDataSourceDescElement: MessageFns$a<CMsgSteamLearnDataSourceDescElement>;
interface CMsgSteamLearnDataSource {
    id: number;
    name: string;
    version: number;
    sourceDescription: string;
    structure: CMsgSteamLearnDataSourceDescObject | undefined;
    structureCrc: number;
    cacheDurationSeconds: number;
}
declare const CMsgSteamLearnDataSource: MessageFns$a<CMsgSteamLearnDataSource>;
interface CMsgSteamLearnDataObject {
    elements: CMsgSteamLearnDataElement[];
}
declare const CMsgSteamLearnDataObject: MessageFns$a<CMsgSteamLearnDataObject>;
interface CMsgSteamLearnDataElement {
    name: string;
    dataInt32s: number[];
    dataFloats: number[];
    dataBools: boolean[];
    dataStrings: string[];
    dataObjects: CMsgSteamLearnDataObject[];
}
declare const CMsgSteamLearnDataElement: MessageFns$a<CMsgSteamLearnDataElement>;
interface CMsgSteamLearnData {
    dataSourceId: number;
    keys: string[];
    dataObject: CMsgSteamLearnDataObject | undefined;
}
declare const CMsgSteamLearnData: MessageFns$a<CMsgSteamLearnData>;
interface CMsgSteamLearnDataList {
    data: CMsgSteamLearnData[];
}
declare const CMsgSteamLearnDataList: MessageFns$a<CMsgSteamLearnDataList>;
interface CMsgSteamLearnRegisterDataSourceRequest {
    accessToken: string;
    dataSource: CMsgSteamLearnDataSource | undefined;
}
declare const CMsgSteamLearnRegisterDataSourceRequest: MessageFns$a<CMsgSteamLearnRegisterDataSourceRequest>;
interface CMsgSteamLearnRegisterDataSourceResponse {
    result: ESteammLearnRegisterDataSourceResult;
    dataSource: CMsgSteamLearnDataSource | undefined;
}
declare const CMsgSteamLearnRegisterDataSourceResponse: MessageFns$a<CMsgSteamLearnRegisterDataSourceResponse>;
interface CMsgSteamLearnCacheDataRequest {
    accessToken: string;
    data: CMsgSteamLearnData | undefined;
}
declare const CMsgSteamLearnCacheDataRequest: MessageFns$a<CMsgSteamLearnCacheDataRequest>;
interface CMsgSteamLearnCacheDataResponse {
    cacheDataResult: ESteamLearnCacheDataResult;
}
declare const CMsgSteamLearnCacheDataResponse: MessageFns$a<CMsgSteamLearnCacheDataResponse>;
interface CMsgSteamLearnSnapshotProjectRequest {
    accessToken: string;
    projectId: number;
    publishedVersion: number;
    keys: string[];
    data: CMsgSteamLearnData[];
    pendingDataLimitSeconds: number;
}
declare const CMsgSteamLearnSnapshotProjectRequest: MessageFns$a<CMsgSteamLearnSnapshotProjectRequest>;
interface CMsgSteamLearnSnapshotProjectResponse {
    snapshotResult: ESteamLearnSnapshotProjectResult;
}
declare const CMsgSteamLearnSnapshotProjectResponse: MessageFns$a<CMsgSteamLearnSnapshotProjectResponse>;
interface CMsgSteamLearnBatchOperationRequest {
    cacheDataRequests: CMsgSteamLearnCacheDataRequest[];
    snapshotRequests: CMsgSteamLearnSnapshotProjectRequest[];
    inferenceRequests: CMsgSteamLearnInferenceRequest[];
}
declare const CMsgSteamLearnBatchOperationRequest: MessageFns$a<CMsgSteamLearnBatchOperationRequest>;
interface CMsgSteamLearnBatchOperationResponse {
    cacheDataResponses: CMsgSteamLearnCacheDataResponse[];
    snapshotResponses: CMsgSteamLearnSnapshotProjectResponse[];
    inferenceResponses: CMsgSteamLearnInferenceResponse[];
}
declare const CMsgSteamLearnBatchOperationResponse: MessageFns$a<CMsgSteamLearnBatchOperationResponse>;
interface CMsgSteamLearnAccessTokens {
    registerDataSourceAccessToken: string;
    cacheDataAccessTokens: CMsgSteamLearnAccessTokens_CacheDataAccessToken[];
    snapshotProjectAccessTokens: CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken[];
    inferenceAccessTokens: CMsgSteamLearnAccessTokens_InferenceAccessToken[];
}
declare const CMsgSteamLearnAccessTokens: MessageFns$a<CMsgSteamLearnAccessTokens>;
interface CMsgSteamLearnAccessTokens_CacheDataAccessToken {
    dataSourceId: number;
    accessToken: string;
}
declare const CMsgSteamLearnAccessTokens_CacheDataAccessToken: MessageFns$a<CMsgSteamLearnAccessTokens_CacheDataAccessToken>;
interface CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken {
    projectId: number;
    accessToken: string;
}
declare const CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken: MessageFns$a<CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken>;
interface CMsgSteamLearnAccessTokens_InferenceAccessToken {
    projectId: number;
    accessToken: string;
}
declare const CMsgSteamLearnAccessTokens_InferenceAccessToken: MessageFns$a<CMsgSteamLearnAccessTokens_InferenceAccessToken>;
interface CMsgSteamLearnGetAccessTokensRequest {
    appid: number;
}
declare const CMsgSteamLearnGetAccessTokensRequest: MessageFns$a<CMsgSteamLearnGetAccessTokensRequest>;
interface CMsgSteamLearnGetAccessTokensResponse {
    result: ESteamLearnGetAccessTokensResult;
    accessTokens: CMsgSteamLearnAccessTokens | undefined;
}
declare const CMsgSteamLearnGetAccessTokensResponse: MessageFns$a<CMsgSteamLearnGetAccessTokensResponse>;
interface CMsgSteamLearnInferenceRequest {
    accessToken: string;
    projectId: number;
    publishedVersion: number;
    overrideTrainId: number;
    data: CMsgSteamLearnDataList | undefined;
    additionalData: number[];
}
declare const CMsgSteamLearnInferenceRequest: MessageFns$a<CMsgSteamLearnInferenceRequest>;
interface CMsgSteamLearnInferenceMetadataRequest {
    accessToken: string;
    projectId: number;
    publishedVersion: number;
    overrideTrainId: number;
}
declare const CMsgSteamLearnInferenceMetadataRequest: MessageFns$a<CMsgSteamLearnInferenceMetadataRequest>;
interface CMsgSteamLearnInferenceMetadataBackendRequest {
    projectId: number;
    fetchId: number;
}
declare const CMsgSteamLearnInferenceMetadataBackendRequest: MessageFns$a<CMsgSteamLearnInferenceMetadataBackendRequest>;
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
declare const CMsgSteamLearnInferenceMetadataResponse: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse>;
interface CMsgSteamLearnInferenceMetadataResponse_RowRange {
    minRow: string;
    maxRow: string;
}
declare const CMsgSteamLearnInferenceMetadataResponse_RowRange: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_RowRange>;
interface CMsgSteamLearnInferenceMetadataResponse_Range {
    dataElementPath: string;
    minValue: number;
    maxValue: number;
}
declare const CMsgSteamLearnInferenceMetadataResponse_Range: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_Range>;
interface CMsgSteamLearnInferenceMetadataResponse_StdDev {
    dataElementPath: string;
    mean: number;
    stdDev: number;
}
declare const CMsgSteamLearnInferenceMetadataResponse_StdDev: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_StdDev>;
interface CMsgSteamLearnInferenceMetadataResponse_CompactTable {
    name: string;
    mapValues: CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry[];
    mapMappings: CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry[];
}
declare const CMsgSteamLearnInferenceMetadataResponse_CompactTable: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_CompactTable>;
interface CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry {
    value: number;
    mapping: number;
    count: string;
}
declare const CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry>;
interface CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry {
    key: number;
    value: CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry | undefined;
}
declare const CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry>;
interface CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry {
    key: number;
    value: CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry | undefined;
}
declare const CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry>;
interface CMsgSteamLearnInferenceMetadataResponse_SequenceTable {
    name: string;
    mapValues: CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapValuesEntry[];
    mapMappings: CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapMappingsEntry[];
    totalCount: string;
}
declare const CMsgSteamLearnInferenceMetadataResponse_SequenceTable: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_SequenceTable>;
interface CMsgSteamLearnInferenceMetadataResponse_SequenceTable_Entry {
    values: number[];
    crc: number;
    count: number;
}
declare const CMsgSteamLearnInferenceMetadataResponse_SequenceTable_Entry: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_SequenceTable_Entry>;
interface CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapValuesEntry {
    key: number;
    value: CMsgSteamLearnInferenceMetadataResponse_SequenceTable_Entry | undefined;
}
declare const CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapValuesEntry: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapValuesEntry>;
interface CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapMappingsEntry {
    key: string;
    value: CMsgSteamLearnInferenceMetadataResponse_SequenceTable_Entry | undefined;
}
declare const CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapMappingsEntry: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapMappingsEntry>;
interface CMsgSteamLearnInferenceMetadataResponse_KMeans {
    name: string;
    clusters: CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster[];
}
declare const CMsgSteamLearnInferenceMetadataResponse_KMeans: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_KMeans>;
interface CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster {
    x: number;
    y: number;
    radius: number;
    radius75pct: number;
    radius50pct: number;
    radius25pct: number;
}
declare const CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster>;
interface CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram {
    minValue: number;
    maxValue: number;
    numBuckets: number;
    bucketCounts: number[];
}
declare const CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram>;
interface CMsgSteamLearnInferenceMetadataResponse_AppInfo {
    countryAllow: string;
    countryDeny: string;
    platformWin: boolean;
    platformMac: boolean;
    platformLinux: boolean;
    adultViolence: boolean;
    adultSex: boolean;
}
declare const CMsgSteamLearnInferenceMetadataResponse_AppInfo: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_AppInfo>;
interface CMsgSteamLearnInferenceMetadataResponse_AppInfoEntry {
    key: number;
    value: CMsgSteamLearnInferenceMetadataResponse_AppInfo | undefined;
}
declare const CMsgSteamLearnInferenceMetadataResponse_AppInfoEntry: MessageFns$a<CMsgSteamLearnInferenceMetadataResponse_AppInfoEntry>;
interface CMsgSteamLearnInferenceBackendResponse {
    outputs: CMsgSteamLearnInferenceBackendResponse_Output[];
}
declare const CMsgSteamLearnInferenceBackendResponse: MessageFns$a<CMsgSteamLearnInferenceBackendResponse>;
interface CMsgSteamLearnInferenceBackendResponse_Sequence {
    value: number[];
}
declare const CMsgSteamLearnInferenceBackendResponse_Sequence: MessageFns$a<CMsgSteamLearnInferenceBackendResponse_Sequence>;
interface CMsgSteamLearnInferenceBackendResponse_RegressionOutput {
    value: number;
}
declare const CMsgSteamLearnInferenceBackendResponse_RegressionOutput: MessageFns$a<CMsgSteamLearnInferenceBackendResponse_RegressionOutput>;
interface CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput {
    value: number;
}
declare const CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput: MessageFns$a<CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput>;
interface CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput {
    weight: number[];
    value: number[];
    valueSequence: CMsgSteamLearnInferenceBackendResponse_Sequence[];
}
declare const CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput: MessageFns$a<CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput>;
interface CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput {
    weight: number[];
    value: number[];
    valueSequence: CMsgSteamLearnInferenceBackendResponse_Sequence[];
}
declare const CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput: MessageFns$a<CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput>;
interface CMsgSteamLearnInferenceBackendResponse_Output {
    binaryCrossentropy?: CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput | undefined;
    categoricalCrossentropy?: CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput | undefined;
    multiBinaryCrossentropy?: CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput | undefined;
    regression?: CMsgSteamLearnInferenceBackendResponse_RegressionOutput | undefined;
}
declare const CMsgSteamLearnInferenceBackendResponse_Output: MessageFns$a<CMsgSteamLearnInferenceBackendResponse_Output>;
interface CMsgSteamLearnInferenceResponse {
    inferenceResult: ESteamLearnInferenceResult;
    backendResponse: CMsgSteamLearnInferenceBackendResponse | undefined;
    keys: string[];
}
declare const CMsgSteamLearnInferenceResponse: MessageFns$a<CMsgSteamLearnInferenceResponse>;
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
declare const CExtraMsgBlock: MessageFns$9<CExtraMsgBlock>;
interface CMsgSteamLearnServerInfo {
    accessTokens: CMsgSteamLearnAccessTokens | undefined;
    projectInfos: CMsgSteamLearnServerInfo_ProjectInfo[];
}
declare const CMsgSteamLearnServerInfo: MessageFns$9<CMsgSteamLearnServerInfo>;
interface CMsgSteamLearnServerInfo_ProjectInfo {
    projectId: number;
    snapshotPublishedVersion: number;
    inferencePublishedVersion: number;
    snapshotPercentage: number;
    snapshotEnabled: boolean;
}
declare const CMsgSteamLearnServerInfo_ProjectInfo: MessageFns$9<CMsgSteamLearnServerInfo_ProjectInfo>;
interface CMsgGCAssertJobData {
    messageType: string;
    messageData: Buffer;
}
declare const CMsgGCAssertJobData: MessageFns$9<CMsgGCAssertJobData>;
interface CMsgGCConCommand {
    command: string;
}
declare const CMsgGCConCommand: MessageFns$9<CMsgGCConCommand>;
interface CMsgSDOAssert {
    sdoType: number;
    requests: CMsgSDOAssert_Request[];
}
declare const CMsgSDOAssert: MessageFns$9<CMsgSDOAssert>;
interface CMsgSDOAssert_Request {
    key: string[];
    requestingJob: string;
}
declare const CMsgSDOAssert_Request: MessageFns$9<CMsgSDOAssert_Request>;
interface CMsgSOIDOwner {
    type: number;
    id: string;
}
declare const CMsgSOIDOwner: MessageFns$9<CMsgSOIDOwner>;
interface CMsgSOSingleObject {
    typeId: number;
    objectData: Buffer;
    version: string;
    ownerSoid: CMsgSOIDOwner | undefined;
    serviceId: number;
}
declare const CMsgSOSingleObject: MessageFns$9<CMsgSOSingleObject>;
interface CMsgSOMultipleObjects {
    objectsModified: CMsgSOMultipleObjects_SingleObject[];
    version: string;
    objectsAdded: CMsgSOMultipleObjects_SingleObject[];
    objectsRemoved: CMsgSOMultipleObjects_SingleObject[];
    ownerSoid: CMsgSOIDOwner | undefined;
    serviceId: number;
}
declare const CMsgSOMultipleObjects: MessageFns$9<CMsgSOMultipleObjects>;
interface CMsgSOMultipleObjects_SingleObject {
    typeId: number;
    objectData: Buffer;
}
declare const CMsgSOMultipleObjects_SingleObject: MessageFns$9<CMsgSOMultipleObjects_SingleObject>;
interface CMsgSOCacheSubscribed {
    objects: CMsgSOCacheSubscribed_SubscribedType[];
    version: string;
    ownerSoid: CMsgSOIDOwner | undefined;
    serviceId: number;
    serviceList: number[];
    syncVersion: string;
}
declare const CMsgSOCacheSubscribed: MessageFns$9<CMsgSOCacheSubscribed>;
interface CMsgSOCacheSubscribed_SubscribedType {
    typeId: number;
    objectData: Buffer[];
}
declare const CMsgSOCacheSubscribed_SubscribedType: MessageFns$9<CMsgSOCacheSubscribed_SubscribedType>;
interface CMsgSOCacheSubscribedUpToDate {
    version: string;
    ownerSoid: CMsgSOIDOwner | undefined;
    serviceId: number;
    serviceList: number[];
    syncVersion: string;
}
declare const CMsgSOCacheSubscribedUpToDate: MessageFns$9<CMsgSOCacheSubscribedUpToDate>;
interface CMsgSOCacheUnsubscribed {
    ownerSoid: CMsgSOIDOwner | undefined;
}
declare const CMsgSOCacheUnsubscribed: MessageFns$9<CMsgSOCacheUnsubscribed>;
interface CMsgSOCacheSubscriptionCheck {
    version: string;
    ownerSoid: CMsgSOIDOwner | undefined;
    serviceId: number;
    serviceList: number[];
    syncVersion: string;
}
declare const CMsgSOCacheSubscriptionCheck: MessageFns$9<CMsgSOCacheSubscriptionCheck>;
interface CMsgSOCacheSubscriptionRefresh {
    ownerSoid: CMsgSOIDOwner | undefined;
}
declare const CMsgSOCacheSubscriptionRefresh: MessageFns$9<CMsgSOCacheSubscriptionRefresh>;
interface CMsgSOCacheVersion {
    version: string;
}
declare const CMsgSOCacheVersion: MessageFns$9<CMsgSOCacheVersion>;
interface CMsgGCMultiplexMessage {
    msgtype: number;
    payload: Buffer;
    steamids: string[];
}
declare const CMsgGCMultiplexMessage: MessageFns$9<CMsgGCMultiplexMessage>;
interface CMsgGCToGCSubGCStarting {
    dirIndex: number;
}
declare const CMsgGCToGCSubGCStarting: MessageFns$9<CMsgGCToGCSubGCStarting>;
interface CGCToGCMsgMasterAck {
    dirIndex: number;
    machineName: string;
    processName: string;
    directory: CGCToGCMsgMasterAck_Process[];
}
declare const CGCToGCMsgMasterAck: MessageFns$9<CGCToGCMsgMasterAck>;
interface CGCToGCMsgMasterAck_Process {
    dirIndex: number;
    typeInstances: number[];
}
declare const CGCToGCMsgMasterAck_Process: MessageFns$9<CGCToGCMsgMasterAck_Process>;
interface CGCToGCMsgMasterAckResponse {
    eresult: number;
}
declare const CGCToGCMsgMasterAckResponse: MessageFns$9<CGCToGCMsgMasterAckResponse>;
interface CMsgGCToGCUniverseStartup {
    isInitialStartup: boolean;
}
declare const CMsgGCToGCUniverseStartup: MessageFns$9<CMsgGCToGCUniverseStartup>;
interface CMsgGCToGCUniverseStartupResponse {
    eresult: number;
}
declare const CMsgGCToGCUniverseStartupResponse: MessageFns$9<CMsgGCToGCUniverseStartupResponse>;
interface CGCToGCMsgMasterStartupComplete {
    gcInfo: CGCToGCMsgMasterStartupComplete_GCInfo[];
}
declare const CGCToGCMsgMasterStartupComplete: MessageFns$9<CGCToGCMsgMasterStartupComplete>;
interface CGCToGCMsgMasterStartupComplete_GCInfo {
    dirIndex: number;
    machineName: string;
}
declare const CGCToGCMsgMasterStartupComplete_GCInfo: MessageFns$9<CGCToGCMsgMasterStartupComplete_GCInfo>;
interface CGCToGCMsgRouted {
    msgType: number;
    senderId: string;
    netMessage: Buffer;
}
declare const CGCToGCMsgRouted: MessageFns$9<CGCToGCMsgRouted>;
interface CGCToGCMsgRoutedReply {
    msgType: number;
    netMessage: Buffer;
}
declare const CGCToGCMsgRoutedReply: MessageFns$9<CGCToGCMsgRoutedReply>;
interface CMsgGCUpdateSubGCSessionInfo {
    updates: CMsgGCUpdateSubGCSessionInfo_CMsgUpdate[];
}
declare const CMsgGCUpdateSubGCSessionInfo: MessageFns$9<CMsgGCUpdateSubGCSessionInfo>;
interface CMsgGCUpdateSubGCSessionInfo_CMsgUpdate {
    steamid: string;
    ip: number;
    trusted: boolean;
}
declare const CMsgGCUpdateSubGCSessionInfo_CMsgUpdate: MessageFns$9<CMsgGCUpdateSubGCSessionInfo_CMsgUpdate>;
interface CMsgGCRequestSubGCSessionInfo {
    steamid: string;
}
declare const CMsgGCRequestSubGCSessionInfo: MessageFns$9<CMsgGCRequestSubGCSessionInfo>;
interface CMsgGCRequestSubGCSessionInfoResponse {
    ip: number;
    trusted: boolean;
    port: number;
    success: boolean;
}
declare const CMsgGCRequestSubGCSessionInfoResponse: MessageFns$9<CMsgGCRequestSubGCSessionInfoResponse>;
interface CMsgSOCacheHaveVersion {
    soid: CMsgSOIDOwner | undefined;
    version: string;
    serviceId: number;
    cachedFileVersion: number;
}
declare const CMsgSOCacheHaveVersion: MessageFns$9<CMsgSOCacheHaveVersion>;
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
declare const CMsgClientHello: MessageFns$9<CMsgClientHello>;
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
declare const CMsgClientWelcome: MessageFns$9<CMsgClientWelcome>;
interface CMsgClientWelcome_Location {
    latitude: number;
    longitude: number;
    country: string;
}
declare const CMsgClientWelcome_Location: MessageFns$9<CMsgClientWelcome_Location>;
interface CMsgConnectionStatus {
    status: GCConnectionStatus;
    clientSessionNeed: number;
    queuePosition: number;
    queueSize: number;
    waitSeconds: number;
    estimatedWaitSecondsRemaining: number;
}
declare const CMsgConnectionStatus: MessageFns$9<CMsgConnectionStatus>;
interface CMsgGCToGCSOCacheSubscribe {
    subscriber: string;
    subscribeToId: string;
    syncVersion: string;
    haveVersions: CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions[];
    subscribeToType: number;
}
declare const CMsgGCToGCSOCacheSubscribe: MessageFns$9<CMsgGCToGCSOCacheSubscribe>;
interface CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions {
    serviceId: number;
    version: string;
}
declare const CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions: MessageFns$9<CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions>;
interface CMsgGCToGCSOCacheUnsubscribe {
    subscriber: string;
    unsubscribeFromId: string;
    unsubscribeFromType: number;
}
declare const CMsgGCToGCSOCacheUnsubscribe: MessageFns$9<CMsgGCToGCSOCacheUnsubscribe>;
interface CMsgGCClientPing {
}
declare const CMsgGCClientPing: MessageFns$9<CMsgGCClientPing>;
interface CMsgGCToGCForwardAccountDetails {
    steamid: string;
    accountDetails: CGCSystemMsgGetAccountDetailsResponse | undefined;
    ageSeconds: number;
}
declare const CMsgGCToGCForwardAccountDetails: MessageFns$9<CMsgGCToGCForwardAccountDetails>;
interface CMsgGCToGCLoadSessionSOCache {
    accountId: number;
    forwardAccountDetails: CMsgGCToGCForwardAccountDetails | undefined;
}
declare const CMsgGCToGCLoadSessionSOCache: MessageFns$9<CMsgGCToGCLoadSessionSOCache>;
interface CMsgGCToGCLoadSessionSOCacheResponse {
}
declare const CMsgGCToGCLoadSessionSOCacheResponse: MessageFns$9<CMsgGCToGCLoadSessionSOCacheResponse>;
interface CMsgGCToGCUpdateSessionStats {
    userSessions: number;
    serverSessions: number;
    inLogonSurge: boolean;
}
declare const CMsgGCToGCUpdateSessionStats: MessageFns$9<CMsgGCToGCUpdateSessionStats>;
interface CMsgGCToClientRequestDropped {
}
declare const CMsgGCToClientRequestDropped: MessageFns$9<CMsgGCToClientRequestDropped>;
interface CWorkshopPopulateItemDescriptionsRequest {
    appid: number;
    languages: CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock[];
}
declare const CWorkshopPopulateItemDescriptionsRequest: MessageFns$9<CWorkshopPopulateItemDescriptionsRequest>;
interface CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription {
    gameitemid: number;
    itemDescription: string;
}
declare const CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription: MessageFns$9<CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription>;
interface CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock {
    language: string;
    descriptions: CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription[];
}
declare const CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock: MessageFns$9<CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock>;
interface CWorkshopGetContributorsRequest {
    appid: number;
    gameitemid: number;
}
declare const CWorkshopGetContributorsRequest: MessageFns$9<CWorkshopGetContributorsRequest>;
interface CWorkshopGetContributorsResponse {
    contributors: string[];
}
declare const CWorkshopGetContributorsResponse: MessageFns$9<CWorkshopGetContributorsResponse>;
interface CWorkshopSetItemPaymentRulesRequest {
    appid: number;
    gameitemid: number;
    associatedWorkshopFiles: CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule[];
    partnerAccounts: CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule[];
    validateOnly: boolean;
    makeWorkshopFilesSubscribable: boolean;
    associatedWorkshopFileForDirectPayments: CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule | undefined;
}
declare const CWorkshopSetItemPaymentRulesRequest: MessageFns$9<CWorkshopSetItemPaymentRulesRequest>;
interface CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule {
    workshopFileId: string;
    revenuePercentage: number;
    ruleDescription: string;
    ruleType: number;
}
declare const CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule: MessageFns$9<CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule>;
interface CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule {
    workshopFileId: string;
    ruleDescription: string;
}
declare const CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule: MessageFns$9<CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule>;
interface CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule {
    accountId: number;
    revenuePercentage: number;
    ruleDescription: string;
}
declare const CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule: MessageFns$9<CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule>;
interface CWorkshopSetItemPaymentRulesResponse {
    validationErrors: string[];
}
declare const CWorkshopSetItemPaymentRulesResponse: MessageFns$9<CWorkshopSetItemPaymentRulesResponse>;
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
declare const CCommunityClanAnnouncementInfo: MessageFns$9<CCommunityClanAnnouncementInfo>;
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
declare const CCommunityGetClanAnnouncementsRequest: MessageFns$9<CCommunityGetClanAnnouncementsRequest>;
interface CCommunityGetClanAnnouncementsResponse {
    maxchars: number;
    stripHtml: boolean;
    announcements: CCommunityClanAnnouncementInfo[];
}
declare const CCommunityGetClanAnnouncementsResponse: MessageFns$9<CCommunityGetClanAnnouncementsResponse>;
interface CBroadcastPostGameDataFrameRequest {
    appid: number;
    steamid: string;
    broadcastId: string;
    frameData: Buffer;
}
declare const CBroadcastPostGameDataFrameRequest: MessageFns$9<CBroadcastPostGameDataFrameRequest>;
interface CMsgSerializedSOCache {
    fileVersion: number;
    caches: CMsgSerializedSOCache_Cache[];
    gcSocacheFileVersion: number;
}
declare const CMsgSerializedSOCache: MessageFns$9<CMsgSerializedSOCache>;
interface CMsgSerializedSOCache_TypeCache {
    type: number;
    objects: Buffer[];
    serviceId: number;
}
declare const CMsgSerializedSOCache_TypeCache: MessageFns$9<CMsgSerializedSOCache_TypeCache>;
interface CMsgSerializedSOCache_Cache {
    type: number;
    id: string;
    versions: CMsgSerializedSOCache_Cache_Version[];
    typeCaches: CMsgSerializedSOCache_TypeCache[];
}
declare const CMsgSerializedSOCache_Cache: MessageFns$9<CMsgSerializedSOCache_Cache>;
interface CMsgSerializedSOCache_Cache_Version {
    service: number;
    version: string;
}
declare const CMsgSerializedSOCache_Cache_Version: MessageFns$9<CMsgSerializedSOCache_Cache_Version>;
interface CMsgGCToClientPollConvarRequest {
    convarName: string;
    pollId: number;
}
declare const CMsgGCToClientPollConvarRequest: MessageFns$9<CMsgGCToClientPollConvarRequest>;
interface CMsgGCToClientPollConvarResponse {
    pollId: number;
    convarValue: string;
}
declare const CMsgGCToClientPollConvarResponse: MessageFns$9<CMsgGCToClientPollConvarResponse>;
interface CGCMsgCompressedMsgToClient {
    msgId: number;
    compressedMsg: Buffer;
}
declare const CGCMsgCompressedMsgToClient: MessageFns$9<CGCMsgCompressedMsgToClient>;
interface CMsgGCToGCMasterBroadcastMessage {
    usersPerSecond: number;
    sendToUsers: boolean;
    sendToServers: boolean;
    msgId: number;
    msgData: Buffer;
}
declare const CMsgGCToGCMasterBroadcastMessage: MessageFns$9<CMsgGCToGCMasterBroadcastMessage>;
interface CMsgGCToGCMasterSubscribeToCache {
    soidType: number;
    soidId: string;
    accountIds: number[];
    steamIds: string[];
}
declare const CMsgGCToGCMasterSubscribeToCache: MessageFns$9<CMsgGCToGCMasterSubscribeToCache>;
interface CMsgGCToGCMasterSubscribeToCacheResponse {
}
declare const CMsgGCToGCMasterSubscribeToCacheResponse: MessageFns$9<CMsgGCToGCMasterSubscribeToCacheResponse>;
interface CMsgGCToGCMasterSubscribeToCacheAsync {
    subscribeMsg: CMsgGCToGCMasterSubscribeToCache | undefined;
}
declare const CMsgGCToGCMasterSubscribeToCacheAsync: MessageFns$9<CMsgGCToGCMasterSubscribeToCacheAsync>;
interface CMsgGCToGCMasterUnsubscribeFromCache {
    soidType: number;
    soidId: string;
    accountIds: number[];
    steamIds: string[];
}
declare const CMsgGCToGCMasterUnsubscribeFromCache: MessageFns$9<CMsgGCToGCMasterUnsubscribeFromCache>;
interface CMsgGCToGCMasterDestroyCache {
    soidType: number;
    soidId: string;
}
declare const CMsgGCToGCMasterDestroyCache: MessageFns$9<CMsgGCToGCMasterDestroyCache>;
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
declare const CGCStorePurchaseInitLineItem: MessageFns$8<CGCStorePurchaseInitLineItem>;
interface CMsgGCStorePurchaseInit {
    country: string;
    language: number;
    currency: number;
    lineItems: CGCStorePurchaseInitLineItem[];
}
declare const CMsgGCStorePurchaseInit: MessageFns$8<CMsgGCStorePurchaseInit>;
interface CMsgGCStorePurchaseInitResponse {
    result: number;
    txnId: string;
}
declare const CMsgGCStorePurchaseInitResponse: MessageFns$8<CMsgGCStorePurchaseInitResponse>;
interface CMsgClientPingData {
    relayCodes: number[];
    relayPings: number[];
    regionCodes: number[];
    regionPings: number[];
    regionPingFailedBitmask: number;
}
declare const CMsgClientPingData: MessageFns$8<CMsgClientPingData>;
interface CMsgInviteToParty {
    steamId: string;
    clientVersion: number;
    teamId: number;
    asCoach: boolean;
    pingData: CMsgClientPingData | undefined;
}
declare const CMsgInviteToParty: MessageFns$8<CMsgInviteToParty>;
interface CMsgInviteToLobby {
    steamId: string;
    clientVersion: number;
}
declare const CMsgInviteToLobby: MessageFns$8<CMsgInviteToLobby>;
interface CMsgInvitationCreated {
    groupId: string;
    steamId: string;
    userOffline: boolean;
}
declare const CMsgInvitationCreated: MessageFns$8<CMsgInvitationCreated>;
interface CMsgPartyInviteResponse {
    partyId: string;
    accept: boolean;
    clientVersion: number;
    pingData: CMsgClientPingData | undefined;
}
declare const CMsgPartyInviteResponse: MessageFns$8<CMsgPartyInviteResponse>;
interface CMsgLobbyInviteResponse {
    lobbyId: string;
    accept: boolean;
    clientVersion: number;
    customGameCrc: string;
    customGameTimestamp: number;
}
declare const CMsgLobbyInviteResponse: MessageFns$8<CMsgLobbyInviteResponse>;
interface CMsgKickFromParty {
    steamId: string;
}
declare const CMsgKickFromParty: MessageFns$8<CMsgKickFromParty>;
interface CMsgLeaveParty {
}
declare const CMsgLeaveParty: MessageFns$8<CMsgLeaveParty>;
interface CMsgCustomGameInstallStatus {
    status: ECustomGameInstallStatus;
    message: string;
    latestTimestampFromSteam: number;
}
declare const CMsgCustomGameInstallStatus: MessageFns$8<CMsgCustomGameInstallStatus>;
interface CMsgServerAvailable {
    customGameInstallStatus: CMsgCustomGameInstallStatus | undefined;
}
declare const CMsgServerAvailable: MessageFns$8<CMsgServerAvailable>;
interface CMsgLANServerAvailable {
    lobbyId: string;
}
declare const CMsgLANServerAvailable: MessageFns$8<CMsgLANServerAvailable>;
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
declare const CSOEconGameAccountClient: MessageFns$8<CSOEconGameAccountClient>;
interface CMsgApplyStrangePart {
    strangePartItemId: string;
    itemItemId: string;
}
declare const CMsgApplyStrangePart: MessageFns$8<CMsgApplyStrangePart>;
interface CMsgApplyPennantUpgrade {
    upgradeItemId: string;
    pennantItemId: string;
}
declare const CMsgApplyPennantUpgrade: MessageFns$8<CMsgApplyPennantUpgrade>;
interface CMsgApplyEggEssence {
    essenceItemId: string;
    eggItemId: string;
}
declare const CMsgApplyEggEssence: MessageFns$8<CMsgApplyEggEssence>;
interface CSOEconItemAttribute {
    defIndex: number;
    value: number;
    valueBytes: Buffer;
}
declare const CSOEconItemAttribute: MessageFns$8<CSOEconItemAttribute>;
interface CSOEconItemEquipped {
    newClass: number;
    newSlot: number;
}
declare const CSOEconItemEquipped: MessageFns$8<CSOEconItemEquipped>;
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
declare const CSOEconItem: MessageFns$8<CSOEconItem>;
interface CMsgSortItems {
    sortType: number;
}
declare const CMsgSortItems: MessageFns$8<CMsgSortItems>;
interface CMsgItemAcknowledged {
    accountId: number;
    inventory: number;
    defIndex: number;
    quality: number;
    rarity: number;
    origin: number;
}
declare const CMsgItemAcknowledged: MessageFns$8<CMsgItemAcknowledged>;
interface CMsgSetItemPositions {
    itemPositions: CMsgSetItemPositions_ItemPosition[];
}
declare const CMsgSetItemPositions: MessageFns$8<CMsgSetItemPositions>;
interface CMsgSetItemPositions_ItemPosition {
    itemId: string;
    position: number;
}
declare const CMsgSetItemPositions_ItemPosition: MessageFns$8<CMsgSetItemPositions_ItemPosition>;
interface CMsgGCStorePurchaseCancel {
    txnId: string;
}
declare const CMsgGCStorePurchaseCancel: MessageFns$8<CMsgGCStorePurchaseCancel>;
interface CMsgGCStorePurchaseCancelResponse {
    result: number;
}
declare const CMsgGCStorePurchaseCancelResponse: MessageFns$8<CMsgGCStorePurchaseCancelResponse>;
interface CMsgGCStorePurchaseFinalize {
    txnId: string;
}
declare const CMsgGCStorePurchaseFinalize: MessageFns$8<CMsgGCStorePurchaseFinalize>;
interface CMsgGCStorePurchaseFinalizeResponse {
    result: number;
    itemIds: string[];
}
declare const CMsgGCStorePurchaseFinalizeResponse: MessageFns$8<CMsgGCStorePurchaseFinalizeResponse>;
interface CMsgGCToGCBannedWordListUpdated {
    groupId: number;
}
declare const CMsgGCToGCBannedWordListUpdated: MessageFns$8<CMsgGCToGCBannedWordListUpdated>;
interface CMsgGCToGCDirtySDOCache {
    sdoType: number;
    keyUint64: string;
}
declare const CMsgGCToGCDirtySDOCache: MessageFns$8<CMsgGCToGCDirtySDOCache>;
interface CMsgSDONoMemcached {
}
declare const CMsgSDONoMemcached: MessageFns$8<CMsgSDONoMemcached>;
interface CMsgGCToGCUpdateSQLKeyValue {
    keyName: string;
}
declare const CMsgGCToGCUpdateSQLKeyValue: MessageFns$8<CMsgGCToGCUpdateSQLKeyValue>;
interface CMsgGCServerVersionUpdated {
    serverVersion: number;
}
declare const CMsgGCServerVersionUpdated: MessageFns$8<CMsgGCServerVersionUpdated>;
interface CMsgGCClientVersionUpdated {
    clientVersion: number;
}
declare const CMsgGCClientVersionUpdated: MessageFns$8<CMsgGCClientVersionUpdated>;
interface CMsgGCToGCWebAPIAccountChanged {
}
declare const CMsgGCToGCWebAPIAccountChanged: MessageFns$8<CMsgGCToGCWebAPIAccountChanged>;
interface CMsgExtractGems {
    toolItemId: string;
    itemItemId: string;
    itemSocketId: number;
}
declare const CMsgExtractGems: MessageFns$8<CMsgExtractGems>;
interface CMsgExtractGemsResponse {
    itemId: string;
    response: CMsgExtractGemsResponse_EExtractGems;
}
declare const CMsgExtractGemsResponse: MessageFns$8<CMsgExtractGemsResponse>;
interface CMsgAddSocket {
    toolItemId: string;
    itemItemId: string;
    unusual: boolean;
}
declare const CMsgAddSocket: MessageFns$8<CMsgAddSocket>;
interface CMsgAddSocketResponse {
    itemId: string;
    updatedSocketIndex: number[];
    response: CMsgAddSocketResponse_EAddSocket;
}
declare const CMsgAddSocketResponse: MessageFns$8<CMsgAddSocketResponse>;
interface CMsgAddItemToSocketData {
    gemItemId: string;
    socketIndex: number;
}
declare const CMsgAddItemToSocketData: MessageFns$8<CMsgAddItemToSocketData>;
interface CMsgAddItemToSocket {
    itemItemId: string;
    gemsToSocket: CMsgAddItemToSocketData[];
}
declare const CMsgAddItemToSocket: MessageFns$8<CMsgAddItemToSocket>;
interface CMsgAddItemToSocketResponse {
    itemItemId: string;
    updatedSocketIndex: number[];
    response: CMsgAddItemToSocketResponse_EAddGem;
}
declare const CMsgAddItemToSocketResponse: MessageFns$8<CMsgAddItemToSocketResponse>;
interface CMsgResetStrangeGemCount {
    itemItemId: string;
    socketIndex: number;
}
declare const CMsgResetStrangeGemCount: MessageFns$8<CMsgResetStrangeGemCount>;
interface CMsgResetStrangeGemCountResponse {
    response: CMsgResetStrangeGemCountResponse_EResetGem;
}
declare const CMsgResetStrangeGemCountResponse: MessageFns$8<CMsgResetStrangeGemCountResponse>;
interface CMsgGCToClientPollFileRequest {
    fileName: string;
    clientVersion: number;
    pollId: number;
}
declare const CMsgGCToClientPollFileRequest: MessageFns$8<CMsgGCToClientPollFileRequest>;
interface CMsgGCToClientPollFileResponse {
    pollId: number;
    fileSize: number;
    fileCrc: number;
}
declare const CMsgGCToClientPollFileResponse: MessageFns$8<CMsgGCToClientPollFileResponse>;
interface CMsgGCToGCPerformManualOp {
    opId: string;
    groupCode: number;
}
declare const CMsgGCToGCPerformManualOp: MessageFns$8<CMsgGCToGCPerformManualOp>;
interface CMsgGCToGCPerformManualOpCompleted {
    success: boolean;
    sourceGc: number;
}
declare const CMsgGCToGCPerformManualOpCompleted: MessageFns$8<CMsgGCToGCPerformManualOpCompleted>;
interface CMsgGCToGCReloadServerRegionSettings {
}
declare const CMsgGCToGCReloadServerRegionSettings: MessageFns$8<CMsgGCToGCReloadServerRegionSettings>;
interface CMsgGCAdditionalWelcomeMsgList {
    welcomeMessages: CExtraMsgBlock[];
}
declare const CMsgGCAdditionalWelcomeMsgList: MessageFns$8<CMsgGCAdditionalWelcomeMsgList>;
interface CMsgApplyRemoteConVars {
    conVars: CMsgApplyRemoteConVars_ConVar[];
}
declare const CMsgApplyRemoteConVars: MessageFns$8<CMsgApplyRemoteConVars>;
interface CMsgApplyRemoteConVars_ConVar {
    name: string;
    value: string;
    versionMin: number;
    versionMax: number;
    platform: EGCPlatform;
}
declare const CMsgApplyRemoteConVars_ConVar: MessageFns$8<CMsgApplyRemoteConVars_ConVar>;
interface CMsgGCToClientApplyRemoteConVars {
    msg: CMsgApplyRemoteConVars | undefined;
}
declare const CMsgGCToClientApplyRemoteConVars: MessageFns$8<CMsgGCToClientApplyRemoteConVars>;
interface CMsgGCToServerApplyRemoteConVars {
    msg: CMsgApplyRemoteConVars | undefined;
}
declare const CMsgGCToServerApplyRemoteConVars: MessageFns$8<CMsgGCToServerApplyRemoteConVars>;
interface CMsgClientToGCIntegrityStatus {
    report: string;
    secureAllowed: boolean;
    diagnostics: CMsgClientToGCIntegrityStatus_keyvalue[];
}
declare const CMsgClientToGCIntegrityStatus: MessageFns$8<CMsgClientToGCIntegrityStatus>;
interface CMsgClientToGCIntegrityStatus_keyvalue {
    id: number;
    extended: number;
    value: string;
    stringValue: string;
}
declare const CMsgClientToGCIntegrityStatus_keyvalue: MessageFns$8<CMsgClientToGCIntegrityStatus_keyvalue>;
interface CMsgClientToGCAggregateMetrics {
    metrics: CMsgClientToGCAggregateMetrics_SingleMetric[];
}
declare const CMsgClientToGCAggregateMetrics: MessageFns$8<CMsgClientToGCAggregateMetrics>;
interface CMsgClientToGCAggregateMetrics_SingleMetric {
    metricName: string;
    metricCount: number;
}
declare const CMsgClientToGCAggregateMetrics_SingleMetric: MessageFns$8<CMsgClientToGCAggregateMetrics_SingleMetric>;
interface CMsgGCToClientAggregateMetricsBackoff {
    uploadRateModifier: number;
}
declare const CMsgGCToClientAggregateMetricsBackoff: MessageFns$8<CMsgGCToClientAggregateMetricsBackoff>;
interface CMsgGCToServerSteamLearnAccessTokensChanged {
    accessTokens: CMsgSteamLearnAccessTokens | undefined;
}
declare const CMsgGCToServerSteamLearnAccessTokensChanged: MessageFns$8<CMsgGCToServerSteamLearnAccessTokensChanged>;
interface CMsgGCToServerSteamLearnUseHTTP {
    useHttp: boolean;
}
declare const CMsgGCToServerSteamLearnUseHTTP: MessageFns$8<CMsgGCToServerSteamLearnUseHTTP>;
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
declare const CSODOTAPartyMember: MessageFns$7<CSODOTAPartyMember>;
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
declare const CSODOTAParty: MessageFns$7<CSODOTAParty>;
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
declare const CSODOTAPartyInvite: MessageFns$7<CSODOTAPartyInvite>;
interface CSODOTAPartyInvite_PartyMember {
    name: string;
    steamId: string;
    isCoach: boolean;
}
declare const CSODOTAPartyInvite_PartyMember: MessageFns$7<CSODOTAPartyInvite_PartyMember>;
interface CMsgLeaverState {
    lobbyState: number;
    gameState: DOTAGameState;
    leaverDetected: boolean;
    firstBloodHappened: boolean;
    discardMatchResults: boolean;
    massDisconnect: boolean;
}
declare const CMsgLeaverState: MessageFns$7<CMsgLeaverState>;
interface CMsgReadyCheckStatus {
    startTimestamp: number;
    finishTimestamp: number;
    initiatorAccountId: number;
    readyMembers: CMsgReadyCheckStatus_ReadyMember[];
}
declare const CMsgReadyCheckStatus: MessageFns$7<CMsgReadyCheckStatus>;
interface CMsgReadyCheckStatus_ReadyMember {
    accountId: number;
    readyStatus: EReadyCheckStatus;
}
declare const CMsgReadyCheckStatus_ReadyMember: MessageFns$7<CMsgReadyCheckStatus_ReadyMember>;
interface CMsgPartyReadyCheckRequest {
}
declare const CMsgPartyReadyCheckRequest: MessageFns$7<CMsgPartyReadyCheckRequest>;
interface CMsgPartyReadyCheckResponse {
    result: EReadyCheckRequestResult;
}
declare const CMsgPartyReadyCheckResponse: MessageFns$7<CMsgPartyReadyCheckResponse>;
interface CMsgPartyReadyCheckAcknowledge {
    readyStatus: EReadyCheckStatus;
}
declare const CMsgPartyReadyCheckAcknowledge: MessageFns$7<CMsgPartyReadyCheckAcknowledge>;
interface CMsgLobbyEventGameDetails {
    kvData: Buffer;
}
declare const CMsgLobbyEventGameDetails: MessageFns$7<CMsgLobbyEventGameDetails>;
interface CMsgMatchMatchmakingStats {
    averageQueueTime: number;
    maximumQueueTime: number;
    behaviorScoreVariance: EMatchBehaviorScoreVariance;
}
declare const CMsgMatchMatchmakingStats: MessageFns$7<CMsgMatchMatchmakingStats>;
interface CMvpData {
    mvps: CMvpData_MvpDatum[];
    eventMvps: CMvpData_MvpDatum[];
}
declare const CMvpData: MessageFns$7<CMvpData>;
interface CMvpData_MvpDatum {
    playerSlot: number;
    accolades: CMvpData_MvpDatum_MvpAccolade[];
}
declare const CMvpData_MvpDatum: MessageFns$7<CMvpData_MvpDatum>;
interface CMvpData_MvpDatum_MvpAccolade {
    type: CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType;
    detailValue: number;
}
declare const CMvpData_MvpDatum_MvpAccolade: MessageFns$7<CMvpData_MvpDatum_MvpAccolade>;
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
declare const CMsgLobbyCoachFriendRequest: MessageFns$6<CMsgLobbyCoachFriendRequest>;
interface CMsgLobbyPlayerPlusSubscriptionData {
    heroBadges: CMsgLobbyPlayerPlusSubscriptionData_HeroBadge[];
}
declare const CMsgLobbyPlayerPlusSubscriptionData: MessageFns$6<CMsgLobbyPlayerPlusSubscriptionData>;
interface CMsgLobbyPlayerPlusSubscriptionData_HeroBadge {
    heroId: number;
    heroBadgeXp: number;
}
declare const CMsgLobbyPlayerPlusSubscriptionData_HeroBadge: MessageFns$6<CMsgLobbyPlayerPlusSubscriptionData_HeroBadge>;
interface CMsgEventActionData {
    actionId: number;
    actionScore: number;
}
declare const CMsgEventActionData: MessageFns$6<CMsgEventActionData>;
interface CMsgPeriodicResourceData {
    periodicResourceId: number;
    remaining: number;
    max: number;
}
declare const CMsgPeriodicResourceData: MessageFns$6<CMsgPeriodicResourceData>;
interface CMsgLobbyEventPoints {
    eventId: number;
    accountPoints: CMsgLobbyEventPoints_AccountPoints[];
}
declare const CMsgLobbyEventPoints: MessageFns$6<CMsgLobbyEventPoints>;
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
declare const CMsgLobbyEventPoints_AccountPoints: MessageFns$6<CMsgLobbyEventPoints_AccountPoints>;
interface CMsgLobbyEventGameData {
    gameSeed: number;
    eventWindowStartTime: number;
}
declare const CMsgLobbyEventGameData: MessageFns$6<CMsgLobbyEventGameData>;
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
declare const CSODOTALobbyInvite: MessageFns$6<CSODOTALobbyInvite>;
interface CSODOTALobbyInvite_LobbyMember {
    name: string;
    steamId: string;
}
declare const CSODOTALobbyInvite_LobbyMember: MessageFns$6<CSODOTALobbyInvite_LobbyMember>;
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
declare const CSODOTALobbyMember: MessageFns$6<CSODOTALobbyMember>;
interface CSODOTAServerLobbyMember {
}
declare const CSODOTAServerLobbyMember: MessageFns$6<CSODOTAServerLobbyMember>;
interface CSODOTAStaticLobbyMember {
    name: string;
    partyId: string;
    channel: number;
    cameraman: boolean;
}
declare const CSODOTAStaticLobbyMember: MessageFns$6<CSODOTAStaticLobbyMember>;
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
declare const CSODOTAServerStaticLobbyMember: MessageFns$6<CSODOTAServerStaticLobbyMember>;
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
declare const CLobbyTeamDetails: MessageFns$6<CLobbyTeamDetails>;
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
declare const CLobbyGuildDetails: MessageFns$6<CLobbyGuildDetails>;
interface CLobbyTimedRewardDetails {
    itemDefIndex: number;
    isSupplyCrate: boolean;
    isTimedDrop: boolean;
    accountId: number;
    origin: number;
}
declare const CLobbyTimedRewardDetails: MessageFns$6<CLobbyTimedRewardDetails>;
interface CLobbyBroadcastChannelInfo {
    channelId: number;
    countryCode: string;
    description: string;
    languageCode: string;
}
declare const CLobbyBroadcastChannelInfo: MessageFns$6<CLobbyBroadcastChannelInfo>;
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
declare const CLobbyGuildChallenge: MessageFns$6<CLobbyGuildChallenge>;
interface CDOTALobbyMatchQualityData {
    overallQuality: number;
    teamBalance: number;
    matchSkillRange: number;
    matchBehavior: number;
}
declare const CDOTALobbyMatchQualityData: MessageFns$6<CDOTALobbyMatchQualityData>;
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
declare const CSODOTALobby: MessageFns$6<CSODOTALobby>;
interface CSODOTALobby_CExtraMsg {
    id: number;
    contents: Buffer;
}
declare const CSODOTALobby_CExtraMsg: MessageFns$6<CSODOTALobby_CExtraMsg>;
interface CSODOTAServerLobby {
    allMembers: CSODOTAServerLobbyMember[];
    extraStartupMessages: CSODOTALobby_CExtraMsg[];
}
declare const CSODOTAServerLobby: MessageFns$6<CSODOTAServerLobby>;
interface CSODOTAStaticLobby {
    allMembers: CSODOTAStaticLobbyMember[];
    isPlayerDraft: boolean;
    isLastMatchInSeries: boolean;
}
declare const CSODOTAStaticLobby: MessageFns$6<CSODOTAStaticLobby>;
interface CSODOTAServerStaticLobby {
    allMembers: CSODOTAServerStaticLobbyMember[];
    postPatchStrategyTimeBuffer: number;
    lobbyEventPoints: CMsgLobbyEventPoints[];
}
declare const CSODOTAServerStaticLobby: MessageFns$6<CSODOTAServerStaticLobby>;
interface CMsgAdditionalLobbyStartupAccountData {
    accountId: number;
    plusData: CMsgLobbyPlayerPlusSubscriptionData | undefined;
    unlockedChatWheelMessageRanges: CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange[];
    unlockedPingWheelMessageRanges: CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange[];
}
declare const CMsgAdditionalLobbyStartupAccountData: MessageFns$6<CMsgAdditionalLobbyStartupAccountData>;
interface CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange {
    messageIdStart: number;
    messageIdEnd: number;
}
declare const CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange: MessageFns$6<CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange>;
interface CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange {
    messageIdStart: number;
    messageIdEnd: number;
}
declare const CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange: MessageFns$6<CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange>;
interface CMsgLobbyInitializationComplete {
}
declare const CMsgLobbyInitializationComplete: MessageFns$6<CMsgLobbyInitializationComplete>;
interface CMsgLobbyPlaytestDetails {
    json: string;
}
declare const CMsgLobbyPlaytestDetails: MessageFns$6<CMsgLobbyPlaytestDetails>;
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
declare const CMsgLocalServerGuildData: MessageFns$6<CMsgLocalServerGuildData>;
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
declare const CMsgLocalServerFakeLobbyData: MessageFns$6<CMsgLocalServerFakeLobbyData>;
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
declare const CMsgSurvivorsUserData: MessageFns$5<CMsgSurvivorsUserData>;
interface CMsgSurvivorsUserData_AttributeLevelsEntry {
    key: number;
    value: number;
}
declare const CMsgSurvivorsUserData_AttributeLevelsEntry: MessageFns$5<CMsgSurvivorsUserData_AttributeLevelsEntry>;
interface CMsgClientToGCSurvivorsPowerUpTelemetryData {
    powerupId: number;
    level: number;
    timeReceived: number;
    timeHeld: number;
    totalDamage: string;
    dps: number;
    hasScepter: number;
}
declare const CMsgClientToGCSurvivorsPowerUpTelemetryData: MessageFns$5<CMsgClientToGCSurvivorsPowerUpTelemetryData>;
interface CMsgClientToGCSurvivorsGameTelemetryData {
    timeSurvived: number;
    playerLevel: number;
    gameResult: number;
    goldEarned: number;
    powerups: CMsgClientToGCSurvivorsPowerUpTelemetryData[];
    difficulty: number;
    metaprogressionLevel: number;
}
declare const CMsgClientToGCSurvivorsGameTelemetryData: MessageFns$5<CMsgClientToGCSurvivorsGameTelemetryData>;
interface CMsgClientToGCSurvivorsGameTelemetryDataResponse {
    response: CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse;
}
declare const CMsgClientToGCSurvivorsGameTelemetryDataResponse: MessageFns$5<CMsgClientToGCSurvivorsGameTelemetryDataResponse>;
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
declare const CMsgOverworldTokenCount: MessageFns$4<CMsgOverworldTokenCount>;
interface CMsgOverworldTokenQuantity {
    tokenCounts: CMsgOverworldTokenCount[];
}
declare const CMsgOverworldTokenQuantity: MessageFns$4<CMsgOverworldTokenQuantity>;
interface CMsgOverworldEncounterTokenTreasureData {
    rewardOptions: CMsgOverworldEncounterTokenTreasureData_RewardOption[];
}
declare const CMsgOverworldEncounterTokenTreasureData: MessageFns$4<CMsgOverworldEncounterTokenTreasureData>;
interface CMsgOverworldEncounterTokenTreasureData_RewardOption {
    rewardData: number;
    tokenCost: CMsgOverworldTokenQuantity | undefined;
    tokenReward: CMsgOverworldTokenQuantity | undefined;
}
declare const CMsgOverworldEncounterTokenTreasureData_RewardOption: MessageFns$4<CMsgOverworldEncounterTokenTreasureData_RewardOption>;
interface CMsgOverworldEncounterTokenQuestData {
    quests: CMsgOverworldEncounterTokenQuestData_Quest[];
}
declare const CMsgOverworldEncounterTokenQuestData: MessageFns$4<CMsgOverworldEncounterTokenQuestData>;
interface CMsgOverworldEncounterTokenQuestData_Quest {
    rewardData: number;
    tokenCost: CMsgOverworldTokenQuantity | undefined;
    tokenReward: CMsgOverworldTokenQuantity | undefined;
}
declare const CMsgOverworldEncounterTokenQuestData_Quest: MessageFns$4<CMsgOverworldEncounterTokenQuestData_Quest>;
interface CMsgOverworldHeroList {
    heroIds: number[];
}
declare const CMsgOverworldHeroList: MessageFns$4<CMsgOverworldHeroList>;
interface CMsgOverworldEncounterChooseHeroData {
    heroList: CMsgOverworldHeroList | undefined;
    additive: boolean;
}
declare const CMsgOverworldEncounterChooseHeroData: MessageFns$4<CMsgOverworldEncounterChooseHeroData>;
interface CMsgOverworldEncounterProgressData {
    choice: number;
    progress: number;
    maxProgress: number;
    visited: boolean;
}
declare const CMsgOverworldEncounterProgressData: MessageFns$4<CMsgOverworldEncounterProgressData>;
interface CMsgOverworldEncounterData {
    extraEncounterData: CExtraMsgBlock[];
}
declare const CMsgOverworldEncounterData: MessageFns$4<CMsgOverworldEncounterData>;
interface CMsgOverworldNode {
    nodeId: number;
    nodeState: EOverworldNodeState;
    nodeEncounterData: CMsgOverworldEncounterData | undefined;
}
declare const CMsgOverworldNode: MessageFns$4<CMsgOverworldNode>;
interface CMsgOverworldPath {
    pathId: number;
    pathCost: CMsgOverworldTokenQuantity | undefined;
    pathState: EOverworldPathState;
}
declare const CMsgOverworldPath: MessageFns$4<CMsgOverworldPath>;
interface CMsgOverworldMinigameCustomData {
    survivorsData?: CMsgSurvivorsUserData | undefined;
}
declare const CMsgOverworldMinigameCustomData: MessageFns$4<CMsgOverworldMinigameCustomData>;
interface CMsgOverworldMinigameUserData {
    nodeId: number;
    currencyAmount: number;
    customData: CMsgOverworldMinigameCustomData | undefined;
}
declare const CMsgOverworldMinigameUserData: MessageFns$4<CMsgOverworldMinigameUserData>;
interface CMsgOverworldUserData {
    tokenInventory: CMsgOverworldTokenQuantity | undefined;
    overworldNodes: CMsgOverworldNode[];
    overworldPaths: CMsgOverworldPath[];
    currentNodeId: number;
    minigameData: CMsgOverworldUserData_MinigameDataEntry[];
}
declare const CMsgOverworldUserData: MessageFns$4<CMsgOverworldUserData>;
interface CMsgOverworldUserData_MinigameDataEntry {
    key: number;
    value: CMsgOverworldMinigameUserData | undefined;
}
declare const CMsgOverworldUserData_MinigameDataEntry: MessageFns$4<CMsgOverworldUserData_MinigameDataEntry>;
interface CMsgOverworldMatchRewards {
    players: CMsgOverworldMatchRewards_Player[];
}
declare const CMsgOverworldMatchRewards: MessageFns$4<CMsgOverworldMatchRewards>;
interface CMsgOverworldMatchRewards_Player {
    playerSlot: number;
    tokens: CMsgOverworldTokenQuantity | undefined;
    overworldId: number;
}
declare const CMsgOverworldMatchRewards_Player: MessageFns$4<CMsgOverworldMatchRewards_Player>;
interface CMsgClientToGCOverworldGetUserData {
    overworldId: number;
}
declare const CMsgClientToGCOverworldGetUserData: MessageFns$4<CMsgClientToGCOverworldGetUserData>;
interface CMsgClientToGCOverworldGetUserDataResponse {
    response: CMsgClientToGCOverworldGetUserDataResponse_EResponse;
    userData: CMsgOverworldUserData | undefined;
}
declare const CMsgClientToGCOverworldGetUserDataResponse: MessageFns$4<CMsgClientToGCOverworldGetUserDataResponse>;
interface CMsgGCToClientOverworldUserDataUpdated {
    overworldId: number;
    userData: CMsgOverworldUserData | undefined;
}
declare const CMsgGCToClientOverworldUserDataUpdated: MessageFns$4<CMsgGCToClientOverworldUserDataUpdated>;
interface CMsgClientToGCOverworldCompletePath {
    overworldId: number;
    pathId: number;
}
declare const CMsgClientToGCOverworldCompletePath: MessageFns$4<CMsgClientToGCOverworldCompletePath>;
interface CMsgClientToGCOverworldCompletePathResponse {
    response: CMsgClientToGCOverworldCompletePathResponse_EResponse;
    claimResponse: CMsgDOTAClaimEventActionResponse | undefined;
}
declare const CMsgClientToGCOverworldCompletePathResponse: MessageFns$4<CMsgClientToGCOverworldCompletePathResponse>;
interface CMsgOverworldEncounterPitFighterRewardData {
    tokenId: number;
    choice: number;
}
declare const CMsgOverworldEncounterPitFighterRewardData: MessageFns$4<CMsgOverworldEncounterPitFighterRewardData>;
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
declare const CMsgClientToGCOverworldClaimEncounterReward: MessageFns$4<CMsgClientToGCOverworldClaimEncounterReward>;
interface CMsgClientToGCOverworldClaimEncounterRewardResponse {
    response: CMsgClientToGCOverworldClaimEncounterRewardResponse_EResponse;
    claimResponse: CMsgDOTAClaimEventActionResponse | undefined;
    tokensReceived: CMsgOverworldTokenQuantity | undefined;
}
declare const CMsgClientToGCOverworldClaimEncounterRewardResponse: MessageFns$4<CMsgClientToGCOverworldClaimEncounterRewardResponse>;
interface CMsgClientToGCOverworldVisitEncounter {
    overworldId: number;
    nodeId: number;
}
declare const CMsgClientToGCOverworldVisitEncounter: MessageFns$4<CMsgClientToGCOverworldVisitEncounter>;
interface CMsgClientToGCOverworldVisitEncounterResponse {
    response: CMsgClientToGCOverworldVisitEncounterResponse_EResponse;
}
declare const CMsgClientToGCOverworldVisitEncounterResponse: MessageFns$4<CMsgClientToGCOverworldVisitEncounterResponse>;
interface CMsgClientToGCOverworldMoveToNode {
    overworldId: number;
    nodeId: number;
}
declare const CMsgClientToGCOverworldMoveToNode: MessageFns$4<CMsgClientToGCOverworldMoveToNode>;
interface CMsgClientToGCOverworldMoveToNodeResponse {
    response: CMsgClientToGCOverworldMoveToNodeResponse_EResponse;
}
declare const CMsgClientToGCOverworldMoveToNodeResponse: MessageFns$4<CMsgClientToGCOverworldMoveToNodeResponse>;
interface CMsgClientToGCOverworldTradeTokens {
    overworldId: number;
    tokenOffer: CMsgOverworldTokenQuantity | undefined;
    tokenRequest: CMsgOverworldTokenQuantity | undefined;
    recipe: number;
    encounterId: number;
}
declare const CMsgClientToGCOverworldTradeTokens: MessageFns$4<CMsgClientToGCOverworldTradeTokens>;
interface CMsgClientToGCOverworldTradeTokensResponse {
    response: CMsgClientToGCOverworldTradeTokensResponse_EResponse;
    tokensReceived: CMsgOverworldTokenQuantity | undefined;
}
declare const CMsgClientToGCOverworldTradeTokensResponse: MessageFns$4<CMsgClientToGCOverworldTradeTokensResponse>;
interface CMsgClientToGCOverworldGiftTokens {
    overworldId: number;
    tokenGift: CMsgOverworldTokenCount | undefined;
    recipientAccountId: number;
    periodicResourceId: number;
}
declare const CMsgClientToGCOverworldGiftTokens: MessageFns$4<CMsgClientToGCOverworldGiftTokens>;
interface CMsgClientToGCOverworldGiftTokensResponse {
    response: CMsgClientToGCOverworldGiftTokensResponse_EResponse;
}
declare const CMsgClientToGCOverworldGiftTokensResponse: MessageFns$4<CMsgClientToGCOverworldGiftTokensResponse>;
interface CMsgClientToGCOverworldRequestTokensNeededByFriend {
    friendAccountId: number;
    overworldId: number;
}
declare const CMsgClientToGCOverworldRequestTokensNeededByFriend: MessageFns$4<CMsgClientToGCOverworldRequestTokensNeededByFriend>;
interface CMsgClientToGCOverworldRequestTokensNeededByFriendResponse {
    response: CMsgClientToGCOverworldRequestTokensNeededByFriendResponse_EResponse;
    tokenQuantity: CMsgOverworldTokenQuantity | undefined;
}
declare const CMsgClientToGCOverworldRequestTokensNeededByFriendResponse: MessageFns$4<CMsgClientToGCOverworldRequestTokensNeededByFriendResponse>;
interface CMsgClientToGCOverworldDevResetAll {
    overworldId: number;
}
declare const CMsgClientToGCOverworldDevResetAll: MessageFns$4<CMsgClientToGCOverworldDevResetAll>;
interface CMsgClientToGCOverworldDevResetAllResponse {
    response: CMsgClientToGCOverworldDevResetAllResponse_EResponse;
}
declare const CMsgClientToGCOverworldDevResetAllResponse: MessageFns$4<CMsgClientToGCOverworldDevResetAllResponse>;
interface CMsgClientToGCOverworldDevResetNode {
    overworldId: number;
    nodeId: number;
}
declare const CMsgClientToGCOverworldDevResetNode: MessageFns$4<CMsgClientToGCOverworldDevResetNode>;
interface CMsgClientToGCOverworldDevResetNodeResponse {
    response: CMsgClientToGCOverworldDevResetNodeResponse_EResponse;
}
declare const CMsgClientToGCOverworldDevResetNodeResponse: MessageFns$4<CMsgClientToGCOverworldDevResetNodeResponse>;
interface CMsgClientToGCOverworldDevGrantTokens {
    overworldId: number;
    tokenQuantity: CMsgOverworldTokenQuantity | undefined;
}
declare const CMsgClientToGCOverworldDevGrantTokens: MessageFns$4<CMsgClientToGCOverworldDevGrantTokens>;
interface CMsgClientToGCOverworldDevGrantTokensResponse {
    response: CMsgClientToGCOverworldDevGrantTokensResponse_EResponse;
}
declare const CMsgClientToGCOverworldDevGrantTokensResponse: MessageFns$4<CMsgClientToGCOverworldDevGrantTokensResponse>;
interface CMsgClientToGCOverworldDevClearInventory {
    overworldId: number;
}
declare const CMsgClientToGCOverworldDevClearInventory: MessageFns$4<CMsgClientToGCOverworldDevClearInventory>;
interface CMsgClientToGCOverworldDevClearInventoryResponse {
    response: CMsgClientToGCOverworldDevClearInventoryResponse_EResponse;
}
declare const CMsgClientToGCOverworldDevClearInventoryResponse: MessageFns$4<CMsgClientToGCOverworldDevClearInventoryResponse>;
interface CMsgClientToGCOverworldFeedback {
    language: number;
    overworldId: number;
    feedback: string;
}
declare const CMsgClientToGCOverworldFeedback: MessageFns$4<CMsgClientToGCOverworldFeedback>;
interface CMsgClientToGCOverworldFeedbackResponse {
    response: CMsgClientToGCOverworldFeedbackResponse_EResponse;
}
declare const CMsgClientToGCOverworldFeedbackResponse: MessageFns$4<CMsgClientToGCOverworldFeedbackResponse>;
interface CMsgClientToGCOverworldGetDynamicImage {
    magic: number;
    imageId: number;
    language: number;
}
declare const CMsgClientToGCOverworldGetDynamicImage: MessageFns$4<CMsgClientToGCOverworldGetDynamicImage>;
interface CMsgClientToGCOverworldGetDynamicImageResponse {
    imageId: number;
    images: CMsgClientToGCOverworldGetDynamicImageResponse_Image[];
}
declare const CMsgClientToGCOverworldGetDynamicImageResponse: MessageFns$4<CMsgClientToGCOverworldGetDynamicImageResponse>;
interface CMsgClientToGCOverworldGetDynamicImageResponse_Image {
    width: number;
    height: number;
    format: CMsgClientToGCOverworldGetDynamicImageResponse_EDynamicImageFormat;
    imageBytes: Buffer;
}
declare const CMsgClientToGCOverworldGetDynamicImageResponse_Image: MessageFns$4<CMsgClientToGCOverworldGetDynamicImageResponse_Image>;
interface CMsgClientToGCOverworldMinigameAction {
    overworldId: number;
    nodeId: number;
    action: EOverworldMinigameAction;
    selection: number;
    optionValue: number;
    currencyAmount: number;
}
declare const CMsgClientToGCOverworldMinigameAction: MessageFns$4<CMsgClientToGCOverworldMinigameAction>;
interface CMsgClientToGCOverworldMinigameActionResponse {
    response: CMsgClientToGCOverworldMinigameActionResponse_EResponse;
}
declare const CMsgClientToGCOverworldMinigameActionResponse: MessageFns$4<CMsgClientToGCOverworldMinigameActionResponse>;
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
declare const CMsgGenericResult: MessageFns$3<CMsgGenericResult>;
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
declare const CMsgApplyAutograph: MessageFns$2<CMsgApplyAutograph>;
interface CMsgAdjustItemEquippedState {
    itemId: string;
    newClass: number;
    newSlot: number;
    styleIndex: number;
}
declare const CMsgAdjustItemEquippedState: MessageFns$2<CMsgAdjustItemEquippedState>;
interface CMsgEconPlayerStrangeCountAdjustment {
    accountId: number;
    strangeCountAdjustments: CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment[];
    turboMode: boolean;
}
declare const CMsgEconPlayerStrangeCountAdjustment: MessageFns$2<CMsgEconPlayerStrangeCountAdjustment>;
interface CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment {
    eventType: number;
    itemId: string;
    adjustment: number;
}
declare const CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment: MessageFns$2<CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment>;
interface CMsgCraftingResponse {
    itemIds: string[];
}
declare const CMsgCraftingResponse: MessageFns$2<CMsgCraftingResponse>;
interface CMsgGCRequestStoreSalesData {
    version: number;
    currency: number;
}
declare const CMsgGCRequestStoreSalesData: MessageFns$2<CMsgGCRequestStoreSalesData>;
interface CMsgGCRequestStoreSalesDataResponse {
    salePrice: CMsgGCRequestStoreSalesDataResponse_Price[];
    version: number;
    expirationTime: number;
}
declare const CMsgGCRequestStoreSalesDataResponse: MessageFns$2<CMsgGCRequestStoreSalesDataResponse>;
interface CMsgGCRequestStoreSalesDataResponse_Price {
    itemDef: number;
    price: number;
}
declare const CMsgGCRequestStoreSalesDataResponse_Price: MessageFns$2<CMsgGCRequestStoreSalesDataResponse_Price>;
interface CMsgGCRequestStoreSalesDataUpToDateResponse {
    version: number;
    expirationTime: number;
}
declare const CMsgGCRequestStoreSalesDataUpToDateResponse: MessageFns$2<CMsgGCRequestStoreSalesDataUpToDateResponse>;
interface CMsgGCToGCPingRequest {
}
declare const CMsgGCToGCPingRequest: MessageFns$2<CMsgGCToGCPingRequest>;
interface CMsgGCToGCPingResponse {
}
declare const CMsgGCToGCPingResponse: MessageFns$2<CMsgGCToGCPingResponse>;
interface CMsgGCToGCGetUserSessionServer {
    accountId: number;
}
declare const CMsgGCToGCGetUserSessionServer: MessageFns$2<CMsgGCToGCGetUserSessionServer>;
interface CMsgGCToGCGetUserSessionServerResponse {
    serverSteamId: string;
    isOnline: boolean;
}
declare const CMsgGCToGCGetUserSessionServerResponse: MessageFns$2<CMsgGCToGCGetUserSessionServerResponse>;
interface CMsgGCToGCGetUserServerMembers {
    accountId: number;
    maxSpectators: number;
}
declare const CMsgGCToGCGetUserServerMembers: MessageFns$2<CMsgGCToGCGetUserServerMembers>;
interface CMsgGCToGCGetUserServerMembersResponse {
    memberAccountId: number[];
}
declare const CMsgGCToGCGetUserServerMembersResponse: MessageFns$2<CMsgGCToGCGetUserServerMembersResponse>;
interface CMsgLookupMultipleAccountNames {
    accountids: number[];
}
declare const CMsgLookupMultipleAccountNames: MessageFns$2<CMsgLookupMultipleAccountNames>;
interface CMsgLookupMultipleAccountNamesResponse {
    accounts: CMsgLookupMultipleAccountNamesResponse_Account[];
}
declare const CMsgLookupMultipleAccountNamesResponse: MessageFns$2<CMsgLookupMultipleAccountNamesResponse>;
interface CMsgLookupMultipleAccountNamesResponse_Account {
    accountid: number;
    persona: string;
}
declare const CMsgLookupMultipleAccountNamesResponse_Account: MessageFns$2<CMsgLookupMultipleAccountNamesResponse_Account>;
interface CMsgRequestCrateItems {
    crateItemDef: number;
}
declare const CMsgRequestCrateItems: MessageFns$2<CMsgRequestCrateItems>;
interface CMsgRequestCrateItemsResponse {
    response: number;
    itemDefs: number[];
    peekItemDefs: number[];
    peekItems: CSOEconItem[];
}
declare const CMsgRequestCrateItemsResponse: MessageFns$2<CMsgRequestCrateItemsResponse>;
interface CMsgRequestCrateEscalationLevel {
    crateItemDef: number;
}
declare const CMsgRequestCrateEscalationLevel: MessageFns$2<CMsgRequestCrateEscalationLevel>;
interface CMsgRequestCrateEscalationLevelResponse {
    response: number;
    escalationLevel0: number;
    escalationLevel1: number;
    escalationLevel2: number;
    escalationLevel3: number;
}
declare const CMsgRequestCrateEscalationLevelResponse: MessageFns$2<CMsgRequestCrateEscalationLevelResponse>;
interface CMsgGCToGCCanUseDropRateBonus {
    accountId: number;
    dropRateBonus: number;
    boosterType: number;
    exclusiveItemDef: number;
    allowEqualRate: boolean;
}
declare const CMsgGCToGCCanUseDropRateBonus: MessageFns$2<CMsgGCToGCCanUseDropRateBonus>;
interface CMsgSQLAddDropRateBonus {
    accountId: number;
    itemId: string;
    itemDef: number;
    dropRateBonus: number;
    boosterType: number;
    secondsDuration: number;
    endTimeStamp: number;
}
declare const CMsgSQLAddDropRateBonus: MessageFns$2<CMsgSQLAddDropRateBonus>;
interface CMsgSQLUpgradeBattleBooster {
    accountId: number;
    itemDef: number;
    bonusToAdd: number;
    boosterType: number;
}
declare const CMsgSQLUpgradeBattleBooster: MessageFns$2<CMsgSQLUpgradeBattleBooster>;
interface CMsgGCToGCRefreshSOCache {
    accountId: number;
    reload: boolean;
}
declare const CMsgGCToGCRefreshSOCache: MessageFns$2<CMsgGCToGCRefreshSOCache>;
interface CMsgGCToGCAddSubscriptionTime {
    accountId: number;
    matchingSubscriptionDefIndexes: number[];
    additionalSeconds: number;
}
declare const CMsgGCToGCAddSubscriptionTime: MessageFns$2<CMsgGCToGCAddSubscriptionTime>;
interface CMsgGCToGCGrantAccountRolledItems {
    accountId: number;
    items: CMsgGCToGCGrantAccountRolledItems_Item[];
    auditAction: number;
    auditData: string;
}
declare const CMsgGCToGCGrantAccountRolledItems: MessageFns$2<CMsgGCToGCGrantAccountRolledItems>;
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
declare const CMsgGCToGCGrantAccountRolledItems_Item: MessageFns$2<CMsgGCToGCGrantAccountRolledItems_Item>;
interface CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute {
    name: string;
    valueUint32: number;
    valueFloat: number;
    valueString: string;
}
declare const CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute: MessageFns$2<CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute>;
interface CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry {
    ownerAccountId: number;
    auditAction: number;
    auditData: string;
}
declare const CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry: MessageFns$2<CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry>;
interface CMsgGCToGCBetaDeleteItems {
    accountId: number;
    itemIds: string[];
    itemDefs: number[];
}
declare const CMsgGCToGCBetaDeleteItems: MessageFns$2<CMsgGCToGCBetaDeleteItems>;
interface CMsgGCToGCGrantSelfMadeItemToAccount {
    itemDefIndex: number;
    accountid: number;
}
declare const CMsgGCToGCGrantSelfMadeItemToAccount: MessageFns$2<CMsgGCToGCGrantSelfMadeItemToAccount>;
interface CMsgUseItem {
    itemId: string;
    targetSteamId: string;
    giftPotentialTargets: number[];
    duelClassLock: number;
    initiatorSteamId: string;
    itempackAckImmediately: boolean;
}
declare const CMsgUseItem: MessageFns$2<CMsgUseItem>;
interface CMsgServerUseItem {
    initiatorAccountId: number;
    useItemMsg: CMsgUseItem | undefined;
}
declare const CMsgServerUseItem: MessageFns$2<CMsgServerUseItem>;
interface CMsgUseMultipleItems {
    itemIds: string[];
}
declare const CMsgUseMultipleItems: MessageFns$2<CMsgUseMultipleItems>;
interface CGCStoreRechargeRedirectLineItem {
    itemDefId: number;
    quantity: number;
}
declare const CGCStoreRechargeRedirectLineItem: MessageFns$2<CGCStoreRechargeRedirectLineItem>;
interface CMsgGCEconSQLWorkItemEmbeddedRollbackData {
    accountId: number;
    deletedItemId: string;
    oldAuditAction: number;
    newAuditAction: number;
    expectedAuditAction: number;
}
declare const CMsgGCEconSQLWorkItemEmbeddedRollbackData: MessageFns$2<CMsgGCEconSQLWorkItemEmbeddedRollbackData>;
interface CMsgCraftStatue {
    heroid: number;
    sequencename: string;
    cycle: number;
    description: string;
    pedestalItemdef: number;
    toolid: string;
}
declare const CMsgCraftStatue: MessageFns$2<CMsgCraftStatue>;
interface CMsgRedeemCode {
    code: string;
}
declare const CMsgRedeemCode: MessageFns$2<CMsgRedeemCode>;
interface CMsgRedeemCodeResponse {
    response: number;
    itemId: string;
}
declare const CMsgRedeemCodeResponse: MessageFns$2<CMsgRedeemCodeResponse>;
interface CMsgDevNewItemRequest {
    itemDefName: string;
    lootListName: string;
    attrDefName: string[];
    attrValue: string[];
    itemQuality: number;
}
declare const CMsgDevNewItemRequest: MessageFns$2<CMsgDevNewItemRequest>;
interface CMsgDevNewItemRequestResponse {
    success: boolean;
}
declare const CMsgDevNewItemRequestResponse: MessageFns$2<CMsgDevNewItemRequestResponse>;
interface CMsgDevUnlockAllItemStyles {
    itemId: string;
}
declare const CMsgDevUnlockAllItemStyles: MessageFns$2<CMsgDevUnlockAllItemStyles>;
interface CMsgDevUnlockAllItemStylesResponse {
    success: boolean;
}
declare const CMsgDevUnlockAllItemStylesResponse: MessageFns$2<CMsgDevUnlockAllItemStylesResponse>;
interface CMsgGCGetAccountSubscriptionItem {
    accountId: number;
}
declare const CMsgGCGetAccountSubscriptionItem: MessageFns$2<CMsgGCGetAccountSubscriptionItem>;
interface CMsgGCGetAccountSubscriptionItemResponse {
    defIndex: number;
}
declare const CMsgGCGetAccountSubscriptionItemResponse: MessageFns$2<CMsgGCGetAccountSubscriptionItemResponse>;
interface CMsgGCAddGiftItem {
    gifterAccountId: number;
    receiverAccountId: number;
    wrappedItem: CSOEconItem | undefined;
    giftMessage: string;
    isWalletCashTrusted: boolean;
}
declare const CMsgGCAddGiftItem: MessageFns$2<CMsgGCAddGiftItem>;
interface CMsgClientToGCWrapAndDeliverGift {
    itemId: string;
    giveToAccountId: number;
    giftMessage: string;
}
declare const CMsgClientToGCWrapAndDeliverGift: MessageFns$2<CMsgClientToGCWrapAndDeliverGift>;
interface CMsgSQLGCToGCRevokeUntrustedGift {
    accountId: number;
    sentItemId: string;
}
declare const CMsgSQLGCToGCRevokeUntrustedGift: MessageFns$2<CMsgSQLGCToGCRevokeUntrustedGift>;
interface CMsgClientToGCWrapAndDeliverGiftResponse {
    response: EGCMsgResponse;
    giftingChargeUses: number;
    giftingChargeMax: number;
    giftingUses: number;
    giftingMax: number;
    giftingWindowHours: number;
    tradeRestriction: EGCMsgInitiateTradeResponse;
}
declare const CMsgClientToGCWrapAndDeliverGiftResponse: MessageFns$2<CMsgClientToGCWrapAndDeliverGiftResponse>;
interface CMsgClientToGCUnwrapGift {
    itemId: string;
}
declare const CMsgClientToGCUnwrapGift: MessageFns$2<CMsgClientToGCUnwrapGift>;
interface CMsgClientToGCGetGiftPermissions {
}
declare const CMsgClientToGCGetGiftPermissions: MessageFns$2<CMsgClientToGCGetGiftPermissions>;
interface CMsgClientToGCGetGiftPermissionsResponse {
    isUnlimited: boolean;
    hasTwoFactor: boolean;
    senderPermission: EGCMsgInitiateTradeResponse;
    friendshipAgeRequirement: number;
    friendshipAgeRequirementTwoFactor: number;
    friendPermissions: CMsgClientToGCGetGiftPermissionsResponse_FriendPermission[];
}
declare const CMsgClientToGCGetGiftPermissionsResponse: MessageFns$2<CMsgClientToGCGetGiftPermissionsResponse>;
interface CMsgClientToGCGetGiftPermissionsResponse_FriendPermission {
    accountId: number;
    permission: EGCMsgInitiateTradeResponse;
}
declare const CMsgClientToGCGetGiftPermissionsResponse_FriendPermission: MessageFns$2<CMsgClientToGCGetGiftPermissionsResponse_FriendPermission>;
interface CMsgClientToGCUnpackBundle {
    itemId: string;
}
declare const CMsgClientToGCUnpackBundle: MessageFns$2<CMsgClientToGCUnpackBundle>;
interface CMsgClientToGCUnpackBundleResponse {
    unpackedItemIds: string[];
    response: CMsgClientToGCUnpackBundleResponse_EUnpackBundle;
    unpackedItemDefIndexes: number[];
}
declare const CMsgClientToGCUnpackBundleResponse: MessageFns$2<CMsgClientToGCUnpackBundleResponse>;
interface CMsgClientToGCPackBundle {
    itemIds: string[];
    bundleItemDefIndex: number;
}
declare const CMsgClientToGCPackBundle: MessageFns$2<CMsgClientToGCPackBundle>;
interface CMsgClientToGCPackBundleResponse {
    itemId: string;
    response: CMsgClientToGCPackBundleResponse_EPackBundle;
}
declare const CMsgClientToGCPackBundleResponse: MessageFns$2<CMsgClientToGCPackBundleResponse>;
interface CMsgGCToClientStoreTransactionCompleted {
    txnId: string;
    itemIds: string[];
}
declare const CMsgGCToClientStoreTransactionCompleted: MessageFns$2<CMsgGCToClientStoreTransactionCompleted>;
interface CMsgClientToGCEquipItems {
    equips: CMsgAdjustItemEquippedState[];
}
declare const CMsgClientToGCEquipItems: MessageFns$2<CMsgClientToGCEquipItems>;
interface CMsgClientToGCEquipItemsResponse {
    soCacheVersionId: string;
}
declare const CMsgClientToGCEquipItemsResponse: MessageFns$2<CMsgClientToGCEquipItemsResponse>;
interface CMsgClientToGCSetItemStyle {
    itemId: string;
    styleIndex: number;
}
declare const CMsgClientToGCSetItemStyle: MessageFns$2<CMsgClientToGCSetItemStyle>;
interface CMsgClientToGCSetItemStyleResponse {
    response: CMsgClientToGCSetItemStyleResponse_ESetStyle;
}
declare const CMsgClientToGCSetItemStyleResponse: MessageFns$2<CMsgClientToGCSetItemStyleResponse>;
interface CMsgClientToGCUnlockItemStyle {
    itemToUnlock: string;
    styleIndex: number;
    consumableItemIds: string[];
}
declare const CMsgClientToGCUnlockItemStyle: MessageFns$2<CMsgClientToGCUnlockItemStyle>;
interface CMsgClientToGCUnlockItemStyleResponse {
    response: CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle;
    itemId: string;
    styleIndex: number;
    stylePrereq: number;
}
declare const CMsgClientToGCUnlockItemStyleResponse: MessageFns$2<CMsgClientToGCUnlockItemStyleResponse>;
interface CMsgClientToGCSetItemInventoryCategory {
    itemIds: string[];
    setToValue: number;
    removeCategories: number;
    addCategories: number;
}
declare const CMsgClientToGCSetItemInventoryCategory: MessageFns$2<CMsgClientToGCSetItemInventoryCategory>;
interface CMsgClientToGCUnlockCrate {
    crateItemId: string;
    keyItemId: string;
}
declare const CMsgClientToGCUnlockCrate: MessageFns$2<CMsgClientToGCUnlockCrate>;
interface CMsgClientToGCUnlockCrateResponse {
    result: EGCMsgResponse;
    grantedItems: CMsgClientToGCUnlockCrateResponse_Item[];
}
declare const CMsgClientToGCUnlockCrateResponse: MessageFns$2<CMsgClientToGCUnlockCrateResponse>;
interface CMsgClientToGCUnlockCrateResponse_Item {
    itemId: string;
    defIndex: number;
}
declare const CMsgClientToGCUnlockCrateResponse_Item: MessageFns$2<CMsgClientToGCUnlockCrateResponse_Item>;
interface CMsgClientToGCRemoveItemAttribute {
    itemId: string;
}
declare const CMsgClientToGCRemoveItemAttribute: MessageFns$2<CMsgClientToGCRemoveItemAttribute>;
interface CMsgClientToGCRemoveItemAttributeResponse {
    response: CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute;
    itemId: string;
}
declare const CMsgClientToGCRemoveItemAttributeResponse: MessageFns$2<CMsgClientToGCRemoveItemAttributeResponse>;
interface CMsgClientToGCNameItem {
    subjectItemId: string;
    toolItemId: string;
    name: string;
}
declare const CMsgClientToGCNameItem: MessageFns$2<CMsgClientToGCNameItem>;
interface CMsgClientToGCNameItemResponse {
    response: CMsgClientToGCNameItemResponse_ENameItem;
    itemId: string;
}
declare const CMsgClientToGCNameItemResponse: MessageFns$2<CMsgClientToGCNameItemResponse>;
interface CMsgGCSetItemPosition {
    itemId: string;
    newPosition: number;
}
declare const CMsgGCSetItemPosition: MessageFns$2<CMsgGCSetItemPosition>;
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
declare const CAttributeItemDynamicRecipeComponent: MessageFns$2<CAttributeItemDynamicRecipeComponent>;
interface CProtoItemSocket {
    itemId: string;
    attrDefIndex: number;
    requiredType: number;
    requiredHero: string;
    gemDefIndex: number;
    notTradable: boolean;
    requiredItemSlot: string;
}
declare const CProtoItemSocket: MessageFns$2<CProtoItemSocket>;
interface CProtoItemSocketEmpty {
    socket: CProtoItemSocket | undefined;
}
declare const CProtoItemSocketEmpty: MessageFns$2<CProtoItemSocketEmpty>;
interface CProtoItemSocketEffect {
    socket: CProtoItemSocket | undefined;
    effect: number;
}
declare const CProtoItemSocketEffect: MessageFns$2<CProtoItemSocketEffect>;
interface CProtoItemSocketColor {
    socket: CProtoItemSocket | undefined;
    red: number;
    green: number;
    blue: number;
}
declare const CProtoItemSocketColor: MessageFns$2<CProtoItemSocketColor>;
interface CProtoItemSocketStrange {
    socket: CProtoItemSocket | undefined;
    strangeType: number;
    strangeValue: number;
}
declare const CProtoItemSocketStrange: MessageFns$2<CProtoItemSocketStrange>;
interface CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY {
    socket: CProtoItemSocket | undefined;
    strangeType: number;
    strangeValue: number;
    abilityEffect: number;
}
declare const CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY: MessageFns$2<CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY>;
interface CProtoItemSocketSpectator {
    socket: CProtoItemSocket | undefined;
    gamesViewed: number;
    corporationId: number;
    leagueId: number;
    teamId: number;
}
declare const CProtoItemSocketSpectator: MessageFns$2<CProtoItemSocketSpectator>;
interface CProtoItemSocketAssetModifier {
    socket: CProtoItemSocket | undefined;
    assetModifier: number;
}
declare const CProtoItemSocketAssetModifier: MessageFns$2<CProtoItemSocketAssetModifier>;
interface CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY {
    socket: CProtoItemSocket | undefined;
    assetModifier: number;
    animModifier: number;
    abilityEffect: number;
}
declare const CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY: MessageFns$2<CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY>;
interface CProtoItemSocketAutograph {
    socket: CProtoItemSocket | undefined;
    autograph: string;
    autographId: number;
    autographScore: number;
}
declare const CProtoItemSocketAutograph: MessageFns$2<CProtoItemSocketAutograph>;
interface CProtoItemSocketStaticVisuals {
    socket: CProtoItemSocket | undefined;
}
declare const CProtoItemSocketStaticVisuals: MessageFns$2<CProtoItemSocketStaticVisuals>;
interface CAttributeString {
    value: string;
}
declare const CAttributeString: MessageFns$2<CAttributeString>;
interface CWorkshopGetItemDailyRevenueRequest {
    appid: number;
    itemId: number;
    dateStart: number;
    dateEnd: number;
}
declare const CWorkshopGetItemDailyRevenueRequest: MessageFns$2<CWorkshopGetItemDailyRevenueRequest>;
interface CWorkshopGetItemDailyRevenueResponse {
    countryRevenue: CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue[];
}
declare const CWorkshopGetItemDailyRevenueResponse: MessageFns$2<CWorkshopGetItemDailyRevenueResponse>;
interface CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue {
    countryCode: string;
    date: number;
    revenueUsd: string;
    units: number;
}
declare const CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue: MessageFns$2<CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue>;
interface CWorkshopGetPackageDailyRevenueRequest {
    packageid: number;
    dateStart: number;
    dateEnd: number;
}
declare const CWorkshopGetPackageDailyRevenueRequest: MessageFns$2<CWorkshopGetPackageDailyRevenueRequest>;
interface CWorkshopGetPackageDailyRevenueResponse {
    countryRevenue: CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue[];
}
declare const CWorkshopGetPackageDailyRevenueResponse: MessageFns$2<CWorkshopGetPackageDailyRevenueResponse>;
interface CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue {
    countryCode: string;
    date: number;
    revenueUsd: string;
    units: number;
}
declare const CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue: MessageFns$2<CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue>;
interface CMsgSQLGCToGCGrantBackpackSlots {
    accountId: number;
    addSlots: number;
}
declare const CMsgSQLGCToGCGrantBackpackSlots: MessageFns$2<CMsgSQLGCToGCGrantBackpackSlots>;
interface CMsgClientToGCLookupAccountName {
    accountId: number;
}
declare const CMsgClientToGCLookupAccountName: MessageFns$2<CMsgClientToGCLookupAccountName>;
interface CMsgClientToGCLookupAccountNameResponse {
    accountId: number;
    accountName: string;
}
declare const CMsgClientToGCLookupAccountNameResponse: MessageFns$2<CMsgClientToGCLookupAccountNameResponse>;
interface CMsgClientToGCCreateStaticRecipe {
    items: CMsgClientToGCCreateStaticRecipe_Item[];
    recipeDefIndex: number;
}
declare const CMsgClientToGCCreateStaticRecipe: MessageFns$2<CMsgClientToGCCreateStaticRecipe>;
interface CMsgClientToGCCreateStaticRecipe_Item {
    itemId: string;
    slotId: number;
}
declare const CMsgClientToGCCreateStaticRecipe_Item: MessageFns$2<CMsgClientToGCCreateStaticRecipe_Item>;
interface CMsgClientToGCCreateStaticRecipeResponse {
    response: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
    outputItems: CMsgClientToGCCreateStaticRecipeResponse_OutputItem[];
    inputErrors: CMsgClientToGCCreateStaticRecipeResponse_InputError[];
    additionalOutputs: CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput[];
}
declare const CMsgClientToGCCreateStaticRecipeResponse: MessageFns$2<CMsgClientToGCCreateStaticRecipeResponse>;
interface CMsgClientToGCCreateStaticRecipeResponse_OutputItem {
    defIndex: number;
    itemId: string;
    slotId: number;
}
declare const CMsgClientToGCCreateStaticRecipeResponse_OutputItem: MessageFns$2<CMsgClientToGCCreateStaticRecipeResponse_OutputItem>;
interface CMsgClientToGCCreateStaticRecipeResponse_InputError {
    slotId: number;
    error: CMsgClientToGCCreateStaticRecipeResponse_EResponse;
}
declare const CMsgClientToGCCreateStaticRecipeResponse_InputError: MessageFns$2<CMsgClientToGCCreateStaticRecipeResponse_InputError>;
interface CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput {
    slotId: number;
    value: string;
}
declare const CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput: MessageFns$2<CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput>;
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
declare const CMsgProcessTransactionOrder: MessageFns$2<CMsgProcessTransactionOrder>;
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
declare const CMsgProcessTransactionOrder_Item: MessageFns$2<CMsgProcessTransactionOrder_Item>;
interface CMsgGCToGCStoreProcessCDKeyTransaction {
    order: CMsgProcessTransactionOrder | undefined;
    reasonCode: number;
    partner: number;
}
declare const CMsgGCToGCStoreProcessCDKeyTransaction: MessageFns$2<CMsgGCToGCStoreProcessCDKeyTransaction>;
interface CMsgGCToGCStoreProcessCDKeyTransactionResponse {
    success: boolean;
}
declare const CMsgGCToGCStoreProcessCDKeyTransactionResponse: MessageFns$2<CMsgGCToGCStoreProcessCDKeyTransactionResponse>;
interface CMsgGCToGCStoreProcessSettlement {
    order: CMsgProcessTransactionOrder | undefined;
}
declare const CMsgGCToGCStoreProcessSettlement: MessageFns$2<CMsgGCToGCStoreProcessSettlement>;
interface CMsgGCToGCStoreProcessSettlementResponse {
    success: boolean;
}
declare const CMsgGCToGCStoreProcessSettlementResponse: MessageFns$2<CMsgGCToGCStoreProcessSettlementResponse>;
interface CMsgGCToGCBroadcastConsoleCommand {
    conCommand: string;
    reportOutput: boolean;
    sendingGc: number;
    outputInitiator: string;
    senderSource: string;
}
declare const CMsgGCToGCBroadcastConsoleCommand: MessageFns$2<CMsgGCToGCBroadcastConsoleCommand>;
interface CMsgGCToGCConsoleOutput {
    initiator: string;
    sendingGc: number;
    msgs: CMsgGCToGCConsoleOutput_OutputLine[];
    isLastForSourceJob: boolean;
}
declare const CMsgGCToGCConsoleOutput: MessageFns$2<CMsgGCToGCConsoleOutput>;
interface CMsgGCToGCConsoleOutput_OutputLine {
    text: string;
    spewLevel: number;
}
declare const CMsgGCToGCConsoleOutput_OutputLine: MessageFns$2<CMsgGCToGCConsoleOutput_OutputLine>;
interface CMsgItemAges {
    maxItemIdTimestamps: CMsgItemAges_MaxItemIDTimestamp[];
}
declare const CMsgItemAges: MessageFns$2<CMsgItemAges>;
interface CMsgItemAges_MaxItemIDTimestamp {
    timestamp: number;
    maxItemId: string;
}
declare const CMsgItemAges_MaxItemIDTimestamp: MessageFns$2<CMsgItemAges_MaxItemIDTimestamp>;
interface CMsgGCToGCInternalTestMsg {
    sendingGc: number;
    senderId: string;
    context: number;
    messageId: number;
    messageBody: Buffer;
    jobIdSource: string;
    jobIdTarget: string;
}
declare const CMsgGCToGCInternalTestMsg: MessageFns$2<CMsgGCToGCInternalTestMsg>;
interface CMsgGCToGCClientServerVersionsUpdated {
    clientMinAllowedVersion: number;
    clientActiveVersion: number;
    serverActiveVersion: number;
    serverDeployedVersion: number;
    whatChanged: number;
}
declare const CMsgGCToGCClientServerVersionsUpdated: MessageFns$2<CMsgGCToGCClientServerVersionsUpdated>;
interface CMsgGCToGCBroadcastMessageFromSub {
    msgId: number;
    serializedMsg: Buffer;
    accountIdList: number[];
    steamIdList: string[];
}
declare const CMsgGCToGCBroadcastMessageFromSub: MessageFns$2<CMsgGCToGCBroadcastMessageFromSub>;
interface CMsgGCToClientCurrencyPricePoints {
    priceKey: string[];
    currencies: CMsgGCToClientCurrencyPricePoints_Currency[];
}
declare const CMsgGCToClientCurrencyPricePoints: MessageFns$2<CMsgGCToClientCurrencyPricePoints>;
interface CMsgGCToClientCurrencyPricePoints_Currency {
    currencyId: number;
    currencyPrice: string[];
}
declare const CMsgGCToClientCurrencyPricePoints_Currency: MessageFns$2<CMsgGCToClientCurrencyPricePoints_Currency>;
interface CMsgBannedWordList {
    version: number;
    bannedWords: string[];
}
declare const CMsgBannedWordList: MessageFns$2<CMsgBannedWordList>;
interface CMsgGCToGCFlushSteamInventoryCache {
    keys: CMsgGCToGCFlushSteamInventoryCache_Key[];
}
declare const CMsgGCToGCFlushSteamInventoryCache: MessageFns$2<CMsgGCToGCFlushSteamInventoryCache>;
interface CMsgGCToGCFlushSteamInventoryCache_Key {
    steamid: string;
    contextid: string;
}
declare const CMsgGCToGCFlushSteamInventoryCache_Key: MessageFns$2<CMsgGCToGCFlushSteamInventoryCache_Key>;
interface CMsgGCToGCUpdateSubscriptionItems {
    accountId: number;
    alwaysNotify: boolean;
}
declare const CMsgGCToGCUpdateSubscriptionItems: MessageFns$2<CMsgGCToGCUpdateSubscriptionItems>;
interface CMsgGCToGCSelfPing {
    sampleId: number;
}
declare const CMsgGCToGCSelfPing: MessageFns$2<CMsgGCToGCSelfPing>;
interface CMsgGCToGCGetInfuxIntervalStats {
}
declare const CMsgGCToGCGetInfuxIntervalStats: MessageFns$2<CMsgGCToGCGetInfuxIntervalStats>;
interface CMsgGCToGCGetInfuxIntervalStatsResponse {
    statIds: number[];
    statTotal: string[];
    statSamples: number[];
    statMax: number[];
    sampleDurationMs: number;
}
declare const CMsgGCToGCGetInfuxIntervalStatsResponse: MessageFns$2<CMsgGCToGCGetInfuxIntervalStatsResponse>;
interface CMsgGCToGCPurchaseSucceeded {
}
declare const CMsgGCToGCPurchaseSucceeded: MessageFns$2<CMsgGCToGCPurchaseSucceeded>;
interface CMsgClientToGCGetLimitedItemPurchaseQuantity {
    itemDef: number;
}
declare const CMsgClientToGCGetLimitedItemPurchaseQuantity: MessageFns$2<CMsgClientToGCGetLimitedItemPurchaseQuantity>;
interface CMsgClientToGCGetLimitedItemPurchaseQuantityResponse {
    result: CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse;
    quantityPurchased: number;
}
declare const CMsgClientToGCGetLimitedItemPurchaseQuantityResponse: MessageFns$2<CMsgClientToGCGetLimitedItemPurchaseQuantityResponse>;
interface CMsgClientToGCGetInFlightItemCharges {
    itemDef: number;
}
declare const CMsgClientToGCGetInFlightItemCharges: MessageFns$2<CMsgClientToGCGetInFlightItemCharges>;
interface CMsgClientToGCGetInFlightItemChargesResponse {
    result: CMsgClientToGCGetInFlightItemChargesResponse_EResponse;
    chargesInFlight: number;
}
declare const CMsgClientToGCGetInFlightItemChargesResponse: MessageFns$2<CMsgClientToGCGetInFlightItemChargesResponse>;
interface CMsgClientToGCPurchaseChargeCostItems {
    items: CMsgClientToGCPurchaseChargeCostItems_Item[];
    currency: number;
}
declare const CMsgClientToGCPurchaseChargeCostItems: MessageFns$2<CMsgClientToGCPurchaseChargeCostItems>;
interface CMsgClientToGCPurchaseChargeCostItems_Item {
    itemDefIndex: number;
    quantity: number;
    sourceReferenceId: string;
    priceIndex: number;
}
declare const CMsgClientToGCPurchaseChargeCostItems_Item: MessageFns$2<CMsgClientToGCPurchaseChargeCostItems_Item>;
interface CMsgClientToGCPurchaseChargeCostItemsResponse {
    result: CMsgClientToGCPurchaseChargeCostItemsResponse_EResponse;
    itemIds: string[];
}
declare const CMsgClientToGCPurchaseChargeCostItemsResponse: MessageFns$2<CMsgClientToGCPurchaseChargeCostItemsResponse>;
interface CMsgGCToClientInFlightChargesUpdated {
    inFlightCharges: CMsgGCToClientInFlightChargesUpdated_ItemCharges[];
}
declare const CMsgGCToClientInFlightChargesUpdated: MessageFns$2<CMsgGCToClientInFlightChargesUpdated>;
interface CMsgGCToClientInFlightChargesUpdated_ItemCharges {
    itemDef: number;
    chargesInFlight: number;
}
declare const CMsgGCToClientInFlightChargesUpdated_ItemCharges: MessageFns$2<CMsgGCToClientInFlightChargesUpdated_ItemCharges>;
interface CMsgClientToGCCancelUnfinalizedTransactions {
    unused: number;
}
declare const CMsgClientToGCCancelUnfinalizedTransactions: MessageFns$2<CMsgClientToGCCancelUnfinalizedTransactions>;
interface CMsgClientToGCCancelUnfinalizedTransactionsResponse {
    result: number;
}
declare const CMsgClientToGCCancelUnfinalizedTransactionsResponse: MessageFns$2<CMsgClientToGCCancelUnfinalizedTransactionsResponse>;
interface CMsgGCToGCUpdateWelcomeMsg {
    server: boolean;
    newMsg: CExtraMsgBlock | undefined;
    broadcast: boolean;
}
declare const CMsgGCToGCUpdateWelcomeMsg: MessageFns$2<CMsgGCToGCUpdateWelcomeMsg>;
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
declare const CMsgClientSuspended: MessageFns$1<CMsgClientSuspended>;
interface CMsgBalancedShuffleLobby {
}
declare const CMsgBalancedShuffleLobby: MessageFns$1<CMsgBalancedShuffleLobby>;
interface CMsgInitialQuestionnaireResponse {
    initialSkill: number;
}
declare const CMsgInitialQuestionnaireResponse: MessageFns$1<CMsgInitialQuestionnaireResponse>;
interface CMsgDOTARequestMatchesResponse {
    matches: CMsgDOTAMatch[];
    series: CMsgDOTARequestMatchesResponse_Series[];
    requestId: number;
    totalResults: number;
    resultsRemaining: number;
}
declare const CMsgDOTARequestMatchesResponse: MessageFns$1<CMsgDOTARequestMatchesResponse>;
interface CMsgDOTARequestMatchesResponse_Series {
    matches: CMsgDOTAMatch[];
    seriesId: number;
    seriesType: number;
}
declare const CMsgDOTARequestMatchesResponse_Series: MessageFns$1<CMsgDOTARequestMatchesResponse_Series>;
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
declare const CMsgDOTAPopup: MessageFns$1<CMsgDOTAPopup>;
interface CMsgDOTAReportsRemainingRequest {
}
declare const CMsgDOTAReportsRemainingRequest: MessageFns$1<CMsgDOTAReportsRemainingRequest>;
interface CMsgDOTAReportsRemainingResponse {
    numPositiveReportsRemaining: number;
    numNegativeReportsRemaining: number;
    numPositiveReportsTotal: number;
    numNegativeReportsTotal: number;
    numCommsReportsRemaining: number;
    numCommsReportsTotal: number;
}
declare const CMsgDOTAReportsRemainingResponse: MessageFns$1<CMsgDOTAReportsRemainingResponse>;
interface CMsgDOTASubmitPlayerReport {
    targetAccountId: number;
    reportFlags: number;
    lobbyId: string;
    comment: string;
}
declare const CMsgDOTASubmitPlayerReport: MessageFns$1<CMsgDOTASubmitPlayerReport>;
interface CMsgDOTASubmitPlayerReportResponse {
    targetAccountId: number;
    reportFlags: number;
    debugMessage: string;
    enumResult: CMsgDOTASubmitPlayerReportResponse_EResult;
}
declare const CMsgDOTASubmitPlayerReportResponse: MessageFns$1<CMsgDOTASubmitPlayerReportResponse>;
interface CMsgDOTASubmitPlayerAvoidRequest {
    targetAccountId: number;
    lobbyId: string;
    userNote: string;
}
declare const CMsgDOTASubmitPlayerAvoidRequest: MessageFns$1<CMsgDOTASubmitPlayerAvoidRequest>;
interface CMsgDOTASubmitPlayerAvoidRequestResponse {
    targetAccountId: number;
    result: number;
    debugMessage: string;
}
declare const CMsgDOTASubmitPlayerAvoidRequestResponse: MessageFns$1<CMsgDOTASubmitPlayerAvoidRequestResponse>;
interface CMsgDOTASubmitPlayerReportV2 {
    targetAccountId: number;
    reportReason: number[];
    lobbyId: string;
    gameTime: number;
    debugSlot: number;
    debugMatchId: string;
}
declare const CMsgDOTASubmitPlayerReportV2: MessageFns$1<CMsgDOTASubmitPlayerReportV2>;
interface CMsgDOTASubmitPlayerReportResponseV2 {
    targetAccountId: number;
    reportReason: number[];
    debugMessage: string;
    enumResult: CMsgDOTASubmitPlayerReportResponseV2_EResult;
}
declare const CMsgDOTASubmitPlayerReportResponseV2: MessageFns$1<CMsgDOTASubmitPlayerReportResponseV2>;
interface CMsgDOTASubmitLobbyMVPVote {
    targetAccountId: number;
}
declare const CMsgDOTASubmitLobbyMVPVote: MessageFns$1<CMsgDOTASubmitLobbyMVPVote>;
interface CMsgDOTASubmitLobbyMVPVoteResponse {
    targetAccountId: number;
    eresult: number;
}
declare const CMsgDOTASubmitLobbyMVPVoteResponse: MessageFns$1<CMsgDOTASubmitLobbyMVPVoteResponse>;
interface CMsgDOTALobbyMVPAwarded {
    matchId: string;
    mvpAccountId: number[];
}
declare const CMsgDOTALobbyMVPAwarded: MessageFns$1<CMsgDOTALobbyMVPAwarded>;
interface CMsgDOTAKickedFromMatchmakingQueue {
    matchType: MatchType;
}
declare const CMsgDOTAKickedFromMatchmakingQueue: MessageFns$1<CMsgDOTAKickedFromMatchmakingQueue>;
interface CMsgGCMatchDetailsRequest {
    matchId: string;
}
declare const CMsgGCMatchDetailsRequest: MessageFns$1<CMsgGCMatchDetailsRequest>;
interface CMsgGCMatchDetailsResponse {
    result: number;
    match: CMsgDOTAMatch | undefined;
    vote: DOTAMatchVote;
}
declare const CMsgGCMatchDetailsResponse: MessageFns$1<CMsgGCMatchDetailsResponse>;
interface CMsgDOTAProfileTickets {
    result: number;
    accountId: number;
    leaguePasses: CMsgDOTAProfileTickets_LeaguePass[];
}
declare const CMsgDOTAProfileTickets: MessageFns$1<CMsgDOTAProfileTickets>;
interface CMsgDOTAProfileTickets_LeaguePass {
    leagueId: number;
    itemDef: number;
}
declare const CMsgDOTAProfileTickets_LeaguePass: MessageFns$1<CMsgDOTAProfileTickets_LeaguePass>;
interface CMsgClientToGCGetProfileTickets {
    accountId: number;
}
declare const CMsgClientToGCGetProfileTickets: MessageFns$1<CMsgClientToGCGetProfileTickets>;
interface CMsgGCToClientPartySearchInvites {
    invites: CMsgGCToClientPartySearchInvite[];
}
declare const CMsgGCToClientPartySearchInvites: MessageFns$1<CMsgGCToClientPartySearchInvites>;
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
declare const CMsgDOTAWelcome: MessageFns$1<CMsgDOTAWelcome>;
interface CMsgDOTAWelcome_CExtraMsg {
    id: number;
    contents: Buffer;
}
declare const CMsgDOTAWelcome_CExtraMsg: MessageFns$1<CMsgDOTAWelcome_CExtraMsg>;
interface CSODOTAGameHeroFavorites {
    accountId: number;
    heroId: number;
}
declare const CSODOTAGameHeroFavorites: MessageFns$1<CSODOTAGameHeroFavorites>;
interface CMsgDOTAMatchVotes {
    matchId: string;
    votes: CMsgDOTAMatchVotes_PlayerVote[];
}
declare const CMsgDOTAMatchVotes: MessageFns$1<CMsgDOTAMatchVotes>;
interface CMsgDOTAMatchVotes_PlayerVote {
    accountId: number;
    vote: number;
}
declare const CMsgDOTAMatchVotes_PlayerVote: MessageFns$1<CMsgDOTAMatchVotes_PlayerVote>;
interface CMsgMatchmakingMatchGroupInfo {
    playersSearching: number;
    autoRegionSelectPingPenalty: number;
    autoRegionSelectPingPenaltyCustom: number;
    status: EMatchGroupServerStatus;
}
declare const CMsgMatchmakingMatchGroupInfo: MessageFns$1<CMsgMatchmakingMatchGroupInfo>;
interface CMsgDOTAMatchmakingStatsRequest {
}
declare const CMsgDOTAMatchmakingStatsRequest: MessageFns$1<CMsgDOTAMatchmakingStatsRequest>;
interface CMsgDOTAMatchmakingStatsResponse {
    matchgroupsVersion: number;
    legacySearchingPlayersByGroupSource2: number[];
    matchGroups: CMsgMatchmakingMatchGroupInfo[];
}
declare const CMsgDOTAMatchmakingStatsResponse: MessageFns$1<CMsgDOTAMatchmakingStatsResponse>;
interface CMsgDOTAUpdateMatchmakingStats {
    stats: CMsgDOTAMatchmakingStatsResponse | undefined;
}
declare const CMsgDOTAUpdateMatchmakingStats: MessageFns$1<CMsgDOTAUpdateMatchmakingStats>;
interface CMsgDOTAUpdateMatchManagementStats {
    stats: CMsgDOTAMatchmakingStatsResponse | undefined;
}
declare const CMsgDOTAUpdateMatchManagementStats: MessageFns$1<CMsgDOTAUpdateMatchManagementStats>;
interface CMsgDOTASetMatchHistoryAccess {
    allow3rdPartyMatchHistory: boolean;
}
declare const CMsgDOTASetMatchHistoryAccess: MessageFns$1<CMsgDOTASetMatchHistoryAccess>;
interface CMsgDOTASetMatchHistoryAccessResponse {
    eresult: number;
}
declare const CMsgDOTASetMatchHistoryAccessResponse: MessageFns$1<CMsgDOTASetMatchHistoryAccessResponse>;
interface CMsgDOTANotifyAccountFlagsChange {
    accountid: number;
    accountFlags: number;
}
declare const CMsgDOTANotifyAccountFlagsChange: MessageFns$1<CMsgDOTANotifyAccountFlagsChange>;
interface CMsgDOTASetProfilePrivacy {
    profilePrivate: boolean;
}
declare const CMsgDOTASetProfilePrivacy: MessageFns$1<CMsgDOTASetProfilePrivacy>;
interface CMsgDOTASetProfilePrivacyResponse {
    eresult: number;
}
declare const CMsgDOTASetProfilePrivacyResponse: MessageFns$1<CMsgDOTASetProfilePrivacyResponse>;
interface CMsgUpgradeLeagueItem {
    matchId: string;
    leagueId: number;
}
declare const CMsgUpgradeLeagueItem: MessageFns$1<CMsgUpgradeLeagueItem>;
interface CMsgUpgradeLeagueItemResponse {
}
declare const CMsgUpgradeLeagueItemResponse: MessageFns$1<CMsgUpgradeLeagueItemResponse>;
interface CMsgGCWatchDownloadedReplay {
    matchId: string;
    watchType: DOTAWatchReplayType;
}
declare const CMsgGCWatchDownloadedReplay: MessageFns$1<CMsgGCWatchDownloadedReplay>;
interface CMsgClientsRejoinChatChannels {
}
declare const CMsgClientsRejoinChatChannels: MessageFns$1<CMsgClientsRejoinChatChannels>;
interface CMsgGCGetHeroStandings {
}
declare const CMsgGCGetHeroStandings: MessageFns$1<CMsgGCGetHeroStandings>;
interface CMsgGCGetHeroStandingsResponse {
    standings: CMsgGCGetHeroStandingsResponse_Hero[];
}
declare const CMsgGCGetHeroStandingsResponse: MessageFns$1<CMsgGCGetHeroStandingsResponse>;
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
declare const CMsgGCGetHeroStandingsResponse_Hero: MessageFns$1<CMsgGCGetHeroStandingsResponse_Hero>;
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
declare const CMatchPlayerTimedStatAverages: MessageFns$1<CMatchPlayerTimedStatAverages>;
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
declare const CMatchPlayerTimedStatStdDeviations: MessageFns$1<CMatchPlayerTimedStatStdDeviations>;
interface CMsgGCGetHeroTimedStatsResponse {
    heroId: number;
    rankChunkedStats: CMsgGCGetHeroTimedStatsResponse_RankChunkedStats[];
}
declare const CMsgGCGetHeroTimedStatsResponse: MessageFns$1<CMsgGCGetHeroTimedStatsResponse>;
interface CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer {
    time: number;
    allStats: CMatchPlayerTimedStatAverages | undefined;
    winningStats: CMatchPlayerTimedStatAverages | undefined;
    losingStats: CMatchPlayerTimedStatAverages | undefined;
    winningStddevs: CMatchPlayerTimedStatStdDeviations | undefined;
    losingStddevs: CMatchPlayerTimedStatStdDeviations | undefined;
}
declare const CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer: MessageFns$1<CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer>;
interface CMsgGCGetHeroTimedStatsResponse_RankChunkedStats {
    rankChunk: number;
    timedStats: CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer[];
}
declare const CMsgGCGetHeroTimedStatsResponse_RankChunkedStats: MessageFns$1<CMsgGCGetHeroTimedStatsResponse_RankChunkedStats>;
interface CMsgGCItemEditorReservationsRequest {
}
declare const CMsgGCItemEditorReservationsRequest: MessageFns$1<CMsgGCItemEditorReservationsRequest>;
interface CMsgGCItemEditorReservation {
    defIndex: number;
    name: string;
}
declare const CMsgGCItemEditorReservation: MessageFns$1<CMsgGCItemEditorReservation>;
interface CMsgGCItemEditorReservationsResponse {
    reservations: CMsgGCItemEditorReservation[];
}
declare const CMsgGCItemEditorReservationsResponse: MessageFns$1<CMsgGCItemEditorReservationsResponse>;
interface CMsgGCItemEditorReserveItemDef {
    defIndex: number;
    username: string;
}
declare const CMsgGCItemEditorReserveItemDef: MessageFns$1<CMsgGCItemEditorReserveItemDef>;
interface CMsgGCItemEditorReserveItemDefResponse {
    defIndex: number;
    username: string;
    result: number;
}
declare const CMsgGCItemEditorReserveItemDefResponse: MessageFns$1<CMsgGCItemEditorReserveItemDefResponse>;
interface CMsgGCItemEditorReleaseReservation {
    defIndex: number;
    username: string;
}
declare const CMsgGCItemEditorReleaseReservation: MessageFns$1<CMsgGCItemEditorReleaseReservation>;
interface CMsgGCItemEditorReleaseReservationResponse {
    defIndex: number;
    released: boolean;
}
declare const CMsgGCItemEditorReleaseReservationResponse: MessageFns$1<CMsgGCItemEditorReleaseReservationResponse>;
interface CMsgFlipLobbyTeams {
}
declare const CMsgFlipLobbyTeams: MessageFns$1<CMsgFlipLobbyTeams>;
interface CMsgGCLobbyUpdateBroadcastChannelInfo {
    channelId: number;
    countryCode: string;
    description: string;
    languageCode: string;
}
declare const CMsgGCLobbyUpdateBroadcastChannelInfo: MessageFns$1<CMsgGCLobbyUpdateBroadcastChannelInfo>;
interface CMsgDOTAClaimEventActionData {
    grantItemGiftData: CMsgDOTAClaimEventActionData_GrantItemGiftData | undefined;
}
declare const CMsgDOTAClaimEventActionData: MessageFns$1<CMsgDOTAClaimEventActionData>;
interface CMsgDOTAClaimEventActionData_GrantItemGiftData {
    giveToAccountId: number;
    giftMessage: string;
}
declare const CMsgDOTAClaimEventActionData_GrantItemGiftData: MessageFns$1<CMsgDOTAClaimEventActionData_GrantItemGiftData>;
interface CMsgDOTAClaimEventAction {
    eventId: number;
    actionId: number;
    quantity: number;
    data: CMsgDOTAClaimEventActionData | undefined;
    scoreMode: EEventActionScoreMode;
}
declare const CMsgDOTAClaimEventAction: MessageFns$1<CMsgDOTAClaimEventAction>;
interface CMsgClientToGCClaimEventActionUsingItem {
    eventId: number;
    actionId: number;
    itemId: string;
    quantity: number;
}
declare const CMsgClientToGCClaimEventActionUsingItem: MessageFns$1<CMsgClientToGCClaimEventActionUsingItem>;
interface CMsgClientToGCClaimEventActionUsingItemResponse {
    actionResults: CMsgDOTAClaimEventActionResponse | undefined;
}
declare const CMsgClientToGCClaimEventActionUsingItemResponse: MessageFns$1<CMsgClientToGCClaimEventActionUsingItemResponse>;
interface CMsgGCToClientClaimEventActionUsingItemCompleted {
    itemId: string;
    actionResults: CMsgDOTAClaimEventActionResponse | undefined;
}
declare const CMsgGCToClientClaimEventActionUsingItemCompleted: MessageFns$1<CMsgGCToClientClaimEventActionUsingItemCompleted>;
interface CMsgDOTAGetEventPoints {
    eventId: number;
    accountId: number;
}
declare const CMsgDOTAGetEventPoints: MessageFns$1<CMsgDOTAGetEventPoints>;
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
declare const CMsgDOTAGetEventPointsResponse: MessageFns$1<CMsgDOTAGetEventPointsResponse>;
interface CMsgDOTAGetEventPointsResponse_Action {
    actionId: number;
    timesCompleted: number;
}
declare const CMsgDOTAGetEventPointsResponse_Action: MessageFns$1<CMsgDOTAGetEventPointsResponse_Action>;
interface CMsgDOTAGetPeriodicResource {
    accountId: number;
    periodicResourceId: number;
    timestamp: number;
}
declare const CMsgDOTAGetPeriodicResource: MessageFns$1<CMsgDOTAGetPeriodicResource>;
interface CMsgDOTAGetPeriodicResourceResponse {
    periodicResourceMax: number;
    periodicResourceUsed: number;
}
declare const CMsgDOTAGetPeriodicResourceResponse: MessageFns$1<CMsgDOTAGetPeriodicResourceResponse>;
interface CMsgDOTAPeriodicResourceUpdated {
    periodicResourceKey: CMsgDOTAGetPeriodicResource | undefined;
    periodicResourceValue: CMsgDOTAGetPeriodicResourceResponse | undefined;
}
declare const CMsgDOTAPeriodicResourceUpdated: MessageFns$1<CMsgDOTAPeriodicResourceUpdated>;
interface CMsgDOTACompendiumSelection {
    selectionIndex: number;
    selection: number;
    leagueid: number;
}
declare const CMsgDOTACompendiumSelection: MessageFns$1<CMsgDOTACompendiumSelection>;
interface CMsgDOTACompendiumSelectionResponse {
    eresult: number;
}
declare const CMsgDOTACompendiumSelectionResponse: MessageFns$1<CMsgDOTACompendiumSelectionResponse>;
interface CMsgDOTACompendiumRemoveAllSelections {
    leagueid: number;
}
declare const CMsgDOTACompendiumRemoveAllSelections: MessageFns$1<CMsgDOTACompendiumRemoveAllSelections>;
interface CMsgDOTACompendiumRemoveAllSelectionsResponse {
    eresult: number;
}
declare const CMsgDOTACompendiumRemoveAllSelectionsResponse: MessageFns$1<CMsgDOTACompendiumRemoveAllSelectionsResponse>;
interface CMsgDOTACompendiumData {
    selections: CMsgDOTACompendiumSelection[];
}
declare const CMsgDOTACompendiumData: MessageFns$1<CMsgDOTACompendiumData>;
interface CMsgDOTACompendiumDataRequest {
    accountId: number;
    leagueid: number;
}
declare const CMsgDOTACompendiumDataRequest: MessageFns$1<CMsgDOTACompendiumDataRequest>;
interface CMsgDOTACompendiumDataResponse {
    accountId: number;
    leagueid: number;
    result: number;
    compendiumData: CMsgDOTACompendiumData | undefined;
}
declare const CMsgDOTACompendiumDataResponse: MessageFns$1<CMsgDOTACompendiumDataResponse>;
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
declare const CMsgDOTAGetPlayerMatchHistory: MessageFns$1<CMsgDOTAGetPlayerMatchHistory>;
interface CMsgDOTAGetPlayerMatchHistoryResponse {
    matches: CMsgDOTAGetPlayerMatchHistoryResponse_Match[];
    requestId: number;
}
declare const CMsgDOTAGetPlayerMatchHistoryResponse: MessageFns$1<CMsgDOTAGetPlayerMatchHistoryResponse>;
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
declare const CMsgDOTAGetPlayerMatchHistoryResponse_Match: MessageFns$1<CMsgDOTAGetPlayerMatchHistoryResponse_Match>;
interface CMsgGCNotificationsRequest {
}
declare const CMsgGCNotificationsRequest: MessageFns$1<CMsgGCNotificationsRequest>;
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
declare const CMsgGCNotificationsNotification: MessageFns$1<CMsgGCNotificationsNotification>;
interface CMsgGCNotificationsUpdate {
    result: CMsgGCNotificationsUpdate_EResult;
    notifications: CMsgGCNotificationsNotification[];
}
declare const CMsgGCNotificationsUpdate: MessageFns$1<CMsgGCNotificationsUpdate>;
interface CMsgGCNotificationsResponse {
    update: CMsgGCNotificationsUpdate | undefined;
}
declare const CMsgGCNotificationsResponse: MessageFns$1<CMsgGCNotificationsResponse>;
interface CMsgGCNotificationsMarkReadRequest {
}
declare const CMsgGCNotificationsMarkReadRequest: MessageFns$1<CMsgGCNotificationsMarkReadRequest>;
interface CMsgGCPlayerInfoSubmit {
    name: string;
    countryCode: string;
    fantasyRole: number;
    teamId: number;
    sponsor: string;
}
declare const CMsgGCPlayerInfoSubmit: MessageFns$1<CMsgGCPlayerInfoSubmit>;
interface CMsgGCPlayerInfoSubmitResponse {
    result: CMsgGCPlayerInfoSubmitResponse_EResult;
}
declare const CMsgGCPlayerInfoSubmitResponse: MessageFns$1<CMsgGCPlayerInfoSubmitResponse>;
interface CMsgDOTAEmoticonAccessSDO {
    accountId: number;
    unlockedEmoticons: Buffer;
}
declare const CMsgDOTAEmoticonAccessSDO: MessageFns$1<CMsgDOTAEmoticonAccessSDO>;
interface CMsgClientToGCEmoticonDataRequest {
}
declare const CMsgClientToGCEmoticonDataRequest: MessageFns$1<CMsgClientToGCEmoticonDataRequest>;
interface CMsgGCToClientEmoticonData {
    emoticonAccess: CMsgDOTAEmoticonAccessSDO | undefined;
}
declare const CMsgGCToClientEmoticonData: MessageFns$1<CMsgGCToClientEmoticonData>;
interface CMsgGCToClientTournamentItemDrop {
    itemDef: number;
    eventType: number;
}
declare const CMsgGCToClientTournamentItemDrop: MessageFns$1<CMsgGCToClientTournamentItemDrop>;
interface CMsgClientToGCGetAllHeroOrder {
}
declare const CMsgClientToGCGetAllHeroOrder: MessageFns$1<CMsgClientToGCGetAllHeroOrder>;
interface CMsgClientToGCGetAllHeroOrderResponse {
    heroIds: number[];
}
declare const CMsgClientToGCGetAllHeroOrderResponse: MessageFns$1<CMsgClientToGCGetAllHeroOrderResponse>;
interface CMsgClientToGCGetAllHeroProgress {
    accountId: number;
}
declare const CMsgClientToGCGetAllHeroProgress: MessageFns$1<CMsgClientToGCGetAllHeroProgress>;
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
declare const CMsgClientToGCGetAllHeroProgressResponse: MessageFns$1<CMsgClientToGCGetAllHeroProgressResponse>;
interface CMsgClientToGCGetTrophyList {
    accountId: number;
}
declare const CMsgClientToGCGetTrophyList: MessageFns$1<CMsgClientToGCGetTrophyList>;
interface CMsgClientToGCGetTrophyListResponse {
    trophies: CMsgClientToGCGetTrophyListResponse_Trophy[];
}
declare const CMsgClientToGCGetTrophyListResponse: MessageFns$1<CMsgClientToGCGetTrophyListResponse>;
interface CMsgClientToGCGetTrophyListResponse_Trophy {
    trophyId: number;
    trophyScore: number;
    lastUpdated: number;
}
declare const CMsgClientToGCGetTrophyListResponse_Trophy: MessageFns$1<CMsgClientToGCGetTrophyListResponse_Trophy>;
interface CMsgGCToClientTrophyAwarded {
    trophyId: number;
    trophyScore: number;
    trophyOldScore: number;
    lastUpdated: number;
}
declare const CMsgGCToClientTrophyAwarded: MessageFns$1<CMsgGCToClientTrophyAwarded>;
interface CMsgClientToGCRankRequest {
    rankType: ERankType;
}
declare const CMsgClientToGCRankRequest: MessageFns$1<CMsgClientToGCRankRequest>;
interface CMsgGCToClientRankResponse {
    result: CMsgGCToClientRankResponse_EResultCode;
    rankValue: number;
    rankData1: number;
    rankData2: number;
    rankData3: number;
}
declare const CMsgGCToClientRankResponse: MessageFns$1<CMsgGCToClientRankResponse>;
interface CMsgGCToClientRankUpdate {
    rankType: ERankType;
    rankInfo: CMsgGCToClientRankResponse | undefined;
}
declare const CMsgGCToClientRankUpdate: MessageFns$1<CMsgGCToClientRankUpdate>;
interface CMsgClientToGCGetProfileCard {
    accountId: number;
}
declare const CMsgClientToGCGetProfileCard: MessageFns$1<CMsgClientToGCGetProfileCard>;
interface CMsgClientToGCSetProfileCardSlots {
    slots: CMsgClientToGCSetProfileCardSlots_CardSlot[];
}
declare const CMsgClientToGCSetProfileCardSlots: MessageFns$1<CMsgClientToGCSetProfileCardSlots>;
interface CMsgClientToGCSetProfileCardSlots_CardSlot {
    slotId: number;
    slotType: EProfileCardSlotType;
    slotValue: string;
}
declare const CMsgClientToGCSetProfileCardSlots_CardSlot: MessageFns$1<CMsgClientToGCSetProfileCardSlots_CardSlot>;
interface CMsgClientToGCGetProfileCardStats {
}
declare const CMsgClientToGCGetProfileCardStats: MessageFns$1<CMsgClientToGCGetProfileCardStats>;
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
declare const CMsgClientToGCCreateHeroStatue: MessageFns$1<CMsgClientToGCCreateHeroStatue>;
interface CMsgGCToClientHeroStatueCreateResult {
    resultingItemId: string;
}
declare const CMsgGCToClientHeroStatueCreateResult: MessageFns$1<CMsgGCToClientHeroStatueCreateResult>;
interface CMsgClientToGCPlayerStatsRequest {
    accountId: number;
}
declare const CMsgClientToGCPlayerStatsRequest: MessageFns$1<CMsgClientToGCPlayerStatsRequest>;
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
declare const CMsgGCToClientPlayerStatsResponse: MessageFns$1<CMsgGCToClientPlayerStatsResponse>;
interface CMsgClientToGCCustomGamesFriendsPlayedRequest {
}
declare const CMsgClientToGCCustomGamesFriendsPlayedRequest: MessageFns$1<CMsgClientToGCCustomGamesFriendsPlayedRequest>;
interface CMsgGCToClientCustomGamesFriendsPlayedResponse {
    accountId: number;
    games: CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame[];
}
declare const CMsgGCToClientCustomGamesFriendsPlayedResponse: MessageFns$1<CMsgGCToClientCustomGamesFriendsPlayedResponse>;
interface CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame {
    customGameId: string;
    accountIds: number[];
}
declare const CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame: MessageFns$1<CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame>;
interface CMsgClientToGCSocialFeedPostCommentRequest {
    eventId: string;
    comment: string;
}
declare const CMsgClientToGCSocialFeedPostCommentRequest: MessageFns$1<CMsgClientToGCSocialFeedPostCommentRequest>;
interface CMsgGCToClientSocialFeedPostCommentResponse {
    success: boolean;
}
declare const CMsgGCToClientSocialFeedPostCommentResponse: MessageFns$1<CMsgGCToClientSocialFeedPostCommentResponse>;
interface CMsgClientToGCSocialFeedPostMessageRequest {
    message: string;
    matchId: string;
    matchTimestamp: number;
}
declare const CMsgClientToGCSocialFeedPostMessageRequest: MessageFns$1<CMsgClientToGCSocialFeedPostMessageRequest>;
interface CMsgGCToClientSocialFeedPostMessageResponse {
    success: boolean;
}
declare const CMsgGCToClientSocialFeedPostMessageResponse: MessageFns$1<CMsgGCToClientSocialFeedPostMessageResponse>;
interface CMsgClientToGCFriendsPlayedCustomGameRequest {
    customGameId: string;
}
declare const CMsgClientToGCFriendsPlayedCustomGameRequest: MessageFns$1<CMsgClientToGCFriendsPlayedCustomGameRequest>;
interface CMsgGCToClientFriendsPlayedCustomGameResponse {
    customGameId: string;
    accountIds: number[];
}
declare const CMsgGCToClientFriendsPlayedCustomGameResponse: MessageFns$1<CMsgGCToClientFriendsPlayedCustomGameResponse>;
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
declare const CMsgDOTAPartyRichPresence: MessageFns$1<CMsgDOTAPartyRichPresence>;
interface CMsgDOTAPartyRichPresence_Member {
    steamId: string;
    coach: boolean;
}
declare const CMsgDOTAPartyRichPresence_Member: MessageFns$1<CMsgDOTAPartyRichPresence_Member>;
interface CMsgDOTAPartyRichPresence_WeekendTourney {
    division: number;
    skillLevel: number;
    round: number;
    tournamentId: number;
    stateSeqNum: number;
    event: EWeekendTourneyRichPresenceEvent;
    eventRound: number;
}
declare const CMsgDOTAPartyRichPresence_WeekendTourney: MessageFns$1<CMsgDOTAPartyRichPresence_WeekendTourney>;
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
declare const CMsgDOTALobbyRichPresence: MessageFns$1<CMsgDOTALobbyRichPresence>;
interface CMsgDOTACustomGameListenServerStartedLoading {
    lobbyId: string;
    customGameId: string;
    lobbyMembers: number[];
    startTime: number;
}
declare const CMsgDOTACustomGameListenServerStartedLoading: MessageFns$1<CMsgDOTACustomGameListenServerStartedLoading>;
interface CMsgDOTACustomGameClientFinishedLoading {
    lobbyId: string;
    loadingDuration: number;
    resultCode: number;
    resultString: string;
    signonStates: number;
    comment: string;
}
declare const CMsgDOTACustomGameClientFinishedLoading: MessageFns$1<CMsgDOTACustomGameClientFinishedLoading>;
interface CMsgClientToGCApplyGemCombiner {
    itemId1: string;
    itemId2: string;
}
declare const CMsgClientToGCApplyGemCombiner: MessageFns$1<CMsgClientToGCApplyGemCombiner>;
interface CMsgClientToGCH264Unsupported {
}
declare const CMsgClientToGCH264Unsupported: MessageFns$1<CMsgClientToGCH264Unsupported>;
interface CMsgClientToGCGetQuestProgress {
    questIds: number[];
}
declare const CMsgClientToGCGetQuestProgress: MessageFns$1<CMsgClientToGCGetQuestProgress>;
interface CMsgClientToGCGetQuestProgressResponse {
    success: boolean;
    quests: CMsgClientToGCGetQuestProgressResponse_Quest[];
}
declare const CMsgClientToGCGetQuestProgressResponse: MessageFns$1<CMsgClientToGCGetQuestProgressResponse>;
interface CMsgClientToGCGetQuestProgressResponse_Challenge {
    challengeId: number;
    timeCompleted: number;
    attempts: number;
    heroId: number;
    templateId: number;
    questRank: number;
}
declare const CMsgClientToGCGetQuestProgressResponse_Challenge: MessageFns$1<CMsgClientToGCGetQuestProgressResponse_Challenge>;
interface CMsgClientToGCGetQuestProgressResponse_Quest {
    questId: number;
    completedChallenges: CMsgClientToGCGetQuestProgressResponse_Challenge[];
}
declare const CMsgClientToGCGetQuestProgressResponse_Quest: MessageFns$1<CMsgClientToGCGetQuestProgressResponse_Quest>;
interface CMsgGCToClientMatchSignedOut {
    matchId: string;
}
declare const CMsgGCToClientMatchSignedOut: MessageFns$1<CMsgGCToClientMatchSignedOut>;
interface CMsgGCGetHeroStatsHistory {
    heroId: number;
}
declare const CMsgGCGetHeroStatsHistory: MessageFns$1<CMsgGCGetHeroStatsHistory>;
interface CMsgGCGetHeroStatsHistoryResponse {
    heroId: number;
    records: CMsgDOTASDOHeroStatsHistory[];
    result: CMsgGCGetHeroStatsHistoryResponse_EResponse;
}
declare const CMsgGCGetHeroStatsHistoryResponse: MessageFns$1<CMsgGCGetHeroStatsHistoryResponse>;
interface CMsgPlayerConductScorecardRequest {
}
declare const CMsgPlayerConductScorecardRequest: MessageFns$1<CMsgPlayerConductScorecardRequest>;
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
declare const CMsgPlayerConductScorecard: MessageFns$1<CMsgPlayerConductScorecard>;
interface CMsgClientToGCWageringRequest {
    eventId: number;
}
declare const CMsgClientToGCWageringRequest: MessageFns$1<CMsgClientToGCWageringRequest>;
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
declare const CMsgGCToClientWageringResponse: MessageFns$1<CMsgGCToClientWageringResponse>;
interface CMsgGCToClientWageringUpdate {
    eventId: number;
    wageringInfo: CMsgGCToClientWageringResponse | undefined;
}
declare const CMsgGCToClientWageringUpdate: MessageFns$1<CMsgGCToClientWageringUpdate>;
interface CMsgGCToClientArcanaVotesUpdate {
    eventId: number;
    arcanaVotes: CMsgClientToGCRequestArcanaVotesRemainingResponse | undefined;
}
declare const CMsgGCToClientArcanaVotesUpdate: MessageFns$1<CMsgGCToClientArcanaVotesUpdate>;
interface CMsgClientToGCGetEventGoals {
    eventIds: EEvent[];
}
declare const CMsgClientToGCGetEventGoals: MessageFns$1<CMsgClientToGCGetEventGoals>;
interface CMsgEventGoals {
    eventGoals: CMsgEventGoals_EventGoal[];
}
declare const CMsgEventGoals: MessageFns$1<CMsgEventGoals>;
interface CMsgEventGoals_EventGoal {
    eventId: EEvent;
    goalId: number;
    value: string;
}
declare const CMsgEventGoals_EventGoal: MessageFns$1<CMsgEventGoals_EventGoal>;
interface CMsgGCToGCLeaguePredictions {
    leagueId: number;
}
declare const CMsgGCToGCLeaguePredictions: MessageFns$1<CMsgGCToGCLeaguePredictions>;
interface CMsgPredictionRankings {
    predictions: CMsgPredictionRankings_Prediction[];
}
declare const CMsgPredictionRankings: MessageFns$1<CMsgPredictionRankings>;
interface CMsgPredictionRankings_PredictionLine {
    answerId: number;
    answerName: string;
    answerLogo: string;
    answerValue: number;
}
declare const CMsgPredictionRankings_PredictionLine: MessageFns$1<CMsgPredictionRankings_PredictionLine>;
interface CMsgPredictionRankings_Prediction {
    selectionId: number;
    predictionLines: CMsgPredictionRankings_PredictionLine[];
}
declare const CMsgPredictionRankings_Prediction: MessageFns$1<CMsgPredictionRankings_Prediction>;
interface CMsgPredictionResults {
    results: CMsgPredictionResults_Result[];
}
declare const CMsgPredictionResults: MessageFns$1<CMsgPredictionResults>;
interface CMsgPredictionResults_ResultBreakdown {
    answerSelection: number;
    answerValue: number;
}
declare const CMsgPredictionResults_ResultBreakdown: MessageFns$1<CMsgPredictionResults_ResultBreakdown>;
interface CMsgPredictionResults_Result {
    selectionId: number;
    resultBreakdown: CMsgPredictionResults_ResultBreakdown[];
}
declare const CMsgPredictionResults_Result: MessageFns$1<CMsgPredictionResults_Result>;
interface CMsgClientToGCHasPlayerVotedForMVP {
    matchId: string;
}
declare const CMsgClientToGCHasPlayerVotedForMVP: MessageFns$1<CMsgClientToGCHasPlayerVotedForMVP>;
interface CMsgClientToGCHasPlayerVotedForMVPResponse {
    result: boolean;
}
declare const CMsgClientToGCHasPlayerVotedForMVPResponse: MessageFns$1<CMsgClientToGCHasPlayerVotedForMVPResponse>;
interface CMsgClientToGCVoteForMVP {
    matchId: string;
    accountId: number;
}
declare const CMsgClientToGCVoteForMVP: MessageFns$1<CMsgClientToGCVoteForMVP>;
interface CMsgClientToGCVoteForMVPResponse {
    result: boolean;
}
declare const CMsgClientToGCVoteForMVPResponse: MessageFns$1<CMsgClientToGCVoteForMVPResponse>;
interface CMsgClientToGCMVPVoteTimeout {
    matchId: string;
}
declare const CMsgClientToGCMVPVoteTimeout: MessageFns$1<CMsgClientToGCMVPVoteTimeout>;
interface CMsgClientToGCMVPVoteTimeoutResponse {
    result: boolean;
}
declare const CMsgClientToGCMVPVoteTimeoutResponse: MessageFns$1<CMsgClientToGCMVPVoteTimeoutResponse>;
interface CMsgClientToGCTeammateStatsRequest {
}
declare const CMsgClientToGCTeammateStatsRequest: MessageFns$1<CMsgClientToGCTeammateStatsRequest>;
interface CMsgClientToGCTeammateStatsResponse {
    success: boolean;
    teammateStats: CMsgClientToGCTeammateStatsResponse_TeammateStat[];
}
declare const CMsgClientToGCTeammateStatsResponse: MessageFns$1<CMsgClientToGCTeammateStatsResponse>;
interface CMsgClientToGCTeammateStatsResponse_TeammateStat {
    accountId: number;
    games: number;
    wins: number;
    mostRecentGameTimestamp: number;
    mostRecentGameMatchId: string;
    performance: number;
}
declare const CMsgClientToGCTeammateStatsResponse_TeammateStat: MessageFns$1<CMsgClientToGCTeammateStatsResponse_TeammateStat>;
interface CMsgClientToGCVoteForArcana {
    matches: CMsgArcanaVoteMatchVotes[];
}
declare const CMsgClientToGCVoteForArcana: MessageFns$1<CMsgClientToGCVoteForArcana>;
interface CMsgClientToGCVoteForArcanaResponse {
    result: CMsgClientToGCVoteForArcanaResponse_Result;
}
declare const CMsgClientToGCVoteForArcanaResponse: MessageFns$1<CMsgClientToGCVoteForArcanaResponse>;
interface CMsgClientToGCRequestArcanaVotesRemaining {
}
declare const CMsgClientToGCRequestArcanaVotesRemaining: MessageFns$1<CMsgClientToGCRequestArcanaVotesRemaining>;
interface CMsgClientToGCRequestArcanaVotesRemainingResponse {
    result: boolean;
    votesRemaining: number;
    votesTotal: number;
    matchesPreviouslyVotedFor: CMsgArcanaVoteMatchVotes[];
}
declare const CMsgClientToGCRequestArcanaVotesRemainingResponse: MessageFns$1<CMsgClientToGCRequestArcanaVotesRemainingResponse>;
interface CMsgClientToGCRequestEventPointLogV2 {
    eventId: number;
}
declare const CMsgClientToGCRequestEventPointLogV2: MessageFns$1<CMsgClientToGCRequestEventPointLogV2>;
interface CMsgClientToGCRequestEventPointLogResponseV2 {
    result: boolean;
    eventId: EEvent;
    logEntries: CMsgClientToGCRequestEventPointLogResponseV2_LogEntry[];
}
declare const CMsgClientToGCRequestEventPointLogResponseV2: MessageFns$1<CMsgClientToGCRequestEventPointLogResponseV2>;
interface CMsgClientToGCRequestEventPointLogResponseV2_LogEntry {
    timestamp: number;
    auditAction: number;
    eventPoints: number;
    auditData: string;
}
declare const CMsgClientToGCRequestEventPointLogResponseV2_LogEntry: MessageFns$1<CMsgClientToGCRequestEventPointLogResponseV2_LogEntry>;
interface CMsgClientToGCPublishUserStat {
    userStatsEvent: number;
    referenceData: string;
}
declare const CMsgClientToGCPublishUserStat: MessageFns$1<CMsgClientToGCPublishUserStat>;
interface CMsgClientToGCRequestSlarkGameResult {
    eventId: EEvent;
    slotChosen: number;
    week: number;
}
declare const CMsgClientToGCRequestSlarkGameResult: MessageFns$1<CMsgClientToGCRequestSlarkGameResult>;
interface CMsgClientToGCRequestSlarkGameResultResponse {
    pointsWon: number;
    auraWon: boolean;
}
declare const CMsgClientToGCRequestSlarkGameResultResponse: MessageFns$1<CMsgClientToGCRequestSlarkGameResultResponse>;
interface CMsgGCToClientQuestProgressUpdated {
    questId: number;
    completedChallenges: CMsgGCToClientQuestProgressUpdated_Challenge[];
}
declare const CMsgGCToClientQuestProgressUpdated: MessageFns$1<CMsgGCToClientQuestProgressUpdated>;
interface CMsgGCToClientQuestProgressUpdated_Challenge {
    challengeId: number;
    timeCompleted: number;
    attempts: number;
    heroId: number;
    templateId: number;
    questRank: number;
    maxQuestRank: number;
}
declare const CMsgGCToClientQuestProgressUpdated_Challenge: MessageFns$1<CMsgGCToClientQuestProgressUpdated_Challenge>;
interface CMsgDOTARedeemItem {
    currencyId: string;
    purchaseDef: number;
}
declare const CMsgDOTARedeemItem: MessageFns$1<CMsgDOTARedeemItem>;
interface CMsgDOTARedeemItemResponse {
    response: CMsgDOTARedeemItemResponse_EResultCode;
}
declare const CMsgDOTARedeemItemResponse: MessageFns$1<CMsgDOTARedeemItemResponse>;
interface CMsgClientToGCSelectCompendiumInGamePrediction {
    matchId: string;
    predictions: CMsgClientToGCSelectCompendiumInGamePrediction_Prediction[];
    leagueId: number;
}
declare const CMsgClientToGCSelectCompendiumInGamePrediction: MessageFns$1<CMsgClientToGCSelectCompendiumInGamePrediction>;
interface CMsgClientToGCSelectCompendiumInGamePrediction_Prediction {
    predictionId: number;
    predictionValue: number;
}
declare const CMsgClientToGCSelectCompendiumInGamePrediction_Prediction: MessageFns$1<CMsgClientToGCSelectCompendiumInGamePrediction_Prediction>;
interface CMsgClientToGCSelectCompendiumInGamePredictionResponse {
    result: CMsgClientToGCSelectCompendiumInGamePredictionResponse_EResult;
}
declare const CMsgClientToGCSelectCompendiumInGamePredictionResponse: MessageFns$1<CMsgClientToGCSelectCompendiumInGamePredictionResponse>;
interface CMsgClientToGCOpenPlayerCardPack {
    playerCardPackItemId: string;
    teamId: number;
    deprecatedLeagueId: number;
    region: ELeagueRegion;
}
declare const CMsgClientToGCOpenPlayerCardPack: MessageFns$1<CMsgClientToGCOpenPlayerCardPack>;
interface CMsgClientToGCOpenPlayerCardPackResponse {
    result: CMsgClientToGCOpenPlayerCardPackResponse_Result;
    playerCardItemIds: string[];
}
declare const CMsgClientToGCOpenPlayerCardPackResponse: MessageFns$1<CMsgClientToGCOpenPlayerCardPackResponse>;
interface CMsgClientToGCRecyclePlayerCard {
    playerCardItemIds: string[];
    eventId: number;
}
declare const CMsgClientToGCRecyclePlayerCard: MessageFns$1<CMsgClientToGCRecyclePlayerCard>;
interface CMsgClientToGCRecyclePlayerCardResponse {
    result: CMsgClientToGCRecyclePlayerCardResponse_Result;
    dustAmount: number;
}
declare const CMsgClientToGCRecyclePlayerCardResponse: MessageFns$1<CMsgClientToGCRecyclePlayerCardResponse>;
interface CMsgClientToGCCreatePlayerCardPack {
    cardDustItemId: string;
    eventId: number;
    premiumPack: boolean;
}
declare const CMsgClientToGCCreatePlayerCardPack: MessageFns$1<CMsgClientToGCCreatePlayerCardPack>;
interface CMsgClientToGCCreatePlayerCardPackResponse {
    result: CMsgClientToGCCreatePlayerCardPackResponse_Result;
}
declare const CMsgClientToGCCreatePlayerCardPackResponse: MessageFns$1<CMsgClientToGCCreatePlayerCardPackResponse>;
interface CMsgClientToGCCreateTeamPlayerCardPack {
    cardDustItemId: string;
    eventId: number;
    premiumPack: boolean;
    teamId: number;
}
declare const CMsgClientToGCCreateTeamPlayerCardPack: MessageFns$1<CMsgClientToGCCreateTeamPlayerCardPack>;
interface CMsgClientToGCCreateTeamPlayerCardPackResponse {
    result: CMsgClientToGCCreateTeamPlayerCardPackResponse_Result;
}
declare const CMsgClientToGCCreateTeamPlayerCardPackResponse: MessageFns$1<CMsgClientToGCCreateTeamPlayerCardPackResponse>;
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
declare const CMsgGCToClientBattlePassRollupInternational2016: MessageFns$1<CMsgGCToClientBattlePassRollupInternational2016>;
interface CMsgGCToClientBattlePassRollupInternational2016_Questlines {
    name: string;
    onestar: number;
    twostar: number;
    threestar: number;
    total: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_Questlines: MessageFns$1<CMsgGCToClientBattlePassRollupInternational2016_Questlines>;
interface CMsgGCToClientBattlePassRollupInternational2016_Wagering {
    totalWagered: number;
    totalWon: number;
    averageWon: number;
    successRate: number;
    totalTips: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_Wagering: MessageFns$1<CMsgGCToClientBattlePassRollupInternational2016_Wagering>;
interface CMsgGCToClientBattlePassRollupInternational2016_Achievements {
    completed: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_Achievements: MessageFns$1<CMsgGCToClientBattlePassRollupInternational2016_Achievements>;
interface CMsgGCToClientBattlePassRollupInternational2016_BattleCup {
    wins: number;
    score: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_BattleCup: MessageFns$1<CMsgGCToClientBattlePassRollupInternational2016_BattleCup>;
interface CMsgGCToClientBattlePassRollupInternational2016_Predictions {
    correct: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_Predictions: MessageFns$1<CMsgGCToClientBattlePassRollupInternational2016_Predictions>;
interface CMsgGCToClientBattlePassRollupInternational2016_Bracket {
    correct: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_Bracket: MessageFns$1<CMsgGCToClientBattlePassRollupInternational2016_Bracket>;
interface CMsgGCToClientBattlePassRollupInternational2016_PlayerCard {
    accountId: number;
    quality: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_PlayerCard: MessageFns$1<CMsgGCToClientBattlePassRollupInternational2016_PlayerCard>;
interface CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge {
    totalScore: number;
    percentile: number;
}
declare const CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge: MessageFns$1<CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge>;
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
declare const CMsgGCToClientBattlePassRollupFall2016: MessageFns$1<CMsgGCToClientBattlePassRollupFall2016>;
interface CMsgGCToClientBattlePassRollupFall2016_Questlines {
    name: string;
    onestar: number;
    twostar: number;
    threestar: number;
    total: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_Questlines: MessageFns$1<CMsgGCToClientBattlePassRollupFall2016_Questlines>;
interface CMsgGCToClientBattlePassRollupFall2016_Wagering {
    totalWagered: number;
    totalWon: number;
    averageWon: number;
    successRate: number;
    totalTips: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_Wagering: MessageFns$1<CMsgGCToClientBattlePassRollupFall2016_Wagering>;
interface CMsgGCToClientBattlePassRollupFall2016_Achievements {
    completed: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_Achievements: MessageFns$1<CMsgGCToClientBattlePassRollupFall2016_Achievements>;
interface CMsgGCToClientBattlePassRollupFall2016_BattleCup {
    wins: number;
    score: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_BattleCup: MessageFns$1<CMsgGCToClientBattlePassRollupFall2016_BattleCup>;
interface CMsgGCToClientBattlePassRollupFall2016_Predictions {
    correct: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_Predictions: MessageFns$1<CMsgGCToClientBattlePassRollupFall2016_Predictions>;
interface CMsgGCToClientBattlePassRollupFall2016_Bracket {
    correct: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_Bracket: MessageFns$1<CMsgGCToClientBattlePassRollupFall2016_Bracket>;
interface CMsgGCToClientBattlePassRollupFall2016_PlayerCard {
    accountId: number;
    quality: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_PlayerCard: MessageFns$1<CMsgGCToClientBattlePassRollupFall2016_PlayerCard>;
interface CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge {
    totalScore: number;
    percentile: number;
}
declare const CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge: MessageFns$1<CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge>;
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
declare const CMsgGCToClientBattlePassRollupWinter2017: MessageFns$1<CMsgGCToClientBattlePassRollupWinter2017>;
interface CMsgGCToClientBattlePassRollupWinter2017_Questlines {
    name: string;
    onestar: number;
    twostar: number;
    threestar: number;
    total: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_Questlines: MessageFns$1<CMsgGCToClientBattlePassRollupWinter2017_Questlines>;
interface CMsgGCToClientBattlePassRollupWinter2017_Wagering {
    totalWagered: number;
    totalWon: number;
    averageWon: number;
    successRate: number;
    totalTips: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_Wagering: MessageFns$1<CMsgGCToClientBattlePassRollupWinter2017_Wagering>;
interface CMsgGCToClientBattlePassRollupWinter2017_Achievements {
    completed: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_Achievements: MessageFns$1<CMsgGCToClientBattlePassRollupWinter2017_Achievements>;
interface CMsgGCToClientBattlePassRollupWinter2017_BattleCup {
    wins: number;
    score: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_BattleCup: MessageFns$1<CMsgGCToClientBattlePassRollupWinter2017_BattleCup>;
interface CMsgGCToClientBattlePassRollupWinter2017_Predictions {
    correct: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_Predictions: MessageFns$1<CMsgGCToClientBattlePassRollupWinter2017_Predictions>;
interface CMsgGCToClientBattlePassRollupWinter2017_Bracket {
    correct: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_Bracket: MessageFns$1<CMsgGCToClientBattlePassRollupWinter2017_Bracket>;
interface CMsgGCToClientBattlePassRollupWinter2017_PlayerCard {
    accountId: number;
    quality: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_PlayerCard: MessageFns$1<CMsgGCToClientBattlePassRollupWinter2017_PlayerCard>;
interface CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge {
    totalScore: number;
    percentile: number;
}
declare const CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge: MessageFns$1<CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge>;
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
declare const CMsgGCToClientBattlePassRollupTI7: MessageFns$1<CMsgGCToClientBattlePassRollupTI7>;
interface CMsgGCToClientBattlePassRollupTI7_Questlines {
    name: string;
    onestar: number;
    twostar: number;
    threestar: number;
    total: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_Questlines: MessageFns$1<CMsgGCToClientBattlePassRollupTI7_Questlines>;
interface CMsgGCToClientBattlePassRollupTI7_Wagering {
    totalWagered: number;
    totalWon: number;
    averageWon: number;
    successRate: number;
    totalTips: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_Wagering: MessageFns$1<CMsgGCToClientBattlePassRollupTI7_Wagering>;
interface CMsgGCToClientBattlePassRollupTI7_Achievements {
    completed: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_Achievements: MessageFns$1<CMsgGCToClientBattlePassRollupTI7_Achievements>;
interface CMsgGCToClientBattlePassRollupTI7_BattleCup {
    wins: number;
    score: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_BattleCup: MessageFns$1<CMsgGCToClientBattlePassRollupTI7_BattleCup>;
interface CMsgGCToClientBattlePassRollupTI7_Predictions {
    correct: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_Predictions: MessageFns$1<CMsgGCToClientBattlePassRollupTI7_Predictions>;
interface CMsgGCToClientBattlePassRollupTI7_Bracket {
    correct: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_Bracket: MessageFns$1<CMsgGCToClientBattlePassRollupTI7_Bracket>;
interface CMsgGCToClientBattlePassRollupTI7_PlayerCard {
    accountId: number;
    quality: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_PlayerCard: MessageFns$1<CMsgGCToClientBattlePassRollupTI7_PlayerCard>;
interface CMsgGCToClientBattlePassRollupTI7_FantasyChallenge {
    totalScore: number;
    percentile: number;
}
declare const CMsgGCToClientBattlePassRollupTI7_FantasyChallenge: MessageFns$1<CMsgGCToClientBattlePassRollupTI7_FantasyChallenge>;
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
declare const CMsgGCToClientBattlePassRollupTI8: MessageFns$1<CMsgGCToClientBattlePassRollupTI8>;
interface CMsgGCToClientBattlePassRollupTI8_CavernCrawl {
    roomsCleared: number;
    carryCompleted: boolean;
    supportCompleted: boolean;
    utilityCompleted: boolean;
}
declare const CMsgGCToClientBattlePassRollupTI8_CavernCrawl: MessageFns$1<CMsgGCToClientBattlePassRollupTI8_CavernCrawl>;
interface CMsgGCToClientBattlePassRollupTI8_Wagering {
    totalWagered: number;
    totalWon: number;
    averageWon: number;
    successRate: number;
    totalTips: number;
}
declare const CMsgGCToClientBattlePassRollupTI8_Wagering: MessageFns$1<CMsgGCToClientBattlePassRollupTI8_Wagering>;
interface CMsgGCToClientBattlePassRollupTI8_Achievements {
    completed: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupTI8_Achievements: MessageFns$1<CMsgGCToClientBattlePassRollupTI8_Achievements>;
interface CMsgGCToClientBattlePassRollupTI8_Predictions {
    correct: number;
    total: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupTI8_Predictions: MessageFns$1<CMsgGCToClientBattlePassRollupTI8_Predictions>;
interface CMsgGCToClientBattlePassRollupTI8_Bracket {
    correct: number;
    points: number;
}
declare const CMsgGCToClientBattlePassRollupTI8_Bracket: MessageFns$1<CMsgGCToClientBattlePassRollupTI8_Bracket>;
interface CMsgGCToClientBattlePassRollupTI8_PlayerCard {
    accountId: number;
    quality: number;
}
declare const CMsgGCToClientBattlePassRollupTI8_PlayerCard: MessageFns$1<CMsgGCToClientBattlePassRollupTI8_PlayerCard>;
interface CMsgGCToClientBattlePassRollupTI8_FantasyChallenge {
    totalScore: number;
    percentile: number;
}
declare const CMsgGCToClientBattlePassRollupTI8_FantasyChallenge: MessageFns$1<CMsgGCToClientBattlePassRollupTI8_FantasyChallenge>;
interface CMsgGCToClientBattlePassRollupTI9 {
    battlePassLevel: number;
}
declare const CMsgGCToClientBattlePassRollupTI9: MessageFns$1<CMsgGCToClientBattlePassRollupTI9>;
interface CMsgGCToClientBattlePassRollupTI10 {
    battlePassLevel: number;
}
declare const CMsgGCToClientBattlePassRollupTI10: MessageFns$1<CMsgGCToClientBattlePassRollupTI10>;
interface CMsgGCToClientBattlePassRollupRequest {
    eventId: number;
    accountId: number;
}
declare const CMsgGCToClientBattlePassRollupRequest: MessageFns$1<CMsgGCToClientBattlePassRollupRequest>;
interface CMsgGCToClientBattlePassRollupResponse {
    eventTi6: CMsgGCToClientBattlePassRollupInternational2016 | undefined;
    eventFall2016: CMsgGCToClientBattlePassRollupFall2016 | undefined;
    eventWinter2017: CMsgGCToClientBattlePassRollupWinter2017 | undefined;
    eventTi7: CMsgGCToClientBattlePassRollupTI7 | undefined;
    eventTi8: CMsgGCToClientBattlePassRollupTI8 | undefined;
    eventTi9: CMsgGCToClientBattlePassRollupTI9 | undefined;
    eventTi10: CMsgGCToClientBattlePassRollupTI10 | undefined;
}
declare const CMsgGCToClientBattlePassRollupResponse: MessageFns$1<CMsgGCToClientBattlePassRollupResponse>;
interface CMsgGCToClientBattlePassRollupListRequest {
    accountId: number;
}
declare const CMsgGCToClientBattlePassRollupListRequest: MessageFns$1<CMsgGCToClientBattlePassRollupListRequest>;
interface CMsgGCToClientBattlePassRollupListResponse {
    eventInfo: CMsgGCToClientBattlePassRollupListResponse_EventInfo[];
}
declare const CMsgGCToClientBattlePassRollupListResponse: MessageFns$1<CMsgGCToClientBattlePassRollupListResponse>;
interface CMsgGCToClientBattlePassRollupListResponse_EventInfo {
    eventId: number;
    level: number;
}
declare const CMsgGCToClientBattlePassRollupListResponse_EventInfo: MessageFns$1<CMsgGCToClientBattlePassRollupListResponse_EventInfo>;
interface CMsgClientToGCTransferSeasonalMMRRequest {
    isParty: boolean;
}
declare const CMsgClientToGCTransferSeasonalMMRRequest: MessageFns$1<CMsgClientToGCTransferSeasonalMMRRequest>;
interface CMsgClientToGCTransferSeasonalMMRResponse {
    success: boolean;
}
declare const CMsgClientToGCTransferSeasonalMMRResponse: MessageFns$1<CMsgClientToGCTransferSeasonalMMRResponse>;
interface CMsgGCToClientPlaytestStatus {
    active: boolean;
}
declare const CMsgGCToClientPlaytestStatus: MessageFns$1<CMsgGCToClientPlaytestStatus>;
interface CMsgClientToGCJoinPlaytest {
    clientVersion: number;
}
declare const CMsgClientToGCJoinPlaytest: MessageFns$1<CMsgClientToGCJoinPlaytest>;
interface CMsgClientToGCJoinPlaytestResponse {
    error: string;
}
declare const CMsgClientToGCJoinPlaytestResponse: MessageFns$1<CMsgClientToGCJoinPlaytestResponse>;
interface CMsgDOTASetFavoriteTeam {
    teamId: number;
    eventId: number;
}
declare const CMsgDOTASetFavoriteTeam: MessageFns$1<CMsgDOTASetFavoriteTeam>;
interface CMsgDOTATriviaCurrentQuestions {
    questions: CMsgDOTATriviaQuestion[];
    triviaEnabled: boolean;
}
declare const CMsgDOTATriviaCurrentQuestions: MessageFns$1<CMsgDOTATriviaCurrentQuestions>;
interface CMsgDOTASubmitTriviaQuestionAnswer {
    questionId: number;
    answerIndex: number;
}
declare const CMsgDOTASubmitTriviaQuestionAnswer: MessageFns$1<CMsgDOTASubmitTriviaQuestionAnswer>;
interface CMsgDOTASubmitTriviaQuestionAnswerResponse {
    result: EDOTATriviaAnswerResult;
}
declare const CMsgDOTASubmitTriviaQuestionAnswerResponse: MessageFns$1<CMsgDOTASubmitTriviaQuestionAnswerResponse>;
interface CMsgDOTAStartTriviaSession {
}
declare const CMsgDOTAStartTriviaSession: MessageFns$1<CMsgDOTAStartTriviaSession>;
interface CMsgDOTAStartTriviaSessionResponse {
    triviaEnabled: boolean;
    currentTimestamp: number;
}
declare const CMsgDOTAStartTriviaSessionResponse: MessageFns$1<CMsgDOTAStartTriviaSessionResponse>;
interface CMsgDOTAAnchorPhoneNumberRequest {
}
declare const CMsgDOTAAnchorPhoneNumberRequest: MessageFns$1<CMsgDOTAAnchorPhoneNumberRequest>;
interface CMsgDOTAAnchorPhoneNumberResponse {
    result: CMsgDOTAAnchorPhoneNumberResponse_Result;
}
declare const CMsgDOTAAnchorPhoneNumberResponse: MessageFns$1<CMsgDOTAAnchorPhoneNumberResponse>;
interface CMsgDOTAUnanchorPhoneNumberRequest {
}
declare const CMsgDOTAUnanchorPhoneNumberRequest: MessageFns$1<CMsgDOTAUnanchorPhoneNumberRequest>;
interface CMsgDOTAUnanchorPhoneNumberResponse {
    result: CMsgDOTAUnanchorPhoneNumberResponse_Result;
}
declare const CMsgDOTAUnanchorPhoneNumberResponse: MessageFns$1<CMsgDOTAUnanchorPhoneNumberResponse>;
interface CMsgGCToClientCommendNotification {
    commenderAccountId: number;
    commenderName: string;
    flags: number;
    commenderHeroId: number;
}
declare const CMsgGCToClientCommendNotification: MessageFns$1<CMsgGCToClientCommendNotification>;
interface CMsgDOTAClientToGCQuickStatsRequest {
    playerAccountId: number;
    heroId: number;
    itemId: number;
    leagueId: number;
}
declare const CMsgDOTAClientToGCQuickStatsRequest: MessageFns$1<CMsgDOTAClientToGCQuickStatsRequest>;
interface CMsgDOTAClientToGCQuickStatsResponse {
    originalRequest: CMsgDOTAClientToGCQuickStatsRequest | undefined;
    heroStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
    itemStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
    itemHeroStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
    itemPlayerStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
    heroPlayerStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
    fullSetStats: CMsgDOTAClientToGCQuickStatsResponse_SimpleStats | undefined;
}
declare const CMsgDOTAClientToGCQuickStatsResponse: MessageFns$1<CMsgDOTAClientToGCQuickStatsResponse>;
interface CMsgDOTAClientToGCQuickStatsResponse_SimpleStats {
    winPercent: number;
    pickPercent: number;
    winCount: number;
    pickCount: number;
}
declare const CMsgDOTAClientToGCQuickStatsResponse_SimpleStats: MessageFns$1<CMsgDOTAClientToGCQuickStatsResponse_SimpleStats>;
interface CMsgDOTASelectionPriorityChoiceRequest {
    choice: DOTASelectionPriorityChoice;
}
declare const CMsgDOTASelectionPriorityChoiceRequest: MessageFns$1<CMsgDOTASelectionPriorityChoiceRequest>;
interface CMsgDOTASelectionPriorityChoiceResponse {
    result: CMsgDOTASelectionPriorityChoiceResponse_Result;
}
declare const CMsgDOTASelectionPriorityChoiceResponse: MessageFns$1<CMsgDOTASelectionPriorityChoiceResponse>;
interface CMsgDOTAGameAutographReward {
    badgeId: string;
}
declare const CMsgDOTAGameAutographReward: MessageFns$1<CMsgDOTAGameAutographReward>;
interface CMsgDOTAGameAutographRewardResponse {
    result: CMsgDOTAGameAutographRewardResponse_Result;
}
declare const CMsgDOTAGameAutographRewardResponse: MessageFns$1<CMsgDOTAGameAutographRewardResponse>;
interface CMsgDOTADestroyLobbyRequest {
}
declare const CMsgDOTADestroyLobbyRequest: MessageFns$1<CMsgDOTADestroyLobbyRequest>;
interface CMsgDOTADestroyLobbyResponse {
    result: CMsgDOTADestroyLobbyResponse_Result;
}
declare const CMsgDOTADestroyLobbyResponse: MessageFns$1<CMsgDOTADestroyLobbyResponse>;
interface CMsgDOTAGetRecentPlayTimeFriendsRequest {
}
declare const CMsgDOTAGetRecentPlayTimeFriendsRequest: MessageFns$1<CMsgDOTAGetRecentPlayTimeFriendsRequest>;
interface CMsgDOTAGetRecentPlayTimeFriendsResponse {
    accountIds: number[];
}
declare const CMsgDOTAGetRecentPlayTimeFriendsResponse: MessageFns$1<CMsgDOTAGetRecentPlayTimeFriendsResponse>;
interface CMsgPurchaseItemWithEventPoints {
    itemDef: number;
    quantity: number;
    eventId: EEvent;
    usePremiumPoints: boolean;
}
declare const CMsgPurchaseItemWithEventPoints: MessageFns$1<CMsgPurchaseItemWithEventPoints>;
interface CMsgPurchaseItemWithEventPointsResponse {
    result: CMsgPurchaseItemWithEventPointsResponse_Result;
}
declare const CMsgPurchaseItemWithEventPointsResponse: MessageFns$1<CMsgPurchaseItemWithEventPointsResponse>;
interface CMsgPurchaseHeroRandomRelic {
    heroId: number;
    relicRarity: EHeroRelicRarity;
}
declare const CMsgPurchaseHeroRandomRelic: MessageFns$1<CMsgPurchaseHeroRandomRelic>;
interface CMsgPurchaseHeroRandomRelicResponse {
    result: EPurchaseHeroRelicResult;
    killEaterType: number;
}
declare const CMsgPurchaseHeroRandomRelicResponse: MessageFns$1<CMsgPurchaseHeroRandomRelicResponse>;
interface CMsgClientToGCRequestPlusWeeklyChallengeResult {
    eventId: EEvent;
    week: number;
}
declare const CMsgClientToGCRequestPlusWeeklyChallengeResult: MessageFns$1<CMsgClientToGCRequestPlusWeeklyChallengeResult>;
interface CMsgClientToGCRequestPlusWeeklyChallengeResultResponse {
}
declare const CMsgClientToGCRequestPlusWeeklyChallengeResultResponse: MessageFns$1<CMsgClientToGCRequestPlusWeeklyChallengeResultResponse>;
interface CMsgProfileRequest {
    accountId: number;
}
declare const CMsgProfileRequest: MessageFns$1<CMsgProfileRequest>;
interface CMsgProfileResponse {
    backgroundItem: CSOEconItem | undefined;
    featuredHeroes: CMsgProfileResponse_FeaturedHero[];
    recentMatches: CMsgProfileResponse_MatchInfo[];
    successfulHeroes: CMsgSuccessfulHero[];
    recentMatchDetails: CMsgRecentMatchInfo | undefined;
    result: CMsgProfileResponse_EResponse;
    stickerbookPage: CMsgStickerbookPage | undefined;
}
declare const CMsgProfileResponse: MessageFns$1<CMsgProfileResponse>;
interface CMsgProfileResponse_FeaturedHero {
    heroId: number;
    equippedEconItems: CSOEconItem[];
    manuallySet: boolean;
    plusHeroXp: number;
    plusHeroRelicsItem: CSOEconItem | undefined;
}
declare const CMsgProfileResponse_FeaturedHero: MessageFns$1<CMsgProfileResponse_FeaturedHero>;
interface CMsgProfileResponse_MatchInfo {
    matchId: string;
    matchTimestamp: number;
    performanceRating: number;
    heroId: number;
    wonMatch: boolean;
}
declare const CMsgProfileResponse_MatchInfo: MessageFns$1<CMsgProfileResponse_MatchInfo>;
interface CMsgProfileUpdate {
    backgroundItemId: string;
    featuredHeroIds: number[];
}
declare const CMsgProfileUpdate: MessageFns$1<CMsgProfileUpdate>;
interface CMsgProfileUpdateResponse {
    result: CMsgProfileUpdateResponse_Result;
}
declare const CMsgProfileUpdateResponse: MessageFns$1<CMsgProfileUpdateResponse>;
interface CMsgTalentWinRates {
    lastRun: number;
    abilityId: number;
    gameCount: number;
    winCount: number;
}
declare const CMsgTalentWinRates: MessageFns$1<CMsgTalentWinRates>;
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
declare const CMsgGlobalHeroAverages: MessageFns$1<CMsgGlobalHeroAverages>;
interface CMsgHeroGlobalDataRequest {
    heroId: number;
}
declare const CMsgHeroGlobalDataRequest: MessageFns$1<CMsgHeroGlobalDataRequest>;
interface CMsgHeroGlobalDataResponse {
    heroId: number;
    heroDataPerChunk: CMsgHeroGlobalDataResponse_HeroDataPerRankChunk[];
}
declare const CMsgHeroGlobalDataResponse: MessageFns$1<CMsgHeroGlobalDataResponse>;
interface CMsgHeroGlobalDataResponse_GraphData {
    day: number;
    winPercent: number;
    pickPercent: number;
    banPercent: number;
}
declare const CMsgHeroGlobalDataResponse_GraphData: MessageFns$1<CMsgHeroGlobalDataResponse_GraphData>;
interface CMsgHeroGlobalDataResponse_WeekData {
    week: number;
    winPercent: number;
    pickPercent: number;
    banPercent: number;
}
declare const CMsgHeroGlobalDataResponse_WeekData: MessageFns$1<CMsgHeroGlobalDataResponse_WeekData>;
interface CMsgHeroGlobalDataResponse_HeroDataPerRankChunk {
    rankChunk: number;
    talentWinRates: CMsgTalentWinRates[];
    heroAverages: CMsgGlobalHeroAverages | undefined;
    graphData: CMsgHeroGlobalDataResponse_GraphData[];
    weekData: CMsgHeroGlobalDataResponse_WeekData[];
}
declare const CMsgHeroGlobalDataResponse_HeroDataPerRankChunk: MessageFns$1<CMsgHeroGlobalDataResponse_HeroDataPerRankChunk>;
interface CMsgHeroGlobalDataAllHeroes {
    heroes: CMsgHeroGlobalDataResponse[];
}
declare const CMsgHeroGlobalDataAllHeroes: MessageFns$1<CMsgHeroGlobalDataAllHeroes>;
interface CMsgHeroGlobalDataHeroesAlliesAndEnemies {
    rankedHeroData: CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData[];
}
declare const CMsgHeroGlobalDataHeroesAlliesAndEnemies: MessageFns$1<CMsgHeroGlobalDataHeroesAlliesAndEnemies>;
interface CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData {
    heroId: number;
    winRate: number;
    firstOtherHeroId: number;
    allyWinRate: number[];
    enemyWinRate: number[];
}
declare const CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData: MessageFns$1<CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData>;
interface CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData {
    rank: number;
    heroData: CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData[];
}
declare const CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData: MessageFns$1<CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData>;
interface CMsgPrivateMetadataKeyRequest {
    matchId: string;
}
declare const CMsgPrivateMetadataKeyRequest: MessageFns$1<CMsgPrivateMetadataKeyRequest>;
interface CMsgPrivateMetadataKeyResponse {
    privateKey: number;
}
declare const CMsgPrivateMetadataKeyResponse: MessageFns$1<CMsgPrivateMetadataKeyResponse>;
interface CMsgActivatePlusFreeTrialResponse {
    result: CMsgActivatePlusFreeTrialResponse_Result;
}
declare const CMsgActivatePlusFreeTrialResponse: MessageFns$1<CMsgActivatePlusFreeTrialResponse>;
interface CMsgGCToClientCavernCrawlMapPathCompleted {
    eventId: number;
    heroIdCompleted: number;
    completedPaths: CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo[];
    mapVariant: number;
}
declare const CMsgGCToClientCavernCrawlMapPathCompleted: MessageFns$1<CMsgGCToClientCavernCrawlMapPathCompleted>;
interface CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo {
    pathIdCompleted: number;
    receivedUltraRareReward: boolean;
    halfCompleted: boolean;
}
declare const CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo: MessageFns$1<CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo>;
interface CMsgGCToClientCavernCrawlMapUpdated {
    eventId: number;
}
declare const CMsgGCToClientCavernCrawlMapUpdated: MessageFns$1<CMsgGCToClientCavernCrawlMapUpdated>;
interface CMsgClientToGCCavernCrawlClaimRoom {
    eventId: number;
    roomId: number;
    mapVariant: number;
}
declare const CMsgClientToGCCavernCrawlClaimRoom: MessageFns$1<CMsgClientToGCCavernCrawlClaimRoom>;
interface CMsgClientToGCCavernCrawlClaimRoomResponse {
    result: CMsgClientToGCCavernCrawlClaimRoomResponse_Result;
}
declare const CMsgClientToGCCavernCrawlClaimRoomResponse: MessageFns$1<CMsgClientToGCCavernCrawlClaimRoomResponse>;
interface CMsgClientToGCCavernCrawlUseItemOnRoom {
    eventId: number;
    roomId: number;
    itemType: number;
    mapVariant: number;
}
declare const CMsgClientToGCCavernCrawlUseItemOnRoom: MessageFns$1<CMsgClientToGCCavernCrawlUseItemOnRoom>;
interface CMsgClientToGCCavernCrawlUseItemOnRoomResponse {
    result: CMsgClientToGCCavernCrawlUseItemOnRoomResponse_Result;
}
declare const CMsgClientToGCCavernCrawlUseItemOnRoomResponse: MessageFns$1<CMsgClientToGCCavernCrawlUseItemOnRoomResponse>;
interface CMsgClientToGCCavernCrawlUseItemOnPath {
    eventId: number;
    pathId: number;
    itemType: number;
    mapVariant: number;
}
declare const CMsgClientToGCCavernCrawlUseItemOnPath: MessageFns$1<CMsgClientToGCCavernCrawlUseItemOnPath>;
interface CMsgClientToGCCavernCrawlUseItemOnPathResponse {
    result: CMsgClientToGCCavernCrawlUseItemOnPathResponse_Result;
}
declare const CMsgClientToGCCavernCrawlUseItemOnPathResponse: MessageFns$1<CMsgClientToGCCavernCrawlUseItemOnPathResponse>;
interface CMsgClientToGCCavernCrawlRequestMapState {
    eventId: number;
}
declare const CMsgClientToGCCavernCrawlRequestMapState: MessageFns$1<CMsgClientToGCCavernCrawlRequestMapState>;
interface CMsgClientToGCCavernCrawlRequestMapStateResponse {
    result: CMsgClientToGCCavernCrawlRequestMapStateResponse_Result;
    availableMapVariantsMask: number;
    inventoryItem: CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem[];
    mapVariants: CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant[];
}
declare const CMsgClientToGCCavernCrawlRequestMapStateResponse: MessageFns$1<CMsgClientToGCCavernCrawlRequestMapStateResponse>;
interface CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge {
    pathId1: number;
    pathId2: number;
}
declare const CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge: MessageFns$1<CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge>;
interface CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem {
    itemType: number;
    count: number;
}
declare const CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem: MessageFns$1<CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem>;
interface CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap {
    mapRoomId: number;
    revealedRoomId: number;
}
declare const CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap: MessageFns$1<CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap>;
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
declare const CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant: MessageFns$1<CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant>;
interface CMsgClientToGCCavernCrawlGetClaimedRoomCount {
    eventId: number;
}
declare const CMsgClientToGCCavernCrawlGetClaimedRoomCount: MessageFns$1<CMsgClientToGCCavernCrawlGetClaimedRoomCount>;
interface CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse {
    result: CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_Result;
    mapVariants: CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant[];
    availableMapVariantsMask: number;
}
declare const CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse: MessageFns$1<CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse>;
interface CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant {
    mapVariant: number;
    count: number;
}
declare const CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant: MessageFns$1<CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant>;
interface CMsgDOTAMutationList {
    mutations: CMsgDOTAMutationList_Mutation[];
}
declare const CMsgDOTAMutationList: MessageFns$1<CMsgDOTAMutationList>;
interface CMsgDOTAMutationList_Mutation {
    id: number;
    name: string;
    description: string;
}
declare const CMsgDOTAMutationList_Mutation: MessageFns$1<CMsgDOTAMutationList_Mutation>;
interface CMsgEventTipsSummaryRequest {
    eventId: EEvent;
    accountId: number;
}
declare const CMsgEventTipsSummaryRequest: MessageFns$1<CMsgEventTipsSummaryRequest>;
interface CMsgEventTipsSummaryResponse {
    result: boolean;
    tipsReceived: CMsgEventTipsSummaryResponse_Tipper[];
}
declare const CMsgEventTipsSummaryResponse: MessageFns$1<CMsgEventTipsSummaryResponse>;
interface CMsgEventTipsSummaryResponse_Tipper {
    tipperAccountId: number;
    tipCount: number;
}
declare const CMsgEventTipsSummaryResponse_Tipper: MessageFns$1<CMsgEventTipsSummaryResponse_Tipper>;
interface CMsgSocialFeedRequest {
    accountId: number;
    selfOnly: boolean;
}
declare const CMsgSocialFeedRequest: MessageFns$1<CMsgSocialFeedRequest>;
interface CMsgSocialFeedResponse {
    result: CMsgSocialFeedResponse_Result;
    feedEvents: CMsgSocialFeedResponse_FeedEvent[];
}
declare const CMsgSocialFeedResponse: MessageFns$1<CMsgSocialFeedResponse>;
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
declare const CMsgSocialFeedResponse_FeedEvent: MessageFns$1<CMsgSocialFeedResponse_FeedEvent>;
interface CMsgSocialFeedCommentsRequest {
    feedEventId: string;
}
declare const CMsgSocialFeedCommentsRequest: MessageFns$1<CMsgSocialFeedCommentsRequest>;
interface CMsgSocialFeedCommentsResponse {
    result: CMsgSocialFeedCommentsResponse_Result;
    feedComments: CMsgSocialFeedCommentsResponse_FeedComment[];
}
declare const CMsgSocialFeedCommentsResponse: MessageFns$1<CMsgSocialFeedCommentsResponse>;
interface CMsgSocialFeedCommentsResponse_FeedComment {
    commenterAccountId: number;
    timestamp: number;
    commentText: string;
}
declare const CMsgSocialFeedCommentsResponse_FeedComment: MessageFns$1<CMsgSocialFeedCommentsResponse_FeedComment>;
interface CMsgClientToGCPlayerCardSpecificPurchaseRequest {
    playerAccountId: number;
    eventId: number;
    cardDustItemId: string;
}
declare const CMsgClientToGCPlayerCardSpecificPurchaseRequest: MessageFns$1<CMsgClientToGCPlayerCardSpecificPurchaseRequest>;
interface CMsgClientToGCPlayerCardSpecificPurchaseResponse {
    result: CMsgClientToGCPlayerCardSpecificPurchaseResponse_Result;
    itemId: string;
}
declare const CMsgClientToGCPlayerCardSpecificPurchaseResponse: MessageFns$1<CMsgClientToGCPlayerCardSpecificPurchaseResponse>;
interface CMsgClientToGCRequestContestVotes {
    contestId: number;
}
declare const CMsgClientToGCRequestContestVotes: MessageFns$1<CMsgClientToGCRequestContestVotes>;
interface CMsgClientToGCRequestContestVotesResponse {
    result: CMsgClientToGCRequestContestVotesResponse_EResponse;
    votes: CMsgClientToGCRequestContestVotesResponse_ItemVote[];
}
declare const CMsgClientToGCRequestContestVotesResponse: MessageFns$1<CMsgClientToGCRequestContestVotesResponse>;
interface CMsgClientToGCRequestContestVotesResponse_ItemVote {
    contestItemId: string;
    vote: number;
}
declare const CMsgClientToGCRequestContestVotesResponse_ItemVote: MessageFns$1<CMsgClientToGCRequestContestVotesResponse_ItemVote>;
interface CMsgClientToGCRecordContestVote {
    contestId: number;
    contestItemId: string;
    vote: number;
}
declare const CMsgClientToGCRecordContestVote: MessageFns$1<CMsgClientToGCRecordContestVote>;
interface CMsgGCToClientRecordContestVoteResponse {
    eresult: CMsgGCToClientRecordContestVoteResponse_EResult;
}
declare const CMsgGCToClientRecordContestVoteResponse: MessageFns$1<CMsgGCToClientRecordContestVoteResponse>;
interface CMsgDevGrantEventPoints {
    eventId: EEvent;
    eventPoints: number;
    premiumPoints: number;
}
declare const CMsgDevGrantEventPoints: MessageFns$1<CMsgDevGrantEventPoints>;
interface CMsgDevGrantEventPointsResponse {
    result: EDevEventRequestResult;
}
declare const CMsgDevGrantEventPointsResponse: MessageFns$1<CMsgDevGrantEventPointsResponse>;
interface CMsgDevGrantEventAction {
    eventId: EEvent;
    actionId: number;
    actionScore: number;
}
declare const CMsgDevGrantEventAction: MessageFns$1<CMsgDevGrantEventAction>;
interface CMsgDevGrantEventActionResponse {
    result: EDevEventRequestResult;
}
declare const CMsgDevGrantEventActionResponse: MessageFns$1<CMsgDevGrantEventActionResponse>;
interface CMsgDevDeleteEventActions {
    eventId: EEvent;
    startActionId: number;
    endActionId: number;
    removeAudit: boolean;
}
declare const CMsgDevDeleteEventActions: MessageFns$1<CMsgDevDeleteEventActions>;
interface CMsgDevDeleteEventActionsResponse {
    result: EDevEventRequestResult;
}
declare const CMsgDevDeleteEventActionsResponse: MessageFns$1<CMsgDevDeleteEventActionsResponse>;
interface CMsgDevResetEventState {
    eventId: EEvent;
    removeAudit: boolean;
}
declare const CMsgDevResetEventState: MessageFns$1<CMsgDevResetEventState>;
interface CMsgDevResetEventStateResponse {
    result: EDevEventRequestResult;
}
declare const CMsgDevResetEventStateResponse: MessageFns$1<CMsgDevResetEventStateResponse>;
interface CMsgConsumeEventSupportGrantItem {
    itemId: string;
}
declare const CMsgConsumeEventSupportGrantItem: MessageFns$1<CMsgConsumeEventSupportGrantItem>;
interface CMsgConsumeEventSupportGrantItemResponse {
    result: ESupportEventRequestResult;
}
declare const CMsgConsumeEventSupportGrantItemResponse: MessageFns$1<CMsgConsumeEventSupportGrantItemResponse>;
interface CMsgClientToGCGetFilteredPlayers {
}
declare const CMsgClientToGCGetFilteredPlayers: MessageFns$1<CMsgClientToGCGetFilteredPlayers>;
interface CMsgGCToClientGetFilteredPlayersResponse {
    result: CMsgGCToClientGetFilteredPlayersResponse_Result;
    filteredPlayers: CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry[];
    baseSlots: number;
    additionalSlots: number;
    nextSlotCost: number;
}
declare const CMsgGCToClientGetFilteredPlayersResponse: MessageFns$1<CMsgGCToClientGetFilteredPlayersResponse>;
interface CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry {
    accountId: number;
    timeAdded: number;
    timeExpires: number;
    note: string;
}
declare const CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry: MessageFns$1<CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry>;
interface CMsgClientToGCRemoveFilteredPlayer {
    accountIdToRemove: number;
}
declare const CMsgClientToGCRemoveFilteredPlayer: MessageFns$1<CMsgClientToGCRemoveFilteredPlayer>;
interface CMsgGCToClientRemoveFilteredPlayerResponse {
    result: CMsgGCToClientRemoveFilteredPlayerResponse_Result;
}
declare const CMsgGCToClientRemoveFilteredPlayerResponse: MessageFns$1<CMsgGCToClientRemoveFilteredPlayerResponse>;
interface CMsgClientToGCPurchaseFilteredPlayerSlot {
    additionalSlotsCurrent: number;
}
declare const CMsgClientToGCPurchaseFilteredPlayerSlot: MessageFns$1<CMsgClientToGCPurchaseFilteredPlayerSlot>;
interface CMsgGCToClientPurchaseFilteredPlayerSlotResponse {
    result: CMsgGCToClientPurchaseFilteredPlayerSlotResponse_Result;
    additionalSlots: number;
    nextSlotCost: number;
}
declare const CMsgGCToClientPurchaseFilteredPlayerSlotResponse: MessageFns$1<CMsgGCToClientPurchaseFilteredPlayerSlotResponse>;
interface CMsgClientToGCUpdateFilteredPlayerNote {
    targetAccountId: number;
    newNote: string;
}
declare const CMsgClientToGCUpdateFilteredPlayerNote: MessageFns$1<CMsgClientToGCUpdateFilteredPlayerNote>;
interface CMsgGCToClientUpdateFilteredPlayerNoteResponse {
    result: CMsgGCToClientUpdateFilteredPlayerNoteResponse_Result;
}
declare const CMsgGCToClientUpdateFilteredPlayerNoteResponse: MessageFns$1<CMsgGCToClientUpdateFilteredPlayerNoteResponse>;
interface CMsgPartySearchPlayer {
    accountId: number;
    matchId: string;
    creationTime: number;
}
declare const CMsgPartySearchPlayer: MessageFns$1<CMsgPartySearchPlayer>;
interface CMsgGCToClientPlayerBeaconState {
    numActiveBeacons: number[];
}
declare const CMsgGCToClientPlayerBeaconState: MessageFns$1<CMsgGCToClientPlayerBeaconState>;
interface CMsgGCToClientPartyBeaconUpdate {
    beaconAdded: boolean;
    beaconType: number;
    accountId: number;
}
declare const CMsgGCToClientPartyBeaconUpdate: MessageFns$1<CMsgGCToClientPartyBeaconUpdate>;
interface CMsgClientToGCUpdatePartyBeacon {
    action: CMsgClientToGCUpdatePartyBeacon_Action;
}
declare const CMsgClientToGCUpdatePartyBeacon: MessageFns$1<CMsgClientToGCUpdatePartyBeacon>;
interface CMsgClientToGCRequestActiveBeaconParties {
}
declare const CMsgClientToGCRequestActiveBeaconParties: MessageFns$1<CMsgClientToGCRequestActiveBeaconParties>;
interface CMsgGCToClientRequestActiveBeaconPartiesResponse {
    response: CMsgGCToClientRequestActiveBeaconPartiesResponse_EResponse;
    activeParties: CPartySearchClientParty[];
}
declare const CMsgGCToClientRequestActiveBeaconPartiesResponse: MessageFns$1<CMsgGCToClientRequestActiveBeaconPartiesResponse>;
interface CMsgClientToGCJoinPartyFromBeacon {
    partyId: string;
    accountId: number;
    beaconType: number;
}
declare const CMsgClientToGCJoinPartyFromBeacon: MessageFns$1<CMsgClientToGCJoinPartyFromBeacon>;
interface CMsgGCToClientJoinPartyFromBeaconResponse {
    response: CMsgGCToClientJoinPartyFromBeaconResponse_EResponse;
}
declare const CMsgGCToClientJoinPartyFromBeaconResponse: MessageFns$1<CMsgGCToClientJoinPartyFromBeaconResponse>;
interface CMsgClientToGCManageFavorites {
    action: CMsgClientToGCManageFavorites_Action;
    accountId: number;
    favoriteName: string;
    inviteResponse: boolean;
    fromFriendlist: boolean;
    lobbyId: string;
}
declare const CMsgClientToGCManageFavorites: MessageFns$1<CMsgClientToGCManageFavorites>;
interface CMsgGCToClientManageFavoritesResponse {
    response: CMsgGCToClientManageFavoritesResponse_EResponse;
    debugMessage: string;
    player: CMsgPartySearchPlayer | undefined;
}
declare const CMsgGCToClientManageFavoritesResponse: MessageFns$1<CMsgGCToClientManageFavoritesResponse>;
interface CMsgClientToGCGetFavoritePlayers {
    paginationKey: string;
    paginationCount: number;
}
declare const CMsgClientToGCGetFavoritePlayers: MessageFns$1<CMsgClientToGCGetFavoritePlayers>;
interface CMsgGCToClientGetFavoritePlayersResponse {
    response: CMsgGCToClientGetFavoritePlayersResponse_EResponse;
    players: CMsgPartySearchPlayer[];
    nextPaginationKey: string;
}
declare const CMsgGCToClientGetFavoritePlayersResponse: MessageFns$1<CMsgGCToClientGetFavoritePlayersResponse>;
interface CMsgGCToClientPartySearchInvite {
    accountId: number;
}
declare const CMsgGCToClientPartySearchInvite: MessageFns$1<CMsgGCToClientPartySearchInvite>;
interface CMsgClientToGCVerifyFavoritePlayers {
    accountIds: number[];
}
declare const CMsgClientToGCVerifyFavoritePlayers: MessageFns$1<CMsgClientToGCVerifyFavoritePlayers>;
interface CMsgGCToClientVerifyFavoritePlayersResponse {
    results: CMsgGCToClientVerifyFavoritePlayersResponse_Result[];
}
declare const CMsgGCToClientVerifyFavoritePlayersResponse: MessageFns$1<CMsgGCToClientVerifyFavoritePlayersResponse>;
interface CMsgGCToClientVerifyFavoritePlayersResponse_Result {
    player: CMsgPartySearchPlayer | undefined;
    isFavorite: boolean;
}
declare const CMsgGCToClientVerifyFavoritePlayersResponse_Result: MessageFns$1<CMsgGCToClientVerifyFavoritePlayersResponse_Result>;
interface CMsgClientToGCRequestPlayerRecentAccomplishments {
    accountId: number;
}
declare const CMsgClientToGCRequestPlayerRecentAccomplishments: MessageFns$1<CMsgClientToGCRequestPlayerRecentAccomplishments>;
interface CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse {
    result: CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse_EResponse;
    playerAccomplishments: CMsgPlayerRecentAccomplishments | undefined;
}
declare const CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse: MessageFns$1<CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse>;
interface CMsgClientToGCRequestPlayerHeroRecentAccomplishments {
    accountId: number;
    heroId: number;
}
declare const CMsgClientToGCRequestPlayerHeroRecentAccomplishments: MessageFns$1<CMsgClientToGCRequestPlayerHeroRecentAccomplishments>;
interface CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse {
    result: CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse_EResponse;
    heroAccomplishments: CMsgPlayerHeroRecentAccomplishments | undefined;
}
declare const CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse: MessageFns$1<CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse>;
interface CMsgClientToGCSubmitPlayerMatchSurvey {
    matchId: string;
    rating: number;
    flags: number;
}
declare const CMsgClientToGCSubmitPlayerMatchSurvey: MessageFns$1<CMsgClientToGCSubmitPlayerMatchSurvey>;
interface CMsgClientToGCSubmitPlayerMatchSurveyResponse {
    eresult: CMsgClientToGCSubmitPlayerMatchSurveyResponse_EResponse;
    accountId: number;
}
declare const CMsgClientToGCSubmitPlayerMatchSurveyResponse: MessageFns$1<CMsgClientToGCSubmitPlayerMatchSurveyResponse>;
interface CMsgGCToClientVACReminder {
}
declare const CMsgGCToClientVACReminder: MessageFns$1<CMsgGCToClientVACReminder>;
interface CMsgClientToGCUnderDraftRequest {
    accountId: number;
    eventId: number;
}
declare const CMsgClientToGCUnderDraftRequest: MessageFns$1<CMsgClientToGCUnderDraftRequest>;
interface CMsgClientToGCUnderDraftResponse {
    result: EUnderDraftResponse;
    accountId: number;
    eventId: number;
    draftData: CMsgUnderDraftData | undefined;
}
declare const CMsgClientToGCUnderDraftResponse: MessageFns$1<CMsgClientToGCUnderDraftResponse>;
interface CMsgClientToGCUnderDraftReroll {
    eventId: number;
}
declare const CMsgClientToGCUnderDraftReroll: MessageFns$1<CMsgClientToGCUnderDraftReroll>;
interface CMsgClientToGCUnderDraftRerollResponse {
    result: EUnderDraftResponse;
    eventId: number;
    draftData: CMsgUnderDraftData | undefined;
}
declare const CMsgClientToGCUnderDraftRerollResponse: MessageFns$1<CMsgClientToGCUnderDraftRerollResponse>;
interface CMsgClientToGCUnderDraftBuy {
    eventId: number;
    slotId: number;
}
declare const CMsgClientToGCUnderDraftBuy: MessageFns$1<CMsgClientToGCUnderDraftBuy>;
interface CMsgGCToClientGuildUnderDraftGoldUpdated {
    eventId: number;
}
declare const CMsgGCToClientGuildUnderDraftGoldUpdated: MessageFns$1<CMsgGCToClientGuildUnderDraftGoldUpdated>;
interface CMsgClientToGCUnderDraftBuyResponse {
    result: EUnderDraftResponse;
    eventId: number;
    slotId: number;
    draftData: CMsgUnderDraftData | undefined;
}
declare const CMsgClientToGCUnderDraftBuyResponse: MessageFns$1<CMsgClientToGCUnderDraftBuyResponse>;
interface CMsgClientToGCUnderDraftRollBackBench {
    eventId: number;
}
declare const CMsgClientToGCUnderDraftRollBackBench: MessageFns$1<CMsgClientToGCUnderDraftRollBackBench>;
interface CMsgClientToGCUnderDraftRollBackBenchResponse {
    result: EUnderDraftResponse;
    eventId: number;
    draftData: CMsgUnderDraftData | undefined;
}
declare const CMsgClientToGCUnderDraftRollBackBenchResponse: MessageFns$1<CMsgClientToGCUnderDraftRollBackBenchResponse>;
interface CMsgClientToGCUnderDraftSell {
    eventId: number;
    slotId: number;
}
declare const CMsgClientToGCUnderDraftSell: MessageFns$1<CMsgClientToGCUnderDraftSell>;
interface CMsgClientToGCUnderDraftSellResponse {
    result: EUnderDraftResponse;
    eventId: number;
    slotId: number;
    draftData: CMsgUnderDraftData | undefined;
}
declare const CMsgClientToGCUnderDraftSellResponse: MessageFns$1<CMsgClientToGCUnderDraftSellResponse>;
interface CMsgClientToGCUnderDraftRedeemReward {
    eventId: number;
    actionId: number;
}
declare const CMsgClientToGCUnderDraftRedeemReward: MessageFns$1<CMsgClientToGCUnderDraftRedeemReward>;
interface CMsgClientToGCUnderDraftRedeemRewardResponse {
    result: EUnderDraftResponse;
}
declare const CMsgClientToGCUnderDraftRedeemRewardResponse: MessageFns$1<CMsgClientToGCUnderDraftRedeemRewardResponse>;
interface CMsgClientToGCSubmitDraftTriviaMatchAnswer {
    choseRadiantAsWinner: boolean;
    eventId: number;
    endTime: number;
}
declare const CMsgClientToGCSubmitDraftTriviaMatchAnswer: MessageFns$1<CMsgClientToGCSubmitDraftTriviaMatchAnswer>;
interface CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse {
    result: EDOTADraftTriviaAnswerResult;
}
declare const CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse: MessageFns$1<CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse>;
interface CMsgDraftTriviaVoteCount {
    totalVotes: number;
    radiantVotes: number;
    direVotes: number;
}
declare const CMsgDraftTriviaVoteCount: MessageFns$1<CMsgDraftTriviaVoteCount>;
interface CMsgClientToGCRequestReporterUpdates {
}
declare const CMsgClientToGCRequestReporterUpdates: MessageFns$1<CMsgClientToGCRequestReporterUpdates>;
interface CMsgClientToGCRequestReporterUpdatesResponse {
    enumResult: CMsgClientToGCRequestReporterUpdatesResponse_EResponse;
    updates: CMsgClientToGCRequestReporterUpdatesResponse_ReporterUpdate[];
    numReported: number;
    numNoActionTaken: number;
}
declare const CMsgClientToGCRequestReporterUpdatesResponse: MessageFns$1<CMsgClientToGCRequestReporterUpdatesResponse>;
interface CMsgClientToGCRequestReporterUpdatesResponse_ReporterUpdate {
    matchId: string;
    heroId: number;
    reportReason: number;
    timestamp: number;
}
declare const CMsgClientToGCRequestReporterUpdatesResponse_ReporterUpdate: MessageFns$1<CMsgClientToGCRequestReporterUpdatesResponse_ReporterUpdate>;
interface CMsgClientToGCAcknowledgeReporterUpdates {
    matchIds: string[];
}
declare const CMsgClientToGCAcknowledgeReporterUpdates: MessageFns$1<CMsgClientToGCAcknowledgeReporterUpdates>;
interface CMsgClientToGCRecalibrateMMR {
}
declare const CMsgClientToGCRecalibrateMMR: MessageFns$1<CMsgClientToGCRecalibrateMMR>;
interface CMsgClientToGCRecalibrateMMRResponse {
    result: CMsgClientToGCRecalibrateMMRResponse_EResponse;
}
declare const CMsgClientToGCRecalibrateMMRResponse: MessageFns$1<CMsgClientToGCRecalibrateMMRResponse>;
interface CMsgDOTAPostGameItemAwardNotification {
    receiverAccountId: number;
    itemDefIndex: number[];
    actionId: number;
}
declare const CMsgDOTAPostGameItemAwardNotification: MessageFns$1<CMsgDOTAPostGameItemAwardNotification>;
interface CMsgClientToGCGetOWMatchDetails {
}
declare const CMsgClientToGCGetOWMatchDetails: MessageFns$1<CMsgClientToGCGetOWMatchDetails>;
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
declare const CMsgClientToGCGetOWMatchDetailsResponse: MessageFns$1<CMsgClientToGCGetOWMatchDetailsResponse>;
interface CMsgClientToGCGetOWMatchDetailsResponse_Marker {
    startGameTimeS: number;
    endGameTimeS: number;
}
declare const CMsgClientToGCGetOWMatchDetailsResponse_Marker: MessageFns$1<CMsgClientToGCGetOWMatchDetailsResponse_Marker>;
interface CMsgClientToGCSubmitOWConviction {
    overwatchReplayId: string;
    targetPlayerSlot: number;
    cheatingConviction: EOverwatchConviction;
    griefingConviction: EOverwatchConviction;
}
declare const CMsgClientToGCSubmitOWConviction: MessageFns$1<CMsgClientToGCSubmitOWConviction>;
interface CMsgClientToGCSubmitOWConvictionResponse {
    result: CMsgClientToGCSubmitOWConvictionResponse_EResponse;
    overwatchReplayId: string;
}
declare const CMsgClientToGCSubmitOWConvictionResponse: MessageFns$1<CMsgClientToGCSubmitOWConvictionResponse>;
interface CMsgClientToGCChinaSSAURLRequest {
}
declare const CMsgClientToGCChinaSSAURLRequest: MessageFns$1<CMsgClientToGCChinaSSAURLRequest>;
interface CMsgClientToGCChinaSSAURLResponse {
    agreementUrl: string;
}
declare const CMsgClientToGCChinaSSAURLResponse: MessageFns$1<CMsgClientToGCChinaSSAURLResponse>;
interface CMsgClientToGCChinaSSAAcceptedRequest {
}
declare const CMsgClientToGCChinaSSAAcceptedRequest: MessageFns$1<CMsgClientToGCChinaSSAAcceptedRequest>;
interface CMsgClientToGCChinaSSAAcceptedResponse {
    agreementAccepted: boolean;
}
declare const CMsgClientToGCChinaSSAAcceptedResponse: MessageFns$1<CMsgClientToGCChinaSSAAcceptedResponse>;
interface CMsgGCToClientOverwatchCasesAvailable {
    expireTime: number;
}
declare const CMsgGCToClientOverwatchCasesAvailable: MessageFns$1<CMsgGCToClientOverwatchCasesAvailable>;
interface CMsgClientToGCStartWatchingOverwatch {
    overwatchReplayId: string;
    targetPlayerSlot: number;
}
declare const CMsgClientToGCStartWatchingOverwatch: MessageFns$1<CMsgClientToGCStartWatchingOverwatch>;
interface CMsgClientToGCStopWatchingOverwatch {
    overwatchReplayId: string;
    targetPlayerSlot: number;
}
declare const CMsgClientToGCStopWatchingOverwatch: MessageFns$1<CMsgClientToGCStopWatchingOverwatch>;
interface CMsgClientToGCOverwatchReplayError {
    overwatchReplayId: string;
}
declare const CMsgClientToGCOverwatchReplayError: MessageFns$1<CMsgClientToGCOverwatchReplayError>;
interface CMsgClientToGCGetDPCFavorites {
}
declare const CMsgClientToGCGetDPCFavorites: MessageFns$1<CMsgClientToGCGetDPCFavorites>;
interface CMsgClientToGCGetDPCFavoritesResponse {
    result: CMsgClientToGCGetDPCFavoritesResponse_EResponse;
    favorites: CMsgClientToGCGetDPCFavoritesResponse_Favorite[];
}
declare const CMsgClientToGCGetDPCFavoritesResponse: MessageFns$1<CMsgClientToGCGetDPCFavoritesResponse>;
interface CMsgClientToGCGetDPCFavoritesResponse_Favorite {
    favoriteType: EDPCFavoriteType;
    favoriteId: number;
}
declare const CMsgClientToGCGetDPCFavoritesResponse_Favorite: MessageFns$1<CMsgClientToGCGetDPCFavoritesResponse_Favorite>;
interface CMsgClientToGCSetDPCFavoriteState {
    favoriteType: EDPCFavoriteType;
    favoriteId: number;
    enabled: boolean;
}
declare const CMsgClientToGCSetDPCFavoriteState: MessageFns$1<CMsgClientToGCSetDPCFavoriteState>;
interface CMsgClientToGCSetDPCFavoriteStateResponse {
    result: CMsgClientToGCSetDPCFavoriteStateResponse_EResponse;
}
declare const CMsgClientToGCSetDPCFavoriteStateResponse: MessageFns$1<CMsgClientToGCSetDPCFavoriteStateResponse>;
interface CMsgClientToGCSetEventActiveSeasonID {
    eventId: number;
    activeSeasonId: number;
}
declare const CMsgClientToGCSetEventActiveSeasonID: MessageFns$1<CMsgClientToGCSetEventActiveSeasonID>;
interface CMsgClientToGCSetEventActiveSeasonIDResponse {
    result: CMsgClientToGCSetEventActiveSeasonIDResponse_EResponse;
}
declare const CMsgClientToGCSetEventActiveSeasonIDResponse: MessageFns$1<CMsgClientToGCSetEventActiveSeasonIDResponse>;
interface CMsgClientToGCPurchaseLabyrinthBlessings {
    eventId: EEvent;
    blessingIds: number[];
    debug: boolean;
    debugRemove: boolean;
}
declare const CMsgClientToGCPurchaseLabyrinthBlessings: MessageFns$1<CMsgClientToGCPurchaseLabyrinthBlessings>;
interface CMsgClientToGCPurchaseLabyrinthBlessingsResponse {
    result: CMsgClientToGCPurchaseLabyrinthBlessingsResponse_EResponse;
}
declare const CMsgClientToGCPurchaseLabyrinthBlessingsResponse: MessageFns$1<CMsgClientToGCPurchaseLabyrinthBlessingsResponse>;
interface CMsgClientToGCGetStickerbookRequest {
    accountId: number;
}
declare const CMsgClientToGCGetStickerbookRequest: MessageFns$1<CMsgClientToGCGetStickerbookRequest>;
interface CMsgClientToGCGetStickerbookResponse {
    response: CMsgClientToGCGetStickerbookResponse_EResponse;
    stickerbook: CMsgStickerbook | undefined;
}
declare const CMsgClientToGCGetStickerbookResponse: MessageFns$1<CMsgClientToGCGetStickerbookResponse>;
interface CMsgClientToGCCreateStickerbookPageRequest {
    teamId: number;
    eventId: EEvent;
    pageType: EStickerbookPageType;
}
declare const CMsgClientToGCCreateStickerbookPageRequest: MessageFns$1<CMsgClientToGCCreateStickerbookPageRequest>;
interface CMsgClientToGCCreateStickerbookPageResponse {
    response: CMsgClientToGCCreateStickerbookPageResponse_EResponse;
    pageNumber: number;
}
declare const CMsgClientToGCCreateStickerbookPageResponse: MessageFns$1<CMsgClientToGCCreateStickerbookPageResponse>;
interface CMsgClientToGCDeleteStickerbookPageRequest {
    pageNum: number;
    stickerCount: number;
    stickerMax: number;
}
declare const CMsgClientToGCDeleteStickerbookPageRequest: MessageFns$1<CMsgClientToGCDeleteStickerbookPageRequest>;
interface CMsgClientToGCDeleteStickerbookPageResponse {
    response: CMsgClientToGCDeleteStickerbookPageResponse_EResponse;
}
declare const CMsgClientToGCDeleteStickerbookPageResponse: MessageFns$1<CMsgClientToGCDeleteStickerbookPageResponse>;
interface CMsgClientToGCPlaceStickersRequest {
    stickerItems: CMsgClientToGCPlaceStickersRequest_StickerItem[];
}
declare const CMsgClientToGCPlaceStickersRequest: MessageFns$1<CMsgClientToGCPlaceStickersRequest>;
interface CMsgClientToGCPlaceStickersRequest_StickerItem {
    pageNum: number;
    sticker: CMsgStickerbookSticker | undefined;
}
declare const CMsgClientToGCPlaceStickersRequest_StickerItem: MessageFns$1<CMsgClientToGCPlaceStickersRequest_StickerItem>;
interface CMsgClientToGCPlaceStickersResponse {
    response: CMsgClientToGCPlaceStickersResponse_EResponse;
}
declare const CMsgClientToGCPlaceStickersResponse: MessageFns$1<CMsgClientToGCPlaceStickersResponse>;
interface CMsgClientToGCPlaceCollectionStickersRequest {
    slots: CMsgClientToGCPlaceCollectionStickersRequest_Slot[];
}
declare const CMsgClientToGCPlaceCollectionStickersRequest: MessageFns$1<CMsgClientToGCPlaceCollectionStickersRequest>;
interface CMsgClientToGCPlaceCollectionStickersRequest_Slot {
    pageNum: number;
    slot: number;
    newItemId: string;
    oldItemDefId: number;
    oldQuality: number;
}
declare const CMsgClientToGCPlaceCollectionStickersRequest_Slot: MessageFns$1<CMsgClientToGCPlaceCollectionStickersRequest_Slot>;
interface CMsgClientToGCPlaceCollectionStickersResponse {
    response: CMsgClientToGCPlaceCollectionStickersResponse_EResponse;
}
declare const CMsgClientToGCPlaceCollectionStickersResponse: MessageFns$1<CMsgClientToGCPlaceCollectionStickersResponse>;
interface CMsgClientToGCOrderStickerbookTeamPageRequest {
    pageOrderSequence: CMsgStickerbookTeamPageOrderSequence | undefined;
}
declare const CMsgClientToGCOrderStickerbookTeamPageRequest: MessageFns$1<CMsgClientToGCOrderStickerbookTeamPageRequest>;
interface CMsgClientToGCOrderStickerbookTeamPageResponse {
    response: CMsgClientToGCOrderStickerbookTeamPageResponse_EResponse;
}
declare const CMsgClientToGCOrderStickerbookTeamPageResponse: MessageFns$1<CMsgClientToGCOrderStickerbookTeamPageResponse>;
interface CMsgClientToGCSetHeroSticker {
    heroId: number;
    newItemId: string;
    oldItemId: string;
}
declare const CMsgClientToGCSetHeroSticker: MessageFns$1<CMsgClientToGCSetHeroSticker>;
interface CMsgClientToGCSetHeroStickerResponse {
    response: CMsgClientToGCSetHeroStickerResponse_EResponse;
}
declare const CMsgClientToGCSetHeroStickerResponse: MessageFns$1<CMsgClientToGCSetHeroStickerResponse>;
interface CMsgClientToGCGetHeroStickers {
}
declare const CMsgClientToGCGetHeroStickers: MessageFns$1<CMsgClientToGCGetHeroStickers>;
interface CMsgClientToGCGetHeroStickersResponse {
    response: CMsgClientToGCGetHeroStickersResponse_EResponse;
    stickerHeroes: CMsgStickerHeroes | undefined;
}
declare const CMsgClientToGCGetHeroStickersResponse: MessageFns$1<CMsgClientToGCGetHeroStickersResponse>;
interface CMsgClientToGCSetFavoritePage {
    pageNum: number;
    clear: boolean;
}
declare const CMsgClientToGCSetFavoritePage: MessageFns$1<CMsgClientToGCSetFavoritePage>;
interface CMsgClientToGCSetFavoritePageResponse {
    response: CMsgClientToGCSetFavoritePageResponse_EResponse;
}
declare const CMsgClientToGCSetFavoritePageResponse: MessageFns$1<CMsgClientToGCSetFavoritePageResponse>;
interface CMsgClientToGCClaimSwag {
    eventId: EEvent;
    actionId: number;
    data: number;
}
declare const CMsgClientToGCClaimSwag: MessageFns$1<CMsgClientToGCClaimSwag>;
interface CMsgClientToGCClaimSwagResponse {
    response: CMsgClientToGCClaimSwagResponse_EResponse;
}
declare const CMsgClientToGCClaimSwagResponse: MessageFns$1<CMsgClientToGCClaimSwagResponse>;
interface CMsgClientToGCCollectorsCacheAvailableDataRequest {
    contestId: number;
}
declare const CMsgClientToGCCollectorsCacheAvailableDataRequest: MessageFns$1<CMsgClientToGCCollectorsCacheAvailableDataRequest>;
interface CMsgGCToClientCollectorsCacheAvailableDataResponse {
    votes: CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote[];
}
declare const CMsgGCToClientCollectorsCacheAvailableDataResponse: MessageFns$1<CMsgGCToClientCollectorsCacheAvailableDataResponse>;
interface CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote {
    itemDef: number;
    voteType: CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote_EVoteType;
}
declare const CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote: MessageFns$1<CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote>;
interface CMsgClientToGCUploadMatchClip {
    matchClip: CMatchClip | undefined;
}
declare const CMsgClientToGCUploadMatchClip: MessageFns$1<CMsgClientToGCUploadMatchClip>;
interface CMsgGCToClientUploadMatchClipResponse {
    response: CMsgGCToClientUploadMatchClipResponse_EResponse;
}
declare const CMsgGCToClientUploadMatchClipResponse: MessageFns$1<CMsgGCToClientUploadMatchClipResponse>;
interface CMsgClientToGCMapStatsRequest {
}
declare const CMsgClientToGCMapStatsRequest: MessageFns$1<CMsgClientToGCMapStatsRequest>;
interface CMsgGCToClientMapStatsResponse {
    response: CMsgGCToClientMapStatsResponse_EResponse;
    personalStats: CMsgMapStatsSnapshot | undefined;
    globalStats: CMsgGlobalMapStats | undefined;
}
declare const CMsgGCToClientMapStatsResponse: MessageFns$1<CMsgGCToClientMapStatsResponse>;
interface CMsgRoadToTIAssignedQuest {
    questId: number;
    difficulty: number;
    progressFlags: number;
    halfCreditFlags: number;
    completed: boolean;
}
declare const CMsgRoadToTIAssignedQuest: MessageFns$1<CMsgRoadToTIAssignedQuest>;
interface CMsgRoadToTIUserData {
    quests: CMsgRoadToTIAssignedQuest[];
}
declare const CMsgRoadToTIUserData: MessageFns$1<CMsgRoadToTIUserData>;
interface CMsgClientToGCRoadToTIGetQuests {
    eventId: number;
}
declare const CMsgClientToGCRoadToTIGetQuests: MessageFns$1<CMsgClientToGCRoadToTIGetQuests>;
interface CMsgClientToGCRoadToTIGetQuestsResponse {
    response: CMsgClientToGCRoadToTIGetQuestsResponse_EResponse;
    questData: CMsgRoadToTIUserData | undefined;
}
declare const CMsgClientToGCRoadToTIGetQuestsResponse: MessageFns$1<CMsgClientToGCRoadToTIGetQuestsResponse>;
interface CMsgClientToGCRoadToTIGetActiveQuest {
    eventId: number;
}
declare const CMsgClientToGCRoadToTIGetActiveQuest: MessageFns$1<CMsgClientToGCRoadToTIGetActiveQuest>;
interface CMsgClientToGCRoadToTIGetActiveQuestResponse {
    response: CMsgClientToGCRoadToTIGetActiveQuestResponse_EResponse;
    questData: CMsgRoadToTIAssignedQuest | undefined;
}
declare const CMsgClientToGCRoadToTIGetActiveQuestResponse: MessageFns$1<CMsgClientToGCRoadToTIGetActiveQuestResponse>;
interface CMsgGCToClientRoadToTIQuestDataUpdated {
    eventId: number;
    questData: CMsgRoadToTIUserData | undefined;
}
declare const CMsgGCToClientRoadToTIQuestDataUpdated: MessageFns$1<CMsgGCToClientRoadToTIQuestDataUpdated>;
interface CMsgClientToGCRoadToTIUseItem {
    eventId: number;
    itemType: number;
    heroIndex: number;
}
declare const CMsgClientToGCRoadToTIUseItem: MessageFns$1<CMsgClientToGCRoadToTIUseItem>;
interface CMsgClientToGCRoadToTIUseItemResponse {
    response: CMsgClientToGCRoadToTIUseItemResponse_EResponse;
}
declare const CMsgClientToGCRoadToTIUseItemResponse: MessageFns$1<CMsgClientToGCRoadToTIUseItemResponse>;
interface CMsgClientToGCRoadToTIDevForceQuest {
    eventId: number;
    forceMatchType: boolean;
    forceId: number;
}
declare const CMsgClientToGCRoadToTIDevForceQuest: MessageFns$1<CMsgClientToGCRoadToTIDevForceQuest>;
interface CMsgLobbyRoadToTIMatchQuestData {
    questData: CMsgRoadToTIAssignedQuest | undefined;
    questPeriod: number;
    questNumber: number;
}
declare const CMsgLobbyRoadToTIMatchQuestData: MessageFns$1<CMsgLobbyRoadToTIMatchQuestData>;
interface CMsgClientToGCNewBloomGift {
    defindex: number;
    lobbyId: string;
    targetAccountIds: number[];
}
declare const CMsgClientToGCNewBloomGift: MessageFns$1<CMsgClientToGCNewBloomGift>;
interface CMsgClientToGCNewBloomGiftResponse {
    result: ENewBloomGiftingResponse;
    receivedAccountIds: number[];
}
declare const CMsgClientToGCNewBloomGiftResponse: MessageFns$1<CMsgClientToGCNewBloomGiftResponse>;
interface CMsgClientToGCSetBannedHeroes {
    bannedHeroIds: number[];
}
declare const CMsgClientToGCSetBannedHeroes: MessageFns$1<CMsgClientToGCSetBannedHeroes>;
interface CMsgClientToGCUpdateComicBookStats {
    comicId: number;
    stats: CMsgClientToGCUpdateComicBookStats_SingleStat[];
    languageStats: CMsgClientToGCUpdateComicBookStats_LanguageStats | undefined;
}
declare const CMsgClientToGCUpdateComicBookStats: MessageFns$1<CMsgClientToGCUpdateComicBookStats>;
interface CMsgClientToGCUpdateComicBookStats_SingleStat {
    statType: CMsgClientToGCUpdateComicBookStatType;
    statValue: number;
}
declare const CMsgClientToGCUpdateComicBookStats_SingleStat: MessageFns$1<CMsgClientToGCUpdateComicBookStats_SingleStat>;
interface CMsgClientToGCUpdateComicBookStats_LanguageStats {
    comicId: number;
    clientLanguage: number;
    clientComicLanguage: number;
}
declare const CMsgClientToGCUpdateComicBookStats_LanguageStats: MessageFns$1<CMsgClientToGCUpdateComicBookStats_LanguageStats>;
interface CMsgGCRankedPlayerInfoSubmit {
    name: string;
}
declare const CMsgGCRankedPlayerInfoSubmit: MessageFns$1<CMsgGCRankedPlayerInfoSubmit>;
interface CMsgGCRankedPlayerInfoSubmitResponse {
    result: CMsgGCRankedPlayerInfoSubmitResponse_EResult;
}
declare const CMsgGCRankedPlayerInfoSubmitResponse: MessageFns$1<CMsgGCRankedPlayerInfoSubmitResponse>;
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

export { CMsgAdjustItemEquippedState as $, CGCToGCMsgMasterStartupComplete_GCInfo as A, CGCToGCMsgRouted as B, CMsgClientWelcome as C, CGCToGCMsgRoutedReply as D, EDOTAGCMsg as E, CIPLocationInfo as F, GCConnectionStatus as G, CLobbyBroadcastChannelInfo as H, CLobbyGuildChallenge as I, CLobbyGuildDetails as J, CLobbyTeamDetails as K, CLobbyTimedRewardDetails as L, CMatchPlayerTimedStatAverages as M, CMatchPlayerTimedStatStdDeviations as N, CMsgAccountGuildEventData as O, CMsgActivatePlusFreeTrialResponse as P, CMsgActivatePlusFreeTrialResponse_Result as Q, CMsgAddItemToSocket as R, CMsgAddItemToSocketData as S, CMsgAddItemToSocketResponse as T, CMsgAddItemToSocketResponse_EAddGem as U, CMsgAddSocket as V, CMsgAddSocketResponse as W, CMsgAddSocketResponse_EAddSocket as X, CMsgAdditionalLobbyStartupAccountData as Y, CMsgAdditionalLobbyStartupAccountData_ChatWheelMessageRange as Z, CMsgAdditionalLobbyStartupAccountData_PingWheelMessageRange as _, EGCBaseClientMsg as a, CMsgClientToGCCreateStickerbookPageResponse_EResponse as a$, CMsgApplyAutograph as a0, CMsgApplyEggEssence as a1, CMsgApplyPennantUpgrade as a2, CMsgApplyRemoteConVars as a3, CMsgApplyRemoteConVars_ConVar as a4, CMsgApplyStrangePart as a5, CMsgBalancedShuffleLobby as a6, CMsgBannedWordList as a7, CMsgClientHello as a8, CMsgClientPingData as a9, CMsgClientToGCCavernCrawlUseItemOnRoomResponse_Result as aA, CMsgClientToGCChinaSSAAcceptedRequest as aB, CMsgClientToGCChinaSSAAcceptedResponse as aC, CMsgClientToGCChinaSSAURLRequest as aD, CMsgClientToGCChinaSSAURLResponse as aE, CMsgClientToGCClaimEventActionUsingItem as aF, CMsgClientToGCClaimEventActionUsingItemResponse as aG, CMsgClientToGCClaimLeaderboardRewards as aH, CMsgClientToGCClaimLeaderboardRewardsResponse as aI, CMsgClientToGCClaimLeaderboardRewardsResponse_EResponse as aJ, CMsgClientToGCClaimSwag as aK, CMsgClientToGCClaimSwagResponse as aL, CMsgClientToGCClaimSwagResponse_EResponse as aM, CMsgClientToGCCollectorsCacheAvailableDataRequest as aN, CMsgClientToGCCreateHeroStatue as aO, CMsgClientToGCCreatePlayerCardPack as aP, CMsgClientToGCCreatePlayerCardPackResponse as aQ, CMsgClientToGCCreatePlayerCardPackResponse_Result as aR, CMsgClientToGCCreateStaticRecipe as aS, CMsgClientToGCCreateStaticRecipeResponse as aT, CMsgClientToGCCreateStaticRecipeResponse_AdditionalOutput as aU, CMsgClientToGCCreateStaticRecipeResponse_EResponse as aV, CMsgClientToGCCreateStaticRecipeResponse_InputError as aW, CMsgClientToGCCreateStaticRecipeResponse_OutputItem as aX, CMsgClientToGCCreateStaticRecipe_Item as aY, CMsgClientToGCCreateStickerbookPageRequest as aZ, CMsgClientToGCCreateStickerbookPageResponse as a_, CMsgClientSuspended as aa, CMsgClientToGCAcknowledgeReporterUpdates as ab, CMsgClientToGCAggregateMetrics as ac, CMsgClientToGCAggregateMetrics_SingleMetric as ad, CMsgClientToGCApplyGemCombiner as ae, CMsgClientToGCCancelUnfinalizedTransactions as af, CMsgClientToGCCancelUnfinalizedTransactionsResponse as ag, CMsgClientToGCCavernCrawlClaimRoom as ah, CMsgClientToGCCavernCrawlClaimRoomResponse as ai, CMsgClientToGCCavernCrawlClaimRoomResponse_Result as aj, CMsgClientToGCCavernCrawlGetClaimedRoomCount as ak, CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse as al, CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_MapVariant as am, CMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_Result as an, CMsgClientToGCCavernCrawlRequestMapState as ao, CMsgClientToGCCavernCrawlRequestMapStateResponse as ap, CMsgClientToGCCavernCrawlRequestMapStateResponse_InventoryItem as aq, CMsgClientToGCCavernCrawlRequestMapStateResponse_MapVariant as ar, CMsgClientToGCCavernCrawlRequestMapStateResponse_Result as as, CMsgClientToGCCavernCrawlRequestMapStateResponse_SwappedChallenge as at, CMsgClientToGCCavernCrawlRequestMapStateResponse_TreasureMap as au, CMsgClientToGCCavernCrawlUseItemOnPath as av, CMsgClientToGCCavernCrawlUseItemOnPathResponse as aw, CMsgClientToGCCavernCrawlUseItemOnPathResponse_Result as ax, CMsgClientToGCCavernCrawlUseItemOnRoom as ay, CMsgClientToGCCavernCrawlUseItemOnRoomResponse as az, EGCBaseMsg as b, CMsgClientToGCManageFavorites as b$, CMsgClientToGCCreateTeamPlayerCardPack as b0, CMsgClientToGCCreateTeamPlayerCardPackResponse as b1, CMsgClientToGCCreateTeamPlayerCardPackResponse_Result as b2, CMsgClientToGCCustomGamesFriendsPlayedRequest as b3, CMsgClientToGCDeleteStickerbookPageRequest as b4, CMsgClientToGCDeleteStickerbookPageResponse as b5, CMsgClientToGCDeleteStickerbookPageResponse_EResponse as b6, CMsgClientToGCEmoticonDataRequest as b7, CMsgClientToGCEquipItems as b8, CMsgClientToGCEquipItemsResponse as b9, CMsgClientToGCGetOWMatchDetailsResponse_EResponse as bA, CMsgClientToGCGetOWMatchDetailsResponse_Marker as bB, CMsgClientToGCGetProfileCard as bC, CMsgClientToGCGetProfileCardStats as bD, CMsgClientToGCGetProfileTickets as bE, CMsgClientToGCGetQuestProgress as bF, CMsgClientToGCGetQuestProgressResponse as bG, CMsgClientToGCGetQuestProgressResponse_Challenge as bH, CMsgClientToGCGetQuestProgressResponse_Quest as bI, CMsgClientToGCGetStickerbookRequest as bJ, CMsgClientToGCGetStickerbookResponse as bK, CMsgClientToGCGetStickerbookResponse_EResponse as bL, CMsgClientToGCGetTrophyList as bM, CMsgClientToGCGetTrophyListResponse as bN, CMsgClientToGCGetTrophyListResponse_Trophy as bO, CMsgClientToGCH264Unsupported as bP, CMsgClientToGCHasPlayerVotedForMVP as bQ, CMsgClientToGCHasPlayerVotedForMVPResponse as bR, CMsgClientToGCIntegrityStatus as bS, CMsgClientToGCIntegrityStatus_keyvalue as bT, CMsgClientToGCJoinPartyFromBeacon as bU, CMsgClientToGCJoinPlaytest as bV, CMsgClientToGCJoinPlaytestResponse as bW, CMsgClientToGCLookupAccountName as bX, CMsgClientToGCLookupAccountNameResponse as bY, CMsgClientToGCMVPVoteTimeout as bZ, CMsgClientToGCMVPVoteTimeoutResponse as b_, CMsgClientToGCFriendsPlayedCustomGameRequest as ba, CMsgClientToGCGetAllHeroOrder as bb, CMsgClientToGCGetAllHeroOrderResponse as bc, CMsgClientToGCGetAllHeroProgress as bd, CMsgClientToGCGetAllHeroProgressResponse as be, CMsgClientToGCGetDPCFavorites as bf, CMsgClientToGCGetDPCFavoritesResponse as bg, CMsgClientToGCGetDPCFavoritesResponse_EResponse as bh, CMsgClientToGCGetDPCFavoritesResponse_Favorite as bi, CMsgClientToGCGetEventGoals as bj, CMsgClientToGCGetFavoritePlayers as bk, CMsgClientToGCGetFilteredPlayers as bl, CMsgClientToGCGetGiftPermissions as bm, CMsgClientToGCGetGiftPermissionsResponse as bn, CMsgClientToGCGetGiftPermissionsResponse_FriendPermission as bo, CMsgClientToGCGetHeroStickers as bp, CMsgClientToGCGetHeroStickersResponse as bq, CMsgClientToGCGetHeroStickersResponse_EResponse as br, CMsgClientToGCGetInFlightItemCharges as bs, CMsgClientToGCGetInFlightItemChargesResponse as bt, CMsgClientToGCGetInFlightItemChargesResponse_EResponse as bu, CMsgClientToGCGetLimitedItemPurchaseQuantity as bv, CMsgClientToGCGetLimitedItemPurchaseQuantityResponse as bw, CMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponse as bx, CMsgClientToGCGetOWMatchDetails as by, CMsgClientToGCGetOWMatchDetailsResponse as bz, ESOMsg as c, CMsgClientToGCPlaceCollectionStickersRequest as c$, CMsgClientToGCManageFavorites_Action as c0, CMsgClientToGCMapStatsRequest as c1, CMsgClientToGCNameItem as c2, CMsgClientToGCNameItemResponse as c3, CMsgClientToGCNameItemResponse_ENameItem as c4, CMsgClientToGCNewBloomGift as c5, CMsgClientToGCNewBloomGiftResponse as c6, CMsgClientToGCOpenPlayerCardPack as c7, CMsgClientToGCOpenPlayerCardPackResponse as c8, CMsgClientToGCOpenPlayerCardPackResponse_Result as c9, CMsgClientToGCOverworldGetDynamicImageResponse as cA, CMsgClientToGCOverworldGetDynamicImageResponse_EDynamicImageFormat as cB, CMsgClientToGCOverworldGetDynamicImageResponse_Image as cC, CMsgClientToGCOverworldGetUserData as cD, CMsgClientToGCOverworldGetUserDataResponse as cE, CMsgClientToGCOverworldGetUserDataResponse_EResponse as cF, CMsgClientToGCOverworldGiftTokens as cG, CMsgClientToGCOverworldGiftTokensResponse as cH, CMsgClientToGCOverworldGiftTokensResponse_EResponse as cI, CMsgClientToGCOverworldMinigameAction as cJ, CMsgClientToGCOverworldMinigameActionResponse as cK, CMsgClientToGCOverworldMinigameActionResponse_EResponse as cL, CMsgClientToGCOverworldMoveToNode as cM, CMsgClientToGCOverworldMoveToNodeResponse as cN, CMsgClientToGCOverworldMoveToNodeResponse_EResponse as cO, CMsgClientToGCOverworldRequestTokensNeededByFriend as cP, CMsgClientToGCOverworldRequestTokensNeededByFriendResponse as cQ, CMsgClientToGCOverworldRequestTokensNeededByFriendResponse_EResponse as cR, CMsgClientToGCOverworldTradeTokens as cS, CMsgClientToGCOverworldTradeTokensResponse as cT, CMsgClientToGCOverworldTradeTokensResponse_EResponse as cU, CMsgClientToGCOverworldVisitEncounter as cV, CMsgClientToGCOverworldVisitEncounterResponse as cW, CMsgClientToGCOverworldVisitEncounterResponse_EResponse as cX, CMsgClientToGCPackBundle as cY, CMsgClientToGCPackBundleResponse as cZ, CMsgClientToGCPackBundleResponse_EPackBundle as c_, CMsgClientToGCOrderStickerbookTeamPageRequest as ca, CMsgClientToGCOrderStickerbookTeamPageResponse as cb, CMsgClientToGCOrderStickerbookTeamPageResponse_EResponse as cc, CMsgClientToGCOverwatchReplayError as cd, CMsgClientToGCOverworldClaimEncounterReward as ce, CMsgClientToGCOverworldClaimEncounterRewardResponse as cf, CMsgClientToGCOverworldClaimEncounterRewardResponse_EResponse as cg, CMsgClientToGCOverworldCompletePath as ch, CMsgClientToGCOverworldCompletePathResponse as ci, CMsgClientToGCOverworldCompletePathResponse_EResponse as cj, CMsgClientToGCOverworldDevClearInventory as ck, CMsgClientToGCOverworldDevClearInventoryResponse as cl, CMsgClientToGCOverworldDevClearInventoryResponse_EResponse as cm, CMsgClientToGCOverworldDevGrantTokens as cn, CMsgClientToGCOverworldDevGrantTokensResponse as co, CMsgClientToGCOverworldDevGrantTokensResponse_EResponse as cp, CMsgClientToGCOverworldDevResetAll as cq, CMsgClientToGCOverworldDevResetAllResponse as cr, CMsgClientToGCOverworldDevResetAllResponse_EResponse as cs, CMsgClientToGCOverworldDevResetNode as ct, CMsgClientToGCOverworldDevResetNodeResponse as cu, CMsgClientToGCOverworldDevResetNodeResponse_EResponse as cv, CMsgClientToGCOverworldFeedback as cw, CMsgClientToGCOverworldFeedbackResponse as cx, CMsgClientToGCOverworldFeedbackResponse_EResponse as cy, CMsgClientToGCOverworldGetDynamicImage as cz, CExtraMsgBlock as d, CMsgClientToGCRequestReporterUpdates as d$, CMsgClientToGCPlaceCollectionStickersRequest_Slot as d0, CMsgClientToGCPlaceCollectionStickersResponse as d1, CMsgClientToGCPlaceCollectionStickersResponse_EResponse as d2, CMsgClientToGCPlaceStickersRequest as d3, CMsgClientToGCPlaceStickersRequest_StickerItem as d4, CMsgClientToGCPlaceStickersResponse as d5, CMsgClientToGCPlaceStickersResponse_EResponse as d6, CMsgClientToGCPlayerCardSpecificPurchaseRequest as d7, CMsgClientToGCPlayerCardSpecificPurchaseResponse as d8, CMsgClientToGCPlayerCardSpecificPurchaseResponse_Result as d9, CMsgClientToGCRequestActiveBeaconParties as dA, CMsgClientToGCRequestActiveGuildChallenge as dB, CMsgClientToGCRequestActiveGuildChallengeResponse as dC, CMsgClientToGCRequestActiveGuildChallengeResponse_EResponse as dD, CMsgClientToGCRequestActiveGuildContracts as dE, CMsgClientToGCRequestActiveGuildContractsResponse as dF, CMsgClientToGCRequestActiveGuildContractsResponse_EResponse as dG, CMsgClientToGCRequestArcanaVotesRemaining as dH, CMsgClientToGCRequestArcanaVotesRemainingResponse as dI, CMsgClientToGCRequestContestVotes as dJ, CMsgClientToGCRequestContestVotesResponse as dK, CMsgClientToGCRequestContestVotesResponse_EResponse as dL, CMsgClientToGCRequestContestVotesResponse_ItemVote as dM, CMsgClientToGCRequestEventPointLogResponseV2 as dN, CMsgClientToGCRequestEventPointLogResponseV2_LogEntry as dO, CMsgClientToGCRequestEventPointLogV2 as dP, CMsgClientToGCRequestGuildEventMembers as dQ, CMsgClientToGCRequestGuildEventMembersResponse as dR, CMsgClientToGCRequestGuildEventMembersResponse_EResponse as dS, CMsgClientToGCRequestPlayerHeroRecentAccomplishments as dT, CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse as dU, CMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse_EResponse as dV, CMsgClientToGCRequestPlayerRecentAccomplishments as dW, CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse as dX, CMsgClientToGCRequestPlayerRecentAccomplishmentsResponse_EResponse as dY, CMsgClientToGCRequestPlusWeeklyChallengeResult as dZ, CMsgClientToGCRequestPlusWeeklyChallengeResultResponse as d_, CMsgClientToGCPlayerStatsRequest as da, CMsgClientToGCPublishUserStat as db, CMsgClientToGCPurchaseChargeCostItems as dc, CMsgClientToGCPurchaseChargeCostItemsResponse as dd, CMsgClientToGCPurchaseChargeCostItemsResponse_EResponse as de, CMsgClientToGCPurchaseChargeCostItems_Item as df, CMsgClientToGCPurchaseFilteredPlayerSlot as dg, CMsgClientToGCPurchaseLabyrinthBlessings as dh, CMsgClientToGCPurchaseLabyrinthBlessingsResponse as di, CMsgClientToGCPurchaseLabyrinthBlessingsResponse_EResponse as dj, CMsgClientToGCRankRequest as dk, CMsgClientToGCRecalibrateMMR as dl, CMsgClientToGCRecalibrateMMRResponse as dm, CMsgClientToGCRecalibrateMMRResponse_EResponse as dn, CMsgClientToGCRecordContestVote as dp, CMsgClientToGCRecyclePlayerCard as dq, CMsgClientToGCRecyclePlayerCardResponse as dr, CMsgClientToGCRecyclePlayerCardResponse_Result as ds, CMsgClientToGCRemoveFilteredPlayer as dt, CMsgClientToGCRemoveItemAttribute as du, CMsgClientToGCRemoveItemAttributeResponse as dv, CMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttribute as dw, CMsgClientToGCRequestAccountGuildEventData as dx, CMsgClientToGCRequestAccountGuildEventDataResponse as dy, CMsgClientToGCRequestAccountGuildEventDataResponse_EResponse as dz, CSOEconItemAttribute as e, CMsgClientToGCUnderDraftBuyResponse as e$, CMsgClientToGCRequestReporterUpdatesResponse as e0, CMsgClientToGCRequestReporterUpdatesResponse_EResponse as e1, CMsgClientToGCRequestReporterUpdatesResponse_ReporterUpdate as e2, CMsgClientToGCRequestSlarkGameResult as e3, CMsgClientToGCRequestSlarkGameResultResponse as e4, CMsgClientToGCRoadToTIDevForceQuest as e5, CMsgClientToGCRoadToTIGetActiveQuest as e6, CMsgClientToGCRoadToTIGetActiveQuestResponse as e7, CMsgClientToGCRoadToTIGetActiveQuestResponse_EResponse as e8, CMsgClientToGCRoadToTIGetQuests as e9, CMsgClientToGCSetItemStyle as eA, CMsgClientToGCSetItemStyleResponse as eB, CMsgClientToGCSetItemStyleResponse_ESetStyle as eC, CMsgClientToGCSetProfileCardSlots as eD, CMsgClientToGCSetProfileCardSlots_CardSlot as eE, CMsgClientToGCSocialFeedPostCommentRequest as eF, CMsgClientToGCSocialFeedPostMessageRequest as eG, CMsgClientToGCStartWatchingOverwatch as eH, CMsgClientToGCStopWatchingOverwatch as eI, CMsgClientToGCSubmitDraftTriviaMatchAnswer as eJ, CMsgClientToGCSubmitDraftTriviaMatchAnswerResponse as eK, CMsgClientToGCSubmitOWConviction as eL, CMsgClientToGCSubmitOWConvictionResponse as eM, CMsgClientToGCSubmitOWConvictionResponse_EResponse as eN, CMsgClientToGCSubmitPlayerMatchSurvey as eO, CMsgClientToGCSubmitPlayerMatchSurveyResponse as eP, CMsgClientToGCSubmitPlayerMatchSurveyResponse_EResponse as eQ, CMsgClientToGCSurvivorsGameTelemetryData as eR, CMsgClientToGCSurvivorsGameTelemetryDataResponse as eS, CMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponse as eT, CMsgClientToGCSurvivorsPowerUpTelemetryData as eU, CMsgClientToGCTeammateStatsRequest as eV, CMsgClientToGCTeammateStatsResponse as eW, CMsgClientToGCTeammateStatsResponse_TeammateStat as eX, CMsgClientToGCTransferSeasonalMMRRequest as eY, CMsgClientToGCTransferSeasonalMMRResponse as eZ, CMsgClientToGCUnderDraftBuy as e_, CMsgClientToGCRoadToTIGetQuestsResponse as ea, CMsgClientToGCRoadToTIGetQuestsResponse_EResponse as eb, CMsgClientToGCRoadToTIUseItem as ec, CMsgClientToGCRoadToTIUseItemResponse as ed, CMsgClientToGCRoadToTIUseItemResponse_EResponse as ee, CMsgClientToGCSelectCompendiumInGamePrediction as ef, CMsgClientToGCSelectCompendiumInGamePredictionResponse as eg, CMsgClientToGCSelectCompendiumInGamePredictionResponse_EResult as eh, CMsgClientToGCSelectCompendiumInGamePrediction_Prediction as ei, CMsgClientToGCSelectGuildContract as ej, CMsgClientToGCSelectGuildContractResponse as ek, CMsgClientToGCSelectGuildContractResponse_EResponse as el, CMsgClientToGCSetBannedHeroes as em, CMsgClientToGCSetDPCFavoriteState as en, CMsgClientToGCSetDPCFavoriteStateResponse as eo, CMsgClientToGCSetDPCFavoriteStateResponse_EResponse as ep, CMsgClientToGCSetEventActiveSeasonID as eq, CMsgClientToGCSetEventActiveSeasonIDResponse as er, CMsgClientToGCSetEventActiveSeasonIDResponse_EResponse as es, CMsgClientToGCSetFavoritePage as et, CMsgClientToGCSetFavoritePageResponse as eu, CMsgClientToGCSetFavoritePageResponse_EResponse as ev, CMsgClientToGCSetHeroSticker as ew, CMsgClientToGCSetHeroStickerResponse as ex, CMsgClientToGCSetHeroStickerResponse_EResponse as ey, CMsgClientToGCSetItemInventoryCategory as ez, CSOEconItemEquipped as f, CMsgDOTADestroyLobbyRequest as f$, CMsgClientToGCUnderDraftRedeemReward as f0, CMsgClientToGCUnderDraftRedeemRewardResponse as f1, CMsgClientToGCUnderDraftRequest as f2, CMsgClientToGCUnderDraftReroll as f3, CMsgClientToGCUnderDraftRerollResponse as f4, CMsgClientToGCUnderDraftResponse as f5, CMsgClientToGCUnderDraftRollBackBench as f6, CMsgClientToGCUnderDraftRollBackBenchResponse as f7, CMsgClientToGCUnderDraftSell as f8, CMsgClientToGCUnderDraftSellResponse as f9, CMsgClientToGCWrapAndDeliverGiftResponse as fA, CMsgClientWelcome_Location as fB, CMsgClientsRejoinChatChannels as fC, CMsgConnectionStatus as fD, CMsgConsumeEventSupportGrantItem as fE, CMsgConsumeEventSupportGrantItemResponse as fF, CMsgCraftStatue as fG, CMsgCraftingResponse as fH, CMsgCustomGameInstallStatus as fI, CMsgDOTAAnchorPhoneNumberRequest as fJ, CMsgDOTAAnchorPhoneNumberResponse as fK, CMsgDOTAAnchorPhoneNumberResponse_Result as fL, CMsgDOTAClaimEventAction as fM, CMsgDOTAClaimEventActionData as fN, CMsgDOTAClaimEventActionData_GrantItemGiftData as fO, CMsgDOTAClientToGCQuickStatsRequest as fP, CMsgDOTAClientToGCQuickStatsResponse as fQ, CMsgDOTAClientToGCQuickStatsResponse_SimpleStats as fR, CMsgDOTACompendiumData as fS, CMsgDOTACompendiumDataRequest as fT, CMsgDOTACompendiumDataResponse as fU, CMsgDOTACompendiumRemoveAllSelections as fV, CMsgDOTACompendiumRemoveAllSelectionsResponse as fW, CMsgDOTACompendiumSelection as fX, CMsgDOTACompendiumSelectionResponse as fY, CMsgDOTACustomGameClientFinishedLoading as fZ, CMsgDOTACustomGameListenServerStartedLoading as f_, CMsgClientToGCUnlockCrate as fa, CMsgClientToGCUnlockCrateResponse as fb, CMsgClientToGCUnlockCrateResponse_Item as fc, CMsgClientToGCUnlockItemStyle as fd, CMsgClientToGCUnlockItemStyleResponse as fe, CMsgClientToGCUnlockItemStyleResponse_EUnlockStyle as ff, CMsgClientToGCUnpackBundle as fg, CMsgClientToGCUnpackBundleResponse as fh, CMsgClientToGCUnpackBundleResponse_EUnpackBundle as fi, CMsgClientToGCUnwrapGift as fj, CMsgClientToGCUpdateComicBookStatType as fk, CMsgClientToGCUpdateComicBookStats as fl, CMsgClientToGCUpdateComicBookStats_LanguageStats as fm, CMsgClientToGCUpdateComicBookStats_SingleStat as fn, CMsgClientToGCUpdateFilteredPlayerNote as fo, CMsgClientToGCUpdatePartyBeacon as fp, CMsgClientToGCUpdatePartyBeacon_Action as fq, CMsgClientToGCUploadMatchClip as fr, CMsgClientToGCVerifyFavoritePlayers as fs, CMsgClientToGCVoteForArcana as ft, CMsgClientToGCVoteForArcanaResponse as fu, CMsgClientToGCVoteForArcanaResponse_Result as fv, CMsgClientToGCVoteForMVP as fw, CMsgClientToGCVoteForMVPResponse as fx, CMsgClientToGCWageringRequest as fy, CMsgClientToGCWrapAndDeliverGift as fz, CMsgOverworldTokenQuantity as g, CMsgDOTASubmitTriviaQuestionAnswer as g$, CMsgDOTADestroyLobbyResponse as g0, CMsgDOTADestroyLobbyResponse_Result as g1, CMsgDOTAEmoticonAccessSDO as g2, CMsgDOTAGameAutographReward as g3, CMsgDOTAGameAutographRewardResponse as g4, CMsgDOTAGameAutographRewardResponse_Result as g5, CMsgDOTAGetEventPoints as g6, CMsgDOTAGetEventPointsResponse as g7, CMsgDOTAGetEventPointsResponse_Action as g8, CMsgDOTAGetPeriodicResource as g9, CMsgDOTARedeemItemResponse as gA, CMsgDOTARedeemItemResponse_EResultCode as gB, CMsgDOTAReportsRemainingRequest as gC, CMsgDOTAReportsRemainingResponse as gD, CMsgDOTARequestMatchesResponse as gE, CMsgDOTARequestMatchesResponse_Series as gF, CMsgDOTARequestMatchesSkillLevel as gG, CMsgDOTASelectionPriorityChoiceRequest as gH, CMsgDOTASelectionPriorityChoiceResponse as gI, CMsgDOTASelectionPriorityChoiceResponse_Result as gJ, CMsgDOTASetFavoriteTeam as gK, CMsgDOTASetMatchHistoryAccess as gL, CMsgDOTASetMatchHistoryAccessResponse as gM, CMsgDOTASetProfilePrivacy as gN, CMsgDOTASetProfilePrivacyResponse as gO, CMsgDOTAStartTriviaSession as gP, CMsgDOTAStartTriviaSessionResponse as gQ, CMsgDOTASubmitLobbyMVPVote as gR, CMsgDOTASubmitLobbyMVPVoteResponse as gS, CMsgDOTASubmitPlayerAvoidRequest as gT, CMsgDOTASubmitPlayerAvoidRequestResponse as gU, CMsgDOTASubmitPlayerReport as gV, CMsgDOTASubmitPlayerReportResponse as gW, CMsgDOTASubmitPlayerReportResponseV2 as gX, CMsgDOTASubmitPlayerReportResponseV2_EResult as gY, CMsgDOTASubmitPlayerReportResponse_EResult as gZ, CMsgDOTASubmitPlayerReportV2 as g_, CMsgDOTAGetPeriodicResourceResponse as ga, CMsgDOTAGetPlayerMatchHistory as gb, CMsgDOTAGetPlayerMatchHistoryResponse as gc, CMsgDOTAGetPlayerMatchHistoryResponse_Match as gd, CMsgDOTAGetRecentPlayTimeFriendsRequest as ge, CMsgDOTAGetRecentPlayTimeFriendsResponse as gf, CMsgDOTAKickedFromMatchmakingQueue as gg, CMsgDOTALobbyMVPAwarded as gh, CMsgDOTALobbyRichPresence as gi, CMsgDOTAMatchVotes as gj, CMsgDOTAMatchVotes_PlayerVote as gk, CMsgDOTAMatchmakingStatsRequest as gl, CMsgDOTAMatchmakingStatsResponse as gm, CMsgDOTAMutationList as gn, CMsgDOTAMutationList_Mutation as go, CMsgDOTANotifyAccountFlagsChange as gp, CMsgDOTAPartyRichPresence as gq, CMsgDOTAPartyRichPresence_Member as gr, CMsgDOTAPartyRichPresence_WeekendTourney as gs, CMsgDOTAPeriodicResourceUpdated as gt, CMsgDOTAPopup as gu, CMsgDOTAPopup_PopupID as gv, CMsgDOTAPostGameItemAwardNotification as gw, CMsgDOTAProfileTickets as gx, CMsgDOTAProfileTickets_LeaguePass as gy, CMsgDOTARedeemItem as gz, CMsgMatchMatchmakingStats as h, CMsgGCNotificationsMarkReadRequest as h$, CMsgDOTASubmitTriviaQuestionAnswerResponse as h0, CMsgDOTATriviaCurrentQuestions as h1, CMsgDOTAUnanchorPhoneNumberRequest as h2, CMsgDOTAUnanchorPhoneNumberResponse as h3, CMsgDOTAUnanchorPhoneNumberResponse_Result as h4, CMsgDOTAUpdateMatchManagementStats as h5, CMsgDOTAUpdateMatchmakingStats as h6, CMsgDOTAWelcome as h7, CMsgDOTAWelcome_CExtraMsg as h8, CMsgDevDeleteEventActions as h9, CMsgGCAssertJobData as hA, CMsgGCClientPing as hB, CMsgGCClientVersionUpdated as hC, CMsgGCConCommand as hD, CMsgGCEconSQLWorkItemEmbeddedRollbackData as hE, CMsgGCGetAccountSubscriptionItem as hF, CMsgGCGetAccountSubscriptionItemResponse as hG, CMsgGCGetHeroStandings as hH, CMsgGCGetHeroStandingsResponse as hI, CMsgGCGetHeroStandingsResponse_Hero as hJ, CMsgGCGetHeroStatsHistory as hK, CMsgGCGetHeroStatsHistoryResponse as hL, CMsgGCGetHeroStatsHistoryResponse_EResponse as hM, CMsgGCGetHeroTimedStatsResponse as hN, CMsgGCGetHeroTimedStatsResponse_RankChunkedStats as hO, CMsgGCGetHeroTimedStatsResponse_TimedStatsContainer as hP, CMsgGCItemEditorReleaseReservation as hQ, CMsgGCItemEditorReleaseReservationResponse as hR, CMsgGCItemEditorReservation as hS, CMsgGCItemEditorReservationsRequest as hT, CMsgGCItemEditorReservationsResponse as hU, CMsgGCItemEditorReserveItemDef as hV, CMsgGCItemEditorReserveItemDefResponse as hW, CMsgGCLobbyUpdateBroadcastChannelInfo as hX, CMsgGCMatchDetailsRequest as hY, CMsgGCMatchDetailsResponse as hZ, CMsgGCMultiplexMessage as h_, CMsgDevDeleteEventActionsResponse as ha, CMsgDevGrantEventAction as hb, CMsgDevGrantEventActionResponse as hc, CMsgDevGrantEventPoints as hd, CMsgDevGrantEventPointsResponse as he, CMsgDevNewItemRequest as hf, CMsgDevNewItemRequestResponse as hg, CMsgDevResetEventState as hh, CMsgDevResetEventStateResponse as hi, CMsgDevUnlockAllItemStyles as hj, CMsgDevUnlockAllItemStylesResponse as hk, CMsgDraftTriviaVoteCount as hl, CMsgEconPlayerStrangeCountAdjustment as hm, CMsgEconPlayerStrangeCountAdjustment_CStrangeCountAdjustment as hn, CMsgEventActionData as ho, CMsgEventGoals as hp, CMsgEventGoals_EventGoal as hq, CMsgEventTipsSummaryRequest as hr, CMsgEventTipsSummaryResponse as hs, CMsgEventTipsSummaryResponse_Tipper as ht, CMsgExtractGems as hu, CMsgExtractGemsResponse as hv, CMsgExtractGemsResponse_EExtractGems as hw, CMsgFlipLobbyTeams as hx, CMsgGCAddGiftItem as hy, CMsgGCAdditionalWelcomeMsgList as hz, CMvpData as i, CMsgGCToClientBattlePassRollupTI7_Predictions as i$, CMsgGCNotificationsNotification as i0, CMsgGCNotificationsRequest as i1, CMsgGCNotificationsResponse as i2, CMsgGCNotificationsUpdate as i3, CMsgGCNotificationsUpdate_EResult as i4, CMsgGCPlayerInfoSubmit as i5, CMsgGCPlayerInfoSubmitResponse as i6, CMsgGCPlayerInfoSubmitResponse_EResult as i7, CMsgGCRankedPlayerInfoSubmit as i8, CMsgGCRankedPlayerInfoSubmitResponse as i9, CMsgGCToClientBattlePassRollupFall2016_Bracket as iA, CMsgGCToClientBattlePassRollupFall2016_FantasyChallenge as iB, CMsgGCToClientBattlePassRollupFall2016_PlayerCard as iC, CMsgGCToClientBattlePassRollupFall2016_Predictions as iD, CMsgGCToClientBattlePassRollupFall2016_Questlines as iE, CMsgGCToClientBattlePassRollupFall2016_Wagering as iF, CMsgGCToClientBattlePassRollupInternational2016 as iG, CMsgGCToClientBattlePassRollupInternational2016_Achievements as iH, CMsgGCToClientBattlePassRollupInternational2016_BattleCup as iI, CMsgGCToClientBattlePassRollupInternational2016_Bracket as iJ, CMsgGCToClientBattlePassRollupInternational2016_FantasyChallenge as iK, CMsgGCToClientBattlePassRollupInternational2016_PlayerCard as iL, CMsgGCToClientBattlePassRollupInternational2016_Predictions as iM, CMsgGCToClientBattlePassRollupInternational2016_Questlines as iN, CMsgGCToClientBattlePassRollupInternational2016_Wagering as iO, CMsgGCToClientBattlePassRollupListRequest as iP, CMsgGCToClientBattlePassRollupListResponse as iQ, CMsgGCToClientBattlePassRollupListResponse_EventInfo as iR, CMsgGCToClientBattlePassRollupRequest as iS, CMsgGCToClientBattlePassRollupResponse as iT, CMsgGCToClientBattlePassRollupTI10 as iU, CMsgGCToClientBattlePassRollupTI7 as iV, CMsgGCToClientBattlePassRollupTI7_Achievements as iW, CMsgGCToClientBattlePassRollupTI7_BattleCup as iX, CMsgGCToClientBattlePassRollupTI7_Bracket as iY, CMsgGCToClientBattlePassRollupTI7_FantasyChallenge as iZ, CMsgGCToClientBattlePassRollupTI7_PlayerCard as i_, CMsgGCRankedPlayerInfoSubmitResponse_EResult as ia, CMsgGCRequestStoreSalesData as ib, CMsgGCRequestStoreSalesDataResponse as ic, CMsgGCRequestStoreSalesDataResponse_Price as id, CMsgGCRequestStoreSalesDataUpToDateResponse as ie, CMsgGCRequestSubGCSessionInfo as ig, CMsgGCRequestSubGCSessionInfoResponse as ih, CMsgGCServerVersionUpdated as ii, CMsgGCSetItemPosition as ij, CMsgGCStorePurchaseCancel as ik, CMsgGCStorePurchaseCancelResponse as il, CMsgGCStorePurchaseFinalize as im, CMsgGCStorePurchaseFinalizeResponse as io, CMsgGCStorePurchaseInit as ip, CMsgGCStorePurchaseInitResponse as iq, CMsgGCToClientAccountGuildEventDataUpdated as ir, CMsgGCToClientActiveGuildChallengeUpdated as is, CMsgGCToClientActiveGuildContractsUpdated as it, CMsgGCToClientAggregateMetricsBackoff as iu, CMsgGCToClientApplyRemoteConVars as iv, CMsgGCToClientArcanaVotesUpdate as iw, CMsgGCToClientBattlePassRollupFall2016 as ix, CMsgGCToClientBattlePassRollupFall2016_Achievements as iy, CMsgGCToClientBattlePassRollupFall2016_BattleCup as iz, CAttributeItemDynamicRecipeComponent as j, CMsgGCToClientPurchaseFilteredPlayerSlotResponse_Result as j$, CMsgGCToClientBattlePassRollupTI7_Questlines as j0, CMsgGCToClientBattlePassRollupTI7_Wagering as j1, CMsgGCToClientBattlePassRollupTI8 as j2, CMsgGCToClientBattlePassRollupTI8_Achievements as j3, CMsgGCToClientBattlePassRollupTI8_Bracket as j4, CMsgGCToClientBattlePassRollupTI8_CavernCrawl as j5, CMsgGCToClientBattlePassRollupTI8_FantasyChallenge as j6, CMsgGCToClientBattlePassRollupTI8_PlayerCard as j7, CMsgGCToClientBattlePassRollupTI8_Predictions as j8, CMsgGCToClientBattlePassRollupTI8_Wagering as j9, CMsgGCToClientGetFilteredPlayersResponse as jA, CMsgGCToClientGetFilteredPlayersResponse_CFilterEntry as jB, CMsgGCToClientGetFilteredPlayersResponse_Result as jC, CMsgGCToClientGuildUnderDraftGoldUpdated as jD, CMsgGCToClientHeroStatueCreateResult as jE, CMsgGCToClientInFlightChargesUpdated as jF, CMsgGCToClientInFlightChargesUpdated_ItemCharges as jG, CMsgGCToClientJoinPartyFromBeaconResponse as jH, CMsgGCToClientJoinPartyFromBeaconResponse_EResponse as jI, CMsgGCToClientManageFavoritesResponse as jJ, CMsgGCToClientManageFavoritesResponse_EResponse as jK, CMsgGCToClientMapStatsResponse as jL, CMsgGCToClientMapStatsResponse_EResponse as jM, CMsgGCToClientMatchSignedOut as jN, CMsgGCToClientOverwatchCasesAvailable as jO, CMsgGCToClientOverworldUserDataUpdated as jP, CMsgGCToClientPartyBeaconUpdate as jQ, CMsgGCToClientPartySearchInvite as jR, CMsgGCToClientPartySearchInvites as jS, CMsgGCToClientPlayerBeaconState as jT, CMsgGCToClientPlayerStatsResponse as jU, CMsgGCToClientPlaytestStatus as jV, CMsgGCToClientPollConvarRequest as jW, CMsgGCToClientPollConvarResponse as jX, CMsgGCToClientPollFileRequest as jY, CMsgGCToClientPollFileResponse as jZ, CMsgGCToClientPurchaseFilteredPlayerSlotResponse as j_, CMsgGCToClientBattlePassRollupTI9 as ja, CMsgGCToClientBattlePassRollupWinter2017 as jb, CMsgGCToClientBattlePassRollupWinter2017_Achievements as jc, CMsgGCToClientBattlePassRollupWinter2017_BattleCup as jd, CMsgGCToClientBattlePassRollupWinter2017_Bracket as je, CMsgGCToClientBattlePassRollupWinter2017_FantasyChallenge as jf, CMsgGCToClientBattlePassRollupWinter2017_PlayerCard as jg, CMsgGCToClientBattlePassRollupWinter2017_Predictions as jh, CMsgGCToClientBattlePassRollupWinter2017_Questlines as ji, CMsgGCToClientBattlePassRollupWinter2017_Wagering as jj, CMsgGCToClientCavernCrawlMapPathCompleted as jk, CMsgGCToClientCavernCrawlMapPathCompleted_CompletedPathInfo as jl, CMsgGCToClientCavernCrawlMapUpdated as jm, CMsgGCToClientClaimEventActionUsingItemCompleted as jn, CMsgGCToClientCollectorsCacheAvailableDataResponse as jo, CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote as jp, CMsgGCToClientCollectorsCacheAvailableDataResponse_Vote_EVoteType as jq, CMsgGCToClientCommendNotification as jr, CMsgGCToClientCurrencyPricePoints as js, CMsgGCToClientCurrencyPricePoints_Currency as jt, CMsgGCToClientCustomGamesFriendsPlayedResponse as ju, CMsgGCToClientCustomGamesFriendsPlayedResponse_CustomGame as jv, CMsgGCToClientEmoticonData as jw, CMsgGCToClientFriendsPlayedCustomGameResponse as jx, CMsgGCToClientGetFavoritePlayersResponse as jy, CMsgGCToClientGetFavoritePlayersResponse_EResponse as jz, CAttributeString as k, CMsgGCToGCPingRequest as k$, CMsgGCToClientQuestProgressUpdated as k0, CMsgGCToClientQuestProgressUpdated_Challenge as k1, CMsgGCToClientRankResponse as k2, CMsgGCToClientRankResponse_EResultCode as k3, CMsgGCToClientRankUpdate as k4, CMsgGCToClientRecordContestVoteResponse as k5, CMsgGCToClientRecordContestVoteResponse_EResult as k6, CMsgGCToClientRemoveFilteredPlayerResponse as k7, CMsgGCToClientRemoveFilteredPlayerResponse_Result as k8, CMsgGCToClientRequestActiveBeaconPartiesResponse as k9, CMsgGCToGCDirtySDOCache as kA, CMsgGCToGCFlushSteamInventoryCache as kB, CMsgGCToGCFlushSteamInventoryCache_Key as kC, CMsgGCToGCForwardAccountDetails as kD, CMsgGCToGCGetInfuxIntervalStats as kE, CMsgGCToGCGetInfuxIntervalStatsResponse as kF, CMsgGCToGCGetUserServerMembers as kG, CMsgGCToGCGetUserServerMembersResponse as kH, CMsgGCToGCGetUserSessionServer as kI, CMsgGCToGCGetUserSessionServerResponse as kJ, CMsgGCToGCGrantAccountRolledItems as kK, CMsgGCToGCGrantAccountRolledItems_Item as kL, CMsgGCToGCGrantAccountRolledItems_Item_AdditionalAuditEntry as kM, CMsgGCToGCGrantAccountRolledItems_Item_DynamicAttribute as kN, CMsgGCToGCGrantSelfMadeItemToAccount as kO, CMsgGCToGCInternalTestMsg as kP, CMsgGCToGCLeaguePredictions as kQ, CMsgGCToGCLoadSessionSOCache as kR, CMsgGCToGCLoadSessionSOCacheResponse as kS, CMsgGCToGCMasterBroadcastMessage as kT, CMsgGCToGCMasterDestroyCache as kU, CMsgGCToGCMasterSubscribeToCache as kV, CMsgGCToGCMasterSubscribeToCacheAsync as kW, CMsgGCToGCMasterSubscribeToCacheResponse as kX, CMsgGCToGCMasterUnsubscribeFromCache as kY, CMsgGCToGCPerformManualOp as kZ, CMsgGCToGCPerformManualOpCompleted as k_, CMsgGCToClientRequestActiveBeaconPartiesResponse_EResponse as ka, CMsgGCToClientRequestDropped as kb, CMsgGCToClientRoadToTIQuestDataUpdated as kc, CMsgGCToClientSocialFeedPostCommentResponse as kd, CMsgGCToClientSocialFeedPostMessageResponse as ke, CMsgGCToClientStoreTransactionCompleted as kf, CMsgGCToClientTournamentItemDrop as kg, CMsgGCToClientTrophyAwarded as kh, CMsgGCToClientUpdateFilteredPlayerNoteResponse as ki, CMsgGCToClientUpdateFilteredPlayerNoteResponse_Result as kj, CMsgGCToClientUploadMatchClipResponse as kk, CMsgGCToClientUploadMatchClipResponse_EResponse as kl, CMsgGCToClientVACReminder as km, CMsgGCToClientVerifyFavoritePlayersResponse as kn, CMsgGCToClientVerifyFavoritePlayersResponse_Result as ko, CMsgGCToClientWageringResponse as kp, CMsgGCToClientWageringUpdate as kq, CMsgGCToGCAddSubscriptionTime as kr, CMsgGCToGCBannedWordListUpdated as ks, CMsgGCToGCBetaDeleteItems as kt, CMsgGCToGCBroadcastConsoleCommand as ku, CMsgGCToGCBroadcastMessageFromSub as kv, CMsgGCToGCCanUseDropRateBonus as kw, CMsgGCToGCClientServerVersionsUpdated as kx, CMsgGCToGCConsoleOutput as ky, CMsgGCToGCConsoleOutput_OutputLine as kz, CBroadcastPostGameDataFrameRequest as l, CMsgLobbyPlaytestDetails as l$, CMsgGCToGCPingResponse as l0, CMsgGCToGCPurchaseSucceeded as l1, CMsgGCToGCRefreshSOCache as l2, CMsgGCToGCReloadServerRegionSettings as l3, CMsgGCToGCSOCacheSubscribe as l4, CMsgGCToGCSOCacheSubscribe_CMsgHaveVersions as l5, CMsgGCToGCSOCacheUnsubscribe as l6, CMsgGCToGCSelfPing as l7, CMsgGCToGCStoreProcessCDKeyTransaction as l8, CMsgGCToGCStoreProcessCDKeyTransactionResponse as l9, CMsgHeroGlobalDataHeroesAlliesAndEnemies_HeroData as lA, CMsgHeroGlobalDataHeroesAlliesAndEnemies_RankedHeroData as lB, CMsgHeroGlobalDataRequest as lC, CMsgHeroGlobalDataResponse as lD, CMsgHeroGlobalDataResponse_GraphData as lE, CMsgHeroGlobalDataResponse_HeroDataPerRankChunk as lF, CMsgHeroGlobalDataResponse_WeekData as lG, CMsgInitialQuestionnaireResponse as lH, CMsgInvitationCreated as lI, CMsgInviteToLobby as lJ, CMsgInviteToParty as lK, CMsgItemAcknowledged as lL, CMsgItemAges as lM, CMsgItemAges_MaxItemIDTimestamp as lN, CMsgKickFromParty as lO, CMsgLANServerAvailable as lP, CMsgLeaveParty as lQ, CMsgLeaverState as lR, CMsgLobbyCoachFriendRequest as lS, CMsgLobbyEventGameData as lT, CMsgLobbyEventGameDetails as lU, CMsgLobbyEventPoints as lV, CMsgLobbyEventPoints_AccountPoints as lW, CMsgLobbyInitializationComplete as lX, CMsgLobbyInviteResponse as lY, CMsgLobbyPlayerPlusSubscriptionData as lZ, CMsgLobbyPlayerPlusSubscriptionData_HeroBadge as l_, CMsgGCToGCStoreProcessSettlement as la, CMsgGCToGCStoreProcessSettlementResponse as lb, CMsgGCToGCSubGCStarting as lc, CMsgGCToGCUniverseStartup as ld, CMsgGCToGCUniverseStartupResponse as le, CMsgGCToGCUpdateSQLKeyValue as lf, CMsgGCToGCUpdateSessionStats as lg, CMsgGCToGCUpdateSubscriptionItems as lh, CMsgGCToGCUpdateWelcomeMsg as li, CMsgGCToGCWebAPIAccountChanged as lj, CMsgGCToServerApplyRemoteConVars as lk, CMsgGCToServerSteamLearnAccessTokensChanged as ll, CMsgGCToServerSteamLearnUseHTTP as lm, CMsgGCUpdateSubGCSessionInfo as ln, CMsgGCUpdateSubGCSessionInfo_CMsgUpdate as lo, CMsgGCWatchDownloadedReplay as lp, CMsgGenericResult as lq, CMsgGlobalHeroAverages as lr, CMsgGuildActiveContracts as ls, CMsgGuildChallenge as lt, CMsgGuildContract as lu, CMsgGuildContractSlot as lv, CMsgGuildEventMember as lw, CMsgGuildLeaderboardCombinedResponse as lx, CMsgHeroGlobalDataAllHeroes as ly, CMsgHeroGlobalDataHeroesAlliesAndEnemies as lz, CCommunityClanAnnouncementInfo as m, CMsgRequestCrateEscalationLevel as m$, CMsgLobbyRoadToTIMatchQuestData as m0, CMsgLocalServerFakeLobbyData as m1, CMsgLocalServerGuildData as m2, CMsgLookupMultipleAccountNames as m3, CMsgLookupMultipleAccountNamesResponse as m4, CMsgLookupMultipleAccountNamesResponse_Account as m5, CMsgMatchmakingMatchGroupInfo as m6, CMsgOverworldEncounterChooseHeroData as m7, CMsgOverworldEncounterData as m8, CMsgOverworldEncounterPitFighterRewardData as m9, CMsgPredictionRankings_PredictionLine as mA, CMsgPredictionResults as mB, CMsgPredictionResults_Result as mC, CMsgPredictionResults_ResultBreakdown as mD, CMsgPrivateMetadataKeyRequest as mE, CMsgPrivateMetadataKeyResponse as mF, CMsgProcessTransactionOrder as mG, CMsgProcessTransactionOrder_Item as mH, CMsgProfileRequest as mI, CMsgProfileResponse as mJ, CMsgProfileResponse_EResponse as mK, CMsgProfileResponse_FeaturedHero as mL, CMsgProfileResponse_MatchInfo as mM, CMsgProfileUpdate as mN, CMsgProfileUpdateResponse as mO, CMsgProfileUpdateResponse_Result as mP, CMsgProtoBufHeader as mQ, CMsgPurchaseHeroRandomRelic as mR, CMsgPurchaseHeroRandomRelicResponse as mS, CMsgPurchaseItemWithEventPoints as mT, CMsgPurchaseItemWithEventPointsResponse as mU, CMsgPurchaseItemWithEventPointsResponse_Result as mV, CMsgReadyCheckStatus as mW, CMsgReadyCheckStatus_ReadyMember as mX, CMsgRedeemCode as mY, CMsgRedeemCodeResponse as mZ, CMsgRedeemCodeResponse_EResultCode as m_, CMsgOverworldEncounterProgressData as ma, CMsgOverworldEncounterTokenQuestData as mb, CMsgOverworldEncounterTokenQuestData_Quest as mc, CMsgOverworldEncounterTokenTreasureData as md, CMsgOverworldEncounterTokenTreasureData_RewardOption as me, CMsgOverworldHeroList as mf, CMsgOverworldMatchRewards as mg, CMsgOverworldMatchRewards_Player as mh, CMsgOverworldMinigameCustomData as mi, CMsgOverworldMinigameUserData as mj, CMsgOverworldNode as mk, CMsgOverworldPath as ml, CMsgOverworldTokenCount as mm, CMsgOverworldUserData as mn, CMsgOverworldUserData_MinigameDataEntry as mo, CMsgPartyInviteResponse as mp, CMsgPartyReadyCheckAcknowledge as mq, CMsgPartyReadyCheckRequest as mr, CMsgPartyReadyCheckResponse as ms, CMsgPartySearchPlayer as mt, CMsgPeriodicResourceData as mu, CMsgPlayerConductScorecard as mv, CMsgPlayerConductScorecardRequest as mw, CMsgPlayerConductScorecard_EBehaviorRating as mx, CMsgPredictionRankings as my, CMsgPredictionRankings_Prediction as mz, CCommunityGetClanAnnouncementsRequest as n, CMsgSteamLearnInferenceBackendResponse as n$, CMsgRequestCrateEscalationLevelResponse as n0, CMsgRequestCrateEscalationLevelResponse_EResult as n1, CMsgRequestCrateItems as n2, CMsgRequestCrateItemsResponse as n3, CMsgRequestCrateItemsResponse_EResult as n4, CMsgResetStrangeGemCount as n5, CMsgResetStrangeGemCountResponse as n6, CMsgResetStrangeGemCountResponse_EResetGem as n7, CMsgRoadToTIAssignedQuest as n8, CMsgRoadToTIUserData as n9, CMsgSetItemPositions_ItemPosition as nA, CMsgSocialFeedCommentsRequest as nB, CMsgSocialFeedCommentsResponse as nC, CMsgSocialFeedCommentsResponse_FeedComment as nD, CMsgSocialFeedCommentsResponse_Result as nE, CMsgSocialFeedRequest as nF, CMsgSocialFeedResponse as nG, CMsgSocialFeedResponse_FeedEvent as nH, CMsgSocialFeedResponse_Result as nI, CMsgSortItems as nJ, CMsgSteamLearnAccessTokens as nK, CMsgSteamLearnAccessTokens_CacheDataAccessToken as nL, CMsgSteamLearnAccessTokens_InferenceAccessToken as nM, CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken as nN, CMsgSteamLearnBatchOperationRequest as nO, CMsgSteamLearnBatchOperationResponse as nP, CMsgSteamLearnCacheDataRequest as nQ, CMsgSteamLearnCacheDataResponse as nR, CMsgSteamLearnData as nS, CMsgSteamLearnDataElement as nT, CMsgSteamLearnDataList as nU, CMsgSteamLearnDataObject as nV, CMsgSteamLearnDataSource as nW, CMsgSteamLearnDataSourceDescElement as nX, CMsgSteamLearnDataSourceDescObject as nY, CMsgSteamLearnGetAccessTokensRequest as nZ, CMsgSteamLearnGetAccessTokensResponse as n_, CMsgSDOAssert as na, CMsgSDOAssert_Request as nb, CMsgSDONoMemcached as nc, CMsgSOCacheHaveVersion as nd, CMsgSOCacheSubscribed as ne, CMsgSOCacheSubscribedUpToDate as nf, CMsgSOCacheSubscribed_SubscribedType as ng, CMsgSOCacheSubscriptionCheck as nh, CMsgSOCacheSubscriptionRefresh as ni, CMsgSOCacheUnsubscribed as nj, CMsgSOCacheVersion as nk, CMsgSOIDOwner as nl, CMsgSOMultipleObjects as nm, CMsgSOMultipleObjects_SingleObject as nn, CMsgSOSingleObject as no, CMsgSQLAddDropRateBonus as np, CMsgSQLGCToGCGrantBackpackSlots as nq, CMsgSQLGCToGCRevokeUntrustedGift as nr, CMsgSQLUpgradeBattleBooster as ns, CMsgSerializedSOCache as nt, CMsgSerializedSOCache_Cache as nu, CMsgSerializedSOCache_Cache_Version as nv, CMsgSerializedSOCache_TypeCache as nw, CMsgServerAvailable as nx, CMsgServerUseItem as ny, CMsgSetItemPositions as nz, CCommunityGetClanAnnouncementsResponse as o, CSODOTAPartyInvite as o$, CMsgSteamLearnInferenceBackendResponse_BinaryCrossEntropyOutput as o0, CMsgSteamLearnInferenceBackendResponse_CategoricalCrossEntropyOutput as o1, CMsgSteamLearnInferenceBackendResponse_MutliBinaryCrossEntropyOutput as o2, CMsgSteamLearnInferenceBackendResponse_Output as o3, CMsgSteamLearnInferenceBackendResponse_RegressionOutput as o4, CMsgSteamLearnInferenceBackendResponse_Sequence as o5, CMsgSteamLearnInferenceMetadataBackendRequest as o6, CMsgSteamLearnInferenceMetadataRequest as o7, CMsgSteamLearnInferenceMetadataResponse as o8, CMsgSteamLearnInferenceMetadataResponse_AppInfo as o9, CMsgUpgradeLeagueItem as oA, CMsgUpgradeLeagueItemResponse as oB, CMsgUseItem as oC, CMsgUseMultipleItems as oD, CMvpData_MvpDatum as oE, CMvpData_MvpDatum_MvpAccolade as oF, CMvpData_MvpDatum_MvpAccolade_MvpAccoladeType as oG, CProtoItemSocket as oH, CProtoItemSocketAssetModifier as oI, CProtoItemSocketAssetModifierDESERIALIZEFROMSTRINGONLY as oJ, CProtoItemSocketAutograph as oK, CProtoItemSocketColor as oL, CProtoItemSocketEffect as oM, CProtoItemSocketEmpty as oN, CProtoItemSocketSpectator as oO, CProtoItemSocketStaticVisuals as oP, CProtoItemSocketStrange as oQ, CProtoItemSocketStrangeDESERIALIZEFROMSTRINGONLY as oR, CSODOTAGameHeroFavorites as oS, CSODOTALobby as oT, CSODOTALobbyInvite as oU, CSODOTALobbyInvite_LobbyMember as oV, CSODOTALobbyMember as oW, CSODOTALobby_CExtraMsg as oX, CSODOTALobby_LobbyType as oY, CSODOTALobby_State as oZ, CSODOTAParty as o_, CMsgSteamLearnInferenceMetadataResponse_AppInfoEntry as oa, CMsgSteamLearnInferenceMetadataResponse_CompactTable as ob, CMsgSteamLearnInferenceMetadataResponse_CompactTable_Entry as oc, CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapMappingsEntry as od, CMsgSteamLearnInferenceMetadataResponse_CompactTable_MapValuesEntry as oe, CMsgSteamLearnInferenceMetadataResponse_KMeans as of, CMsgSteamLearnInferenceMetadataResponse_KMeans_Cluster as og, CMsgSteamLearnInferenceMetadataResponse_Range as oh, CMsgSteamLearnInferenceMetadataResponse_RowRange as oi, CMsgSteamLearnInferenceMetadataResponse_SequenceTable as oj, CMsgSteamLearnInferenceMetadataResponse_SequenceTable_Entry as ok, CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapMappingsEntry as ol, CMsgSteamLearnInferenceMetadataResponse_SequenceTable_MapValuesEntry as om, CMsgSteamLearnInferenceMetadataResponse_SnapshotHistogram as on, CMsgSteamLearnInferenceMetadataResponse_StdDev as oo, CMsgSteamLearnInferenceRequest as op, CMsgSteamLearnInferenceResponse as oq, CMsgSteamLearnRegisterDataSourceRequest as or, CMsgSteamLearnRegisterDataSourceResponse as os, CMsgSteamLearnServerInfo as ot, CMsgSteamLearnServerInfo_ProjectInfo as ou, CMsgSteamLearnSnapshotProjectRequest as ov, CMsgSteamLearnSnapshotProjectResponse as ow, CMsgSurvivorsUserData as ox, CMsgSurvivorsUserData_AttributeLevelsEntry as oy, CMsgTalentWinRates as oz, CDOTALobbyMatchQualityData as p, EWeekendTourneyRichPresenceEvent as p$, CSODOTAPartyInvite_PartyMember as p0, CSODOTAPartyMember as p1, CSODOTAParty_State as p2, CSODOTAServerLobby as p3, CSODOTAServerLobbyMember as p4, CSODOTAServerStaticLobby as p5, CSODOTAServerStaticLobbyMember as p6, CSODOTAStaticLobby as p7, CSODOTAStaticLobbyMember as p8, CSOEconGameAccountClient as p9, EGCMsgUseItemResponse as pA, EGCPlatform as pB, EGuildEventAuditAction as pC, EHighPriorityMMState as pD, EItemEditorReservationResult as pE, ELaneSelection as pF, ELaneSelectionFlags as pG, ELobbyMemberCoachRequestState as pH, EMatchBehaviorScoreVariance as pI, EOverworldAuditAction as pJ, EOverworldMinigameAction as pK, EOverworldNodeState as pL, EOverworldPathState as pM, EPartyMatchmakingFlags as pN, EPurchaseHeroRelicResult as pO, EReadyCheckRequestResult as pP, EReadyCheckStatus as pQ, ESourceEngine as pR, ESteamLearnCacheDataResult as pS, ESteamLearnDataType as pT, ESteamLearnGetAccessTokensResult as pU, ESteamLearnInferenceMetadataResult as pV, ESteamLearnInferenceResult as pW, ESteamLearnSnapshotProjectResult as pX, ESteammLearnRegisterDataSourceResult as pY, ESupportEventRequestResult as pZ, EUnderDraftResponse as p_, CSOEconItem as pa, CWorkshopGetContributorsRequest as pb, CWorkshopGetContributorsResponse as pc, CWorkshopGetItemDailyRevenueRequest as pd, CWorkshopGetItemDailyRevenueResponse as pe, CWorkshopGetItemDailyRevenueResponse_CountryDailyRevenue as pf, CWorkshopGetPackageDailyRevenueRequest as pg, CWorkshopGetPackageDailyRevenueResponse as ph, CWorkshopGetPackageDailyRevenueResponse_CountryDailyRevenue as pi, CWorkshopPopulateItemDescriptionsRequest as pj, CWorkshopPopulateItemDescriptionsRequest_ItemDescriptionsLanguageBlock as pk, CWorkshopPopulateItemDescriptionsRequest_SingleItemDescription as pl, CWorkshopSetItemPaymentRulesRequest as pm, CWorkshopSetItemPaymentRulesRequest_PartnerItemPaymentRule as pn, CWorkshopSetItemPaymentRulesRequest_WorkshopDirectPaymentRule as po, CWorkshopSetItemPaymentRulesRequest_WorkshopItemPaymentRule as pp, CWorkshopSetItemPaymentRulesResponse as pq, DOTAWatchReplayType as pr, ECustomGameInstallStatus as ps, EDOTADraftTriviaAnswerResult as pt, EDOTATriviaAnswerResult as pu, EDevEventRequestResult as pv, EGCEconBaseMsg as pw, EGCItemMsg as px, EGCMsgInitiateTradeResponse as py, EGCMsgResponse as pz, CGCMsgCompressedMsgToClient as q, cMsgClientToGCOverworldDevGrantTokensResponse_EResponseFromJSON as q$, GCProtoBufMsgSrc as q0, LobbyDotaPauseSetting as q1, LobbyDotaTVDelay as q2, PartnerAccountType as q3, type SteamLearn as q4, SteamLearnClientImpl as q5, SteamLearnServiceName as q6, cMsgActivatePlusFreeTrialResponse_ResultFromJSON as q7, cMsgActivatePlusFreeTrialResponse_ResultToJSON as q8, cMsgAddItemToSocketResponse_EAddGemFromJSON as q9, cMsgClientToGCDeleteStickerbookPageResponse_EResponseToJSON as qA, cMsgClientToGCGetDPCFavoritesResponse_EResponseFromJSON as qB, cMsgClientToGCGetDPCFavoritesResponse_EResponseToJSON as qC, cMsgClientToGCGetHeroStickersResponse_EResponseFromJSON as qD, cMsgClientToGCGetHeroStickersResponse_EResponseToJSON as qE, cMsgClientToGCGetInFlightItemChargesResponse_EResponseFromJSON as qF, cMsgClientToGCGetInFlightItemChargesResponse_EResponseToJSON as qG, cMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponseFromJSON as qH, cMsgClientToGCGetLimitedItemPurchaseQuantityResponse_EResponseToJSON as qI, cMsgClientToGCGetOWMatchDetailsResponse_EResponseFromJSON as qJ, cMsgClientToGCGetOWMatchDetailsResponse_EResponseToJSON as qK, cMsgClientToGCGetStickerbookResponse_EResponseFromJSON as qL, cMsgClientToGCGetStickerbookResponse_EResponseToJSON as qM, cMsgClientToGCManageFavorites_ActionFromJSON as qN, cMsgClientToGCManageFavorites_ActionToJSON as qO, cMsgClientToGCNameItemResponse_ENameItemFromJSON as qP, cMsgClientToGCNameItemResponse_ENameItemToJSON as qQ, cMsgClientToGCOpenPlayerCardPackResponse_ResultFromJSON as qR, cMsgClientToGCOpenPlayerCardPackResponse_ResultToJSON as qS, cMsgClientToGCOrderStickerbookTeamPageResponse_EResponseFromJSON as qT, cMsgClientToGCOrderStickerbookTeamPageResponse_EResponseToJSON as qU, cMsgClientToGCOverworldClaimEncounterRewardResponse_EResponseFromJSON as qV, cMsgClientToGCOverworldClaimEncounterRewardResponse_EResponseToJSON as qW, cMsgClientToGCOverworldCompletePathResponse_EResponseFromJSON as qX, cMsgClientToGCOverworldCompletePathResponse_EResponseToJSON as qY, cMsgClientToGCOverworldDevClearInventoryResponse_EResponseFromJSON as qZ, cMsgClientToGCOverworldDevClearInventoryResponse_EResponseToJSON as q_, cMsgAddItemToSocketResponse_EAddGemToJSON as qa, cMsgAddSocketResponse_EAddSocketFromJSON as qb, cMsgAddSocketResponse_EAddSocketToJSON as qc, cMsgClientToGCCavernCrawlClaimRoomResponse_ResultFromJSON as qd, cMsgClientToGCCavernCrawlClaimRoomResponse_ResultToJSON as qe, cMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_ResultFromJSON as qf, cMsgClientToGCCavernCrawlGetClaimedRoomCountResponse_ResultToJSON as qg, cMsgClientToGCCavernCrawlRequestMapStateResponse_ResultFromJSON as qh, cMsgClientToGCCavernCrawlRequestMapStateResponse_ResultToJSON as qi, cMsgClientToGCCavernCrawlUseItemOnPathResponse_ResultFromJSON as qj, cMsgClientToGCCavernCrawlUseItemOnPathResponse_ResultToJSON as qk, cMsgClientToGCCavernCrawlUseItemOnRoomResponse_ResultFromJSON as ql, cMsgClientToGCCavernCrawlUseItemOnRoomResponse_ResultToJSON as qm, cMsgClientToGCClaimLeaderboardRewardsResponse_EResponseFromJSON as qn, cMsgClientToGCClaimLeaderboardRewardsResponse_EResponseToJSON as qo, cMsgClientToGCClaimSwagResponse_EResponseFromJSON as qp, cMsgClientToGCClaimSwagResponse_EResponseToJSON as qq, cMsgClientToGCCreatePlayerCardPackResponse_ResultFromJSON as qr, cMsgClientToGCCreatePlayerCardPackResponse_ResultToJSON as qs, cMsgClientToGCCreateStaticRecipeResponse_EResponseFromJSON as qt, cMsgClientToGCCreateStaticRecipeResponse_EResponseToJSON as qu, cMsgClientToGCCreateStickerbookPageResponse_EResponseFromJSON as qv, cMsgClientToGCCreateStickerbookPageResponse_EResponseToJSON as qw, cMsgClientToGCCreateTeamPlayerCardPackResponse_ResultFromJSON as qx, cMsgClientToGCCreateTeamPlayerCardPackResponse_ResultToJSON as qy, cMsgClientToGCDeleteStickerbookPageResponse_EResponseFromJSON as qz, CGCMsgGetIPLocationResponse as r, cMsgClientToGCSelectCompendiumInGamePredictionResponse_EResultFromJSON as r$, cMsgClientToGCOverworldDevGrantTokensResponse_EResponseToJSON as r0, cMsgClientToGCOverworldDevResetAllResponse_EResponseFromJSON as r1, cMsgClientToGCOverworldDevResetAllResponse_EResponseToJSON as r2, cMsgClientToGCOverworldDevResetNodeResponse_EResponseFromJSON as r3, cMsgClientToGCOverworldDevResetNodeResponse_EResponseToJSON as r4, cMsgClientToGCOverworldFeedbackResponse_EResponseFromJSON as r5, cMsgClientToGCOverworldFeedbackResponse_EResponseToJSON as r6, cMsgClientToGCOverworldGetDynamicImageResponse_EDynamicImageFormatFromJSON as r7, cMsgClientToGCOverworldGetDynamicImageResponse_EDynamicImageFormatToJSON as r8, cMsgClientToGCOverworldGetUserDataResponse_EResponseFromJSON as r9, cMsgClientToGCRecalibrateMMRResponse_EResponseToJSON as rA, cMsgClientToGCRecyclePlayerCardResponse_ResultFromJSON as rB, cMsgClientToGCRecyclePlayerCardResponse_ResultToJSON as rC, cMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttributeFromJSON as rD, cMsgClientToGCRemoveItemAttributeResponse_ERemoveItemAttributeToJSON as rE, cMsgClientToGCRequestAccountGuildEventDataResponse_EResponseFromJSON as rF, cMsgClientToGCRequestAccountGuildEventDataResponse_EResponseToJSON as rG, cMsgClientToGCRequestActiveGuildChallengeResponse_EResponseFromJSON as rH, cMsgClientToGCRequestActiveGuildChallengeResponse_EResponseToJSON as rI, cMsgClientToGCRequestActiveGuildContractsResponse_EResponseFromJSON as rJ, cMsgClientToGCRequestActiveGuildContractsResponse_EResponseToJSON as rK, cMsgClientToGCRequestContestVotesResponse_EResponseFromJSON as rL, cMsgClientToGCRequestContestVotesResponse_EResponseToJSON as rM, cMsgClientToGCRequestGuildEventMembersResponse_EResponseFromJSON as rN, cMsgClientToGCRequestGuildEventMembersResponse_EResponseToJSON as rO, cMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse_EResponseFromJSON as rP, cMsgClientToGCRequestPlayerHeroRecentAccomplishmentsResponse_EResponseToJSON as rQ, cMsgClientToGCRequestPlayerRecentAccomplishmentsResponse_EResponseFromJSON as rR, cMsgClientToGCRequestPlayerRecentAccomplishmentsResponse_EResponseToJSON as rS, cMsgClientToGCRequestReporterUpdatesResponse_EResponseFromJSON as rT, cMsgClientToGCRequestReporterUpdatesResponse_EResponseToJSON as rU, cMsgClientToGCRoadToTIGetActiveQuestResponse_EResponseFromJSON as rV, cMsgClientToGCRoadToTIGetActiveQuestResponse_EResponseToJSON as rW, cMsgClientToGCRoadToTIGetQuestsResponse_EResponseFromJSON as rX, cMsgClientToGCRoadToTIGetQuestsResponse_EResponseToJSON as rY, cMsgClientToGCRoadToTIUseItemResponse_EResponseFromJSON as rZ, cMsgClientToGCRoadToTIUseItemResponse_EResponseToJSON as r_, cMsgClientToGCOverworldGetUserDataResponse_EResponseToJSON as ra, cMsgClientToGCOverworldGiftTokensResponse_EResponseFromJSON as rb, cMsgClientToGCOverworldGiftTokensResponse_EResponseToJSON as rc, cMsgClientToGCOverworldMinigameActionResponse_EResponseFromJSON as rd, cMsgClientToGCOverworldMinigameActionResponse_EResponseToJSON as re, cMsgClientToGCOverworldMoveToNodeResponse_EResponseFromJSON as rf, cMsgClientToGCOverworldMoveToNodeResponse_EResponseToJSON as rg, cMsgClientToGCOverworldRequestTokensNeededByFriendResponse_EResponseFromJSON as rh, cMsgClientToGCOverworldRequestTokensNeededByFriendResponse_EResponseToJSON as ri, cMsgClientToGCOverworldTradeTokensResponse_EResponseFromJSON as rj, cMsgClientToGCOverworldTradeTokensResponse_EResponseToJSON as rk, cMsgClientToGCOverworldVisitEncounterResponse_EResponseFromJSON as rl, cMsgClientToGCOverworldVisitEncounterResponse_EResponseToJSON as rm, cMsgClientToGCPackBundleResponse_EPackBundleFromJSON as rn, cMsgClientToGCPackBundleResponse_EPackBundleToJSON as ro, cMsgClientToGCPlaceCollectionStickersResponse_EResponseFromJSON as rp, cMsgClientToGCPlaceCollectionStickersResponse_EResponseToJSON as rq, cMsgClientToGCPlaceStickersResponse_EResponseFromJSON as rr, cMsgClientToGCPlaceStickersResponse_EResponseToJSON as rs, cMsgClientToGCPlayerCardSpecificPurchaseResponse_ResultFromJSON as rt, cMsgClientToGCPlayerCardSpecificPurchaseResponse_ResultToJSON as ru, cMsgClientToGCPurchaseChargeCostItemsResponse_EResponseFromJSON as rv, cMsgClientToGCPurchaseChargeCostItemsResponse_EResponseToJSON as rw, cMsgClientToGCPurchaseLabyrinthBlessingsResponse_EResponseFromJSON as rx, cMsgClientToGCPurchaseLabyrinthBlessingsResponse_EResponseToJSON as ry, cMsgClientToGCRecalibrateMMRResponse_EResponseFromJSON as rz, CGCStorePurchaseInitLineItem as s, cMsgGCToClientGetFilteredPlayersResponse_ResultFromJSON as s$, cMsgClientToGCSelectCompendiumInGamePredictionResponse_EResultToJSON as s0, cMsgClientToGCSelectGuildContractResponse_EResponseFromJSON as s1, cMsgClientToGCSelectGuildContractResponse_EResponseToJSON as s2, cMsgClientToGCSetDPCFavoriteStateResponse_EResponseFromJSON as s3, cMsgClientToGCSetDPCFavoriteStateResponse_EResponseToJSON as s4, cMsgClientToGCSetEventActiveSeasonIDResponse_EResponseFromJSON as s5, cMsgClientToGCSetEventActiveSeasonIDResponse_EResponseToJSON as s6, cMsgClientToGCSetFavoritePageResponse_EResponseFromJSON as s7, cMsgClientToGCSetFavoritePageResponse_EResponseToJSON as s8, cMsgClientToGCSetHeroStickerResponse_EResponseFromJSON as s9, cMsgDOTAPopup_PopupIDToJSON as sA, cMsgDOTARedeemItemResponse_EResultCodeFromJSON as sB, cMsgDOTARedeemItemResponse_EResultCodeToJSON as sC, cMsgDOTARequestMatchesSkillLevelFromJSON as sD, cMsgDOTARequestMatchesSkillLevelToJSON as sE, cMsgDOTASelectionPriorityChoiceResponse_ResultFromJSON as sF, cMsgDOTASelectionPriorityChoiceResponse_ResultToJSON as sG, cMsgDOTASubmitPlayerReportResponseV2_EResultFromJSON as sH, cMsgDOTASubmitPlayerReportResponseV2_EResultToJSON as sI, cMsgDOTASubmitPlayerReportResponse_EResultFromJSON as sJ, cMsgDOTASubmitPlayerReportResponse_EResultToJSON as sK, cMsgDOTAUnanchorPhoneNumberResponse_ResultFromJSON as sL, cMsgDOTAUnanchorPhoneNumberResponse_ResultToJSON as sM, cMsgExtractGemsResponse_EExtractGemsFromJSON as sN, cMsgExtractGemsResponse_EExtractGemsToJSON as sO, cMsgGCGetHeroStatsHistoryResponse_EResponseFromJSON as sP, cMsgGCGetHeroStatsHistoryResponse_EResponseToJSON as sQ, cMsgGCNotificationsUpdate_EResultFromJSON as sR, cMsgGCNotificationsUpdate_EResultToJSON as sS, cMsgGCPlayerInfoSubmitResponse_EResultFromJSON as sT, cMsgGCPlayerInfoSubmitResponse_EResultToJSON as sU, cMsgGCRankedPlayerInfoSubmitResponse_EResultFromJSON as sV, cMsgGCRankedPlayerInfoSubmitResponse_EResultToJSON as sW, cMsgGCToClientCollectorsCacheAvailableDataResponse_Vote_EVoteTypeFromJSON as sX, cMsgGCToClientCollectorsCacheAvailableDataResponse_Vote_EVoteTypeToJSON as sY, cMsgGCToClientGetFavoritePlayersResponse_EResponseFromJSON as sZ, cMsgGCToClientGetFavoritePlayersResponse_EResponseToJSON as s_, cMsgClientToGCSetHeroStickerResponse_EResponseToJSON as sa, cMsgClientToGCSetItemStyleResponse_ESetStyleFromJSON as sb, cMsgClientToGCSetItemStyleResponse_ESetStyleToJSON as sc, cMsgClientToGCSubmitOWConvictionResponse_EResponseFromJSON as sd, cMsgClientToGCSubmitOWConvictionResponse_EResponseToJSON as se, cMsgClientToGCSubmitPlayerMatchSurveyResponse_EResponseFromJSON as sf, cMsgClientToGCSubmitPlayerMatchSurveyResponse_EResponseToJSON as sg, cMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponseFromJSON as sh, cMsgClientToGCSurvivorsGameTelemetryDataResponse_EResponseToJSON as si, cMsgClientToGCUnlockItemStyleResponse_EUnlockStyleFromJSON as sj, cMsgClientToGCUnlockItemStyleResponse_EUnlockStyleToJSON as sk, cMsgClientToGCUnpackBundleResponse_EUnpackBundleFromJSON as sl, cMsgClientToGCUnpackBundleResponse_EUnpackBundleToJSON as sm, cMsgClientToGCUpdateComicBookStatTypeFromJSON as sn, cMsgClientToGCUpdateComicBookStatTypeToJSON as so, cMsgClientToGCUpdatePartyBeacon_ActionFromJSON as sp, cMsgClientToGCUpdatePartyBeacon_ActionToJSON as sq, cMsgClientToGCVoteForArcanaResponse_ResultFromJSON as sr, cMsgClientToGCVoteForArcanaResponse_ResultToJSON as ss, cMsgDOTAAnchorPhoneNumberResponse_ResultFromJSON as st, cMsgDOTAAnchorPhoneNumberResponse_ResultToJSON as su, cMsgDOTADestroyLobbyResponse_ResultFromJSON as sv, cMsgDOTADestroyLobbyResponse_ResultToJSON as sw, cMsgDOTAGameAutographRewardResponse_ResultFromJSON as sx, cMsgDOTAGameAutographRewardResponse_ResultToJSON as sy, cMsgDOTAPopup_PopupIDFromJSON as sz, CGCStoreRechargeRedirectLineItem as t, eGCBaseMsgFromJSON as t$, cMsgGCToClientGetFilteredPlayersResponse_ResultToJSON as t0, cMsgGCToClientJoinPartyFromBeaconResponse_EResponseFromJSON as t1, cMsgGCToClientJoinPartyFromBeaconResponse_EResponseToJSON as t2, cMsgGCToClientManageFavoritesResponse_EResponseFromJSON as t3, cMsgGCToClientManageFavoritesResponse_EResponseToJSON as t4, cMsgGCToClientMapStatsResponse_EResponseFromJSON as t5, cMsgGCToClientMapStatsResponse_EResponseToJSON as t6, cMsgGCToClientPurchaseFilteredPlayerSlotResponse_ResultFromJSON as t7, cMsgGCToClientPurchaseFilteredPlayerSlotResponse_ResultToJSON as t8, cMsgGCToClientRankResponse_EResultCodeFromJSON as t9, cMsgResetStrangeGemCountResponse_EResetGemToJSON as tA, cMsgSocialFeedCommentsResponse_ResultFromJSON as tB, cMsgSocialFeedCommentsResponse_ResultToJSON as tC, cMsgSocialFeedResponse_ResultFromJSON as tD, cMsgSocialFeedResponse_ResultToJSON as tE, cMvpData_MvpDatum_MvpAccolade_MvpAccoladeTypeFromJSON as tF, cMvpData_MvpDatum_MvpAccolade_MvpAccoladeTypeToJSON as tG, cSODOTALobby_LobbyTypeFromJSON as tH, cSODOTALobby_LobbyTypeToJSON as tI, cSODOTALobby_StateFromJSON as tJ, cSODOTALobby_StateToJSON as tK, cSODOTAParty_StateFromJSON as tL, cSODOTAParty_StateToJSON as tM, dOTAWatchReplayTypeFromJSON as tN, dOTAWatchReplayTypeToJSON as tO, eCustomGameInstallStatusFromJSON as tP, eCustomGameInstallStatusToJSON as tQ, eDOTADraftTriviaAnswerResultFromJSON as tR, eDOTADraftTriviaAnswerResultToJSON as tS, eDOTAGCMsgFromJSON as tT, eDOTAGCMsgToJSON as tU, eDOTATriviaAnswerResultFromJSON as tV, eDOTATriviaAnswerResultToJSON as tW, eDevEventRequestResultFromJSON as tX, eDevEventRequestResultToJSON as tY, eGCBaseClientMsgFromJSON as tZ, eGCBaseClientMsgToJSON as t_, cMsgGCToClientRankResponse_EResultCodeToJSON as ta, cMsgGCToClientRecordContestVoteResponse_EResultFromJSON as tb, cMsgGCToClientRecordContestVoteResponse_EResultToJSON as tc, cMsgGCToClientRemoveFilteredPlayerResponse_ResultFromJSON as td, cMsgGCToClientRemoveFilteredPlayerResponse_ResultToJSON as te, cMsgGCToClientRequestActiveBeaconPartiesResponse_EResponseFromJSON as tf, cMsgGCToClientRequestActiveBeaconPartiesResponse_EResponseToJSON as tg, cMsgGCToClientUpdateFilteredPlayerNoteResponse_ResultFromJSON as th, cMsgGCToClientUpdateFilteredPlayerNoteResponse_ResultToJSON as ti, cMsgGCToClientUploadMatchClipResponse_EResponseFromJSON as tj, cMsgGCToClientUploadMatchClipResponse_EResponseToJSON as tk, cMsgPlayerConductScorecard_EBehaviorRatingFromJSON as tl, cMsgPlayerConductScorecard_EBehaviorRatingToJSON as tm, cMsgProfileResponse_EResponseFromJSON as tn, cMsgProfileResponse_EResponseToJSON as to, cMsgProfileUpdateResponse_ResultFromJSON as tp, cMsgProfileUpdateResponse_ResultToJSON as tq, cMsgPurchaseItemWithEventPointsResponse_ResultFromJSON as tr, cMsgPurchaseItemWithEventPointsResponse_ResultToJSON as ts, cMsgRedeemCodeResponse_EResultCodeFromJSON as tt, cMsgRedeemCodeResponse_EResultCodeToJSON as tu, cMsgRequestCrateEscalationLevelResponse_EResultFromJSON as tv, cMsgRequestCrateEscalationLevelResponse_EResultToJSON as tw, cMsgRequestCrateItemsResponse_EResultFromJSON as tx, cMsgRequestCrateItemsResponse_EResultToJSON as ty, cMsgResetStrangeGemCountResponse_EResetGemFromJSON as tz, CGCSystemMsgGetAccountDetails as u, eUnderDraftResponseFromJSON as u$, eGCBaseMsgToJSON as u0, eGCEconBaseMsgFromJSON as u1, eGCEconBaseMsgToJSON as u2, eGCItemMsgFromJSON as u3, eGCItemMsgToJSON as u4, eGCMsgInitiateTradeResponseFromJSON as u5, eGCMsgInitiateTradeResponseToJSON as u6, eGCMsgResponseFromJSON as u7, eGCMsgResponseToJSON as u8, eGCMsgUseItemResponseFromJSON as u9, ePartyMatchmakingFlagsToJSON as uA, ePurchaseHeroRelicResultFromJSON as uB, ePurchaseHeroRelicResultToJSON as uC, eReadyCheckRequestResultFromJSON as uD, eReadyCheckRequestResultToJSON as uE, eReadyCheckStatusFromJSON as uF, eReadyCheckStatusToJSON as uG, eSOMsgFromJSON as uH, eSOMsgToJSON as uI, eSourceEngineFromJSON as uJ, eSourceEngineToJSON as uK, eSteamLearnCacheDataResultFromJSON as uL, eSteamLearnCacheDataResultToJSON as uM, eSteamLearnDataTypeFromJSON as uN, eSteamLearnDataTypeToJSON as uO, eSteamLearnGetAccessTokensResultFromJSON as uP, eSteamLearnGetAccessTokensResultToJSON as uQ, eSteamLearnInferenceMetadataResultFromJSON as uR, eSteamLearnInferenceMetadataResultToJSON as uS, eSteamLearnInferenceResultFromJSON as uT, eSteamLearnInferenceResultToJSON as uU, eSteamLearnSnapshotProjectResultFromJSON as uV, eSteamLearnSnapshotProjectResultToJSON as uW, eSteammLearnRegisterDataSourceResultFromJSON as uX, eSteammLearnRegisterDataSourceResultToJSON as uY, eSupportEventRequestResultFromJSON as uZ, eSupportEventRequestResultToJSON as u_, eGCMsgUseItemResponseToJSON as ua, eGCPlatformFromJSON as ub, eGCPlatformToJSON as uc, eGuildEventAuditActionFromJSON as ud, eGuildEventAuditActionToJSON as ue, eHighPriorityMMStateFromJSON as uf, eHighPriorityMMStateToJSON as ug, eItemEditorReservationResultFromJSON as uh, eItemEditorReservationResultToJSON as ui, eLaneSelectionFlagsFromJSON as uj, eLaneSelectionFlagsToJSON as uk, eLaneSelectionFromJSON as ul, eLaneSelectionToJSON as um, eLobbyMemberCoachRequestStateFromJSON as un, eLobbyMemberCoachRequestStateToJSON as uo, eMatchBehaviorScoreVarianceFromJSON as up, eMatchBehaviorScoreVarianceToJSON as uq, eOverworldAuditActionFromJSON as ur, eOverworldAuditActionToJSON as us, eOverworldMinigameActionFromJSON as ut, eOverworldMinigameActionToJSON as uu, eOverworldNodeStateFromJSON as uv, eOverworldNodeStateToJSON as uw, eOverworldPathStateFromJSON as ux, eOverworldPathStateToJSON as uy, ePartyMatchmakingFlagsFromJSON as uz, CGCSystemMsgGetAccountDetailsResponse as v, eUnderDraftResponseToJSON as v0, eWeekendTourneyRichPresenceEventFromJSON as v1, eWeekendTourneyRichPresenceEventToJSON as v2, gCConnectionStatusFromJSON as v3, gCConnectionStatusToJSON as v4, gCProtoBufMsgSrcFromJSON as v5, gCProtoBufMsgSrcToJSON as v6, lobbyDotaPauseSettingFromJSON as v7, lobbyDotaPauseSettingToJSON as v8, lobbyDotaTVDelayFromJSON as v9, lobbyDotaTVDelayToJSON as va, partnerAccountTypeFromJSON as vb, partnerAccountTypeToJSON as vc, CGCToGCMsgMasterAck as w, CGCToGCMsgMasterAckResponse as x, CGCToGCMsgMasterAck_Process as y, CGCToGCMsgMasterStartupComplete as z };
