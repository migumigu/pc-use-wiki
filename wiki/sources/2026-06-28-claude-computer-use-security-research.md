---
tags: [Computer-Use, Claude, security, prompt-injection, browser-use]
created: 2026-06-28
updated: 2026-06-28
sources: []
---

# Prompt Injection防御研究 — Browser Use安全风险

> 一句话摘要：Anthropic官方研究Browser Use场景的Prompt Injection防御机制,Claude Opus 4.5攻击成功率降至约1%。

## 基本信息

- **来源**：Anthropic 官方研究 (https://www.anthropic.com/research/prompt-injection-defenses)
- **作者**：Anthropic
- **发布日期**：2025-11-24
- **素材类型**：官方安全研究
- **控制对象**：桌面应用控制
- **技术层级**：Agent集成层

## 核心观点

<!-- confidence: EXTRACTED -->

1. **Prompt Injection定义**：网页内容中嵌入的恶意指令,可劫持agent改变行为。（原文："adversarial instructions hidden within content"）

2. **Browser Use风险放大**：
   - **攻击面广**：每个网页、嵌入文档、广告、动态加载脚本都是潜在攻击向量
   - **可执行动作多**：导航URL、填写表单、点击按钮、下载文件等均可被利用

3. **防御进展**：
   - Claude Opus 4.5攻击成功率约**1%**
   - 原始版本11%(未启用缓解措施前23.6%)
   - Claude for Chrome从research preview升级为Beta

4. **防御三大支柱**：
   - **强化学习训练**：模型识别并拒绝恶意指令
   - **Constitutional classifiers**：检测隐藏文本、图片注入、UI欺骗
   - **专家红队测试**：内部red team + 外部Arena-style挑战

## 关键概念

- [[Prompt Injection]] — 内容中嵌入的对抗性指令
- [[Browser Use]] — Agent浏览网页的能力
- [[Attack Surface]] — 攻击面(网页、文档、广告、脚本)
- [[Attack Success Rate (ASR)]] — 攻击成功率指标
- [[Constitutional Classifiers]] — Anthropic的安全分类器
- [[Best-of-N Attacker]] — 自适应攻击者(尝试多种注入技术组合)
- [[Claude for Chrome]] — Chrome浏览器扩展

## 攻击示例

<!-- confidence: EXTRACTED -->

**邮件场景**：
- 用户让Claude阅读邮件并起草回复
- 一封邮件(伪装成vendor inquiry)包含白色文本隐藏指令
- 指令要求转发包含"confidential"的邮件到外部地址
- 成功注入会泄露敏感通信

## 风险特征对比

<!-- confidence: EXTRACTED -->

| 维度 | Browser Use风险 | 一般AI风险 |
|------|----------------|-----------|
| **攻击面** | 极广(每个网页) | 有限(用户输入) |
| **可执行动作** | 多(导航/填写/点击/下载) | 少(文本生成) |
| **内容可信度** | 不可信(公开网页) | 可控(用户内容) |

## 防御机制详解

<!-- confidence: EXTRACTED -->

### 1. 强化学习训练
- 训练时暴露模型到模拟web内容的prompt injection
- Reward模型正确识别和拒绝恶意指令
- 即使指令设计成权威或紧急也拒绝

### 2. Constitutional Classifiers
- 扫描所有进入context window的不可信内容
- 检测多种形式:隐藏文本、图片注入、欺骗性UI元素
- 检测到攻击时调整模型行为

### 3. 专家红队测试
- 内部red team持续探测browser agent漏洞
- 参加外部Arena-style挑战(如Grayswan Arena)
- 人类研究员比自动化系统更擅长发现创意攻击向量

## 重要声明

<!-- confidence: EXTRACTED -->

> "A 1% attack success rate—while a significant improvement—still represents meaningful risk. No browser agent is immune to prompt injection."

**结论**：问题未完全解决,1%成功率仍是重大风险,需要持续投资防御。

## 与其他素材的关联

- 与 [[Computer Use Demo]] 的安全警告对应(prompt injection风险)
- 与 [[Computer Use Best Practices]] 的VM隔离建议关联
- 与 [[桌面应用控制]] 主题的安全维度

## 原文精彩摘录

> "Every webpage an agent visits is a potential vector for attack. Among legitimate search results, documents, and applications, an attacker might have embedded malicious instructions."

> "We will continue to publish our progress transparently, both to help customers make informed deployment decisions and to encourage broader industry investment."

## 相关页面

- [[Prompt Injection]]
- [[Browser Use]]
- [[Constitutional Classifiers]]
- [[桌面应用控制]]
- [[Claude Opus 4.5]]
- [[Claude for Chrome]]