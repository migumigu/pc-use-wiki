---
tags: [CLI-Hub, CLI-Anything, Agent集成层, CLI包管理]
created: 2026-07-01
updated: 2026-07-01
sources:
  - raw/articles/2026-07-01-cli-anything-cli-hub-docs.md
---

# CLI-Anything CLI-Hub 官方文档

> CLI-Anything 的官方 CLI 包管理器和注册中心，让 Agent 可以自主发现、安装和管理社区构建的 CLI 工具

## 来源信息

- **URL**: https://hkuds.github.io/CLI-Anything/
- **类型**: 官方文档（Tier 1）
- **置信度**: high
- **收集日期**: 2026-07-01

## 核心内容摘要

CLI-Hub 是 CLI-Anything 的官方 CLI 包管理器和注册中心。通过 `pip install cli-anything-hub` 安装后，Agent 可以使用 `cli-hub list/search/info/install/update/uninstall/launch` 等命令管理 CLI 工具。

## 关键实体

- [[CLI-Anything]] — 主体项目
- [[OpenClaw]] — Agent 框架集成
- [[MCP]] — 协议层

## 关键主题

- [[Agent集成层]] — Agent 自主发现和安装机制
- [[桌面应用控制]] — CLI 工具控制专业软件

## 核心能力

### CLI-Hub 命令

| 命令 | 功能 |
|------|------|
| `cli-hub list` | 浏览注册中心 |
| `cli-hub search <query>` | 搜索 CLI |
| `cli-hub info <name>` | 查看 CLI 详情 |
| `cli-hub install <name>` | 安装 CLI |
| `cli-hub update <name>` | 更新 CLI |
| `cli-hub uninstall <name>` | 移除 CLI |
| `cli-hub launch <name> [args...]` | 运行已安装 CLI |

### Agent 集成

```bash
openclaw skills install cli-anything-hub
nanobot skills install cli-anything-hub
```

### Agent Catalog

提供 SKILL.txt 供 AI Agent 自动发现和安装 CLI。

## 相关页面

- [[CLI-Anything]]
- [[OpenClaw]]
- [[Agent集成层]]
- [[桌面应用控制]]