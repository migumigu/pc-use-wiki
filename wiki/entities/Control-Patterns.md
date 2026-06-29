---
tags: [UI-Automation, 控件行为, 标准化模式]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-windows-ui-automation-official.md]
---

# Control Patterns

> UI Automation中定义控件行为的标准化模式,让Agent以统一方式操作不同类型的UI元素

## 定义

<!-- confidence: EXTRACTED -->
Control Patterns(控制模式)是UI Automation框架中定义控件行为的标准化接口,让Agent能够以统一的方式操作按钮、列表、文本框等不同类型的UI元素。

## 核心控制模式

### InvokePattern
<!-- confidence: EXTRACTED -->
- **适用控件**: 按钮、链接等可点击元素
- **核心操作**: Invoke()方法触发点击
- **应用场景**: 表单提交、菜单项点击

### SelectionPattern
<!-- confidence: EXTRACTED -->
- **适用控件**: 列表框、组合框等可选择元素
- **核心操作**: 获取和设置选中项
- **应用场景**: 下拉选择、多选列表

### TextPattern
<!-- confidence: EXTRACTED -->
- **适用控件**: 文本框、文档等文本元素
- **核心操作**: 获取和设置文本内容
- **应用场景**: 表单填写、文本编辑

### WindowPattern
<!-- confidence: EXTRACTED -->
- **适用控件**: 窗口控件
- **核心操作**: 窗口状态管理
- **应用场景**: 窗口最大化、最小化、关闭

### ValuePattern
<!-- confidence: EXTRACTED -->
- **适用控件**: 滑块、进度条等有值的控件
- **核心操作**: 获取和设置值
- **应用场景**: 参数调整、进度监控

## 使用示例

### InvokePattern调用
<!-- confidence: EXTRACTED -->
```csharp
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

## 在Agent控制中的作用

### 统一操作接口
<!-- confidence: INFERRED -->
- 不同控件类型 → 统一控制模式
- 简化Agent操作逻辑
- 提高代码可复用性

### 稳定性提升
<!-- confidence: INFERRED -->
- 通过属性定位而非坐标
- 界面变化不影响操作逻辑
- 减少定位失败率

## 与其他控制方法的对比

### vs PyAutoGUI坐标点击
<!-- confidence: INFERRED -->
- **Control Patterns**: 通过元素属性操作
- **PyAutoGUI**: 通过坐标位置操作

### vs Computer Use视觉识别
<!-- confidence: INFERRED -->
- **Control Patterns**: 需API支持,精准稳定
- **Computer Use**: 视觉理解,无需API

## 技术限制

<!-- confidence: INFERRED -->
- 需要应用实现对应的Pattern
- 部分自定义控件可能不支持
- 仅Windows平台可用

## 相关页面

- [[UI Automation]] — 所属框架
- [[Automation Element]] — Pattern载体
- [[桌面应用控制]] — 应用场景