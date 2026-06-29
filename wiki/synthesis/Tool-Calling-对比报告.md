---
tags: [综合分析, Tool Calling]
created: 2026-06-29
updated: 2026-06-29
sources:
  - wiki/sources/2026-06-28-anthropic-tool-use-overview.md
  - wiki/sources/2026-06-28-anthropic-tool-use-how-it-works.md
  - wiki/sources/2026-06-28-anthropic-tool-reference.md
  - wiki/sources/2026-06-28-anthropic-define-tools-guide.md
  - wiki/sources/2026-06-28-anthropic-handle-tool-calls-guide.md
  - wiki/sources/2026-06-28-anthropic-server-tools-guide.md
  - wiki/sources/2026-06-28-anthropic-parallel-tool-use-guide.md
  - wiki/sources/2026-06-28-anthropic-strict-tool-use-guide.md
  - wiki/sources/2026-06-28-anthropic-writing-tools-for-agents.md
  - wiki/sources/2026-06-28-openai-function-calling-intro.md
  - wiki/sources/2026-06-28-openai-function-calling-best-practices.md
  - wiki/sources/2026-06-28-openai-function-calling-2.0-updates.md
---

# Tool Calling 对比报告：Anthropic Tool Use vs OpenAI Function Calling

> 综合自 12 篇素材 | 生成日期：2026-06-29

## 执行摘要

Tool Calling（函数调用）是大型语言模型连接外部工具和API的核心技术，使LLM从文本生成器转变为具备行动能力的智能代理。该技术最早由OpenAI于2023年6月13日提出，Anthropic随后推出Tool Use功能，两者架构理念相似但实现细节存在显著差异。

核心价值在于三个方面：**解耦模型推理与执行**、**智能调度多工具协同**、**结构化输出保证**。在LAB-Bench FigQA和SWE-bench等基准测试中，添加工具后能力显著提升，常超越人类专家基准。

## 核心架构对比

### Anthropic Tool Use

**三层架构**：
- **用户定义工具（客户端执行）**：开发者自定义schema，自行执行代码，返回tool_result。占绝大多数流量。
- **Anthropic-schema工具（客户端执行）**：bash、text_editor、computer、memory等标准化工具，schema已训练优化，Claude调用更可靠。
- **服务器执行工具**：web_search、code_execution、web_fetch、tool_search，Anthropic内部执行，无需客户端参与。

**关键特性**：
- `input_examples` 字段支持工具教学
- 默认启用并行工具调用
- 严格模式使用grammar-constrained sampling
- 支持MCP connector原生集成

### OpenAI Function Calling

**单层架构**：
- 模型生成函数调用参数，应用程序执行函数并返回结果
- 所有函数由客户端执行
- 支持聊天补全API、助手API、批量API

**关键特性**：
- strict模式确保JSON Schema完全匹配
- 流式处理支持完善
- 函数定义遵循软件工程原则

## 核心差异矩阵

| 维度 | Anthropic Tool Use | OpenAI Function Calling | 差异分析 |
|------|-------------------|------------------------|----------|
| **执行模式** | 客户端+服务器双模式 | 仅客户端模式 | Anthropic降低简单场景开发成本 |
| **工具示例** | input_examples字段支持 | 无此能力 | Anthropic更利于复杂工具教学 |
| **消息格式** | 统一user/assistant内嵌 | 曾有独立function角色，现已统一 | 趋向一致 |
| **命名建议** | 前缀命名空间（github_list_prs） | 未强调命名空间 | Anthropic对大规模工具更友好 |
| **MCP集成** | 原生connector | 需自行实现 | Anthropic生态集成更深 |
| **文档体系** | 概念+教程+参考+工具runner | 概念+最佳实践+示例 | Anthropic更系统化 |

## 设计哲学对比

**Anthropic**：
- **训练优化**：Anthropic-schema工具因训练轨迹而更可靠
- **生态整合**：MCP connector原生支持
- **灵活性分级**：服务器工具简化入门，客户端工具满足深度定制

**OpenAI**：
- **完全控制**：所有执行在客户端，开发者完全掌控
- **软件工程原则**：实习生测试、最小惊讶原则
- **结构化输出**：2024年8月推出的strict确保schema一致性

## 能力对比

| 能力 | Anthropic | OpenAI | 备注 |
|------|-----------|--------|------|
| **单次工具调用** | ✅ | ✅ | 基础能力 |
| **并行工具调用** | ✅ 默认支持 | ✅ 支持 | Anthropic可通过disable_parallel_tool_use禁用 |
| **强制工具调用** | ✅ tool_choice: any/tool | ✅ tool_choice: required/指定函数 | Extended Thinking不支持强制调用 |
| **严格模式** | ✅ strict: true | ✅ strict: true | 确保schema完全匹配 |
| **流式处理** | ⚠️ 未详细说明 | ✅ stream=True | OpenAI明确支持 |
| **工具示例** | ✅ input_examples | ❌ 无此字段 | Anthropic独有 |
| **服务器端执行** | ✅ web_search等 | ❌ 无此能力 | Anthropic独有 |
| **MCP集成** | ✅ MCP connector | ⚠️ 需自行集成 | Anthropic原生支持 |

## 适用场景选择

### 选择 Anthropic Tool Use 当：
- 需要快速原型开发（服务器工具降低门槛）
- 工具复杂度高（input_examples帮助教学）
- 使用MCP协议生态
- 需要并行工具调用优化
- 工具数量多（命名空间支持大规模工具）

### 选择 OpenAI Function Calling 当：
- 需要完全控制执行逻辑
- 依赖流式处理能力
- 团队熟悉OpenAI生态
- 需要简单直接的实现
- 工具数量较少

## 技术栈集成建议

| 场景 | 推荐方案 | 说明 |
|------|---------|------|
| AI Agent PC控制 | Anthropic + MCP | 原生支持，生态完善 |
| 数据获取类应用 | OpenAI | 简单直接 |
| 复杂工具链 | Anthropic | input_examples降低学习成本 |
| 生产环境部署 | 视需求而定 | 两者均可，需具体分析 |

## 待解决问题

1. **流式处理差异**：Anthropic是否支持tool_use的流式输出？文档未明确说明
2. **MCP对比验证**：OpenAI是否有官方或社区MCP集成方案？
3. **性能基准验证**：并行调用的实际效率提升数据？
4. **token成本验证**：strict模式的实际token开销对比？
5. **大规模工具验证**：超过20个工具时的性能衰减曲线？

## 相关页面

- [[Tool Use]] — Anthropic的工具调用机制
- [[Function Calling]] — OpenAI的函数调用机制
- [[MCP]] — 标准化工具调用协议
- [[Agent集成层]] — Agent与外部工具集成的技术体系