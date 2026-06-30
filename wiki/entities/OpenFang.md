---
tags: [Agent集成层, 操作系统, Rust, 自主Agent]
created: 2026-07-01
updated: 2026-07-01
sources: [2026-07-01-openfang-github-readme]
---

# OpenFang

> RightNow-AI 开发的生产级 Agent 操作系统，从零用 Rust 构建，让 Agent 能够 7×24 小时自主运行

## 核心概述

OpenFang 是 RightNow-AI 开发的生产级 Agent 操作系统，定位为"Agent Operating System"，不是聊天框架、不是 Python 封装、不是多智能体编排器——而是从零开始构建的完整 AI 操作系统。

**关键数据：**
- **Stars**: 9,078+
- **License**: Apache-2.0 + MIT
- **Commits**: 551+
- **首次提交**: 2026-02-26
- **语言**: Rust
- **代码量**: 约 137K LOC
- **Crates**: 14 个

## 核心创新

### Hands 架构

OpenFang 首创 Hands 概念——预构建的自主能力包，独立运行、按计划执行：

| Hand | 功能 | 描述 |
|------|------|------|
| **Clip** | 视频剪辑 | YouTube URL → 下载 → 剪辑 → 发布到 Telegram/WhatsApp |
| **Lead** | 潜客发现 | 每日发现、丰富、评分、去重、交付 |
| **Collector** | OSINT 情报 | 持续监控、变化检测、知识图谱、告警 |
| **Predictor** | 预测引擎 | 多源信号、校准推理、置信区间、Brier 分数 |
| **Researcher** | 深度研究 | 多源交叉引用、CRAAP 评估、APA 格式报告 |
| **Twitter** | 社媒管理 | 7 种内容格式、排程、互动、审批队列 |
| **Browser** | Web 自动化 | 导航、表单、按钮、Playwright 桥接、购买审批门 |

### 性能基准

| 指标 | OpenFang | OpenClaw | LangGraph | CrewAI | AutoGen |
|------|----------|----------|-----------|--------|---------|
| **冷启动** | 180ms | 5.98s | 2.5s | 3.0s | 4.0s |
| **内存占用** | 40MB | 394MB | 180MB | 200MB | 250MB |
| **安装大小** | 32MB | 500MB | 150MB | 100MB | 200MB |

### 16 层安全体系

1. WASM 双计量沙箱
2. Merkle 哈希链审计
3. 信息流污染追踪
4. Ed25519 签名
5. SSRF 防护
6. Secret 零化
7. OFP 双向认证
8. 能力门 RBAC
9. 安全头
10. 健康端点重编
11. 子进程沙箱
12. Prompt 注入扫描
13. 循环守卫
14. 会话修复
15. 路径遍历防护
16. GCRA 速率限制

## 系统架构

```
openfang-kernel     # 编排、工作流、计量、RBAC、调度
openfang-runtime    # Agent 循环、3 LLM 驱动、53 工具、WASM 沙箱
openfang-api        # 140+ REST/WS/SSE 端点
openfang-channels   # 40 消息适配器
openfang-memory     # SQLite 持久化、向量嵌入
openfang-hands     # 7 自主 Hands
```

## 生态位

### 与同类框架对比

| 维度 | OpenFang | OpenClaw | CrewAI | LangGraph |
|------|----------|----------|--------|-----------|
| **语言** | Rust | TypeScript | Python | Python |
| **自主 Hands** | 7 内置 | 无 | 无 | 无 |
| **安全系统** | 16 | 3 | 1 | 2 |
| **冷启动** | <200ms | ~6s | ~3s | ~2.5s |

## 相关页面

- [[CLI-Anything]] — CLI 工具生成，另一个新兴方向
- [[OpenClaw]] — 同类桌面 Agent 框架
- [[Agent集成层]] — 主题页
