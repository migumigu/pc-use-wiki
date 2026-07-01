---
report_id: 2026-07-01-real-browser-mcp-v1.0
title: real-browser-mcp 技术分析报告 v1.0
created_date: 2026-07-01
source_count: 5
---

# real-browser-mcp 技术分析报告 v1.0

## 1. 执行摘要

**real-browser-mcp** 是一个创新的 MCP (Model Context Protocol) 服务器，由 Ofer Shapira 开发，核心价值在于让 AI 助手能够**直接操作用户已有的真实浏览器实例**，而非启动新的无头浏览器。该项目的核心理念是"Your agent can now see your REAL browser"，解决了传统浏览器自动化工具无法复用用户登录态、会话状态的痛点。

**关键特点**：
- 通过 Chrome Extension + MCP Server 架构，连接用户日常使用的 Chrome 浏览器
- 天然携带登录态、cookies、本地存储，无需重新认证
- 提供 18 个 MCP 工具，覆盖页面感知、交互操作、导航控制、调试诊断四大类别
- 完全本地化运行，数据不离开用户机器，隐私性强
- 支持 Cursor、Claude Desktop、Windsurf 等所有 MCP 兼容客户端

**项目状态**（截至 2026-07-01）：
- GitHub: https://github.com/ofershap/real-browser-mcp
- 48 commits，持续维护（最新提交：2026-06-22）
- 提供 Chrome Web Store 扩展，一键安装

## 2. 技术全景（MCP工具列表）

real-browser-mcp 提供 **18 个 MCP 工具**，按功能分为四大类别：

### 2.1 页面感知工具（See）

| 工具名 | 功能描述 |
|--------|----------|
| `browser_snapshot` | 获取可访问性树（accessibility tree）快照，返回结构化页面内容。默认紧凑模式仅返回可交互元素，带元素引用 ID |
| `browser_screenshot` | 捕获当前屏幕渲染状态（含视频当前帧） |
| `browser_text` | 提取页面或特定元素的原始文本内容 |
| `browser_find` | 通过 CSS 选择器查询页面元素 |

**技术亮点**：
- 使用 Chrome DevTools Protocol 获取 accessibility tree，而非截图或视觉识别
- 结构化数据对 LLM 友好，节省 token 消耗
- 快照中的元素带 ref ID，Agent 可直接用于后续操作

### 2.2 交互操作工具（Interact）

| 工具名 | 功能描述 |
|--------|----------|
| `browser_click` | 通过 ref ID 或 CSS 选择器点击元素 |
| `browser_click_text` | **创新工具**：通过可见文本直接点击，穿透 React portals 和 overlay 层 |
| `browser_type` | 向输入框或 contenteditable 元素输入文本 |
| `browser_press_key` | 发送组合键（Enter、Escape、Ctrl+A 等） |
| `browser_scroll` | 滚动页面或虚拟容器，触发懒加载 |
| `browser_hover` | 触发 tooltip、下拉菜单等悬停效果 |
| `browser_select` | 操作原生 `<select>` 下拉菜单 |
| `browser_wait` | 等待元素出现或消失 |

**技术亮点**：
- `browser_click_text` 解决了传统 CSS 选择器难以定位动态内容的问题
- 支持虚拟容器滚动，适应现代 SPA 应用的懒加载机制

### 2.3 导航控制工具（Navigate）

| 工具名 | 功能描述 |
|--------|----------|
| `browser_navigate` | 在当前标签页导航到指定 URL |
| `browser_tabs` | 列出、创建、关闭或聚焦标签页 |

**技术亮点**：
- 标签页管理完整，Agent 可自主管理多标签工作流

### 2.4 调试诊断工具（Debug）

| 工具名 | 功能描述 |
|--------|----------|
| `browser_console` | 获取控制台输出（log、warn、error） |
| `browser_network` | 监控 XHR/fetch 请求及状态码 |
| `browser_evaluate` | 通过 CDP 执行任意 JavaScript（v1.2.0 新增，修复 CSP 问题） |
| `browser_handle_dialog` | 处理 alert/confirm/prompt 对话框 |

**技术亮点**：
- 完整的 DevTools 能力暴露，Agent 可自诊断网页错误
- `browser_evaluate` 支持绕过 CSP 限制，执行复杂 DOM 操作

### 2.5 新增高级工具（v1.3.0）

| 工具名 | 功能描述 |
|--------|----------|
| `browser_upload_file` | 文件上传，直接设置 file input 的本地路径 |
| `browser_drag` | 拖拽操作 |
| `browser_fill_form` | 表单批量填充 |
| `browser_run_action` | 执行预定义操作序列 |

## 3. 能力分析

### 3.1 核心能力优势

#### (1) 会话状态复用 - **最大差异化优势**

传统浏览器自动化工具（Playwright、Puppeteer）启动全新浏览器实例，需要重新登录、重新构建会话状态。real-browser-mcp 直接连接用户日常 Chrome：

- **登录态天然保留**：用户已登录的网站（GitHub、Google、企业 SSO）无需重新认证
- **Cookies/LocalStorage 完整继承**：包括复杂的多步登录流程、OAuth token
- **浏览器扩展可用**：用户安装的扩展（密码管理器、广告拦截等）在自动化过程中生效

**实际价值**：Agent 可以直接操作企业内部系统、付费订阅网站，无需用户提供认证信息或手动登录。

#### (2) 真实渲染环境

- **完整 CSS/JS 执行**：用户浏览器真实渲染，包括自定义字体、浏览器扩展注入的样式
- **真实网络条件**：用户本地网络环境，而非模拟的测试环境
- **真实设备特性**：屏幕分辨率、触摸支持、GPU 能力等用户实际硬件特性

#### (3) 低门槛配置

- **一键安装扩展**：Chrome Web Store 直接安装，无需开发者模式
- **MCP 配置简单**：Cursor 一键配置，其他客户端仅需添加 npx 命令
- **无需技术背景**：非开发者用户也能完成配置

#### (4) 本地化隐私保护

- **WebSocket 本地通信**：MCP Server 与 Extension 通过 localhost WebSocket 通信
- **无云端组件**：无 telemetry、无 analytics、无第三方服务
- **数据不离开浏览器**：所有操作在用户机器本地完成

### 3.2 能力边界与限制

#### (1) Chrome 依赖

- **仅支持 Chrome/Chromium**：不支持 Firefox、Safari、Edge（非 Chromium 版）
- **Extension 依赖**：必须安装 Chrome Extension，无法用于无扩展环境

#### (2) 用户浏览器状态暴露

- **隐私风险**：Agent 可访问用户所有已登录网站，存在敏感信息暴露风险
- **操作不可逆**：Agent 可能修改用户浏览器状态（cookies、localStorage）

#### (3) 并发限制

- **单用户单浏览器**：默认配置下，一个 MCP Server 连接一个 Chrome 实例
- **多 profile 需额外配置**：不同 Chrome profile 需启动多个 MCP Server 实例（不同 WebSocket 端口）

#### (4) 无隔离模式

- **无 headless 模式**：必须用户 Chrome 实例在线，无法后台运行
- **无 isolated context**：不像 Playwright 可创建隔离浏览器上下文

### 3.3 技术架构解析

```
real-browser-mcp/
├── mcp-server/           # MCP 服务器 (npm 包，TypeScript)
│   └── src/tools/        # 每个工具一个文件，注册表模式
├── extension/            # Chrome Extension (Manifest V3，纯 JS)
│   ├── background.js     # Service Worker，WebSocket 客户端，工具处理器
│   ├── content.js        # Console 捕获注入
│   └── popup/            # 连接状态 UI
├── agent-config/         # Cursor + Claude Code 预构建配置
│   ├── cursor/           # Rules 和 commands
│   └── setup.mjs         # 一键安装脚本
└── tests/                # Bridge + registry 测试
```

**通信流程**：
1. MCP Server 启动 WebSocket Server (默认端口 7225)
2. Chrome Extension 连接 WebSocket，等待工具调用
3. MCP Client (Claude/Cursor) 发送工具调用请求
4. MCP Server 通过 WebSocket 转发给 Extension
5. Extension 执行操作（通过 Chrome DevTools Protocol 或 DOM API）
6. Extension 返回结果给 MCP Server
7. MCP Server 返回给 MCP Client

**技术栈**：
- TypeScript (strict mode)
- MCP SDK (@modelcontextprotocol/sdk)
- WebSocket (原生 Node.js WebSocket)
- Chrome Extension Manifest V3
- Vitest 测试框架

## 4. 与 chrome-devtools-mcp / Playwright MCP 对比

### 4.1 三方定位对比表

| 维度 | real-browser-mcp | chrome-devtools-mcp (Google) | playwright-mcp (Microsoft) |
|------|-------------------|------------------------------|---------------------------|
| **开发者** | Ofer Shapira (个人) | Chrome DevTools 团队 (Google 官方) | Microsoft (官方) |
| **核心理念** | "See your REAL browser" | "Agent 是第一公民" | "结构化可访问性树" |
| **浏览器实例** | **用户已有 Chrome** | 启动新 Chrome (可连接已有) | 启动新 Playwright 浏览器 |
| **会话状态** | **天然继承用户登录态** | 需手动配置持久化 profile | 需手动配置 user-data-dir |
| **工具数量** | 18 个 | 44 个 (含 --slim 模式 3 个) | 约 10+ 个 |
| **页面感知** | Accessibility tree + screenshot | Accessibility tree + DevTools 全能力 | **仅 Accessibility tree** |
| **性能分析** | ❌ 无 | ✅ 完整 trace + CrUX API 集成 | ❌ 无 |
| **网络调试** | ✅ XHR/fetch 监控 | ✅ 完整 DevTools Network 面板 | ❌ 无 |
| **内存分析** | ❌ 无 | ✅ Memory 快照 + heap 分析 | ❌ 无 |
| **扩展管理** | ✅ 用户扩展天然可用 | ✅ DevTools Extension 管理 | ❌ 无 |
| **跨浏览器** | ❌ 仅 Chrome | ❌ 仅 Chrome | ✅ Chromium + Firefox + WebKit |
| **Headless 支持** | ❌ 必须用户 Chrome 在线 | ✅ 原生支持 --headless | ✅ 原生支持 |
| **隔离模式** | ❌ 无 | ✅ --isolated 临时 user data dir | ✅ isolated contexts |
| **企业 SSO** | ✅ 天然穿透 | ❌ 需手动登录流程 | ❌ 需手动登录流程 |
| **隐私保护** | ✅ 完全本地化 | ✅ 完全本地化 | ✅ 完全本地化 |
| **配置门槛** | ⭐⭐⭐⭐⭐ 最低 (Extension + npx) | ⭐⭐⭐ (需 Chrome remote debugging) | ⭐⭐⭐⭐ (npx 即可) |
| **Star 数量** | 较少 (<1k) | 38,866 (2025-09 发布) | 约 20k |
| **成熟度** | v1.3.0，持续迭代 | Google 官方，高频更新 | Microsoft 官方，稳定 |

### 4.2 差异化场景分析

#### real-browser-mcp 独占优势场景

**场景 1：企业内部系统自动化**
- Agent 需操作企业 SSO 保护的内部工具（Jira、Confluence、内部 Dashboard）
- 用户已登录，Agent 直接复用登录态，无需用户提供凭证
- **对比**：chrome-devtools-mcp / playwright-mcp 需手动模拟登录流程，存在凭证暴露风险

**场景 2：付费订阅网站操作**
- 用户订阅的付费内容网站（付费期刊、付费课程平台）
- Agent 可直接访问付费内容，无需用户提供订阅凭证
- **对比**：其他方案需用户提供订阅账号，存在隐私风险

**场景 3：用户个性化环境操作**
- 依赖用户浏览器扩展的场景（密码管理器自动填充、广告拦截器清理页面）
- Agent 可利用用户已有的扩展生态
- **对比**：其他方案在隔离环境中运行，无扩展支持

**场景 4：快速验证开发成果**
- 开发者修复 bug 后，让 Agent 在真实浏览器中验证
- Agent 可直接看到开发者日常看到的真实渲染效果
- **对比**：其他方案需重新启动浏览器、重新构建测试环境

#### chrome-devtools-mcp 独占优势场景

**场景 1：性能瓶颈诊断**
- Agent 自动录制 DevTools trace，分析 LCP、FID、CLS
- 集成 CrUX API，对比真实用户性能数据
- **对比**：real-browser-mcp 无性能工具，playwright-mcp 无性能工具

**场景 2：内存泄漏排查**
- Agent 自动拍 Memory 快照，分析 Detached DOM 节点、意外闭包引用
- **对比**：real-browser-mcp 无内存工具，playwright-mcp 无内存工具

**场景 3：Agent 驱动 E2E 测试**
- 测试失败时，Agent 自检 console error、network request，自主给出失败原因
- **对比**：real-browser-mcp 有基础 console/network 工具，但不如 chrome-devtools-mcp 全面

#### playwright-mcp 独占优势场景

**场景 1：跨浏览器兼容性测试**
- 同一套工具调用，测试 Chromium、Firefox、WebKit 三种引擎
- **对比**：real-browser-mcp 仅 Chrome，chrome-devtools-mcp 仅 Chrome

**场景 2：CI/CD 自动化测试**
- Headless 模式运行，无显示环境依赖
- Isolated contexts，每个测试独立干净环境
- **对比**：real-browser-mcp 无 headless，需用户 Chrome 在线

**场景 3：确定性自动化脚本**
- 已知操作序列的确定性脚本（如每日定时爬虫）
- 无需 Agent 决策，仅需执行预定义操作
- **对比**：real-browser-mcp / chrome-devtools-mcp 设计理念更偏向 Agent 自主决策

### 4.3 组合使用建议

**组合策略 1：real-browser-mcp + chrome-devtools-mcp**
- real-browser-mcp 处理登录态穿透、日常操作验证
- chrome-devtools-mcp 处理性能诊断、深度调试
- **适用团队**：前端团队，需频繁调试真实用户环境性能问题

**组合策略 2：real-browser-mcp (日常) + playwright-mcp (CI)**
- 开发阶段用 real-browser-mcp 快速验证真实浏览器效果
- CI/CD 用 playwright-mcp 自动化测试
- **适用团队**：有完整 CI 流程的团队

**组合策略 3：单一选择**
- 仅需企业 SSO 穿透 → **real-browser-mcp**
- 需完整 DevTools 能力 → **chrome-devtools-mcp**
- 需跨浏览器/CI → **playwright-mcp**

## 5. 信息来源

### 5.1 主要来源

1. **GitHub README** (官方一手来源)
   - URL: https://github.com/ofershap/real-browser-mcp
   - 内容：项目概述、工具列表、架构说明、配置指南
   - 获取时间：2026-07-01

2. **CSDN 技术博客** (实战分析)
   - 标题：基于MCP协议的AI浏览器自动化：real-browser-mcp项目实战指南
   - URL: https://blog.csdn.net/weixin_28727943/article/details/161148807
   - 内容：MCP 协议解析、工作流详解、环境搭建步骤
   - 发布时间：2026-05-16

3. **掘金对比文章** (三方对比)
   - 标题：3款浏览器mcp比较: playwright-mcp browser-use chrome-mcp
   - URL: https://juejin.cn/post/7552804183390289966
   - 内容：playwright-mcp、browser-use、chrome-mcp (lxe) 详细对比表
   - 发布时间：2025-09-23

4. **头条技术分析** (chrome-devtools-mcp 对比)
   - 标题：能自己打开浏览器的 mcp ——chrome-devtools-mcp
   - URL: http://m.toutiao.com/group/7638098665130721832/
   - 内容：chrome-devtools-mcp 深度分析、Agent 交互范式解析
   - 发布时间：2025 年（具体日期未标注）

5. **CSDN Playwright MCP 解析** (补充对比)
   - 标题：【亲测免费】 Playwright MCP：浏览器自动化与模型互动的利器
   - URL: https://blog.csdn.net/gitblog_00288/article/details/146531548
   - 内容：Playwright MCP 技术特点、应用场景、使用指南
   - 发布时间：2025-03-26

### 5.2 补充来源（搜索结果）

- WebSearch: "real-browser-mcp MCP server browser automation 2025"
- WebSearch: "chrome-devtools-mcp NekoNeko browser automation MCP"
- WebSearch: "playwright-mcp Microsoft browser automation accessibility tree"

### 5.3 信息完整性评估

- ✅ **核心信息完整**：MCP 工具列表、架构设计、能力边界均已覆盖
- ✅ **对比分析充分**：与 chrome-devtools-mcp、playwright-mcp 的差异化清晰
- ✅ **来源多样性达标**：5 个独立来源（GitHub + 4 篇技术文章）
- ⚠️ **实战案例不足**：缺少具体 Agent 工作流案例（未来可补充）

---

**报告结论**：real-browser-mcp 在"会话状态复用"维度具有独占优势，是企业 SSO 场景、付费内容访问、用户个性化环境操作的最佳选择。chrome-devtools-mcp 在性能诊断、内存分析维度优势明显，适合前端深度调试。playwright-mcp 在跨浏览器、CI/CD 场景优势突出。三者定位差异显著，可组合使用以覆盖完整开发生命周期。