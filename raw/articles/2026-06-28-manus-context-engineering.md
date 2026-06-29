---
source_id: auto-2026-06-28-manus-context-engineering
title: AI代理的上下文工程：构建Manus的经验教训
url: https://manus.im/zh-cn/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus
source_type: official_blog
tier: 1
control_object: file_system
tech_layer: agent_integration
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# AI代理的上下文工程：构建Manus的经验教训

> 来源：Manus 官方博客
> 作者：Yichao 'Peak' Ji
> 日期：2025/7/18

## 核心决策

Manus 选择基于前沿模型的上下文学习能力构建 Agent，而非训练端到端模型。

**原因**：上下文工程使交付改进只需几小时而非几周，且与底层模型正交。

## 上下文工程的六大原则

### 1. 文件即单一真理来源

对话历史是线性的、嘈杂的，且包含大量过时的纠错信息。而文件是经过整理的、当前的「最新状态」。

AI 每次行动前，应该主要读取这些文件，而不是回溯几千行的聊天记录。

### 2. 状态显式化

通过外部化记忆（ToDo 文件）记录进度，即使重启电脑也能恢复。

### 3. 上下文窗口极简主义

只喂给 AI 当前步骤必要的信息，保持注意力集中。

### 4. 思考与行动分离

先想再做，避免写到一半发现思路错了导致代码库被污染。

### 5. 围绕 KV-Cache 进行设计

所有 Prompt 设计都要为缓存命中率让路：
- 保持前缀稳定
- 只追加不修改
- 确定性序列化

### 6. 掩码而非移除工具

保留所有工具定义，在解码阶段通过修改 Logits 屏蔽当前不合法的工具。

## 技术细节

### 分而治之

Claude Code 采用「分而治之」和「按需加载」的策略，而非单纯依赖更大的上下文窗口。

### 与 Skill 的关系

Anthropic 的 Skill 系统也体现了文件系统作为 Agent 基础设施的思路。

## 经验教训

上下文工程是一门实验科学，Manus 已经重建了 Agent 框架四次，每次都是在发现了更好的塑造上下文的方式之后。
