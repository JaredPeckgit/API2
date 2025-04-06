const getGames = "SELECT * FROM games";
const getGamesById = "SELECT * FROM games WHERE id = $1";
const postGames = "INSERT into games(title, year, platform) VALUES($1,$2,$3)"
const putGames = "UPDATE games set title = $1, year = $2, platform = $3 where id = $4"

module.exports = {
    getGames,
    getGamesById,
    postGames,
    putGames,
};