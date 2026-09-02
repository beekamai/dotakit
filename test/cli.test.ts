import { describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { runCli } from "../src/cli/index";
import { applyInit, detectPackageManager, installCommand, overrideFieldFor, type PackageManager } from "../src/cli/init";
import {
    BunTransportError,
    WEBSOCKET13_PACKAGE,
    WEBSOCKET13_SPEC,
    doctor,
    inspect,
    installedWebsocket13Version,
} from "../src/steam/transport";

const tempProject = (files: Record<string, string> = {}): string => {
    const dir = mkdtempSync(join(tmpdir(), "dotakit-init-"));
    for (const [name, contents] of Object.entries(files)) writeFileSync(join(dir, name), contents, "utf8");
    return dir;
};

const readPkg = (dir: string): any => JSON.parse(readFileSync(join(dir, "package.json"), "utf8"));

/** Runs the CLI with console output swallowed, so a test run stays readable. */
function silentCli(argv: string[], cwd: string): { code: number; out: string } {
    const lines: string[] = [];
    const log = console.log;
    const error = console.error;
    console.log = (...args: unknown[]) => void lines.push(args.join(" "));
    console.error = (...args: unknown[]) => void lines.push(args.join(" "));
    try {
        return { code: runCli(argv, cwd), out: lines.join("\n") };
    } finally {
        console.log = log;
        console.error = error;
    }
}

const FLAVOURS: Array<{ lockfile: string | null; pm: PackageManager; field: string }> = [
    { lockfile: "bun.lock", pm: "bun", field: "overrides" },
    { lockfile: "bun.lockb", pm: "bun", field: "overrides" },
    { lockfile: "package-lock.json", pm: "npm", field: "overrides" },
    { lockfile: "pnpm-lock.yaml", pm: "pnpm", field: "pnpm.overrides" },
    { lockfile: "yarn.lock", pm: "yarn", field: "resolutions" },
    { lockfile: null, pm: "bun", field: "overrides" },
];

describe("dotakit init", () => {
    for (const { lockfile, pm, field } of FLAVOURS) {
        test(`detects ${pm} from ${lockfile ?? "no lockfile"} and writes ${field}`, () => {
            const dir = tempProject({
                "package.json": JSON.stringify({ name: "bot", type: "module" }, null, 2),
                ...(lockfile ? { [lockfile]: lockfile === "package-lock.json" ? "{}" : "" } : {}),
            });

            expect(detectPackageManager(dir)).toBe(pm);

            const result = applyInit({ cwd: dir });
            expect(result.pm).toBe(pm);
            expect(result.overrideField).toBe(field);

            const pkg = readPkg(dir);
            const overrides = field === "pnpm.overrides" ? pkg.pnpm?.overrides : pkg[field];
            expect(overrides?.websocket13).toBe(WEBSOCKET13_SPEC);
            expect(overrides?.websocket13).toContain(WEBSOCKET13_PACKAGE);
            expect(pkg.dependencies["steam-user"]).toBe("^5.3.0");
        });
    }

    test("creates package.json, the example and the env template in an empty directory", () => {
        const dir = tempProject();
        const result = applyInit({ cwd: dir });

        expect(existsSync(join(dir, "bot.example.ts"))).toBe(true);
        expect(existsSync(join(dir, ".env.example"))).toBe(true);
        expect(readPkg(dir).dependencies["steam-user"]).toBe("^5.3.0");
        expect(result.changes.some((c) => c.startsWith("package.json: created"))).toBe(true);

        const example = readFileSync(join(dir, "bot.example.ts"), "utf8");
        expect(example).toContain("STEAM_ACCOUNT");
        expect(example).toContain("STEAM_PASSWORD");
        expect(example).toContain("onGuard");
        expect(example).toContain("node:readline/promises");
        expect(readFileSync(join(dir, ".env.example"), "utf8")).toContain("STEAM_ACCOUNT=");
    });

    test("is idempotent: the second run changes nothing", () => {
        const dir = tempProject({ "package.json": JSON.stringify({ name: "bot" }, null, 2) });

        const first = applyInit({ cwd: dir });
        expect(first.changes.length).toBeGreaterThan(0);
        const snapshot = readFileSync(join(dir, "package.json"), "utf8");

        const second = applyInit({ cwd: dir });
        expect(second.changes).toEqual([]);
        expect(readFileSync(join(dir, "package.json"), "utf8")).toBe(snapshot);
    });

    test("keeps existing dependencies, overrides and files", () => {
        const dir = tempProject({
            "package.json": JSON.stringify(
                { name: "bot", dependencies: { "steam-user": "^5.0.0" }, overrides: { left: "pad" } },
                null,
                2,
            ),
            "bot.example.ts": "// mine\n",
        });

        applyInit({ cwd: dir });

        const pkg = readPkg(dir);
        expect(pkg.dependencies["steam-user"]).toBe("^5.0.0");
        expect(pkg.overrides.left).toBe("pad");
        expect(pkg.overrides.websocket13).toBe(WEBSOCKET13_SPEC);
        expect(readFileSync(join(dir, "bot.example.ts"), "utf8")).toBe("// mine\n");
    });

    test("adds .env to an existing .gitignore exactly once", () => {
        const dir = tempProject({ ".gitignore": "node_modules\n" });

        applyInit({ cwd: dir });
        applyInit({ cwd: dir });

        const ignore = readFileSync(join(dir, ".gitignore"), "utf8");
        expect(ignore.split(/\r?\n/).filter((line) => line.trim() === ".env")).toHaveLength(1);
    });

    test("refuses a package.json that is not valid JSON", () => {
        const dir = tempProject({ "package.json": "{ not json" });
        expect(() => applyInit({ cwd: dir })).toThrow(/not valid JSON/);
    });
});

describe("dotakit CLI", () => {
    test("init --no-install writes files, skips the install and says so", () => {
        const dir = tempProject({ "yarn.lock": "" });
        const { code, out } = silentCli(["init", "--no-install"], dir);

        expect(code).toBe(0);
        expect(out).toContain("yarn");
        expect(out).toContain("skipped install");
        expect(readPkg(dir).resolutions.websocket13).toBe(WEBSOCKET13_SPEC);
    });

    test("--pm overrides the detected package manager", () => {
        const dir = tempProject({ "bun.lock": "" });
        const { code } = silentCli(["init", "--no-install", "--pm", "pnpm"], dir);

        expect(code).toBe(0);
        expect(readPkg(dir).pnpm.overrides.websocket13).toBe(WEBSOCKET13_SPEC);
    });

    test("rejects an unknown package manager and an unknown flag", () => {
        const dir = tempProject();
        expect(silentCli(["init", "--pm", "cargo"], dir).code).toBe(2);
        expect(silentCli(["init", "--yolo"], dir).code).toBe(2);
        expect(existsSync(join(dir, "package.json"))).toBe(false);
    });

    test("help and unknown commands", () => {
        const dir = tempProject();
        expect(silentCli(["help"], dir).out).toContain("dotakit init");
        expect(silentCli(["nope"], dir).code).toBe(2);
    });

    test("install commands are the plain ones", () => {
        expect(installCommand("bun")).toEqual(["bun", "install"]);
        expect(installCommand("yarn")).toEqual(["yarn", "install"]);
        expect(overrideFieldFor("pnpm")).toBe("pnpm.overrides");
    });
});

describe("doctor guidance", () => {
    test("names the published fork and dotakit init, not a git URL", () => {
        try {
            doctor({ versions: { bun: "1.3.2" }, websocket13Version: "4.1.0" });
            expect.unreachable();
        } catch (error) {
            expect(error).toBeInstanceOf(BunTransportError);
            const message = (error as Error).message;
            expect(message).toContain(WEBSOCKET13_PACKAGE);
            expect(message).toContain(WEBSOCKET13_SPEC);
            expect(message).toContain("bunx dotakit init");
            expect(message).not.toContain("github:");
        }
    });

    test("the blocked note points at dotakit init too", () => {
        const report = inspect({ versions: { bun: "1.3.2" }, websocket13Version: null });
        expect(report.ok).toBe(false);
        expect(report.notes.join("\n")).toContain("dotakit init");
        expect(report.notes.join("\n")).toContain(WEBSOCKET13_PACKAGE);
    });
});

describe("project websocket13 lookup", () => {
    test("reads the project's own node_modules, not dotakit's", () => {
        const dir = tempProject();
        const nested = join(dir, "app");
        mkdirSync(join(dir, "node_modules", "websocket13"), { recursive: true });
        mkdirSync(nested, { recursive: true });
        writeFileSync(
            join(dir, "node_modules", "websocket13", "package.json"),
            JSON.stringify({ name: WEBSOCKET13_PACKAGE, version: "4.1.0-bun.1" }),
            "utf8",
        );

        expect(installedWebsocket13Version(dir)).toBe("4.1.0-bun.1");
        /* hoisted layouts put node_modules above the package that needs it */
        expect(installedWebsocket13Version(nested)).toBe("4.1.0-bun.1");
    });

    test("null when the project has no websocket13 at all", () => {
        expect(installedWebsocket13Version(tempProject())).toBeNull();
    });
});
