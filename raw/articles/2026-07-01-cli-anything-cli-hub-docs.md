---
source_id: auto-20260701-001
title: CLI-Anything CLI-Hub 官方文档
url: https://hkuds.github.io/CLI-Anything/
source_type: official_docs
tier: 1
control_object: desktop_app
tech_layer: agent_integration
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# CLI-Anything Hub

**Any software. Any codebase. Any Web API.** Generate an agent-native CLI and let AI agents operate it — install with a single pip command.

## 核心定位

CLI-Hub 是 CLI-Anything 的官方 CLI 包管理器和注册中心，让 Agent 可以自主发现、安装和管理社区构建的 CLI 工具。

## 安装方式

```bash
pip install cli-anything-hub
```

## CLI-Hub 命令

| 命令 | 功能 |
|------|------|
| `cli-hub list` | 浏览注册中心 |
| `cli-hub search <query>` | 搜索 CLI |
| `cli-hub info <name>` | 查看 CLI 详情 |
| `cli-hub install <name>` | 安装 CLI |
| `cli-hub update <name>` | 更新 CLI |
| `cli-hub uninstall <name>` | 移除 CLI |
| `cli-hub launch <name> [args...]` | 运行已安装 CLI |

## Agent 集成

### OpenClaw 集成

```bash
openclaw skills install cli-anything-hub
```

### nanobot 集成

```bash
nanobot skills install cli-anything-hub
```

## Agent Catalog

提供 [SKILL.txt](https://hkuds.github.io/CLI-Anything/SKILL.txt) 供 AI Agent 自动发现和安装 CLI。

## 技术指标

- CLIs Available: 多个（持续增长）
- Categories: 多类别
- 许可证: Apache-2.0

## 支持的安装来源

- pip（PyPI）
- npm（Node.js）
- brew（Homebrew）
- bundled/system tools

## 贡献方式

欢迎任何应用的 CLI 贡献：
- 桌面应用
- 开发工具
- 云服务
- SaaS API
- 创意套件

提交 PR 即可将 CLI 加入 Hub。

## 核心价值

CLI-Hub 填补了 AI Agent 的"软件发现"缺口，通过统一的包管理接口，让 Agent 能够自主发现并安装所需的专业软件 CLI。

## 来源

- 官方网站: https://hkuds.github.io/CLI-Anything/
- GitHub: https://github.com/HKUDS/CLI-Anything