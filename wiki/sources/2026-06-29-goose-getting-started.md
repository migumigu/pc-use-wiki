---
tags: [goose, getting-started, installation, configuration, provider]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-2026-06-29-goose-getting-started]
---

# Goose 官方文档 — Getting Started

> 安装配置、Provider 设置、扩展使用指南

## 安装选项

### Desktop App

| 平台 | 安装方式 |
|------|----------|
| **macOS** | ZIP 下载 / Homebrew |
| **Linux** | DEB / RPM / Flatpak |
| **Windows** | 直接下载 |

### CLI

```bash
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash
```

## Provider 配置

支持 15+ Provider：
- **云端**：Anthropic、OpenAI、Google、Azure、Bedrock
- **本地**：Ollama、OpenRouter
- **订阅接入**：ACP 支持现有 Claude、ChatGPT、Gemini 订阅

## 扩展使用

Extensions 通过 MCP (Model Context Protocol) 连接：
- 添加新功能
- 访问数据和资源
- 集成其他系统

官方扩展市场支持 70+ 扩展。

## 相关页面

- [[Goose]] — Goose 实体页
- [[MCP]] — MCP 协议
- [[桌面应用控制]] — 桌面应用控制主题