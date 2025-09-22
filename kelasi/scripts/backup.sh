#!/usr/bin/env bash
set -euo pipefail

BACKUP_DIR=${1:-./backups}
mkdir -p "$BACKUP_DIR"

echo "Dumping Postgres database..."
docker exec -t $(docker ps -qf name=kelasi-db|head -n1) pg_dump -U postgres kelasi > "$BACKUP_DIR/kelasi_$(date +%F).sql"
echo "Backup created at $BACKUP_DIR"
