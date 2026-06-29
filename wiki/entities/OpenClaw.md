---
tags: [openclaw, ai-agent, gateway, tools, skills, sandbox, browser-control]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-ab12, auto-20260629-cd34, auto-20260629-ef56, auto-20260629-gh78, auto-20260629-ij90, auto-20260629-kl12]
---

# OpenClaw — 全栈个人 AI 助手运行时

> 20万+ Stars（第三方报道）的开源 AI Agent 框架，Gateway 中心化架构，25+ 消息平台，完整工具/技能/沙箱体系

## 基本信息

| 属性 | 值 |
|------|-----|
| **Stars** | 20万+（<!-- confidence: INFERRED -->第三方报道，具体数字待确认） |
| **提交数** | 58,222+ |
| **Issues** | 4.3k+ |
| **许可证** | （待确认，开源项目） |
| **开发主体** | Peter Steinberger + 社区 |
| **技术栈** | TypeScript 91.7%、Swift 3.3%、JavaScript 2.7%、Kotlin 1.0% |
| **运行时** | Node.js 24+（推荐）或 Node 22.19+ |
| **最新版本** | v2026.6.1（2026-06-03） |
| **仓库** | openclaw/openclaw |

## 核心定位

OpenClaw 是一个**全栈个人 AI 助手运行时**，定位为"在你自己设备上运行的个人 AI 助手"。它不是简单的 ChatGPT wrapper，而是一个完整的 Agent 操作系统，提供从消息接入、工具系统、技能体系到沙箱安全的全套基础设施。

## 核心架构

### Gateway 中心化设计

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

### 四层技术栈

1. **系统基础层**：Node.js 运行时、pnpm workspace、launchd/systemd 守护进程
2. **协议接口层**：Gateway WebSocket 协议、CDP 浏览器协议、MCP 集成、AgentSkills 规范
3. **工具实现层**：浏览器控制、文件操作、命令执行、网络工具、媒体处理、会话管理
4. **Agent 集成层**：多 Agent 路由、工具策略层、Skills 体系、沙箱安全、插件系统

## 核心能力

### 1. 多平台消息接入（25+）

WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、IRC、Microsoft Teams、Matrix、Feishu、LINE、Mattermost、Nextcloud Talk、Nostr、Synology Chat、Tlon、Twitch、Zalo、Zalo Personal、WeChat、QQ、WebChat、macOS、iOS/Android

### 2. 浏览器控制

- 独立 openclaw profile（隔离、橙色主题）
- 用户真实浏览器（Chrome MCP 附加模式）
- 标签页管理、点击/输入/拖拽/选择
- 快照、截图、PDF
- SSRF 防护、标签页清理
- 视觉模型截图描述（文本模型降级）
- browser-automation 技能

### 3. 工具系统（10+ 类别）

| 类别 | 代表工具 |
|------|----------|
| Runtime | exec、process、code_execution |
| Files | read、write、edit、apply_patch |
| Web | web_search、x_search、web_fetch |
| Browser | browser |
| Messaging | message |
| Sessions | sessions_*、subagents、agents_list |
| Automation | cron、heartbeat_respond |
| Gateway & Nodes | gateway、nodes |
| Media | image、image_generate、tts |
| Tool Search | tool_search_code、tool_search |

### 4. Skills 体系

- **6 级加载优先级**：workspace → project → personal → managed → bundled → extra
- **AgentSkills 规范**：标准 SKILL.md 格式
- **环境门控**：OS、二进制、环境变量、配置开关
- **Skill Workshop**：提案 + 人工审核
- **ClawHub**：公共技能市场
- **安全机制**：路径 containment、安装策略、秘密注入限制

### 5. 沙箱安全

| 维度 | 选项 |
|------|------|
| **后端** | Docker（默认）、SSH、OpenShell |
| **模式** | off、non-main（非主会话）、all（全部） |
| **作用域** | agent（每 Agent）、session（每会话）、shared（共享） |
| **工作区访问** | none、ro、rw |
| **浏览器沙箱** | Docker 后端支持，noVNC 密码保护 |

### 6. 多 Agent 支持

- 按渠道/账户/联系人路由到独立 Agent
- 每个 Agent 独立工作区、工具策略、Skills 列表
- 子 Agent（sub-agents）
- ACP Agent 集成

## 与同类工具对比

| 维度 | OpenClaw | Claude Desktop | Open Interpreter | browser-use |
|------|----------|----------------|-----------------|-------------|
| **定位** | 全栈个人 AI 助手运行时 | 官方桌面客户端 + MCP | 代码执行 Agent | 浏览器自动化 Agent |
| **消息平台** | 25+ 平台 | 仅桌面 GUI | CLI + 桌面 | 仅浏览器内 |
| **浏览器控制** | ✅ 内置 CDP + MCP | ❌ 需 MCP Server | ⚠️ 有限 | ✅ 核心能力 |
| **Skills 体系** | ✅ AgentSkills 规范 | ⚠️ MCP 等价物 | ❌ 无 | ⚠️ 有限 |
| **沙箱安全** | ✅ 3 种后端 | ❌ 无内置 | ❌ 无 | ❌ 无 |
| **多 Agent** | ✅ 路由 + 子 Agent | ❌ 单 Agent | ⚠️ 有限 | ❌ 单 Agent |
| **移动支持** | ✅ iOS/Android 节点 | ❌ 仅桌面 | ❌ 仅桌面 | ❌ 仅桌面 |
| **开源程度** | ✅ 完全开源 | ❌ 闭源客户端 | ✅ 完全开源 | ✅ 完全开源 |
| **GitHub Stars** | 20万+（待确认） | N/A | 6万+ | 1万+ |

## 适用场景

✅ **最适合**：
1. 多平台个人 AI 助手（WhatsApp/Telegram/Slack 等）
2. 长期运行的 Agent 服务（守护进程、定时任务）
3. 多 Agent 协作复杂工作流
4. 安全敏感环境（沙箱隔离、精细权限）
5. 技能复用生态（工作流积累）
6. 移动设备集成（摄像头、麦克风、屏幕）

❌ **不适合**：
1. 简单浏览器自动化（用 browser-use 或 Playwright）
2. 纯代码执行（用 Open Interpreter）
3. 低资源设备
4. 快速原型验证
5. 单平台轻量使用

## 相关页面

- [[浏览器控制]] — 浏览器控制主题
- [[桌面应用控制]] — 桌面应用控制主题
- [[系统服务控制]] — 系统服务控制主题
- [[文件系统控制]] — 文件系统控制主题
- [[硬件接口控制]] — 硬件接口控制主题
- [[Agent集成层]] — Agent 集成层主题
- [[MCP]] — Model Context Protocol
- [[Agent]] — AI 智能体
- [[Goose]] — 同类 AI Agent 对比
- [[browser-use]] — 浏览器 Agent 对比
- [[Open Interpreter]] — 代码执行 Agent 对比
