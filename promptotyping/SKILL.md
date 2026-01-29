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

A methodology for iterative human-LLM collaboration that maps research data and domain knowledge onto functional artifacts through structured context engineering.

## The Four Phases

| Phase | Output | Rule |
|-------|--------|------|
| **1. Preparation** | Raw materials (data files, sources, notes, expert knowledge) | Gather only. NO .md files yet. |
| **2. Exploration** | Understanding (no artifacts) | Probe data, test feasibility. Dead ends are findings. NO .md files yet. |
| **3. Destillation** | Documentation (.md files) | NOW create docs. Compress knowledge. Name files by purpose, not convention. |
| **4. Implementation** | Working artifact + Doc-Updates | Iterate: generate → validate → update docs → repeat. |

**Critical:** Phases 1-2 produce no formal documentation. The .md files emerge in Phase 3 when you understand what needs documenting.

## Documentation by Purpose

Create .md files as needed, structured by **purpose**:

| Purpose | Content | Update when... |
|---------|---------|----------------|
| **Data** | Structure, sources, examples, known inconsistencies | LLM misunderstands data structure |
| **Requirements** | Goals, constraints, success criteria, priorities | Specs were ambiguous or changed |
| **Context** | Domain knowledge, terminology, standards, methods | LLM asks questions docs should answer |
| **Journal** | Decisions, dead ends, savepoints (git hashes) | You learn something worth remembering |

Name files whatever fits your domain. The purposes matter, not the filenames.

## Compression Principle

> **Context Rot:** LLM performance degrades as context length grows. More tokens ≠ better results.

Compress aggressively: tables over prose, examples over explanations, current state over history.

## Anti-Sycophancy

LLMs agree too easily. The human is the **critical expert**, not a passive recipient.

Counter with:
- "What's wrong with this approach?"
- "What assumptions does this make?"
- "Show me alternatives."
- Use a second LLM to review critical outputs (LLM-as-Judge)

## Iterative Doc-Updates

Every iteration may reveal gaps:

```
Generate → Validate → Gap found? → Update docs → Generate again
```

This is expected, not failure. Documentation grows with understanding.

**Savepoints:** Commit working states to git. When iterations fail, roll back to last savepoint.

## Why Documents Matter

The .md files enable **reproducibility**: another person (or future you) with the same docs can reconstruct a functionally equivalent artifact. If the code is lost, the knowledge isn't.

## Text Variant

For academic writing instead of code:
- Data docs → Concept docs (research question, theory)
- Add source documentation (literature, evidence)
- Add narrative structure (argument flow)
- Anti-slop vigilance: eliminate "Moreover", "Furthermore", "It is worth noting", "Delve", "Crucial", "In today's world"
