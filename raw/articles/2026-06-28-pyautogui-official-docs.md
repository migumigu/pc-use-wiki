---
source_id: auto-20260628-pyag
title: PyAutoGUI Official Documentation
url: https://pyautogui.readthedocs.io/
source_type: official_docs
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# PyAutoGUI Documentation

PyAutoGUI lets your Python scripts control the mouse and keyboard to automate interactions with other applications.

## Key Features

- Moving the mouse and clicking in windows of other applications
- Sending keystrokes to applications (for filling out forms)
- Taking screenshots and finding images on screen
- Locating application windows (Windows-only)
- Displaying alert and message boxes

## Cross-Platform Support
- Windows ✓
- macOS ✓
- Linux ✓
- Python 2 and 3

## Installation
```bash
pip install pyautogui
```

## Core API Examples

```python
import pyautogui

# Get screen size
screenWidth, screenHeight = pyautogui.size()

# Get current mouse position
currentMouseX, currentMouseY = pyautogui.position()

# Move mouse to coordinates
pyautogui.moveTo(100, 150)

# Click
pyautogui.click()
pyautogui.click(100, 200)

# Find image on screen and click it
pyautogui.click('button.png')

# Type text
pyautogui.write('Hello world!', interval=0.25)

# Press keys
pyautogui.press('esc')

# Hotkey combinations
pyautogui.hotkey('ctrl', 'c')

# Screenshot
screenshot = pyautogui.screenshot()
```

## Fail-Safes
A safety feature is enabled by default. When a PyAutoGUI function is called, if the mouse is in any of the four corners of the primary monitor, it raises a `pyautogui.FailSafeException`.

- `pyautogui.FAILSAFE = True` (default)
- `pyautogui.PAUSE = 0.1` (delay after each function call)

## Limitations
- No multi-monitor support
- No Android/iOS support
- No OCR capability (on roadmap)
- Cannot detect if a key is currently pressed

## Source Code
https://github.com/asweigart/pyautogui