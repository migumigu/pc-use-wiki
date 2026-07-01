---
tags: [实体, CUA, Google官方]
created: 2026-07-01
updated: 2026-07-01
sources: [2026-07-01-computer-use-preview-readme]
---

# Computer-Use-Preview

> Google官方Gemini CUA实现项目，三层架构（模型层/Agent层/环境层），双后端（Playwright本地 + Browserbase云端），坐标归一化设计

## 简介

Computer-Use-Preview是Google DeepMind于2025年10月开源的Gemini CUA实现项目，基于Gemini 2.5 Computer Use模型构建，提供完整的浏览器自动化Agent框架，支持自然语言驱动的GUI交互操作。

## 关键信息

- **类型**：开源框架
- **领域**：CUA、浏览器自动化
- **开发者**：Google DeepMind（官方）
- **GitHub**：https://github.com/google/computer-use-preview
- **模型**：Gemini 2.5 Computer Use

## 详细内容

### 三层架构

1. **模型层**：Gemini 2.5 Computer Use，通过`computer_use`工具暴露能力
2. **Agent层**：BrowserAgent，编排模型调用与浏览器操作
   - 坐标归一化系统（[0, 1000] → 实际屏幕坐标）
   - 截图管理策略（仅保留最近3轮）
   - 安全确认机制
3. **环境层**：Computer抽象接口
   - PlaywrightComputer（本地）
   - BrowserbaseComputer（云端）

### 关键设计

- **坐标归一化**：模型输出[0, 1000]范围，Agent通过denormalize_x/y转换为实际屏幕坐标
- **截图管理**：MAX_RECENT_TURN_WITH_SCREENSHOTS = 3
- **安全机制**：内置safety service + 用户确认机制

### 与Anthropic对比

| 维度 | Google | Anthropic |
|------|--------|-----------|
| 官方框架 | ✅ 完整开源 | ❌ API + 示例 |
| 后端支持 | Playwright + Browserbase | 第三方生态 |
| 坐标系统 | 归一化[0, 1000] | 屏幕像素 |
| 安全机制 | safety service | system prompt |

## 相关页面

- [[浏览器控制]]
- [[Computer-Use]]
- [[OpenCUA]]
- [[Playwright]]