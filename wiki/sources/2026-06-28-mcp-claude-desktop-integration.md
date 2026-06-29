---
tags: [MCP, Model-Context-Protocol, Claude-Desktop, integration, tutorial]
created: 2026-06-28
updated: 2026-06-28
sources: []
---

# MCP Claude Desktop 集成指南 — 连接本地 MCP Servers

> 一句话摘要：Claude Desktop MCP 集成的官方教程，演示如何配置 Filesystem Server，实现文件系统访问能力。

## 基本信息

- **来源**：MCP 官方文档 (https://modelcontextprotocol.io/docs/develop/connect-local-servers)
- **作者**：Anthropic
- **素材类型**：官方集成教程
- **控制对象**：Agent集成层
- **技术层级**：Agent集成层

## 核心观点

<!-- confidence: EXTRACTED -->

1. **MCP Server 定义**：在用户计算机上运行的程序，通过标准化协议向 Claude Desktop 提供特定能力。

2. **Filesystem Server 功能**：
   - 读取文件内容和目录结构
   - 创建新文件和目录
   - 移动和重命名文件
   - 搜索文件（按名称或内容）

3. **安全控制**：所有操作需要用户明确批准才能执行，用户保持完全控制权。

4. **配置文件位置**：
   - macOS：`~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows：`%APPDATA%\Claude\claude_desktop_config.json`

## 关键概念

- [[Claude Desktop]] — Anthropic 的桌面应用，支持 MCP 集成
- [[MCP Server]] — Filesystem Server 等本地服务器
- [[claude_desktop_config.json]] — Claude Desktop MCP 配置文件
- [[Filesystem Server]] — 文件系统访问 MCP server

## 配置示例

<!-- confidence: EXTRACTED -->

**Windows 配置**：

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/Desktop",
        "/Users/username/Downloads"
      ]
    }
  }
}
```

## 使用示例

<!-- confidence: EXTRACTED -->

- "写一首诗并保存到我的桌面"
- "下载文件夹里有哪些工作相关文件？"
- "请把桌面上的所有图片整理到一个叫 'Images' 的文件夹"

## Troubleshooting

<!-- confidence: EXTRACTED -->

### Server 未显示
1. 重启 Claude Desktop
2. 检查配置文件语法
3. 确保文件路径有效且绝对路径
4. 查看日志文件
5. 手动运行服务器测试

### 日志位置
- macOS：`~/Library/Logs/Claude`
- Windows：`%APPDATA%\Claude\logs`

### ENOENT 错误
需要在 `claude_desktop_config.json` 的 `env` key 中添加 `%APPDATA%` 扩展值。

## 与其他素材的关联

- 与 [[MCP 发布公告]] 介绍的 Claude Desktop 支持对应
- 与 [[MCP Servers GitHub 仓库]] 的服务器实现关联
- 与 [[Agent集成层]] 主题的实际应用

## 原文精彩摘录

> "All actions require your explicit approval before execution, ensuring you maintain full control over what Claude can access and modify."

## 相关页面

- [[Claude Desktop]]
- [[MCP Server]]
- [[Filesystem Server]]
- [[Agent集成层]]
- [[MCP]]