---
tags: [Windows-API, 无障碍框架, UI元素定位]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-windows-ui-automation-official.md]
---

# UI Automation

> Microsoft Windows无障碍框架,提供程序化访问UI元素的能力,是Windows桌面自动化的标准协议

## 基本信息

- **开发者**: Microsoft
- **框架类型**: Windows无障碍框架
- **文档地址**: https://learn.microsoft.com/zh-cn/dotnet/framework/ui-automation/
- **命名空间**: System.Windows.Automation (.NET)

## 核心架构

### UI Automation树
<!-- confidence: EXTRACTED -->
- **根元素**: 代表桌面
- **控制元素**: 按钮、文本框等控件
- **内容元素**: 用户有意义的内容

### AutomationElement
<!-- confidence: EXTRACTED -->
- **属性**: Name、AutomationId、ControlType
- **控制模式**: Invoke、Selection、Text等
- **事件**: 元素添加、属性改变等通知

## 控制模式

<!-- confidence: EXTRACTED -->
- **InvokePattern**: 可点击控件
- **SelectionPattern**: 可选择控件
- **TextPattern**: 文本控件
- **WindowPattern**: 窗口控件
- **ValuePattern**: 有值的控件

## API使用示例

### .NET托管代码
<!-- confidence: EXTRACTED -->
```csharp
// 获取根元素
AutomationElement root = AutomationElement.RootElement;

// 查找窗口
AutomationElement window = root.FindFirst(
    TreeScope.Children,
    new PropertyCondition(
        AutomationElement.NameProperty,
        "My Application"
    )
);

// 查找并点击按钮
AutomationElement button = window.FindFirst(
    TreeScope.Descendants,
    new PropertyCondition(
        AutomationElement.AutomationIdProperty,
        "SubmitButton"
    )
);
InvokePattern invokePattern = button.GetCurrentPattern(
    InvokePattern.Pattern
) as InvokePattern;
invokePattern.Invoke();
```

## 支持的技术栈

<!-- confidence: EXTRACTED -->
- Win32控件
- Windows Forms
- WPF
- Windows Store应用
- Java AWT/Swing(Java Access Bridge)

## 应用场景

<!-- confidence: EXTRACTED -->
- 无障碍工具(屏幕阅读器)
- UI自动化测试
- RPA工具
- AI Agent桌面控制

## 与其他定位方法对比

### vs 坐标系统
<!-- confidence: INFERRED -->
- **UI Automation**: 通过属性定位,稳定可靠
- **坐标系统**: 通过位置定位,易失效

### vs Computer Use
<!-- confidence: INFERRED -->
- **UI Automation**: 需应用支持Accessibility API
- **Computer Use**: 视觉理解,无需API

## 技术优势

<!-- confidence: INFERRED -->
- 精准元素定位
- 标准化控制模式
- 属性查询和事件监听
- 与Windows原生集成

## 技术限制

<!-- confidence: INFERRED -->
- 需要应用支持Accessibility API
- 仅支持Windows平台
- 跨平台应用需要其他方案

## 相关页面

- [[桌面应用控制]] — 应用领域
- [[Control Patterns]] — 核心模式
- [[坐标系统]] — 对比方法
- [[Computer-Use]] — 对比控制模式