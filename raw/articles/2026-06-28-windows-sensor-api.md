---
source_id: auto-2026-06-28-sensor-api
title: Windows Sensor API 官方文档
url: https://learn.microsoft.com/zh-cn/windows/win32/sensorsapi/portal
source_type: official_docs
tier: 1
control_object: hardware_interface_control
tech_layer: protocol
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# 传感器 API

> ⚠️ 重要提示：基于 COM 的传感器 API 已弃用，不应在新应用程序中使用。请改用 UWP 传感器 API。

## 目的

Windows 7 包括对传感器的本机支持，这些传感器是可以测量物理现象的设备，例如温度或位置。本文档介绍传感器 API，使应用程序能够以标准化的方式从传感器获取和使用数据。

传感器是可以测量物理现象、提供描述性数据或提供有关物理对象或环境状态的信息的设备或机制。计算机可以使用内置传感器、通过有线或无线连接连接的传感器，或者通过网络或 Internet 提供数据的传感器。

传感器 API 提供了一种以编程方式访问传感器提供的数据的标准方法。传感器 API 标准化：

- 传感器类别、类型和属性。
- 标准传感器类型的数据格式。
- 用于处理传感器和传感器集合的 COM 接口。
- 用于异步接收传感器数据的事件机制。

借助传感器 API，还可以定义自定义传感器类别、类型、属性、数据格式和事件。

## 开发人员受众

传感器 API 通过一组 COM 接口提供其功能。本文档假设你对使用 C++ 编程语言进行编程有一定的知识，并且你对如何使用 COM 对象和接口有基本的了解。

## 主要功能

### 传感器类别和类型
- 定义标准化的传感器分类
- 支持自定义传感器类型扩展

### 数据格式
- 标准传感器类型的数据格式标准化
- 支持自定义数据格式定义

### COM 接口
- ISensorManager - 传感器管理
- ISensor - 单个传感器操作
- ISensorCollection - 传感器集合
- ISensorDataReport - 数据报告

### 事件机制
- ISensorEvents - 异步数据接收
- 事件驱动的传感器数据更新

## API 状态

- **状态**: 已弃用（Deprecated）
- **替代方案**: UWP 传感器 API
- **兼容性**: Windows 7 及更高版本
- **限制**: 无计划其他功能或增强功能，支持将受到限制

## 相关文档

- [入门](https://learn.microsoft.com/zh-cn/windows/win32/sensorsapi/getting-started)
- [关于传感器 API](https://learn.microsoft.com/zh-cn/windows/win32/sensorsapi/about-the-sensor-api)
- [传感器 API 编程指南](https://learn.microsoft.com/zh-cn/windows/win32/sensorsapi/sensor-api-programming-guide)
- [传感器 API 编程参考](https://learn.microsoft.com/zh-cn/windows/win32/sensorsapi/sensor-api-programming-reference)

## 适用场景

虽然此 API 已弃用，但了解其设计对于：
- 维护旧系统中的传感器集成
- 理解 Windows 传感器 API 的演进历史
- 对比新旧 API 设计差异

## 更新时间

- Last updated: 2025/09/22