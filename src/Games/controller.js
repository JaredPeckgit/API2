const pool = require("../db"); // Changed from '../../db' to '../db' (src/db.js)
const queries = require("./queries");

const getGames = (req, res) => {
    console.log("Executing getGames");
    pool.query(queries.getGames, (error, results) => {
        if (error) {
            console.error("Query error:", error);
            return res.status(500).send("Database error occurred");
        }
        console.log("getGames results:", results.rows);
        res.status(200).json(results.rows);
    });
};

const getGamesById = (req, res) => {
    console.log("Executing getGamesById");
    const gameId = parseInt(req.params.id);
    if (isNaN(gameId)) {
        console.log("Invalid ID:", req.params.id);
        return res.status(400).json({ error: "Invalid value format" });
    }

    console.log("Received Game ID:", gameId);
    pool.query(queries.getGamesById, [gameId], (error, results) => {
        if (error) {
            console.error("Database error:", error);
            return res.status(500).json({ error: "Database error occurred" });
        }
        console.log("getGamesById results:", results.rows);
        if (results.rows.length === 0) {
            return res.status(404).json({ error: "Game not found" });
        }
        res.status(200).json(results.rows[0]);
    });
};



const postGames = (req, res) => {
    console.log("Executing postGames");
    const {title,year,platform} = req.body;
    

   
    pool.query(queries.postGames, [title,year,platform],(error, results) => {
        if (error) {
            console.error("Query error:", error);
            return res.status(500).send("Database error occurred");
        }
        console.log("getGames results:", results.rows);
        res.status(200).json(results.rows);
    });
};

const putGames = (req, res) => {
    console.log("Executing postGames");
    const {title,year,platform} = req.body;
    

   
    pool.query(queries.putGames, [title,year,platform],(error, results) => {
        if (error) {
            console.error("Query error:", error);
            return res.status(500).send("Database error occurred");
        }
        console.log("getGames results:", results.rows);
        res.status(200).json(results.rows);
    });
}


module.exports = {
    getGames,
    getGamesById,
    postGames,
    putGames,
};