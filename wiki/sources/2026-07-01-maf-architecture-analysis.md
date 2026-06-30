---
tags: [素材摘要]
created: 2026-07-01
updated: 2026-07-01
sources: []
source_type: tech_blog
source_path: raw/articles/2026-07-01-maf-architecture-analysis.md
images: 0
image_paths: []
---

# Microsoft Agent Framework 1.0 技术深度分析

> 腾讯云开发者社区技术文章，解析 MAF 1.0 五层架构、核心理念演化、API 差异、开放协议集成以及 BUILD 2026 最新动态

## 基本信息

- **来源类型**：技术博客
- **原文位置**：raw/articles/2026-07-01-maf-architecture-analysis.md
- **消化日期**：2026-07-01
- **官方链接**：https://cloud.tencent.com/developer/article/2694582

## 核心观点

1. **发布背景**：2026 年 4 月 3 日 MAF 1.0 GA，Semantic Kernel + AutoGen 统一继承者
2. **五层架构**：Orchestration → Agent → Kernel → MEAI → Service Connectors
3. **Agent/Workflow 职责分离**：Agent 负责"想"，Workflow 负责"走"
4. **BUILD 2026 新能力**：Agent Harness、CodeAct、Foundry Hosted Agents、Handoff 编排

## 关键概念

- [[Microsoft-Agent-Framework]] — 实体页（需创建）
- [[Semantic-Kernel]] — SK 是 MAF 的基础能力支撑层
- [[CodeAct]] — BUILD 2026 新能力，-52.4% 时间，-63.9% Token
- [[Agent-Harness]] — 生产模式内置
- [[A2A-Protocol]] — 远程 Agent 互操作

## 与其他素材的关联

- **与 [[2026-07-01-microsoft-agent-framework-github-readme]] 的关系**：本文提供深度分析，README 提供官方概览
- **与 [[Agent集成层]] 的关系**：MAF 是 Agent 集成层的核心框架

## 相关页面

- [[Microsoft-Agent-Framework]]（实体页，待创建）
- [[Agent集成层]]（主题页，需更新）
