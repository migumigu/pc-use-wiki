---
source_id: auto-20260702-kun01
title: DeepSeek-GUI GitHub README — Kun 本地 Agent 工作台
url: https://github.com/XingYu-Zhong/DeepSeek-GUI
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: agent_integration
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# DeepSeek-GUI GitHub README — Kun 本地 Agent 工作台

> 把 Kun 的高 Token ROI 本地智能体能力带进桌面窗口

## 基本信息

| 属性 | 值 |
|------|-----|
| **GitHub** | https://github.com/XingYu-Zhong/DeepSeek-GUI |
| **Stars** | 4.1K+ |
| **提交数** | 184+ |
| **Issues** | 37 |
| **许可证** | MIT |
| **开发主体** | XingYu-Zhong（个人项目，非 DeepSeek 官方） |
| **技术栈** | TypeScript + Electron + React + Kun |
| **最新版本** | 0.2.8（2026-06-10） |

## 核心定位

把 Kun 的高 Token ROI 本地智能体能力带进桌面窗口：
- **Code**：处理项目
- **写作**：打磨文档
- **连接手机**：接入 IM 与定时任务
- 让每一个 token 尽量花在需求、代码、决策和结果上

## 核心优势：高 Token ROI

### Kun 为什么 Token ROI 高

| Kun 优势 | Token ROI 来源 |
|----------|----------------|
| **Cache-first agent loop** | 稳定 system prompt、工具 schema 和不可变前缀，让 DeepSeek 原生缓存更容易命中，长会话不必反复为同一段背景付费 |
| **按需工具上下文** | MCP 工具很多时，先用 `mcp_search` 找相关工具，再描述和调用目标工具，避免每轮把完整工具目录塞进 prompt |
| **上下文卫生** | 对超长工具结果、长参数、base64 payload、重复工具循环和低价值历史做边界压缩，保留代码、路径、错误、决策和未解决事项 |
| **可见的用量收益** | 运行时跟踪 cache hit/miss、token 用量和节省估算，GUI 会把 Token economy 的收益显示出来 |

### Token Economy 效果
- **90%+ 目标 cache hit 率**：Warm threads 应保持高缓存复用
- **3-step progressive MCP discovery**：Search → describe → call，避免无关 schema 每轮加载
- DeepSeek 原生缓存遥测（prompt_cache_hit_tokens / prompt_cache_miss_tokens）

## 功能亮点

### 桌面聊天工作台
- 多会话、流式回复
- 推理过程、工具调用展示
- 审批请求、文件改动可视化

### 项目级工作区
- 为每个任务选择本地目录
- 按工作区管理会话
- 文件预览、编辑器打开、Git 分支选择

### 新建需求
- 先写需求草稿（背景、目标、验收标准）
- AI 帮忙澄清问题和补齐调研
- 一键生成实施计划

### 计划与 Todo
- `/plan` 或新建需求生成可编辑计划文件
- 右侧计划面板同步线程 Todo
- 长任务拆成可跟踪步骤

### 目标模式
- `/goal` 设置长期目标
- 支持暂停、继续、清除、完成状态
- Agent 持续围绕同一结果推进

### 代码审查
- `/review` 审查未提交改动
- 指定 base branch、commit 或自定义审查范围
- 结果以 findings 卡片呈现

### 变更审查
- 内联 diff 和侧边审查面板
- 记录智能体文件改动
- 在应用内完成 review

### 权限可控
- 只读、工作区可写、完全访问模式
- 工具调用前审批配置

### Skill 与 MCP
- 图形界面创建 Skill
- 保存 MCP 配置、添加常用工具
- 打开对应目录继续管理

### 连接手机
- 独立于普通聊天的后台 Agent
- 飞书 / Lark / 微信接入
- IM webhook / relay
- 按计划自动执行任务

### 定时任务
- 一次性、每日、间隔、手动任务
- 指定工作区、模型、推理强度
- 电脑唤醒时自动执行

### Write 写作模式
- 独立管理 `~/.deepseekgui/write_workspace`
- 自定义写作空间
- Markdown 文件树、live 编辑/预览
- DeepSeek FIM 短补全 / 灵感长补全
- 导出 HTML / PDF / DOC / DOCX

## Kun 运行时架构

### 设计理念
借鉴自 Reasonix 的 cache-first agent loop：
- immutable prompt prefix（带 sha256 持纹）
- append-only session log
- bounded TTL/LRU cache
- inflight tracking with guaranteed cleanup
- mid-turn steering queue
- context compaction（保留 pinned constraints）
- cache / usage telemetry

### 技术架构（简化版）
```
Renderer (React)
 → KunRuntimeProvider
 → preload: dsGui.runtimeRequest / startSse
 → main: LocalHttpRuntimeAdapter
 → kun serve (HTTP + SSE)
 → cache-first AgentLoop
```

### Feature Flags
| 能力 | 标志 | 说明 |
|------|------|------|
| MCP | `capabilities.mcp` | 接入第三方 MCP server |
| Web | `capabilities.web` | `web_fetch` / `web_search` |
| Skills | `capabilities.skills` | 发现 `skill.json` 与 legacy `SKILL.md` |
| Attachments | `capabilities.attachments` | 图片附件、文本模型 fallback |
| Memory | `capabilities.memory` | 跨会话记忆 |
| Subagents | `capabilities.subagents` | 有预算上限的子 agent 委派 |

## 适用人群

✅ **最适合**：
1. 用 DeepSeek 处理真实代码库，但不想一直留在终端的开发者
2. 需要清楚看到智能体改动、需批准操作的团队
3. 长期维护多项目、多会话，需沉淀 Skill/MCP 配置的用户
4. 本地工作台 + DeepSeek API 或 OpenAI 兼容服务

❌ **不适合**：
1. 纯云端模型用户
2. 低资源设备

## 工作台模式

### Code 模式
- 面向真实代码库
- 绑定本地项目目录
- 围绕仓库读写文件、执行命令、审查改动

### Write 模式
- 独立写作空间
- Markdown 文件树
- Live 编辑/预览

### Connect phone 模式
- 飞书 / Lark / 微信接入
- 独立 IM Agent
- 定时任务

## 知识库关联

### 与已研究项目对比
| 项目 | 运行时 | 缓存优化 | 工具发现 | 定位 |
|------|--------|----------|----------|------|
| Kun | ✅ HTTP/SSE | ✅ Cache-first | ✅ MCP search | 本地 Agent 工作台 |
| Qoder | ⚠️ 云端 | ⚠️ 有 | ⚠️ 有 | 企业级 Agentic 平台 |
| OpenClaw | ✅ Gateway | ⚠️ 有 | ✅ Skills | 全栈个人助手 |
| Hermes | ✅ 本地 | ⚠️ 有 | ⚠️ 有 | 自进化 Agent |

### 技术层级定位
- **Agent 集成层**：Cache-first loop + MCP + Skills
- **工具实现层**：文件操作 + Shell + Git + Web
- **协议接口层**：HTTP/SSE + MCP

## 相关页面

- [[桌面应用控制]]（主题页）
- [[Agent集成层]]（主题页）
- [[MCP]]
- [[上下文工程]]
- [[OpenClaw]]