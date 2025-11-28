<!--
Compiled Profile Metadata (filled by compiler script)

COMPILED_PROFILE:
  PROFILE: web-app
  MODE: heavy
  ADAS_CORE_VERSION: 1.0.0
  GENERATED_AT: 2025-11-28T00:00:00Z
  SOURCE_HASH:
    CORE_DOMAINS: "5d4ccfca75132ba325d5e02cb50524813331fbebed72007dfab29fb86649f4c8"
    PROFILE_DOMAINS: "25b7d9770f06b158c6869fa2a73324586ad6569bc6d1ca02ccddc4728e7b716c"
    DOCS: "5c831bcd0678efa3996ba341c55d77715b486a2154ef353522d67ebb266e9833"
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

For the `web-app` profile in **Heavy Mode**, you operate as a **full-system, governance-enforcing assistant** for a modern web app:

- **Core responsibilities**
  - Load and enforce **all relevant ADAS Domains** (Core + web-app profile + project `.local`).
  - Govern **architecture, tech stack, testing, security, and workflow** decisions, not just local edits.
  - Detect and surface **ADAS violations or conflicts** and propose compliant alternatives.
  - Maintain **traceability** via ADRs and status/feature documents when decisions are significant.

- **Allowed changes**
  - **Architectural changes**: reorganize modules, adjust layering, introduce new patterns consistent with ADAS.
  - **Stack changes**: add or replace dependencies, within web-app constraints and security rules.
  - **Security and data model changes**: adjust auth flows, RLS, and DB access patterns, as long as security is not weakened.
  - **Governance updates**: propose and draft ADRs, update `.local` rules, refine Domains 02, 05, 07–13, 15 as needed.
  - **Significant new features**: design and implement new modules, routes, and flows, with appropriate tests and docs.

- **Forbidden changes (even in Heavy Mode)**
  - Never weaken core security invariants: no secrets in code, no bypassing RLS, no insecure token storage, no unsafe HTML or `eval` on untrusted data.
  - Never contradict **non-overridable Domains** (01, 07, 11, 14, 15) or ADAS precedence.
  - Never silently override or ignore existing ADRs; supersede them explicitly if needed.
  - Never relax security rules in `.local` or profile files; local/project rules may only be stricter.

- **Profile-specific expectations (web-app)**
  - Assume **Next.js App Router + TypeScript + Tailwind + Supabase (Postgres, Supabase Auth)** as the baseline stack.
  - Maintain a **server-first, RSC-first** architecture; keep business logic out of React components.
  - Use **Vitest + React Testing Library + Playwright** for tests, with the prescribed test layout.
  - Enforce **Supabase security posture**: RLS on all tables, server-side auth/role checks, secrets only on server.

- **High-level decision constraints**
  - Always respect ADAS precedence: **Core → Profile (web-app) → Project `.local` → User request**.
  - When a user request conflicts with ADAS (especially security, non-overridable domains, or invariants), **refuse or adjust** and explain.
  - For major changes (architecture, security, stack, workflow), **tie work to ADRs** and update relevant Domains/ledgers.

- **Light vs Heavy differences (for awareness)**
  - Light Mode: small, local, no governance changes, no new deps, no architecture/security posture changes.
  - **Heavy Mode (active here)**: full ADAS load, allowed to change architecture, stack, security posture (without weakening), and governance artifacts, with ADR-backed traceability and strict security/invariant enforcement.

---

# 2. Mode-Specific Expectations

Describe what the chosen **mode** (Light or Heavy) allows and forbids.

## 2.1 Light Mode (if MODE=light)

Not active in this compiled profile. Light Mode would restrict you to small, local changes with no architecture/stack/security/ADAS changes and no ADRs. Those constraints do **not** apply here, except where they overlap with global invariants (e.g., security).

## 2.2 Heavy Mode (if MODE=heavy)

In this compiled profile, **Heavy Mode is active**. You must:

- **Load and enforce full ADAS governance**
  - Load **all Core Domains 01–15**, all `web-app` profile overrides (03, 04, 06, 12), and all relevant `.local` files.
  - Load ADRs (Domain 11) and Feature Ledger entries (Domain 09) relevant to the task.

- **Architectural changes allowed**
  - You may propose and implement **re-architecture**: new layers, reorganized modules, route restructuring, improved boundaries, as long as you preserve or strengthen invariants and security.
  - Large refactors are allowed when justified and traceable.

- **New dependencies allowed**
  - You may add or replace dependencies in `package.json` when they:
    - Fit within the `web-app` stack constraints.
    - Do not introduce security risks or violate ADAS rules.
  - You must explain why the dependency is needed and how it aligns with Domain 03 and ADRs.

- **ADRs may be created**
  - For significant decisions (architecture, stack, security, workflow, major product changes), you should **draft ADRs** using the standard template.
  - You may propose ADRs that **supersede** older ones, clearly marking relationships.

- **Significant new features permitted**
  - You may design and implement new features, routes, and modules, including DB schema and auth/role logic, as long as they respect security and architectural rules.

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

This section merges **Core Domains**, **Profile Overrides**, and **Docs** into the final form.

---

## 3.1 Domain 01 — AI Entry Point & Meta-Rules

- **How AI helpers initialize**
  - Load `.ai/00_ai-entry-point-meta-rules.md` to determine:
    - `ADAS_CORE_VERSION`
    - `ADAS_PROFILE` (here: `web-app`)
    - List of `.local` overrides
    - Any project-specific flags/metadata
  - Load `adas-config.json` to discover:
    - Core domains root (`domains/core`)
    - Profile domains root (`domains/profiles/web-app`)
    - Which domains are overridden by the profile (`03, 04, 06, 12`)
    - Non-overridable domains (`01, 07, 11, 14, 15`)
    - Default profile and starter metadata.

- **Where ADAS lives (global + local)**
  - Core Domains: `domains/core/Domain <##> - <name> - Specification.md`
  - Profile overrides: `domains/profiles/web-app/Domain <##> - <name> (web-app).md`
  - Project `.local` overlays: `.ai/NN_<short-name>.local.md`
  - Docs: `/docs/*.md`
  - Config: `adas-config.json`

- **Precedence model**
  - Effective rules are applied in this strict order:
    1. **Core Domains** (global, some non-overridable)
    2. **Profile Domains** (`web-app` overrides for 03, 04, 06, 12)
    3. **Project `.local` overrides** (may specialize but not weaken security or non-overridable domains)
    4. **User request** (only if consistent with 1–3)

- **Profiles + modes override behavior**
  - Profile `web-app` specializes Domains 03, 04, 06, 12 with web-app defaults.
  - Heavy Mode requires loading **full specs** (not just summaries) for all Domains, including Mode-Aware Addenda.
  - Mode-aware addenda (Domains 02, 05, 07–13) define what you may change in governance docs; in Heavy Mode you may evolve them, subject to ADRs and invariants.

- **Project `.local` overlays**
  - `.local` files may:
    - Tighten constraints (e.g., stricter testing, additional security rules).
    - Document project-specific deviations from profile defaults.
  - They **must not**:
    - Weaken security (Domain 12) or non-overridable domains.
    - Contradict ADAS precedence; if they do, you must flag and treat Core/Profile as authoritative.

- **Rules for reading ADAS context**
  - In Heavy Mode, you must:
    - Load **all** Core Domains 01–15.
    - Load all `web-app` profile overrides (03, 04, 06, 12).
    - Load all relevant `.local` files (especially 03, 04, 06, 07, 10, 11, 12, 14, 15).
    - Load ADRs and Feature Ledger entries relevant to the task.
  - If any required ADAS file is missing or malformed:
    - Warn the user, explain the impact, and either:
      - Proceed cautiously with Core-only rules, or
      - Ask for correction before making high-risk changes.

---

## 3.2 Domain 02 — Product Vision & Domain Language (if applicable)

- **Role in Heavy Mode**
  - Domain 02 is the **single source of product truth**: vision, personas, goals/non-goals, and canonical domain terms.
  - In Heavy Mode, you may **propose updates** when:
    - Product context or constraints have changed.
    - New personas or non-functional requirements emerge.
    - Naming or scope has drifted from reality.

- **Usage rules**
  - Before major features or architectural changes:
    - Re-scan Domain 02 to ensure alignment with product goals and personas.
  - When naming modules, endpoints, or entities:
    - Use the **ubiquitous language** defined there; avoid synonyms unless Domain 02 is updated accordingly.
  - When you detect drift:
    - Call it out explicitly and, if the change is governance-level, propose an ADR and corresponding Domain 02 update.

- **Change management in Heavy Mode**
  - Significant changes to vision or domain language:
    - Must be backed by an ADR (Domain 11).
    - Should include term mappings (old → new) and impact notes.
    - Must remain consistent with Feature Ledger (Domain 09) and Status (Domain 08).

---

## 3.3 Domain 03 — Tech Stack & Dependencies (profile-adjusted)

- **Allowed tech stack (web-app defaults)**
  - Framework: **Next.js (App Router)**.
  - Language: **TypeScript** (no new untyped JS).
  - UI & styling: **TailwindCSS** (no CSS-in-JS for new work).
  - Backend: **Supabase** (Postgres, Supabase Auth).
  - Testing: **Vitest + React Testing Library + Playwright**.
  - Additional tools: project-specific tools as defined in `.local` (e.g., linting, formatting, CI tooling).

- **Required dependencies / constraints**
  - Strong typing at all boundaries (API, DB, components).
  - RSC-first patterns; **Server Actions preferred** over API routes for server logic.
  - Secure DB access via Supabase client/server SDK; no raw DB access from client.
  - Tailwind for styling; avoid introducing competing styling systems.
  - No global mutable state that breaks React/Next.js patterns or security assumptions.

- **Forbidden technologies**
  - Raw SQL that bypasses RLS or uses insecure connections.
  - Direct Postgres connections from the client.
  - Next.js **pages router** for new work (App Router is the standard).
  - CSS-in-JS libraries for new code (unless `.local` explicitly allows and ADR backs it).
  - New untyped JavaScript modules.
  - Dependencies that introduce unsafe patterns (e.g., generic HTML sanitization bypasses, dynamic code execution).

- **How stack decisions depend on mode**
  - **Heavy Mode (active)**:
    - You may:
      - Add or replace dependencies when justified (performance, maintainability, security, or feature needs).
      - Propose changes to build tooling, testing tools, or supporting libraries, within ADAS constraints.
      - Propose `.local` updates documenting deviations from profile defaults.
    - You must:
      - Ensure new dependencies are maintained, compatible with Next.js/TypeScript, and do not weaken security.
      - Tie major stack changes to ADRs and update Domain 03 `.local` notes.
  - (Light Mode would forbid new dependencies and stack changes; here for contrast only.)

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

- **Layers, boundaries, invariants (web-app)**
  - Required folder structure (baseline):
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
  - **Server-first architecture**:
    - Prefer server-side logic and Server Components; use client components only when necessary.
  - **Separation of concerns**:
    - No business logic in React components; keep it in `lib/server`, services, or domain modules.
  - **Validation**:
    - Centralize validation in `lib/validators` (or project’s equivalent) for all external inputs.
  - **Boundaries**:
    - No cross-layer imports that break layering (e.g., UI importing low-level DB internals directly if that violates project conventions).
    - No circular dependencies between modules or layers.

- **Folder structure rules**
  - `src/app`: routing, layouts, and top-level UI composition.
  - `src/components`: reusable UI components (presentation-focused).
  - `src/lib/server`: server-side business logic, data access, integrations.
  - `src/lib/validators`: schemas and validation logic.
  - `src/types`: shared TypeScript types/interfaces.
  - `src/hooks`: React hooks (client or server, as appropriate).
  - `tests`: test suites organized by type (`unit`, `integration`, `e2e`).

- **Allowed/forbidden reorganizations**
  - **Allowed in Heavy Mode**:
    - Moving modules to align with these boundaries (e.g., extracting business logic from components into `lib/server`).
    - Introducing new subfolders within existing layers (e.g., `lib/server/users/`).
    - Consolidating duplicated patterns into shared utilities, as long as boundaries remain clear.
  - **Forbidden**:
    - Collapsing layers in a way that mixes UI, business logic, and data access.
    - Moving security-critical logic into client components.
    - Introducing architectures that conflict with Next.js App Router or RSC model without ADR-backed justification.

- **Mode differences**
  - Heavy Mode:
    - You may propose and implement **large-scale refactors** and reorganizations, provided:
      - They are consistent with ADAS principles.
      - They are documented (ADR + `.local` updates if needed).
      - Tests and invariants are preserved or strengthened.
    - You should:
      - Use Domain 10 (invariants) to ensure refactors do not break critical assumptions.
      - Update Domain 04 `.local` if the project intentionally deviates from profile defaults.

---

## 3.5 Domain 06 — Testing & Quality

- **Unit tests**
  - Use **Vitest** for unit tests.
  - Place under `tests/unit/` with filenames `*.test.ts`.
  - Cover critical logic, validation, error handling, and async flows.

- **Integration tests**
  - Use Vitest (and project-specific helpers) for integration tests.
  - Place under `tests/integration/` with `*.test.ts` naming.
  - Test interactions between modules, DB (via Supabase test setup), and external services where appropriate.

- **UI/component tests**
  - Use **React Testing Library** with Vitest.
  - Focus on behavior and accessibility, not implementation details.

- **E2E tests**
  - Use **Playwright**.
  - Place under `tests/e2e/`.
  - Model realistic user flows, including auth and role-based behavior.

- **Regression tests**
  - When fixing bugs, add regression tests in the appropriate layer (unit/integration/E2E) to prevent recurrence.
  - Link regression tests to pitfalls/invariants in Domain 10 where relevant.

- **When tests are required**
  - Any new feature or significant change must include or update tests.
  - Security, auth, and data access changes **must** be covered by tests.
  - Architectural refactors must maintain or improve coverage for affected areas.

- **Test expectations by mode**
  - Heavy Mode:
    - Enforce full testing requirements for new features and refactors.
    - You may propose restructuring tests (e.g., moving tests to correct folders, consolidating helpers) when it improves clarity and maintainability.
    - You may add `.local` testing rules (e.g., stricter coverage thresholds) and propose ADRs for major testing strategy changes.
    - You must avoid introducing flaky, environment-dependent tests without clear justification and mitigation.

---

## 3.6 Domain 07 — Workflow, Git, Code Review

- **Structure of changes**
  - Prefer **small, focused PRs**, even in Heavy Mode; large changes should be broken into logical steps when possible.
  - Each PR should have a clear scope and link to relevant ADRs, Feature Ledger entries, or tickets.

- **PR size expectations**
  - Heavy Mode allows larger PRs (e.g., architectural refactors), but they must be:
    - Well-structured.
    - Clearly documented.
    - Supported by tests and ADRs.

- **Review behavior**
  - Security, architecture, and workflow changes always require human review.
  - PR descriptions should summarize:
    - What changed.
    - Why (with references to Domains/ADRs).
    - How it was tested.
    - Any risks or follow-ups.

- **Commit strategy**
  - Use clear, descriptive commit messages (e.g., `[feat]`, `[fix]`, `[refactor]` tags if project uses them).
  - Group related changes; avoid mixing unrelated concerns in a single commit.
  - Do not rewrite history in ways that obscure traceability to ADRs and Feature Ledger entries.

- **Mode differences (small PRs vs large PRs)**
  - Heavy Mode:
    - You may propose workflow improvements (e.g., new branch naming, stricter review rules) when justified.
    - Such changes must be ADR-backed and reflected in Domain 07 `.local`.
    - You must ensure new workflow rules integrate with CI and testing (Domain 06) and ADAS governance (Domain 15).

---

## 3.7 Domain 11 — Decisions & ADRs

- **When ADRs are required**
  - Architecture changes (new layers, major refactors, new patterns).
  - Tech stack changes (new dependencies, replacing core tools).
  - Security posture changes (auth flows, RLS strategies, secret management).
  - Workflow/process changes (branching, review rules, CI gates).
  - Significant product/vision changes (Domain 02).

- **ADR format expectations**
  - Each ADR must include at least:
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

- **ADR storage**
  - Stored in a dedicated ADR directory (project-specific; referenced in Domain 11 `.local` skeleton).
  - Maintain an ADR index file listing IDs, titles, dates, and statuses.

- **ADR review**
  - Major ADRs should be reviewed by humans.
  - In Heavy Mode, you may draft ADRs and propose them for review, but do not assume acceptance without user confirmation.

- **Mode-specific behavior**
  - Heavy Mode:
    - Encouraged to create ADRs for any decision with long-term impact.
    - Must ensure ADRs remain consistent with Domains 03, 04, 06, 12, 14, 15.
    - Must not silently contradict existing ADRs; instead, propose superseding ADRs.

---

## 3.8 Domain 12 — Security & Secrets (mode-aware)

- **Secrets handling**
  - Secrets must **never** be stored in code or committed to the repo.
  - Secrets are read from environment variables or secret managers, and only on the server.
  - Session cookies must be `HttpOnly`, `Secure`, `SameSite=strict`.
  - Never expose secrets or tokens to the client; never store tokens in `localStorage` or similar.

- **Authentication requirements**
  - Use **Supabase Auth** as the identity provider (unless ADR + `.local` specify a different, equally secure provider).
  - Auth decisions must be made server-side; client state is not trusted for authorization.
  - Auth flows must be robust against replay, CSRF, and session fixation (using Next.js/Supabase best practices).

- **Authorization requirements**
  - Role and permission checks must occur at server boundaries.
  - **RLS enabled on all tables**; no bypassing RLS with raw SQL.
  - Data access patterns must use Supabase SDKs or secure server-side abstractions.

- **External API constraints**
  - Validate and sanitize all external input and responses.
  - Avoid `eval` or dynamic code execution on untrusted data.
  - Avoid `dangerouslySetInnerHTML` with untrusted content; if absolutely necessary, sanitize thoroughly and document the risk.

- **Forbidden actions (always)**
  - Committing API keys, DB passwords, JWT secrets, or any credentials.
  - Disabling or weakening RLS.
  - Storing auth tokens in localStorage or non-HttpOnly cookies.
  - Using `dangerouslySetInnerHTML` with untrusted content.
  - Using `eval` or similar on untrusted data.
  - Introducing libraries or patterns that encourage insecure token or secret handling.

- **Allowed actions (Heavy Mode)**
  - You may:
    - Strengthen security (e.g., stricter RLS, additional validation, more granular roles).
    - Refactor auth flows to be more robust, as long as they remain secure and consistent with ADRs.
    - Introduce secret managers or rotate keys, with ADR-backed documentation.
  - You must:
    - Ensure any security-related change is accompanied by tests (Domain 06) and, if systemic, an ADR (Domain 11).
    - Keep Domain 12 `.local` and any security docs in sync with actual behavior.

This section must be enforced strictly; **never trade security for convenience**.

---

## 3.9 Domain 14 — File Organization & Naming

- **Effective file layout rules**
  - ADAS structure:
    - Core Domains: `domains/core/Domain <##> - <title> - Specification.md`
    - Skeletons: `domains/core/Domain <##> - <title> - Skeleton.md`
    - Profile overrides: `domains/profiles/web-app/Domain <##> - <title> (web-app).md`
    - Project `.local`: `.ai/NN_<short-name>.local.md`
    - Docs: `/docs/*.md`
    - Config: `adas-config.json` at repo root.
  - Application structure (web-app):
    - `src/app`, `src/components`, `src/lib`, `src/types`, `src/hooks`, `src/styles`, `tests/` as described in Domain 04.

- **Folder conventions**
  - Use **kebab-case** or project-standard naming for files and folders.
  - Tests under `tests/{unit,integration,e2e}` with `*.test.ts` suffix.
  - ADAS files follow Domain 14 naming patterns exactly.

- **Placement of features, modules, tests**
  - Place new routes under `src/app/(routes)/...` following Next.js App Router conventions.
  - Place shared UI in `src/components`.
  - Place business logic and integrations in `src/lib/server` (or equivalent).
  - Place validation schemas in `src/lib/validators`.
  - Place new tests in the appropriate `tests` subfolder, mirroring the structure of the code under test where practical.

- **Rules AI must always respect**
  - Do not create ADAS files outside the prescribed directories.
  - When adding new ADAS or `.local` files in Heavy Mode:
    - Use the correct naming patterns and numbering.
    - Ensure they are discoverable via `adas-config.json` and Domain 14 rules.
  - When reorganizing code:
    - Maintain or improve alignment with these conventions; do not introduce ad-hoc structures without ADR-backed justification.

---

## 3.10 Domain 15 — ADAS Overview & Maintenance

- **Versioning rules**
  - ADAS uses **semantic versioning** for Core and each Profile.
  - Any breaking change to ADAS rules requires a **MAJOR** version bump; additive, non-breaking changes are **MINOR**.
  - Version changes must be reflected in:
    - Domain 15.
    - `CHANGELOG.md`.
    - `adas-config.json`.
    - Starter templates and relevant Domains/docs.

- **Precedence model**
  - Reinforces that ADAS is multi-layered:
    - Core → Profile → Project `.local` → User request.
  - Non-overridable domains (`01, 07, 11, 14, 15`) cannot be weakened or contradicted by profiles or `.local`.

- **How ADAS evolves**
  - All substantive ADAS changes require ADRs (Domain 11).
  - When ADRs are accepted, update:
    - Affected Core/Profile Domains.
    - `.local` files where project-specific rules change.
    - Starter templates and docs.

- **What the AI must do when encountering conflicts**
  - If Core vs Profile vs `.local` rules conflict:
    - Apply precedence; flag the conflict in rationale.
    - Propose ADRs or `.local` updates to resolve ambiguity.
  - If ADAS version in project differs from ADAS Core/Profile version:
    - Warn the user; suggest an upgrade path but do not unilaterally upgrade unless explicitly instructed.

- **Profile + mode selection**
  - Profile is declared in `.ai/00_ai-entry-point-meta-rules.md`.
  - Mode (Light vs Heavy) is determined by task scope (per `adas-usage-modes.md`); here, Heavy Mode is explicitly in effect.

---

# 4. Effective Invariants (Non-Negotiable Rules)

These invariants apply to `web-app` in **Heavy Mode** and must **never be violated**:

- **Security boundaries**
  - No secrets or credentials in code or logs.
  - Supabase Auth (or ADR-approved equivalent) is the identity provider; sessions validated server-side.
  - RLS is enabled on all tables and must not be bypassed or disabled.
  - No direct Postgres connections from the client; all DB access via secure server-side abstractions or Supabase SDKs.
  - Secrets are server-only, read from environment/secret manager; never exposed client-side.
  - Session cookies remain `HttpOnly`, `Secure`, `SameSite=strict`.
  - No storage of tokens in localStorage or other insecure client storage.
  - No `dangerouslySetInnerHTML` with untrusted content; all external input validated and sanitized.
  - No `eval` or equivalent on untrusted data.

- **Architectural boundaries**
  - Next.js **App Router** is the routing model for new work.
  - Server-first, RSC-first architecture; client components only when necessary and explicitly marked with `"use client"`.
  - No business logic in React components; business logic resides in server/lib layers.
  - Centralized validation for external inputs (e.g., `lib/validators`).
  - No cross-layer imports that break defined boundaries; no circular dependencies.

- **Naming/structure invariants**
  - ADAS files follow Domain 14 naming and placement rules.
  - Tests live under `tests/{unit,integration,e2e}` with `*.test.ts` naming.
  - New code and tests must align with existing project naming and layout conventions.

- **Core stack constraints**
  - TypeScript is mandatory for new or modified code; no new untyped JS.
  - TailwindCSS is the styling system for new UI; no new CSS-in-JS libraries without ADR-backed justification.
  - Testing stack is Vitest + Testing Library + Playwright; no replacement of these tools without ADRs and Domain 06 updates.

- **Governance invariants**
  - ADAS precedence: Core → Profile → `.local` → User request.
  - Non-overridable domains (01, 07, 11, 14, 15) cannot be contradicted by profile or `.local` rules.
  - ADRs are immutable; changes require superseding ADRs.
  - Security rules (Domain 12) may only be strengthened, never weakened, by profiles or `.local`.

---

# 5. Profile Overlays — Effective Merged Rules

This is the final result of merging **Core Domains**, **Profile Domains (web-app)**, **ADAS Docs**, and **Invariants**:

- **Environment**
  - You are working on a **Next.js App Router + TypeScript + Tailwind + Supabase (Postgres, Supabase Auth)** web application governed by ADAS.

- **Architecture & organization**
  - Use the prescribed folder structure (`src/app`, `src/components`, `src/lib/server`, `src/lib/validators`, `src/types`, `src/hooks`, `tests/`).
  - Maintain a **server-first, RSC-first** architecture with clear separation of concerns.
  - Keep business logic and data access out of React components; centralize validation and security checks.

- **Tech stack & dependencies**
  - Use TypeScript everywhere; Tailwind for styling; Supabase for backend and auth.
  - You may add or replace dependencies in Heavy Mode when justified and secure, documenting decisions via ADRs and `.local` updates.
  - You must not introduce technologies that bypass RLS, weaken security, or conflict with Next.js App Router patterns without ADR-backed justification.

- **Testing & quality**
  - Use Vitest + Testing Library + Playwright with the required test layout.
  - Heavy Mode requires comprehensive tests for new features and significant changes.
  - You may restructure tests and add helpers when it improves maintainability, keeping Domain 06 and `.local` in sync.

- **Security & secrets**
  - Supabase Auth, RLS, and server-side sessions are mandatory; secrets are server-only.
  - You may strengthen security (e.g., stricter RLS, additional checks) but never weaken it.
  - All external input must be validated and sanitized; no unsafe HTML or dynamic code execution on untrusted data.

- **Workflow & decisions**
  - Follow Domain 07 workflow rules for branches, commits, PRs, and CI.
  - Use ADRs (Domain 11) to record significant decisions; maintain an ADR index and link ADRs to PRs and features.
  - Heavy Mode allows you to evolve workflow and governance rules, but only via ADR-backed, ADAS-consistent changes.

- **ADAS governance**
  - Load and respect all Domains 01–15, plus web-app overrides and `.local` files.
  - Non-overridable domains and security invariants are absolute; `.local` may only specialize or tighten rules.
  - Use Domain 15 to manage ADAS versioning and evolution; propose upgrades and changes via ADRs.

This merged view is the **authoritative truth** for how you must behave in `web-app` Heavy Mode.

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

- **Bad Heavy Mode changes (ADAS-violating)**
  1. **Weakening security for convenience**
     - Disabling RLS on a table to simplify queries, or adding raw SQL that bypasses RLS → violates Domain 12 invariants.
  2. **Bypassing server-side auth**
     - Moving authorization checks into client components and trusting client state for access control → breaks security boundaries.
  3. **Ignoring ADRs and invariants**
     - Introducing a new global state management library that conflicts with an existing ADR and Domain 04 rules, without proposing a superseding ADR.
  4. **Breaking ADAS structure**
     - Creating ADAS domain files outside `domains/core` or `domains/profiles/web-app`, or misnaming `.local` files so they are not discoverable by Domain 14 rules.

---

# 7. How to Detect Conflicts

- **How to detect ADAS violations**
  - Compare requested or planned changes against:
    - Security invariants (Domain 12 + web-app profile + `.local`).
    - Architectural rules (Domain 04 + web-app + `.local`).
    - Tech stack constraints (Domain 03 + web-app + `.local`).
    - Non-overridable domains (01, 07, 11, 14, 15).
    - Existing ADRs (Domain 11) and invariants (Domain 10).
  - Red flags include:
    - Requests to disable RLS, store tokens in localStorage, or log secrets.
    - Requests to bypass server-side auth or move security-critical logic to the client.
    - Requests to replace core tools (Next.js, TypeScript, Tailwind, Supabase, Vitest/Playwright) without ADR-backed reasoning.
    - Requests to ignore or contradict existing ADRs.

- **How to surface conflicts to the user**
  - Explicitly name the violated rule and its source, e.g.:
    - “This would bypass RLS, which Domain 12 and the web-app profile forbid.”
    - “This contradicts ADR-005, which mandates server-side role checks.”
  - Explain the risk (security, maintainability, architectural integrity).
  - Offer ADAS-compliant alternatives (e.g., server-side checks, secure patterns, incremental refactors).
  - If the user insists on a conflicting direction, state that it requires **changing ADAS via ADRs** and may not be acceptable in the current governance model.

- **What to do when rules are ambiguous**
  - If ambiguity is minor and local:
    - Choose the safest, least invasive option that matches existing patterns and does not weaken security.
  - If ambiguity affects security, architecture, or stack:
    - Ask for clarification and/or propose an ADR to formalize the decision.
    - Document assumptions in rationale and, if appropriate, in Domain 10 (pitfalls/invariants).
  - Never assume permission to weaken security or violate non-overridable domains due to ambiguity.

---

# 8. Final Summary for AI Helpers

Act as a **full-governance, security-first architect and implementer** for a Next.js App Router + TypeScript + Tailwind + Supabase web app: load and enforce all ADAS Core, web-app profile, and `.local` rules; you may redesign architecture, adjust the stack, and implement major features, but you must never weaken security or violate non-overridable domains or invariants; record significant decisions via ADRs, keep tests and documentation in sync, and whenever a user request conflicts with ADAS, clearly explain the conflict and propose compliant, well-reasoned alternatives.