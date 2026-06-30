---
source_id: auto-2026-06-30-gstack-github-readme
title: gstack GitHub README
url: https://github.com/garrytan/gstack
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-06-30
collected_by: auto_research
confidence: high
---

# gstack - YC CEO Garry Tan 的 Claude Code 团队

> 2026年6月 GitHub Trending 榜首项目，104K+ Stars

## 核心概述

**gstack** 是 Y Combinator CEO Garry Tan 开发的 Claude Code 技能扩展，将单人 AI 编码助手变成虚拟工程团队。通过 23 个 slash commands（角色命令）和 8 个 power tools，实现从产品构思到发布全流程的 AI 辅助开发。

## 关键数据

| 指标 | 数值 |
|------|------|
| GitHub Stars | 104K+ |
| 贡献者 | 1,237+ (2026年) |
| Slash Commands | 23 个 |
| Power Tools | 8 个 |
| 支持 AI Agents | 10+ |
| 许可证 | MIT |

## 核心价值主张

- **生产效率提升**：2026年运行速率是2013年的 ~810 倍（11,417 vs 14 logical lines/day）
- **工程团队化**：23个专家角色覆盖产品、设计、工程、安全、QA、发布全流程
- **多 Agent 支持**：Claude Code, OpenAI Codex CLI, Cursor, OpenCode, Factory Droid, Slate, Kiro, Hermes, GBrain

## 23个 Slash Commands 分类

### 产品/战略阶段
| Command | 角色 | 功能 |
|---------|------|------|
| `/office-hours` | YC Office Hours | 6个强制问题重构产品，生成设计文档 |
| `/plan-ceo-review` | CEO/Founder | 战略挑战，4种范围模式 |
| `/plan-eng-review` | Eng Manager | 架构锁定、ASCII图表、测试矩阵 |

### 设计阶段
| Command | 角色 | 功能 |
|---------|------|------|
| `/plan-design-review` | Senior Designer | 设计维度评分、AI Slop检测 |
| `/design-consultation` | Design Partner | 从零构建设计系统 |
| `/design-shotgun` | Design Explorer | 生成4-6个AI mockup变体 |
| `/design-html` | Design Engineer | Mockup转生产HTML |

### 开发/评审阶段
| Command | 角色 | 功能 |
|---------|------|------|
| `/review` | Staff Engineer | 发现CI通过但生产爆炸的bug |
| `/investigate` | Debugger | 根因调试方法论 |
| `/devex-review` | DX Tester | 开发者体验审计 |
| `/cso` | Chief Security Officer | OWASP Top 10 + STRIDE威胁模型 |

### QA/测试阶段
| Command | 角色 | 功能 |
|---------|------|------|
| `/qa` | QA Lead | 真实浏览器测试，生成回归测试 |
| `/qa-only` | QA Reporter | 仅报告bug，不改代码 |
| `/browse` | QA Engineer | 真实Chromium浏览器控制 |

### 发布/运维阶段
| Command | 角色 | 功能 |
|---------|------|------|
| `/ship` | Release Engineer | 同步main、运行测试、推送PR |
| `/land-and-deploy` | Release Engineer | 合并PR到生产验证 |
| `/canary` | SRE | 发布后监控循环 |
| `/benchmark` | Performance Engineer | 基线页面加载、Core Web Vitals |

### 文档/协作阶段
| Command | 角色 | 功能 |
|---------|------|------|
| `/document-release` | Technical Writer | 更新项目文档匹配发布内容 |
| `/document-generate` | Documentation Author | 使用Diataxis框架生成缺失文档 |
| `/retro` | Eng Manager | 团队感知周回顾 |

### 特殊工具
| Command | 角色 | 功能 |
|---------|------|------|
| `/pair-agent` | Multi-Agent Coordinator | 与任何AI agent共享浏览器 |
| `/autoplan` | Auto Planner | 自动规划执行路径 |

## 工作流程

```
Think → Plan → Build → Review → Test → Ship → Reflect
  ↓        ↓       ↓       ↓       ↓      ↓       ↓
/office  /plan   /build  /review /qa   /ship  /retro
-hours   -ceo    (code)        -eng  -only
         -eng
         -design
```

## 安装方式

```bash
git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup
```

## OpenClaw 集成

OpenClaw 通过 ACP 启动 Claude Code 会话，因此 gstack skill 可以直接使用。配置后自然语言与 OpenClaw agent 对话即可触发对应技能。

## 技术亮点

1. **进程导向**：skills 按 sprint 顺序运行，每个技能为下一个提供输入
2. **真实浏览器**：`/browse` 提供真实 Chromium 控制（~100ms/命令）
3. **多 Agent 协调**：`/pair-agent` 支持多 Agent 共享浏览器 tab
4. **Anti-bot 隐身**：`/open-gstack-browser` 内置反爬虫策略
5. **自动模型路由**：根据任务类型自动选择最优模型

## 与 Superpowers 的区别

| 维度 | Superpowers | gstack |
|------|-------------|--------|
| Stars | ~21万 | 10.4万 |
| 开发者 | 独立开发者 | YC CEO |
| 架构 | 14个Markdown技能文件 | 23个slash commands + 8 tools |
| 定位 | AI编码纪律框架 | 虚拟工程团队 |
| 核心创新 | 流程规范 | 角色扮演系统 |

## 适用场景

✅ 独立开发者/创始人扩展产能
✅ 技术负责人精细化代码评审
✅ 创业公司快速迭代
✅ AI First 开发流程构建

## 参考链接

- GitHub: https://github.com/garrytan/gstack
- 作者: Garry Tan (@garrytan)
- 许可证: MIT
