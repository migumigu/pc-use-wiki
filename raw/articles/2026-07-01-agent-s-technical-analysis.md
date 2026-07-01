---
source_id: auto-2026-07-01-agent-s-technical-analysis
title: Agent S 技术深度分析
url: https://www.simular.ai/articles/agent-s3
source_type: tech_blog
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# Agent S 技术深度分析

## 1. 执行摘要

**Agent S** 是 Simular AI 开发的首个在 OSWorld 基准测试上超越人类水平的 GUI Agent 框架（72.60% vs 72.36% 人类基线）。该框架经历了三代演进，从 2024 年的 20.6% 提升到 2025 年底的 72.60%，是 AI Agent PC 控制领域的重要里程碑。

**核心价值**: 通过 Behavior Best-of-N (bBoN) 机制解决长时序任务的高方差问题，实现可靠的多 rollout 选择。

## 2. 技术全景

### 2.1 三代演进时间线

| 时间 | 版本 | OSWorld 得分 | 关键突破 |
|------|------|--------------|----------|
| 2024-10 | S1 | 20.6% | 基础框架，ICLR 2025 |
| 2025-03 | S2 | 48.8% | 超越 OpenAI CUA 和 Anthropic Computer Use |
| 2025-08 | S2.5 | 新 SOTA | OSWorld-Verified |
| 2025-10 | S3 | 62.6% (+bBoN 69.9%) | 简化框架 + 本地编码 Agent |
| 2025-12 | S3 最终 | **72.60%** | 首个超越人类水平的 GUI Agent |

### 2.2 核心技术：Behavior Best-of-N (bBoN)

**问题根源**: Computer Use Agent (CUA) 在长时序任务中面临高方差挑战。同一个 Agent 可能一次成功、下一次完全失败。

**解决方案**: bBoN 通过三个步骤选择最佳 rollout：

1. **生成 Facts**: 将嘈杂的 step-by-step 运行转换为简洁的事实陈述
2. **构建 Behavior Narrative**: 连接 facts 形成清晰的行为摘要
3. **Judge Selection**: 基于 behavior narrative 选择最佳 rollout

### 2.3 架构演进

**S2 层级架构** (已被简化):
- Manager-Worker 层级设置
- 带来不必要的开销

**S3 简化架构**:
- 移除层级
- 引入原生编码 Agent
- 性能提升约 13%

## 3. 性能分析

### 3.1 OSWorld 基准测试

| 配置 | 得分 |
|------|------|
| S1 (2024) | 20.6% |
| S2 | 48.8% |
| Claude Sonnet 4.5 | 61.4% |
| S3 (单独) | 62.6% |
| S3 + bBoN | 69.9% |
| **S3 最终 + bBoN** | **72.60%** |
| 人类基线 | 72.36% |

### 3.2 跨环境泛化

| 环境 | S3 单独 | + bBoN (3 rollouts) |
|------|---------|---------------------|
| WindowsAgentArena | 50.2% | 56.6% |
| AndroidWorld | 68.1% | 71.6% |

### 3.3 Judge 准确性

- Judge 选择的正确率: 78.4%
- 人类复核正确率: 92.8%
- 推算真实性能: 约 76.3%

## 4. 双模型架构

### 4.1 主模型
- **推荐**: GPT-5 (gpt-5-2025-08-07)
- **支持**: Azure OpenAI, Anthropic, Gemini, Open Router, vLLM

### 4.2 Grounding 模型
- **推荐**: UI-TARS-1.5-7B (ByteDance)
- **功能**: 屏幕坐标 grounding
- **部署**: Hugging Face Inference Endpoints

### 4.3 Grounding 维度
- UI-TARS-1.5-7B: 1920x1080
- UI-TARS-72B: 1000x1000

## 5. 本地编码环境

### 5.1 功能
当启用时，Agent S3 可以调用 `call_code_agent` 执行：
- 数据处理 (CSV、数据库)
- 文件操作
- 系统自动化
- 代码开发
- 文本处理

### 5.2 安全考虑
- 执行任意 Python/Bash 代码
- 与运行用户相同权限
- 仅在可信环境启用
- 建议沙箱运行
- Bash 脚本 30 秒超时

## 6. 与同类工具对比

| 维度 | Agent S | Anthropic Computer Use | OpenAI Operator |
|------|---------|----------------------|-----------------|
| OSWorld 得分 | 72.60% | <50% | <50% |
| 多平台支持 | ✅ Win/Mac/Linux | ✅ | 部分 |
| bBoN 机制 | ✅ | ❌ | ❌ |
| 本地编码 | ✅ | ❌ | ❌ |
| 开源 | ✅ | ❌ | ❌ |

## 7. 局限性与挑战

1. **单显示器限制**: 专为单显示器设计
2. **高方差问题**: bBoN 部分解决但未完全消除
3. **安全风险**: 本地代码执行能力带来安全顾虑
4. **计算成本**: bBoN 需要多次 rollouts

## 8. 知识库索引

**相关实体**:
- [[UI-TARS]] — Grounding 模型 (ByteDance)
- [[CUA]] — Computer Use Agent 基础设施
- [[Computer-Use]] — AI 桌面控制模式
- [[OSWorld]] — GUI Agent 基准测试

**相关主题**:
- [[桌面应用控制]] — AI Agent 控制桌面应用