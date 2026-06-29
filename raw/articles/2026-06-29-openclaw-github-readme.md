---
source_id: auto-20260629-ab12
title: OpenClaw GitHub README
url: https://github.com/openclaw/openclaw
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# OpenClaw — Personal AI Assistant

**EXFOLIATE! EXFOLIATE!**

**OpenClaw** is a *personal AI assistant* you run on your own devices. It answers you on the channels you already use. It can speak and listen on macOS/iOS/Android, and can render a live Canvas you control. The Gateway is just the control plane — the product is the assistant.

Supported channels include: WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, iMessage, IRC, Microsoft Teams, Matrix, Feishu, LINE, Mattermost, Nextcloud Talk, Nostr, Synology Chat, Tlon, Twitch, Zalo, Zalo Personal, WeChat, QQ, WebChat.

## Install (recommended)

Runtime: **Node 24 (recommended) or Node 22.19+**.

```
npm install -g openclaw@latest
openclaw onboard --install-daemon
```

## Highlights

- **Local-first Gateway** — single control plane for sessions, channels, tools, and events.
- **Multi-channel inbox** — 25+ messaging platforms supported
- **Multi-agent routing** — route inbound channels/accounts/peers to isolated agents
- **Voice Wake + Talk Mode** — wake words on macOS/iOS and continuous voice on Android
- **Live Canvas** — agent-driven visual workspace with A2UI
- **First-class tools** — browser, canvas, nodes, cron, sessions, and Discord/Slack actions
- **Companion apps** — Windows Hub, macOS menu bar app, and iOS/Android nodes
- **Onboarding + skills** — onboarding-driven setup with bundled/managed/workspace skills

## Security model

- Default: tools run on the host for the `main` session
- Group/channel safety: set `agents.defaults.sandbox.mode: "non-main"` to run non-`main` sessions inside sandboxes
- Docker is the default sandbox backend; SSH and OpenShell backends are also available

## Repository stats

- 58,222+ commits
- TypeScript 91.7%, Swift 3.3%, JavaScript 2.7%, Kotlin 1.0%
- 202+ releases
- Latest: v2026.6.1 (Jun 3, 2026)
