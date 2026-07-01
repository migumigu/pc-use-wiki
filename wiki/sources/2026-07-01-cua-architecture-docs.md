---
tags: [CUA, 架构文档, Sandbox, Agent-SDK]
created: 2026-07-01
updated: 2026-07-01
sources: []
---

# CUA Architecture — What is Cua?

> 开源沙箱和 Agent 框架，用于 computer-use AI

## 核心定位

Cua 让你创建隔离桌面环境（Linux、macOS、Windows、Android），并构建能看到和控制它们的 Agent。

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 "Open-source sandboxes and agent framework for computer-use AI" -->

一个 SDK，任何 OS，云端或本地。

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 "One SDK, any OS, cloud or local" -->

## Sandbox SDK

```python
import asyncio
from cua import Sandbox, Image, ComputerAgent

async def main():
    async with Sandbox.ephemeral(Image.linux(), local=True) as sb:
        agent = ComputerAgent(
            model="cua/anthropic/claude-sonnet-4-5",
            tools=[sb],
        )
        async for result in agent.run([{
            "role": "user",
            "content": "Open Firefox and search for 'open source computer use'",
        }]):
            for item in result["output"]:
                if item["type"] == "message":
                    print(item["content"][0]["text"])

asyncio.run(main())
```

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档完整示例代码 -->

## Sandbox API

统一 API 跨平台：

```python
async with Sandbox.ephemeral(Image.linux()) as sb:      # cloud Linux container
async with Sandbox.ephemeral(Image.macos()) as sb:      # cloud macOS VM
async with Sandbox.ephemeral(Image.windows()) as sb:    # cloud Windows VM
async with Sandbox.ephemeral(Image.android()) as sb:    # cloud Android VM
async with Sandbox.ephemeral(Image.linux(), local=True) as sb:  # local Docker
```

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 Sandbox API 示例 -->

沙箱内操作：

```python
await sb.shell.run("npm install")           # shell 命令
await sb.screenshot()                       # 截屏
await sb.mouse.click(x, y)                  # 点击
await sb.keyboard.type("hello")             # 输入
await sb.keyboard.press("ctrl+c")           # 组合键
await sb.mobile.tap(x, y)                   # Android touch
async with sb.tunnel.forward(3000) as t:    # 端口转发
    print(t.url)
```

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档沙箱内操作示例 -->

## Agent SDK

Plug 任何 VLM 到 computer-use loop：

```python
agent = ComputerAgent(
    model="cua/anthropic/claude-sonnet-4-5",  # 或 openai, gemini, qwen...
    tools=[sb],
)
async for result in agent.run(messages):
    ...
```

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 Agent SDK 示例 -->

## Image Builder

配置环境：

```python
img = (
    Image.linux()
    .apt_install("curl", "ffmpeg")
    .pip_install("playwright")
    .env(API_KEY="...")
    .run("playwright install chromium")
)
async with Sandbox.ephemeral(img) as sb:
    ...
```

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 Image Builder 示例 -->

## Use Cases

- **AI coding assistants** — Claude Code、Codex 隔离环境
- **Browser and desktop automation** — Agent 与真实 UI 交互
- **Cross-platform testing** — 同测试跑 Linux/macOS/Windows/Android
- **Benchmarking** — OSWorld、ScreenSpot、自定义任务

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 Use Cases -->

## Install

```bash
pip install cua
```

无需账号即可本地 Docker 运行。云端沙箱需 cua.ai API key。

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 Install -->

## 相关实体

- [[CUA]] — 已有实体页
- [[Sandbox-SDK]] — 新增概念
- [[Agent-SDK]] — 新增概念

## 相关主题

- [[桌面应用控制]] — 所属控制对象
- [[Agent集成层]] — Agent SDK

## 相关页面

- [[2026-07-01-trycua-cua-github-readme]] — GitHub README
- [[2026-07-01-cua-driver-technical-docs]] — Driver 技术文档