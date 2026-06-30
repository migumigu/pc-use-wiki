---
tags: [OpenFang, RightNow-AI, Agent操作系统, Rust, 自主Agent]
created: 2026-07-01
updated: 2026-07-01
source_type: github_readme
tier: 1
control_object: system_service
tech_layer: agent_integration
confidence: high
---

# OpenFang GitHub README

> RightNow-AI 开发的生产级 Agent 操作系统，从零用 Rust 构建，让 Agent 能够 7×24 小时自主运行

## 素材摘要

OpenFang 定位为"Agent Operating System"，不同于传统 Agent 框架等待用户输入，它让自主 Agent 按照计划 24/7 运行，构建知识图谱、监控系统、生成线索、管理社交媒体。项目通过 Hands 架构提供 7 个预构建的自主能力包。

**关键数据：**
- **Stars**: 9,078+
- **License**: Apache-2.0 + MIT
- **首次提交**: 2026-02-26
- **语言**: Rust
- **代码量**: 约 137K LOC
- **Crates**: 14 个

## 核心要点

1. **Hands 架构**: 7 个内置自主能力（Clip/Lead/Collector/Predictor/Researcher/Twitter/Browser）
2. **极致性能**: 180ms 冷启动 vs OpenClaw 6s
3. **16 层安全**: WASM 沙箱、Merkle 哈希链审计、RBAC 等
4. **40 Channel Adapters**: 支持 Telegram、WhatsApp、Discord 等

## 技术层级

- **系统基础层**: Rust 实现，高性能
- **Agent 集成层**: Hands 架构、自主执行、7×24 运行

## 关联实体

- [[OpenFang]] — 实体页
- [[Agent集成层]] — 主题页

## 相关页面

- [[CLI-Anything]] — 另一个新趋势项目
- [[OpenClaw]] — 同类桌面 Agent 框架
