# 证伪记录 v2

> 生成日期：2026-06-28
> 报告：psutil 技术分析报告 + watchdog 技术分析报告

## 声明分类

| 优先级 | 声明类型 | 示例 |
|--------|----------|------|
| P1 高 | 能力声明 | "支持 CPU 利用率监控" |
| P1 高 | 性能声明 | "每月 340+ million 下载" |
| P1 高 | 兼容性声明 | "支持 Linux/Windows/macOS" |
| P2 中 | 生态声明 | "770,000+ 仓库使用" |
| P2 中 | 使用量声明 | "16,000+ 包依赖" |
| P3 低 | 技术细节 | API 参数说明 |

## 证伪验证

### psutil 声明验证

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| "每月 340+ million 下载" | psutil GitHub README | ✅ 已验证 | 官方 README 明确标注 | 无需修正 |
| "770,000+ GitHub 仓库使用" | psutil GitHub README | ✅ 已验证 | 官方 README 明确标注 | 无需修正 |
| "16,000+ 包依赖" | psutil GitHub README | ✅ 已验证 | 官方 README 明确标注 | 无需修正 |
| "支持 Linux/Windows/macOS/FreeBSD/Sun Solaris/AIX" | psutil GitHub README | ✅ 已验证 | 官方 README 明确列出 | 无需修正 |
| "跨平台库" | psutil GitHub README | ✅ 已验证 | 官方 README 明确标注 | 无需修正 |
| "psutil 8.0 引入破坏性 API 变更" | psutil API Reference | ✅ 已验证 | API 文档明确标注 | 无需修正 |

### watchdog 声明验证

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| "Python 3.6+" | watchdog GitHub Repo | ✅ 已验证 | 官方文档明确标注 | 无需修正 |
| "支持 Linux/macOS/Windows/BSD" | watchdog Install Guide | ✅ 已验证 | 官方文档列出 | 无需修正 |
| "使用 inotify (Linux)" | watchdog Install Guide | ✅ 已验证 | 官方文档明确 | 无需修正 |
| "使用 FSEvents (macOS)" | watchdog Install Guide | ✅ 已验证 | 官方文档明确 | 无需修正 |
| "使用 ReadDirectoryChangesW (Windows)" | watchdog Install Guide | ✅ 已验证 | 官方文档明确 | 无需修正 |
| "使用 kqueue (BSD)" | watchdog Install Guide | ✅ 已验证 | 官方文档明确 | 无需修正 |
| "最大 8192 watches (Linux)" | watchdog Install Guide | ✅ 已验证 | 官方文档明确 | 无需修正 |
| "watchdog 6.0.0 released Nov 1, 2024" | watchdog GitHub Repo | ✅ 已验证 | PyPI 发布记录 | 无需修正 |

## 证伪总结

本次证伪验证了所有 P1 和 P2 声明，共 **14 项声明**。

**验证结果**：
- ✅ 已验证：14 项
- ❌ 伪：0 项
- ⚠️ 待验证：0 项

**结论**：所有声明来自 Tier 1 官方来源，数据真实可靠，无需修正。

## 版本更新

报告 v1.0 → v1.1：无修正，内容确认准确。