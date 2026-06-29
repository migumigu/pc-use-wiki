---
source_id: auto-2026-06-28-powershell-official-overview
title: PowerShell Overview Official Documentation
url: https://learn.microsoft.com/en-us/powershell/scripting/overview
source_type: official_docs
tier: 1
control_object: system_service
tech_layer: system_foundation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# PowerShell Overview Official Documentation

## 核心定位

PowerShell 是一个跨平台任务自动化解决方案，包括命令行 shell、脚本语言和配置管理框架。

## 三大核心组件

### 1. Command-line Shell

- 接受并返回 .NET 对象（而非纯文本）
- 命令历史、Tab 补全、命令预测
- 支持命令和参数别名
- Pipeline 机制串联命令

### 2. Scripting Language

- 基于 .NET Common Language Runtime (CLR)
- 所有输入输出都是 .NET 对象
- 可通过 functions、classes、scripts、modules 扩展
- 内置支持 CSV、JSON、XML 等数据格式

### 3. Automation Platform

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

PowerShell Desired State Configuration (DSC) 是管理框架，支持：
- 声明式配置
- 配置漂移检测和报告
- Push/Pull 部署模型

## 与 AI Agent 的关联

PowerShell 可被 AI Agent 用于：
- 系统管理任务自动化
- 远程管理（SSH、WinRM）
- 配置管理即代码
- CI/CD 流水线

## 官方资源

- PowerShell 文档: https://learn.microsoft.com/en-us/powershell/
- 安装指南: https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell
