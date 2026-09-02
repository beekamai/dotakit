/* The dotakit CLI. Runs under Bun and Node (npx), which is why everything here uses
   node: APIs rather than Bun globals. Codegen (`protos`, `messages`) still needs Bun,
   because the generator scripts do.
 *
 *   dotakit init                set this project up: override, steam-user, example, .env
 *   dotakit doctor              what this runtime can and cannot do
 *   dotakit protos sync         re-pull Valve's .proto files and regenerate src/protobufs
 *   dotakit messages            regenerate src/gc/messages.ts from src/protobufs
 */

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { inspect, installedWebsocket13Version, WEBSOCKET13_PACKAGE } from "../steam/transport";
import { applyInit, detectPackageManager, installCommand, PACKAGE_MANAGERS, type PackageManager } from "./init";

const USAGE = `dotakit — Steam + Dota 2 Game Coordinator multitool

Usage:
  dotakit init [--no-install] [--pm bun|npm|pnpm|yarn]
                                 set this project up to run a bot
  dotakit doctor                 check runtime, transport and codegen prerequisites
  dotakit protos sync            regenerate src/protobufs from Valve's protobufs
  dotakit protos add <f.proto>   regenerate, including one more .proto root
  dotakit messages               regenerate src/gc/messages.ts from src/protobufs
`;

/** The installed dotakit package root — the bundle can sit one or two levels deep. */
function packageRoot(): string {
    let dir = dirname(fileURLToPath(import.meta.url));
    for (let i = 0; i < 5; i++) {
        if (existsSync(join(dir, "package.json")) && existsSync(join(dir, "scripts"))) return dir;
        const parent = dirname(dir);
        if (parent === dir) break;
        dir = parent;
    }
    return dir;
}

function ownVersion(): string | null {
    try {
        return JSON.parse(readFileSync(join(packageRoot(), "package.json"), "utf8")).version ?? null;
    } catch {
        return null;
    }
}

function runScript(script: string, args: string[] = []): number {
    const root = packageRoot();
    const result = spawnSync("bun", ["run", join(root, "scripts", script), ...args], {
        cwd: root,
        stdio: "inherit",
        shell: process.platform === "win32",
    });
    if (result.error) {
        console.error("dotakit: codegen needs Bun on PATH (https://bun.sh).");
        return 1;
    }
    return result.status ?? 1;
}

function hasProtoc(): boolean {
    const result = spawnSync("protoc", ["--version"], { stdio: "ignore", shell: process.platform === "win32" });
    return !result.error && result.status === 0;
}

const PROTOC_HINT =
    "protoc is not on PATH. Install it from https://github.com/protocolbuffers/protobuf/releases " +
    "(or `winget install protobuf` / `brew install protobuf` / `apt install protobuf-compiler`), then retry.";

function doctor(cwd = process.cwd()): number {
    const websocket13Version = installedWebsocket13Version(cwd);
    const report = inspect({ websocket13Version });
    const protoc = hasProtoc();

    console.log(`runtime      : ${report.runtime}${report.bunVersion ? ` ${report.bunVersion}` : ""}`);
    console.log(
        `websocket13  : ${websocket13Version ?? "not installed"}${report.websocket13IsBunFork ? ` (${WEBSOCKET13_PACKAGE})` : ""}`,
    );
    console.log(`steam login  : ${report.ok ? "ok" : "BLOCKED"}`);
    for (const note of report.notes) console.log(`  - ${note}`);
    console.log(`protoc       : ${protoc ? "found" : "not found — only needed for `dotakit protos`"}`);
    if (!protoc) console.log(`  - ${PROTOC_HINT}`);

    return report.ok ? 0 : 1;
}

function parseInitArgs(args: string[]): { install: boolean; pm?: PackageManager } | string {
    let install = true;
    let pm: PackageManager | undefined;

    for (let i = 0; i < args.length; i++) {
        const arg = args[i]!;
        if (arg === "--no-install") {
            install = false;
        } else if (arg === "--pm") {
            const value = args[++i];
            if (!value || !PACKAGE_MANAGERS.includes(value as PackageManager)) {
                return `--pm expects one of ${PACKAGE_MANAGERS.join(", ")}`;
            }
            pm = value as PackageManager;
        } else if (arg.startsWith("--pm=")) {
            const value = arg.slice("--pm=".length);
            if (!PACKAGE_MANAGERS.includes(value as PackageManager)) {
                return `--pm expects one of ${PACKAGE_MANAGERS.join(", ")}`;
            }
            pm = value as PackageManager;
        } else {
            return `unknown option: ${arg}`;
        }
    }
    return { install, pm };
}

function init(args: string[], cwd = process.cwd()): number {
    const parsed = parseInitArgs(args);
    if (typeof parsed === "string") {
        console.error(`dotakit init: ${parsed}\n\n${USAGE}`);
        return 2;
    }

    const pm = parsed.pm ?? detectPackageManager(cwd);
    const result = applyInit({ cwd, pm });

    console.log(`package manager: ${result.pm}${parsed.pm ? " (--pm)" : " (detected)"}`);
    if (result.changes.length === 0) {
        console.log("already set up — nothing to change");
    } else {
        for (const change of result.changes) console.log(`  + ${change}`);
    }

    if (parsed.install) {
        const [command, ...rest] = installCommand(result.pm);
        console.log(`\n$ ${command} ${rest.join(" ")}`);
        const run = spawnSync(command!, rest, {
            cwd,
            stdio: "inherit",
            shell: process.platform === "win32",
        });
        if (run.error || (run.status ?? 1) !== 0) {
            console.error(`\ndotakit init: \`${command} ${rest.join(" ")}\` failed — run it yourself, then \`dotakit doctor\`.`);
            return 1;
        }
    } else {
        const [command, ...rest] = installCommand(result.pm);
        console.log(`\nskipped install (--no-install). Run \`${command} ${rest.join(" ")}\` before starting the bot.`);
    }

    console.log("");
    const code = parsed.install ? doctor(cwd) : 0;
    /* Only Bun runs a .ts file with no extra ceremony; Node needs type stripping. */
    const runExample =
        result.pm === "bun"
            ? "bun run bot.example.ts"
            : "node --env-file=.env bot.example.ts   (Node 22.6+; older: npx tsx bot.example.ts)";
    console.log(`\nnext: copy .env.example to .env, fill it in, then \`${runExample}\`.`);
    return code;
}

function protos(args: string[]): number {
    const [sub, ...rest] = args;
    if (sub !== "sync" && sub !== "add") {
        console.error(USAGE);
        return 2;
    }
    if (sub === "add" && rest.length === 0) {
        console.error("dotakit protos add needs a .proto file name, e.g. dota_gcmessages_client_chat.proto");
        return 2;
    }
    if (!hasProtoc()) {
        console.error(PROTOC_HINT);
        return 1;
    }

    const code = runScript("gen-protos.ts", sub === "add" ? rest : []);
    if (code !== 0) return code;
    if (sub === "add") {
        console.log(
            `\nnote: ${rest.join(", ")} was generated for this run only. ` +
                "Add it to ENTRY_PROTOS in scripts/gen-protos.ts to keep it.",
        );
    }
    return runScript("gen-messages.ts");
}

/** Runs one CLI invocation and returns its exit code. `argv` excludes node and the script. */
export function runCli(argv: string[], cwd: string = process.cwd()): number {
    const [command, ...args] = argv;
    switch (command) {
        case "init":
            return init(args, resolve(cwd));
        case "doctor":
            return doctor(resolve(cwd));
        case "protos":
            return protos(args);
        case "messages":
            return runScript("gen-messages.ts");
        case "--version":
        case "-v":
            console.log(ownVersion() ?? "unknown");
            return 0;
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

export { applyInit, detectPackageManager, installCommand, overrideFieldFor, PACKAGE_MANAGERS } from "./init";
export type { InitOptions, InitResult, PackageManager } from "./init";
