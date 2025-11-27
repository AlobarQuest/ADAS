# Domain 12 – Security & Secrets — Specification

## 1. Purpose
This Domain defines how the system protects data, credentials, and infrastructure.
It ensures AI helpers never accidentally weaken security, mishandle secrets, or introduce insecure patterns.

## 2. Scope & Responsibilities
- Covers:
  - Secret storage and rotation.
  - Authentication and authorization patterns.
  - Encryption requirements.
  - Classes of vulnerabilities to avoid.
  - Incident response steps.
- Applies to all code, infrastructure, and operational documents.

## 3. Core Principles & Rules
- **Least Privilege:** Components and users only have the access they need.
- **Never Store Secrets in Code:** Secrets must live in approved secret stores, not in code or config files committed to VCS.
- **Secure by Default:** Prefer secure defaults for cryptography, protocols, and transport.
- **Auditability:** Security-sensitive actions should be observable (logs, traces) without leaking sensitive data.

## 4. Operational Guidelines for AI Helpers
- When generating or editing code:
  - Use environment variables or secret managers instead of hard-coded secrets.
  - Apply stack-appropriate secure libraries.
- When modifying auth logic:
  - Confirm patterns in this Domain first.
  - Avoid introducing new auth flows without a documented design and ADR.
- When encountering suspicious patterns:
  - Flag them explicitly in your output.
  - Suggest secure alternatives.

## 5. Interfaces with Other Domains
- Constrains:
  - Domain 03 (Tech Stack) by limiting allowed security-related tools.
  - Domain 05 (Coding Style) for inline security guardrails.
  - Domain 10 (Pitfalls) for security incidents and invariants.
- Informs:
  - Domain 07 (Workflow) when special review is required for security changes.

## 6. Change Management
- Security rule changes:
  - Must be accompanied by an ADR.
  - Should identify affected components and mitigation steps.
- When a security incident occurs:
  - Add an entry describing root cause, fix, and new invariant or guideline.
