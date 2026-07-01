---
source_id: auto-2026-07-01-deerflow-readme
title: DeerFlow GitHub README
url: https://github.com/bytedance/deer-flow
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# DeerFlow GitHub README

> 字节跳动开源的 SuperAgent Harness 框架，登顶 2026 年 GitHub Trending #1

## 项目基本信息

- **仓库地址**: https://github.com/bytedance/deer-flow
- **Stars**: 72K+（2026年7月数据）
- **提交数**: 2,396 Commits
- **许可证**: MIT License
- **首次发布**: 2026年2月28日
- **开发者**: ByteDance（字节跳动）

## 核心定位

DeerFlow (**D**eep **E**xploration and **E**fficient **R**esearch **Flow**) 是一个开源的 **super agent harness**，编排 **sub-agents**、**memory** 和 **sandboxes** 来执行几乎任何任务——由 **extensible skills** 提供能力。

## DeerFlow 2.0 特性

**DeerFlow 2.0 是全新重写版本**，与 v1 共享零代码。v1 定位为 Deep Research，现已移至 `1.x` 分支。

### 核心功能

| 功能 | 说明 |
|------|------|
| **Skills & Tools** | 可扩展技能和工具，支持 Claude Code 集成 |
| **Sub-Agents** | 子代理编排，处理复杂任务 |
| **Sandbox & File System** | Docker 沙箱执行，安全隔离 |
| **Context Engineering** | 上下文工程，长短期记忆 |
| **Long-Term Memory** | 长期记忆系统，持久化用户偏好 |

### 推荐模型

- Doubao-Seed-2.0-Code（字节跳动）
- DeepSeek v3.2
- Kimi 2.5
- GPT-4o
- Claude 系列

### Sandbox 模式

- **Local Execution**: 在主机上直接运行
- **Docker Execution**: 在隔离 Docker 容器中运行
- **Docker Execution with Kubernetes**: 通过 Provisioner 在 K8s Pod 中运行

### 部署规格

| 部署目标 | 最低配置 | 推荐配置 |
|----------|----------|----------|
| 本地开发 | 4 vCPU, 8 GB RAM | 8 vCPU, 16 GB RAM |
| Docker 开发 | 4 vCPU, 8 GB RAM | 8 vCPU, 16 GB RAM |
| 长期服务器 | 8 vCPU, 16 GB RAM | 16 vCPU, 32 GB RAM |

## 代码结构

```
deer-flow/
├── .agent/skills/       # Agent 技能配置
├── backend/             # 后端服务
├── frontend/            # 前端界面
├── contracts/           # API 规范
├── docker/              # Docker 配置
├── docs/                # 文档
├── skills/public/       # 公共技能库
├── tests/skills/        # 技能测试
├── AGENTS.md            # Agent 指令文档
├── CLAUDE.md            # Claude Code 指令
└── Install.md           # 安装指南
```

## 技术栈

- **后端**: Python + LangChain/LangGraph
- **前端**: React/TypeScript
- **沙箱**: Docker + AIO Sandbox
- **通信**: MCP Server 支持
- **IM 集成**: 飞书/Slack

## 快速启动

```bash
# 克隆仓库
git clone https://github.com/bytedance/deer-flow.git
cd deer-flow

# 配置向导
make setup

# Docker 启动
make docker-init
make docker-start

# 访问
http://localhost:2026
```

## 一行 Agent 设置

```
Help me clone DeerFlow if needed, then bootstrap it for local development by following https://raw.githubusercontent.com/bytedance/deer-flow/main/Install.md
```

## 安全注意事项

⚠️ **不当部署可能引入安全风险**：
- 沙箱模式需要正确配置
- 文件写入权限需要限制
- 建议使用 Docker 隔离执行

## InfoQuest 集成

DeerFlow 已集成 BytePlus 智能搜索和爬取工具 InfoQuest，支持免费在线体验。

## 相关链接

- 官方文档: https://deerflow.tech/en/docs
- 官方博客: https://deerflow.tech/blog/posts
- 字节跳动 Coding Plan: https://www.byteplus.com/activity/codingplan