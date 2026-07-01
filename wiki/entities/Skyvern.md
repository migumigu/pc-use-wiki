---
tags: [工具, 浏览器自动化, AI-Agent, 计算机视觉]
created: 2026-07-02
updated: 2026-07-02
sources:
  - wiki/sources/2026-07-02-skyvern-github-readme.md
---

# Skyvern

> 基于 LLM 和计算机视觉的浏览器自动化工具，WebVoyager 评估 85.85% SOTA

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 | 浏览器自动化框架 |
| 开发者 | Skyvern-AI |
| GitHub | https://github.com/Skyvern-AI/skyvern |
| Stars | 约 17.6K+（第三方报道）<!-- confidence: UNVERIFIED --> |
| License | AGPL-3.0 |
| 语言 | Python 3.11-3.13 |
| 最新版本 | v1.0.43（2026-06-19） |
| Commits | 5,438 |

## 核心能力

1. **视觉+LLM 自动化**：截图+视觉模型理解网页，不依赖 DOM 解析或 XPath
2. **Playwright 兼容 SDK**：在 Playwright 之上添加 AI 功能
3. **四项 AI 命令**：act / extract / validate / prompt
4. **Agent 群体架构**：理解 → 规划 → 执行的 swarm 协作
5. **无代码工作流**：Workflow Studio 可视化构建器
6. **凭证管理**：Bitwarden / Vaultwarden / 1Password 集成

## 三种交互模式

1. **传统 Playwright** — CSS/XPath 选择器（精确但脆弱）
2. **AI 驱动** — 自然语言（灵活但消耗 token）
3. **AI 回退** — 先尝试选择器，失败后回退 AI（推荐）

## 技术架构

- **后端**: Python (FastAPI/uvicorn)
- **浏览器自动化**: Playwright
- **LLM 集成**: LiteLLM（支持 OpenAI、Anthropic、Ollama 等）
- **数据库**: SQLite（默认）/ PostgreSQL
- **部署**: Docker / Kubernetes (Helm charts)

## 性能评估

- WebVoyager 2.0 评估: **85.85%**<!-- confidence: EXTRACTED -->（SOTA，可本地复现）
- 实际使用：约七分之一的多步骤任务仍可能失败

## 与同类工具对比

| 维度 | Skyvern | browser-use | Stagehand |
|------|---------|-------------|-----------|
| 技术路线 | 视觉+LLM | DOM+LLM | 代码+AI混合 |
| WebVoyager | 85.85% | ~70% | N/A |
| Playwright兼容 | ✅ SDK扩展 | ❌ 独立 | ✅ 原生 |
| 部署方式 | Cloud/自托管 | 自托管 | Cloud/自托管 |
| License | AGPL-3.0 | MIT | MIT |

## 相关页面

- [[Playwright]]
- [[browser-use]]
- [[Stagehand]]
- [[浏览器自动化]]
- [[浏览器控制]]
