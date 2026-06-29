---
source_id: auto-2026-06-28-python-uiautomation-github-readme
title: Python-UIAutomation-for-Windows GitHub README
url: https://github.com/yinkaisheng/Python-UIAutomation-for-Windows
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# Python-UIAutomation-for-Windows

uiautomation 是一个用于 Windows UIAutomation 的 Python 模块。支持 Windows XP SP3 到 Windows 10。

## 技术特性

**支持的应用类型：**
- MFC
- Windows Form
- WPF
- Modern UI (Metro UI)
- Qt (部分支持)
- Firefox (version <=56 或 >=60)
- Chrome 和 Electron 应用（需添加 `--force-renderer-accessibility` 参数）

**版本历史：**
- uiautomation1.x: 支持 py2, py3，无第三方依赖
- uiautomation2.0+: 仅支持 py3，依赖 comtypes 和 typing

**系统要求：**
- Minimum client: Windows 7, Windows Vista with SP2, Windows XP with SP3
- Minimum server: Windows Server 2008 R2, Windows Server 2008 with SP2

## 核心 API

**控件搜索参数：**
- `searchDepth` - 搜索深度
- `Name` - 控件名称
- `ClassName` - 窗口类名
- `AutomationId` - 自动化 ID
- `ControlType` - 控件类型
- `Depth` - 深度
- `Compare` - 自定义比较函数

**搜索优化建议：**
```python
# 慢：深度搜索 200+ 控件
uiautomation.EditControl(searchDepth=3, Name='myedit2').SendKeys('hi')

# 快：逐层定位
window2 = uiautomation.WindowControl(searchDepth=1, Name='window2')
sub = window2.Control(searchDepth=1, Name='2-4')
edit = sub.EditControl(searchDepth=1, Name='myedit2')
edit.SendKeys('hi')
```

**注意：**
- 需要以管理员权限运行 Python
- Metro App 必须在前台才能获取控件信息

## 依赖

- comtypes
- typing (Python 3.5+ 内置)

## License

Apache License 2.0

## 作者

由 yinkaisheng 个人开发维护
