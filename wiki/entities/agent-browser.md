---
tags: [实体, 工具]
created: 2026-06-28
updated: 2026-06-28
sources:
  - wiki/sources/2026-06-28-agent-browser-github-readme.md
  - wiki/sources/2026-06-28-agent-browser-commands-docs.md
  - wiki/sources/2026-06-28-agent-browser-report.md
---

# agent-browser

> Vercel Labs 开源的 AI 原生浏览器自动化 CLI 工具，Rust 编写，通过 refs 机制替代 CSS 选择器实现高效低 Token 的 AI 浏览器控制

## 简介

agent-browser 是 Vercel Labs 于 2026 年 1 月开源的 AI 浏览器自动化 CLI 工具，专为 AI Agent 设计。截至 2026-06-28 已获得 **37,353 Stars**、2,398 Forks，成为浏览器自动化领域的现象级项目。

其核心创新是 **refs 机制**：用 @e1、@e2 等确定性引用替代传统 CSS 选择器，让 AI 直接引用元素编号进行操作，解决了 AI "看不清、点不准"的痛点。

## 关键信息

- **类型**：工具（AI 浏览器自动化 CLI）
- **领域**：浏览器自动化 / AI Agent
- **开发团队**：Vercel Labs
- **GitHub**：https://github.com/vercel-labs/agent-browser
- **官方网站**：https://agent-browser.dev
- **Stars**：37,353（截至 2026-06-28）
- **Forks**：2,398
- **Open Issues**：542
- **许可证**：MIT
- **编程语言**：Rust
- **创建日期**：2026-01-11
- **Commits**：576
- **Branches**：286
- **Tags**：82

## 核心架构

### 客户端-守护进程分离

agent-browser 采用 CLI 客户端 + 后台守护进程的分离架构：

- **CLI Client**：轻量级 Rust 二进制，解析命令并与守护进程通信
- **Daemon**：后台运行的 Rust 服务，管理浏览器实例和会话状态

优势：避免每次命令启动新浏览器，后续命令毫秒级响应。

### 技术栈分层

| 层级 | 技术 | 说明 |
|------|------|------|
| 系统基础层 | Rust | CLI 和守护进程核心语言 |
| 协议层 | CDP (Chrome DevTools Protocol) | 与浏览器通信的标准协议 |
| 接口层 | WebSocket | 实时流传输和远程控制 |
| 工具实现层 | Accessibility Tree | 无障碍树优先的页面表示 |
| Agent 集成层 | Claude Code Skills | AI 原生的技能系统 |

## 核心创新

### 1. refs 机制

传统浏览器自动化使用 CSS 选择器定位元素，对 AI 来说既不稳定又消耗大量 Token。agent-browser 引入 refs 机制：

- 运行 `snapshot` 获取无障碍树快照
- 每个交互元素被分配唯一引用：@e1, @e2, @e3...
- AI 直接引用编号操作元素：`click @e2`, `fill @e3 "text"`
- refs 与 tab 绑定，切换标签后需重新 snapshot

### 2. Token 效率优化

通过无障碍树快照只返回交互元素，大幅降低 Token 消耗：

| 操作 | Playwright MCP | agent-browser | 效率提升 |
|------|----------------|---------------|----------|
| 页面快照 | 8,000-50,000 | 500-800 | **90-95%** |
| 点击操作 | 8,000-12,000 | 200-300 | **95%+** |
| 表单填写 | 8,000-10,000 | 300-500 | **90%+** |

> ⚠️ 以上数据来自第三方测试，置信度为 INFERRED，官方未提供 benchmark

### 3. AI 原生设计

- 命令设计以 AI Agent 为核心用户
- 语义定位器（find role/text/label）
- Claude Code Skill 文件自动同步指令
- 自然语言聊天模式（chat 命令）

## 核心功能

### 浏览器控制
- open, close, goto — 启动/导航/关闭
- tab, window, frame — 多标签/多窗口/iframe

### 元素交互
- click, dblclick, fill, type, press
- hover, focus, select, check/uncheck
- drag, upload, scroll, scrollintoview

### 页面捕获
- screenshot — 截图（支持全屏、标注）
- pdf — 保存 PDF
- snapshot — 无障碍树快照（AI 核心）

### 数据获取
- get text/html/value/attr — 元素内容
- get title/url/count/box — 页面信息
- find role/text/label/placeholder — 语义定位

### 网络控制
- network route — 请求拦截
- network mock — Mock 响应
- network har — HAR 录制
- network requests — 请求跟踪

### 安全与会话
- auth vault — 凭证管理（AES-256-GCM 加密）
- state save/load — 状态持久化
- session isolation — 会话隔离
- 操作确认机制

### 调试工具
- trace, profiler — 性能追踪
- console, errors — 日志查看
- record — 视频录制
- highlight, inspect — 可视化调试

## 安装方式

```bash
# npm 全局安装（推荐）
npm install -g agent-browser
agent-browser install

# Homebrew (macOS)
brew install agent-browser
agent-browser install

# Cargo (Rust)
cargo install agent-browser
agent-browser install
```

`agent-browser install` 会从 Chrome for Testing 下载 Chrome，也可自动检测现有 Chrome/Playwright/Puppeteer 安装。

## 快速开始

```bash
# 打开网站
agent-browser open example.com

# 获取交互元素快照
agent-browser snapshot
# 输出：@e1 button "Sign In" [ref=e1]
#      @e2 input[type=email] "Email" [ref=e2]

# 操作元素
agent-browser click @e2
agent-browser fill @e2 "user@example.com"
agent-browser click @e1

# 截图
agent-browser screenshot result.png
agent-browser close
```

## 生态位分析

### 与同类工具对比

| 维度 | agent-browser | browser-use | Playwright MCP | page-agent |
|------|---------------|-------------|----------------|------------|
| 目标用户 | AI Agents | AI Agents | 开发者 | SaaS 产品 |
| 选择器 | refs (AI-native) | CSS/XPath | CSS/XPath | DOM 文本 |
| 性能 | 显著提升 | 中等 | 较慢 | 页面内快速 |
| Token 消耗 | 大幅降低 | 高 | 极高 | 低 |
| 运行位置 | 外部 CLI | 外部 Python | 外部 MCP | 页面内 JS |
| 语言 | Rust | Python | TypeScript | TypeScript |
| Stars | 37,353 | 已有 | N/A | 20,200+ |

### 适用场景

✅ **最佳场景**：
- AI Agent 浏览器自动化
- 高频交互测试
- Token 敏感场景
- Claude Code/Cursor 等 AI 编程助手

❌ **不适合场景**：
- 需要复杂 Playwright API 的场景
- Firefox/Safari 专项测试
- 极度边缘的功能需求

## 局限性

- **相对年轻**：项目仅开源约 6 个月，部分边缘功能仍在完善
- **浏览器支持**：主要支持 Chrome，Firefox/Safari 仍在开发
- **功能相对简化**：相比 Playwright 功能较少
- **Windows 支持**：早期版本有路径问题，后续版本已改善

## 不同素材中的观点

### 技术分析报告观点

> agent-browser 是现象级项目，增长速度远超同类工具。refs 机制是其核心创新，Token 效率的大幅提升使其在 AI Agent 场景中具有显著优势。

### 与 browser-use 的定位差异

- browser-use：Python 框架，面向测试/爬虫，功能更丰富
- agent-browser：Rust CLI，面向 AI Agent，更轻量、更低 Token

### 与 page-agent 的定位差异

- page-agent：页面内运行，面向 SaaS 产品开发者，给产品加 AI Copilot
- agent-browser：外部 CLI 工具，面向 AI Agent，替代 Playwright/Puppeteer

## 相关页面

- [[浏览器控制]]（主题页）
- [[Agent集成层]]（主题页）
- [[browser-use]] — 同类 AI 浏览器自动化工具
- [[page-agent]] — 页面内 GUI Agent
- [[Playwright]] — 传统浏览器自动化框架
- [[MCP]] — AI 工具调用协议
- [[CDP]] — Chrome DevTools Protocol
- [[浏览器自动化]] — 技术领域概念
- [[Vercel]] — 开发团队
