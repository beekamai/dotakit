/**
 * Regenerates src/gc/messages.ts from the ts-proto output in src/protobufs.
 *
 * It reads the four GC message-id enums, pairs every `k_EMsg<Name>` member with an
 * exported `CMsg…` codec by name, derives request → response pairs, and writes the
 * result as a plain TypeScript module. Irregular pairs live in scripts/overrides.json.
 *
 * Run: bun run scripts/gen-messages.ts
 */

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = join(import.meta.dir, "..");
const PROTO_DIR = join(ROOT, "src", "protobufs");
const OUT_FILE = join(ROOT, "src", "gc", "messages.ts");

const MSG_ENUMS = ["EDOTAGCMsg", "EGCBaseClientMsg", "ESOMsg", "EGCBaseMsg"] as const;

type Overrides = {
    codecs: Record<string, string>;
    responses: Record<string, string>;
    inbound: string[];
};

const overrides = JSON.parse(readFileSync(join(import.meta.dir, "overrides.json"), "utf8")) as Overrides;

function protoSources(): string[] {
    /* Sorted: readdir order is filesystem-dependent, and it decides which codec wins
       an id collision — an unsorted scan makes the generated output machine-specific. */
    return readdirSync(PROTO_DIR)
        .filter((f) => f.endsWith(".ts") && !f.startsWith("index."))
        .sort()
        .map((f) => join(PROTO_DIR, f));
}

/** enum member name -> numeric id, for the four message-id enums. */
function collectEnumMembers(sources: string[]) {
    const members = new Map<string, number>();
    const owner = new Map<string, string>();

    for (const file of sources) {
        const text = readFileSync(file, "utf8");
        for (const enumName of MSG_ENUMS) {
            const start = text.indexOf(`export enum ${enumName} {`);
            if (start === -1) continue;
            const end = text.indexOf("\n}", start);
            const body = text.slice(start, end === -1 ? undefined : end);
            for (const line of body.split("\n").slice(1)) {
                const m = /^\s*(\w+)\s*=\s*(-?\d+),?\s*$/.exec(line);
                if (!m) continue;
                const [, name, raw] = m;
                members.set(name!, Number(raw));
                owner.set(name!, enumName);
            }
        }
    }
    return { members, owner };
}

/** Every exported ts-proto codec object (`export const X: MessageFns<…>`). */
function collectCodecs(sources: string[]): Set<string> {
    const codecs = new Set<string>();
    for (const file of sources) {
        const text = readFileSync(file, "utf8");
        for (const m of text.matchAll(/^export const (\w+): MessageFns\b/gm)) codecs.add(m[1]!);
    }
    return codecs;
}

/**
 * `k_EMsgGCSpectateFriendGame` -> `CMsgSpectateFriendGame`.
 * Valve drops or adds the `GC` / `DOTA` infixes inconsistently, so try the plausible
 * spellings in order of specificity and take the first one that actually exists.
 */
function codecCandidates(memberName: string): string[] {
    const rest = memberName.startsWith("k_EMsg") ? memberName.slice("k_EMsg".length) : memberName;
    const stripped = rest.startsWith("GC") ? rest.slice(2) : null;
    const names = [`CMsg${rest}`, `CMsgDOTA${rest}`];
    if (stripped) names.push(`CMsg${stripped}`, `CMsgDOTA${stripped}`);
    return names;
}

/** Request member name -> response member name, when the enum contains one. */
function responseCandidates(memberName: string): string[] {
    const names = [`${memberName}Response`];
    const idx = memberName.indexOf("ClientToGC");
    if (idx !== -1) {
        const tail = memberName.slice(idx + "ClientToGC".length);
        names.push(`${memberName.slice(0, idx)}GCToClient${tail}Response`);
    }
    return names;
}

function isInbound(memberName: string): boolean {
    if (overrides.inbound.includes(memberName)) return true;
    return memberName.endsWith("Response") || memberName.includes("GCToClient");
}

function main() {
    const sources = protoSources();
    const { members, owner } = collectEnumMembers(sources);
    const codecs = collectCodecs(sources);

    const resolved = new Map<number, { member: string; codec: string; inbound: boolean }>();
    const collisions: string[] = [];
    let unmatched = 0;

    for (const [member, id] of [...members].sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))) {
        const override = overrides.codecs[member];
        const codec = override ?? codecCandidates(member).find((c) => codecs.has(c));
        if (!codec) {
            unmatched++;
            continue;
        }
        if (override && !codecs.has(override)) {
            throw new Error(`overrides.json maps ${member} to ${override}, which no protobuf file exports`);
        }
        const existing = resolved.get(id);
        if (existing) {
            collisions.push(`${id}: keeping ${existing.member}, dropping ${member}`);
            continue;
        }
        resolved.set(id, { member, codec, inbound: isInbound(member) });
    }

    const jobs = new Map<number, number>();
    for (const [id, { member }] of resolved) {
        const responseMember = overrides.responses[member] ?? responseCandidates(member).find((n) => members.has(n));
        if (!responseMember) continue;
        const responseId = members.get(responseMember)!;
        if (responseId === id || !resolved.has(responseId)) continue;
        jobs.set(id, responseId);
    }

    const sorted = [...resolved.entries()].sort((a, b) => a[0] - b[0]);
    const outbound = sorted.filter(([, v]) => !v.inbound);
    const inbound = sorted.filter(([, v]) => v.inbound);

    const entry = ([id, v]: (typeof sorted)[number]) =>
        `    /** ${v.member} */\n    ${id}: p.${v.codec} as MessageFns<p.${v.codec}>,`;

    const out = `/* GENERATED by scripts/gen-messages.ts — do not edit by hand.
   Maps Dota 2 Game Coordinator message ids to their ts-proto codecs. */

import type { MessageFns } from "./types";
import * as p from "../protobufs/index";

/** Messages a client sends to the GC. */
export const clientMessages = {
${outbound.map(entry).join("\n")}
} as const;

/** Messages the GC sends to a client. */
export const gcMessages = {
${inbound.map(entry).join("\n")}
} as const;

/** Every message id with a codec, in both directions. */
export const allMessages = { ...clientMessages, ...gcMessages } as const;

/** Request message id -> the id the GC answers it with. */
export const jobResponses = {
${[...jobs.entries()].sort((a, b) => a[0] - b[0]).map(([req, res]) => `    ${req}: ${res},`).join("\n")}
} as const;

/** Numeric id -> the enum member name it came from, for logs and error messages. */
export const messageNames: Readonly<Record<number, string>> = {
${sorted.map(([id, v]) => `    ${id}: "${v.member}",`).join("\n")}
};

export type ClientMessageId = keyof typeof clientMessages;
export type GCMessageId = keyof typeof gcMessages;
export type MessageId = keyof typeof allMessages;
export type JobMessageId = keyof typeof jobResponses;

/** Decoded payload type for a message id. */
export type MessagePayload<T extends MessageId> = ReturnType<(typeof allMessages)[T]["decode"]>;

/** Decoded reply type for a request id that has a known response. */
export type JobResponse<T extends MessageId> = T extends JobMessageId
    ? (typeof jobResponses)[T] extends MessageId ? MessagePayload<(typeof jobResponses)[T]> : unknown
    : unknown;
`;

    writeFileSync(OUT_FILE, out);

    console.log(`wrote ${relative(ROOT, OUT_FILE)}`);
    console.log(`  enum members scanned : ${members.size}`);
    console.log(`  codecs exported      : ${codecs.size}`);
    console.log(`  mapped ids           : ${resolved.size} (client ${outbound.length}, gc ${inbound.length})`);
    console.log(`  job request/response : ${jobs.size}`);
    console.log(`  members without codec: ${unmatched}`);
    if (collisions.length) console.log(`  id collisions        : ${collisions.length}\n    ${collisions.join("\n    ")}`);

    const byEnum = new Map<string, number>();
    for (const [, { member }] of resolved) {
        const e = owner.get(member)!;
        byEnum.set(e, (byEnum.get(e) ?? 0) + 1);
    }
    for (const [e, n] of byEnum) console.log(`  from ${e}: ${n}`);
}

main();
