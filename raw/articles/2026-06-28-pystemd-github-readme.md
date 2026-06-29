---
source_id: auto-2026-06-28-pystemd-gh
title: pystemd GitHub README
url: https://github.com/systemd/pystemd
source_type: github_readme
tier: 1
control_object: system_service
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# pystemd GitHub README

## 项目概述

pystemd 是一个 Python 库，允许用户通过 D-Bus 与 systemd 通信，无需直接处理 D-Bus 协议细节。用户可以通过程序化方式启动/停止/重启/终止服务并验证服务状态，避免执行 `subprocess.Popen(['systemctl', ...])` 然后解析输出的繁琐过程。

**关键指标**：
- GitHub: systemd/pystemd（官方项目）
- 提交数: 191 Commits
- Tags: 21（最新版本 v0.15.3）
- 开源协议: LGPL-2.1
- 开发语言: Python (73.6%), Cython (25.8%)

## 核心能力

### Unit 管理
```python
from pystemd.systemd1 import Unit

unit = Unit(b'postfix.service')
unit.load()

# 查询状态
unit.Unit.ActiveState  # b'active'
unit.Unit.StopWhenUnneeded  # False

# 启动/停止服务（需要权限）
unit.Unit.Stop(b'replace')  # 停止
unit.Unit.Start(b'replace')  # 启动
```

### Manager 管理
```python
from pystemd.systemd1 import Manager

manager = Manager()
manager.load()

# 列出所有单元文件
manager.Manager.ListUnitFiles()

# 获取系统信息
manager.Manager.Architecture  # b'x86-64'
manager.Manager.Virtualization  # b'kvm'
```

### Service 管理
```python
# 获取进程列表（需要 systemd v238+）
unit.Service.GetProcesses()

# 获取主进程 PID
unit.Service.MainPID
```

## 扩展功能

### pystemd.run
systemd-run 的 Python 端口：
```python
import pystemd.run, sys

pystemd.run(
    [b'/usr/bin/psql', b'postgres'],
    machine=b'db1',
    user=b'postgres',
    wait=True,
    pty=True,
    stdin=sys.stdin, stdout=sys.stdout,
    env={b'PGTZ': b'UTC'}
)
```

### sd_notify 接口
```python
import pystemd.daemon

pystemd.daemon.notify(False, ready=1, status='Gimme! Gimme! Gimme!')
```

### Socket 激活
```python
import pystemd.daemon

pystemd.daemon.LISTEN_FDS_START  # 3
pystemd.daemon.listen_fds()  # 1
```

### Watchdog 支持
```python
import time
import pystemd.daemon

watchdog_usec = pystemd.daemon.watchdog_enabled()
watchdog_sec = watchdog_usec/10**6

for i in range(20):
    pystemd.daemon.notify(False, watchdog=1, status=f'count {i+1}')
    time.sleep(watchdog_sec*0.5)
```

### Journal 日志
```python
import logging
import pystemd.journal

pystemd.journal.sendv(
    f"PRIORITY={logging.INFO}",
    MESSAGE="everything is awesome",
    SYSLOG_IDENTIFIER="tegan"
)
```

## 用户模式操作

默认操作系统级单元（root）。如需操作用户单元，需显式传入用户模式 D-Bus 实例：
```python
from pystemd.dbuslib import DBus

with DBus(user_mode=True) as bus:
    unit = Unit(b"postfix.service", bus=bus)
    unit.load()
```

## 安装

### pip 安装
```bash
pip install pystemd
```

### 系统包管理器
```bash
sudo dnf install python3-pystemd  # Fedora
sudo apt install python3-pystemd  # Debian
```

## 从源码构建

依赖：
- Python headers (python-dev)
- systemd headers (libsystemd-dev 或 systemd-devel)，至少 v237
- systemd library (systemd-libs 或 libsystemd)，至少 v237
- gcc 编译器
- pkg-config 命令
- setuptools
- Cython（至少 0.21a1）

构建：
```bash
pip install .
```

## 学习资源

会议演讲：
- [Using systemd in high level languages](https://www.youtube.com/watch?v=lBQgMGPxqNo) - All Systems Go! 2018
- [systemd: why you should care as a Python developer](https://www.youtube.com/watch?v=ZUX9Fx8Rwzg) - PyCon 2018
- [Better security for Python with systemd](https://www.youtube.com/watch?v=o-OqslA5dkw) - Pyninsula #10

Vagrant Demo: https://github.com/aleivag/pycon2018

## CentOS 7 兼容性

CentOS 7 内置 systemd 版本 219，低于要求的 v237。解决方案见官方文档：`_docs/centos7.md`

## 适用场景

- Linux 服务管理
- Python 应用服务化
- systemd 单元控制
- Socket 激活应用
- Watchdog 监控
- 系统日志集成

## 相关实体

- [[pystemd]]
- [[systemd]]
- [[D-Bus]]
- [[Linux]]
- [[服务管理]]

## 参考链接

- GitHub 仓库: https://github.com/systemd/pystemd
- 文档: https://github.com/systemd/pystemd/blob/main/_docs/