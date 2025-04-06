const { Router } = require("express");
const controller = require("./controller");
const router = Router();

console.log("Routes module loaded");

router.get('/', (req, res) => {
    console.log("GET /api/v1/games/ called");
    controller.getGames(req, res);
});

router.get('/:id', (req, res) => {
    console.log(`GET /api/v1/games/${req.params.id} called`);
    controller.getGamesById(req, res);
});


router.post('/', controller.postGames);

router.put('/:id', controller.putGames)

module.exports = router;