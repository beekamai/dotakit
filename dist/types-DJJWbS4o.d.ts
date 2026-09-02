import { BinaryWriter, BinaryReader } from '@bufbuild/protobuf/wire';

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
/** Codec object emitted by ts-proto for every protobuf message. */
interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
type GCCallback = (appid: number, msgId: number, payload: Buffer) => void;
/**
 * The slice of `steam-user` this library needs. A `SteamUser` instance satisfies it
 * as-is; anything else that can carry GC traffic (a mock, a proxy, a replay harness)
 * can be plugged in instead.
 */
interface SteamTransport {
    on(event: string, listener: (...args: any[]) => void): unknown;
    off?(event: string, listener: (...args: any[]) => void): unknown;
    removeListener?(event: string, listener: (...args: any[]) => void): unknown;
    /** Truthy once logged into Steam. Sending before that throws `NotConnectedError`. */
    steamID?: unknown;
    sendToGC(appid: number, msgId: number, header: object, payload: Buffer, cb?: GCCallback): void;
    gamesPlayed?(apps: unknown): void;
}
interface Logger {
    debug?(message: string, ...args: unknown[]): void;
    warn?(message: string, ...args: unknown[]): void;
    error?(message: string, ...args: unknown[]): void;
}
/** Injectable timer source. Exists so tests can drive the hello backoff deterministically. */
interface TimerSource {
    setTimeout(handler: () => void, ms: number): unknown;
    clearTimeout(handle: unknown): void;
}

export type { Builtin as B, DeepPartial as D, GCCallback as G, Logger as L, MessageFns as M, SteamTransport as S, TimerSource as T };
