---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: tech_blog
source_path: raw/articles/2026-06-28-multi-agent-architecture-analysis.md
images: 0
image_paths: []
---

# Multi-Agent系统架构深度解析

> 六大主流Multi-Agent框架对比分析（LangGraph、AutoGen、AgentScope、Spring AI Alibaba、CrewAI、MetaGPT），涵盖架构模式、协作机制和选型建议

## 基本信息

- **来源类型**：技术博客（51CTO）
- **原文位置**：raw/articles/2026-06-28-multi-agent-architecture-analysis.md
- **消化日期**：2026-06-28
- **分析范围**：LangGraph、AutoGen、AgentScope、Spring AI Alibaba、CrewAI、MetaGPT

## 核心观点

1. **Multi-Agent的时代背景**：2024-2025年AI应用深水区，单体LLM受限上下文窗口、推理深度和全能性悖论<!-- confidence: EXTRACTED -->

2. **核心架构："大脑-记忆-感知-行动"协同网络**：
   - **Profile**：人设/角色定义（System Prompt、权限边界）
   - **Planning**：任务拆解（子目标分解、反思修正）
   - **Memory**：短期记忆（对话上下文）、长期记忆（向量DB）、共享状态
   - **Action**：工具使用、API调用、代码执行<!-- confidence: EXTRACTED -->

3. **协作模式分类**：
   - 顺序协作（Sequential）
   - 层级协作（Hierarchical）
   - 并行协作（Parallel）
   - 网状协作（Network）<!-- confidence: EXTRACTED -->

4. **六大框架核心理念对比**：
   - **LangGraph**：图执行引擎，支持复杂状态管理
   - **AutoGen**：异步事件驱动，跨语言支持
   - **AgentScope**：阿里开源，专注多模态
   - **Spring AI Alibaba**：Java生态集成
   - **CrewAI**：角色扮演式协作
   - **MetaGPT**：软件工程自动化<!-- confidence: EXTRACTED -->

## 关键概念

- [[Multi-Agent协作]] — 多Agent协作系统（待创建）
- [[协作模式]] — Agent间的协作模式分类（待创建）
- [[Profile]] — Agent人设定义（待创建）
- [[Planning]] — Agent任务规划机制（待创建）
- [[Memory]] — Agent记忆系统（已存在）

## 与其他素材的关联

- **与 [[LangGraph Multi-Agent Systems]] 的关系**：LangGraph官方文档提供单框架详情，本文提供全框架对比<!-- confidence: INFERRED -->
- **与 [[Microsoft AutoGen Overview]] 的关系**：AutoGen官方介绍，本文提供横向对比视角<!-- confidence: INFERRED -->

## 相关页面

- [[Multi-Agent协作]]（实体页，待创建）
- [[LangGraph]]（实体页，待创建）
- [[AutoGen]]（实体页，待创建）
- [[Agent集成层]]（主题页，需更新）