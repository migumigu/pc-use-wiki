---
tags: [systemd, Linux服务管理, PID-1, 初始化系统, 进程管理]
created: 2026-06-28
updated: 2026-06-28
sources: [wiki/sources/2026-06-28-systemd-io-homepage.md]
---

# systemd

> Linux 系统和服务管理器，运行于 PID 1，启动整个系统

## 基本信息

- **官网**: https://systemd.io
- **GitHub**: https://github.com/systemd/systemd
- **状态**: Production（Linux 主流 init 系统）
- **平台**: Linux
- **角色**: PID 1（系统初始化进程）
- **Mailing List**: systemd-devel@lists.freedesktop.org

## 类型定位

- **控制对象**: 系统服务控制
- **技术层级**: 工具实现层
- **项目状态**: Production（主流 Linux init 系统）

## 核心能力

### 并行化启动
- Socket 和 D-Bus 激活服务按需启动
- On-demand 守护进程启动
- 激进的并行化能力

### 进程管理
- CGroup 跟踪（Linux control groups）
- 进程状态监控
- 进程资源限制

### 挂载管理
- Mount/Automount 点维护
- 依赖挂载逻辑

### 服务控制
- 基于事务的依赖服务控制
- 服务启动顺序管理
- 服务状态查询

## 组成部分

systemd 是一套 Linux 系统基础组件：
- **systemd-init**: PID 1 服务管理器
- **journald**: 日志守护进程
- **logind**: 用户登录管理
- **networkd**: 网络配置
- **resolved**: DNS 解析
- **timesyncd**: 时间同步
- **tmpfiles**: 临时文件管理
- **sysusers**: 系统用户管理

## 核心文档分类

### Booting（启动）
- Automatic Boot Assessment - 自动启动评估
- Boot Loader Interface - 引导加载程序接口
- Factory Reset - 工厂重置
- TPM2 PCR Measurements - TPM2 PCR 测量

### Concepts（概念）
- Credentials - 凭证
- Desktop Environment Integration - 桌面环境集成
- Portable Services - 可移植服务

### Interfaces（接口）
- Control Group APIs and Delegation - CGroup API
- Journal Export Formats - Journal 导出格式
- Native Journal Protocol - 原生 Journal 协议

## AI Agent 应用场景

### 服务管理
- 启动/停止/重启 Linux 服务
- 服务状态查询
- 服务日志查看

### 资源监控
- 通过 CGroup 监控进程资源使用
- CPU、内存、磁盘 I/O 监控

### 日志查询
- 通过 journalctl 查询系统日志
- 日志过滤和搜索

### 网络控制
- 管理网络服务和接口
- DNS 解析控制

## 语言绑定

支持多种语言绑定：
- **C++**: sdbus-cpp
- **Go**: go-systemd
- **Python**: pystemd, python-systemd
- **Node.JS**: systemd, sd-notify
- **PHP**: php-systemd
- **Perl**: Log-Journald
- **Ruby**: systemd-journal
- **Lua**: lua-systemd
- **Haskell**: libsystemd-journal

## 发行版支持

主流 Linux 发行版默认使用 systemd：
- Arch Linux
- Debian
- Fedora
- Gentoo
- Mageia
- Ubuntu
- openSUSE

## 常用命令

```bash
# 服务管理
systemctl start service
systemctl stop service
systemctl restart service
systemctl status service

# 日志查询
journalctl -u service
journalctl -f  # 实时日志

# 资源监控
systemd-cgtop  # CGroup 资源使用
```

## 相关实体

- [[CGroup]] - Linux Control Groups
- [[Journal]] - systemd 日志系统
- [[Socket-Activation]] - Socket 激活机制
- [[系统服务控制]] - 研究主题
- [[PowerShell]] - Windows 对应工具

## 相关页面

- [[2026-06-28-systemd-io-homepage]] - 素材来源
- [[系统服务控制]] - 所属主题