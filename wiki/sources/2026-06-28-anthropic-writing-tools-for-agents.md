---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: official_docs
source_path: raw/articles/2026-06-28-anthropic-writing-tools-for-agents.md
images: 0
image_paths: []
---

# Writing Effective Tools for Agents

> Anthropic官方工程博客，系统讲解如何为Agent设计高质量工具、评估方法和优化原则

## 基本信息

- **来源类型**：官方博客（Anthropic Engineering Blog）
- **原文位置**：raw/articles/2026-06-28-anthropic-writing-tools-for-agents.md
- **消化日期**：2026-06-28
- **官方链接**：https://www.anthropic.com/engineering/writing-tools-for-agents
- **发布日期**：Sep 11, 2025

## 核心观点

1. **Tools的本质差异**：
   - 传统软件：deterministic systems间的contract
   - Agent工具：deterministic systems与non-deterministic agents间的contract
   - Agent可能hallucinate或误解工具用法
   - 需为Agent设计而非传统API<!-- confidence: EXTRACTED -->
   - 证据：原文"Tools are a new kind of software which reflects a contract between deterministic systems and non-deterministic agents"

2. **工具设计流程**：
   - **Build prototype**：快速原型+本地测试（MCP server/DXT）
   - **Run evaluation**：生成evaluation tasks+运行agentic loop+分析结果
   - **Collaborate with agents**：让Claude分析transcripts并改进工具<!-- confidence: EXTRACTED -->
   - 证据：原文"Start by standing up a quick prototype... Next, run a comprehensive evaluation... Collaborate with agents"

3. **Evaluation Tasks设计原则**：
   - **Strong tasks**：真实数据源+复杂多call+dozens of tool calls
     - 例：Schedule meeting with notes+reserve room
     - 例：Find logs for customer issue+determine scope
   - **Weak tasks**：过于简单或sandbox环境
     - 例：Search logs with specific keywords<!-- confidence: EXTRACTED -->
   - 证据：原文"Strong evaluation tasks might require multiple tool calls—potentially dozens... We recommend you avoid overly simplistic or superficial sandbox environments"

4. **Choosing Right Tools原则**：
   - More tools ≠ better outcomes
   - 常见错误：盲目wrap API endpoints
   - Agent affordance不同：LLM context有限，memory廉价
   - 设计thoughtful tools targeting high-impact workflows<!-- confidence: EXTRACTED -->
   - 证据：原文"More tools don't always lead to better outcomes. A common error we've observed is tools that merely wrap existing software functionality"

5. **工具合并与Namespacing**：
   - 合并相关操作：`schedule_event`而非`list_users`+`list_events`+`create_event`
   - Namespacing按service和resource：`asana_search`、`jira_search`、`asana_projects_search`
   - Clear distinct purpose，避免overlap<!-- confidence: EXTRACTED -->
   - 证据：原文"Tools can consolidate functionality... Namespacing (grouping related tools under common prefixes) can help delineate boundaries"

## 关键概念

- [[Agent Tools]] — 为Agent设计的工具类型（待创建）
- [[Agent Affordance]] — Agent的独特操作能力空间（待创建）
- [[Evaluation Tasks]] — 工具评估任务（待创建）
- [[Namespacing]] — 工具命名空间策略（已关联）
- [[Tool Consolidation]] — 工具合并策略（待创建）
- [[LLM Context Limit]] — LLM的上下文限制（待创建）

## 与其他素材的关联

- **与 [[MCP]] 的关系**：本文讲解如何为Agent设计工具，MCP提供了标准化工具定义协议<!-- confidence: EXTRACTED -->
  - 证据：原文"The Model Context Protocol (MCP) can empower LLM agents with potentially hundreds of tools"
- **与 [[Anthropic Define Tools Guide]] 的关系**：Define讲解schema定义，本文讲解工具设计原则和评估方法<!-- confidence: INFERRED -->
- **与 [[Claude Code]] 的关系**：Claude Code是Agent协作优化工具的实践案例<!-- confidence: EXTRACTED -->
  - 证据：原文"If you're using Claude Code to write your tools... We relied on Claude Code to analyze transcripts"

## 原文精彩摘录

> When we traditionally write software, we're establishing a contract between deterministic systems. For instance, a function call like getWeather("NYC") will always fetch the weather in New York City in the exact same manner every time it is called. Tools are a new kind of software which reflects a contract between deterministic systems and non-deterministic agents.

> LLM agents have limited "context" (that is, there are limits to how much information they can process at once), whereas computer memory is cheap and abundant. Consider the task of searching for a contact in an address book... The better and more natural approach (for agents and humans alike) is to skip to the relevant page first.

> In fact, most of the advice in this post came from repeatedly optimizing our internal tool implementations with Claude Code. Our evaluations were created on top of our internal workspace, mirroring the complexity of our internal workflows.

## 相关页面

- [[Agent Tools]]（实体页，待创建）
- [[Agent Affordance]]（实体页，待创建）
- [[Namespacing]]（实体页，待创建）
- [[MCP]]（实体页，已存在）
- [[Tool Use]]（实体页，已创建）
- [[Agent集成层]]（主题页，需更新）