---
tags: [Agent集成层, Skills框架, Claude Code, Y Combinator]
created: 2026-06-30
updated: 2026-06-30
sources:
  - wiki/sources/2026-06-30-gstack-github-readme.md
---

# gstack

> YC CEO Garry Tan 的 Claude Code 团队扩展，将单人 AI 编码助手变成虚拟工程团队

## 定义

gstack 是 Y Combinator CEO Garry Tan 于 2026 年 4 月开源的 Claude Code 技能扩展项目。通过 23 个 slash commands 和 8 个 power tools，将单人 AI 编码助手转变为包含 CEO、工程师、设计师、QA、安全官等角色的虚拟工程团队。

## 核心能力

### 23个 Slash Commands

**产品/战略阶段**：
- `/office-hours` - YC Office Hours，6个强制问题重构产品
- `/plan-ceo-review` - CEO/Founder 战略挑战，4种范围模式
- `/plan-eng-review` - Eng Manager 架构锁定

**设计阶段**：
- `/plan-design-review` - Senior Designer 设计评审
- `/design-consultation` - Design Partner 设计系统构建
- `/design-shotgun` - Design Explorer AI mockup 生成
- `/design-html` - Design Engineer Mockup转HTML

**开发/评审阶段**：
- `/review` - Staff Engineer 代码评审
- `/investigate` - Debugger 根因调试
- `/devex-review` - DX Tester 开发者体验审计
- `/cso` - Chief Security Officer 安全审计

**QA/测试阶段**：
- `/qa` - QA Lead 真实浏览器测试
- `/qa-only` - QA Reporter 仅报告bug
- `/browse` - QA Engineer 真实Chromium控制

**发布/运维阶段**：
- `/ship` - Release Engineer 发布PR
- `/land-and-deploy` - Release Engineer 合并到生产
- `/canary` - SRE 发布后监控
- `/benchmark` - Performance Engineer 性能基准

**文档/协作阶段**：
- `/document-release` - Technical Writer 更新文档
- `/document-generate` - Documentation Author Diataxis文档生成
- `/retro` - Eng Manager 周回顾

**特殊工具**：
- `/pair-agent` - Multi-Agent Coordinator 多Agent协调
- `/autoplan` - Auto Planner 自动规划

### 8个 Power Tools
- GStack Browser (anti-bot stealth)
- Auto Model Routing
- Multi-Agent Coordinator
- Tab Isolation
- ngrok Tunnel
- Token Scoping
- Activity Attribution
- Rate Limiting

## 技术指标

- **Stars**: 104K+（2026年6月）
- **许可证**: MIT
- **开发者**: Garry Tan (YC CEO)
- **发布时间**: 2026年4月
- **支持 AI Agents**: 10+ (Claude Code, Codex, Cursor, OpenCode, etc.)

## 设计哲学

**进程导向**：Skills 按 sprint 顺序运行（Think → Plan → Build → Review → Test → Ship → Reflect），每个技能为下一个提供输入。

**虚拟工程团队**：23个专家角色覆盖完整软件工程流程，让单人拥有团队产能。

## 生态位

gstack 填补了 AI 编码 Agent 的"角色扮演"缺口。与 Superpowers 的"流程纪律"不同，gstack 更强调角色分工和全流程覆盖。

## 相关页面

- [[Agent集成层]]
- [[Claude Code]]
- [[Superpowers]]
- [[MCP]]
