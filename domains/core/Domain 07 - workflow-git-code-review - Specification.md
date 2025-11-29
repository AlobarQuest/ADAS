# Domain 07 – Workflow, Git & Code Review — Specification

> **This Domain has an official Mode-Aware Addendum.**
> See: `Domain 07 - Mode-Aware Addendum.md`


## 1. Purpose
This Domain defines how changes move from idea to merged code.
It standardizes branching, commits, pull requests, and review expectations so that AI-generated work integrates cleanly with human workflows.

## 2. Scope & Responsibilities
- Covers:
  - Branch naming conventions.
  - Commit message format and tags.
  - Pull request structure and content.
  - Required checks (CI, tests) before merging.
  - Rules about when human review is required.
- Applies to both AI and human-driven changes in the repo.

## 3. Core Principles & Rules
- **Traceable Commits:** Every commit message should clearly describe its purpose and scope.
- **Small, Focused Changes:** Prefer small, incremental changes over broad refactors.
- **Review Gates:** Certain changes (e.g., security, architecture, major behavior changes) always require human review.
- **CI as Gatekeeper:** CI must pass before merging, unless explicitly overridden and documented.

## 4. Operational Guidelines for AI Helpers
- Branches:
  - Follow the documented naming scheme (e.g., `feature/...`, `bugfix/...`).
  - If project version is **1.0 or higher**, always do work on a branch (no direct commits to the default/main branch).
- Commits:
  - Use the expected subject format and optional tags (e.g., `[feat]`, `[fix]`).
  - Group related changes; avoid “mixed purpose” commits.
- Pull Requests:
  - Provide a clear summary of the change.
  - Link to relevant tickets/ADRs when applicable.
  - Include a short checklist: tests added/updated, docs updated, known impacts.

## 5. Interfaces with Other Domains
- Uses:
  - Domain 06 (Testing & Quality) to define required checks.
  - Domain 11 (Decisions) to link PRs to ADRs.
  - Domain 08 (Status) to align work with current priorities.
- Constrains how Domain 01’s meta-rules are applied during change lifecycle.

## 6. Change Management
- Workflow policy changes:
  - Require an ADR.
  - Should be summarized in an “Updates to Workflow” section for quick reference.
- Deprecated patterns (e.g., old branch schemes):
  - Must be clearly marked as legacy and gradually phased out.
