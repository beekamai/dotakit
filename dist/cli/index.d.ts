type PackageManager = "bun" | "npm" | "pnpm" | "yarn";
declare const PACKAGE_MANAGERS: PackageManager[];
interface InitOptions {
    cwd: string;
    /** Package manager to target. Detected from the lockfile when omitted. */
    pm?: PackageManager;
}
interface InitResult {
    pm: PackageManager;
    /** Dotted path of the override field, e.g. `overrides` or `pnpm.overrides`. */
    overrideField: string;
    /** What was written. Empty means the project was already set up. */
    changes: string[];
}
/** Package manager for `cwd`, from its lockfile. Bun when there is no lockfile. */
declare function detectPackageManager(cwd: string): PackageManager;
declare function overrideFieldFor(pm: PackageManager): string;
declare function installCommand(pm: PackageManager): string[];
/**
 * Writes the override, the dependency, the example and the env template into `cwd`.
 * Running it a second time changes nothing.
 */
declare function applyInit(options: InitOptions): InitResult;

/** Runs one CLI invocation and returns its exit code. `argv` excludes node and the script. */
declare function runCli(argv: string[], cwd?: string): number;

export { type InitOptions, type InitResult, PACKAGE_MANAGERS, type PackageManager, applyInit, detectPackageManager, installCommand, overrideFieldFor, runCli };
