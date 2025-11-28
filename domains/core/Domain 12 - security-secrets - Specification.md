# Domain 12 – Security & Secrets (Core Specification, Profile-Aware)

## Purpose
Defines universal security and secret-handling rules for all ADAS projects.

## Profile Awareness
- This Domain is **overridable** by Profiles **only in additional constraints**, not reductions.
- Profiles may add stricter rules (e.g., Supabase auth, RLS).
- AI helpers load:
  1. Core Domain 12  
  2. Profile extensions for Domain 12  
  3. Project `.local` notes (cannot weaken security)

## Core Security Rules
- Never store secrets in code.
- Validate all user input.
- Authenticate/authorize server-side.
- Avoid unsafe patterns (eval, raw HTML injection).

## When Profiles Override
Profiles may:
- Specify preferred auth mechanisms
- Add security expectations related to their platform
- Add secret-handling rules appropriate to toolchains

## Project `.local` Overrides
Projects may document additional constraints, but may not relax security rules.