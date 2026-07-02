---
tags: [agent-integration, memory-system, knowledge-graph, mcp]
created: 2026-07-02
updated: 2026-07-02
sources: [auto-20260702-cognee-readme]
---

# Cognee GitHub README

> 24K+ Stars 开源知识引擎，将原始数据转化为 AI Agent 的持久动态记忆

## 概要

**Cognee** 是一个开源的知识引擎，结合向量搜索、图数据库和认知科学方法，使文档既可按意义搜索又可按关系连接，并随着数据变化持续学习。它提供四个核心操作：Remember、Recall、Improve、Forget。

## 核心数据

| 维度 | 数据 |
|------|------|
| **Stars** | 24,200+ |
| **License** | Apache-2.0 |
| **版本** | v1.0.4 |
| **Python** | 3.10-3.14 |
| **提交数** | 7,130+ |
| **支持格式** | 38+ 种数据类型 |

## 记忆层架构

### 三层存储
1. **关系存储**：文档溯源和元数据管理
2. **向量存储**：语义相似性嵌入
3. **图存储**：实体关系知识图谱

### 协同工作
- **摄取阶段**：关系存储跟踪来源，向量+图存储创建嵌入和实体关系
- **检索阶段**：语义搜索（向量）+ 结构搜索（图）+ 混合搜索

## 核心操作 API

| 操作 | 功能 |
|------|------|
| **Remember** | 存储记忆（永久记忆 + 会话记忆） |
| **Recall** | 查询记忆（智能路由检索） |
| **Improve** | 改进图谱，丰富记忆 |
| **Forget** | 删除记忆，支持多级别 |

## MCP 集成

- **cognee-mcp 模块**：独立 MCP 服务器
- **Claude Code 插件**：跨会话持久记忆
- **其他集成**：Hermes Agent、OpenClaw、LangGraph、Google ADK

## 与传统 RAG 对比

| RAG | Cognee |
|-----|--------|
| 仅向量相似度 | 添加本体论 |
| 准确率随数据增长下降 | 持续改进 |
| 无法处理复杂推理 | 创造新知识 |

## 技术价值

- **持久记忆**：跨会话的知识保持
- **知识图谱引擎**：实体关系推理
- **MCP 标准**：AI 编码助手集成

## 相关页面

- [[Cognee]]
- [[Agent集成层]]
- [[Mem0]]
- [[Memora]]

## 来源

- GitHub README: https://github.com/topoteretes/cognee
- 官方文档: https://docs.cognee.ai/