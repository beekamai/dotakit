#!/usr/bin/env bun
/**
 * dotakit CLI — codegen and environment checks.
 *
 * Runs under Bun (the codegen scripts use Bun's shell). Nothing here is needed to *use*
 * the library; it exists for regenerating protobufs when Valve ships new GC messages.
 *
 *   dotakit doctor              what this runtime can and cannot do
 *   dotakit protos sync         re-pull Valve's .proto files and regenerate src/protobufs
 *   dotakit protos add a.proto  same, plus one extra .proto root
 *   dotakit messages            regenerate src/gc/messages.ts from src/protobufs
 */

import { join } from "node:path";

import { inspect, installedWebsocket13Version } from "../src/steam/transport";

const ROOT = join(import.meta.dir, "..");

const USAGE = `dotakit — Steam + Dota 2 Game Coordinator multitool

Usage:
  dotakit doctor                 check runtime, transport and codegen prerequisites
  dotakit protos sync            regenerate src/protobufs from Valve's protobufs
  dotakit protos add <f.proto>   regenerate, including one more .proto root
  dotakit messages               regenerate src/gc/messages.ts from src/protobufs
`;

async function run(script: string, args: string[] = []): Promise<number> {
    const proc = Bun.spawn(["bun", "run", join(ROOT, "scripts", script), ...args], {
        cwd: ROOT,
        stdio: ["inherit", "inherit", "inherit"],
    });
    return await proc.exited;
}

async function hasProtoc(): Promise<boolean> {
    try {
        const proc = Bun.spawn(["protoc", "--version"], { stdio: ["ignore", "ignore", "ignore"] });
        return (await proc.exited) === 0;
    } catch {
        return false;
    }
}

const PROTOC_HINT =
    "protoc is not on PATH. Install it from https://github.com/protocolbuffers/protobuf/releases " +
    "(or `winget install protobuf` / `brew install protobuf` / `apt install protobuf-compiler`), then retry.";

async function doctor(): Promise<number> {
    const report = inspect();
    const protoc = await hasProtoc();

    console.log(`runtime      : ${report.runtime}${report.bunVersion ? ` ${report.bunVersion}` : ""}`);
    console.log(`websocket13  : ${installedWebsocket13Version() ?? "not installed"}${report.websocket13IsBunFork ? " (Bun fork)" : ""}`);
    console.log(`steam login  : ${report.ok ? "ok" : "BLOCKED"}`);
    for (const note of report.notes) console.log(`  - ${note}`);
    console.log(`protoc       : ${protoc ? "found" : "not found — only needed for `dotakit protos`"}`);
    if (!protoc) console.log(`  - ${PROTOC_HINT}`);

    return report.ok ? 0 : 1;
}

async function protos(args: string[]): Promise<number> {
    const [sub, ...rest] = args;
    if (sub !== "sync" && sub !== "add") {
        console.error(USAGE);
        return 2;
    }
    if (sub === "add" && rest.length === 0) {
        console.error("dotakit protos add needs a .proto file name, e.g. dota_gcmessages_client_chat.proto");
        return 2;
    }
    if (!(await hasProtoc())) {
        console.error(PROTOC_HINT);
        return 1;
    }

    const code = await run("gen-protos.ts", sub === "add" ? rest : []);
    if (code !== 0) return code;
    if (sub === "add") {
        console.log(
            `\nnote: ${rest.join(", ")} was generated for this run only. ` +
                "Add it to ENTRY_PROTOS in scripts/gen-protos.ts to keep it.",
        );
    }
    return await run("gen-messages.ts");
}

async function main(): Promise<number> {
    const [command, ...args] = process.argv.slice(2);
    switch (command) {
        case "doctor":
            return await doctor();
        case "protos":
            return await protos(args);
        case "messages":
            return await run("gen-messages.ts");
        case undefined:
        case "help":
        case "--help":
        case "-h":
            console.log(USAGE);
            return 0;
        default:
            console.error(`unknown command: ${command}\n\n${USAGE}`);
            return 2;
    }
}

process.exit(await main());
