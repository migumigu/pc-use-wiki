---
tags: [Headroom, 实战指南, Token优化, Agent集成]
created: 2026-07-01
updated: 2026-07-01
sources: []
---

# Headroom 实战指南 — 成本直降 95%

> 来源：观察者技术博客 | 2026-07-01

## 核心价值

把发给 LLM 的 Token 压缩掉 60-95%，但回答质量几乎不变。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "把发给LLM的Token压缩掉60-95%，但回答质量几乎不变" -->

实测数据：
- 代码搜索：17,765 → 1,408（省 92%）
- SRE 故障排查：65,694 → 5,118（省 92%）
- GSM8K 准确率：0.870 → 0.870（分毫不差）

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文实测数据表 -->

## 三层架构

### 第一层：ContentRouter

检测内容类型（JSON/代码/纯文本），自动选择最佳压缩器。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "ContentRouter（内容路由器）——检测内容类型" -->

### 第二层：智能压缩器

| 压缩器 | 专长 |
|--------|------|
| SmartCrusher | JSON 结构化数据 |
| CodeCompressor | AST 感知代码压缩 |
| Kompress-base | 通用文本压缩（HuggingFace 模型） |

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文三层架构说明 -->

### 第三层：CCR 可逆压缩

最核心创新：
1. 原始数据缓存到本地
2. LLM 收到压缩版
3. LLM 需要细节时调用 `headroom_retrieve`
4. 从缓存返回完整内容

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 CCR 工作流程 -->

## 三种接入方式

### Wrap 模式（最简单）

```bash
headroom wrap claude
```

一行命令，Claude Code 自动走压缩。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "Wrap模式（最简单，零配置）" -->

### Proxy 模式（零代码）

```bash
headroom proxy --port 8787
```

改 base URL 为 `localhost:8787/v1`，任何 OpenAI SDK 语言都能用。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "Proxy模式（零代码改动，适合任何语言）" -->

### Library 模式（最灵活）

```python
from headroom import compress
result = compress(messages)
```

精确控制压缩行为。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "Library模式（最灵活，嵌入应用）" -->

## 跨 Agent 共享记忆

多 Agent 共享缓存：

```bash
headroom wrap claude --memory
headroom wrap codex --memory
```

Claude 扫过代码库 → Codex/Cursor 复用索引 → 省 40-60% 初始扫描 Token。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "跨Agent共享记忆" -->

## 安装

```bash
pip install "headroom-ai[all]"
headroom wrap claude
headroom perf  # 查看压缩效果
```

完整版需 Python 3.10+，模型约 500MB。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文安装命令 -->

## 适用人群

月 LLM API 支出超 $100 的开发者必装。

60-95% 成本降幅 → 同预算多调用 2-10 倍 Token。

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文 "月LLM API支出超过100美元的开发者或团队，Headroom几乎是必装" -->

## 特性

- 完全本地运行，数据不离开机器
- 本地压缩 10-50ms，比网络延迟快
- Token 更少，响应反而更快

<!-- confidence: EXTRACTED -->
<!-- evidence: 原文特性说明 -->

## 相关实体

- [[Headroom]] — 项目实体
- [[CCR]] — 可逆压缩机制

## 相关主题

- [[Agent集成层]] — 所属技术层

## 相关页面

- [[2026-07-01-headroom-github-readme]] — GitHub README
- [[2026-07-01-headroom-technical-analysis]] — 技术分析