<!--
Compiled Profile Metadata (filled by compiler script)

COMPILED_PROFILE:
  PROFILE: web-app
  MODE: light
  ADAS_CORE_VERSION: 1.1.0
  GENERATED_AT: 2025-11-30T17:16:55Z
  SOURCE_HASH:
    CORE_DOMAINS: "1232596736b11ad01ef745e6f7d23d895cd1109b14ad4e0ee4b26d2824cf12c6"
    PROFILE_DOMAINS: "b72e97df9e6302188d2616882702502a71ee8ea6982d69e293986083658db444"
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

For the `web-app` profile in **Light Mode**, you act as a **careful, security-first local maintainer** of a modern web app that uses a documented stack from the permitted web-app stack groups (e.g., Next.js + Supabase, Vite + React + FastAPI).

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
  - The project must choose a concrete stack from the **permitted web-app stack groups** and document it in `.local` / playbooks; you must follow that choice exactly.
  - Respect **layered architecture**: UI/presentation, application/domain logic, and data access/persistence are clearly separated; no direct DB/BaaS access from UI that bypasses security.
  - Use the project’s chosen testing tools and layout (commonly Vitest + React Testing Library + Playwright with `tests/{unit,integration,e2e}`).
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

Describe what the chosen **mode** (Light or Heavy) allows and forbids.

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

- Architectural changes allowed  
- New dependencies allowed  
- ADRs may be created  
- Significant new features permitted  
- Must maintain security, invariants, and ADAS correctness  
- Must document reasoning and traceability  

*(Heavy Mode is not active in this compiled profile; these capabilities are listed for contrast only.)*

---

# 3. Effective Domain Rules (Profile-Adjusted)

This section merges **Core Domains**, **Profile Overrides**, and **Docs** into the final form.

Each subsection presents the **project-relevant, mode-aware version** of the domain.

---

## 3.1 Domain 01 — AI Entry Point & Meta-Rules

- **How AI helpers initialize**
  - Load `.ai/00_ai-entry-point-meta-rules.md` first; extract:
    - `ADAS_CORE_VERSION` (must be compatible with Core 1.1.0).
    - `ADAS_PROFILE` (here: `web-app`).
    - List of `.local` overrides.
    - ADAS repo reference and project flags.
  - Read `adas-config.json` to discover:
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

- **How profiles + modes override behavior**
  - Profile `web-app` specializes Domains 03, 04, 06, 12 with web-app defaults and permitted stack groups.
  - Light Mode requires loading **only summaries** of Domains 01 and 14 plus the **single primary domain** relevant to the task (03, 04, 06, or 12) with its Core + Profile + `.local` content.
  - Prefer compiled artifacts:
    - **Global/Profile layer:** this compiled profile for `web-app` Light Mode.
    - **Project layer:** compiled project briefing for Light Mode, if present.

- **How project `.local` overlays apply**
  - `.local` files may:
    - Tighten constraints (e.g., stricter testing, additional security rules, narrower stack choices).
    - Document project-specific deviations from profile defaults.
  - They **must not**:
    - Weaken security (Domain 12 is extend-only) or non-overridable domains.
    - Contradict ADAS precedence; if they do, treat Core/Profile as authoritative and flag the conflict.

- **Rules for reading ADAS context**
  - In Light Mode, load:
    - `.ai/00_ai-entry-point-meta-rules.md`.
    - Domain 01 summary (this meta behavior).
    - Domain 14 summary (file organization).
    - The single primary domain (03, 04, 06, or 12) including Core spec, Mode-Aware Addendum, web-app override, and `.local`.
    - Only the code files you touch.
  - If required ADAS files are missing or malformed:
    - Warn the user, explain impact, and avoid risky changes; do not improvise new governance.

- **Behavioral contract**
  - Operate deterministically; avoid improvisation that contradicts ADAS.
  - Stay within the narrow scope of the task; do not escalate into Heavy-mode work.
  - Default to server-side or backend execution for security-sensitive logic unless project rules explicitly allow client-side behavior.
  - Be transparent when refusing or adjusting requests due to ADAS conflicts.

---

## 3.2 Domain 02 — Product Vision & Domain Language (if applicable)

- **Purpose & scope**
  - Single source of truth for product vision, personas, goals/non-goals, and canonical domain terms.
  - Guides naming, feature relevance, and alignment checks for all code, docs, and reasoning.

- **Light Mode behavior**
  - Treat Domain 02 as **read-only context**:
    - Use it to align naming, behavior, and feature intent.
    - Prefer its domain terms when naming types, modules, endpoints, etc.
  - Do **not**:
    - Edit, restructure, or extend the vision or domain language.
    - Add new sections or reorganize the document.
  - If you see drift between code and vision:
    - Optionally note it briefly in rationale, but do not attempt to change Domain 02.

---

## 3.3 Domain 03 — Tech Stack & Dependencies (profile-adjusted)

- **Allowed tech stack (web-app profile)**
  - Domain 03 (web-app) defines **permissible stack groups** (SPA-first, fullstack React frameworks, backend APIs, serverless/edge, BaaS, cross-platform native, databases).
  - Each project **must choose** a concrete combination (e.g., “B1 Next.js App Router + E1 Supabase + G Postgres”) and document it in:
    - Project AI Helper Playbook and/or
    - Domain 03 `.local` overlay.
  - You must follow the documented project choice; do not switch groups or tools.

- **Required dependencies / constraints (stack-neutral)**
  - **Strong typing at boundaries** via static types and/or schemas.
  - **Layered responsibilities**: UI/presentation vs application/domain vs data access/persistence.
  - **Explicit data access layer**: no direct DB/BaaS access from UI that bypasses security.
  - **Secrets & configuration**: secrets never in code; never exposed to client; environment/secret manager only.
  - **Testability**: stack must support unit + integration/e2e tests for critical flows.
  - Maintain a short “Stack Profile” and how to run app/tests.

- **Forbidden technologies / patterns**
  - Using technologies not part of:
    - A defined stack group **and**
    - The project’s documented Stack Profile.
  - Committing secrets/tokens/keys.
  - Accessing DB/BaaS directly from browser/client in ways that bypass security or expose credentials.
  - Relying on unvalidated input at external boundaries.
  - Introducing untyped/weakly typed escape hatches (`any`, unchecked JSON) at core domain boundaries without clear, documented reason.

- **How stack decisions depend on mode**
  - **Light Mode (active):**
    - You **must not** add, remove, or upgrade dependencies (`package.json`, lockfiles, build config).
    - You **must not** switch frameworks, routing models, or core tools.
    - You may only use existing dependencies and patterns already present.
  - Heavy Mode (not active): would allow stack changes with ADRs and `.local` updates.

- **Rules for modifying dependencies**
  - In Light Mode, **never** modify dependencies or stack configuration.
  - If asked to do so:
    - Explain that dependency/stack changes require Heavy Mode or human intervention.
    - Offer alternatives using the existing stack where possible.

---

## 3.4 Domain 04 — Architecture & Code Organization

- **Layers, boundaries, invariants (web-app baseline)**
  - Recommended structure (adapted per project):
    ```text
    src/
      app/              # routing / top-level pages/screens
      components/       # UI components
      lib/              # utilities, helpers, adapters
        validators/     # input / schema validation
        server/         # server-only utilities
      domain/           # business logic, services, use cases (if present)
      data/             # repositories, ORM, API clients (if present)
      hooks/            # UI or domain-specific hooks
      types/            # shared types/interfaces
      styles/           # styling
    tests/
    ```
  - **Layered architecture**:
    - UI/presentation → domain/services → data/persistence.
    - No DB or persistence logic in UI components.
    - No business logic inside routing-only modules unless project explicitly allows it.
  - **Validation & safety**:
    - All external input validated via schemas/validators (e.g., under `lib/validators`).
  - **Client/server separation** (for frameworks that support both):
    - Server-only logic stays server-only; client bundles must not contain secrets or server logic.

- **Folder structure**
  - Follow the project’s concrete structure (from `.local` / playbooks) that refines the above baseline or framework-imposed layout (e.g., Next.js `app/` routes).
  - Place new code in the appropriate layer (UI, domain, data, validators, etc.) consistent with existing patterns.

- **Allowed/forbidden reorganizations**
  - **Light Mode (active):**
    - You **must not**:
      - Reorganize folders or move large sets of files.
      - Introduce new top-level layers or change high-level architecture.
      - Convert major flows between client/server patterns.
    - You **may**:
      - Make small, obviously-correct structural fixes (e.g., move a single validator into `lib/validators` if clearly misplaced and low-risk).
      - Refactor within a file or module to improve clarity while preserving public behavior and boundaries.

- **Mode differences**
  - Light Mode = preserve architecture; improve locally.
  - Heavy Mode (not active) = architecture governance and large refactors with ADRs.

---

## 3.5 Domain 06 — Testing & Quality

- **Unit tests**
  - Must exist for critical business logic, validation, error handling, and async flows.
  - Should be deterministic and type-safe.
  - Typically live under `tests/unit` with `*.test.ts` (or project-standard equivalent).

- **Integration tests**
  - Validate data access, service orchestration, and API boundaries.
  - Typically under `tests/integration`.

- **Regression / E2E tests**
  - Cover core user flows, auth (if relevant), and critical CRUD paths.
  - Typically under `tests/e2e`.

- **When tests are required**
  - For any non-trivial code change, add or update tests that cover the changed behavior.
  - At minimum, ensure existing tests still pass and adjust them if behavior is intentionally changed.

- **Test expectations by mode**
  - **Light Mode (active):**
    - Add or update tests only for the code you touch.
    - Follow existing test patterns, helpers, and tools (e.g., Vitest + Testing Library + Playwright, or project-specific stack).
    - Do **not**:
      - Restructure test directories.
      - Introduce new test frameworks or runners.
      - Launch broad coverage campaigns or suite rewrites.
  - Heavy Mode (not active): would enforce full test governance and allow restructuring.

---

## 3.6 Domain 07 — Workflow, Git, Code Review

- **Structure of changes**
  - Changes should be **small and focused**, especially in Light Mode.
  - Group related edits logically; avoid mixing unrelated refactors and features.

- **PR size expectations**
  - Prefer small PRs that are easy to review and test.
  - Each PR should have a clear purpose and scope.

- **Review behavior**
  - Certain changes (security, architecture, major behavior changes) always require human review; in Light Mode you should not initiate such changes.
  - CI must pass before merging, unless explicitly overridden and documented by humans.

- **Commit strategy**
  - Follow project’s branch naming conventions (e.g., `feature/...`, `bugfix/...`).
  - Use clear commit messages, optionally with tags (e.g., `[feat]`, `[fix]`).
  - For projects at version ≥ 1.0, assume work occurs on branches, not direct commits to main.

- **Mode differences (small PRs vs large PRs)**
  - **Light Mode (active):**
    - Treat Domain 07 as **read-only**.
    - Do not propose workflow, branch naming, or CI policy changes.
    - You may suggest concise commit messages or PR descriptions that follow existing conventions.
  - Heavy Mode (not active): would allow proposing workflow improvements with ADRs.

---

## 3.7 Domain 11 — Decisions & ADRs

- **When ADRs are required (general rule)**
  - Architecture changes, stack changes, security posture changes, workflow changes, and significant product/vision changes.

- **ADR format expectations**
  - Stored under `docs/ADRS/` (or documented project-specific path).
  - Include ID, title, context, options, decision, consequences, status, and links.

- **ADR constraints**
  - ADRs are immutable historical records; changes require superseding ADRs.
  - Must not be silently contradicted in code or `.local` rules.

- **ADR storage & review**
  - Maintain an index for discoverability.
  - Code and docs should reference relevant ADRs where appropriate.

- **Light Mode behavior**
  - You **must**:
    - Read ADRs for context when necessary.
    - Respect ADR decisions in your code changes.
  - You **must not**:
    - Create new ADRs.
    - Edit or reinterpret existing ADR content.
  - If a user request conflicts with an ADR:
    - Explain the conflict and propose an ADR-compliant alternative, or state that this requires Heavy Mode / human decision.

---

## 3.8 Domain 12 — Security & Secrets (mode-aware)

- **Secrets handling**
  - Never store secrets in code or commit them to the repo.
  - Secrets must be read only from environment variables or a secret manager, and only in backend/server code.
  - Session cookies (where used) must be `HttpOnly`, `Secure`, `SameSite=strict`.
  - Never expose secrets or tokens to the client; never store tokens in `localStorage` or similar insecure storage.

- **Authentication**
  - Use secure, project-chosen auth (e.g., Supabase Auth, Firebase Auth, Cognito) documented in `.local` / playbooks.
  - Sessions validated server-side; client state is not trusted for auth decisions.

- **Authorization**
  - Role and permission checks at server/backend boundaries.
  - For RLS-capable stacks (e.g., Supabase), **RLS enabled on all tables**; no bypassing RLS with raw SQL.
  - No direct DB access from client that exposes credentials or bypasses backend security.

- **External API constraints**
  - Validate and sanitize all external input.
  - Avoid unsafe patterns (`eval`, unsanitized HTML, etc.).
  - Avoid `dangerouslySetInnerHTML` (or equivalent) with untrusted content.

- **Forbidden actions (always)**
  - Committing API keys, DB passwords, JWT secrets, or any credentials.
  - Disabling or weakening RLS or equivalent backend protections.
  - Storing auth tokens in localStorage or non-HttpOnly cookies.
  - Using `dangerouslySetInnerHTML` (or equivalent) with untrusted content.
  - Using `eval` or similar on untrusted data.

- **Allowed actions (Light Mode)**
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

- **Effective file layout rules**
  - ADAS structure:
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
  - Code layout (baseline, refined by project):
    - `src/app` for routes/pages.
    - `src/components` for shared UI components.
    - `src/lib` for utilities, validators, server logic.
    - `src/domain` / `src/data` if present for business logic and repositories.
    - `src/types`, `src/hooks`, `src/styles` as needed.
    - `tests/{unit,integration,e2e}` for tests.

- **How to name files**
  - ADAS domain files follow `Domain <##> - <title> - Specification.md` / `Skeleton.md` / `(web-app).md` patterns.
  - `.local` overrides follow `<##>_<short-name>.local.md`.
  - Code files and folders typically use **kebab-case** or the project’s established convention; match what you see.

- **Folder conventions & placement**
  - Place new tests under the correct `tests` subfolder with `*.test.ts` (or project-standard) naming.
  - Place validators under `lib/validators` (or equivalent).
  - Place server-only utilities under `lib/server` (or equivalent).
  - Keep ADAS/ADR files in their prescribed directories; do not create new ADAS files in arbitrary locations.

- **Rules AI must always respect (Light Mode)**
  - Load only the **summary** of Domain 14 to know where ADAS lives and how `.local` overrides are named.
  - Respect existing file and folder naming conventions.
  - Do **not**:
    - Create new ADAS domain or `.local` files.
    - Restructure the ADAS directory tree.

---

## 3.10 Domain 15 — ADAS Overview & Maintenance

- **Versioning rules**
  - ADAS uses semantic versioning:
    - **MAJOR** — breaking changes.
    - **MINOR** — additive, non-breaking.
  - Current Core version: **1.1.0**.
  - Profile `web-app` has its own version defined in `adas-config.json`.
  - Version changes must be reflected in Domain 15, `CHANGELOG.md`, `adas-config.json`, starter templates, and relevant Domains/docs.

- **Precedence model**
  - Reinforces that ADAS is multi-layered:
    - Core → Profile → Project `.local` → User request.
  - Non-overridable domains (`01`, `07`, `11`, `14`, `15`) cannot be weakened or contradicted by profiles or `.local`.

- **How ADAS evolves**
  - All substantive ADAS changes require an ADR (Domain 11).
  - When ADRs are accepted, maintainers update Core Domains, Profile Domains, starter `.ai` folders, documentation, and version fields.

- **What the AI must do when encountering conflicts**
  - Detect version mismatches or conflicting rules between Core, Profile, and `.local`.
  - Treat non-overridable domains and security rules as authoritative.
  - In Light Mode, you may mention issues but **must not** attempt ADAS upgrades or governance changes.

- **Profile + mode selection**
  - Projects declare their active profile and ADAS versions in `.ai/00_ai-entry-point-meta-rules.md`.
  - Mode (Light vs Heavy) is determined per task using `adas-usage-modes.md` and Domain 01 rules.
  - In this compiled profile, Light Mode is assumed and must be honored.

---

# 4. Effective Invariants (Non-Negotiable Rules)

- **Security boundaries**
  - No secrets or credentials in code or logs.
  - Auth is handled by a secure, documented provider; sessions validated server-side.
  - For RLS-capable stacks, RLS (or equivalent backend protections) must not be bypassed or disabled.
  - No direct DB/BaaS connections from the client that expose credentials or bypass backend security.
  - Secrets are backend-only, read from environment/secret manager; never exposed client-side.
  - Session cookies (where used) remain `HttpOnly`, `Secure`, `SameSite=strict`.
  - No storage of tokens in localStorage or other insecure client storage.
  - No `dangerouslySetInnerHTML` (or equivalent) with untrusted content; all external input validated and sanitized.
  - No `eval` or equivalent on untrusted data.

- **Architectural boundaries**
  - The project’s chosen stack group(s) and architecture (documented in `.local` / playbooks) are authoritative; do not switch them.
  - Clear separation of UI/presentation, application/domain logic, and data access/persistence.
  - No business logic in UI components; business logic resides in application/domain or server/lib layers.
  - Centralized validation for external inputs (e.g., `lib/validators` or equivalent).
  - No cross-layer imports that break defined boundaries; no circular dependencies.
  - Configuration and secrets isolated from application logic.

- **Tech stack constraints**
  - Strong typing at boundaries is mandatory (TypeScript, schemas, etc.).
  - No new untyped JavaScript or untyped “escape hatches” at core boundaries without explicit, documented reason (which you cannot add in Light Mode).
  - Testing stack and commands defined by project; for typical web-app starters: Vitest + Testing Library + Playwright; no alternative runners for new tests.

- **Governance invariants**
  - ADAS precedence: Core → Profile → `.local` → User request.
  - Non-overridable domains (`01`, `07`, `11`, `14`, `15`) cannot be contradicted by profile or `.local` rules.
  - Domain 12 (Security) may only be **tightened**, never weakened, by profiles or `.local`.
  - In Light Mode:
    - No ADR creation or modification.
    - No ADAS or `.local` file changes.
    - No new dependencies or major config changes.

- **Naming/structure invariants**
  - ADAS files follow Domain 14 naming and placement rules.
  - Tests live under `tests/{unit,integration,e2e}` (or documented project variant) with `*.test.ts` naming.
  - New code and tests must align with existing project naming and layout conventions.

These invariants are **non-negotiable** and must never be violated.

---

# 5. Profile Overlays — Effective Merged Rules

This is the **final merged truth** for `web-app` in **Light Mode**:

- **Environment & stack**
  - You are in a **web application** governed by ADAS Core 1.1.0 and the `web-app` profile.
  - The project has chosen a concrete stack from the permitted web-app stack groups and documented it in `.local` / playbooks; you must follow that choice and may not change it.
  - Use only existing dependencies; do **not** add or change them in Light Mode.

- **Architecture & organization**
  - Follow the profile’s layered structure (`src/app`, `src/components`, `src/lib/server`, `src/lib/validators`, `src/types`, `src/hooks`, `src/styles`, `tests/`), refined by project `.local` and framework conventions.
  - Maintain a **layered design**: UI/presentation, application/domain logic, data access/persistence.
  - Keep business logic out of components; use application/domain or server/lib layers and validators.
  - Maintain clear layering; avoid cross-layer or circular imports.

- **Testing & quality**
  - Use the project’s documented testing stack (commonly Vitest + Testing Library + Playwright).
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

- **Good ADAS-respecting Light Mode changes**
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

- **Bad ADAS-violating Light Mode changes**
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

- **How to detect ADAS violations**
  - Compare requested or planned changes against:
    - Security invariants (Domain 12 + web-app profile + `.local`).
    - Architectural rules (Domain 04 + web-app + `.local`).
    - Tech stack constraints (Domain 03 + web-app + project Stack Profile).
    - Non-overridable domains (`01`, `07`, `11`, `14`, `15`).
    - Existing ADRs (Domain 11) and invariants/pitfalls (Domain 10).
  - Red flags include requests to:
    - Add dependencies, change frameworks, or alter auth/roles/RLS.
    - Move or reorganize large parts of the codebase.
    - Log or expose secrets, or “temporarily” weaken security.
    - Edit ADAS/ADR files or `adas-config.json`.

- **How to surface conflicts to the user**
  - Explicitly name the violated rule and its source, e.g.:
    - “This would store tokens in localStorage, which Domain 12 forbids.”
    - “Adding a new dependency is not allowed in Light Mode; that requires Heavy Mode or human approval.”
  - Explain the risk (security, maintainability, architectural integrity).
  - Offer ADAS-compliant alternatives (e.g., server-side sessions, using existing libraries, local refactors).

- **What to do when rules are ambiguous**
  - If ADAS does not clearly cover a small, local case:
    - Choose the safest, least invasive option that matches existing patterns.
  - If ambiguity involves security, architecture, or stack:
    - Ask the user for clarification or recommend handling it in Heavy Mode.
  - Never assume permission to weaken security (Domain 12 is extend-only) or violate non-overridable domains due to ambiguity.

---

# 8. Final Summary for AI Helpers

Operate as a **precise, security-first local maintainer** of an ADAS-governed web app: load only the minimal Light-Mode ADAS context; make small, focused changes that match the project’s chosen stack, architecture, and testing patterns; never alter architecture, tech stack, auth, RLS, or secret handling; never add dependencies, ADRs, or ADAS edits; strictly respect ADAS precedence and all security and structural invariants; and whenever a user request would violate these rules, refuse or adjust it while clearly explaining the ADAS-compliant alternative.