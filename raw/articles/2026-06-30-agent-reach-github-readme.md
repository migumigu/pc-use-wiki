---
source_id: auto-20260630-agtre
title: Agent-Reach GitHub README - AI Agent Web Access Framework
url: https://github.com/Panniantong/Agent-Reach
source_type: github_readme
tier: 1
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-06-30
collected_by: auto_research
confidence: high
---

# Agent-Reach - AI Agent Web Access Framework

Agent-Reach is a scaffolding framework that provides AI Agents with comprehensive internet access capabilities across multiple platforms.

## Core Value Proposition

**Problem**: AI Agents struggle with web access due to:
- Paid APIs (Twitter API costs)
- Authentication requirements (Reddit, Xiaohongshu)
- Geo-restrictions (Bilibili from outside China)
- Data quality (raw HTML instead of readable content)

**Solution**: Agent-Reach provides a one-command solution to enable web access across 15+ platforms.

## Supported Platforms

### Zero-Config (Works out of the box)
- 🌐 Web pages (via Jina Reader)
- 📺 YouTube (subtitles + video search via yt-dlp)
- 📡 RSS/Atom feeds
- 📦 GitHub (public repos)
- 💬 WeChat public accounts
- 📰 Weibo
- 💻 V2EX

### Config Required
- 🐦 Twitter/X (Cookie auth via twitter-cli)
- 📖 Reddit (Cookie auth via rdt-cli)
- 📕 Xiaohongshu (Cookie auth via xhs-cli)
- 🎵 Douyin (MCP server)
- 💼 LinkedIn (MCP server)
- 📈 Xueqiu
- 🎙️ Xiaozhou Podcast

## Architecture

### Design Philosophy
Agent-Reach is a **scaffolding**, not a framework. It:
- Installs and configures upstream tools
- Registers SKILL.md in Agent's skills directory
- Enables Agent to directly call upstream tools

### Channel Architecture (Pluggable)
```
channels/
├── web.py → Jina Reader
├── twitter.py → twitter-cli
├── youtube.py → yt-dlp
├── github.py → gh CLI
├── reddit.py → rdt-cli
├── xiaohongshu.py → mcporter MCP
├── douyin.py → mcporter MCP
├── linkedin.py → linkedin-mcp
├── wechat.py → Exa + Camoufox
├── rss.py → feedparser
└── exa_search.py → mcporter MCP (Exa)
```

## Installation

```
帮我安装 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md
```

### Installation Modes
- **Full auto**: `agent-reach install --env=auto`
- **Safe mode**: `agent-reach install --env=auto --safe` (no system changes)
- **Dry run**: `agent-reach install --env=auto --dry-run` (preview only)

## Security
- Cookie storage: Local only (~/.agent-reach/config.yaml), file permissions 600
- Full open source code
- Safe mode available
- Dry run preview

## Technical Details
- Primary language: Python
- License: MIT
- Repository: https://github.com/Panniantong/Agent-Reach