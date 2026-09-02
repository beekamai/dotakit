/* Every failure this library produces is one of these — a job never rejects with a
   bare Error, and never resolves with a half-decoded payload. */

export class Dota2GCError extends Error {
    constructor(message: string, options?: { cause?: unknown }) {
        super(message, options);
        this.name = new.target.name;
    }
}

/** Thrown by `send`/`sendJob` when no codec is registered for the outgoing message id. */
export class NoEncoderError extends Dota2GCError {
    constructor(readonly msgId: number, readonly messageName?: string) {
        super(`No protobuf encoder for GC message ${messageName ?? msgId} (${msgId})`);
    }
}

/**
 * A job reply arrived but its message id has no codec. Carries the raw bytes so the
 * caller can still decode it by hand — a job never silently hangs on an unknown reply.
 */
export class NoDecoderError extends Dota2GCError {
    constructor(readonly msgId: number, readonly payload: Buffer, readonly messageName?: string) {
        super(`No protobuf decoder for GC message ${messageName ?? msgId} (${msgId}), ${payload.length} raw bytes attached`);
    }
}

/**
 * The GC answered a request with a message id other than the one `jobResponses` says
 * it should. Decoding it as the expected type would silently produce a wrong-shaped
 * object, so the job rejects instead and hands over the raw bytes.
 *
 * Pass `responseId` to `sendJob` to decode a specific id anyway.
 */
export class UnexpectedResponseError extends Dota2GCError {
    constructor(
        readonly requestId: number,
        readonly expectedId: number,
        readonly msgId: number,
        readonly payload: Buffer,
        readonly messageName?: string,
    ) {
        super(
            `GC answered request ${requestId} with ${messageName ?? msgId} (${msgId}), expected ${expectedId}; ` +
                `${payload.length} raw bytes attached`,
        );
    }
}

export class JobTimeoutError extends Dota2GCError {
    constructor(readonly msgId: number, readonly timeoutMs: number) {
        super(`GC job ${msgId} timed out after ${timeoutMs} ms`);
    }
}

export class JobAbortedError extends Dota2GCError {
    constructor(readonly msgId: number, cause?: unknown) {
        super(`GC job ${msgId} aborted`, { cause });
    }
}

/** Steam is not logged in (no `steamID` on the transport), so nothing can be sent. */
export class NotConnectedError extends Dota2GCError {
    constructor(message = "Cannot send GC message: not logged into Steam") {
        super(message);
    }
}
