---
source_id: auto-2026-06-30-turix-cua-technical-analysis
title: AI Agent 新突破！TuriX-CUA 让电脑自己"动手"干活
url: http://m.toutiao.com/group/7620352674357903878/
source_type: tech_blog
tier: 2
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-06-30
collected_by: auto_research
confidence: medium
---

# AI Agent 新突破！TuriX-CUA 让电脑自己"动手"干活

## 概述

TuriX-CUA 是一个计算机使用代理（Computer-Use Agent），能够让 AI 模型像人类一样直接操作桌面应用程序——点击、输入、浏览、复制粘贴。

**项目信息**：
- GitHub: 1.9k stars，190 forks
- 维护团队: TurixAI
- 协议: MIT

## 核心亮点

1. **SOTA 性能**：OSWorld 风格测试集通过率超过 68%，macOS 优于 UI-TARS
2. **无需 API**：只要人能点击的，TuriX 就能操作
3. **多模型架构**：Brain（理解）+ Actor（执行）+ Memory（记忆）+ Planner（规划）
4. **Skills 技能系统**：Markdown 剧本让 AI 学习重复性工作流程
5. **MCP 协议集成**：可与 Claude for Desktop 等第三方代理协作

## 技术架构

### 多模型角色设计

- **Brain**（大脑）：负责理解和规划
- **Actor**（执行者）：负责具体操作
- **Memory**（记忆）：负责任务记忆和压缩
- **Planner**（规划者）：负责步骤分解

### 支持的模型提供商

- Turix 官方 API
- Ollama 本地部署
- Google Gemini
- 其他兼容 VLM

## 发展历程

- **2025 Q3-Q4**：Windows/Linux 跨平台、多模型架构、Planner
- **2026 Q1**：OpenClaw Skill、Ollama 支持、可恢复记忆压缩、Linux 支持
- **2026 Q2 计划**：浏览器自动化、持久化记忆、演示学习

## 适用场景

- 办公自动化：重复性文档处理、数据整理
- 研究辅助：信息搜集、文献整理
- 个人效率：日程管理、多平台内容发布
- 开发测试：UI 自动化测试

## 安全与隐私

不收集任何用户数据，所有操作本地完成。
