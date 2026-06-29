# 证伪记录 v1

## page-agent 证伪

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| "支持点击、文本输入、下拉选择等基本操作" | 报告 | ⚠️待验证 | GitHub Issues 显示有 "连 input 按钮都找不出来" 的 Bug | 添加注释："基于 DOM 的操作可能受页面结构影响" |
| "20.2k+ Stars" | GitHub README | ✅已验证 | GitHub 页面显示 20.2k+ stars | 无需修正 |

## CUA 证伪

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| "后台运行不占用光标" | 报告 | ⚠️待验证 | Issues 显示存在 focus/foreground 问题 | 添加注释："某些场景下可能存在焦点问题" |
| "Windows UIA 支持" | GitHub README | ❌部分问题 | Issue #1616: "Chromium/Electron content tree invisible to UIA" | 更新描述："Windows UIA 对 Electron/Chromium 应用支持有限" |
| "14.8k+ Stars" | GitHub README | ✅已验证 | GitHub 页面确认 | 无需修正 |
| "macOS 26 支持" | 报告 | ❌有问题 | Issue #1537: "get_window_state hangs on macOS 26" | 添加已知问题 |

## 已知问题汇总

### page-agent
- Bug: DOM 元素查找问题（GitHub Issue #467）

### CUA
- Windows: Electron/Chromium 应用 UIA 不可见
- macOS: M4 芯片 Swift 泄露问题
- 截图分辨率与点击坐标系统不一致
- 非拉丁键盘布局下按键输入问题
- Lume SSH 二进制输出损坏问题
