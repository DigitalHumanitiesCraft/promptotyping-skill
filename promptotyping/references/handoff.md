# Handoff – Session End

End this session by persisting the full status for the next session's orient.

## Write to journal.md

Look for an existing journal: check `docs/journal.md`, `knowledge/journal.md`, `promptotyping-docs/journal.md`, then project root. If no journal exists yet, create one in the first existing docs folder — or at `docs/journal.md` if none exists (create `docs/` if needed).

Append a session-end entry in this format:

```
## YYYY-MM-DD HH:MM – handoff

**Summary:** What was accomplished this session (2–3 sentences max).
**Phase:** Current Promptotyping phase. Which docs exist and are up to date.
**Open issues:** Unresolved problems, known gaps, things that need domain expert input.
  Be specific: "23% of dates in the HSA dataset lack @cert attributes, no decision
  yet on how to display uncertain dates" not "the date handling is unclear".
**Next steps:** Concrete, ordered list. The person reading this via orient
  should be able to start working immediately.
```

## Before writing

Check for uncommitted changes. If there are any, ask whether to run a savepoint first.
