---
name: promptotyping
description: |
  Context Engineering methodology for LLM-assisted research artifact development.
  Four phases: Preparation → Exploration → Destillation → Implementation.
  Core principle: Documents as Source of Truth, Code as Disposable Artifact.
  Use when building tools, visualizations, editions, or analyses from research data.
  Use when you need structured iteration where documentation survives the code.
  Invoke with "use promptotyping" or "Promptotyping für dieses Projekt".
---

# Promptotyping

> **Documents as Source of Truth, Code as Disposable Artifact.**

A Context Engineering methodology for iterative human-LLM collaboration. Maps research data and domain knowledge onto functional artifacts through structured documentation.

**Core insight:** The bottleneck isn't coding speed — it's clear requirements and structured knowledge transfer. LLMs amplify what you give them; garbage in, garbage out.

## When to Use

- Building research tools, visualizations, editions, analyses
- Projects where documentation should outlive the code
- Work requiring domain expertise validation
- Iterative development where requirements evolve

## When NOT to Use

- One-off scripts or throwaway explorations
- Tasks with fixed, unambiguous specs
- Pure Vibe Coding is fine for quick experiments — Promptotyping adds structure when structure pays off

## The Four Phases

| Phase | Output | Rule |
|-------|--------|------|
| **1. Preparation** | Raw materials (data, sources, notes, expert knowledge) | Gather only. NO .md files yet. |
| **2. Exploration** | Understanding (no artifacts) | Probe data, test feasibility. **Dead ends are findings.** NO .md files yet. |
| **3. Destillation** | The Vault (.md files) | NOW create docs. Compress knowledge. Name files by purpose. |
| **4. Implementation** | Working artifact + Vault-Updates | Iterate: generate → validate → update docs → repeat. |

**Critical:** Phases 1-2 produce no formal documentation. You cannot document what you don't yet understand. The .md files emerge in Phase 3 when clarity exists.

## Two Document Types

**Knowledge Documents** — inform the LLM *about* something:
- Data structures, examples, inconsistencies
- Domain knowledge, terminology, standards
- Research context, methods, goals

**Method Documents** — instruct the LLM *how* to work:
- Requirements, constraints, priorities
- Design decisions, interaction patterns
- Implementation rules, quality criteria

**Diagnostic rule:**
- Output *content* wrong → check Knowledge docs
- Output *format* wrong → check Method docs

## Minimal Setup

For small projects (2-4 hours), three files suffice:

| File | Contains |
|------|----------|
| **DATA.md** | Structure, sources, representative examples |
| **REQUIREMENTS.md** | Goals, constraints, success criteria |
| **JOURNAL.md** | Decisions, dead ends, git savepoints |

Add more documents only when complexity demands it. Over-documentation is its own failure mode.

## Compression Principle

> **Context Rot:** LLM performance degrades as context grows. More tokens ≠ better results.

Compress aggressively:
- Tables over prose
- Examples over explanations
- Current state over history
- Delete obsolete content rather than accumulating

If a document exceeds ~500 lines, it probably needs splitting or pruning.

## Critical Expert in the Loop

You are not a passive recipient. LLMs exhibit **sycophancy** (agreeing too easily) and **confabulation** (plausible nonsense). Your domain expertise is the validation layer.

**Counter-strategies:**
- "What's wrong with this approach?"
- "What assumptions does this make?"
- "Generate three alternatives, then critique each."
- Use a second LLM to review critical outputs (LLM-as-Judge)

**Metacognitive check:** What haven't you asked? What did you accept without questioning?

## Iterative Doc-Updates

```
Generate → Validate → Gap found? → Update docs → Generate again
```

This loop is the method working, not failing. Findings change the question itself.

**Update triggers** (require human recognition):
- LLM misunderstands data → update Knowledge doc
- Specs were ambiguous → update Method doc
- You learn something worth preserving → update Journal
- You discover a dead end → document it (prevents revisiting)

## Failure Modes to Avoid

| Anti-pattern | Consequence |
|--------------|-------------|
| Documenting before understanding (phases 1-2) | Premature structure constrains exploration |
| Under-specified requirements | LLM fills gaps with assumptions you didn't want |
| Bloated vault (context rot) | Performance degrades, attention diffuses |
| Skipping the Journal | Decisions become untraceable, dead ends get revisited |
| Trusting without validating | Sycophancy and confabulation go undetected |

## Savepoints

Commit working states to git with meaningful messages. When iterations fail, roll back to last savepoint.

```
# Journal entry pattern
## Session [date]
- **Completed:** [what worked]
- **Learned:** [insights, surprises, dead ends]
- **Next:** [immediate next steps]
- **Savepoint:** [commit hash]
```

## Why Documents Matter

The .md files enable **reproducibility**: another person (or future you) with the same documents can reconstruct a functionally equivalent artifact. The specific code is disposable; the structured knowledge isn't.

If documentation exists, code can be regenerated.
If only code remains, the project is effectively lost.

---

## Text Variant (Academic Writing)

For writing instead of code, adapt the document types:

| Code Project | Writing Project |
|--------------|-----------------|
| DATA.md | CONCEPT.md (research question, theory, scope) |
| REQUIREMENTS.md | SOURCES.md (literature, evidence, citations) |
| — | NARRATIVE.md (argument structure, flow) |
| JOURNAL.md | JOURNAL.md (same purpose) |

**Anti-slop process:** Before writing, identify your own filler patterns.

1. Search the web for slop phrases associated with your model family
2. List the specific patterns you must avoid
3. Write the text — eliminate every pattern from that list

You are the model executing this. Research your own tendencies, then write clean.
