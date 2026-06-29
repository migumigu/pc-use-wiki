---
title: 素材清单 - Prefect & pystemd 研究
created_date: 2026-06-28
workflow_phase: Phase 2 - Source Collection
---

# 素材清单 - Prefect & pystemd 研究

## 收集概况

- **研究方向**：系统服务控制（工作流编排 + systemd 集成）
- **收集日期**：2026-06-28
- **素材总数**：2
- **Tier 1 来源**：2（官方 GitHub README）
- **覆盖分类**：系统服务控制

## 素材列表

| 素材ID | 标题 | 来源类型 | Tier | 分类 | URL |
|--------|------|----------|------|------|-----|
| auto-2026-06-28-prefect-gh | Prefect GitHub README | github_readme | 1 | system_service | https://github.com/PrefectHQ/prefect |
| auto-2026-06-28-pystemd-gh | pystemd GitHub README | github_readme | 1 | system_service | https://github.com/systemd/pystemd |

## 素材详情

### 1. Prefect GitHub README

**来源**：PrefectHQ/prefect 官方仓库
**Tier**：1（官方 README）
**关键信息**：
- Stars: 17k+
- 提交数: 21,693
- 协议: Apache-2.0
- 语言: Python (79.6%), TypeScript (19.6%)
- 核心能力：工作流编排、任务调度、监控、部署
- 特色：`@flow` 和 `@task` decorator，Prefect Cloud，prefect-client

**关键声明（待证伪）**：
1. Stars: 17k+（P1）
2. 提交数: 21,693 Commits（P1）
3. Prefect Cloud 每月执行 200 万+ 任务（P2）
4. 支持 Python 3.10+（P1）
5. 支持 Slack 社区 25,000+ 用户（P2）

### 2. pystemd GitHub README

**来源**：systemd/pystemd 官方仓库（systemd 官方项目）
**Tier**：1（官方 README）
**关键信息**：
- 提交数: 191
- Tags: 21（最新 v0.15.3）
- 协议: LGPL-2.1
- 语言: Python (73.6%), Cython (25.8%)
- 核心能力：Unit 管理、Manager 管理、Service 管理、sd_notify、Watchdog、Journal
- 特色：D-Bus 封装，避免 subprocess 调用 systemctl

**关键声明（待证伪）**：
1. systemd 官方项目（P1）
2. 提交数: 191（P1）
3. 最新版本 v0.15.3（P1）
4. 支持 systemd v237+（P1）
5. 支持 systemd v238+ GetProcesses（P1）
6. CentOS 7 内置 systemd v219（P1）

## 素材质量评估

- **覆盖率**：完整覆盖系统服务控制分类缺口（填补 2 个）
- **权威性**：全部为官方 GitHub README（Tier 1）
- **时效性**：2026-06-28 收集，数据最新（Prefect v3.7.5 发布于 Jun 18, 2026）
- **深度**：技术细节完整（API、示例代码、安装指南）

## 研究目标达成情况

| 目标 | 状态 | 备注 |
|------|------|------|
| 填补系统服务控制缺口（8→10） | ✓ 已完成 | 新增 2 个素材 |
| 收集 5+ Tier 1 来源 | ⚠️ 部分 | 收集 2 个 Tier 1 |
| 深度技术分析 | 待执行 | 进入第三阶段 |

## 下一步

进入第三阶段：生成技术分析报告，包含：
1. Prefect 技术分析
2. pystemd 技术分析
3. 两工具对比分析
4. 与现有知识库的关联