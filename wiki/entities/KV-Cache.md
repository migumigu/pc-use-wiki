---
tags: [KV-Cache, 性能优化, LLM推理]
created: 2026-06-28
updated: 2026-06-28
sources: ["2026-06-28-planning-with-files-github", "2026-06-28-manus-context-engineering"]
---

# KV-Cache

> 长输入短输出特征下的缓存优化技术

<!-- confidence: INFERRED -->
KV-Cache 是一种缓存技术，用于优化 LLM 推理过程中的内存和计算效率。由于 Agent 任务通常呈现**长输入、短输出**的特征，如果不能有效利用 KV-Cache，成本和延迟将无法承受。

## 核心原理

在 Transformer 架构中，自注意力机制需要为每个 token 计算 Query、Key、Value。KV-Cache 通过缓存已计算的 Key-Value 对，避免重复计算。

## 与上下文工程的关系

### Prompt 设计原则

所有 Prompt 设计都要为缓存命中率让路：

1. **保持前缀稳定**：不在 System Prompt 中放入动态内容
2. **只追加不修改**：历史交互记录一旦生成不修剪
3. **确定性序列化**：JSON 对象的 Key 排序必须固定

### 掩码而非移除工具

动态移除工具会破坏 KV-Cache。正确做法：
- 保留所有工具定义
- 在解码阶段（Decoding）通过修改 Logits 屏蔽当前不合法的工具

## 性能影响

| 策略 | KV-Cache 利用率 | 延迟 | 成本 |
|------|----------------|------|------|
| 每次重新计算 | 0% | 高 | 高 |
| 动态移除工具 | 部分 | 中 | 中 |
| 掩码而非移除 | **高** | **低** | **低** |

## 相关页面

- [[上下文工程]] — KV-Cache 是上下文工程的重要技术基础
- [[planning-with-files]] — 该项目强调围绕 KV-Cache 进行设计
