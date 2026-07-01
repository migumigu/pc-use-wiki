---
tags: [实体, CUA, 开源框架]
created: 2026-07-01
updated: 2026-07-01
sources: [2026-07-01-opencua-github-readme]
---

# OpenCUA

> 香港大学XLANG Lab联合月之暗面开源的完整CUA（Computer-Using Agent）框架，OSWorld SOTA 45.0%，首个大规模跨平台CUA数据集AgentNet

## 简介

OpenCUA是2025年8月发布的开源CUA框架，包含完整的数据集、标注工具、数据处理管道、模型权重和评估基准。该框架打破了商业CUA系统（如Claude Computer Use、OpenAI CUA）的技术封闭，提供从数据标注到模型部署的完整工具链。

## 关键信息

- **类型**：开源框架
- **领域**：CUA（Computer-Using Agent）、GUI自动化、桌面控制
- **发布机构**：香港大学XLANG Lab + 月之暗面（Moonshot AI）+ 斯坦福大学
- **开源协议**：MIT License
- **论文**：arXiv:2508.09123

## 详细内容

### 核心模块

1. **AgentNet数据集**：22.6K人工标注任务，覆盖Windows/macOS/Ubuntu及200+应用
2. **AgentNetTool标注工具**：跨平台GUI记录器，输出屏幕视频+鼠标键盘事件+辅助功能树
3. **数据处理管道**：
   - 第一层：Action Reduction（动作精简）
   - 第二层：State-Action Matching（状态-动作匹配）
   - 第三层：CoT Generator（反思性长链推理）
4. **模型系列**：OpenCUA-7B/32B/72B（基于Qwen-VL架构）
5. **AgentNetBench评估器**：对比模型预测与人类真实轨迹

### 性能基准

| 模型 | OSWorld-Verified (100 Steps) |
|------|------------------------------|
| OpenCUA-72B | **45.0%** (开源SOTA) |
| OpenCUA-32B | 34.8% |
| OpenCUA-7B | 26.6% |
| Claude 3.7 Sonnet | 35.9% |
| UI-TARS-72B | 27.1% |

## 不同素材中的观点

- **[[2026-07-01-opencua-github-readme]]**：首个完整开源CUA基础设施，三层推理架构创新
- **对比观点**：相对于UI-TARS，OpenCUA数据规模化能力更强、工具链更完善

## 相关页面

- [[桌面应用控制]]
- [[Computer-Use]]
- [[UI-TARS]]
- [[AgentNet]]