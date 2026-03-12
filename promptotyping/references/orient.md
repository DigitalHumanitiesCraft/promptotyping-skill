# Orient – Session Start

Perform state detection for this project. Do the following in order:

1. **Scan the filesystem.** Look for `docs/`, `knowledge/`, `promptotyping-docs/` folders. List all `.md` files and read their headers. Identify data files (formats, structure, volume). Check for existing code or prototypes.

2. **Locate journal.md.** Check `docs/journal.md`, `knowledge/journal.md`, `promptotyping-docs/journal.md`, then project root. If found, note the path – all other operations (`save`, `handoff`) write to this same location. If none exists, state that.

3. **Read the last journal entry** (if journal exists). Look for the most recent `## YYYY-MM-DD HH:MM – [save|handoff]` section. Prefer the most recent **handoff** entry (it has full status, open issues, next steps). Fall back to **save** entries if no handoff exists.

4. **Determine the Promptotyping phase:**
   - Nothing exists → Pre-Preparation
   - Data files but no .md docs → Preparation → Exploration
   - Knowledge exists, no .md files yet → Ready for Distillation
   - .md docs exist → Distillation → Implementation
   - Working prototype + docs → Implementation (iteration)

5. **Report concisely:**
   - Journal location (or: "no journal yet")
   - Current phase
   - What exists (files, docs, data, code)
   - Last known state from journal (if available)
   - Suggested next action

If `$ARGUMENTS` is provided, focus the orientation on that aspect (e.g., `/promptotyping orient requirements` to check only requirements status): $ARGUMENTS

Do not start working on anything yet. Orient first, then wait for direction.
