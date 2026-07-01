---
tags: [UFO, 微软, AgentOS, Windows, 多设备, Galaxy]
created: 2026-07-01
updated: 2026-07-01
sources: [raw/articles/2026-07-01-ufo2-github-readme.md]
---

# UFO/UFO²/UFO³ GitHub README

> Microsoft Windows 桌面 Agent 系统：从单设备 Agent 到多设备 Galaxy

## 演进时间线

- UFO (Feb 2024): GUI Agent for Windows
- UFO² (Apr 2025): Desktop AgentOS
- UFO³ Galaxy (Nov 2025): Multi-Device Orchestration

## UFO² 核心特性

- Deep Windows OS integration (UIA, Win32, WinCOM)
- Hybrid GUI + API actions (Puppeteer 统一接口)
- Speculative Multi-Action (51% fewer LLM calls)
- Visual + UIA Detection (集成 OmniParser-v2)
- Knowledge Substrate (RAG 文档/演示/执行轨迹)

## UFO³ Galaxy 新特性

- DAG 任务分解 (Constellation 框架)
- 异步并行执行
- AIP 协议 (WebSocket 安全通信)
- MCP 集成 (模板驱动设备 Agent)
- 支持 Windows, Linux, Android

## 论文

- UFO³: arXiv:2511.11332
- UFO²: arXiv:2504.14603
- UFO: arXiv:2402.07939

## 相关页面

- [[UFO²]]
- [[OmniParser]]
- [[桌面应用控制]]
- [[Agent集成层]]
