---
tags: [素材, 技术分析, 浏览器自动化]
created: 2026-06-30
updated: 2026-06-30
sources:
  - raw/articles/2026-06-30-bb-browser-analysis.md
---

# bb-browser 技术分析：12 大核心能力

> AI 浏览器自动化的"天花板级"工具，从打开网页到数据提取全闭环

## 摘要

bb-browser 提供 12 大核心能力模块，包括打开网页、页面快照、表单填写、点击交互、JS 执行、网络监控、页面截图、多标签页管理、滚动等待控制、对话框处理等。与传统 Selenium/Playwright 相比，对 AI 友好度高，全流程闭环，上手门槛低。

## 12 大核心能力

| 能力模块 | 对应工具 | 说明 |
|----------|----------|------|
| 打开网页 | browser_open | 导航到指定 URL |
| 页面快照 | browser_snapshot | 获取可交互元素 + ref 编号 |
| 填写表单 | browser_fill | 自动输入文本 |
| 点击交互 | browser_click | 模拟真人点击 |
| 执行 JS | browser_eval | 直接运行 JS 代码提取数据 |
| 网络监控 | browser_network | 捕获 URL/Headers/状态码 |
| 获取页面属性 | browser_get | 快速读取 URL、标题 |
| 页面截图 | browser_screenshot | 截取页面状态 |
| 多标签页 | browser_tab_* | 新建/切换/关闭标签页 |
| 滚动/等待 | browser_scroll / browser_wait | 自动翻页、等待懒加载 |
| 对话框 | browser_dialog | 处理 alert/confirm 弹窗 |
| Site 适配器 | site_run / site_list | 特定网站结构化抓取 |

## 实战场景

1. **搜索引擎批量查询 + 结果提取**：自动搜索关键词、提取标题/链接，批量整理
2. **自动表单填写**：批量注册账号、提交信息、登录网站
3. **动态网页数据抓取**：JS 渲染页面用 browser_eval 执行 JS 提取
4. **API/网络请求调试**：监控所有请求，找隐藏 API
5. **特定网站一键抓取**：配置适配器规则后一键批量抓数据

## vs browser-use

| 维度 | browser-use | bb-browser |
|------|-------------|------------|
| 浏览器 | 创建新实例 | 使用已有 Chrome |
| 登录态 | 需重新登录 | 已存在 |
| 适用场景 | 通用自动化 | 需登录的网站访问 |

## 相关页面

- [[浏览器控制]]（主题页）
- [[browser-use]]（对比实体）
- [[bb-browser]]（实体页）
