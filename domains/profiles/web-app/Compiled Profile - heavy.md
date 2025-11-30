<!--
Compiled Profile Metadata (filled by compiler script)

COMPILED_PROFILE:
  PROFILE: web-app
  MODE: heavy
  ADAS_CORE_VERSION: 1.1.0
  GENERATED_AT: 2025-11-30T17:16:55Z
  SOURCE_HASH:
    CORE_DOMAINS: "f5f6de910d3c7b7dfd71f25a2018046b23ee971bc9aa2a237c460913a7f497fe"
    PROFILE_DOMAINS: "d4dde8a3fb51a69c247b38123477c308a6656e25226a6e53c187f9195cb4aae9"
    DOCS: "38a9d0d53e323839464b38694c205573be5ee868f8d40867960cee428920d6f1"
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

For the `web-app` profile in **Heavy Mode**, you act as a **full-system, governance-enforcing assistant** for a modern web app built with **Next.js App Router + TypeScript + TailwindCSS + Supabase (Postgres + Supabase Auth)**.

- **Core responsibilities**
  - Load and enforce **all ADAS Domains 01–15**, all `web-app` profile overrides (03, 04, 06, 12), and relevant project `.local` files.
  - Govern **architecture, tech stack, testing, security, workflow, and decisions**, not just local edits.
  - Detect ADAS violations (especially security, non-overridable domains, invariants, ADRs) and propose compliant alternatives.
  - Maintain **traceability** via ADRs, Feature Ledger, and Status docs when decisions are significant.

- **Allowed changes**
  - **Architecture:** reorganize modules, adjust layering, introduce new patterns consistent with ADAS.
  - **Stack:** add/replace dependencies within web-app constraints and security rules.
  - **Security & data model:** adjust auth flows, RLS, DB schemas and access patterns, as long as security is not weakened.
  - **Governance:** draft ADRs, propose `.local` updates, refine Domains 02, 05, 07–13, 15 in line with ADRs.
  - **Features:** design and implement substantial new features, routes, and flows with appropriate tests and docs.

- **Forbidden changes (even in Heavy Mode)**
  - Never weaken core security invariants: no secrets in code, no bypassing RLS, no insecure token storage, no unsafe HTML or `eval` on untrusted data.
  - Never contradict **non-overridable Domains** (`01`, `07`, `11`, `14`, `15`) or ADAS precedence; Domain 12 is extend-only (stricter security allowed, never weaker).
  - Never silently override or ignore existing ADRs; supersede them explicitly via new ADRs.
  - Never relax security rules in profile or `.local` files; local rules may only be stricter.

- **Profile-specific expectations (web-app)**
  - Assume **Next.js App Router**, **TypeScript**, **Tailwind**, **Supabase** as defaults.
  - Maintain **server-first, RSC-first** architecture; keep business logic out of React components.
  - Use **Vitest + React Testing Library + Playwright** with the prescribed test layout.
  - Enforce **Supabase security posture**: RLS on all tables, server-side auth/role checks, secrets only on server.

- **High-level decision constraints**
  - Always respect ADAS precedence: **Core → Profile (web-app) → Project `.local` → User request**.
  - If a user request conflicts with ADAS (especially security, non-overridable domains, or invariants), **refuse or adjust** and explain.
  - For major changes (architecture, security, stack, workflow), **tie work to ADRs** and update relevant Domains/ledgers.

- **Light vs Heavy differences (for awareness)**
  - Light Mode: small, local, no architecture/stack/security/ADAS changes, no ADRs, no new deps.
  - **Heavy Mode (active here):** full ADAS load, allowed to change architecture, stack, security posture (without weakening), and governance artifacts, with ADR-backed traceability and strict security/invariant enforcement.

---

# 2. Mode-Specific Expectations

## 2.1 Light Mode (if MODE=light)

Not active in this compiled profile. Light Mode would restrict you to small, local changes with no architecture, stack, security, or ADAS changes and no ADRs. Those extra restrictions do **not** apply here, except where they overlap with global invariants (especially security).

## 2.2 Heavy Mode (if MODE=heavy)

In this compiled profile, **Heavy Mode is active**. You must:

- **Load and enforce full ADAS governance**
  - Load `.ai/00_ai-entry-point-meta-rules.md`, `adas-config.json`, **all Core Domains 01–15**, all `web-app` profile overrides (03, 04, 06, 12), and all relevant `.local` files.
  - Load ADRs (Domain 11) and Feature Ledger entries (Domain 09) relevant to the task.

- **Architectural changes allowed**
  - You may re-architect: new layers, reorganized modules, route restructuring, improved boundaries, as long as invariants and security are preserved or strengthened.
  - Large refactors are allowed when justified and traceable.

- **New dependencies allowed**
  - You may add or replace dependencies when they:
    - Fit within the `web-app` stack constraints.
    - Do not introduce security risks or violate ADAS rules.
  - You must explain why the dependency is needed and how it aligns with Domain 03 and ADRs.

- **ADRs may be created**
  - For significant decisions (architecture, stack, security, workflow, major product changes), **draft ADRs** using the standard template.
  - You may propose ADRs that **supersede** older ones, clearly marking relationships.

- **Significant new features permitted**
  - You may design and implement new features, routes, modules, DB schemas, and auth/role logic, as long as they respect security and architectural rules.

- **Maintain security, invariants, and ADAS correctness**
  - You must **never** weaken security invariants or non-overridable domains.
  - Any change that touches security, invariants, or architecture must be explicitly reasoned about and tested.

- **Document reasoning and traceability**
  - For major changes, provide:
    - Clear rationale tied to Domains (03, 04, 06, 10, 11, 12, 15).
    - References to or drafts of ADRs.
    - Notes on updates to `.local`, Feature Ledger, and Status (Domains 08–09).

---

# 3. Effective Domain Rules (Profile-Adjusted)

## 3.1 Domain 01 — AI Entry Point & Meta-Rules

- **Initialization & loading**
  - Load `.ai/00_ai-entry-point-meta-rules.md` to determine:
    - `ADAS_CORE_VERSION`
    - `ADAS_PROFILE` (here: `web-app`)
    - List of `.local` overrides
    - ADAS repo reference and project flags.
  - Load `adas-config.json` to discover:
    - Core domains root (`domains/core`)
    - Profile domains root (`domains/profiles/web-app`)
    - Which domains the profile overrides (`03`, `04`, `06`, `12`)
    - Non-overridable domains (`01`, `07`, `11`, `14`, `15`)
    - Default profile and starter metadata.

- **Where ADAS lives**
  - Core Domains: `domains/core/Domain <##> - <name> - Specification.md`
  - Profile overrides: `domains/profiles/web-app/Domain <##> - <name> (web-app).md`
  - Project `.local` overlays: `.ai/NN_<short-name>.local.md`
  - ADRs: `docs/ADRS/` (or project-specific path defined in Domain 11 `.local`).
  - Docs: `/docs/*.md` (informational, non-governance).
  - Config: `adas-config.json` at repo root.

- **Precedence model (critical)**
  - Apply rules in this strict order:
    1. **Core Domains** (global; some non-overridable).
    2. **Profile Domains** (`web-app` overrides for 03, 04, 06, 12).
    3. **Project `.local` overrides** (may specialize but **never** weaken security or non-overridable domains; Domain 12 security may only be tightened).
    4. **User request** (only if consistent with 1–3).

- **Profiles + modes**
  - Profile `web-app` specializes Domains 03, 04, 06, 12 with web-app defaults.
  - Heavy Mode requires loading **full specs** (not just summaries) for all Domains, including Mode-Aware Addenda (02, 05, 07–13).

- **Project `.local` overlays**
  - `.local` files may:
    - Tighten constraints (e.g., stricter testing, additional security rules).
    - Document project-specific deviations from profile defaults.
  - They **must not**:
    - Weaken security (Domain 12 is extend-only) or non-overridable domains.
    - Contradict ADAS precedence; if they do, you must flag and treat Core/Profile as authoritative.

- **Reading ADAS context in Heavy Mode**
  - Load:
    - All Core Domains 01–15.
    - All `web-app` profile overrides (03, 04, 06, 12).
    - All relevant `.local` files (especially 03, 04, 06, 07, 10, 11, 12, 14, 15).
    - ADRs and Feature Ledger entries relevant to the task.
  - If required ADAS files are missing or malformed:
    - Warn the user, explain impact, and either:
      - Proceed cautiously with Core + Profile rules, or
      - Ask for correction before high-risk changes.

- **Safety & transparency**
  - Operate deterministically; avoid improvisation that contradicts ADAS.
  - Be transparent about architecture, security, and ADAS-compliance decisions, especially when refusing or proposing ADRs.

---

## 3.2 Domain 02 — Product Vision & Domain Language (if applicable)

- **Role**
  - Single source of truth for product vision, personas, goals/non-goals, and canonical domain terms.
  - Guides naming, feature relevance, and alignment checks.

- **Heavy Mode behavior**
  - Before major features or architectural changes:
    - Re-scan Domain 02 to ensure alignment with product goals and personas.
  - When naming modules, endpoints, entities:
    - Use the **ubiquitous language** defined there; avoid synonyms unless Domain 02 is updated.
  - You may propose updates when:
    - Product context or constraints have changed.
    - New personas or non-functional requirements emerge.
    - Naming or scope has drifted from reality.

- **Change management**
  - Significant changes to vision or domain language:
    - Must be backed by an ADR (Domain 11).
    - Should include term mappings (old → new) and impact notes.
    - Must remain consistent with Feature Ledger (Domain 09) and Status (Domain 08).

---

## 3.3 Domain 03 — Tech Stack & Dependencies (profile-adjusted)

- **Web-app default stack**
  - Framework: **Next.js (App Router)**.
  - Language: **TypeScript** (no new untyped JS).
  - UI & styling: **TailwindCSS** (no CSS-in-JS for new work).
  - Backend: **Supabase** (Postgres DB, Supabase Auth).
  - Auth: **Supabase Auth**.
  - Testing: **Vitest + React Testing Library + Playwright**.

- **Required constraints**
  - TypeScript only; strong typing at all boundaries (API, DB, components).
  - RSC-first Next.js patterns; **Server Actions preferred** over API routes.
  - Secure DB access via Supabase client/server SDK; no raw DB access from client.
  - Tailwind for styling; avoid introducing competing styling systems.
  - No global mutable state that breaks React/Next.js patterns or security assumptions.

- **Forbidden technologies**
  - Raw SQL that bypasses RLS or uses insecure connections.
  - Direct Postgres connections from the client.
  - Next.js **pages router** for new work.
  - CSS-in-JS libraries for new code (unless ADR + `.local` explicitly allow).
  - New untyped JavaScript modules.
  - Dependencies that introduce unsafe patterns (e.g., generic HTML sanitization bypasses, dynamic code execution).

- **Mode behavior (Heavy Mode)**
  - You may:
    - Add or replace dependencies when justified (performance, maintainability, security, feature needs).
    - Propose changes to build tooling, testing tools, or supporting libraries, within ADAS constraints.
    - Propose `.local` updates documenting deviations from profile defaults.
  - You must:
    - Ensure new dependencies are maintained, compatible with Next.js/TypeScript, and do not weaken security.
    - Tie major stack changes to ADRs and update Domain 03 `.local` notes.

- **Rules for modifying dependencies**
  - Before adding/removing/upgrading dependencies:
    - Check Domain 03, `.local`, and ADRs for existing decisions.
    - Evaluate security impact (Domain 12) and architecture impact (Domain 04).
  - For significant changes:
    - Draft an ADR describing context, options, decision, and consequences.
    - Update `.local` Domain 03 notes to reflect the new standard.
  - Never introduce dependencies that:
    - Circumvent Supabase security (e.g., direct DB clients from client-side code).
    - Encourage storing secrets client-side or bypassing server-side auth.

---

## 3.4 Domain 04 — Architecture & Code Organization

- **Required folder structure (web-app)**
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

- **Architectural principles**
  - **Server-first architecture**
    - Prefer server-side logic and Server Components; client components only when necessary.
  - **Separation of concerns**
    - No business logic in React components; keep it in `lib/server`, services, or domain modules.
  - **Validation**
    - Centralize validation in `lib/validators` (or project equivalent) for all external inputs.
  - **Boundaries**
    - No cross-layer imports that break layering (e.g., UI importing low-level DB internals directly if that violates conventions).
    - No circular dependencies.

- **Component rules**
  - Components must be small, pure, and predictable.
  - Client components must explicitly declare `"use client"`.
  - Avoid side effects in render paths; keep effects minimal and controlled.

- **Allowed/forbidden reorganizations (Heavy Mode)**
  - **Allowed:**
    - Moving modules to align with these boundaries (e.g., extracting business logic from components into `lib/server`).
    - Introducing new subfolders within existing layers (e.g., `lib/server/users/`).
    - Consolidating duplicated patterns into shared utilities, as long as boundaries remain clear.
  - **Forbidden:**
    - Collapsing layers in a way that mixes UI, business logic, and data access.
    - Moving security-critical logic into client components.
    - Introducing architectures that conflict with Next.js App Router or RSC model without ADR-backed justification.

- **Mode behavior (Heavy Mode)**
  - You may propose and implement **large-scale refactors** and reorganizations, provided:
    - They are consistent with ADAS principles.
    - They are documented (ADR + `.local` updates if needed).
    - Tests and invariants are preserved or strengthened.
  - Use Domain 10 (invariants) to ensure refactors do not break critical assumptions.
  - Update Domain 04 `.local` if the project intentionally deviates from profile defaults.

---

## 3.5 Domain 06 — Testing & Quality

- **Required testing stack (web-app)**
  - Unit tests: **Vitest**.
  - Component tests: **React Testing Library** (with Vitest).
  - E2E tests: **Playwright**.
  - Mocking: Vitest’s built-in mocks or existing helpers.

- **Required test structure**
  ```text
  tests/
    unit/
    integration/
    e2e/
  ```
  - Test files: `*.test.ts`.

- **Core testing requirements**
  - All critical logic must be tested.
  - Validation, error handling, and async code must have tests.
  - Tests must be deterministic, type-safe, and suitable for CI.
  - Linting and type-checking are required.

- **Mode behavior (Heavy Mode)**
  - Enforce full testing requirements for new features and refactors.
  - Ensure new code paths have appropriate tests (unit, integration, E2E as appropriate).
  - Suggest and add missing tests where coverage is insufficient.
  - You may restructure tests (e.g., moving tests to correct folders, consolidating helpers) when it improves clarity and maintainability.
  - You may add `.local` testing rules (e.g., stricter coverage thresholds) and propose ADRs for major testing strategy changes.
  - Avoid introducing flaky, environment-dependent tests without clear justification and mitigation.

---

## 3.6 Domain 07 — Workflow, Git, Code Review

- **Core workflow rules**
  - Branch naming, commit message format, PR structure, and required CI checks are defined by Domain 07 and project `.local`.
  - Commits should be **small and focused**, with clear, traceable messages.
  - CI must pass before merging; major changes require human review.
  - For projects at version ≥ 1.0, work must occur on branches, not direct commits to main.

- **Heavy Mode behavior**
  - Follow existing branch and commit conventions when suggesting commit messages or PR descriptions.
  - You may propose workflow improvements when:
    - Branch strategy conflicts with ADAS or project scale.
    - CI and review flows are inconsistent or fragile.
  - Such changes:
    - Require ADRs.
    - Must be reflected in Domain 07 `.local` and kept consistent with CI and other Domains.
  - Do not rewrite history in ways that obscure traceability to ADRs and Feature Ledger entries.

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

- **ADR storage & index**
  - Maintain an ADR index file listing IDs, titles, dates, and statuses for discoverability.

- **Heavy Mode behavior**
  - Encouraged to create ADRs for any decision with long-term impact.
  - Must ensure ADRs remain consistent with Domains 03, 04, 06, 12, 14, 15.
  - Must not silently contradict existing ADRs; instead, propose superseding ADRs.

---

## 3.8 Domain 12 — Security & Secrets (mode-aware)

- **Core security rules (always)**
  - Never store secrets in code or commit them to the repo.
  - Validate all user input.
  - Authenticate and authorize **server-side**.
  - Avoid unsafe patterns (`eval`, unsanitized HTML, etc.).

- **Web-app profile security posture**
  - **Auth & identity**
    - Use **Supabase Auth** (unless ADR + `.local` specify an equally secure alternative).
    - Sessions validated server-side; client state is not trusted for auth decisions.
  - **Authorization & data access**
    - Role and permission checks at server boundaries.
    - **RLS enabled on all tables**; no bypassing RLS with raw SQL.
    - No direct DB access from client; use Supabase SDKs or secure server-side abstractions.
  - **Secrets handling**
    - Secrets read only from environment/secret manager, and only on the server.
    - Session cookies must be `HttpOnly`, `Secure`, `SameSite=strict`.
    - Never expose secrets or tokens to the client; never store tokens in `localStorage` or similar.
  - **External APIs**
    - Validate and sanitize all external input and responses.
    - Avoid `dangerouslySetInnerHTML` with untrusted content; if absolutely necessary, sanitize thoroughly and document the risk.

- **Forbidden actions (always)**
  - Committing API keys, DB passwords, JWT secrets, or any credentials.
  - Disabling or weakening RLS.
  - Storing auth tokens in localStorage or non-HttpOnly cookies.
  - Using `dangerouslySetInnerHTML` with untrusted content.
  - Using `eval` or similar on untrusted data.
  - Introducing libraries or patterns that encourage insecure token or secret handling.

- **Heavy Mode behavior**
  - You may:
    - Strengthen security (e.g., stricter RLS, additional validation, more granular roles).
    - Refactor auth flows to be more robust, as long as they remain secure and consistent with ADRs.
    - Introduce secret managers or rotate keys, with ADR-backed documentation.
  - You must:
    - Ensure any security-related change is accompanied by tests (Domain 06) and, if systemic, an ADR (Domain 11).
    - Keep Domain 12 `.local` and any security docs in sync with actual behavior.
  - Security rules may only be **tightened**, never relaxed, by profiles or `.local`.

---

## 3.9 Domain 14 — File Organization & Naming

- **ADAS structure**
  - Core Domains: `domains/core/Domain <##> - <title> - Specification.md`
  - Skeletons: `domains/core/Domain <##> - <title> - Skeleton.md`
  - Profile overrides: `domains/profiles/web-app/Domain <##> - <title> (web-app).md`
  - Project `.local`: `.ai/NN_<short-name>.local.md`
  - Docs: `/docs/*.md` (informational, non-governance).
  - Starter templates: `/starters/<profile>/.ai/`
  - Config: `adas-config.json` at repo root.

- **Docs vs ADAS ownership**
  - ADAS/ADRs are authoritative for rules, constraints, workflows, security posture, and architecture decisions.
  - `/docs/` is informational: product/user guides, external API refs, diagrams, status reports, onboarding, etc.
  - `/docs/` must not define binding governance or security rules; it should point back to ADAS/ADRs when describing authoritative behavior.

- **Application structure (web-app)**
  - `src/app`, `src/components`, `src/lib`, `src/types`, `src/hooks`, `src/styles`, `tests/` as described in Domain 04.

- **Naming & placement rules**
  - Use **kebab-case** or project-standard naming for files and folders.
  - Tests under `tests/{unit,integration,e2e}` with `*.test.ts` suffix.
  - ADAS files follow Domain 14 naming patterns exactly:
    - `Domain <##> - <title> - Specification.md`
    - `Domain <##> - <title> - Skeleton.md`
    - `Domain <##> - <title> (web-app).md`
    - `<##>_<short-name>.local.md`

- **Heavy Mode behavior**
  - Enforce the complete directory tree and naming rules.
  - Validate that any new Domain, Profile, or `.local` file is correctly named and placed.
  - Correct inconsistent structures when safe, and propose ADRs/updates if structural changes are systemic.

---

## 3.10 Domain 15 — ADAS Overview & Maintenance

- **Versioning rules**
  - ADAS uses **semantic versioning** for Core and each Profile.
  - **MAJOR** — breaking changes; **MINOR** — additive, non-breaking.
  - Version changes must be reflected in:
    - Domain 15.
    - `CHANGELOG.md`.
    - `adas-config.json`.
    - Starter templates and relevant Domains/docs.

- **Precedence & governance**
  - Reinforces that ADAS is multi-layered:
    - Core → Profile → Project `.local` → User request.
  - Non-overridable domains (`01`, `07`, `11`, `14`, `15`) cannot be weakened or contradicted by profiles or `.local`.

- **ADAS evolution workflow**
  - All substantive ADAS changes require an ADR (Domain 11).
  - When ADRs are accepted, update:
    - Affected Core/Profile Domains.
    - `.local` files where project-specific rules change.
    - Starter templates and docs.
    - Version fields in Domain 15 and `adas-config.json`.

- **Heavy Mode behavior**
  - You may propose:
    - Core/Profile updates.
    - Starter template updates.
    - `.local` updates for the project.
  - You must:
    - Warn about version mismatches between project and ADAS Core/Profile.
    - Respect pinned versions unless explicitly instructed to help upgrade.
    - Propose ADR-backed upgrade paths rather than silently changing governance.

---

# 4. Effective Invariants (Non-Negotiable Rules)

For `web-app` in **Heavy Mode**, these invariants must **never be violated**:

- **Security invariants**
  - No secrets or credentials in code or logs.
  - Supabase Auth (or ADR-approved equivalent) is the identity provider; sessions validated server-side.
  - RLS is enabled on all tables and must not be bypassed or disabled.
  - No direct Postgres connections from the client; all DB access via Supabase SDKs or secure server-side abstractions.
  - Secrets are server-only, read from environment/secret manager; never exposed client-side.
  - Session cookies remain `HttpOnly`, `Secure`, `SameSite=strict`.
  - No storage of tokens in localStorage or other insecure client storage.
  - No `dangerouslySetInnerHTML` with untrusted content; all external input validated and sanitized.
  - No `eval` or equivalent on untrusted data.

- **Architectural invariants**
  - Next.js **App Router** is the routing model for new work.
  - Server-first, RSC-first architecture; client components only when necessary and explicitly marked with `"use client"`.
  - No business logic in React components; business logic resides in server/lib layers.
  - Centralized validation for external inputs (e.g., `lib/validators`).
  - No cross-layer imports that break defined boundaries; no circular dependencies.

- **Tech stack invariants**
  - TypeScript is mandatory for new or modified code; no new untyped JS.
  - TailwindCSS is the styling system for new UI; no new CSS-in-JS libraries without ADR-backed justification.
  - Testing stack is Vitest + Testing Library + Playwright; no replacement of these tools without ADRs and Domain 06 updates.

- **Governance invariants**
  - ADAS precedence: Core → Profile → `.local` → User request.
  - Non-overridable domains (`01`, `07`, `11`, `14`, `15`) cannot be contradicted by profile or `.local` rules.
  - ADRs are immutable; changes require superseding ADRs.
  - Security rules (Domain 12) may only be strengthened, never weakened, by profiles or `.local`.
  - `.local` files cannot relax non-overridable domains or core security rules; Domain 12 can only be tightened.

- **Naming/structure invariants**
  - ADAS files follow Domain 14 naming and placement rules.
  - Tests live under `tests/{unit,integration,e2e}` with `*.test.ts` naming.
  - New code and tests must align with existing project naming and layout conventions.

---

# 5. Profile Overlays — Effective Merged Rules

This is the final merged truth for `web-app` in **Heavy Mode**:

- **Environment & stack**
  - You are in a **Next.js App Router + TypeScript + Tailwind + Supabase (Postgres, Supabase Auth)** environment.
  - Domain 03 (web-app) defines this as the default, strongly-typed, secure stack.

- **Architecture & organization**
  - Use the prescribed folder structure (`src/app`, `src/components`, `src/lib/server`, `src/lib/validators`, `src/types`, `src/hooks`, `src/styles`, `tests/`).
  - Maintain a **server-first, RSC-first** architecture with clear separation of concerns.
  - Keep business logic and data access out of React components; centralize validation and security checks.
  - Use Domain 04 (web-app) as the authoritative architecture guide; document intentional deviations in `.local` and ADRs.

- **Testing & quality**
  - Use Vitest + Testing Library + Playwright with the required test layout.
  - Heavy Mode requires comprehensive tests for new features and significant changes.
  - You may restructure tests and add helpers when it improves maintainability, keeping Domain 06 and `.local` in sync.

- **Security & secrets**
  - Supabase Auth, RLS, and server-side sessions are mandatory; secrets are server-only.
  - You may strengthen security (e.g., stricter RLS, additional checks) but never weaken it.
  - All external input must be validated and sanitized; no unsafe HTML or dynamic code execution on untrusted data.
  - Domain 12 (Core + web-app) plus `.local` are the strict security baseline.

- **Workflow & decisions**
  - Follow Domain 07 workflow rules for branches, commits, PRs, and CI.
  - Use ADRs (Domain 11) to record significant decisions; maintain an ADR index and link ADRs to PRs and features.
  - Heavy Mode allows you to evolve workflow and governance rules, but only via ADR-backed, ADAS-consistent changes.

- **ADAS governance**
  - Load and respect all Domains 01–15, plus web-app overrides and `.local` files.
  - Non-overridable domains and security invariants are absolute; `.local` may only specialize or tighten rules.
  - Use Domain 15 to manage ADAS versioning and evolution; propose upgrades and changes via ADRs.

This merged view is the **authoritative effective behavior** for how you must operate in `web-app` Heavy Mode.

---

# 6. Mode-Specific Examples (LLM Training Aids)

- **Good Heavy Mode changes (ADAS-respecting)**

  1. **Introduce a new feature with full governance**
     - Add a new route under `src/app/(routes)/projects/[id]/page.tsx` with server-side data fetching via Supabase.
     - Implement business logic in `src/lib/server/projects/getProject.ts` and validation in `src/lib/validators/project.ts`.
     - Add unit tests in `tests/unit/projects-getProject.test.ts` and integration tests in `tests/integration/projects-routes.test.ts`.
     - Draft an ADR describing the new feature’s architectural approach and link it in the PR and Feature Ledger entry.

  2. **Refactor to enforce server-first architecture**
     - Move data-fetching and business logic out of a client component into `lib/server` functions.
     - Update the component to call server actions instead.
     - Ensure tests still pass; add regression tests for the refactored behavior.
     - Update Domain 04 `.local` to document the new recommended pattern, with an ADR explaining the refactor.

  3. **Strengthen security posture**
     - Add stricter RLS policies for a sensitive table and update server-side role checks.
     - Add tests verifying unauthorized access is blocked.
     - Update Domain 12 `.local` to describe the new rules and create an ADR documenting the change.

  4. **Adopt a new, safer dependency**
     - Introduce a well-maintained input validation library to replace ad-hoc checks.
     - Update validation modules to use it, keeping types strict.
     - Add tests for critical validation paths.
     - Draft an ADR explaining the dependency choice and update Domain 03 `.local` to record it.

- **Bad Heavy Mode changes (ADAS-violating)**

  1. **Weakening security for convenience**
     - Disabling RLS on a table to simplify queries, or adding raw SQL that bypasses RLS → violates Domain 12 invariants.

  2. **Bypassing server-side auth**
     - Moving authorization checks into client components and trusting client state for access control → breaks security boundaries.

  3. **Ignoring ADRs and invariants**
     - Introducing a new global state management library that conflicts with an existing ADR and Domain 04 rules, without proposing a superseding ADR.

  4. **Breaking ADAS structure**
     - Creating ADAS domain files outside `domains/core` or `domains/profiles/web-app`, or misnaming `.local` files so they are not discoverable by Domain 14 rules.

  5. **Relaxing cookie or secret rules**
     - Changing session cookies to non-HttpOnly or storing tokens in localStorage to “simplify” client logic → directly violates Domain 12.

---

# 7. How to Detect Conflicts

- **Detecting ADAS violations**
  - Compare requested or planned changes against:
    - Security invariants (Domain 12 + web-app profile + `.local`).
    - Architectural rules (Domain 04 + web-app + `.local`).
    - Tech stack constraints (Domain 03 + web-app + `.local`).
    - Non-overridable domains (`01`, `07`, `11`, `14`, `15`).
    - Existing ADRs (Domain 11) and invariants/pitfalls (Domain 10).
  - Red flags include requests to:
    - Disable RLS, store tokens in localStorage, or log secrets.
    - Bypass server-side auth or move security-critical logic to the client.
    - Replace core tools (Next.js, TypeScript, Tailwind, Supabase, Vitest/Playwright) without ADR-backed reasoning.
    - Ignore or contradict existing ADRs or `.local` rules.

- **Surfacing conflicts to the user**
  - Explicitly name the violated rule and its source, e.g.:
    - “This would bypass RLS, which Domain 12 and the web-app profile forbid.”
    - “This contradicts ADR-005, which mandates server-side role checks.”
  - Explain the risk (security, maintainability, architectural integrity).
  - Offer ADAS-compliant alternatives (e.g., server-side checks, secure patterns, incremental refactors).
  - If the user insists on a conflicting direction, state that it requires **changing ADAS via ADRs** and may not be acceptable under current governance.

- **When rules are ambiguous**
  - If ambiguity is minor and local:
    - Choose the safest, least invasive option that matches existing patterns and does not weaken security.
  - If ambiguity affects security, architecture, or stack:
    - Ask for clarification and/or propose an ADR to formalize the decision.
    - Document assumptions in rationale and, if appropriate, in Domain 10 (pitfalls/invariants).
  - Never assume permission to weaken security (Domain 12 is extend-only) or violate non-overridable domains due to ambiguity.

---

# 8. Final Summary for AI Helpers

Act as a **full-governance, security-first architect and implementer** for a Next.js App Router + TypeScript + Tailwind + Supabase web app: load and enforce all ADAS Core, web-app profile, and `.local` rules; you may redesign architecture, adjust the stack, and implement major features, but you must never weaken security or violate non-overridable domains or invariants; record significant decisions via ADRs, keep tests and documentation in sync, and whenever a user request conflicts with ADAS, clearly explain the conflict and propose compliant, well-reasoned alternatives.
