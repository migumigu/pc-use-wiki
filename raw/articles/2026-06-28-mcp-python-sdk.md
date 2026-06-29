---
source_id: auto-20260628-mcp06
tier: 1
control_object: agent_integration
tech_layer: agent_integration
confidence: high
url: https://github.com/modelcontextprotocol/python-sdk
title: MCP Python SDK GitHub Repository
author: Anthropic
date_collected: 2026-06-28
tags: [MCP, Model-Context-Protocol, Python, SDK, GitHub]
---

# MCP Python SDK

**Python implementation of the Model Context Protocol (MCP)**

**Note**: This README documents v1.x of the MCP Python SDK (the current stable release).

For v1.x code and documentation, see the `v1.x` branch. For the upcoming v2 documentation (pre-alpha, in development on `main`), see `README.v2.md`.

## Overview

The Model Context Protocol allows applications to provide context for LLMs in a standardized way, separating the concerns of providing context from the actual LLM interaction. This Python SDK implements the full MCP specification, making it easy to:

- Build MCP clients that can connect to any MCP server
- Create MCP servers that expose resources, prompts and tools
- Use standard transports like stdio, SSE, and Streamable HTTP
- Handle all MCP protocol messages and lifecycle events

## Installation

### Adding MCP to your python project

We recommend using [uv](https://docs.astral.sh/uv/) to manage your Python projects.

If you haven't created a uv-managed project yet, create one:

```bash
uv init mcp-server-demo
cd mcp-server-demo
```

Then add MCP to your project dependencies:

```bash
uv add "mcp[cli]"
```

Alternatively, for projects using pip for dependencies:

```bash
pip install "mcp[cli]"
```

### Running the standalone MCP development tools

To run the mcp command with uv:

```bash
uv run mcp
```

## Quickstart

Let's create a simple MCP server that exposes a calculator tool and some data:

```python
"""
FastMCP quickstart example.

Run from the repository root:
 uv run examples/snippets/servers/fastmcp_quickstart.py
"""

from mcp.server.fastmcp import FastMCP

# Create an MCP server
mcp = FastMCP("Demo", json_response=True)

# Add an addition tool
@mcp.tool()
def add(a: int, b: int) -> int:
 """Add two numbers"""
    return a + b

# Add a dynamic greeting resource
@mcp.resource("greeting://{name}")
def get_greeting(name: str) -> str:
 """Get a personalized greeting"""
    return f"Hello, {name}!"

# Add a prompt
@mcp.prompt()
def greet_user(name: str, style: str = "friendly") -> str:
 """Generate a greeting prompt"""
    styles = {
 "friendly": "Please write a warm, friendly greeting",
 "formal": "Please write a formal, professional greeting",
 "casual": "Please write a casual, relaxed greeting",
 }

 return f"{styles.get(style, styles['friendly'])} for someone named {name}."

# Run with streamable HTTP transport
if __name__ == "__main__":
 mcp.run(transport="streamable-http")
```

You can install this server in Claude Code and interact with it right away. First, run the server:

```bash
uv run --with mcp examples/snippets/servers/fastmcp_quickstart.py
```

Then add it to Claude Code:

```bash
claude mcp add --transport http my-server http://localhost:8000/mcp
```

Alternatively, you can test it with the MCP Inspector. Start the server as above, then in a separate terminal:

```bash
npx -y @modelcontextprotocol/inspector
```

In the inspector UI, connect to `http://localhost:8000/mcp`.

## What is MCP?

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) lets you build servers that expose data and functionality to LLM applications in a secure, standardized way. Think of it like a web API, but specifically designed for LLM interactions. MCP servers can:

- Expose data through **Resources** (think of these sort of like GET endpoints; they are used to load information into the LLM's context)

- Provide functionality through **Tools** (sort of like POST endpoints; they are used to execute code or otherwise produce a side effect)

- Define interaction patterns through **Prompts** (reusable templates for LLM interactions)

- And more!

## Core Concepts

### Server

The FastMCP server is your core interface to the MCP protocol. It handles connection management, protocol compliance, and message routing.

### Resources

Resources are how you expose data to LLMs. They're similar to GET endpoints in a REST API - they provide data but shouldn't perform significant computation or have side effects:

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP(name="Resource Example")

@mcp.resource("file://documents/{name}")
def read_document(name: str) -> str:
 """Read a document by name."""
    # This would normally read from disk
    return f"Content of {name}"

@mcp.resource("config://settings")
def get_settings() -> str:
 """Get application settings."""
    return """{
 "theme": "dark",
 "language": "en",
 "debug": false
}"""
```

### Tools

Tools let LLMs take actions through your server. Unlike resources, tools are expected to perform computation and have side effects:

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP(name="Tool Example")

@mcp.tool()
def sum(a: int, b: int) -> int:
 """Add two numbers together."""
    return a + b

@mcp.tool()
def get_weather(city: str, unit: str = "celsius") -> str:
 """Get weather for a city."""
    # This would normally call a weather API
    return f"Weather in {city}: 22degrees{unit[0].upper()}"
```

### Prompts

Prompts are reusable templates that help structure interactions with language models.

### Images

MCP supports image content in tool results and resources.

### Context

Tools can optionally receive a Context object by including a parameter with the `Context` type annotation. This context is automatically injected by the FastMCP framework and provides access to MCP capabilities.

### Running Your Server

#### Development Mode

```bash
mcp dev server.py
```

#### Claude Desktop Integration

Configure Claude Desktop to use your MCP server by editing the configuration file.

#### Direct Execution

```bash
python server.py
```

#### Streamable HTTP Transport

```python
mcp.run(transport="streamable-http")
```

## Documentation

For more details, visit the official MCP documentation and API reference.

## Contributing

See `CONTRIBUTING.md` for information about contributing to this repository.

## License

This project is licensed under the MIT License.