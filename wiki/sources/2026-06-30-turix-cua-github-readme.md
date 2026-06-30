---
tags: [TuriX-CUA, Computer-Use-Agent, desktop-automation, AI-Agent]
created: 2026-06-30
updated: 2026-06-30
sources: [raw/articles/2026-06-30-turix-cua-github-readme.md]
---

# TuriX-CUA GitHub README

> TuriX-CUA 官方 GitHub 仓库 README，核心数据和技术架构来源

## 摘要

TuriX-CUA 是一个开源的计算机使用代理（Computer-Use Agent），让 AI 模型能像人类一样直接操作桌面应用。OSWorld Benchmark 第3名（64.2% 成功率），macOS 基准 80%+ 成功率。

## 关键信息

| 项目 | 值 |
|------|-----|
| **Stars** | ~1.9K |
| **协议** | MIT |
| **GitHub** | https://github.com/TurixAI/TuriX-CUA |
| **发布时间** | 2025年8月 |

## 核心能力

- **SOTA 默认模型**：Mac 上成功率和速度优于 UI-TARS
- **无需应用 API**：只要人能点的都能操作
- **热插拔 Brain**：可更换 VLM 策略
- **MCP 就绪**：支持 Claude Desktop 等集成
- **Skills 系统**：Markdown 剧本

## 技术架构

**多模型四角色**：
- Brain（理解）
- Actor（执行）
- Memory（记忆）
- Planner（规划）

**支持平台**：macOS / Windows / Linux

## 性能数据

| 基准 | 结果 | 置信度 |
|------|------|--------|
| OSWorld（50步） | 64.2%（第3名） | UNVERIFIED |
| macOS 内部基准 | 80%+ | UNVERIFIED |

## 相关页面

- [[TuriX-CUA]] — 项目实体页
- [[桌面应用控制]] — 所属主题
- [[Computer-Use]] — 相关概念
