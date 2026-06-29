---
source_id: auto-20260629-ef56
title: OpenClaw Tools Overview
url: https://docs.openclaw.ai/tools
source_type: official_docs
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Tools Overview

## Choose tools, skills, or plugins

### Use a tool when the agent needs to act
A tool is a typed function the agent can call, such as `exec`, `browser`, `web_search`, `message`, or `image_generate`.

### Use a skill when the agent needs instructions
A skill is a `SKILL.md` instruction pack loaded into the agent prompt. Use a skill when the agent already has the tools it needs, but needs a repeatable workflow.

### Use a plugin when OpenClaw needs a new capability
A plugin can add tools, skills, channels, model providers, speech, realtime voice, media generation, web search, web fetch, hooks, and other runtime capabilities.

## Built-in tool categories

| Category | Use when the agent needs to... | Representative tools |
|----------|--------------------------------|----------------------|
| Runtime | Run commands, manage processes | `exec`, `process`, `code_execution` |
| Files | Read and change workspace files | `read`, `write`, `edit`, `apply_patch` |
| Web | Search the web, fetch content | `web_search`, `x_search`, `web_fetch` |
| Browser | Operate a browser session | `browser` |
| Messaging and channels | Send replies or channel actions | `message` |
| Sessions and agents | Inspect sessions, delegate work | `sessions_*`, `subagents`, `agents_list` |
| Automation | Schedule work or respond to events | `cron`, `heartbeat_respond` |
| Gateway and nodes | Inspect Gateway state | `gateway`, `nodes` |
| Media | Analyze, generate, or speak media | `image`, `image_generate`, `tts` |
| Large OpenClaw catalogs | Search and call many eligible tools | `tool_search_code`, `tool_search` |

## Configure access and approvals

Tool policy is enforced before the model call. If policy removes a tool, the model does not receive that tool's schema for the turn.

A run can lose tools because of:
- Global config
- Per-agent config
- Channel policy
- Provider restrictions
- Sandbox rules
- Channel/runtime policy
- Plugin availability

## Extend capabilities

- Install or manage an existing plugin with Plugins
- Build a new integration with Build plugins
- Add or tune reusable agent instructions with Skills
- Use Plugin SDK and Plugin manifest for implementation contracts
