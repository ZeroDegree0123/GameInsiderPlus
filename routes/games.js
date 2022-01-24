var express = require("express");
var router = express.Router();
var gamesCtrl = require("../controllers/games");
const isLoggedIn = require("../config/auth");


router.get("/", gamesCtrl.show);
router.get("/new", gamesCtrl.newGame);


module.exports = router;