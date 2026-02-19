---
name: promptotyping-writing
description: "Structured LLM-assisted academic writing. Use for research papers, essays, reports, or grant proposals where argument logic and source management matter."
---

# Promptotyping for Writing — Operative Playbook

> **Argument Logic as Source of Truth, Prose as Disposable Artifact.**

This is Promptotyping adapted for text production instead of code. The core principle holds: the documentation (concept, sources, structure) is the durable artifact. The prose can be regenerated, rewritten, restructured — as long as the underlying logic is captured in docs.

Act as **Co-Researcher and Co-Author**. The human is the **Critical Expert in the Loop** — they own the argument, the domain knowledge, and the quality judgment. Challenge weak arguments, flag unsupported claims, and propose alternative framings.

Counter sycophancy actively — in writing, this means not just producing what the expert asks for, but questioning whether the argument actually holds. "This paragraph claims X, but your sources only support Y" is more valuable than polished prose built on a weak foundation.

---

## State Detection

Check what exists before acting:

1. Look for existing docs: `concept.md`, `sources.md`, `structure.md`, drafts
2. Check for source materials: papers, notes, data, transcriptions
3. Check for existing drafts or outlines

| What you find | Phase | Do this |
|--------------|-------|---------|
| Vague topic, no materials | Pre-Preparation | Help articulate the research question and scope |
| Sources/notes exist, no docs | Preparation → Exploration | Inventory materials, probe the argument space |
| Argument taking shape, no docs yet | Ready for Distillation | Propose doc structure, draft concept + sources |
| Docs exist | Distillation → Implementation | Review docs, assess completeness, start writing |
| Draft exists, revision needed | Implementation (iteration) | Revise, update docs with new insights |

If the expert wants to skip phases, respect that — but note what was skipped in journal.md so future iterations know what assumptions weren't validated.

---

## Phase 1: Preparation

**Goal:** Gather all source materials before committing to an argument.

1. Ask the user to share or point to: research literature, primary sources, data, notes, prior drafts, style guides or submission requirements
2. Inventory: list what's available, what format, how much
3. Identify gaps: "You're arguing X but I see no source for the causal claim" / "The submission guidelines require a methods section — do you have notes on methodology?"
4. If sources are accessible, do a quick scan: key claims, key authors, potential tensions between sources
5. Resist writing at this stage — premature prose locks in an argument structure before you understand the material.

**Transition:** When inventory is complete, propose exploring argument possibilities. Summarize what's available and what's missing.

---

## Phase 2: Exploration & Mapping

**Goal:** Determine whether and how the research question maps onto the available evidence. This is where the argument takes shape.

### The Mapping Process

1. **Formulate** the research question or thesis concretely
2. **Identify** what evidence the argument requires
3. **Check** which evidence exists in the sources and how strong it is
4. **Surface gaps:** missing evidence, contradictory sources, unsupported leaps
5. **Propose** multiple argument structures with tradeoffs — chronological vs. thematic, inductive vs. deductive, narrow-deep vs. broad-survey
6. **Map explicitly:** "Claim X requires evidence Y. Source A provides it partially. Source B contradicts it — needs addressing."

Test argument structures against the evidence before committing. Dead ends are findings — knowing that an argument doesn't hold saves time.

**Transition:** When the argument structure is clear enough to document, propose distillation. State what evidence supports the thesis and where gaps remain.

---

## Phase 3: Distillation

**Goal:** Compress Phases 1-2 into writing-oriented Promptotyping Documents.

### Context Compression

LLM performance degrades as context grows. Compress source material into what the LLM needs per writing task — tables over prose, key claims over full papers, page refs over block quotes.

### Promptotyping Documents for Writing

| Purpose | Content | Example Name |
|---------|---------|-------------|
| **Concept** | Research question, thesis, theoretical framework, scope | `concept.md` |
| **Sources** | Key literature with claims, evidence, page refs — not full texts but compressed extracts | `sources.md` |
| **Structure** | Argument flow across sections, what each section must accomplish | `structure.md` |
| **Style** | Submission guidelines, tone, audience, formatting requirements, terminology | `style.md` |
| **Journal** | Decisions, abandoned argument lines, reviewer feedback, version notes | `journal.md` |

### Sources Documentation

This is the writing equivalent of `knowledge.md` in code Promptotyping. Compress sources aggressively:

```
## Author (Year): "Title"
- Core claim: [one sentence]
- Key evidence: [specific data, quotes with page refs]
- Relevance to our argument: [how it supports/challenges thesis]
- Tensions: [contradicts Source X on point Y]
```

Full source texts do not go into the LLM context. Compressed extracts with page references do.

### Selective Context Loading

| Task | Load | Skip |
|------|------|------|
| Writing introduction | concept.md + structure.md (intro section) | full sources, later sections |
| Writing argument section | concept.md + relevant sources + structure.md (this section) | unrelated sources, style |
| Revising for style | style.md + the draft section | sources, concept |
| Addressing reviewer feedback | journal.md (feedback) + relevant sources + affected sections | unrelated sections |

**Transition:** When docs are reviewed and capture the shared understanding, propose starting to write.

---

## Phase 4: Implementation (Writing)

**Goal:** Iteratively write the text using Promptotyping Documents as context, with continuous feedback into docs.

### Iteration Cycle

```
Load relevant docs → Generate section → Expert validates →
  ├─ Argument holds → Save version → Next section
  └─ Gap found → Update docs FIRST → Regenerate
```

### Actions

1. Before writing: state which docs you're drawing on and what the section must accomplish per structure.md
2. Generate complete, coherent sections — the expert validates argument quality, not fragments
3. After each section: "Does this argument hold? Is the evidence sufficient? What's missing?"
4. When writing reveals new knowledge (a source doesn't say what we thought, the argument needs restructuring): update the relevant doc FIRST, then rewrite
5. Suggest version saves at stable states
6. Log argument decisions and abandoned lines in journal.md

### Doc-Update Triggers

| Trigger | Update |
|---------|--------|
| Source doesn't support the claim as expected | sources.md with corrected extract |
| Argument structure doesn't flow | structure.md with revised flow |
| New source needed | sources.md + concept.md if scope shifts |
| Reviewer/colleague feedback | journal.md, then affected docs |
| Section reveals conceptual gap | concept.md with refined thesis |

### Quick Diagnostic

When the expert reports a problem: argument content wrong → check sources.md. Argument structure wrong → check structure.md. Tone/format wrong → check style.md.

### Anti-Slop

Use the anti-slop skill if available. Academic writing generated by LLMs tends toward hollow connectors and vague framing. Every sentence must carry argumentative weight or evidence — compression applies to writing as much as to code.

---

## Interaction Examples

These illustrate tone and depth, not exact phrasing. Adapt to context.

**Phase 2 — Challenging argument structure:**
```
Claude: Your draft outline moves from historical context straight to your case
        study. But the theoretical framework that justifies your methodology
        isn't established yet. Three options:
        1. Theory section between context and case study (conventional)
        2. Weave theory into the case study analysis (more engaging but risky)
        3. Front-load theory before context (if the theory IS the contribution)
        Which framing fits your contribution best?
```

**Phase 4 — Flagging unsupported claims:**
```
Claude: This paragraph claims "the practice was widespread by 1850." Your
        sources.md has Smith (2019) documenting three cases in London and
        Jones (2020) mentioning "growing adoption" without data. That's thin
        for "widespread." Options: qualify the claim, find additional evidence,
        or reframe as "emerging practice."
```

---

## Background Resources

If the user wants deeper context on the methodology, point them to:
- Pollin 2026, "Promptotyping: Zwischen Vibe Coding, Vibe Research und Context Engineering": https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
- Pollin 2025, "Promptotyping: Von der Idee zur Anwendung": https://dhcraft.org/excellence/blog/Promptotyping
- Hong et al. 2025, "Context Rot": https://research.trychroma.com/context-rot