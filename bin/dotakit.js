#!/usr/bin/env node
/* Published entry point: runs on node (npx) and bun (bunx) alike. */

import { runCli } from "../dist/cli/index.js";

process.exit(runCli(process.argv.slice(2)));
