#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const version = process.argv[2];
const dryRun = process.argv.includes('--dry-run');

if (!version) {
  console.error('Usage: node update-version.js <version> [--dry-run]');
  process.exit(1);
}

if (!/^v\d+\.\d+\.\d+(-.*)?$/.test(version)) {
  console.error(`Invalid version format: ${version}`);
  console.error('Expected: vX.Y.Z or vX.Y.Z-suffix');
  process.exit(1);
}

const baseDir = path.join(__dirname, '../..');
const configPath = path.join(baseDir, 'growflow/config.yaml');
const dockerfilePath = path.join(baseDir, 'growflow/Dockerfile');
const changelogPath = path.join(baseDir, 'growflow/CHANGELOG.md');

console.log(`Updating to version: ${version}`);
console.log(`Dry run: ${dryRun}`);

// Update config.yaml
let configContent = fs.readFileSync(configPath, 'utf8');
configContent = configContent.replace(
  /^version:\s*"v[\d.]+"$/m,
  `version: "${version}"`
);
// Only update image line if already enabled (not commented out)
configContent = configContent.replace(
  /^image:\s*".*"$/m,
  `image: "ghcr.io/grow-flow/growflow-{arch}"`
);

if (dryRun) {
  console.log('\n[config.yaml] Would update to:');
  console.log(configContent.split('\n').slice(0, 25).join('\n'));
} else {
  fs.writeFileSync(configPath, configContent);
  console.log('✓ Updated config.yaml');
}

// Update Dockerfile
let dockerfileContent = fs.readFileSync(dockerfilePath, 'utf8');
dockerfileContent = dockerfileContent.replace(
  /^ARG BUILD_FROM=.*$/m,
  `ARG BUILD_FROM=ghcr.io/grow-flow/growflow:${version}`
);
dockerfileContent = dockerfileContent.replace(
  /io\.hass\.version="v[\d.]+"/,
  `io.hass.version="${version}"`
);

if (dryRun) {
  console.log('\n[Dockerfile] Would update to:');
  console.log(dockerfileContent.split('\n').slice(0, 35).join('\n'));
} else {
  fs.writeFileSync(dockerfilePath, dockerfileContent);
  console.log('✓ Updated Dockerfile');
}

// Update build.yaml
const buildPath = path.join(baseDir, 'growflow/build.yaml');
let buildContent = fs.readFileSync(buildPath, 'utf8');
buildContent = buildContent.replace(
  /ghcr\.io\/grow-flow\/growflow:v[\d.]+/g,
  `ghcr.io/grow-flow/growflow:${version}`
);

if (dryRun) {
  console.log('\n[build.yaml] Would update to:');
  console.log(buildContent);
} else {
  fs.writeFileSync(buildPath, buildContent);
  console.log('✓ Updated build.yaml');
}

// Update CHANGELOG.md
const today = new Date().toISOString().split('T')[0];
const changelogEntry = `## [${version}] - ${today}

### Changed

- Updated to base image version ${version}
- Using GitHub Container Registry (ghcr.io/grow-flow/growflow)

`;

let changelogContent = fs.readFileSync(changelogPath, 'utf8');
const changelogLines = changelogContent.split('\n');
const insertIndex = changelogLines.findIndex(line => line.startsWith('## ['));
if (insertIndex === -1) {
  changelogContent = changelogEntry + changelogContent;
} else {
  changelogLines.splice(insertIndex, 0, changelogEntry);
  changelogContent = changelogLines.join('\n');
}

if (dryRun) {
  console.log('\n[CHANGELOG.md] Would prepend:');
  console.log(changelogEntry);
} else {
  fs.writeFileSync(changelogPath, changelogContent);
  console.log('✓ Updated CHANGELOG.md');
}

console.log(`\n${dryRun ? 'Dry run complete' : 'Version update complete'}: ${version}`);
