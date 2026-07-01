---
tags: [GUI-Agent, 技术架构, bBoN, OSWorld]
created: 2026-07-01
updated: 2026-07-01
sources:
  - "[[2026-07-01-agent-s-technical-analysis]]"
---

# Agent S 技术深度分析

> 首个在 OSWorld 基准测试上超越人类水平的 GUI Agent 框架

## 执行摘要

Agent S 经历了三代演进，从 2024 年的 20.6% 提升到 2025 年底的 72.60%，是 AI Agent PC 控制领域的重要里程碑。核心创新是 Behavior Best-of-N (bBoN) 机制。

## 核心技术：Behavior Best-of-N

### 问题
Computer Use Agent (CUA) 在长时序任务中面临高方差挑战——同一个 Agent 可能一次成功、下一次完全失败。

### 解决方案
1. **生成 Facts**: 将嘈杂的 step-by-step 运行转换为简洁的事实陈述
2. **构建 Behavior Narrative**: 连接 facts 形成清晰的行为摘要
3. **Judge Selection**: 基于 behavior narrative 选择最佳 rollout

## 性能对比

| 配置 | OSWorld 得分 |
|------|--------------|
| S3 单独 | 62.6% |
| S3 + bBoN | 69.9% |
| **S3 最终 + bBoN** | **72.60%** |
| 人类基线 | 72.36% |

## 架构演进

- **S2**: Manager-Worker 层级（已被简化）
- **S3**: 移除层级，引入原生编码 Agent，性能提升约 13%

## 与同类工具对比

| 维度 | Agent S | Anthropic Computer Use | OpenAI Operator |
|------|---------|----------------------|-----------------|
| OSWorld 得分 | 72.60% | <50% | <50% |
| 多平台支持 | ✅ | ✅ | 部分 |
| bBoN 机制 | ✅ | ❌ | ❌ |
| 开源 | ✅ | ❌ | ❌ |

## 相关页面

- [[Agent-S]] — 实体页
- [[CUA]] — 相关概念
- [[OSWorld]] — 基准测试
- [[UI-TARS]] — Grounding 模型