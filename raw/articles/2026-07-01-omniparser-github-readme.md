---
source_id: auto-20260701-omni1
title: OmniParser GitHub README
url: https://github.com/microsoft/OmniParser
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# OmniParser: Screen Parsing tool for Pure Vision Based GUI Agent

**项目地址**: https://github.com/microsoft/OmniParser
**Stars**: 21.7K+
**许可证**: AGPL (icon_detect) + MIT (icon_caption)
**最新版本**: v2.0.1 (Sep 12, 2025)
**Commits**: 154
**语言**: Jupyter Notebook 50.1%, Python 36.9%, Shell 8.2%, PowerShell 4.5%

## 核心定位

OmniParser 是一种将用户界面截图解析为结构化元素的综合方法，显著增强 GPT-4V 生成可准确定位到界面相应区域的动作的能力。

## 关键技术组件

1. **交互区域检测模型 (Interactive Region Detection)** — 基于 YOLO 微调，解析屏幕上的可交互区域
2. **图标功能描述模型 (Icon Functional Captioning)** — 提取检测元素的功能语义

## News 时间线

- [2025/3] 支持本地轨迹日志，OmniParser+OmniTool 构建训练数据管道
- [2025/3] OmniTool 逐步添加多智能体编排和改进用户界面
- [2025/2] OmniParser V2 checkpoints 发布
- [2025/2] OmniTool 推出：OmniParser + 视觉模型控制 Windows 11 VM
- [2025/1] V2 在 ScreenSpot Pro 上达到 SOTA 39.5%
- [2024/11] V1.5 发布：更细粒度小图标检测 + 可交互性预测
- [2024/10] HuggingFace 趋势模型 #1
- [2024/09] Windows Agent Arena 最佳性能

## OmniTool

Docker 化的 Windows 系统，集成智能体所需基本工具。开箱即用支持：
- OpenAI (4o/o1/o3-mini)
- DeepSeek (R1)
- Qwen (2.5VL)
- Anthropic (Sonnet)

## 安装

```bash
cd OmniParser
conda create -n "omni" python==3.12
conda activate omni
pip install -r requirements.txt
```

## V2 权重下载

```bash
for f in icon_detect/{train_args.yaml,model.pt,model.yaml} icon_caption/{config.json,generation_config.json,model.safetensors}; do huggingface-cli download microsoft/OmniParser-v2.0 "$f" --local-dir weights; done
mv weights/icon_caption weights/icon_caption_florence
```

## Citation

```
@misc{lu2024omniparserpurevisionbased,
 title={OmniParser for Pure Vision Based GUI Agent},
 author={Yadong Lu and Jianwei Yang and Yelong Shen and Ahmed Awadallah},
 year={2024},
 eprint={2408.00203},
 archivePrefix={arXiv},
 primaryClass={cs.CV},
 url={https://arxiv.org/abs/2408.00203},
}
```
