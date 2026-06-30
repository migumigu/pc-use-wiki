---
source_id: auto-2026-06-30-wmi-reference-official
title: WMI Reference 官方文档 - Windows Management Instrumentation 完整参考
url: https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmi-reference
source_type: official_docs
tier: 1
control_object: system_service
tech_layer: protocol
collected_date: 2026-06-30
collected_by: auto_research
confidence: high
---

# WMI Reference 官方文档

## 一句话摘要
Microsoft 官方 Windows Management Instrumentation (WMI) 参考文档，涵盖 WMI 类、提供商、COM/Scripting API、安全等完整技术参考。

## 核心内容

### WMI 参考文档结构
WMI Reference 包含以下主要部分：

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
| WMI Infrastructure | WMI 返回码、事件、MOF 语法、性能计数器等 |

### WMI 类分类

**1. WMI System Classes (__ 前缀)**
- 预定义类，每个 WMI 命名空间都包含
- 用于支持 WMI 活动：事件、注册、安全、事件通知
- 类似于 SQL Server 中的系统表
- MOF 编译不处理双下划线前缀类

**2. MSFT Classes**
- 提供操作操作系统功能的 Microsoft 类
- 如远程事件、策略扩展
- WMI Troubleshooting 类提供 WMI 操作数据

**3. CIM Classes**
- Common Information Model (CIM) schema 类
- 继承自 CIM 的类用于编写自定义 WMI 类
- Win32 Classes 继承自 CIM 类

**4. Standard Consumer Classes**
- 事件消费者类
- 接收事件时触发操作

### WMI 提供商列表

| 提供商 | 说明 |
|--------|------|
| Active Directory Provider | 将 AD 对象映射到 WMI |
| BitLocker Drive Encryption Provider | 磁盘加密配置管理 |
| Boot Configuration Data (BCD) Provider | 启动配置数据访问 |
| CIMWin32 WMI Providers | 支持 CimWin32.dll 实现的类 |
| Common Information Model (CIM) Provider | CIM 标准实现 |
| DNS Provider | DNS 服务器管理 |
| Event Log Provider | 事件日志访问 |
| File System Provider | 文件系统管理 |
| Firewall Provider | Windows 防火墙管理 |
| Group Policy Provider | 组策略管理 |
| Hyper-V Provider | 虚拟化平台管理 |
| Intel Driver Provider | 硬件驱动管理 |
| Network Provider | 网络配置管理 |
| Power Provider | 电源管理 |
| Print Provider | 打印系统管理 |
| Registry Provider | 注册表访问 |
| Security Provider | 安全策略管理 |
| Service Provider | Windows 服务管理 |
| SharePoint Provider | SharePoint 文档管理 |
| SMS Provider | 系统管理服务器 |
| Storage Provider | 存储管理 |
| Telephony Provider | 电话服务管理 |
| Volume Shadow Copy Service Provider | 卷影复制服务 |
| Win32 Provider | Windows 系统配置和硬件信息 |
| Windows Update Provider | Windows 更新管理 |

### Win32 Provider 核心类

**Computer System Hardware Classes**
- Cooling Device Classes（冷却设备）
- Input Device Classes（输入设备）
- Mass Storage Classes（存储设备）
- Motherboard, Controller, and Port Classes（主板、控制器、端口）
- Networking Device Classes（网络设备）
- Pointing Device Classes（指针设备）
- Power Devices Classes（电源设备）
- Printing Classes（打印设备）
- Process Classes（进程）
- IEEE 1394 Classes（火线设备）
- Infrared Classes（红外设备）
- UPS Classes（不间断电源）

**Operating System Classes**
- COM Classes（组件对象模型）
- Desktop Classes（桌面管理）
- Drivers Classes（驱动程序）
- File System Classes（文件系统）
- Job Objects Classes（作业对象）
- Memory and Page Files Classes（内存和页面文件）
- Multimedia Classes（多媒体）
- Networking Classes（网络）
- OS Vulnerability Classes（系统漏洞）
- Perennial Classes（持久类）
- Process Classes（进程）
- Registry Classes（注册表）
- Scheduled Jobs Classes（计划任务）
- Security Classes（安全）
- Server Applications Classes（服务器应用）
- Services Classes（服务）
- Shares Classes（共享）
- Software Classes（软件）
- Sound Cards Classes（声卡）
- System Classes（系统）
- Tape Drive Classes（磁带驱动）
- Terminal Services Classes（终端服务）
- Thread Classes（线程）
- TimeZone Classes（时区）
- Users Classes（用户）
- Video and Monitor Classes（视频和监视器）

**Performance Counter Classes**
- Raw performance data
- Calculated performance data

**WMI Service Management Classes**
- WMI 服务管理

### WMI 命名规范

**类命名**
- 必须符合 DMTF 定义的 MOF 语法
- 首字符：a-z 和下划线
- 后续字符：a-z、下划线、数字 0-9
- 不使用 SQL 保留字

**属性访问类型**
- Read-only：只读属性
- Read/Write：读写属性

**关键限定符 (Qualifiers)**
- Key：键属性
- Override：重写父类属性

### WMI 查询语言 (WQL)

WQL 是 SQL 的子集，用于 WMI 查询：
- SELECT 语句
- 事件查询
- 架构查询

## 关键发现

1. **WMI 是 Windows 核心管理基础设施**，提供统一的系统管理接口
2. **Win32 Provider 是最常用的提供商**，支持硬件和软件信息访问
3. **WMI 采用 CIM 模型**，实现标准的系统管理架构
4. **支持远程计算机管理**，通过 DCOM/RPC
5. **提供完整的安全机制**，包括安全描述符和权限控制

## 相关实体

- [[WMI]] — Windows 管理规范
- [[Win32 Provider]] — Windows 提供商
- [[CIM]] — 公共信息模型
- [[MOF]] — 管理对象格式
- [[WQL]] — WMI 查询语言

## 来源信息
- 来源：Microsoft Learn (learn.microsoft.com)
- 类型：官方文档
- 更新日期：2023-11-10（WMI Classes）
- 置信度：EXTRACTED（来自官方文档）
