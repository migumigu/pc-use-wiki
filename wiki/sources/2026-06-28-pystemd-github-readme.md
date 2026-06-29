---
tags: [systemd, D-Bus, Linux, 服务管理]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-pystemd-github-readme.md]
---

# pystemd GitHub README

> systemd 官方 Python 集成库，通过 D-Bus 管理服务

## 来源信息

- **来源类型**: GitHub README（官方）
- **Tier**: 1
- **URL**: https://github.com/systemd/pystemd
- **收集日期**: 2026-06-28
- **置信度**: high

## 项目概况

**关键指标**：
- GitHub: systemd/pystemd（官方项目）
- 提交数: 191 Commits
- Tags: 21（最新版本 v0.15.3）
- 协议: LGPL-2.1
- 语言: Python (73.6%), Cython (25.8%)

**核心定位**：Python 通过 D-Bus 与 systemd 通信，避免 subprocess 调用 systemctl

## 核心能力

### Unit 管理
- 启动/停止/重启服务
- 状态查询（ActiveState、SubState）
- 获取进程列表（GetProcesses，需要 systemd v238+）

### Manager 管理
- 列出所有单元文件（ListUnitFiles）
- 获取系统信息（Architecture、Virtualization）

### 扩展功能
- `pystemd.run`: systemd-run Python 端口
- `pystemd.daemon`: sd_notify 接口
- `pystemd.journal`: Journal 日志接口
- Socket 激活、Watchdog 支持

## 使用示例

```python
from pystemd.systemd1 import Unit

unit = Unit(b'postfix.service')
unit.load()

# 查询状态
unit.Unit.ActiveState  # b'active'

# 启动/停止服务
unit.Unit.Start(b'replace')
unit.Unit.Stop(b'replace')
```

## 技术要求

- systemd v237+
- CentOS 7 内置 systemd v219（不兼容）

## 适用场景

- Linux 服务管理
- Python 应用服务化
- systemd 单元控制
- Socket 激活应用
- Watchdog 监控

## 提取实体

- [[pystemd]] — 工具实体
- [[D-Bus]] — 技术概念
- [[systemd]] — 已有实体（补充关联）

## 相关页面

- [[系统服务控制]] — 控制对象分类
- [[systemd]] — 相关实体
- [[PowerShell]] — 对比工具