---
source_id: auto-20260630-spwr
title: Superpowers GitHub README - AI Agent Skills Framework
url: https://github.com/obra/superpowers
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: tool_implementation
collected_date: 2026-06-30
collected_by: auto_research
confidence: high
---

# Superpowers - AI Agent Skills Framework

Superpowers is a complete software development methodology for coding agents, built on composable skills and initial instructions that ensure agents use them effectively.

## Core Features

### Supported Platforms
- Claude Code (via official plugin marketplace)
- Antigravity
- Codex App / Codex CLI
- Cursor
- Factory Droid
- Gemini CLI
- GitHub Copilot CLI
- Kimi Code
- OpenCode
- Pi

### The Basic Workflow
1. **brainstorming** - Activates before writing code. Refines ideas through questions, explores alternatives, presents design in sections for validation.
2. **using-git-worktrees** - Creates isolated workspace on new branch, runs project setup, verifies clean test baseline.
3. **writing-plans** - Breaks work into bite-sized tasks (2-5 minutes each). Every task has exact file paths, complete code, verification steps.
4. **subagent-driven-development** or **executing-plans** - Dispatches fresh subagent per task with two-stage review.
5. **test-driven-development** - Enforces RED-GREEN-REFACTOR cycle.
6. **requesting-code-review** - Reviews against plan, reports issues by severity.
7. **finishing-a-development-branch** - Verifies tests, presents options, cleans up worktree.

### Skills Library
**Testing:**
- test-driven-development - RED-GREEN-REFACTOR cycle

**Debugging:**
- systematic-debugging - 4-phase root cause process
- verification-before-completion - Ensure fixes are real

**Collaboration:**
- brainstorming - Socratic design refinement
- writing-plans - Detailed implementation plans
- executing-plans - Batch execution with checkpoints
- dispatching-parallel-agents - Concurrent subagent workflows
- requesting-code-review - Pre-review checklist
- receiving-code-review - Responding to feedback
- using-git-worktrees - Parallel development branches
- finishing-a-development-branch - Merge/PR decision workflow
- subagent-driven-development - Fast iteration with two-stage review

**Meta:**
- writing-skills - Create new skills following best practices
- using-superpowers - Introduction to the skills system

## Philosophy
- **Test-Driven Development** - Write tests first, always
- **Systematic over ad-hoc** - Process over guessing
- **Complexity reduction** - Simplicity as primary goal
- **Evidence over claims** - Verify before declaring success

## Technical Details
- Version: v6.0.2 (June 17, 2026)
- License: MIT
- Primary languages: Shell (50.9%), JavaScript (41.9%), TypeScript (2.6%), Python (1.9%)
- Repository: https://github.com/obra/superpowers