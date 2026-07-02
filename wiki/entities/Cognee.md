---
tags: [agent-integration, memory-system, knowledge-graph, mcp]
created: 2026-07-02
updated: 2026-07-02
sources: [auto-20260702-cognee-readme]
---

# Cognee

> 24K+ Stars 开源知识引擎，将原始数据转化为 AI Agent 的持久动态记忆

## 核心定位

**Cognee** 是一个开源的知识引擎，结合向量搜索、图数据库和认知科学方法，使文档既可按意义搜索又可按关系连接。它提供四个核心操作：Remember、Recall、Improve、Forget。

## 记忆层架构

### 三层存储

| 存储 | 功能 | 用途 |
|------|------|------|
| **关系存储** | 文档溯源和元数据 | 摄取阶段管理来源 |
| **向量存储** | 语义相似性嵌入 | 检索阶段语义搜索 |
| **图存储** | 实体关系知识图谱 | 检索阶段结构搜索 |

### 协同工作
- **摄取**：关系存储跟踪来源，向量+图存储创建嵌入和实体关系
- **检索**：语义搜索 + 结构搜索 + 混合搜索

## 核心操作 API

| 操作 | 功能 | 特点 |
|------|------|------|
| **Remember** | 存储记忆 | 永久记忆 + 会话记忆双模式 |
| **Recall** | 查询记忆 | 智能路由检索（7 种策略） |
| **Improve** | 改进图谱 | 丰富记忆，桥接会话 |
| **Forget** | 删除记忆 | 项目级/数据集级/用户级 |

## MCP 集成

### cognee-mcp 模块
- 独立 MCP 服务器
- 为 AI 编码助手提供知识图谱记忆

### Claude Code 集成
生命周期钩子：
- SessionStart → 初始化记忆
- PostToolUse → 捕获操作
- UserPromptSubmit → 注入上下文
- PreCompact → 保留记忆
- SessionEnd → 桥接到永久图谱

### 其他集成
Hermes Agent、OpenClaw、LangGraph、Google ADK

## 与传统 RAG 对比

| RAG | Cognee |
|-----|--------|
| 仅向量相似度 | 添加本体论 |
| 准确率随数据增长下降 | 持续改进 |
| 无法处理复杂推理 | 创造新知识 |

## 技术价值

- **持久记忆**：跨会话的知识保持
- **知识图谱引擎**：实体关系推理
- **本体论基础**：连接已验证知识结构

## 与同类对比

| 工具 | 定位 | 特点 |
|------|------|------|
| **Cognee** | 知识引擎 | 三层存储 + 知识图谱 |
| **Mem0** | 记忆层 | 41K Stars + 事实提取 |
| **Memora** | Harmonic Memory | ICML 2026 + 98% 上下文减少 |

## 相关页面

- [[Agent集成层]]
- [[Mem0]]
- [[Memora]]
- [[MCP]]

## 来源

- [[2026-07-02-cognee-readme]]