/* The low-level Game Coordinator client, unchanged from dota2-gc 0.1. The generated
   protobuf message types live behind the `dotakit/protobufs` subpath. */

export { Dota2GC, DOTA2_APPID } from "./client";
export type { Dota2GCOptions, JobOptions } from "./client";

export { GCRouter } from "./router";
export type { AnyListener, DecodeErrorListener, UnknownListener } from "./router";

export {
    Dota2GCError,
    JobAbortedError,
    JobTimeoutError,
    NoDecoderError,
    NoEncoderError,
    NotConnectedError,
    UnexpectedResponseError,
} from "./errors";

export type {
    Builtin,
    DeepPartial,
    GCCallback,
    Logger,
    MessageFns,
    SteamTransport,
    TimerSource,
} from "./types";

export { allMessages, clientMessages, gcMessages, jobResponses, messageNames } from "./messages";
export type {
    ClientMessageId,
    GCMessageId,
    JobMessageId,
    JobResponse,
    MessageId,
    MessagePayload,
} from "./messages";

/* The message-id enums, re-exported so callers do not need the protobufs subpath
   for the common case of naming a message. */
export { EDOTAGCMsg } from "../protobufs/dota_gcmessages_msgid";
export { EGCBaseClientMsg, ESOMsg } from "../protobufs/gcsystemmsgs";
export { EGCBaseMsg } from "../protobufs/base_gcmessages";
export { GCConnectionStatus } from "../protobufs/gcsdk_gcmessages";
