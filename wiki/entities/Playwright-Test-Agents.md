---
tags: [实体, Agent, 测试]
created: 2026-06-28
updated: 2026-06-28
sources:
  - wiki/sources/2026-06-28-playwright-test-agents-official-docs.md
  - wiki/sources/2026-06-28-playwright-test-agents-analysis.md
  - wiki/sources/2026-06-28-playwright-test-agents-healer.md
---

# Playwright Test Agents

> Playwright 官方内置的 AI 测试智能体系统，实现"先规划、再生成、后修复"的智能测试工作流

## 简介

Playwright Test Agents 是 Playwright 官方提供的 AI 测试智能体系统，包含三个核心 Agent（Planner、Generator、Healer），可独立使用或串联成完整的 agentic loop。该系统基于 Playwright Model Context Protocol (MCP) Server 构建。

## 核心组件

### 🎭 Planner（规划师）

**职责：** 探索应用程序，生成人类可读的 Markdown 测试计划

**输入：**
- 明确请求（如 "Generate a plan for guest checkout."）
- 设置环境的 seed test
- （可选）产品需求文档（PRD）

**输出：**
- Markdown 测试计划（`specs/*.md`）

### 🎭 Generator（生成器）

**职责：** 将 Markdown 测试计划转换为可执行的 Playwright 测试代码

**输入：**
- 来自 `specs/` 的 Markdown 计划文件

**输出：**
- Playwright 测试套件（`tests/*.spec.ts`）

### 🎭 Healer（修复师）

**职责：** 自动修复因 UI 变化导致的测试失败

**机制：**
1. 重放失败步骤
2. 检查当前 UI 以定位等效元素
3. 建议补丁（定位器更新、等待调整）
4. 重新运行直到通过或护栏停止

## 支持的 AI 工具

- VS Code Copilot
- Claude Code
- Codex
- OpenCode

## 初始化命令

```bash
npx playwright init-agents --loop=vscode
npx playwright init-agents --loop=claude
npx playwright init-agents --loop=codex
npx playwright init-agents --loop=opencode
```

## 目录结构

```
repo/
  .github/                    # Agent definitions
  specs/                      # Markdown 测试计划
  tests/                      # 生成的 Playwright 测试
  playwright.config.ts        # Playwright 配置
```

## 与传统自动化测试对比

| 维度 | 传统 AI 生成 | Playwright Test Agents |
|------|-------------|----------------------|
| 工作流 | 你说它做，逐步指挥 | 三 Agent 协作，Planner 先规划 |
| 测试稳定性 | 依赖人工维护 | Healer 自动修复 |
| 业务理解 | AI 不懂业务边界 | Planner 探索应用生成计划 |
| 维护成本 | 高 | 低（自愈能力） |

## 相关页面

- [[Playwright]]
- [[浏览器控制]]
- [[MCP]]
- [[agent-browser]]
