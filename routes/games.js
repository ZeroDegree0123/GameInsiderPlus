var express = require("express");
var router = express.Router();
var gamesCtrl = require("../controllers/games");
const isLoggedIn = require("../config/auth");



router.get("/", gamesCtrl.index);

router.get("/new", isLoggedIn, gamesCtrl.newGame);

router.get('/:id/edit', isLoggedIn, gamesCtrl.edit);

router.get("/:id", gamesCtrl.show);

router.post("/", isLoggedIn, gamesCtrl.create);

router.delete('/:id', isLoggedIn, gamesCtrl.deleteGame);

module.exports = router;