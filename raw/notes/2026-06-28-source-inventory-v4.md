# 素材清单

> 生成时间：2026-06-28 17:00

## 本轮收集素材

| 序号 | 素材ID | 标题 | URL | 类型 | Tier | 控制对象 | 技术层级 |
|------|--------|------|-----|------|------|----------|----------|
| 1 | auto-2026-06-28-hidapi-github | hidapi GitHub README | https://github.com/libusb/hidapi | github_readme | 1 | hardware_interface_control | tool_implementation |
| 2 | auto-2026-06-28-sensor-api | Windows Sensor API 官方文档 | https://learn.microsoft.com/zh-cn/windows/win32/sensorsapi/portal | official_docs | 1 | hardware_interface_control | protocol |
| 3 | auto-2026-06-28-systemd-io | systemd.io 官方文档首页 | https://systemd.io | official_docs | 1 | system_service_control | tool_implementation |

## 素材质量统计

- **Tier 1（官方/权威）**: 3 个
- **Tier 2（重要）**: 0 个
- **Tier 3（补充）**: 0 个
- **总置信度**: High（所有素材均为一级来源）

## 预期知识库更新

| 控制对象 | 现有素材 | 新增素材 | 预期总计 | 是否达标 |
|----------|----------|----------|----------|----------|
| 硬件接口控制 | 9 | 2 | 11 | ✓ |
| 系统服务控制 | 8 | 1 | 9 | ❌（差1个） |

## 下一步建议

由于系统服务控制仍差1个素材（9/10+），建议下次继续收集：
- Linux IPC 进程通信机制素材
- 或 WMI 完整参考文档

## 备注

本轮为轻量级补充研究，跳过复杂的技术分析报告和证伪修正阶段，直接执行 llm-wiki digest 消化入库。