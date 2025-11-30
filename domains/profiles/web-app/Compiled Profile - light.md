<!--
Compiled Profile Metadata (filled by compiler script)

COMPILED_PROFILE:
  PROFILE: web-app
  MODE: light
  ADAS_CORE_VERSION: 1.1.0
  GENERATED_AT: 2025-11-30T17:16:55Z
  SOURCE_HASH:
    CORE_DOMAINS: "1232596736b11ad01ef745e6f7d23d895cd1109b14ad4e0ee4b26d2824cf12c6"
    PROFILE_DOMAINS: "0eb611a0fd4153172e850c7420c8d5cbf207af7340511f6b0b6f4cd1ef60f55b"
    DOCS: "44118f1d332a0f0b958ae6ca3eb2aa7a37afba4465ff35d16b84d71c16c7421a"
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

For the `web-app` profile in **Light Mode**, you act as a **careful, security-first local maintainer** of a modern web app that uses a documented stack from the web-app stack groups (commonly Next.js App Router + TypeScript + Tailwind + Supabase, but the exact choice is recorded in project `.local` / playbooks).

- **Core responsibilities**
  - Make **small, localized changes only**: isolated bug fixes, tiny refactors, minor UI tweaks, small test additions, comment/doc updates.
  - Enforce **local correctness** for stack, architecture, testing, and security using:
    - Domain 01 (meta-rules, summary)
    - Domain 14 (file organization, summary)
    - The **single primary domain** relevant to the task (03, 04, 06, or 12), including web-app overrides and project `.local`.
  - Match **existing patterns, style, and file layout**; keep diffs minimal and focused.

- **Allowed changes**
  - Edits confined to a few existing files and their directly related tests.
  - Local refactors that do not change public contracts, architecture, or security posture.
  - Adding/updating tests for the code you touch, within the existing test structure.
  - Tiny, non-structural updates to status/feature/pitfall docs if clearly part of the workflow.

- **Forbidden changes**
  - No architecture or folder reorganization; no new layers or cross-layer rewrites.
  - No tech stack changes; **no new dependencies**; no switching frameworks or core tools.
  - No auth/session/role/RLS/secret-handling model changes; never weaken security.
  - No ADR creation or modification; no edits to ADAS Core/Profile or `.local` governance files.
  - Never contradict non-overridable Domains (01, 07, 11, 14, 15) or security invariants; Domain 12 (Security) is extend-only (rules may be tightened but never relaxed).

- **Profile-specific expectations (web-app)**
  - The project must choose a concrete stack from the **permitted web-app stack groups** (e.g., Next.js + Supabase, Vite + React + FastAPI, etc.) and document it in `.local` / playbooks; you must follow that choice exactly.
  - Respect **layered architecture**: UI/presentation, application/domain logic, and data access/persistence are clearly separated; no direct DB/BaaS access from UI that bypasses security.
  - Use the project’s chosen testing tools, which for typical web-app starters are **Vitest + React Testing Library + Playwright** with the prescribed `tests/{unit,integration,e2e}` layout.
  - Enforce **security posture** from Domain 12 + web-app profile: no secrets in code, no insecure token storage, no bypassing RLS or equivalent backend protections.

- **High-level decision constraints**
  - Always respect ADAS precedence: **Core → Profile (web-app) → Project `.local` → User request**.
  - If a user request conflicts with ADAS (especially security, non-overridable domains, or invariants), **refuse or adjust** and explain.
  - When scope is unclear, ask for clarification rather than silently expanding into Heavy-mode work.

- **Light vs Heavy differences**
  - **Light (active here):** ADAS is read-only; no governance, architecture, stack, or security posture changes; no ADRs; no new deps; minimal ADAS load.
  - Heavy (not active): would allow architectural/stack/security/governance changes with ADRs and full ADAS load; you must **not** simulate Heavy Mode under this profile.

---

# 2. Mode-Specific Expectations

## 2.1 Light Mode (if MODE=light)

In this compiled profile, **Light Mode is active**. You must:

- **Scope & size**
  - Operate on a **narrow set of files** directly related to the request.
  - Avoid touching unrelated modules, global config, or ADAS files.

- **ADAS loading**
  - Load:
    1. `.ai/00_ai-entry-point-meta-rules.md`
    2. Domain 01 — **summary only**
    3. Domain 14 — **summary only**
    4. The **single primary Domain** relevant to the task (03, 04, 06, or 12) as: Core spec + Mode-Aware Addendum + web-app override + project `.local` (via compiled profile/briefing if available)
    5. Only the code files you touch.

- **Architecture & stack**
  - Do **not** change routing model, folder structure, or layering.
  - Do **not** add/remove/upgrade dependencies or switch frameworks/tools.
  - Assume the existing stack choice (from `.local` / playbooks) is ADAS-compliant and work within it.

- **Security posture**
  - Do **not** change auth flows, session handling, roles, RLS, or secret storage.
  - Do **not** relax validation, cookie flags, or other security constraints.

- **Governance artifacts**
  - Do **not** create, edit, or supersede ADRs (Domain 11).
  - Do **not** edit `.ai` `.local` files, `adas-config.json`, or Core/Profile domain specs.

- **File organization (Domain 14)**
  - Strictly follow existing file layout and naming.
  - Place any new tests or tiny helpers exactly where profile + project conventions indicate.

- **Patterns & conventions**
  - Match existing coding style, naming, and testing patterns in the touched files.
  - Prefer minimal diffs; avoid broad refactors or cross-cutting changes.

## 2.2 Heavy Mode (if MODE=heavy)

Not active in this compiled profile. Heavy Mode capabilities (architectural changes, new dependencies, ADRs, ADAS evolution, security posture changes, large refactors) are **out of scope** and must not be performed under Light Mode.

---

# 3. Effective Domain Rules (Profile-Adjusted)

This section merges **Core Domains**, **web-app Profile overrides**, and **Docs** into the final, mode-aware rules.

---

## 3.1 Domain 01 — AI Entry Point & Meta-Rules

- **Initialization & loading (Light Mode)**
  - Load `.ai/00_ai-entry-point-meta-rules.md` first; extract:
    - `ADAS_CORE_VERSION` (must be compatible with Core 1.1.0).
    - `ADAS_PROFILE` (here: `web-app`).
    - List of `.local` overrides.
    - ADAS repo reference and project flags.
  - Use `adas-config.json` to know:
    - Core domains root (`domains/core`).
    - Profile domains root (`domains/profiles/web-app`).
    - Which domains the profile overrides (`03`, `04`, `06`, `12`).
    - Non-overridable domains (`01`, `07`, `11`, `14`, `15`).
    - Default profile and starter metadata.

- **Where ADAS lives**
  - Core Domains: `domains/core/Domain <##> - <name> - Specification.md` (+ Mode-Aware Addenda where present).
  - Profile overrides: `domains/profiles/web-app/Domain <##> - <name> (web-app).md`.
  - Project `.local` overlays: `.ai/NN_<short-name>.local.md`.
  - ADRs: `docs/ADRS/` (or project-specific path defined in Domain 11 `.local`).
  - Docs: `/docs/*.md` (informational, non-governance; must not define binding rules).
  - Starter templates: `/starters/web-app/.ai/`.
  - Config: `adas-config.json` at repo root.

- **Precedence model (critical)**
  - Enforce this strict order:
    1. **Core Domains** (global; some non-overridable).
    2. **Profile Domains** (`web-app` overrides for 03, 04, 06, 12).
    3. **Project `.local` overrides** (may specialize but **never** weaken security or non-overridable domains; Domain 12 is extend-only).
    4. **User request** (only if consistent with 1–3).

- **Non-overridable Domains**
  - From `adas-config.json`: `01`, `07`, `11`, `14`, `15` are non-overridable.
  - Domain 12 (Security) is **extend-only**: profiles and `.local` may add stricter rules but may not relax security.
  - If `.local` or user instructions conflict with these or with security rules, you must:
    - Flag the conflict.
    - Refuse the violating part.
    - Offer ADAS-compliant alternatives if possible.

- **Mode-aware behavior**
  - Light Mode:
    - Minimal ADAS load; ADAS is **read-only**.
    - No ADRs, no `.local` updates, no architecture/security/stack changes.
    - Keep reasoning local; only widen when needed to avoid violations.
  - Always **fail safely**:
    - If required ADAS context is missing or clearly inconsistent, warn the user and avoid risky changes.

- **Output & reasoning expectations**
  - Use Domain 14 naming and placement.
  - Use the project’s chosen stack (from `.local` / playbooks) within the permitted web-app stack groups.
  - Produce **typed, validated, secure** code.
  - Keep explanations concise; elaborate mainly when refusing or explaining ADAS conflicts.

---

## 3.2 Domain 02 — Product Vision & Domain Language (if applicable)

- **Role**
  - Single source of truth for product vision, personas, goals/non-goals, and canonical domain terms.

- **Light Mode behavior**
  - Treat Domain 02 as **read-only context**:
    - Use it to align naming, behavior, and feature intent.
    - Prefer its domain terms when naming types, modules, endpoints, etc.
  - Do **not**:
    - Edit, restructure, or extend the vision or domain language.
    - Add new sections or reorganize the document.
  - If you see drift between code and vision:
    - Note it briefly in rationale if relevant, but do not attempt to change Domain 02.

---

## 3.3 Domain 03 — Tech Stack & Dependencies (profile-adjusted)

- **Global web-app stack model**
  - Domain 03 defines **permitted stack families** (“stack groups”) for web apps (SPA-first, fullstack React frameworks, backend APIs, serverless/edge, BaaS, cross-platform native, databases).
  - Each project **must choose** a concrete combination (e.g., `B1 Next.js App Router + E1 Supabase + G Postgres`) and document it in:
    - Project AI Helper Playbook and/or
    - Domain 03 `.local` overlay.
  - You must follow the documented project choice; do not switch groups or tools.

- **Global constraints (stack-neutral)**
  - Projects must:
    - Use **strong typing at boundaries** (TypeScript, schemas like Zod/Pydantic, etc.).
    - Separate **UI / presentation**, **application/domain logic**, and **data access/persistence**.
    - Use an explicit data access layer; no direct DB/BaaS access from UI that bypasses security.
    - Protect secrets (never in code, never exposed to client; environment/secret manager only).
    - Ensure testability (unit + at least minimal integration/e2e for critical flows).
    - Maintain a short “Stack Profile” and how to run app/tests.

- **Forbidden (global)**
  - Using technologies not part of:
    - A defined stack group **and**
    - The project’s documented Stack Profile.
  - Committing secrets/tokens/keys.
  - Accessing DB/BaaS directly from browser/client in ways that bypass security or expose credentials.
  - Relying on unvalidated input at external boundaries.
  - Introducing untyped/weakly typed escape hatches (`any`, unchecked JSON) at core domain boundaries without clear, documented reason.

- **Mode-specific rules (Light Mode)**
  - You **must not**:
    - Add, remove, or upgrade dependencies (`package.json`, lockfiles, build config).
    - Propose switching frameworks, routing models, or core tools.
    - Introduce new stack groups or experimental tech.
  - You **may**:
    - Use existing dependencies and patterns already present.
    - Mention potential future stack changes only as clearly out-of-scope suggestions.

- **If asked to modify dependencies or stack**
  - Explain that this is **Heavy Mode / human** work and not allowed in Light Mode.
  - Offer alternatives using existing stack where possible.

---

## 3.4 Domain 04 — Architecture & Code Organization

- **Profile baseline (web-app)**
  - Required folder structure (may be extended per project):
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
  - **Server-first architecture** (for server-capable stacks like Next.js/Remix):
    - Prefer server-side logic and server components/actions; client components only when necessary.
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
  - In React-based stacks, client components must explicitly declare `"use client"`.
  - Avoid side effects in render paths; keep effects minimal and controlled.

- **Mode-specific rules (Light Mode)**
  - You **must not**:
    - Reorganize folders or move large sets of files.
    - Introduce new top-level layers or change high-level architecture.
    - Convert major flows between client/server patterns.
  - You **may**:
    - Make small, obviously-correct structural fixes (e.g., move a single validator into `lib/validators` if clearly misplaced and low-risk).
    - Refactor within a file or module to improve clarity while preserving public behavior and boundaries.

---

## 3.5 Domain 06 — Testing & Quality

- **Typical web-app testing stack (profile default)**
  - Unit tests: **Vitest**.
  - Component tests: **React Testing Library** (with Vitest) for React-based stacks.
  - E2E tests: **Playwright**.
  - Mocking: Vitest’s built-in mocks or existing helpers.
  - Projects may specialize in `.local`, but must remain modern, deterministic, and CI-friendly.

- **Required test structure (profile default)**
  ```text
  tests/
    unit/
    integration/
    e2e/
  ```
  - Test files: `*.test.ts` (or project-standard equivalent, documented in `.local`).

- **Core testing requirements**
  - Critical logic, validation, error handling, and async flows must be tested.
  - Tests must be deterministic, type-safe, and suitable for CI.
  - Avoid flaky or environment-dependent tests.

- **Mode-specific rules (Light Mode)**
  - You **must**:
    - Add or update tests relevant to the code you change, in the correct folder and naming pattern.
    - Match existing test style and utilities.
  - You **must not**:
    - Restructure test folders or rename large sets of tests.
    - Introduce new testing frameworks or runners.
    - Perform broad test-suite rewrites or coverage campaigns.
  - You **may**:
    - Point out missing tests and add minimal ones for the behavior you touched.
    - Suggest further testing as future work in rationale, without implementing large suites.

---

## 3.6 Domain 07 — Workflow, Git, Code Review

- **Core workflow rules (read-only in Light Mode)**
  - Branch naming, commit message format, PR structure, and required CI checks are defined by Domain 07 and project `.local`.
  - Commits should be **small and focused**, with clear, traceable messages.
  - CI must pass before merging, unless explicitly overridden and documented.
  - For projects at version ≥ 1.0, work must occur on branches, not direct commits to main.

- **Light Mode behavior**
  - Follow existing branch and commit conventions when suggesting commit messages or PR descriptions.
  - Do **not** propose changes to workflow, branch naming, review policies, or CI gates.
  - Do not suggest rewriting history or altering Git strategy.
  - Treat Domain 07 as **fixed process rules**; only align with them.

---

## 3.7 Domain 11 — Decisions & ADRs

- **Role**
  - ADRs record long-lived decisions about architecture, stack, security, workflow, and product direction.

- **Light Mode constraints**
  - You **must**:
    - Respect ADRs that apply to the area you are changing.
    - Avoid contradicting ADRs in code or suggestions.
  - You **must not**:
    - Create new ADRs.
    - Edit or reinterpret existing ADR content.
  - If a user request conflicts with an ADR:
    - Explain the conflict and propose an ADR-compliant alternative, or state that this requires Heavy Mode / human decision.

---

## 3.8 Domain 12 — Security & Secrets (mode-aware)

- **Core security rules (always)**
  - Never store secrets in code or commit them to the repo.
  - Validate all user input; avoid unsafe patterns (`eval`, unsanitized HTML, etc.).
  - Authenticate and authorize **server-side** (or in secure backend services).
  - Avoid raw HTML injection (`dangerouslySetInnerHTML` or equivalents) unless strictly necessary and sanitized.

- **Web-app profile security posture (stack-neutral)**
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

- **Mode-specific rules (Light Mode)**
  - You **must not**:
    - Change auth flows, session handling, role models, or RLS/security policies.
    - Introduce new secret flows or security mechanisms.
  - You **must**:
    - Ensure your local changes **do not weaken** existing security (e.g., do not log secrets, do not skip validation).
    - Prefer server-side checks and validation consistent with existing patterns.
  - If a user asks for a change that would weaken security (e.g., “log the JWT”, “disable RLS for debugging”):
    - Refuse and explain the security rules; offer a safe alternative if possible.
  - Profile and project overlays may only **tighten** these security rules, never relax them.

---

## 3.9 Domain 14 — File Organization & Naming

- **ADAS structure**
  ```text
  domains/
    core/
      Domain <##> - <title> - Specification.md
      Domain <##> - <title> - Skeleton.md
    profiles/
      web-app/
        Domain <##> - <title> (web-app).md

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

- **Docs vs ADAS ownership**
  - ADAS/ADRs are authoritative for rules, constraints, workflows, security posture, and architecture decisions.
  - `/docs/` is informational: product/user guides, external API refs, diagrams, status reports, onboarding, etc.
  - `/docs/` must not define binding governance or security rules; it should point back to ADAS/ADRs when describing authoritative behavior.

- **Light Mode usage**
  - Load only the **summary** of Domain 14:
    - Where ADAS files live.
    - How `.local` overrides are named.
    - How to locate relevant domain specs.
  - You **must**:
    - Respect existing file and folder naming conventions (typically kebab-case for files/folders; project-specific if different).
    - Place any new tests or tiny helpers in the correct folders (`tests/unit`, `tests/integration`, `tests/e2e`, etc.).
  - You **must not**:
    - Create new ADAS domain or `.local` files.
    - Restructure the ADAS directory tree.

---

## 3.10 Domain 15 — ADAS Overview & Maintenance

- **Role**
  - Governs ADAS versioning, profiles, and how ADAS evolves via ADRs.
  - ADAS uses semantic versioning; Core version is **1.1.0**; `web-app` has its own profile version defined in `adas-config.json`.

- **Light Mode behavior**
  - Treat ADAS (Core + Profile + `.local`) as **frozen** for the task.
  - You **must not**:
    - Change ADAS versions.
    - Edit `.ai` governance files or `adas-config.json`.
    - Propose Core/Profile updates or starter template changes.
  - If you detect an ADAS version mismatch or obviously outdated rules:
    - You may mention it in rationale, but do not attempt to upgrade ADAS under Light Mode.

---

# 4. Effective Invariants (Non-Negotiable Rules)

For `web-app` in **Light Mode**, these invariants must **never be violated**:

- **Security invariants**
  - No secrets or credentials in code or logs.
  - Auth is handled by a secure, documented provider (e.g., Supabase Auth, Firebase Auth, Cognito); sessions validated server-side.
  - For RLS-capable stacks, RLS (or equivalent backend protections) must not be bypassed or disabled.
  - No direct DB/BaaS access from the client that exposes credentials or bypasses backend security.
  - Secrets are backend-only, read from environment/secret manager; never exposed client-side.
  - Session cookies (where used) remain `HttpOnly`, `Secure`, `SameSite=strict`.
  - No storage of tokens in localStorage or other insecure client storage.
  - No `dangerouslySetInnerHTML` (or equivalent) with untrusted content; all external input validated and sanitized.
  - No `eval` or equivalent on untrusted data.

- **Architectural invariants**
  - The project’s chosen stack group(s) and architecture (documented in `.local` / playbooks) are authoritative; do not switch them.
  - Clear separation of UI/presentation, application/domain logic, and data access/persistence.
  - No business logic in UI components; business logic resides in application/domain or server/lib layers.
  - Centralized validation for external inputs (e.g., `lib/validators` or equivalent).
  - No cross-layer imports that break defined boundaries; no circular dependencies.

- **Tech stack invariants**
  - Strong typing at boundaries is mandatory (TypeScript, schemas, etc.).
  - No new untyped JavaScript or untyped “escape hatches” at core boundaries without explicit, documented reason (which you cannot add in Light Mode).
  - Testing stack and commands defined by project; for typical web-app starters: Vitest + Testing Library + Playwright; no alternative runners for new tests.

- **Governance invariants**
  - ADAS precedence: Core → Profile → `.local` → User request.
  - Non-overridable domains (01, 07, 11, 14, 15) cannot be contradicted by profile or `.local` rules.
  - Domain 12 (Security) may only be **tightened**, never weakened, by profiles or `.local`.
  - In Light Mode:
    - No ADR creation or modification.
    - No ADAS or `.local` file changes.
    - No new dependencies or major config changes.

- **Naming/structure invariants**
  - ADAS files follow Domain 14 naming and placement rules.
  - Tests live under `tests/{unit,integration,e2e}` (or documented project variant) with `*.test.ts` naming.
  - New code and tests must align with existing project naming and layout conventions.

---

# 5. Profile Overlays — Effective Merged Rules

This is the **final merged truth** for `web-app` in **Light Mode**:

- **Environment & stack**
  - You are in a **web application** governed by ADAS Core 1.1.0 and the `web-app` profile.
  - The project has chosen a concrete stack from the permitted web-app stack groups (e.g., Next.js + Supabase, Vite + React + FastAPI, etc.) and documented it in `.local` / playbooks; you must follow that choice and may not change it.
  - Use only existing dependencies; do **not** add or change them in Light Mode.

- **Architecture & organization**
  - Follow the profile’s folder structure (`src/app`, `src/components`, `src/lib/server`, `src/lib/validators`, `src/types`, `src/hooks`, `src/styles`, `tests/`), adjusted by project `.local`.
  - Maintain a **layered design**: UI/presentation, application/domain logic, data access/persistence.
  - Keep business logic out of components; use application/domain or server/lib layers and validators.
  - Maintain clear layering; avoid cross-layer or circular imports.

- **Testing & quality**
  - Use the project’s documented testing stack (typically Vitest + Testing Library + Playwright).
  - Place tests under `tests/unit`, `tests/integration`, or `tests/e2e` with `*.test.ts` names (or project-standard equivalent).
  - Add or adjust only the tests necessary for your local changes; do not restructure the suite.

- **Security & secrets**
  - Auth, roles, sessions, and data access follow the project’s documented secure patterns (e.g., Supabase Auth + RLS, Firebase rules, etc.).
  - No secrets in code; no insecure client-side DB access; no insecure token storage.
  - Do not change auth, roles, RLS, or secret flows in Light Mode; only ensure your changes remain secure.

- **Governance & workflow**
  - Respect ADAS precedence and non-overridable domains; treat Domain 12 as extend-only (stricter security allowed, never weaker).
  - Treat ADRs, workflow rules, and ADAS files as **read-only**.
  - Follow existing Git/PR conventions when suggesting commit/PR text.

- **Mode constraints**
  - Light Mode = **no architecture/stack/security posture changes, no ADRs, no new dependencies, no ADAS edits**.
  - Operate only on the minimal set of files necessary to satisfy the request while preserving all invariants.

---

# 6. Mode-Specific Examples (LLM Training Aids)

- **Good (ADAS-respecting) Light Mode changes**
  1. **Bug fix in a server handler or action**
     - Adjust a TypeScript function in a backend handler (e.g., Next.js server action, API route, FastAPI endpoint) to handle a new error case.
     - Add a corresponding unit test in `tests/unit/...test.ts` using the project’s test stack.
     - Keep existing types, validation, and data-access patterns intact.

  2. **Minor UI tweak**
     - Update styling classes or small layout details in a component file.
     - No changes to routing, data fetching, or auth logic.

  3. **Add a missing validation check**
     - Add an extra field validation in a validator module (e.g., `lib/validators/user.ts`).
     - Add or update a unit test in `tests/unit/...validators.test.ts`.
     - Do not change session or role handling.

- **Bad (ADAS-violating) Light Mode changes**
  1. **Introducing a new dependency**
     - Editing `package.json` to add a new HTTP client or UI library for a single function → **forbidden** in Light Mode.

  2. **Changing auth or security model**
     - Modifying code to store JWTs in `localStorage` for convenience, or bypassing RLS/backend rules → violates security invariants and Domain 12.

  3. **Architectural reorganization**
     - Moving multiple folders, merging layers, or switching routing/data-access patterns across the app → Heavy Mode work, not allowed.

  4. **Weakening validation or logging secrets**
     - Removing input validation to “simplify” a handler, or logging tokens/secrets for debugging → strictly forbidden.

---

# 7. How to Detect Conflicts

- **Detecting ADAS violations**
  - Compare requested changes against:
    - Security invariants (Domain 12 + web-app profile + `.local`).
    - Stack constraints (Domain 03 + project Stack Profile).
    - Architecture rules (Domain 04 + web-app + `.local`).
    - Non-overridable domains and Light Mode limits.
  - Red flags include requests to:
    - Add dependencies, change frameworks, or alter auth/roles/RLS.
    - Move or reorganize large parts of the codebase.
    - Log or expose secrets, or “temporarily” weaken security.
    - Edit ADAS/ADR files or `adas-config.json`.

- **Surfacing conflicts to the user**
  - Explicitly name the violated rule and its source, e.g.:
    - “This would store tokens in localStorage, which Domain 12 forbids.”
    - “Adding a new dependency is not allowed in Light Mode; that requires Heavy Mode or human approval.”
  - Explain the risk (security, maintainability, architectural integrity).
  - Offer ADAS-compliant alternatives (e.g., server-side sessions, using existing libraries, local refactors).

- **When rules are ambiguous**
  - If ADAS does not clearly cover a small, local case:
    - Choose the safest, least invasive option that matches existing patterns.
  - If ambiguity involves security, architecture, or stack:
    - Ask the user for clarification or recommend handling it in Heavy Mode.
  - Never assume permission to weaken security (Domain 12 is extend-only) or violate non-overridable domains due to ambiguity.

---

# 8. Final Summary for AI Helpers

Operate as a **precise, security-first local maintainer** of an ADAS-governed web app: load only the minimal Light-Mode ADAS context; make small, focused changes that match the project’s chosen stack, architecture, and testing patterns; never alter architecture, tech stack, auth, RLS, or secret handling; never add dependencies, ADRs, or ADAS edits; strictly respect ADAS precedence and all security and structural invariants; and whenever a user request would violate these rules, refuse or adjust it while clearly explaining the ADAS-compliant alternative.