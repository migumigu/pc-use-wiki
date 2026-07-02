---
tags: [EventStream, Message-Bus, Agent-Architecture, OpenHands]
created: 2026-07-02
updated: 2026-07-02
sources:
  - raw/articles/2026-07-02-openhands-architecture-analysis.md
---

# EventStream

> OpenHands 事件流消息总线，Agent 交互核心机制

## 基本概念

EventStream 是 OpenHands 三层 Harness 架构中的消息层，负责模块联动和事件分发。

## 工作机制

Agent 交互逻辑：**初始化 - 事件注入 - 协同处理 - 等待**

```
Event → EventStream → Runtime → Environment → Action → Observation → Agent
```

## 核心流程

1. **初始化就绪**：用户创建会话时，系统自动初始化
2. **事件注入**：用户输入或系统事件注入 EventStream
3. **协同处理**：Agent Controller + Runtime + Environment 协同处理
4. **等待响应**：Observation 返回给 Agent 作为下一步决策输入

## 功能特点

- 异步操作处理
- 多 Agent 协作支持
- 事件驱动架构
- 状态同步机制

## 相关页面

- [[OpenHands]] — 主平台
- [[Runtime]] — 执行层
- [[Agent集成层]] — 主题页