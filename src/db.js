/*

const Pool = require("pg").Pool;

const pool = new Pool({

    //user: "postgres",
    //host: "localhost",
    //password: "jaed1213",
    //database: "API",
    //port: 5433,
    // RENDER
    
    user: "games_fjwx_user",
    host: "dpg-cvkq1r8dl3ps738bt9dg-a.ohio-postgres.render.com",
    password: "SPZbHKWFsDWpAAGJY0aoaUJrYix1rNx0",
    database: "games_fjwx",
    port: 5432,
    
});


// Optional: Log connection status for debugging
pool.on('connect', () => {
    console.log("Successfully connected to the database");
});

pool.on('error', (err) => {
    console.error("Database error:", err.stack);
});

module.exports = pool;
*/

const Pool = require("pg").Pool;

console.log("DATABASE_URL:", process.env.DATABASE_URL); // Debug: Log the connection string

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || "postgres://postgres:jaed1213@localhost:5433/API",
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

pool.on('connect', () => {
    console.log("Successfully connected to the database");
});

pool.on('error', (err) => {
    console.error("Database error:", err.stack);
});

module.exports = pool;

