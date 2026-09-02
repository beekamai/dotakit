/* `dotakit init`: turn an empty (or existing) project into one that can run a Dota bot —
   the websocket13 override for the detected package manager, steam-user, a runnable
   example and a .env template. Every step is idempotent and reports what it touched. */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

import { WEBSOCKET13_PACKAGE, WEBSOCKET13_SPEC } from "../steam/transport";

export type PackageManager = "bun" | "npm" | "pnpm" | "yarn";

export const PACKAGE_MANAGERS: PackageManager[] = ["bun", "npm", "pnpm", "yarn"];

/** Version range of `steam-user` written into the consumer's dependencies. */
export const STEAM_USER_RANGE = "^5.3.0";

const LOCKFILES: Array<[string, PackageManager]> = [
    ["bun.lock", "bun"],
    ["bun.lockb", "bun"],
    ["pnpm-lock.yaml", "pnpm"],
    ["yarn.lock", "yarn"],
    ["package-lock.json", "npm"],
];

/** Where each package manager reads dependency overrides from. */
const OVERRIDE_FIELD: Record<PackageManager, string[]> = {
    bun: ["overrides"],
    npm: ["overrides"],
    pnpm: ["pnpm", "overrides"],
    yarn: ["resolutions"],
};

export interface InitOptions {
    cwd: string;
    /** Package manager to target. Detected from the lockfile when omitted. */
    pm?: PackageManager;
}

export interface InitResult {
    pm: PackageManager;
    /** Dotted path of the override field, e.g. `overrides` or `pnpm.overrides`. */
    overrideField: string;
    /** What was written. Empty means the project was already set up. */
    changes: string[];
}

/** Package manager for `cwd`, from its lockfile. Bun when there is no lockfile. */
export function detectPackageManager(cwd: string): PackageManager {
    for (const [file, pm] of LOCKFILES) {
        if (existsSync(join(cwd, file))) return pm;
    }
    return "bun";
}

export function overrideFieldFor(pm: PackageManager): string {
    return OVERRIDE_FIELD[pm].join(".");
}

export function installCommand(pm: PackageManager): string[] {
    return [pm, "install"];
}

/** Two spaces is the npm default; an existing indent wins so the diff stays small. */
function detectIndent(source: string): number {
    const match = source.match(/\n([ \t]+)"/);
    if (!match) return 2;
    return match[1]!.startsWith("\t") ? 4 : match[1]!.length;
}

function readPackageJson(file: string): { data: Record<string, any>; indent: number } | null {
    if (!existsSync(file)) return null;
    const source = readFileSync(file, "utf8");
    let data: unknown;
    try {
        data = JSON.parse(source);
    } catch (cause) {
        throw new Error(`dotakit init: ${file} is not valid JSON`, { cause });
    }
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        throw new Error(`dotakit init: ${file} does not hold a JSON object`);
    }
    return { data: data as Record<string, any>, indent: detectIndent(source) };
}

/** Writes `path…key = value`, creating the intermediate objects. `false` when unchanged. */
function setNested(root: Record<string, any>, path: string[], key: string, value: string): boolean {
    let node = root;
    for (const segment of path) {
        if (!node[segment] || typeof node[segment] !== "object") node[segment] = {};
        node = node[segment];
    }
    if (node[key] === value) return false;
    node[key] = value;
    return true;
}

function hasDependency(pkg: Record<string, any>, name: string): boolean {
    for (const field of ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"]) {
        const deps = pkg[field];
        if (deps && typeof deps === "object" && name in deps) return true;
    }
    return false;
}

const BOT_EXAMPLE = [
    "/* Copy .env.example to .env, fill it in, then: bun run bot.example.ts",
    "   On Node: node --env-file=.env bot.example.ts */",
    "",
    'import { createInterface } from "node:readline/promises";',
    "",
    'import { Dota } from "dotakit";',
    "",
    "const bot = await Dota.login({",
    "    accountName: process.env.STEAM_ACCOUNT!,",
    "    password: process.env.STEAM_PASSWORD,",
    '    sessionFile: "./data/session.json", // written on the first login, reused after',
    "    onGuard: async () => {",
    "        const rl = createInterface({ input: process.stdin, output: process.stdout });",
    '        const code = await rl.question("Steam Guard code: ");',
    "        rl.close();",
    "        return code.trim();",
    "    },",
    "});",
    "",
    "const guild = await bot.guild.find();",
    'console.log("guild:", guild ? guild.guildTag + " #" + guild.guildId : "none");',
    "for (const member of await bot.guild.members()) {",
    "    console.log(member.accountId, member.roleName, member.lastActiveAt);",
    "}",
    'console.log("my medal:", await bot.profile.rank(bot.steam.accountId!));',
    "",
    "bot.logout();",
    "",
].join("\n");

const ENV_EXAMPLE = [
    "# Copy to .env and fill in. Bun loads .env automatically; Node needs --env-file=.env.",
    "STEAM_ACCOUNT=your_steam_login",
    "STEAM_PASSWORD=your_steam_password",
    "",
].join("\n");

const GITIGNORE = ["node_modules", ".env", "data", ""].join("\n");

/**
 * Writes the override, the dependency, the example and the env template into `cwd`.
 * Running it a second time changes nothing.
 */
export function applyInit(options: InitOptions): InitResult {
    const { cwd } = options;
    const pm = options.pm ?? detectPackageManager(cwd);
    const field = OVERRIDE_FIELD[pm]!;
    const changes: string[] = [];

    mkdirSync(cwd, { recursive: true });

    const packageJsonPath = join(cwd, "package.json");
    const existing = readPackageJson(packageJsonPath);
    const pkg: Record<string, any> = existing?.data ?? {
        name: basename(cwd) || "dota-bot",
        version: "0.0.0",
        private: true,
        type: "module",
    };
    const indent = existing?.indent ?? 2;
    let packageJsonDirty = existing === null;
    if (!existing) changes.push("package.json: created");

    /* steam-user reaches Steam over websocket13, and on Bun the stock one never finishes
       the handshake — the fork has to win dependency resolution for every install. */
    if (setNested(pkg, field, "websocket13", WEBSOCKET13_SPEC)) {
        changes.push(`package.json: ${overrideFieldFor(pm)}.websocket13 = ${WEBSOCKET13_SPEC}`);
        packageJsonDirty = true;
    }

    if (!hasDependency(pkg, "steam-user")) {
        pkg.dependencies = { ...(pkg.dependencies ?? {}), "steam-user": STEAM_USER_RANGE };
        changes.push(`package.json: dependencies.steam-user = ${STEAM_USER_RANGE}`);
        packageJsonDirty = true;
    }

    if (packageJsonDirty) writeFileSync(packageJsonPath, `${JSON.stringify(pkg, null, indent)}\n`, "utf8");

    const create = (name: string, contents: string) => {
        const file = join(cwd, name);
        if (existsSync(file)) return;
        writeFileSync(file, contents, "utf8");
        changes.push(`${name}: created`);
    };

    create("bot.example.ts", BOT_EXAMPLE);
    create(".env.example", ENV_EXAMPLE);

    /* A committed .env is a leaked Steam account: the ignore rule exists before the file does. */
    const gitignorePath = join(cwd, ".gitignore");
    if (!existsSync(gitignorePath)) {
        create(".gitignore", GITIGNORE);
    } else {
        const source = readFileSync(gitignorePath, "utf8");
        const ignoresEnv = source.split(/\r?\n/).some((line) => line.trim() === ".env");
        if (!ignoresEnv) {
            writeFileSync(gitignorePath, `${source.endsWith("\n") || source === "" ? source : `${source}\n`}.env\n`, "utf8");
            changes.push(".gitignore: added .env");
        }
    }

    return { pm, overrideField: overrideFieldFor(pm), changes };
}

export { WEBSOCKET13_PACKAGE, WEBSOCKET13_SPEC };
