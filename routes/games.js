var express = require("express");
var router = express.Router();
var gamesCtrl = require("../controllers/games");
const isLoggedIn = require("../config/auth");



router.get("/", gamesCtrl.index);

router.get("/new", gamesCtrl.newGame);

router.get('/:id/edit', gamesCtrl.edit);

router.get("/:id", gamesCtrl.show);

router.post("/", gamesCtrl.create);

router.delete('/:id', gamesCtrl.deleteGame);

module.exports = router;