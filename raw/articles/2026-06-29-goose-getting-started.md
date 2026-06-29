---
source_id: auto-2026-06-29-goose-docs-getting-started
title: Goose 官方文档 — Getting Started
url: https://goose-docs.ai/docs/category/getting-started
source_type: official_docs
tier: 1
control_object: desktop_app | agent_integration
tech_layer: tool_implementation | agent_integration
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Goose 官方文档 — Getting Started

## 安装选项

### Desktop App
- macOS: Silicon / Intel (下载 ZIP 或 Homebrew)
- Linux: DEB / RPM / Flatpak
- Windows: 直接下载

### CLI
```bash
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash
```

## 配置 LLM Provider

goose 支持 15+ Provider:
- 云端: Anthropic, OpenAI, Google, Azure, Bedrock
- 本地: Ollama, OpenRouter
- ACP: 支持现有 Claude, ChatGPT, Gemini 订阅

## 使用扩展

Extensions 通过 Model Context Protocol (MCP) 连接，提供：
- 新功能
- 数据和资源访问
- 其他系统集成

官方扩展市场支持 70+ 扩展。

## 相关文档

- Quickstart: https://goose-docs.ai/docs/quickstart
- Tutorials: https://goose-docs.ai/docs/category/tutorials
- 扩展开发: https://goose-docs.ai/docs/tutorials/custom-extensions