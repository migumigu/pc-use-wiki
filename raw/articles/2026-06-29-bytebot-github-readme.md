---
source_id: auto-20260629-bytebot-gh
title: Bytebot GitHub README - Open-Source AI Desktop Agent
url: https://github.com/bytebot-ai/bytebot
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Bytebot: Open-Source AI Desktop Agent

**An AI that has its own computer to complete tasks for you**

[🌐 Website](https://bytebot.ai/) • [📚 Documentation](https://docs.bytebot.ai/) • [💬 Discord](https://discord.com/invite/d9ewZkWPTP) • [𝕏 Twitter](https://x.com/bytebot_ai)

## What is a Desktop Agent?

A desktop agent is an AI that has its own computer. Unlike browser-only agents or traditional RPA tools, Bytebot comes with a full virtual desktop where it can:

- Use any application (browsers, email clients, office tools, IDEs)
- Download and organize files with its own file system
- Log into websites and applications using password managers
- Read and process documents, PDFs, and spreadsheets
- Complete complex multi-step workflows across different programs

Think of it as a virtual employee with their own computer who can see the screen, move the mouse, type on the keyboard, and complete tasks just like a human would.

## Why Give AI Its Own Computer?

When AI has access to a complete desktop environment, it unlocks capabilities that aren't possible with browser-only agents or API integrations:

### Complete Task Autonomy

Give Bytebot a task like "Download all invoices from our vendor portals and organize them into a folder" and it will:
- Open the browser
- Navigate to each portal
- Handle authentication (including 2FA via password managers)
- Download the files to its local file system
- Organize them into a folder

### Process Documents

Upload files directly to Bytebot's desktop and it can:
- Read entire PDFs into its context
- Extract data from complex documents
- Cross-reference information across multiple files
- Create new documents based on analysis
- Handle formats that APIs can't access

### Use Real Applications

Bytebot isn't limited to web interfaces. It can:
- Use desktop applications like text editors, VS Code, or email clients
- Run scripts and command-line tools
- Install new software as needed
- Configure applications for specific workflows

## Quick Start

### Deploy in 2 Minutes

**Option 1: Railway (Easiest)**
Just click and add your AI provider API key.

**Option 2: Docker Compose**
```
git clone https://github.com/bytebot-ai/bytebot.git
cd bytebot

# Add your AI provider key (choose one)
echo "ANTHROPIC_API_KEY=sk-ant-..." > docker/.env
# Or: echo "OPENAI_API_KEY=sk-..." > docker/.env
# Or: echo "GEMINI_API_KEY=..." > docker/.env

docker-compose -f docker/docker-compose.yml up -d

# Open http://localhost:9992
```

## How It Works

Bytebot consists of four integrated components:

1. **Virtual Desktop**: A complete Ubuntu Linux environment with pre-installed applications
2. **AI Agent**: Understands your tasks and controls the desktop to complete them
3. **Task Interface**: Web UI where you create tasks and watch Bytebot work
4. **APIs**: REST endpoints for programmatic task creation and desktop control

### Key Features

- **Natural Language Tasks**: Just describe what you need done
- **File Uploads**: Drop files onto tasks for Bytebot to process
- **Live Desktop View**: Watch Bytebot work in real-time
- **Takeover Mode**: Take control when you need to help or configure something
- **Password Manager Support**: Install 1Password, Bitwarden, etc. for automatic authentication
- **Persistent Environment**: Install programs and they stay available for future tasks

## Architecture

Bytebot is built with:
- **Desktop**: Ubuntu 22.04 with XFCE, Firefox, VS Code, and other tools
- **Agent**: NestJS service that coordinates AI and desktop actions
- **UI**: Next.js application for task management
- **AI Support**: Works with Anthropic Claude, OpenAI GPT, Google Gemini
- **Deployment**: Docker containers for easy self-hosting

## License

Bytebot is open source under the Apache 2.0 license.

Built by [Tantl Labs](https://tantl.com/) and the open source community

**Repository status**: Public archive (last commit: Sep 11, 2025)
**Languages**: TypeScript 92.1%, Dockerfile 2.4%, CSS 2.0%, Smarty 1.5%, others 2%
