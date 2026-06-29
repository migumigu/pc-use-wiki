---
tags: [系统自动化, 脚本语言, Windows管理, 跨平台, PowerShell]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-powershell-overview.md]
---

# PowerShell Overview

> Microsoft跨平台任务自动化解决方案,包括命令行shell、脚本语言和配置管理框架

## 基本信息

- **开发者**: Microsoft
- **框架类型**: 跨平台任务自动化解决方案
- **文档地址**: https://learn.microsoft.com/en-us/powershell/scripting/overview
- **素材类型**: 官方文档
- **技术层级**: 系统基础层
- **控制对象**: 系统服务控制

## 核心定位

<!-- confidence: EXTRACTED -->
PowerShell 是一个跨平台任务自动化解决方案，包括命令行 shell、脚本语言和配置管理框架。

## 三大核心组件

### 1. Command-line Shell
<!-- confidence: EXTRACTED -->
- 接受并返回 .NET 对象（而非纯文本）
- 命令历史、Tab 补全、命令预测
- 支持命令和参数别名
- Pipeline 机制串联命令

### 2. Scripting Language
<!-- confidence: EXTRACTED -->
- 基于 .NET Common Language Runtime (CLR)
- 所有输入输出都是 .NET 对象
- 可通过 functions、classes、scripts、modules 扩展
- 内置支持 CSV、JSON、XML 等数据格式

### 3. Automation Platform
<!-- confidence: EXTRACTED -->
PowerShell 的可扩展性使其成为管理几乎任何技术的平台：

**Microsoft 生态**:
- Azure PowerShell
- Windows PowerShell
- Exchange
- SQL Server

**第三方生态**:
- AWS PowerShell
- VMware PowerCLI
- Google Cloud PowerShell

### 配置管理
<!-- confidence: EXTRACTED -->
PowerShell Desired State Configuration (DSC) 是管理框架，支持：
- 声明式配置
- 配置漂移检测和报告
- Push/Pull 部署模型

## 与 AI Agent 的关联

<!-- confidence: INFERRED -->
PowerShell 可被 AI Agent 用于：
- 系统管理任务自动化
- 远程管理（SSH、WinRM）
- 配置管理即代码
- CI/CD 流水线

## 与 PowerShell 官方指南的关系

<!-- confidence: INFERRED -->
本文档（Overview）与 `powershell-official-guide` 为同一官方文档系列：
- **Overview**: 定位与架构概述、三大组件
- **官方指南**: 具体的 cmdlet 用法、脚本示例

两者互补，共同构成 PowerShell 的完整技术参考。

## 与 WMI 的关系

<!-- confidence: EXTRACTED -->
- PowerShell 内置 WMI 访问能力
- `Get-WmiObject` 和 `Get-CimInstance` cmdlet 查询 WMI/CIM 数据
- PowerShell 是访问 WMI 最便捷的脚本语言

## 与 pywin32 的关系

<!-- confidence: INFERRED -->
- PowerShell 可以调用 pywin32（通过 Add-Type 或 COM 互操作）
- 两者在 Windows 系统管理场景互补
- PowerShell 是更现代的解决方案，pywin32 提供底层 Windows API 访问

## 相关页面

- [[系统服务控制]] — 本素材所属控制对象
- [[PowerShell]] — 核心工具实体
- [[Cmdlet]] — 基础命令单元
