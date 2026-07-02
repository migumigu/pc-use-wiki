---
source_id: auto-20260702-agency-readme
title: agency-agents GitHub README
url: https://github.com/msitarzewski/agency-agents
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# 🎭 The Agency: AI Specialists Ready to Transform Your Workflow

> **A complete AI agency at your fingertips** - From frontend wizards to Reddit community ninjas, from whimsy injectors to reality checkers. Each agent is a specialized expert with personality, processes, and proven deliverables.

**Stars**: 122K+ | **License**: MIT | **PRs Welcome**

## 项目定位

Born from a Reddit thread and months of iteration, **The Agency** is a growing collection of meticulously crafted AI agent personalities. Each agent is:

- **🎯 Specialized**: Deep expertise in their domain (not generic prompt templates)
- **🧠 Personality-Driven**: Unique voice, communication style, and approach
- **📋 Deliverable-Focused**: Real code, processes, and measurable outcomes
- **✅ Production-Ready**: Battle-tested workflows and success metrics

**核心理念**: Assembling your dream team, except they're AI specialists who never sleep, never complain, and always deliver.

---

## Division 架构（16 个部门）

项目采用"虚拟机构"的组织架构，将 Agent 按职能划分为 16 个 Division：

### 1. 💻 Engineering Division
Building the future, one commit at a time.

**核心 Agent**:
- 🎨 Frontend Developer - React/Vue/Angular, UI implementation, performance
- 🏗️ Backend Architect - API design, database architecture, scalability
- 📱 Mobile App Builder - iOS/Android, React Native, Flutter
- 🤖 AI Engineer - ML models, deployment, AI integration
- 🚀 DevOps Automator - CI/CD, infrastructure automation, cloud ops
- 🌐 Network Engineer - Cisco IOS/IOS-XE, Juniper Junos, Palo Alto PAN-OS
- ⚡ Rapid Prototyper - Fast POC development, MVPs
- 🔩 Embedded Firmware Engineer - Bare-metal, RTOS, ESP32/STM32/Nordic firmware
- 🚨 Incident Response Commander - Incident management, post-mortems, on-call
- ⛓️ Solidity Smart Contract Engineer - EVM contracts, gas optimization, DeFi
- 🧭 Codebase Onboarding Engineer - Fast developer onboarding, read-only codebase exploration
- 👁️ Code Reviewer - Constructive code review, security, maintainability
- 🗄️ Database Optimizer - Schema design, query optimization, indexing strategies
- 🌿 Git Workflow Master - Branching strategies, conventional commits, advanced Git
- 🏛️ Software Architect - System design, DDD, architectural patterns, trade-off analysis
- 🛡️ SRE - SLOs, error budgets, observability, chaos engineering
- 🔧 Data Engineer - Data pipelines, lakehouse architecture, ETL/ELT
- 🧱 CMS Developer - WordPress & Drupal themes, plugins/modules, content architecture
- 📧 Email Intelligence Engineer - Email parsing, MIME extraction, structured data for AI agents
- 🎙️ Voice AI Integration Engineer - Speech-to-text pipelines, Whisper, ASR
- 🖧 IT Service Manager - ITIL 4 service management
- 🪡 Minimal Change Engineer - Minimum-viable diffs
- 🧬 Prompt Engineer - LLM prompt design & optimization
- 🕸️ Multi-Agent Systems Architect - Multi-agent pipeline design & governance
- 🛒 Drupal Shopping Cart Engineer / WordPress Shopping Cart Engineer

### 2. 🎨 Design Division
Making it beautiful, usable, and delightful.

**核心 Agent**:
- 🎯 UI Designer - Visual design, component libraries, design systems
- 🔍 UX Researcher - User testing, behavior analysis, research
- 🏛️ UX Architect - Technical architecture, CSS systems, implementation
- 🎭 Brand Guardian - Brand identity, consistency, positioning
- 📖 Visual Storyteller - Visual narratives, multimedia content
- ✨ Whimsy Injector - Personality, delight, playful interactions
- 📷 Image Prompt Engineer - AI image generation prompts, photography
- 🌈 Inclusive Visuals Specialist - Representation, bias mitigation, authentic imagery
- 🎭 Persona Walkthrough Specialist - Persona-driven cognitive walkthroughs

### 3. 💰 Paid Media Division
Turning ad spend into measurable business outcomes.

**核心 Agent**:
- 💰 PPC Campaign Strategist - Google/Microsoft/Amazon Ads, account architecture
- 🔍 Search Query Analyst - Search term analysis, negative keywords, intent mapping
- 📋 Paid Media Auditor - 200+ point account audits, competitive analysis
- 📡 Tracking & Measurement Specialist - GTM, GA4, conversion tracking, CAPI
- ✍️ Ad Creative Strategist - RSA copy, Meta creative, Performance Max assets
- 📺 Programmatic & Display Buyer - GDN, DSPs, partner media, ABM display
- 📱 Paid Social Strategist - Meta, LinkedIn, TikTok, cross-platform social

### 4. 💼 Sales Division
Turning pipeline into revenue through craft, not CRM busywork.

**核心 Agent**:
- 🎯 Outbound Strategist - Signal-based prospecting, multi-channel sequences, ICP targeting
- 🔍 Discovery Coach - SPIN, Gap Selling, Sandler — question design and call structure
- ♟️ Deal Strategist - MEDDPICC qualification, competitive positioning, win planning
- 🛠️ Sales Engineer - Technical demos, POC scoping, competitive battlecards
- 🏹 Proposal Strategist - RFP response, win themes, narrative structure
- 📊 Pipeline Analyst - Forecasting, pipeline health, deal velocity, RevOps
- 🗺️ Account Strategist - Land-and-expand, QBRs, stakeholder mapping
- 🏋️ Sales Coach - Rep development, call coaching, pipeline review facilitation
- 🧮 Offer & Lead Gen Strategist - Offers & lead magnets

### 5. 其他 Division
- **academic/** - Research, scholarship, and domain-expert specialists
- **finance/** - Financial planning, accounting, and investment specialists
- **game-development/** - Game design and development specialists
- **gis/** - Geospatial, mapping, and spatial-analysis specialists
- **marketing/** - Growth and marketing specialists
- **product/** - Product management specialists
- **project-management/** - PM and coordination specialists
- **security/** - Security architecture, AppSec, pentest, threat intel, and incident response
- **spatial-computing/** - AR/VR/XR specialists
- **specialized/** - Unique specialists that don't fit elsewhere
- **support/** - Operations and support specialists
- **testing/** - QA and testing specialists

---

## Agent 技能规范（来自 CONTRIBUTING.md）

### Agent 文件结构

每个 Agent 必须遵循以下结构：

```markdown
---
name: Agent Name
description: One-line description of the agent's specialty and focus
color: colorname or "#hexcode"
emoji: 🎯
vibe: One-line personality hook — what makes this agent memorable
services:                              # optional — only if the agent requires external services
  - name: Service Name
    url: https://service-url.com
    tier: free                         # free, freemium, or paid
---
# Agent Name

## 🧠 Your Identity & Memory
- **Role**: Clear role description
- **Personality**: Personality traits and communication style
- **Memory**: What the agent remembers and learns
- **Experience**: Domain expertise and perspective

## 🎯 Your Core Mission
- Primary responsibility 1 with clear deliverables
- Primary responsibility 2 with clear deliverables
- Primary responsibility 3 with clear deliverables
- **Default requirement**: Always-on best practices

## 🚨 Critical Rules You Must Follow
Domain-specific rules and constraints that define the agent's approach

## 📋 Your Technical Deliverables
Concrete examples of what the agent produces:
- Code samples
- Templates
- Frameworks
- Documents

## 🔄 Your Workflow Process
Step-by-step process the agent follows:
1. Phase 1: Discovery and research
2. Phase 2: Planning and strategy
3. Phase 3: Execution and implementation
4. Phase 4: Review and optimization

## 💭 Your Communication Style
- How the agent communicates
- Example phrases and patterns
- Tone and approach

## 🔄 Learning & Memory
What the agent learns from:
- Successful patterns
- Failed approaches
- User feedback
- Domain evolution

## 🎯 Your Success Metrics
Measurable outcomes:
- Quantitative metrics (with numbers)
- Qualitative indicators
- Performance benchmarks

## 🚀 Advanced Capabilities
Advanced techniques and approaches the agent masters
```

### Agent 结构语义分组

Agent 文件分为两个语义组：

#### Persona（身份层）
- **Identity & Memory** — role, personality, background
- **Communication Style** — tone, voice, approach
- **Critical Rules** — boundaries and constraints

#### Operations（操作层）
- **Core Mission** — primary responsibilities
- **Technical Deliverables** — concrete outputs and templates
- **Workflow Process** — step-by-step methodology
- **Success Metrics** — measurable outcomes
- **Advanced Capabilities** — specialized techniques

### Agent 设计原则

1. **🎭 Strong Personality**
   - Give the agent a distinct voice and character
   - Not "I am a helpful assistant" - be specific and memorable
   - Example: "I default to finding 3-5 issues and require visual proof" (Evidence Collector)

2. **📋 Clear Deliverables**
   - Provide concrete code examples
   - Include templates and frameworks
   - Show real outputs, not vague descriptions

3. **✅ Success Metrics**
   - Include specific, measurable metrics
   - Example: "Page load times under 3 seconds on 3G"
   - Example: "10,000+ combined karma across accounts"

4. **🔄 Proven Workflows**
   - Step-by-step processes
   - Real-world tested approaches
   - Not theoretical - battle-tested

5. **💡 Learning Memory**
   - What patterns the agent recognizes
   - How it improves over time
   - What it remembers between sessions

### 外部服务依赖规范

当 Agent 依赖外部服务时：
1. **在 frontmatter 中声明依赖** - 使用 `services` 字段
2. **Agent 必须独立可用** - 剥离 API 调用后仍有有用的 persona、workflow 和 expertise
3. **不复制供应商文档** - 引用而非复制
4. **优先选择有免费层的服务** - 使贡献者可以测试

---

## 工具链设计

### 支持的工具平台

项目支持 **12+ 个工具平台** 的集成：

| 工具 | 安装方式 |
|------|----------|
| **Claude Code** | `./scripts/install.sh --tool claude-code` |
| **Cursor** | `./scripts/install.sh --tool cursor` |
| **GitHub Copilot** | `./scripts/install.sh --tool copilot` |
| **Gemini CLI** | `./scripts/install.sh --tool gemini-cli` |
| **OpenCode** | `./scripts/install.sh --tool opencode` |
| **OpenClaw** | `./scripts/install.sh --tool openclaw` |
| **Antigravity** | `./scripts/install.sh --tool antigravity` |
| **Aider** | `./scripts/install.sh --tool aider` |
| **Windsurf** | `./scripts/install.sh --tool windsurf` |
| **Kimi Code** | `./scripts/install.sh --tool kimi` |
| **Codex** | `./scripts/install.sh --tool codex` |
| **Osaurus** | `./scripts/install.sh --tool osaurus` |
| **Hermes** | `./scripts/install.sh --tool hermes` |

### 安装流程

```bash
# Step 1 -- generate integration files for all supported tools
./scripts/convert.sh

# Step 2 -- install interactively (auto-detects what you have installed)
./scripts/install.sh

# Or target a specific tool directly
./scripts/install.sh --tool cursor
```

### 灵活安装选项

```bash
# Interactive wizard: pick tools + teams
./scripts/install.sh

# Install specific divisions only
./scripts/install.sh --tool claude-code --division engineering,security

# Install specific agents only
./scripts/install.sh --tool cursor --agent frontend-developer,ui-designer

# List all teams + agent count
./scripts/install.sh --list teams

# Dry run preview
./scripts/install.sh --tool opencode --division engineering --dry-run
```

### 官方桌面应用

**[Agency Agents](https://agencyagents.app)** 是官方桌面应用（macOS · Linux · Windows）：
- Browse the entire roster
-一键安装到 Claude Code, Cursor, Codex, Gemini CLI, OpenCode, Qwen, Osaurus
- 自动更新
- No clone, no terminal needed

```bash
# macOS Homebrew install
brew install --cask msitarzewski/agency-agents/agency-agents
```

---

## 项目文件结构

```
agency-agents/
├── academic/           # Academic Division agents
├── design/             # Design Division agents
├── engineering/        # Engineering Division agents
├── finance/            # Finance Division agents
├── game-development/   # Game Development Division agents
├── gis/                # GIS Division agents
├── integrations/       # Generated per-tool output (NOT a division)
├── marketing/          # Marketing Division agents
├── paid-media/         # Paid Media Division agents
├── product/            # Product Division agents
├── project-management/ # Project Management Division agents
├── sales/              # Sales Division agents
├── security/           # Security Division agents
├── spatial-computing/  # Spatial Computing Division agents
├── specialized/        # Specialized Division agents
├── support/            # Support Division agents
├── testing/            # Testing Division agents
├── strategy/           # NEXUS playbooks/runbooks (NOT a division, no agent frontmatter)
├── scripts/
│   ├── convert.sh      # Generate integration files for all tools
│   ├── install.sh      # Install agents to target tool
│   ├── check-divisions.sh  # Validate divisions.json consistency
│   ├── check-tools.sh  # Validate tools.json contract
│   └── lint-agents.sh  # Lint agent files
├── divisions.json      # Single source of truth for divisions
├── tools.json          # Canonical registry of supported tools
├── CONTRIBUTING.md     # Contribution guidelines & agent template
└── README.md           # Project overview
```

---

## 贡献流程

### 添加新 Agent

1. **Fork the repository**
2. **Choose the appropriate division** (one of the 16)
3. **Create your agent file** following the template
4. **Test your agent** in real scenarios
5. **Submit a Pull Request** with your agent

### PR Checklist

- [ ] Original — not a near-duplicate (ran `scripts/check-agent-originality.sh`)
- [ ] Follows agent template structure
- [ ] Includes personality and voice
- [ ] Has concrete code/template examples
- [ ] Defines success metrics
- [ ] Includes step-by-step workflow
- [ ] Proofread and formatted correctly
- [ ] Tested in real scenarios

### Division 管理

- **Divisions are defined by `divisions.json`** — the single source of truth
- **Proposing a new division** means:
  1. Create the directory
  2. Add an entry to `divisions.json` (label/icon/color)
  3. Add it to `AGENT_DIRS` in both `scripts/convert.sh` and `scripts/lint-agents.sh`
- **Note**: `strategy/` and `integrations/` are NOT divisions

---

## 特色 Agent 示例

### Whimsy Injector (Design Division)
> Adding joy, micro-interactions, Easter eggs, brand personality

### Codebase Onboarding Engineer (Engineering Division)
> Helping new developers understand unfamiliar repos quickly by reading the code, tracing code paths, and stating facts about structure and behavior

### Multi-Agent Systems Architect (Engineering Division)
> Topology, context, trust, failure recovery for agent systems

---

## 相关链接

- **GitHub**: https://github.com/msitarzewski/agency-agents
- **官方网站**: https://agencyagents.app
- **桌面应用下载**: https://github.com/msitarzewski/agency-agents-app/releases/latest
- **GitHub Discussions**: https://github.com/msitarzewski/agency-agents/discussions
- **Issues**: https://github.com/msitarzewski/agency-agents/issues