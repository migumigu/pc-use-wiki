---
tags: [素材, 官方文档]
created: 2026-06-28
updated: 2026-06-28
sources:
  - raw/articles/2026-06-28-playwright-test-agents-official-docs.md
---

# Playwright Test Agents 官方文档

> Playwright 官方内置的三个 AI 测试智能体：Planner、Generator、Healer

## 一句话摘要

Playwright Test Agents 是 Playwright 官方提供的 AI 测试智能体系统，包含 Planner（探索应用生成测试计划）、Generator（生成可执行测试代码）和 Healer（自动修复失败测试）三个核心组件。

## 关键信息

- **类型**：官方文档
- **URL**：https://playwright.dev/docs/test-agents
- **控制对象**：浏览器控制
- **技术层级**：Agent 集成层

## 核心内容

### 三 Agent 架构

1. **🎭 Planner** - 探索应用并生成 Markdown 测试计划
2. **🎭 Generator** - 将 Markdown 计划转换为 Playwright 测试文件
3. **🎭 Healer** - 执行测试套件并自动修复失败的测试

### 支持的 AI 工具

- VS Code Copilot
- Claude Code
- Codex
- OpenCode

### 初始化命令

```bash
npx playwright init-agents --loop=vscode
npx playwright init-agents --loop=claude
npx playwright init-agents --loop=codex
npx playwright init-agents --loop=opencode
```

## 相关页面

- [[Playwright]]
- [[浏览器控制]]
- [[agent-browser]]
