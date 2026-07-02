# Nanobrowser 证伪记录

## 声明验证列表

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| "多智能体系统（Planner+Navigator）" | 报告-v1 | ✅已验证 | GitHub README明确提到Multi-agent System，包含Planner和Navigator | 无需修正 |
| "支持Chrome和Edge" | 报告-v1 | ✅已验证 | GitHub README明确列出支持的浏览器 | 无需修正 |
| "支持OpenAI、Anthropic、Gemini、Ollama、Groq、Cerebras、Llama" | 报告-v1 | ✅已验证 | GitHub README列出支持的LLM提供商 | 无需修正 |
| "Apache-2.0许可证" | 报告-v1 | ✅已验证 | GitHub LICENSE文件确认 | 无需修正 |
| "TypeScript 89.5%" | 报告-v1 | ✅已验证 | GitHub语言统计显示 | 无需修正 |
| "作为Chrome扩展运行" | 报告-v1 | ✅已验证 | GitHub仓库结构包含chrome-extension目录 | 无需修正 |
| "隐私保护，本地运行" | 报告-v1 | ⚠️待验证 | 声明来自README，但实际数据传输需进一步验证 | "隐私保护（声称本地运行，需实际验证数据传输）" |

## 证伪总结

### 验证结果统计
- ✅ 已验证：6项
- ⚠️ 待验证：1项
- ❌ 伪：0项

### 需要修正的声明

**声明："隐私保护，本地运行"**
- 当前表述可能过于绝对
- 实际验证：虽然README声称本地运行，但用户API密钥配置后，LLM调用仍需发送数据到外部API
- 修正：添加说明，区分"浏览器内执行"和"数据不离开本地"

### 待补充验证
- 需要验证实际数据传输路径
- 需要验证Chrome扩展的权限使用情况
- 需要验证是否有遥测数据收集