---
tags: [MCP, Model-Context-Protocol, GitHub, servers, reference-implementations]
created: 2026-06-28
updated: 2026-06-28
sources: []
---

# MCP Servers GitHub 仓库 — 参考实现集合

> 一句话摘要：Anthropic 官方维护的 MCP servers 参考实现仓库，包含多种预构建服务器和社区贡献资源。

## 基本信息

- **来源**：GitHub (https://github.com/modelcontextprotocol/servers)
- **作者**：Anthropic
- **素材类型**：官方仓库 README
- **控制对象**：Agent集成层
- **技术层级**：Agent集成层

## 核心观点

<!-- confidence: EXTRACTED -->

1. **仓库定位**：存放 MCP 参考实现（reference implementations），用于演示 MCP 功能和 SDK 使用，而非生产级解决方案。（原文："reference implementations to demonstrate MCP features"）

2. **多语言 SDK 支持**：提供 C#、Go、Java、Kotlin、PHP、Python、Ruby、Rust、Swift、TypeScript 等十种语言 SDK。（原文："10 language SDKs"）

3. **两大类服务器**：
   - Reference Servers（官方维护）：Everything、Fetch、Filesystem、Git、Memory、Sequential Thinking、Time
   - Archived（已归档）：AWS KB、Brave Search、GitHub、GitLab、Google Drive、PostgreSQL、Puppeteer、Slack 等

4. **运行方式**：TypeScript servers 用 npx 运行，Python servers 用 uvx 或 pip 运行。（原文："npx -y @modelcontextprotocol/server-memory"）

## 关键概念

- [[MCP Server]] — MCP 协议的服务端实现
- [[Reference Implementation]] — 参考实现，用于教学而非生产
- [[MCP Registry]] — MCP 服务器注册中心 (registry.modelcontextprotocol.io)
- [[MCP SDK]] — 多语言 SDK 支持（Python、TypeScript、Go 等）

## Reference Servers 列表

<!-- confidence: EXTRACTED -->

| Server | 功能 |
|--------|------|
| **Everything** | 参考测试服务器，含 prompts、resources、tools |
| **Fetch** | Web 内容抓取和转换 |
| **Filesystem** | 安全文件操作，可配置访问控制 |
| **Git** | Git 仓库读取、搜索和操作 |
| **Memory** | 知识图谱持久化内存系统 |
| **Sequential Thinking** | 动态反思式问题解决 |
| **Time** | 时间和时区转换 |

## Claude Desktop 配置示例

<!-- confidence: EXTRACTED -->

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/files"]
    },
    "git": {
      "command": "uvx",
      "args": ["mcp-server-git", "--repository", "path/to/git/repo"]
    }
  }
}
```

## 安全警告

<!-- confidence: EXTRACTED -->

- 本仓库服务器为参考实现，非生产级解决方案
- 开发者应评估自身安全需求，基于威胁模型实现防护措施
- Windows 平台需用 `cmd /c` 包装 npx 命令

## 与其他素材的关联

- 与 [[MCP 发布公告]]、[[MCP 官方文档索引]] 形成完整 MCP 资源体系
- 与 [[MCP Python SDK]]、[[MCP TypeScript SDK]] 对应具体 SDK 实现
- 与 [[Agent集成层]] 主题直接相关

## 原文精彩摘录

> "The servers in this repository showcase the versatility and extensibility of MCP, demonstrating how it can be used to give LLMs secure, controlled access to tools and data sources."

## 相关页面

- [[MCP Server]]
- [[MCP SDK]]
- [[Agent集成层]]
- [[MCP]]