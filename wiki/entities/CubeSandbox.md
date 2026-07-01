---
tags: [CubeSandbox, 沙箱, Rust, KVM, 腾讯云, eBPF]
created: 2026-07-02
updated: 2026-07-02
sources:
  - wiki/sources/2026-07-02-cubesandbox-github-readme.md
  - wiki/sources/2026-07-02-agent-sandbox-ecosystem-comparison.md
---

# CubeSandbox

> 60ms 启动的 Rust 原生 AI Agent 沙箱，基于 RustVMM + KVM 硬件级隔离

<!-- confidence: EXTRACTED -->

## 核心能力

- 亚百毫秒冷启动: 单并发<60ms, 50并发P95 90ms, P99 137ms <!-- confidence: EXTRACTED -->
- 单节点高密度: 每实例<5MB内存，单机数千Agent <!-- confidence: EXTRACTED -->
- 真内核级隔离: 独立Guest OS内核 + eBPF网络隔离
- E2B SDK 原生兼容，零成本迁移
- 组件: CubeAPI(Rust网关), CubeMaster(编排), CubeProxy(代理), Cubelet(节点), CubeVS(eBPF虚拟交换机), CubeHypervisor(虚拟化)
- 腾讯云生产环境大规模验证

## 竞品

- E2B (SaaS)
- agent-sandbox (K8s容器)
- Daytona (OCI)

## 相关页面

- [[E2B]]
- [[Agent-Sandbox]]
- [[Docker]]
- [[系统服务控制]]
