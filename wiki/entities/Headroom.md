---
tags: [Headroom, 上下文压缩, Agent集成层]
created: 2026-07-01
updated: 2026-07-01
type: entity
category: 项目
---

# Headroom

> AI Agent 上下文压缩层，60-95% Token 节省，可逆压缩

## 基本信息

- **项目名称**：Headroom
- **开发者**：headroomlabs-ai
- **GitHub**：https://github.com/headroomlabs-ai/headroom
- **Stars**：24,534+
- **许可证**：Apache-2.0
- **主语言**：Python（78.7%）+ Rust（16.7%）
- **分类**：Agent集成层 / 上下文管理

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README -->

## 核心定位

解决 AI Agent 上下文窗口污染问题：在内容到达 LLM 之前进行可逆压缩，60-95% Token 节省，同时保持准确率不变。

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档核心定位 -->

## 核心功能

### 四种接入模式

| 模式 | 说明 | 命令 |
|------|------|------|
| Library | 代码内调用 | `from headroom import compress` |
| Proxy | 零代码改动 | `headroom proxy --port 8787` |
| Agent wrap | 一行命令集成 | `headroom wrap claude|codex|cursor` |
| MCP server | MCP协议集成 | `headroom mcp install` |

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README -->

### 六种压缩器

| 压缩器 | 目标 | 节省率 |
|--------|------|--------|
| SmartCrusher | JSON | 50-80% |
| CodeCompressor | 代码（AST） | 40-70% |
| Kompress-base | 自然语言 | 60-90% |
| CacheAligner | KV Cache优化 | 间接节省 |
| ImageRouter | 图片 | 40-90% |
| CCR | 可逆压缩 | 检索恢复 |

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README -->

## 实测数据

| 工作负载 | 原始 | 压缩后 | 节省 |
|----------|------|--------|------|
| 代码搜索（100结果） | 17,765 | 1,408 | 92% |
| SRE故障调试 | 65,694 | 5,118 | 92% |
| GitHub Issue分类 | 54,174 | 14,761 | 73% |

准确率保持：GSM8K ±0.000，TruthfulQA +0.030

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README Benchmark -->

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
<!-- evidence: GitHub README CCR 示例 -->

## 跨 Agent 共享记忆

多 Agent 共享压缩索引：

```bash
headroom wrap claude --memory
headroom wrap codex --memory
```

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README Cross-agent memory -->

## Agent 兼容矩阵

支持 12+ Agent：Claude Code、Codex、Cursor、Aider、Copilot CLI、OpenClaw、OpenCode、Cline、Continue、Goose、OpenHands、Mistral Vibe

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README Agent Compatibility -->

## 相关概念

- [[上下文压缩]] — 核心技术
- [[CCR]] — 可逆压缩机制
- [[Agent集成层]] — 所属技术层

## 相关页面

- [[2026-07-01-headroom-github-readme]] — GitHub README
- [[2026-07-01-headroom-technical-analysis]] — 技术分析
- [[2026-07-01-headroom-practical-guide]] — 实战指南
- [[2026-07-01-headroom-technical-report-v1.0]] — 技术报告

## 不同素材中的观点

| 素材来源 | 核心观点 |
|----------|----------|
| GitHub README | 四种接入模式、六种压缩器、CCR 可逆压缩 |
| 技术分析 | 解决"上下文内容质量"问题而非"窗口大小"问题 |
| 实战指南 | 月 LLM API 支出超 $100 的开发者必装 |
| 技术报告 v1.0 | 与 Context-mode 对比：可逆压缩、跨 Agent 共享、输出压缩 |

<!-- confidence: EXTRACTED -->
<!-- evidence: 综合多篇素材 -->