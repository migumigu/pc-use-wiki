# browser-use 官方文档 - 文档索引

> 来源：https://docs.browser-use.com/
> 优先级：Tier 1（官方）
> 收集日期：2026-06-27
> 控制对象分类：浏览器控制
> 技术层级：工具实现层 + Agent集成层

## 文档结构

### 云服务文档

- **Quick Start**: https://docs.browser-use.com/cloud/quickstart
- **Agent vs Browser**: 两种使用方式的对比
- **Vibecoding提示**: 为开发者提供的提示
- **Cloud API**: 云端API参考

### 开源文档

- **Introduction**: https://docs.browser-use.com/open-source/introduction
- **Human Quickstart**: 人类快速开始
- **Vibecoding提示**: 完整SDK参考
- **Supported Models**: 支持的模型列表
- **Browser Use CLI**: 命令行工具
- **Browser Use Terminal**: 终端工具

### 自定义文档

- **Agent**: Agent配置和扩展
- **Browser**: 浏览器配置
- **Tools**: 自定义工具开发
- **Integration**: 集成方式

### LLMs优化文档

- **LLMs Full**: https://docs.browser-use.com/llms-full.txt
- **LLMs Index**: https://docs.browser-use.com/llms.txt

## Agent vs Browser 对比

| 特性 | Agent | Browser |
|------|-------|---------|
| **方法** | sessions.create() / run() | browsers.create() |
| **功能** | AI agent运行任务 | 原始浏览器通过CDP控制 |
| task参数 | ✓ | — |
| model参数 | ✓ | — |
| proxy | ✓ | ✓ |
| custom_proxy | ✓ | ✓ |
| profile_id | ✓ | ✓ |
| recording | ✓ | ✓ |
| workspace_id | ✓ | — |
| keep_alive | ✓ | — |
| screen_size | — | ✓ |
| timeout | — | ✓ |

## 安装方式

### Python SDK

```bash
pip install browser-use-sdk
```

### uv包管理器

```bash
uv init && uv add browser-use && uv sync
```

## SDK使用示例

### Python

```python
from browser_use_sdk.v3 import AsyncBrowserUse

async def main():
    client = AsyncBrowserUse()
    result = await client.run("List the top 20 posts on Hacker News today with their points")
    print(result.output)

asyncio.run(main())
```

### 环境变量

```bash
export BROWSER_USE_API_KEY=your_key
```

## 关键概念

### 1. Agent模式

- 使用AI Agent自动完成复杂任务
- 需要提供task描述和model
- 支持自定义工具扩展

### 2. Browser模式

- 原始CDP协议控制
- 更底层，更灵活
- 适合简单自动化任务

### 3. 隐身能力

- 云端提供隐身浏览器
- 代理轮换
- CAPTCHA解决

### 4. 自定义工具

- 通过@tools.action装饰器定义
- 返回ActionResult类型
- 自动注册到Agent工具集

### 5. MCP集成

- 支持Model Context Protocol
- 可作为MCP Server使用
- 与其他Agent系统集成