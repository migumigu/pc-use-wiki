---
source_id: auto-2026-06-30-bb-browser-github-readme
title: bb-browser GitHub README
url: https://github.com/epiral/bb-browser
source_type: github_readme
tier: 1
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-06-30
collected_by: auto_research
confidence: high
---

# epiral/bb-browser - GitHub README

## 项目概览

**bb-browser (BadBoy Browser)** — "Your browser is the API. No keys. No bots. No scrapers."

让 AI Agent 直接使用你已登录的 Twitter、Reddit、YouTube、知乎、B站、LinkedIn、GitHub 等平台的浏览器会话。

## 核心创新

传统方案：
- Playwright/Selenium：需要无头浏览器，无法使用登录态
- 爬虫库：需要 Cookie 提取，反爬困难

bb-browser 方案：
- 使用你的真实 Chrome 浏览器
- 登录态已存在，无需重新登录
- 反爬检测：隐形——因为它就是用户本身

## 技术架构

```
AI Agent (Claude Code, Cursor, etc.)
 │ CLI or MCP (stdio)
 ▼
bb-browser CLI ──HTTP──▶ Daemon ──CDP WebSocket──▶ Your Real Browser
  │
  ┌──────┴──────┐
  │ Per-tab │
  │ event cache │
  │ (network, │
  │ console, │
  │ errors) │
  └─────────────┘
```

## 功能特性

### 平台支持
- **36 个平台，103 个命令**
- 社区驱动 via bb-sites

| 类别 | 平台 |
|------|------|
| 社交 | Twitter/X, Reddit, 微博, 小红书, 即刻, LinkedIn, 虎扑 |
| 开发者 | GitHub, StackOverflow, HackerNews, CSDN, V2EX, npm, PyPI, arXiv |
| 视频 | YouTube, B站 |
| 金融 | 雪球, 东方财富, Yahoo Finance |
| 职位 | BOSS直聘, LinkedIn |
| 知识 | Wikipedia, 知乎, 开放图书馆 |

### 命令示例
```bash
bb-browser site twitter/search "AI agent"    # 搜索推文
bb-browser site zhihu/hot                   # 知乎热榜
bb-browser site github/search "rust"        # GitHub 搜索
bb-browser site youtube/transcript VIDEO_ID # YouTube 字幕
```

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

### OpenClaw 集成
```bash
bb-browser site reddit/hot --openclaw
bb-browser site xueqiu/hot-stock 5 --openclaw --jq '.items[] | {name, changePercent}'
```

## 技术细节

- **语言**: TypeScript (83.7%), JavaScript (9.5%)
- **许可证**: MIT
- **最新版本**: v0.11.6 (2026-05-11)
- **最新提交**: 2026-05-28
- **Commit 数**: 263
- **守护进程默认端口**: 127.0.0.1:19824

## 三层适配器复杂度

| 层级 | 认证方式 | 示例 | 时间 |
|------|---------|------|------|
| Tier 1 | Cookie (直接 fetch) | Reddit, GitHub, V2EX | ~1分钟 |
| Tier 2 | Bearer + CSRF token | Twitter, 知乎 | ~3分钟 |
| Tier 3 | Webpack 注入 / Pinia store | Twitter 搜索, 小红书 | ~10分钟 |

## 项目结构

- `/packages` - 核心包
- `/skills` - Agent Skills
- `/web` - Web 界面
- `/bb-sites` - 社区平台适配器

## 相关链接

- GitHub: https://github.com/epiral/bb-browser
- 中文 README: README.zh-CN.md
- 社区适配器: https://github.com/epiral/bb-sites
- OpenClaw Skill: https://clawhub.ai/yan5xu/bb-browser
