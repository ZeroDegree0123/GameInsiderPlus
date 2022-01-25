var express = require("express");
var router = express.Router();
var gamesCtrl = require("../controllers/games");
const isLoggedIn = require("../config/auth");


router.get("/", gamesCtrl.index);

router.get("/new", gamesCtrl.newGame);

router.get("/:id", gamesCtrl.show);

router.delete('/games/:id', gamesCtrl.deleteGame)

router.post("/", gamesCtrl.create);

module.exports = router;