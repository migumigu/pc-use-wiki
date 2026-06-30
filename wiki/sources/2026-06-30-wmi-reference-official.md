---
tags: [WMI, Windows, 系统服务控制, 官方文档, Microsoft]
created: 2026-06-30
updated: 2026-06-30
sources: [2026-06-30-wmi-reference-official]
---

# WMI Reference 官方文档

> Microsoft 官方 Windows Management Instrumentation 完整参考文档

## 一句话摘要

Microsoft 官方 WMI 参考文档，涵盖 WMI 类、提供商、COM/Scripting API、安全等完整技术参考，是 Windows 系统管理的核心基础设施文档。

## 核心内容

### WMI 参考文档结构

| 分类 | 说明 |
|------|------|
| WMI Classes | WMI 定义的完整类列表 |
| WMI Providers | 可请求信息并发送指令的预装提供商 |
| COM API for WMI | C/C++ 管理和提供商应用使用的 COM 接口 |
| Scripting API for WMI | WMI Scripting API 组件完整列表 |
| WMI and SQL | WQL（WMI 查询语言），SQL 子集 |
| WMI Log Files | WMI 及提供商的日志文件 |
| WMI Security | 安全描述符对象和操作安全描述符的常量 |
| WMI Command-Line Tools | mofcomp、winmgmt、wmic 等命令行工具 |

### WMI 类分类体系

**1. WMI System Classes (__ 前缀)**
- 预定义类，每个 WMI 命名空间都包含
- 用于支持 WMI 活动：事件、注册、安全、事件通知
- 类似于 SQL Server 中的系统表

**2. MSFT Classes**
- 提供操作操作系统功能的 Microsoft 类
- 如远程事件、策略扩展

**3. CIM Classes**
- Common Information Model (CIM) schema 类
- Win32 Classes 继承自 CIM 类

**4. Standard Consumer Classes**
- 事件消费者类，接收事件时触发操作

### Win32 Provider 核心类

**Computer System Hardware Classes**
- Cooling Device、Input Device、Mass Storage
- Networking Device、Pointing Device、Power Devices
- Printing、Process、Sound Cards
- Video and Monitor 等

**Operating System Classes**
- COM、Desktop、Drivers、File System
- Job Objects、Memory and Page Files
- Networking、Process、Registry
- Security、Services、Shares
- Software、Thread、TimeZone 等

### WMI 提供商

支持 Active Directory、BitLocker、BCD、CIMWin32、DNS、Event Log、File System、Firewall、Group Policy、Hyper-V、Network、Power、Print、Registry、Security、Service、Storage、Windows Update 等。

## 关键发现

1. **WMI 是 Windows 核心管理基础设施**，提供统一的系统管理接口
2. **Win32 Provider 是最常用的提供商**，支持硬件和软件信息访问
3. **WMI 采用 CIM 模型**，实现标准的系统管理架构
4. **支持远程计算机管理**，通过 DCOM/RPC
5. **提供完整的安全机制**，包括安全描述符和权限控制

## 相关页面

- [[WMI]] — Windows 管理规范
- [[Win32 Provider]] — Windows 提供商
- [[系统服务控制]] — 系统服务控制主题
- [[WMI Official Documentation]] — 本素材摘要

## 来源信息

- URL：https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmi-reference
- 类型：官方文档 (Tier 1)
- 置信度：EXTRACTED
