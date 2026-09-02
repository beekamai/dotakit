/**
 * Regenerates src/protobufs from Valve's .proto files.
 *
 * Optional: the generated output is committed, so nothing here runs on install. Use it
 * when Valve ships new GC messages. Needs `protoc` and `ts-proto` on the machine —
 * neither is a dependency of this package.
 *
 *   bun add -d ts-proto
 *   bun run scripts/gen-protos.ts
 *
 * Then re-run scripts/gen-messages.ts and commit both.
 */

import { existsSync } from "node:fs";
import { mkdir, readdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { $ } from "bun";

const ROOT = join(import.meta.dir, "..");
const WORK = join(ROOT, ".protos");
const REPO = join(WORK, "SteamDatabase-Protobufs");
const PROTO_SRC = join(REPO, "dota2");
const OUT = join(ROOT, "src", "protobufs");

/* The GC roots. protoc pulls in everything they import. */
const ENTRY_PROTOS = [
    "gcsdk_gcmessages.proto",
    "gcsystemmsgs.proto",
    "base_gcmessages.proto",
    "econ_gcmessages.proto",
    "dota_gcmessages_msgid.proto",
    "dota_gcmessages_client.proto",
    "dota_gcmessages_client_watch.proto",
    "dota_gcmessages_client_guild.proto",
    "dota_gcmessages_client_guild_events.proto",
    "dota_gcmessages_common.proto",
    "dota_gcmessages_webapi.proto",
    "dota_match_metadata.proto",
];

/* Matches the committed output: 64-bit ints as strings, a barrel index, no ts_proto
   service or grpc scaffolding. Changing these changes the public message types. */
const TS_PROTO_OPTS = [
    "esModuleInterop=true",
    "forceLong=string",
    "outputIndex=true",
    "outputServices=false",
    "useOptionals=none",
    "unrecognizedEnum=false",
].join(",");

async function requireTool(name: string, hint: string) {
    const found = await $`${name} --version`.quiet().nothrow();
    if (found.exitCode !== 0) throw new Error(`${name} not found on PATH. ${hint}`);
}

async function main() {
    await requireTool("protoc", "Install it from https://github.com/protocolbuffers/protobuf/releases");

    const plugin = join(ROOT, "node_modules", ".bin", process.platform === "win32" ? "protoc-gen-ts_proto.cmd" : "protoc-gen-ts_proto");
    if (!existsSync(plugin)) throw new Error("ts-proto is not installed. Run: bun add -d ts-proto");

    await mkdir(WORK, { recursive: true });
    if (existsSync(REPO)) await $`git -C ${REPO} pull --ff-only`;
    else await $`git clone --depth 1 https://github.com/SteamDatabase/Protobufs ${REPO}`;

    await rm(OUT, { recursive: true, force: true });
    await mkdir(OUT, { recursive: true });

    await $`protoc --plugin=protoc-gen-ts_proto=${plugin} --ts_proto_out=${OUT} --ts_proto_opt=${TS_PROTO_OPTS} -I ${PROTO_SRC} -I ${REPO} ${ENTRY_PROTOS}`.cwd(PROTO_SRC);

    const written = (await readdir(OUT)).filter((f) => f.endsWith(".ts"));
    console.log(`generated ${written.length} files into src/protobufs`);
    console.log("next: bun run scripts/gen-messages.ts");
}

main();
