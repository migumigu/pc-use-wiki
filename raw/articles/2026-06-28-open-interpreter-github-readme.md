---
source_id: auto-20260628-opin
title: Open Interpreter GitHub README
url: https://github.com/openinterpreter/open-interpreter
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# Open Interpreter

**Open Interpreter** lets LLMs run code (Python, Javascript, Shell, and more) locally. You can chat with Open Interpreter through a ChatGPT-like interface in your terminal by running `$ interpreter` after installing.

## Core Capabilities

- Create and edit photos, videos, PDFs, etc.
- Control a Chrome browser to perform research
- Plot, clean, and analyze large datasets
- Computer Use: Simulate mouse and keyboard operations for desktop automation

## Quick Start

```bash
pip install git+https://github.com/OpenInterpreter/open-interpreter.git
interpreter
```

## Key Features

### Computer Use (Desktop Automation)
Open Interpreter supports "computer use" mode which enables:
- Screen capture (via mss or pyscreenshot)
- Mouse simulation (via PyAutoGUI)
- Keyboard simulation (via PyAutoGUI)
- OCR-based UI element recognition

### Safety Features
- Asks for user confirmation before executing code
- Experimental safe mode available
- Can run in isolated environments (Google Colab, Replit)

### Local Mode
- Supports local models via LM Studio, Jan.ai, Ollama
- Full internet access
- No time or file size restrictions

## Architecture
Open Interpreter equips a function-calling language model with an `exec()` function, which accepts a `language` and `code` to run. It then streams the model's messages, code, and system outputs to the terminal as Markdown.

## License
AGPL-3.0 license

## Repository Stats
- Stars: ~160K+
- Commits: 3,120+
- Contributors: Active community
- Last commit: May 17, 2026
- Used by: 750+ projects