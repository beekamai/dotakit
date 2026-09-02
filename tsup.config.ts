import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts", "src/protobufs/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    sourcemap: true,
    target: "node18",
    outDir: "dist",
    /* The generated protobuf set is large and shared by both entries — split it
       into chunks instead of duplicating it in every bundle. */
    splitting: true,
});
