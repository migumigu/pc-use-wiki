---
source_id: auto-2026-07-01-agent-s-github-readme
title: Agent S GitHub README
url: https://github.com/simular-ai/Agent-S
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# Agent S GitHub README

## 核心信息

- **项目**: Agent S (simular-ai/Agent-S)
- **Stars**: 11.7k+
- **许可证**: MIT
- **平台支持**: Windows、macOS、Linux
- **核心功能**: 开源 GUI Agent 框架，让 AI 像人类一样操作电脑

## 三代演进

| 版本 | 时间 | OSWorld 得分 | 亮点 |
|------|------|--------------|------|
| S1 | 2024-10 | 20.6% | 基础框架，ICLR 2025 |
| S2 | 2025-03 | 48.8% | SOTA，超越 OpenAI CUA/Anthropic Computer Use |
| S3 | 2025-10 | 62.6% (+bBoN 69.9%) | 简化框架，本地编码 Agent |
| S3 最终版 | 2025-12 | **72.60%** | 首个超越人类水平的 GUI Agent |

## 技术架构

### 双模型架构
- **主模型**: GPT-5 (gpt-5-2025-08-07) 或其他兼容模型
- **Grounding 模型**: UI-TARS-1.5-7B (ByteDance)

### 核心组件
1. **AgentS3**: 主 Agent 类
2. **OSWorldACI**: Grounding Agent，将动作转换为可执行代码
3. **LocalEnv**: (可选) 本地编码环境，支持 Python/Bash 执行

### Grounding 机制
- 使用 UI-TARS 进行屏幕坐标 grounding
- 支持多种分辨率输出

## Behavior Best-of-N (bBoN)

### 创新点
- 运行多个 rollouts 并行
- 生成 behavior narrative（行为叙述）
- 使用 judge 选择最佳 rollout

### 性能提升
- S3 单独: 62.6%
- +bBoN (3 rollouts): 69.9%
- 最终版 S3 + bBoN: **72.60%** (超越人类 ~72%)

## 安装与使用

```bash
pip install gui-agents

# CLI 方式
agent_s \
    --provider openai \
    --model gpt-5-2025-08-07 \
    --ground_provider huggingface \
    --ground_url http://localhost:8080 \
    --ground_model ui-tars-1.5-7b \
    --grounding_width 1920 \
    --grounding_height 1080
```

## 安全考虑

- 本地编码环境可执行任意 Python/Bash 代码
- 仅在可信环境中启用
- 建议在沙箱中运行

## 相关资源

- [S3 Paper](https://arxiv.org/abs/2510.02250)
- [S2 Paper](https://arxiv.org/abs/2504.00906)
- [S1 Paper](https://arxiv.org/abs/2410.08164)
- [Simular Cloud](https://cloud.simular.ai/)