---
title: Understanding ADAS Domains
layout: default
nav_order: 20
description: High-level explanation of each ADAS Domain, what belongs in its Specification, and examples of project-specific content.
---

# Understanding ADAS Domains

This document explains the purpose of every ADAS Domain, what information belongs in its Specification file, and examples of how a project might customize or extend each Domain.

## Domain 01 – AI Entry Point & Meta-Rules

### Purpose
Defines how AI helpers think, behave, reason, and load ADAS globally + locally.

### What belongs here
- AI reasoning rules  
- Output-format requirements  
- Conflict-resolution rules  
- Policies for loading Global ADAS then project overlays  

### Example
“AI helpers must use the 4‑section ADAS output format and halt when a user request violates a higher‑priority Domain.”

## Domain 02 – Product Vision & Domain Language

### Purpose
Provides the “why” of the project and defines its domain vocabulary.

### What belongs here
- Vision  
- Personas  
- Domain terms  
- Naming guidelines  

### Example
Target persona: “First‑time home buyers who need guided workflows.”

## Domain 03 – Tech Stack & Constraints

### Purpose
Defines allowed, preferred, required, and forbidden technologies.

### What belongs here
- Required stack  
- Preferred stack  
- Forbidden dependencies  
- Version rules  

### Example
Required: React 18 + FastAPI + PostgreSQL  
Forbidden: Redux, MongoDB

## Domain 04 – Architecture & Code Organization

### Purpose
Defines the project’s structure, layers, and boundaries.

### What belongs here
- Layers  
- Folder layout  
- Dependency rules  
- Cross‑cutting concerns  

### Example
“Domain layer must never import infrastructure or UI.”

## Domain 05 – Coding Standards

### Purpose
Defines formatting, naming, logging, and error-handling conventions.

### What belongs here
- Indentation rules  
- File naming conventions  
- Logging standards  
- Comment/documentation expectations  

### Example
Global indent: 2 spaces.

## Domain 06 – Code Workflow, Branching Strategy & CI/CD

### Purpose
Defines how code moves from branch → PR → merge → deploy.

### What belongs here
- Branch naming  
- PR requirements  
- Forbidden actions  
- Preview deployment behavior  

### Example
“After v1.0, never work directly on `main`. Always create a feature branch and a PR that triggers Cloudflare preview URLs.”

## Domain 07 – Testing Strategy & Quality Gates

### Purpose
Ensures the project is well tested and regression-proof.

### What belongs here
- Unit/integration/E2E rules  
- Required coverage  
- Test folder structure  

### Example
“All bug fixes require a regression test.”

## Domain 08 – Project Status & Current Work

### Purpose
Provides situational awareness so AI helpers don’t conflict with active work.

### What belongs here
- Current status  
- Active work items  
- Blockers  
- Stability map (stable, unstable, frozen)  

### Example
“/src/infrastructure/payments is unstable—refactor in progress.”

## Domain 09 – Feature Ledger

### Purpose
Tracks features across lifecycle states.

### What belongs here
- Feature schema  
- Feature states  
- Links to ADRs, PRs  

### Example
FEAT‑008: “Implement multi‑step onboarding” → in_progress.

## Domain 10 – Pitfalls, Invariants & Danger Zones

### Purpose
Captures invariants, recurring bugs, or fragile areas.

### What belongs here
- Data invariants  
- Recurring issues  
- Danger zones  

### Example
“Invariant: User IDs must be UUIDv4.”

## Domain 11 – Decisions & ADRs

### Purpose
Defines how architectural decisions are created, updated, linked, and deprecated.

### What belongs here
- ADR process  
- ADR structure  
- Superseding rules  

### Example
ADR‑0003 supersedes ADR‑0001.

## Domain 12 – Documentation & Knowledge Base

### Purpose
Ensures consistent documentation quality.

### What belongs here
- Required doc types  
- Format expectations  
- Update rules alongside code  

### Example
“All API endpoints require example requests + responses.”

## Domain 13 – Security & Compliance

### Purpose
Defines global security posture.

### What belongs here
- Auth rules  
- Secrets management  
- Encryption and network defaults  

### Example
“All cookies must be HttpOnly + Secure.”

## Domain 14 – ADAS Global Governance

### Purpose
Defines how Global ADAS itself is updated and versioned.

### What belongs here
- Version semantics  
- Breaking-change rules  
- Non-overridable domains  

### Example
“Domain 01 may never be overridden at the project level.”

## Domain 15 – Project Adoption, Overrides & Version Binding

### Purpose
Defines how projects adopt ADAS and declare overrides.

### What belongs here
- How projects bind ADAS versions  
- `.local` overlay rules  
- Migration rules  

### Example
“This project uses Global ADAS v1.0 with local overrides in Domains 02, 03, and 04.”
