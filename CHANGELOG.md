# Changelog

Changes to the Promptotyping skill, per version. Versions are fixed by Git tags.

## 2.0.0, 2026-11-17

Version 2 brings the skill into line with the definition of Promptotyping as a working practice.

### Changed

- Version 1 called Promptotyping a context engineering methodology. Version 2 defines it as a working practice in which research data and their contexts are translated, with frontier LLM agents, into research artefacts, so that the artefacts fit the purposes of the researchers and the ways in which they work.
- The four phases are four forms of work, Preparation, Exploration, Distillation and Implementation, which recur in no fixed sequence.
- Whether an artefact fits is judged against the sources and the research purpose, both as the researchers understand them. The motto of version 1, documents as source of truth and code as disposable artefact, is dropped. The knowledge documents guide the work and can be wrong about the material, and an artefact may be replaced once what working with it revealed has been curated into the project knowledge.
- The skill has five subcommands, `orient`, `explore`, `distill`, `curate` and `handoff`. Version 1 had six.
- `distill` writes the specification with personas, and each user story carries an acceptance criterion of its own that the researchers can decide on the running artefact. Version 1 wrote epics, user stories, priorities and success criteria for the specification as a whole.
- `explore`, `distill` and `curate` write files and commit their result, so they run, like `handoff`, when the user asks for them or agrees. In version 1 only `handoff` and `compact` committed.
- `handoff` remains the end of a session. Journal entries stand under `## Entries` and have a new form, a heading with date and title and the fields Trigger, Found, Decided, Rejected, Corrected, Changed and Evidence, newest first. A section `## Open` at the beginning of `journal.md`, rewritten at each handoff, replaces the fields for open issues and next steps in every entry. Where the project tracks its work in issues, a point under `## Open` is a pointer to its issue, and for a point without one the agent proposes an issue and creates it when the user agrees.
- The knowledge folder is `knowledge/` in the repository root, with `project.md`, `data.md`, `specification.md` and `journal.md`. Version 1 also accepted `docs/` and `promptotyping-docs/`, and `docs/` is now left to a website published from the repository. Of the calls of version 1, version 2 keeps `orient`, `distill` and `handoff`, and of its documents `journal.md`, `journal-archive.md` and `design.md`. Version 1 stays available under the tag `v1.0.0` for projects that continue with it.

### Added

- `explore`, the form of work Exploration as a subcommand of its own, with Preparation at its beginning in a new project.
- `curate`, the maintenance of the existing knowledge documents. The agent chooses among three kinds, against the project, grounding against knowledge outside the project, and review by an agent that starts from a fresh context and did not build the work.
- `handoff deep`, which curates in all three kinds, closes the session and condenses the journal.
- Three types of knowledge documents, declarative, process and agent instruction documents. The agent instructions, `CLAUDE.md` or `AGENTS.md` in the repository root, count among the knowledge documents of the project knowledge base.
- Rules for building in the core of the skill, which apply whether or not a subcommand was called.
- Rules for checking in the core of the skill. They name verification, agentic review and scholarly validation, the statuses proposal, doubted and confirmed, and three questions put to each Promptotype. A confirmation names the person or the validated deterministic rule that set it.
- Boundaries in the core of the skill: the user's task and the repository's own instructions take precedence, rights to the material are settled before it reaches a model or a public repository, deleting, publishing and pushing need the user's authorisation, and a result that depends on an unreadable source is reported as unchecked.
- Pointers to the templates of the Promptotyping Documents in the repository of the specification, which the skill reads before it creates a document.

### Replaced

- `check` is replaced by the kind review of `curate`.
- `verify` is replaced by the kind grounding of `curate`.
- `compact` is replaced by the condensing of the journal within `handoff deep`, which still keeps the full originals in `journal-archive.md`. The fixed thresholds, the argument for the number of entries to keep and the section heading for condensed history are dropped.

### Removed

- The interaction examples, the table of documents to load per task, the table of triggers for updating documents and the field Phase in journal entries. Their substance stands in the rules for building.
- The links to example documents and to the study on context rot in the skill file.

## 1.0.0

The skill as tagged `v1.0.0`, with four phases and the operations orient, handoff, check, compact, distill and verify.
