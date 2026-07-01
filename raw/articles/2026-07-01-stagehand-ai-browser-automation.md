---
source_id: auto-2026-07-01-a3f2
title: Stagehand：浏览器自动化的新革命，AI与代码的完美结合
url: https://m.sohu.com/a/984882107_121956424/
source_type: tech_blog
tier: 2
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-07-01
collected_by: auto_research
confidence: medium
---

# Stagehand：浏览器自动化的新革命，AI与代码的完美结合！

## 背景

在现代软件开发中，自动化测试和爬虫开发的需求日益增加。然而，随着网页结构的不断变化，开发者面临着前所未有的挑战。一个简单的div类名变更或按钮位置的调整，可能会导致整个脚本的崩溃，令开发者感到束手无策。

传统的自动化工具在此背景下显得捉襟见肘。与此同时，纯AI驱动的自动化方案又常常因为错误的点击或判断失误而导致生产事故。因此，亟需一种新型工具，能够兼具代码的精确性与AI的模糊理解能力。

最近，一款名为Stagehand的开源工具在GitHub上崭露头角，迅速吸引了超过20K的Star，成为自动化测试人员的新宠。

## Stagehand的核心理念

Stagehand是一个"AI与代码混合控制"的浏览器自动化框架，它的核心理念在于：在确定的情况下用代码控制，而在不确定的情况下交给AI处理。

这种设计思路正好应对了现代自动化测试中的不确定性问题，比如：
- 复杂的页面结构
- 混乱的元素命名
- 频繁的DOM变化
- 不同用户账号下页面的差异等

## Stagehand的核心能力

Stagehand通过三个直观的方法，简化了复杂的浏览器操作。这种API设计符合人类的直觉，能够覆盖90%的自动化需求。

### 1. page.act - 动作执行

使用Stagehand，开发者无需再为选择器而烦恼。

**传统方式：**
```javascript
await page.click('#login-btn-v2');
```

**Stagehand方式：**
```javascript
await page.act('Click the login button');
```

Stagehand会在底层分析当前页面的DOM快照，借助大型语言模型（LLM）识别出最符合"登录按钮"描述的元素，确保操作的准确性。此外，开发者可以预览AI即将执行的动作，确保无误后再执行，从而有效避免了AI的"乱点"问题。

### 2. page.extract - 数据提取

数据提取是爬虫开发中的一项关键功能。Stagehand允许开发者定义数据结构，然后直接将其交给AI处理。

```javascript
const schema = z.object({
  productName: z.string(),
  price: z.number(),
  rating: z.number(),
});

const data = await page.extract({
  instruction: 'Extract the main product details',
  schema: schema
});
```

无论网页的布局如何变化，AI都能理解并提取出干净的JSON数据，极大地简化了数据抓取的过程。

### 3. page.observe - 观察与推理

Stagehand的observe功能允许脚本"看"一眼当前页面，然后决定下一步的操作。

```javascript
const elements = await page.observe('Find all links related to Help Center');
```

这种灵活性使得Stagehand在处理动态变化的页面时更具优势。

## 自愈机制与操作缓存

Stagehand内置了自愈机制，当网站改版导致自动化失败时，它会自动检测失败原因，并重新调用AI找到新路径，修复后继续执行。这一功能解决了传统自动化"页面一改全崩"的问题。

此外，Stagehand还具备操作缓存功能，对重复操作进行自动缓存，从而提升执行效率和稳定性。

## 如何快速上手Stagehand

使用Stagehand非常简单，仅需一行代码即可开始：

```bash
npx create-browser-app
```

通过Stagehand的CDP引擎，开发者可以轻松实现各种自动化任务。以下是一些使用示例：

```javascript
const page = stagehand.context.pages[0];
await page.goto('https://github.com/browserbase');
await stagehand.act('click on the stagehand repo');

const agent = stagehand.agent;
await agent.execute('Get to the latest PR');

const { author, title } = await stagehand.extract(
  'extract the author and title of the PR',
  z.object({
    author: z.string().describe('The username of the PR author'),
    title: z.string().describe('The title of the PR'),
  })
);
```

## 适用人群

Stagehand尤其适合以下人群：

- 曾经使用Playwright或Selenium，但被高维护成本折磨的开发者
- 希望AI辅助但不敢完全依赖AI的开发者
- 从事爬虫、RPA或内部自动化工具的工程团队，寻求"能上线、能长期跑"的自动化解决方案

Stagehand无疑是目前浏览器自动化领域最优雅的解决方案之一。它在开发效率和运行成本之间取得了完美平衡。如果你追求的是"AI帮我兜底，而不是接管方向盘"，那么Stagehand值得你认真一看。

## 项目地址

https://github.com/browserbase/stagehand