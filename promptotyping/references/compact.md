# Compact – Condense the Journal

When `journal.md` has grown large from many handoffs, condense it: keep the most recent entries verbatim, fold older ones into a compact summary, and preserve the full originals in `journal-archive.md`. Nothing is lost — the archive plus git history are the complete record. This serves traceable reasoning: the high-level trace stays readable, the detail stays recoverable.

## When to run

Occasionally — when the journal has accumulated many handoff entries (rule of thumb: more than 12, or the file exceeds ~500 lines). `handoff` suggests this automatically once the threshold is crossed. Like handoff, compact has side effects (rewrites `journal.md`, writes `journal-archive.md`, commits) and runs only when the user requests or confirms it.

## Steps

1. **Locate the journal.** Check `docs/journal.md`, `knowledge/journal.md`, `promptotyping-docs/journal.md`, then project root. The archive lives in the same folder as `journal-archive.md`. Count the `## YYYY-MM-DD HH:MM – handoff` sections. If there is no journal, or 5 or fewer entries, report that and stop — nothing to compact.

2. **Split recent from old.** Keep the most recent 5 entries verbatim. Everything older is "to condense". If a `## Verdichtete Historie` section already exists at the top, leave it — it is already condensed; you will merge new bullets into it.

3. **Archive the originals first.** Append the full, unmodified text of every to-condense entry to `journal-archive.md` (same folder). If the archive doesn't exist, create it with a one-line header. Append only entries not already present — never duplicate. The archive is append-only and chronological. Do this before rewriting `journal.md` so the originals are safe.

4. **Condense.** For each to-condense entry — or a group of related entries folded into one milestone — write 1–3 bullets that preserve:
   - date or date range
   - key **decisions** with brief rationale
   - **git savepoint hashes** — copy verbatim from the originals, never invent or alter a hash
   - **dead ends** worth remembering
   - phase transitions

   Drop what is now superseded: completed "Next steps", resolved "Open issues". Be ruthless — this is a high-level trace, not a second copy of the archive.

5. **Rewrite journal.md** to contain, in order:
   - a `## Verdichtete Historie` section at the top (merge new bullets into any existing one, chronological order; the merged section must itself stay condensed)
   - a pointer line: `> Full older entries preserved in journal-archive.md`
   - the most recent 5 handoff entries, verbatim and unchanged

6. **Commit.** Stage `journal.md` and `journal-archive.md` and commit, e.g. `Compact journal: archive N entries, condense history`. Do not push — the human decides when to push.

7. **Confirm.** Report: how many entries were archived, how many kept verbatim, the new `journal.md` length, and the commit hash.

## Example — the condensed section

```
## Verdichtete Historie

**2026-01–02 (Preparation → Exploration):** Inventoried 11,576 CMIF letters;
chose Timeline + Map + Sankey, rejected Matrix (too abstract) and Chord
(breaks >50 nodes). Savepoint a1b2c3d.
**2026-03 (Distillation):** Drafted knowledge.md + requirements.md. Dead end:
GeoNames geocoding for 12 unmatched place names — left flagged in UI. Savepoint
e4f5g6h.

> Full older entries preserved in journal-archive.md

## 2026-05-12 14:30 – handoff
... (most recent 5 entries, verbatim) ...
```

If `$ARGUMENTS` is provided, treat it as an override of how many recent entries to keep verbatim (e.g. `/promptotyping compact 3`): $ARGUMENTS
