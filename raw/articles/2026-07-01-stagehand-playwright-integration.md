---
source_id: auto-2026-07-01-c9e1
title: Playwright + AI = Stagehand：技术架构与实现原理深度分析
url: http://m.toutiao.com/group/7600424185453625856/
source_type: tech_blog
tier: 2
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-07-01
collected_by: auto_research
confidence: medium
---

# Playwright + AI = Stagehand：技术架构与实现原理深度分析

## Stagehand 的定位

**Stagehand 不是 Playwright 的替代品。它是 Playwright 的增强功能。**

在他们的网站上，他们定位为：
> "我们构建了一个更容易使用、让 AI 可靠地在网络上读写的 OSS Playwright 替代品。"

但我认为将它们一起使用可以获得更多价值。Playwright 拥有巨大的生态系统和广泛的功能。我不认为只是把它扔掉是值得的，当两个工具可以一起使用时。

## 三个 AI 功能：Act、Extract、Observe

Stagehand 给你三种核心的 AI 驱动方法。每种都有不同的用途，了解何时使用每一种是从库中获得最大收益的关键。

### 1. Act："只需做这件事"

act() 是主力。你用自然语言描述你想发生什么，Stagehand 会弄清楚如何做到。

**传统 Playwright：**
```javascript
// 希望这个选择器不会改变...
await page.click('button[data-testid="submit-form"]');
// 或者更糟，当没有好的选择器时
await page.click('xpath=//button[contains(@class, "primary") and contains(text(), "Submit")]');
```

**Stagehand：**
```javascript
// 即使按钮的类、ID 或文本略有变化，这也有效
await stagehand.act("click the submit button");
```

魔法在于韧性。如果前端团队将按钮从"Submit"更改为"Send"或"Confirm"，你的测试不会中断。AI 理解意图，而不仅仅是 DOM 结构。

### 2. Extract："提取数据"

当你需要从页面获取结构化数据时，extract() 就是用于此目的的。与其编写复杂的选择器来抓取文本，你可以用简单的英语描述你想要什么。

**传统 Playwright：**
```javascript
// 脆弱，当结构改变时会中断
const productName = await page.locator('.product-card h2.title').textContent();
const productPrice = await page.locator('.product-card .price-tag span').textContent();
const inStock = await page.locator('.product-card .availability').textContent();
```

**Stagehand：**
```javascript
const productInfo = await stagehand.extract(
  "Extract the product name, price, and availability status",
  z.object({
    name: z.string(),
    price: z.string(),
    inStock: z.boolean(),
  }),
);
console.log(productInfo);
// { name: "Wireless Mouse", price: "$29.99", inStock: true }
```

Zod 模式集成特别好。你获得类型安全的提取和内置的验证。如果 AI 找不到你要找的东西，你会得到一个结构化错误，而不是静默失败。

### 3. Observe："我在这里能做什么？"

observe() 是概念上最有趣的一个。它告诉你当前页面上可以执行哪些操作。这对于需要动态导航的构建代理非常有用。

```javascript
const actions = await stagehand.observe();
console.log(actions);
// [
//   { action: "click the login button", selector: "#login-btn" },
//   { action: "enter text in the search field", selector: "input[name='q']" },
//   { action: "click the shopping cart icon", selector: ".cart-icon" },
//   ...
// ]
```

这就是 Stagehand 开始感觉不太像测试工具，而更像 AI 代理基础的地方。你可以构建系统来探索、适应并与任何网站交互，而无需事先了解其结构。

## 自愈：重要的区别因素

这是向我推销的功能。Stagehand 缓存其 AI 决策，因此第二次运行相同的操作时，它很快。但这里它变得聪明：如果缓存的选择器中断，Stagehand 会自动重新查询 AI 以找到新的正确元素。

这就是自愈操作。你的测试在不需你动手的情况下对 UI 变化变得有韧性。

**将此与传统 Playwright 进行比较：**

传统流程：
- 测试失败 - CI 变红
- 你收到页面（或更糟，几小时后才发现有什么中断）
- 你调查是什么中断了
- 你更新选择器
- 你推送修复
- 你再次等待 CI

**使用 Stagehand：**
步骤 1 变为"测试自愈并通过"——不需要人为干预来进行外观更改。

## 代理模式：实验性部分

Stagehand 还包括一个 agent() 方法，尝试自主完成复杂目标。你给它一个高层目标，它链接 observe → act → observe → act 直到成功。

**诚实评估：**
- **非常适合**：探索性测试、演示、原型流程
- **还没有准备好用于**：需要可预测时间和成本的生产 CI 流水线
- **正在改进**：每个 Stagehand 发布都提高代理可靠性

值得注意的是，Stagehand 支持计算机使用模型，这是一个很大的区别。

## 100% Playwright 兼容性

这值得拥有自己的部分，因为它对实际采用至关重要。

Stagehand 给你直接访问底层 Playwright page 对象。

```javascript
import { Stagehand } from "@browserbasehq/stagehand";
import { chromium } from "playwright-core";
import { z } from "zod/v3";

async function main() {
  // 初始化 Stagehand
  const stagehand = new Stagehand({
    env: "BROWSERBASE",
    model: "openai/gpt-5",
    verbose: 1,
  });

  await stagehand.init();
  console.log("Stagehand initialized");

  // 将 Playwright 连接到 Stagehand 的浏览器
  const browser = await chromium.connectOverCDP({
    wsEndpoint: stagehand.connectURL(),
  });

  const pwContext = browser.contexts()[0];
  const pwPage = pwContext.pages()[0];

  // 导航和交互
  await pwPage.goto("https://example.com");

  // 使用 Stagehand 的 AI 方法
  const actions = await stagehand.observe("find the main heading", {
    page: pwPage,
  });

  console.log("Found actions:", actions);

  // 提取数据
  const heading = await stagehand.extract(
    "extract the main heading text",
    z.object({ heading: z.string() }),
    { page: pwPage }
  );

  console.log("Heading:", heading);

  // 清理
  await stagehand.close();
}

main();
```

这种互操作性意味着你可以：

1. 从你现有的 Playwright 测试套件开始 - 逐渐为脆弱的部分添加 Stagehand
2. 在有意义的地方保留精确的 Playwright 控制
3. 永远不会被锁定在一种方法中

你不会重写任何东西。你只是选择性地增强。

## 底线

我会用 Stagehand 重写我的所有测试吗？不会。每当我编写一个我知道会在两周内中断的选择器时，我会每次都使用它吗？绝对会。

最好的部分是没有承诺。在一个脆弱的测试上尝试它。看看它是否有帮助。如果有帮助，就更多地使用它。如果它不适合你的工作流程，你没有丢失任何东西——你的 Playwright 代码仍然在那里，未受影响。

这就是我喜欢发现的那种低风险、高潜力的工具。