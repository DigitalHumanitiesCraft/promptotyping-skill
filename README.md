# Promptotyping

A context engineering methodology for LLM-assisted development of research artifacts (tools, visualizations, editions), packaged as an [Agent Skill](https://agentskills.io/specification).

Promptotyping treats **documents as the source of truth and code as disposable**. Instead of prompting for code directly, you build compressed, domain-adaptive docs (knowledge, requirements, design, implementation) that encode your decision logic. The result: reproducible reasoning across sessions, agents, and team members. If the code is lost, the knowledge isn't.

The skill guides the agent through four phases (Preparation, Exploration, Distillation, Implementation) and includes six operations as reference files that the agent loads on demand.

Follows the open [Agent Skills standard](https://agentskills.io). Primary target: [Claude Code](https://docs.anthropic.com/en/docs/claude-code/skills). Compatible with any agent supporting the standard (Codex CLI, Cursor, Gemini CLI, GitHub Copilot, etc.).

## Installation

```bash
# Via skills.sh package manager (auto-detects your agent)
npx skills add DigitalHumanitiesCraft/promptotyping-skill

# Or manually: user-level (all projects)
cp -r promptotyping ~/.claude/skills/    # Claude Code
cp -r promptotyping ~/.codex/skills/     # Codex CLI
cp -r promptotyping ~/.gemini/skills/    # Gemini CLI
cp -r promptotyping ~/.cursor/skills/    # Cursor

# Or manually: project-level
cp -r promptotyping .claude/skills/       # Claude Code
cp -r promptotyping .agents/skills/       # Codex CLI, Gemini CLI, Cursor
```

## Usage

Ask the agent to use the methodology:

- *"Use promptotyping for this project"*
- *"Promptotyping für dieses Projekt"*

Operations during a session (Claude Code syntax, other agents may differ):

- `/promptotyping orient` – detect project state, start session
- `/promptotyping handoff` – commit, journal, end session
- `/promptotyping check` – gap analysis, update docs
- `/promptotyping compact` – archive & condense journal.md when it grows large
- `/promptotyping distill` – create docs from exploration (setup)
- `/promptotyping verify` – validate external facts via web search

## Version 2, in preparation

This repository delivers version 1.0.0 of the skill, fixed by the tag `v1.0.0`, and everything above describes that version. Version 2 brings the skill into line with the definition of Promptotyping in the forthcoming article and with the [specification](https://github.com/DigitalHumanitiesCraft/Promptotyping), where the revised skill is developed under `skills/promptotyping/`. This section records what has been decided and what is open. The open questions are collected in [issue 6 of the specification repository](https://github.com/DigitalHumanitiesCraft/Promptotyping/issues/6).

The working state of the discussion, in German and with a checklist per topic, is [`v2/arbeitsstand.md`](v2/arbeitsstand.md). `python v2/serve.py` shows it as a page at http://127.0.0.1:18841/ and writes ticked items back to the file.

### What Promptotyping is

Promptotyping is a working practice for translating research data and their contexts, with frontier LLM agents, into research artefacts that fit the researchers' purposes and ways of working.

Version 2 follows this definition in five respects.

- Promptotyping is a working practice. Version 1 calls it a methodology.
- The work recurs through four forms of work, Preparation, Exploration, Distillation and Implementation. Version 1 calls them phases, which suggests a fixed sequence.
- What decides whether an artefact fits lies in the sources and the research purpose as the researchers understand them. The knowledge documents guide the work and can themselves be wrong about the material, so the motto of version 1, documents as source of truth, no longer holds in that form.
- An iteration ends with a promptotype, a prototype that can be used and inspected, together with the project knowledge base and the research data from which it was built. What accumulates is the curated knowledge and the research data. The artefact may be replaced once what working with it revealed has been written back into the project knowledge.
- Checking has three kinds, verification, agentic review and scholarly validation, which the core of the skill names. A result is a proposal, doubted or confirmed, and only a person with the required expertise or a validated deterministic rule confirms it. Three questions are put to each promptotype: does it do what it claims, is it warranted by the sources, and is it adequate to the purpose? The researchers who work with a promptotype accept it for a purpose, and an agent never declares that.

### The five subcommands

A subcommand stands for a moment at which a person actually calls it. Version 2 has five.

`orient`
Establishes where the project stands before any work begins. It reads the knowledge base and the repository state, changes no file, and names the step that comes next.

`explore`
Establishes what the research data can and cannot support. It profiles the data with small scripts and records structure, meaning, gaps and uncertainties with their evidence. It is complete for the moment when the researchers have checked the account against what they know of the material, including the statements the agent is least sure of, and confirm that nothing they consider essential is missing or wrong.

`distill`
Models what exploration and checking have shown as the knowledge documents from which the artefact is built. Like all modelling it reduces and sharpens. It leaves out what the stated purpose does not need, and it makes explicit the distinctions, conditions and uncertainties that the material holds only implicitly and that an adequate implementation requires. It writes two things, what holds about the material and what the artefact is to do for the researchers, the second as epics and user stories. The material itself stays where it is.

`curate`
Maintains the existing knowledge documents. It corrects what is wrong, updates what has changed, makes vague statements concrete, tightens the text, and removes what no longer holds, the last only with the researchers' approval. It has three kinds, and the agent chooses the one the situation calls for. Against the project itself, it compares the documents with the data, the code and the state of the work. As grounding, it compares them with knowledge outside the project, such as the web, the literature or a knowledge vault, and each statement ends as supported with its source, corrected with the source that contradicts it, or marked as unsupported. As review, an agent with a fresh context questions the whole critically and reports doubts before anything is changed.

`handoff`
Closes a session so that the next one can continue from the documents, and is the counterpart of `orient`. It commits the work, records in the journal what was done and why, and states what is open. It never pushes.

### What has no subcommand

- Preparation. The researchers assemble the material and its context and name purpose and question. The agent sets up the project folder, asks for purpose, provenance and known limits, records the answers in the researchers' words, and makes the material technically accessible.
- Implementation. Building is the agent's ordinary work between `orient` and `handoff`. Its rules stand in the core of the skill and always apply: build in small steps that can be run and inspected, show each result to the researchers, write a finding into the knowledge documents before the code follows, prefer a rule to an LLM, and preserve raw model output.
- The calls `check` and `verify` of version 1 remain valid and lead to `curate`. `compact` leads to the deep form of `handoff`.
- `knowledge/handoff.md` of the specification is dropped. The journal is the working diary and also carries what is open.

### Open

- Where in the journal the open points stand, and how a deep `handoff` differs from the quick one that ends every session.
- Condensing the journal without loss of information, with the full history kept in an archive document, in Git, or in both.
- Projects built with version 1, which keep their documents under `docs/` and have no action layer.
- Which repository is the source of the skill, how it is delivered, its licence, and how the authors of the earlier versions are credited.

## Background

- Pollin 2026, [Promptotyping: Zwischen Vibe Coding, Vibe Research und Context Engineering](https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin)
- Pollin 2025, [Promptotyping: Von der Idee zur Anwendung](https://dhcraft.org/excellence/blog/Promptotyping)

## License

MIT
