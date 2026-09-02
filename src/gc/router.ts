/* Inbound half of the GC connection: decode a raw message and hand it to listeners
   keyed by numeric message id. Nothing is ever dropped silently. */

import { EventEmitter } from "node:events";

import { allMessages, messageNames, type MessageId, type MessagePayload } from "./messages";
import type { Logger } from "./types";

export type UnknownListener = (msgId: number, payload: Buffer) => void;
export type DecodeErrorListener = (msgId: number, payload: Buffer, error: unknown) => void;
export type AnyListener = (msgId: number, payload: unknown) => void;

/** Message ids with no codec are reported here instead of being discarded. */
const UNKNOWN = "unknown";
/** A payload that failed to decode is reported here; `route` never throws. */
const DECODE_ERROR = "decodeError";

/**
 * Routes decoded GC messages to listeners.
 *
 * Listeners are registered by numeric message id (`EDOTAGCMsg.k_EMsg…`) and receive the
 * decoded protobuf. Two extra channels exist so that no inbound traffic disappears:
 * `unknown` for ids without a codec, `decodeError` for payloads that fail to parse.
 */
export class GCRouter {
    private readonly emitter = new EventEmitter();
    private readonly anyListeners = new Set<AnyListener>();

    constructor(private readonly logger?: Logger) {
        this.emitter.setMaxListeners(0);
    }

    on<T extends MessageId>(msgId: T, listener: (payload: MessagePayload<T>) => void): this;
    on(msgId: typeof UNKNOWN, listener: UnknownListener): this;
    on(msgId: typeof DECODE_ERROR, listener: DecodeErrorListener): this;
    on(msgId: number | string, listener: (...args: any[]) => void): this {
        this.emitter.on(String(msgId), listener);
        return this;
    }

    once<T extends MessageId>(msgId: T, listener: (payload: MessagePayload<T>) => void): this;
    once(msgId: typeof UNKNOWN, listener: UnknownListener): this;
    once(msgId: typeof DECODE_ERROR, listener: DecodeErrorListener): this;
    once(msgId: number | string, listener: (...args: any[]) => void): this {
        this.emitter.once(String(msgId), listener);
        return this;
    }

    off<T extends MessageId>(msgId: T, listener: (payload: MessagePayload<T>) => void): this;
    off(msgId: typeof UNKNOWN, listener: UnknownListener): this;
    off(msgId: typeof DECODE_ERROR, listener: DecodeErrorListener): this;
    off(msgId: number | string, listener: (...args: any[]) => void): this {
        this.emitter.off(String(msgId), listener);
        return this;
    }

    /** Fires for every routed message, decoded when possible and raw otherwise. */
    onAny(listener: AnyListener): this {
        this.anyListeners.add(listener);
        return this;
    }

    offAny(listener: AnyListener): this {
        this.anyListeners.delete(listener);
        return this;
    }

    removeAllListeners(msgId?: number | string): this {
        if (msgId === undefined) {
            this.emitter.removeAllListeners();
            this.anyListeners.clear();
        } else {
            this.emitter.removeAllListeners(String(msgId));
        }
        return this;
    }

    listenerCount(msgId: number | string): number {
        return this.emitter.listenerCount(String(msgId));
    }

    hasDecoder(msgId: number): msgId is MessageId {
        return msgId in allMessages;
    }

    /** Enum member name for a message id, or `undefined` if the id is unknown. */
    messageName(msgId: number): string | undefined {
        return messageNames[msgId];
    }

    /**
     * Decodes a raw GC message and dispatches it. Never throws: unknown ids and
     * malformed payloads become `unknown` / `decodeError` events, and an exception
     * from a listener is logged rather than escaping into the transport's callback.
     */
    route(msgId: number, payload: Buffer): void {
        const codec = (allMessages as Record<number, { decode(input: Uint8Array): unknown }>)[msgId];
        if (!codec) {
            this.logger?.debug?.("dotakit: no decoder for inbound GC message %s", msgId);
            this.emitAny(msgId, payload);
            this.dispatch(UNKNOWN, msgId, payload);
            return;
        }

        let decoded: unknown;
        try {
            decoded = codec.decode(payload);
        } catch (error) {
            this.logger?.warn?.("dotakit: failed to decode GC message %s", msgId, error);
            this.dispatch(DECODE_ERROR, msgId, payload, error);
            return;
        }

        this.emitAny(msgId, decoded);
        this.dispatch(String(msgId), decoded);
    }

    /* route() runs inside the transport's own event handler, so a listener that throws
       would escape into the socket callback and take the process down with it. */
    private dispatch(event: string, ...args: unknown[]): void {
        try {
            this.emitter.emit(event, ...args);
        } catch (error) {
            this.logger?.error?.("dotakit: listener threw while routing %s", event, error);
        }
    }

    private emitAny(msgId: number, payload: unknown): void {
        for (const listener of this.anyListeners) {
            try {
                listener(msgId, payload);
            } catch (error) {
                /* One bad onAny listener must not stop the rest of the routing. */
                this.logger?.error?.("dotakit: onAny listener threw for message %s", msgId, error);
            }
        }
    }
}
