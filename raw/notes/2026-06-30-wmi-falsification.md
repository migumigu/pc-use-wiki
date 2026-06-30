# 证伪验证记录 - WMI 参考文档

## 验证时间
2026-06-30

## 待验证声明

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| WMI Reference 是 Microsoft 官方文档 | WMI Reference 官方页面 | ✅ 已验证 | Microsoft Learn 域名 learn.microsoft.com | 无需修正 |
| WMI 类分为 System Classes、MSFT Classes、CIM Classes、Standard Consumer Classes | WMI Classes 页面 | ✅ 已验证 | 官方文档明确列出四个分类 | 无需修正 |
| Win32 Provider 支持 IWbemProviderInit 和 IWbemServices 接口 | Win32 Provider 页面 | ✅ 已验证 | 官方文档列出 6 个 IWbemServices 方法 | 无需修正 |
| WMI System Classes 以双下划线(__)前缀命名 | WMI System Classes 页面 | ✅ 已验证 | 官方文档明确说明 | 无需修正 |
| WQL 是 SQL 的子集 | WMI Reference 页面 | ✅ 已验证 | 官方文档说明 | 无需修正 |
| WMI 支持远程计算机管理 | Win32 Provider 页面 | ✅ 已验证 | 文档提到 DCOM/RPC | 无需修正 |
| Provider 类处于最终状态，不再更新 | provider.h 页面 | ✅ 已验证 | "视为处于最终状态，对于影响这些库的非安全性相关问题，将不会提供进一步的开发、增强或更新" | 无需修正 |

## 证伪结论

所有关键声明均来自 Microsoft 官方文档，已通过官方来源验证。文档内容准确可靠。

## 置信度标注

- WMI 类分类：EXTRACTED（来自官方文档）
- Win32 Provider 接口：EXTRACTED（来自官方文档）
- WQL 说明：EXTRACTED（来自官方文档）
- Provider 状态：EXTRACTED（来自官方文档）
