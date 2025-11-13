
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const  pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'todo_db',
  password: process.env.DB_PASSWORD || 'newpass',
  port: parseInt(process.env.DB_PORT) || 5432,
  ssl: { rejectUnauthorized: false}
})


// Test connection
const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('Database connected successfully');
    client.release();
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

export { pool, testConnection };