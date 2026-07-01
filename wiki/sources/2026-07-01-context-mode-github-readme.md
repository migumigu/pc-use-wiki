---
tags: [Context-mode, MCP, 上下文管理, Token压缩]
created: 2026-07-01
updated: 2026-07-01
sources: []
---

# Context-mode GitHub README

> MCP 上下文管理框架，98% Token 压缩，16 平台支持，15,616+ Stars

## 基本信息

- **项目名称**：Context-mode
- **开发者**：mksglu（Mert Koseoğlu）
- **GitHub**：https://github.com/mksglu/context-mode
- **Stars**：15,616+
- **许可证**：Elastic License 2.0（ELv2）
- **主语言**：JavaScript/TypeScript
- **分类**：Agent集成层 / 上下文管理

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "15,616+ Stars, Elastic License 2.0" -->

## 核心定位

"The other half of the context problem."

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文标题 -->

## 解决的四个问题

### 1. Context Saving（上下文节省）

工具输出不进入上下文窗口，只保留引用：

```
原始：315 KB 工具输出
压缩后：5.4 KB
节省：98%
```

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "315 KB becomes 5.4 KB. 98% reduction" -->

### 2. Session Continuity（会话连续性）

所有事件（文件编辑、git 操作、任务、错误）索引到 SQLite + FTS5：

- 对话压缩后，FTS5 BM25 检索恢复相关状态
- 不使用 `--continue` 时立即删除历史数据

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "Session Continuity" 章节 -->

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
<!-- evidence: GitHub README 原文 Think in Code 示例 -->

### 4. 无强制简洁风格

不规定模型如何写最终答案，只管数据去向。

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "No prose-style enforcement" -->

## Claude Code 安装

```bash
/plugin marketplace add mksglu/context-mode
/plugin install context-mode@context-mode
```

重启 Claude Code 或 `/reload-plugins`。

验证：`/context-mode:ctx-doctor`（所有检查显示 `[x]`）

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 Claude Code 安装步骤 -->

## 11 个 MCP 工具

**沙箱工具（6）**：
- `ctx_execute` — 沙箱执行脚本
- `ctx_execute_file` — 文件输入执行
- `ctx_batch_execute` — 批量执行
- `ctx_index` — 索引到 FTS5 知识库
- `ctx_search` — BM25 搜索
- `ctx_fetch_and_index` — 抓取网页并索引

**管理工具（5）**：
- `ctx_stats` — 上下文节省统计
- `ctx_doctor` — 诊断
- `ctx_upgrade` — 升级和修复
- `ctx_purge` — 清空知识库
- `ctx_insight` — 个人分析仪表盘（90 指标）

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "11 MCP tools" -->

## Slash 命令

| 命令 | 功能 |
|------|------|
| `/context-mode:ctx-stats` | Token 节省统计 |
| `/context-mode:ctx-doctor` | 诊断 |
| `/context-mode:ctx-index` | 索引文件 |
| `/context-mode:ctx-search` | 搜索 |
| `/context-mode:ctx-upgrade` | 升级 |
| `/context-mode:ctx-purge` | 清空 |
| `/context-mode:ctx-insight` | 分析仪表盘 |

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 Slash Commands 表 -->

## 平台覆盖（16）

| 平台 | Hook 支持 | 安装方式 |
|------|-----------|----------|
| Claude Code | ✅ 全量（PreToolUse/PostToolUse/PreCompact/SessionStart） | Plugin marketplace |
| Gemini CLI | ✅ 全量（BeforeTool/AfterTool/PreCompress/SessionStart） | Config file |
| VS Code Copilot | ⚠️ 部分 | MCP + hooks |
| JetBrains Copilot | ⚠️ 部分 | MCP + hooks |
| Cursor | ✅ 全量 | Marketplace pending |
| Windsurf (Cascade) | ❌ 无 | MCP-only |
| OpenCode | ✅ 全量 | Config file |
| KiloCode | ✅ 全量 | Config file |
| OpenClaw / Pi Agent | ✅ 原生 | Gateway Plugin |
| 其他 7 个平台 | — | MCP-only |

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 Platform Coverage 表 -->

## 企业采用

Microsoft、Google、Meta、Amazon、IBM、NVIDIA、ByteDance、Stripe、Datadog、Salesforce、GitHub、Red Hat、Supabase、Canva、Notion、Hasura、Framer、Cursor

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "Used across teams at: Microsoft, Google..." -->

## 技术架构

- **数据库**：SQLite（本地文件，无外部依赖）
- **全文检索**：SQLite FTS5（BM25 排序）
- **沙箱执行**：平台原生工具封装
- **协议**：MCP 标准

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "Technical Architecture" -->

## 相关实体

- [[Context-mode]] — 项目实体
- [[Think in Code]] — 核心范式
- [[Session Continuity]] — 会话连续性
- [[FTS5]] — 全文检索

## 相关主题

- [[Agent集成层]] — 所属技术层
- [[上下文工程]] — 相关方法论

## 相关页面

- [[2026-07-01-context-mode-98-percent-compression-tech-analysis]] — 技术分析
- [[2026-07-01-context-mode-claude-code-usage-guide]] — Claude Code 使用指南