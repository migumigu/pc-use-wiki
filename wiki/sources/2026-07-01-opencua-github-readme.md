---
tags: [素材摘要]
created: 2026-07-01
updated: 2026-07-01
sources: []
source_type: GitHub README
source_path: raw/notes/2026-07-01-opencua-analysis.md
images: 0
image_paths: []
---

# OpenCUA GitHub README

> 香港大学XLANG Lab联合月之暗面开源的完整CUA框架，OSWorld SOTA 45.0%，首个大规模跨平台CUA数据集AgentNet

## 基本信息

- **来源类型**：GitHub README + 论文（Tier 1）
- **原文位置**：raw/notes/2026-07-01-opencua-analysis.md
- **消化日期**：2026-07-01

## 核心观点

1. **首个完整开源CUA基础设施**：数据集AgentNet（22.6K任务）+ 标注工具AgentNetTool + 数据处理管道 + 模型权重（7B/32B/72B）+ 评估基准AgentNetBench
2. **OSWorld SOTA**：OpenCUA-72B在OSWorld-Verified达到45.0%，超越Claude 3.7 Sonnet（35.9%）
3. **三层推理架构**：Action Reduction（动作精简）→ State-Action Matching（状态-动作匹配）→ Reflective Long CoT（反思性长链推理）
4. **跨平台覆盖**：Windows/macOS/Ubuntu + 200+应用和网站

## 关键概念

- [[OpenCUA]]
- [[AgentNet]]
- [[三层推理架构]]
- [[OSWorld]]
- [[GUI Grounding]]

## 与其他素材的关联

- 与 [[Computer-Use]] 概念相关：OpenCUA是CUA领域的开源实现
- 与 [[UI-TARS]] 对比：同属GUI Agent，但OpenCUA开源程度更高、数据集规模更大
- 与 [[Claude Computer Use]] 对比：开源替代方案，性能领先

## 原文精彩摘录

> OpenCUA-72B在OSWorld-Verified基准测试中创下45.0%的成功率，确立了开源模型的新SOTA（State-of-the-Art）地位。

> AgentNet是首个大规模跨平台计算机使用数据集（22.6K任务，覆盖Windows/macOS/Ubuntu及200+应用）

> 三层推理架构：Action Reduction → State-Action Matching → Reflective Long CoT

## 相关页面

- [[桌面应用控制]]
- [[OpenCUA]]
- [[AgentNet]]