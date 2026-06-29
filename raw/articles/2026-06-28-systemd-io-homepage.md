---
source_id: auto-2026-06-28-systemd-io
title: systemd.io 官方文档首页
url: https://systemd.io
source_type: official_docs
tier: 1
control_object: system_service_control
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# System and Service Manager

systemd is a suite of basic building blocks for a Linux system. It provides a system and service manager that runs as PID 1 and starts the rest of the system.

## 核心能力

systemd provides aggressive parallelization capabilities, uses socket and D-Bus activation for starting services, offers on-demand starting of daemons, keeps track of processes using Linux control groups, maintains mount and automount points, and implements an elaborate transactional dependency-based service control logic.

## 组成部分

Other parts include:
- a logging daemon
- utilities to control basic system configuration like the hostname, date, locale
- maintain a list of logged-in users and running containers and virtual machines
- system accounts, runtime directories and settings
- daemons to manage simple network configuration, network time synchronization, log forwarding, and name resolution

## 文档分类

### Booting（启动）

- [Automatic Boot Assessment](https://systemd.io/AUTOMATIC_BOOT_ASSESSMENT/) - 自动启动评估
- [Boot Components & Root File System Discovery](https://systemd.io/ROOTFS_DISCOVERY/) - 启动组件与根文件系统发现
- [Boot Loader Interface](https://systemd.io/BOOT_LOADER_INTERFACE/) - 引导加载程序接口
- [Factory Reset](https://systemd.io/FACTORY_RESET/) - 工厂重置
- [Mount Requirements](https://systemd.io/MOUNT_REQUIREMENTS/) - 挂载要求
- [TPM2 PCR Measurements Made by systemd](https://systemd.io/TPM2_PCR_MEASUREMENTS/) - TPM2 PCR 测量

### Concepts（概念）

- [Credentials](https://systemd.io/CREDENTIALS/) - 凭证
- [Desktop Environment Integration](https://systemd.io/DESKTOP_ENVIRONMENTS/) - 桌面环境集成
- [Portable Services Introduction](https://systemd.io/PORTABLE_SERVICES/) - 可移植服务介绍
- [Porting systemd To New Distributions](https://systemd.io/DISTRO_PORTING/) - 移植到新发行版
- [Random Seeds](https://systemd.io/RANDOM_SEEDS/) - 随机种子
- [Safely Building Images](https://systemd.io/BUILDING_IMAGES/) - 安全构建镜像
- [systemd Coredump Handling](https://systemd.io/COREDUMP/) - Core dump 处理

### Interfaces（接口）

- [Control Group APIs and Delegation](https://systemd.io/CGROUP_DELEGATION/) - CGroup API 与委托
- [File Descriptor Store](https://systemd.io/FILE_DESCRIPTOR_STORE/) - 文件描述符存储
- [Initrd Interface](https://systemd.io/INITRD_INTERFACE/) - Initrd 接口
- [Journal Export Formats](https://systemd.io/JOURNAL_EXPORT_FORMATS/) - Journal 导出格式
- [Journal File Format](https://systemd.io/JOURNAL_FILE_FORMAT/) - Journal 文件格式
- [Native Journal Protocol](https://systemd.io/JOURNAL_NATIVE_PROTOCOL/) - 原生 Journal 协议

### Manuals and Documentation for Users and Administrators

- [API File Systems](https://systemd.io/API_FILE_SYSTEMS/) - API 文件系统
- [Booting Without /usr is Broken](https://systemd.io/SEPARATE_USR_IS_BROKEN/) - 无 /usr 启动已损坏
- [Compatibility with SysV](https://systemd.io/INCOMPATIBILITIES/) - SysV 兼容性
- [Diagnosing Boot Problems](https://systemd.io/DEBUGGING/) - 启动问题诊断
- [Frequently Asked Questions](https://systemd.io/FAQ/) - FAQ
- [Socket Activation with Popular Daemons](https://systemd.io/DAEMON_SOCKET_ACTIVATION/) - Socket 激活

### Networking（网络）

- [Predictable Network Interface Names](https://systemd.io/PREDICTABLE_INTERFACE_NAMES/) - 可预测网络接口名
- [Running Services After the Network Is Up](https://systemd.io/NETWORK_ONLINE/) - 网络就绪后运行服务
- [systemd-resolved and VPNs](https://systemd.io/RESOLVED-VPNS/) - systemd-resolved 与 VPN

## 项目信息

- **GitHub**: [systemd/systemd](https://github.com/systemd/systemd)
- **Mailing List**: systemd-devel@lists.freedesktop.org
- **Mastodon**: [@pid_eins](https://mastodon.social/@pid_eins)
- **Releases**: [GitHub Releases](https://github.com/systemd/systemd/releases)

## systemd for Administrators Blog Series

系列博客文章（共 21 篇），涵盖：
- Verifying Bootup
- Which Service Owns Which Processes?
- Converting SysV Init Scripts
- Killing Services
- The Three Levels of "Off"
- Changing Roots
- The Blame Game
- The New Configuration Files
- Instantiated Services
- Converting inetd Services
- Securing Your Services
- Log and Service Status
- The Self-Explanatory Boot
- Watchdogs
- Gettys on Serial Consoles
- Using the Journal
- Managing Resources
- Detecting Virtualization
- Socket Activated Internet Services
- Container Integration

## systemd for Developers Series

开发者系列：
- Socket Activation
- Socket Activation (Part 2)
- Logging to the Journal

## 相关绑定库

支持多种语言的绑定：
- C++ bindings (sdbus-cpp)
- Erlang bindings (ejournald)
- Go Bindings (go-systemd)
- Haskell Journal API
- Lua Bindings (lua-systemd)
- Node.JS bindings
- PHP Bindings (php-systemd)
- Perl bindings
- Python bindings (pystemd, python-systemd)
- Ruby bindings

## 发行版支持

主流发行版集成：
- Arch Linux
- Debian
- Fedora
- Gentoo
- Mageia
- Ubuntu
- openSUSE