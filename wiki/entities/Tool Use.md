---
tags: [核心概念, Agent集成层]
created: 2026-06-28
updated: 2026-06-28
sources:
  - wiki/sources/2026-06-28-anthropic-tool-use-overview.md
---

# Tool Use

> AI Agent调用外部工具和函数的核心能力，实现与外部系统的连接和扩展

## 定义

Tool Use（工具调用）是AI Agent的核心能力，允许模型调用用户定义或Anthropic提供的函数。Claude根据用户请求和工具描述决定何时调用，返回结构化的调用请求，由应用或Anthropic服务器执行后返回结果。<!-- confidence: EXTRACTED -->
- 证据：原文"Tool use lets Claude call functions you define or that Anthropic provides. Claude decides when to call a tool based on the user's request and the tool's description"

## 核心机制

### 工具分类

**Client Tools（客户端工具）**：
- 用户定义工具：应用特定逻辑、内部API、数据库等
- Anthropic-schema工具：bash、text_editor、computer、memory
- 执行方式：应用端执行，需实现agentic loop
- 返回格式：tool_use block → 应用执行 → tool_result block

**Server Tools（服务器工具）**：
- Anthropic内置：web_search、web_fetch、code_execution、tool_search
- 执行方式：Anthropic服务器端执行
- 返回格式：server_tool_use block（结果已包含）

### Agentic Loop

Client tools需要应用驱动循环：
1. 发送带tools array的请求
2. Claude返回`stop_reason: "tool_use"` + `tool_use` blocks
3. 应用执行每个工具，生成`tool_result` blocks
4. 发送新请求（含原始消息、assistant响应、user tool_result）
5. 重复步骤2-4直到`stop_reason`不是"tool_use"<!-- confidence: EXTRACTED -->
- 证据：原文"The canonical shape is a `while` loop keyed on `stop_reason`"

### Tool Choice控制

四种tool_choice模式：
- `auto`（默认）：Claude自行判断是否调用
- `any`：必须调用某工具但不指定具体工具
- `tool`：强制调用特定工具
- `none`：禁止调用工具<!-- confidence: EXTRACTED -->
- 证据：原文"When working with the `tool_choice` parameter, there are four possible options"

### Strict Tool Use

添加`strict: true`到工具定义：
- 保证tool call严格匹配schema定义
- 防止参数类型错误、缺失字段等问题
- 提高工具调用可靠性<!-- confidence: EXTRACTED -->
- 证据：原文"Add `strict: true` to your tool definitions to ensure Claude's tool calls always match your schema exactly"

## 应用场景

Tool Use适合：
- **有副作用的操作**：发邮件、写文件、更新记录
- **外部数据获取**：当前价格、天气、数据库内容
- **结构化输出**：需要JSON而非自然语言文本时
- **系统集成**：连接数据库、API、文件系统<!-- confidence: EXTRACTED -->
- 证据：原文"Tool use fits when the task requires something the model can't do from text alone"

不适合：
- 模型可从训练数据回答的问题（总结、翻译、常识）
- 无副作用的单次Q&A
- 轻量任务（tool call延迟超过工作本身）<!-- confidence: EXTRACTED -->

## 性能优化

### 定价机制

Token消耗包括：
1. 输入token（含tools参数）
2. 输出token
3. Server tools的额外使用费
4. Tool use系统提示（290-804 tokens，按模型和tool_choice不同）<!-- confidence: EXTRACTED -->
- 证据：原文表格列出各模型的token count

### Benchmark表现

Tool access是Agent的高杠杆能力：
- LAB-Bench FigQA（科学图表解释）：超越人类专家基线
- SWE-bench（软件工程）：显著能力提升<!-- confidence: EXTRACTED -->
- 证据：原文"On benchmarks like LAB-Bench FigQA and SWE-bench, adding even basic tools produces outsized capability gains"

## 与相关概念的关系

- [[MCP]] — Tool Use的标准化协议扩展，提供统一工具定义格式<!-- confidence: INFERRED -->
- [[Agentic Loop]] — Tool Use的循环调用实现机制<!-- confidence: EXTRACTED -->
- [[Function Calling]] — OpenAI的同类概念（不同命名）<!-- confidence: INFERRED -->
- [[Agent集成层]] — Tool Use所属的技术层级<!-- confidence: INFERRED -->

## 不同素材中的观点

| 素材 | 核心观点 |
|------|----------|
| [[Anthropic Tool Use Overview]] | 官方总览：工具分类、agentic loop、定价机制 |
| [[Anthropic How Tool Use Works]] | 深入机制：执行边界、循环实现、适用场景判断（待消化） |

## 相关页面

- [[Agentic Loop]]（实体页，待创建）
- [[Client Tools]]（实体页，待创建）
- [[Server Tools]]（实体页，待创建）
- [[MCP]]（实体页，已存在）
- [[Agent集成层]]（主题页，已存在）