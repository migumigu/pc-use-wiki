---
source_id: auto-2026-06-28-page-agent-analysis
title: Page Agent 深度分析 - 阿里 2 万 Star 开源页面内 GUI Agent
url: https://www.cnblogs.com/xiaohuatongxueai/p/20865435
source_type: tech_blog
tier: 2
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: medium
---

# Page Agent 深度分析

## 概述

Page Agent 是阿里巴巴开源的页面内 GUI Agent，可以让用户用自然语言控制 Web 页面。截至 2026-06-27，已有 **20.2k+ Star、1.7k+ Fork**，MIT 协议，TypeScript，最新版本 v1.10.0。

## 核心创新

**不是让 AI 从外面操控浏览器，而是让 Agent 直接住进网页里。**

| 对比点 | Page Agent | 传统浏览器自动化 |
|--------|------------|------------------|
| 运行位置 | 页面内 JavaScript | 页面外的脚本或客户端 |
| 面向对象 | Web 应用开发者、SaaS 产品 | 测试、爬虫、自动化脚本 |
| 典型用途 | 给产品加 AI 操作员 | 自动执行任务 |
| 页面理解 | DOM 文本和语义结构 | 截图、选择器、浏览器控制 |
| 集成方式 | CDN / npm 接入 | 单独启动自动化环境 |

## 适用场景

| 场景 | 可以怎么用 |
|------|------------|
| SaaS AI Copilot | 给现有产品加自然语言操作入口 |
| 智能表单填写 | 把复杂表单、审批、配置流程自动跑完 |
| 产品教学 | 让 AI 一边操作一边演示流程 |
| 无障碍增强 | 用语音或自然语言辅助操作页面 |
| 多页面 Agent | 通过扩展跨标签页执行任务 |
| MCP 接入 | 让本地 Agent 客户端控制浏览器 |

## 技术特点

- **轻集成**：无需 Python、无头浏览器，页面里引入 JS 即可
- **文本 DOM 操作**：不截图，不依赖多模态模型
- **自备 LLM**：可以接 OpenAI-compatible API、Ollama 等模型服务
- **可扩展**：有 Chrome 扩展，也有 Beta 版 MCP Server

## 局限性与不适合场景

- 复杂拖拽
- 右键菜单
- 纯视觉识别
- Canvas / WebGL / 图片内容理解
- 跨域 iframe
- Monaco、CodeMirror 这类复杂编辑器的细粒度操作

## 结论

Page Agent 的定位是"给 Web 产品加一个内置 AI 操作员"，而不是替代所有浏览器自动化工具。这个定位更清晰，也更适合落地。

## 技术栈关系

Page Agent 构建于 **browser-use** 项目之上，DOM 处理组件和 prompt 来自 browser-use。
