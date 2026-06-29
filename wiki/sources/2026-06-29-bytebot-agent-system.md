---
tags: [official_docs, agent_system, task_management]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-bytebot-agent]
---

# Bytebot Agent System

> Bytebot AI 代理系统文档，多模型集成、任务管理、能力列表详解

## 概述

Bytebot Agent System 将简单的桌面容器转变为智能自主的计算机用户。结合 Claude AI 与结构化任务管理，能够理解自然语言请求并像人类一样执行复杂工作流。

## AI 代理工作原理

### 多模型 AI 集成

**Anthropic Claude**（默认）：
- 复杂推理和视觉理解最佳
- 擅长遵循详细指令
- 桌面自动化任务性能优越

**OpenAI GPT 模型**：
- 通用自动化快速可靠
- 强代码理解和生成
- 日常任务性价比高

**Google Gemini**：
- 高容量任务高效
- 速度与能力平衡好
- 优秀的多语言支持

### 工作流程

1. **理解上下文** — 处理带完整对话历史的自然语言请求
2. **规划动作** — 将复杂任务分解为可执行的计算机动作
3. **实时适应** — 根据屏幕内容调整方法
4. **反馈学习** — 通过对话改进任务执行

## 任务管理系统

### 任务生命周期

PENDING → QUEUED → RUNNING → COMPLETED / FAILED

### 任务属性

每个任务包含：
- **描述**：需要做什么
- **优先级**：Urgent / High / Medium / Low
- **状态**：当前生命周期阶段
- **类型**：立即或定时
- **历史**：所有消息和动作记录

### 智能任务处理

1. **优先级队列**：紧急任务优先执行
2. **错误恢复**：失败动作自动重试
3. **人机回环**：遇到困难时求助
4. **上下文保持**：跨会话保持对话历史

## 实际能力

### Web 自动化
浏览网站、填写表单、提取数据、下载文件、监控变化

### 文档工作
创建文档、编辑电子表格、生成报表、整理文件、格式转换

### 邮件与通讯
通过浏览器访问网页邮箱、读取提取信息、填写联系表单、处理验证流程

### 数据处理
PDF 提取、CSV 处理、可视化生成、摘要生成、数据转换

## 技术架构

### 核心组件

1. **NestJS Agent Service**
   - 集成多 AI 提供商 API
   - 处理 WebSocket 连接
   - 协调桌面 API

2. **消息系统**
   - 结构化对话格式
   - 支持文本和图片
   - 完整上下文保持

3. **数据库 Schema**
   ```
   Tasks: id, description, status, priority, timestamps
   Messages: id, task_id, role, content, timestamps
   Summaries: id, task_id, content, parent_id
   ```

4. **计算机动作桥接**
   - 将 AI 决策转换为桌面动作
   - 处理截图和反馈
   - 管理动作时序
   - 提供错误处理

### API 端点

```javascript
// 创建任务
POST /tasks
{ "description": "...", "priority": "HIGH", "type": "IMMEDIATE" }

// 获取状态
GET /tasks/:id

// 发送消息
POST /tasks/:id/messages

// 获取历史
GET /tasks/:id/messages
```

## Chat UI 特性

- **实时交互**：直播聊天、即时状态更新、进度指示
- **视觉反馈**：嵌入式桌面查看器、截图历史、动作回放
- **任务管理**：创建优先级、查看历史、导出日志

## 安全与隐私

### 数据隔离
- 所有处理在您的基础设施内进行
- 除所选 AI 提供商 API 外不向外部发送数据
- 对话存储在本地
- 完整审计追踪

### 访问控制
- 可配置认证
- API 密钥管理
- 网络隔离选项

## 扩展代理

### 集成点
- 通过 Agent API 的外部 API 调用
- 专业工作流的自定义 AI 提示
- 工具集成的 MCP 协议支持

## 相关页面

- [[Bytebot]]
- [[桌面应用控制]]
- [[Computer-Use]]
- [[LLM]]
- [[MCP]]
