# Domain 03 – Tech Stack & Constraints — Specification

## 1. Purpose
This Domain defines the allowed technologies, versions, and constraints for the project.
It prevents AI helpers from using unsupported libraries or patterns and ensures generated code fits the actual runtime environment.
Its purpose is to make the tech stack explicit, stable, and safe to automate against.

## 2. Scope & Responsibilities
- Covers:
  - Primary languages, frameworks, and runtime environments.
  - Key libraries and tools considered “preferred” or “required”.
  - Forbidden technologies and patterns.
  - Version constraints and upgrade windows.
- Applies to all AI-generated:
  - Code, configuration files, scripts, and infrastructure definitions.

## 3. Core Principles & Rules
- **Tiered Stack Definition:**
  - **Required:** Must be used when applicable (e.g., primary framework).
  - **Preferred:** Recommended defaults when there are multiple options.
  - **Allowed:** Permitted, but not default.
  - **Forbidden:** Never use without explicit, documented exception.
- **Version Clarity:** For each critical dependency, specify supported major/minor versions.
- **Minimalism:** Prefer a small, well-understood stack over many overlapping tools.
- **Security & Compliance:** All stack choices must respect security constraints (Domain 12).

## 4. Operational Guidelines for AI Helpers
- When generating code:
  - Use only technologies from Required/Preferred stack tiers by default.
  - Never introduce a new framework or core dependency without:
    - Stating why,
    - Checking against Forbidden list,
    - Suggesting an ADR entry.
- When writing docs:
  - Reference exact versions or version ranges for key components.
- When a user requests a tool outside the stack:
  - Explain the mismatch.
  - Offer an in-stack alternative.
  - If they insist, propose an ADR and mark it as an exception.

## 5. Interfaces with Other Domains
- Constrains:
  - Domain 04 (Architecture) to use allowed tech.
  - Domain 05 (Coding Style) to reference stack-specific patterns.
  - Domain 06 (Testing) to use approved testing frameworks.
- Is constrained by:
  - Domain 12 (Security & Secrets), especially for cryptography, auth, and storage tools.

## 6. Change Management
- Stack changes must:
  - Be captured as ADRs with clear migration steps.
  - Include deprecation timelines for replaced tools.
  - Update any relevant templates (Domain 13).
- When deprecating a dependency:
  - Add it to the Forbidden list with a link to ADR and migration guidance.
