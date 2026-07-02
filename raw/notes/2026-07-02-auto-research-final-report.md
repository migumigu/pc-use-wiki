---
workflow_id: auto-research-2026-07-02-final
title: 自动研究完成报告
created_date: 2026-07-02
---

# 自动研究完成报告

## 研究概况

**研究方向**：OpenHands 全栈 AI Coding Agent 平台
**研究时间**：2026-07-02
**研究类型**：新趋势研究（2026年AI Agent PC控制）

## 评分矩阵结果

| 项目 | 热度(30%) | 契合度(30%) | 可获取性(25%) | 研究价值(15%) | 总分 | 排名 |
|------|-----------|-------------|---------------|---------------|------|------|
| **OpenHands** | 10 | 10 | 10 | 8 | **9.4** | TOP 1 |
| Memoria | 7 | 10 | 8 | 7 | 8.05 | 2 |
| Cortex Memory | 5 | 10 | 8 | 7 | 7.25 | 3 |
| Origin | 7 | 8 | 7 | 6 | 7.05 | 4 |

## 研究产出

### 素材收集
- 收集素材：2 个
  - Tier 1: GitHub README × 1
  - Tier 2: 技术架构分析 × 1

### 知识库更新
- 新增素材摘要页：2
  - [wiki/sources/2026-07-02-openhands-github-readme.md](file:///d:/superwiki/pc-use-wiki/wiki/sources/2026-07-02-openhands-github-readme.md)
  - [wiki/sources/2026-07-02-openhands-architecture-analysis.md](file:///d:/superwiki/pc-use-wiki/wiki/sources/2026-07-02-openhands-architecture-analysis.md)

- 新增实体页：4
  - [wiki/entities/OpenHands.md](file:///d:/superwiki/pc-use-wiki/wiki/entities/OpenHands.md) — 75.9K Stars 全栈 Agent 工程平台
  - [wiki/entities/EventStream.md](file:///d:/superwiki/pc-use-wiki/wiki/entities/EventStream.md) — 事件流消息总线
  - [wiki/entities/Runtime.md](file:///d:/superwiki/pc-use-wiki/wiki/entities/Runtime.md) — 运行时执行层
  - [wiki/entities/Sandbox.md](file:///d:/superwiki/pc-use-wiki/wiki/entities/Sandbox.md) — 安全沙箱隔离

- 更新主题页：1
  - [wiki/topics/Agent集成层.md](file:///d:/superwiki/pc-use-wiki/wiki/topics/Agent集成层.md)

### 技术报告
- 生成报告：2 版本
  - v1.0: [raw/notes/2026-07-02-openhands-technical-report-v1.0.md](file:///d:/superwiki/pc-use-wiki/raw/notes/2026-07-02-openhands-technical-report-v1.0.md)
  - v1.1: [raw/notes/2026-07-02-openhands-technical-report-v1.1.md](file:///d:/superwiki/pc-use-wiki/raw/notes/2026-07-02-openhands-technical-report-v1.1.md) (证伪修正版)

## 证伪验证结果

| 声明 | 原状态 | 验证结果 | 新状态 |
|------|--------|----------|--------|
| Stars 75.9K | ⚠️ 待验证 | ✅ 多来源一致（75K-76K） | EXTRACTED |
| 1000+ Agent 云端规模 | ⚠️ 待验证 | ✅ 官方 README 声明 | EXTRACTED |
| SWEBench 77.6% SOTA | 未提及 | ✅ 新发现 | EXTRACTED |
| 竞品对比 | ⚠️ 待验证 | ⚠️ 推断 | INFERRED |

## 知识库统计更新

| 指标 | 更新前 | 更新后 | 变化 |
|------|--------|--------|------|
| 素材摘要 | 179 | 181 | +2 |
| 实体页 | 112 | 116 | +4 |
| 主题页 | 6 | 6 | - |
| 综合分析 | 12 | 12 | - |

## 核心发现

### OpenHands 核心特性

1. **五层架构**：SDK + CLI + GUI + Cloud + Enterprise
2. **三层 Harness**：Agent Controller + EventStream + Runtime/Sandbox
3. **SWEBench SOTA**：77.6% 通过率
4. **弹性扩展**：从本地到 1000+ Agent 云端规模
5. **Model-Agnostic**：不绑定特定 LLM 提供商

### 技术创新

- EventStream 事件驱动架构支持异步操作和多 Agent 协作
- Docker/Runtime/Remote 三种运行时类型
- Sandbox 安全隔离机制

## 下一步建议

1. 深入研究 Memoria（TOP 2）—"Git for Memory" 概念
2. 研究 OpenHands vs OpenAI Agents SDK vs LangGraph 三方对比
3. 补充 Runtime 插件系统细节
4. 研究 OpenHands 与现有沙箱方案（E2B、Cube Sandbox）的对比

## 完整报告文件

- 评分矩阵：[raw/notes/2026-07-02-trend-evaluation-matrix.md](file:///d:/superwiki/pc-use-wiki/raw/notes/2026-07-02-trend-evaluation-matrix.md)
- 技术报告 v1.1：[raw/notes/2026-07-02-openhands-technical-report-v1.1.md](file:///d:/superwiki/pc-use-wiki/raw/notes/2026-07-02-openhands-technical-report-v1.1.md)
- 证伪记录：[raw/notes/2026-07-02-openhands-falsification-record.md](file:///d:/superwiki/pc-use-wiki/raw/notes/2026-07-02-openhands-falsification-record.md)
- 工作流状态：[raw/notes/2026-07-02-auto-research-workflow-status.md](file:///d:/superwiki/pc-use-wiki/raw/notes/2026-07-02-auto-research-workflow-status.md)