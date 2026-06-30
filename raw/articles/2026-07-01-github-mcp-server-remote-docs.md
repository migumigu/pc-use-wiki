---
source_id: auto-2026-07-01-ghmcp2
title: GitHub MCP Server 远程服务器文档
url: https://github.com/github/github-mcp-server/blob/main/docs/remote-server.md
source_type: official_docs
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# Remote GitHub MCP Server 文档

## 概述

远程 GitHub MCP Server 由 GitHub 官方托管，使用本仓库作为库构建，并绑定到 GitHub 服务器基础设施。

**远程服务器 URL**: https://api.githubcopilot.com/mcp/

## Toolsets（工具集）

远程服务器提供 20+ 个工具集，每个工具集对应独立的 URL：

### 核心工具集

| Toolset | 描述 |
|---------|------|
| `all` | 所有可用 GitHub MCP 工具 |
| `repos` | 仓库相关工具 |
| `issues` | Issue 相关工具 |
| `pull_requests` | PR 相关工具 |
| `actions` | GitHub Actions 工作流和 CI/CD 操作 |
| `code_security` | 代码安全工具（Code Scanning） |
| `dependabot` | Dependabot 工具 |
| `secret_protection` | 密钥保护工具（Secret Scanning） |
| `security_advisories` | 安全公告工具 |
| `git` | Git API 相关工具（底层 Git 操作） |
| `copilot` | Copilot 相关工具 |
| `projects` | GitHub Projects 工具 |
| `orgs` | GitHub Organization 工具 |
| `users` | GitHub 用户工具 |
| `discussions` | GitHub Discussions 工具 |
| `gists` | GitHub Gist 工具 |
| `labels` | GitHub Labels 工具 |
| `notifications` | GitHub 通知工具 |
| `stargazers` | GitHub Stargazers 工具 |

### 仅远程版工具集

| Toolset | 描述 |
|---------|------|
| `copilot_spaces` | Copilot Spaces 工具 |
| `github_support_docs_search` | GitHub 支持文档搜索 |

## 配置选项

### Headers 配置

- `X-MCP-Toolsets`: 逗号分隔的工具集列表
- `X-MCP-Tools`: 逗号分隔的具体工具列表
- `X-MCP-Readonly`: 启用只读模式
- `X-MCP-Lockdown`: 启用锁定模式（隐藏公共 Issue 详情）
- `X-MCP-Insiders`: 启用 Insiders 模式（提前访问新功能）

### URL 路径模式

- `/` — 默认工具集
- `/readonly` — 默认工具集只读模式
- `/insiders` — Insiders 模式
- `/x/{toolset}` — 指定单个工具集
- `/x/{toolset}/readonly` — 指定工具集只读模式

## 远程 vs 本地对比

| 特性 | 远程版 | 本地版 |
|------|--------|--------|
| 托管 | GitHub 官方 | 自行部署 |
| 部署复杂度 | 低 | 中（Docker/二进制） |
| 工具数量 | 多（含 Copilot 专属） | 基础工具集 |
| 认证 | OAuth / PAT | PAT / OAuth |
| GitHub Enterprise | Cloud 支持 | Server + Cloud |
| 网络要求 | 需要公网访问 | 可内网部署 |
