---
tags: [Windows-API, UI自动化, 无障碍框架, 元素定位]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-windows-ui-automation-official.md]
---

# Microsoft Windows UI Automation官方文档

> Windows无障碍框架,提供程序化访问UI信息的能力,是Agent精准控制Windows应用的基础协议

## 基本信息

- **开发者**: Microsoft
- **框架类型**: Windows无障碍框架
- **文档地址**: https://learn.microsoft.com/zh-cn/dotnet/framework/ui-automation/
- **素材类型**: 官方文档
- **技术层级**: 协议层
- **控制对象**: 桌面应用控制

## 核心概念

### UI Automation树
<!-- confidence: EXTRACTED -->
UI Automation树表示应用中UI元素的结构,包含:
- **根元素**: 代表桌面
- **控制元素**: 代表单个控件(按钮、文本框等)
- **内容元素**: 代表用户有意义的内容

### Automation元素
<!-- confidence: EXTRACTED -->
每个元素在UI Automation树中包含:
- **属性**: Name、AutomationId、ControlType等
- **控制模式**: 定义控件行为(Invoke、Selection、Text等)
- **事件**: 变化通知(元素添加、属性改变等)

### 控制模式
<!-- confidence: EXTRACTED -->
关键控制模式包括:
- **InvokePattern**: 可点击控件(按钮、链接)
- **SelectionPattern**: 可选择控件(列表框、组合框)
- **TextPattern**: 文本控件(文本框、文档)
- **WindowPattern**: 窗口控件
- **ValuePattern**: 有值的控件(滑块、进度条)

## API层级

### 托管代码API(.NET)
<!-- confidence: EXTRACTED -->
命名空间: `System.Windows.Automation`

```csharp
using System.Windows.Automation;

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

// 查找按钮
AutomationElement button = window.FindFirst(
    TreeScope.Descendants,
    new PropertyCondition(
        AutomationElement.AutomationIdProperty,
        "SubmitButton"
    )
);

// 点击按钮
InvokePattern invokePattern = button.GetCurrentPattern(
    InvokePattern.Pattern
) as InvokePattern;
invokePattern.Invoke();
```

### Win32 API(C++)
<!-- confidence: EXTRACTED -->
原生代码访问使用Windows Automation API。

## 支持的技术栈

<!-- confidence: EXTRACTED -->
- Win32控件
- Windows Forms
- WPF(Windows Presentation Foundation)
- Windows Store应用
- Java AWT/Swing(通过Java Access Bridge)

## 应用场景

<!-- confidence: EXTRACTED -->
1. **无障碍工具**: 屏幕阅读器、放大镜
2. **自动化测试**: UI测试框架
3. **机器人流程自动化**: RPA工具
4. **AI Agent桌面控制**: 实现精准UI元素交互

## 关键概念

<!-- confidence: EXTRACTED -->
- **UI Automation树**: UI元素的树状结构表示
<!-- confidence: EXTRACTED -->
- **AutomationElement**: 单个UI元素的抽象
<!-- confidence: EXTRACTED -->
- **Control Patterns**: 控件行为的标准化定义
<!-- confidence: EXTRACTED -->
- **PropertyCondition**: 基于属性查找元素的条件

## 与其他控制方法的对比

### vs 坐标系统
<!-- confidence: INFERRED -->
- **坐标系统**: 通过位置定位,界面变化易失效
- **UI Automation**: 通过元素属性定位,更稳定

### vs Computer Use
<!-- confidence: INFERRED -->
- **UI Automation**: 需要应用支持Accessibility API
- **Computer Use**: 视觉理解,无需API支持

### vs PyAutoGUI
<!-- confidence: INFERRED -->
- **PyAutoGUI**: 底层鼠标键盘模拟
- **UI Automation**: 高层元素定位和操作

## 在Agent控制中的应用

<!-- confidence: INFERRED -->
UI Automation提供精准的元素定位能力,避免了坐标系统的不稳定性,但需要应用本身支持Accessibility API。

## 相关页面

- [[桌面应用控制]] — 本素材所属控制对象
- [[Control Patterns]] — UI Automation核心模式
- [[Automation Element]] — UI元素抽象
- [[坐标系统]] — 对比定位方法
- [[Computer-Use]] — 对比控制模式