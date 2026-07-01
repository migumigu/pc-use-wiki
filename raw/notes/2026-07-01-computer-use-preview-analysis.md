---
report_id: 2026-07-01-computer-use-preview-v1.0
title: Computer-Use-Preview 技术分析报告 v1.0
created_date: 2026-07-01
source_count: 3
---

# Computer-Use-Preview 技术分析报告 v1.0

## 1. 执行摘要

Computer-Use-Preview 是 Google 官方开源的 Gemini CUA（Computer Use Agent）实现项目，基于 Gemini 2.5 Computer Use 模型构建。该项目于 2025 年 10 月发布，提供了完整的浏览器自动化 Agent 框架，支持自然语言驱动的 GUI 交互操作。核心价值在于：

- **官方实现**：Google DeepMind 直接提供，与 Gemini API 深度集成
- **低延迟高性能**：在 Online-Mind2Web 等基准测试中领先，延迟低于竞品
- **双后端架构**：支持本地 Playwright 和云端 Browserbase 两种运行环境
- **安全机制完备**：内置 safety service 和用户确认机制

GitHub 仓库：https://github.com/google/computer-use-preview（44 stars, 7 forks）

## 2. 技术全景（三层架构）

### 2.1 模型层：Gemini 2.5 Computer Use

基于 Gemini 2.5 Pro 的视觉理解和推理能力构建的专业化模型，通过 Gemini API 中新的 `computer_use` 工具暴露核心能力。

**模型调用配置：**
```python
GenerateContentConfig(
    temperature=1,
    top_p=0.95,
    top_k=40,
    max_output_tokens=8192,
    tools=[
        types.Tool(
            computer_use=types.ComputerUse(
                environment=types.Environment.ENVIRONMENT_BROWSER,
                excluded_predefined_functions=[],
            ),
        ),
        types.Tool(function_declarations=custom_functions),
    ],
)
```

**模型工作流程：**
1. 输入：用户请求 + 当前截图 + 最近操作历史
2. 输出：Function Call（UI 操作动作）或推理文本
3. 执行：客户端执行动作，获取新截图和 URL
4. 循环：将执行结果作为 Function Response 返回模型，继续迭代
5. 终止：任务完成、错误或用户/safety 终止

### 2.2 Agent 层：BrowserAgent

核心 Agent 实现位于 `agent.py`，负责编排模型调用与浏览器操作。

**关键设计：**

1. **坐标归一化系统**：
   - 模型输出的坐标在 [0, 1000] 范围内
   - Agent 通过 `denormalize_x/y` 转换为实际屏幕坐标
   ```python
   def denormalize_x(self, x: int) -> int:
       return int(x / 1000 * self._browser_computer.screen_size()[0])
   ```

2. **截图管理策略**：
   - 仅保留最近 3 轮操作的截图（`MAX_RECENT_TURN_WITH_SCREENSHOTS = 3`）
   - 节省 token 消耗，避免上下文膨胀

3. **安全确认机制**：
   - 对高风险操作（购买、敏感操作）要求用户显式确认
   - safety_decision 分为 CONTINUE / TERMINATE

4. **重试机制**：
   - 模型调用失败时指数退避重试（最多 5 次）
   - delay = base_delay_s * (2**attempt)

### 2.3 环境层：Computer 抽象与实现

通过抽象基类 `Computer` 定义统一接口，支持多种浏览器后端。

**Computer 接口核心方法：**
- `open_web_browser()` - 打开浏览器
- `click_at(x, y)` - 点击坐标
- `hover_at(x, y)` - 悬停
- `type_text_at(x, y, text, press_enter, clear_before_typing)` - 在坐标处输入文本
- `scroll_document(direction)` / `scroll_at(x, y, direction, magnitude)` - 滚动
- `navigate(url)` - 导航到 URL
- `go_back()` / `go_forward()` - 浏览器历史导航
- `key_combination(keys)` - 键盘组合键
- `drag_and_drop(x, y, destination_x, destination_y)` - 拖拽
- `wait_5_seconds()` - 等待

**EnvState 数据结构：**
```python
class EnvState(pydantic.BaseModel):
    screenshot: bytes  # PNG 格式截图
    url: str           # 当前页面 URL
```

#### 2.3.1 PlaywrightComputer 实现

本地浏览器控制，基于 Playwright Chromium。

**关键特性：**
- 启动 Chromium 时禁用扩展、文件系统、插件等（安全加固）
- 支持鼠标高亮调试（`--highlight_mouse` 参数）
- 新标签页拦截：强制在同一标签页内导航
- 键盘映射：将通用键名映射到 Playwright 键名
- 截图后额外等待 0.5 秒确保渲染完成

**初始化示例：**
```python
self._browser = self._playwright.chromium.launch(
    args=[
        "--disable-extensions",
        "--disable-file-system",
        "--disable-plugins",
        "--disable-dev-shm-usage",
        "--disable-background-networking",
        "--disable-default-apps",
        "--disable-sync",
    ],
    headless=bool(os.environ.get("PLAYWRIGHT_HEADLESS", False)),
)
```

#### 2.3.2 BrowserbaseComputer 实现

云端浏览器服务，继承自 PlaywrightComputer。

**关键差异：**
- 通过 Browserbase SDK 创建云端 session
- 使用 CDP (Chrome DevTools Protocol) 连接云端浏览器
- 配置指纹和 viewport 参数

**初始化示例：**
```python
self._session = self._browserbase.sessions.create(
    project_id=os.environ["BROWSERBASE_PROJECT_ID"],
    browser_settings={
        "fingerprint": {
            "screen": {
                "maxWidth": 1920,
                "maxHeight": 1080,
                "minWidth": 1024,
                "minHeight": 768,
            },
        },
        "viewport": {
            "width": self._screen_size[0],
            "height": self._screen_size[1],
        },
    },
)
self._browser = self._playwright.chromium.connect_over_cdp(
    self._session.connect_url
)
```

## 3. 能力分析

### 3.1 支持的 UI 操作（预定义函数）

| 操作类别 | 函数名 | 参数 |
|---------|--------|------|
| 浏览器控制 | `open_web_browser` | - |
| 鼠标操作 | `click_at` | x, y |
| | `hover_at` | x, y |
| | `drag_and_drop` | x, y, destination_x, destination_y |
| 键盘输入 | `type_text_at` | x, y, text, press_enter, clear_before_typing |
| | `key_combination` | keys（如 "Control+A"） |
| 滚动 | `scroll_document` | direction (up/down/left/right) |
| | `scroll_at` | x, y, direction, magnitude |
| 导航 | `navigate` | url |
| | `go_back` / `go_forward` | - |
| | `search` | - |
| 等待 | `wait_5_seconds` | - |

### 3.2 性能基准测试

根据 Google 官方博客数据，Gemini 2.5 Computer Use 在多项基准测试中领先：

- **Online-Mind2Web**：在 Browserbase harness 上表现最佳，延迟最低
- **WebAgent 基准**：优于竞品方案
- **Mobile UI 控制**：展现出潜力（尚未完全优化）

**实际应用案例：**
- Poke.com：延迟比竞品快 50%
- Autotab：复杂解析场景性能提升 18%
- Google 支付平台团队：60% 的失败测试自动修复

### 3.3 安全机制

1. **模型内置安全训练**：
   - 防止故意滥用
   - 处理意外模型行为
   - 抵抗 prompt injection 和网页诈骗

2. **Per-step Safety Service**：
   - 推理时外部安全服务
   - 每个动作执行前评估风险
   - 高风险动作需用户确认

3. **System Instructions**：
   - 开发者可指定拒绝或确认规则
   - 针对 CAPTCHA、医疗设备控制等场景

### 3.4 扩展能力

支持自定义函数声明，示例：
```python
def multiply_numbers(x: float, y: float) -> dict:
    """Multiplies two numbers."""
    return {"result": x * y}

custom_functions = [
    types.FunctionDeclaration.from_callable(
        client=self._client, callable=multiply_numbers
    )
]
```

Agent 的 `handle_action` 方法可扩展处理自定义函数。

## 4. 与 Anthropic Computer Use 对比

| 维度 | Google Computer-Use-Preview | Anthropic Computer Use |
|------|------------------------------|------------------------|
| **模型基础** | Gemini 2.5 Computer Use（专业化模型） | Claude 3.5 Sonnet（通用模型增强） |
| **开源程度** | 完整参考实现开源（GitHub） | API + 官方示例，无完整框架 |
| **后端支持** | Playwright（本地） + Browserbase（云端） | 第三方生态（如 browser-use） |
| **坐标系统** | [0, 1000] 归一化坐标 | 屏幕像素坐标 |
| **安全机制** | 内置 safety service + 用户确认 | 主要依赖 system prompt |
| **延迟表现** | 官方宣称最低延迟 | 需实测对比 |
| **应用场景** | 主要优化 Web，Mobile 潜力 | Web + Desktop（如 Nuclino） |
| **生态整合** | Google AI Studio + Vertex AI + Chrome DevTools MCP | Anthropic API + 第三方工具 |

**核心差异：**
- Google 提供完整的框架和双后端支持，降低开发者集成门槛
- Anthropic 更依赖生态自发构建，灵活性更高但整合成本更大
- Google 与 Chrome DevTools MCP 协同，形成浏览器控制完整栈

## 5. 信息来源

1. **GitHub 仓库**：https://github.com/google/computer-use-preview
   - README.md：安装配置指南
   - agent.py：核心 Agent 实现（416 行）
   - computers/computer.py：抽象接口定义
   - computers/playwright/playwright.py：Playwright 实现（377 行）
   - computers/browserbase/browserbase.py：Browserbase 实现

2. **官方博客**：https://blog.google/technology/google-deepmind/gemini-computer-use-model/
   - 发布日期：2025-10-07
   - 工作原理说明
   - 基准测试数据
   - 安全机制介绍
   - 应用案例

3. **技术解读**：https://cloud.tencent.com/developer/article/2589993
   - 项目定位分析
   - 命令行参数说明
   - 部署流程指南

## 6. 技术价值评估

**优势：**
- 官方实现，API 与框架深度集成
- 低延迟，实测性能领先
- 双后端架构，适应不同部署场景
- 安全机制完备，生产可用性高

**局限：**
- 仅支持单标签页操作（新标签页强制合并）
- 桌面 OS 级控制尚未优化
- 截图管理策略可能丢失长任务上下文
- 坐标归一化增加转换复杂度

**适用场景：**
- Web 自动化测试（Firebase Testing Agent 已应用）
- 表单填写、数据录入
- 工作流自动化（需 GUI 交互）
- UI 测试恢复机制（60% 失败自动修复）

**后续研究方向：**
- 与 Chrome DevTools MCP 的协同机制
- Desktop OS 控制的扩展路径
- 多标签页/多窗口支持策略
- 自定义函数的深度集成模式