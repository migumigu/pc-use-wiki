---
source_id: auto-20260628-mcp03
tier: 1
control_object: agent_integration
tech_layer: agent_integration
confidence: high
url: https://github.com/modelcontextprotocol/servers
title: MCP Servers GitHub Repository - Reference Implementations
author: Anthropic
date_collected: 2026-06-28
tags: [MCP, Model-Context-Protocol, GitHub, servers, reference-implementations]
---

# MCP Servers GitHub Repository

This repository is a collection of _reference implementations_ for the [Model Context Protocol](https://modelcontextprotocol.io/) (MCP), as well as references to community-built servers and additional resources.

**Important**: If you are looking for a list of MCP servers, you can browse published servers on [the MCP Registry](https://registry.modelcontextprotocol.io/). The repository served by this README is dedicated to housing just the small number of reference servers maintained by the MCP steering group.

**Warning**: The servers in this repository are intended as **reference implementations** to demonstrate MCP features and SDK usage. They are meant to serve as educational examples for developers building their own MCP servers, not as production-ready solutions. Developers should evaluate their own security requirements and implement appropriate safeguards based on their specific threat model and use case.

The servers in this repository showcase the versatility and extensibility of MCP, demonstrating how it can be used to give Large Language Models (LLMs) secure, controlled access to tools and data sources. Typically, each MCP server is implemented with an MCP SDK:

- [C# MCP SDK](https://github.com/modelcontextprotocol/csharp-sdk)
- [Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk)
- [Java MCP SDK](https://github.com/modelcontextprotocol/java-sdk)
- [Kotlin MCP SDK](https://github.com/modelcontextprotocol/kotlin-sdk)
- [PHP MCP SDK](https://github.com/modelcontextprotocol/php-sdk)
- [Python MCP SDK](https://github.com/modelcontextprotocol/python-sdk)
- [Ruby MCP SDK](https://github.com/modelcontextprotocol/ruby-sdk)
- [Rust MCP SDK](https://github.com/modelcontextprotocol/rust-sdk)
- [Swift MCP SDK](https://github.com/modelcontextprotocol/swift-sdk)
- [TypeScript MCP SDK](https://github.com/modelcontextprotocol/typescript-sdk)

## Reference Servers

These servers aim to demonstrate MCP features and the official SDKs.

- **Everything** - Reference / test server with prompts, resources, and tools.
- **Fetch** - Web content fetching and conversion for efficient LLM usage.
- **Filesystem** - Secure file operations with configurable access controls.
- **Git** - Tools to read, search, and manipulate Git repositories.
- **Memory** - Knowledge graph-based persistent memory system.
- **Sequential Thinking** - Dynamic and reflective problem-solving through thought sequences.
- **Time** - Time and timezone conversion capabilities.

### Archived

The following reference servers are now archived and can be found at [servers-archived](https://github.com/modelcontextprotocol/servers-archived).

- **AWS KB Retrieval** - Retrieval from AWS Knowledge Base using Bedrock Agent Runtime.
- **Brave Search** - Web and local search using Brave's Search API. Has been replaced by the [official server](https://github.com/brave/brave-search-mcp-server).
- **EverArt** - AI image generation using various models.
- **GitHub** - Repository management, file operations, and GitHub API integration.
- **GitLab** - GitLab API, enabling project management.
- **Google Drive** - File access and search capabilities for Google Drive.
- **Google Maps** - Location services, directions, and place details.
- **PostgreSQL** - Read-only database access with schema inspection.
- **Puppeteer** - Browser automation and web scraping.
- **Redis** - Interact with Redis key-value stores.
- **Sentry** - Retrieving and analyzing issues from Sentry.io.
- **Slack** - Channel management and messaging capabilities. Now maintained by [Zencoder](https://github.com/zencoderai/slack-mcp-server)
- **SQLite** - Database interaction and business intelligence capabilities.

## Getting Started

### Using MCP Servers in this Repository

TypeScript-based servers in this repository can be used directly with `npx`.

For example, this will start the [Memory](/modelcontextprotocol/servers/blob/main/src/memory) server:

```
npx -y @modelcontextprotocol/server-memory
```

Python-based servers in this repository can be used directly with [uvx](https://docs.astral.sh/uv/concepts/tools/) or [pip](https://pypi.org/project/pip/). `uvx` is recommended for ease of use and setup.

For example, this will start the [Git](/modelcontextprotocol/servers/blob/main/src/git) server:

```
# With uvx
uvx mcp-server-git

# With pip
pip install mcp-server-git
python -m mcp_server_git
```

### Using an MCP Client

However, running a server on its own isn't very useful, and should instead be configured into an MCP client. For example, here's the Claude Desktop configuration to use the above server:

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

On Windows, wrap `npx` with `cmd /c`:

```json
{
  "mcpServers": {
    "memory": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

Additional examples of using the Claude Desktop as an MCP client might look like:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/files"]
    },
    "git": {
      "command": "uvx",
      "args": ["mcp-server-git", "--repository", "path/to/git/repo"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/mydb"]
    }
  }
}
```

## Creating Your Own Server

Interested in creating your own MCP server? Visit the official documentation at [modelcontextprotocol.io](https://modelcontextprotocol.io/introduction) for comprehensive guides, best practices, and technical details on implementing MCP servers.

## Learn More

See [ADDITIONAL.md](/modelcontextprotocol/servers/blob/main/ADDITIONAL.md) for a curated list of frameworks and resources that simplify building MCP servers and clients.

## Contributing

See [CONTRIBUTING.md](/modelcontextprotocol/servers/blob/main/CONTRIBUTING.md) for information about contributing to this repository.

## Security

See [SECURITY.md](/modelcontextprotocol/servers/blob/main/SECURITY.md) for reporting security vulnerabilities.

## License

This project is licensed under the Apache License, Version 2.0 for new contributions, with existing code under MIT - see the [LICENSE](/modelcontextprotocol/servers/blob/main/LICENSE) file for details.

## Community

- [GitHub Discussions](https://github.com/orgs/modelcontextprotocol/discussions)

## Support

If you find MCP servers useful, please consider starring the repository and contributing new servers or improvements!

---

Managed by Anthropic, but built together with the community. The Model Context Protocol is open source and we encourage everyone to contribute their own servers and improvements!