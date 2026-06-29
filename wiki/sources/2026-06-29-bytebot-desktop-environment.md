---
tags: [official_docs, desktop_environment, virtual_desktop]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-bytebot-desktop]
---

# Bytebot Desktop Environment

> Bytebot 虚拟桌面环境技术文档，Ubuntu + XFCE4 容器化桌面详解

## 为什么用虚拟桌面？

### 完全隔离
- 无主机风险：所有操作在容器内
- 沙箱环境：桌面无法访问主机系统
- 快速重置：销毁重建只需数秒
- 干净工作区：每次重启全新环境

### 处处一致
- 平台无关：Mac/Windows/Linux 相同环境
- 可复现：每次设置完全相同
- 版本控制：可锁定特定版本
- 无依赖：容器内包含一切

### 为自动化而生
- 可预测 UI：元素位置一致
- 干净环境：无弹窗干扰
- 自动化就绪：程序化控制优化
- 快速启动：数秒就绪

## 技术栈

### 基础系统
- **Ubuntu 22.04 LTS** 稳定发行版
- **XFCE4 Desktop** 轻量响应式桌面
- **X11 Display Server** 标准 Linux 图形系统
- **supervisord** 服务管理

### 预装软件

**Web 浏览器**：Firefox ESR（自动化预配置）

**生产力工具**：文本编辑器、办公工具、PDF 查看器、文件管理器

**通讯**：Thunderbird 邮件客户端、终端模拟器

**安全与开发**：1Password 密码管理器、VS Code、Git、Python 3

### 核心服务

1. **bytebotd Daemon**
   - 端口 9990
   - 处理所有自动化请求
   - 基于 nutjs 框架
   - REST API

2. **noVNC Web Client**
   - 浏览器端桌面访问
   - 无需客户端安装
   - WebSocket 代理

3. **Supervisor**
   - 进程管理
   - 服务监控
   - 自动重启
   - 日志管理

## 桌面特性

### 显示配置
```
分辨率: 1920x1080 @ 24-bit color
```

### 用户环境
- **用户名**: `user`
- **主目录**: `/home/user`
- **Sudo 权限**: 是（无密码）
- **桌面会话**: 自动登录

### 文件系统
```
/home/user/
├── Desktop/    # 桌面快捷方式
├── Documents/  # 用户文档
├── Downloads/  # 浏览器下载
├── .config/    # 应用配置
└── .local/     # 用户数据
```

## 访问方式

### Web 浏览器（推荐）
`http://localhost:9990/vnc` — 免安装，支持剪贴板共享

### MCP 控制
MCP SSE 端点：`http://localhost:9990/mcp`
```json
{
  "mcpServers": {
    "bytebot": {
      "command": "npx",
      "args": ["mcp-remote", "http://127.0.0.1:9990/mcp", "--transport", "http-first"]
    }
  }
}
```

### 直接 API 控制
```bash
# 截图
curl -X POST http://localhost:9990/computer-use \
  -H "Content-Type: application/json" \
  -d '{"action": "screenshot"}'

# 移动鼠标
curl -X POST http://localhost:9990/computer-use \
  -d '{"action": "move_mouse", "coordinate": {"x": 500, "y": 300}}'
```

## 定制方法

自定义 Dockerfile 添加软件：
```dockerfile
FROM ghcr.io/bytebot-ai/bytebot-desktop:edge
RUN apt-get update && apt-get install -y your-custom-app
COPY configs/ /home/user/.config/
```

## 安全加固

生产环境建议：
1. 修改默认密码
2. 限制网络访问（域名白名单或局域网限制）
3. 启用 HTTPS/WSS
4. 定期更新基础镜像

## 相关页面

- [[Bytebot]]
- [[桌面应用控制]]
- [[Computer-Use]]
- [[MCP]]
- [[Docker]]
