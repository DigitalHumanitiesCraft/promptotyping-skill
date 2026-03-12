# Save – Savepoint

Create a git savepoint and update the project journal.

## Steps

1. **Check git status.** Show what changed since the last commit. If git is not initialized, skip to step 2 and note that there's no version control.

2. **Update journal.md.** Look for an existing journal: check `docs/journal.md`, `knowledge/journal.md`, `promptotyping-docs/journal.md`, then project root. If no journal exists yet, create one in the first existing docs folder — or at `docs/journal.md` if none exists (create `docs/` if needed). Append an entry in this format:

```
## YYYY-MM-DD HH:MM – save

**Done:** What was accomplished in this work unit.
**Decisions:** Key decisions with brief rationale.
**Dead ends:** What didn't work (if any).
```

3. **Stage and commit.** Write a concise, descriptive commit message. If `$ARGUMENTS` is provided, use it as the commit description: $ARGUMENTS

4. **Confirm** the commit hash and one-line summary.

Do not push. The human decides when to push.
