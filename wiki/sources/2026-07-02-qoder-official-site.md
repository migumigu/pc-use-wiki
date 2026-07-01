# Qoder 官网 — Agentic Platform for Real Work

> **来源类型**：Tier 1 官方文档 | **置信度**：EXTRACTED | **收集日期**：2026-07-02

**原文链接**：https://qoder.com

---

## 核心要点

Qoder 是阿里巴巴推出的 Agentic Platform，定位为"面向真实工作的智能体平台"。核心产品包括 Qoder Desktop（开发）、QoderWork（日常）、QoderWake（7×24）、Qoder CLI（终端）、Cloud Agents（企业）和 JetBrains Plugin。

### 核心特性

1. **Multi-Agent Expert Collaboration**
   - 多个专家 Agent 协作端到端完成任务
   - 每个 Agent 独立工作区、工具策略、Skills 列表

2. **Computer Use + Browser Use**
   - Computer Use：后台桌面控制，看屏幕、点按钮、输入、拖拽
   - Browser Use：内置浏览器，开发者模式，元素选择，Chrome Devtools MCP
   - 双层能力叠加，场景边界扩展

3. **Quest Mode**
   - 自动生成技术设计文档（Spec）
   - Repo Wiki 持续同步项目结构和实现细节
   - 将 AI 从被动助手转为主动项目执行者

4. **Memory and Rules**
   - 从用户学习，按用户方式工作
   - 跨会话记忆

5. **Skills and Plugins**
   - 通过强大工具扩展能力
   - 图形化配置

### 技术栈

- **产品矩阵**：Desktop + Work + Wake + CLI + Cloud Agents + JetBrains Plugin
- **用户数**：1,000,000+ 开发者（官网数据）
- **支持文件**：最多 100k 文件进行代码库分析
- **Agent 执行时间**：最长 26 小时

---

## 技术细节

### Computer Use 实现

**后台运行（关键创新）**：
- Agent 在后台操作，用户可继续使用电脑<!-- confidence: EXTRACTED -->
- 真实界面操作，直接控制桌面元素<!-- confidence: EXTRACTED -->
- 跨平台支持：Mac（原首发）+ Windows（2026年扩展）<!-- confidence: EXTRACTED -->
- ⚠️ 具体技术实现未公开<!-- confidence: UNVERIFIED -->

### Browser Use 集成

- 内置浏览器<!-- confidence: EXTRACTED -->
- 开发者模式、元素选择<!-- confidence: EXTRACTED -->
- 可安装 Chrome Devtools MCP<!-- confidence: EXTRACTED -->

### 社区反馈

**Santiago（ml.school 创始人）**：
几天后更喜欢 Qoder 而不是 Windsurf——更稳定。Quest Mode 和自动 Wiki 超棒。

**Charly Wargnier（Developer Advocate）**：
一个棘手的 benchmark bugfix 卡住了 Cursor、Kiro、Trae 和 Gemini CLI，Qoder 在约 30 分钟内解决了。

---

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

---

## 提取实体

| 实体 | 类型 | 相关性 | 置信度 | 证据 |
|------|------|--------|--------|------|
| **Qoder** | 工具 | 核心 | EXTRACTED | 官网主体 |
| **Computer-Use** | 技术概念 | 高 | EXTRACTED | 官网明确描述 |
| **Browser-Use** | 技术概念 | 高 | EXTRACTED | 官网明确描述 |
| **Quest-Mode** | 功能特性 | 高 | EXTRACTED | 官网明确描述 |
| **Multi-Agent** | 技术模式 | 高 | EXTRACTED | 官网明确描述 |

---

## 提取主题

- **桌面应用控制**（Computer Use）
- **浏览器控制**（Browser Use）
- **Agent集成层**（Multi-Agent + Memory + Skills）

---

## 相关页面

- [[Qoder]]（实体页）
- [[Computer-Use]]（实体页）
- [[桌面应用控制]]（主题页）
- [[浏览器控制]]（主题页）
- [[Agent集成层]]（主题页）
- [[OpenClaw]]（对比实体）
- [[Kun]]（对比实体）