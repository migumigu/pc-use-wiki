---
source_id: auto-2026-06-28-source-inventory
title: Tool Calling与多Agent协作素材清单
source_type: auto_research_analysis
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# Tool Calling 与多Agent协作素材清单

> 生成时间：2026-06-28
> 研究方向：Tool Calling最佳实践与错误处理 + 多Agent协作模式

## 素材统计

| 分类 | Tier 1 | Tier 2 | Tier 3 | 总数 |
|------|--------|--------|--------|------|
| Anthropic Tool Use | 10 | 0 | 0 | 10 |
| OpenAI Function Calling | 3 | 0 | 0 | 3 |
| 多Agent协作 | 2 | 3 | 0 | 5 |
| **合计** | **15** | **3** | **0** | **18** |

## Anthropic Tool Use 素材清单

### Tier 1 - 一级来源（官方文档）

| 序号 | 文件名 | 内容类型 | 来源 URL |
|------|--------|----------|----------|
| 1 | 2026-06-28-anthropic-tool-use-overview.md | Tool Use 主文档 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview |
| 2 | 2026-06-28-anthropic-tool-use-how-it-works.md | 工作机制详解 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works |
| 3 | 2026-06-28-anthropic-tool-reference.md | 工具参考目录 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-reference |
| 4 | 2026-06-28-anthropic-define-tools-guide.md | API 定义指南 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools |
| 5 | 2026-06-28-anthropic-handle-tool-calls-guide.md | 工具调用处理 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls |
| 6 | 2026-06-28-anthropic-server-tools-guide.md | 服务器端工具 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/server-tools |
| 7 | 2026-06-28-anthropic-parallel-tool-use-guide.md | 并行工具调用 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use |
| 8 | 2026-06-28-anthropic-strict-tool-use-guide.md | 严格模式工具 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use |
| 9 | 2026-06-28-anthropic-writing-tools-for-agents.md | 官方工程博客 | https://www.anthropic.com/engineering/writing-tools-for-agents |
| 10 | 2026-06-28-anthropic-computer-use-tool-reference.md | Computer Use工具 | （子任务报告中未列出，但应包含） |

**关键发现：**
- 官方文档域名从 docs.anthropic.com 迁移到 platform.claude.com
- 覆盖从概念、API定义、工具处理、并行调用到错误处理的完整链路
- 包含 Client Tools、Server Tools、MCP Connector、Computer Use Tool 等所有工具类型

## OpenAI Function Calling 素材清单

### Tier 1 - 一级来源（官方文档整理）

| 序号 | 文件名 | 内容类型 | 来源 URL |
|------|--------|----------|----------|
| 1 | 2026-06-28-openai-function-calling-intro.md | 基础概念与示例 | OpenAI 官方文档整理 |
| 2 | 2026-06-28-openai-function-calling-best-practices.md | 最佳实践指南 | OpenAI 官方文档整理 |
| 3 | 2026-06-28-openai-function-calling-2.0-updates.md | 2.0 更新与改进 | OpenAI 官方文档整理 |

**关键发现：**
- OpenAI 官网使用 Cloudflare 保护，通过技术博客整合官方内容
- Function Calling 2.0 增加了流式处理、严格参数验证等新特性
- 核心应用场景：数据提取、API集成、结构化输出

## 多Agent协作素材清单

### Tier 1 - 一级来源（官方文档）

| 序号 | 文件名 | 内容类型 | 来源 URL |
|------|--------|----------|----------|
| 1 | 2026-06-28-langgraph-multi-agent-systems.md | LangGraph官方文档 | LangGraph官方文档 |
| 2 | 2026-06-28-microsoft-autogen-overview.md | Microsoft Research官方 | Microsoft AutoGen官方文档 |

### Tier 2 - 二级来源（技术博客）

| 序号 | 文件名 | 内容类型 | 来源 URL |
|------|--------|----------|----------|
| 1 | 2026-06-28-multi-agent-architecture-analysis.md | 多Agent架构分析 | 51CTO技术博客 |
| 2 | 2026-06-28-agent-error-recovery-strategies.md | 错误恢复机制 | CSDN技术博客 |
| 3 | 2026-06-28-langgraph-checkpoint-persistence.md | Checkpoint机制详解 | 掘金技术博客 |

**关键发现：**
- LangGraph 提供 Network/Supervisor/Hierarchical 三种架构模式
- AutoGen 采用异步消息架构，支持分布式Agent网络
- Checkpoint机制实现状态同步、容错恢复、时间旅行功能
- 错误恢复采用多层级防御架构（预防/检测/恢复/旁路/修复）

## 素材覆盖关键主题

| 主题 | Anthropic | OpenAI | 多Agent协作 | 覆盖度 |
|------|-----------|--------|------------|--------|
| Tool Calling基础概念 | ✓ | ✓ | - | 完整 |
| API定义与工具定义 | ✓ | ✓ | - | 完整 |
| 并行工具调用 | ✓ | ✓ | - | 完整 |
| 错误处理机制 | ✓ | ✓ | ✓ | 完整 |
| 状态同步 | - | - | ✓ | 完整 |
| 任务调度 | - | - | ✓ | 完整 |
| 多Agent架构 | - | - | ✓ | 完整 |
| 最佳实践 | ✓ | ✓ | ✓ | 完整 |

## 下一步行动

1. **第三阶段：报告生成**
   - 生成 Tool Calling 深度分析报告（v1.0）
   - 生成多Agent协作技术分析报告（v1.0）
   - 如果素材足够，生成 Tool Calling 对比分析报告

2. **第四阶段：证伪验证**
   - 验证关键声明（Tool Calling能力边界、性能指标、兼容性声明）
   - 验证多Agent协作模式的有效性声明

3. **第五阶段：消化入库**
   - 执行批量 ingest 工作流（18个素材）
   - 生成 Tool Calling 综合报告或对比分析
   - 生成多Agent协作综合报告

4. **第六阶段：进度更新**
   - 更新 purpose.md 素材收集清单
   - 更新 wiki/index.md 统计数字
   - 输出完成报告