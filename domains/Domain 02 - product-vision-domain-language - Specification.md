# Domain 02 – Product Vision & Domain Language — Specification

## 1. Purpose
This Domain defines what the product is, who it is for, and how we talk about it.
It establishes a shared domain language so AI helpers and humans describe the same concepts consistently.
Its purpose is to keep all work aligned with the product’s goals and reduce semantic drift over time.

## 2. Scope & Responsibilities
- Covers:
  - Product summary and value proposition.
  - Target users and personas.
  - Business goals and non-goals.
  - Ubiquitous domain terminology and canonical definitions.
- Applies to:
  - All AI-generated code, docs, and reasoning that reference product concepts.
  - All feature discussions and decisions recorded via ADAS.
- Does not define technical architecture or stack; it informs them.

## 3. Core Principles & Rules
- **Single Source of Product Truth:** The Vision document is the authoritative description of what we are building.
- **Ubiquitous Language:** Key domain terms must be defined and used consistently across code, docs, and tests.
- **Goals vs Non-Goals:** Explicitly document what the product will not do to prevent scope creep.
- **Persona-Centered:** Features should trace back to one or more personas and their needs.
- **Alignment Checks:** Proposed features, refactors, or experiments must be checked against this Domain for alignment.

## 4. Operational Guidelines for AI Helpers
- Before proposing new features or major changes:
  - Read or re-scan the product vision.
  - Check whether the idea supports product goals and fits target personas.
- When naming types, modules, or endpoints:
  - Prefer terms taken directly from the defined domain language.
  - Avoid introducing synonyms unless the Vision document is updated.
- When detecting drift:
  - If the user asks for something that conflicts with product goals, clearly state the conflict and suggest aligned alternatives.
- For documentation:
  - Reference persona names and domain terms exactly as defined in the Vision.

## 5. Interfaces with Other Domains
- Feeds into:
  - Domain 03 (Tech Stack) when choosing tools appropriate for the product.
  - Domain 04 (Architecture) when modeling core entities.
  - Domain 09 (Feature Ledger) when describing new or existing features.
  - Domain 11 (Decisions) when recording product-level decisions.
- Is referenced by Domain 01 for interpretation of ambiguous requests.

## 6. Change Management
- All changes to product vision or domain language:
  - Must be recorded as an ADR (if significant).
  - Should include before/after examples of naming and scope.
  - Must be reflected in the Feature Ledger where relevant.
- When terms are renamed:
  - Add a “Term Mapping” section listing old → new names.
  - Update downstream references progressively, with clear notes in ADRs and status documents.
