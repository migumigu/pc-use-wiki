---
source_id: auto-20260701-i7j8k9l
title: Claude Code × Context Mode：Context 窗口省 98% 的终极方案
source_type: tech_blog
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-01
confidence: high
original_url: http://m.toutiao.com/group/7641899382740140607/
---

# Claude Code × Context Mode：Context 窗口省 98% 的终极方案

## 用 Claude Code 的人，迟早会遇到这个问题

你正在改一个大型项目，连续用了 20 分钟 Claude Code，Read 了 10 个文件，跑了好几个 Bash 命令。

突然它说——"我需要压缩会话以释放空间"。

压缩完了，模型忘了刚才在改哪个函数、修什么 bug。你不得不重新说一遍："刚才那个 API 路由的问题……"。

不只是会话丢失的问题。更隐蔽的开销是：每次 Read 操作直接把 700KB 的原始文件塞进 context window，跑一次 cat 就是 450KB，抓一次网页又是 350KB。半小时后，40% 的 context 已经被这些"垃圾数据"吃掉了。

这就是 **Context Mode** 要解决的事。

## Context Mode 是什么？

Context Mode 是一个 MCP 插件，作者是土耳其开发者 Mert Koseoğlu。它在 Hacker News 登顶过 No.1（570+ points），被微软、Google、Meta、ByteDance、Stripe 等公司的团队内部使用。

核心能力只有三条：

**1. Context 节省** —— 沙箱里执行代码，原始数据不进 context。315KB 的源码分析进去，只吐 5.4KB 结果出来。省了 98%。

**2. 会话连续性** —— 每次文件编辑、git 操作、任务状态、错误信息都被 SQLite 记录。会话压缩后，FTS5 检索只找回相关部分。模型原地"想起来"刚才在做什么。

**3. Think in Code** —— 鼓励模型"写代码分析，而不是读文件分析"。别让 LLM 读 50 个文件再计算，让它写个脚本跑一下，打印关键结果就行。

## Claude Code 上的安装（最简单的方式）

Context Mode 在 Claude Code 上走插件市场安装，是全平台最省心的方式。前提条件：Claude Code v1.0.33+。

在 Claude Code 终端中输入：

```
/plugin marketplace add mksglu/context-mode
/plugin install context-mode@context-mode
```

安装完后重启 Claude Code（或运行 /reload-plugins）。然后跑一句验证：

```
/context-mode:ctx-doctor
```

所有检查项显示 [x] 就说明安装成功了。doctor 会验证运行时、Hook、FTS5 和插件注册状态。

## 可选：状态栏实时显示

编辑 ~/.claude/settings.json，加一句：

```json
{
    "statusLine": {
        "type": "command",
        "command": "context-mode statusline"
    }
}
```

重启 Claude Code 后，底部状态栏会显示 "本会话省了多少钱 · 累计省了多少 · 效率百分比"。看着数字涨还挺有成就感的。

## 11 个 MCP 工具一览

插件注册了 11 个 MCP 工具，分为两大类：

**沙箱执行工具（6 个）：**

- **ctx_execute** —— 在沙箱中执行 JS/Shell/Python 代码，只有 stdout 返回。最核心的工具。

- **ctx_execute_file** —— 以文件为输入执行分析，原始内容不暴露给 context。

- **ctx_batch_execute** —— 一次调用跑多个搜索+执行，节省多轮交互开销。

- **ctx_index** —— 把文档/代码/文件索引到 FTS5 知识库。

- **ctx_search** —— BM25 排序搜索知识库，支持模糊纠错和智能摘要。

- **ctx_fetch_and_index** —— 抓取网页并自动索引。

**管理工具（5 个）：**

- **ctx_stats** —— 看 context 节省统计（按工具分类）。

- **ctx_doctor** —— 诊断：运行时、Hook、FTS5、插件注册。

- **ctx_upgrade** —— 拉最新版、重建、迁移缓存、修 Hook。

- **ctx_purge** —— 永久删除所有索引数据。

- **ctx_insight** —— 个人分析面板。90 个指标、37 个洞察模式、4 个综合评分。

## 5 个 Slash 命令

Claude Code 特有的斜杠命令，用 /context-mode: 前缀调用：

```
/context-mode:ctx-stats    # context 节省统计
/context-mode:ctx-doctor   # 一键诊断
/context-mode:ctx-upgrade  # 升级和修复
/context-mode:ctx-purge    # 清空知识库
/context-mode:ctx-insight  # 打开本地分析面板
```

在其他平台上（Gemini CLI、VS Code Copilot 等），没有斜杠命令。直接在对话里输入 "ctx stats" 就行，模型会自动调 MCP 工具。

## 实际使用技巧

### 1. 从 Read + Bash → ctx_execute

以前你想分析代码结构，Claude Code 会 Read 一堆文件。有了 Context Mode，它应该写脚本自己算：

```javascript
ctx_execute("javascript", `
  const files = fs.readdirSync('src').filter(f => f.endsWith('.ts'));
  files.forEach(f => console.log(f + ': ' + fs.readFileSync('src/'+f,'utf8').split('\n').length + ' lines'));
`);
```

执行结果只有几行文本进 context。对比 Read 47 个文件 700KB，ctx_execute 只用了 3.6KB。

### 2. 善用 Index + Search 做知识管理

ctx_index 和 ctx_search 组合相当于一个内置于 Claude Code 的本地知识库。你可以把技术文档、API 规范、历史决策索引进去，之后对话里直接搜索，不用重新读文件。

### 3. 监听 ctx_stats 了解真实节省

装上之后跑一跑 ctx-stats 看看每个工具省了多少钱。很多时候你会惊讶于 Read 操作原本那么费 token。

## 避坑指南

### ⚠ 坑 1：安装前确认 Claude Code 版本

v1.0.33 以下不支持 /plugin 命令。先跑 `claude --version` 确认。如果版本不对：`brew upgrade claude-code` 或 `npm update -g @anthropic-ai/claude-code`。

### ⚠ 坑 2：statusLine 配置是手动的

Claude Code 插件本身不能声明 statusLine，必须手动在 settings.json 里加。很多人装上后发现没有底部显示，还以为没装对。加了就行。

### ⚠ 坑 3：非 Claude Code 平台没有斜杠命令

如果你跨平台用 Context Mode，记住斜杠 `/context-mode:ctx-xxx` 是 Claude Code 特有的。Gemini CLI、Cursor、OpenCode 等请直接在对话里输 "ctx stats"。

### ⚠ 坑 4：ctx_purge 是永久删除

知识库删了就没了。除非你真的想清空，别玩着玩着跑 ctx_purge。

### ⚠ 坑 5：ctx_execute 不是万能沙箱

它屏蔽了 curl/wget 等网络请求。如果你需要联网，用 ctx_fetch_and_index 代替。

### ⚠ 坑 6：不要在 ctx_execute 里跑大型构建

沙箱执行有资源限制。大型编译、启动服务器这类任务，还是用常规 Bash 工具。Context Mode 的目标是"分析"，不是"运行"。

## 总结

Context Mode 解决的是 Claude Code 使用中的一个真实痛点：context 窗口是有限的，但你要处理的数据是无限的。与其和 token 上限搏斗，不如换一种思考方式——让代码分析代码。

安装只要两条命令，装上后基本感觉不到它在工作，但每次会话压缩后回到原地，或者看到 ctx_stats 里 98% 节省的数字，你就会觉得值了。

如果你在用 Claude Code 做项目开发，推荐试一试 Context Mode。