# Distill – Compress Knowledge into Promptotyping Documents

Take our current exploration, conversation, or findings and distill them into the appropriate Promptotyping Document(s).

## Principles

- **Tables over prose, examples over explanations, current state over history.**
- **One precise XPath/code snippet > a paragraph describing structure.**
- **Context Compression:** maximize information per token. If it can be a table, make it a table.
- Documents are "Denkumgebungen" (thinking environments) for human and LLM, not classical documentation.

## Process

1. **Identify** which document(s) need creating or updating:

   - `knowledge.md` – domain knowledge, data structures, standards, semantics
   - `requirements.md` – user stories grouped by epic, priorities, success criteria
   - `design.md` – visualization/interaction decisions, rejected alternatives with reasons
   - `implementation.md` – architecture, dependencies, technical solutions
   - `journal.md` – chronological log of decisions and dead ends
   - Or any domain-adapted variant (e.g., `editorial-guidelines.md`, `api-schema.md`)

2. **Draft** the content with maximal compression. Propose the structure before writing.

3. **Flag** what you're unsure about – the human is the domain expert and validates.

If `$ARGUMENTS` is provided, treat it as a hint for which doc or topic to distill: $ARGUMENTS
