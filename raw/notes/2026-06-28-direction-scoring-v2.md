---
source_id: auto-2026-06-28-direction-scoring-v2
title: 研究方向评分矩阵 v2
date: 2026-06-28
research_direction: File System as Agent Context
---

# 方向评分结果

## 评分矩阵

| 维度 | 权重 | 评分标准 | 证据来源 |
|------|------|----------|----------|
| **热度指标** | 30% | Stars > 50K = 10, > 10K = 7, > 1K = 5, > 100 = 3 | GitHub API / 官网 |
| **契合度** | 30% | 命中核心分类 = 10, 辅助分类 = 5, 无匹配 = 0 | purpose.md 分类 |
| **可获取性** | 25% | 官方文档 = 10, 权威媒体 = 7, 社区文档 = 5, 仅社交 = 2 | 来源分析 |
| **研究价值** | 15% | 技术深度(5) × 可扩展性(5) | 架构分析 |

## 方向评分

| 方向 | 热度 | 契合度 | 可获取性 | 研究价值 | 总分 | 排名 |
|------|------|--------|----------|----------|------|------|
| File System as Agent Context | 9 | 10 | 8 | 9 | 9.15 | 1 |
| Agent Desktop (Accessibility Tree) | 7 | 8 | 7 | 7 | 7.35 | 2 |
| Computer Use 2.0 | 6 | 7 | 6 | 6 | 6.35 | 3 |
| WMI/PowerShell Automation | 4 | 6 | 7 | 5 | 5.35 | 4 |

## 选定方向：File System as Agent Context

### 选择理由

1. **热度**：planning-with-files 项目 5 个月内 23K+ stars，Manus、Claude Code、Anthropic 都在用
2. **契合度**：完全匹配"文件系统控制"空白区，且关联 Agent 集成层
3. **可获取性**：有官方博客（Manus）、GitHub 仓库（planning-with-files）、深度分析文章
4. **研究价值**：Context Engineering 是 AI Agent 核心能力，可扩展性强

## 素材清单

| 素材 | 类型 | Tier | 来源 |
|------|------|------|------|
| File System as Meta Tool | 技术博客 | 2 | CSDN |
| planning-with-files GitHub | GitHub README | 1 | GitHub |
| Manus Context Engineering | 官方博客 | 1 | Manus.im |
| Claude Code Agent Design | 技术博客 | 2 | 今日头条 |
| Context Engineering Guide | 技术博客 | 2 | CSDN |

**总计**：5 个素材（Tier1: 2, Tier2: 3）
