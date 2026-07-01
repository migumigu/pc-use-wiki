---
tags: [OmniParser, 论文, 数据集, 即插即用, 视觉理解]
created: 2026-07-01
updated: 2026-07-01
sources: [raw/articles/2026-07-01-omniparser-project-page.md]
---

# OmniParser Project Page

> OmniParser 论文主页：纯视觉 GUI Agent 的屏幕解析工具

## 论文信息

- **标题**: OmniParser for Pure Vision Based GUI Agent
- **作者**: Yadong Lu, Jianwei Yang, Yelong Shen, Ahmed Awadallah
- **机构**: Microsoft Research, Microsoft Gen AI
- **arXiv**: 2408.00203

## 训练数据

- 67K 独特截图图像（可交互图标检测，从 10 万 URL 的 DOM 树收集）
- 7K 图标-描述对（图标功能描述）

## 即插即用能力

OmniParser 可与多种 VLM 即插即用，显著提升性能：
- GPT-4V: 所有子类别提升
- Phi-3.5-V: 所有子类别提升
- Llama-3.2-V: 所有子类别提升

**关键发现**：微调的 ID 模型优于 Grounding DINO，局部语义对所有 VLM 都有帮助。

## 相关页面

- [[OmniParser]]
- [[视觉语言模型]]
- [[桌面应用控制]]
