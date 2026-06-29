---
source_id: auto-2026-06-28-falsify7
title: 系统监控工具证伪记录
tier: 2
control_object: system_service
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: medium
---

## 证伪记录

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| "GPUtil 支持 Python 2.X 和 3.X" | GPUtil README | ✅已验证 | README 明确说明支持 Python 2.X 和 3.X | 无需修正 |
| "GPUtil 依赖 nvidia-smi" | GPUtil README | ✅已验证 | README 明确说明使用 nvidia-smi 获取 GPU 状态 | 无需修正 |
| "netifaces 需要编译 C 扩展" | netifaces README | ✅已验证 | README 明确说明需要 developer tools 进行编译 | 无需修正 |
| "netifaces 项目已停止维护" | netifaces README | ✅已验证 | README 顶部有警告："needs a new maintainer"，最后更新 2021 年 | 无需修正 |
| "py-cpuinfo 纯 Python 实现" | py-cpuinfo README | ✅已验证 | README 明确说明 "pure Python"，无需编译 | 无需修正 |
| "py-cpuinfo 支持 ARM 架构" | py-cpuinfo README | ✅已验证 | README 列出 ARM 支持（partial） | 无需修正 |
| "netifaces Python 3.10+ 可能存在兼容性问题" | 推断 | ⚠️待验证 | 最后更新 2021 年，未明确支持 3.10+ | "netifaces 最后更新于 2021 年，Python 3.10+ 兼容性未明确验证" |
| "py-cpuinfo 支持 Apple Silicon" | 推断 | ⚠️待验证 | 支持 macOS 和 ARM，但未明确说明 Apple Silicon | "py-cpuinfo 支持 macOS 和 ARM 架构，但 Apple Silicon 支持未明确声明" |

## 证伪结论

### 已验证声明（6 项）
所有从 README 中提取的直接声明均已验证为真实。

### 待验证声明（2 项）
1. **netifaces Python 3.10+ 兼容性**：项目最后更新于 2021 年，当时 Python 3.10 尚未发布。虽然 C 扩展通常兼容性较好，但无法完全确认。

2. **py-cpuinfo Apple Silicon 支持**：项目支持 macOS 和 ARM 架构，但 Apple Silicon（M1/M2/M3）作为特定的 ARM64 实现，其支持程度需要进一步验证。

### 修正建议
在报告中对这两项声明添加置信度标记，注明"待验证"状态。