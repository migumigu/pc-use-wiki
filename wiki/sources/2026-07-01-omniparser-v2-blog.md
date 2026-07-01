---
tags: [OmniParser, 微软, V2, Computer Use, 视觉理解]
created: 2026-07-01
updated: 2026-07-01
sources: [raw/articles/2026-07-01-omniparser-v2-blog.md]
---

# OmniParser V2 Blog Post

> Microsoft 官方博客：OmniParser V2 将任何 LLM 变为 Computer Use Agent

## 核心突破

将 UI 截图从像素空间"分词"为可被 LLM 解释的结构化元素，使 LLM 基于检索到的可交互元素进行动作预测。

## V2 关键改进

1. 检测更小的可交互元素
2. 延迟降低 60%（官方声称，缺乏独立验证）
3. 更大规模训练数据
4. 减小图标标题模型图像尺寸

## OmniTool

Docker 化 Windows 11 VM，开箱即用支持：OpenAI (4o/o1/o3-mini), DeepSeek (R1), Qwen (2.5VL), Anthropic (Sonnet)

## 负责任 AI

- 使用负责任 AI 数据训练图标标题模型
- OmniTool 使用 Microsoft Threat Modeling Tool
- 建议人类保持在循环中

## 相关页面

- [[OmniParser]]
- [[Computer-Use]]
- [[桌面应用控制]]
