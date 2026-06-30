---
source_id: auto-20260630-cbm1
title: codebase-memory-mcp GitHub README - 高性能代码智能 MCP Server
url: https://github.com/DeusData/codebase-memory-mcp
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: tool_implementation
collected_date: 2026-06-30
collected_by: auto_research
confidence: high
---

# codebase-memory-mcp

> 面向 AI 编程 Agent 的最快、最高效的代码智能引擎

## 项目概述

codebase-memory-mcp 是一个基于 MCP（Model Context Protocol）协议的代码智能服务器，专为 AI 编程 Agent（Claude Code、Cursor、Gemini CLI 等）设计。它将代码仓库索引成持久化知识图谱，让代理不再依赖"读文件 + 猜结构"的低效模式。

## 核心特性

### 极致性能
- **纯 C 语言实现**：零外部依赖，SQLite 内置
- **毫秒级索引**：普通代码库全量索引在毫秒级完成
- **超大规模支持**：Linux 内核（2800 万行代码，75K 个文件）仅需 3 分钟
- **亚毫秒查询**：查询响应低于 1 毫秒
- **Token 效率**：Token 消耗降低 120 倍

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

### 核心组件
1. **代码索引引擎**（C 语言实现）
   - 多语言解析器
   - 抽象语法树（AST）分析
   - 符号提取与关联
2. **知识图谱存储**
   - SQLite 嵌入式数据库
   - 图结构数据模型
   - 高效查询优化
3. **MCP 协议层**
   - 标准 MCP Server 接口
   - 工具注册与发现
   - 流式响应支持

### 性能数据
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

- MIT License

## 开发团队

- DeusData 团队

## 项目状态

- 2026 年 5-6 月发布
- 上线 4 周 7400+ Stars
- 单日新增最高 2308 Stars
- GitHub Trending 增速冠军
