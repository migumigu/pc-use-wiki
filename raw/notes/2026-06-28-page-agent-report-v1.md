---
report_id: auto-2026-06-28-page-agent-report-v1
title: Page Agent 技术分析报告
version: v1
created_date: 2026-06-28
updated_date: 2026-06-28
source_count: 3
source_breakdown: Tier1: 2, Tier2: 1
---

# Page Agent 技术分析报告 v1

> 生成日期：2026-06-28
> 来源：3 个（Tier1: 2, Tier2: 1）
> 报告版本：v1

## 1. 执行摘要

Page Agent 是阿里巴巴开源的**页面内 GUI Agent**项目，2026年发布，截至2026-06-27已获得 **20.2k+ Stars**，MIT协议，TypeScript开发，最新版本 v1.10.0。

核心创新：不是让 AI 从外部操控浏览器，而是将 Agent 直接嵌入网页内部，使网页自身具备自然语言交互能力。

**重要性**：为 SaaS 产品提供了一种全新的 AI Copilot 集成范式——无需后端重写，只需在前端引入 JavaScript 即可让用户通过自然语言操作复杂 Web 界面。

## 2. 技术全景

### 2.1 核心架构

Page Agent 采用**页面内 JavaScript** 架构，所有操作在浏览器页面内完成：

```
用户浏览器页面
├── PageAgent SDK (JavaScript)
│   ├── DOM Parser (页面元素解析)
│   ├── LLM Client (模型调用)
│   └── Action Executor (操作执行)
├── DOM Tree (页面结构)
└── LLM API (外部模型服务)
```

### 2.2 技术栈分层

| 层级 | 技术组件 |
|------|----------|
| 系统基础层 | 浏览器 DOM API、JavaScript ES6+ |
| 协议/接口层 | DOM 操作协议、自然语言指令解析 |
| 工具实现层 | PageAgent SDK、NPM 包、CDN 分发 |
| Agent 集成层 | MCP Server (Beta)、Chrome Extension |

### 2.3 关键组件

1. **DOM Parser** - 将页面 DOM 转换为 LLM 可理解的文本表示
2. **LLM Client** - 支持 OpenAI-compatible API、Ollama 等模型服务
3. **Action Executor** - 将 LLM 决策转换为具体 DOM 操作
4. **Hub** - 扩展与外部 Agent 通信的控制中心

### 2.4 与 browser-use 的关系

Page Agent 构建于 **browser-use** 项目之上：
- DOM 处理组件和 prompt 来自 browser-use
- 由 Gregor Zunic 开发，MIT License
- Page Agent 专注于**客户端 Web 增强**，而非服务端自动化

## 3. 能力分析

### 3.1 支持的能力

| 能力 | 说明 | 置信度 |
|------|------|--------|
| 点击操作 | 点击按钮、链接等可交互元素 | EXTRACTED |
| 文本输入 | 表单填写、搜索框输入 | EXTRACTED |
| 下拉选择 | 选择选项、切换开关 | EXTRACTED |
| 表单提交 | 提交表单、确认对话框 | EXTRACTED |
| 页面滚动 | 滚动页面以显示隐藏内容 | EXTRACTED |
| iframe 支持 | 单层同源 iframe 操作 | EXTRACTED |
| JavaScript 执行 | 可选执行任意 JS 代码 | EXTRACTED |
| MCP Server | 外部 Agent 通过 MCP 控制 | EXTRACTED |

### 3.2 局限性

| 局限性 | 说明 | 置信度 |
|--------|------|--------|
| 复杂拖拽 | 不支持复杂拖拽操作 | EXTRACTED |
| 右键菜单 | 无法操作右键上下文菜单 | EXTRACTED |
| 纯视觉识别 | 不支持基于截图的视觉理解 | EXTRACTED |
| Canvas/WebGL | 无法操作 Canvas 或 WebGL 内容 | EXTRACTED |
| 图片理解 | 无法理解图片内容 | EXTRACTED |
| 跨域 iframe | 不支持跨域 iframe 操作 | EXTRACTED |
| 复杂编辑器 | Monaco、CodeMirror 等不支持 | EXTRACTED |

### 3.3 已知限制

- **Beta 阶段**: MCP Server 功能不完整，API 可能更改
- **模型依赖**: 需要自备 LLM API（支持 OpenAI-compatible）
- **DOM 依赖**: 严重依赖页面 DOM 结构质量

## 4. 生态位

### 4.1 与同类工具对比

| 对比点 | Page Agent | browser-use | Playwright | Selenium |
|--------|------------|-------------|------------|----------|
| 运行位置 | **页面内 JS** | 外部 Python | 外部 Node.js | 外部多语言 |
| 集成方式 | CDN/npm | Python 脚本 | NPM 包 | WebDriver |
| 页面理解 | DOM 文本 | DOM + 截图 | 选择器 | 选择器 |
| 多模态需求 | 无需 | 可选 | 无 | 无 |
| 目标用户 | SaaS 开发者 | Agent 开发者 | 测试工程师 | 测试工程师 |

### 4.2 适用场景

- **SaaS AI Copilot**: 为现有产品快速添加自然语言操作入口
- **智能表单填写**: 复杂表单、审批流程自动化
- **B 端系统**: ERP、CRM、管理后台等复杂界面
- **无障碍增强**: 语音控制、屏幕阅读器辅助
- **多页面 Agent**: 通过 Chrome 扩展跨标签页操作

### 4.3 不适用场景

- 需要视觉理解的复杂场景
- Canvas/WebGL 应用
- 跨域 iframe 操作
- Monaco 等复杂编辑器
- 需要拖拽的专业工具

## 5. 信息来源

| 来源 | 类型 | 置信度 | 主要贡献 |
|------|------|--------|----------|
| [[auto-2026-06-28-page-agent-github-readme]] | Tier 1 | EXTRACTED | 核心数据、架构 |
| [[auto-2026-06-28-page-agent-mcp-server]] | Tier 1 | EXTRACTED | MCP Server 集成 |
| [[auto-2026-06-28-page-agent-analysis]] | Tier 2 | INFERRED | 对比分析 |

## 6. 待验证问题

1. **性能数据**: 具体操作成功率、响应时间等指标未找到
2. **模型兼容性**: 具体支持哪些模型、版本要求
3. **安全性**: 数据脱敏机制的具体实现

## 7. 版本历史

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| v1.0 | 2026-06-28 | 初始版本 |
