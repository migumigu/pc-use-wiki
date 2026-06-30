---
report_id: 2026-06-30-turix-cua-report-v1.1
title: TuriX-CUA 技术分析报告 v1.1
version: v1.1
created_date: 2026-06-30
updated_date: 2026-06-30
source_count: 3
source_breakdown: Tier1: 2, Tier2: 1
falsification_status: completed
---

# TuriX-CUA 技术分析报告 v1.1

> 生成日期：2026-06-30
> 来源：3 个（Tier1: 2, Tier2: 1）
> 报告版本：v1.1
> 证伪状态：已完成

## 1. 执行摘要

TuriX-CUA 是一个开源的计算机使用代理（Computer-Use Agent），由 TurixAI 团队开发维护，GitHub 获 1.9k Stars，MIT 协议开源。该项目让 AI 模型能够像人类一样直接操作桌面应用程序，通过屏幕截图理解界面、多模态大模型规划行动、模拟鼠标键盘执行任务。

**核心定位**："Talk to your computer, watch it work" — 用户描述任务，AI 动手完成。

**关键数据**（<!-- confidence: EXTRACTED -->）：
- OSWorld Benchmark 第3名（64.2% 成功率）<!-- confidence: UNVERIFIED - 官方声称，待官方技术报告验证 -->
- macOS 专用基准测试 80%+ 成功率 <!-- confidence: UNVERIFIED - 内部基准测试 -->
- 支持 macOS/Windows/Linux 全平台
- 多模型架构设计（brain/actor/memory/planner）

**核心价值**：作为 AI Agent PC 控制领域的新兴开源方案，TuriX-CUA 提供了区别于传统 RPA 工具的视觉驱动方案，无需目标应用的 API 接口，只要人能操作的界面它都能操作。

## 2. 技术全景

### 2.1 核心架构

TuriX-CUA 采用**多模型分工协作架构**，将复杂任务分解为四个独立角色：

```
┌─────────────────────────────────────────────────────────┐
│                    Task Input                            │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│   Planner（规划者）- 负责任务分解和步骤规划              │
└─────────────────────────────────────────────────────────┘
                           │
            ┌──────────────┼──────────────┐
            ▼              ▼              ▼
┌─────────────────┐ ┌─────────────┐ ┌─────────────────┐
│ Brain（大脑）    │ │ Actor（执行者）│ │ Memory（记忆） │
│ 视觉理解        │ │ 操作执行     │ │ 上下文管理     │
│ 决策规划        │ │ 鼠标键盘模拟 │ │ 压缩存储       │
└─────────────────┘ └─────────────┘ └─────────────────┘
            │              │              │
            └──────────────┼──────────────┘
                           ▼
┌─────────────────────────────────────────────────────────┐
│              Desktop Environment                         │
│         （macOS / Windows / Linux）                      │
└─────────────────────────────────────────────────────────┘
```

**各角色职责**（<!-- confidence: EXTRACTED -->）：

| 角色 | 职责 | 输入 | 输出 |
|------|------|------|------|
| **Planner** | 任务分解 | 用户自然语言指令 | 结构化执行计划 |
| **Brain** | 视觉理解与决策 | 屏幕截图 + 历史上下文 | 操作指令 |
| **Actor** | 具体操作执行 | Brain 的指令 | 鼠标/键盘事件 |
| **Memory** | 上下文管理 | 历史操作记录 | 压缩后的上下文 |

### 2.2 技术栈分层

**系统基础层**（<!-- confidence: EXTRACTED -->）：
- 操作系统：macOS/Windows/Linux
- Python 3.12+
- 辅助功能 API（Accessibility API）
- 浏览器自动化（Safari/WebDriver）

**协议接口层**（<!-- confidence: EXTRACTED -->）：
- MCP（Model Context Protocol）- 与 Claude Desktop 集成
- CDP（Chrome DevTools Protocol）- 浏览器控制
- Apple Events/JavaScript - macOS 应用控制

**工具实现层**（<!-- confidence: EXTRACTED -->）：
- 屏幕截图捕获
- 视觉语言模型（VLM）集成
- 多模型调度框架
- Skills 技能系统

**Agent 集成层**（<!-- confidence: EXTRACTED -->）：
- OpenClaw Skill 集成
- 多 Agent 协作（MCP 协议）
- 任务恢复与上下文持久化

### 2.3 关键组件

**配置系统（config.json）**（<!-- confidence: EXTRACTED -->）：

```json
{
  "brain_llm": { "provider": "turix", "model_name": "turix-brain" },
  "actor_llm": { "provider": "turix", "model_name": "turix-actor" },
  "memory_llm": { "provider": "turix", "model_name": "turix-brain" },
  "planner_llm": { "provider": "turix", "model_name": "turix-brain" }
}
```

**Skills 系统**（<!-- confidence: EXTRACTED -->）：
- Markdown 格式的技能剧本
- YAML frontmatter 定义 name/description
- Planner 根据描述选择技能，Brain 使用完整指令

**记忆系统**（<!-- confidence: EXTRACTED -->）：
- 可恢复的记忆压缩
- 支持任务中断后继续
- agent_id 标识任务实例

## 3. 能力分析

### 3.1 支持的能力

| 能力 | 描述 | 置信度 |
|------|------|--------|
| **全应用操作** | 无需特定 API，只要人能点的都能操作 | EXTRACTED |
| **屏幕理解** | 视觉语言模型理解当前界面状态 | EXTRACTED |
| **多平台支持** | macOS/Windows/Linux | EXTRACTED |
| **浏览器自动化** | Safari/Chrome 等主流浏览器 | INFERRED |
| **MCP 集成** | 可与 Claude Desktop 等协作 | EXTRACTED |
| **Skills 系统** | 可定制的重复任务剧本 | EXTRACTED |
| **任务恢复** | 中断后可继续执行 | EXTRACTED |
| **本地模型** | 支持 Ollama 本地部署 | EXTRACTED |

### 3.2 性能指标

| 基准 | 结果 | 排名 | 置信度 |
|------|------|------|--------|
| OSWorld Benchmark（50步） | 64.2%（229.88/358） | 第3名 | UNVERIFIED <!-- 官方声称，待技术报告验证 --> |
| macOS 内部基准 | 80%+ 成功率 | N/A | UNVERIFIED <!-- 内部基准测试 --> |
| 训练数据 | 零 Linux 训练数据 | N/A | UNVERIFIED <!-- 官方声称 --> |

### 3.3 局限性

| 局限性 | 描述 | 置信度 |
|--------|------|--------|
| **需要 API 密钥** | 官方 API 或本地 Ollama | EXTRACTED |
| **权限依赖** | macOS 需要辅助功能权限 | EXTRACTED |
| **视觉模型局限** | 复杂 UI 识别可能出错 | INFERRED |
| **长任务稳定性** | 50+ 步任务成功率下降 | INFERRED |
| **模型成本** | 多模型调用成本较高 | INFERRED |

### 3.4 已知问题

- 技术分析文章提到复杂任务需要清晰具体的指令
- 隐私敏感操作（支付、登录）不建议交给 AI
- 6G 以下显卡运行可能卡顿

## 4. 生态位

### 4.1 与同类工具对比

| 维度 | **TuriX-CUA** | CUA | UI-TARS | browser-use |
|------|---------------|-----|---------|-------------|
| **Stars** | 1.9K | 14.8K | 32.7K | 95K |
| **发布年份** | 2025 | 2024 | 2024 | 2024 |
| **OSWorld 成功率** | 64.2%（官方声称） | ~60% | ~55% | N/A |
| **macOS 优化** | ✅ 80%+ | ⚠️ 一般 | ⚠️ 一般 | ❌ |
| **多模型架构** | ✅ | ❌ | ❌ | ❌ |
| **Skills 系统** | ✅ | ❌ | ❌ | ⚠️ |
| **OpenClaw 集成** | ✅ | ❌ | ❌ | ⚠️ |
| **开源协议** | MIT | MIT | Apache 2.0 | MIT |

### 4.2 适用场景

**最佳场景**（<!-- confidence: INFERRED -->）：
- 跨应用复杂工作流（预订+文档+消息）
- 需要视觉理解的动态界面操作
- 多模型协作的企业自动化流程
- 研究和原型开发

**不适合场景**（<!-- confidence: INFERRED -->）：
- 简单重复的键鼠操作（用 PyAutoGUI 更高效）
- 纯数据处理任务（用脚本更高效）
- 隐私敏感操作（支付、密码）
- 需要 100% 确定性的任务

## 5. 信息来源

| 来源 | 类型 | 置信度 | 主要贡献 |
|------|------|--------|----------|
| [[auto-2026-06-30-turix-cua-readme]] | Tier 1 | EXTRACTED | 核心数据、技术架构 |
| [[auto-2026-06-30-turix-cua-readme-zh]] | Tier 1 | EXTRACTED | 中文技术细节 |
| [[auto-2026-06-30-turix-cua-technical-analysis]] | Tier 2 | INFERRED | 背景分析、竞品对比 |

## 6. 待验证问题

1. **OSWorld 64.2% 成功率**：需要官方技术报告 PDF 交叉验证
2. **macOS 80%+ 成功率**：内部基准测试，缺乏第三方验证
3. **多模型 vs 单模型效果对比**：缺乏消融实验数据
4. **Skills 系统实际效果**：需要实际使用验证

## 7. 版本历史

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| v1.0 | 2026-06-30 | 初始版本 |
| v1.1 | 2026-06-30 | 添加证伪验证结果，更新置信度标注 |
