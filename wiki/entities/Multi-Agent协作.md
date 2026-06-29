---
tags: [核心概念, Agent集成层]
created: 2026-06-28
updated: 2026-06-28
sources:
  - wiki/sources/2026-06-28-langgraph-multi-agent-systems.md
  - wiki/sources/2026-06-28-microsoft-autogen-overview.md
  - wiki/sources/2026-06-28-multi-agent-architecture-analysis.md
---

# Multi-Agent协作

> 多个独立Agent协同工作的系统架构，通过专业化分工和协作模式解决复杂任务

## 定义

Multi-Agent系统（多智能体系统）是将应用拆分为多个小型独立Agent并组合成协作系统的架构。独立Agent可简单（prompt+LLM调用）或复杂（ReAct Agent等）。<!-- confidence: EXTRACTED -->
- 证据：原文"consider breaking your application into multiple smaller, independent agents and composing them into a multi-agent system"

##为何需要Multi-Agent

单体Agent面临的问题：
- Agent工具过多，决策失误
- 上下文复杂度超过单个Agent管理能力
- 需要多个专业化领域（planner、researcher、math expert等）<!-- confidence: EXTRACTED -->
- 证据：原文"agent has too many tools... context grows too complex... need for multiple specialization areas"

单体LLM局限性：
- 上下文窗口限制
- 推理深度限制
- 全能性悖论（一个模型很难既是顶级律师又是顶级程序员）<!-- confidence: EXTRACTED -->
- 证据：原文"单体LLM受限于上下文窗口、推理深度和全能性悖论"

## 三大核心优势

### Modularity（模块化）

独立Agent更易于开发、测试、维护<!-- confidence: EXTRACTED -->
- 证据：原文"Separate agents make it easier to develop, test, and maintain agentic systems"

### Specialization（专业化）

创建专家Agent专注特定领域，提升系统性能<!-- confidence: EXTRACTED -->
- 证据：原文"You can create expert agents focused on specific domains"

### Control（控制）

显式控制Agent通信而非依赖function calling<!-- confidence: EXTRACTED -->
- 证据：原文"You can explicitly control how agents communicate"

## 核心架构："大脑-记忆-感知-行动"协同网络

### Profile（人设/角色）

定义Agent是谁：
- 系统提示词（System Prompt）
- 性格特征、权限边界
- 例："你是一个Python代码审计员，只负责Review代码"<!-- confidence: EXTRACTED -->

### Planning（规划）

Agent如何拆解任务：
- 子目标分解：将"开发网站"拆解为"设计前端"、"编写后端"、"测试"
- 反思与修正：ReAct, Plan-and-Solve<!-- confidence: EXTRACTED -->

### Memory（记忆）

三种记忆类型：
- **短期记忆**：当前对话上下文
- **长期记忆**：向量DB中的历史经验/知识库
- **共享状态**：多Agent间传递的"黑板"或全局变量<!-- confidence: EXTRACTED -->

### Action（行动/工具使用）

Agent手脚的延伸：
- API调用、数据库查询
- 代码执行（Code Interpreter）<!-- confidence: EXTRACTED -->

## 五大协作模式

### Network（网络）

每个Agent可与其他所有Agent通信<!-- confidence: EXTRACTED -->
- 证据：原文"Each agent can communicate with every other agent"

### Supervisor（监督者）

所有Agent与单一supervisor通信，supervisor决策下一个Agent<!-- confidence: EXTRACTED -->
- 证据：原文"Supervisor agent makes decisions on which agent should be called next"

### Supervisor (tool-calling)

Agent表示为tools，supervisor用tool-calling LLM决策<!-- confidence: EXTRACTED -->
- 证据：原文"Individual agents can be represented as tools... supervisor agent uses a tool-calling LLM"

### Hierarchical（层级）

supervisor of supervisors，复杂控制流<!-- confidence: EXTRACTED -->
- 证据：原文"multi-agent system with a supervisor of supervisors"

### Custom workflow（自定义）

部分deterministic，部分Agent决策<!-- confidence: EXTRACTED -->
- 证据：原文"Parts of the flow are deterministic"

## 六大主流框架

### LangGraph

图执行引擎，支持复杂状态管理<!-- confidence: EXTRACTED -->

### AutoGen

Microsoft开源，异步事件驱动架构，跨语言支持<!-- confidence: EXTRACTED -->

### AgentScope

阿里开源，专注多模态<!-- confidence: EXTRACTED -->

### Spring AI Alibaba

Java生态集成<!-- confidence: EXTRACTED -->

### CrewAI

角色扮演式协作<!-- confidence: EXTRACTED -->

### MetaGPT

软件工程自动化<!-- confidence: EXTRACTED -->

## Handoffs机制

Agent间任务传递的标准机制：
- 支持状态共享
- 任务转移
- 协作流程控制<!-- confidence: EXTRACTED -->

## 不同素材中的观点

| 素材 | 核心观点 |
|------|----------|
| [[LangGraph Multi-Agent Systems]] | LangGraph官方：五大协作架构、三大优势、Handoffs机制 |
| [[Microsoft AutoGen Overview]] | AutoGen官方：异步事件驱动、六大特性、核心组件 |
| [[Multi-Agent Architecture Analysis]] | 六大框架对比：核心架构、协作模式、选型建议 |

## 相关页面

- [[LangGraph]]（实体页，待创建）
- [[AutoGen]]（实体页，待创建）
- [[Handoffs]]（实体页，待创建）
- [[错误恢复]]（实体页，待创建）— Multi-Agent系统的错误处理
- [[Checkpoint]]（实体页，待创建）— Multi-Agent系统的状态持久化
- [[Agent集成层]]（主题页，已存在）— Multi-Agent协作所属技术层级