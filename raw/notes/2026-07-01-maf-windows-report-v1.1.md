# Microsoft Agent Framework + Windows Agent 原生支持 技术分析报告 v1.1

> 生成日期：2026-07-01
> 来源：3 个（Tier1: 1, Tier2: 2）
> 报告版本：v1.1
> 证伪状态：已完成

## 1. 执行摘要

2026 年 4 月 3 日，微软正式发布 **Microsoft Agent Framework (MAF) 1.0** GA 版本，标志着 Semantic Kernel 和 AutoGen 这两个项目<!-- confidence: INFERRED -->完成历史使命，融合为统一、生产就绪、跨语言（.NET + Python）的企业级 Agent 开发平台。

同年 6 月 Build 2026 大会，微软宣布 **Windows Agent 原生支持**，Windows 11 将原生集成 AI 代理运行时环境、安全沙箱、Native AI API，智能体成为操作系统的"一等公民"。<!-- confidence: EXTRACTED from Build 2026 -->

**核心价值**：
- MAF：提供 Agent/Workflow 职责分离的五层架构，原生支持 MCP + A2A 协议
- Windows Agent：操作系统层面原生支持 Agent，构建三层闭环生态（产品层+平台层+生态层）

## 2. 技术全景

### 2.1 MAF 五层架构

| 层级 | 组件 | 核心职责 |
|------|------|----------|
| L5 | Orchestration & Workflow Layer | 图结构工作流引擎，提供确定性、可检查点的多智能体编排 |
| L4 | Agent Layer (AIAgent) | 厂商中立的统一智能体抽象，管理指令、工具、会话状态和中间件管道 |
| L3 | Kernel Layer (Semantic Kernel) | 基础能力支撑层，提供插件、过滤器、提示词模板和向量存储集成 |
| L2 | Abstractions Interface (MEAI) | 标准抽象层，定义 IChatClient 和 IEmbeddingGenerator 等通用接口 |
| L1 | Service Connectors | 原生服务连接器：Azure OpenAI、OpenAI、Anthropic Claude、Amazon Bedrock、Google Gemini、Ollama、Microsoft Foundry |

### 2.2 Agent/Workflow 职责分离

| 维度 | 职责定位 | 实现方式 |
|------|----------|----------|
| Agent（智能体） | 推理与理解（Reasoning & Interpretation） | 利用 LLM 解释输入，自主决定调用哪些工具 |
| Workflow（工作流） | 执行策略与控制流（Execution Policy & Control Flow） | 通过代码级有向图定义执行边界、顺序、重试和超时 |

**本质变化**：SK 时代，Agent 的"智能"和"流程"混在一起；MAF 时代，Agent 只负责"想"，Workflow 只负责"走"。<!-- confidence: INFERRED -->

### 2.3 Windows Agent 原生支持架构

```
Windows 11 原生集成
├── AI 代理运行时环境
├── MXS 安全沙箱（操作系统级）
├── 原生 AI API
└── NVIDIA RTX Spark 硬件深度优化
```

### 2.4 关键组件

**MAF 核心组件**：
- AIAgent：厂商中立的统一智能体抽象
- WorkflowBuilder：声明式图编排（AddFanOutEdge、AddFanInBarrierEdge）
- Executor<TInput, TOutput>：工作流的基本计算单元
- DurableTask：长运行流程的持久化保障
- Agent Harness：生产模式内置（context compaction、FileMemory、Todo 等）

**Windows Agent 核心组件**：
- Scout：永远在线的 AI 助理<!-- confidence: UNVERIFIED -->
- MAI 模型家族：自研模型支撑
- Microsoft IQ：上下文层，打通企业数据

### 2.5 支持的编排模式

- Sequential（顺序）
- Concurrent（并发）
- Handoff（交接）
- Group Collaboration（群组协作）

## 3. 能力分析

### 3.1 MAF 核心能力

| 能力 | 说明 |
|------|------|
| 多语言支持 | Python 51.3%、C# 45.6%<!-- confidence: EXTRACTED -->，API 一致 |
| 多模型支持 | Azure OpenAI、OpenAI、Anthropic Claude、Amazon Bedrock、Google Gemini、Ollama |
| 中间件系统 | 请求/响应处理、异常处理、自定义管道 |
| 检查点持久化 | 每执行完一个 Executor 自动快照 |
| 水合恢复 | 崩溃后自动恢复到安全状态 |
| 流式处理 | 支持流式输出 |
| 人在循环 | 支持人工干预 |
| 时间旅行 | 支持状态回滚 |
| OpenTelemetry | 内置分布式追踪 |
| 声明式 Agent | YAML 定义 Agent |
| Agent Skills | 领域特定知识库 |

### 3.2 BUILD 2026 新能力

**Agent Harness**：
| 内置能力 | 功能描述 |
|----------|----------|
| Automatic context compaction | 监控 Token 使用，自动压缩历史 |
| FileMemoryProvider | 会话级持久化笔记 |
| TodoProvider | 多步骤任务追踪 |
| AgentModeProvider | plan vs execute 两种模式 |
| BackgroundAgentsProvider | 并行子 Agent 扇出编排 |
| ToolApprovalAgent | 敏感工具审批规则 |
| OpenTelemetryAgent | 自动链路追踪 |

**CodeAct**：
| 指标 | 传统方式 | CodeAct | 提升 |
|------|----------|---------|------|
| 时间 | 27.81s | 13.23s | -52.4% |
| Token 消耗 | 6,890 | 2,489 | -63.9% |

> ⚠️ 注意：CodeAct 性能数据来自第三方分析<!-- confidence: UNVERIFIED -->，未经官方 benchmark 验证。

**Foundry Hosted Agents**：
- scale-to-zero 计费
- 每会话 VM 隔离沙箱
- 持久化文件系统
- 内置 OpenTelemetry 追踪

### 3.3 Windows Agent 能力

| 能力 | 说明 |
|------|------|
| Scout | 永远在线的 AI 助理（媒体报道）<!-- confidence: UNVERIFIED --> |
| 智能路由 | 自动任务分配 |
| 会议管理 | 日历、邮件智能处理 |
| 多模型接入 | 自由选择 AI 模型 |
| 系统级集成 | 操作系统原生支持 |

### 3.4 局限性

**MAF**：
- 主要面向 .NET/Python 开发者
- 迁移成本（从 SK/AutoGen）
- 厂商锁定风险（Azure 生态）

**Windows Agent**：
- 目前主要面向企业用户
- 依赖微软生态
- 隐私顾虑（Always-on Agent）

## 4. 生态位

### 4.1 与同类框架对比

| 维度 | MAF | LangGraph | AutoGen (旧) |
|------|-----|-----------|--------------|
| 多语言 | ✅ .NET + Python | ❌ Python | ✅ Python |
| 生产就绪 | ✅ 1.0 GA | ⚠️ 部分 | ⚠️ 维护模式 |
| 协议集成 | MCP + A2A 原生 | ❌ | ❌ |
| 工作流持久化 | ✅ DurableTask | ⚠️ 有限 | ❌ |
| 厂商中立 | ⚠️ Azure 优先 | ✅ | ✅ |

### 4.2 适用场景

**MAF**：
- 企业级多 Agent 系统
- 需要长运行流程的编排
- .NET 团队的 AI 转型
- 需要 MCP/A2A 协议集成的场景

**Windows Agent**：
- 企业生产力自动化
- 需要操作系统级集成的场景
- 多模型自由选择的场景

### 4.3 三层闭环生态

```
产品层（Scout Agent）
    ↓
平台层（MAI + GitHub Copilot + Microsoft IQ）
    ↓
生态层（多模型 + 多代理 + 多框架）
```

## 5. 信息来源

| 来源 | 类型 | 置信度 | 主要贡献 |
|------|------|--------|----------|
| [[2026-07-01-microsoft-agent-framework-github-readme]] | Tier 1 | EXTRACTED | 官方 README、2,435 Commits、97 Releases |
| [[2026-07-01-maf-architecture-analysis]] | Tier 2 | EXTRACTED | 五层架构、API 对比 |
| [[2026-07-01-windows-agent-strategy]] | Tier 2 | INFERRED | 三层闭环战略、Windows 原生集成 |

## 6. 待验证问题

1. MAF 的 GitHub Stars 数量（第三方估算约 75,000+）
2. Windows Agent Framework 具体发布时间线
3. Scout Agent 的企业定价
4. MAF 与非 Azure 模型的兼容程度
5. CodeAct 性能 benchmark 原始数据

## 7. 版本历史

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| v1.0 | 2026-07-01 | 初始版本 |
| v1.1 | 2026-07-01 | 证伪修正：添加置信度标注、降级未验证声明 |
