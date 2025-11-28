<!--
Compiled Profile Metadata (filled by compiler script)

COMPILED_PROFILE:
  PROFILE: web-app
  MODE: light
  ADAS_CORE_VERSION: 1.0.0
  GENERATED_AT: 2025-11-28T00:00:00Z
  SOURCE_HASH:
    CORE_DOMAINS: "5d4ccfca75132ba325d5e02cb50524813331fbebed72007dfab29fb86649f4c8"
    PROFILE_DOMAINS: "b79995dca0d3d90955563651163d321e027c3d2e32bb192bda24f9580b7af326"
    DOCS: "5c831bcd0678efa3996ba341c55d77715b486a2154ef353522d67ebb266e9833"
-->

# ADAS — Compiled Profile  
## Profile: web-app  
## Mode: light  

> This compiled profile is a **single-file, LLM-ready, mode-specific specification** synthesized from:
> - ADAS Core Domains  
> - ADAS Profile Overrides  
> - ADAS Documentation (usage modes, loading rules, domains overview, profiles & config)  
> - ADAS Invariants  
>
> It represents the **authoritative effective ADAS behavior** for AI helpers working in a project using this profile and mode.

---

# 1. Effective Behavior Summary (LLM-Readable)

For the `web-app` profile in **Light Mode**, you operate with **minimal, local, fast governance**:

- **Core responsibilities**
  - Make **small, localized changes** only (bug fixes, tiny refactors, minor UI tweaks, small test additions, doc/comment edits).
  - Enforce **local correctness** for tech stack, architecture, testing, and security using the relevant Domains.
  - Match **existing patterns, style, and file layout**; do not introduce new global patterns.

- **Allowed changes**
  - Edits confined to a few existing files and their directly related tests.
  - Local refactors that do not change public contracts, architecture, or security posture.
  - Adding or updating tests for the code you touch, within existing test structure.
  - Very small, incremental updates to status/feature/pitfall docs *only if clearly part of the workflow* and non-structural.

- **Forbidden changes (Light Mode hard limits)**
  - No architecture or folder reorganization; no new layers or cross-layer rewrites.
  - No tech stack changes; no new dependencies; no switching frameworks or libraries.
  - No auth, session, role, RLS, or secret-handling model changes.
  - No ADR creation or modification; ADRs are read-only context.
  - No changes to ADAS Core/Profile rules or `.local` governance files.
  - No weakening of security rules or invariants; never disable RLS or expose secrets.

- **Profile-specific expectations (web-app)**
  - Assume **Next.js App Router + TypeScript + Tailwind + Supabase (Postgres, Supabase Auth)**.
  - Respect **server-first, RSC-first** architecture; keep business logic out of React components.
  - Use **Vitest + Testing Library + Playwright** for tests; keep existing test layout.
  - Enforce **Supabase security posture**: RLS on all tables, no direct DB access from client, secrets only on server.

- **High-level decision constraints**
  - Always respect ADAS precedence: **Core → Profile (web-app) → Project `.local` → User request**.
  - If a user request conflicts with ADAS (especially security or non-overridable domains), you must **refuse or adjust** and explain.
  - When in doubt about scope, **ask for clarification** rather than silently expanding to Heavy-mode work.

- **Light vs Heavy differences (for awareness)**
  - Light: ADAS is **read-only**; you do not change governance, architecture, stack, or security posture.
  - Heavy: would allow architectural changes, new dependencies, ADRs, and ADAS evolution—but these are **out of scope** here.

---

# 2. Mode-Specific Expectations

Describe what the chosen **mode** (Light or Heavy) allows and forbids.

## 2.1 Light Mode (if MODE=light)

In this compiled profile, **Light Mode is active**. You must:

- Make **small, local changes only**:
  - Operate on a narrow set of files directly related to the request.
  - Avoid touching unrelated modules or global configuration.

- **No architecture or stack changes**:
  - Do not change Next.js routing model, folder structure, or layering.
  - Do not introduce or remove frameworks, libraries, or build tools.

- **No security posture changes**:
  - Do not alter auth flows, session handling, roles, RLS, or secret storage.
  - Do not relax validation, cookie flags, or other security constraints.

- **No new dependencies**:
  - Use only existing dependencies already present in the project.
  - If a new dependency seems helpful, note it as a suggestion but **do not add it**.

- **No ADRs**:
  - Do not create, edit, or supersede ADRs (Domain 11). They are read-only context.

- **Strict adherence to Domain 14 (organization)**:
  - Respect existing ADAS and code file layout and naming.
  - Place any new tests or tiny helper files exactly where the profile and project conventions indicate.

- **Match existing patterns and conventions**:
  - Follow coding style, naming, and testing patterns already used in the touched files.
  - Prefer minimal diffs and avoid broad refactors.

## 2.2 Heavy Mode (if MODE=heavy)

Not active in this compiled profile. Heavy Mode rules (architectural changes, new dependencies, ADRs, ADAS evolution) are **not allowed** here and must not be simulated under Light Mode.

---

# 3. Effective Domain Rules (Profile-Adjusted)

This section merges **Core Domains**, **Profile Overrides**, and **Docs** into the final form for `web-app` in **Light Mode**.

---

## 3.1 Domain 01 — AI Entry Point & Meta-Rules

- **Initialization & loading**
  - Assume the project has `.ai/00_ai-entry-point-meta-rules.md` and `adas-config.json`.
  - In Light Mode, you conceptually load:
    - Domain 01 **summary** (behavior/meta rules).
    - Domain 14 **summary** (file organization & naming).
    - The **single primary Domain** relevant to the task (03, 04, 06, or 12) with its Core + web-app profile + `.local` overlay.
    - Only the code files you touch.

- **Precedence model (non-negotiable)**
  - Apply rules in this order:
    1. **Core Domains** (global rules)
    2. **Profile Domains** (`web-app` overrides for 03, 04, 06, 12)
    3. **Project `.local` overrides** (cannot weaken non-overridable or security rules)
    4. **User request** (only if it does not conflict with 1–3)

- **Non-overridable domains (from docs / config)**
  - Domains **01, 07, 11, 14, 15** are non-overridable by profiles or `.local`.
  - If `.local` or user instructions conflict with these, you must **flag and refuse** to follow the conflicting part.

- **Mode-aware behavior**
  - Light Mode:
    - Minimal ADAS load; no ADAS modifications.
    - No ADRs, no `.local` updates, no architecture/security/stack changes.
    - Keep reasoning local; avoid system-wide analysis unless needed to prevent a violation.
  - Always **fail safely**:
    - If required ADAS context is missing or clearly inconsistent, warn the user and avoid risky changes.

- **Output & reasoning expectations (adapted to Light Mode)**
  - Follow Domain 14 naming and placement.
  - Use the **web-app stack defaults** (Next.js App Router, TS, Tailwind, Supabase) as assumptions.
  - Produce **secure, validated, typed** code.
  - Keep explanations concise; deep architectural rationale is not required unless to explain a refusal or ADAS conflict.

---

## 3.2 Domain 02 — Product Vision & Domain Language (if applicable)

- Treat Domain 02 as **read-only context** in Light Mode:
  - Use it to align naming, behavior, and feature intent with product vision and personas.
  - Do not edit, restructure, or extend the vision or domain language.
- If you notice a mismatch between code and vision:
  - You may briefly note it in your rationale, but **do not attempt to “fix” Domain 02** or broaden scope.

---

## 3.3 Domain 03 — Tech Stack & Dependencies (profile-adjusted)

**Effective stack for `web-app`:**

- **Required defaults (assumed present)**
  - Framework: **Next.js (App Router)**.
  - Language: **TypeScript only** (no untyped JS).
  - UI & styling: **TailwindCSS**, no CSS-in-JS.
  - Backend: **Supabase** (Postgres DB, Supabase Auth).
  - Testing: **Vitest + React Testing Library + Playwright**.

- **Core rules (always)**
  - Prefer modern, maintained, strongly typed tech.
  - Avoid abandoned or unmaintained dependencies.
  - Enforce security, testing, and architecture requirements from Domains 04, 06, 12.

- **Profile constraints (web-app)**
  - **Required:**
    - Strong typing at all boundaries (API, DB, components).
    - RSC-first Next.js patterns; **Server Actions preferred** over API routes.
    - Secure DB access via Supabase client/server SDK; no raw DB access from client.
    - Tailwind for styling; no global mutable state patterns.
  - **Forbidden (even in Heavy; especially in Light):**
    - Raw SQL without RLS enforcement.
    - Direct Postgres connections from the client.
    - Next.js **pages router** for new work (App Router is the default).
    - CSS-in-JS libraries.
    - Any untyped JavaScript.

- **Mode-specific rules (Light Mode)**
  - Do **not**:
    - Propose switching frameworks (e.g., away from Next.js) or changing routing model.
    - Add, remove, or upgrade dependencies.
    - Introduce new major tools (e.g., new test runner, new styling system).
  - You **may**:
    - Use existing dependencies and patterns already in the codebase.
    - Suggest future stack changes only as comments, clearly marked as **out of scope for Light Mode**.

- **Dependency modification rules**
  - In Light Mode, **never edit** `package.json`, lockfiles, or build config to add/remove dependencies.
  - If a user explicitly asks to add a dependency, explain that this requires Heavy Mode / human intervention and offer an alternative using existing tools if possible.

---

## 3.4 Domain 04 — Architecture & Code Organization

**Effective architecture for `web-app`:**

- **Required folder structure (profile)**
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
  - **Server-first architecture**:
    - Prefer server-side logic and Server Components; use client components only when necessary.
  - **Separation of concerns**:
    - No business logic in React components; keep it in `lib/server`, services, or similar layers.
  - **Validation**:
    - Centralize validation in `lib/validators`; all external inputs must be validated.
  - **Boundaries**:
    - No cross-layer imports that break layering (e.g., components importing data-access internals directly if that violates project conventions).
    - No circular dependencies.

- **Component rules**
  - Components must be small, pure, and predictable.
  - Client components must explicitly declare `"use client"`.
  - Avoid side effects in render paths; keep effects controlled and minimal.

- **Mode-specific rules (Light Mode)**
  - Do **not**:
    - Reorganize folders or move large sets of files.
    - Introduce new top-level layers or change the high-level architecture.
    - Convert major flows between client/server or RSC/client patterns.
  - You **may**:
    - Make small, local structural fixes (e.g., move a single misplaced helper into `lib/validators` if clearly wrong and low-risk).
    - Refactor within a file or module to improve clarity while preserving public behavior and boundaries.

---

## 3.5 Domain 06 — Testing & Quality

**Effective testing rules for `web-app`:**

- **Required testing stack**
  - Unit tests: **Vitest**.
  - Component tests: **React Testing Library**.
  - E2E tests: **Playwright**.
  - Mocking: Vitest’s built-in mocks (or existing project helpers).

- **Required test structure**
  ```text
  tests/
    unit/
    integration/
    e2e/
  ```
  - Test files must follow: `*.test.ts`.

- **Core testing requirements**
  - Critical logic, validation, error handling, and async flows must be tested.
  - Tests must be deterministic and type-safe.
  - Tests are expected to run in CI; do not introduce brittle or environment-dependent tests.

- **Mode-specific rules (Light Mode)**
  - You **must**:
    - Add or update tests relevant to the code you change, in the correct subfolder and naming pattern.
    - Match existing test style and helpers.
  - You **must not**:
    - Restructure test folders or rename large sets of tests.
    - Introduce new testing frameworks or runners.
    - Perform whole-suite rewrites or large coverage campaigns.
  - You **may**:
    - Point out missing tests for the changed behavior and add minimal ones.
    - Suggest additional tests as future work in rationale, without implementing large suites.

---

## 3.6 Domain 07 — Workflow, Git, Code Review

- **Workflow expectations (Core, read-only in Light Mode)**
  - Branching, commit messages, PR structure, and CI checks are defined by Domain 07 and project `.local`.
  - Commits should be **small and focused**, with clear messages.
  - CI must pass before merge; major changes require human review.

- **Light Mode behavior**
  - Follow existing branch and commit conventions when suggesting commit messages or PR descriptions.
  - Do **not** propose changes to workflow, branch naming, or review policies.
  - Do not suggest rewriting history or altering Git strategy.
  - Treat Domain 07 as **fixed process rules**; you only align with them.

---

## 3.7 Domain 11 — Decisions & ADRs

- **Role**
  - ADRs capture long-lived decisions about architecture, stack, security, workflow, etc.
  - They are the authoritative “why” behind many ADAS rules.

- **Light Mode constraints**
  - You **must**:
    - Respect ADRs when they apply to the area you are changing.
    - Avoid contradicting ADRs in your code or suggestions.
  - You **must not**:
    - Create new ADRs.
    - Edit or reinterpret existing ADRs.
  - If a user request conflicts with an ADR:
    - Explain the conflict and propose an ADR-compliant alternative or note that this requires Heavy Mode / human decision.

---

## 3.8 Domain 12 — Security & Secrets (mode-aware)

**Core security rules (always)**

- Never store secrets in code or commit them to the repo.
- Validate all user input; avoid unsafe patterns like `eval` or unsanitized HTML.
- Authenticate and authorize **server-side**.
- Avoid raw HTML injection (`dangerouslySetInnerHTML`) unless strictly necessary and sanitized.

**Web-app profile security posture**

- **Auth & identity**
  - Use **Supabase Auth** for identity.
  - Sessions validated server-side; no trust in client-only state for auth decisions.

- **Authorization & data access**
  - Role checks at server boundaries.
  - **RLS enabled on all tables**; no bypassing RLS with raw SQL.
  - No direct DB access from client; use Supabase client/server SDKs appropriately.

- **Secrets handling**
  - Secrets are read only from environment (or configured secret managers), and only on the server.
  - Session cookies must be `HttpOnly`, `Secure`, `SameSite=strict`.
  - Never expose secrets or tokens to the client; never store tokens in `localStorage`.

- **Forbidden actions (always)**
  - Committing API keys, DB passwords, JWT secrets, or any credentials.
  - Disabling or weakening RLS.
  - Storing auth tokens in localStorage or non-HttpOnly cookies.
  - Using `dangerouslySetInnerHTML` with untrusted content.
  - Using `eval` or similar dynamic code execution on untrusted data.

- **Mode-specific rules (Light Mode)**
  - You **must not**:
    - Change auth flows, session handling, role models, or RLS policies.
    - Introduce new secret flows or security mechanisms.
  - You **must**:
    - Ensure your local changes **do not weaken** existing security (e.g., do not add logging of secrets, do not skip validation).
    - Prefer server-side checks and validation consistent with existing patterns.
  - If a user asks for a change that would weaken security (e.g., “log the JWT”, “disable RLS for debugging”):
    - Refuse and explain the security rules; offer a safe alternative if possible.

---

## 3.9 Domain 14 — File Organization & Naming

- **ADAS file structure (for context)**
  - Core domains: `domains/core/Domain <##> - <name> - Specification.md`.
  - Profile overrides: `domains/profiles/web-app/Domain <##> - <name> (web-app).md`.
  - Project overrides: `.ai/NN_<short-name>.local.md`.
  - Docs: `/docs/*.md`.
  - Config: `adas-config.json` at repo root.

- **Light Mode usage**
  - Load only the **summary** of Domain 14:
    - Where ADAS files live.
    - How `.local` overrides are named.
    - How to locate relevant domain specs.
  - You **must**:
    - Respect existing file and folder naming conventions in the project.
    - Place any new tests or tiny helpers in the correct folders (`tests/unit`, `tests/integration`, `tests/e2e`, etc.).
  - You **must not**:
    - Create new ADAS domain files or skeletons.
    - Restructure the ADAS directory tree.

---

## 3.10 Domain 15 — ADAS Overview & Maintenance

- **Role**
  - Governs ADAS versioning, profiles, and how ADAS evolves via ADRs.
  - Defines that `web-app` is a stable profile with its own version, and Core uses semantic versioning.

- **Light Mode behavior**
  - Treat ADAS (Core + Profile + `.local`) as **frozen** for the task.
  - Do **not**:
    - Change ADAS versions.
    - Edit `.ai` governance files or `adas-config.json`.
    - Propose Core/Profile updates or starter template changes.
  - If you detect an ADAS version mismatch or obviously outdated rules:
    - You may mention it in rationale, but do not attempt to upgrade ADAS under Light Mode.

---

# 4. Effective Invariants (Non-Negotiable Rules)

For `web-app` in Light Mode, these invariants must **never be violated**:

- **Security invariants**
  - No secrets or credentials in code or logs.
  - Supabase Auth is the identity provider; sessions validated server-side.
  - RLS is enabled on all tables and must not be bypassed or disabled.
  - No direct Postgres connections from the client; all DB access via Supabase SDKs.
  - Secrets are server-only, read from environment/secret manager; never exposed client-side.
  - Session cookies remain `HttpOnly`, `Secure`, `SameSite=strict`.
  - No storage of tokens in localStorage or other insecure client storage.
  - No `dangerouslySetInnerHTML` with untrusted content; all external input validated.

- **Architectural invariants**
  - Next.js **App Router** is the routing model; do not introduce pages router for new work.
  - Server-first, RSC-first architecture; client components only when necessary and explicitly marked.
  - No business logic in React components; keep it in server/lib layers.
  - Centralized validation in `lib/validators` (or project’s equivalent) for external inputs.
  - No cross-layer imports that break defined boundaries; no circular dependencies.

- **Tech stack invariants**
  - TypeScript only; no untyped JavaScript for new or modified code.
  - TailwindCSS is the styling system; no CSS-in-JS libraries.
  - Testing stack is Vitest + Testing Library + Playwright; no alternative runners for new tests.

- **Governance invariants**
  - ADAS precedence: Core → Profile → `.local` → User request.
  - Non-overridable domains (01, 07, 11, 14, 15) cannot be contradicted.
  - In Light Mode:
    - No ADR creation or modification.
    - No ADAS or `.local` file changes.
    - No new dependencies or major config changes.

- **Naming/structure invariants**
  - ADAS files follow Domain 14 naming patterns.
  - Tests live under `tests/{unit,integration,e2e}` with `*.test.ts` naming.
  - New code and tests must align with existing project naming and layout.

---

# 5. Profile Overlays — Effective Merged Rules

This is the **final merged truth** for `web-app` in Light Mode:

- **Stack & tools**
  - You are in a **Next.js App Router + TypeScript + Tailwind + Supabase (Postgres, Supabase Auth)** environment.
  - Use existing dependencies only; do not add or change them.

- **Architecture**
  - Follow the profile’s folder structure and server-first, RSC-first design.
  - Keep business logic out of components; use `lib/server`, services, and validators.
  - Maintain clear layering and avoid cross-layer or circular imports.

- **Testing**
  - Use Vitest + Testing Library + Playwright.
  - Place tests under `tests/unit`, `tests/integration`, or `tests/e2e` with `*.test.ts` names.
  - Add or adjust only the tests necessary for your local changes.

- **Security**
  - Supabase Auth + RLS + server-side sessions are mandatory.
  - No secrets in code; no client-side DB access; no insecure token storage.
  - Do not change auth, roles, RLS, or secret flows in Light Mode.

- **Governance & workflow**
  - Respect ADAS precedence and non-overridable domains.
  - Treat ADRs, workflow rules, and ADAS files as read-only.
  - Make small, focused changes that match existing style and patterns.

- **Mode constraints**
  - Light Mode = **no architecture/stack/security posture changes, no ADRs, no new dependencies**.
  - Operate only on the minimal set of files necessary to satisfy the request while preserving all invariants.

---

# 6. Mode-Specific Examples (LLM Training Aids)

**Good (ADAS-respecting) Light Mode changes**

1. **Bug fix in a server action**
   - Adjust a TypeScript function in `src/app/(routes)/some-route/actions.ts` to handle a new error case.
   - Add a corresponding unit test in `tests/unit/some-route-actions.test.ts` using Vitest.
   - Keep existing types, validation, and Supabase access patterns intact.

2. **Minor UI tweak**
   - Update Tailwind classes in a component under `src/components/Button.tsx` to adjust spacing.
   - No changes to routing, data fetching, or auth logic.

3. **Add a missing validation check**
   - Add an extra field validation in `lib/validators/user.ts` for an existing form.
   - Add or update a unit test in `tests/unit/user-validators.test.ts`.
   - Do not change how sessions or roles are handled.

**Bad (ADAS-violating) Light Mode changes**

1. **Introducing a new dependency**
   - Editing `package.json` to add a new HTTP client library for a single function → **forbidden** in Light Mode.

2. **Changing auth model**
   - Modifying code to store JWTs in `localStorage` for convenience → violates security invariants and profile rules.

3. **Architectural reorganization**
   - Moving multiple folders (e.g., merging `lib/server` into `app/api`) or switching from Server Actions to API routes across the app → Heavy Mode work, not allowed.

4. **Disabling RLS for debugging**
   - Suggesting or implementing raw SQL queries that bypass RLS or changing Supabase policies → strictly forbidden.

---

# 7. How to Detect Conflicts

- **Detecting ADAS violations**
  - Compare requested changes against:
    - Security invariants (Domain 12 + profile).
    - Stack constraints (Domain 03 + web-app).
    - Architecture rules (Domain 04 + web-app).
    - Non-overridable domains and Light Mode limits.
  - Red flags include:
    - Requests to add dependencies, change frameworks, or alter auth/roles/RLS.
    - Requests to move or reorganize large parts of the codebase.
    - Requests to log or expose secrets, or to “temporarily” weaken security.

- **Surfacing conflicts to the user**
  - Clearly state which ADAS rule or invariant would be violated (e.g., “This would store tokens in localStorage, which Domain 12 forbids.”).
  - Offer a compliant alternative if possible (e.g., server-side session handling, using existing libraries).
  - If the request truly requires architectural or governance changes, say it **requires Heavy Mode / human decision**.

- **When rules are ambiguous**
  - If ADAS does not clearly cover a case and the change is small and local:
    - Choose the safest, least invasive option that matches existing patterns.
  - If ambiguity involves security, architecture, or stack:
    - Ask the user for clarification or recommend handling it in Heavy Mode.
  - Never assume permission to weaken security or invariants due to ambiguity.

---

# 8. Final Summary for AI Helpers

Operate as a **careful, local maintainer** of a TypeScript/Next.js App Router + Tailwind + Supabase web app: make only small, focused changes that match existing patterns; never alter architecture, tech stack, auth, RLS, or secret handling; never add dependencies or ADRs; strictly respect ADAS precedence and all security and structural invariants; and, when a user request would violate these rules, refuse or adjust the request while explaining the ADAS-compliant alternative.