---
tags: [文件同步, P2P, 跨平台, Go]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-syncthing-github-readme.md]
url: https://github.com/syncthing/syncthing
stars: 73117
license: MPL-2.0
---

# Syncthing

> 开源持续文件同步工具，P2P 无服务器架构 <!-- confidence: EXTRACTED -->

## 核心定位

Syncthing 是一个**持续文件同步程序**，在两台或多台计算机之间实时同步文件。

**关键数据** <!-- confidence: EXTRACTED -->：
- Stars: 73,117（GitHub API 2026-06）
- 语言: Go (84.5%)
- 许可证: MPLv2
- 架构: P2P 无服务器

## 核心目标（按重要性排序）

根据官方 README，Syncthing 的目标按重要性排序：

1. **防止数据丢失（Safe From Data Loss）** <!-- confidence: EXTRACTED -->
   保护用户数据是首要任务，采取一切合理预防措施避免损坏用户文件。

2. **防御攻击者（Secure Against Attackers）** <!-- confidence: EXTRACTED -->
   无论其他目标如何，绝不允许用户数据被未授权方窃听或修改。

3. **易于使用（Easy to Use）** <!-- confidence: EXTRACTED -->
   Syncthing 应该易于接近、理解和包容。

4. **自动化（Automatic）** <!-- confidence: EXTRACTED -->
   只有在绝对必要时才需要用户交互。

5. **普遍可用（Universally Available）** <!-- confidence: EXTRACTED -->
   Syncthing 应能在每台常见计算机上运行。

6. **面向个人（For Individuals）** <!-- confidence: EXTRACTED -->
   主要关注为个人用户提供安全、易用的文件同步。

## 核心架构

### P2P 无服务器架构 <!-- confidence: EXTRACTED -->

- 无需中央服务器
- 设备之间直接同步
- 全程加密传输

### 设备发现机制 <!-- confidence: EXTRACTED -->

使用 **Device ID**（设备标识符）进行设备发现：
- 唯一的、加密安全的标识符
- 馢次启动时作为密钥生成的一部分生成
- 两台设备只有在彼此配置对方的设备 ID 时才会连接

**重要特性**：
- 配置必须双向才能建立连接
- Device ID 不需要保密（本质上是公钥的一部分）

### 协议支持 <!-- confidence: EXTRACTED -->

- **QUIC listener** (`[::]:22000`)
- **TCP listener** (`[::]:22000`)
- **Relay listener** (dynamic+https://relays.syncthing.net/endpoint)

## 配置

### 配置文件位置 <!-- confidence: EXTRACTED -->

默认配置和数据库目录位置：
- `$XDG_STATE_HOME/syncthing`
- `$HOME/.local/state/syncthing`
- `$HOME/Library/Application Support/Syncthing`
- `%LOCALAPPDATA%\Syncthing`

### 默认配置 <!-- confidence: EXTRACTED -->

- **Default Folder**: 用户目录的 `Sync` 文件夹（Windows: `%USERPROFILE%\Sync`）
- **GUI 监听**: `http://localhost:8384/`

## 能力边界

### 支持的能力 <!-- confidence: EXTRACTED -->

- ✓ P2P 持续同步（实时）
- ✓ 设备发现（Device ID）
- ✓ 多协议支持（QUIC/TCP/Relay）
- ✓ 自动化（用户交互最小化）
- ✓ 加密传输
- ✓ 跨平台（Windows/macOS/Linux）

### 局限性 <!-- confidence: EXTRACTED -->

- 配置必须双向（两台设备都配置对方 Device ID）
- 配置变更不立即反映（需等待）
- 需处理防火墙问题

## 适用场景

**最适用场景** <!-- confidence: INFERRED -->：
- 个人设备间实时同步
- 跨平台同步
- 自动化备份

**不适用场景** <!-- confidence: INFERRED -->：
- 企业集中管理
- 需中央服务器控制
- 复杂权限管理

## 与 Unison 对比

| 维度 | Syncthing | Unison |
|------|-----------|--------|
| 架构 | P2P 无服务器 | SSH/TCP 客户端 |
| 同步模式 | 持续实时同步 | 双向同步 |
| 配置复杂度 | Device ID 双向配置 | SSH 配置 |
| 维护团队 | 活跃开发 | 2.5 人 0.1 FTE |

## Agent 集成视角

**Agent 可通过以下方式使用 Syncthing** <!-- confidence: INFERRED -->：
1. 调用 syncthing CLI/API 触发同步
2. 监控 syncthing 状态
3. 配置 Device ID 和文件夹共享

**集成挑战** <!-- confidence: INFERRED -->：
- Device ID 配置需要用户干预
- 防火墙问题需要处理
- 状态监控需要访问 GUI/API

## 相关页面

- [[文件系统控制]] — 所属主题
- [[Unison]] — 同类工具对比
- [[watchdog]] — 文件监控工具
- [[filelock]] — 文件锁机制