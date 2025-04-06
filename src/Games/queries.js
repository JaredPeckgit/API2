const getGames = "SELECT * FROM games";
const getGamesById = "SELECT * FROM games WHERE id = $1";
const postGames = "INSERT INTO games(title, year, platform) VALUES($1, $2, $3) RETURNING *"; // Fixed for consistency
const putGames = "UPDATE games SET title = $1, year = $2, platform = $3 WHERE id = $4 RETURNING *"; // Added RETURNING *

module.exports = {
    getGames,
    getGamesById,
    postGames,
    putGames,
};