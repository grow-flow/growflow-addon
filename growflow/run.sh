#!/usr/bin/with-contenv bashio

bashio::log.info "Starting GrowFlow Plant Tracker..."

LOG_LEVEL=$(bashio::config 'log_level')
bashio::log.info "Log level: ${LOG_LEVEL}"

# Persistent paths — /data is HA's persistent volume (survives restarts)
export NODE_ENV="production"
export LOG_LEVEL="${LOG_LEVEL}"
export DB_PATH="/data/growflow.db"
export DATABASE_URL="file:/data/growflow.db"
export UPLOADS_PATH="/data/uploads"

mkdir -p /data/uploads

# Ensure database schema is up to date
bashio::log.info "Syncing database schema..."
cd /app/backend
DATABASE_URL="file:/data/growflow.db" npx prisma db push --skip-generate 2>&1 || {
  bashio::log.error "Database schema sync failed!"
  exit 1
}

bashio::log.info "Starting server..."
cd /app
exec node backend/dist/index.js