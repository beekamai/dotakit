/* The narrow view of the GC client that the guild / profile / live modules talk to,
   plus the one-shot request helper they share. Structural on purpose: a `Dota2GC`
   fits, and so does a test double. */

export interface GCRouterLike {
    on(msgId: any, listener: (payload: any) => void): unknown;
    off(msgId: any, listener: (payload: any) => void): unknown;
}

export interface GCLike {
    send(msgId: any, body: any): void;
    sendJob(msgId: any, body: any, options?: any): Promise<any>;
    router: GCRouterLike;
}

/** Default deadline for a GC round trip. The GC is either quick or gone. */
export const GC_TIMEOUT_MS = 15_000;

export interface OneShotOptions<T> {
    /** Message id to send, and its body. */
    request: [msgId: number, body: unknown];
    /** Message id the answer arrives on. */
    response: number;
    /** Return `false` to ignore a reply meant for someone else and keep waiting. */
    accept?: (payload: T) => boolean;
    timeoutMs?: number;
}

/**
 * Sends a request and waits for the next matching push.
 *
 * Used for the GC messages that are broadcast as well as answered — the reply to a
 * guild-data request also lands on every listener — where a jobid-correlated
 * `sendJob` would race with the pushed copy.
 *
 * @returns the decoded reply, or `null` if nothing matching arrived in time.
 */
export function oneShot<T>(gc: GCLike, options: OneShotOptions<T>): Promise<T | null> {
    const { request, response, accept, timeoutMs = GC_TIMEOUT_MS } = options;

    return new Promise<T | null>((resolve) => {
        let done = false;
        const finish = (value: T | null) => {
            if (done) return;
            done = true;
            clearTimeout(timer);
            gc.router.off(response, onMessage);
            resolve(value);
        };

        const onMessage = (payload: T) => {
            if (accept && !accept(payload)) return;
            finish(payload);
        };

        const timer = setTimeout(() => finish(null), timeoutMs);
        /* Not unref'd on purpose: an outstanding GC request should hold the process
           open exactly as long as the caller's await does. */
        gc.router.on(response, onMessage);
        gc.send(request[0], request[1]);
    });
}

/** Seconds-since-epoch as the GC reports them; `0` means "never". */
export function fromUnixSeconds(seconds: number | undefined): Date | null {
    if (!seconds || seconds <= 0) return null;
    return new Date(seconds * 1000);
}

export const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));
