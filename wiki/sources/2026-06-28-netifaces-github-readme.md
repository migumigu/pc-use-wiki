---
tags: [netifaces, 网络接口, 网络监控, Python库]
created: 2026-06-28
updated: 2026-06-28
sources: [../../raw/articles/2026-06-28-netifaces-github-readme.md]
---

# netifaces GitHub README

> 跨平台网络接口信息获取库

## 核心信息

- **类型**：GitHub README
- **来源**：https://github.com/al45tair/netifaces
- **置信度**：EXTRACTED

## 关键内容

### 功能定位
netifaces是一个Python包，用于跨平台获取网络接口地址信息，封装系统依赖的底层网络API。

### 核心功能
- `interfaces()`：获取所有网络接口名称列表
- `ifaddresses()`：获取指定接口的地址信息（IPv4/IPv6/MAC）
- `gateways()`：获取网关信息

### 地址族常量
- `AF_LINK`：链路层地址（MAC）
- `AF_INET`：IPv4地址
- `AF_INET6`：IPv6地址

### 平台支持
- Linux、macOS、Windows、Solaris

### 重要注意事项
- ⚠️ 项目已停止维护（最后更新2021年）
- 需要编译C扩展
- 接口可能有多个地址，需处理列表

### 适用场景
- Agent获取网络配置信息
- 网络状态感知和诊断

## 相关页面

- [[netifaces]] — 实体页
- [[系统服务控制]] — 主题页
- [[psutil]] — 同类工具