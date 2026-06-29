---
source_id: auto-2026-06-28-ptagents
title: Playwright Test Agents 官方文档
url: https://playwright.dev/docs/test-agents
source_type: official_docs
tier: 1
control_object: browser_control
tech_layer: agent_integration
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# Playwright Test Agents 官方文档

## 核心概念

Playwright Test Agents 是 Playwright 官方内置的三个 AI Agent：

1. **🎭 Planner** - 探索应用并生成 Markdown 测试计划
2. **🎭 Generator** - 将 Markdown 计划转换为 Playwright Test 文件
3. **🎭 Healer** - 执行测试套件并自动修复失败的测试

## 工作流程

### Planner Agent
**输入：**
- 对 Planner 的明确请求（如 "Generate a plan for guest checkout."）
- 设置环境的 seed test
- （可选）产品需求文档（PRD）

**输出：**
- Markdown 测试计划，保存为 `specs/basic-operations.md`
- 人类可读且足够精确以进行测试生成

### Generator Agent
**输入：**
- 来自 `specs/` 的 Markdown 计划

**输出：**
- `tests/` 下的测试套件
- 生成的测试可能包含可由 healer 自动修复的初始错误

### Healer Agent
当测试失败时，healer agent：
- 重放失败步骤
- 检查当前 UI 以定位等效元素或流程
- 建议补丁（如定位器更新、等待调整、数据修复）
- 重新运行测试直到通过或护栏停止循环

## 目录结构

```
repo/
  .github/        # agent definitions
  specs/          # 人类可读的测试计划
    basic-operations.md
  tests/          # 生成的 Playwright 测试
    seed.spec.ts  # 环境的 seed test
    tests/create/add-valid-todo.spec.ts
  playwright.config.ts
```

## 初始化命令

```bash
npx playwright init-agents --loop=vscode
npx playwright init-agents --loop=claude
npx playwright init-agents --loop=codex
npx playwright init-agents --loop=opencode
```

## 关键特性

1. **Agentic Loop** - 三个 agent 可独立使用、顺序使用或链接成 agentic loop
2. **Seed Test** - 提供 `page` context 来引导执行
3. **自动修复** - Healer agent 自动修复失败的测试
4. **多 AI 工具支持** - 支持 VS Code、Claude Code、Codex、OpenCode
