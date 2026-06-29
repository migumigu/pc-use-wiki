---
source_id: auto-20260628-ps
title: PowerShell Automation Official Guide
url: https://learn.microsoft.com/zh-cn/powershell/
source_type: official_docs
tier: 1
control_object: system_service
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# PowerShell Automation

PowerShell is a cross-platform automation and configuration management framework from Microsoft. It consists of a command-line shell and a scripting language built on .NET.

## Core Capabilities

### Process Management
```powershell
# List running processes
Get-Process

# Stop a process
Stop-Process -Name "notepad"

# Start a process
Start-Process "notepad.exe"

# Get process details
Get-Process -Name "chrome" | Select-Object Id, Name, CPU, WorkingSet
```

### Service Management
```powershell
# List services
Get-Service

# Start a service
Start-Service -Name "wuauserv"

# Stop a service
Stop-Service -Name "wuauserv"

# Set service startup type
Set-Service -Name "wuauserv" -StartupType Automatic
```

### Network Configuration
```powershell
# Get network adapters
Get-NetAdapter

# Get IP configuration
Get-NetIPAddress

# Test connection
Test-Connection "google.com"
```

### File System Operations
```powershell
# Create directory
New-Item -ItemType Directory -Path "C:\NewFolder"

# Copy files
Copy-Item -Path "source.txt" -Destination "dest.txt"

# Get file information
Get-ChildItem -Path "C:\" -Recurse
```

### Remote Management
```powershell
# Execute command on remote computer
Invoke-Command -ComputerName "Server01" -ScriptBlock { Get-Process }

# Enter interactive session
Enter-PSSession -ComputerName "Server01"
```

## Scripting Features

### Variables and Data Types
```powershell
$name = "John"
$age = 30
$isActive = $true
$processes = Get-Process
```

### Control Flow
```powershell
# If-Else
if ($condition) {
    # code
} else {
    # code
}

# For loop
for ($i = 0; $i -lt 10; $i++) {
    Write-Host $i
}

# Foreach
foreach ($process in Get-Process) {
    Write-Host $process.Name
}
```

### Functions
```powershell
function Get-SystemInfo {
    param(
        [string]$ComputerName = $env:COMPUTERNAME
    )
    Get-ComputerInfo -ComputerName $ComputerName
}
```

## Modules
PowerShell modules extend functionality:
- `ActiveDirectory`: Manage AD objects
- `Hyper-V`: Manage virtual machines
- `AzureAD`: Manage Azure AD
- `ExchangeOnlineManagement`: Manage Exchange Online

## Execution Policy
```powershell
# Check execution policy
Get-ExecutionPolicy

# Set execution policy
Set-ExecutionPolicy RemoteSigned
```

## Cross-Platform Support
- Windows ✓
- Linux ✓
- macOS ✓

## Key Benefits for AI Agent Control
1. **System-level access**: Full control over Windows systems
2. **Remote management**: Manage remote computers
3. **Scriptable**: Complex automation workflows
4. **Integration**: Works with .NET and other languages
5. **Extensible**: Rich module ecosystem