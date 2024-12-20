// configures and exports a PostgreSQL connection pool using .env variables
// establishes a connection to the database


import { Pool } from "pg"
import dotenv from "dotenv"

dotenv.config()

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT || 5432),
  database: process.env.PGDATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
})

export const awaitConnection = async (): Promise<void> => {
  try {
    await pool.connect()
  } catch (error) {
    console.error(error)
  }
}

export default pool
