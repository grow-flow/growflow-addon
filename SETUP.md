# Automated Release Setup

## Overview

This addon repository is automatically updated when a new version is released in the main [growflow](https://github.com/grow-flow/growflow) repository.

## How It Works

1. Tag push to main repo: `git tag v0.3.0 && git push --tags`
2. Main repo builds Docker image and pushes to ghcr.io
3. Main repo triggers this addon repo via `repository_dispatch`
4. This repo automatically updates version in all files
5. Commits changes and creates matching git tag

## Required Setup (One-Time)

### For Main Repository Maintainers

1. **Create Personal Access Token (PAT)**:
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Name: `ADDON_REPO_TOKEN`
   - Scopes: Select `repo` (Full control of private repositories)
   - Click "Generate token"
   - Copy the token (you won't see it again!)

2. **Add Token to Main Repo Secrets**:
   - Go to main repo: https://github.com/grow-flow/growflow
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `ADDON_REPO_TOKEN`
   - Value: Paste your PAT
   - Click "Add secret"

3. **Done!** The automation is now active.

## Testing the Automation

### Test with Dry Run (Local)

```bash
cd growflow-addon
node .github/scripts/update-version.js v0.2.1 --dry-run
```

### Test with Test Tag

```bash
cd growflow  # Main repo
git tag v0.2.1-test
git push origin v0.2.1-test

# Monitor workflows in both repos
# Clean up after testing
git tag -d v0.2.1-test
git push origin :refs/tags/v0.2.1-test
```

### Production Release

```bash
cd growflow  # Main repo
git tag v0.3.0
git push --tags
```

## Files Automatically Updated

- `growflow/config.yaml` - Version field
- `growflow/Dockerfile` - Version label
- `growflow/CHANGELOG.md` - New version entry

## Manual Trigger (Fallback)

If automatic trigger fails, you can manually trigger the workflow:

1. Go to addon repo Actions tab
2. Select "Auto-Update Version" workflow
3. Click "Run workflow"
4. Enter version (e.g., `v0.3.0`)
5. Click "Run workflow"

## Troubleshooting

**Workflow doesn't trigger**: Check that `ADDON_REPO_TOKEN` is configured in main repo secrets.

**Permission denied**: PAT needs `repo` scope.

**Version format error**: Use `vX.Y.Z` format (e.g., `v0.3.0`, not `0.3.0`).

**Commit failed**: Ensure workflow has write permissions (already configured).
