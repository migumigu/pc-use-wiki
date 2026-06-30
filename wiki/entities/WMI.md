---
tags: [Windows管理, WMI, 系统监控, COM, WBEM]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-wmi-official-docs.md, 2026-06-30-wmi-reference-official]
---

# WMI

> Windows Management Instrumentation — Microsoft对WBEM行业标准的实现,提供统一接口访问管理信息

## 基本信息

- **开发者**: Microsoft
- **框架类型**: 系统管理规范（对WBEM标准的Windows实现）
- **官方文档**: https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmi-start-page
- **技术层级**: 系统基础层
- **控制对象**: 系统服务控制

## 核心定义

<!-- confidence: EXTRACTED -->
**WMI (Windows Management Instrumentation)** 是 Microsoft 对 WBEM (Web-Based Enterprise Management) 行业标准的实现。WMI 提供统一接口，用于从本地或远程应用程序或脚本获取管理数据。

## 架构组成

### WMI Providers
<!-- confidence: EXTRACTED -->
提供硬件和软件对象的管理数据。每个 Provider 实现特定功能：
- **Win32 Provider**: 操作系统、进程、服务等
- **WDM Provider**: 驱动程序信息
- **CIM Provider**: 通用信息模型

### WMI Classes
<!-- confidence: EXTRACTED -->
Win32_* 命名空间下的标准类：
- `Win32_Process`: 进程信息
- `Win32_Service`: Windows 服务
- `Win32_OperatingSystem`: 操作系统信息
- `Win32_ComputerSystem`: 计算机系统信息
- `Win32_LogicalDisk`: 逻辑磁盘
- `Win32_NetworkAdapter`: 网络适配器

### CIM (Common Information Model)
<!-- confidence: EXTRACTED -->
标准管理信息模型，定义管理对象的通用表示方式。

## 核心能力

### 系统监控
<!-- confidence: EXTRACTED -->
- CPU、内存、磁盘、进程等系统指标查询
- 性能计数器访问
- 硬件信息获取

### 远程管理
<!-- confidence: EXTRACTED -->
- 支持远程计算机管理（需适当权限）
- DCOM / WinRM 远程连接

### 事件订阅
<!-- confidence: EXTRACTED -->
- 监视系统事件变化
- 永久事件消费者（Permanent Event Consumers）
- 临时事件消费者

### 脚本自动化
<!-- confidence: EXTRACTED -->
- 支持 VBScript、PowerShell 等脚本语言
- COM 接口访问

## 开发者接口

### C/C++ (COM API)
<!-- confidence: EXTRACTED -->
通过 COM 接口访问 WMI：
```cpp
IWbemServices* pServices = NULL;
IWbemLocator* pLocator = NULL;
CoCreateInstance(CLSID_WbemLocator, ..., IID_IWbemLocator, (void**)&pLocator);
pLocator->ConnectServer(bstr_t("\\\\.\\root\\cimv2"), ...);
```

### .NET (System.Management)
<!-- confidence: EXTRACTED -->
```csharp
using System.Management;
ManagementObjectSearcher searcher = new ManagementObjectSearcher("SELECT * FROM Win32_Process");
foreach (ManagementObject obj in searcher.Get()) {
    Console.WriteLine(obj["Name"]);
}
```

### PowerShell
<!-- confidence: EXTRACTED -->
```powershell
Get-WmiObject -Class Win32_Process
Get-CimInstance -ClassName Win32_Process
```

## 与其他技术的关系

### 与 PowerShell
<!-- confidence: EXTRACTED -->
- PowerShell 可以直接查询 WMI 数据
- `Get-WmiObject` 和 `Get-CimInstance` cmdlet 查询 WMI/CIM 数据
- WMI 是 PowerShell 底层系统管理基础设施

### 与 pywin32
<!-- confidence: INFERRED -->
- pywin32 的 COM 支持可以访问 WMI
- 通过 `win32com.client` 调用 WMI Scripting API

### 与 WBEM
<!-- confidence: EXTRACTED -->
- WMI 是 Microsoft 对 WBEM 行业标准的实现
- 遵循 CIM 标准

## AI Agent 应用

<!-- confidence: INFERRED -->
WMI 可被用于 AI Agent 实现：
- 系统状态监控（获取运行进程、服务状态）
- 硬件信息查询
- 性能指标收集
- 远程系统管理

## 相关页面

- [[系统服务控制]] — 应用领域
- [[PowerShell]] — 底层系统管理工具
- [[pywin32]] — Python Windows API 扩展
