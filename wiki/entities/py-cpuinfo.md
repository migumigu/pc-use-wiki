---
tags: [py-cpuinfo, CPU信息, 硬件检测, Python库]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-py-cpuinfo-github-readme.md]
---

# py-cpuinfo

> 纯Python CPU信息检测库

## 基本信息

- **类型**：Python库
- **GitHub**：github.com/workhorsy/py-cpuinfo
- **License**：MIT
- **维护状态**：稳定（最近提交2022年11月）

## 一句话摘要

py-cpuinfo是一个纯Python CPU信息检测库，无需编译，通过多种策略获取CPU详细信息，支持多种架构和操作系统。

## 核心能力

### CPU信息获取
- `get_cpu_info()`：返回CPU信息字典
- `get_cpu_info_json()`：返回JSON格式CPU信息

### 返回字段
- CPU型号、品牌
- 频率（标称/实际）
- 架构（X86/ARM/RISCV等）
- 缓存信息（L1/L2/L3）
- 处理器数量、核心数
- CPU标志（flags）

## 信息来源策略

| 来源 | 平台 |
|------|------|
| Windows Registry | Windows |
| `/proc/cpuinfo` | Linux |
| `sysctl` | macOS |
| `dmesg` | Unix/Linux |
| CPUID寄存器 | Intel X86 |

## 平台支持

- Linux（Arch、CentOS、Debian等）
- Windows（XP、Vista、7、8、10）
- macOS（10.8-10.14）
- BSD、Solaris、Haiku

## 架构支持

- X86 32bit/64bit
- ARM（部分支持）
- LoongArch、MIPS、PPC、RISCV、SPARC、S390X

## 局限性

- 仅提供静态CPU信息，不提供实时使用率
- 部分架构支持有限（ARM/MIPS等）
- Apple Silicon支持未明确声明

## Agent集成价值

py-cpuinfo可作为AI Agent的"硬件能力检测器"：

```python
# Agent检测硬件能力
from cpuinfo import get_cpu_info

info = get_cpu_info()
cpu_arch = info.get('arch', 'unknown')
cpu_count = info.get('count', 1)

# 根据硬件能力选择执行策略
if cpu_arch == 'X86_64':
    # 使用x86优化策略
    pass
```

## 与同类工具对比

| 工具 | CPU信息 | 实时监控 | 纯Python | 维护状态 |
|------|---------|----------|----------|----------|
| **py-cpuinfo** | ✅ 专业 | ❌ | ✅ | ✅ 稳定 |
| psutil | ⚠️ 基础 | ✅ | ✅ | ✅ 活跃 |
| platform | ⚠️ 基础 | ❌ | ✅ | ✅ 标准库 |

## 相关页面

- [[系统服务控制]] — 主题页
- [[psutil]] — 同类工具
- [[2026-06-28-py-cpuinfo-github-readme]] — 素材摘要