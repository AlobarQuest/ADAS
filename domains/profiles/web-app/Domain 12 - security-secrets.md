# Domain 12 — Security & Secrets  
**Web-App Profile — Mode-Aware Specification**

## 1. Purpose
Defines **security posture**, **secret handling**, and **auth patterns** for ADAS web‑app projects.

---

# 2. Mode Awareness

## 2.1 Light Mode
Used when modifying code with **no structural or auth changes**.

AI helpers must:

- Load only summary rules  
- Assume existing security posture is valid  
- Perform safe refactors  
- Avoid proposing new auth or permission models  
- Not modify RLS policies or secret flows  

Light Mode = “don’t weaken or expand security; stay within guardrails.”

## 2.2 Heavy Mode
Used for features involving:

- Auth  
- Sessions  
- Roles  
- Database access  
- Security boundaries  
- Secret management  

AI helpers must:

- Load entire Domain 12  
- Enforce strict security rules  
- Flag potential breaches  
- Require ADRs for major changes  
- Validate RLS policies  
- Validate server‑only secrets usage  
- Propose corrections for insecure patterns  

Heavy Mode = “full security governance.”

---

# 3. Required Security Foundations

- **Supabase Auth** for identity  
- Server‑side session validation  
- Role checks at server boundaries  
- RLS enabled on all tables  
- No direct DB access from client  
- Secrets read only on server  

---

# 4. Secret Handling Rules

- Never commit secrets  
- Secrets must be read only from environment  
- Session cookies must be `HttpOnly`, `Secure`, `SameSite=strict`  
- No raw `dangerouslySetInnerHTML` without sanitization  
- All external calls validated  

---

# 5. Overrides

Projects may:

- Add more restrictive RLS rules  
- Add additional secret managers  
- Add project‑specific auth flows  

But may **not**:

- Disable RLS  
- Expose secrets client‑side  
- Store tokens in localStorage  
- Loosen cookie security  

---

# 6. Summary

Domain 12 enforces the **security backbone** of all ADAS web apps.  
Light Mode ensures code stays safe. Heavy Mode ensures the *system* stays safe.