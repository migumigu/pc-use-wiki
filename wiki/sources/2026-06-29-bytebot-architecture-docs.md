---
tags: [official_docs, architecture, desktop_app]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-bytebot-arch]
---

# Bytebot Architecture Docs

> Bytebot 官方架构文档，详解系统四大组件、数据流、安全架构和部署模式

## 系统架构

Bytebot 采用模块化架构，由四个主要组件组成：

### 1. Bytebot Desktop Container

虚拟 Linux 桌面，提供：
- **Ubuntu 22.04 LTS** 基础系统
- **XFCE4 Desktop** 轻量级桌面
- **bytebotd Daemon** 基于 nutjs 的自动化服务
- **预装应用**: Firefox ESR、Thunderbird、文本编辑器、开发工具
- **noVNC** 远程桌面访问

**关键特性**：
- 与主机系统完全隔离
- 跨平台一致环境
- 可定制软件
- REST API（端口 9990）
- MCP SSE 端点（`/mcp`）

### 2. AI Agent Service

系统的大脑，使用 LLM 编排任务：
- **NestJS Framework** 可扩展后端
- **LLM 集成** 支持 Claude、GPT、Gemini
- **WebSocket 支持** 实时更新
- **Computer Use API Client** 控制桌面
- **Prisma ORM** 数据库操作

**职责**：
- 解释自然语言请求
- 规划计算机动作序列
- 管理任务状态和进度
- 处理错误和重试
- 实时任务更新

### 3. Web Task Interface

用户交互界面：
- **Next.js 15 + TypeScript**
- **嵌入式 VNC 查看器**
- **任务管理 UI** 带状态徽章
- **WebSocket 连接** 实时更新

### 4. PostgreSQL Database

持久化存储：
- Tasks Table：任务详情、状态、元数据
- Messages Table：AI 对话历史
- Prisma ORM 类型安全数据库访问

## 数据流

### 任务执行流程

1. **用户输入** → 自然语言描述任务
2. **任务创建** → Agent 服务创建任务记录加入队列
3. **AI 规划** → LLM 分析任务生成动作计划
4. **动作执行** → Agent 向 bytebotd 发送计算机动作
5. **桌面自动化** → bytebotd 执行鼠标、键盘、截图
6. **结果处理** → Agent 接收结果更新状态
7. **用户反馈** → 实时返回结果和状态

## 安全架构

### 隔离层级

1. **容器隔离**：每个桌面独立 Docker 容器，默认无主机文件系统访问
2. **进程隔离**：bytebotd 以非 root 用户运行，不同服务独立进程
3. **网络安全**：默认仅 localhost 可访问，可配置认证

### API 安全

- Desktop API：默认无认证（仅 localhost），支持 REST 和 MCP
- Agent API：可配置 API 密钥
- Database：密码保护，不对外暴露

## 部署模式

| 模式 | 规模 | 资源 | 用途 |
|------|------|------|------|
| 单用户（开发） | 单实例 | 4GB RAM, 2 CPU | 个人自动化、开发 |
| 生产部署 | 单实例 | 8GB+ RAM, 4+ CPU | 业务自动化 |
| 企业部署 | K8s 编排 | 专用节点 | 组织级自动化 |

## 性能参考

- **Desktop Container**: ~1GB RAM 空闲, 2GB+ 活跃
- **Agent Service**: ~256MB RAM
- **UI Service**: ~128MB RAM
- **Database**: ~256MB RAM

## 相关页面

- [[Bytebot]]
- [[桌面应用控制]]
- [[Computer-Use]]
- [[MCP]]
