---
tags: [GUI-Agent, Computer-Use, SOTA, Simular-AI]
created: 2026-07-01
updated: 2026-07-01
sources:
  - "[[2026-07-01-agent-s-github-readme]]"
  - "[[2026-07-01-agent-s-technical-analysis]]"
---

# Agent S

> Simular AI 开发的开源 GUI Agent 框架，首个在 OSWorld 基准测试上超越人类水平的 AI Agent（72.60% vs 72.36% 人类基线）

## 概述

Agent S 是 Simular AI 开发的一个开源框架，旨在通过 Agent-Computer Interface (ACI) 实现自主交互。其核心使命是构建能够从过去经验中学习并在电脑上自主执行复杂任务的智能 GUI Agent。

## 核心里程碑

| 时间 | 事件 | 意义 |
|------|------|------|
| 2024-10 | Agent S1 发布，OSWorld 20.6% | 基础框架 |
| 2025-03 | Agent S2 发布，OSWorld 48.8% | 超越 OpenAI CUA / Anthropic Computer Use |
| 2025-04 | S1 论文获 ICLR 2025 Best Paper Award | 学术界认可 |
| 2025-10 | Agent S3 发布，OSWorld 62.6% (+bBoN 69.9%) | 接近人类水平 |
| 2025-12 | S3 最终版，OSWorld **72.60%** | 首个超越人类的 GUI Agent |

## 技术架构

### 双模型架构
- **主模型**: GPT-5 (推荐)，支持 Azure OpenAI、Anthropic、Gemini、Open Router、vLLM
- **Grounding 模型**: UI-TARS-1.5-7B (ByteDance)

### 核心组件
- **AgentS3**: 主 Agent 类
- **OSWorldACI**: Grounding Agent，将动作转换为可执行代码
- **LocalEnv**: (可选) 本地编码环境，支持 Python/Bash 执行

### 核心技术：Behavior Best-of-N (bBoN)

**问题根源**: 长时序任务中的高方差导致同 Agent 不同时刻表现差异大。

**解决方案**:
1. 运行多个 rollouts 并行
2. 生成 Facts（事实陈述）
3. 构建 Behavior Narrative（行为叙述）
4. Judge Selection 选择最佳结果

**性能提升**: S3 单独 62.6% → +bBoN 69.9% → 最终版 **72.60%**

## 跨平台泛化能力

| 环境 | S3 单独 | + bBoN |
|------|---------|--------|
| WindowsAgentArena | 50.2% | 56.6% |
| AndroidWorld | 68.1% | 71.6% |

## 本地编码环境

启用后可执行：
- 数据处理 (CSV、数据库)
- 文件操作
- 系统自动化
- 代码开发
- 文本处理

**安全警告**: 执行任意 Python/Bash 代码，仅在可信环境启用。

## 平台支持

- ✅ Windows
- ✅ macOS  
- ✅ Linux

## 相关页面

### 实体页
- [[UI-TARS]] — Grounding 模型 (ByteDance)
- [[CUA]] — Computer Use Agent 基础设施
- [[Computer-Use]] — AI 桌面控制模式

### 主题页
- [[桌面应用控制]] — 所属研究领域

### 素材页
- [[2026-07-01-agent-s-github-readme]] — GitHub README 摘要
- [[2026-07-01-agent-s-technical-analysis]] — 技术深度分析