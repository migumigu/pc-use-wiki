---
tags: [agentic-platform, computer-use, browser-use, multi-agent, 阿里巴巴]
created: 2026-07-02
updated: 2026-07-02
sources:
  - "[[2026-07-02-qoder-official-site]]"
  - "[[2026-07-02-qoder-computer-use-tech]]"
---

# Qoder

> 阿里巴巴推出的 Agentic Platform，集成 Computer Use + Browser Use，面向真实工作的智能体平台

## 基本信息

- **开发方**: 阿里巴巴团队
- **官网**: https://qoder.com
- **用户数**: 1,000,000+ 开发者<!-- confidence: EXTRACTED -->
- **定位**: Agentic Platform for Real Work（面向真实工作的智能体平台）
- **发布时间**: 2025年（Computer Use 5月放出）

## 产品矩阵

| 产品 | 定位 | 平台 |
|------|------|------|
| **Qoder Desktop** | 自主开发桌面客户端 | macOS + Windows |
| **QoderWork** | 日常工作 AI 伙伴 | macOS + Windows + Linux |
| **QoderWake** | 7×24 AI 员工 | 云端托管 |
| **Qoder CLI** | 终端原生 AI 编程伙伴 | 跨平台 |
| **Cloud Agents** | 企业级全托管云 Agent | 云端 |
| **JetBrains Plugin** | JetBrains IDE 插件 | JetBrains |

## 核心能力

### 1. Computer Use（后台桌面控制）

- ✅ 看屏幕、点按钮、输入、拖拽<!-- confidence: EXTRACTED -->
- ✅ **后台运行不打扰用户**<!-- confidence: EXTRACTED -->
- ✅ Mac + Windows 支持（2026年扩展）<!-- confidence: EXTRACTED -->
- ⚠️ 具体技术实现未公开<!-- confidence: UNVERIFIED -->

### 2. Browser Use（浏览器控制）

- ✅ 内置浏览器<!-- confidence: EXTRACTED -->
- ✅ 开发者模式、元素选择<!-- confidence: EXTRACTED -->
- ✅ Chrome Devtools MCP 集成<!-- confidence: EXTRACTED -->

### 3. Multi-Agent Expert Collaboration

- ✅ 多个专家 Agent 协作<!-- confidence: EXTRACTED -->
- ✅ 每个 Agent 独立工作区<!-- confidence: EXTRACTED -->
- ✅ Memory and Rules（用户学习）<!-- confidence: EXTRACTED -->

### 4. Quest Mode（自动规划）

- ✅ 自动生成技术设计文档（Spec）<!-- confidence: EXTRACTED -->
- ✅ Repo Wiki 持续同步<!-- confidence: EXTRACTED -->
- ✅ 将 AI 从被动助手转为主动项目执行者<!-- confidence: EXTRACTED -->

### 5. Skills and Plugins

- ✅ 通过强大工具扩展能力<!-- confidence: EXTRACTED -->
- ✅ 图形化配置<!-- confidence: EXTRACTED -->

### 6. Wikilize Your Codebase

- ✅ 揭示架构和设计<!-- confidence: EXTRACTED -->
- ✅ 项目知识管理<!-- confidence: EXTRACTED -->

## 技术架构

### Computer Use 双层控制

```
┌─────────────────────────────────────────┐
│       Qoder Agentic Platform             │
├──────────┬──────────┬──────────┬─────────┤
│ Desktop  │ Work     │ Wake     │ CLI     │
└──────────┴──────────┴──────────┴─────────┘
           ↓
┌─────────────────────────────────────────┐
│   Multi-Agent Expert Collaboration      │
│   (专家Agent协作 + Memory + Skills)      │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│   Computer Use + Browser Use 双层控制   │
│   (后台桌面 + 内置浏览器 + DevTools MCP) │
└─────────────────────────────────────────┘
```

### Token Economy

- **支持文件**: 最多 100k<!-- confidence: EXTRACTED -->
- **Agent 执行时间**: 最长 26 小时<!-- confidence: EXTRACTED -->

## 与同类对比

| 维度 | Qoder | Kun | OpenClaw | Hermes |
|------|-------|-----|----------|--------|
| **定位** | 企业级 Agentic 平台 | 本地 Agent 工作台 | 全栈个人助手 | 自进化 Agent |
| **Computer Use** | ✅ 内置后台 | ❌ 无 | ⚠️ 有限 | ✅ cua-driver |
| **Browser Use** | ✅ 内置 | ⚠️ Web 工具 | ✅ 内置 CDP | ⚠️ 有限 |
| **Token ROI** | ⚠️ 有限 | ✅ 核心优势 | ⚠️ 有限 | ⚠️ 有限 |
| **多 Agent** | ✅ 专家协作 | ⚠️ 有预算 | ✅ 路由 + 子 Agent | ⚠️ 有限 |
| **开源** | ❌ 闭源平台 | ✅ MIT | ✅ 完全开源 | ✅ 完全开源 |
| **企业场景** | ✅ 法律/财务/HR | ⚠️ 开发为主 | ✅ 多平台 | ⚠️ 有限 |

## 适用场景

✅ **最适合**：
- 真实软件开发（端到端规划到部署）
- 企业级日常工作（法律、财务、营销、HR）
- 多 Agent 协作复杂任务
- 长期运行的项目维护
- 代码库理解和知识管理

❌ **不适合**：
- 简单问答
- 纯本地模型运行（需云端 API）

## 局限性

1. ❌ 闭源平台，无法审计内部实现<!-- confidence: EXTRACTED -->
2. ⚠️ 云端依赖，本地模型支持有限<!-- confidence: INFERRED -->
3. ⚠️ Computer Use 技术细节未公开<!-- confidence: UNVERIFIED -->
4. ⚠️ 国内用户可能需要特殊网络配置<!-- confidence: INFERRED -->

## 社区反馈

**Santiago（ml.school 创始人）**：
几天后更喜欢 Qoder 而不是 Windsurf——更稳定。Quest Mode 和自动 Wiki 超棒。

**Charly Wargnier（Developer Advocate）**：
一个棘手的 benchmark bugfix 卡住了 Cursor、Kiro、Trae 和 Gemini CLI，Qoder 在约 30 分钟内解决了。

## 发展历程

- **2025年5月**：放出 Computer Use Agent，原本只在 Mac 上可用
- **2026年**：Windows 支持上线，后台运行能力增强，平台以天为单位迭代

## 相关页面

- [[Computer-Use]] — 桌面控制技术
- [[桌面应用控制]] — 所属主题
- [[浏览器控制]] — Browser Use 所属主题
- [[Agent集成层]] — Multi-Agent 所属主题
- [[Kun]] — 对比实体（本地 Agent 工作台）
- [[OpenClaw]] — 对比实体（全栈个人助手）
- [[hermes-agent]] — 对比实体（自进化 Agent）