---
tags: [openclaw, skills, agent-skills, clawhub, workshop]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-gh78]
---

# OpenClaw Skills System

> OpenClaw 技能系统详解：6 级加载优先级，AgentSkills 规范，ClawHub 技能市场

## 一句话摘要

OpenClaw 的 Skills 系统遵循 AgentSkills 规范，提供 6 级加载优先级、环境门控、Agent 允许列表、Skill Workshop 提案审核和 ClawHub 技能市场。

## 核心要点

- **6 级加载优先级**：workspace → project → personal → managed → bundled → extra dirs + plugin skills
- **SKILL.md 格式**：YAML frontmatter（name、description 等）+ Markdown 正文
- **环境门控**：OS 过滤、二进制依赖、环境变量、配置开关
- **Agent 允许列表**：全局默认 + 每 Agent 覆盖，非空列表为最终集合
- **Skill Workshop**：提案队列机制，Agent 起草、人工审核后才生效
- **ClawHub 集成**：公共技能市场，安装/更新/验证命令
- **安全机制**：路径 containment、安装策略、秘密注入作用域限制

## 关键概念

- [[OpenClaw]] — 本项目
- [[Agent]] — AI 智能体
- [[MCP]] — 工具调用协议对比

## 相关页面

- [[Agent集成层]] — Agent 集成层主题
