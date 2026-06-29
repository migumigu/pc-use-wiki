---
tags: [desktop_app, computer_use, container, ai_agent]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-bytebot-gh, auto-20260629-bytebot-arch, auto-20260629-bytebot-desktop, auto-20260629-bytebot-agent, auto-20260629-bytebot-rpa, auto-20260629-bytebot-api]
---

# Bytebot

> 开源容器化虚拟桌面 AI Desktop Agent，让 AI 拥有自己的电脑来完成任务

## 项目概述

Bytebot 是一个自托管的 AI 桌面代理，通过 Docker 容器化的虚拟桌面环境，让 AI 代理拥有完整的 Linux 桌面来执行任务。不同于传统的本地安装型 Computer Use Agent，Bytebot 将整个桌面环境隔离在容器中，提供了更强的安全性、一致性和可复现性。

**基本信息**：
- **开发者**: Tantl Labs 及开源社区
- **开源协议**: Apache 2.0
- **项目状态**: Public archive（已归档，2025年9月最后更新）
- **主要语言**: TypeScript (92.1%)
- **GitHub**: https://github.com/bytebot-ai/bytebot
- **官方网站**: https://bytebot.ai/

<!-- confidence: EXTRACTED -->

## 核心特性

### 容器化虚拟桌面
- 完整 Ubuntu 22.04 LTS + XFCE4 桌面环境
- Docker 容器隔离，与主机完全分离
- 预装 Firefox ESR、Thunderbird、VS Code 等常用工具
- noVNC Web 端桌面访问

### 多模型 AI 支持
- Anthropic Claude（默认，推荐用于桌面自动化）
- OpenAI GPT 系列
- Google Gemini
- 通过 LiteLLM 支持 100+ 其他模型

### MCP 协议原生支持
- Desktop API 暴露 MCP SSE 端点（`/mcp`）
- 可作为 MCP Server 接入 AI 生态
- 工具实现在 `packages/bytebotd/src/mcp/computer-use.tools.ts`

### 程序化控制
- **Agent API**（端口 9991）：高级任务管理 REST API + WebSocket
- **Desktop API**（端口 9990）：低级桌面控制 REST API
- 支持任务创建、状态查询、实时更新

<!-- confidence: EXTRACTED -->

## 系统架构

Bytebot 采用四层模块化架构：

```
┌─────────────────────────────────┐
│   Web Task Interface (Next.js) │
├─────────────────────────────────┤
│   AI Agent Service (NestJS)    │
├─────────────────────────────────┤
│   Desktop Container (Ubuntu)   │
│   - bytebotd (nutjs)           │
│   - MCP SSE endpoint           │
├─────────────────────────────────┤
│   PostgreSQL Database          │
└─────────────────────────────────┘
```

**四大组件**：
1. **虚拟桌面容器**：Ubuntu + XFCE4 + bytebotd 守护进程
2. **AI Agent 服务**：NestJS 后端，LLM 集成，任务编排
3. **Web 任务界面**：Next.js 应用，任务管理 + 实时桌面视图
4. **PostgreSQL 数据库**：任务记录 + 消息历史持久化

<!-- confidence: EXTRACTED -->

## 技术栈分层

**系统基础层**：
- Ubuntu 22.04 LTS、XFCE4、X11、supervisord、Docker

**协议/接口层**：
- REST API（Desktop + Agent）、MCP SSE、WebSocket、VNC、Computer Use 协议

**工具实现层**：
- bytebotd（基于 nutjs 框架）、Prisma ORM、LiteLLM、Docker Compose/Helm

**Agent 集成层**：
- 自然语言理解、任务队列调度、错误自动重试、MCP Server

<!-- confidence: EXTRACTED -->

## 能力边界

### 支持的能力
- Web 自动化（浏览、填表、提取、下载）
- 文档处理（创建、编辑、PDF 提取、格式转换）
- 邮件与通讯（通过浏览器访问网页邮箱）
- 数据处理（CSV、可视化、摘要）
- 多应用工作流（跨系统数据同步、报表生成）
- 容器化部署与定制

### 局限性
- 仅支持 Linux 桌面环境（Ubuntu）
- 资源消耗较高（建议 4GB+ RAM）
- 项目已归档，无活跃开发
- X11 显示服务器，不支持 Wayland
- 复杂多步任务成功率未经验证

<!-- confidence: EXTRACTED -->

## 安全架构

### 三层隔离
1. **容器隔离**：独立 Docker 容器，默认无主机文件系统访问
2. **进程隔离**：bytebotd 以非 root 用户运行
3. **网络安全**：默认仅 localhost 可访问，可配置认证

### 生产环境加固建议
- 启用所有 API 的认证
- 使用 HTTPS/WSS
- 实施网络策略
- 定期轮换凭证

<!-- confidence: EXTRACTED -->

## 部署方式

| 方式 | 适用场景 | 复杂度 |
|------|----------|--------|
| Docker Compose | 个人/开发 | 低 |
| Railway | 快速试用 | 极低 |
| Kubernetes/Helm | 企业级 | 高 |
| 仅桌面容器 | 仅需虚拟桌面 | 低 |

**Docker Compose 快速开始**：
```bash
git clone https://github.com/bytebot-ai/bytebot.git
cd bytebot
echo "ANTHROPIC_API_KEY=sk-ant-..." > docker/.env
docker-compose -f docker/docker-compose.yml up -d
```

<!-- confidence: EXTRACTED -->

## 生态位分析

### 与同类项目对比

| 维度 | Bytebot | [[CUA]] | [[UI-TARS]] | [[Goose]] |
|------|---------|---------|-------------|-----------|
| 部署方式 | Docker 容器 | 多沙箱模式 | 本地应用 | 本地应用 |
| 桌面环境 | Ubuntu + XFCE | 多种沙箱 | 本地桌面 | 本地桌面 |
| 隔离性 | 强（容器） | 强（沙箱） | 弱（本地） | 中 |
| 核心技术 | nutjs + LLM | VLM + 轨迹预测 | VLM + GUI Agent (nutjs) | MCP + Skills |
| MCP 支持 | 原生 (SSE) | 支持 | MCP 工具链 | 原生支持 |
| 项目状态 | 已归档 | 活跃 | 活跃 | 活跃 |
| 适用场景 | 服务端自动化、安全敏感 | 通用桌面代理 | 视觉驱动自动化 | 本地开发助手 |

### 最适用场景
1. 安全敏感环境（完全隔离的自动化环境）
2. 服务端部署（多人共享）
3. 可复现自动化环境
4. CI/CD 集成测试
5. 多租户企业场景

### 不适用场景
1. 深度本地桌面集成
2. 资源受限环境
3. 极低延迟实时交互
4. Windows 专属应用需求
5. 需要长期维护的生产环境

<!-- confidence: INFERRED -->

## 研究价值

尽管 Bytebot 项目已归档，但其技术设计对于研究 Computer Use Agent 仍有重要价值：

1. **容器化部署范式**：展示了如何将完整桌面环境容器化，为安全敏感场景提供参考
2. **分层架构设计**：四层模块化架构（UI/Agent/Desktop/DB）清晰合理
3. **MCP 集成模式**：原生 MCP Server 设计，展示了桌面控制如何接入 MCP 生态
4. **nutjs 自动化栈**：基于 nutjs 框架的实现，与 UI-TARS 等项目形成技术参照
5. **企业级考量**：安全架构、部署模式、RPA 对比等企业视角的分析

<!-- confidence: INFERRED -->

## 相关页面

- [[桌面应用控制]]
- [[Computer-Use]]
- [[CUA]]
- [[UI-TARS]]
- [[Goose]]
- [[MCP]]
- [[Open Interpreter]]

### 相关素材
- [[2026-06-29-bytebot-github-readme]] — 官方 GitHub README
- [[2026-06-29-bytebot-architecture-docs]] — 官方架构文档
- [[2026-06-29-bytebot-desktop-environment]] — 虚拟桌面环境文档
- [[2026-06-29-bytebot-agent-system]] — AI Agent 系统文档
- [[2026-06-29-bytebot-vs-rpa-comparison]] — 与传统 RPA 对比
- [[2026-06-29-bytebot-api-reference]] — API 参考文档
