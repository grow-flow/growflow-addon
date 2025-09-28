# GrowFlow Add-on Repository Structure

This document outlines the complete file structure for the `growflow-addon` repository.

## Repository Layout

```
growflow-addon/
├── config.yaml                    # Add-on configuration and metadata
├── Dockerfile                     # Docker build instructions (extends base image)
├── README.md                      # Add-on documentation
├── CHANGELOG.md                   # Version history
├── icon.png                       # 128x128px add-on icon (to be created)
├── rootfs/                        # Container filesystem overlay
│   └── etc/
│       └── services.d/
│           └── growflow/
│               └── run            # S6-overlay service script
└── .github/                       # CI/CD workflows
    └── workflows/
        └── publish.yml            # Automated publishing workflow
```

## File Descriptions

### Core Files

- **config.yaml**: Main add-on configuration with metadata, options schema, and Docker image reference
- **Dockerfile**: Extends the base `moritz03/growflow` image with HA-specific integrations
- **README.md**: User-facing documentation for installation and configuration
- **CHANGELOG.md**: Version history and release notes

### Integration Files

- **rootfs/etc/services.d/growflow/run**: S6-overlay service script with Bashio integration
- **icon.png**: Add-on icon for the Home Assistant interface (needs to be created)

### Automation

- **.github/workflows/publish.yml**: GitHub Actions workflow for automated publishing

## Installation in New Repository

1. Create new repository: `grow-flow/growflow-addon`
2. Copy all files from `addon-files/` to repository root
3. Create 128x128px icon.png
4. Set up GitHub Actions workflow
5. Configure repository settings for add-on publishing

## Next Steps

- [ ] Create repository `grow-flow/growflow-addon`
- [ ] Upload all addon-files
- [ ] Create icon.png (128x128px)
- [ ] Set up GitHub Actions workflow
- [ ] Test add-on installation
- [ ] Publish to add-on store