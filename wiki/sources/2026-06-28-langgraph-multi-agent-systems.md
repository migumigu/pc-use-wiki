---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: official_docs
source_path: raw/articles/2026-06-28-langgraph-multi-agent-systems.md
images: 0
image_paths: []
---

# LangGraph Multi-Agent Systems 官方文档

> LangGraph的多智能体系统架构指南，详细介绍五大协作模式、Handoffs机制和系统构建方法

## 基本信息

- **来源类型**：官方文档（LangGraph Official Docs）
- **原文位置**：raw/articles/2026-06-28-langgraph-multi-agent-systems.md
- **消化日期**：2026-06-28
- **官方链接**：https://langchain-ai.github.io/langgraph/concepts/multi_agent/

## 核心观点

1. **为何需要Multi-Agent系统**：
   - Agent工具过多导致决策失误
   - 上下文复杂度超过单个Agent管理能力
   - 需要多个专业化领域（planner、researcher、math expert等）<!-- confidence: EXTRACTED -->

2. **三大核心优势**：
   - **Modularity**：独立Agent更易于开发、测试、维护
   - **Specialization**：创建专家Agent专注特定领域
   - **Control**：显式控制Agent通信而非依赖function calling<!-- confidence: EXTRACTED -->

3. **五大协作架构**：
   - **Network**：每个Agent可与其他所有Agent通信
   - **Supervisor**：所有Agent与单一supervisor通信
   - **Supervisor (tool-calling)**：Agent表示为tools，supervisor用tool-calling LLM决策
   - **Hierarchical**：supervisor of supervisors，复杂控制流
   - **Custom workflow**：部分deterministic，部分Agent决策<!-- confidence: EXTRACTED -->

4. **Handoffs机制**：Agent间任务传递的标准机制，支持状态共享和任务转移<!-- confidence: EXTRACTED -->

## 关键概念

- [[Multi-Agent协作]] — 多Agent协作系统（待创建）
- [[LangGraph]] — LangChain的多Agent框架（待创建）
- [[Handoffs]] — Agent间任务传递机制（待创建）
- [[Supervisor架构]] — Supervisor协调多Agent的架构模式（待创建）
- [[Network架构]] — 全互联Agent通信架构（待创建）

## 与其他素材的关联

- **与 [[Multi-Agent Architecture Analysis]] 的关系**：本文提供LangGraph官方视角，后者提供全框架对比<!-- confidence: INFERRED -->
- **与 [[MCP]] 的关系**：Multi-Agent系统可通过MCP集成外部工具<!-- confidence: INFERRED -->

## 相关页面

- [[Multi-Agent协作]]（实体页，待创建）
- [[LangGraph]]（实体页，待创建）
- [[Agent集成层]]（主题页，需更新）