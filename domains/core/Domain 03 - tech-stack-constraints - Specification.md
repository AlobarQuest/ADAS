# Domain 03 – Tech Stack & Constraints (Core Specification, Profile-Aware)

## Purpose
This Core Domain establishes the baseline technology expectations for all ADAS-enabled projects.  
Projects may specialize through **Profiles** (e.g., `web-app`), which override sections of this Domain as defined in `adas-config.json`.

## Profile Awareness
- This Domain is **overridable** by Profiles.
- Profile overrides live under:
  ```
  domains/profiles/<profile>/Domain 03 ...
  ```
- AI helpers must load:
  1. Core Domain 03  
  2. Profile override (if present)  
  3. Project `.local` override (if present)

## Core Rules
- Choose modern, maintained tech stacks.
- Prefer strongly typed technologies (TypeScript, Python, Swift).
- Avoid abandoned frameworks or unmaintained dependencies.
- Enforce security, testing, and architecture requirements from related Core Domains.

## When Profiles Override
Profiles may:
- Specify preferred frameworks (e.g., Next.js for web-app).
- Set backend defaults (Supabase, REST, etc.).
- Forbid or require tools per environment.

## Project `.local` Overrides
Projects may deviate only within Profile boundaries.