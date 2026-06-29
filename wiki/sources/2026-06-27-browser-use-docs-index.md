---
tags: [素材摘要, 官方文档]
created: 2026-06-27
updated: 2026-06-27
sources: []
source_type: 文章
source_path: raw/articles/2026-06-27-browser-use-docs-index.md
images: 0
image_paths: []
---

# browser-use 官方文档索引

> 官方文档提供了完整的技术参考和使用指南

## 基本信息

- **来源类型**：文章（官方文档）
- **原文位置**：raw/articles/2026-06-27-browser-use-docs-index.md
- **消化日期**：2026-06-27
- **控制对象分类**：浏览器控制 + Agent集成层
- **技术层级**：工具实现层 + Agent集成层

## 核心观点

1. **文档结构清晰**：分为云服务文档、开源文档、自定义文档三大板块
2. **Agent vs Browser 两种模式**：Agent 模式适合复杂任务，Browser 模式适合底层控制
3. **SDK 生态完善**：提供 Python SDK、CLI 工具、Terminal 工具
4. **MCP 协议支持**：支持 Model Context Protocol，可与其他 Agent 系统集成
5. **自定义工具开发**：通过 @tools.action 装饰器扩展 Agent 能力

## 关键概念

- [[Agent模式]]
- [[Browser模式]]
- [[MCP]]
- [[自定义工具]]
- [[SDK]]

## 与其他素材的关联

- 与 [[browser-use GitHub README]] 的关系：本文是官方文档的索引，后者是 README 原文
- 与 [[browser-use-技术架构分析]] 的关系：本文提供架构概览，后者提供深度分析

## 原文精彩摘录

> Agent vs Browser
> - Agent: sessions.create() / run() - AI agent runs your task
> - Browser: browsers.create() - Raw browser via CDP

> Custom Tools: @tools.action decorator to define custom tools that the agent can use to interact with the world.

## 相关页面

- [[browser-use]]
- [[MCP]]
- [[Agent]]
- [[SDK]]