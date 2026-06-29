---
tags: [核心概念, Agent集成层]
created: 2026-06-28
updated: 2026-06-28
sources:
  - wiki/sources/2026-06-28-anthropic-strict-tool-use-guide.md
---

# Strict Tool Use

> 通过grammar-constrained sampling保证tool inputs严格匹配JSON Schema

## 定义

Strict Tool Use（严格工具调用）是通过grammar-constrained sampling（语法约束采样）技术，保证Claude的tool inputs严格匹配定义的JSON Schema。添加`strict: true`到工具定义启用此机制。<!-- confidence: EXTRACTED -->
- 证据：原文"Setting strict: true on a tool definition guarantees Claude's tool inputs match your JSON Schema by constraining the model's token sampling to schema-valid outputs"

## 核心机制

### Grammar-constrained Sampling

技术原理：
- 编译input_schema为grammar
- 约束模型的token采样
- 只允许schema-valid outputs<!-- confidence: EXTRACTED -->
- 证据：原文"constraining the model's token sampling to schema-valid outputs (a technique called grammar-constrained sampling)"

### 编译和缓存

Schema编译流程：
- Tool input_schema编译成grammars
- 使用与structured outputs相同的pipeline
- 临时缓存最多24小时
- Prompts和responses不保留<!-- confidence: EXTRACTED -->
- 证据：原文"Strict tool use compiles tool input_schema definitions into grammars using the same pipeline as structured outputs. Tool schemas are temporarily cached for up to 24 hours"

## 为什么Agent需要Strict Mode

### 传统模式的 risks

无strict mode时的问题：
- 返回不兼容类型：`"2"`而非`2`，`"two"`而非`2`
- 缺失required fields
- 导致runtime errors
- 函数崩溃<!-- confidence: EXTRACTED -->
- 证据：原文"Without strict mode, Claude might return incompatible types ("2" instead of 2) or omit required fields, breaking your functions and causing runtime errors"

### Strict Mode的保证

启用strict mode后：
- Functions receive correctly-typed arguments every time
- No need to validate and retry tool calls
- Production-ready agents work consistently at scale<!-- confidence: EXTRACTED -->
- 证据：原文"Strict tool use guarantees type-safe parameters: Functions receive correctly-typed arguments every time"

### 典型示例

Booking system需要`passengers: int`：
- 无strict：可能返回`passengers: "two"`或`passengers: "2"`
- 有strict：始终返回`passengers: 2`<!-- confidence: EXTRACTED -->
- 证据：原文"suppose a booking system needs passengers: int. Without strict mode, Claude might provide passengers: "two" or passengers: "2". With strict: true, the response always contains passengers: 2"

## 启用方式

### Quick Start

添加`"strict": true`到tool definition（与name/description/input_schema同级）：

```python
tools=[
  {
    "name": "get_weather",
    "description": "Get the current weather",
    "strict": True,  # Enable strict mode
    "input_schema": {
      "type": "object",
      "properties": {
        "location": {"type": "string"},
        "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}
      },
      "required": ["location"],
      "additionalProperties": False
    }
  }
]
```

### 必需的additionalProperties

Strict mode要求：
- 设置`additionalProperties: false`
- 防止额外字段<!-- confidence: INFERRED -->

### Response格式

Tool use blocks保证：
- `input`严格遵循`input_schema`
- `name`始终valid<!-- confidence: EXTRACTED -->
- 证据：原文"Tool input strictly follows the input_schema... Tool name is always valid"

## 适用场景

Strict Tool Use适合：
- **Validate tool parameters**：确保参数正确
- **Build agentic workflows**：Agent系统需要可靠性
- **Ensure type-safe function calls**：类型安全
- **Handle complex tools with nested properties**：复杂嵌套结构<!-- confidence: EXTRACTED -->
- 证据：原文"Use strict tool use when you need to: Validate tool parameters, Build agentic workflows, Ensure type-safe function calls"

## JSON Schema限制

Strict mode支持的JSON Schema subset：
- 需参考[JSON Schema limitations](https://platform.claude.com/docs/en/build-with-claude/structured-outputs#json-schema-limitations)
- 某些高级特性不支持<!-- confidence: EXTRACTED -->
- 证据：原文"The schema uses standard JSON Schema format with some limitations"

## 数据保留和合规

### HIPAA Eligibility

Strict tool use的HIPAA合规：
- HIPAA eligible
- **但PHI不得包含在tool schema定义中**
- PHI应在message content（prompts/responses）<!-- confidence: EXTRACTED -->
- 证据：原文"Strict tool use is HIPAA eligible, but PHI must not be included in tool schema definitions"

### PHI限制

禁止在以下位置包含PHI：
- `input_schema` property names
- `enum` values
- `const` values
- `pattern` regular expressions<!-- confidence: EXTRACTED -->
- 证据：原文"Do not include PHI in input_schema property names, enum values, const values, or pattern regular expressions"

### 为什么schema中不能有PHI

API缓存compiled schemas：
- 与message content分开缓存
- Cached schemas不获得PHI protections<!-- confidence: EXTRACTED -->
- 证据：原文"The API caches compiled schemas separately from message content, and these cached schemas do not receive the same PHI protections as prompts and responses"

### ZDR和HIPAA完整说明

参考[API and data retention](https://platform.claude.com/docs/en/manage-claude/api-and-data-retention)<!-- confidence: EXTRACTED -->

## 与相关概念的关系

- [[Tool Use]] — Strict Tool Use是Tool Use的可靠性增强<!-- confidence: INFERRED -->
- [[Grammar-constrained Sampling]] — Strict Tool Use的技术基础<!-- confidence: EXTRACTED -->
- [[JSON Schema]] — Strict Tool Use的schema定义标准<!-- confidence: EXTRACTED -->
- [[Structured Outputs]] — 使用相同grammar-constrained sampling技术<!-- confidence: EXTRACTED -->

## 不同素材中的观点

| 素材 | 核心观点 |
|------|----------|
| [[Anthropic Strict Tool Use Guide]] | 官方指南：grammar-constrained sampling、启用方式、HIPAA合规、适用场景 |
| [[Anthropic Tool Use Overview]] | 提及strict: true保证schema一致性（简要） |

## 相关页面

- [[Tool Use]]（实体页，已创建）
- [[Grammar-constrained Sampling]]（实体页，待创建）
- [[JSON Schema]]（实体页，待创建）
- [[Structured Outputs]]（实体页，待创建）
- [[Agent集成层]]（主题页，已存在）