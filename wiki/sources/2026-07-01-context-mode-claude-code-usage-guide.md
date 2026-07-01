---
tags: [Context-mode, Claude-Code, 使用指南, MCP]
created: 2026-07-01
updated: 2026-07-01
sources: []
---

# Claude Code × Context-mode 使用指南

> Context 窗口省 98% 的终极方案

## 问题场景

连续用 Claude Code 20 分钟后：
- Read 10 个文件
- 跑多个 Bash 命令
- 突然说"需要压缩会话释放空间"
- 压缩后忘了在改哪个函数、修什么 bug

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文问题场景描述 -->

更隐蔽的成本：每次 Read 700KB、cat 450KB、抓网页 350KB，半小时后 40% context 被"垃圾数据"吃掉。

## Context-mode 核心能力

### 1. Context 节省（沙箱隔离）

315KB 源码分析进去，只吐 5.4KB 结果，省 98%。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "315KB → 5.4KB" -->

### 2. 会话连续性

每次文件编辑、git 操作、任务状态被 SQLite 记录。压缩后，FTS5 检索只找回相关部分。模型原地"想起来"。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "会话连续性" 说明 -->

### 3. Think in Code

鼓励模型"写代码分析，而不是读文件分析"：别让 LLM 读 50 个文件，让它写脚本跑一下。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "Think in Code" 说明 -->

## Claude Code 安装（最简单）

前提：Claude Code v1.0.33+

```bash
/plugin marketplace add mksglu/context-mode
/plugin install context-mode@context-mode
```

重启 Claude Code 或 `/reload-plugins`。

验证：`/context-mode:ctx-doctor`（所有检查显示 `[x]`）

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文安装步骤 -->

## 状态栏实时显示

编辑 `~/.claude/settings.json`：

```json
{
    "statusLine": {
        "type": "command",
        "command": "context-mode statusline"
    }
}
```

底部显示："本会话省了多少钱 · 累计省了多少 · 效率百分比"。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 statusLine 配置 -->

## 11 个 MCP 工具

**沙箱执行（6）**：
- `ctx_execute` — 沙箱执行脚本（核心）
- `ctx_execute_file` — 文件输入执行
- `ctx_batch_execute` — 批量执行
- `ctx_index` — 索引到知识库
- `ctx_search` — BM25 搜索
- `ctx_fetch_and_index` — 抓取网页并索引

**管理（5）**：
- `ctx_stats` — 节省统计
- `ctx_doctor` — 诊断
- `ctx_upgrade` — 升级和修复
- `ctx_purge` — 清空知识库
- `ctx_insight` — 分析仪表盘（90 指标）

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 11 个工具列表 -->

## 实际使用技巧

### 1. 从 Read + Bash → ctx_execute

以前分析代码结构，Claude Code 会 Read 一堆文件。现在：

```javascript
ctx_execute("javascript", `
  const files = fs.readdirSync('src').filter(f => f.endsWith('.ts'));
  files.forEach(f => console.log(f + ': ' + fs.readFileSync('src/'+f,'utf8').split('\n').length + ' lines'));
`);
```

47 个 Read = 700KB → 1 个 ctx_execute = 3.6KB。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文使用技巧示例 -->

### 2. Index + Search 知识管理

相当于内置本地知识库：把文档、API 规范索引进去，对话里直接搜索。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "善用 Index + Search" -->

### 3. 监听 ctx_stats

看每个工具省了多少 token，会惊讶 Read 操作原本那么费 token。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "监听 ctx_stats" -->

## 避坑指南

### ⚠ 坑 1：Claude Code 版本

v1.0.33 以下不支持 `/plugin`。先 `claude --version` 确认，不对则升级。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文避坑指南 -->

### ⚠ 坑 2：statusLine 手动配置

插件不能声明 statusLine，必须手动在 settings.json 加。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "statusLine 配置是手动的" -->

### ⚠ 坑 3：非 Claude Code 无斜杠命令

Gemini CLI、Cursor 等直接输 "ctx stats"。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "非 Claude Code 平台没有斜杠命令" -->

### ⚠ 坑 4：ctx_purge 永久删除

知识库删了就没了，别随便跑。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "ctx_purge 是永久删除" -->

### ⚠ 坑 5：ctx_execute 不是万能沙箱

屏蔽了 curl/wget 等网络请求，联网用 `ctx_fetch_and_index`。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "ctx_execute 不是万能沙箱" -->

### ⚠ 坑 6：别跑大型构建

沙箱有资源限制，大型编译用常规 Bash 工具。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "不要在 ctx_execute 里跑大型构建" -->

## 相关实体

- [[Context-mode]] — 项目实体
- [[Think in Code]] — 核心范式

## 相关主题

- [[Agent集成层]] — 所属技术层

## 相关页面

- [[2026-07-01-context-mode-github-readme]] — GitHub README
- [[2026-07-01-context-mode-98-percent-compression-tech-analysis]] — 技术分析