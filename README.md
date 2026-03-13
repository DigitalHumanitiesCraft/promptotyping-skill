# Promptotyping

A [Claude Code skill](https://docs.anthropic.com/en/docs/claude-code/skills) for building research artifacts (tools, visualizations, editions) with iterative documentation.

The skill includes six operations as reference files (orient, distill, check, verify, save, handoff) that Claude loads on demand via `/promptotyping orient`, `/promptotyping check`, etc.

## Installation

```bash
# Personal (all projects)
cp -r promptotyping ~/.claude/skills/

# Or project-specific
cp -r promptotyping .claude/skills/
```

## Usage

Ask Claude to use the methodology:

- *"Use promptotyping for this project"*
- *"Promptotyping für dieses Projekt"*

Operations during a session:

- `/promptotyping orient` — state detection, session start
- `/promptotyping distill` — compress findings into docs
- `/promptotyping check` — gap analysis, blind spots
- `/promptotyping verify` — validate facts via web search
- `/promptotyping save` — git savepoint + journal update
- `/promptotyping handoff` — session end, persist status

## Background

- Pollin 2026, [Promptotyping: Zwischen Vibe Coding, Vibe Research und Context Engineering](https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin)
- Pollin 2025, [Promptotyping: Von der Idee zur Anwendung](https://dhcraft.org/excellence/blog/Promptotyping)

## License

MIT
