var express = require("express");
var router = express.Router();
var aboutCtrl = require("../controllers/about");

router.get("/", aboutCtrl.index);

module.exports = router;