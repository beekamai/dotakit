/* Structural contracts the library talks through: the Steam connection it borrows,
   the codec shape ts-proto emits, and the logger sink. */

import type { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
    : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
    : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

/** Codec object emitted by ts-proto for every protobuf message. */
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}

export type GCCallback = (appid: number, msgId: number, payload: Buffer) => void;

/**
 * The slice of `steam-user` this library needs. A `SteamUser` instance satisfies it
 * as-is; anything else that can carry GC traffic (a mock, a proxy, a replay harness)
 * can be plugged in instead.
 */
export interface SteamTransport {
    on(event: string, listener: (...args: any[]) => void): unknown;
    off?(event: string, listener: (...args: any[]) => void): unknown;
    removeListener?(event: string, listener: (...args: any[]) => void): unknown;
    /** Truthy once logged into Steam. Sending before that throws `NotConnectedError`. */
    steamID?: unknown;
    sendToGC(appid: number, msgId: number, header: object, payload: Buffer, cb?: GCCallback): void;
    gamesPlayed?(apps: unknown): void;
}

export interface Logger {
    debug?(message: string, ...args: unknown[]): void;
    warn?(message: string, ...args: unknown[]): void;
    error?(message: string, ...args: unknown[]): void;
}

/** Injectable timer source. Exists so tests can drive the hello backoff deterministically. */
export interface TimerSource {
    setTimeout(handler: () => void, ms: number): unknown;
    clearTimeout(handle: unknown): void;
}
