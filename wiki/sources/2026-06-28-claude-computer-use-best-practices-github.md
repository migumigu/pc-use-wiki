---
tags: [Computer-Use, Claude, macOS, best-practices, reference-implementation]
created: 2026-06-28
updated: 2026-06-28
sources: []
---

# Computer and Browser Use with Claude — GitHub Best Practices 仓库

> 一句话摘要：Anthropic官方的macOS Computer Use最佳实践参考实现,强调显式工具定义、正确截图缩放、Prompt caching优化。

## 基本信息

- **来源**：GitHub (https://github.com/anthropics/claude-quickstarts/tree/main/computer-use-best-practices)
- **作者**：Anthropic
- **素材类型**：官方最佳实践仓库
- **控制对象**：桌面应用控制
- **技术层级**：Agent集成层
- **平台**：macOS专用

## 核心观点

<!-- confidence: EXTRACTED -->

1. **参考实现定位**：用于教学而非生产SDK,需阅读理解后根据用例修改。（原文："reference implementation for instructional purposes only"）

2. **macOS专用**：pyautogui backend、sandbox-exec、key handling均为Mac特定。（原文："targets macOS only"）

3. **核心特性**：
   - 显式工具定义(每个tool的name/description/schema完全可读)
   - 正确截图缩放(API reference resize)
   - Batch tools(computer_batch/browser_batch降低延迟和成本)
   - Sandboxed bash/python(sandbox-exec)
   - Trajectory recording(runs/…目录)
   - FastAPI调试面板

4. **性能优化**：
   - Prompt caching(cache_control: ephemeral)
   - Image pruning策略(interval/simple/none)
   - Server-side autocompaction(150k tokens触发)

## 关键概念

- [[Explicit Tools]] — 工具定义完全显式,无server-side defaults
- [[Batch Tools]] — 批量工具调用,降低latency和cost
- [[Prompt Caching]] — 缓存control breakpoint优化
- [[Image Pruning]] — 图片历史管理策略
- [[Autocompaction]] — 服务器端上下文压缩
- [[Trajectory Recording]] — 运行轨迹记录(runs/…)
- [[Sandbox-exec]] — macOS沙盒执行
- [[Advisor Tool]] — executor模型咨询advisor模型(实验性)

## 配置机制

<!-- confidence: EXTRACTED -->

### Config dataclass
- 所有可调参数在constants.py的Config类
- TOML文件 + 环境变量覆盖(CU_<FIELD_NAME>)

### Feature toggles
| Field | Default | 说明 |
|-------|---------|------|
| enable_computer_use_tools | true | computer/computer_batch/open_application |
| enable_browser_use_tools | true | browser/browser_batch(Playwright) |
| enable_editor_tool | true | editor(view/create/str_replace/insert) |
| enable_advisor_tool | false | server-side advisor(实验性) |
| enable_autocompaction | true | server-side compact_20260112 |
| image_prune_strategy | "interval" | 图片管理策略 |

## 安全措施

<!-- confidence: EXTRACTED -->

### Caution block警告
- **强烈不建议**在VM外运行(agent有完全鼠标/键盘/屏幕控制)
- 无安全防护:可截图敏感信息、删除数据、操作任意应用
- 推荐用UTM或Parallels运行macOS VM

### macOS权限要求
- Screen Recording权限(截图)
- Accessibility权限(鼠标/键盘控制)
- macOS 15+(Sequoia)需额外"bypass system private window picker"授权

## Provider支持

<!-- confidence: EXTRACTED -->

- Anthropic(first-party)
- Vertex(Google Cloud,AnthropicVertex)
- Bedrock(AWS,AnthropicBedrock)

Vertex/Bedrock有请求体大小限制(Vertex 18MB,Bedrock 11MB),触发强制图片prune。

## 与其他素材的关联

- 与 [[Computer Use Demo]] 形成不同架构对比(Docker vs macOS本地)
- 与 [[Computer Use Best Practices Blog]] 配套阅读
- 与 [[桌面应用控制]] 主题最佳实践

## 原文精彩摘录

> "This repository is a reference implementation: it is meant to be read, understood, and modified for your own use case."

> "Running this agent outside of a virtual machine is strongly discouraged. The agent has full control of your mouse, keyboard, and screen."

> "Prompt caching only helps if the prefix of the request is byte-identical between calls."

## 相关页面

- [[Computer Use]]
- [[Explicit Tools]]
- [[Prompt Caching]]
- [[Image Pruning]]
- [[桌面应用控制]]
- [[macOS]]