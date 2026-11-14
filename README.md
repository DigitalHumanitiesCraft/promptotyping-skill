# Promptotyping

An [Agent Skill](https://agentskills.io/specification) for Promptotyping, a working practice for translating research data and their contexts, with frontier Large Language Model (LLM) agents, into research artefacts that fit the researchers' purposes and ways of working. Such artefacts are tools, visualisations, editions and data workflows.

Agents build prototypes from modelled data and a curated project knowledge base, a small set of Markdown documents that researchers and agent keep in the repository. The prototype is a means of knowing. Working with it shows what the data support and what the project needs, and what checking and use reveal is curated back into the knowledge base. What decides whether an artefact fits lies in the sources and the research purpose as the researchers understand them.

Each iteration yields a Promptotype, a prototype that can be used and inspected, together with the knowledge base and the research data from which it was built.

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

### `/promptotyping orient`

Call it when a session begins or the task changes. It establishes where the project stands, changes no file, and names the step that comes next.

### `/promptotyping explore`

Call it when there is new material or a new question to the data. It establishes what the data can and cannot support and records structure, meaning, gaps and uncertainties with their evidence. In a new project it begins with Preparation, in which the researchers name purpose, question and provenance.

### `/promptotyping distill`

Call it when findings are to become the basis for building. It models them as knowledge documents, and it reduces and sharpens. It leaves out what the purpose does not need and makes explicit what the material holds only implicitly. It writes what holds about the material and what the artefact is to do for the researchers, the second as epics and user stories.

### `/promptotyping curate`

Call it when the knowledge documents are to be checked or corrected. It holds their statements against a measure and brings them back into line with it. The agent chooses the measure. Against the project, it compares the documents with the data, the code and the state of the work. As grounding, it compares them with knowledge outside the project. As review, an agent with a fresh context reads documents and artefact critically and reports doubts.

### `/promptotyping handoff`

Call it when a session ends or work passes to someone else. It records in the journal what was done and why, states what is open, and commits. It never pushes. `/promptotyping handoff deep` first curates and then condenses the journal, for a longer pause or a change of hands.

A session runs `orient`, then the work, then `handoff`. Building itself has no subcommand. It is the agent's ordinary work, and its rules stand in the core of the skill. The agent builds in small steps that can be run and inspected, shows each result to the researchers, and writes a finding into the knowledge documents before the code follows.

## How the skill is built

- [`promptotyping/SKILL.md`](promptotyping/SKILL.md) holds the definition, the terms, the rules for building and the rules for checking. An agent loads it whenever the skill is active.
- [`promptotyping/references/`](promptotyping/references/) holds one file per subcommand, which the agent loads when the subcommand or one that builds on it is called.

## The knowledge base

In a new project the documents lie in `knowledge/`, and the agent instructions in the repository root.

- `project.md` states the purpose and scope of the project.
- `data.md` states structure, meaning, provenance, gaps and uncertainties of the data.
- `specification.md` states what the artefact is to do, as epics and user stories with acceptance criteria.
- `journal.md` states what is open, and how the understanding developed and why.
- `CLAUDE.md` or `AGENTS.md` states how agents are to work in this repository.

A project adds a document when it has the function for it. The document convention and its templates are part of the [Promptotyping specification](https://dhcraft.org/Promptotyping/).

## Checking

The skill keeps apart verification against a standard the project has accepted, agentic review by an agent with a fresh context, and scholarly validation by people who know the sources and the field. What an agent produces is a proposal. Anyone may mark it as doubted, and it is confirmed only by a person with the required expertise or by a validated deterministic rule.

Three questions are put to each Promptotype. Does it do what it claims? Is it warranted by the sources? Is it adequate to the purpose? Acceptance for a purpose lies with the researchers who work with the Promptotype.

## Coming from version 1

Version 1.0.0 stays available under the tag [`v1.0.0`](https://github.com/DigitalHumanitiesCraft/promptotyping-skill/tree/v1.0.0). An installed copy does not change by itself.

- `orient` keeps its purpose.
- Exploration, a phase without a call in version 1, is now `explore`.
- `distill` now also writes epics and user stories. `distil` is accepted as well.
- `check` leads to `curate review`. As before, it reports and changes nothing.
- `verify` leads to `curate ground`. It now corrects in place what a web request decides and marks the rest.
- `handoff` still ends the session and commits without pushing.
- `compact` leads to the condensing of the journal, which keeps the full originals in `journal-archive.md`. The number of entries to keep is no longer an argument.
- Open issues and next steps, which stood in every journal entry, now stand in one section `## Open` at the beginning of `journal.md`. The first handoff with version 2 carries them over.
- The four phases are four forms of work that recur in no fixed sequence.
- The motto "documents as source of truth" is dropped. Sources and research purpose decide, and the documents can be wrong about the material.

Projects built with version 1 keep their folder `docs/` and the names of their documents. The skill finds them there and works with them by their function.

All changes are listed in [CHANGELOG.md](CHANGELOG.md).

## Background

- Pollin 2026, [Promptotyping: Zwischen Vibe Coding, Vibe Research und Context Engineering](https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin)
- Pollin 2025, [Promptotyping: Von der Idee zur Anwendung](https://dhcraft.org/excellence/blog/Promptotyping)
- The [Promptotyping specification](https://dhcraft.org/Promptotyping/) with glossary, templates and use cases

Cite the skill through [CITATION.cff](CITATION.cff).

## Licence

MIT
