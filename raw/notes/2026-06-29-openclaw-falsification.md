## 证伪记录 - OpenClaw 研究（2026-06-29）

| # | 声明 | 来源 | 优先级 | 验证结果 | 证据 | 修正 |
|---|------|------|--------|----------|------|------|
| 1 | GitHub Stars 33万+ | 报告-v1.0、CSDN文章 | P1 | ⚠️ 待验证（范围确认） | 多个第三方来源报道 20.9万~38万 Stars；GitHub 页面 WebFetch 无法获取精确数字 | 修正为"20万+ Stars（第三方报道，具体数字待确认）"，添加置信度标注 |
| 2 | 支持 25+ 消息平台 | 报告-v1.0 | P1 | ✅ 已验证 | 官方 README 列出 25+ 平台：WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, iMessage, IRC, Microsoft Teams, Matrix, Feishu, LINE, Mattermost, Nextcloud Talk, Nostr, Synology Chat, Tlon, Twitch, Zalo, Zalo Personal, WeChat, QQ, WebChat, macOS, iOS/Android | 无需修正 |
| 3 | 58,222+ 次提交 | 报告-v1.0 | P1 | ✅ 已验证 | GitHub 仓库页面显示 "58,222 Commits" | 无需修正 |
| 4 | v2026.6.1 是最新版本 | 报告-v1.0 | P1 | ✅ 已验证 | GitHub Releases 显示 "openclaw 2026.6.1 Latest"，发布于 Jun 3, 2026，共 202 个 releases | 无需修正 |
| 5 | Docker 沙箱支持浏览器沙箱 | 报告-v1.0 | P2 | ✅ 已验证 | 官方文档 "Sandboxing" 章节明确说明："Optional sandboxed browser (agents.defaults.sandbox.browser)"，且 Docker 后端支持浏览器沙箱 | 无需修正 |
| 6 | 遵循 AgentSkills 规范 | 报告-v1.0 | P2 | ✅ 已验证 | 官方 Skills 文档明确说明："OpenClaw follows the AgentSkills spec" | 无需修正 |
| 7 | TypeScript 91.7% | 报告-v1.0 | P2 | ✅ 已验证 | GitHub 仓库页面语言统计：TypeScript 91.7%, Swift 3.3%, JavaScript 2.7%, Kotlin 1.0%, Shell 0.7%, CSS 0.4%, Other 0.2% | 无需修正 |
| 8 | 4.3k Issues | 报告-v1.0 | P2 | ✅ 已验证 | GitHub 仓库页面显示 "Issues 4.3k" | 无需修正 |

### 证伪总结

- **P1 声明验证**：4 个 P1 声明中，3 个已验证通过，1 个待确认（Stars 数量）
- **P2 声明验证**：4 个 P2 声明全部验证通过
- **发现的问题**：
  1. GitHub Stars 数量第三方报道不一致（20.9万~38万），无法从 GitHub 页面直接获取精确值，已添加置信度标注
- **修正的声明**：1 处（Stars 数量）
