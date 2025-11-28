# AI Entry Point & Meta-Rules (Starter — web-app)

ADAS_CORE_VERSION: 1.0.0
ADAS_PROFILE: web-app

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

INSTRUCTIONS:
- Load Core Domains
- Load web-app profile overrides
- Load all .local files
- Enforce non-overridable Domains
