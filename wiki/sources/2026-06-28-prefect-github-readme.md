---
tags: [工作流编排, Python, 任务调度, 系统服务]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-prefect-github-readme.md]
---

# Prefect GitHub README

> Python 工作流编排框架，17k Stars，将脚本提升为生产级工作流

## 来源信息

- **来源类型**: GitHub README（官方）
- **Tier**: 1
- **URL**: https://github.com/PrefectHQ/prefect
- **收集日期**: 2026-06-28
- **置信度**: high

## 项目概况

**关键指标**：
- Stars: 17k+
- 提交数: 21,693 Commits
- 协议: Apache-2.0
- 语言: Python (79.6%), TypeScript (19.6%)

**核心定位**：Python 工作流编排框架，将脚本提升为生产级工作流

## 核心能力

### 工作流编排
- `@flow` decorator: 定义工作流
- `@task` decorator: 定义任务
- 调度（cron 表达式）
- 缓存
- 重试机制
- 事件驱动自动化

### 监控与管理
- 自托管 Prefect server（http://localhost:4200）
- Prefect Cloud（托管服务）
- UI 监控界面
- 实时任务状态跟踪

## 快速入门示例

```python
from prefect import flow, task
import httpx

@task(log_prints=True)
def get_stars(repo: str):
    url = f"https://api.github.com/repos/{repo}"
    count = httpx.get(url).json()["stargazers_count"]
    print(f"{repo} has {count} stars!")

@flow(name="GitHub Stars")
def github_stars(repos: list[str]):
    for repo in repos:
        get_stars(repo)

if __name__ == "__main__":
    github_stars(["PrefectHQ/prefect"])
```

## Prefect Cloud

- 每月自动化执行超过 200 万个数据任务 <!-- confidence: EXTRACTED -->
- 客户包括 Fortune 50 企业和创新公司 <!-- confidence: EXTRACTED -->
- 提升工程生产力、减少管道错误、降低计算成本

## 技术要求

- Python 3.10+

## 适用场景

- 数据管道自动化
- 任务调度与监控
- 失败重试与恢复
- 事件驱动工作流
- 团队协作（多用户管理）

## 提取实体

- [[Prefect]] — 工具实体
- [[工作流编排]] — 技术概念
- [[任务调度]] — 技术概念

## 相关页面

- [[系统服务控制]] — 控制对象分类
- [[PowerShell]] — 对比工具
- [[psutil]] — 对比工具