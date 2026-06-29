---
tags: [实体, 工具, 浏览器自动化, MCP]
created: 2026-06-30
updated: 2026-06-30
sources:
  - wiki/sources/2026-06-30-bb-browser-github-readme.md
  - wiki/sources/2026-06-30-bb-browser-analysis.md
---

# bb-browser

> 让 AI Agent 直接使用已有浏览器登录态的 MCP 工具

## 简介

bb-browser (BadBoy Browser) 是一款 AI Agent 浏览器自动化工具，GitHub 获得 5,376+ Stars。核心特点是"你的浏览器就是 API"——复用用户已登录的真实 Chrome 会话，无需 API Key、无需爬虫、无需重新登录。

## 关键信息

- **类型**：工具（AI Agent 浏览器自动化 MCP 工具）
- **领域**：浏览器自动化 / AI Agent
- **GitHub**：https://github.com/epiral/bb-browser
- **Stars**：5,376+（第三方数据，待验证）
- **许可证**：MIT
- **编程语言**：TypeScript (83.7%)
- **最新版本**：v0.11.6 (2026-05-11)

## 技术架构

### 核心组件

1. **bb-browser CLI**：主命令行工具，支持 CLI 和 MCP 两种调用方式
2. **Daemon 守护进程**：默认监听 127.0.0.1:19824，通过 CDP WebSocket 与 Chrome 通信
3. **Per-tab Event Cache**：缓存每个标签页的网络、控制台、错误事件
4. **bb-sites 社区适配器**：每个平台一个 JS 文件，定义认证方式和数据提取逻辑

### 技术栈分层

| 层级 | 技术 | 说明 |
|------|------|------|
| 系统基础层 | CDP (Chrome DevTools Protocol) | Chrome 内置调试协议 |
| 协议接口层 | MCP (Model Context Protocol) | AI Agent 调用标准 |
| 工具实现层 | TypeScript + Node.js | 核心实现 |
| Agent 集成层 | CLI / MCP / OpenClaw Skill | 三种集成方式 |

## 功能特性

### 12 大核心能力

| 能力 | 命令 | 说明 |
|------|------|------|
| 打开网页 | browser_open | 导航到指定 URL |
| 页面快照 | browser_snapshot | 获取可交互元素树 |
| 填写表单 | browser_fill | 文本输入 |
| 点击交互 | browser_click | 元素点击 |
| 执行 JS | browser_eval | 在页面执行 JavaScript |
| 网络监控 | browser_network | 捕获请求/响应 |
| 页面截图 | browser_screenshot | 屏幕截图 |
| 多标签页 | browser_tab_* | 标签页管理 |
| 对话框 | browser_dialog | 弹窗处理 |

### 认证层级

| 层级 | 认证方式 | 示例平台 | 复杂度 |
|------|----------|----------|--------|
| Tier 1 | Cookie (直接 fetch) | Reddit, GitHub, V2EX | ~1分钟 |
| Tier 2 | Bearer + CSRF token | Twitter, 知乎 | ~3分钟 |
| Tier 3 | Webpack 注入/Pinia store | Twitter 搜索, 小红书 | ~10分钟 |

### 局限性

1. **平台依赖**：需要用户已安装并登录 Chrome
2. **安全风险**：守护进程默认监听本地端口
3. **反爬升级**：平台可能检测并封禁自动化流量
4. **仅支持 Chrome**：依赖 Chrome 的 CDP

## 与其他工具的关系

### vs browser-use

- browser-use 创建新的浏览器实例，需要重新登录
- bb-browser 复用已有浏览器的登录态
- 两者面向不同场景：browser-use 通用自动化，bb-browser 需登录场景

### vs chrome-devtools-mcp

- chrome-devtools-mcp 是 Google 官方的 CDP MCP Server
- bb-browser 在其基础上添加了登录态复用和 bb-sites 适配器层

## 使用示例

### MCP 集成
```json
{
  "mcpServers": {
    "bb-browser": {
      "command": "npx",
      "args": ["-y", "bb-browser", "--mcp"]
    }
  }
}
```

### CLI 命令
```bash
bb-browser site update            # 更新社区适配器
bb-browser site recommend         # 查看适配建议
bb-browser site zhihu/hot        # 访问知乎热榜
bb-browser open https://example.com
bb-browser snapshot -i           # 获取可访问性树
```

## 相关页面

- [[浏览器控制]]（主题页）
- [[browser-use]]（对比实体）
- [[MCP]]（协议层）
- [[chrome-devtools-mcp]]（相关技术）
