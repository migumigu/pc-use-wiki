---
tags: [GUI-Agent, OSWorld, SOTA, bBoN]
created: 2026-07-01
updated: 2026-07-01
sources:
  - "[[2026-07-01-agent-s-github-readme]]"
---

# Agent S GitHub README

> Simular AI 开发的开源 GUI Agent 框架，首个在 OSWorld 超越人类水平的 AI Agent

## 核心信息

- **Stars**: 约 11.7K
- **许可证**: MIT
- **平台支持**: Windows、macOS、Linux
- **核心定位**: 让 AI 像人类一样操作电脑的 Agent-Computer Interface (ACI)

## 三代演进

| 版本 | 时间 | OSWorld 得分 | 关键突破 |
|------|------|--------------|----------|
| S1 | 2024-10 | 20.6% | 基础框架，ICLR 2025 |
| S2 | 2025-03 | 48.8% | 超越 OpenAI CUA / Anthropic Computer Use |
| S3 | 2025-10 | 62.6% (+bBoN 69.9%) | 简化框架 + 本地编码 Agent |
| S3 最终版 | 2025-12 | **72.60%** | 首个超越人类水平的 GUI Agent |

## 技术架构

### 双模型架构
- **主模型**: GPT-5 (gpt-5-2025-08-07)
- **Grounding 模型**: UI-TARS-1.5-7B (ByteDance)

### 核心组件
1. **AgentS3**: 主 Agent 类
2. **OSWorldACI**: Grounding Agent，将动作转换为可执行代码
3. **LocalEnv**: (可选) 本地编码环境

## Behavior Best-of-N (bBoN)

**核心创新**: 通过多 rollout 并行 + behavior narrative + judge selection 选择最佳结果，解决长时序任务的高方差问题。

## 安装使用

```bash
pip install gui-agents

agent_s \
    --provider openai \
    --model gpt-5-2025-08-07 \
    --ground_provider huggingface \
    --ground_url http://localhost:8080 \
    --ground_model ui-tars-1.5-7b
```

## 相关页面

- [[Agent-S]] — 实体页
- [[桌面应用控制]] — 所属主题
- [[CUA]] — 相关技术
- [[UI-TARS]] — Grounding 模型