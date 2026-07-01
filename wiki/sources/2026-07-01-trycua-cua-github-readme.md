---
tags: [trycua/cua, CUA, Computer-Use, 后台桌面控制]
created: 2026-07-01
updated: 2026-07-01
sources: []
---

# trycua/cua GitHub README

> Computer-Use Agent 基础设施，四大组件，MIT 许可证

## 基本信息

- **项目名称**：trycua/cua
- **开发者**：trycua
- **GitHub**：https://github.com/trycua/cua
- **许可证**：MIT License
- **主语言**：Python + Rust
- **分类**：桌面应用控制 / Agent基础设施

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "MIT License" -->

## 四大组件

### 1. Cua Drivers（后台桌面控制）

后台 computer-use agent，支持 macOS、Windows，Linux pre-release：

```bash
# macOS / Linux
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/trycua/cua/main/libs/cua-driver/scripts/install.sh)"

# Windows (PowerShell)
irm https://raw.githubusercontent.com/trycua/cua/main/libs/cua-driver/scripts/install.ps1 | iex
```

核心特性：
- Agents 点击、输入、验证而不抢占焦点
- 提供 CLI 和 MCP Server
- 支持 Claude Code、Cursor、Codex、OpenClaw

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "Cua Drivers" 章节 -->

### 2. Cua（Agent 就绪沙箱）

统一 API 跨平台沙箱：

```python
from cua import Sandbox, Image

async with Sandbox.ephemeral(Image.linux()) as sb:  # 或 .macos() .windows() .android()
    result = await sb.shell.run("echo hello")
    screenshot = await sb.screenshot()
    await sb.mouse.click(100, 200)
    await sb.keyboard.type("Hello from Cua!")
```

支持平台：
- Linux container/VM
- macOS
- Windows
- Android
- BYOI (.qcow2/.iso)

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "Cua - Agent-Ready Sandboxes" -->

### 3. Cua-Bench（基准测试）

评估 computer-use agents：

```bash
git clone https://github.com/trycua/cua && cd cua/cua-bench
uv tool install -e . && cb image create linux-docker
cb run dataset datasets/cua-bench-basic --agent cua-agent --max-parallel 4
```

支持基准：
- OSWorld
- ScreenSpot
- Windows Arena

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "Cua-Bench" -->

### 4. Lume（macOS 虚拟化）

Apple Silicon 上创建 macOS/Linux VM：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/trycua/cua/main/libs/lume/scripts/install.sh)"
lume run macos-sequoia-vanilla:latest
```

使用 Apple Virtualization.Framework，near-native 性能。

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "Lume" -->

## MCP 集成

```bash
claude mcp add --transport stdio cua-driver -- cua-driver mcp
```

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 MCP 集成命令 -->

## Packages

| Package | Description |
|---------|-------------|
| cua-driver | 后台 computer-use agent for macOS, Windows, Linux |
| cua-agent | AI agent framework for computer-use tasks |
| cua-sandbox | SDK for creating and controlling sandboxes |
| cua-computer-server | Driver for UI interactions in sandboxes |
| cua-bench | Benchmarks and RL environments |
| lume | macOS/Linux VM management |
| lumier | Docker-compatible interface for Lume VMs |

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 Packages 表 -->

## License

MIT License + 第三方组件：
- Kasm (MIT)
- OmniParser (CC-BY-4.0)
- ultralytics (AGPL-3.0, 可选)

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 License -->

## 相关实体

- [[CUA]] — 已有实体页（补充）
- [[Lume]] — 已有实体页
- [[Cua-driver]] — 已有实体页

## 相关主题

- [[桌面应用控制]] — 所属控制对象
- [[Agent集成层]] — MCP 集成

## 相关页面

- [[2026-07-01-cua-architecture-docs]] — 架构文档
- [[2026-07-01-cua-driver-technical-docs]] — Driver 技术文档