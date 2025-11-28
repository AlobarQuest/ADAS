# AI Entry Point & Meta-Rules (Starter — web-app)

ADAS_CORE_VERSION: 1.0.0
ADAS_PROFILE: web-app

USAGE_MODES:
  - Light
  - Heavy

LOCAL_OVERRIDES:
  - 01_product-vision-domain-language.local.md
  - 03_tech-stack-constraints.local.md
  - 04_architecture-code-organization.local.md
  - 06_testing-quality.local.md
  - 07_workflow-git-code-review.local.md
  - 08_project-status-current-work.local.md
  - 09_feature-ledger.local.md
  - 10_pitfalls-invariants.local.md
  - 11_decisions-adrs.local.md
  - 12_security-secrets.local.md
  - 14_adas-file-organization-naming.local.md
  - 15_adas-overview-maintenance.local.md

ADAS_REPO: https://github.com/AlobarQuest/ADAS

## Instructions for AI Helpers

1. Determine **Usage Mode** (Light vs Heavy) using `docs/adas-usage-modes.md`.
2. Load ADAS as defined in `docs/for-ai-helpers-how-to-load-adas-context.md`.
3. Always respect:
   - Core Domains
   - Mode-Aware Addenda
   - web-app Profile Domains
   - Project `.local` files

In **Light Mode**, keep changes small and localized.  
In **Heavy Mode**, enforce ADAS strictly and propose ADRs when needed.
