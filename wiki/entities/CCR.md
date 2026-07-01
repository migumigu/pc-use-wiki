---
tags: [CCR, Headroom, 可逆压缩]
created: 2026-07-01
updated: 2026-07-01
type: entity
category: 概念
---

# CCR

> Compressed Context Retrieval，可逆压缩机制

## 定义

CCR（Compressed Context Retrieval）是 Headroom 提出的可逆压缩机制：原始内容缓存到本地，LLM 收到压缩版，需要细节时调用 `headroom_retrieve` 从缓存返回完整内容。

<!-- confidence: EXTRACTED -->
<!-- evidence: Headroom GitHub README -->

## 核心流程

```
1. 原始数据缓存到本地
2. LLM 收到压缩版
3. LLM 需要细节时调用 headroom_retrieve
4. 从缓存返回完整内容
```

<!-- confidence: EXTRACTED -->
<!-- evidence: Headroom 实战指南 -->

## 示例

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
<!-- evidence: Headroom GitHub README -->

## 与不可逆压缩对比

```
不可逆压缩
     ↓
更快、更简单
     ↓
原文丢失——无法恢复

CCR（可逆）
     ↓
原文本地缓存 + MCP retrieval 工具
     ↓
LLM 可按需检索原文
```

<!-- confidence: EXTRACTED -->
<!-- evidence: Headroom 技术分析 -->

## 适用场景

- "偶尔需要完整数据"（Agent 工作流常态）
- 日志文件分析
- 大型 JSON 结构探索
- 代码库批量扫描

## 不适用场景

- "看一眼就行"的数据
- 不需要回溯原文的简单查询

## 相关实体

- [[Headroom]] — 提出 CCR 的项目
- [[上下文压缩]] — 所属技术领域
- [[headroom_retrieve]] — CCR 的 MCP 工具

## 相关主题

- [[Agent集成层]] — 所属技术层

## 相关页面

- [[2026-07-01-headroom-github-readme]] — GitHub README
- [[2026-07-01-headroom-technical-analysis]] — 技术分析
- [[2026-07-01-headroom-practical-guide]] — 实战指南

## 不同素材中的观点

| 素材来源 | 核心观点 |
|----------|----------|
| Headroom GitHub README | 原始内容缓存 + 检索恢复 |
| Headroom 技术分析 | 与不可逆压缩对比，适用场景分析 |
| Headroom 实战指南 | CCR 是最核心创新 |

<!-- confidence: EXTRACTED -->
<!-- evidence: 综合多篇素材 -->