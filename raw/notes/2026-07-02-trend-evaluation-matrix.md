# 2026 新趋势项目评分矩阵

> 生成日期：2026-07-02
> 目的：从 GitHub Trending 发现的新项目中筛选 TOP 3 进行深入研究

## 去重过滤结果

| 项目 | 知识库状态 | 决策 |
|------|-----------|------|
| **OpenMontage** | 🟢 已有实体页 | 跳过（已研究） |
| **agency-agents** | 🔴 未研究 | 纳入评估 |
| **strix** | 🔴 未研究 | 纳入评估 |
| **OmniRoute** | 🔴 未研究 | 纳入评估 |
| **Cognee** | 🔴 未研究 | 纳入评估 |
| **Orca** | 🔴 未研究 | 纳入评估 |
| **agent-toolkit-for-aws** | 🔴 未研究 | 纳入评估 |
| **agent-native** | 🔴 未研究 | 纵入评估 |

## 评分矩阵

| 项目 | Stars | 热度(30%) | 契合度(30%) | 可获取性(25%) | 研究价值(15%) | 总分 | 排名 |
|------|-------|----------|------------|--------------|--------------|------|------|
| **agency-agents** | 122K+ | 10 | 10 | 10 | 8 | **9.6** | 1 |
| **Cognee** | 24K+ | 9 | 8 | 10 | 8 | **8.7** | 2 |
| **Orca** | 7K+ | 6 | 10 | 10 | 9 | **8.65** | 3 |
| **OmniRoute** | 9.3K+ | 7 | 8 | 10 | 7 | 8.05 | 4 |
| **strix** | 29K+ | 9 | 5 | 10 | 6 | 7.45 | 5 |
| **agent-toolkit-for-aws** | 新 | 4 | 8 | 10 | 7 | 7.1 | 6 |
| **agent-native** | 新 | 4 | 8 | 10 | 7 | 7.1 | 7 |

### 评分标准

**热度指标（30%）**：
- Stars > 50K = 10
- Stars > 10K = 9
- Stars > 5K = 7
- Stars > 1K = 6
- Stars > 100 = 4

**契合度（30%）**：
- 直接命中五大控制对象 + Agent 集成层 = 10
- 命中 Agent 集成层 = 8
- 间接关联 = 5
- 无关联 = 0

**可获取性（25%）**：
- 官方 README + 官网 + 文档 = 10
- 官方 README + 文档 = 8
- 仅 README = 7

**研究价值（15%）**：
- 技术深度高 + 可扩展性强 = 9-10
- 技术深度中等 = 7-8
- 技术深度低 = 5-6

## TOP 3 项目详情

### 1. agency-agents（122K+ Stars）
- **GitHub URL**: https://github.com/msitarzewski/agency-agents
- **核心定位**: 完整 AI Agency 技能库，包含 51+ 专业化 Agent
- **控制对象**: Agent 集成层 — Skills 系统、多 Agent 协作
- **技术亮点**: Division 分层架构（15 个 Division）、每个 Agent 有独立技能和工具链

### 2. Cognee（24K+ Stars）
- **GitHub URL**: https://github.com/topoteretes/cognee
- **核心定位**: 开源 AI Agent 记忆平台，知识图谱引擎
- **控制对象**: Agent 集成层 — 记忆系统、知识图谱
- **技术亮点**: ECL 三阶段提取、支持 MCP、自托管知识图谱引擎

### 3. Orca（7K+ Stars）
- **GitHub URL**: https://github.com/stablyai/orca
- **核心定位**: 并行 Agent 桌面编排器，多 CLI Agent 并行工作
- **控制对象**: 桌面应用控制 + Agent 集成层 — 多 Agent 编排
- **技术亮点**: Git worktree 隔离、桌面 GUI、跨厂商中立

## 选定研究方向

选择 **TOP 3 项目** 进行深入研究：
1. **agency-agents** — Agent Skills 系统研究
2. **Cognee** — AI Agent 记忆层研究
3. **Orca** — 并行 Agent 编排研究

每个项目收集 ≥3 个 Tier 1 来源（GitHub README、官方文档、官网）。