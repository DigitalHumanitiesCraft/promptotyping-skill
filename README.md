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
- Checking has three kinds, verification, agentic review and scholarly validation. A result is a proposal, doubted or confirmed, and only a person with the required expertise or a validated deterministic rule confirms it. Three questions are put to each promptotype: does it do what it claims, is it warranted by the sources, and is it adequate to the purpose? The researchers who work with a promptotype accept it for a purpose, and an agent never declares that.

### Forms of work and subcommands

The forms of work describe kinds of work, and the subcommands are what a person asks of the agent in the harness. They do not map one to one.

- Preparation has no subcommand. The researchers assemble the material and its context and name purpose and question. The agent sets up the project folder, asks for purpose, provenance and known limits, records the answers in the researchers' words, and makes the material technically accessible.
- Exploration is `explore`.
- Distillation is `distil`, written `distill` in version 1.
- Implementation is `implement`, which version 1 leaves without a subcommand.
- `orient` belongs to no form of work. It is the entry that names the one in which the project stands.

### `orient` and `explore`

The two subcommands are kept apart by what they examine.

`orient` establishes where the project stands before the agent does anything. It runs at the start of a session or when the task changes, reads the knowledge base and the repository state, and looks at the research data only on the surface, meaning which files exist, in which formats and of what size. It changes no file. It ends with a statement of what the project is, where it stands and which step comes next.

`explore` establishes what the research data can and cannot support, so that the project learns what it had not yet recorded about its material. It runs in a new project, when data are added or changed, when a new question is put to the data, or when a finding contradicts an assumption about them. The agent profiles the data with small scripts and writes down structure, meaning, gaps and uncertainties with their evidence. It changes the knowledge base and never the data. It is sufficient for the moment once the researchers recognise their material in the results, and that judgement is theirs.

### Open

- The journal. It is to be condensed without loss of information, with the full history kept in an archive document, in Git, or in both. The subcommand needs a name other than `compact`, which coding agents already use for compacting the conversation.
- The end of a session. Version 1 ends every session with `handoff`. In the specification, `handoff` is the inbox for inputs from other sessions, reviews and partners, so one of the two needs another name.
- `check` and `verify`, which the specification folds into `curate`.
- Projects built with version 1, which keep their documents under `docs/` and have no action layer.
- Which repository is the source of the skill, how it is delivered, its licence, and how the authors of the earlier versions are credited.

## Background

- Pollin 2026, [Promptotyping: Zwischen Vibe Coding, Vibe Research und Context Engineering](https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin)
- Pollin 2025, [Promptotyping: Von der Idee zur Anwendung](https://dhcraft.org/excellence/blog/Promptotyping)

## License

MIT
