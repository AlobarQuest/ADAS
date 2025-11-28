# Domain 06 – Testing & Quality (Core Specification, Profile-Aware)

## Purpose
Defines the minimum testing and quality standards required across all ADAS projects.

## Profile Awareness
- This Domain is **overridable** by Profiles.
- AI helpers load testing rules in this order:
  1. Core Domain 06  
  2. Profile Domain 06 override (e.g., web-app testing stack)
  3. Project `.local` test rules  

## Core Testing Requirements
- All critical logic must be tested.
- Validation, error handling, and async code must have tests.
- Automated tests must run in CI.
- Linting and type-checking are required.

## When Profiles Override
Profiles define:
- Tooling choices (Vitest/Jest, React Testing Library)
- Folder layouts for tests
- Platform-specific integration testing patterns

## Project `.local` Overrides
Projects may specialize for unique tech stacks or workflows.