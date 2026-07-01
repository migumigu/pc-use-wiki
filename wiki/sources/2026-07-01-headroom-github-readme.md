---
tags: [Headroom, 上下文压缩, Agent集成层, Token优化]
created: 2026-07-01
updated: 2026-07-01
sources: []
---

# Headroom GitHub README

> AI Agent 上下文压缩层，60-95% Token 节省，可逆压缩，24,534+ Stars

## 基本信息

- **项目名称**：Headroom
- **开发者**：headroomlabs-ai
- **GitHub**：https://github.com/headroomlabs-ai/headroom
- **Stars**：24,534+
- **许可证**：Apache-2.0
- **主语言**：Python（78.7%）+ Rust（16.7%）
- **分类**：Agent集成层 / 上下文管理

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "24,534 Stars, Apache-2.0" -->

## 核心功能

Headroom 是 AI Agent 上下文压缩层，在内容到达 LLM 之前进行可逆压缩：

### 四种接入模式

| 模式 | 说明 | 命令 |
|------|------|------|
| Library | 代码内调用 | `from headroom import compress` |
| Proxy | 零代码改动 | `headroom proxy --port 8787` |
| Agent wrap | 一行命令集成 | `headroom wrap claude|codex|cursor` |
| MCP server | MCP协议集成 | `headroom mcp install` |

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "Library · Proxy · Agent wrap · MCP server" -->

### 六大压缩算法

| 压缩器 | 目标 | 节省率 |
|--------|------|--------|
| SmartCrusher | JSON | 50-80% |
| CodeCompressor | 代码（AST） | 40-70% |
| Kompress-base | 自然语言 | 60-90% |
| CacheAligner | KV Cache优化 | 间接节省 |
| ImageRouter | 图片 | 40-90% |
| CCR | 可逆压缩 | 检索恢复 |

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "6 algorithms" -->

## 实测数据

| 工作负载 | 原始 | 压缩后 | 节省 |
|----------|------|--------|------|
| 代码搜索（100结果） | 17,765 | 1,408 | **92%** |
| SRE故障调试 | 65,694 | 5,118 | **92%** |
| GitHub Issue分类 | 54,174 | 14,761 | **73%** |
| 代码库探索 | 78,502 | 41,254 | **47%** |

**准确率保持**：
- GSM8K：0.870 → 0.870（±0.000）
- TruthfulQA：0.530 → 0.560（+0.030）

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 Benchmark 表格 -->

## CCR 可逆压缩

核心创新：原始内容缓存 + 检索恢复

```python
# 压缩前
prompt = "Long log output with FATAL at line 892..."

# 压缩后
compressed_prompt = "Log[chunk_id=abc123]: FATAL at 892..."

# LLM 可检索
tool_call("headroom_retrieve", {"chunk_id": "abc123"})
→ 返回原始 10,000 行日志
```

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 CCR 示例代码 -->

## 跨 Agent 共享记忆

多 Agent 共享压缩索引：

```bash
headroom wrap claude --memory
headroom wrap codex --memory
```

Claude 扫描代码库 → Codex/Cursor 复用同一压缩索引 → 无重复 token 消耗

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "Cross-agent memory" -->

## Agent 兼容矩阵

支持 12+ Agent：
- Claude Code ✅（--memory · --code-graph）
- Codex ✅
- Cursor（手动配置）
- Aider ✅
- Copilot CLI ✅
- OpenClaw ✅（ContextEngine plugin）
- OpenCode ✅
- Cline ✅
- Continue ✅
- Goose ✅
- OpenHands ✅
- Mistral Vibe ✅

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 Agent Compatibility Matrix -->

## 输出 Token 节省

除输入压缩外，还优化输出 Token：

- **Verbosity steering**：添加简洁提示到 system prompt
- **Effort routing**：降低常规操作的思考强度

```bash
export HEADROOM_OUTPUT_SHAPER=1
headroom proxy --port 8787
```

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "Output token reduction" -->

## headroom learn

从失败会话中挖掘模式：

```bash
headroom learn --sessions ~/.claude/sessions
→ 提取失败模式
→ 写入 CLAUDE.local.md
```

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "headroom learn" -->

## 相关实体

- [[上下文压缩]] — 核心概念
- [[CCR]] — 可逆压缩机制
- [[MCP]] — MCP Server 集成
- [[Claude-Code]] — 主要支持平台

## 相关主题

- [[Agent集成层]] — 所属技术层
- [[上下文工程]] — 相关方法论

## 相关页面

- [[2026-07-01-headroom-technical-analysis]] — 技术深度分析
- [[2026-07-01-headroom-practical-guide]] — 实战指南
- [[Headroom]] — 实体页