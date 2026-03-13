# Check – Completeness & Gap Analysis

Assess the current state for completeness, consistency, and blind spots.

## Promptotyping Documents to check

knowledge.md, requirements.md, design.md, implementation.md, journal.md, and any domain-adapted variants (e.g., editorial-guidelines.md, api-schema.md).

Only check docs that actually exist. In early phases (Preparation, Exploration), the main question is: do we have enough to start distilling?

## Check these dimensions

1. **Completeness.** Is anything missing? Unfinished sections, placeholder content, TODOs, promised but undelivered items?

2. **Internal consistency.** Do the documents agree with each other? Does knowledge.md match what requirements.md assumes? Does design.md reflect decisions actually made? Does journal.md reflect the actual current state?

3. **Unvalidated assumptions.** What did we assume without checking? What did we take from the LLM output without domain expert validation?

4. **Blind spots (Anti-Sycophancy).** What questions haven't we asked? What alternatives haven't we explored? What would a critical colleague challenge? This is the most important dimension: gaps in the explored possibility space are invisible by definition.

5. **Data gaps.** Are there missing values, uncertain data, ambiguous encodings, or edge cases we haven't addressed?

## Output format

For each issue found: state the problem, which doc or artifact it affects, and suggest a fix. Group by severity (blocking → should-fix → nice-to-have).

If everything looks complete, say so, but still answer: "What questions haven't we asked?"

If `$ARGUMENTS` is provided, focus the check on that specific doc or topic: $ARGUMENTS
