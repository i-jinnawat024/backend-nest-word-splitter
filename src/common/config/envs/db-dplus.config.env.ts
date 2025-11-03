import { registerAs } from '@nestjs/config'

export const ENV_DB_DPLUS = 'db.dplus'
export const DBSB40_SERVER = 'db.dplus.server'
export const ENV_DB_DPLUS_USERNAME = 'db.dplus.username'
export const ENV_DB_DPLUS_PASSWORD = 'db.dplus.password'
export const ENV_DB_DPLUS_DATABASE = 'db.dplus.database'

export default registerAs('db.dplus', () => ({
  server: process.env.DBSB40_SERVER,
  username: process.env.DBSB40_USER,
  password: process.env.DBSB40_PASS,
  database: process.env.DBSB40_DATA_TEMP,
}))
