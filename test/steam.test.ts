import { describe, expect, test } from "bun:test";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { GuardRequiredError, SteamLoginError, isCriticalEResult, login } from "../src/steam/index";
import { BunTransportError, WEBSOCKET13_OVERRIDE, connectionProtocol, doctor, inspect } from "../src/steam/transport";
import { FakeSteamUser } from "./helpers";

const bun = { bun: "1.3.2" };
const node = { node: "20.11.0" };

/** A refresh token whose `exp` is `secondsFromNow` away, in the shape steam-user issues. */
function fakeToken(secondsFromNow: number): string {
    const payload = Buffer.from(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + secondsFromNow })).toString(
        "base64url",
    );
    return `header.${payload}.signature`;
}

const tempFile = (name: string) => join(mkdtempSync(join(tmpdir(), "dotakit-")), name);

/** Lets an onGuard promise chain settle. */
const tick = () => new Promise<void>((resolve) => setTimeout(resolve, 0));

describe("transport doctor", () => {
    test("passes on Node with the stock websocket13", () => {
        const report = doctor({ versions: node, websocket13Version: "4.1.0" });
        expect(report.runtime).toBe("node");
        expect(report.ok).toBe(true);
    });

    test("throws on Bun with the stock websocket13", () => {
        expect(() => doctor({ versions: bun, websocket13Version: "4.1.0" })).toThrow(BunTransportError);

        try {
            doctor({ versions: bun, websocket13Version: "4.1.0" });
            expect.unreachable();
        } catch (error) {
            expect(error).toBeInstanceOf(BunTransportError);
            /* The message has to carry the fix, not just the diagnosis. */
            expect((error as Error).message).toContain(WEBSOCKET13_OVERRIDE);
            expect((error as Error).message).toContain('transport: "tcp"');
        }
    });

    test("throws on Bun when websocket13 is missing entirely", () => {
        expect(() => doctor({ versions: bun, websocket13Version: null })).toThrow(BunTransportError);
    });

    test("passes on Bun with the patched fork", () => {
        const report = doctor({ versions: bun, websocket13Version: "4.1.0-bun.1" });
        expect(report.runtime).toBe("bun");
        expect(report.websocket13IsBunFork).toBe(true);
        expect(report.ok).toBe(true);
    });

    test("passes on Bun with the stock fork when the TCP transport is chosen", () => {
        const report = doctor({ versions: bun, websocket13Version: "4.1.0", transport: "tcp" });
        expect(report.ok).toBe(true);
        expect(report.notes.join(" ")).toContain("tcp");
    });

    test("does not mistake an unrelated prerelease for the fork", () => {
        expect(inspect({ versions: bun, websocket13Version: "4.2.0-beta.1" }).ok).toBe(false);
    });

    test("maps transport: tcp onto steam-user's connection protocol", () => {
        const SteamUser = { EConnectionProtocol: { TCP: 1, WebSocket: 2 } };
        expect(connectionProtocol("tcp", SteamUser)).toBe(1);
        expect(connectionProtocol("auto", SteamUser)).toBeUndefined();
        expect(connectionProtocol("websocket", SteamUser)).toBeUndefined();
    });
});

describe("login option mapping", () => {
    test("logs on with the account name and password", async () => {
        const user = new FakeSteamUser();
        const promise = login({ accountName: "marci", password: "secret", steamUser: user });
        user.succeed();
        const session = await promise;

        expect(user.lastLogOn).toEqual({ accountName: "marci", password: "secret" });
        expect(session.accountName).toBe("marci");
        expect(session.steamID).toBe("76561198000000000");
    });

    test("prefers an explicit refresh token over the password", async () => {
        const user = new FakeSteamUser();
        const promise = login({ accountName: "marci", password: "secret", refreshToken: "tok", steamUser: user });
        user.succeed();
        await promise;

        expect(user.lastLogOn).toEqual({ refreshToken: "tok" });
    });

    test("reads a live token out of the session file", async () => {
        const file = tempFile("session.json");
        const token = fakeToken(3600);
        writeFileSync(file, JSON.stringify({ refreshToken: token }));

        const user = new FakeSteamUser();
        const promise = login({ accountName: "marci", password: "secret", sessionFile: file, steamUser: user });
        user.succeed();
        await promise;

        expect(user.lastLogOn).toEqual({ refreshToken: token });
    });

    test("falls back to the password when the saved token has expired", async () => {
        const file = tempFile("session.json");
        writeFileSync(file, JSON.stringify({ refreshToken: fakeToken(-3600) }));

        const user = new FakeSteamUser();
        const promise = login({ accountName: "marci", password: "secret", sessionFile: file, steamUser: user });
        user.succeed();
        await promise;

        expect(user.lastLogOn).toEqual({ accountName: "marci", password: "secret" });
    });

    test("adds the TCP protocol option when asked", async () => {
        const user = new FakeSteamUser();
        const promise = login({
            accountName: "marci",
            password: "secret",
            transport: "tcp",
            steamUser: user,
            SteamUser: { EConnectionProtocol: { TCP: 1 } },
        });
        user.succeed();
        await promise;

        expect(user.lastLogOn.protocol).toBe(1);
    });

    test("refuses a login with nothing to authenticate with", async () => {
        await expect(login({ accountName: "marci", steamUser: new FakeSteamUser() })).rejects.toThrow(
            /password, a refreshToken, or a sessionFile/,
        );
    });
});

describe("refresh token persistence", () => {
    test("writes every issued token to the session file and announces it", async () => {
        const file = tempFile("nested/session.json");
        const user = new FakeSteamUser();
        const seen: string[] = [];

        const promise = login({
            accountName: "marci",
            password: "secret",
            sessionFile: file,
            steamUser: user,
            onSession: (session) => session.on("token", (token) => seen.push(token)),
        });
        user.succeed();
        const session = await promise;

        user.emit("refreshToken", "fresh-token");
        expect(JSON.parse(readFileSync(file, "utf8"))).toEqual({ refreshToken: "fresh-token" });
        expect(seen).toEqual(["fresh-token"]);
        expect(session.sessionFile).toBe(file);
    });

    test("does not write anything without a session file", async () => {
        const user = new FakeSteamUser();
        const promise = login({ accountName: "marci", password: "secret", steamUser: user });
        user.succeed();
        const session = await promise;

        /* Nothing to assert on disk — the point is that it does not throw either. */
        user.emit("refreshToken", "fresh-token");
        expect(session.sessionFile).toBeUndefined();
    });
});

describe("steam guard", () => {
    test("answers the prompt from guardCode", async () => {
        const user = new FakeSteamUser();
        const promise = login({ accountName: "marci", password: "secret", guardCode: "ABCDE", steamUser: user });

        const codes: string[] = [];
        user.emit("steamGuard", null, (code: string) => codes.push(code), false);
        user.succeed();
        await promise;

        expect(codes).toEqual(["ABCDE"]);
    });

    test("asks onGuard and submits what it returns", async () => {
        const user = new FakeSteamUser();
        const prompts: Array<{ domain: string | null; lastCodeWrong: boolean }> = [];
        const promise = login({
            accountName: "marci",
            password: "secret",
            steamUser: user,
            onGuard: async (prompt) => {
                prompts.push({ domain: prompt.domain, lastCodeWrong: prompt.lastCodeWrong });
                return "FROMCB";
            },
        });

        const codes: string[] = [];
        user.emit("steamGuard", "gmail.com", (code: string) => codes.push(code), true);
        await tick();
        user.succeed();
        await promise;

        expect(prompts).toEqual([{ domain: "gmail.com", lastCodeWrong: true }]);
        expect(codes).toEqual(["FROMCB"]);
    });

    test("submits a code only once per prompt", async () => {
        const user = new FakeSteamUser();
        const codes: string[] = [];
        const promise = login({
            accountName: "marci",
            password: "secret",
            steamUser: user,
            onGuard: (prompt) => {
                prompt.submit("FIRST");
                return "SECOND";
            },
        });

        user.emit("steamGuard", null, (code: string) => codes.push(code), false);
        await tick();
        user.succeed();
        await promise;

        expect(codes).toEqual(["FIRST"]);
    });

    test("fails the login when there is no way to produce a code", async () => {
        const user = new FakeSteamUser();
        const promise = login({
            accountName: "marci",
            password: "secret",
            steamUser: user,
            interactiveGuard: false,
        });
        user.emit("steamGuard", null, () => {}, false);

        await expect(promise).rejects.toThrow(GuardRequiredError);
    });
});

describe("EResult classification", () => {
    test("rejects with a classified error", async () => {
        const user = new FakeSteamUser();
        const promise = login({ accountName: "marci", password: "secret", steamUser: user });
        user.emit("error", Object.assign(new Error("InvalidPassword"), { eresult: 5 }));

        const error = (await promise.catch((e) => e)) as SteamLoginError;
        expect(error).toBeInstanceOf(SteamLoginError);
        expect(error.eresult).toBe(5);
        expect(error.eresultName).toBe("InvalidPassword");
        expect(error.critical).toBe(true);
    });

    test("network EResults stay retryable, account ones do not", () => {
        expect(isCriticalEResult(3)).toBe(false); // NoConnection
        expect(isCriticalEResult(16)).toBe(false); // Timeout
        expect(isCriticalEResult(20)).toBe(false); // ServiceUnavailable
        expect(isCriticalEResult(5)).toBe(true); // InvalidPassword
        expect(isCriticalEResult(17)).toBe(true); // Banned
        expect(isCriticalEResult(88)).toBe(true); // TwoFactorCodeMismatch
    });

    test("reports disconnects with the classification attached", async () => {
        const user = new FakeSteamUser();
        const seen: any[] = [];
        const promise = login({
            accountName: "marci",
            password: "secret",
            steamUser: user,
            onSession: (session) => session.on("disconnected", (info) => seen.push(info)),
        });
        user.succeed();
        await promise;

        user.emit("disconnected", 6, "logged in elsewhere");
        expect(seen).toEqual([
            { eresult: 6, eresultName: "LoggedInElsewhere", critical: true, message: "logged in elsewhere" },
        ]);
    });

    test("an error after login does not crash without an error listener", async () => {
        const user = new FakeSteamUser();
        const promise = login({ accountName: "marci", password: "secret", steamUser: user });
        user.succeed();
        const session = await promise;

        expect(() => user.emit("error", Object.assign(new Error("boom"), { eresult: 3 }))).not.toThrow();
        expect(session.steamID).toBe("76561198000000000");
    });
});

describe("session", () => {
    test("derives the 32-bit account id from the steam id", async () => {
        const user = new FakeSteamUser();
        const promise = login({ accountName: "marci", password: "secret", steamUser: user });
        user.succeed("76561198012345678");
        const session = await promise;

        expect(session.accountId).toBe(52079950);
        expect(session.steamID).toBe("76561198012345678");
    });

    test("logoff goes through to steam-user", async () => {
        const user = new FakeSteamUser();
        const promise = login({ accountName: "marci", password: "secret", steamUser: user });
        user.succeed();
        (await promise).logoff();

        expect(user.loggedOff).toBe(true);
    });
});
