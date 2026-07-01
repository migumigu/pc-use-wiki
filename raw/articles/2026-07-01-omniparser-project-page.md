---
source_id: auto-20260701-omni3
title: OmniParser Project Page - Pure Vision Based GUI Agent
url: https://microsoft.github.io/OmniParser/
source_type: official_docs
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# OmniParser for Pure Vision Based GUI Agent

**作者**: Yadong Lu¹, Jianwei Yang¹, Yelong Shen², Ahmed Awadallah¹
¹Microsoft Research, ²Microsoft Gen AI
**论文**: arXiv:2408.00203

## Abstract

GPT-4V 等多模态模型作为 GUI 智能体的能力被大大低估，原因在于缺乏稳健的屏幕解析技术：
1. 可靠识别可交互图标
2. 理解截图元素语义并准确定位动作区域

OmniParser 将 UI 截图解析为结构化元素，显著增强 GPT-4V 的动作定位能力。

## 技术架构

### 数据集

1. **可交互图标检测数据集** — 67K 张独特截图图像，标注从 DOM 树派生的可交互图标边界框
   - 从 clueweb 数据集均匀采样 10 万个热门公开 URL
   - 从每个 URL 的 DOM 树收集网页可交互区域边界框

2. **图标描述数据集** — 7K 对图标-描述对，用于微调标题模型

### 模型组件

1. **检测模型** — 解析屏幕上的可交互区域（基于 YOLO 微调）
2. **标题模型** — 提取检测元素的功能语义

### 输出格式

OmniParser 输入为用户任务 + UI 截图，输出：
1. 带有边界框和数字 ID 叠加的解析截图图像
2. 包含提取文本和图标描述的局部语义

## 性能结果

### SeeClick / Mind2Web / AITW 基准

- 所有基准上超过 GPT-4V 基线
- 仅使用截图输入的模型也超过了需要额外信息的 GPT-4V 基线

### 即插即用能力

OmniParser 可与多种视觉语言模型即插即用：
- GPT-4V
- Phi-3.5-V
- Llama-3.2-V

**关键发现**：
- 微调的可交互区域检测 (ID) 模型显著提高任务性能
- 使用 Grounding DINO 模型 (w.o. ID) 对比：GPT-4V、Phi-3.5-V、Llama-3.2-V 所有子类别均有提升
- 图标功能的局部语义 (LS) 对每个视觉语言模型的性能都有显著帮助

## 技术意义

OmniParser 的核心创新在于将 GUI 自动化从"截图理解"提升到"结构化元素解析"，使 LLM 能够基于检索到的可交互元素进行下一步动作预测，而非直接理解原始像素。
