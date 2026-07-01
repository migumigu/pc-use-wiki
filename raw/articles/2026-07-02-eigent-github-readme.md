---
source_id: auto-2026-07-02-e1b7
title: Eigent GitHub README — 全球首个多智能体工作流桌面应用
url: https://github.com/eigent-ai/eigent
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# Eigent GitHub README — 全球首个多智能体工作流桌面应用

## 项目概述

Eigent 是全球首个多智能体工作流（Multi-Agent Workforce）桌面应用，基于 CAMEL-AI 开源项目构建，赋能用户构建、管理和部署定制化 AI 工作团队，将复杂工作流程自动化。

## 核心数据

| 指标 | 值 |
|------|-----|
| GitHub Stars | ~9.2K |
| 许可证 | Apache-2.0 |
| 主要语言 | TypeScript/React (前端) + Python (后端) |
| 最新版本 | v1.0.1 |
| 提交数 | 2,196 Commits |
| 分支数 | 783 Branches, 74 Tags |
| 最新更新 | 2026-06-27 |
| 构建基础 | CAMEL-AI + OWL |

## 核心功能列表

1. **Multi-Agent Workforce**：多智能体团队协作，动态拆解任务并行执行
2. **预定义 Agent Worker**：
   - Developer Agent：编写执行代码、运行终端命令
   - Browser Agent：搜索网页、提取内容
   - Document Agent：创建管理文档
   - Multi-Modal Agent：处理图像和音频
3. **MCP 工具集成**：内置大量 Model Context Protocol 工具（网页浏览、代码执行、Notion、Google Suite、Slack 等）
4. **自定义工具安装**：可安装自己的 MCP 工具
5. **Human-in-the-Loop**：任务卡住时自动请求人类输入
6. **100% 开源**：从第一天起完全开源
7. **零配置启动**：无需技术配置
8. **本地部署**：数据完全隔离，零外部依赖
9. **自定义模型支持**：vLLM、Ollama、LM Studio 等本地模型
10. **企业特性**：SSO/访问控制
11. **定时自动化**：Schedule 递归工作流
12. **Skills 系统**：内置 skill-security-auditor 等示例技能

## 技术架构

### 项目结构

```
eigent/
├── src/                    # 前端 React/TypeScript 代码
├── backend/                # Python 后端
├── electron/               # Electron 桌面封装
├── server/                 # 本地部署服务端
├── build/                  # 构建配置
├── config/                 # 配置文件
├── docs/                   # 文档
├── resources/              # 资源文件
├── package.json            # 前端依赖
├── tailwind.config.js      # Tailwind CSS 配置
├── vite.config.ts          # Vite 构建配置
└── vitest.config.ts        # 测试配置
```

### 技术栈

**前端**：
- React + TypeScript
- Vite 构建
- Tailwind CSS 样式
- Electron 桌面封装
- Storybook 组件文档

**后端**：
- Python
- uv 包管理
- CAMEL-AI 框架核心
- OWL 项目基础

### 部署架构

```
┌─────────────────────────────────────────────────┐
│                 Eigent Desktop                    │
│              (Electron 应用)                      │
│                                                  │
│  ┌─────────────┐    ┌─────────────────────────┐ │
│  │  前端 UI     │    │  Agent Workforce 引擎   │ │
│  │  React/TS   │───▶│  任务拆解 + 并行调度     │ │
│  └─────────────┘    └──────────┬──────────────┘ │
│                                │                 │
│              ┌─────────────────┼────────────┐    │
│              ↓                 ↓            ↓    │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────┐│
│  │Developer Agent│ │Browser Agent │ │Doc Agent ││
│  │ 代码/终端     │ │ 网页搜索/提取│ │ 文档管理 ││
│  └──────────────┘ └──────────────┘ └──────────┘│
│                                                  │
│  ┌──────────────────────────────────────────────┐│
│  │           MCP 工具层                          ││
│  │ Web │ Code │ Notion │ Google │ Slack │ Custom ││
│  └──────────────────────────────────────────────┘│
├──────────────────────────────────────────────────┤
│              模型层                               │
│  OpenAI │ Anthropic │ vLLM │ Ollama │ LM Studio │
└──────────────────────────────────────────────────┘
```

### 部署模式

| 模式 | 说明 | 适合场景 |
|------|------|----------|
| Local Deployment | 完全独立，数据完全控制 | 推荐方式 |
| Cloud-Connected | 使用云端后端，快速预览 | 快速体验 |
| Enterprise | SSO、定制开发、SLA | 企业用户 |
| Cloud Version | 托管基础设施 | 团队使用 |

## 与其他工具的对比/关系

| 维度 | Eigent | OpenClaw | UI-TARS-Desktop | Manus |
|------|--------|----------|-----------------|-------|
| 定位 | 多智能体工作流桌面 | 开源 Agent 平台 | 多模态 Agent 桌面 | 通用 AI Agent |
| 核心模式 | Workforce 并行协作 | 单 Agent + 工具链 | 视觉-语言-动作 | 自主规划执行 |
| 桌面端 | ✅ Electron 原生 | ❌ Web/CLI | ✅ Electron | ❌ Web |
| MCP 集成 | ✅ 内置大量工具 | ✅ 支持 | 部分 | 有限 |
| 本地部署 | ✅ 完全支持 | ✅ | ✅ | ❌ |
| 自定义模型 | ✅ | ✅ | ✅ | ❌ |
| 定时自动化 | ✅ | ❌ | ❌ | ❌ |
| Stars | ~9.2K | — | ~33K | — |

## 适用场景

1. **团队协作自动化**：将复杂工作流程拆解为多 Agent 并行执行
2. **桌面级生产力工具**：本地运行，数据不出设备
3. **企业级工作流**：SSO、访问控制、定制开发
4. **研发自动化**：代码生成、数据分析、报告生成
5. **定时任务**：每周报告、每日摘要等递归工作流

## 局限性

1. **桌面端限制**：需要安装 Electron 应用，不如 Web 方便
2. **Agent 协调复杂度**：多 Agent 并行可能产生冲突
3. **模型依赖**：仍需外部 LLM API 或本地模型
4. **项目较新**：v1.0.1，生态和社区尚在成长
5. **记忆系统缺失**：未内置长时记忆机制，依赖外部（如 Mem0）

## 信息来源标注

- GitHub README: https://github.com/eigent-ai/eigent
- 官方网站: https://www.eigent.ai/
- 文档: https://docs.eigent.ai/
- "Eigent:多智能体工作流桌面应用，定制 AI 工作团队"
- "两款开源'AI Cowork'桌面工具——Eigent与AionUi"
- "Eigent:开源Cowork引领多智能体工作流新时代，4天收获4.5K星"
