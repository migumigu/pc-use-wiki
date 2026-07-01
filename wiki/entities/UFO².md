---
tags: [UFO, 微软, AgentOS, Windows, 桌面自动化, 混合执行, Galaxy]
created: 2026-07-01
updated: 2026-07-01
sources: [raw/articles/2026-07-01-ufo2-github-readme.md, raw/articles/2026-07-01-ufo2-deep-analysis.md]
---

# UFO²

> Microsoft 业内首个深度集成 Windows 的桌面 AgentOS，统一 GUI+API 混合执行范式

## 定义

<!-- confidence: EXTRACTED -->
UFO² 是 Microsoft DKI 团队开发的 Windows 桌面智能体操作系统（AgentOS），通过深度集成 Windows 操作系统，创新性地统一了 GUI 和 API 两种执行范式，实现桌面任务的自动化。

## 演进

- **UFO** (Feb 2024): GUI Agent for Windows
- **UFO²** (Apr 2025): Desktop AgentOS（LTS 状态）
- **UFO³** (Nov 2025): Multi-Device Galaxy（活跃开发）

## 五大核心突破

1. **GUI-API 混合执行** — Puppeteer 统一接口，动态选择 GUI 或 API 执行
2. **混合控件感知** — Windows UIA + OmniParser-v2 视觉识别
3. **动态知识集成** — RAG 构建"越用越强"的知识库
4. **推测式多步执行** — 减少 51.5% LLM 调用
5. **PiP 虚拟桌面** — Windows 原生 RDS 无干扰执行

## 多智能体架构

- **HostAgent**: 中央协调，自然语言任务解析与子任务分解
- **AppAgent**: 每个应用专属 API 接入、界面感知与交互能力

## 性能

- 成功率 30.5%/32.7% vs OpenAI Operator 20.8%/14.3%（论文数据）
- 20+ 主流 Windows 应用验证
- 仅用 GPT-4o 超过 Operator 10%+

## UFO³ Galaxy 扩展

- DAG 任务分解 (Constellation 框架)
- AIP 协议 (WebSocket 安全通信)
- MCP 集成 (模板驱动设备 Agent)
- 支持 Windows + Linux + Android

## 局限性

- 仅 Windows（UFO²），UFO³ 扩展中
- PiP 功能尚未完全发布
- 成功率仍有较大提升空间

## 相关页面

- [[OmniParser]] — UFO² 使用的视觉理解组件
- [[UI-Automation]] — UFO² 深度集成的 Windows 无障碍框架
- [[桌面应用控制]] — 所属控制对象分类
- [[Computer-Use]] — Computer Use Agent 模式
- [[Agent-S]] — 对比：端到端 GUI Agent
- [[Bytebot]] — 对比：容器化桌面 Agent
