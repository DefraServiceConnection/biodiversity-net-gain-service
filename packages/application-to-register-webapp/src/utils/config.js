export const SERVER_PORT = process.env.PORT || 3000
export const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1'
export const REDIS_PORT = process.env.REDIS_PORT || '6379'
export const REDIS_TLS = process.env.REDIS_TLS || false
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD || ''
export const SESSION_COOKIE_PASSWORD = process.env.SESSION_COOKIE_PASSWORD || 'the-password-must-be-at-least-32-characters-long'
export const KEEP_ALIVE_TIMEOUT_MS = process.env.KEEP_ALIVE_TIMEOUT_MS || undefined
export const INITIALISE_DATABASE = process.env.INITIALISE_DATABASE || false
export const DATABASE_HOST = process.env.DATABSE_HOST || 'localhost'
export const DATABASE_NAME = process.env.DATABSE_HOST || 'Biodiversity_MVP'
export const DATABASE_PORT = process.env.DATABSE_PORT || 5432
export const DATABASE_USER = process.env.DATABSE_USER || 'postgres'
export const DATABASE_PASSWORD = process.env.DATABSE_PASSWORD || 'postgres'

