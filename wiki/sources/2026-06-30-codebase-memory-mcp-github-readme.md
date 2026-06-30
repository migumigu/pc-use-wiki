---
tags: [MCP, codebase-memory-mcp, 代码智能, 知识图谱]
created: 2026-06-30
updated: 2026-06-30
sources: [https://github.com/DeusData/codebase-memory-mcp]
---

# codebase-memory-mcp GitHub README

> 高性能代码智能 MCP Server，纯 C 实现，零外部依赖

## 项目概述

codebase-memory-mcp 是由 DeusData 团队开发的基于 MCP（Model Context Protocol）协议的代码智能服务器，专为 AI 编程 Agent（Claude Code、Cursor、Gemini CLI 等）设计。它将代码仓库索引成持久化知识图谱，让代理不再依赖"读文件 + 猜结构"的低效模式。

> ⚠️ 注：本摘要基于第三方技术文章整理，部分数据待官方文档确认。

## 核心特性

### 极致性能
- **纯 C 语言实现**：零外部依赖，SQLite 内置
- **毫秒级索引**：普通代码库全量索引在毫秒级完成
- **超大规模支持**：Linux 内核（2800 万行代码，75K 个文件）仅需 3 分钟（声称数据，待验证）
- **亚毫秒查询**：结构化查询响应低于 1 毫秒
- **Token 效率**：Token 消耗降低约 120 倍（对比直接读完整文件）

### 14+ MCP 工具
- 语义搜索（Semantic Search）
- 代码结构导航
- 函数调用关系图
- 依赖关系分析
- 符号定义查找
- 跨文件引用追踪
- 代码变更影响分析

### 知识图谱存储
- 持久化代码知识图谱
- 实体关系建模
- 增量索引支持
- 多项目并行管理

## 技术架构

### 三层架构
1. **索引引擎层**（纯 C 实现）
   - 多语言解析器
   - 抽象语法树（AST）分析
   - 符号提取与关联

2. **知识图谱层**
   - SQLite 嵌入式数据库
   - 图结构数据模型
   - 高效查询优化

3. **MCP 协议层**
   - 标准 MCP Server 接口
   - 工具注册与发现
   - 流式响应支持

### 性能数据（声称）
| 指标 | 数值 |
|------|------|
| 索引速度（普通项目） | < 1 秒 |
| 索引速度（Linux 内核） | 3 分钟（2800 万行） |
| 查询延迟 | < 1 ms |
| Token 节省 | 约 120 倍 |
| 支持语言 | 20+ 主流编程语言 |

## 支持的 Agent

- Claude Code
- Cursor
- Gemini CLI
- 任何支持 MCP 协议的 Agent

## 开源协议

- MIT License（推测，待官方确认）

## 开发团队

- DeusData 团队

## 项目状态

- 2026 年 5-6 月发布
- 上线 4 周 7400+ Stars（第三方报道，待验证）
- 单日新增最高 2308 Stars
- GitHub Trending 增速冠军

## 相关页面

- [[MCP]] — 模型上下文协议
- [[Filesystem-MCP]] — 官方 MCP 文件系统服务器
- [[chrome-devtools-mcp]] — Chrome DevTools MCP Server
- [[Agent集成层]] — AI Agent 与外部工具集成技术
