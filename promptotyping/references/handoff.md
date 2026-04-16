# Handoff – Session End

End this session: commit current work and persist full status for the next session's orient.

## Steps

1. **Check git status.** Show what changed since the last commit. If there are uncommitted changes, stage and commit with a concise, descriptive message. If `$ARGUMENTS` is provided, use it as the commit description: $ARGUMENTS

   Do not push. The human decides when to push.

2. **Update journal.md.** Look for an existing journal: check `docs/journal.md`, `knowledge/journal.md`, `promptotyping-docs/journal.md`, then project root. If no journal exists yet, create one in the first existing docs folder — or at `docs/journal.md` if none exists (create `docs/` if needed).

   Append a session-end entry in this format:

```
## YYYY-MM-DD HH:MM – handoff

**Summary:** What was accomplished this session (2–3 sentences max).
**Decisions:** Key decisions with brief rationale.
**Dead ends:** What didn't work (if any).
**Phase:** Current Promptotyping phase. Which docs exist and are up to date.
**Open issues:** Unresolved problems, known gaps, things that need domain expert input.
  Be specific: "23% of dates in the HSA dataset lack @cert attributes, no decision
  yet on how to display uncertain dates" not "the date handling is unclear".
**Next steps:** Concrete, ordered list. The person reading this via orient
  should be able to start working immediately.
```

3. **Confirm** the commit hash (if committed) and one-line summary of the handoff.
