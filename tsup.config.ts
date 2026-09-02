import { defineConfig } from "tsup";

export default defineConfig({
    entry: {
        index: "src/index.ts",
        "gc/index": "src/gc/index.ts",
        "steam/index": "src/steam/index.ts",
        "guild/index": "src/guild/index.ts",
        "profile/index": "src/profile/index.ts",
        "live/index": "src/live/index.ts",
        "protobufs/index": "src/protobufs/index.ts",
        "cli/index": "src/cli/index.ts",
    },
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    sourcemap: true,
    target: "node18",
    outDir: "dist",
    /* steam-user is a peer dependency: it must never be pulled into the bundle, and
       the modules that need it import it lazily so a GC-only install still works. */
    external: ["steam-user"],
    /* createRequire(import.meta.url) is used to read the installed websocket13 version;
       without the shim the CJS build ships a bare import.meta and fails to load. */
    shims: true,
    /* The generated protobuf set is large and shared by every entry — split it into
       chunks instead of duplicating it in each bundle. */
    splitting: true,
});
