---
tags: [Agent集成层, OpenAI, Agents SDK, multi-agent, 框架]
created: 2026-07-01
updated: 2026-07-01
sources: []
---

# OpenAI Agents SDK GitHub README

> OpenAI 官方多 Agent 工作流构建框架，轻量级、模型无关、支持 100+ LLM

## 核心内容

OpenAI Agents SDK 是 OpenAI 官方推出的轻量级多 Agent 工作流构建框架，与模型提供商无关，支持 OpenAI Responses 和 Chat Completions API，以及 100+ 其他 LLM。

## 关键发现

### 项目基本信息
- **仓库地址**：https://github.com/openai/openai-agents-python
- **最新版本**：v0.17.7（Python）/ v0.12.0（JS/TS），2026-06-24
- **许可证**：MIT
- **主要语言**：Python（99.7%）
- **提交次数**：1,638 commits
- **发布版本**：104 releases

### 九大核心概念
1. **Agents**：配置了指令、工具、护栏和任务移交的 LLM
2. **Sandbox Agents**：预配置为使用容器执行长时间工作的 Agent
3. **Agents as tools / Handoffs**：将任务委托给其他 Agent
4. **Tools**：各种工具让 Agent 执行操作（函数、MCP、托管工具）
5. **Guardrails**：可配置的输入输出验证安全检查
6. **Human in the loop**：Agent 运行中涉及人工的内置机制
7. **Sessions**：跨 Agent 运行的自动对话历史管理
8. **Tracing**：Agent 运行的内置追踪，用于查看、调试和优化
9. **Realtime Agents**：使用 gpt-realtime-2 构建强大的语音 Agent

### 安装方式
```bash
# venv 方式
pip install openai-agents

# uv 方式
uv add openai-agents
```

可选依赖：
- 语音支持：`openai-agents[voice]`
- Redis 会话支持：`openai-agents[redis]`

### 技术依赖
核心依赖：Pydantic、Requests、MCP Python SDK、Griffe
可选依赖：websockets、SQLAlchemy、any-llm、LiteLLM
开发工具：uv、ruff、mypy、Pyright、pytest、MkDocs

## 相关页面

- [[OpenAI-Agents-SDK]]
- [[Agent集成层]]
- [[MCP]]
- [[Multi-Agent协作]]
- [[Function Calling]]
