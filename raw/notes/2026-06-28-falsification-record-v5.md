---
title: 证伪记录 - 系统服务控制与工作流编排
created_date: 2026-06-28
workflow_phase: Phase 4 - Falsification
---

# 证伪记录 - 系统服务控制与工作流编排

## 验证概况

- **报告版本**：v1.0
- **验证日期**：2026-06-28
- **验证声明数**：8
- **P1 声明**：6
- **P2 声明**：2
- **验证通过**：6
- **待验证**：2
- **伪声明**：0

## 证伪结果

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| Prefect Stars: 17k+ | 报告-v1 | ✅已验证 | Open Github 社区排行榜（17k） | 无需修正 |
| Prefect 提交数: 21,693 | 报告-v1 | ✅已验证 | GitHub README（21,693 Commits） | 无需修正 |
| Prefect Cloud 每月执行 200 万+ 任务 | 报告-v1 | ⚠️待验证 | GitHub README 声明 | 标注"来自官方 README" |
| Prefect Slack 社区 25,000+ 用户 | 报告-v1 | ⚠️待验证 | GitHub README 声明 | 标注"来自官方 README" |
| pystemd 提交数: 191 | 报告-v1 | ✅已验证 | GitHub README（191 Commits） | 无需修正 |
| pystemd 最新版本 v0.15.3 | 报告-v1 | ✅已验证 | GitHub README（v0.15.3, Jan 15, 2026） | 无需修正 |
| systemd 要求 v237+ | 报告-v1 | ✅已验证 | GitHub README + 技术博客 | 无需修正 |
| CentOS 7 内置 systemd v219 | 报告-v1 | ✅已验证 | 腾讯云问答 + CSDN 博客（systemd-219-78.el7_9） | 无需修正 |

## 详细验证过程

### P1 声明验证

#### 1. Prefect Stars: 17k+

**验证方式**：Open Github 社区排行榜
**验证结果**：✅ 已验证（17k Stars）
**证据**：http://m.toutiao.com/group/7648481333030748698/ 显示 PrefectHQ/prefect 为 17k

#### 2. Prefect 提交数: 21,693

**验证方式**：GitHub README 直接读取
**验证结果**：✅ 已验证（21,693 Commits）
**证据**：GitHub README 明确标注

#### 3. pystemd 提交数: 191

**验证方式**：GitHub README 直接读取
**验证结果**：✅ 已验证（191 Commits）
**证据**：GitHub README 明确标注

#### 4. pystemd 最新版本 v0.15.3

**验证方式**：GitHub README 直接读取
**验证结果**：✅ 已验证（v0.15.3, Jan 15, 2026）
**证据**：GitHub README Releases 部分

#### 5. systemd 要求 v237+

**验证方式**：GitHub README + 技术文档
**验证结果**：✅ 已验证（systemd v237+）
**证据**：GitHub README 明确标注

#### 6. CentOS 7 内置 systemd v219

**验证方式**：腾讯云问答 + CSDN 博客
**验证结果**：✅ 已验证（systemd-219-78.el7_9）
**证据**：
- https://cloud.tencent.com/developer/ask/sof/116300286（确认 systemd 219）
- https://andyx.net/linux_bug_announcement_system_unable_to_boot_after_upgrading_systemd_to_version_systemd-219-78_el7_9/（确认版本号）

### P2 声明验证

#### 7. Prefect Cloud 每月执行 200 万+ 任务

**验证方式**：官方 README 声明
**验证结果**：⚠️ 待验证
**证据**：GitHub README 声明，无法直接验证
**标注**："来自官方 README，未独立验证"

#### 8. Prefect Slack 社区 25,000+ 用户

**验证方式**：官方 README 声明
**验证结果**：⚠️ 待验证
**证据**：GitHub README 声明，无法直接验证
**标注**："来自官方 README，未独立验证"

## 验证总结

### 通过验证

- **6 个 P1 声明**全部通过验证，均为事实声明，来源可信。
- **CentOS 7 systemd v219** 经多方验证确认，可信度高。

### 待验证声明

- **2 个 P2 声明**为商业宣传数据，无法独立验证，标注为"来自官方 README"。

### 未发现伪声明

本次验证未发现需要修正的伪声明。所有关键事实均与来源一致。

## 报告修正建议

将报告中的 P2 声明标注置信度：
- Prefect Cloud 每月执行 200 万+ 任务 → `<!-- confidence: EXTRACTED -->`
- Prefect Slack 社区 25,000+ 用户 → `<!-- confidence: EXTRACTED -->`

## 下一步

- 报告保持 v1.0（无重大修正）
- 进入第五阶段：llm-wiki 消化入库