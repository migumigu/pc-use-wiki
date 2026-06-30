---
tags: [Agent集成层, 视频制作, Skills框架]
created: 2026-07-01
updated: 2026-07-01
sources:
  - wiki/sources/2026-07-01-openmontage-github-readme.md
---

# OpenMontage

> 首个开源 Agentic 视频制作系统，将 AI 编码助手变成完整视频工作室

## 定义

OpenMontage 是首个开源的 Agentic 视频制作系统，定位为"生产级视频工作流系统"。将 AI 编码助手（Claude Code、Cursor、Copilot 等）转变为完整的视频工作室，支持从概念到最终渲染的全程自动化。

## 核心能力

### 支持的流水线

| Pipeline | 产出 | 最佳场景 |
|----------|------|----------|
| Animated Explainer | AI 生成讲解视频 | 教育内容、教程 |
| Animation | 动态图形、动态文字 | 社交媒体、产品演示 |
| Documentary Montage | 真实素材纪录片 | 档案视频、历史题材 |
| Stock Footage Collage | 素材混剪 | 蒙太奇艺术 |
| Character Animation | 角色动画 | 卡通、吉祥物 |
| Talking Head | 口播视频 | 产品介绍 |
| Data Visualization | 数据可视化视频 | 报告、仪表盘 |
| Kinetic Typography | 动态字体 | 品牌内容 |

### 零 API Key 能力

| 能力 | 免费工具 |
|------|----------|
| 语音旁白 | Piper TTS（离线） |
| 开放素材 | Archive.org + NASA + Wikimedia Commons |
| 额外素材 | Pexels + Unsplash + Pixabay |
| 视频合成 | Remotion（React-based） |
| 后期处理 | FFmpeg |
| 字幕 | 内置（带时间轴） |

### 支持的 AI 编码助手

- Claude Code
- Cursor
- GitHub Copilot
- Windsurf
- Codex
- 任何能读取文件和运行代码的 Agent

## 架构设计

```
用户需求 → AI Agent → OpenMontage Pipeline → 12 条生产流水线
                                     ↓
                         52 个 Python 工具
                         500+ 条 Agent Skill
```

**组件构成**：
- `pipeline_defs/` — 12 条生产流水线定义
- `skills/` — 500+ 条 Agent Skill
- `lib/` — 核心库
- `remotion-composer/` — React-based 视频合成
- `tools/` — 52 个 Python 工具

## 技术指标

- Stars：24K+（2026年7月数据，增长迅速）
- 提交：156+
- 流水线：12 条
- Python 工具：52 个
- Agent Skill：500+
- 许可证：AGPL-3.0

## 生态位

OpenMontage 填补了 AI Agent 的"视频生产"缺口，通过固化专业视频制作流程，让 AI 编码助手具备了端到端的视频生产能力。

## 相关页面

- [[Agent集成层]]
- [[browser-use]]
- [[OpenClaw]]
