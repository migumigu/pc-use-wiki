---
tags: [核心概念, Agent集成层]
created: 2026-06-28
updated: 2026-06-28
sources:
  - wiki/sources/2026-06-28-anthropic-tool-use-overview.md
  - wiki/sources/2026-06-28-anthropic-tool-use-how-it-works.md
  - wiki/sources/2026-06-28-anthropic-tool-reference.md
---

# Client Tools

> 在应用端执行的工具类型，需要应用实现Agentic Loop处理往返调用

## 定义

Client Tools（客户端工具）是在应用端执行的Tool Use类型，包括用户自定义工具和Anthropic-schema工具。Claude返回tool_use block后，应用负责执行代码并返回tool_result。<!-- confidence: EXTRACTED -->
- 证据：原文"Client tools (including user-defined tools and Anthropic-schema tools like bash and text_editor) run in your application"

## 分类

### User-defined Tools（用户定义工具）

- 应用定义schema、执行代码、返回结果
- 绝大多数tool use流量是用户定义工具
- 执行方式：tool_use block → 应用执行 → tool_result block<!-- confidence: EXTRACTED -->
- 证据：原文"This is the main event: the vast majority of tool-use traffic is user-defined tools"

### Anthropic-schema Tools（Anthropic-schema工具）

Anthropic提供的标准工具schema，应用执行：
- `bash_20250124`：Shell命令执行
- `text_editor_20250124` / `text_editor_20250728`：文本编辑
- `computer_20250124` / `computer_20251124`：桌面控制（Computer Use）
- `memory_20250818`：Scratchpad内存管理<!-- confidence: EXTRACTED -->
- 证据：原文工具表格列出所有Anthropic-schema client tools

### Trained-in优化

使用Anthropic-schema工具的优势：
- Schema是trained-in：Claude在数千成功轨迹上优化
- 调用更可靠，错误恢复更优雅
- 模型期望的接口格式<!-- confidence: EXTRACTED -->
- 证据：原文"Claude has been optimized on thousands of successful trajectories that use these exact tool signatures"

## 执行机制

Client Tools需要应用驱动Agentic Loop：

1. Claude返回`stop_reason: "tool_use"` + `tool_use` blocks
2. 应用提取name、id、input
3. 应用执行对应工具代码
4. 应用构造`tool_result` blocks（含tool_use_id、content、可选is_error）
5. 发送新请求继续对话<!-- confidence: EXTRACTED -->
- 证据：原文"When Claude decides to use one of your tools, the API response contains a tool_use block... Your application extracts those arguments, runs the operation"

## Tool Definition属性

Client Tools支持的可选属性：
- `cache_control`：Prompt caching断点
- `strict`：Schema验证保证
- `defer_loading`：延迟加载（配合tool search）
- `allowed_callers`：调用者限制
- `input_examples`：调用示例（**仅Client Tools支持**）
- `eager_input_streaming`：细粒度输入流<!-- confidence: EXTRACTED -->
- 证据：原文"input_examples... Not available on server tools"

## 与Server Tools的对比

| 维度 | Client Tools | Server Tools |
|------|-------------|-------------|
| 执行位置 | 应用端 | Anthropic服务器 |
| Agentic Loop | 应用驱动 | Anthropic内部 |
| tool_result构造 | 应用负责 | 不需要 |
| input_examples | 支持 | 不支持 |
| 训练优化 | Anthropic-schema有trained-in优势 | Anthropic内置优化 |

## 版本管理

Anthropic-schema Client Tools的版本类型：
- **Model-keyed**：不同模型使用不同版本
  - `text_editor_20250728`（Claude 4）
  - `text_editor_20250124`（早期模型）<!-- confidence: EXTRACTED -->
- 证据：原文"text_editor_20250728 is for Claude 4 models and text_editor_20250124 is for earlier models"

## 与相关概念的关系

- [[Tool Use]] — Client Tools是Tool Use的执行类型之一<!-- confidence: EXTRACTED -->
- [[Agentic Loop]] — Client Tools需要应用驱动Agentic Loop<!-- confidence: EXTRACTED -->
- [[Server Tools]] — 执行位置对比<!-- confidence: INFERRED -->
- [[Anthropic-schema Tools]] — Client Tools的子类<!-- confidence: EXTRACTED -->
- [[input_examples]] — 仅Client Tools支持的属性<!-- confidence: EXTRACTED -->

## 不同素材中的观点

| 素材 | 核心观点 |
|------|----------|
| [[Anthropic Tool Use Overview]] | Client Tools需应用执行，Server Tools由Anthropic执行 |
| [[Anthropic How Tool Use Works]] | User-defined + Anthropic-schema的执行边界和trained-in优势 |
| [[Anthropic Tool Reference]] | Anthropic-schema工具列表（bash/text_editor/computer/memory）和版本管理 |
| [[Anthropic Define Tools Guide]] | input_examples仅Client Tools支持 |

## 相关页面

- [[Tool Use]]（实体页，已创建）
- [[Agentic Loop]]（实体页，已创建）
- [[Server Tools]]（实体页，待创建）
- [[Anthropic-schema Tools]]（实体页，待创建）
- [[input_examples]]（实体页，待创建）
- [[Agent集成层]]（主题页，已存在）