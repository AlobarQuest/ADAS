# Domain 08 – Project Status / Current Work — Specification

## 1. Purpose
This Domain keeps AI helpers and humans aligned on what is currently happening in the project.
It prevents collisions, duplicate work, and changes in unstable areas by providing a continuously updated status view.

## 2. Scope & Responsibilities
- Covers:
  - Active work items.
  - Blockers and risks.
  - Recent significant changes.
  - Areas marked as unstable or frozen.
- Applies to:
  - All planning and implementation tasks.
  - AI helpers deciding where they can safely operate.

## 3. Core Principles & Rules
- **Single Status Snapshot:** Maintain a concise, up-to-date view of project status.
- **Explicit Stability:** Label areas as stable, unstable, or frozen.
- **Work Ownership:** Clearly associate work items with owners (human or AI) where applicable.
- **Short Horizon:** Focus on current and near-term work, not long-term roadmap (that belongs in Vision and Feature Ledger).

## 4. Operational Guidelines for AI Helpers
- Before starting work:
  - Read the current status snapshot.
  - Check whether the target area is stable or under active modification.
- When completing work:
  - Update status fields as appropriate (e.g., mark tasks as done, note new risks).
- If encountering conflicts:
  - Flag them in the status and output rationale section.
  - Avoid modifying areas marked frozen or unstable unless specifically instructed.

## 5. Interfaces with Other Domains
- Pulls context from:
  - Domain 02 (Vision) for priorities.
  - Domain 09 (Feature Ledger) for feature-level tracking.
- Feeds:
  - Domain 10 (Pitfalls & Invariants) when recurring issues are identified.
  - Domain 11 (Decisions) when status items lead to major decisions.

## 6. Change Management
- Status entries:
  - Should be time-stamped or otherwise track recency.
- Structure changes:
  - If the status format needs to change, update templates and note the version in Domain 15 (Overview & Maintenance).
