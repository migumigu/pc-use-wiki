---
tags: [netifaces, 网络接口, 网络监控, Python库]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-netifaces-github-readme.md]
---

# netifaces

> 跨平台网络接口信息获取库

## 基本信息

- **类型**：Python库（C扩展）
- **GitHub**：github.com/al45tair/netifaces
- **版本**：0.10.8
- **License**：MIT
- **维护状态**：停止维护（最后更新2021年）

## 一句话摘要

netifaces是一个跨平台Python库，用于获取网络接口的地址信息（IPv4/IPv6/MAC）和网关信息，封装了系统依赖的底层网络API。

## 核心能力

### 网络接口查询
- `interfaces()`：获取所有网络接口名称列表
- `ifaddresses()`：获取指定接口的地址信息

### 网关信息
- `gateways()`：获取网关信息（默认网关、多网关）

### 地址族支持
- `AF_LINK`：链路层地址（MAC）
- `AF_INET`：IPv4地址
- `AF_INET6`：IPv6地址

## 地址信息结构

```python
addrs = netifaces.ifaddresses('en0')
# IPv4地址
addrs[netifaces.AF_INET]
# [{'broadcast': '10.15.255.255', 'netmask': '255.240.0.0', 'addr': '10.0.1.4'}]
```

## 平台支持

- Linux、macOS、Windows、Solaris

## 局限性

- ⚠️ 项目已停止维护（最后更新2021年）
- 需要编译C扩展，安装复杂度较高
- Python 3.10+兼容性未明确验证
- 不支持网络流量监控

## Agent集成价值

netifaces可作为AI Agent的"网络状态感知器"：

```python
# Agent获取网络配置
import netifaces
interfaces = netifaces.interfaces()
for iface in interfaces:
    addrs = netifaces.ifaddresses(iface)
    # 获取IPv4地址
    if netifaces.AF_INET in addrs:
        ip_info = addrs[netifaces.AF_INET][0]
        print(f"{iface}: {ip_info['addr']}")
```

## 与同类工具对比

| 工具 | 网络接口 | 跨平台 | 纯Python | 维护状态 |
|------|---------|--------|----------|----------|
| **netifaces** | ✅ 专业 | ✅ | ❌ C扩展 | ❌ 停止 |
| psutil | ⚠️ 基础 | ✅ | ✅ | ✅ 活跃 |
| socket | ⚠️ 基础 | ✅ | ✅ | ✅ 标准库 |

## 相关页面

- [[系统服务控制]] — 主题页
- [[psutil]] — 同类工具
- [[2026-06-28-netifaces-github-readme]] — 素材摘要