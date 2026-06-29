---
tags: [Python, Windows API, COM, pywin32]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-pywin32-github.md]
---

# pywin32 GitHub README

> Python for Win32扩展,提供从Python访问Windows API的能力,包括COM支持和Windows服务管理

## 基本信息

- **开发者**: Mark Hammond (mhammond)
- **仓库地址**: https://github.com/mhammond/pywin32
- **文档地址**: https://mhammond.github.io/pywin32/
- **素材类型**: GitHub README
- **技术层级**: 系统基础层
- **控制对象**: 系统服务控制

## 关键指标

<!-- confidence: EXTRACTED -->
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

## AI Agent 应用场景

<!-- confidence: INFERRED -->
pywin32 可被用于 AI Agent 实现：
1. **进程管理**: 创建、终止、监控进程
2. **系统信息获取**: 硬件信息、系统配置
3. **服务控制**: 启动/停止 Windows 服务
4. **注册表操作**: 读取/修改系统配置
5. **COM 自动化**: 与 Office 等应用交互

## 与系统服务控制框架的关系

<!-- confidence: EXTRACTED -->
pywin32 是 Windows 系统服务控制的底层基础设施：
- PowerShell 可以调用 pywin32
- WMI 底层可通过 pywin32 访问
- 为 AI Agent 提供直接的 Windows API 调用能力

## 与 PowerShell 的对比

<!-- confidence: INFERRED -->
- **pywin32**: Python 原生，底层 API 访问能力强
- **PowerShell**: Windows 原生，系统管理专用，语法更简洁
- 两者可互补使用：PowerShell 调用 pywin32，或 Python 脚本调用 PowerShell

## 与 WMI 的关系

<!-- confidence: EXTRACTED -->
- pywin32 的 COM 支持可以访问 WMI
- 通过 `win32com.client` 连接 WMI
- WMI 是 pywin32 在系统管理领域的重要应用场景

## 相关页面

- [[系统服务控制]] — 本素材所属控制对象
- [[PowerShell]] — 关联系统管理工具
- [[pywin32]] — 本实体页
