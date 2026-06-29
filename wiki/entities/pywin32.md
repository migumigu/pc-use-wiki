---
tags: [Python, Windows API, COM, pywin32]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-pywin32-github.md]
---

# pywin32

> Python for Win32扩展,提供从Python访问Windows API的能力,包括COM支持和Windows服务管理

## 基本信息

- **开发者**: Mark Hammond (mhammond)
- **GitHub**: https://github.com/mhammond/pywin32
- **文档**: https://mhammond.github.io/pywin32/
- **技术层级**: 系统基础层
- **控制对象**: 系统服务控制

## 项目概览

<!-- confidence: EXTRACTED -->
**pywin32** 是 Python for Win32 扩展，提供从 Python 访问 Windows API 的能力，包括 COM 支持。

### 关键指标
- **4,978+ Commits**
- **74 Tags**
- **294,573+ 依赖项目**
- 持续活跃维护（最新 commit: 2026-05-19）
- 支持 Python 3.15

## 核心能力

### 1. Windows API 访问
<!-- confidence: EXTRACTED -->
通过 pywin32，Python 程序可以直接调用 Windows API：
- Win32 API (win32con, win32api)
- Windows 系统调用
- 消息队列、进程通信

### 2. COM 支持
<!-- confidence: EXTRACTED -->
组件对象模型 (COM) 交互能力：
- Microsoft Office 自动化
- WMI (Windows Management Instrumentation)
- 其他 COM 组件

### 3. 服务管理
<!-- confidence: EXTRACTED -->
- Windows 服务创建和管理
- 注册表操作
- 用户权限管理

## 主要模块

<!-- confidence: EXTRACTED -->
- **win32api**: 基础 Windows API
- **win32con**: Windows 常量定义
- **win32service**: Windows 服务管理
- **win32process**: 进程和线程管理
- **win32net**: 网络管理
- **win32file**: 文件系统操作
- **pythoncom**: COM 核心

## 安装方式

<!-- confidence: EXTRACTED -->
```bash
pip install pywin32
```

需要全局安装时运行 post-install:
```bash
python -m pywin32_postinstall -install
```

## 常用示例

### 进程管理
<!-- confidence: EXTRACTED -->
```python
import win32api
import win32process

# 获取当前进程
pid = win32api.GetCurrentProcessId()
# 打开进程
handle = win32api.OpenProcess(PROCESS_ALL_ACCESS, False, pid)
```

### WMI 访问
<!-- confidence: EXTRACTED -->
```python
import win32com.client

# 连接 WMI
c = win32com.client.Dispatch("WbemScripting.SWbemLocator")
s = c.ConnectServer(".", "root/cimv2")
# 查询进程
for p in s.ExecQuery("SELECT * FROM Win32_Process"):
    print(p.Name)
```

### 服务管理
<!-- confidence: EXTRACTED -->
```python
import win32service

# 枚举服务
handles = win32service.EnumServicesStatus(None, win32service.SERVICE_WIN32)
```

## 与其他技术的关系

### 与 PowerShell
<!-- confidence: INFERRED -->
- PowerShell 可以调用 pywin32（通过 Add-Type 或 COM 互操作）
- 两者在 Windows 系统管理场景互补
- PowerShell 是更现代的解决方案，pywin32 提供底层 Windows API 访问

### 与 WMI
<!-- confidence: EXTRACTED -->
- pywin32 的 COM 支持可以访问 WMI
- 通过 `win32com.client` 连接 WMI
- WMI 是 pywin32 在系统管理领域的重要应用场景

### 与 Windows API
<!-- confidence: EXTRACTED -->
- pywin32 是 Windows API 的 Python 绑定
- 直接映射 Win32 API 到 Python

## AI Agent 应用场景

<!-- confidence: INFERRED -->
pywin32 可被用于 AI Agent 实现：
1. **进程管理**: 创建、终止、监控进程
2. **系统信息获取**: 硬件信息、系统配置
3. **服务控制**: 启动/停止 Windows 服务
4. **注册表操作**: 读取/修改系统配置
5. **COM 自动化**: 与 Office 等应用交互

## 相关页面

- [[系统服务控制]] — 应用领域
- [[PowerShell]] — 关联系统管理工具
- [[WMI]] — WMI 是 pywin32 的重要应用场景
