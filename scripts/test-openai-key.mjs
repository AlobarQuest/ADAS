#!/usr/bin/env node
// scripts/test-openai-key.mjs
//
// Very small OpenAI API smoke test.
// - Verifies that OPENAI_API_KEY is set.
// - Calls a tiny chat completion and prints either the model reply or the raw error.
//
// Usage:
//   node scripts/test-openai-key.mjs
//
// Optional env vars:
//   OPENAI_MODEL     (default: gpt-5.1)
//   OPENAI_BASE_URL  (default: https://api.openai.com/v1)

import process from "process";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5.1";

if (!OPENAI_API_KEY) {
  console.error("ERROR: OPENAI_API_KEY is not set in the environment.");
  process.exit(1);
}

async function main() {
  console.log("Testing OpenAI API connectivity...");
  console.log(`  BASE_URL: ${OPENAI_BASE_URL}`);
  console.log(`  MODEL:    ${OPENAI_MODEL}`);
  console.log(`  KEY:      ${OPENAI_API_KEY.slice(0, 8)}... (redacted)`);

  const body = {
    model: OPENAI_MODEL,
    messages: [
      { role: "system", content: "You are a minimal diagnostic assistant." },
      { role: "user", content: "Reply with the single word: OK" },
    ],
    max_tokens: 5,
    temperature: 0,
  };

  try {
    const res = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await res.text();

    if (!res.ok) {
      console.error("OpenAI API returned an error HTTP status:");
      console.error(`  Status: ${res.status}`);
      console.error("  Body:");
      console.error(text);
      process.exit(1);
    }

    let json;
    try {
      json = JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse JSON response from OpenAI:");
      console.error(text);
      process.exit(1);
    }

    const choice = json.choices && json.choices[0];
    const reply = choice && choice.message && choice.message.content;
    console.log("OpenAI API call succeeded. Model replied with:");
    console.log("--------------------------------------------------");
    console.log(reply ?? "<no content>");
    console.log("--------------------------------------------------");
  } catch (err) {
    console.error("Unexpected error calling OpenAI API:");
    console.error(err);
    process.exit(1);
  }
}

main();
