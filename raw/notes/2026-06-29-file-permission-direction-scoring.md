# 文件系统权限研究方向评分矩阵

> 生成时间：2026-06-29
> 研究缺口：文件系统控制仅5素材摘要（需补充至10+）

## 方向评分结果

| 方向 | 热度 | 契合度 | 可获取性 | 研究价值 | 总分 | 排名 |
|------|------|--------|----------|----------|------|------|
| Linux ACL (getfacl/setfacl) | 7 | 10 | 10 | 8 | 8.7 | 1 |
| Windows DACL/SACL (Security Descriptor) | 8 | 10 | 10 | 8 | 8.9 | 2 |
| macOS POSIX+ACL 权限模型 | 6 | 9 | 9 | 7 | 7.7 | 3 |
| Python ACL 操作库（posix1e/pyacl） | 5 | 10 | 7 | 9 | 7.6 | 4 |
| 跨平台权限操作最佳实践 | 5 | 10 | 6 | 8 | 7.0 | 5 |

**选定方向**：Linux ACL + Windows Security Descriptor（综合研究）
**理由**：
1. 知识库缺口：文件系统控制仅5素材摘要，远低于目标10+
2. 技术重要性：权限控制是文件系统安全的核心机制
3. Agent 应用价值：Agent 需理解权限模型才能安全操作文件
4. 可获取性：所有方向均有 Tier 1 官方文档（Microsoft Learn、man7.org）
5. 研究价值：覆盖两大主流平台的权限机制，为跨平台 Agent 提供完整知识

## 评分标准

| 维度 | 权重 | 评分标准 | 证据来源 |
|------|------|----------|----------|
| **热度指标** | 30% | Stars > 50K = 10, > 10K = 7, > 1K = 5, > 100 = 3 | GitHub API / 官网 |
| **契合度** | 30% | 呫中核心分类 = 10, 辅助分类 = 5, 无匹配 = 0 | purpose.md 分类 |
| **可获取性** | 25% | 官方文档 = 10, 权威媒体 = 7, 社区文档 = 5, 仅社交 = 2 | 来源分析 |
| **研究价值** | 15% | 技术深度(5) × 可扩展性(5) | 架构分析 |

## 来源质量评估

| 来源 | 类型 | Tier | URL | 评估 |
|------|------|------|-----|------|
| Microsoft Learn - Security Descriptors | 官方文档 | Tier 1 | https://learn.microsoft.com/en-us/windows/win32/secauthz/security-descriptors | 高质量官方文档 |
| Microsoft Learn - DACLs and ACEs | 官方文档 | Tier 1 | https://learn.microsoft.com/en-us/windows/win32/secauthz/dacls-and-aces | 高质量官方文档 |
| man7.org - getfacl(1) | 官方文档 | Tier 1 | https://man7.org/linux/man-pages/man1/getfacl.1.html | Linux 官方 man page |
| man7.org - setfacl(1) | 官方文档 | Tier 1 | https://man7.org/linux/man-pages/man1/setfacl.1.html | Linux 官方 man page |
| savannah.nongnu.org - ACL Project | 官方项目 | Tier 1 | https://savannah.nongnu.org/projects/acl | POSIX ACL 官方项目 |

## 下一步行动

1. 收集 5-7 个权威素材（Tier 1 官方文档）
2. 生成文件系统权限模型技术分析报告
3. 执行证伪验证
4. 执行 llm-wiki digest 消化入库
5. 更新 purpose.md 素材收集清单