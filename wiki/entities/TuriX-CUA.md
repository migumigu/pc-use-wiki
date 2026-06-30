---
tags: [Computer-Use-Agent, desktop-automation, AI-Agent, multi-model, MCP, open-source]
created: 2026-06-30
updated: 2026-06-30
sources: [
  wiki/sources/2026-06-30-turix-cua-github-readme.md,
  wiki/sources/2026-06-30-turix-cua-readme-zh.md,
  wiki/sources/2026-06-30-turix-cua-technical-analysis.md
]
---

# TuriX-CUA

> 开源计算机使用代理，多模型架构驱动桌面自动化，OSWorld Benchmark 第3名

## 概述

TuriX-CUA 是一个开源的计算机使用代理（Computer-Use Agent），由 TurixAI 团队开发维护，GitHub 获约 1.9K Stars，MIT 协议开源。

**核心定位**："Talk to your computer, watch it work" — 用户描述任务，AI 动手完成。

**技术特点**：采用创新的多模型分工架构（Brain/Actor/Memory/Planner），通过屏幕截图理解界面、多模态大模型规划行动、模拟鼠标键盘执行任务。

## 基本信息

| 项目 | 值 |
|------|-----|
| **GitHub** | https://github.com/TurixAI/TuriX-CUA |
| **协议** | MIT |
| **语言** | Python 3.12+ |
| **Stars** | ~1.9K |
| **发布年份** | 2025年8月 |
| **维护团队** | TurixAI |

## 核心能力

| 能力 | 描述 |
|------|------|
| **全应用操作** | 无需特定 API，只要人能点的都能操作 |
| **屏幕理解** | 视觉语言模型理解当前界面状态 |
| **多平台支持** | macOS/Windows/Linux |
| **浏览器自动化** | Safari、Chrome 等主流浏览器 |
| **MCP 集成** | 可与 Claude Desktop 等协作 |
| **Skills 系统** | 可定制的 Markdown 任务剧本 |
| **任务恢复** | 中断后可继续执行 |
| **本地模型** | 支持 Ollama 本地部署 |

## 技术架构

### 多模型四角色设计

| 角色 | 职责 | 输入 | 输出 |
|------|------|------|------|
| **Brain** | 视觉理解与决策 | 屏幕截图 + 历史上下文 | 操作指令 |
| **Actor** | 具体操作执行 | Brain 的指令 | 鼠标/键盘事件 |
| **Memory** | 上下文管理 | 历史操作记录 | 压缩后的上下文 |
| **Planner** | 任务分解 | 用户自然语言指令 | 结构化执行计划 |

### 支持的模型提供商

- **官方 API**：Turix（turix-brain、turix-actor）
- **本地部署**：Ollama（llama3.2-vision 等）
- **云端模型**：Google Gemini、OpenAI GPT 系列

## 性能指标

| 基准 | 结果 | 排名 | 置信度 |
|------|------|------|--------|
| OSWorld Benchmark（50步） | 64.2%（229.88/358） | 第3名 | UNVERIFIED |
| macOS 内部基准 | 80%+ 成功率 | N/A | UNVERIFIED |

## 与同类工具对比

| 维度 | **TuriX-CUA** | CUA | UI-TARS | browser-use |
|------|---------------|-----|---------|-------------|
| **Stars** | 1.9K | 14.8K | 32.7K | 95K |
| **发布年份** | 2025 | 2024 | 2024 | 2024 |
| **OSWorld 成功率** | 64.2% | ~60% | ~55% | N/A |
| **多模型架构** | ✅ | ❌ | ❌ | ❌ |
| **Skills 系统** | ✅ | ❌ | ❌ | ⚠️ |
| **OpenClaw 集成** | ✅ | ❌ | ❌ | ⚠️ |

## OpenClaw 集成

TuriX 可通过 OpenClaw 使用：

- **ClawHub**：https://clawhub.ai/Tongyu-Yan/turix-cua
- **macOS**：main 分支
- **Windows**：multi-agent-windows 分支
- **Linux**：multi-agent-linux 分支

## 局限性

- 需要 API 密钥（官方 API 或本地 Ollama）
- macOS 需要辅助功能权限
- 复杂 UI 识别可能出错
- 50+ 步任务成功率下降

## 相关页面

- [[桌面应用控制]] — 所属主题
- [[Computer-Use]] — 相关概念
- [[CUA]] — 竞品
- [[browser-use]] — 竞品
- [[OpenClaw]] — 相关项目
