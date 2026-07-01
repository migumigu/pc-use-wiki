---
tags: [素材摘要, CubeSandbox, Rust, KVM, 沙箱]
created: 2026-07-02
updated: 2026-07-02
sources: []
---

# CubeSandbox GitHub README

> 60ms 启动的 Rust 原生 AI Agent 沙箱，基于 RustVMM + KVM 硬件级隔离

<!-- confidence: EXTRACTED -->

## 核心内容
- 许可证: Apache-2.0, 开源: 2026年4月
- 冷启动: 单并发 <60ms, 50并发 P95 90ms, P99 137ms
- 内存开销: < 5MB/实例，单机可运行数千Agent
- 真内核级隔离: 独立 Guest OS 内核 + eBPF 网络隔离
- E2B SDK 原生兼容，零成本迁移
- 组件: CubeAPI, CubeMaster, CubeProxy, Cubelet, CubeVS, CubeHypervisor
- 生产验证: 腾讯云生产环境大规模验证

## 相关页面
- [[CubeSandbox]] — 实体页
- [[E2B]] — 实体页
- [[系统服务控制]] — 实体页
