import {
  WEBSOCKET13_PACKAGE,
  WEBSOCKET13_SPEC,
  inspect,
  installedWebsocket13Version
} from "../chunk-ABFH7GUG.js";
import "../chunk-PZ5AY32C.js";

// src/cli/index.ts
import { spawnSync } from "child_process";
import { existsSync as existsSync2, readFileSync as readFileSync2 } from "fs";
import { dirname, join as join2, resolve } from "path";
import { fileURLToPath } from "url";

// src/cli/init.ts
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { basename, join } from "path";
var PACKAGE_MANAGERS = ["bun", "npm", "pnpm", "yarn"];
var STEAM_USER_RANGE = "^5.3.0";
var LOCKFILES = [
  ["bun.lock", "bun"],
  ["bun.lockb", "bun"],
  ["pnpm-lock.yaml", "pnpm"],
  ["yarn.lock", "yarn"],
  ["package-lock.json", "npm"]
];
var OVERRIDE_FIELD = {
  bun: ["overrides"],
  npm: ["overrides"],
  pnpm: ["pnpm", "overrides"],
  yarn: ["resolutions"]
};
function detectPackageManager(cwd) {
  for (const [file, pm] of LOCKFILES) {
    if (existsSync(join(cwd, file))) return pm;
  }
  return "bun";
}
function overrideFieldFor(pm) {
  return OVERRIDE_FIELD[pm].join(".");
}
function installCommand(pm) {
  return [pm, "install"];
}
function detectIndent(source) {
  const match = source.match(/\n([ \t]+)"/);
  if (!match) return 2;
  return match[1].startsWith("	") ? 4 : match[1].length;
}
function readPackageJson(file) {
  if (!existsSync(file)) return null;
  const source = readFileSync(file, "utf8");
  let data;
  try {
    data = JSON.parse(source);
  } catch (cause) {
    throw new Error(`dotakit init: ${file} is not valid JSON`, { cause });
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new Error(`dotakit init: ${file} does not hold a JSON object`);
  }
  return { data, indent: detectIndent(source) };
}
function setNested(root, path, key, value) {
  let node = root;
  for (const segment of path) {
    if (!node[segment] || typeof node[segment] !== "object") node[segment] = {};
    node = node[segment];
  }
  if (node[key] === value) return false;
  node[key] = value;
  return true;
}
function hasDependency(pkg, name) {
  for (const field of ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"]) {
    const deps = pkg[field];
    if (deps && typeof deps === "object" && name in deps) return true;
  }
  return false;
}
var BOT_EXAMPLE = [
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
  ""
].join("\n");
var ENV_EXAMPLE = [
  "# Copy to .env and fill in. Bun loads .env automatically; Node needs --env-file=.env.",
  "STEAM_ACCOUNT=your_steam_login",
  "STEAM_PASSWORD=your_steam_password",
  ""
].join("\n");
var GITIGNORE = ["node_modules", ".env", "data", ""].join("\n");
function applyInit(options) {
  const { cwd } = options;
  const pm = options.pm ?? detectPackageManager(cwd);
  const field = OVERRIDE_FIELD[pm];
  const changes = [];
  mkdirSync(cwd, { recursive: true });
  const packageJsonPath = join(cwd, "package.json");
  const existing = readPackageJson(packageJsonPath);
  const pkg = existing?.data ?? {
    name: basename(cwd) || "dota-bot",
    version: "0.0.0",
    private: true,
    type: "module"
  };
  const indent = existing?.indent ?? 2;
  let packageJsonDirty = existing === null;
  if (!existing) changes.push("package.json: created");
  if (setNested(pkg, field, "websocket13", WEBSOCKET13_SPEC)) {
    changes.push(`package.json: ${overrideFieldFor(pm)}.websocket13 = ${WEBSOCKET13_SPEC}`);
    packageJsonDirty = true;
  }
  if (!hasDependency(pkg, "steam-user")) {
    pkg.dependencies = { ...pkg.dependencies ?? {}, "steam-user": STEAM_USER_RANGE };
    changes.push(`package.json: dependencies.steam-user = ${STEAM_USER_RANGE}`);
    packageJsonDirty = true;
  }
  if (packageJsonDirty) writeFileSync(packageJsonPath, `${JSON.stringify(pkg, null, indent)}
`, "utf8");
  const create = (name, contents) => {
    const file = join(cwd, name);
    if (existsSync(file)) return;
    writeFileSync(file, contents, "utf8");
    changes.push(`${name}: created`);
  };
  create("bot.example.ts", BOT_EXAMPLE);
  create(".env.example", ENV_EXAMPLE);
  const gitignorePath = join(cwd, ".gitignore");
  if (!existsSync(gitignorePath)) {
    create(".gitignore", GITIGNORE);
  } else {
    const source = readFileSync(gitignorePath, "utf8");
    const ignoresEnv = source.split(/\r?\n/).some((line) => line.trim() === ".env");
    if (!ignoresEnv) {
      writeFileSync(gitignorePath, `${source.endsWith("\n") || source === "" ? source : `${source}
`}.env
`, "utf8");
      changes.push(".gitignore: added .env");
    }
  }
  return { pm, overrideField: overrideFieldFor(pm), changes };
}

// src/cli/index.ts
var USAGE = `dotakit \u2014 Steam + Dota 2 Game Coordinator multitool

Usage:
  dotakit init [--no-install] [--pm bun|npm|pnpm|yarn]
                                 set this project up to run a bot
  dotakit doctor                 check runtime, transport and codegen prerequisites
  dotakit protos sync            regenerate src/protobufs from Valve's protobufs
  dotakit protos add <f.proto>   regenerate, including one more .proto root
  dotakit messages               regenerate src/gc/messages.ts from src/protobufs
`;
function packageRoot() {
  let dir = dirname(fileURLToPath(import.meta.url));
  for (let i = 0; i < 5; i++) {
    if (existsSync2(join2(dir, "package.json")) && existsSync2(join2(dir, "scripts"))) return dir;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return dir;
}
function ownVersion() {
  try {
    return JSON.parse(readFileSync2(join2(packageRoot(), "package.json"), "utf8")).version ?? null;
  } catch {
    return null;
  }
}
function runScript(script, args = []) {
  const root = packageRoot();
  const result = spawnSync("bun", ["run", join2(root, "scripts", script), ...args], {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32"
  });
  if (result.error) {
    console.error("dotakit: codegen needs Bun on PATH (https://bun.sh).");
    return 1;
  }
  return result.status ?? 1;
}
function hasProtoc() {
  const result = spawnSync("protoc", ["--version"], { stdio: "ignore", shell: process.platform === "win32" });
  return !result.error && result.status === 0;
}
var PROTOC_HINT = "protoc is not on PATH. Install it from https://github.com/protocolbuffers/protobuf/releases (or `winget install protobuf` / `brew install protobuf` / `apt install protobuf-compiler`), then retry.";
function doctor(cwd = process.cwd()) {
  const websocket13Version = installedWebsocket13Version(cwd);
  const report = inspect({ websocket13Version });
  const protoc = hasProtoc();
  console.log(`runtime      : ${report.runtime}${report.bunVersion ? ` ${report.bunVersion}` : ""}`);
  console.log(
    `websocket13  : ${websocket13Version ?? "not installed"}${report.websocket13IsBunFork ? ` (${WEBSOCKET13_PACKAGE})` : ""}`
  );
  console.log(`steam login  : ${report.ok ? "ok" : "BLOCKED"}`);
  for (const note of report.notes) console.log(`  - ${note}`);
  console.log(`protoc       : ${protoc ? "found" : "not found \u2014 only needed for `dotakit protos`"}`);
  if (!protoc) console.log(`  - ${PROTOC_HINT}`);
  return report.ok ? 0 : 1;
}
function parseInitArgs(args) {
  let install = true;
  let pm;
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--no-install") {
      install = false;
    } else if (arg === "--pm") {
      const value = args[++i];
      if (!value || !PACKAGE_MANAGERS.includes(value)) {
        return `--pm expects one of ${PACKAGE_MANAGERS.join(", ")}`;
      }
      pm = value;
    } else if (arg.startsWith("--pm=")) {
      const value = arg.slice("--pm=".length);
      if (!PACKAGE_MANAGERS.includes(value)) {
        return `--pm expects one of ${PACKAGE_MANAGERS.join(", ")}`;
      }
      pm = value;
    } else {
      return `unknown option: ${arg}`;
    }
  }
  return { install, pm };
}
function init(args, cwd = process.cwd()) {
  const parsed = parseInitArgs(args);
  if (typeof parsed === "string") {
    console.error(`dotakit init: ${parsed}

${USAGE}`);
    return 2;
  }
  const pm = parsed.pm ?? detectPackageManager(cwd);
  const result = applyInit({ cwd, pm });
  console.log(`package manager: ${result.pm}${parsed.pm ? " (--pm)" : " (detected)"}`);
  if (result.changes.length === 0) {
    console.log("already set up \u2014 nothing to change");
  } else {
    for (const change of result.changes) console.log(`  + ${change}`);
  }
  if (parsed.install) {
    const [command, ...rest] = installCommand(result.pm);
    console.log(`
$ ${command} ${rest.join(" ")}`);
    const run = spawnSync(command, rest, {
      cwd,
      stdio: "inherit",
      shell: process.platform === "win32"
    });
    if (run.error || (run.status ?? 1) !== 0) {
      console.error(`
dotakit init: \`${command} ${rest.join(" ")}\` failed \u2014 run it yourself, then \`dotakit doctor\`.`);
      return 1;
    }
  } else {
    const [command, ...rest] = installCommand(result.pm);
    console.log(`
skipped install (--no-install). Run \`${command} ${rest.join(" ")}\` before starting the bot.`);
  }
  console.log("");
  const code = parsed.install ? doctor(cwd) : 0;
  const runExample = result.pm === "bun" ? "bun run bot.example.ts" : "node --env-file=.env bot.example.ts   (Node 22.6+; older: npx tsx bot.example.ts)";
  console.log(`
next: copy .env.example to .env, fill it in, then \`${runExample}\`.`);
  return code;
}
function protos(args) {
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
      `
note: ${rest.join(", ")} was generated for this run only. Add it to ENTRY_PROTOS in scripts/gen-protos.ts to keep it.`
    );
  }
  return runScript("gen-messages.ts");
}
function runCli(argv, cwd = process.cwd()) {
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
    case void 0:
    case "help":
    case "--help":
    case "-h":
      console.log(USAGE);
      return 0;
    default:
      console.error(`unknown command: ${command}

${USAGE}`);
      return 2;
  }
}
export {
  PACKAGE_MANAGERS,
  applyInit,
  detectPackageManager,
  installCommand,
  overrideFieldFor,
  runCli
};
//# sourceMappingURL=index.js.map