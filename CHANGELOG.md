# Changelog

Changes to the Promptotyping skill, per version. Versions are fixed by Git tags.

## 2.0.0, 2026-11-14

Version 2 brings the skill into line with the definition of Promptotyping as a working practice.

### Changed

- Promptotyping is defined as a working practice for translating research data and their contexts, with frontier LLM agents, into research artefacts that fit the researchers' purposes and ways of working. Version 1 called it a context engineering methodology.
- The four phases are four forms of work, Preparation, Exploration, Distillation and Implementation, which recur in no fixed sequence.
- What decides whether an artefact fits lies in the sources and the research purpose as the researchers understand them. The motto of version 1, documents as source of truth and code as disposable artefact, is dropped. The knowledge documents guide the work and can be wrong about the material, and an artefact may be replaced once what working with it revealed has been curated into the project knowledge.
- The skill has five subcommands, `orient`, `explore`, `distill`, `curate` and `handoff`. Version 1 had six.
- `distill` also writes the specification, as personas, epics and user stories with acceptance criteria.
- `handoff` remains the end of a session. Journal entries have a new form, a heading with date and title and the fields Trigger, Found, Decided, Rejected, Corrected, Changed and Evidence, newest first. A section `## Open` at the beginning of `journal.md`, rewritten at each handoff, replaces the fields for open issues and next steps in every entry.
- A new project keeps its knowledge base in `knowledge/`, with `project.md`, `data.md`, `specification.md` and `journal.md`. Projects built with version 1 keep `docs/` and their document names, and the skill works with them by their function.

### Added

- `explore`, the form of work Exploration as a subcommand of its own, with Preparation at its beginning in a new project.
- `curate`, the maintenance of the existing knowledge documents. The agent chooses among three kinds, against the project, grounding against knowledge outside the project, and review by an agent with a fresh context.
- `handoff deep`, which curates in all three kinds, closes the session and condenses the journal.
- Rules for building in the core of the skill, which apply whether or not a subcommand was called.
- Rules for checking in the core of the skill. They name verification, agentic review and scholarly validation, the statuses proposal, doubted and confirmed, and three questions put to each Promptotype.

### Replaced

- `check` is replaced by the kind review of `curate`. The old call leads there and, as before, reports without changing a document.
- `verify` is replaced by the kind grounding of `curate`. The old call leads there. It now corrects in place what a web request decides and marks the rest.
- `compact` is replaced by the condensing of the journal within `handoff deep`. The old call leads to the condensing alone. It still keeps the full originals in `journal-archive.md`. The fixed thresholds, the argument for the number of entries to keep and the section heading for condensed history are dropped.

### Removed

- The interaction examples, the table of documents to load per task, the table of triggers for updating documents and the field Phase in journal entries. Their substance stands in the rules for building.
- The links to example documents and to the study on context rot in the skill file.

## 1.0.0

The skill as tagged `v1.0.0`, with four phases and the operations orient, handoff, check, compact, distill and verify.
