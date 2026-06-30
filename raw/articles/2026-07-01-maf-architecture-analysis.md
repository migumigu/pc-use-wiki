---
source_id: auto-2026-07-01-maf-architecture-analysis
title: Microsoft Agent Framework 1.0 正式接棒，.NET AI 进入 Agent-Native 时代
url: https://cloud.tencent.com/developer/article/2694582
source_type: tech_blog
tier: 2
control_object: agent_integration
tech_layer: tool_implementation
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# Microsoft Agent Framework 1.0 技术深度分析

## 发布背景

2026 年 4 月 3 日，微软正式发布了 Microsoft Agent Framework (MAF) 1.0 GA 版本。这标志着 AutoGen 和 Semantic Kernel 这两个累计收获 75,000+ GitHub Stars 的项目正式完成历史使命，将其精华融合为一个统一、生产就绪、跨语言（.NET + Python）的企业级 Agent 开发平台。

## 五层架构设计

| 层级 | 组件 | 核心职责 |
|------|------|----------|
| L5 | Orchestration & Workflow Layer | 图结构工作流引擎，提供确定性、可检查点的多智能体编排 |
| L4 | Agent Layer (AIAgent) | 厂商中立的统一智能体抽象，管理指令、工具、会话状态和中间件管道 |
| L3 | Kernel Layer (Semantic Kernel) | 基础能力支撑层，提供插件、过滤器、提示词模板和向量存储集成 |
| L2 | Abstractions Interface (MEAI) | 标准抽象层，定义 IChatClient 和 IEmbeddingGenerator 等通用接口 |
| L1 | Service Connectors | 原生服务连接器：Azure OpenAI、OpenAI、Anthropic Claude、Amazon Bedrock、Google Gemini、Ollama、Microsoft Foundry |

## 核心理念跃迁

### 从 "Kernel/Plugin" 到 "Agent/Workflow"

**职责分离设计**：

| 维度 | 职责定位 | 实现方式 |
|------|----------|----------|
| Agent（智能体） | 推理与理解 | 利用 LLM 解释输入，自主决定调用哪些工具 |
| Workflow（工作流） | 执行策略与控制流 | 通过 C# 代码级有向图定义执行边界、顺序、重试和超时 |

**本质变化**：SK 时代，Agent 的"智能"和"流程"混在一起；MAF 时代，Agent 只负责"想"，Workflow 只负责"走"。

## API 映射与代码对比

### 智能体创建与工具关联

**Before: Semantic Kernel**：
```csharp
Kernel kernel = Kernel.CreateBuilder()
    .AddAzureOpenAIChatCompletion(deploymentName, endpoint, apiKey)
    .Build();
kernel.Plugins.AddFromType<SupportTools>();
ChatCompletionAgent agent = new()
{
    Name = "SupportAssistant",
    Instructions = "You are a helpful support agent.",
    Kernel = kernel
};
```

**After: Microsoft Agent Framework 1.0**：
```csharp
IChatClient chatClient = new AzureOpenAIClient(new Uri(endpoint), new DefaultAzureCredential())
    .GetChatClient(deploymentName)
    .AsIChatClient();
AIAgent agent = chatClient.AsAIAgent(
    name: "SupportAssistant",
    instructions: "You are a helpful support agent.",
    tools: [
        AIFunctionFactory.Create(SupportTools.SearchKnowledgeBase),
        AIFunctionFactory.Create(SupportTools.CreateTicket)
    ]
);
```

## 图编排与持久化

### WorkflowBuilder：声明式图编排

- AddFanOutEdge：将上游输出并发广播给多个下游 Executor（并行执行）
- AddFanInBarrierEdge：创建栅栏，挂起后续流直到所有并行分支完成
- AsAIAgent()：将底层 AIAgent 无缝包装为图中的 Executor

### DurableTask：长运行流程的持久化保障

- 自动检查点（Checkpointing）
- 水合恢复（Hydration）
- Durable Task Scheduler (DTS)

## 开放协议原生集成

### MCP（Model Context Protocol）

MAF 1.0 提供原生 MCP 客户端集成，使智能体能够动态发现和调用外部工具。

### A2A 1.0（Agent-to-Agent Protocol）

interop comes for free —— 远程 A2A Agent 在代码中就是普通的 AIAgent。

## BUILD 2026 新能力

### Agent Harness：生产模式内置

| 内置能力 | 功能描述 |
|----------|----------|
| Automatic context compaction | 监控 Token 使用，自动压缩历史 |
| FileMemoryProvider | 会话级持久化笔记 |
| TodoProvider | 多步骤任务追踪 |
| AgentModeProvider | 支持 "plan" vs "execute" 两种操作模式 |
| BackgroundAgentsProvider | 并行子 Agent 的扇出编排 |
| ToolApprovalAgent | 敏感工具调用的审批规则 |
| OpenTelemetryAgent | 自动 Semantic Conventions 链路追踪 |

### CodeAct：更少的模型轮次，更低的延迟

| 指标 | 传统方式 | CodeAct | 提升 |
|------|----------|---------|------|
| 时间 | 27.81s | 13.23s | -52.4% |
| Token 消耗 | 6,890 | 2,489 | -63.9% |

### Foundry Hosted Agents

scale-to-zero 计费、每会话 VM 隔离沙箱、持久化文件系统、内置 OpenTelemetry 追踪。

### 多智能体 Handoff 编排 1.0

专为"路由 → 专家 → 可能的回退/转接"场景设计。
