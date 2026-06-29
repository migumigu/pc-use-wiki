---
tags: [systemd, D-Bus, Linux, 服务管理]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-pystemd-github-readme.md]
---

# pystemd

> systemd 官方 Python 集成库，通过 D-Bus 管理服务

## 基本信息

- **项目名称**: pystemd
- **GitHub**: https://github.com/systemd/pystemd（systemd 官方）
- **提交数**: 191 Commits
- **版本**: v0.15.3（2026-01-15）
- **协议**: LGPL-2.1
- **语言**: Python (73.6%), Cython (25.8%)

## 核心定位

Python 库，通过 D-Bus 与 systemd 通信，避免执行 `subprocess.Popen(['systemctl', ...])`。

## 核心能力

### Unit 管理
<!-- confidence: EXTRACTED -->
- `pystemd.systemd1.Unit`: 单元管理类
- 启动/停止/重启服务（Start/Stop）
- 状态查询（ActiveState、SubState）
- 进程列表（GetProcesses，需要 systemd v238+）

### Manager 管理
<!-- confidence: EXTRACTED -->
- `pystemd.systemd1.Manager`: 管理器类
- 列出所有单元文件（ListUnitFiles）
- 获取系统信息（Architecture、Virtualization）

### 扩展功能
<!-- confidence: EXTRACTED -->
- `pystemd.run`: systemd-run Python 端口
- `pystemd.daemon`: sd_notify 接口
- `pystemd.journal`: Journal 日志接口
- Socket 激活支持
- Watchdog 支持

## 使用示例

<!-- confidence: EXTRACTED -->
```python
from pystemd.systemd1 import Unit

unit = Unit(b'postfix.service')
unit.load()

# 查询状态
unit.Unit.ActiveState  # b'active'

# 启动服务
unit.Unit.Start(b'replace')
```

## 技术要求

<!-- confidence: EXTRACTED -->
- systemd v237+
- Python headers
- systemd headers (libsystemd-dev)
- systemd library (至少 v237)
- Cython（至少 0.21a1）

## 兼容性限制

<!-- confidence: EXTRACTED -->
- CentOS 7 内置 systemd v219，不兼容
- 需要 systemd v238+ 才能使用 GetProcesses

## 适用场景

<!-- confidence: INFERRED -->
- Linux 服务管理
- Python 应用服务化
- systemd 单元控制
- Socket 激活应用
- Watchdog 监控

## 与同类工具对比

| 维度 | pystemd | subprocess | dbus-python |
|------|---------|------------|-------------|
| 官方支持 | ✓（systemd） | ✓（Python） | ✗ |
| API 设计 | 高级封装 | 原始命令 | 底层协议 |
| 学习曲线 | 中 | 低 | 高 |

## 在 Agent 控制中的作用

<!-- confidence: INFERRED -->
提供 Linux 服务管理能力，让 Agent 程序化控制 systemd 单元，是系统服务控制层的关键工具。

## 相关页面

- [[系统服务控制]] — 控制对象分类
- [[systemd]] — 关联系统
- [[D-Bus]] — 通信协议
- [[PowerShell]] — 对比工具