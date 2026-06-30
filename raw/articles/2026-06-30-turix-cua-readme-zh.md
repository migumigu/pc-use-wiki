---
source_id: auto-2026-06-30-turix-cua-readme-zh
title: TuriX-CUA GitHub 中文自述文件
url: https://github.com/TurixAI/TuriX-CUA/blob/main/README.zh-CN.md
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-06-30
collected_by: auto_research
confidence: high
---

# TuriX · AI 驱动的数字牛马

**描述你的任务给你的电脑，以启动你的数字牛马。**

TuriX 让你的强大 AI 模型能在桌面上真正动手操作。它内置 **最先进的计算机使用Agent** （在我们的 OSWorld 风格 Mac 基准上成功率达到 80%，在 OSWorld 上成功率达到 64.2%），同时保持 100% 开源，并对个人与科研用途免费。

## 关键特性

| 能力 | 含义 |
|---|---|
| **SOTA 默认模型** | 在 Mac 上的成功率和速度上超越此前的开源Agent（如 UI‑TARS） |
| **无需应用专用 API** | 只要人能点，TuriX 就能点——WhatsApp、Excel、Outlook、内部工具… |
| **可热插拔的「大脑」** | 无需改代码即可替换 VLM 策略（`config.json`） |
| **MCP 就绪** | 可接入 *Claude for Desktop* 或 **任何** 支持 Model Context Protocol (MCP) 的Agent |
| **Skills（Markdown 手册）** | Planner 仅根据名称/描述选择技能，Brain 使用完整技能内容来指导每一步 |

## 模型性能

### OSWorld 基准测试 — 排行榜第 3 名（50 步）

TuriX 在完整 OSWorld 基准测试中取得 **64.2%（229.88 / 358）** 的成绩，在所有提交的 Agent 中**排名第 3** 。值得注意的是，TuriX 专为 **macOS** 打造和优化，在我们自建的 OSWorld 风格 Mac 基准测试中达到了 **80% 以上的成功率** 。我们**没有使用任何 Linux 训练数据** ，却依然在 OSWorld 的 Linux 环境中取得了前三的成绩。

## 架构设计

多模型四角色设计：
- **brain**: 理解与规划
- **actor**: 执行
- **memory**: 记忆管理
- **planner**: 任务规划（启用时）

支持多种 LLM 提供商：Turix、Ollama、OpenAI、Anthropic、Google。

## OpenClaw 集成

可通过 OpenClaw 使用 TuriX（ClawHub 技能）：
- https://clawhub.ai/Tongyu-Yan/turix-cua

本地 OpenClaw 技能包：
- macOS 版：`main` 分支
- Windows 版：`multi-agent-windows` 分支
- Linux 版：`multi-agent-linux` 分支

## 快速开始

1. 从 https://turix.ai/ 下载应用
2. 创建 Python 3.12 环境
3. 授予 macOS 权限（辅助功能 + Safari 自动化）
4. 配置 API 密钥并运行

## 最新动态

- **2026年5月11日**：TuriX SuperAgent 上线
- **2026年4月8日**：TuriX SuperPower 3.0.0-alpha 发布（TuriX-work + TuriX-code）
- **2026年3月16日**：Linux 支持上线
- **2026年3月9日**：OpenClaw Flash/Fast Mode 技能包

## 许可协议

MIT License
