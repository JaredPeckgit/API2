const getGames = "SELECT * FROM games";
const getGamesById = "SELECT * FROM games WHERE id = $1";
const postGames = "INSERT into games(title, year, platform) VALUES($1,$2,$3)"

module.exports = {
    getGames,
    getGamesById,
    postGames,
};