---
source_id: auto-2026-06-28-ahkt
title: AutoHotkey Beginner Tutorial
url: https://www.autohotkey.com/docs/v1/Tutorial.htm
source_type: official_docs
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# AutoHotkey Beginner Tutorial

## Core Concepts

### Hotkeys
Hotkeys are key combinations that trigger actions:
```autohotkey
^j::
Send, My First Script
return
```
- `^` = Ctrl, `!` = Alt, `#` = Win, `+` = Shift

### Hotstrings
Auto-replace abbreviations as you type:
```autohotkey
::ftw::Free the whales
::btw::by the way
```

### Sending Keystrokes
Use the Send command to simulate typing:
```autohotkey
Send, Hello World{!}
Send, {Ctrl down}c{Ctrl up}
```

### Window Specific Hotkeys
Use `#IfWinActive` for context-sensitive hotkeys:
```autohotkey
#IfWinActive Untitled - Notepad
#Space::
MsgBox, You pressed WIN+SPACE in Notepad.
return
```

## Getting Started

1. Install AutoHotkey (Unicode recommended)
2. Create .ahk script file
3. Edit with Notepad or dedicated editor
4. Double-click to run

## Common Patterns

- **Text Expansion**: Replace abbreviations
- **Keyboard Shortcuts**: Custom hotkeys
- **Window Management**: Control application windows
- **Mouse Automation**: Simulate clicks and movements
- **Program Launchers**: Run programs with shortcuts
