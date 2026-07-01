---
tags: [主题, Agent集成]
created: 2026-06-27
updated: 2026-07-01
sources:
  - wiki/sources/2026-06-27-browser-use-docs-index.md
  - wiki/sources/2026-06-27-browser-use-research-report.md
  - wiki/sources/2026-06-28-mcp-anthropic-announcement.md
  - wiki/sources/2026-06-28-mcp-official-docs-home.md
  - wiki/sources/2026-06-28-mcp-servers-github.md
  - wiki/sources/2026-06-28-mcp-architecture.md
  - wiki/sources/2026-06-28-mcp-specification.md
  - wiki/sources/2026-06-28-mcp-python-sdk.md
  - wiki/sources/2026-06-28-mcp-typescript-sdk.md
  - wiki/sources/2026-06-28-mcp-claude-desktop-integration.md
  - wiki/sources/2026-06-28-anthropic-build-with-claude-overview.md
  - wiki/sources/2026-06-28-anthropic-tool-use-overview.md
  - wiki/sources/2026-06-28-anthropic-tool-use-how-it-works.md
  - wiki/sources/2026-06-28-anthropic-tool-reference.md
  - wiki/sources/2026-06-28-anthropic-define-tools-guide.md
  - wiki/sources/2026-06-28-anthropic-handle-tool-calls-guide.md
  - wiki/sources/2026-06-28-anthropic-server-tools-guide.md
  - wiki/sources/2026-06-28-anthropic-parallel-tool-use-guide.md
  - wiki/sources/2026-06-28-anthropic-strict-tool-use-guide.md
  - wiki/sources/2026-06-28-anthropic-writing-tools-for-agents.md
  - wiki/sources/2026-06-28-openai-function-calling-intro.md
  - wiki/sources/2026-06-28-openai-function-calling-best-practices.md
  - wiki/sources/2026-06-28-openai-function-calling-2.0-updates.md
  - wiki/sources/2026-06-28-langgraph-multi-agent-systems.md
  - wiki/sources/2026-06-28-microsoft-autogen-overview.md
  - wiki/sources/2026-06-28-multi-agent-architecture-analysis.md
  - wiki/sources/2026-06-28-agent-error-recovery-strategies.md
  - wiki/sources/2026-06-28-langgraph-checkpoint-persistence.md
  - wiki/sources/2026-06-29-copilotkit-github-readme.md
  - wiki/sources/2026-06-29-ag-ui-protocol-readme.md
  - wiki/sources/2026-06-29-a2a-protocol-github.md
  - wiki/sources/2026-06-29-a2a-protocol-homepage.md
  - wiki/sources/2026-06-29-a2a-python-sdk.md
  - wiki/sources/2026-06-29-a2a-key-concepts.md
  - wiki/sources/2026-06-29-openclaw-github-readme.md
  - wiki/sources/2026-06-29-openclaw-gateway-architecture.md
  - wiki/sources/2026-06-29-openclaw-tools-overview.md
  - wiki/sources/2026-06-29-openclaw-skills-system.md
  - wiki/sources/2026-06-29-openclaw-browser-control.md
  - wiki/sources/2026-06-29-openclaw-sandboxing-security.md
  - wiki/sources/2026-06-30-codebase-memory-mcp-github-readme.md
  - wiki/sources/2026-06-30-codebase-memory-mcp-architecture-analysis.md
  - wiki/sources/2026-06-30-codebase-memory-mcp-vs-others-comparison.md
  - wiki/sources/2026-07-01-github-mcp-server-readme.md
  - wiki/sources/2026-07-01-github-mcp-server-remote-docs.md
  - wiki/sources/2026-07-01-github-mcp-server-architecture-analysis.md
  - wiki/sources/2026-07-01-openai-agents-sdk-github-readme.md
  - wiki/sources/2026-07-01-openai-agents-sdk-major-update.md
  - wiki/sources/2026-07-01-openai-agents-sdk-runtime-architecture.md
  - wiki/sources/2026-07-01-langgraph-vs-openai-agents-vs-google-adk.md
  - wiki/sources/2026-07-01-deerflow-github-readme.md
  - wiki/sources/2026-07-01-headroom-github-readme.md
  - wiki/sources/2026-07-01-headroom-technical-analysis.md
  - wiki/sources/2026-07-01-headroom-practical-guide.md
  - wiki/sources/2026-07-01-context-mode-github-readme.md
  - wiki/sources/2026-07-01-context-mode-98-percent-compression-tech-analysis.md
  - wiki/sources/2026-07-01-context-mode-claude-code-usage-guide.md
  - wiki/sources/2026-07-01-trycua-cua-github-readme.md
  - wiki/sources/2026-07-01-cua-architecture-docs.md
  - wiki/sources/2026-07-01-cua-driver-technical-docs.md
---

# Agent 集成层

> AI Agent 与外部工具和系统集成的技术与协议

## 核心观点

Agent 集成层负责将 AI Agent 与外部工具、系统、资源连接起来，实现：
- **工具调用**：标准化、可扩展的工具使用方式
- **状态管理**：跨会话的状态保持和共享
- **多工具协同**：多个工具的协调使用
- **错误恢复**：异常处理和自动重试

## 关键概念

### Tool Calling核心
- [[Tool Use]] — Anthropic的工具调用机制（新增）
- [[Function Calling]] — OpenAI的函数调用机制（新增）
- [[MCP]] — 标准化工具调用协议（核心）
- [[Superpowers]] — AI Agent技能框架，将开发方法论固化为Skills（约21万 Stars）
- [[GitHub-MCP-Server]] — GitHub 官方 MCP Server，22 个工具集，远程+本地双模式（2026-07-01新增）

### 上下文管理（2026-07-01新增）
- [[Headroom]] — AI Agent 上下文压缩层，60-95% Token 节省，可逆压缩（CCR），24,534+ Stars
- [[Context-mode]] — MCP 上下文管理框架，98% Token 压缩，Session Continuity，16 平台支持，15,616+ Stars
- [[上下文压缩]] — 减少 AI Agent 上下文窗口占用，提升 Token 利用效率
- [[Think in Code]] — LLM 从数据处理器转变为代码生成器
- [[CCR]] — Compressed Context Retrieval，可逆压缩机制
- [[Session Continuity]] — 会话连续性，压缩后状态恢复

### 用户交互协议
- [[CopilotKit]] — AI Agent 前端基础设施（新增）
- [[AG-UI Protocol]] — Agent-User Interaction Protocol（新增）

### Agent 通信协议（2026-06-29新增）
- [[A2A]] — Agent-to-Agent 通信协议，Google 发布，与 MCP 互补

### Tool Calling机制
- [[Agentic Loop]] — Client Tools的循环调用机制（新增）
- [[Client Tools]] — 应用端执行的工具类型（新增）
- [[Server Tools]] — Anthropic服务器端执行的工具类型（新增）
- [[Parallel Tool Use]] — 并行调用多个工具的能力（新增）
- [[Strict Tool Use]] — Grammar-constrained sampling保证Schema一致性（新增）

### Multi-Agent协作
- [[Multi-Agent协作]] — 多Agent协同工作的系统架构（新增）
- [[Handoffs]] — Agent间任务传递机制（新增）
- [[Checkpoint]] — LangGraph的状态持久化机制（新增）
- [[错误恢复]] — Agent系统的错误恢复策略（新增）

### Agent开发框架
- [[Microsoft-Agent-Framework]] — 微软统一 Semantic Kernel + AutoGen 的企业级 Agent 框架，MAF 1.0 GA（2026-07-01新增）
- [[OpenAI-Agents-SDK]] — OpenAI 官方轻量级多 Agent 框架，极简设计，原生 MCP + 沙箱（2026-07-01新增）
- [[Semantic-Kernel]] — MAF 的基础能力支撑层（待创建）
- [[AutoGen]] — MAF 的前身之一，已进入维护模式

### Agent核心
- [[Computer Use]] — 桌面环境控制能力（已有）
- [[Agent]] — 自主执行和决策的智能代理
- [[LLM]] — 任务理解和规划的智能核心
- [[browser-use]] — 浏览器控制的 Agent 集成示例
- [[OpenClaw]] — 全栈个人 AI 助手运行时（20万+ Stars），Gateway 架构 + Skills + 沙箱
- [[codebase-memory-mcp]] — 高性能代码智能 MCP Server，纯 C 实现，知识图谱索引
- [[GitHub-MCP-Server]] — GitHub 官方 MCP Server，22 个工具集，远程+本地双模式（2026-07-01新增）
- [[Gemini 3.5 Flash]] — Google轻量级模型，原生集成Computer Use能力
- [[CUA]] — Computer-Use Agent 基础设施，后台桌面控制，跨平台沙箱（已更新）
- [[no-foreground-contract]] — 后台桌面控制核心概念（2026-07-01新增）

## MCP 协议（完整体系）

MCP（Model Context Protocol）是 Agent 集成层的核心协议：

### 架构组成
- **MCP Host**：AI应用（Claude Desktop、VS Code）
- **MCP Client**：Host内维护连接的组件
- **MCP Server**：提供上下文和能力的程序

### 核心原语
- **Tools**：AI可调用的可执行函数
- **Resources**：提供上下文信息的数据源
- **Prompts**：可重用的交互模板

### 多语言SDK
支持10种语言：C#、Go、Java、Kotlin、PHP、Python、Ruby、Rust、Swift、TypeScript

### 预构建Servers
- Google Drive、Slack、GitHub、Git、Postgres、Puppeteer
- Everything、Fetch、Filesystem、Memory

### 生态系统支持
- AI应用：Claude Desktop、ChatGPT、VS Code、Cursor
- 开发工具：Zed、Replit、Codeium、Sourcegraph
- 早期采用者：Block、Apollo

## Computer Use（桌面控制）

Computer Use 是 Agent 集成层的桌面控制能力：

### 实现架构
- Docker容器化（X11 + VNC + Streamlit）
- macOS本地（pyautogui + sandbox-exec）
- Agent Loop（Claude API循环调用）

### 关键优化
- 点击精度（分辨率缩放、坐标映射）
- Prompt Caching + Image Pruning
- Server-side Autocompaction

### 安全风险
- Prompt Injection（Browser Use场景风险放大）
- VM隔离必要性
- Constitutional Classifiers防御

## browser-use 的 Agent 集成

browser-use 展示了 Agent 集成层的浏览器控制实现：
- **工具扩展**：通过 @tools.action 装饰器添加自定义工具
- **状态管理**：支持浏览器配置文件、持久文件系统
- **MCP 集成**：可作为 MCP Server 使用

## 素材汇总表（2026-06-28新增17篇，2026-06-29新增2篇）

### MCP Protocol系列（8篇）
| 素材 | 核心内容 |
|------|----------|
| [[MCP 发布公告]] | MCP正式发布,解决AI数据隔离问题 |
| [[MCP 官方文档索引]] | "AI应用的USB-C接口"类比 |
| [[MCP Servers GitHub]] | 参考实现集合（10种SDK） |
| [[MCP 架构概览]] | Client-server架构+双层设计 |
| [[MCP 协议规范]] | JSON-RPC 2.0+安全原则 |
| [[MCP Python SDK]] | FastMCP简化开发 |
| [[MCP TypeScript SDK]] | v2 pre-alpha,分包架构 |
| [[MCP Claude Desktop集成]] | Filesystem Server配置教程 |

### CopilotKit & AG-UI Protocol系列（2篇，2026-06-29新增）
| 素材 | 核心内容 |
|------|----------|
| [[CopilotKit GitHub README]] | AI Agent 前端基础设施，33k+ Stars |
| [[AG-UI Protocol GitHub README]] | Agent-User Interaction Protocol，被主流厂商采纳 |

### A2A Protocol系列（4篇，2026-06-29新增）
| 素材 | 核心内容 |
|------|----------|
| [[A2A Protocol GitHub Official Repository]] | Google 官方仓库，Apache 2.0，v0.3.0 |
| [[A2A Protocol Official Documentation Site]] | 官方文档，与 MCP 互补定位 |
| [[A2A Python SDK Official Repository]] | 官方 Python SDK，v1.1.0，A2A 1.0 |
| [[A2A Protocol Core Concepts]] | 核心概念和组件详细定义 |

### OpenClaw系列（6篇，2026-06-29新增）
| 素材 | 核心内容 |
|------|----------|
| [[OpenClaw GitHub README]] | 全栈个人 AI 助手运行时，20万+ Stars |
| [[OpenClaw Gateway Architecture]] | Gateway 中心化架构，WebSocket 协议 |
| [[OpenClaw Tools Overview]] | 10+ 工具类别，三层扩展体系 |
| [[OpenClaw Skills System]] | AgentSkills 规范，6 级加载优先级 |
| [[OpenClaw Browser Control]] | 内置 CDP 浏览器控制，双模式 |
| [[OpenClaw Sandboxing & Security]] | 3 种沙箱后端，精细权限控制 |

### codebase-memory-mcp 系列（3篇，2026-06-30新增）
| 素材 | 核心内容 |
|------|----------|
| [[codebase-memory-mcp GitHub README]] | 高性能代码智能 MCP Server，纯 C 实现 |
| [[codebase-memory-mcp 技术架构深度分析]] | 三层架构、知识图谱、14+ MCP 工具 |
| [[三款代码智能工具对比]] | codebase-memory-mcp vs GitNexus vs codegraph |

### GitHub MCP Server 系列（3篇，2026-07-01新增）
| 素材 | 核心内容 |
|------|----------|
| [[GitHub MCP Server 官方 README]] | GitHub 官方 MCP Server，远程+本地双模式 |
| [[GitHub MCP Server 远程服务器文档]] | 22 个工具集详解、配置选项、URL 路径模式 |
| [[GitHub MCP Server 架构与生态分析]] | 战略定位、架构设计、生态影响、发展趋势 |

### OpenAI Agents SDK 系列（4篇，2026-07-01新增）
| 素材 | 核心内容 |
|------|----------|
| [[OpenAI Agents SDK GitHub README]] | 官方项目介绍，九大核心概念 |
| [[OpenAI Agents SDK 重大进化]] | 2026.4.15 四大新能力详解，生产级基础设施 |
| [[OpenAI Agents SDK 运行时骨架图]] | 七层架构解析，功能地图，平台边界 |
| [[LangGraph vs OpenAI Agents SDK vs Google ADK]] | 三大框架深度对比，选型指南 |

### Anthropic Tool Use系列（9篇）
| 素材 | 核心内容 |
|------|----------|
| [[Anthropic Tool Use Overview]] | Tool Use总览、Client/Server Tools分类、定价机制 |
| [[Anthropic How Tool Use Works]] | Tool-Use Contract、三类工具边界、Agentic Loop、适用场景 |
| [[Anthropic Tool Reference]] | 工具目录大全、版本管理、可选属性参考 |
| [[Anthropic Define Tools Guide]] | Tool Schema定义、最佳实践、tool_choice控制 |
| [[Anthropic Handle Tool Calls Guide]] | tool_use/tool_result格式、错误处理、格式禁忌 |
| [[Anthropic Server Tools Guide]] | server_tool_use block、pause_turn续传、ZDR、域过滤 |
| [[Anthropic Parallel Tool Use Guide]] | 并行调用机制、消息历史格式、性能优化 |
| [[Anthropic Strict Tool Use Guide]] | Grammar-constrained sampling、HIPAA合规、适用场景 |
| [[Writing Effective Tools for Agents]] | Agent工具设计原则、评估方法、Namespacing |

### OpenAI Function Calling系列（3篇）
| 素材 | 核心内容 |
|------|----------|
| [[OpenAI Function Calling Intro]] | 官方基础介绍、五大用途、实现流程 |
| [[OpenAI Function Calling Best Practices]] | 函数定义最佳实践、参数验证、错误处理 |
| [[OpenAI Function Calling 2.0 Updates]] | 两大核心应用（数据获取、执行动作）、全新最佳实践 |

### Multi-Agent协作系列（5篇）
| 素材 | 核心内容 |
|------|----------|
| [[LangGraph Multi-Agent Systems]] | LangGraph官方文档、五大协作架构、Handoffs机制 |
| [[Microsoft AutoGen Overview]] | AutoGen v0.4、异步事件驱动、六大特性 |
| [[Multi-Agent Architecture Analysis]] | 六大框架对比分析（LangGraph、AutoGen等） |
| [[Agent Error Recovery Strategies]] | 错误分类、多层级防御、五大恢复策略 |
| [[LangGraph Checkpoint Persistence]] | Checkpoint机制、四大能力（记忆、容错、时间旅行） |

### Computer Use系列（已有）
| 素材 | 核心内容 |
|------|----------|
| [[Anthropic Academy门户]] | Computer Use开发者文档汇总 |

### Headroom 系列（3篇，2026-07-01新增）
| 素材 | 核心内容 |
|------|----------|
| [[Headroom GitHub README]] | 四种接入模式、六种压缩器、CCR 可逆压缩 |
| [[Headroom 技术分析]] | 解决"上下文内容质量"问题而非"窗口大小"问题 |
| [[Headroom 实战指南]] | 月 LLM API 支出超 $100 的开发者必装 |

### Context-mode 系列（3篇，2026-07-01新增）
| 素材 | 核心内容 |
|------|----------|
| [[Context-mode GitHub README]] | 11 MCP Tools、16 平台覆盖、企业采用 18+ |
| [[Context-mode 技术分析]] | 四项机制详解、与 Anthropic 原则关联 |
| [[Claude Code 使用指南]] | 6 个避坑指南、statusLine 配置 |

### trycua/cua 系列（3篇，2026-07-01新增）
| 素材 | 核心内容 |
|------|----------|
| [[trycua/cua GitHub README]] | 四大组件完整说明 |
| [[CUA Architecture Docs]] | Sandbox SDK 统一 API、Agent SDK |
| [[Cua Driver Technical Docs]] | no-foreground contract、三模态捕获 |

### 技术报告系列（3篇，2026-07-01新增）
| 素材 | 核心内容 |
|------|----------|
| [[Headroom 技术报告 v1.0]] | 综合分析 Headroom 核心架构与生态位 |
| [[Context-mode 技术报告 v1.0]] | 综合分析 Context-mode 四项机制与平台覆盖 |
| [[trycua/cua 技术报告 v1.0]] | 综合分析 CUA 四大组件与 MCP 集成 |

## 相关页面

### Tool Calling实体页
- [[Tool Use]]（实体页,新增）
- [[Function Calling]]（实体页,新增）
- [[Agentic Loop]]（实体页,新增）
- [[Client Tools]]（实体页,新增）
- [[Server Tools]]（实体页,新增）
- [[Parallel Tool Use]]（实体页,新增）
- [[Strict Tool Use]]（实体页,新增）

### Multi-Agent实体页
- [[Multi-Agent协作]]（实体页,新增）
- [[Handoffs]]（实体页,待创建）
- [[Checkpoint]]（实体页,待创建）
- [[错误恢复]]（实体页,待创建）

### 用户交互协议实体页（2026-06-29新增）
- [[CopilotKit]]（实体页,新增）
- [[AG-UI Protocol]]（实体页,新增）

### Agent 通信协议实体页（2026-06-29新增）
- [[A2A]]（实体页,新增）

### 已有实体页
- [[MCP]]（实体页,已更新）
- [[Computer Use]]（实体页,已有）
- [[Agent]]（实体页）
- [[LLM]]（实体页）
- [[browser-use]]（实体页）
- [[OpenClaw]]（实体页,新增）
- [[Goose]]（实体页）
- [[codebase-memory-mcp]]（实体页,新增）
- [[GitHub-MCP-Server]]（实体页,2026-07-01新增）
- [[OpenAI-Agents-SDK]]（实体页,2026-07-01新增）
- [[Superpowers]]（实体页,新增）
- [[Gemini 3.5 Flash]]（实体页,新增）
- [[Headroom]]（实体页,2026-07-01新增）
- [[Context-mode]]（实体页,2026-07-01新增）
- [[上下文压缩]]（实体页,2026-07-01新增）
- [[Think in Code]]（实体页,2026-07-01新增）
- [[CCR]]（实体页,2026-07-01新增）
- [[Session Continuity]]（实体页,2026-07-01新增）
- [[CUA]]（实体页,已更新）
- [[no-foreground-contract]]（实体页,2026-07-01待创建）