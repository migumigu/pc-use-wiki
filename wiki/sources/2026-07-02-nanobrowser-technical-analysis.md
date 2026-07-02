---
tags: [Nanobrowser, architecture, multi_agent, TypeScript]
created: 2026-07-02
updated: 2026-07-02
sources: ["raw/articles/2026-07-02-nanobrowser-technical-analysis.md"]
---

# Nanobrowser 技术架构分析

> Nanobrowser双智能体协作架构、技术栈和工作流程深度解析

## 多智能体架构

### Planner（规划器）

- 负责任务策略制定和调整
- 进行深度推理和规划
- 处理复杂逻辑决策
- 智能自我修正，遇到障碍时动态调整方案

### Navigator（导航者）

- 负责具体的网页导航操作
- 执行Planner下达的指令
- 处理页面交互（点击、输入、滚动等）
- 实时反馈执行状态

## 核心工作流程

```
用户输入 → Planner分析 → Navigator执行 → 结果反馈 → Planner评估 → 迭代优化
```

## 技术栈

| 分类 | 技术 |
|------|------|
| 前端语言 | TypeScript (89.5%), JavaScript (9.4%) |
| 构建工具 | pnpm + Turbo |
| 框架 | React + Vite |
| 扩展架构 | Chrome Extension Manifest V3 |

## 浏览器通信机制

- 通过Chrome扩展API与页面交互
- 支持DOM操作、页面导航、表单填写
- 本地运行，无需外部服务器

## 特点

- 轻量级：作为浏览器扩展运行
- 隐私保护：所有操作在本地浏览器完成（LLM调用除外）
- 灵活配置：支持多种LLM提供商
- 开源免费：Apache-2.0许可证

## 相关页面

- [[Nanobrowser]]
- [[浏览器控制]]
- [[Chrome DevTools Protocol]]