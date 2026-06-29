---
tags: [github_readme, desktop_app, computer_use]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-bytebot-gh]
---

# Bytebot GitHub README

> Bytebot 官方 GitHub 仓库 README，开源 AI 桌面代理项目介绍

## 项目概述

Bytebot 是一个开源的 AI 桌面代理（AI Desktop Agent），让 AI 拥有自己的电脑来完成任务。不同于纯浏览器代理或传统 RPA 工具，Bytebot 配备完整的虚拟桌面环境。

**官方链接**：
- 🌐 Website: https://bytebot.ai/
- 📚 Documentation: https://docs.bytebot.ai/
- 💬 Discord: https://discord.com/invite/d9ewZkWPTP

## 核心概念

### 什么是 Desktop Agent？

桌面代理是拥有自己电脑的 AI。它可以：
- 使用任何应用（浏览器、邮件客户端、办公工具、IDE）
- 下载和整理文件（自己的文件系统）
- 使用密码管理器登录网站和应用
- 读取和处理文档、PDF、电子表格
- 完成跨程序的复杂多步工作流

### 为什么给 AI 自己的电脑？

1. **完全任务自主**：处理多步骤跨系统任务
2. **文档处理**：上传文件到桌面进行处理
3. **使用真实应用**：桌面应用、脚本、命令行工具

## 四大组件

1. **Virtual Desktop**：完整 Ubuntu Linux 环境，预装应用
2. **AI Agent**：理解任务并控制桌面
3. **Task Interface**：Web UI 创建任务并观看工作
4. **APIs**：REST 端点用于程序化任务创建和桌面控制

## 技术栈

- **Desktop**: Ubuntu 22.04 + XFCE + Firefox + VS Code
- **Agent**: NestJS 服务协调 AI 和桌面动作
- **UI**: Next.js 应用用于任务管理
- **AI Support**: Anthropic Claude, OpenAI GPT, Google Gemini
- **Deployment**: Docker 容器便于自托管

## 部署方式

**Docker Compose**：
```bash
git clone https://github.com/bytebot-ai/bytebot.git
cd bytebot
echo "ANTHROPIC_API_KEY=sk-ant-..." > docker/.env
docker-compose -f docker/docker-compose.yml up -d
```

## 项目状态

- **许可证**: Apache 2.0
- **状态**: Public archive（已归档）
- **最后提交**: 2025年9月11日
- **主要语言**: TypeScript (92.1%)
- **构建方**: Tantl Labs 及开源社区

## 相关页面

- [[Bytebot]]
- [[桌面应用控制]]
- [[Computer-Use]]
- [[CUA]]
- [[UI-TARS]]
- [[Goose]]
