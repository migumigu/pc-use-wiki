---
tags: [pySerial, 串口通信, Python库, 硬件控制]
created: 2026-06-28
updated: 2026-06-28
sources: [wiki/sources/2026-06-28-pyserial-github-readme.md, wiki/sources/2026-06-28-pyserial-shortintro.md]
---

# pySerial

> 跨平台串口通信 Python 库，103k+ 项目使用

## 基本信息

- **GitHub**: https://github.com/pyserial/pyserial
- **PyPI**: https://pypi.org/project/pyserial/
- **Documentation**: https://pyserial.readthedocs.io/
- **Used by**: 103k+ repositories
- **License**: BSD
- **Copyright**: 2001-2020 Chris Liechti
- **Python**: 2.7 / 3.4+

## 类型定位

- **控制对象**: 硬件接口控制（传感器通信）
- **技术层级**: 工具实现层
- **项目状态**: Production/Stable

## 核心能力

### 跨平台支持

| 平台 | 端口格式 | 示例 |
|------|----------|------|
| **Windows** | COM | COM1, COM3 |
| **Linux** | ttyUSB, ttyS | /dev/ttyUSB0, /dev/ttyS1 |
| **macOS** | cu. | /dev/cu.usbserial |
| **BSD** | cuaU | /dev/cuaU0 |

### 关键特性

1. **统一接口**：跨平台 class-based API
2. **配置灵活**：baudrate、parity、stopbits、flow control
3. **文件式 API**：read()、write()、readline()
4. **100% Python**：无 C 扩展，纯 Python
5. **超时控制**：支持 timeout 防止阻塞
6. **RFC 2217**：支持网络串口协议（实验性）

## AI Agent 应用场景

- **传感器数据采集**：温度、湿度、光照等传感器数据读取
- **Arduino 控制**：Agent 通过串口控制 Arduino MCU
- **嵌入式设备监控**：PLC、MCU 状态监控
- **IoT 网关通信**：串口透传 IoT 设备数据

## API 示例

```python
import serial

# 打开串口
ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
ser.write(b'hello')
line = ser.readline()
ser.close()

# 枚举端口
python -m serial.tools.list_ports
```

## 工具

- **serial.tools.list_ports** — 枚举可用串口
- **serial.tools.miniterm** — 终端工具

## 相关素材

- [[pySerial GitHub README]]
- [[pySerial Short Introduction]]

## 相关实体

- [[串口通信]]
- [[传感器]]

## 相关页面

- [[硬件接口控制]]