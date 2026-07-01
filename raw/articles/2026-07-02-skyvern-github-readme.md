---
source_id: auto-20260702-skyvern
title: Skyvern GitHub README
url: https://github.com/Skyvern-AI/skyvern
source_type: github_readme
tier: 1
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# Skyvern — Automate Browser-based workflows using LLMs and Computer Vision

## 项目概览

- **GitHub**: https://github.com/Skyvern-AI/skyvern
- **Stars**: 17,600+（第三方报道）
- **License**: AGPL-3.0（开源核心），云服务含商业功能
- **主要语言**: Python 3.11-3.13
- **最新版本**: v1.0.43（2026-06-19）
- **Commits**: 5,438
- **最新提交**: 2026-06-28

## 核心定位

Skyvern 是一个基于 LLM 和计算机视觉的浏览器自动化工具。它提供了 Playwright 兼容的 SDK，在 Playwright 之上添加 AI 功能，以及无代码工作流构建器。

## 技术架构

### 工作原理

Skyvern 受 BabyAGI 和 AutoGPT 的任务驱动自主 Agent 设计启发，增加了浏览器自动化能力。

使用一组 Agent 群体（swarm of agents）来理解网站、规划和执行操作：
1. **理解 Agent** — 视觉解析网页元素
2. **规划 Agent** — 制定操作计划
3. **执行 Agent** — 通过 Playwright 执行浏览器操作

### 核心优势

1. **零适配**：可在从未见过的网站上操作，无需定制代码
2. **布局抗变**：没有预定义的 XPath 或选择器，网站布局变化不会影响
3. **跨站通用**：单一工作流可应用于大量不同网站

### SDK 特性

**四项核心 AI 命令**：

| 命令 | 描述 |
|------|------|
| `page.act(prompt)` | 使用自然语言执行操作（如"点击登录按钮"） |
| `page.extract(prompt, schema)` | 提取结构化数据，支持可选 JSON schema |
| `page.validate(prompt)` | 验证页面状态，返回 bool |
| `page.prompt(prompt, schema)` | 向 LLM 发送任意提示，支持响应 schema |

**高级 Agent 命令**（`page.agent`）：

| 命令 | 描述 |
|------|------|
| `page.agent.run_task(prompt)` | 执行复杂多步任务 |
| `page.agent.login(credential_type, credential_id)` | 使用存储的凭证认证（支持 Bitwarden、1Password） |
| `page.agent.download_files(prompt)` | 导航并下载文件 |
| `page.agent.run_workflow(workflow_id)` | 执行预构建工作流 |

**三种交互模式**：

1. **传统 Playwright** — CSS/XPath 选择器
2. **AI 驱动** — 自然语言
3. **AI 回退** — 先尝试选择器，失败后回退到 AI

### AI 增强 Playwright 操作

所有标准 Playwright 操作支持可选 `prompt` 参数：
- `page.click(prompt="Click login button")`
- `page.fill(prompt="Email field", value="a@b.com")`
- `page.select_option(prompt="Country dropdown", value="US")`
- `page.upload_file(prompt="Upload area", files="doc.pdf")`

## 部署方式

1. **Skyvern Cloud** — 托管云版本，含反机器人检测、代理网络、CAPTCHA 解决器
2. **pip 安装** — `pip install "skyvern[all]"` + `skyvern quickstart`（默认 SQLite）
3. **Docker Compose** — 全容器化（Postgres + API + UI）

## 技术栈

- **后端**: Python (FastAPI/uvicorn)
- **前端**: TypeScript/Node.js (skyvern-frontend)
- **浏览器自动化**: Playwright
- **数据库**: SQLite（默认）/ PostgreSQL
- **LLM 集成**: LiteLLM（支持 OpenAI、Anthropic、Ollama 等）
- **部署**: Docker / Kubernetes (Helm charts)
- **凭证管理**: Bitwarden / Vaultwarden / 1Password

## 评估

- WebVoyager 评估 85.8%（Skyvern 2.0 技术报告）
- 内置评估框架（evaluation 目录，WebVoyager tasks）

## 集成

- n8n 集成
- LlamaIndex 集成
- Codex Marketplace skill
- MCP Server 支持（glama.json）

## 与传统方案对比

| 维度 | 传统方案（DOM/XPath） | Skyvern（视觉+LLM） |
|------|----------------------|---------------------|
| 适配性 | 需要为每个网站写定制脚本 | 零适配，可在新网站操作 |
| 维护性 | 布局变化即失效 | 不依赖布局，抗变化 |
| 通用性 | 单一网站专用 | 单一工作流适用多网站 |
| 准确性 | 精确但脆弱 | 基于推理，更灵活 |
