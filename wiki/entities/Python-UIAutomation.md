---
tags: [Python库, GUI自动化, Windows工具]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-python-uiautomation-github-readme.md]
---

# Python-UIAutomation

> Windows UI Automation的Python封装，专注UIAutomation协议，提供CLI工具遍历控件树

## 基本信息

- **项目类型**: Python自动化库
- **开源地址**: https://github.com/yinkaisheng/Python-UIAutomation-for-Windows
- **License**: Apache License 2.0
- **开发者**: yinkaisheng

## 核心能力

### 专注UIAutomation
<!-- confidence: EXTRACTED -->
仅使用UIAutomation后端，不支持Win32 API，更纯粹但仅限Windows。

### CLI工具
<!-- confidence: EXTRACTED -->
提供automation.py命令行工具，可遍历控件树进行调试。

### 广泛的应用支持
<!-- confidence: EXTRACTED -->
- MFC
- Windows Form
- WPF
- Modern UI (Metro UI)
- Qt (部分支持)
- Firefox (version <=56 或 >=60)
- Chrome 和 Electron 应用（需添加 `--force-renderer-accessibility` 参数）

## 版本历史

<!-- confidence: EXTRACTED -->
- uiautomation1.x: 支持py2, py3，无第三方依赖
- uiautomation2.0+: 仅支持py3，依赖comtypes和typing

## 核心API

### 控件搜索参数
<!-- confidence: EXTRACTED -->
- `searchDepth` - 搜索深度
- `Name` - 控件名称
- `ClassName` - 窗口类名
- `AutomationId` - 自动化ID
- `ControlType` - 控件类型
- `Depth` - 深度
- `Compare` - 自定义比较函数

### 搜索优化
<!-- confidence: EXTRACTED -->
```python
# 慢：深度搜索200+控件
uiautomation.EditControl(searchDepth=3, Name='myedit2').SendKeys('hi')

# 快：逐层定位
window2 = uiautomation.WindowControl(searchDepth=1, Name='window2')
sub = window2.Control(searchDepth=1, Name='2-4')
edit = sub.EditControl(searchDepth=1, Name='myedit2')
edit.SendKeys('hi')
```

## 系统要求

<!-- confidence: EXTRACTED -->
- Minimum client: Windows 7, Windows Vista with SP2, Windows XP with SP3
- Minimum server: Windows Server 2008 R2, Windows Server 2008 with SP2

## 技术限制

<!-- confidence: INFERRED -->
- 仅支持Windows
- Metro App必须在前台才能获取控件信息
- Python 3.7.6和3.8.1有兼容性问题
- 需要管理员权限运行Python

## 适用场景

<!-- confidence: INFERRED -->
- 需要CLI工具遍历控件树调试
- Windows系统级UI Automation开发
- 控件属性检查和调试

## 相关页面

- [[桌面应用控制]] — 应用领域
- [[UI Automation]] — 底层框架
- [[Pywinauto]] — 对比工具
