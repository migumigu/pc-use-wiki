---
tags: [pySerial, 串口通信, API示例, Python]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-pyserial-shortintro.md]
---

# pySerial Short Introduction

> pySerial API 快速入门指南和代码示例

## 核心信息

- **文档**: https://pyserial.readthedocs.io/en/latest/shortintro.html
- **类型**: 官方 API 文档
- **Tier**: 1

## API 示例

### 打开串口（默认参数）

```python
import serial
ser = serial.Serial('/dev/ttyUSB0')  # open serial port
print(ser.name)         # check which port was really used
ser.write(b'hello')     # write a string
ser.close()             # close port
```

### 带超时的串口

```python
with serial.Serial('/dev/ttyS1', 19200, timeout=1) as ser:
    x = ser.read()          # read one byte
    s = ser.read(10)        # read up to ten bytes (timeout)
    line = ser.readline()   # read a '\n' terminated line
```

### 流控制

```python
ser = serial.Serial('COM3', 38400, timeout=0,
                     parity=serial.PARITY_EVEN, rtscts=1)
s = ser.read(100)       # read up to one hundred bytes
```

### 延迟配置

```python
ser = serial.Serial()
ser.baudrate = 19200
ser.port = 'COM1'
ser.open()
ser.is_open  # True
ser.close()
```

## 关键参数

- **baudrate**: 波特率（9600、19200、38400 等）
- **parity**: 校验位（N=无、E=偶、O=奇）
- **stopbits**: 停止位（1、1.5、2）
- **timeout**: 超时时间（None=阻塞、0=非阻塞、N=秒）
- **rtscts**: 硬件流控制

## 重要提示

### readline 超时

`readline()` 必须设置 timeout，否则会永久阻塞。如果返回值缺少 `\n`，表示超时返回。

### EOL 处理

使用 `io.TextIOWrapper` 处理换行符：

```python
import io
ser = serial.serial_for_url('loop://', timeout=1)
sio = io.TextIOWrapper(io.BufferedRWPair(ser, ser))
sio.write("hello\n")
sio.flush()
hello = sio.readline()
```

## 工具

### 端口列表

```bash
python -m serial.tools.list_ports
```

### 终端工具

```bash
python -mserial.tools.miniterm <port_name> -h
```

## 相关实体

- [[pySerial]]
- [[串口通信]]

## 相关页面

- [[pySerial GitHub README]]