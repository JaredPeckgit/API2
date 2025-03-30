/*
const express = require("express");
const app = express();

const gamesRoutes = require("./src/Games/routes");

const port = 8004;

app.use(express.json());

const cors = require("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Hello Point Park University");
});

app.use("/api/v1/games", gamesRoutes);

app.listen(port, () => console.log(`Running on port ${port}`));
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