# Promptotyping

An [Agent Skill](https://agentskills.io/specification) for Promptotyping, a working practice for translating research data and their contexts, with frontier Large Language Model (LLM) agents, into research artefacts that fit the researchers' purposes and ways of working. Such artefacts are tools, visualisations, editions and data workflows.

Agents build prototypes from modelled data and a curated project knowledge base, a small set of Markdown documents that researchers and agent keep in the repository. The prototype is a means of knowing. Working with it shows what the data support and what the project needs, and what checking and use reveal is curated back into the knowledge base. What decides whether an artefact fits lies in the sources and the research purpose as the researchers understand them.

Each iteration yields a Promptotype, a prototype that can be used and inspected, together with the knowledge base and the research data from which it was built.

The skill is the installable part of the [Promptotyping specification](https://dhcraft.org/Promptotyping/). Its [repository](https://github.com/DigitalHumanitiesCraft/Promptotyping) holds the document convention, the templates, a tutorial and documented use cases, and carries the same skill under `skills/promptotyping/`.

## Installation

```bash
# Via the skills.sh package manager, which detects your agent
npx skills add DigitalHumanitiesCraft/promptotyping-skill

# Or by hand, for all projects of a user
cp -r promptotyping ~/.claude/skills/    # Claude Code
cp -r promptotyping ~/.codex/skills/     # Codex CLI
cp -r promptotyping ~/.gemini/skills/    # Gemini CLI
cp -r promptotyping ~/.cursor/skills/    # Cursor

# Or by hand, for one project
cp -r promptotyping .claude/skills/       # Claude Code
cp -r promptotyping .agents/skills/       # Codex CLI, Gemini CLI, Cursor
```

The skill follows the open Agent Skills standard. It is written for [Claude Code](https://code.claude.com/docs/en/skills) and works with any agent that supports the standard. The hint for arguments in its frontmatter is an extension of Claude Code that other agents ignore.

## Use

Start the agent in a project folder with your data and say what you want in your own words, for instance "Use Promptotyping for this project" or "Promptotyping für dieses Projekt". The agent takes the procedure from the skill.

Five subcommands name the moments at which a person calls the skill directly. The syntax is that of Claude Code, and other agents may differ.

- `/promptotyping orient` starts a session. It establishes where the project stands and changes no file.
- `/promptotyping explore` establishes what the data can and cannot support.
- `/promptotyping distill` models the findings as knowledge documents, with epics and user stories.
- `/promptotyping curate` checks and corrects the knowledge documents, against the project, against outside sources, or through a review with a fresh context.
- `/promptotyping handoff` ends a session. It writes the journal, states what is open and commits without pushing.

A session runs `orient`, then the work, then `handoff`. Building itself has no subcommand. It is the agent's ordinary work, and its rules stand in the core of the skill. The agent builds in small steps that can be run and inspected, shows each result to the researchers, and writes a finding into the knowledge documents before the code follows.

## How the skill is built

- [`promptotyping/SKILL.md`](promptotyping/SKILL.md) holds the definition, the terms, the rules for building and the rules for checking. An agent loads it whenever the skill is active.
- [`promptotyping/references/`](promptotyping/references/) holds one file per subcommand, which the agent loads only when the subcommand is called.

## The knowledge base

In a new project the documents lie in `knowledge/`, and the agent instructions in the repository root.

- `project.md` states the purpose and scope of the project.
- `data.md` states structure, meaning, provenance, gaps and uncertainties of the data.
- `specification.md` states what the artefact is to do, as epics and user stories with acceptance criteria.
- `journal.md` states what is open, and how the understanding developed and why.
- `CLAUDE.md` or `AGENTS.md` states how agents are to work in this repository.

A project adds a document when it has the function for it, such as `design.md` for an interface or `testing.md` for its tests. These are Promptotyping Documents. The [repository of the specification](https://github.com/DigitalHumanitiesCraft/Promptotyping) holds a template for each of them under `_content/promptotyping-document/` and the convention they follow, and the [templates page](https://dhcraft.org/Promptotyping/#vorlagen) shows them. The skill reads the template before it creates a document.

## Checking

The skill keeps apart verification against a standard the project has accepted, agentic review by an agent with a fresh context, and scholarly validation by people who know the sources and the field. What an agent produces is a proposal. Anyone may mark it as doubted, and it is confirmed only by a person with the required expertise or by a validated deterministic rule.

Three questions are put to each Promptotype. Does it do what it claims? Is it warranted by the sources? Is it adequate to the purpose? Acceptance for a purpose lies with the researchers who work with the Promptotype.

## Coming from version 1

Version 2 is a new skill and carries no calls or document names of version 1. Version 1.0.0 stays available under the tag [`v1.0.0`](https://github.com/DigitalHumanitiesCraft/promptotyping-skill/tree/v1.0.0) for projects that continue with it, and an installed copy does not change by itself.

- `orient`, `distill` and `handoff` keep their purpose. `distill` now also writes epics and user stories.
- `explore` is new. Exploration was a phase without a call.
- `check`, `verify` and `compact` are gone. Their work lies in `curate` and in `handoff deep`.
- Open issues and next steps move from every journal entry into one section `## Open` at the beginning of `journal.md`.
- The phases are forms of work in no fixed sequence, and the motto "documents as source of truth" is dropped, since the documents can be wrong about the material.

[CHANGELOG.md](CHANGELOG.md) lists every change.

## Background

- Pollin 2026, [Promptotyping: Zwischen Vibe Coding, Vibe Research und Context Engineering](https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin)
- Pollin 2025, [Promptotyping: Von der Idee zur Anwendung](https://dhcraft.org/excellence/blog/Promptotyping)
- The [Promptotyping specification](https://dhcraft.org/Promptotyping/) with glossary, templates and use cases

Cite the skill through [CITATION.cff](CITATION.cff).

## Licence

MIT
