---
report_id: 20260702-nanobrowser-1.0
title: Nanobrowser 技术分析报告 v1.0
version: 1.0
created_date: 2026-07-02
updated_date: 2026-07-02
source_count: 4
source_breakdown: Tier1: 2, Tier2: 2
---

# Nanobrowser 技术分析报告 v1.0

> 生成日期：2026-07-02
> 来源：4 个（Tier1: 2, Tier2: 2）
> 报告版本：v1.0

## 1. 执行摘要

Nanobrowser 是一款开源的 AI 网页自动化工具，以 Chrome 浏览器扩展形式运行，提供多智能体协作系统，是 OpenAI Operator 的免费替代方案。其核心创新在于将 AI Agent 能力直接集成到浏览器中，通过 Planner（规划器）和 Navigator（导航者）双智能体协作实现复杂网页任务自动化，支持多种 LLM 提供商，所有操作在本地浏览器完成，保护用户隐私。

## 2. 技术全景

### 2.1 核心架构

Nanobrowser 采用双智能体协作架构：

```
用户输入 → Planner（推理规划）→ Navigator（执行操作）→ 结果反馈 → 迭代优化
```

**Planner（规划器）**：
- 负责任务策略制定和调整
- 进行深度推理和规划
- 处理复杂逻辑决策
- 智能自我修正，遇到障碍时动态调整方案

**Navigator（导航者）**：
- 负责具体的网页导航操作
- 执行 Planner 下达的指令
- 处理页面交互（点击、输入、滚动等）
- 实时反馈执行状态

### 2.2 技术栈分层

**系统基础层**：
- Chrome Extension Manifest V3 API
- DOM 操作和页面通信机制

**协议/接口层**：
- Chrome 扩展消息传递 API
- 页面注入脚本通信
- LLM API（OpenAI、Anthropic、Gemini、Ollama等）

**工具实现层**：
- TypeScript（89.5%）+ JavaScript（9.4%）
- React + Vite 前端框架
- pnpm + Turbo 构建工具

**Agent 集成层**：
- Planner + Navigator 双智能体模式
- 多 LLM 提供商适配层
- 会话历史管理

### 2.3 关键组件

| 组件 | 功能 | 技术实现 |
|------|------|----------|
| Side Panel | 交互式聊天界面 | React 组件 |
| Planner Agent | 推理规划引擎 | LLM 调用 |
| Navigator Agent | 页面执行引擎 | Chrome API |
| LLM Adapter | 多提供商适配 | 统一 API 封装 |
| History Manager | 会话历史管理 | 本地存储 |

## 3. 能力分析

### 3.1 支持的能力

- **多智能体协作**：Planner + Navigator 分工协作 <!-- confidence: EXTRACTED -->
- **自然语言驱动**：用户通过自然语言描述任务 <!-- confidence: EXTRACTED -->
- **多 LLM 支持**：OpenAI、Anthropic、Gemini、Ollama、Groq、Cerebras、Llama、自定义 OpenAI-Compatible <!-- confidence: EXTRACTED -->
- **实时状态反馈**：侧边栏显示执行进度 <!-- confidence: EXTRACTED -->
- **上下文跟进**：支持后续问题追问 <!-- confidence: EXTRACTED -->
- **会话历史**：访问和管理交互历史 <!-- confidence: EXTRACTED -->

### 3.2 局限性

- **浏览器限制**：仅支持 Chrome 和 Edge，不支持 Firefox、Safari <!-- confidence: EXTRACTED -->
- **登录场景**：复杂登录网站操作支持有限 <!-- confidence: INFERRED -->
- **验证码**：不支持验证码处理 <!-- confidence: INFERRED -->
- **并发限制**：受浏览器限制，不支持大量并发请求 <!-- confidence: INFERRED -->
- **后台运行**：浏览器关闭后任务停止 <!-- confidence: INFERRED -->

### 3.3 已知问题

- Chrome Web Store 版本可能滞后于 GitHub 最新版本 <!-- confidence: EXTRACTED -->
- 本地模型需要更具体的提示工程 <!-- confidence: EXTRACTED -->

## 4. 生态位

### 4.1 与同类工具对比

| 特性 | Nanobrowser | browser-use | Playwright | agent-browser |
|------|-------------|-------------|------------|---------------|
| 部署方式 | Chrome扩展 | 独立工具 | 独立工具 | CLI工具 |
| 运行位置 | 浏览器内 | 本地机器 | 本地机器 | 终端 |
| 多智能体 | ✅ | ❌ | ❌ | ❌ |
| 交互界面 | ✅ 侧边栏 | ❌ | ❌ | CLI |
| 浏览器支持 | Chrome/Edge | 多浏览器 | 多浏览器 | Chrome |
| 集成难度 | 低 | 中 | 高 | 中 |

### 4.2 适用场景

- **非开发者用户**：需要简单易用的网页自动化工具
- **信息提取任务**：新闻摘要、数据收集、价格监控
- **表单自动化**：重复表单填写
- **网页测试**：功能验证和交互测试

### 4.3 不适用场景

- **系统集成**：需要集成到现有自动化流程
- **后台任务**：需要长时间后台运行
- **复杂场景**：需要验证码、多步骤登录
- **跨浏览器**：需要多浏览器兼容

## 5. 信息来源

| 来源 | 类型 | 置信度 | 主要贡献 |
|------|------|--------|----------|
| [[2026-07-02-nanobrowser-github-readme]] | Tier 1 | EXTRACTED | 核心功能、架构概述、LLM支持 |
| [[2026-07-02-nanobrowser-technical-analysis]] | Tier 2 | INFERRED | 多智能体架构、技术栈、工作流程 |
| [[2026-07-02-nanobrowser-use-cases]] | Tier 1 | EXTRACTED | 使用案例、适用场景 |
| [[2026-07-02-nanobrowser-comparison]] | Tier 2 | INFERRED | 竞品对比、生态位分析 |

## 6. 待验证问题

- 实际 GitHub Stars 数量（当前未知）
- 实际用户规模和活跃度
- 与 OpenAI Operator 的实际功能对比
- 性能指标（任务完成时间、成功率）

## 7. 版本历史

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| v1.0 | 2026-07-02 | 初始版本 |