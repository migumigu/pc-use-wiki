---
tags: [Think in Code, Context-mode, Token优化]
created: 2026-07-01
updated: 2026-07-01
type: entity
category: 概念
---

# Think in Code

> LLM 从数据处理器转变为代码生成器

## 定义

Think in Code 是 Context-mode 提出的范式：鼓励模型"写代码分析，而不是读文件分析"。LLM 生成分析脚本而非直接读取文件内容。

<!-- confidence: EXTRACTED -->
<!-- evidence: Context-mode GitHub README -->

## 核心价值

从数据处理器转变为代码生成器：

```
传统：Agent 读取 50 个文件 → 在上下文中分析
Think in Code：Agent 生成脚本 → 执行 → 返回 console.log() 结果
```

<!-- confidence: EXTRACTED -->
<!-- evidence: Context-mode 技术分析 -->

## Token 节省效果

47 × Read() = 700 KB → 1 × ctx_execute() = 3.6 KB

<!-- confidence: EXTRACTED -->
<!-- evidence: Context-mode GitHub README -->

## 示例

```javascript
ctx_execute("javascript", `
  const files = fs.readdirSync('src').filter(f => f.endsWith('.ts'));
  files.forEach(f => console.log(f + ': ' + fs.readFileSync('src/'+f,'utf8').split('\\n').length + ' lines'));
`);
```

<!-- confidence: EXTRACTED -->
<!-- evidence: Context-mode GitHub README -->

## 适用场景

- 需要批量分析文件结构
- 需要统计代码行数、函数数量
- 需要在多个文件中查找模式

## 不适用场景

- 需要逐行阅读代码理解逻辑
- 需要精确定位某个函数实现
- 需要修改少量代码

## 与 Anthropic 原则关联

Anthropic "Effective Context Engineering for AI Agents"：

| Anthropic 原则 | Think in Code 实现 |
|----------------|-------------------|
| 上下文是有限资源 | 生成脚本而非读取文件 |
| 压缩是首要杠杆 | 脚本输出仅返回结果 |
| 最小化系统提示 | 脚本执行无需额外 prompt |

<!-- confidence: INFERRED -->
<!-- evidence: 基于 Context-mode 技术分析推断 -->

## 相关实体

- [[Context-mode]] — 提出此范式的项目
- [[上下文压缩]] — 相关技术
- [[ctx_execute]] — 实现此范式的 MCP 工具

## 相关主题

- [[Agent集成层]] — 所属技术层
- [[上下文工程]] — 相关方法论

## 相关页面

- [[2026-07-01-context-mode-github-readme]] — GitHub README
- [[2026-07-01-context-mode-98-percent-compression-tech-analysis]] — 技术分析
- [[2026-07-01-context-mode-claude-code-usage-guide]] — Claude Code 使用指南

## 不同素材中的观点

| 素材来源 | 核心观点 |
|----------|----------|
| Context-mode GitHub README | LLM 生成分析脚本而非读取文件 |
| Context-mode 技术分析 | 与 Anthropic 原则关联 |
| Context-mode 使用指南 | 从 Read + Bash → ctx_execute |

<!-- confidence: EXTRACTED -->
<!-- evidence: 综合多篇素材 -->