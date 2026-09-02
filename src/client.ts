/* The GC connection itself: keeps the hello handshake alive, tracks session state and
   turns request/response message pairs into promises. */

import { EventEmitter } from "node:events";

import {
    Dota2GCError,
    JobAbortedError,
    JobTimeoutError,
    NoDecoderError,
    NoEncoderError,
    NotConnectedError,
    UnexpectedResponseError,
} from "./errors";
import {
    allMessages,
    jobResponses,
    messageNames,
    type JobResponse,
    type MessageId,
    type MessagePayload,
} from "./messages";
import { GCRouter } from "./router";
import type { DeepPartial, GCCallback, Logger, MessageFns, SteamTransport, TimerSource } from "./types";
import {
    EGCBaseClientMsg,
    GCConnectionStatus,
    type CMsgClientWelcome,
    type CMsgConnectionStatus,
} from "./protobufs/index";

export const DOTA2_APPID = 570;

/* Node clamps anything larger to 1 ms and warns, turning a long deadline into an
   instant one — so a longer request is capped here instead. */
const MAX_TIMEOUT_MS = 2_147_483_647;

export interface Dota2GCOptions {
    /** Steam app id to talk to. Defaults to Dota 2 (570). */
    appid?: number;
    /** Have `connect()` call `steam.gamesPlayed([appid])` for you. */
    autoGamesPlayed?: boolean;
    /** Default deadline for `sendJob` / `sendJobRaw`. `0` disables the timeout. */
    jobTimeoutMs?: number;
    /** Delay before the first hello after the app launches. */
    helloInitialMs?: number;
    /** Delay before the second hello; doubles on every further attempt. */
    helloBaseMs?: number;
    /** Upper bound for the doubling hello delay. */
    helloBackoffMaxMs?: number;
    logger?: Logger;
    /** Timer source. Swap it in tests to drive the handshake deterministically. */
    timers?: TimerSource;
}

export interface JobOptions {
    /** Overrides `jobTimeoutMs` for this call. `0` waits forever. */
    timeoutMs?: number;
    signal?: AbortSignal;
    /** Decode the reply with this message id instead of the id the GC replied with. */
    responseId?: MessageId;
}

type PendingJob = { settle(error: Error): void };

/** Rejects nonsense deadlines loudly instead of silently meaning "wait forever". */
function normalizeTimeout(value: number | undefined, fallback: number, name: string): number {
    const ms = value ?? fallback;
    if (!Number.isFinite(ms) || ms < 0) throw new Dota2GCError(`${name} must be a finite number >= 0, got ${ms}`);
    return Math.min(ms, MAX_TIMEOUT_MS);
}

/**
 * A Dota 2 Game Coordinator client.
 *
 * Give it anything that satisfies {@link SteamTransport} — a logged-in `steam-user`
 * instance does. Once the Steam client launches the app, the handshake starts on its
 * own and `connected` fires with the GC welcome.
 *
 * @remarks
 * `connected` fires on **every** GC session, not just the first: the GC drops clients
 * routinely (restarts, queue, suspension) and the handshake restarts by itself, so
 * treat the event as "a fresh session exists" and re-subscribe your state there.
 */
export class Dota2GC extends EventEmitter {
    static readonly STEAM_APPID = DOTA2_APPID;

    readonly router: GCRouter;
    readonly appid: number;

    private readonly steam: SteamTransport;
    private readonly logger?: Logger;
    private readonly timers: TimerSource;
    private readonly jobTimeoutMs: number;
    private readonly helloInitialMs: number;
    private readonly helloBaseMs: number;
    private readonly helloBackoffMaxMs: number;
    private readonly autoGamesPlayed: boolean;

    private readonly pending = new Set<PendingJob>();
    private readonly hooks: Array<[string, (...args: any[]) => void]> = [];

    private readonly waiters = new Set<(error: Error) => void>();

    private destroyed = false;
    private _inApp = false;
    private _haveGCSession = false;
    private _welcome?: CMsgClientWelcome;
    private helloTimer?: unknown;
    private helloDelayMs?: number;

    constructor(steam: SteamTransport, options: Dota2GCOptions = {}) {
        super();
        this.steam = steam;
        this.appid = options.appid ?? DOTA2_APPID;
        this.logger = options.logger;
        this.timers = options.timers ?? globalThis;
        this.jobTimeoutMs = normalizeTimeout(options.jobTimeoutMs, 10_000, "jobTimeoutMs");
        this.helloInitialMs = options.helloInitialMs ?? 500;
        this.helloBaseMs = options.helloBaseMs ?? 1000;
        this.helloBackoffMaxMs = options.helloBackoffMaxMs ?? 60_000;
        this.autoGamesPlayed = options.autoGamesPlayed ?? false;
        this.router = new GCRouter(this.logger);
        /* One listener per in-flight connect() is legitimate; no leak warning wanted. */
        this.setMaxListeners(0);

        this.hookRouter();
        this.hookTransport();
    }

    /** The Steam client has the app running, so the GC is reachable. */
    get inApp(): boolean {
        return this._inApp;
    }

    /** A GC session is established (a welcome arrived and was not invalidated). */
    get haveGCSession(): boolean {
        return this._haveGCSession;
    }

    /** The most recent GC welcome, if any. */
    get welcome(): CMsgClientWelcome | undefined {
        return this._welcome;
    }

    // ---------------------------------------------------------------- lifecycle

    /**
     * Resolves with the GC welcome once a session exists. Resolves immediately if one
     * already does. With `autoGamesPlayed` it also asks Steam to launch the app.
     */
    connect(options: { timeoutMs?: number } = {}): Promise<CMsgClientWelcome> {
        if (this.destroyed) return Promise.reject(new NotConnectedError("Dota2GC was destroyed"));
        if (this._haveGCSession && this._welcome) return Promise.resolve(this._welcome);

        let timeoutMs: number;
        try {
            timeoutMs = normalizeTimeout(options.timeoutMs, 0, "timeoutMs");
        } catch (error) {
            return Promise.reject(error as Error);
        }

        return new Promise<CMsgClientWelcome>((resolve, reject) => {
            let settled = false;
            let timer: unknown;

            const finish = () => {
                settled = true;
                this.off("connected", onConnected);
                this.waiters.delete(fail);
                if (timer !== undefined) this.timers.clearTimeout(timer);
            };
            const fail = (error: Error) => {
                if (settled) return;
                finish();
                reject(error);
            };
            const onConnected = (welcome: CMsgClientWelcome) => {
                if (settled) return;
                finish();
                resolve(welcome);
            };

            this.once("connected", onConnected);
            /* So destroy() can settle this promise instead of leaving it hanging. */
            this.waiters.add(fail);
            if (timeoutMs > 0) {
                timer = this.timers.setTimeout(
                    () => fail(new Dota2GCError(`Timed out after ${timeoutMs} ms waiting for a GC session`)),
                    timeoutMs,
                );
            }

            /* The app may already be running from an earlier session — Steam only emits
               appLaunched on the transition, so nudge the handshake ourselves. */
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
    disconnect(): void {
        this.clearHelloTimer();
        /* State first: gamesPlayed([]) makes Steam emit appQuit synchronously, which
           would otherwise clear the session before we could report it. */
        const hadSession = this._haveGCSession;
        this._haveGCSession = false;
        this._welcome = undefined;

        /* Only forget the running app if we are the ones stopping it. Steam emits
           appLaunched on the transition only, so clearing this while the app keeps
           running would leave the handshake unable to ever restart. */
        if (this.autoGamesPlayed && this.steam.gamesPlayed) {
            this._inApp = false;
            this.steam.gamesPlayed([]);
        }

        this.rejectPending(new NotConnectedError("GC session closed"));
        if (hadSession) this.emit("disconnected", GCConnectionStatus.GCConnectionStatus_NO_SESSION);
    }

    /** Disconnects, detaches every transport listener and rejects in-flight jobs. */
    destroy(): void {
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
    send<T extends MessageId>(msgId: T, body: DeepPartial<MessagePayload<T>>): void {
        this.sendRaw(msgId, this.encode(msgId, body));
    }

    /**
     * Sends a request and resolves with the decoded reply.
     *
     * Rejects with {@link JobTimeoutError} on the deadline, {@link JobAbortedError} when
     * `signal` fires, and {@link NoDecoderError} — carrying the raw bytes — when the GC
     * answers with a message id this library has no codec for. It never hangs.
     */
    async sendJob<T extends MessageId>(
        msgId: T,
        body: DeepPartial<MessagePayload<T>>,
        options: JobOptions = {},
    ): Promise<JobResponse<T>> {
        const expected = (jobResponses as Record<number, number | undefined>)[msgId];
        const reply = await this.rawJob(msgId, this.encode(msgId, body), options);

        /* Protobuf is schema-less on the wire: decoding an unexpected reply with the
           expected codec yields a plausible-looking object full of defaults. Refuse. */
        if (options.responseId === undefined && expected !== undefined && reply.msgId !== expected) {
            throw new UnexpectedResponseError(msgId, expected, reply.msgId, reply.payload, messageNames[reply.msgId]);
        }

        const decodeId = options.responseId ?? expected ?? reply.msgId;
        const codec = (allMessages as Record<number, MessageFns<unknown> | undefined>)[decodeId];
        if (!codec) throw new NoDecoderError(decodeId, reply.payload, messageNames[decodeId]);

        try {
            return codec.decode(reply.payload) as JobResponse<T>;
        } catch (cause) {
            throw new Dota2GCError(`Failed to decode GC reply ${messageNames[decodeId] ?? decodeId}`, { cause });
        }
    }

    /** Sends an already-encoded payload. `callback` receives the GC reply, if any. */
    sendRaw(msgId: number, payload: Buffer, callback?: GCCallback): void {
        if (this.destroyed) throw new NotConnectedError("Dota2GC was destroyed");
        if (!this.steam.steamID) throw new NotConnectedError();
        this.logger?.debug?.("dota2-gc: sending %s (%s), %s bytes", messageNames[msgId] ?? "unknown", msgId, payload.length);
        this.steam.sendToGC(this.appid, msgId, {}, payload, callback);
    }

    /** Like {@link sendJob} but with raw bytes in and raw bytes out. */
    async sendJobRaw(msgId: number, payload: Buffer, options: Omit<JobOptions, "responseId"> = {}): Promise<Buffer> {
        return (await this.rawJob(msgId, payload, options)).payload;
    }

    // ------------------------------------------------------------------ events

    override on(event: "connected", listener: (welcome: CMsgClientWelcome) => void): this;
    override on(event: "disconnected", listener: (status: GCConnectionStatus) => void): this;
    override on(event: string | symbol, listener: (...args: any[]) => void): this {
        return super.on(event, listener);
    }

    override once(event: "connected", listener: (welcome: CMsgClientWelcome) => void): this;
    override once(event: "disconnected", listener: (status: GCConnectionStatus) => void): this;
    override once(event: string | symbol, listener: (...args: any[]) => void): this {
        return super.once(event, listener);
    }

    override off(event: "connected", listener: (welcome: CMsgClientWelcome) => void): this;
    override off(event: "disconnected", listener: (status: GCConnectionStatus) => void): this;
    override off(event: string | symbol, listener: (...args: any[]) => void): this {
        return super.off(event, listener);
    }

    // ----------------------------------------------------------------- internals

    private encode<T extends MessageId>(msgId: T, body: DeepPartial<MessagePayload<T>>): Buffer {
        const codec = (allMessages as Record<number, MessageFns<unknown>>)[msgId];
        if (!codec) throw new NoEncoderError(msgId, messageNames[msgId]);
        return Buffer.from(codec.encode(codec.fromPartial(body as never)).finish());
    }

    private rawJob(
        msgId: number,
        payload: Buffer,
        options: Omit<JobOptions, "responseId">,
    ): Promise<{ msgId: number; payload: Buffer }> {
        const timeoutMs = normalizeTimeout(options.timeoutMs, this.jobTimeoutMs, "timeoutMs");
        const signal = options.signal;

        return new Promise((resolve, reject) => {
            if (signal?.aborted) {
                reject(new JobAbortedError(msgId, signal.reason));
                return;
            }

            let settled = false;
            let timer: unknown;
            const onAbort = () => settle(new JobAbortedError(msgId, signal!.reason));
            const job: PendingJob = { settle: (error) => settle(error) };

            const cleanup = () => {
                settled = true;
                this.pending.delete(job);
                if (timer !== undefined) this.timers.clearTimeout(timer);
                signal?.removeEventListener("abort", onAbort);
            };

            function settle(error: Error) {
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

    private rejectPending(error: Error): void {
        for (const job of [...this.pending]) job.settle(error);
        this.pending.clear();
    }

    private failWaiters(error: Error): void {
        for (const fail of [...this.waiters]) fail(error);
        this.waiters.clear();
    }

    private hookRouter(): void {
        this.router.on(EGCBaseClientMsg.k_EMsgGCClientWelcome, (welcome) => {
            this.logger?.debug?.("dota2-gc: GC session established");
            this._haveGCSession = true;
            this._welcome = welcome as CMsgClientWelcome;
            this.clearHelloTimer();
            this.emit("connected", this._welcome);
        });

        this.router.on(EGCBaseClientMsg.k_EMsgGCClientConnectionStatus, (message) => {
            const { status } = message as CMsgConnectionStatus;
            if (status === GCConnectionStatus.GCConnectionStatus_HAVE_SESSION) return;
            if (!this._haveGCSession) return;

            this.logger?.debug?.("dota2-gc: GC session lost, status %s", status);
            this._haveGCSession = false;
            this._welcome = undefined;
            /* No reply can arrive on a dead session — do not make callers wait out
               the full job timeout for an answer that is never coming. */
            this.rejectPending(new NotConnectedError("GC session lost"));
            this.emit("disconnected", status);
            this.startHelloTimer();
        });
    }

    private hookTransport(): void {
        this.hook("receivedFromGC", (appid: number, msgId: number, payload: Buffer) => {
            if (appid !== this.appid) return;
            this.router.route(msgId, payload);
        });

        this.hook("appLaunched", (appid: number) => {
            if (appid !== this.appid || this._inApp) return;
            this._inApp = true;
            if (!this._haveGCSession) this.startHelloTimer();
        });

        this.hook("appQuit", (appid: number) => {
            if (appid !== this.appid || !this._inApp) return;
            this.handleAppGone();
        });

        /* Losing Steam takes the GC session with it just as surely as quitting the app. */
        this.hook("disconnected", () => this.handleAppGone());
        this.hook("error", () => this.handleAppGone());
    }

    private hook(event: string, listener: (...args: any[]) => void): void {
        this.hooks.push([event, listener]);
        this.steam.on(event, listener);
    }

    /** The app or Steam went away: the session is gone, tell anyone who had one. */
    private handleAppGone(): void {
        this.clearHelloTimer();
        const hadSession = this._haveGCSession;
        this._inApp = false;
        this._haveGCSession = false;
        this._welcome = undefined;
        this.rejectPending(new NotConnectedError("GC session lost"));
        if (hadSession) this.emit("disconnected", GCConnectionStatus.GCConnectionStatus_NO_SESSION);
    }

    private startHelloTimer(): void {
        if (!this._inApp || this.helloTimer !== undefined) return;
        this.helloTimer = this.timers.setTimeout(() => this.sendHello(), this.helloInitialMs);
    }

    private sendHello(): void {
        this.helloTimer = undefined;
        if (!this._inApp || this._haveGCSession) {
            this.clearHelloTimer();
            return;
        }

        try {
            this.send(EGCBaseClientMsg.k_EMsgGCClientHello, {});
        } catch (error) {
            /* Steam may have dropped between the timer being set and firing; keep retrying. */
            this.logger?.warn?.("dota2-gc: hello could not be sent", error);
        }

        /* send() can re-enter synchronously on some transports (a Steam reconnect burst
           delivers appQuit + appLaunched inline), and startHelloTimer() would have armed
           a timer while helloTimer was momentarily undefined. Never orphan that one. */
        if (this.helloTimer !== undefined || !this._inApp || this._haveGCSession) return;

        this.helloDelayMs = Math.min(this.helloBackoffMaxMs, this.helloDelayMs ? this.helloDelayMs * 2 : this.helloBaseMs);
        this.logger?.debug?.("dota2-gc: hello sent, next attempt in %s ms", this.helloDelayMs);
        this.helloTimer = this.timers.setTimeout(() => this.sendHello(), this.helloDelayMs);
    }

    private clearHelloTimer(): void {
        if (this.helloTimer !== undefined) this.timers.clearTimeout(this.helloTimer);
        this.helloTimer = undefined;
        this.helloDelayMs = undefined;
    }
}
