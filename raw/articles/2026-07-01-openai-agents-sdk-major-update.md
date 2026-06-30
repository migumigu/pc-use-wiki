---
source_id: auto-20260701-oa02
title: OpenAI Agents SDK 重大进化：AI Agent 从"会聊天"到"真正干活"
url: http://m.toutiao.com/group/7630797922552103467/
source_type: tech_blog
tier: 2
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-01
collected_by: auto_research
confidence: medium
---

# OpenAI Agents SDK 重大进化：AI Agent 从"会聊天"到"真正干活"

## 核心摘要

OpenAI 在 2026 年 4 月 15 日正式发布 Agents SDK 重大更新，引入原生沙盒执行、模型原生执行框架（Harness）、可配置记忆与持久化执行能力，标志着 AI Agent 正式迈入生产级基础设施时代。

## 背景

过去一年，市面上涌现了大量 AI Agent 产品——从 Manus 到各类自动化工具。但把一个 Agent Demo 跑通很容易，把它用在真实业务里很难。难点在于：状态无法持久化、执行环境不隔离、长任务一崩全丢、文件权限不可控……这些都是"最后一公里"的工程问题。

TechCrunch 评价："此前企业要把 Agent demo 变成生产系统，需要数周的自定义工程；这次更新把这部分工作压缩到了一个 import 语句。"

## 四大核心新能力

### 1. 原生沙盒执行（Native Sandbox）

Agent 现在可以在完全隔离的计算机环境中运行代码、操作文件，不会影响宿主系统。

架构分离：
- **Harness（编排层）**：指令 / 工具 / 护栏 / 追踪
- **Sandbox（执行层）**：文件 / 命令 / 包安装 / 隔离

沙盒和编排层是两个独立模块，可以分开部署，凭证和编排逻辑不会暴露在模型生成代码的运行环境里。

### 2. 模型原生执行框架（Model-Native Harness）

Harness 是模型之外所有执行组件的统称。新版 SDK 直接内置了：

- **文件系统工具**：读写导航文件，支持 apply-patch 风格的差量编辑
- **Shell 访问**：直接执行命令、安装包、运行脚本
- **可配置记忆**：跨长任务持久化上下文，不再依赖塞满 token 的聊天历史
- **技能（Skills）**：学习和复用已验证的操作序列
- **上下文压缩（Compaction）**：自动压缩冗余历史，防止上下文溢出

### 3. Manifest 清单配置

Manifest 是新增的声明式权限机制，让你精确控制 Agent 能访问哪些文件、能执行哪些操作。

```python
manifest = SandboxManifest(
    allowed_paths=["./workspace/", "./data/"],
    allowed_commands=["python", "pip", "git"],
    max_runtime_seconds=300,
    snapshot_on_exit=True  # 任务结束自动保存快照
)
```

这对企业部署来说非常关键——终于能清楚地告诉审计团队："Agent 只能动这几个目录，只能跑这几条命令。"

### 4. 持久化执行（Durable Execution）

长任务崩溃或超时？进度自动保存，从断点恢复，不再从头重来。这是数小时级别的数据分析、代码重构、文档生成任务进入生产环境的关键前提。

## 即将到来的能力

| 功能 | 说明 |
|------|------|
| Subagents 子代理 | 主 Agent 原生创建和调度子 Agent，形成层级编排 |
| Code Mode | 把写代码+执行代码作为第一公民能力，向 Codex 式自主开发者演进 |
| TypeScript 支持 | 本次先在 Python 落地，TypeScript 版本后续跟进 |

## 多模型支持

SDK 现已正式支持通过 Chat Completions API 兼容层接入 100+ 非 OpenAI 模型，包括 DeepSeek、Anthropic Claude 等。

OpenAI 产品团队 Karan Sharma 表示："我们希望开发者能用自己的基础设施，接入任何 Sandbox 提供方，而不是被锁定在我们的生态里。"

## 发展路径

```
Swarm（2024 实验玩具）
    ↓
Agents SDK 初版（2025.3 轻量框架）
    ↓
本次进化（2026.4.15 企业级 Agent 基础设施）
```

从"实验性开源项目"到"生产级 AI 工作者基础设施"，OpenAI 用一年时间走完了这条路。

## 核心结论

这次更新的核心信号：**Agent 的竞争重点，正在从"会不会调用工具"转向"能不能稳定干活"**。

哪个框架先把执行环境、安全边界、持久化、可观测性做扎实，哪个就能赢得企业开发者的信任。
