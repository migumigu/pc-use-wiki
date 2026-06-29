# browser-use GitHub README

> 来源：https://github.com/browser-use/browser-use
> 优先级：Tier 1（官方）
> 收集日期：2026-06-27
> 控制对象分类：浏览器控制
> 技术层级：工具实现层

## 基本信息

- **GitHub Stars**: 95,000+（截至2026年6月）
- **版本**: v0.12.6（2026-04-02发布）
- **许可证**: MIT
- **仓库**: https://github.com/browser-use/browser-use
- **定位**: AI Agent 的浏览器操作层

## 核心功能

### 人类快速开始

```bash
# 1. 创建环境并安装
uv init && uv add browser-use && uv sync
# uvx browser-use install # 如果没有安装Chromium

# 2. 获取API密钥（可选）
# 从 cloud.browser-use.com 获取

# 3. 运行第一个Agent
from browser_use import Agent, Browser, ChatBrowserUse
import asyncio

async def main():
    browser = Browser(
        # use_cloud=True, # 使用Browser Use Cloud的隐身浏览器
    )
    agent = Agent(
        task="Find the number of stars of the browser-use repo",
        llm=ChatBrowserUse(),
        browser=browser,
    )
    await agent.run()

asyncio.run(main())
```

### 支持的LLM

- ChatBrowserUse() - 专门优化的模型
- ChatGoogle() - Gemini系列
- ChatAnthropic() - Claude系列
- 本地模型 - 通过Ollama支持

### 开源 vs 云服务

**使用开源Agent**：
- 需要自定义工具或深度代码集成
- 建议配合 Browser Use Cloud 使用以获得更好的隐身性、代理轮换和扩展性
- 或完全自托管

**使用云端托管Agent**：
- 更强大的Agent处理复杂任务
- 最简单的启动和扩展方式
- 最佳隐身性（代理轮换、CAPTCHA解决）
- 1000+集成（Gmail、Slack、Notion等）
- 持久文件系统和内存

## 技术架构

### 底层依赖

- **Playwright/Puppeteer**: 浏览器自动化引擎
- **LLM**: 大语言模型（理解自然语言指令）
- **Python >= 3.11**: 运行环境

### Agent工作流程

1. 用户提供自然语言任务描述
2. LLM理解任务意图
3. Agent将自然语言翻译成浏览器操作指令
4. 通过Playwright/Puppeteer执行浏览器操作
5. 评估执行结果，决定下一步操作
6. 循环直到任务完成

### CLI工具

```bash
browser-use open https://example.com  # 导航到URL
browser-use state                      # 查看可点击元素
browser-use click 5                   # 按索引点击元素
browser-use type "Hello"               # 输入文本
browser-use screenshot page.png        # 截图
browser-use close                      # 关闭浏览器
```

### 自定义工具

```python
from browser_use import Tools

tools = Tools()

@tools.action(description='Description of what this tool does.')
def custom_tool(param: str) -> str:
    return f"Result: {param}"

agent = Agent(
    task="Your task",
    llm=llm,
    browser=browser,
    tools=tools,
)
```

## 常见问题

### 最佳模型选择

推荐使用 `ChatBrowserUse()`，经过专门优化，在浏览器自动化任务上平均比其他模型快3-5倍，准确率SOTA。

### 免费使用

是的，Browser-Use是开源且免费的。只需选择LLM提供商（如OpenAI、Google、ChatBrowserUse，或使用Ollama运行本地模型）。

### 认证处理

- 使用真实浏览器配置文件：复用已有Chrome配置文件（包含保存的登录）
- 云端认证同步：通过脚本同步认证配置文件

### CAPTCHA处理

需要更好的浏览器指纹和代理。使用 Browser Use Cloud，它提供专门设计用于避免检测和CAPTCHA挑战的隐身浏览器。

### 生产环境

Chrome可能消耗大量内存，并行运行多个Agent可能难以管理。

生产环境建议使用 Browser Use Cloud API，它提供：
- 可扩展的浏览器基础设施
- 内存管理
- 代理轮换
- 隐身浏览器指纹
- 高性能并行执行

## 使用场景示例

### 表单填写

任务 = "用我的简历和信息填写这份工作申请。"

### 购物

任务 = "把这些商品加入我的Instacart购物车。"

### 个人助手

任务 = "帮我找到组装自定义PC的配件。"

### PC零件比价

任务 = "帮我比较PC零件价格。"

## 与其他工具的关系

### Playwright

- Playwright是底层浏览器自动化引擎
- browser-use在Playwright之上添加了LLM理解层
- 用户不需要编写Playwright代码，只需自然语言指令

### Claude Code Skill

为 Claude Code 安装skill以启用AI辅助浏览器自动化：

```bash
mkdir -p ~/.claude/skills/browser-use
curl -o ~/.claude/skills/browser-use/SKILL.md \
 https://raw.githubusercontent.com/browser-use/browser-use/main/skills/browser-use/SKILL.md
```

## 未来发展方向

- 更多集成（Gmail、Slack、Notion等1000+）
- 更强大的隐身能力
- CAPTCHAs自动解决
- 生产级扩展性解决方案