---
source_id: auto-2026-06-28-pywin32-github
title: pywin32 GitHub Repository
url: https://github.com/mhammond/pywin32
source_type: github_readme
tier: 1
control_object: system_service
tech_layer: system_foundation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# pywin32 GitHub Repository

## 项目概览

**pywin32** 是 Python for Win32 扩展，提供从 Python 访问 Windows API 的能力，包括 COM 支持。

## 关键指标

- **4,978+ Commits**
- **74 Tags**
- **294,573+ 依赖项目**
- 持续活跃维护（最新 commit: 2026-05-19）
- 支持 Python 3.15

## 核心能力

### 1. Windows API 访问

通过 pywin32，Python 程序可以直接调用 Windows API：
- Win32 API (win32con, win32api)
- Windows 系统调用
- 消息队列、进程通信

### 2. COM 支持

组件对象模型 (COM) 交互能力：
- Microsoft Office 自动化
- WMI (Windows Management Instrumentation)
- 其他 COM 组件

### 3. 服务管理

- Windows 服务创建和管理
- 注册表操作
- 用户权限管理

## 主要模块

- **win32api**: 基础 Windows API
- **win32con**: Windows 常量定义
- **win32service**: Windows 服务管理
- **win32process**: 进程和线程管理
- **win32net**: 网络管理
- **win32file**: 文件系统操作
- **pythoncom**: COM 核心

## AI Agent 应用场景

pywin32 可被用于 AI Agent 实现：
1. **进程管理**: 创建、终止、监控进程
2. **系统信息获取**: 硬件信息、系统配置
3. **服务控制**: 启动/停止 Windows 服务
4. **注册表操作**: 读取/修改系统配置
5. **COM 自动化**: 与 Office 等应用交互

## 安装方式

```bash
pip install pywin32
```

需要全局安装时运行 post-install:
```bash
python -m pywin32_postinstall -install
```

## 与系统服务控制框架的关系

pywin32 是 Windows 系统服务控制的底层基础设施：
- PowerShell 可以调用 pywin32
- WMI 底层可通过 pywin32 访问
- 为 AI Agent 提供直接的 Windows API 调用能力

## 参考

- GitHub: https://github.com/mhammond/pywin32
- 文档: https://mhammond.github.io/pywin32/
- 类型提示: https://pypi.org/project/types-pywin32/
