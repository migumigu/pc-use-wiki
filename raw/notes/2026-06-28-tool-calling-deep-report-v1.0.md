---
report_id: 2026-06-28-tool-calling-v1.0
title: Tool Calling深度分析报告 v1.0
version: 1.0
created_date: 2026-06-28
updated_date: 2026-06-28
source_count: 10
source_breakdown: Tier1: 10, Tier2: 0, Tier3: 0
---

# Tool Calling深度分析报告 v1.0

> 生成日期：2026-06-28
> 来源：10 个（Tier1: 10, Tier2: 0, Tier3: 0）
> 报告版本：v1.0

## 1. 执行摘要

Tool Calling（函数调用）是大型语言模型连接外部工具和API的核心技术，使LLM从文本生成器转变为具备行动能力的智能代理。<!-- confidence: EXTRACTED --> 该技术最早由OpenAI于2023年6月13日提出，Anthropic随后推出Tool Use功能，两者架构理念相似但实现细节存在差异。<!-- confidence: EXTRACTED -->

Tool Calling的核心价值在于三个方面：**解耦模型推理与执行**（模型仅生成调用参数，应用程序完全掌控执行）、**智能调度多工具协同**（自动选择合适工具、支持并行调用和链式调用）、**结构化输出保证**（通过strict模式确保参数符合JSON Schema）。<!-- confidence: EXTRACTED --> 在LAB-Bench FigQA和SWE-bench等基准测试中，添加工具后能力显著提升，常超越人类专家基准。<!-- confidence: EXTRACTED -->

## 2. 技术全景

### 2.1 核心架构

Tool Calling是一种**契约模式**，定义了应用程序与模型之间的交互协议：应用程序提供工具schema和描述，模型决定何时调用哪些工具，应用程序执行操作并返回结果。<!-- confidence: EXTRACTED -->

**Anthropic架构分层**<!-- confidence: EXTRACTED -->：
- **用户定义工具（客户端执行）**：开发者自定义schema，自行执行代码，返回tool_result。占绝大多数流量。
- **Anthropic-schema工具（客户端执行）**：bash、text_editor、computer、memory等标准化工具，schema已训练优化，Claude调用更可靠。
- **服务器执行工具**：web_search、code_execution、web_fetch、tool_search，Anthropic内部执行，无需客户端参与。

**OpenAI架构**<!-- confidence: EXTRACTED -->：
- 模型生成函数调用参数，应用程序执行函数并返回结果
- 支持聊天补全API、助手API、批量API
- 无服务器端工具概念，所有函数由客户端执行

**关键差异**：Anthropic提供服务器端工具降低开发复杂度，OpenAI保持完全客户端控制。<!-- confidence: INFERRED -->

### 2.2 技术栈分层

| 层级 | Anthropic Tool Use | OpenAI Function Calling |
|------|-------------------|------------------------|
| **接口层** | tools参数 + tool_choice | tools参数 + tool_choice |
| **Schema层** | JSON Schema + input_examples | JSON Schema + strict |
| **执行层** | 客户端工具 → tool_result循环；服务器工具 → 内部循环 | 5步生命周期循环 |
| **输出层** | tool_use blocks + tool_result blocks | function_call + function_call_output |
| **消息格式** | user/assistant消息内嵌tool_use/tool_result blocks | 独立function角色（传统）或消息内嵌（新） |

### 2.3 关键组件

**工具定义组件**<!-- confidence: EXTRACTED -->：
```
Anthropic: name, description, input_schema, input_examples(可选), strict(可选), cache_control等
OpenAI: type, name, description, parameters, strict
```

**tool_choice配置**<!-- confidence: EXTRACTED -->：
```
Anthropic: auto（默认）, any, tool, none
OpenAI: auto（默认）, required, {"type": "function", "function": {"name": "..."}}, none
```

**响应结构**<!-- confidence: EXTRACTED -->：
- Anthropic: `stop_reason: "tool_use"` + `tool_use` blocks → `tool_result` blocks
- OpenAI: `tool_calls`数组 → `function_call_output`

## 3. 能力分析

### 3.1 支持的能力

**核心能力矩阵**<!-- confidence: EXTRACTED -->：

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

**并行调用特性**<!-- confidence: EXTRACTED -->：
- Anthropic默认启用并行调用，Claude 4模型表现优秀
- 可通过系统提示鼓励并行："Call all independent tools in the same block"
- 执行语义由开发者决定：可并发、顺序或混合执行
- 必须在单个user消息中返回所有tool_result（分开返回会降低并行能力）

**Strict模式能力**<!-- confidence: EXTRACTED -->：
- 使用grammar-constrained sampling技术约束token生成
- 确保类型正确（如"2"变为2，而非"two"）
- JSON Schema限制：不支持某些高级特性（如recursive schemas）

### 3.2 局限性

**JSON Schema限制**<!-- confidence: EXTRACTED -->：
- Anthropic和OpenAI的strict模式都有schema subset限制
- 不支持recursive schemas、某些复杂验证规则
- additionalProperties必须为false（strict模式）

**token开销**<!-- confidence: EXTRACTED -->：
- Anthropic工具系统提示占用290-804 tokens（根据模型和tool_choice）
- tool定义、tool_use/tool_result blocks均计入token
- input_examples额外占用20-200 tokens

**模型限制**<!-- confidence: EXTRACTED -->：
- Claude Mythos Preview不支持强制工具调用
- OpenAI某些模型可能对示例性能有负面影响（推理模型）
- Extended Thinking仅支持auto和none模式

**工具数量限制**<!-- confidence: EXTRACTED -->：
- OpenAI推荐少于20个函数以提高准确性
- Anthropic强调合并相关操作、使用命名空间避免混淆
- 过多工具会降低选择准确性、增加成本

### 3.3 已知问题

**并行调用故障诊断**<!-- confidence: EXTRACTED -->：
1. 错误的tool_result格式（分开发送而非合并）
2. 系统提示不足（需要明确鼓励并行）
3. 工具间看似依赖（系统提示应声明"Only batch independent calls"）

**常见错误类型**<!-- confidence: EXTRACTED -->：
1. 工具执行错误（返回is_error: true）
2. 无效工具名称（API自动返回错误tool_result）
3. 参数类型不匹配（未启用strict时可能发生）

**间接提示注入风险**<!-- confidence: EXTRACTED -->：
- tool_result携带外部内容（网页、API返回等）
- 应保持不信任内容在tool_result内，避免放入system prompt
- 参见Mitigate jailbreaks文档加强防护

## 4. 生态位

### 4.1 与同类技术对比

**Anthropic vs OpenAI核心差异**<!-- confidence: EXTRACTED -->：

| 维度 | Anthropic Tool Use | OpenAI Function Calling | 差异分析 |
|------|-------------------|------------------------|----------|
| **执行模式** | 客户端+服务器双模式 | 仅客户端模式 | Anthropic降低简单场景开发成本 |
| **工具示例** | input_examples字段支持 | 无此能力 | Anthropic更利于复杂工具教学 |
| **消息格式** | 统一user/assistant内嵌 | 曾有独立function角色，现已统一 | 趋向一致 |
| **命名建议** | 前缀命名空间（github_list_prs） | 未强调命名空间 | Anthropic对大规模工具更友好 |
| **MCP集成** | 原生connector | 需自行实现 | Anthropic生态集成更深 |
| **文档体系** | 概念+教程+参考+工具runner | 概念+最佳实践+示例 | Anthropic更系统化 |

**设计哲学对比**<!-- confidence: INFERRED -->：
- Anthropic：**训练优化**（Anthropic-schema工具因训练轨迹而更可靠），**生态整合**（MCP connector），**灵活性分级**（服务器工具简化入门，客户端工具满足深度定制）
- OpenAI：**完全控制**（所有执行在客户端），**软件工程原则**（实习生测试、最小惊讶原则），**结构化输出**（2024年8月推出的strict确保）

### 4.2 适用场景

**数据获取场景**<!-- confidence: EXTRACTED -->：
- 实时信息检索（天气、股价、新闻）
- 知识库查询（RAG增强）
- 内部API数据获取

**执行动作场景**<!-- confidence: EXTRACTED -->：
- 表单提交、API调用
- 状态变更（前后端）
- Agent工作流步骤执行

**结构化输出场景**<!-- confidence: EXTRACTED -->：
- 需要JSON对象而非自然语言描述
- schema强制约束的业务流程

**何时使用工具**<!-- confidence: EXTRACTED -->：
- 任务需要模型无法从文本完成的能力（副作用操作、外部数据）
- 需要结构化保证输出的场景
- 连接现有系统（数据库、内部API）
- 判断信号：用regex提取结构化意图 → 应该用工具调用

**何时不使用工具**<!-- confidence: EXTRACTED -->：
- 模型可从训练数据直接回答（总结、翻译、常识问答）
- 单次Q&A无副作用
- 工具调用延迟超过简单响应成本

### 4.3 不适用场景

**不适用清单**<!-- confidence: EXTRACTED -->：
1. 纯文本生成任务（创意写作、翻译）
2. 稳定知识查询（训练数据覆盖的常识）
3. 轻量级响应（工具调用延迟主导成本）
4. 无外部系统交互需求
5. 不需要结构化输出的场景

## 5. 信息来源

| 来源 | 类型 | 置信度 | 主要贡献 |
|------|------|--------|----------|
| Anthropic Tool Use Overview | 官方文档 Tier1 | 高 | 核心概念、定价模型、何时使用工具 |
| Anthropic How Tool Use Works | 官方文档 Tier1 | 高 | 执行架构（客户端/服务器）、agentic loop |
| Anthropic Define Tools Guide | 官方文档 Tier1 | 高 | Schema定义、最佳实践、tool_choice |
| Anthropic Handle Tool Calls Guide | 官方文档 Tier1 | 高 | tool_result格式、错误处理、is_error |
| Anthropic Parallel Tool Use Guide | 官方文档 Tier1 | 高 | 并行调用语义、格式要求、故障诊断 |
| Anthropic Strict Tool Use Guide | 官方文档 Tier1 | 高 | grammar-constrained sampling、strict模式 |
| Writing Tools for Agents (Anthropic工程博客) | 官方博客 Tier1 | 高 | 工具设计原则、命名空间、评估方法、token效率 |
| OpenAI Function Calling Intro | 官方文档 Tier1 | 高 | 基础概念、5步生命周期、工具定义格式 |
| OpenAI Function Calling Best Practices | 官方文档 Tier1 | 高 | 最佳实践、实习生测试、tool_choice配置 |
| OpenAI Function Calling 2.0 Updates | 官方文档 Tier1 | 高 | 2.0特性、流式处理、结构化输出、2026展望 |

## 6. 待验证问题

1. **流式处理差异验证**：Anthropic是否支持tool_use的流式输出？文档未明确说明，需实测验证。<!-- confidence: UNVERIFIED -->

2. **MCP对比验证**：OpenAI是否有官方或社区MCP集成方案？与Anthropic MCP connector的功能对比。<!-- confidence: UNVERIFIED -->

3. **性能基准验证**：并行调用的实际效率提升数据？不同模型的并行能力差异量化。<!-- confidence: UNVERIFIED -->

4. **token成本验证**：strict模式的实际token开销对比？input_examples的成本效益比。<!-- confidence: UNVERIFIED -->

5. **错误恢复验证**：Claude对Anthropic-schema工具的错误恢复能力是否显著优于自定义工具？<!-- confidence: UNVERIFIED -->

6. **大规模工具验证**：超过20个工具时的性能衰减曲线？命名空间对准确率的实际影响。<!-- confidence: UNVERIFIED -->

7. **Extended Thinking兼容性验证**：Extended Thinking下tool_choice: auto的实际行为差异。<!-- confidence: UNVERIFIED -->

8. **服务器工具迭代限制验证**：server-side loop的迭代上限具体数值？pause_turn的恢复机制细节。<!-- confidence: UNVERIFIED -->

## 7. 版本历史

| 版本 | 日期 | 变更说明 |
|------|------|----------|
| v1.0 | 2026-06-28 | 初始版本，基于10个Tier1官方素材生成 |

---

**关键声明来源标注说明**：
- `<!-- confidence: EXTRACTED -->`：直接从素材提取的信息
- `<!-- confidence: INFERRED -->`：基于素材合理推断的信息
- `<!-- confidence: UNVERIFIED -->`：需进一步验证的假设或问题

**素材元数据**：所有素材均为2026-06-28收集的官方文档（Tier1），置信度标记为high。Anthropic素材来源platform.claude.com官方文档和anthropic.com工程博客；OpenAI素材来源platform.openai.com官方文档。