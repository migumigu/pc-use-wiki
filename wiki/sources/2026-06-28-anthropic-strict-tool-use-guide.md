---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: official_docs
source_path: raw/articles/2026-06-28-anthropic-strict-tool-use-guide.md
images: 0
image_paths: []
---

# Anthropic Strict Tool Use Guide

> Strict Tool Use的官方指南，通过grammar-constrained sampling保证JSON Schema一致性

## 基本信息

- **来源类型**：官方文档（Anthropic Platform Docs）
- **原文位置**：raw/articles/2026-06-28-anthropic-strict-tool-use-guide.md
- **消化日期**：2026-06-28
- **官方链接**：https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use

## 核心观点

1. **Strict Tool Use的核心机制**：
   - 使用grammar-constrained sampling约束token采样
   - 保证tool inputs严格匹配JSON Schema
   - 防止类型错误（如"2"而非2）和缺失required字段<!-- confidence: EXTRACTED -->
   - 证据：原文"Setting strict: true on a tool definition guarantees Claude's tool inputs match your JSON Schema by constraining the model's token sampling"

2. **为何Agent需要Strict Mode**：
   - Agent系统需要guaranteed schema conformance
   - 非strict可能返回不兼容类型（"two"/"2"而非2）
   - 导致runtime errors和函数崩溃
   - Strict保证type-safe parameters，无需validate和retry<!-- confidence: EXTRACTED -->
   - 证据：原文"Building reliable agentic systems requires guaranteed schema conformance"

3. **启用方式和保证**：
   - 在tool definition添加`"strict": true`（与name/description/input_schema同级）
   - Tool `input`严格遵循`input_schema`
   - Tool `name`始终valid<!-- confidence: EXTRACTED -->
   - 证据：原文"Set strict: true as a top-level property in your tool definition... Tool input strictly follows the input_schema"

4. **适用场景**：
   - Validate tool parameters
   - Build agentic workflows
   - Ensure type-safe function calls
   - Handle complex tools with nested properties<!-- confidence: EXTRACTED -->
   - 证据：原文"Strict tool use validates tool parameters, ensuring Claude calls your functions with correctly-typed arguments"

5. **数据保留和HIPAA合规**：
   - Schema编译成grammars，缓存最多24小时
   - Prompts和responses不保留
   - HIPAA eligible，但**PHI不得包含在tool schema定义中**
   - PHI应在message content（prompts/responses）而非input_schema<!-- confidence: EXTRACTED -->
   - 证据：原文"Strict tool use is HIPAA eligible, but PHI must not be included in tool schema definitions"

## 关键概念

- [[Strict Tool Use]] — Schema验证机制（待创建）
- [[Grammar-constrained Sampling]] — Token采样的语法约束技术（待创建）
- [[JSON Schema]] — Schema定义标准（待创建）
- [[additionalProperties]] — JSON Schema的字段控制属性（待创建）
- [[Type-safe Parameters]] — 类型安全参数（待创建）
- [[HIPAA Eligibility]] — HIPAA合规性（待创建）

## 与其他素材的关联

- **与 [[Anthropic Define Tools Guide]] 的关系**：Define讲解工具定义，本文讲解strict schema验证<!-- confidence: EXTRACTED -->
  - 证据：原文"For non-strict schema guidance, see Define tools"
- **与 [[Anthropic Tool Use Overview]] 的关系**：Overview提及strict: true，本文提供完整指南<!-- confidence: INFERRED -->
- **与 [[Structured Outputs]] 的关系**：Strict Tool Use与Structured Outputs使用相同的grammar-constrained sampling<!-- confidence: EXTRACTED -->
  - 证据：原文"Strict tool use compiles tool input_schema definitions into grammars using the same pipeline as structured outputs"

## 原文精彩摘录

> Without strict mode, Claude might return incompatible types ("2" instead of 2) or omit required fields, breaking your functions and causing runtime errors. Strict tool use guarantees type-safe parameters: Functions receive correctly-typed arguments every time.

> For example, suppose a booking system needs passengers: int. Without strict mode, Claude might provide passengers: "two" or passengers: "2". With strict: true, the response always contains passengers: 2.

> PHI must not be included in tool schema definitions. The API caches compiled schemas separately from message content, and these cached schemas do not receive the same PHI protections as prompts and responses.

## 相关页面

- [[Strict Tool Use]]（实体页，待创建）
- [[Grammar-constrained Sampling]]（实体页，待创建）
- [[JSON Schema]]（实体页，待创建）
- [[Tool Use]]（实体页，已创建）
- [[Agent集成层]]（主题页，需更新）