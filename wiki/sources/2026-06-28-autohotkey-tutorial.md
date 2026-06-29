---
tags: [AutoHotkey, 教程, 热键]
created: 2026-06-28
updated: 2026-06-28
sources: [auto-2026-06-28-ahkt]
---

# AutoHotkey Beginner Tutorial

> AutoHotkey 官方入门教程，涵盖热键、热字符串、Send 命令等核心概念

## 核心要点

### 热键语法

```autohotkey
^j::      ; Ctrl+J
Send, Hello World
return
```

- `^` = Ctrl, `!` = Alt, `#` = Win, `+` = Shift

### 热字符串

```autohotkey
::btw::by the way
::ftw::Free the whales
```

### 窗口上下文

```autohotkey
#IfWinActive Untitled - Notepad
#Space::MsgBox, WIN+SPACE in Notepad
return
```

## 相关页面

- [[AutoHotkey]]
- [[桌面应用控制]]
