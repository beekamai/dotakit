/* Test doubles: an in-memory Steam transport and a hand-driven clock, so every test
   runs offline and without real time passing. */

import { EventEmitter } from "node:events";

import type { GCCallback, SteamTransport, TimerSource } from "../src/gc/types";
import type { GCLike, GCRouterLike } from "../src/shared";

export type SentMessage = { appid: number; msgId: number; payload: Buffer; callback?: GCCallback };

export class FakeSteam extends EventEmitter implements SteamTransport {
    steamID: unknown = "76561198000000000";
    readonly sent: SentMessage[] = [];
    readonly gamesPlayedCalls: unknown[] = [];
    private running: number[] = [];

    sendToGC(appid: number, msgId: number, _header: object, payload: Buffer, callback?: GCCallback): void {
        this.sent.push({ appid, msgId, payload, callback });
    }

    gamesPlayed(apps: unknown): void {
        this.gamesPlayedCalls.push(apps);
        const next = Array.isArray(apps) ? (apps as number[]) : [];
        for (const appid of this.running) if (!next.includes(appid)) this.emit("appQuit", appid);
        for (const appid of next) if (!this.running.includes(appid)) this.emit("appLaunched", appid);
        this.running = next;
    }

    /** Delivers a GC message as if it arrived from Steam. */
    receive(msgId: number, payload: Buffer, appid = 570): void {
        this.emit("receivedFromGC", appid, msgId, payload);
    }

    /** Replies to the nth outstanding job via its callback. */
    reply(index: number, replyMsgId: number, payload: Buffer): void {
        const message = this.sent[index];
        if (!message?.callback) throw new Error(`no job callback recorded at index ${index}`);
        message.callback(message.appid, replyMsgId, payload);
    }

    get lastSent(): SentMessage {
        const message = this.sent.at(-1);
        if (!message) throw new Error("nothing was sent");
        return message;
    }
}

export class FakeTimers implements TimerSource {
    private now = 0;
    private seq = 0;
    private readonly queue = new Map<number, { at: number; fn: () => void }>();

    setTimeout(fn: () => void, ms: number): unknown {
        const id = ++this.seq;
        this.queue.set(id, { at: this.now + ms, fn });
        return id;
    }

    clearTimeout(handle: unknown): void {
        this.queue.delete(handle as number);
    }

    /** Milliseconds until each scheduled callback, soonest first. */
    get pending(): number[] {
        return [...this.queue.values()].map((t) => t.at - this.now).sort((a, b) => a - b);
    }

    /** Runs every callback due within `ms`, in order, moving the clock as it goes. */
    advance(ms: number): void {
        const target = this.now + ms;
        for (;;) {
            const due = [...this.queue.entries()].filter(([, t]) => t.at <= target).sort((a, b) => a[1].at - b[1].at)[0];
            if (!due) break;
            this.queue.delete(due[0]);
            this.now = due[1].at;
            due[1].fn();
        }
        this.now = target;
    }
}

/** Lets pending microtasks (promise continuations) run. */
export const flush = (): Promise<void> => new Promise<void>((resolve) => queueMicrotask(resolve));

/* ------------------------------------------------------------------ GC doubles */

export class FakeRouter implements GCRouterLike {
    private readonly emitter = new EventEmitter();

    constructor() {
        this.emitter.setMaxListeners(0);
    }

    on(msgId: any, listener: (payload: any) => void): this {
        this.emitter.on(String(msgId), listener);
        return this;
    }

    off(msgId: any, listener: (payload: any) => void): this {
        this.emitter.off(String(msgId), listener);
        return this;
    }

    /** Delivers a message as if the GC had pushed it. */
    push(msgId: number, payload: unknown): void {
        this.emitter.emit(String(msgId), payload);
    }

    listenerCount(msgId: number): number {
        return this.emitter.listenerCount(String(msgId));
    }
}

export type SentGCMessage = { msgId: number; body: any };

/**
 * A GC client double: `onSend` scripts the push that answers a `send()`, `onJob` scripts
 * the reply to a `sendJob()`. Anything unscripted is recorded and left unanswered.
 */
export class FakeGC implements GCLike {
    readonly router = new FakeRouter();
    readonly sent: SentGCMessage[] = [];
    readonly jobs: SentGCMessage[] = [];

    private readonly sendHandlers = new Map<number, (body: any) => [msgId: number, payload: unknown] | void>();
    private readonly jobHandlers = new Map<number, (body: any) => unknown>();

    onSend(msgId: number, handler: (body: any) => [msgId: number, payload: unknown] | void): this {
        this.sendHandlers.set(msgId, handler);
        return this;
    }

    onJob(msgId: number, handler: (body: any) => unknown): this {
        this.jobHandlers.set(msgId, handler);
        return this;
    }

    send(msgId: any, body: any): void {
        this.sent.push({ msgId: Number(msgId), body });
        const handler = this.sendHandlers.get(Number(msgId));
        if (!handler) return;
        /* Asynchronous like the real thing: the caller must have subscribed first. */
        queueMicrotask(() => {
            const answer = handler(body);
            if (answer) this.router.push(answer[0], answer[1]);
        });
    }

    sendJob(msgId: any, body: any): Promise<any> {
        this.jobs.push({ msgId: Number(msgId), body });
        const handler = this.jobHandlers.get(Number(msgId));
        if (!handler) return Promise.reject(new Error(`FakeGC: no job handler for ${msgId}`));
        return Promise.resolve().then(() => handler(body));
    }

    /** Bodies of every `send`/`sendJob` for one message id, oldest first. */
    bodiesFor(msgId: number): any[] {
        return [...this.sent, ...this.jobs].filter((m) => m.msgId === msgId).map((m) => m.body);
    }
}

/** A `steam-user` stand-in: records logOn options, lets tests fire Steam events. */
export class FakeSteamUser extends EventEmitter {
    steamID: unknown = null;
    readonly logOnCalls: Record<string, unknown>[] = [];
    loggedOff = false;

    logOn(options: Record<string, unknown>): void {
        this.logOnCalls.push(options);
    }

    logOff(): void {
        this.loggedOff = true;
    }

    sendToGC(): void {}

    gamesPlayed(): void {}

    /** Completes the login: sets a steamID and emits `loggedOn`. */
    succeed(steamID = "76561198000000000"): void {
        this.steamID = steamID;
        this.emit("loggedOn");
    }

    get lastLogOn(): Record<string, unknown> {
        const last = this.logOnCalls.at(-1);
        if (!last) throw new Error("logOn was never called");
        return last;
    }
}
