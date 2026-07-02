---
source_id: auto-20260702-nano2
title: Nanobrowser Technical Architecture Analysis
url: https://blog.csdn.net/exlink2012/article/details/156638233
source_type: tech_blog
tier: 2
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-07-02
collected_by: auto_research
confidence: medium
---

# Nanobrowser 技术架构分析

## 多智能体架构

Nanobrowser采用双智能体协作模式：

### Planner（规划器）
- 负责制定和调整任务策略
- 进行推理和规划
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

- **前端**：TypeScript (89.5%), JavaScript (9.4%)
- **构建工具**：pnpm + Turbo
- **框架**：React + Vite
- **扩展架构**：Chrome Extension Manifest V3

## 浏览器通信机制

- 通过Chrome扩展API与页面交互
- 支持DOM操作、页面导航、表单填写
- 本地运行，无需外部服务器

## 特点

- 轻量级：作为浏览器扩展运行
- 隐私保护：所有操作在本地浏览器完成
- 灵活配置：支持多种LLM提供商
- 开源免费：Apache-2.0许可证