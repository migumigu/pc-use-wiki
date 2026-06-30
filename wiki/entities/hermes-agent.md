---
tags: [hermes-agent, nous-research, ai-agent, computer-use, desktop-automation]
created: 2026-06-30
updated: 2026-06-30
sources:
  - "[[2026-06-30-hermes-agent-github-readme]]"
  - "[[2026-06-30-hermes-agent-computer-use-tech]]"
---

# Hermes Agent

> Nous Research 自进化 AI Agent，204K+ GitHub Stars，跨平台桌面控制

## 一句话摘要

Hermes Agent 是 Nous Research 开发的支持内置学习闭环的开源自进化 AI Agent，通过 cua-driver 实现跨平台（macOS/Windows/Linux）后台桌面控制。

## 核心特性

- **自进化学习闭环**：从经验中创建技能、使用中自我改进、跨会话记忆
- **跨平台桌面控制**：后台操作，不抢占焦点，不移动真实鼠标
- **多消息平台**：Telegram、Discord、Slack、WhatsApp 等 20+ 平台
- **多终端后端**：Local、Docker、SSH、Modal、Daytona
- **60+ 内置工具**
- **MCP 集成**：连接外部 MCP Server

## 技术架构

- **Agent Loop**：自进化学习闭环
- **Memory System**：FTS5 跨会话搜索，Honcho 用户建模
- **Computer Use**：通过 cua-driver MCP 接口实现桌面控制
- **Skills System**：支持 agentskills.io 开放标准

## 相关信息

- 官方网站：https://hermes-agent.nousresearch.com/
- GitHub：https://github.com/NousResearch/hermes-agent
- License: MIT
- Stars: 204,328

## 相关页面

- [[desktop-app]] — 所属控制对象
- [[Agent集成层]] — 所属技术层级
- [[OpenClaw]] — 兼容/竞争项目
- [[Computer-Use]] — 核心能力
- [[MCP]] — 集成协议
