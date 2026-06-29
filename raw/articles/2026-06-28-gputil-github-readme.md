---
source_id: auto-2026-06-28-gputil
title: GPUtil GitHub README
url: https://github.com/anderskm/gputil
source_type: github_readme
tier: 1
control_object: system_service
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# GPUtil

`GPUtil` is a Python module for getting the GPU status from NVIDIA GPUs using `nvidia-smi`. GPUtil locates all GPUs on the computer, determines their availability and returns an ordered list of available GPUs. Availability is based upon the current memory consumption and load of each GPU.

## Requirements

- NVIDIA GPU with latest NVIDIA driver installed
- Uses `nvidia-smi` to get GPU status
- Supports Python 2.X and 3.X
- No external Python dependencies (only stdlib)

## Installation

```bash
pip install gputil
```

## Main Functions

### GPUtil.getAvailable()
Returns a list of available GPU device IDs based on memory usage and load.

**Parameters:**
- `order`: 'first' (default), 'last', 'random', 'load', 'memory'
- `limit`: maximum number of GPUs to return (default: 1)
- `maxLoad`: maximum relative load threshold (default: 0.5)
- `maxMemory`: maximum relative memory usage threshold (default: 0.5)
- `includeNan`: include GPUs with NaN values (default: False)
- `excludeID`: list of GPU IDs to exclude
- `excludeUUID`: list of GPU UUIDs to exclude

### GPUtil.getFirstAvailable()
Returns the first available GPU, with retry support.

**Parameters:**
- `attempts`: number of attempts before giving up (default: 1)
- `interval`: retry interval in seconds (default: 900)

### GPUtil.showUtilization()
Prints current GPU status (id, memory usage, uuid, load).

### GPUtil.getGPUs()
Returns a list of all GPU objects with detailed information.

## GPU Class Attributes

| Attribute | Description |
|-----------|-------------|
| `id` | Zero-based index of the GPU |
| `uuid` | Globally unique immutable identifier |
| `load` | Relative GPU load (0 to 1) |
| `memoryUtil` | Relative memory usage (0 to 1) |
| `memoryTotal` | Total installed GPU memory |
| `memoryUsed` | Total GPU memory allocated |
| `memoryFree` | Total free GPU memory |
| `driver` | NVIDIA display driver version |
| `name` | Official product name |
| `serial` | Physical serial number |
| `display_mode` | Display connection status |
| `display_active` | Display initialization status |

## Usage Examples

```python
import GPUtil

# Get all available GPUs
deviceIDs = GPUtil.getAvailable()

# Get first available GPU
DEVICE_ID_LIST = GPUtil.getFirstAvailable()
DEVICE_ID = DEVICE_ID_LIST[0]

# Show GPU utilization
GPUtil.showUtilization()

# Get detailed GPU info
GPUs = GPUtil.getGPUs()
for gpu in GPUs:
    print(f"GPU {gpu.id}: {gpu.name}")
    print(f"  Load: {gpu.load*100}%")
    print(f"  Memory: {gpu.memoryUsed}/{gpu.memoryTotal} MB")
```

## Integration with Deep Learning Frameworks

### TensorFlow
```python
import os
import GPUtil

os.environ["CUDA_DEVICE_ORDER"] = "PCI_BUS_ID"
DEVICE_ID_LIST = GPUtil.getFirstAvailable()
os.environ["CUDA_VISIBLE_DEVICES"] = str(DEVICE_ID_LIST[0])
```

### Caffe
```python
import caffe
import GPUtil

os.environ["CUDA_DEVICE_ORDER"] = "PCI_BUS_ID"
DEVICE_ID_LIST = GPUtil.getFirstAvailable()
caffe.set_mode_gpu()
caffe.set_device(DEVICE_ID_LIST[0])
```

## License

MIT license

## Repository Statistics

- Latest commit: Apr 3, 2026
- 146 commits
- 20 issues
- Written in pure Python