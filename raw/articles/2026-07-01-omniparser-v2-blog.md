---
source_id: auto-20260701-omni2
title: OmniParser V2 Blog Post - Turning Any LLM into a Computer Use Agent
url: https://www.microsoft.com/en-us/research/articles/omniparser-v2-turning-any-llm-into-a-computer-use-agent/
source_type: official_docs
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# OmniParser V2: Turning Any LLM into a Computer Use Agent

**发布日期**: 2025年2月12日
**作者**: Yadong Lu (高级研究员), Thomas Dhome-Casanova (软件工程师), Jianwei Yang (首席研究员), Ahmed Awadallah (合作伙伴研究经理)
**机构**: Microsoft Research, Microsoft Gen AI

## 核心突破

GUI 自动化要求智能体具备理解和交互用户屏幕的能力，但通用 LLM 作为 GUI 智能体面临挑战：
1. 可靠地识别用户界面中可交互的图标
2. 理解截图中各种元素的语义并准确将预期动作与屏幕上的对应区域关联

OmniParser 通过将 UI 截图从像素空间"分词"为截图中可被 LLM 解释的结构化元素来弥合这一差距。

## V2 关键改进

1. **更高准确率** — 检测更小的可交互元素
2. **更快推理速度** — 延迟相比前一版本降低 **60%**
3. **更大训练数据** — 更大规模交互元素检测数据和图标功能标题数据
4. **减小图像尺寸** — 通过减小图标标题模型的图像尺寸实现延迟降低

## 性能数据

- OmniParser+GPT-4o 在 ScreenSpot Pro 上达到 **39.6%** SOTA 平均准确率
- 对比 GPT-4o 原始得分 **0.8%**，提升巨大
- ScreenSpot Pro 特点：高分辨率屏幕 + 微小目标图标

## OmniTool

Docker 化的 Windows 系统，集成智能体基本工具：
- 屏幕理解 (OmniParser)
- 定位
- 动作规划
- 执行步骤

支持 LLM：OpenAI (4o/o1/o3-mini), DeepSeek (R1), Qwen (2.5VL), Anthropic (Sonnet)

## 风险与缓解

- 使用负责任 AI 数据训练图标标题模型，避免推断个人敏感属性
- 建议用户仅对不包含有害内容的截图应用 OmniParser
- OmniTool 使用 Microsoft Threat Modeling Tool 进行威胁模型分析
- 提供沙盒 Docker 容器、安全指南和示例
- 建议人类保持在循环中以将风险降至最低

## 研究领域

- 人工智能
- 计算机视觉
