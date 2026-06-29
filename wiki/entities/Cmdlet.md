---
tags: [PowerShell命令, 系统管理工具, 命令单元]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-powershell-official-guide.md]
---

# Cmdlet

> PowerShell的命令单元,执行特定系统管理任务的轻量级命令

## 定义

<!-- confidence: EXTRACTED -->
Cmdlet(Command-Let)是PowerShell中的命令单元,每个Cmdlet执行一个特定的系统管理任务,如获取进程、停止服务等。

## 命名规范

<!-- confidence: EXTRACTED -->
Cmdlet采用"动词-名词"命名格式:
- **Get-Process**: 获取进程
- **Stop-Service**: 停止服务
- **New-Item**: 创建项目
- **Copy-Item**: 复制项目

## 核心Cmdlet示例

### 进程管理
<!-- confidence: EXTRACTED -->
- `Get-Process`: 列出运行进程
- `Stop-Process`: 停止指定进程
- `Start-Process`: 启动新进程

### 服务管理
<!-- confidence: EXTRACTED -->
- `Get-Service`: 列出系统服务
- `Start-Service`: 启动服务
- `Stop-Service`: 停止服务
- `Set-Service`: 配置服务

### 文件系统
<!-- confidence: EXTRACTED -->
- `Get-ChildItem`: 获取文件列表
- `New-Item`: 创建文件/目录
- `Copy-Item`: 复制文件
- `Remove-Item`: 删除文件

### 网络管理
<!-- confidence: EXTRACTED -->
- `Get-NetAdapter`: 获取网络适配器
- `Get-NetIPAddress`: 获取IP地址
- `Test-Connection`: 测试网络连接

## 特性

### 对象化输出
<!-- confidence: INFERRED -->
Cmdlet返回.NET对象而非文本,可通过管道传递给其他Cmdlet,支持属性访问和方法调用。

### 管道传递
<!-- confidence: EXTRACTED -->
```powershell
Get-Process | Where-Object {$_.CPU -gt 100} | Stop-Process
```

### 参数支持
<!-- confidence: EXTRACTED -->
- 必选参数
- 可选参数
- 位置参数
- 开关参数(Switch)

## 在Agent控制中的应用

<!-- confidence: INFERRED -->
Agent通过调用Cmdlet执行系统管理任务:
- 进程监控和管理
- 服务启停控制
- 文件系统操作
- 网络配置管理

## 与其他命令系统的对比

### vs Unix命令
<!-- confidence: INFERRED -->
- **Cmdlet**: 返回对象,管道传递对象
- **Unix命令**: 输出文本,管道传递文本

### vs Python函数
<!-- confidence: INFERRED -->
- **Cmdlet**: 专用系统管理命令
- **Python函数**: 通用编程接口

## 相关页面

- [[PowerShell]] — 所属框架
- [[系统服务控制]] — 应用领域
- [[脚本自动化]] — Cmdlet组合使用