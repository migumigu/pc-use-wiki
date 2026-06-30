---
source_id: auto-2026-07-01-ghmcp1
title: GitHub MCP Server 官方 README
url: https://github.com/github/github-mcp-server
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# GitHub MCP Server — 官方 README

The GitHub MCP Server connects AI tools directly to GitHub's platform. This gives AI agents, assistants, and chatbots the ability to read repositories and code files, manage issues and PRs, analyze code, and automate workflows. All through natural language interactions.

## 核心功能

### Use Cases

- **Repository Management**: Browse and query code, search files, analyze commits, and understand project structure across any repository you have access to.
- **Issue & PR Automation**: Create, update, and manage issues and pull requests. Let AI help triage bugs, review code changes, and maintain project boards.
- **CI/CD & Workflow Intelligence**: Monitor GitHub Actions workflow runs, analyze build failures, manage releases, and get insights into your development pipeline.
- **Code Analysis**: Examine security findings, review Dependabot alerts, understand code patterns, and get comprehensive insights into your codebase.
- **Team Collaboration**: Access discussions, manage notifications, analyze team activity, and streamline processes for your team.

## 两种部署模式

### 1. Remote GitHub MCP Server（远程版）
- 由 GitHub 官方托管，无需本地安装
- URL: https://api.githubcopilot.com/mcp/
- 支持远程 MCP 协议（HTTP）
- 包含本地版没有的额外工具（如 create_pull_request_with_copilot）

### 2. Local GitHub MCP Server（本地版）
- 本地运行（Docker 或二进制）
- 支持 GitHub PAT 或 OAuth 认证
- 支持 GitHub Enterprise Server
- Docker 镜像: ghcr.io/github/github-mcp-server

## 支持的 MCP 主机

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

## 技术栈

- 语言: Go
- 许可证: MIT
- 仓库: github.com/github/github-mcp-server
- 966+ Commits
- 159+ Issues

## 安全特性

- PAT 最小权限范围
- 环境变量安全存储
- 只读模式支持
- Lockdown 模式
- OAuth 浏览器登录（token 仅存内存）
