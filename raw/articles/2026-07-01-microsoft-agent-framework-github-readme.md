---
source_id: auto-2026-07-01-maf-github-readme
title: Microsoft Agent Framework GitHub README
url: https://github.com/microsoft/agent-framework
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: tool_implementation
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# Microsoft Agent Framework GitHub README

## 基本信息

- **仓库**：microsoft/agent-framework
- **最新 commit**：2026-06-30
- **Commits**：2,435
- **Releases**：97
- **语言**：Python 51.3%, C# 45.6%, TypeScript 2.6%

## 核心定位

Microsoft Agent Framework (MAF) 是一个开放的、多语言的框架，用于在 **.NET 和 Python** 中构建**生产级 AI Agent 和多 Agent 工作流**。

## 关键特性

1. **Python 和 C#/.NET 支持**：Python 和 C#/.NET 完整框架支持，API 一致
2. **多 Agent 提供商支持**：支持各种 LLM 提供商，持续添加更多
3. **中间件**：灵活的中间件系统，用于请求/响应处理、异常处理和自定义管道
4. **编排模式和工作流**：使用基于图的工作流构建多 Agent 系统，支持 sequential、concurrent、handoff 和 group collaboration 模式；包含检查点、流式处理、人在循环、时间旅行
5. **Foundry Hosted Agents (新)**：只需 2 行额外代码即可部署和托管到 Foundry 基础设施
6. **可观测性**：内置 OpenTelemetry 集成，用于分布式追踪、监控和调试
7. **声明式 Agent**：使用 YAML 定义 Agent，加快设置和版本控制
8. **Agent Skills**：从多个来源（文件、内联代码、类库）为 Agent 构建领域特定知识库
9. **AF Labs**：实验性包，包含基准测试、强化学习和研究举措
10. **DevUI**：用于 Agent 开发、测试和工作流调试的交互式开发者 UI

## 适用场景

MAF 非常适合：
- 构建期望在生产环境中运行的 Agent 和工作流
- 需要超越单一提示或无状态聊天循环的编排
- 需要基于图的模式如 sequential、concurrent、handoff 和 group collaboration
- 关心持久性、可重启性、可观测性、治理或人在循环控制
- 需要提供商灵活性，以便架构可以随着需求演变而不需要大规模重写

## 安装

Python:
```bash
pip install agent-framework
```

.NET:
```bash
dotnet add package Microsoft.Agents.AI
dotnet add package Microsoft.Agents.AI.Foundry
dotnet add package Azure.AI.Projects
dotnet add package Azure.Identity
```

## 学习资源

- Overview - 框架高级概述
- Quick Start - 简单 Agent 入门
- Tutorials - 逐步教程
- User Guide - 构建 Agent 和工作流的深入用户指南
- Migration from Semantic Kernel - 从 Semantic Kernel 迁移指南
- Migration from AutoGen - 从 AutoGen 迁移指南

## 示例

### Python 示例
- Getting Started: 从 hello-world 到托管的渐进式教程
- Agent Concepts: 按主题深入示例（工具、中间件、提供商等）
- Workflows: 工作流创建和与 Agent 的集成
- Hosting: A2A、Azure Functions、Durable Task 托管
- End-to-End: 全应用程序、评估和演示

### .NET 示例
- Getting Started: 从 hello agent 到托管的渐进式教程
- Agent Concepts: 基本 Agent 创建和工具使用
- Agent Providers: 展示不同 Agent 提供商的示例
- Workflows: 高级多 Agent 模式和工作流编排
- Hosting: A2A、Durable Agents、Durable Workflows
- End-to-End: 全应用程序和演示
