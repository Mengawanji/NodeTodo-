import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const dbConfig = {
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'todo_db',
  password: process.env.DB_PASSWORD || 'newpass',
  port: parseInt(process.env.DB_PORT) || 5432,
};

const pool = new Pool(dbConfig);

// Test connection
const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('Database connected successfully');
    console.log(`Using database: ${dbConfig.database}`);
    client.release();
  } catch (error) {
    console.error('Database connection failed:', error.message);
    console.log('Database configuration:', {
      ...dbConfig,
      password: dbConfig.password ? '***' : 'Not set'
    });
    process.exit(1);
  }
};

export { pool, testConnection, dbConfig };