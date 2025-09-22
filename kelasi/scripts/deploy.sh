#!/usr/bin/env bash
set -euo pipefail

echo "Building images..."
docker compose build
echo "Deploying..."
docker compose up -d
echo "Deployed."
