const getGames = "SELECT * FROM games";
const getGamesById = "SELECT * FROM games where gameid = $1"

module.exports = {
    getGames,
};