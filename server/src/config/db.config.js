// config/db.js
import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test database connection
pool.connect()
  .then(client => {
    console.log('✅ Successfully connected to the database');
    client.release(); // important to release the client
  })
  .catch(err => {
    console.error('❌ Failed to connect to the database', err);
  });

export default pool;
