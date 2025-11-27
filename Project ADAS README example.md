# ADAS — AI Development Assistant System  
**Governance Framework for AI-Assisted Software Development**

ADAS is the structured operating system for AI helpers working inside this repository.  
It defines *how AI agents think, behave, decide, write code, coordinate work, and maintain context* across time.

This README introduces ADAS, explains how it is organized, and provides instructions for both humans and AI helpers on how to use and maintain it.

---

# 1. What ADAS Is

ADAS is a **governance framework** that ensures:

- Consistent coding patterns  
- Clear architectural boundaries  
- Predictable AI reasoning  
- Reliable multi-agent collaboration  
- Traceable decisions and project memory  
- Prevention of regressions, drift, and hallucination  
- A stable “mental model” of the project for all AI helpers  

ADAS is the **single source of truth** for how AI works with this repository.

---

# 2. ADAS File Structure

All ADAS documents live inside the `.ai/` directory.

There are two types of files:

### **2.1 Sequential Context Files (`NN_name.md`)**
Loaded in strict numeric order:

```
.ai/
  00_ai-entry-point-meta-rules.md
  01_product-vision-domain-language.md
  02_tech-stack-constraints.md
  ...
  14_adas-overview-maintenance.md
```

These govern how AI agents behave.

### **2.2 Reference Files (ALL_CAPS.md)**

Examples:

```
.ai/
  PITFALLS.md
  DECISIONS.md
  FEATURES.md
```

Reference files provide deeper or historical context and are consulted as needed.

---

# 3. ADAS Domains (Summary)

Each numbered Domain has two files:
- **Specification** → Rules, purpose, responsibilities  
- **Skeleton** → Fill-in template used by repos or subprojects  

| # | Domain Name |
|---|-------------|
| 01 | AI Entry Point & Meta-Rules |
| 02 | Product Vision & Domain Language |
| 03 | Tech Stack & Constraints |
| 04 | Architecture & Code Organization |
| 05 | Coding Style, Patterns & Security Guardrails |
| 06 | Testing & Quality |
| 07 | Workflow, Git & Code Review |
| 08 | Project Status / Current Work |
| 09 | Feature Ledger |
| 10 | Pitfalls, Invariants & Danger Zones |
| 11 | Decisions / ADRs |
| 12 | Security & Secrets |
| 13 | Templates & Interaction Model |
| 14 | ADAS File Organization & Naming |
| 15 | ADAS Overview & Maintenance |

---

# 4. How AI Helpers Use ADAS

Every AI session must:

1. **Load ADAS in numeric order (00 → 14)**  
2. **Interpret the user’s request using ADAS rules**  
3. **Apply all relevant Domains when generating code**  
4. **Use the mandatory 4-section output format:**
   1. **Summary**  
   2. **Files Touched & Changes**  
   3. **Rationale & Alignment with ADAS**  
   4. **Tests**  

If any instruction conflicts with ADAS, the AI must:

- Flag the conflict  
- Explain which Domain applies  
- Suggest a safe alternative  

---

# 5. How Humans Use ADAS

Humans use ADAS to:

- Understand how AI helpers make decisions  
- Ensure long-term coherence in a multi-agent workflow  
- Record important decisions via ADRs  
- Maintain a stable vision and architecture  
- Track progress through a Feature Ledger and Status file  
- Avoid regressions by consulting Pitfalls and Invariants  

ADAS keeps the project future-proof and predictable, even as contributors or AI agents evolve.

---

# 6. Updating ADAS

ADAS follows explicit change management:

1. **Small updates**: Edit the appropriate Domain file.  
2. **Major updates**: Create an ADR (Domain 11).  
3. **Version bump**: Update the version inside Domain 15.  
4. **Document changes**: Add to ADAS changelog (inside Domain 15).  

AI helpers should re-load ADAS when the version changes.

---

# 7. Adding New Domains or Templates

When expanding ADAS:

- Use the next available number (e.g., `16_new-domain-name.md`)  
- Add a matching Skeleton template  
- Update Domain 15 (overview + version bump)  
- Add a pointer in the README (this file) if helpful  

---

# 8. Quick Start for New Contributors

If you're new:

1. Read **Domain 15** for high-level understanding.  
2. Skim **Domain 01** (rules for AI behavior).  
3. Read the Domains relevant to the work you’re doing (e.g., Architecture, Testing).  
4. Check **Status** to ensure you’re not touching an unstable area.  
5. Check **Feature Ledger** for work already in progress.  

---

# 9. Philosophy & Rationale

Modern development increasingly involves AI assistants and agents.  
Without structure:

- agents drift  
- decisions get overwritten  
- context gets lost  
- code becomes inconsistent  

ADAS provides the missing **governance layer** that makes AI-assisted work feel like a coordinated, reliable engineering team.

---

# 10. Contacts & Ownership

- **Owner:**  
- **Repository:**  
- **ADAS Version:** (see Domain 15)

---

# 11. License

(Insert license information here.)

---
