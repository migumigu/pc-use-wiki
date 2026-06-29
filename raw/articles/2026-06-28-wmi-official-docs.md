---
source_id: auto-2026-06-28-wmi-official-docs
title: Windows Management Instrumentation (WMI) Official Documentation
url: https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmi-start-page
source_type: official_docs
tier: 1
control_object: system_service
tech_layer: system_foundation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# Windows Management Instrumentation (WMI) Official Documentation

## 核心信息

**WMI (Windows Management Instrumentation)** 是 Microsoft 对 WBEM (Web-Based Enterprise Management) 行业标准的实现，是一个用于访问管理信息的标准技术。

## 架构设计

WMI 提供统一接口，用于从本地或远程应用程序或脚本获取管理数据。

### 核心组件

- **WMI Providers**: 提供硬件和软件对象的管理数据
- **WMI Classes**: Win32_* 命名空间下的各类（如 Win32_Process, Win32_Service）
- **CIM (Common Information Model)**: 标准管理信息模型

### 主要能力

1. **系统监控**: CPU、内存、磁盘、进程等系统指标
2. **远程管理**: 支持远程计算机管理（需适当权限）
3. **事件订阅**: 监视系统事件变化
4. **脚本自动化**: 支持 VBScript、PowerShell 等脚本语言

## 与 AI Agent 的关联

WMI 可被用于 AI Agent 实现：
- 系统状态监控（获取运行进程、服务状态）
- 硬件信息查询
- 性能指标收集
- 远程系统管理

## 开发者受众

- C/C++ 开发者：使用 COM API
- .NET 开发者：使用 System.Management 命名空间
- 管理员/IT 专业人员：通过 PowerShell 访问

## 参考

- WMI 官方文档: https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmi-start-page
- WMI 架构: https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmi-architecture
