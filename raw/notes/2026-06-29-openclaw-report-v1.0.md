---
report_id: 2026-06-29-openclaw-v1.0
title: OpenClaw 技术分析报告 v1.0
version: v1.0
created_date: 2026-06-29
updated_date: 2026-06-29
source_count: 6
source_breakdown: Tier1: 6, Tier2: 0, Tier3: 0
---

# OpenClaw 技术分析报告 v1.0

> 生成日期：2026-06-29
> 来源：6 个（Tier1: 6, Tier2: 0, Tier3: 0）
> 报告版本：v1.0

## 1. 执行摘要

OpenClaw 是一个现象级的开源个人 AI 助手框架，由 Peter Steinberger 和社区开发，GitHub 上拥有 33万+ Stars（根据第三方报道），58,000+ 次提交。它定位为"在你自己设备上运行的个人 AI 助手"，支持 25+ 消息平台（WhatsApp、Telegram、Slack、Discord 等），提供完整的 Agent 运行时环境。

**核心价值**：
- **全栈 Agent 运行时**：从 Gateway 架构到工具系统、Skills 体系、沙箱安全，提供完整的 Agent 基础设施
- **多平台消息接入**：统一的消息接入层，支持 25+ 平台
- **浏览器控制**：内置基于 CDP 的浏览器控制模块，支持独立 profile 和用户真实浏览器两种模式
- **Skills 生态**：遵循 AgentSkills 规范的技能系统，支持 ClawHub 技能市场
- **沙箱安全**：Docker/SSH/OpenShell 三种沙箱后端，精细的权限控制

**技术深度**：OpenClaw 不是简单的 ChatGPT wrapper，而是一个完整的 Agent 操作系统。它的 Gateway 架构、多 Agent 路由、工具策略层、Skills 体系、沙箱机制构成了一个层次分明的 Agent 基础设施栈。

## 2. 技术全景

### 2.1 核心架构

OpenClaw 采用 **Gateway 中心化架构**：

```
┌─────────────────────────────────────────────────────────┐
│                     OpenClaw Gateway                     │
│  (Single long-lived daemon, WebSocket API on :18789)    │
├──────────┬──────────┬───────────┬───────────┬──────────┤
│ Messaging│  Tools   │  Skills   │  Sandbox  │  Nodes   │
│ Surfaces │  System  │  System   │  Engine   │ Manager  │
│ (25+ pl) │ (10 cat) │ (6 lvl)  │ (3 back)  │ (5 pl)   │
└──────────┴──────────┴───────────┴───────────┴──────────┘
     ▲          ▲          ▲           ▲          ▲
     │          │          │           │          │
┌────┴────┐ ┌───┴────┐ ┌───┴────┐ ┌────┴────┐ ┌───┴────┐
│ Clients │ │ Browser│ │ClawHub │ │ Docker │ │  iOS/  │
│ (CLI/UI)│ │ Relay  │ │ Skills │ │ /SSH/  │ │ Android│
└─────────┘ └────────┘ └────────┘ │OpenShell│ └────────┘
                                   └─────────┘
```

**关键组件**：
1. **Gateway（守护进程）**：单一长生命周期进程，拥有所有消息平台连接，提供 WebSocket API
2. **Clients（客户端）**：macOS 菜单栏 app、CLI、Web UI、自动化脚本，通过 WS 连接 Gateway
3. **Nodes（节点）**：macOS/iOS/Android/无头设备，通过 WS 连接，提供设备能力（摄像头、屏幕、语音等）
4. **Tools 系统**：10+ 工具类别，精细的策略控制
5. **Skills 体系**：6 级加载优先级，遵循 AgentSkills 规范
6. **沙箱引擎**：Docker/SSH/OpenShell 三种后端

### 2.2 技术栈分层

#### 系统基础层
- **运行时**：Node.js 24+（推荐）或 Node 22.19+
- **开发语言**：TypeScript 91.7%、Swift 3.3%、JavaScript 2.7%、Kotlin 1.0%
- **包管理**：pnpm workspace 单体仓库
- **进程管理**：launchd（macOS）/ systemd（Linux）用户服务

#### 协议接口层
- **Gateway 协议**：WebSocket + JSON，请求/响应/事件模型
  - 连接握手：`connect` 帧，设备身份验证，nonce 签名
  - 请求：`{type:"req", id, method, params}` → `{type:"res", id, ok, payload|error}`
  - 事件：`{type:"event", event, payload, seq?, stateVersion?}`
  - 幂等性：副作用方法（send, agent）需要幂等键
- **CDP 协议**：浏览器控制使用 Chrome DevTools Protocol
- **MCP 集成**：支持 Chrome MCP 等 MCP Server 集成
- **AgentSkills 规范**：Skills 遵循 agentskills.io 规范

#### 工具实现层
- **浏览器控制**：独立 profile 隔离 + CDP 直连两种模式
- **文件操作**：read/write/edit/apply_patch
- **命令执行**：exec/process/code_execution
- **网络工具**：web_search/web_fetch/x_search
- **媒体处理**：image/image_generate/tts/video_generate
- **会话管理**：sessions_*/subagents/agents_list
- **自动化**：cron/heartbeat_respond

#### Agent 集成层
- **多 Agent 路由**：按渠道/账户/联系人路由到独立 Agent 工作区
- **工具策略层**：全局配置 → 每 Agent 配置 → 渠道策略 → 提供商限制 → 沙箱规则 → 插件可用性
- **Skills 系统**：6 级加载优先级，环境/配置门控，允许列表控制
- **沙箱安全**：3 种后端（Docker/SSH/OpenShell），3 种模式（off/non-main/all），3 种作用域（agent/session/shared）
- **插件系统**：可扩展工具、技能、渠道、模型提供商等

### 2.3 关键组件

**Gateway（核心守护进程）**
- 维护所有消息平台连接（WhatsApp/Telegram/Slack/Discord 等 25+）
- 暴露类型化 WebSocket API
- 验证入站帧（JSON Schema）
- 发出事件：agent、chat、presence、health、heartbeat、cron

**Browser Relay（浏览器中继）**
- 独立的 openclaw 浏览器 profile（橙色主题）
- 支持三种模式：本地托管、扩展中继、远程 CDP
- SSRF 防护
- 标签页清理（空闲超时、每会话上限）
- 视觉模型截图描述（文本模型降级方案）

**Skills Engine（技能引擎）**
- 6 级加载优先级（workspace → project → personal → managed → bundled → extra）
- 环境门控（OS、二进制、环境变量、配置）
- Agent 允许列表
- Skill Workshop（提案队列，人工审核）
- ClawHub 集成（技能市场）

**Sandbox Engine（沙箱引擎）**
- Docker 后端（默认）：本地容器隔离
- SSH 后端：远程机器隔离
- OpenShell 后端：托管沙箱，支持 mirror/remote 两种工作区模式
- 工作区访问控制：none/ro/rw
- 浏览器沙箱（Docker 专用）

## 3. 能力分析

### 3.1 支持的能力

**消息平台接入（25+）**
- WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、Feishu、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、WeChat、QQ、WebChat、macOS、iOS/Android

**浏览器控制**
- ✅ 独立隔离的浏览器 profile（不影响个人浏览器）
- ✅ 标签页管理（列表/打开/聚焦/关闭）
- ✅ Agent 操作（点击/输入/拖拽/选择）
- ✅ 页面快照、截图、PDF
- ✅ 多 profile 支持（openclaw/work/remote/user/brave）
- ✅ 无头模式
- ✅ SSRF 防护
- ✅ Chrome MCP 用户真实浏览器附加模式
- ✅ 视觉模型截图描述（文本模型降级）
- ✅ browser-automation 技能（多步自动化最佳实践）

**工具系统（10+ 类别）**
- Runtime：exec、process、code_execution
- Files：read、write、edit、apply_patch
- Web：web_search、x_search、web_fetch
- Browser：browser
- Messaging：message
- Sessions：sessions_*、subagents、agents_list
- Automation：cron、heartbeat_respond
- Gateway & Nodes：gateway、nodes
- Media：image、image_generate、tts、music_generate、video_generate
- Tool Search：tool_search_code、tool_search、tool_describe

**Skills 生态**
- ✅ SKILL.md 格式（YAML frontmatter + Markdown 正文）
- ✅ 6 级加载优先级
- ✅ 环境门控（OS、二进制、环境变量、配置）
- ✅ Agent 允许列表
- ✅ 技能市场（ClawHub）
- ✅ Skill Workshop（提案 + 人工审核）
- ✅ 遵循 AgentSkills 规范

**沙箱安全**
- ✅ 3 种后端：Docker / SSH / OpenShell
- ✅ 3 种模式：off / non-main / all
- ✅ 3 种作用域：agent / session / shared
- ✅ 工作区访问控制：none / ro / rw
- ✅ 浏览器沙箱（Docker 后端）
- ✅ Elevated exec（特权提升路径）
- ✅ 工具策略层（多层过滤）

**多 Agent 支持**
- ✅ 按渠道/账户/联系人路由到独立 Agent
- ✅ 每个 Agent 独立工作区
- ✅ 每 Agent 工具策略
- ✅ 每 Agent Skills 允许列表
- ✅ 子 Agent（sub-agents）
- ✅ ACP Agent 集成

**跨平台支持**
- ✅ macOS（菜单栏 app + Voice Wake + Canvas）
- ✅ Windows（Windows Hub 伴侣 app）
- ✅ Linux（CLI + Gateway 守护进程）
- ✅ iOS（节点 app：语音、摄像头、屏幕、Canvas）
- ✅ Android（节点 app：语音、摄像头、屏幕、Canvas、设备命令）

### 3.2 局限性

**架构复杂性**
- 单体 Gateway 架构，单点故障风险
- 58,000+ 提交的大型代码库，学习曲线陡峭
- 多层工具策略，配置可能复杂

**浏览器控制限制**
- 需要 Chromium 系浏览器（Chrome/Brave/Edge/Chromium）
- 独立 profile 无登录状态，需要重新登录
- 用户 profile 模式需要 Chrome MCP 扩展
- 登录/2FA/验证码 需要人工干预
- 摄像头/麦克风权限需要人工批准

**沙箱限制**
- Docker 沙箱需要本地 Docker 守护进程
- SSH/OpenShell 沙箱不支持浏览器沙箱
- Docker-out-of-Docker 部署有路径映射约束
- 不是完美的安全边界（官方明确说明）

**Skills 生态**
- 第三方技能安全风险（官方警告：视为不可信代码）
- ClawHub 技能质量参差不齐
- 技能审核依赖人工（Skill Workshop）

### 3.3 已知问题

（本报告基于官方文档，未深入 GitHub Issues 调研，待验证）

## 4. 生态位

### 4.1 与同类工具对比

| 维度 | OpenClaw | Claude Desktop | Open Interpreter | browser-use |
|------|----------|----------------|-----------------|-------------|
| **定位** | 全栈个人 AI 助手运行时 | 官方桌面客户端 + MCP 平台 | 代码执行 Agent | 浏览器自动化 Agent |
| **消息平台** | 25+ 平台 | 仅桌面 GUI | CLI + 桌面 | 仅浏览器内 |
| **浏览器控制** | ✅ 内置 CDP + MCP | ❌ 需 MCP Server | ⚠️ 有限 | ✅ 核心能力 |
| **工具系统** | 10+ 类别，策略精细 | MCP 生态 | 基础 + 插件 | 浏览器专用 |
| **Skills 体系** | ✅ AgentSkills 规范 | ⚠️ MCP 等价物 | ❌ 无 | ⚠️ 有限 |
| **沙箱安全** | ✅ 3 种后端 | ❌ 无内置 | ❌ 无 | ❌ 无 |
| **多 Agent** | ✅ 路由 + 子 Agent | ❌ 单 Agent | ⚠️ 有限 | ❌ 单 Agent |
| **移动支持** | ✅ iOS/Android 节点 | ❌ 仅桌面 | ❌ 仅桌面 | ❌ 仅桌面 |
| **开源程度** | ✅ 完全开源 | ❌ 闭源客户端 | ✅ 完全开源 | ✅ 完全开源 |
| **GitHub Stars** | 33万+（待验证） | N/A | 6万+ | 1万+ |

### 4.2 适用场景

**最适合的场景**：
1. **多平台个人 AI 助手**：希望在 WhatsApp/Telegram/Slack 等多个平台使用同一个 AI 助手
2. **长期运行的 Agent 服务**：需要守护进程模式、定时任务、事件响应的场景
3. **多 Agent 协作**：需要多个专门 Agent 分工协作的复杂工作流
4. **安全敏感环境**：需要沙箱隔离、精细权限控制的场景
5. **技能复用生态**：希望积累和复用 Agent 工作流技能的团队
6. **移动设备集成**：需要利用手机摄像头、麦克风、屏幕的场景

### 4.3 不适用场景

**不适合的场景**：
1. **简单的浏览器自动化**：如果只需要浏览器控制，browser-use 或 Playwright 更轻量
2. **纯代码执行**：如果只需要代码解释器，Open Interpreter 更简单
3. **低资源设备**：Gateway 架构有一定资源开销
4. **快速原型验证**：配置和学习曲线较陡，不适合快速试用
5. **单平台轻量使用**：如果只用一个消息平台，可能有更简单的方案

## 5. 信息来源

| 来源 | 类型 | 置信度 | 主要贡献 |
|------|------|--------|----------|
| OpenClaw GitHub README | Tier 1 | EXTRACTED | 项目概览、安装、核心特性 |
| OpenClaw Gateway Architecture | Tier 1 | EXTRACTED | 架构设计、组件、协议 |
| OpenClaw Tools Overview | Tier 1 | EXTRACTED | 工具分类、扩展机制 |
| OpenClaw Skills System | Tier 1 | EXTRACTED | 技能体系、加载、安全 |
| OpenClaw Browser Control | Tier 1 | EXTRACTED | 浏览器控制能力、配置 |
| OpenClaw Sandboxing & Security | Tier 1 | EXTRACTED | 沙箱架构、安全模型 |

## 6. 待验证问题

| # | 声明 | 优先级 | 验证方式 |
|---|------|--------|----------|
| 1 | GitHub Stars 33万+ | P1 | 直接访问 GitHub 仓库页面验证 |
| 2 | 支持 25+ 消息平台 | P1 | 官方文档渠道列表验证 |
| 3 | 58,222+ 次提交 | P1 | GitHub 仓库页面验证 |
| 4 | v2026.6.1 是最新版本 | P1 | GitHub Releases 验证 |
| 5 | Docker 沙箱支持浏览器沙箱 | P2 | 官方文档验证（已找到，待确认细节） |
| 6 | Skill Workshop 功能完整可用 | P2 | 官方文档 + 社区反馈 |
| 7 | OpenShell 后端生产就绪 | P3 | 官方文档 + GitHub Issues |
| 8 | iOS/Android 节点功能完整 | P3 | 官方文档 + 用户反馈 |

## 7. 版本历史

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| v1.0 | 2026-06-29 | 初始版本，基于 6 个官方文档 |
