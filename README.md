# Promptotyping

> **Documents as Source of Truth, Code as Disposable Artifact.**

A Claude Code skill implementing a Context Engineering methodology for LLM-assisted research artifact development.

## The Four Phases

| Phase | Output | Rule |
|-------|--------|------|
| **1. Preparation** | Raw materials | Gather only. NO .md files yet. |
| **2. Exploration** | Understanding | Probe data, test feasibility. NO .md files yet. |
| **3. Destillation** | Documentation | NOW create docs. Compress knowledge. |
| **4. Implementation** | Working artifact | Iterate: generate → validate → update docs → repeat. |

## Installation

### Claude Code CLI

Copy the skill folder to your personal skills directory:

```bash
# Personal (all projects)
cp -r promptotyping ~/.claude/skills/

# Or project-specific
cp -r promptotyping .claude/skills/
```

### Using the packaged .skill file

```bash
# Extract and install
unzip promptotyping.skill -d ~/.claude/skills/
```

## Usage

The skill activates automatically when relevant, or invoke directly:

```
/promptotyping
```

Or ask Claude naturally:

- "Use promptotyping for this project"
- "Apply the promptotyping methodology"
- "Help me build a tool using promptotyping"

## When to Use

- Building tools, visualizations, or analyses from research data
- Projects where documentation should survive the code
- Structured iteration with human-LLM collaboration
- Academic writing and research artifact development

## License

MIT License - see [LICENSE](LICENSE)

## Links

- [Agent Skills Standard](https://agentskills.io)
- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills)
