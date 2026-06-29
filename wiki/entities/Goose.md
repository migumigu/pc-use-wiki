---
tags: [goose, ai-agent, desktop-app, cli, api, mcp, aaif, linux-foundation]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-2026-06-29-goose-github-readme, auto-2026-06-29-goose-getting-started, auto-2026-06-29-goose-tutorials, auto-2026-06-29-goose-deep-analysis]
---

# Goose — Linux Foundation 本地 AI Agent

> 49.7K+ Stars 的开源 AI Agent，Desktop + CLI + API 多形态，70+ MCP 扩展生态

## 基本信息

| 属性 | 值 |
|------|-----|
| **Stars** | 49.7K+ |
| **贡献者** | 500+ |
| **许可证** | Apache 2.0 |
| **开发主体** | AAIF (Agentic AI Foundation, Linux Foundation 旗下) |
| **技术栈** | Rust |
| **仓库** | aaif-goose/goose |

## 核心能力

### 多入口交互

| 形态 | 描述 |
|------|------|
| **Desktop App** | 跨平台桌面应用 (macOS/Linux/Windows) |
| **CLI** | 完整命令行界面 |
| **API** | 嵌入式 API，可集成到其他应用 |

### 多 Provider 支持

支持 15+ LLM Provider：
- **云端**：Anthropic、OpenAI、Google、Azure、Bedrock
- **本地**：Ollama、OpenRouter
- **订阅接入**：ACP 协议支持现有 Claude、ChatGPT、Gemini 订阅

### MCP 扩展生态

通过 Model Context Protocol 连接 70+ 扩展，覆盖：
- 文件系统
- 数据库
- 浏览器
- 云服务
- 业务 API

### 代码理解

tree-sitter 多语言结构解析：
- Go、Java、JavaScript、Kotlin、Python、Ruby、Rust、Swift、TypeScript

## 技术架构

```
┌─────────────────────────────────────────────────────┐
│                    交互层                              │
│         Desktop App │ CLI 终端 │ 嵌入式 API           │
├─────────────────────────────────────────────────────┤
│                    运行时层                            │
│     Agent 核心 │ 上下文管理 │ 计划与执行循环          │
├─────────────────────────────────────────────────────┤
│                    模型层                             │
│            LLM Provider 管理                         │
├─────────────────────────────────────────────────────┤
│                    工具层                             │
│        MCP 客户端 │ 扩展和工具服务器                   │
└─────────────────────────────────────────────────────┘
```

## 关键依赖

- **tokio** — 异步运行时
- **axum** — HTTP/API 框架
- **clap** — 命令行解析
- **reqwest** — HTTP 客户端
- **serde** — 序列化
- **rmcp** — Rust MCP 实现
- **tree-sitter** — 多语言解析
- **agent-client-protocol** — ACP 协议
- **OpenTelemetry** — 可观测性

## 应用场景

1. **软件开发工作流**：代码阅读、修改、测试、错误分析
2. **研究与写作**：材料搜集、笔记整理、报告生成
3. **企业 AI 基础设施**：API 集成、自定义发行版

## 竞品对比

| 工具 | 开发主体 | 运行位置 | 交互形态 | MCP 支持 |
|------|----------|----------|----------|----------|
| **Goose** | AAIF/Linux Foundation | 本地 | Desktop+CLI+API | 70+ |
| Claude Code | Anthropic | 云端 | CLI | 有限 |
| OpenAI Codex CLI | OpenAI | 云端 | CLI | 有限 |
| UI-TARS | 字节跳动 | 本地 | Desktop | 部分 |

## 安装

**Desktop**：
- macOS: ZIP 或 Homebrew
- Linux: DEB / RPM / Flatpak
- Windows: 直接下载

**CLI**：
```bash
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash
```

## 相关页面

- [[桌面应用控制]] — 桌面应用控制主题
- [[系统服务控制]] — 系统服务控制主题
- [[Agent集成层]] — Agent 集成层主题
- [[MCP]] — MCP 协议
- [[CUA]] — Computer Use Agent 对比
- [[UI-TARS]] — 字节跳动 GUI Agent 对比