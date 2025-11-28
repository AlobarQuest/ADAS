# Domain 11 – Decisions / ADRs — Specification

> **This Domain has an official Mode-Aware Addendum.**
> See: `Domain 11 - Mode-Aware Addendum.md`


## 1. Purpose
This Domain defines how significant decisions are documented so they can be understood and respected in the future.
It prevents re-arguing settled questions and preserves the reasoning behind key choices.

## 2. Scope & Responsibilities
- Covers:
  - Architecture decisions.
  - Major product or workflow decisions.
  - Security and compliance decisions.
  - Any change with wide or long-term impact.
- Applies to both human and AI-originated decisions.

## 3. Core Principles & Rules
- **Context-Rich, Not Verbose:** Include enough context to understand the decision later without overwhelming detail.
- **Explicit Alternatives:** Record options that were considered and why they were rejected.
- **Consequences:** Capture tradeoffs and known risks.
- **Stable IDs:** Each ADR gets a unique identifier and descriptive title.

## 4. Operational Guidelines for AI Helpers
- Before proposing a major change:
  - Search existing ADRs for related decisions.
  - Avoid contradicting established decisions unless proposing a superseding ADR.
- When suggesting a new ADR:
  - Follow the ADR template (title, context, decision, consequences, status).
  - Clearly state whether it supersedes or amends an existing ADR.
- When implementing code:
  - Respect ADRs that apply to the area of work.
  - Reference ADRs in PR descriptions and, when useful, in code comments.

## 5. Interfaces with Other Domains
- Connected to:
  - Domain 02 (Vision) for product-level decisions.
  - Domain 03 (Tech Stack) for tool and dependency choices.
  - Domain 04 (Architecture) for structural decisions.
  - Domain 07 (Workflow) for process decisions.
- Referenced from:
  - Domain 09 (Feature Ledger) when features are created or changed due to decisions.

## 6. Change Management
- ADRs:
  - Are immutable historical records; they are not edited retroactively.
  - May be superseded by new ADRs; the relationship must be explicit.
- Index:
  - Maintain an index of ADRs for discoverability (by ID, Domain, date, and topic).
