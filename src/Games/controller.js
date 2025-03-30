const pool = require('../db');
const queries = require('./queries');

const getGames = (req, res) => {
    pool.query(queries.getGames, (error, results) => {
        if (error) {
            console.error("Query error:", error);
            return res.status(500).send("Database error occurred");
        }
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getGames,
};