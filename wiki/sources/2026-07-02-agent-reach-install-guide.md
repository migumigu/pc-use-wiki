---
tags: [agent_integration, 安装指南, 部署文档]
created: 2026-07-02
updated: 2026-07-02
sources: []
confidence: EXTRACTED
---

# Agent-Reach 安装指南（官方文档）

> 一键安装指南，支持安全模式和预览模式，适配多种环境

## 基本信息

- **文档来源**：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md
- **文档类型**：Tier 1 - 官方安装文档
- **适用对象**：Human 和 AI Agent
- **核心目标**：Install Agent Reach and all upstream tools so your user's agent has full internet access

<!-- confidence: EXTRACTED -->
<!-- evidence: 文档类型和核心目标来自文档头部 -->

## 核心观点

**安装边界规则**：
- **DO NOT** run commands with `sudo` unless the user explicitly approved
- **DO NOT** modify system files outside `~/.agent-reach/`
- **DO NOT** install packages not listed in this guide
- **DO NOT** disable firewalls, security settings, or system protections
- **DO NOT** clone repos, create files, or run commands inside the agent workspace / working directory

**目录规则**：
| Purpose | Directory | Example |
|---------|-----------|---------|
| Config & tokens | `~/.agent-reach/` | `~/.agent-reach/config.json` |
| Upstream tool repos | `~/.agent-reach/tools/` | `~/.agent-reach/tools/xiaoyuzhou/` |
| Temporary files | `/tmp/` | `/tmp/yt-dlp-output/` |
| Skills | `~/.openclaw/skills/agent-reach/` | SKILL.md |

<!-- confidence: EXTRACTED -->
<!-- evidence: 边界规则和目录表格来自文档 "Boundaries" 和 "Directory Rules" 章节 -->

## 关键概念

### 1. 三种安装模式

**推荐：pipx（最省心）**：
```bash
pipx install https://github.com/Panniantong/agent-reach/archive/main.zip
agent-reach install --env=auto
```

**虚拟环境安装**：
```bash
python3 -m venv ~/.agent-reach-venv
source ~/.agent-reach-venv/bin/activate
pip install https://github.com/Panniantong/agent-reach/archive/main.zip
agent-reach install --env=auto
```

**Windows / Microsoft Store Python alias**：
```powershell
py -3 -m venv $env:USERPROFILE\.agent-reach-venv
$env:USERPROFILE\.agent-reach-venv\Scripts\Activate.ps1
python -m pip install https://github.com/Panniantong/agent-reach/archive/main.zip
agent-reach install --env=auto
```

<!-- confidence: EXTRACTED -->
<!-- evidence: 安装命令来自文档 "Step 1: Install the basics" 章节 -->

### 2. 可选渠道配置

**可选渠道列表**：
- 🌟 **OpenCLI**（桌面推荐）— 一次安装，小红书/Reddit/Facebook/Instagram/B站字幕/Twitter 备选全解锁
- 🐦 **Twitter/X** — 搜推文、看时间线（需要登录 Cookie）
- 📈 **雪球** — 股票行情、热门帖子（需要登录 Cookie）
- 🎙️ **小宇宙播客** — 音频转文字（需要免费 Groq Key）
- 📕 **小红书** — 搜索、阅读、评论（桌面走 OpenCLI；服务器用 xiaohongshu-mcp 扫码）
- 📖 **Reddit** — 搜索和阅读帖子（必须登录态：桌面 OpenCLI 或 rdt-cli + Cookie）
- 📘 **Facebook** — 搜索、主页、Feed、群组列表（桌面走 OpenCLI，复用 Chrome 登录态）
- 📷 **Instagram** — 用户搜索、Profile、用户最近帖子、Explore（桌面走 OpenCLI）
- 📺 **B站完整版** — 热门、排行、搜索、视频详情（bili-cli，无需登录）
- 💼 **LinkedIn** — Profile、职位搜索

**安装命令**：
```bash
agent-reach install --env=auto --channels=opencli,xiaohongshu # 桌面用户选小红书
agent-reach install --env=auto --channels=facebook,instagram # Meta 社交渠道
agent-reach install --env=auto --channels=all # 全部安装
```

<!-- confidence: EXTRACTED -->
<!-- evidence: 渠道列表来自文档 "Step 2: Ask the user which optional channels they want" 章节 -->

### 3. Cookie 配置流程

**Cookie-Editor 流程**：
1. 用户在自己的浏览器上登录对应平台
2. 安装 [Cookie-Editor](https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm) Chrome 插件
3. 点击插件 → Export → Header String
4. 把导出的字符串发给 Agent
5. Agent 运行配置命令

**安全建议**：
> 🔒 **Security tip:** For platforms that need cookies or browser sessions (Twitter, XiaoHongShu, Reddit, Facebook, Instagram), we recommend using a **dedicated/secondary account** rather than your main account.

**自动提取（可选）**：
```bash
agent-reach configure --from-browser chrome
```

<!-- confidence: EXTRACTED -->
<!-- evidence: Cookie 配置流程来自文档 "Step 3: Configure things that need user input" 章节 -->

### 4. 特殊平台配置

**Reddit（强制认证）**：
```bash
pipx install 'git+https://github.com/public-clis/rdt-cli.git@5e4fb3720d5c174e976cd425ccc3b879d52cac66'
rdt login # 自动提取浏览器 Cookie
```

**小红书（多后端）**：
- 桌面：OpenCLI（复用浏览器登录态）
- 服务器：xiaohongshu-mcp（扫码登录）
- 存量：xhs-cli（Cookie 导入）

**小宇宙播客（Groq Whisper）**：
```bash
agent-reach configure groq-key gsk_xxxxx
bash ~/.agent-reach/tools/xiaoyuzhou/transcribe.sh https://www.xiaoyuzhoufm.com/episode/xxxxx
```

**LinkedIn（浏览器登录）**：
```bash
linkedin-scraper-mcp --login --no-headless # 本地电脑
# 服务器需 VNC 远程桌面操作
export DISPLAY=:1
linkedin-scraper-mcp --login --no-headless
```

<!-- confidence: EXTRACTED -->
<!-- evidence: 特殊平台配置来自文档各平台配置章节 -->

## 与其他素材的关联

### 安装流程对比

**Agent-Reach 安装 vs 其他 Agent 工具**：
- **Agent-Reach**：一句话安装，自动完成工具选择、安装、配置、测试
- **browser-use**：需要手动 pip install + Playwright 配置
- **OpenClaw**：需要 Gateway 安装 + Skills 配置 + exec 权限设置
- **Goose**：需要 Provider 设置 + Extension 配置

**安装复杂度**：Agent-Reach < browser-use < Goose < OpenClaw

<!-- confidence: INFERRED -->
<!-- evidence: 从安装文档描述推断 Agent-Reach 的安装体验优势 -->

### 相关技术栈

**Agent 集成层**：
- [[OpenClaw]] — 需要 exec 权限设置（`openclaw config set tools.profile "coding"`）
- [[Skills 系统]] — Agent 能力注册机制
- [[MCP 协议]] — 标准化服务接入

**工具实现层**：
- [[OpenCLI]] — 桌面平台浏览器登录态复用
- [[Cookie-Editor]] — Cookie 导出工具
- [[rdt-cli]] — Reddit CLI 工具
- [[xiaohongshu-mcp]] — 小红书 MCP 服务
- [[linkedin-scraper-mcp]] — LinkedIn MCP 服务

<!-- confidence: EXTRACTED -->
<!-- evidence: 工具和技术栈来自文档各配置章节 -->

## 原文精彩摘录

> "Agent Reach is the selector, installer, health checker and router, never a wrapper"

> "If you clone repos or create files in the workspace, it pollutes the user's project directory and can break their agent over time. Keep the workspace clean"

> "Reddit 自 2024 年起要求认证，匿名接口已被封、官方 API 需人工审批"

> "小红书走 OpenCLI——复用你浏览器里的登录态，平时刷过小红书就直接能用，零配置"

> "桌面电脑（推荐 OpenCLI）：小红书走 OpenCLI——复用你浏览器里的登录态，平时刷过小红书就直接能用，零配置"

<!-- confidence: EXTRACTED -->
<!-- evidence: 摘录原文精句 -->

## 相关页面

- [[Agent-Reach]] — 实体页
- [[Agent-Reach GitHub README]] — 项目介绍
- [[Agent集成层]] — 主题页
- [[OpenClaw]] — 全栈 Agent 框架
- [[OpenCLI]] — 桌面平台工具