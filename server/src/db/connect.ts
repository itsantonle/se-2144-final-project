import { Pool } from "pg"
import dotenv from "dotenv"
dotenv.config()

const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: Number(process.env.DBPORT),
  database: "database",
})

export default pool
