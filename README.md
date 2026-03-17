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
- `/promptotyping distill` – create or update promptotyping docs from current knowledge
- `/promptotyping check` – gap analysis, blind spots
- `/promptotyping verify` – validate facts via web search
- `/promptotyping save` – git savepoint + journal update
- `/promptotyping handoff` – end session, persist status for next orient

## Background

- Pollin 2026, [Promptotyping: Zwischen Vibe Coding, Vibe Research und Context Engineering](https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin)
- Pollin 2025, [Promptotyping: Von der Idee zur Anwendung](https://dhcraft.org/excellence/blog/Promptotyping)

## License

MIT
