var express = require("express");
var router = express.Router();
var gamesCtrl = require("../controllers/games");
const isLoggedIn = require("../config/auth");


router.get("/", gamesCtrl.index);
console.log('going')
router.get("/new", gamesCtrl.newGame);

router.get("/:id", gamesCtrl.show);

router.post("/", gamesCtrl.create);

router.delete('/:id', gamesCtrl.deleteGame)

module.exports = router;