---
name: promptotyping
description: "Guides an agent in Promptotyping, a working practice that translates research data and their contexts into research artefacts such as tools, visualisations, editions and data workflows, built from a curated project knowledge base. Use when a user invokes Promptotyping, works in a repository whose knowledge folder guides the agent, or asks to orient in a project, explore research data, distil findings into knowledge documents, curate, ground or review those documents, or hand a session off."
argument-hint: "[orient|explore|distill|curate|handoff]"
license: MIT
compatibility: "Designed for Claude Code. Compatible with any agent that supports the Agent Skills standard (agentskills.io). Needs Git, and network access only for grounding, the templates and a project's issues."
metadata:
  author: DigitalHumanitiesCraft
  version: "2.0.0"
---

# Promptotyping

Promptotyping is a working practice in which research data and their contexts are translated into research artefacts with frontier Large Language Model (LLM) agents, so that the artefacts fit the purposes of the researchers and the ways in which they work. The agents build prototypes from modelled data and from a curated project knowledge base, and whatever checking and use of a prototype bring to light is curated back into that knowledge base. Whether an artefact fits is decided by the sources and by the research purpose, as the researchers understand both, so the knowledge documents can themselves be wrong about the material. The artefact may be replaced once what working with it revealed has been curated back.

## Terms

The work takes four forms, which recur in no fixed sequence.

- Preparation assembles the material and the research context.
- Exploration establishes what the data can and cannot support.
- Distillation writes that understanding into the knowledge documents.
- Implementation builds the artefact from them in bounded tasks.

A Promptotype is what an iteration yields. It consists of a prototype open to use and inspection, the research data it was built from and the project knowledge base, so that every state of the three can be versioned as a single whole.

The project knowledge base is the set of knowledge documents of a project, which lie in the knowledge folder and, for the agent instructions, in the repository root. The documents fall into three types. The types separate functions and lay down no file structure.

- Declarative knowledge documents say what holds, for instance the project's purpose and scope (`project.md`), how the data are structured, what they mean, where they come from and where they have gaps or are uncertain (`data.md`), and what the artefact is to do (`specification.md`).
- Process knowledge documents record what is open, how the understanding grew and for what reasons, in `journal.md`.
- Agent instruction documents tell agents how to work. They hold procedures, constraints, the checks to run and pointers to the knowledge a task needs, and they are named `CLAUDE.md` or `AGENTS.md`.

The knowledge folder is `knowledge/` in the repository root, and it holds the knowledge documents other than the agent instructions. A folder `docs/` is left to a website published from the repository. The file names in this skill are the defaults and stand for the document with that function. A project adds a document when it has the function for it, such as `design.md` for an artefact with an interface or `testing.md` for what its tests guarantee and how they are run. The knowledge documents follow the Promptotyping Documents of the specification, whose repository https://github.com/DigitalHumanitiesCraft/Promptotyping holds one template per document and the convention they follow under `templates/`. A template is readable as plain Markdown at `https://dhcraft.org/Promptotyping/templates/{slug}.md`, with the slugs `project`, `data`, `domain-knowledge`, `specification`, `design`, `architecture`, `testing`, `plan`, `journal`, `index` and `action-layer`, and the convention at `convention`. Before creating a document, read its template and follow it as far as the material fills it, and tell the user which template the document follows. Without network access, write the document by its function as this skill describes it.

The researchers know the sources and the field and judge whether an artefact fits. "The user" is whoever directs the agent, and that person passes on to the researchers what only they can decide.

## Subcommands

When the skill is invoked with a subcommand, or the user names one during the work, read the matching reference file and follow it. Text after the subcommand narrows it to a document or a topic.

| Subcommand | Call it when | Reference |
|---|---|---|
| `orient` | a session begins or the task changes | [references/orient.md](references/orient.md) |
| `explore` | there is new material or a new question to the data | [references/explore.md](references/explore.md) |
| `distill` | findings are to become the basis for building | [references/distill.md](references/distill.md) |
| `curate` | the knowledge documents are to be checked, corrected or grounded | [references/curate.md](references/curate.md) |
| `handoff` | a session ends or work passes to someone else | [references/handoff.md](references/handoff.md) |

A session runs `orient`, then the work, then `handoff`. `orient` changes nothing and may be run unasked. `explore`, `distill` and `curate` write files and commit their result, and `handoff` commits the session, so these four run when the user asks for them or agrees. No subcommand pushes.

Preparation and Implementation have no subcommand. Preparation is the researchers' work, in which the agent helps as [references/explore.md](references/explore.md) describes. Implementation is the agent's ordinary work between `orient` and `handoff` and follows the rules for building. Text that names no subcommand is a general request under those rules.

Where a finding belongs follows from its reach. A single statement or requirement is corrected under rule 3 of building or through `curate`. A changed purpose or a document that is missing calls for `distill`. An account of the data that is in question as a whole calls for `explore`.

## Rules for building

These rules apply whenever the agent builds, whether or not a subcommand was called.

1. Build one bounded task at a time, and keep a task small enough that you can run and inspect its result. State which documents the task draws on and which assumptions it makes.
2. Compare each result with the knowledge base, show it to the researchers and stop for their inspection, since a running artefact is what makes many requirements clear in the first place. For a web artefact, start a local server and give the address.
3. When a result reveals missing or wrong knowledge, write the finding into the responsible knowledge document first and let the code follow. Decide first where the fault arose, in knowledge about the data, in a requirement, in a design decision or in the agent instructions.
4. Where rules or mappings suffice to process research data, write a procedure that can be inspected, tested and rerun. Where an LLM must produce data directly, preserve its raw output, against which every later correction can then be measured, and treat each item as a proposal. An artefact that shows unconfirmed data marks the statements that are confirmed and names who confirmed them.
5. Select the context for each task. Load the documents the task needs and leave the others out, and work on large data through code, so that only a profile and selected examples enter the context.
6. Before a decision on design, propose alternatives and name what each trades for what.
7. Never change the source material in `data/`. Data the project produces lie in a folder of their own and are versioned with the knowledge base and the artefact. Commit at stable states.

## Checking

Three kinds of checking stay apart, because a judgement rests on something different in each.

- Verification settles whether a result meets a standard that the project has adopted. It is strongest as an executable check, that is, code deciding whether a stated condition holds for a result. An executable check is itself checked for whether it runs against the code the artefact actually uses, covers all of the real data and can fail. A test fixture confirms nothing about the data.
- In agentic review an agent examines code, data or knowledge documents, often with a fresh context. Its findings are evidence.
- Scholarly validation is a judgement by people who know the sources and the field. They decide whether the sources warrant a result and whether it is adequate to the research purpose.

Every result carries one of three statuses, proposal, doubted or confirmed.

- A proposal is what an agent or an LLM produces.
- A proposal is doubted once any participant in the work, agents among them, has marked it as doubtful.
- Only two things confirm a proposal, a person whose expertise extends as far as the decision demands, or a validated deterministic rule. A rule of this kind is an executable check that runs over the whole of the real data, has failed where it should on cases whose answers are known, and has been adopted by the researchers for a defined kind of decision.

Who or what set a status is recorded in the form the project uses for it, and otherwise in a short note after the statement, such as "(proposal, agent, 2026-11-14)" or "(confirmed by the editor, 2026-11-20)".

Three questions are put to each Promptotype, and they build on one another.

1. Does it do what it claims?
2. Do the sources warrant it?
3. Is it adequate to the purpose?

An agent can run executable checks and review code for the first question, raise doubts for the second, and point to gaps for the third. The researchers who work with a Promptotype accept it for a purpose once they judge it good enough for that purpose. The agent reports what it built and checked and lists what needs the researchers' decision. Scholarly validation and acceptance are recorded only as the judgement of the person who gave it, a confirmation names the person or the validated deterministic rule that set it, and what an agent reports about its own work counts only once it is confirmed independently.

## The journal

`journal.md` in the knowledge folder is the working diary of the project. Whichever subcommand first needs it creates it in this form.

```
# Journal

## Open

- #12 Map view does not show the letters dated only to a year
- Date parser rewritten, tests pass, result not yet compared with data.md.

## Entries

### 2026-11-14 Uncertain dates in the timeline

- Trigger: letters that carry only a year (data.md, section Dating).
- Found: the parser dropped them without a message.
- Decided: keep them, place them at the start of the year, mark them as uncertain.
- Rejected: leaving them out of the timeline, since the gaps are what the researchers ask about.
- Changed: scripts/parse_dates.py, specification.md.
- Evidence: tests/test_dates.py fails on the old parser and passes on the new one.
```

`## Open` stands at the beginning and holds what the next session needs to continue, meaning unfinished work, results not yet checked, questions that wait for the researchers, and work handed to a named recipient. Where the project tracks its work in issues, as on GitHub, a point is mostly a plain pointer to its issue, with the number and the title, and the issue holds the detail. A pointer to an issue of another repository names that repository, as in `owner/repo#12`. In such a project the agent proposes an issue for a point without one and creates it only when the user agrees. A point is written out only where no issue holds it. Each handoff rewrites the section as the complete current list. A settled point leaves the section, and an entry below records how it was settled. When nothing is open, the section says "Nothing open."

The entries follow under `## Entries`, newest first, one per coherent step of the work, with the fields that have content among Trigger, Found, Decided, Rejected, Corrected, Changed and Evidence, and with at least one piece of evidence. Where a journal already groups its entries under a heading of its own, keep that form. A judgement of the researchers on a Promptotype is an entry of its own, in their words, with its purpose and its known limits. An entry is history and is rewritten only by condensing. Accepted work that has not begun belongs in the specification or in a `plan.md`, where the project keeps one.

## Boundaries

- The user's task, the repository's own agent instructions and its permissions take precedence over this skill.
- Source material and research data stay accessible for inspection. Rights are settled before any material reaches a model or a public repository, and the agent asks when they are unclear.
- The agent deletes a document, publishes or pushes only when the user has authorised that action.
- If a source the work depends on cannot be read, the agent says so and reports the dependent result as unchecked.
