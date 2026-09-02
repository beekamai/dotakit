/* Steam login failures, split into the only distinction that changes what a caller
   does next: retry the connection, or stop and fix the account. */

export class SteamError extends Error {
    constructor(message: string, options?: { cause?: unknown }) {
        super(message, options);
        this.name = new.target.name;
    }
}

/**
 * Steam refused or dropped the login. `critical` means retrying will not help —
 * the password is wrong, the account is banned, the Guard code was rejected.
 */
export class SteamLoginError extends SteamError {
    readonly critical: boolean;

    constructor(readonly eresult: number, readonly eresultName: string, cause?: unknown) {
        super(`Steam login failed: ${eresultName} (${eresult})`, { cause });
        this.critical = isCriticalEResult(eresult);
    }
}

/** No Steam Guard code could be obtained: no `guardCode`, no `onGuard`, nobody listening. */
export class GuardRequiredError extends SteamError {
    constructor(readonly domain: string | null, readonly lastCodeWrong: boolean) {
        super(
            lastCodeWrong
                ? "Steam rejected the Guard code and no new one was supplied"
                : "Steam Guard code required — pass guardCode, or onGuard to supply one on demand",
        );
    }
}

/*
 * EResults that mean "a human has to do something": wrong password, another session
 * took over, a ban, a Guard code that did not fit. Everything else — no connection,
 * timeout, service unavailable — is worth reconnecting for.
 */
const CRITICAL_ERESULTS = new Set([
    5, // InvalidPassword
    6, // LoggedInElsewhere
    17, // Banned
    34, // LogonSessionReplaced
    43, // AccountDisabled
    63, // AccountLogonDenied (Steam Guard email)
    73, // AccountLockedDown
    84, // RateLimitExceeded
    85, // AccountLoginDeniedNeedTwoFactor
    88, // TwoFactorCodeMismatch
]);

/** Names for the EResults this library reasons about; anything else prints numerically. */
const ERESULT_NAMES: Readonly<Record<number, string>> = {
    1: "OK",
    3: "NoConnection",
    5: "InvalidPassword",
    6: "LoggedInElsewhere",
    16: "Timeout",
    17: "Banned",
    20: "ServiceUnavailable",
    34: "LogonSessionReplaced",
    43: "AccountDisabled",
    63: "AccountLogonDenied",
    65: "AccountLogonDeniedNoMail",
    73: "AccountLockedDown",
    84: "RateLimitExceeded",
    85: "AccountLoginDeniedNeedTwoFactor",
    88: "TwoFactorCodeMismatch",
};

/** `true` when reconnecting cannot fix it and a person has to intervene. */
export function isCriticalEResult(eresult: number): boolean {
    return CRITICAL_ERESULTS.has(eresult);
}

export type EResultClass = "critical" | "retryable";

export function classifyEResult(eresult: number): EResultClass {
    return isCriticalEResult(eresult) ? "critical" : "retryable";
}

/** Best-effort name for an EResult; uses steam-user's enum when one is handed in. */
export function eresultName(eresult: number, SteamUser?: any): string {
    return SteamUser?.EResult?.[eresult] ?? ERESULT_NAMES[eresult] ?? `EResult-${eresult}`;
}
