---
source_id: auto-2026-07-02-cubesandbox-github
title: TencentCloud/CubeSandbox GitHub README
url: https://github.com/TencentCloud/CubeSandbox
source_type: github_readme
tier: 1
control_object: system_service
tech_layer: tool_implementation
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# TencentCloud/CubeSandbox

> 60ms 启动的 Rust 原生 AI Agent 沙箱 — 基于 RustVMM + KVM 构建的高性能安全沙箱服务

## 项目基本信息

- **许可证**: Apache-2.0
- **开源时间**: 2026年4月
- **核心技术**: RustVMM + KVM
- **兼容性**: 原生兼容 E2B SDK

## 核心特性

- **亚百毫秒冷启动**: 端到端冷启动 < 60ms
- **单节点高密度部署**: CoW 内存复用，每实例内存开销 < 5MB，单机可运行数千 Agent
- **真·内核级隔离**: 每个 Agent 独立 Guest OS 内核，消除容器逃逸风险
- **零成本迁移**: 原生兼容 E2B SDK 接口，只需换一个 URL 环境变量
- **网络安全**: CubeVS 基于 eBPF 的内核级沙箱间网络隔离
- **生产验证**: 已在腾讯云生产环境大规模验证

## 性能基准对比

| 指标 | Docker 容器 | 传统 VM | CubeSandbox |
|------|------------|---------|-------------|
| 隔离级别 | 低(共享内核) | 高(独立内核) | 极致(独立内核+eBPF) |
| 启动速度 | 200ms | 秒级 | < 60ms |
| 内存开销 | 低 | 高 | 极低(< 5MB) |
| 部署密度 | 高 | 低 | 极致(数千/节点) |

冷启动详细指标：单并发 60ms；50 并发平均 67ms, P95 90ms, P99 137ms

## 架构组件

| 组件 | 职责 |
|------|------|
| CubeAPI | 高并发 REST API 网关 (Rust)，兼容 E2B |
| CubeMaster | 集群编排器，管理资源调度 |
| CubeProxy | 反向代理，兼容 E2B 协议 |
| Cubelet | 计算节点本地调度组件 |
| CubeVS | 基于 eBPF 的虚拟交换机，内核级网络隔离 |
| CubeHypervisor & CubeShim | 虚拟化层，管理 KVM MicroVM |

## 致谢

基于 Cloud Hypervisor、Kata Containers、virtiofsd、containerd-shim-rs 等开源项目构建。
