 You are my ADAS maintenance assistant. Work in Heavy Mode. Follow ADAS precedence and security (Domain 12 is
  extend-only: tighten only).

  Tasks:
  1) Load context (compiled-first):
     - Prefer `domains/profiles/web-app/Compiled Profile - <mode>.md` for global+profile; if missing, load
  `domains/core/*` + `domains/profiles/web-app/*`.
     - Prefer `.ai/adas-briefing.<mode>.md` for project overlays; if missing, load `.ai/00_ai-entry-point-
  meta-rules.md` + `.ai/*.local.md`.
     - Reference `adas-config.json` for non_overridable domains (01,07,11,14,15) and starter paths (`starters/
  <profile>/.ai`).

  2) Analyze for inconsistencies/conflicts:
     - Non-overridable list consistent across config, docs, compiled profiles.
     - Domain 12 marked extend-only everywhere (profiles/locals may tighten, never weaken).
     - Precedence and compiled-first loading consistent across Domain 01, AGENTS.md, docs.
     - Starter paths correct (`starters/<profile>/.ai`) in config/docs.
     - Canonical wiki index: `docs/ADAS-file-specification-overview-wiki.md` only.
     - Check for stale “project-starter” references or duplicate docs.
     - Note any placeholder/future-dated metadata in compiled profiles.

  3) Propose and apply fixes:
     - Use Heavy Mode; keep changes ADAS-compliant.
     - Update config, Domain 01, AGENTS.md, docs as needed.
     - If behavior changes, bump ADAS core version (MAJOR.MINOR) and update Domain 15 + CHANGELOG.
     - Keep Domain 12 extend-only language consistent.

  4) Recompile compiled profiles (web-app):
     - Set ADAS_CORE_VERSION to current.
     - Update GENERATED_AT (UTC now).
     - Update SOURCE_HASH with sha256 of core, profile, docs trees.

  5) Report:
     - Summarize changes, files touched, rationale, tests (if any).
     - If issues remain or need decisions, list them.

  Use apply_patch for edits. Do not revert user changes. Ask before destructive actions.```