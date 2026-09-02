#!/usr/bin/env bun
/* Repo-local entry point: same CLI, straight from src. The published bin is dotakit.js. */

import { runCli } from "../src/cli/index";

process.exit(runCli(process.argv.slice(2)));
