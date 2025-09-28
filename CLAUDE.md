# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Home Assistant add-on repository containing the GrowFlow plant tracking add-on. The repository follows HA's standard structure with a root `repository.yaml` and individual add-ons in subdirectories.

## Repository Structure

```
growflow-addon/
├── repository.yaml              # Repository metadata (required)
├── README.md                   # Repository documentation
├── REPOSITORY_STRUCTURE.md     # Structure documentation
└── growflow/                   # GrowFlow add-on directory
    ├── config.yaml            # Add-on metadata and configuration schema
    ├── Dockerfile             # Docker build instructions
    ├── CHANGELOG.md           # Add-on version history
    └── rootfs/                # Container filesystem overlay
        └── etc/services.d/growflow/run
```

## Architecture

- **Repository**: HA add-on repository containing multiple potential add-ons
- **Base Image**: GrowFlow add-on extends `moritz03/growflow:latest`
- **Integration Layer**: Uses Bashio for Home Assistant configuration management
- **Service Management**: S6-overlay handles service lifecycle
- **Data Persistence**: SQLite database stored in `/data/growflow.db`
- **Web Interface**: Runs on port 8080 with Home Assistant Ingress integration

## Key Files

- `repository.yaml`: Repository metadata (required for HA recognition)
- `growflow/config.yaml`: Add-on metadata, configuration schema, and Docker image reference
- `growflow/Dockerfile`: Extends base image with HA-specific tools (bashio, bash, curl, jq)
- `growflow/rootfs/etc/services.d/growflow/run`: S6-overlay service script with Bashio integration

## Configuration

Add-on configuration is handled through Home Assistant's options system defined in `growflow/config.yaml`:
- `log_level`: Application logging level
- `ssl`: SSL/TLS encryption toggle
- `certfile`/`keyfile`: SSL certificate files (when SSL enabled)

Environment variables are set in the service script:
- `NODE_ENV=production`
- `DB_PATH=/data/growflow.db`
- `PORT=8080`
- SSL variables when enabled

## Development Commands

Since this is a Home Assistant add-on, development primarily involves:

**Local Testing:**
```bash
# Build Docker image locally
docker build -t growflow-addon .

# Test configuration validation
# (requires Home Assistant Supervisor environment)
```

**Version Updates:**
Update version in `growflow/config.yaml` and ensure it matches the base image tag.

## Deployment

This add-on is designed to be published to a Home Assistant add-on repository. The Docker image reference in `growflow/config.yaml` points to `moritz03/growflow:{version}` which must be available on Docker Hub.

## Integration Points

- Home Assistant Ingress: Provides seamless web interface integration
- Persistent Data: `/data` directory mapped for database persistence
- SSL Support: Optional SSL configuration through HA's SSL certificate system
- Panel Integration: Appears as "GrowFlow" panel in HA sidebar with sprout icon