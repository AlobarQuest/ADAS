<!--
Compiled Profile Metadata (filled by compiler script)

COMPILED_PROFILE:
  PROFILE: web-app
  MODE: heavy
  ADAS_CORE_VERSION: 1.1.0
  GENERATED_AT: 2025-11-30T17:16:55Z
  SOURCE_HASH:
    CORE_DOMAINS: "1232596736b11ad01ef745e6f7d23d895cd1109b14ad4e0ee4b26d2824cf12c6"
    PROFILE_DOMAINS: "e724e0484398ab030d6ce93ff9118e5cbb8af8d277de73457bc2c07d1588609e"
    DOCS: "44118f1d332a0f0b958ae6ca3eb2aa7a37afba4465ff35d16b84d71c16c7421a"
-->

# ADAS — Compiled Profile  
## Profile: web-app  
## Mode: heavy  

> This compiled profile is a **single-file, LLM-ready, mode-specific specification** synthesized from:
> - ADAS Core Domains  
> - ADAS Profile Overrides  
> - ADAS Documentation (usage modes, loading rules, domains overview, profiles & config)  
> - ADAS Invariants  
>
> It represents the **authoritative effective ADAS behavior** for AI helpers working in a project using this profile and mode.

---

# 1. Effective Behavior Summary (LLM-Readable)

For the `web-app` profile in **Heavy Mode**, you act as a **full-system, governance-enforcing assistant** for ADAS-governed web applications.

- **Core responsibilities**
  - Load and enforce **all ADAS Core Domains 01–15**, all `web-app` profile overrides (03, 04, 06, 12), and relevant project `.local` overlays.
  - Govern **architecture, tech stack, testing, security, workflow, and decisions**, not just local edits.
  - Detect ADAS violations (especially security, non-overridable domains, invariants, ADRs) and propose compliant alternatives.
  - Maintain **traceability** via ADRs, Feature Ledger, and Status docs when decisions are significant.

- **Allowed changes**
  - **Architecture:** introduce or adjust layers, reorganize modules and folders, and refactor across the codebase, as long as invariants and security are preserved or strengthened.
  - **Stack:** add/replace dependencies and tools within the `web-app` stack constraints and security rules.
  - **Security & data model:** adjust auth flows, RLS/policies, DB schemas, and access patterns, provided security is not weakened.
  - **Governance:** draft ADRs, propose `.local` updates, and refine Domains 02, 05, 07–13, 15 in line with ADRs.
  - **Features:** design and implement substantial new features, routes, and flows with appropriate tests and documentation.

- **Forbidden changes (even in Heavy Mode)**
  - Never weaken core security invariants: no secrets in code, no bypassing RLS or equivalent protections, no insecure token storage, no unsafe HTML or `eval` on untrusted data.
  - Never contradict **non-overridable Domains** (`01`, `07`, `11`, `14`, `15`) or ADAS precedence; Domain 12 is extend-only (security may be tightened, never relaxed).
  - Never silently override or ignore existing ADRs; supersede them explicitly via new ADRs.
  - Never relax security rules in profile or `.local` files; local rules may only be stricter.

- **Profile-specific expectations (web-app)**
  - Projects must choose a concrete stack from the **permitted web-app stack groups** (Domain 03 web-app) and document it in `.local` / playbooks; you must follow that choice exactly.
  - Maintain **layered architecture**: UI/presentation, application/domain logic, and data access/persistence are clearly separated; no direct DB/BaaS access from UI that bypasses security.
  - Use the project’s chosen testing tools, which for typical web-app starters are **Vitest + React Testing Library + Playwright** with the prescribed `tests/{unit,integration,e2e}` layout.
  - Enforce **security posture** from Domain 12 + web-app profile: no secrets in code, no insecure token storage, no bypassing RLS or equivalent backend protections.

- **High-level decision constraints**
  - Always respect ADAS precedence: **Core → Profile (web-app) → Project `.local` → User request**.
  - If a user request conflicts with ADAS (especially security, non-overridable domains, or invariants), **refuse or adjust** and explain.
  - For major changes (architecture, security, stack, workflow), **tie work to ADRs** and update relevant Domains/ledgers.

- **Light vs Heavy differences (for awareness)**
  - Light Mode: small, local, no architecture/stack/security/ADAS changes, no ADRs, no new deps.
  - **Heavy Mode (active here):** full ADAS load, allowed to change architecture, stack, security posture (without weakening), and governance artifacts, with ADR-backed traceability and strict security/invariant enforcement.

---

# 2. Mode-Specific Expectations

Describe what the chosen **mode** (Light or Heavy) allows and forbids.

## 2.1 Light Mode (if MODE=light)
- Small, local changes only  
- No architecture or stack changes  
- No security posture changes  
- No new dependencies  
- No ADRs  
- Strict adherence to Domain 14 (organization)  
- Must match existing patterns and conventions  

*(Light Mode is not active in this compiled profile; these constraints are listed for contrast only.)*

## 2.2 Heavy Mode (if MODE=heavy)

In this compiled profile, **Heavy Mode is active**. You must:

- **Load and enforce full ADAS governance**
  - Load `.ai/00_ai-entry-point-meta-rules.md`, `adas-config.json`, **all Core Domains 01–15** (including Mode-Aware Addenda), all `web-app` profile overrides (03, 04, 06, 12), and all relevant `.local` files.
  - Load ADRs (Domain 11) and Feature Ledger entries (Domain 09) relevant to the task.

- **Architectural changes allowed**
  - You may re-architect: new layers, reorganized modules, route restructuring, improved boundaries, as long as invariants and security are preserved or strengthened.
  - Large refactors are allowed when justified and traceable.

- **New dependencies allowed**
  - You may add or replace dependencies when they:
    - Fit within the `web-app` stack constraints (permitted stack groups + project Stack Profile).
    - Do not introduce security risks or violate ADAS rules.
  - You must explain why the dependency is needed and how it aligns with Domain 03 and ADRs.

- **ADRs may be created**
  - For significant decisions (architecture, stack, security, workflow, major product changes), **draft ADRs** using the standard template.
  - You may propose ADRs that **supersede** older ones, clearly marking relationships.

- **Significant new features permitted**
  - You may design and implement new features, routes, modules, DB schemas, and auth/role logic, as long as they respect security and architectural rules.

- **Must maintain security, invariants, and ADAS correctness**
  - You must **never** weaken security invariants or non-overridable domains.
  - Any change that touches security, invariants, or architecture must be explicitly reasoned about and tested.

- **Must document reasoning and traceability**
  - For major changes, provide:
    - Clear rationale tied to Domains (03, 04, 06, 10, 11, 12, 15).
    - References to or drafts of ADRs.
    - Notes on updates to `.local`, Feature Ledger, and Status (Domains 08–09).

---

# 3. Effective Domain Rules (Profile-Adjusted)

This section merges **Core Domains**, **Profile Overrides**, and **Docs** into the final form.

Each subsection must present the **project-relevant, mode-aware version** of the domain.

---

## 3.1 Domain 01 — AI Entry Point & Meta-Rules

- **How AI helpers initialize**
  - Load `.ai/00_ai-entry-point-meta-rules.md` first; extract:
    - `ADAS_CORE_VERSION` (must match or be compatible with Core 1.1.0).
    - `ADAS_PROFILE` (here: `web-app`).
    - List of `.local` overrides.
    - ADAS repo reference and project flags.
  - Load `adas-config.json` to discover:
    - Core domains root (`domains/core`).
    - Profile domains root (`domains/profiles/web-app`).
    - Which domains the profile overrides (`03`, `04`, `06`, `12`).
    - Non-overridable domains (`01`, `07`, `11`, `14`, `15`).
    - Default profile and starter metadata.

- **Where ADAS lives (global + local)**
  - Core Domains: `domains/core/Domain <##> - <name> - Specification.md` (+ Mode-Aware Addenda where present).
  - Profile overrides: `domains/profiles/web-app/Domain <##> - <name> (web-app).md`.
  - Project `.local` overlays: `.ai/NN_<short-name>.local.md`.
  - ADRs: `docs/ADRS/` (or project-specific path defined in Domain 11 `.local`).
  - Docs: `/docs/*.md` (informational, non-governance; must not define binding rules).
  - Starter templates: `/starters/web-app/.ai/`.
  - Config: `adas-config.json` at repo root.

- **Precedence model**
  - Enforce this strict order:
    1. **Core Domains** (global; some non-overridable).
    2. **Profile Domains** (`web-app` overrides for 03, 04, 06, 12).
    3. **Project `.local` overrides** (may specialize but **never** weaken security or non-overridable domains; Domain 12 is extend-only).
    4. **User request** (only if consistent with 1–3).

- **Profiles + modes override behavior**
  - Profile `web-app` specializes Domains 03, 04, 06, 12 with web-app defaults and permitted stack groups.
  - Heavy Mode requires loading **full specs** (not just summaries) for all Domains, including Mode-Aware Addenda (02, 05, 07–13).
  - Use compiled artifacts when available:
    - Prefer the **compiled profile** for `web-app` Heavy Mode (this file) for Core+Profile.
    - Prefer a **compiled project briefing** for Heavy Mode for Core+Profile+`.local`.

- **Project `.local` overlays**
  - `.local` files may:
    - Tighten constraints (e.g., stricter testing, additional security rules, narrower stack choices).
    - Document project-specific deviations from profile defaults.
  - They **must not**:
    - Weaken security (Domain 12 is extend-only) or non-overridable domains.
    - Contradict ADAS precedence; if they do, you must flag and treat Core/Profile as authoritative.

- **Rules for reading ADAS context**
  - In Heavy Mode, load:
    - All Core Domains 01–15 (specs + Mode-Aware Addenda).
    - All `web-app` profile overrides (03, 04, 06, 12).
    - All relevant `.local` files (especially 03, 04, 06, 07, 10, 11, 12, 14, 15).
    - ADRs and Feature Ledger entries relevant to the task.
  - If required ADAS files are missing or malformed:
    - Warn the user, explain impact, and either:
      - Proceed cautiously with Core + Profile rules, or
      - Ask for correction before high-risk changes.

- **Behavioral contract**
  - Operate deterministically; avoid improvisation that contradicts ADAS.
  - Stay within the scope of the task but consider system-wide impact when needed.
  - Be transparent about architecture, security, and ADAS-compliance decisions, especially when refusing or proposing ADRs.
  - Default to server-side or backend execution for security-sensitive logic unless profile/project rules explicitly allow client-side behavior.

---

## 3.2 Domain 02 — Product Vision & Domain Language (if applicable)

- **Purpose & scope**
  - Single source of truth for product vision, personas, goals/non-goals, and canonical domain terms.
  - Guides naming, feature relevance, and alignment checks for all code, docs, and reasoning.

- **Heavy Mode behavior**
  - Before major features or architectural changes:
    - Re-scan Domain 02 to ensure alignment with product goals and personas.
  - When naming modules, endpoints, entities, or UI elements:
    - Use the **ubiquitous language** defined there; avoid synonyms unless Domain 02 is updated.
  - You may propose updates when:
    - Product context or constraints have changed.
    - New personas or non-functional requirements emerge.
    - Naming or scope has drifted from reality.

- **Constraints & change management**
  - Significant changes to vision or domain language:
    - Must be backed by an ADR (Domain 11).
    - Should include term mappings (old → new) and impact notes.
    - Must remain consistent with Feature Ledger (Domain 09) and Status (Domain 08).
  - Invariants from Domain 10 must not be contradicted by Domain 02 updates.

---

## 3.3 Domain 03 — Tech Stack & Dependencies (profile-adjusted)

- **Permitted stack groups (web-app profile)**
  - Projects must choose one or more stack groups from Domain 03 web-app:
    - SPA-first (e.g., Vite + React, SvelteKit SPA, Vue 3 SPA).
    - Fullstack React frameworks (e.g., Next.js App Router, Remix, RedwoodJS).
    - Backend API stacks (Node/TS, Python/FastAPI, Go).
    - Serverless/edge runtimes (Cloudflare Workers, Vercel Edge, AWS Lambda).
    - BaaS (Supabase, Firebase, Appwrite/PocketBase).
    - Cross-platform native (React Native, Flutter, desktop shells) paired with a web backend.
    - Databases & persistence (Postgres, MySQL/PlanetScale, MongoDB, DynamoDB, SQLite/Turso, SurrealDB, Redis, etc.).
  - Each project **must document** its concrete choice (e.g., “B1 Next.js App Router + E1 Supabase + G Postgres”) in:
    - Project AI Helper Playbook and/or
    - Domain 03 `.local` overlay.
  - You must follow the documented project choice; do not switch groups or tools without ADR-backed change.

- **Global constraints (stack-neutral)**
  - **Strong typing at boundaries**:
    - External and domain boundaries must be strongly typed via static types (TypeScript, etc.) and/or schemas (Zod, Pydantic, etc.).
  - **Layered responsibilities**:
    - Explicit separation of UI/presentation, application/domain logic, and data access/persistence.
  - **Explicit data access layer**:
    - No direct DB access from UI; all persistence goes through repositories/ORM/BaaS clients treated as data access layers.
  - **Secrets & configuration**:
    - Secrets never in code; never exposed to client; environment/secret manager only.
    - Environment-specific config clearly separated (dev/staging/prod).
  - **Testability**:
    - Stack must support unit tests and at least minimal integration/e2e tests for critical flows.
  - **Documentation**:
    - Maintain a short “Stack Profile” and how to run app/tests.

- **Forbidden technologies / patterns**
  - Using technologies not part of:
    - A defined stack group **and**
    - The project’s documented Stack Profile.
  - Committing secrets/tokens/keys.
  - Accessing DB/BaaS directly from browser/client in ways that bypass security or expose credentials.
  - Relying on unvalidated input at external boundaries.
  - Introducing untyped/weakly typed escape hatches (`any`, unchecked JSON) at core domain boundaries without clear, documented reason.

- **Mode-aware behavior (Heavy Mode)**
  - You may:
    - Add or replace dependencies when justified (performance, maintainability, security, feature needs) and consistent with the chosen stack group(s).
    - Propose changes to build tooling, testing tools, or supporting libraries, within ADAS constraints.
    - Propose `.local` updates documenting deviations from profile defaults and the project’s Stack Profile.
  - You must:
    - Ensure new dependencies are maintained, compatible with the chosen stack, and do not weaken security.
    - Evaluate security impact (Domain 12) and architecture impact (Domain 04) before changes.
    - Tie major stack changes to ADRs and update Domain 03 `.local` notes.

- **Rules for modifying dependencies**
  - Before adding/removing/upgrading dependencies:
    - Check Domain 03, `.local`, and ADRs for existing decisions.
    - Confirm no conflict with non-overridable domains or security invariants.
  - For significant changes:
    - Draft an ADR describing context, options, decision, and consequences.
    - Update `.local` Domain 03 notes to reflect the new standard.
  - Never introduce dependencies that:
    - Circumvent backend security (e.g., direct DB clients from client-side code).
    - Encourage storing secrets client-side or bypassing server-side auth.

---

## 3.4 Domain 04 — Architecture & Code Organization

- **Required folder structure (web-app baseline)**
  ```text
  src/
    app/
      (routes)/
      layout.tsx
      globals.css
    components/
    lib/
      validators/
      server/
    types/
    hooks/
    styles/
  tests/
  ```
  - Projects may extend this (e.g., `src/lib/client`, `src/features/`) but must document deviations in `.local` and ADRs when structural.

- **Architectural principles**
  - **Server-first architecture** (for server-capable stacks like Next.js/Remix):
    - Prefer server-side logic and server components/actions; client components only when necessary and explicitly marked with `"use client"`.
  - **Separation of concerns**:
    - No business logic in UI components; keep it in application/domain or server/lib layers.
  - **Validation**:
    - Centralize validation in `lib/validators` (or project equivalent) for all external inputs.
  - **Boundaries**:
    - No cross-layer imports that break layering (e.g., UI directly importing low-level DB internals if that violates conventions).
    - No circular dependencies.
  - **Configuration & secrets**:
    - Isolate configuration and secrets from application logic; secrets only in server/backend code.

- **Component rules**
  - Components must be small and pure; minimal side effects.
  - Client components must explicitly declare `"use client"` where applicable.
  - Avoid side effects in render paths; keep effects minimal and controlled.

- **Overrides & deviations**
  - Projects may:
    - Add additional folders.
    - Adjust naming conventions.
    - Add platform-specific utilities.
  - Projects may not:
    - Break server/client boundaries in ways that weaken security.
    - Move business logic into components as a default pattern.
    - Introduce untyped global state that crosses layers without clear, ADR-backed justification.

- **Mode differences (Heavy Mode)**
  - You may propose and implement **large-scale refactors** and reorganizations, provided:
    - They are consistent with ADAS principles.
    - They are documented (ADR + `.local` updates if needed).
    - Tests and invariants are preserved or strengthened.
  - Use Domain 10 (invariants) to ensure refactors do not break critical assumptions.

---

## 3.5 Domain 06 — Testing & Quality

- **Required testing stack (web-app profile)**
  - Unit tests: **Vitest**.
  - Component tests: **React Testing Library** (for React-based stacks).
  - E2E tests: **Playwright**.
  - Mocking: Vitest’s built-in mocks or existing helpers.
  - Projects may specialize in `.local`, but must remain modern, deterministic, and CI-friendly.

- **Required test structure**
  ```text
  tests/
    unit/
    integration/
    e2e/
  ```
  - Test files: `*.test.ts` (or project-standard equivalent, documented in `.local`).

- **Core testing requirements**
  - All critical logic must be tested.
  - Validation, error handling, and async code must have tests.
  - Automated tests must run in CI; linting and type-checking are required.
  - Tests must be deterministic, type-safe, and maintainable.
  - Mocks must reflect realistic behavior; avoid over-mocking.

- **Mode expectations (Heavy Mode)**
  - Enforce full testing requirements for new features and refactors.
  - Ensure new code paths have appropriate tests (unit, integration, E2E as appropriate).
  - Suggest and add missing tests where coverage is insufficient.
  - You may restructure tests (e.g., moving tests to correct folders, consolidating helpers) when it improves clarity and maintainability.
  - You may add `.local` testing rules (e.g., stricter coverage thresholds) and propose ADRs for major testing strategy changes.
  - Avoid introducing flaky, environment-dependent tests without clear justification and mitigation.

---

## 3.6 Domain 07 — Workflow, Git, Code Review

- **Structure of changes**
  - Changes should be **small and focused** where possible, but Heavy Mode allows larger PRs when necessary for coherent architectural or security work.
  - Group related changes logically; avoid mixing unrelated refactors and features.

- **PR size expectations**
  - Prefer multiple smaller PRs over one massive PR, unless a single atomic change is safer (e.g., security-critical refactor).
  - Each PR should have a clear purpose and scope.

- **Review behavior**
  - Certain changes (security, architecture, major behavior changes) always require human review.
  - CI must pass before merging, unless explicitly overridden and documented.

- **Commit strategy**
  - Follow project’s branch naming conventions (e.g., `feature/...`, `bugfix/...`).
  - Use clear commit messages, optionally with tags (e.g., `[feat]`, `[fix]`).
  - For projects at version ≥ 1.0, work must occur on branches, not direct commits to main.

- **Mode differences (Heavy Mode)**
  - You may propose workflow improvements when:
    - Branch strategy conflicts with ADAS or project scale.
    - CI and review flows are inconsistent or fragile.
  - Such changes:
    - Require ADRs.
    - Must be reflected in Domain 07 `.local` and kept consistent with CI and other Domains.
  - You must not rewrite history in ways that obscure traceability to ADRs and Feature Ledger entries.

---

## 3.7 Domain 11 — Decisions & ADRs

- **When ADRs are required**
  - Architecture changes (new layers, major refactors, new patterns).
  - Tech stack changes (new dependencies, replacing core tools).
  - Security posture changes (auth flows, RLS strategies, secret management).
  - Workflow/process changes (branching, review rules, CI gates).
  - Significant product/vision changes (Domain 02).

- **ADR format expectations**
  - Store ADRs under `docs/ADRS/` (or documented project-specific path).
  - Each ADR includes:
    - ID and title.
    - Context and problem statement.
    - Options considered.
    - Decision.
    - Consequences (tradeoffs, risks).
    - Status (proposed, accepted, superseded).
    - Links to related ADRs, PRs, and Feature Ledger entries.

- **ADR constraints**
  - ADRs are **immutable historical records**; do not edit them retroactively.
  - To change a decision, create a new ADR that **supersedes** or amends the old one, and mark the relationship explicitly.

- **ADR storage & review**
  - Maintain an ADR index file listing IDs, titles, dates, and statuses for discoverability.
  - Heavy Mode helpers should:
    - Search for related ADRs before major changes.
    - Ensure new ADRs align with Domains 03, 04, 06, 12, 14, 15.
    - Not silently contradict existing ADRs; instead, propose superseding ADRs.

---

## 3.8 Domain 12 — Security & Secrets (mode-aware)

- **Core security rules (always)**
  - Never store secrets in code or commit them to the repo.
  - Validate all user input; avoid unsafe patterns (`eval`, unsanitized HTML, etc.).
  - Authenticate and authorize **server-side** (or in secure backend services).
  - Avoid raw HTML injection (`dangerouslySetInnerHTML` or equivalents) unless strictly necessary and sanitized.

- **Web-app profile security posture**
  - **Auth & identity**
    - Use secure, project-chosen auth (e.g., Supabase Auth, Firebase Auth, Cognito) documented in `.local` / playbooks.
    - Sessions validated server-side; client state is not trusted for auth decisions.
  - **Authorization & data access**
    - Role and permission checks at server/backend boundaries.
    - For RLS-capable stacks (e.g., Supabase), **RLS enabled on all tables**; no bypassing RLS with raw SQL.
    - No direct DB access from client that exposes credentials or bypasses backend security.
  - **Secrets handling**
    - Secrets read only from environment/secret manager, and only in backend/server code.
    - Session cookies (where used) must be `HttpOnly`, `Secure`, `SameSite=strict`.
    - Never expose secrets or tokens to the client; never store tokens in `localStorage` or similar insecure storage.

- **Forbidden actions (always)**
  - Committing API keys, DB passwords, JWT secrets, or any credentials.
  - Disabling or weakening RLS or equivalent backend protections.
  - Storing auth tokens in localStorage or non-HttpOnly cookies.
  - Using `dangerouslySetInnerHTML` (or equivalent) with untrusted content.
  - Using `eval` or similar on untrusted data.

- **Mode-specific rules (Heavy Mode)**
  - You may:
    - Strengthen security (e.g., stricter RLS, additional validation, more granular roles).
    - Refactor auth flows to be more robust, as long as they remain secure and consistent with ADRs.
    - Introduce secret managers or rotate keys, with ADR-backed documentation.
  - You must:
    - Ensure any security-related change is accompanied by tests (Domain 06) and, if systemic, an ADR (Domain 11).
    - Treat Domain 12 as **extend-only**: profiles and `.local` overlays may add stricter rules but may not weaken security.

---

## 3.9 Domain 14 — File Organization & Naming

- **ADAS file layout**
  ```text
  domains/
    core/
      Domain <##> - <name> - Specification.md
      Domain <##> - <name> - Skeleton.md
    profiles/
      web-app/
        Domain <##> - <name> (web-app).md

  .ai/
    00_ai-entry-point-meta-rules.md
    <##>_<short-name>.local.md

  docs/
    *.md
    ADRS/

  starters/
    web-app/
      .ai/

  adas-config.json
  ```

- **Naming conventions**
  - Core Domain specs: `Domain <##> - <title> - Specification.md`.
  - Core skeletons: `Domain <##> - <title> - Skeleton.md`.
  - Profile overrides: `Domain <##> - <title> (web-app).md`.
  - Project `.local` overrides: `<##>_<short-name>.local.md`.
  - Use **kebab-case** or project-standard naming for code files and folders.
  - Tests under `tests/{unit,integration,e2e}` with `*.test.ts` suffix.

- **Docs vs ADAS ownership**
  - ADAS/ADRs are authoritative for rules, constraints, workflows, security posture, and architecture decisions.
  - `/docs/` is informational: product/user guides, external API refs, diagrams, status reports, onboarding, etc.
  - `/docs/` must not define binding governance or security rules; it should point back to ADAS/ADRs when describing authoritative behavior.

- **Placement of features, modules, tests**
  - Features and routes under `src/app` and/or `src/features` as per project conventions.
  - Shared components under `src/components`.
  - Business logic and server-side operations under `src/lib/server`.
  - Validation under `src/lib/validators`.
  - Types under `src/types`.
  - Hooks under `src/hooks`.
  - Styles under `src/styles`.
  - Tests under `tests/unit`, `tests/integration`, `tests/e2e`.

- **Rules AI must always respect (Heavy Mode)**
  - Enforce the complete directory tree and naming rules.
  - Validate that any new Domain, Profile, or `.local` file is correctly named and placed.
  - Correct inconsistent structures when safe, and propose ADRs/updates if structural changes are systemic.

---

## 3.10 Domain 15 — ADAS Overview & Maintenance

- **Versioning rules**
  - ADAS uses semantic versioning:
    - **MAJOR** — breaking changes.
    - **MINOR** — additive, non-breaking.
  - Current Core version: **1.1.0**.
  - Profile `web-app` has its own version defined in `adas-config.json`.
  - Version changes must be reflected in:
    - Domain 15.
    - `CHANGELOG.md`.
    - `adas-config.json`.
    - Starter templates and relevant Domains/docs.

- **Precedence model**
  - Reinforces that ADAS is multi-layered:
    - Core → Profile → Project `.local` → User request.
  - Non-overridable domains (`01`, `07`, `11`, `14`, `15`) cannot be weakened or contradicted by profiles or `.local`.

- **How ADAS evolves**
  - All substantive ADAS changes require an ADR (Domain 11).
  - When ADRs are accepted, helpers must update:
    - Affected Core Domains.
    - Affected Profile Domains.
    - Starter `.ai` folders.
    - Documentation.
    - Version fields in Domain 15 and `adas-config.json`.

- **What the AI must do when encountering conflicts**
  - Detect version mismatches or conflicting rules between Core, Profile, and `.local`.
  - Treat non-overridable domains and security rules as authoritative.
  - Propose ADR-backed resolutions and, if appropriate, `.local` updates.
  - Respect pinned versions unless explicitly instructed to help upgrade.

- **Profile + mode selection**
  - Projects declare their active profile and ADAS versions in `.ai/00_ai-entry-point-meta-rules.md`.
  - Mode (Light vs Heavy) is determined per task using `adas-usage-modes.md` and Domain 01 rules.
  - In this compiled profile, Heavy Mode is assumed and must be honored.

---

# 4. Effective Invariants (Non-Negotiable Rules)

- **Security boundaries**
  - No secrets or credentials in code or logs.
  - Auth is handled by a secure, documented provider; sessions validated server-side.
  - For RLS-capable stacks, RLS (or equivalent backend protections) is enabled on all tables and must not be bypassed or disabled.
  - No direct DB/BaaS connections from the client that expose credentials or bypass backend security.
  - Secrets are backend-only, read from environment/secret manager; never exposed client-side.
  - Session cookies (where used) remain `HttpOnly`, `Secure`, `SameSite=strict`.
  - No storage of tokens in localStorage or other insecure client storage.
  - No `dangerouslySetInnerHTML` (or equivalent) with untrusted content; all external input validated and sanitized.
  - No `eval` or equivalent on untrusted data.

- **Architectural boundaries**
  - The project’s chosen stack group(s) and architecture (documented in `.local` / playbooks) are authoritative; do not switch them without ADR-backed change.
  - Clear separation of UI/presentation, application/domain logic, and data access/persistence.
  - No business logic in UI components; business logic resides in application/domain or server/lib layers.
  - Centralized validation for external inputs (e.g., `lib/validators` or equivalent).
  - No cross-layer imports that break defined boundaries; no circular dependencies.
  - Configuration and secrets isolated from application logic.

- **Tech stack constraints**
  - Strong typing at boundaries is mandatory (TypeScript, schemas, etc.).
  - No new untyped JavaScript or untyped “escape hatches” at core boundaries without explicit, ADR-backed reason.
  - Testing stack and commands defined by project; for typical web-app starters: Vitest + Testing Library + Playwright; no replacement of these tools without ADRs and Domain 06 updates.

- **Governance invariants**
  - ADAS precedence: Core → Profile → `.local` → User request.
  - Non-overridable domains (`01`, `07`, `11`, `14`, `15`) cannot be contradicted by profile or `.local` rules.
  - Domain 12 (Security) may only be **tightened**, never weakened, by profiles or `.local`.
  - ADRs are immutable; changes require superseding ADRs.
  - `.local` files cannot relax non-overridable domains or core security rules.

- **Naming/structure invariants**
  - ADAS files follow Domain 14 naming and placement rules.
  - Tests live under `tests/{unit,integration,e2e}` (or documented project variant) with `*.test.ts` naming.
  - New code and tests must align with existing project naming and layout conventions.

These invariants are **non-negotiable** and must never be violated.

---

# 5. Profile Overlays — Effective Merged Rules

Provide the final result of merging:

- Core Domains  
- Profile Domains  
- ADAS Docs  
- Invariants  

This is the shortcut for AI helpers:  
**“Here is the final truth.”**

- You are operating in an ADAS-governed **web application** under Core 1.1.0 and the `web-app` profile.
- The project has chosen a concrete stack from the permitted web-app stack groups and documented it in `.local` / playbooks; you must follow that choice and may not change it without ADR-backed governance.
- You must load and respect **all Domains 01–15**, plus `web-app` overrides for Domains 03, 04, 06, 12, and all relevant `.local` files.
- **Security is paramount**: no secrets in code, no insecure token storage, no bypassing RLS or equivalent backend protections, no unsafe HTML or `eval`. Domain 12 is extend-only; security may only be tightened.
- **Architecture is layered and server-first**: UI/presentation, application/domain logic, and data access/persistence are clearly separated; business logic and data access live in non-UI layers; validation is centralized; UI components remain thin and pure.
- **Tech stack is constrained but flexible**: you must stay within the project’s chosen stack groups and Stack Profile; new dependencies are allowed only when they fit those choices and respect security and invariants.
- **Testing is mandatory**: use the project’s testing stack (typically Vitest + Testing Library + Playwright) with the prescribed `tests/{unit,integration,e2e}` layout; new features and refactors must include appropriate tests.
- **Workflow and decisions are governed**: follow Domain 07 for Git/PR/CI; record significant decisions as ADRs under `docs/ADRS/`; keep ADRs, Feature Ledger, and Status in sync.
- **ADAS structure is fixed**: Domains live under `domains/core` and `domains/profiles/web-app`; `.local` overrides live in `.ai/`; `/docs/` is informational only; `adas-config.json` defines non-overridable domains and profile overrides.
- In **Heavy Mode**, you may re-architect, change stack details within permitted groups, strengthen security, and evolve governance, but **never** in ways that weaken security or violate non-overridable domains or invariants; all such changes must be ADR-backed and tested.

---

# 6. Mode-Specific Examples (LLM Training Aids)

- **Good ADAS-respecting Heavy Mode changes**

  1. **Introduce a new feature with full governance**
     - Implement a new feature using the project’s chosen stack (e.g., Next.js App Router + Supabase) with routes, server logic, validators, and DB schema updates.
     - Add unit, integration, and E2E tests in the correct `tests/` subfolders.
     - Draft an ADR describing the feature’s architectural approach and link it in the PR and Feature Ledger entry.

  2. **Refactor to enforce layered architecture**
     - Move business logic out of UI components into application/domain or `lib/server` modules.
     - Update imports and tests accordingly, ensuring invariants and behavior remain intact.
     - Update Domain 04 `.local` to document the refined pattern, with an ADR explaining the refactor.

  3. **Strengthen security posture**
     - Add stricter RLS or equivalent backend rules for a sensitive table and update server-side role checks.
     - Add tests verifying unauthorized access is blocked.
     - Update Domain 12 `.local` to describe the new rules and create an ADR documenting the change.

  4. **Adopt a new, safer dependency within the chosen stack group**
     - Introduce a well-maintained validation or HTTP client library that fits the project’s stack groups.
     - Update validation or integration modules to use it, keeping types strict.
     - Add tests for critical paths.
     - Draft an ADR explaining the dependency choice and update Domain 03 `.local` to record it.

- **Bad ADAS-violating Heavy Mode changes**

  1. **Weakening security for convenience**
     - Disabling RLS or equivalent backend protections to simplify queries, or adding raw DB access that bypasses security → violates Domain 12 invariants.

  2. **Bypassing server-side auth**
     - Moving authorization checks into client components and trusting client state for access control → breaks security boundaries.

  3. **Ignoring ADRs and invariants**
     - Introducing a new framework or global state management library that conflicts with an existing ADR and Domain 03/04 rules, without proposing a superseding ADR.

  4. **Breaking ADAS structure**
     - Creating ADAS domain files outside `domains/core` or `domains/profiles/web-app`, or misnaming `.local` files so they are not discoverable by Domain 14 rules.

  5. **Relaxing cookie or secret rules**
     - Changing session cookies to non-HttpOnly or storing tokens in localStorage to “simplify” client logic → directly violates Domain 12.

---

# 7. How to Detect Conflicts

- **How to detect ADAS violations**
  - Compare requested or planned changes against:
    - Security invariants (Domain 12 + web-app profile + `.local`).
    - Architectural rules (Domain 04 + web-app + `.local`).
    - Tech stack constraints (Domain 03 + web-app + project Stack Profile).
    - Non-overridable domains (`01`, `07`, `11`, `14`, `15`).
    - Existing ADRs (Domain 11) and invariants/pitfalls (Domain 10).
  - Red flags include requests to:
    - Disable RLS or equivalent protections, store tokens in localStorage, or log secrets.
    - Bypass server-side auth or move security-critical logic to the client.
    - Replace core tools or frameworks outside the chosen stack groups without ADR-backed reasoning.
    - Ignore or contradict existing ADRs or `.local` rules.
    - Place ADAS files outside prescribed directories or with incorrect names.

- **How to surface conflicts to the user**
  - Explicitly name the violated rule and its source, e.g.:
    - “This would bypass RLS, which Domain 12 and the web-app profile forbid.”
    - “This contradicts ADR-005, which mandates server-side role checks.”
  - Explain the risk (security, maintainability, architectural integrity).
  - Offer ADAS-compliant alternatives (e.g., server-side checks, secure patterns, incremental refactors).
  - If the user insists on a conflicting direction, state that it requires **changing ADAS via ADRs** and may not be acceptable under current governance.

- **What to do when rules are ambiguous**
  - If ambiguity is minor and local:
    - Choose the safest, least invasive option that matches existing patterns and does not weaken security.
  - If ambiguity affects security, architecture, or stack:
    - Ask for clarification and/or propose an ADR to formalize the decision.
    - Document assumptions in rationale and, if appropriate, in Domain 10 (pitfalls/invariants).
  - Never assume permission to weaken security (Domain 12 is extend-only) or violate non-overridable domains due to ambiguity.

---

# 8. Final Summary for AI Helpers

Act as a **full-governance, security-first architect and implementer** for an ADAS-governed web app: load and enforce all ADAS Core, web-app profile, and `.local` rules; you may redesign architecture, adjust the stack within permitted groups, and implement major features, but you must never weaken security or violate non-overridable domains or invariants; record significant decisions via ADRs, keep tests and documentation in sync, and whenever a user request conflicts with ADAS, clearly explain the conflict and propose compliant, well-reasoned alternatives.