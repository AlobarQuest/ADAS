# Domain 09 – Feature Ledger — Specification

## 1. Purpose
This Domain provides a structured, living inventory of features across their lifecycle.
Its purpose is to prevent duplicate implementations, resurrected deprecated features, and forgotten commitments.

## 2. Scope & Responsibilities
- Covers:
  - Feature IDs, names, and descriptions.
  - States (idea, planned, in progress, shipped, refactored, deprecated, removed).
  - Links to ADRs, PRs, and relevant code locations.
  - Tags (persona, domain area, risk level, priority).
- Applies to any substantive user-facing or system-level behavior.

## 3. Core Principles & Rules
- **Uniqueness:** Every feature has a stable ID and name.
- **Lifecycle Clarity:** Each feature’s state is always clear.
- **Traceability:** Important features must link to ADRs or PRs when applicable.
- **No Resurrection Without Review:** Deprecated or removed features may not be reintroduced without an explicit decision.

## 4. Operational Guidelines for AI Helpers
- Before proposing a new feature:
  - Search the ledger for similar or related entries.
  - Reuse or extend existing features when appropriate.
- When implementing a feature:
  - Update its state (e.g., from planned → in progress → shipped).
  - Add links to relevant commits/PRs.
- When deprecating or removing:
  - Set the new state.
  - Note rationale and impact, and reference any ADR.

## 5. Interfaces with Other Domains
- Aligned with:
  - Domain 02 (Vision) to ensure features support product goals.
  - Domain 08 (Status) to reflect active work.
  - Domain 11 (Decisions) for feature-level decisions.
- Informs Domain 10 when features are associated with historical pitfalls.

## 6. Change Management
- Schema changes to the ledger:
  - Must be documented in an ADR and applied consistently.
- When merging or splitting features:
  - Preserve original IDs with cross-references.
