var express = require("express");
var router = express.Router();
var companiesCtrl = require("../controllers/companies");
const isLoggedIn = require("../config/auth");

router.get("/", companiesCtrl.index);

router.get("/new", companiesCtrl.newCompany);

// router.post("/companies")
module.exports = router;