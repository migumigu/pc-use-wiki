---
tags: [素材, Agent集成层, MCP]
created: 2026-07-01
updated: 2026-07-01
sources:
  - raw/articles/2026-07-01-github-mcp-server-remote-docs.md
---

# GitHub MCP Server 远程服务器文档

> 远程 GitHub MCP Server 官方文档，详解 22 个工具集、配置选项、URL 路径模式、Insiders 模式等高级功能。

## 一句话摘要

远程 GitHub MCP Server 由 GitHub 官方托管，提供 22 个工具集（含 2 个仅远程版专属），支持 HTTP 协议访问，可通过 URL 路径或 Header 灵活配置工具集、只读模式、Insiders 模式等。

## 核心内容

### 远程服务器概述
<!-- confidence: EXTRACTED -->
The remote GitHub MCP server is built using this repository as a library, and binding it into GitHub server infrastructure with an internal repository.

**远程服务器 URL**: https://api.githubcopilot.com/mcp/

### 22 个工具集（Toolset）
<!-- confidence: EXTRACTED -->

#### 核心工具集（20 个）

| Toolset | 描述 |
|---------|------|
| `all` | 所有可用 GitHub MCP 工具 |
| `repos` | 仓库相关工具 |
| `issues` | Issue 相关工具 |
| `pull_requests` | Pull Request 相关工具 |
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

#### 仅远程版工具集（2 个）

| Toolset | 描述 |
|---------|------|
| `copilot_spaces` | Copilot Spaces 工具 |
| `github_support_docs_search` | GitHub 支持文档搜索 |

### 配置选项
<!-- confidence: EXTRACTED -->

#### Headers 配置

| Header | 说明 | 等效本地环境变量 |
|--------|------|-----------------|
| `X-MCP-Toolsets` | 逗号分隔的工具集列表 | `GITHUB_TOOLSETS` |
| `X-MCP-Tools` | 逗号分隔的具体工具列表 | `GITHUB_TOOLS` |
| `X-MCP-Readonly` | 启用只读模式 | `GITHUB_READ_ONLY` |
| `X-MCP-Lockdown` | 启用锁定模式 | `GITHUB_LOCKDOWN_MODE` |
| `X-MCP-Insiders` | 启用 Insiders 模式 | `GITHUB_INSIDERS` |

#### URL 路径模式
<!-- confidence: EXTRACTED -->

| 路径模式 | 说明 |
|----------|------|
| `/` | 默认工具集 |
| `/readonly` | 默认工具集只读模式 |
| `/insiders` | Insiders 模式 |
| `/x/{toolset}` | 指定单个工具集 |
| `/x/{toolset}/readonly` | 指定工具集只读模式 |
| `/x/{toolset}/insiders` | 指定工具集 Insiders 模式 |
| `/x/all` | 所有工具集 |
| `/x/all/readonly` | 所有工具集只读模式 |

### 远程 vs 本地对比
<!-- confidence: EXTRACTED -->

| 特性 | 远程版 | 本地版 |
|------|--------|--------|
| 托管 | GitHub 官方 | 自行部署 |
| 部署复杂度 | 低 | 中（Docker/二进制） |
| 工具数量 | 多（含 Copilot 专属） | 基础工具集 |
| 认证 | OAuth / PAT | PAT / OAuth |
| Enterprise 支持 | Cloud | Server + Cloud |
| 网络要求 | 需要公网访问 | 可内网部署 |

## 相关页面

- [[GitHub-MCP-Server]]（实体页）
- [[Agent集成层]]（主题页）
- [[MCP]]（实体页）
