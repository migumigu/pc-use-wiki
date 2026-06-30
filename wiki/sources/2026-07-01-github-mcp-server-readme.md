---
tags: [素材, Agent集成层, MCP]
created: 2026-07-01
updated: 2026-07-01
sources:
  - raw/articles/2026-07-01-github-mcp-server-readme.md
---

# GitHub MCP Server 官方 README

> GitHub 官方 MCP 服务器，连接 AI 工具与 GitHub 平台，支持仓库管理、Issue/PR、CI/CD、安全分析等全链路能力。

## 一句话摘要

GitHub MCP Server 是 GitHub 官方推出的模型上下文协议服务器，将 GitHub 平台能力通过标准化 MCP 协议暴露给 AI Agent，支持代码浏览、Issue/PR 管理、CI/CD 监控、安全分析等软件开发全生命周期操作。

## 核心内容

### 项目定位
<!-- confidence: EXTRACTED -->
The GitHub MCP Server connects AI tools directly to GitHub's platform. This gives AI agents, assistants, and chatbots the ability to read repositories and code files, manage issues and PRs, analyze code, and automate workflows. All through natural language interactions.

### 核心用例
<!-- confidence: EXTRACTED -->

| 用例 | 说明 |
|------|------|
| Repository Management | 浏览查询代码、搜索文件、分析提交、理解项目结构 |
| Issue & PR Automation | 创建更新 Issue 和 PR、AI 辅助 Bug 分类、代码审查 |
| CI/CD & Workflow Intelligence | 监控 GitHub Actions、分析构建失败、管理发布 |
| Code Analysis | 检查安全发现、审查 Dependabot 告警、理解代码模式 |
| Team Collaboration | 访问讨论、管理通知、分析团队活动 |

### 两种部署模式
<!-- confidence: EXTRACTED -->

1. **Remote GitHub MCP Server（远程版）**
   - GitHub 官方托管，无需本地安装
   - URL: https://api.githubcopilot.com/mcp/
   - 支持远程 MCP 协议（HTTP）
   - 包含本地版没有的额外工具（如 Copilot 相关）

2. **Local GitHub MCP Server（本地版）**
   - 本地运行（Docker 或二进制）
   - 支持 GitHub PAT 或 OAuth 认证
   - 支持 GitHub Enterprise Server
   - Docker 镜像: ghcr.io/github/github-mcp-server

### 支持的 MCP 主机
<!-- confidence: EXTRACTED -->
- VS Code (1.101+)
- Claude Desktop / Claude Code CLI
- Cursor
- GitHub Copilot CLI
- Windsurf
- Zed
- OpenCode
- Codex
- Google Gemini CLI
- JetBrains IDEs
- Visual Studio
- Eclipse
- Xcode

### 技术栈
<!-- confidence: EXTRACTED -->
- 语言: Go
- 许可证: MIT
- 仓库: github.com/github/github-mcp-server
- 966+ Commits
- 159+ Issues

### 安全特性
<!-- confidence: EXTRACTED -->
- PAT 最小权限范围
- 环境变量安全存储
- 只读模式支持
- Lockdown 模式
- OAuth 浏览器登录（token 仅存内存）

## 相关页面

- [[GitHub-MCP-Server]]（实体页）
- [[Agent集成层]]（主题页）
- [[MCP]]（实体页）
- [[Filesystem-MCP]]（实体页）
- [[chrome-devtools-mcp]]（实体页）
