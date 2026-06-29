---
tags: [openclaw, ai-agent, gateway, github, personal-assistant]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-ab12]
---

# OpenClaw GitHub README

> 现象级开源个人 AI 助手框架，20万+ Stars（第三方报道），58,222 次提交，支持 25+ 消息平台

## 一句话摘要

OpenClaw 是一个在你自己设备上运行的个人 AI 助手框架，采用 Gateway 中心化架构，支持 25+ 消息平台，提供浏览器控制、Skills 体系、沙箱安全等完整的 Agent 基础设施。

## 核心要点

- **Gateway 架构**：单一长生命周期守护进程，WebSocket API，统一管理所有消息平台
- **多平台消息**：支持 WhatsApp、Telegram、Slack、Discord、微信、QQ 等 25+ 平台
- **浏览器控制**：独立 profile 隔离 + CDP 直连两种模式，SSR防护
- **Skills 体系**：6 级加载优先级，遵循 AgentSkills 规范，ClawHub 技能市场
- **沙箱安全**：Docker/SSH/OpenShell 三种后端，精细权限控制
- **多 Agent 路由**：按渠道/账户/联系人路由到独立 Agent 工作区
- **跨平台**：macOS/Windows/Linux 桌面 + iOS/Android 节点
- **技术栈**：TypeScript 91.7%、Node.js 24+、pnpm workspace

## 关键概念

- [[OpenClaw]] — 本项目
- [[Agent]] — AI 自主执行智能体
- [[MCP]] — Model Context Protocol
- [[浏览器自动化]] — 浏览器控制相关

## 相关页面

- [[浏览器控制]] — 浏览器控制主题
- [[桌面应用控制]] — 桌面应用控制主题
- [[系统服务控制]] — 系统服务控制主题
- [[Agent集成层]] — Agent 集成层主题
