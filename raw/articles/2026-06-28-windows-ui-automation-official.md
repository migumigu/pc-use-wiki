---
source_id: auto-20260628-winuia
title: Microsoft Windows UI Automation Official Documentation
url: https://learn.microsoft.com/zh-cn/dotnet/framework/ui-automation/
source_type: official_docs
tier: 1
control_object: desktop_app
tech_layer: protocol
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# Microsoft UI Automation

Microsoft UI Automation is the accessibility framework for Microsoft Windows. It provides programmatic access to UI information to address the needs of assistive technology products and automated test frameworks.

## Core Concepts

### UI Automation Tree
The UI Automation tree represents the structure of UI elements in an application. It consists of:
- **Root element**: Represents the desktop
- **Control elements**: Represents individual controls (buttons, text boxes, etc.)
- **Content elements**: Represents meaningful content for users

### Automation Elements
Each element in the UI Automation tree has:
- **Properties**: Name, AutomationId, ControlType, etc.
- **Control Patterns**: Define the behavior of controls (Invoke, Selection, Text, etc.)
- **Events**: Notifications of changes (element added, property changed, etc.)

### Control Patterns
Key control patterns include:
- **InvokePattern**: For clickable controls (buttons, links)
- **SelectionPattern**: For selectable controls (list boxes, combo boxes)
- **TextPattern**: For text controls (text boxes, documents)
- **WindowPattern**: For window controls
- **ValuePattern**: For controls with value (sliders, progress bars)

## API Layers

### Managed Code API (.NET)
Namespace: `System.Windows.Automation`

```csharp
using System.Windows.Automation;

// Get root element
AutomationElement root = AutomationElement.RootElement;

// Find a window
AutomationElement window = root.FindFirst(
    TreeScope.Children,
    new PropertyCondition(
        AutomationElement.NameProperty,
        "My Application"
    )
);

// Find a button
AutomationElement button = window.FindFirst(
    TreeScope.Descendants,
    new PropertyCondition(
        AutomationElement.AutomationIdProperty,
        "SubmitButton"
    )
);

// Invoke the button
InvokePattern invokePattern = button.GetCurrentPattern(
    InvokePattern.Pattern
) as InvokePattern;
invokePattern.Invoke();
```

### Win32 API (C++)
For native code access, use the Windows Automation API.

## Supported Technologies
- Win32 controls
- Windows Forms
- WPF (Windows Presentation Foundation)
- Windows Store apps
- Java AWT/Swing (via Java Access Bridge)

## Use Cases
1. **Accessibility tools**: Screen readers, magnifiers
2. **Automated testing**: UI testing frameworks
3. **Robotic process automation**: RPA tools
4. **AI Agent desktop control**: Enabling precise UI element interaction

## Related Resources
- Win32 UI Automation documentation
- Power Automate desktop UI automation
- Accessibility best practices