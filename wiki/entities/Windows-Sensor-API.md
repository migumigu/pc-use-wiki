---
tags: [Windows Sensor API, COM接口, 传感器, 已弃用API, Windows]
created: 2026-06-28
updated: 2026-06-28
sources: [wiki/sources/2026-06-28-windows-sensor-api.md]
---

# Windows-Sensor-API

> Windows 7 传感器 COM API（已弃用，建议使用 UWP 传感器 API）

## 基本信息

- **官方文档**: https://learn.microsoft.com/zh-cn/windows/win32/sensorsapi/portal
- **状态**: 已弃用（Deprecated）
- **替代方案**: UWP 传感器 API
- **平台**: Windows 7 及更高版本
- **接口类型**: COM 接口
- **更新时间**: 2025/09/22

## 类型定位

- **控制对象**: 硬件接口控制（传感器）
- **技术层级**: 协议/接口层
- **项目状态**: Deprecated（遗留）

## COM 接口

| 接口 | 作用 | 功能 |
|------|------|------|
| **ISensorManager** | 传感器管理 | 设备枚举、权限请求 |
| **ISensor** | 单个传感器 | 数据获取、属性设置 |
| **ISensorCollection** | 传感器集合 | 批量管理传感器 |
| **ISensorDataReport** | 数据报告 | 数据格式化 |
| **ISensorEvents** | 异步事件 | 数据更新事件 |

## API 目的

Windows 7 引入传感器本机支持，提供：
- 传感器类别、类型和属性标准化
- 标准传感器类型的数据格式
- COM 接口处理传感器
- 异步接收传感器数据的事件机制

## 开发人员受众

- C++ 编程语言
- COM 对象和接口基础知识
- ATL（活动模板库）

## ⚠️ API 状态

**重要提示**：
- 基于 COM 的传感器 API 已弃用
- 不应在新应用程序中使用
- 无计划新增功能或增强
- 支持将受到限制
- **请改用 UWP 传感器 API**

## 适用场景（遗留）

虽然已弃用，但仍有参考价值：
- 维护旧系统中的传感器集成
- 理解 Windows 传感器 API 演进历史
- 对比新旧 API 设计差异

## 传感器定义

传感器是可以测量物理现象、提供描述性数据或物理对象/环境状态信息的设备：
- 内置传感器（如加速度计、光传感器）
- 有线/无线连接传感器
- 网络/Internet 提供数据的传感器

## AI Agent 应用场景（遗留）

- **维护旧系统**: 理解遗留代码中的传感器调用
- **历史研究**: 对比 Win32 API 与 UWP API 设计演进
- **知识参考**: 了解 Windows 传感器 API 设计思路

## 相关实体

- [[传感器]] - 传感器概念
- [[COM接口]] - Windows COM 技术
- [[UWP传感器API]] - 替代方案
- [[硬件接口控制]] - 研究主题

## 相关页面

- [[2026-06-28-windows-sensor-api]] - 素材来源
- [[硬件接口控制]] - 所属主题