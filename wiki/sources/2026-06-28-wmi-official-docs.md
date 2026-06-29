---
tags: [Windows管理, WMI, 系统监控, COM]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-wmi-official-docs.md]
---

# WMI Official Documentation

> Windows Management Instrumentation — Microsoft对WBEM行业标准的实现,用于访问管理信息的标准技术

## 基本信息

- **开发者**: Microsoft
- **框架类型**: 系统管理规范（对WBEM标准的Windows实现）
- **文档地址**: https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmi-start-page
- **素材类型**: 官方文档
- **技术层级**: 系统基础层
- **控制对象**: 系统服务控制

## 核心定位

<!-- confidence: EXTRACTED -->
**WMI (Windows Management Instrumentation)** 是 Microsoft 对 WBEM (Web-Based Enterprise Management) 行业标准的实现，是一个用于访问管理信息的标准技术。WMI 提供统一接口，用于从本地或远程应用程序或脚本获取管理数据。

## 架构设计

### 核心组件
<!-- confidence: EXTRACTED -->

- **WMI Providers**: 提供硬件和软件对象的管理数据
- **WMI Classes**: Win32_* 命名空间下的各类（如 Win32_Process, Win32_Service）
- **CIM (Common Information Model)**: 标准管理信息模型

### 数据流架构
<!-- confidence: EXTRACTED -->
1. Consumer（消费者，如脚本/应用）→ WMI → Providers（提供者）→ Managed Objects（管理对象）

## 主要能力

### 1. 系统监控
<!-- confidence: EXTRACTED -->
- CPU、内存、磁盘、进程等系统指标查询
- 性能计数器访问
- 硬件信息获取

### 2. 远程管理
<!-- confidence: EXTRACTED -->
- 支持远程计算机管理（需适当权限）
- DCOM / WinRM 远程连接

### 3. 事件订阅
<!-- confidence: EXTRACTED -->
- 监视系统事件变化
- 永久事件消费者（Permanent Event Consumers）
- 临时事件消费者

### 4. 脚本自动化
<!-- confidence: EXTRACTED -->
- 支持 VBScript、PowerShell 等脚本语言
- COM 接口访问

## 开发者受众

<!-- confidence: EXTRACTED -->
- **C/C++ 开发者**: 使用 COM API
- **.NET 开发者**: 使用 System.Management 命名空间
- **管理员/IT 专业人员**: 通过 PowerShell 访问

## WMI Classes 常用类

<!-- confidence: EXTRACTED -->
- `Win32_Process`: 进程信息
- `Win32_Service`: Windows 服务
- `Win32_OperatingSystem`: 操作系统信息
- `Win32_ComputerSystem`: 计算机系统信息
- `Win32_LogicalDisk`: 逻辑磁盘
- `Win32_NetworkAdapter`: 网络适配器

## 与 AI Agent 的关联

<!-- confidence: INFERRED -->
WMI 可被用于 AI Agent 实现：
- 系统状态监控（获取运行进程、服务状态）
- 硬件信息查询
- 性能指标收集
- 远程系统管理

## 与 PowerShell 的关系

<!-- confidence: EXTRACTED -->
- PowerShell 可以直接查询 WMI 数据
- `Get-WmiObject` cmdlet 访问 WMI 类
- WMI 是 PowerShell 底层系统管理基础设施之一

## 与 pywin32 的关系

<!-- confidence: INFERRED -->
- pywin32 的 COM 支持可以访问 WMI
- 通过 `win32com.client` 调用 WMI Scripting API

## 相关页面

- [[系统服务控制]] — 本素材所属控制对象
- [[PowerShell]] — 底层系统管理工具
- [[WMI]] — 本实体页
