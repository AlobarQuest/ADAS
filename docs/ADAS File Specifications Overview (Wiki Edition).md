# ADAS Specification Index  
A GitHub Pages / Wiki–Ready Overview

Welcome to the **ADAS (AI Development Assistant System)** documentation index.  
This page provides a clean, wiki‑style overview of all Domain Specifications used in ADAS, designed for GitHub Pages or repository wikis.

Each section explains:
- **What the Domain Specification governs**  
- **Why it matters**  
- **How AI helpers and humans should use it**  

---

# 📘 Table of Contents
- [Domain 01 – AI Entry Point & Meta-Rules](#domain-01--ai-entry-point--meta-rules)
- [Domain 02 – Product Vision & Domain Language](#domain-02--product-vision--domain-language)
- [Domain 03 – Tech Stack & Constraints](#domain-03--tech-stack--constraints)
- [Domain 04 – Architecture & Code Organization](#domain-04--architecture--code-organization)
- [Domain 05 – Coding Style, Patterns & Security Guardrails](#domain-05--coding-style-patterns--security-guardrails)
- [Domain 06 – Testing & Quality](#domain-06--testing--quality)
- [Domain 07 – Workflow, Git & Code Review](#domain-07--workflow-git--code-review)
- [Domain 08 – Project Status / Current Work](#domain-08--project-status--current-work)
- [Domain 09 – Feature Ledger](#domain-09--feature-ledger)
- [Domain 10 – Pitfalls, Invariants & Danger Zones](#domain-10--pitfalls-invariants--danger-zones)
- [Domain 11 – Decisions / ADRs](#domain-11--decisions--adrs)
- [Domain 12 – Security & Secrets](#domain-12--security--secrets)
- [Domain 13 – Templates & Interaction Model](#domain-13--templates--interaction-model)
- [Domain 14 – ADAS File Organization & Naming](#domain-14--adas-file-organization--naming)
- [Domain 15 – ADAS Overview & Maintenance](#domain-15--adas-overview--maintenance)

---

# Domain 01 – AI Entry Point & Meta-Rules
Defines how AI helpers begin every session: what they load first, how they interpret instructions, and what global rules they must follow.  
Establishes the mandatory 4‑section output format and the hierarchy of authority:  
**user > repo-level ADAS > global ADAS > model defaults.**

This Domain ensures all agents behave consistently.

---

# Domain 02 – Product Vision & Domain Language
Describes the product’s purpose, target users, and canonical terminology.  
This maintains a shared understanding between humans and AIs, preventing semantic drift and misaligned features.  
All feature proposals and naming decisions trace back to this document.

---

# Domain 03 – Tech Stack & Constraints
Defines the allowed and forbidden technologies, frameworks, tools, and versions.  
Contains required, preferred, allowed, and forbidden tiers.  
Ensures AI-generated code always matches the real runtime and avoids dependency sprawl.

---

# Domain 04 – Architecture & Code Organization
Specifies the project’s structure: layers, modules, dependency direction, and folder layout.  
Protects architectural integrity and prevents accidental coupling.  
AI helpers must check this before creating or moving files.

---

# Domain 05 – Coding Style, Patterns & Security Guardrails
Defines naming conventions, formatting rules, preferred patterns, and prohibited anti‑patterns.  
Adds inline security rules such as never logging secrets and always sanitizing inputs.  
Ensures all generated code is consistent, safe, and readable.

---

# Domain 06 – Testing & Quality
Outlines testing strategy: unit vs integration vs E2E, naming conventions, coverage guidelines, and regression rules.  
AI helpers consult this when adding or modifying tests and must justify any change that lacks test updates.

---

# Domain 07 – Workflow, Git & Code Review
Defines branch naming, commit message formats, PR requirements, and CI expectations.  
Ensures both human and AI contributors follow a predictable and traceable workflow.  
Includes rules for small, focused commits and mandatory reviews for sensitive changes.

---

# Domain 08 – Project Status / Current Work
A living, continuously updated snapshot of the project.  
Includes active tasks, blockers, risk zones, and stability markers (stable / unstable / frozen).  
AI helpers check this before modifying code to avoid interfering with ongoing work.

---

# Domain 09 – Feature Ledger
A structured record of every feature across its lifecycle: idea → planned → in progress → shipped → deprecated.  
Prevents duplicate features and resurrecting deprecated behavior.  
AIs consult this before proposing or implementing features.

---

# Domain 10 – Pitfalls, Invariants & Danger Zones
Captures historical bugs, fragile areas, critical invariants, and recurring failure patterns.  
AI helpers must consult this before modifying any risky area to ensure invariants remain intact.  
Prevents reintroducing past bugs.

---

# Domain 11 – Decisions / ADRs
Defines how long‑term decisions are documented using ADRs (Architecture Decision Records).  
Explains the structure, versioning, and review process for decisions.  
AI helpers reference this to avoid overriding established decisions.

---

# Domain 12 – Security & Secrets
Covers secret management, encryption rules, authentication patterns, and vulnerability prevention.  
AI helpers follow this to avoid introducing security flaws or handling sensitive data improperly.

---

# Domain 13 – Templates & Interaction Model
Defines the consistent 4‑section output model plus templates for ADRs, design docs, tests, features, and more.  
Helps AI helpers produce repeatable and structured work.  
Explains when to use lightweight output vs. full templates.

---

# Domain 14 – ADAS File Organization & Naming
Specifies the `.ai/` directory layout, naming conventions, sequential files, and ALL_CAPS reference documents.  
Ensures AI agents load ADAS consistently and humans can easily find what they need.

---

# Domain 15 – ADAS Overview & Maintenance
Serves as the high-level introduction and governance reference point.  
Explains ADAS versioning, how updates are made, and how contributors should track changes.  
Essential reading for new contributors and AI helpers.

---

# How to Use This Document
- Link it from GitHub Pages as the **ADAS Documentation Home**  
- Add it to your repo wiki sidebar as the **Specification Index**  
- Use it as the landing page for onboarding new contributors  
- AI helpers can load this page to quickly determine which Domain applies to a task  

---

# End of Document
