# 文件系统权限素材清单

> 生成时间：2026-06-29
> 研究方向：Linux ACL + Windows Security Descriptor

## 素材清单

| 序号 | Source ID | 标题 | URL | Tier | 来源类型 | 控制对象 | 技术层级 |
|------|-----------|------|-----|------|----------|----------|----------|
| 1 | auto-20260629-a1 | Windows Security Descriptors 官方文档 | https://learn.microsoft.com/en-us/windows/win32/secauthz/security-descriptors | Tier 1 | official_docs | file_system | system_foundation |
| 2 | auto-20260629-a2 | Windows DACLs and ACEs 官方文档 | https://learn.microsoft.com/en-us/windows/win32/secauthz/dacls-and-aces | Tier 1 | official_docs | file_system | system_foundation |
| 3 | auto-20260629-a3 | Windows Access Control Lists 官方文档 | https://learn.microsoft.com/en-us/windows/win32/secauthz/access-control-lists | Tier 1 | official_docs | file_system | system_foundation |
| 4 | auto-20260629-a4 | Linux ACL 官方手册页 | https://man7.org/linux/man-pages/man5/acl.5.html | Tier 1 | official_docs | file_system | system_foundation |
| 5 | auto-20260629-a5 | Linux getfacl 命令官方手册页 | https://man7.org/linux/man-pages/man1/getfacl.1.html | Tier 1 | official_docs | file_system | protocol |
| 6 | auto-20260629-a6 | Linux setfacl 命令官方手册页 | https://man7.org/linux/man-pages/man1/setfacl.1.html | Tier 1 | official_docs | file_system | protocol |
| 7 | auto-20260629-a7 | POSIX ACL 官方项目页面 | https://savannah.nongnu.org/projects/acl | Tier 1 | official_docs | file_system | tool_implementation |

## 素材质量统计

- **Tier 1 来源**：7 个（100%）
- **官方文档**：7 个（100%）
- **覆盖平台**：Windows (3) + Linux (4)
- **技术层级**：系统基础层 (4) + 协议层 (2) + 工具实现层 (1)

## 完成标准验证

- ✅ 至少 3 个 Tier 1 来源（7个）
- ✅ 素材总数 >= 5（7个）
- ✅ 每个素材保存到正确的 raw/articles/ 目录
- ✅ 每个素材带有标准化元数据
- ✅ 素材清单已生成

## 素材覆盖分析

### Windows 权限机制（3 素材）
- Security Descriptor（安全描述符结构）
- DACL/ACE（自由访问控制列表）
- ACL（访问控制列表总览）

### Linux 权限机制（4 素材）
- ACL 定义（POSIX ACL 标准）
- getfacl（读取 ACL 工具）
- setfacl（设置 ACL 工具）
- POSIX ACL 项目（官方实现）

## 下一步行动

1. 执行第三阶段：生成文件系统权限模型技术分析报告
2. 执行第四阶段：证伪验证关键技术声明
3. 执行第五阶段：llm-wiki digest 消化入库