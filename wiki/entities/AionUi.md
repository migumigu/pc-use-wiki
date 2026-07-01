---
tags: [aionui, cowork, multi-agent, desktop-app, electron, office]
created: 2026-07-02
updated: 2026-07-02
sources: [2026-07-02-aionui-github-readme, 2026-07-02-aionui-eigent-comparison]
---

# AionUi

> iOfficeAI 开源 AI Agent Cowork 协同办公平台，24K+ Stars，Apache-2.0，17+ Agent 统一管理

## 概述

AionUi 是 iOfficeAI 团队开发的开源 AI Agent Cowork 协同办公平台。不同于传统聊天客户端，AionUi 是一个让 AI Agent 像得力助手一样在电脑上帮助处理各种任务的协同平台。

## 核心能力

### Built-in Agent — 零配置即用
- 内置 Agent 引擎，无需安装 CLI 工具
- 21 个内置专业助手（PPT/Word/Excel Creator 等）
- 完整 Agent 能力：文件读写、网页搜索、图片生成、MCP 工具

### Multi-Agent 模式
- 自动检测 17+ CLI Agent（Claude Code, Codex, Hermes Agent, OpenClaw 等）
- 并行会话，独立上下文
- MCP 统一管理——一次配置同步所有 Agent
- YOLO/Full-Auto 模式

### Team 模式 — 多Agent协作
- Leader Agent 分解任务+分配 Teammate
- 内置 Team MCP Server 协调
- Teammate 并行执行+异步邮箱共享结果
- 动态扩缩

### Office 文档生成
- PPT：Morph 动画 .pptx（OfficeCLI 驱动）
- Word：论文/文档 .docx
- Excel：数据分析 .xlsx/.xlsm/.csv

### 远程访问与自动化
- WebUI 模式 + 多渠道通知（Telegram/Lark/DingTalk/WeChat）
- Cron 定时：7×24 无人值守
- 9+ 格式实时预览

## 技术栈

- 桌面框架：Electron (electron-vite)
- 前端：React + EUI
- 后端：aionrs (Rust)
- Agent协调：ACP (Agent Communication Protocol)
- 构建：oxc ecosystem
- 版本：v2.1.21（截至 2026-06-18）

## 局限性

- Electron 重量级，资源占用大
- ACP 协议为 AionUi 专有，非标准
- 多Agent模式依赖安装各 CLI 工具
- 未见企业级权限管理（RBAC/审计日志）

## 生态位

- vs [[Eigent]]：AionUi 侧重统一管理和图形化，Eigent 侧重多Agent编排
- vs Claude Cowork：AionUi 免费跨平台，Claude Cowork 仅 macOS + $100/mo
- vs [[Goose]]：AionUi 是桌面协同平台，Goose 是本地 AI Agent

## 来源

- GitHub: https://github.com/iOfficeAI/AionUi
- 官网: https://www.aionui.com/

## 相关页面

- [[Eigent]]
- [[Goose]]
- [[MCP]]
- [[桌面应用控制]]
