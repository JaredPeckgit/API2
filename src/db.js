const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables from .env file

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false
});

module.exports = pool;
// Local configuration (commented out)
/*
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "jaed1213",
    database: "API",
    port: 5433,
});
*/

// Optional: Log connection status for debugging
pool.on('connect', () => {
    console.log("Successfully connected to the database");
});

pool.on('error', (err) => {
    console.error("Database error:", err.stack);
});

module.exports = pool;