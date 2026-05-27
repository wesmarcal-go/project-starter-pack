# AI Skills Registry

This file is a universal registry for AI coding assistants (Claude Code, Cursor, Windsurf, Cline, Copilot, etc.).

**How to use:** When you detect one of the trigger phrases below in a user message, read the referenced SKILL.md file and follow its instructions exactly. The skill files are in `.claude/skills/` relative to the project root.

---

## create-a-context

**Triggers (PT):** "cria meu CLAUDE.md", "monta meu contexto", "cria contexto profissional", "criar contexto de produto", "configura meu perfil"
**Triggers (EN):** "create my CLAUDE.md", "build my context", "create a context", "set up my profile"

**What it does:** Conducts a guided interview and generates a personalized `CLAUDE.md` (professional identity, principles, stack, workflows, communication patterns). Optionally generates a second file `PRODUCT_CONTEXT.md` for product/service context (personas, metrics, recent decisions, competitors, anti-positioning).

**Files to read when triggered:**
- `.claude/skills/create-a-context/SKILL.md` — main flow and instructions
- `.claude/skills/create-a-context/QUESTIONS.md` — detailed question guide per section
- `.claude/skills/create-a-context/TEMPLATE.md` — final CLAUDE.md skeleton
- `.claude/skills/create-a-context/PRODUCT_QUESTIONS.md` — product interview questions (Phase 2)
- `.claude/skills/create-a-context/PRODUCT_TEMPLATE.md` — final PRODUCT_CONTEXT.md skeleton

---

## grill-me

**Triggers (PT):** "me grila", "stress-test esse plano", "questiona meu design", "me interroga sobre isso"
**Triggers (EN):** "grill me", "stress-test this plan", "challenge my design", "interrogate my plan"

**What it does:** Interviews the user relentlessly about a plan or design until reaching shared understanding. Walks down each branch of the decision tree, resolving dependencies one-by-one. Provides recommended answers for each question.

**File to read when triggered:**
- `.claude/skills/grill-me/SKILL.md`

---

## write-a-skill

**Triggers (PT):** "escreve uma skill", "cria uma skill", "constrói uma skill para", "empacota isso como skill"
**Triggers (EN):** "write a skill", "create a skill", "build a skill for", "package this as a skill"

**What it does:** Creates new AI skills with proper structure, progressive disclosure, and bundled resources. Covers requirements gathering, drafting SKILL.md, splitting into reference files when content grows, and adding utility scripts for deterministic operations.

**File to read when triggered:**
- `.claude/skills/write-a-skill/SKILL.md`

---

## Notes for assistants without file access

If you cannot read files from the filesystem (e.g., Copilot in chat mode without workspace context), ask the user to paste the relevant SKILL.md content directly into the conversation before proceeding.
