---
tags: [UI-Automation, UI元素抽象, 属性查询]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-windows-ui-automation-official.md]
---

# Automation Element

> UI Automation框架中单个UI元素的抽象表示,包含属性、控制模式和事件

## 定义

<!-- confidence: EXTRACTED -->
Automation Element(自动化元素)是UI Automation框架中对单个UI元素的抽象表示,每个元素包含属性集合、控制模式和事件通知机制。

## 核心组成

### 属性(Properties)
<!-- confidence: EXTRACTED -->
- **Name**: 元素名称(显示文本)
- **AutomationId**: 自动化标识符
- **ControlType**: 控件类型(Button、Text等)
- **ClassName**: 类名
- **IsEnabled**: 是否可用

### 控制模式(Control Patterns)
<!-- confidence: EXTRACTED -->
定义元素的行为能力:
- InvokePattern(可点击)
- SelectionPattern(可选择)
- TextPattern(文本处理)
- ValuePattern(值控制)

### 事件(Events)
<!-- confidence: EXTRACTED -->
- 元素添加/移除通知
- 属性变化通知
- 状态变化通知
- 结构变化通知

## 查找方法

### 通过属性查找
<!-- confidence: EXTRACTED -->
```csharp
AutomationElement button = window.FindFirst(
    TreeScope.Descendants,
    new PropertyCondition(
        AutomationElement.AutomationIdProperty,
        "SubmitButton"
    )
);
```

### 树遍历
<!-- confidence: EXTRACTED -->
- **TreeScope.Children**: 子元素
- **TreeScope.Descendants**: 所有后代元素
- **TreeScope.Parent**: 父元素

## 在Agent控制中的应用

### 元素定位
<!-- confidence: INFERRED -->
- 通过AutomationId精准定位
- 通过Name属性识别UI文本
- 通过ControlType判断元素类型

### 元素操作
<!-- confidence: INFERRED -->
- 获取Pattern执行操作
- 查询属性获取状态
- 注册事件监听变化

## 与坐标定位对比

<!-- confidence: INFERRED -->
- **Automation Element**: 通过属性定位,界面变化后仍有效
- **坐标系统**: 通过位置定位,窗口移动后失效

## 技术优势

<!-- confidence: INFERRED -->
- 精准定位,不受界面位置影响
- 丰富的属性信息
- 标准化操作接口
- 实时事件通知

## 相关页面

- [[UI Automation]] — 所属框架
- [[Control Patterns]] — 元素行为模式
- [[坐标系统]] — 对比定位方法
- [[桌面应用控制]] — 应用场景