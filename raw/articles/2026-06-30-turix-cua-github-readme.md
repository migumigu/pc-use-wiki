---
source_id: auto-2026-06-30-turix-cua-readme
title: TuriX-CUA GitHub README
url: https://github.com/TurixAI/TuriX-CUA
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-06-30
collected_by: auto_research
confidence: high
---

# TuriX · Desktop Actions, Driven by AI

**Talk to your computer, watch it work.**

TuriX lets your powerful AI models take real, hands‑on actions directly on your desktop. It ships with a **state‑of‑the‑art computer‑use agent** (achieves 80% success rate on our OSWorld‑style Mac benchmark and 64.2% success rate on OSWorld) yet stays 100% open‑source and cost‑free for personal & research use.

## Key Features

| Capability | What it means |
|---|---|
| **SOTA default model** | Outperforms previous open‑source agents (e.g. UI‑TARS) on success rate and speed on Mac |
| **No app‑specific APIs** | If a human can click it, TuriX can too—WhatsApp, Excel, Outlook, in‑house tools… |
| **Hot‑swappable "brains"** | Replace the VLM policy without touching code (`config.json`) |
| **MCP‑ready** | Hook up *Claude for Desktop* or **any** agent via the Model Context Protocol (MCP) |
| **Skills (markdown playbooks)** | Planner selects relevant skill guides (name + description), brain uses full instructions to plan each step |

## Model Performance

### OSWorld Benchmark — 3rd Place on the Leaderboard (50 Steps)

TuriX scores **64.2% (229.88 / 358)** on the full OSWorld benchmark, ranking **3rd overall** among all submitted agents. Notably, TuriX is built and optimized for **macOS**, where we achieve an **80%+ success rate** on our self-hosted OSWorld-style Mac benchmark. We used **zero Linux training data**, yet still achieve a top-3 finish on OSWorld's Linux-based environment.

## Architecture

Multi-model design with four roles:
- **brain**: Understanding and planning
- **actor**: Execution
- **memory**: Memory management
- **planner**: Task planning (when enabled)

Supports multiple LLM providers: Turix, Ollama, OpenAI, Anthropic, Google.

## OpenClaw Integration

TuriX can be used via OpenClaw with published ClawHub skill:
- https://clawhub.ai/Tongyu-Yan/turix-cua

Local OpenClaw skill packages included:
- macOS package in `main` branch
- Windows package in `multi-agent-windows` branch
- Linux package in `multi-agent-linux` branch

## Quick Start (macOS)

1. Download the App from https://turix.ai/
2. Create Python 3.12 Environment
3. Grant macOS Permissions (Accessibility + Safari Automation)
4. Configure API keys and run

## License

MIT License
