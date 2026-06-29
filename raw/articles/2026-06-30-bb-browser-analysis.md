---
source_id: auto-2026-06-30-bb-browser-analysis
title: AI 浏览器自动化神器 bb-browser：从打开网页到数据提取全闭环
url: http://m.toutiao.com/group/7640654970894828073/
source_type: tech_blog
tier: 2
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-06-30
collected_by: auto_research
confidence: medium
---

# AI 浏览器自动化神器 bb-browser 分析

## 核心能力

bb-browser 提供 12 大核心能力模块：

| 能力模块 | 对应工具 | 实战演示效果 |
|----------|----------|--------------|
| 打开网页 | browser_open | 快速打开目标页面 |
| 页面快照 | browser_snapshot | 获取页面所有可交互元素 + ref 编号 |
| 填写表单 | browser_fill | 自动输入文本 |
| 点击交互 | browser_click | 模拟真人点击 |
| 执行 JS | browser_eval | 直接运行 JS 代码提取数据 |
| 网络监控 | browser_network | 捕获请求的 URL/Headers/状态码 |
| 获取页面属性 | browser_get | 快速读取 URL、标题 |
| 页面截图 | browser_screenshot | 截取页面状态 |
| 多标签页管理 | browser_tab_* | 新建/切换/关闭标签页 |
| 滚动/等待控制 | browser_scroll / browser_wait | 自动翻页、等待懒加载 |
| 对话框处理 | browser_dialog | 自动处理 alert/confirm 弹窗 |
| Site 适配器 | site_run / site_list | 特定网站结构化抓取 |

## 实战场景

1. **搜索引擎批量查询 + 结果提取**
2. **自动表单填写**
3. **动态网页数据抓取** (JS 渲染页面)
4. **API/网络请求调试**
5. **特定网站一键抓取**

## 对比优势

vs Selenium/Playwright：
- 对 AI 友好：作为 MCP 工具，大模型能直接调用
- 全流程闭环：从打开页面到数据提取一套搞定
- 上手门槛低：AI 帮你写指令

## 与 browser-use 的区别

- browser-use：创建新的浏览器实例，需要重新登录
- bb-browser：使用已有浏览器的登录态
