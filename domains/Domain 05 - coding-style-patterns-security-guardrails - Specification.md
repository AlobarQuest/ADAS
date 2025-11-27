# Domain 05 – Coding Style, Patterns & Immediate Security Guardrails — Specification

## 1. Purpose
This Domain defines how code should look and behave at the micro level.
It ensures consistency in naming, formatting, patterns, and inline security practices so that every change is safe and readable.

## 2. Scope & Responsibilities
- Covers:
  - Naming conventions for variables, functions, classes, and files.
  - Formatting rules (linting, line length, imports).
  - Preferred patterns and prohibited anti-patterns.
  - Inline security rules (e.g., sanitization, logging of sensitive data).
- Applies to all AI-generated code, including tests and scripts.

## 3. Core Principles & Rules
- **Consistency Over Cleverness:** Prefer clear, conventional code over novelty.
- **Explicit Over Implicit:** Make side effects and important assumptions visible in code.
- **Security by Default:**
  - Never log secrets or keys.
  - Always validate and sanitize external input.
  - Prefer safe APIs over low-level, unsafe operations.
- **Naming:**
  - Use descriptive, domain-aligned names.
  - Follow stack-specific style guides (e.g., `snake_case` vs `camelCase`).
- **Patterns:**
  - Adopt a small set of officially encouraged patterns (documented in this Domain).
  - List explicit anti-patterns that are not allowed.

## 4. Operational Guidelines for AI Helpers
- When generating code:
  - Match the existing style of the file/project.
  - Apply the documented naming and formatting rules.
- Before returning code:
  - Re-scan for:
    - Raw secrets or keys.
    - Un-sanitized input.
    - Logging of sensitive data.
- When encountering legacy code that violates rules:
  - Do not silently adopt legacy style.
  - Note the discrepancy in **Rationale & Alignment** and, where appropriate, recommend a cleanup plan.

## 5. Interfaces with Other Domains
- Constrained by:
  - Domain 03 (Tech Stack) for library and pattern choices.
  - Domain 12 (Security & Secrets) for deeper security guarantees.
- Influences:
  - Domain 06 (Testing & Quality) for how tests are written.
  - Domain 10 (Pitfalls & Invariants) when style interacts with critical invariants.

## 6. Change Management
- Changes to style rules:
  - Should be introduced via ADRs.
  - May require a one-time refactor or auto-format run.
- When adding a new pattern:
  - Document when it should be used, pitfalls, and examples.
