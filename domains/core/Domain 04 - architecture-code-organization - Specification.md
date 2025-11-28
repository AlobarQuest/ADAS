# Domain 04 – Architecture & Code Organization (Core Specification, Profile-Aware)

## Purpose
Defines baseline architectural principles for all ADAS projects.
Profiles may extend or override architectural conventions.

## Profile Awareness
- This Domain is **overridable** by Profiles as listed in `adas-config.json`.
- AI helpers must load:
  1. Core Domain 04  
  2. Profile Domain 04 override  
  3. Project `.local` file  

## Core Architectural Principles
- Separation of concerns.
- Clear layering: UI ↔ Business Logic ↔ Data.
- Configuration and secrets isolated from application logic.
- Strong typing and validation at all boundaries.

## When Profiles Override
Profiles define:
- Default folder structures
- Server/client boundaries
- Platform-specific constraints (e.g., Next.js routing for web-app)

## Project `.local` Overrides
Projects may document intentional deviations from both Core and Profile defaults.