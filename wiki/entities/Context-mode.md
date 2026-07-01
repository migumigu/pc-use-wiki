---
tags: [Context-mode, MCP, Token压缩, Agent集成层]
created: 2026-07-01
updated: 2026-07-01
type: entity
category: 项目
---

# Context-mode

> MCP 上下文管理框架，98% Token 压缩，Session Continuity

## 基本信息

- **项目名称**：Context-mode
- **开发者**：mksglu（Mert Koseoğlu）
- **GitHub**：https://github.com/mksglu/context-mode
- **Stars**：15,616+
- **许可证**：Elastic License 2.0（ELv2）
- **主语言**：JavaScript/TypeScript
- **分类**：Agent集成层 / 上下文管理

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README -->

## 核心定位

"The other half of the context problem."

将"上下文管理"从被动容量问题转变为主动内容工程。

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 核心定位 -->

## 四项机制

### 1. Context Saving（上下文节省）

工具输出不进入上下文窗口，只保留引用：

```
原始：315 KB 工具输出
压缩后：5.4 KB
节省：98%
```

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README -->

### 2. Session Continuity（会话连续性）

所有事件（文件编辑、git 操作、任务、错误）索引到 SQLite + FTS5：

- 对话压缩后，FTS5 BM25 检索恢复相关状态
- 不使用 `--continue` 时立即删除历史数据

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README -->

### 3. Think in Code

LLM 生成分析脚本而非读取文件：

```javascript
// Before: 47 × Read() = 700 KB
// After: 1 × ctx_execute() = 3.6 KB
ctx_execute("javascript", `
  const files = fs.readdirSync('src').filter(f => f.endsWith('.ts'));
  files.forEach(f => console.log(f + ': ' + fs.readFileSync('src/'+f,'utf8').split('\\n').length + ' lines'));
`);
```

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README Think in Code -->

### 4. 无强制简洁风格

不规定模型如何写最终答案，只管数据去向。

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README -->

## 11 MCP Tools

**沙箱工具（6）**：
- ctx_execute、ctx_execute_file、ctx_batch_execute
- ctx_index、ctx_search、ctx_fetch_and_index

**管理工具（5）**：
- ctx_stats、ctx_doctor、ctx_upgrade、ctx_purge、ctx_insight

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README -->

## 平台覆盖（16）

| 平台 | Hook 支持 | 安装方式 |
|------|-----------|----------|
| Claude Code | ✅ 全量（PreToolUse/PostToolUse/PreCompact/SessionStart） | Plugin marketplace |
| Gemini CLI | ✅ 全量（BeforeTool/AfterTool/PreCompress/SessionStart） | Config file |
| VS Code Copilot | ⚠️ 部分 | MCP + hooks |
| JetBrains Copilot | ⚠️ 部分 | MCP + hooks |
| Cursor | ✅ 全量 | Marketplace pending |
| Windsurf (Cascade) | ❌ 无 | MCP-only |

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README Platform Coverage -->

## 企业采用

Microsoft、Google、Meta、Amazon、IBM、NVIDIA、ByteDance、Stripe、Datadog、Salesforce、GitHub、Red Hat、Supabase、Canva、Notion、Hasura、Framer、Cursor

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README Enterprise Adoption -->

## 相关概念

- [[Think in Code]] — 核心范式
- [[Session Continuity]] — 会话连续性
- [[FTS5]] — 全文检索
- [[上下文压缩]] — 相关技术
- [[Agent集成层]] — 所属技术层

## 相关页面

- [[2026-07-01-context-mode-github-readme]] — GitHub README
- [[2026-07-01-context-mode-98-percent-compression-tech-analysis]] — 技术分析
- [[2026-07-01-context-mode-claude-code-usage-guide]] — Claude Code 使用指南
- [[2026-07-01-context-mode-technical-report-v1.0]] — 技术报告

## 不同素材中的观点

| 素材来源 | 核心观点 |
|----------|----------|
| GitHub README | 11 MCP Tools、16 平台覆盖、企业采用 18+ |
| 技术分析 | 四项机制详解、与 Anthropic 原则关联 |
| Claude Code 使用指南 | 6 个避坑指南、statusLine 配置 |
| 技术报告 v1.0 | 与 Headroom 对比：Think in Code、Session Continuity、Hooks 层 |

<!-- confidence: EXTRACTED -->
<!-- evidence: 综合多篇素材 -->