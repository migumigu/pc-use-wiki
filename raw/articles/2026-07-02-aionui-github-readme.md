---
source_id: auto-2026-07-02-aionui
title: AionUi — 免费开源 AI Agent Cowork 协同办公平台
url: https://github.com/iOfficeAI/AionUi
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# AionUi — AI Agent Cowork Platform

> iOfficeAI 团队开发的开源 AI Agent Cowork 协同办公平台，24.7K+ Stars，Apache-2.0 协议

## 核心定位

AionUi 不只是聊天客户端，而是 AI Agent Cowork（协同办公）平台——AI Agent 像得力助手，在电脑上帮助处理各种任务。

## 核心能力

### Built-in Agent — 零配置即用
- 无需安装 CLI 工具 — Agent 引擎内置
- 无需复杂设置 — 粘贴 API Key 即可
- 完整 Agent 能力 — 文件读写、网页搜索、图片生成、MCP 工具
- 21 个内置专业助手 — PPT Creator, Word Creator, Excel Creator 等

### Multi-Agent 模式 — 多 Agent 统一管理
- 自动检测已安装的 CLI Agent
- 支持 Agent：Claude Code, Codex, Qwen Code, Hermes Agent, OpenClaw, Goose AI, Cursor Agent 等 17+
- 并行会话 — 多个 Agent 同时运行，独立上下文
- MCP 统一管理 — 一次配置，自动同步到所有 Agent
- YOLO 模式 / Full-Auto 模式 — 一键自动审批

### Team 模式 — 多 Agent 协作
- Leader Agent 接收指令，分解子任务，分配给 Teammate Agent
- 通过内置 Team MCP Server 协调
- Teammate 并行执行，通过异步邮箱共享结果
- 共享任务板和工作空间
- 动态扩缩 — 运行中添加/移除 Teammate

### Office 助手 — PPT/Word/Excel
- PPT：Morph 动画 .pptx，Powered by OfficeCLI
- Word：论文/文档 .docx 生成
- Excel：数据分析/图表 .xlsx/.xlsm/.csv

### 远程访问和自动化
- WebUI + Telegram / Lark / DingTalk / WeChat
- Cron 定时 — 7×24 无人值守自动化
- 跨平台：macOS / Windows / Linux

## 技术架构

- Electron 桌面应用（Webpack → electron-vite 迁移）
- React + EUI 前端
- 30+ AI 平台支持（云服务 + 本地部署）
- ACP (Agent Communication Protocol) — AionUi 自研多 Agent 协调层
- OfficeCLI — 内置 Office 文档生成引擎
- aionrs — Rust 后端服务

## 技术栈详情

- 构建：electron-vite, oxc ecosystem
- 测试：Playwright E2E, Vitest
- i18n：多语言支持（中英日韩等 10+）
- 5,596 Commits, 312 Branches, 230 Tags
- 版本：v2.1.21（截至 2026-06-18）

## 与同类对比

| 特性 | AionUi | Claude Desktop | ChatGPT Desktop |
|------|--------|---------------|-----------------|
| 多 Agent 统一管理 | ✅ 17+ Agent | ❌ 仅 Claude | ❌ 仅 GPT |
| 内置 Office 生成 | ✅ PPT/Word/Excel | ❌ | ❌ |
| Team 多Agent协作 | ✅ Leader+Teammate | ❌ | ❌ |
| MCP 统一管理 | ✅ 一次配置所有 | ✅ 需逐个配置 | ❌ |
| 远程控制 | ✅ 多渠道 | ❌ | ❌ |
| 定时自动化 | ✅ Cron | ❌ | ❌ |
| 开源 | ✅ Apache-2.0 | ❌ | ❌ |

## 来源

- GitHub: https://github.com/iOfficeAI/AionUi
- 官网: https://www.aionui.com/
- 腾讯云开发者文章: https://cloud.tencent.com/developer/article/2638605
