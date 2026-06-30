---
tags: [浏览器控制, 网络访问, MCP, 脚手架]
created: 2026-06-30
updated: 2026-07-01
sources:
  - wiki/sources/2026-06-30-agent-reach-github-readme.md
  - wiki/sources/2026-07-01-agent-reach-github-readme.md
---

# Agent-Reach

> AI Agent 全网搜索能力脚手架，支持 15+ 平台零 API 费用访问

## 定义

Agent-Reach 是一个为 AI Agent 提供互联网能力的一站式脚手架（scaffolding），通过安装和配置上游工具，让 Agent 能够零成本访问 15+ 主流网络平台，解决 Agent"上网难"问题。

## 核心能力

### 支持平台（零配置）

- 🌐 **网页**：Jina Reader 读取任意网页
- 📺 **YouTube**：字幕提取 + 视频搜索（yt-dlp）
- 📡 **RSS/Atom**：订阅源阅读
- 📦 **GitHub**：公开仓库读取 + 搜索
- 💬 **微信公众号**：搜索 + 阅读文章
- 📰 **微博**：热搜、搜索内容/用户/话题
- 💻 **V2EX**：热门帖子、节点帖子
- 📈 **雪球**：股票行情、热门帖子

### 支持平台（需配置 Cookie）

- 🐦 **Twitter/X**：twitter-cli（Cookie 认证）
- 📖 **Reddit**：rdt-cli（Cookie 认证）
- 📕 **小红书**：xhs-cli（Cookie 认证）
- 📺 **B站**：字幕提取（本地）+ 代理（服务器）
- 🎵 **抖音**：douyin-mcp-server
- 💼 **LinkedIn**：linkedin-scraper-mcp
- 🎙️ **小宇宙播客**：Whisper 转录

## 架构设计

### 脚手架定位

Agent-Reach 本身不执行具体操作，而是安装和配置上游工具。安装完成后，Agent 直接调用上游工具，不需要经过 Agent-Reach 的包装层。

### 可插拔架构

```
channels/
├── web.py → Jina Reader
├── twitter.py → twitter-cli
├── youtube.py → yt-dlp
├── github.py → gh CLI
├── bilibili.py → yt-dlp
├── reddit.py → rdt-cli
├── xiaohongshu.py → xhs-cli
├── douyin.py → douyin-mcp-server
├── linkedin.py → linkedin-mcp
├── wechat.py → Exa + Camoufox
├── rss.py → feedparser
├── exa_search.py → mcporter MCP
└── __init__.py → 渠道注册
```

## 安全机制

- 🔒 **Cookie 本地存储**：仅存 `~/.agent-reach/config.yaml`，文件权限 600
- 🛡️ **安全模式**：`--safe` 不自动修改系统
- 👀 **完全开源**：代码透明
- 🔍 **Dry Run**：`--dry-run` 预览操作
- ⚠️ **封号风险提醒**：建议使用专用小号

## 技术指标

- Stars：45,702+（2026年6月数据）
- Fork：3,623+
- 贡献者：28+
- 许可证：MIT
- 主要语言：Python

## 生态位

Agent-Reach 填补了 AI Agent 的"网络访问"缺口，通过整合多个上游工具，提供统一的网络访问能力，使 Agent 能够搜索和读取全网内容。

## 相关页面

- [[浏览器控制]]
- [[MCP]]
- [[Jina Reader]]
- [[Agent集成层]]
