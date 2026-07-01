---
tags: [UFO, 微软, AgentOS, Windows, 混合执行, 推测执行]
created: 2026-07-01
updated: 2026-07-01
sources: [raw/articles/2026-07-01-ufo2-deep-analysis.md]
---

# UFO² 深度分析

> 业内首个深度集成 Windows 的桌面 AgentOS，五大核心突破

## 五大核心突破

1. **GUI-API 混合执行** — Puppeteer 统一接口，动态选择执行模式
2. **混合控件感知** — UIA + OmniParser-v2 视觉识别
3. **动态知识集成** — RAG 技术构建持续知识库，"越用越强"
4. **推测式多步执行** — 减少 51.5% LLM 调用
5. **PiP 虚拟桌面** — Windows 原生 RDS，无干扰执行

## 性能评测

- 成功率: UFO² 30.5%/32.7% vs OpenAI Operator 20.8%/14.3%（论文数据，评测细节需确认）
- 20+ 主流 Windows 应用验证
- 仅用 GPT-4o，成功率超 Operator 10%+

## 多智能体架构

- HostAgent: 任务解析与子任务分解
- AppAgent: 每个应用专属 API 接入

## 相关页面

- [[UFO²]]
- [[OmniParser]]
- [[UI-Automation]]
- [[桌面应用控制]]
