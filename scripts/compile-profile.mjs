#!/usr/bin/env node
// scripts/compile-profile.mjs
//
// Global ADAS profile compiler.
//
// For a given PROFILE (e.g. web-app) and MODE (light|heavy), this script:
//   - Reads ADAS core domains, profile domains, and key docs.
//   - Reads the schema at reference/compiled-profile.schema.md.
//   - Calls an LLM to synthesize a single Compiled Profile file:
//       domains/profiles/<profile>/Compiled Profile - <mode>.md
//
// Assumptions:
//   - Run this from the ADAS repo root.
//   - reference/compiled-profile.schema.md exists.
//   - adas-config.json defines:
//       - adas_core.domains_root
//       - profiles[profile].domains_overlay_root
//   - OPENAI_API_KEY is set in the environment.
//   - Optionally, OPENAI_MODEL and OPENAI_BASE_URL may be set.
//
// Usage examples:
//   node scripts/compile-profile.mjs --profile web-app --mode light
//   node scripts/compile-profile.mjs --profile web-app --mode heavy

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
  const args = { profile: null, mode: null };
  const argv = process.argv.slice(2);

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--profile") {
      args.profile = argv[++i];
    } else if (arg === "--mode") {
      args.mode = argv[++i];
    }
  }

  if (!args.profile || !args.mode) {
    console.error("Usage: node scripts/compile-profile.mjs --profile <name> --mode <light|heavy>");
    process.exit(1);
  }

  const modeLower = args.mode.toLowerCase();
  if (modeLower !== "light" && modeLower !== "heavy") {
    console.error("ERROR: --mode must be 'light' or 'heavy'.");
    process.exit(1);
  }
  args.mode = modeLower;
  return args;
}

async function callOpenAI(prompt) {
  const body = {
    model: OPENAI_MODEL,
    messages: [
      {
        role: "system",
        content:
          "You are an ADAS compiler. You take raw governance markdown and produce a single, concise Compiled Profile document that strictly follows the provided schema.",
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

// --------------------------- Main ----------------------------

async function main() {
  const { profile, mode } = parseArgs();
  const repoRoot = process.cwd();

  // 1) Load adas-config.json
  const configPath = path.join(repoRoot, "adas-config.json");
  if (!fileExists(configPath)) {
    console.error(`ERROR: adas-config.json not found at: ${configPath}`);
    process.exit(1);
  }
  const config = JSON.parse(readFile(configPath));

  const adasCore = config.adas_core || {};
  const adasCoreVersion = adasCore.version || "0.0.0";

  if (!adasCore.domains_root) {
    console.error("ERROR: adas-config.json missing adas_core.domains_root.");
    process.exit(1);
  }

  const profileCfg = (config.profiles && config.profiles[profile]) || null;
  if (!profileCfg) {
    console.error(`ERROR: profile "${profile}" not found in adas-config.json.`);
    process.exit(1);
  }
  if (!profileCfg.domains_overlay_root) {
    console.error(`ERROR: profile "${profile}" missing domains_overlay_root in adas-config.json.`);
    process.exit(1);
  }

  // 2) Locate roots
  const coreRoot = path.join(repoRoot, adasCore.domains_root);
  const profileRoot = path.join(repoRoot, profileCfg.domains_overlay_root);
  const docsRoot = path.join(repoRoot, "docs");
  const schemaPath = path.join(repoRoot, "reference", "compiled-profile.schema.md");

  if (!fileExists(schemaPath)) {
    console.error(`ERROR: reference/compiled-profile.schema.md not found at: ${schemaPath}`);
    process.exit(1);
  }
  if (!fileExists(coreRoot)) {
    console.error(`ERROR: core domains root not found at: ${coreRoot}`);
    process.exit(1);
  }
  if (!fileExists(profileRoot)) {
    console.error(`ERROR: profile domains root not found at: ${profileRoot}`);
    process.exit(1);
  }
  if (!fileExists(docsRoot)) {
    console.warn(`WARNING: docs directory not found at: ${docsRoot}`);
  }

  // 3) Collect sources
  const coreFiles = fs
    .readdirSync(coreRoot)
    .filter((n) => n.endsWith(".md"))
    .map((n) => path.join(coreRoot, n));
  const coreContents = coreFiles.map(readFile);

  const profileFiles = fs
    .readdirSync(profileRoot)
    .filter((n) => n.endsWith(".md"))
    .map((n) => path.join(profileRoot, n));
  const profileContents = profileFiles.map(readFile);

  const docNames = [
    "adas-usage-modes.md",
    "for-ai-helpers-how-to-load-adas-context.md",
    "understanding-adas-domains.md",
    "adas-profiles-and-config.md",
  ];
  const docContents = [];
  for (const name of docNames) {
    const p = path.join(docsRoot, name);
    if (fileExists(p)) {
      docContents.push(readFile(p));
    }
  }

  const schemaTemplate = readFile(schemaPath);

  // 4) Compute hashes for metadata
  const coreHash = hashStrings(coreContents);
  const profileHash = hashStrings(profileContents);
  const docsHash = hashStrings(docContents);

  // 5) Build prompt
  const prettyMode = mode.charAt(0).toUpperCase() + mode.slice(1);

  const promptParts = [];

  promptParts.push(
    `You are compiling a global ADAS Compiled Profile for profile "${profile}" in "${mode}" mode.`
  );
  promptParts.push("");
  promptParts.push("You are given:");
  promptParts.push("- ADAS core domain specifications");
  promptParts.push("- ADAS profile-specific domain overrides");
  promptParts.push("- ADAS docs on usage modes, domains, and profiles");
  promptParts.push("- A markdown schema template that you MUST follow exactly.");
  promptParts.push("");
  promptParts.push("Your job:");
  promptParts.push("- Synthesize the core + profile + docs into a single, concise document.");
  promptParts.push("- Preserve ALL important constraints, especially:");
  promptParts.push("  - security rules");
  promptParts.push("  - invariants");
  promptParts.push("  - 'never' and 'must not' rules");
  promptParts.push("- Do NOT invent new sections; only fill the provided schema.");
  promptParts.push("");
  promptParts.push("Fill in the metadata at the top of the schema with:");
  promptParts.push(`- PROFILE: ${profile}`);
  promptParts.push(`- MODE: ${mode}`);
  promptParts.push(`- ADAS_CORE_VERSION: ${adasCoreVersion}`);
  promptParts.push("- GENERATED_AT: the current timestamp in ISO8601 format.");
  promptParts.push(`- SOURCE_HASH.CORE_DOMAINS: "${coreHash}"`);
  promptParts.push(`- SOURCE_HASH.PROFILE_DOMAINS: "${profileHash}"`);
  promptParts.push(`- SOURCE_HASH.DOCS: "${docsHash}"`);
  promptParts.push("");
  promptParts.push("=== SCHEMA TEMPLATE (FILL THIS, DO NOT ADD EXTRA TOP-LEVEL SECTIONS) ===");
  promptParts.push(schemaTemplate);
  promptParts.push("");
  promptParts.push("=== RAW CORE DOMAINS (Markdown) ===");
  promptParts.push(coreContents.join("\n\n---\n\n"));
  promptParts.push("");
  promptParts.push(`=== RAW PROFILE DOMAINS for profile "${profile}" (Markdown) ===`);
  promptParts.push(profileContents.join("\n\n---\n\n"));
  promptParts.push("");
  promptParts.push("=== RAW ADAS DOCS (Markdown) ===");
  if (docContents.length > 0) {
    promptParts.push(docContents.join("\n\n---\n\n"));
  } else {
    promptParts.push("(No additional docs were found.)");
  }

  const prompt = promptParts.join("\n");

  // 6) Call LLM
  console.log(`Compiling ADAS profile "${profile}" in ${prettyMode} mode using model ${OPENAI_MODEL}...`);
  const compiled = await callOpenAI(prompt);

  // 7) Write output
  const outPath = path.join(profileRoot, `Compiled Profile - ${mode}.md`);
  fs.writeFileSync(outPath, compiled, "utf8");
  console.log(`Wrote: ${outPath}`);
}

main().catch((err) => {
  console.error("compile-profile.mjs failed:", err);
  process.exit(1);
});
