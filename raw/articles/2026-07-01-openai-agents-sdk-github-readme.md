---
source_id: auto-20260701-oa01
title: OpenAI Agents SDK GitHub README
url: https://github.com/openai/openai-agents-python
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# OpenAI Agents SDK GitHub README

## 项目概述

OpenAI Agents SDK 是一个轻量级但功能强大的多 Agent 工作流构建框架。它与模型提供商无关，支持 OpenAI Responses 和 Chat Completions API，以及 100+ 其他 LLM。

- **仓库地址**：https://github.com/openai/openai-agents-python
- **最新版本**：v0.17.7（2026-06-24）
- **许可证**：MIT
- **主要语言**：Python（99.7%）
- **提交次数**：1,638 commits
- **发布版本**：104 releases

## 核心概念

1. **Agents**：配置了指令、工具、护栏和任务移交的 LLM
2. **Sandbox Agents**：预配置为使用容器执行长时间工作的 Agent
3. **Agents as tools / Handoffs**：将任务委托给其他 Agent
4. **Tools**：各种工具让 Agent 执行操作（函数、MCP、托管工具）
5. **Guardrails**：可配置的输入输出验证安全检查
6. **Human in the loop**：Agent 运行中涉及人工的内置机制
7. **Sessions**：跨 Agent 运行的自动对话历史管理
8. **Tracing**：Agent 运行的内置追踪，用于查看、调试和优化工作流
9. **Realtime Agents**：使用 gpt-realtime-2 构建强大的语音 Agent

## 快速开始

### 安装

```bash
# venv 方式
python -m venv .venv
source .venv/bin/activate
pip install openai-agents

# uv 方式
uv init
uv add openai-agents
```

可选依赖：
- 语音支持：`pip install 'openai-agents[voice]'`
- Redis 会话支持：`pip install 'openai-agents[redis]'`

### Sandbox Agent 示例

```python
from agents import Runner
from agents.run import RunConfig
from agents.sandbox import Manifest, SandboxAgent, SandboxRunConfig
from agents.sandbox.entries import GitRepo
from agents.sandbox.sandboxes import UnixLocalSandboxClient

agent = SandboxAgent(
    name="Workspace Assistant",
    instructions="Inspect the sandbox workspace before answering.",
    default_manifest=Manifest(
        entries={
            "repo": GitRepo(repo="openai/openai-agents-python", ref="main"),
        }
    ),
)

result = Runner.run_sync(
    agent,
    "Inspect the repo README and summarize what this project does.",
    run_config=RunConfig(sandbox=SandboxRunConfig(client=UnixLocalSandboxClient())),
)
print(result.final_output)
```

## 依赖与致谢

核心依赖：
- Pydantic
- Requests
- MCP Python SDK
- Griffe

可选依赖：
- websockets
- SQLAlchemy
- any-llm 和 LiteLLM

开发工具：
- uv 和 ruff
- mypy 和 Pyright
- pytest 和 Coverage.py
- MkDocs

## 相关项目

- JavaScript/TypeScript 版本：[openai-agents-js](https://github.com/openai/openai-agents-js)

## 主题标签

python, framework, ai, openai, agents, harness, llm
