---
tags: [openclaw, tools, skills, plugins, automation]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-ef56]
---

# OpenClaw Tools Overview

> OpenClaw 工具系统概览：10+ 工具类别，Skills 指令系统，插件扩展机制

## 一句话摘要

OpenClaw 提供三层能力扩展体系：Tools（可调用函数）、Skills（指令包）、Plugins（运行时扩展），涵盖 10+ 内置工具类别和精细的策略控制。

## 核心要点

- **Tools vs Skills vs Plugins**：
  - Tool：类型化函数（exec、browser、web_search 等）
  - Skill：SKILL.md 指令包，教 Agent 工作流
  - Plugin：添加工具、技能、渠道、模型提供商等运行时能力
- **10+ 内置工具类别**：Runtime、Files、Web、Browser、Messaging、Sessions、Automation、Gateway & Nodes、Media、Tool Search
- **工具策略层**：全局配置 → 每 Agent 配置 → 渠道策略 → 提供商限制 → 沙箱规则 → 插件可用性
- **扩展路径**：安装现有插件 → 构建新集成 → 调优可复用指令 → 使用 Plugin SDK

## 关键概念

- [[OpenClaw]] — 本项目
- [[MCP]] — Model Context Protocol，工具调用标准
- [[Agent]] — AI 智能体

## 相关页面

- [[Agent集成层]] — Agent 集成层主题
- [[浏览器控制]] — 浏览器控制主题
