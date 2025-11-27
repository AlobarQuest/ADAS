# Domain 06 – Testing & Quality — Specification

## 1. Purpose
This Domain defines how the project maintains correctness and stability over time.
It describes test types, coverage expectations, and quality gates that AI helpers must obey before code is considered complete.

## 2. Scope & Responsibilities
- Covers:
  - Unit, integration, end-to-end, and regression tests.
  - Naming and placement conventions for tests.
  - Minimum acceptable coverage or confidence thresholds.
  - Quality checks before merging changes.
- Applies to all code changes generated or modified by AI helpers.

## 3. Core Principles & Rules
- **Test-Backed Changes:** Non-trivial code changes must either:
  - Add or update tests, or
  - Explicitly justify why no test is required.
- **Appropriate Test Types:** Choose the lightest test that provides sufficient confidence.
- **Regression Focus:** When fixing bugs, always add or update tests that would have caught the issue.
- **Readable Tests:** Tests should be clear examples of intended behavior, not just implementation detail checks.

## 4. Operational Guidelines for AI Helpers
- Before implementing changes:
  - Identify existing tests that cover the area.
  - Decide whether new tests are needed.
- When adding tests:
  - Use documented naming conventions and folder structures.
  - Keep tests deterministic and isolated.
- In the **Tests** section of the output:
  - List tests created/updated, or
  - Provide a clear, specific rationale if no tests were added.

## 5. Interfaces with Other Domains
- Depends on:
  - Domain 03 (Tech Stack) to select the correct testing frameworks.
  - Domain 04 (Architecture) for understanding where tests should hook in.
- Feeds:
  - Domain 10 (Pitfalls & Invariants) by revealing recurring failure patterns.

## 6. Change Management
- Significant changes to testing strategy:
  - Must be documented in ADRs.
  - Should include examples of new patterns and how to migrate old tests.
- Coverage targets:
  - May be adjusted as the project matures; changes must be explicit and justified.
