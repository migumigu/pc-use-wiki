---
tags: [source, github_readme, file_sync, Go, P2P]
created: 2026-06-28
updated: 2026-06-28
source_type: github_readme
tier: 1
url: https://github.com/syncthing/syncthing
stars: 73117
license: MPL-2.0
---

# syncthing GitHub README

> P2P 持续文件同步，73K+ Stars，无服务器架构 <!-- confidence: EXTRACTED -->

## 来源概览

**来源类型**: GitHub README（Tier 1）
**URL**: https://github.com/syncthing/syncthing
**Stars**: 73,117（GitHub API 2026-06）
**语言**: Go (84.5%)
**许可证**: MPLv2

## 核心目标（按重要性排序）

根据官方 README，Syncthing 的目标按重要性排序：

1. **防止数据丢失（Safe From Data Loss）**
   保护用户数据是首要任务，采取一切合理预防措施避免损坏用户文件。

2. **防御攻击者（Secure Against Attackers）**
   无论其他目标如何，绝不允许用户数据被未授权方窃听或修改。

3. **易于使用（Easy to Use）**
   Syncthing 应该易于接近、理解和包容。

4. **自动化（Automatic）**
   只有在绝对必要时才需要用户交互。

5. **普遍可用（Universally Available）**
   Syncthing 应能在每台常见计算机上运行。

6. **面向个人（For Individuals）**
   主要关注为个人用户提供安全、易用的文件同步。

## 关键信息

### 架构 <!-- confidence: EXTRACTED -->

- **P2P 无服务器**：设备之间直接同步，无需中央服务器
- **全程加密**：所有传输都加密
- **Device ID**：唯一加密安全的设备标识符，用于设备发现

### 协议支持 <!-- confidence: EXTRACTED -->

- QUIC listener (`[::]:22000`)
- TCP listener (`[::]:22000`)
- Relay listener (dynamic+https://relays.syncthing.net/endpoint)

### 配置 <!-- confidence: EXTRACTED -->

- 配置必须双向（两台设备都配置对方 Device ID）
- 配置变更不立即反映（需等待）
- 默认配置位置：`$XDG_STATE_HOME/syncthing`

## 提取的实体

- [[Syncthing]] — P2P 持续文件同步工具

## 提取的主题

- [[文件系统控制]] — 文件同步工具

## 相关页面

- [[Unison]] — 同类工具对比
- [[filelock]] — 文件锁机制
- [[shutil]] — 文件操作库