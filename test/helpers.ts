/* Test doubles: an in-memory Steam transport and a hand-driven clock, so every test
   runs offline and without real time passing. */

import { EventEmitter } from "node:events";

import type { GCCallback, SteamTransport, TimerSource } from "../src/types";

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
