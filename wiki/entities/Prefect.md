---
tags: [工作流编排, Python, 任务调度, 系统服务]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-prefect-github-readme.md]
---

# Prefect

> Python 工作流编排框架，17k Stars，将脚本提升为生产级工作流

## 基本信息

- **项目名称**: Prefect
- **GitHub**: https://github.com/PrefectHQ/prefect
- **Stars**: 17k+
- **协议**: Apache-2.0
- **语言**: Python (79.6%), TypeScript (19.6%)
- **提交数**: 21,693 Commits

## 核心定位

Python 工作流编排框架，用于构建数据管道。它是将脚本提升为生产级工作流的最简单方式。

## 核心能力

### 工作流编排
<!-- confidence: EXTRACTED -->
- `@flow` decorator: 定义工作流
- `@task` decorator: 定义任务
- 调度（cron 表达式）
- 缓存
- 重试机制
- 事件驱动自动化

### 监控与管理
<!-- confidence: EXTRACTED -->
- **Prefect Server**: 自托管监控服务（http://localhost:4200）
- **Prefect Cloud**: 托管服务，每月执行 200 万+ 任务 <!-- confidence: EXTRACTED -->
- **prefect-client**: 轻量级客户端

### 生产部署
<!-- confidence: EXTRACTED -->
```python
# 定时部署
github_stars.serve(
    name="first-deployment",
    cron="* * * * *",
    parameters={"repos": ["PrefectHQ/prefect"]}
)
```

## 技术要求

<!-- confidence: EXTRACTED -->
- Python 3.10+

## 适用场景

<!-- confidence: INFERRED -->
- 数据管道自动化
- 任务调度与监控
- 失败重试与恢复
- 事件驱动工作流
- 团队协作（多用户管理）

## 与同类工具对比

| 维度 | Prefect | Airflow | Luigi |
|------|---------|---------|-------|
| Stars | 17k+ | 35k+ | 16k+ |
| 学习曲线 | 低 | 高 | 中 |
| 监控 | Server+Cloud | Web UI | 无 |
| 调度 | cron | cron | 无 |

## 社区资源

<!-- confidence: EXTRACTED -->
- Slack 社区: https://prefect.io/slack（25,000+ 用户）
- 官方文档: https://docs.prefect.io/
- Dev Log: https://dev-log.prefect.io/

## 在 Agent 控制中的作用

<!-- confidence: INFERRED -->
提供任务调度与监控能力，让 Agent 管理复杂工作流，是系统服务控制层的关键工具。

## 相关页面

- [[系统服务控制]] — 控制对象分类
- [[工作流编排]] — 技术概念
- [[任务调度]] — 技术概念
- [[PowerShell]] — 对比工具
- [[psutil]] — 对比工具