---
source_id: auto-20260628-opin-cu
title: Open Interpreter Computer Use Documentation
url: https://docs.openinterpreter.com/
source_type: official_docs
tier: 1
control_object: desktop_app
tech_layer: agent_integration
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# Open Interpreter Computer Use

The "computer use" mode in Open Interpreter enables AI to interact with the desktop environment through visual observation and input simulation.

## Enabling Computer Use

```bash
interpreter --computer-use-enabled
```

Or in Python:
```python
from interpreter import interpreter
interpreter.computer_use = True
```

## Core Components

### Screen Capture
Uses `mss` or `pyscreenshot` to capture screen images:
- Full screen capture
- Window-specific capture
- Region capture

### Visual Recognition
- OCR for text extraction
- Image matching for UI element recognition
- Screen analysis for context understanding

### Input Simulation
- Mouse movement and clicks (via PyAutoGUI)
- Keyboard input (via PyAutoGUI)
- Drag and drop operations

### Scaling Factor
Handles high-DPI displays:
```bash
interpreter --computer-use-desktop --computer-scaling-factor 1.5
```

## Workflow

1. **Observe**: Capture screen image
2. **Analyze**: Use LLM to analyze the screen content
3. **Plan**: Determine next action based on analysis
4. **Execute**: Perform mouse/keyboard operations
5. **Repeat**: Continue until task complete

## Use Cases

### Browser Automation
- Navigate websites
- Fill forms
- Extract data
- Interact with web applications

### Desktop Application Control
- Open and close applications
- Interact with menus and dialogs
- Automate repetitive tasks
- Control Office applications

### Data Processing
- Extract data from screenshots
- Process visual information
- Combine with code execution

## Configuration

```python
# Enable computer use
interpreter.computer_use = True

# Set screen capture method
interpreter.computer.use_screenshot = True

# Enable OCR
interpreter.computer.use_ocr = True

# Set confidence threshold
interpreter.computer.ocr_confidence = 0.8
```

## Limitations

### OCR Accuracy
- Chinese character recognition may be less accurate
- Small text may not be recognized
- Handwritten text not supported

### Performance
- Screen capture and analysis introduces latency
- Complex screens require more processing

### Security
- Requires screen recording permissions
- Requires accessibility permissions on macOS

## Best Practices

1. **Start simple**: Begin with basic operations
2. **Use explicit instructions**: Clear prompts yield better results
3. **Handle errors**: Expect occasional misclicks
4. **Combine with code**: Use computer use alongside code execution
5. **Monitor closely**: Keep an eye on automated operations

## Related Tools
- PyAutoGUI: Low-level input simulation
- Tesseract/OCR: Text recognition
- mss: High-performance screen capture