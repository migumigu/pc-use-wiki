---
source_id: auto-2026-07-02-openhands-arch
title: OpenHands 技术架构分析
url: https://www.cnblogs.com/rossiXYZ/p/19656834
source_type: tech_blog
tier: 2
control_object: Agent集成层
tech_layer: agent_integration
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# OpenHands 技术架构分析 — Runtime/EventStream/Sandbox 三层设计

## 核心架构

OpenHands 采用 **Runtime/Sandbox 隔离 + EventStream 消息总线 + Agent Controller** 三层 harness 设计，是最架构完整的开源 coding agent。

### 三层 Harness 架构

```
Agent Controller (决策层)
    ↓ EventStream (消息总线)
Runtime (执行层)
    ↓ Sandbox Plugin
Environment (环境层)
```

## EventStream 工作机制

Agent 的交互逻辑可提炼为 **"初始化 - 事件注入 - 协同处理 - 等待"** 的极简流程：

1. **初始化就绪**: 用户创建会话时，系统自动初始化
2. **事件注入**: 用户输入或系统事件注入 EventStream
3. **协同处理**: Agent Controller + Runtime + Environment 协同处理
4. **等待响应**: Observation 返回给 Agent 作为下一步决策输入

### 数据流

```
Event → EventStream → Runtime → Environment → Action → Observation → Agent
```

## Runtime 核心逻辑

### base.py

- `Runtime` 类：抽象基类，定义运行时接口
- `ActionExecutionClient`: 执行 Action 的客户端

### 运行时类型

| 类型 | 说明 |
|------|------|
| **Docker 运行时** | 每个 Agent 任务在独立容器里运行 |
| **本地运行时** | 开发测试时的本地安全模式 |
| **远程运行时** | 云端 Kubernetes 部署 |

## Sandbox 安全执行

### Environment 和 Sandbox

- **Environment**: 执行环境抽象
- **Sandbox**: 安全隔离容器

### 安全执行机制

与 OpenAI Agents SDK 的多沙箱提供商模式不同，OpenHands 主要通过两种方式实现隔离：

1. **Docker 容器隔离**: 每个 Agent 任务在独立容器里运行
2. **本地安全模式**: 开发测试时可以在本地受限环境运行

### 核心功能

- 文件系统隔离
- 网络隔离
- 进程隔离
- 权限控制

## 插件系统

sandbox_plugins 提供可扩展的安全机制：

- 文件系统插件
- 网络插件
- 进程管理插件

## Session 管理

- **ConversationManager**: HTTP 会话管理
- **Session**: 保存单个 EventStream + Agent Controller + Runtime
- **任务边界**: 通常代表一个单一任务

## 关键设计决策

1. **SDK 是核心**: 其他所有东西（GUI、云端服务）都是 SDK 之上的封装
2. **Model-Agnostic**: 不绑定任何特定 LLM 提供商
3. **弹性扩展**: 从本地到 1000+ Agent 云端规模
4. **Micro-Agent 架构**: 支持将复杂任务分解为多个专业化 Agent

## 与竞品对比

| 维度 | OpenHands | OpenAI Agents SDK | smolagents |
|------|-----------|-------------------|------------|
| **架构完整度** | 高（三层） | 中 | 极简（~1000行） |
| **Runtime 设计** | Docker + Local + Remote | 多沙箱提供商 | 单一环境 |
| **企业特性** | ✅ Cloud + Enterprise | ❌ | ❌ |
| **Stars** | 75K+ | 新发布 | 27K |

## 关键实体提取

- **EventStream**: 事件流消息总线
- **Runtime**: 运行时执行层
- **Sandbox**: 安全沙箱隔离
- **Agent Controller**: Agent 决策控制器
- **Environment**: 执行环境抽象

## 主题关联

- [[Agent集成层]] - 主分类
- [[系统服务控制]] - Sandbox/Runtime
- [[Multi-Agent协作]] - Micro-Agent 架构