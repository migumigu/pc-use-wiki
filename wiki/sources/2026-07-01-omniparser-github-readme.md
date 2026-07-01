---
tags: [OmniParser, 微软, 屏幕解析, GUI Agent, 视觉理解]
created: 2026-07-01
updated: 2026-07-01
sources: [raw/articles/2026-07-01-omniparser-github-readme.md]
---

# OmniParser GitHub README

> Microsoft 开源的纯视觉 GUI 截图解析工具，将 UI 截图"分词"为结构化元素

## 核心信息

- **项目**: microsoft/OmniParser
- **Stars**: 18K-22K+（来源不一致，待确认）
- **许可证**: AGPL (icon_detect) + MIT (icon_caption)
- **最新版本**: v2.0.1 (Sep 2025)
- **Commits**: 154

## 关键技术

1. **交互区域检测模型** — 基于 YOLO 微调，解析屏幕可交互区域
2. **图标功能描述模型** — 提取检测元素的功能语义
3. **OmniTool** — Docker 化 Windows 11 VM，支持 OpenAI/DeepSeek/Qwen/Anthropic 多 LLM

## 性能数据

- ScreenSpot Pro SOTA: 39.6%（GPT-4o 原始 0.8%）
- V2 延迟降低 60%（官方声称，缺乏独立验证）
- Windows Agent Arena 最佳性能

## 版本历史

- V1.0 (2024/09): 初始发布
- V1.5 (2024/11): 更细粒度检测 + 可交互性预测
- V2.0 (2025/02): 大幅改进 + OmniTool

## 相关页面

- [[OmniParser]]
- [[视觉语言模型]]
- [[桌面应用控制]]
- [[Computer-Use]]
