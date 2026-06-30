---
tags: [Agent集成层, Skills框架, Claude Code]
created: 2026-06-30
updated: 2026-06-30
sources: []
---

# gstack GitHub README

> YC CEO Garry Tan 的 Claude Code 团队扩展，23个slash commands将单人AI编码助手变成虚拟工程团队

## 核心内容

gstack 是 Y Combinator CEO Garry Tan 于 2026 年 4 月开源的 Claude Code 技能扩展项目。通过 23 个 slash commands 将单人 AI 编码助手转变为虚拟工程团队，实现从产品构思到发布全流程的 AI 辅助开发。

## 关键发现

### 核心指标
- **Stars**: 104K+（2026年6月数据）
- **许可证**: MIT
- **开发者**: YC CEO Garry Tan
- **发布时间**: 2026年4月

### 23个 Slash Commands 分类

| 阶段 | Commands |
|------|----------|
| 产品/战略 | `/office-hours`, `/plan-ceo-review`, `/plan-eng-review` |
| 设计 | `/plan-design-review`, `/design-consultation`, `/design-shotgun`, `/design-html` |
| 开发/评审 | `/review`, `/investigate`, `/devex-review`, `/cso` |
| QA/测试 | `/qa`, `/qa-only`, `/browse` |
| 发布/运维 | `/ship`, `/land-and-deploy`, `/canary`, `/benchmark` |
| 文档/协作 | `/document-release`, `/document-generate`, `/retro` |
| 特殊工具 | `/pair-agent`, `/autoplan` |

### 支持的 AI Agents (10+)
Claude Code, OpenAI Codex CLI, Cursor, OpenCode, Factory Droid, Slate, Kiro, Hermes, GBrain

### 工作流程
```
Think → Plan → Build → Review → Test → Ship → Reflect
  ↓        ↓       ↓       ↓       ↓      ↓       ↓
/office  /plan   /build  /review /qa   /ship  /retro
-hours   -ceo    (code)        -eng  -only
         -eng
         -design
```

## 技术亮点

1. **进程导向**: Skills 按 sprint 顺序运行，每个技能为下一个提供输入
2. **真实浏览器控制**: `/browse` 提供真实 Chromium 控制（~100ms/命令）
3. **多 Agent 协调**: `/pair-agent` 支持多 Agent 共享浏览器 tab
4. **Anti-bot 隐身**: `/open-gstack-browser` 内置反爬虫策略
5. **自动模型路由**: 根据任务类型自动选择最优模型

## 与 Superpowers 对比

| 维度 | gstack | Superpowers |
|------|--------|-------------|
| Stars | 104K+ | ~21万 |
| Command 数量 | 23 | 14 |
| 开发者背书 | YC CEO | 独立开发者 |
| 核心创新 | 虚拟工程团队 | 流程纪律 |
| 多 Agent 支持 | 10+ | 仅 Claude Code |

## 相关页面

- [[gstack]]
- [[Agent集成层]]
- [[Claude Code]]
