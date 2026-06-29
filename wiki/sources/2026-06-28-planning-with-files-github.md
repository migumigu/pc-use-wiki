---
source_path: raw/articles/2026-06-28-planning-with-files-github.md
title: "planning-with-files：让AI像Manus一样工作"
url: "https://github.com/OthmanAdi/planning-with-files"
source_type: github_readme
control_object: file_system
tech_layer: agent_integration
collected_date: 2026-06-28
images: 0
image_paths: []
---

# planning-with-files：让AI像Manus一样工作

> 出处：GitHub OthmanAdi/planning-with-files | Stars: 23,105+ | 收集日期：2026-06-28 | 控制对象：文件系统控制

## 一句话核心观点

**让任何 Agent 都能用 markdown 写计划，通过文件系统实现外部化记忆和状态恢复。**

## 素材背景

GitHub 项目 OthmanAdi/planning-with-files，5个月内冲到 23K+ stars，主要用于 Claude Code Skill，实现让 AI 像 Manus 一样利用文件系统进行规划和状态管理。

## 核心观点

### Manus 的上下文工程原则

#### ① 文件即单一真理来源
- 对话历史是线性的、嘈杂的，包含大量过时的纠错信息
- 文件是经过整理的、当前的「最新状态」
- AI 每次行动前，应该主要读取文件，而不是回溯聊天记录

#### ② 状态显式化
Manus 有一个 **ToDo 文件**，明确记录：
```
[x] 步骤1
[ ] 步骤2
```
这被称为外部化记忆。即使关闭终端、重启电脑，AI 再次启动时读取文件，立刻知道进度条在哪里。

#### ③ 上下文窗口极简主义
不把所有相关文件、所有历史对话都丢给 AI，只喂给当前步骤必要的信息。通过将信息拆分到 notes.md、plan.md 和 output.md，AI 在执行某一步时只需要读取相关片段。

#### ④ 思考与行动分离
不让 AI 在一次回复中同时进行思考、规划、写代码：
1. 先在 Notes 上写下调研结果、架构思路
2. 确认无误后，再去修改正式的代码文件

#### ⑤ 围绕 KV-Cache 进行设计
由于 Agent 任务通常呈现**长输入、短输出**的特征，如果不能有效利用 KV-Cache，成本和延迟将无法承受。所有 Prompt 设计都要为缓存命中率让路：
- 保持前缀稳定，不在 System Prompt 中放入动态内容
- 只追加不修改：历史交互记录一旦生成不修剪
- 确定性序列化：JSON 对象的 Key 排序必须固定

#### ⑥ 掩码而非移除工具
动态移除工具会破坏 KV-Cache。正确做法：
- 保留所有工具定义
- 在解码阶段（Decoding）通过修改 Logits 屏蔽当前不合法的工具

### planning-with-files 的三个核心文件

#### ① task_plan.md
记录：
- 当前任务的目标
- 拆解的步骤
- 已完成的进度
- 下一步要做什么

#### ② notes.md
存放：
- 调研资料
- 中间代码片段
- 临时的想法或长文本

#### ③ [deliverable].md
最终生成的代码、文章或报告。纯净的输出结果，不包含思考过程。

### 工作流程
1. AI 被要求规划任务或提到 "planning" 时
2. 自动创建 task_plan.md 并进入规划模式
3. 强制 AI 使用本地文件记录进度和思考
4. 解决大模型"聊久了就忘事"的上下文丢失痛点

## 关键概念

- [[上下文工程]] — AI Agent 开发中对上下文进行精心设计和管理的工程实践
- [[状态显式化]] — 通过外部化记忆记录进度
- [[KV-Cache]] — 长输入短输出特征下的缓存优化
- [[上下文窗口极简主义]] — 只喂给当前步骤必要信息

## 与其他素材的关联

- 与 [[File System as Meta Tool：AI Agent 基础设施新思路]] 都讨论了文件系统作为 Agent 基础设施
- 与 [[AI代理的上下文工程：构建Manus的经验教训]] 都来自 Manus 的实践经验
- 与 [[上下文工程终极指南：从提示工程到Claude Code]] 都涉及上下文工程六大原则

## 所属主题

- [[文件系统控制]]

## 相关页面

- [[上下文工程]]
- [[Manus]]
- [[planning-with-files]]
- [[Agent集成层]]
