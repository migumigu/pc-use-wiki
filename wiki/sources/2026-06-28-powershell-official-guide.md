---
tags: [系统自动化, 脚本语言, Windows管理, 跨平台]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-powershell-official-guide.md]
---

# PowerShell Automation官方指南

> Microsoft跨平台自动化和配置管理框架,提供系统级控制能力,是Agent控制系统服务的重要工具

## 基本信息

- **开发者**: Microsoft
- **框架类型**: 跨平台自动化框架
- **文档地址**: https://learn.microsoft.com/zh-cn/powershell/
- **素材类型**: 官方文档
- **技术层级**: 工具实现层
- **控制对象**: 系统服务控制

## 核心能力

### 进程管理
<!-- confidence: EXTRACTED -->
```powershell
# 列出运行进程
Get-Process

# 停止进程
Stop-Process -Name "notepad"

# 启动进程
Start-Process "notepad.exe"

# 获取进程详情
Get-Process -Name "chrome" | Select-Object Id, Name, CPU, WorkingSet
```

### 服务管理
<!-- confidence: EXTRACTED -->
```powershell
# 列出服务
Get-Service

# 启动服务
Start-Service -Name "wuauserv"

# 停止服务
Stop-Service -Name "wuauserv"

# 设置服务启动类型
Set-Service -Name "wuauserv" -StartupType Automatic
```

### 网络配置
<!-- confidence: EXTRACTED -->
```powershell
# 获取网络适配器
Get-NetAdapter

# 获取IP配置
Get-NetIPAddress

# 测试连接
Test-Connection "google.com"
```

### 文件系统操作
<!-- confidence: EXTRACTED -->
```powershell
# 创建目录
New-Item -ItemType Directory -Path "C:\NewFolder"

# 复制文件
Copy-Item -Path "source.txt" -Destination "dest.txt"

# 获取文件信息
Get-ChildItem -Path "C:\" -Recurse
```

### 远程管理
<!-- confidence: EXTRACTED -->
```powershell
# 远程执行命令
Invoke-Command -ComputerName "Server01" -ScriptBlock { Get-Process }

# 进入交互式会话
Enter-PSSession -ComputerName "Server01"
```

## 脚本特性

### 变量和数据类型
<!-- confidence: EXTRACTED -->
```powershell
$name = "John"
$age = 30
$isActive = $true
$processes = Get-Process
```

### 控制流程
<!-- confidence: EXTRACTED -->
```powershell
# If-Else
if ($condition) {
    # code
} else {
    # code
}

# For循环
for ($i = 0; $i -lt 10; $i++) {
    Write-Host $i
}

# Foreach
foreach ($process in Get-Process) {
    Write-Host $process.Name
}
```

### 函数定义
<!-- confidence: EXTRACTED -->
```powershell
function Get-SystemInfo {
    param(
        [string]$ComputerName = $env:COMPUTERNAME
    )
    Get-ComputerInfo -ComputerName $ComputerName
}
```

## 模块系统

<!-- confidence: EXTRACTED -->
PowerShell模块扩展功能:
- `ActiveDirectory`: 管理AD对象
- `Hyper-V`: 管理虚拟机
- `AzureAD`: 管理Azure AD
- `ExchangeOnlineManagement`: 管理Exchange Online

## 执行策略

<!-- confidence: EXTRACTED -->
```powershell
# 查看执行策略
Get-ExecutionPolicy

# 设置执行策略
Set-ExecutionPolicy RemoteSigned
```

## 跨平台支持

<!-- confidence: EXTRACTED -->
- ✓ Windows
- ✓ Linux
- ✓ macOS

## Agent控制的关键优势

<!-- confidence: EXTRACTED -->
1. **系统级访问**: 完全控制Windows系统
2. **远程管理**: 管理远程计算机
3. **可脚本化**: 复杂自动化工作流
4. **集成能力**: 与.NET和其他语言协作
5. **可扩展**: 丰富的模块生态系统

## 关键概念

<!-- confidence: EXTRACTED -->
- **Cmdlet**: PowerShell命令单元
<!-- confidence: EXTRACTED -->
- **模块**: 功能扩展包
<!-- confidence: EXTRACTED -->
- **远程管理**: WinRM/SSH远程执行
<!-- confidence: EXTRACTED -->
- **管道**: 命令输出传递给下一个命令

## 与其他工具的关系

### vs Bash
<!-- confidence: INFERRED -->
- **PowerShell**: Windows原生,对象化管道
- **Bash**: Unix/Linux,文本管道

### vs Python脚本
<!-- confidence: INFERRED -->
- **PowerShell**: 系统管理专用,Windows集成
- **Python**: 通用编程,跨平台生态

## 在Agent控制中的应用

<!-- confidence: INFERRED -->
PowerShell提供系统级控制能力,让Agent能够管理进程、服务、网络、文件系统等系统资源,是Agent控制PC的重要工具层技术。

## 相关页面

- [[系统服务控制]] — 本素材所属控制对象
- [[Cmdlet]] — 基础命令单元
- [[Windows管理]] — 应用领域
- [[脚本自动化]] — 核心能力