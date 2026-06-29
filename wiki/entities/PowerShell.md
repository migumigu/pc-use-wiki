---
tags: [系统自动化, 脚本语言, Windows管理]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-powershell-official-guide.md, raw/articles/2026-06-28-powershell-overview.md]
---

# PowerShell

> Microsoft跨平台自动化和配置管理框架,提供系统级控制和脚本化能力

## 基本信息

- **开发者**: Microsoft
- **框架类型**: 跨平台自动化框架
- **文档地址**: https://learn.microsoft.com/zh-cn/powershell/
- **架构**: 命令行Shell + 脚本语言(基于.NET)

## 核心能力

### 系统管理
<!-- confidence: EXTRACTED -->
- **进程管理**: Get-Process、Stop-Process、Start-Process
- **服务管理**: Get-Service、Start-Service、Stop-Service
- **网络配置**: Get-NetAdapter、Get-NetIPAddress、Test-Connection
- **文件系统**: New-Item、Copy-Item、Get-ChildItem

### 远程控制
<!-- confidence: EXTRACTED -->
- **远程命令**: Invoke-Command
- **交互会话**: Enter-PSSession
- **远程协议**: WinRM、SSH

### 脚本特性
<!-- confidence: EXTRACTED -->
- **变量**: 支持多种数据类型
- **控制流程**: if/else、for、foreach
- **函数**: param参数定义
- **管道**: 对象化管道传递

## 模块系统

<!-- confidence: EXTRACTED -->
- `ActiveDirectory`: AD对象管理
- `Hyper-V`: 虚拟机管理
- `AzureAD`: Azure AD管理
- `ExchangeOnlineManagement`: Exchange管理

## 跨平台支持

<!-- confidence: EXTRACTED -->
- Windows ✓
- Linux ✓
- macOS ✓

## 执行策略

<!-- confidence: EXTRACTED -->
- `Get-ExecutionPolicy`: 查看策略
- `Set-ExecutionPolicy`: 设置策略(RemoteSigned等)
- 控制脚本执行安全性

## 与其他工具对比

### vs Bash
<!-- confidence: INFERRED -->
- PowerShell: Windows原生,对象管道
- Bash: Unix/Linux,文本管道

### vs Python
<!-- confidence: INFERRED -->
- PowerShell: 系统管理专用
- Python: 通用编程语言

## 在Agent控制中的作用

<!-- confidence: INFERRED -->
提供系统级控制能力,让Agent管理进程、服务、网络等系统资源,是Agent扩展到系统服务层的关键工具。

## 技术优势

<!-- confidence: INFERRED -->
- Windows原生集成
- 对象化管道(vs 文本管道)
- 强大的远程管理能力
- .NET生态集成
- 丰富的模块扩展

## 相关页面

- [[系统服务控制]] — 应用领域
- [[Cmdlet]] — 基础命令
- [[脚本自动化]] — 核心能力
- [[Windows管理]] — 系统管理方向