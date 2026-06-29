---
tags: [systemd, Linux服务管理, PID-1, 初始化系统]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-systemd-io-homepage.md]
---

# systemd.io 官方文档首页

> Linux 系统和服务管理器，运行于 PID 1，启动整个系统

## 核心信息

- **官网**: https://systemd.io
- **GitHub**: https://github.com/systemd/systemd
- **状态**: Production（Linux 主流 init 系统）
- **平台**: Linux
- **Mailing List**: systemd-devel@lists.freedesktop.org

## 核心能力

systemd 提供了激进的并行化能力：
- **Socket 和 D-Bus 激活**: 服务按需启动
- **On-demand 启动**: 守护进程按需启动
- **CGroup 跟踪**: 使用 Linux control groups 管理进程
- **Mount/Automount**: 维护挂载点和自动挂载点
- **依赖逻辑**: 基于事务的依赖服务控制逻辑

## 组成部分

除了服务管理器，systemd 还包括：
- **日志守护进程**（journald）
- **基础系统配置**（hostname, date, locale）
- **用户/容器/虚拟机管理**
- **系统账户、运行时目录**
- **网络配置**（简单网络、时间同步、日志转发、名称解析）

## 文档分类

### Booting（启动）
- Automatic Boot Assessment - 自动启动评估
- Boot Loader Interface - 引导加载程序接口
- Factory Reset - 工厂重置
- TPM2 PCR Measurements - TPM2 PCR 测量

### Concepts（概念）
- Credentials - 凭证
- Desktop Environment Integration - 桌面环境集成
- Portable Services - 可移植服务
- systemd Coredump Handling - Core dump 处理

### Interfaces（接口）
- Control Group APIs and Delegation - CGroup API 与委托
- File Descriptor Store - 文件描述符存储
- Journal Export Formats - Journal 导出格式
- Native Journal Protocol - 原生 Journal 协议

### Networking（网络）
- Predictable Network Interface Names - 可预测网络接口名
- Running Services After the Network Is Up - 网络就绪后运行服务

## systemd for Administrators Blog Series

系列博客文章（共 21 篇），涵盖：
- Verifying Bootup - 启动验证
- Converting SysV Init Scripts - 转换 SysV 脚本
- Killing Services - 终止服务
- The Three Levels of "Off" - 三级"关闭"
- Instantiated Services - 实例化服务
- Socket Activation - Socket 激活
- Using the Journal - 使用 Journal
- Managing Resources - 资源管理

## systemd for Developers Series

开发者系列：
- Socket Activation - Socket 激活
- Socket Activation (Part 2) - Socket 激活（第二部分）
- Logging to the Journal - 日志写入 Journal

## 语言绑定

支持多种语言：
- C++ (sdbus-cpp)
- Go (go-systemd)
- Python (pystemd, python-systemd)
- Node.JS, PHP, Perl, Ruby, Lua, Haskell

## 发行版支持

主流 Linux 发行版：
- Arch Linux, Debian, Fedora
- Gentoo, Mageia, Ubuntu, openSUSE

## AI Agent 应用场景

- **服务管理**: 启动/停止/重启 Linux 服务
- **资源监控**: 通过 CGroup 监控进程资源使用
- **日志查询**: 通过 journalctl 查询系统日志
- **网络控制**: 管理网络服务和接口

## 相关实体

- [[systemd]]
- [[CGroup]]
- [[Journal]]
- [[Socket-Activation]]

## 相关页面

- [[2026-06-28-systemd-io-homepage]]（本页面）
- [[系统服务控制]]