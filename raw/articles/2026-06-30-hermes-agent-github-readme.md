---
source_id: auto-2026-06-30-hermes-agent-readme
title: Hermes Agent GitHub README
url: https://github.com/NousResearch/hermes-agent
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: agent_integration
collected_date: 2026-06-30
collected_by: auto_research
confidence: high
---

# Hermes Agent README

> Nous Research 自进化 AI Agent，支持多平台、多消息平台、40+工具、内置学习闭环

## 核心信息

- **Stars**: 101k+
- **发布**: 2026年2月
- **License**: MIT
- **文档**: https://hermes-agent.nousresearch.com/docs/
- **社区**: Discord, Skills Hub (agentskills.io)

## 主要特性

1. **自进化学习闭环**：唯一内置学习循环的 Agent，从经验中创建技能、使用中自我改进、跨会话记忆
2. **多平台支持**：Linux, macOS, Windows (早期Beta), WSL2, Termux, Android
3. **多消息平台**：Telegram, Discord, Slack, WhatsApp, Signal, Email
4. **终端后端**：local, Docker, SSH, Singularity, Modal, Daytona, Vercal Sandbox
5. **40+ 内置工具**
6. **MCP 集成**：可连接任何 MCP server
7. **技能系统**：Skills Hub，支持 procedural memory
8. **记忆系统**：持久化记忆、用户画像、FTS5 会话搜索
9. **Cron 调度**：自然语言自动化任务
10. **批量轨迹生成**：用于研究

## 架构

- 终端界面（TUI）：多行编辑、斜杠命令自动完成、对话历史
- 网关架构：消息网关统一处理多平台
- 容器隔离：安全执行环境

## 与 OpenClaw 关系

支持从 OpenClaw 自动迁移配置、记忆、技能、API keys

## Computer Use

- 通过 trycua 支持 Windows 和 Linux 上的 computer use
- 已有 macOS 支持
- 三平台全面覆盖

## 快速安装

```bash
# Linux, macOS, WSL2, Termux
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

# Windows (早期Beta)
iex (irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1)
```

## 相关信息

- OpenClaw 继任者
- 兼容 agentskills.io 开放标准
- computer-use-linux MCP server 支持 Linux 桌面控制
