---
source_id: auto-20260629-gh78
title: OpenClaw Skills System
url: https://docs.openclaw.ai/tools/skills
source_type: official_docs
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Skills

Skills are markdown instruction files that teach the agent how and when to use tools. Each skill lives in a directory containing a `SKILL.md` file with YAML frontmatter and a markdown body.

## Loading order (highest precedence first)

| Priority | Source | Path |
|----------|--------|------|
| 1 — highest | Workspace skills | `<workspace>/skills` |
| 2 | Project agent skills | `<workspace>/.agents/skills` |
| 3 | Personal agent skills | `~/.agents/skills` |
| 4 | Managed / local skills | `~/.openclaw/skills` |
| 5 | Bundled skills | shipped with the install |
| 6 — lowest | Extra directories | `skills.load.extraDirs` + plugin skills |

## Per-agent vs shared skills

| Scope | Path | Visible to |
|-------|------|------------|
| Per-agent | `<workspace>/skills` | Only that agent |
| Project-agent | `<workspace>/.agents/skills` | Only that workspace's agent |
| Personal-agent | `~/.agents/skills` | All agents on this machine |
| Shared managed | `~/.openclaw/skills` | All agents on this machine |
| Extra dirs | `skills.load.extraDirs` | All agents on this machine |

## Agent allowlists

Skill **location** (precedence) and skill **visibility** (which agent can use it) are separate controls.

- Omit `agents.defaults.skills` to leave all skills unrestricted
- Set `agents.list[].skills: []` to expose no skills for that agent
- A non-empty `agents.list[].skills` list is the **final** set — it does not merge with defaults

## Plugins and skills

Plugins can ship their own skills by listing `skills` directories in `openclaw.plugin.json`.

Plugin skill directories merge at the same low-precedence level as `skills.load.extraDirs`.

## Skill Workshop

Skill Workshop is a proposal queue between the agent and your active skill files. When the agent spots reusable work, it drafts a proposal instead of writing directly to `SKILL.md`. You review and approve before anything changes.

## Installing from ClawHub

[ClawHub](https://clawhub.ai/) is the public skills registry.

| Action | Command |
|--------|---------|
| Install a skill into the workspace | `openclaw skills install @owner/<slug>` |
| Install from a Git repository | `openclaw skills install git:owner/repo@ref` |
| Install a local skill directory | `openclaw skills install ./path/to/skill --as my-tool` |
| Update all workspace skills | `openclaw skills update --all` |
| Verify a skill's trust envelope | `openclaw skills verify @owner/<slug>` |

## SKILL.md format

Every skill needs at minimum a `name` and `description` in the frontmatter:

```markdown
---
name: image-lab
description: Generate or edit images via a provider-backed image workflow
---

When the user asks to generate an image, use the `image_generate` tool...
```

OpenClaw follows the [AgentSkills](https://agentskills.io/) spec.

### Optional frontmatter keys

- `homepage`: URL shown as "Website" in the macOS Skills UI
- `user-invocable`: When true, the skill is exposed as a user-invocable slash command (default: true)
- `disable-model-invocation`: When true, keeps the skill's instructions out of the agent's normal prompt
- `command-dispatch`: When set to "tool", the slash command bypasses the model and dispatches directly to a registered tool
- `command-tool`: Tool name to invoke when `command-dispatch: tool` is set

## Gating

OpenClaw filters skills at load time using `metadata.openclaw` (single-line JSON in the frontmatter).

Available gates:
- `os`: Platform filter ("darwin" | "linux" | "win32")
- `requires.bins`: Each binary must exist on PATH
- `requires.anyBins`: At least one binary must exist on PATH
- `requires.env`: Each env var must exist
- `requires.config`: Each openclaw.json path must be truthy
- `always`: When true, always include the skill

## Security

**Warning**: Treat third-party skills as **untrusted code**. Read them before enabling. Prefer sandboxed runs for untrusted inputs and risky tools.

- Path containment: Workspace skill discovery only accepts skill roots whose resolved realpath stays inside the configured root
- Operator install policy: Configure `security.installPolicy` to run a trusted local policy command before skill installs continue
- Secret injection scope: `skills.entries.*.env` and `skills.entries.*.apiKey` inject secrets into the **host** process for that agent turn only — not into the sandbox
