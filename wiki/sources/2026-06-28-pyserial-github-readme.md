---
tags: [pySerial, 串口通信, 硬件控制, Python库]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-pyserial-github-readme.md]
---

# pySerial GitHub README

> 跨平台串口通信 Python 库，103k+ 项目使用

## 核心信息

- **GitHub**: https://github.com/pyserial/pyserial
- **PyPI**: https://pypi.org/project/pyserial/
- **Documentation**: https://pyserial.readthedocs.io/
- **Used by**: 103k+ repositories
- **License**: BSD
- **Copyright**: 2001-2020 Chris Liechti

## 支持平台

- **Windows**: Windows 7+
- **Linux**: POSIX compliant systems
- **macOS**: OSX
- **BSD**: FreeBSD, NetBSD, OpenBSD

## Python 支持

- **Python 2.7**: 支持
- **Python 3.4+**: 支持

## 关键特性

1. **统一接口**：跨平台统一的 class-based API
2. **配置灵活**：支持 baudrate、parity、stopbits、flow control（RTS/CTS、Xon/Xoff）
3. **文件式 API**：read()、write()、readline() 等文件操作
4. **100% Python**：无 C 扩展，纯 Python 实现
5. **二进制传输**：无 NULL 字节剥离、CR-LF 转换
6. **超时控制**：支持 timeout 参数控制阻塞行为
7. **RFC 2217**：支持网络串口协议（实验性）

## 安装方法

```bash
python -m pip install pyserial
conda install pyserial
conda install -c conda-forge pyserial
```

## 设备类型

- Arduino MCU
- 传感器模块（温度、湿度、光照）
- 嵌入式设备（PLC、MCU）
- IoT 网关

## 关键价值

- AI Agent 与**传感器**通信的标准接口
- 支持**Arduino**等嵌入式设备的数据采集
- 103k+ 项目使用，生态成熟

## 相关实体

- [[pySerial]]
- [[串口通信]]
- [[传感器]]

## 相关页面

- [[硬件接口控制]]
- [[pySerial Short Introduction]]