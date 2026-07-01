---
tags: [OmniParser, 微软, 屏幕解析, GUI Agent, 视觉理解, YOLO, 基础设施]
created: 2026-07-01
updated: 2026-07-01
sources: [raw/articles/2026-07-01-omniparser-github-readme.md, raw/articles/2026-07-01-omniparser-v2-blog.md, raw/articles/2026-07-01-omniparser-project-page.md]
---

# OmniParser

> Microsoft 开源的纯视觉 GUI 截图解析工具，将 UI 截图"分词"为结构化元素，是 GUI Agent 视觉理解层的基础设施

## 定义

<!-- confidence: EXTRACTED -->
OmniParser 是一种将用户界面截图解析为结构化元素的综合方法，通过检测可交互区域和提取图标功能语义，显著增强 LLM 生成准确定位动作的能力。

## 核心架构

```
UI 截图 → [交互区域检测模型] → 边界框 + ID
                                        ↓
        → [图标功能描述模型] → 局部语义(文本+图标描述)
                                        ↓
        → [LLM] → 基于检索的动作预测
```

## 关键技术组件

1. **交互区域检测模型 (icon_detect)** — 基于 YOLO 微调，67K 训练数据，AGPL 许可
2. **图标功能描述模型 (icon_caption)** — Florence/BLIP2 架构，7K 训练数据，MIT 许可
3. **OmniTool** — Docker 化 Windows 11 VM，多 LLM 后端

## 性能

- ScreenSpot Pro SOTA: 39.6%（GPT-4o 原始 0.8%）
- V2 延迟降低 60%（官方声称，缺乏独立验证）
- Windows Agent Arena 最佳性能
- 即插即用 GPT-4V/Phi-3.5-V/Llama-3.2-V

## 版本历史

| 版本 | 日期 | 关键改进 |
|------|------|----------|
| V1.0 | 2024/09 | 初始发布 |
| V1.5 | 2024/11 | 更细粒度检测 + 可交互性预测 |
| V2.0 | 2025/02 | 大幅改进 + OmniTool + 延迟降低 60% |

## 生态位

- **定位**: 视觉理解基础设施（非端到端 Agent）
- **核心价值**: 任何 LLM 即插即用的视觉理解能力
- **被集成**: UFO² 使用 OmniParser-v2 作为混合控件感知组件

## 局限性

- 训练数据主要来自网页 DOM，原生桌面应用覆盖有限
- AGPL 许可证（icon_detect）对商业使用有限制
- 154 Commits，项目规模相对较小

## 相关页面

- [[UFO²]] — 集成 OmniParser-v2 的 Windows AgentOS
- [[视觉语言模型]] — OmniParser 增强的 VLM 能力
- [[Computer-Use]] — Computer Use Agent 视觉理解
- [[桌面应用控制]] — 所属控制对象分类
- [[Agent-S]] — 对比：端到端 GUI Agent
