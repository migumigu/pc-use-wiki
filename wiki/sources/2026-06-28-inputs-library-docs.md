---
tags: [inputs, Python, 文档]
created: 2026-06-28
updated: 2026-06-28
sources: [auto-2026-06-28-indo]
---

# inputs Python Library Documentation

> inputs 库官方文档，包含安装、使用、平台支持等详细信息

## 核心要点

### 安装

```bash
pip install inputs
```

### 平台权限

- **Windows**：无需特殊权限
- **Linux**：需要访问 /dev/input/event*
- **macOS**：需要调整安全设置

### 快速入门

```python
from inputs import devices

for device in devices:
    print(device)
```

## 相关页面

- [[inputs]]
- [[硬件接口控制]]
