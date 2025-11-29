#!/usr/bin/env node
// scripts/compile-project-briefings.mjs
//
// Per-project ADAS briefing compiler.
//
// For a given PROJECT, PROFILE (e.g. web-app), and MODE (light|heavy|all), this script:
//   - Reads the global Compiled Profile from the ADAS repo.
//   - Reads the project-local .ai/*.local.md overlays and 00_ai-entry-point-meta-rules.md.
//   - Reads the appropriate briefing schema from ADAS/reference.
//   - Calls an LLM to synthesize a per-project ADAS Session Briefing:
//
//       <project-root>/.ai/adas-briefing.light.md
//       <project-root>/.ai/adas-briefing.heavy.md
//
// Assumptions:
//   - This script lives in the ADAS repo under scripts/.
//   - You run it with:
//       node ../ADAS/scripts/compile-project-briefings.mjs --project-root . --profile web-app --mode light
//   - The ADAS repo is located at: <project-root>/../ADAS by default, or override with --adas-root.
//   - The ADAS repo contains:
//       - adas-config.json
//       - domains/profiles/<profile>/Compiled Profile - <mode>.md
//       - reference/adas-briefing.light.schema.md
//       - reference/adas-briefing.heavy.schema.md
//   - The project contains:
//       - .ai/00_ai-entry-point-meta-rules.md
//       - .ai/*.local.md
//   - OPENAI_API_KEY is set.
//   - Optionally, OPENAI_MODEL and OPENAI_BASE_URL may be set.
//
// Usage examples (from project root):
//   node ../ADAS/scripts/compile-project-briefings.mjs --profile web-app --mode light
//   node ../ADAS/scripts/compile-project-briefings.mjs --profile web-app --mode heavy
//   node ../ADAS/scripts/compile-project-briefings.mjs --profile web-app --mode all
//
// Optional args:
//   --project-root <path>   (default: process.cwd())
//   --adas-root <path>      (default: <project-root>/../ADAS)

import fs from "fs";
import path from "path";
import crypto from "crypto";
import process from "process";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5.1";

if (!OPENAI_API_KEY) {
  console.error("ERROR: OPENAI_API_KEY is not set.");
  process.exit(1);
}

// ---------------------- Utility helpers ----------------------

function readFile(p) {
  return fs.readFileSync(p, "utf8");
}

function fileExists(p) {
  try {
    fs.accessSync(p, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function hashStrings(strings) {
  const h = crypto.createHash("sha256");
  for (const s of strings) h.update(s);
  return h.digest("hex");
}

function parseArgs() {
  const args = {
    profile: null,
    mode: null,
    projectRoot: process.cwd(),
    adasRoot: null,
  };

  const argv = process.argv.slice(2);

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--profile") {
      args.profile = argv[++i];
    } else if (arg === "--mode") {
      args.mode = argv[++i];
    } else if (arg === "--project-root") {
      args.projectRoot = path.resolve(argv[++i]);
    } else if (arg === "--adas-root") {
      args.adasRoot = path.resolve(argv[++i]);
    }
  }

  if (!args.profile) {
    console.error("Usage: node compile-project-briefings.mjs --profile <name> --mode <light|heavy|all> [--project-root <path>] [--adas-root <path>]");
    process.exit(1);
  }
  if (!args.mode) {
    console.error("ERROR: --mode is required (light|heavy|all).");
    process.exit(1);
  }

  const modeLower = args.mode.toLowerCase();
  if (!["light", "heavy", "all"].includes(modeLower)) {
    console.error("ERROR: --mode must be 'light', 'heavy', or 'all'.");
    process.exit(1);
  }
  args.mode = modeLower;

  if (!args.adasRoot) {
    args.adasRoot = path.resolve(args.projectRoot, "..", "ADAS");
  }

  return args;
}

async function callOpenAI(prompt) {
  const body = {
    model: OPENAI_MODEL,
    messages: [
      {
        role: "system",
        content:
          "You are an ADAS per-project briefing compiler. You take a global compiled profile + project-local overlays and produce a concise ADAS Session Briefing that strictly follows the provided schema.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.1,
  };

  const res = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenAI API error ${res.status}: ${text}`);
  }

  const json = await res.json();
  const choice = json.choices && json.choices[0];
  if (!choice || !choice.message || !choice.message.content) {
    throw new Error("OpenAI API returned no content.");
  }

  return choice.message.content;
}

// --------------------------- Core compile ----------------------------

async function compileForMode({ projectRoot, adasRoot, profile, mode }) {
  const prettyMode = mode.charAt(0).toUpperCase() + mode.slice(1);

  // 1) Resolve paths
  const configPath = path.join(adasRoot, "adas-config.json");
  if (!fileExists(configPath)) {
    console.error(`ERROR: adas-config.json not found at: ${configPath}`);
    process.exit(1);
  }
  const config = JSON.parse(readFile(configPath));
  const adasCore = config.adas_core || {};
  const adasCoreVersion = adasCore.version || "0.0.0";

  // Global compiled profile
  const compiledProfilePath = path.join(
    adasRoot,
    "domains",
    "profiles",
    profile,
    `Compiled Profile - ${mode}.md`
  );
  if (!fileExists(compiledProfilePath)) {
    console.error(`ERROR: Global Compiled Profile not found at: ${compiledProfilePath}`);
    process.exit(1);
  }
  const compiledProfileContent = readFile(compiledProfilePath);

  // Schema for this mode
  const schemaFileName =
    mode === "light"
      ? "adas-briefing.light.schema.md"
      : "adas-briefing.heavy.schema.md";
  const schemaPath = path.join(adasRoot, "reference", schemaFileName);
  if (!fileExists(schemaPath)) {
    console.error(`ERROR: Briefing schema not found at: ${schemaPath}`);
    process.exit(1);
  }
  const schemaTemplate = readFile(schemaPath);

  // Project .ai
  const aiDir = path.join(projectRoot, ".ai");
  if (!fileExists(aiDir)) {
    console.error(`ERROR: Project .ai directory not found at: ${aiDir}`);
    process.exit(1);
  }

  const entryPath = path.join(aiDir, "00_ai-entry-point-meta-rules.md");
  let entryContent = "";
  if (fileExists(entryPath)) {
    entryContent = readFile(entryPath);
  } else {
    console.warn(`WARNING: .ai/00_ai-entry-point-meta-rules.md not found at: ${entryPath}`);
  }

  const localFiles = fs
    .readdirSync(aiDir)
    .filter((n) => n.endsWith(".local.md"))
    .map((n) => path.join(aiDir, n));

  if (localFiles.length === 0) {
    console.warn(`WARNING: No .local.md files found in ${aiDir}. Briefing will still be generated, but project overlays will be empty.`);
  }

  const localContents = localFiles.map(readFile);

  // Hashes for metadata
  const compiledProfileHash = hashStrings([compiledProfileContent]);
  const localHash = hashStrings(localContents.concat(entryContent || ""));

  // Build prompt
  const promptParts = [];

  promptParts.push(
    `You are compiling a per-project ADAS Session Briefing for profile "${profile}" in "${mode}" mode.`
  );
  promptParts.push("");
  promptParts.push("You are given:");
  promptParts.push("- A global Compiled Profile for this profile+mode.");
  promptParts.push("- The project's .ai entry file and all .ai/*.local.md overlays.");
  promptParts.push("- A markdown schema template that you MUST follow exactly.");
  promptParts.push("");
  promptParts.push("Your job:");
  promptParts.push("- Merge the global compiled profile with the project overlays.");
  promptParts.push("- Produce a concise, project-specific ADAS Session Briefing.");
  promptParts.push("- Respect the profile (web-app) and the mode (light vs heavy).");
  promptParts.push("- Preserve all important constraints, especially security, invariants, and 'never' rules.");
  promptParts.push("");
  promptParts.push("Fill in the ADAS_SESSION_BRIEFING metadata block in the schema with:");
  promptParts.push(`- PROFILE: ${profile}`);
  promptParts.push(`- MODE: ${mode}`);
  promptParts.push(`- ADAS_CORE_VERSION: ${adasCoreVersion}`);
  promptParts.push("- GENERATED_AT: the current timestamp in ISO8601 format.");
  promptParts.push(`- SOURCE_HASH.COMPILED_PROFILE: "${compiledProfileHash}"`);
  promptParts.push(`- SOURCE_HASH.LOCAL_FILES: "${localHash}"`);
  promptParts.push("");
  promptParts.push("When merging:");
  promptParts.push("- Treat the global Compiled Profile as the baseline behavior.");
  promptParts.push("- Treat .ai/*.local.md files as hard overlays that refine or tighten behavior for this specific project.");
  promptParts.push("- If there is any conflict, local overlays win for this project, but you must still respect non-overridable domains and core invariants.");
  promptParts.push("");
  promptParts.push("=== SCHEMA TEMPLATE (FILL THIS, DO NOT ADD EXTRA TOP-LEVEL SECTIONS) ===");
  promptParts.push(schemaTemplate);
  promptParts.push("");
  promptParts.push("=== GLOBAL COMPILED PROFILE (Markdown) ===");
  promptParts.push(compiledProfileContent);
  promptParts.push("");
  promptParts.push("=== PROJECT .ai ENTRY (Markdown) ===");
  promptParts.push(entryContent || "(No 00_ai-entry-point-meta-rules.md present.)");
  promptParts.push("");
  promptParts.push("=== PROJECT .ai LOCAL OVERLAYS (Markdown) ===");
  if (localFiles.length > 0) {
    for (let i = 0; i < localFiles.length; i++) {
      const name = path.basename(localFiles[i]);
      promptParts.push(`\n--- FILE: ${name} ---\n`);
      promptParts.push(localContents[i]);
    }
  } else {
    promptParts.push("(No .local.md overlays present.)");
  }

  const prompt = promptParts.join("\n");

  // Call LLM
  console.log(
    `Compiling per-project ADAS briefing for "${profile}" in ${prettyMode} mode using model ${OPENAI_MODEL}...`
  );
  const briefing = await callOpenAI(prompt);

  // Write output
  const outPath = path.join(aiDir, `adas-briefing.${mode}.md`);
  fs.writeFileSync(outPath, briefing, "utf8");
  console.log(`Wrote: ${outPath}`);
}

// --------------------------- Main ----------------------------

async function main() {
  const args = parseArgs();
  const { projectRoot, adasRoot, profile, mode } = args;

  console.log("Project root:", projectRoot);
  console.log("ADAS root:   ", adasRoot);
  console.log("Profile:     ", profile);
  console.log("Mode:        ", mode);

  if (!fileExists(projectRoot)) {
    console.error(`ERROR: projectRoot does not exist: ${projectRoot}`);
    process.exit(1);
  }
  if (!fileExists(adasRoot)) {
    console.error(`ERROR: adasRoot does not exist: ${adasRoot}`);
    process.exit(1);
  }

  if (mode === "all") {
    await compileForMode({ projectRoot, adasRoot, profile, mode: "light" });
    await compileForMode({ projectRoot, adasRoot, profile, mode: "heavy" });
  } else {
    await compileForMode({ projectRoot, adasRoot, profile, mode });
  }

  console.log("Per-project briefing compilation complete.");
}

main().catch((err) => {
  console.error("compile-project-briefings.mjs failed:", err);
  process.exit(1);
});
