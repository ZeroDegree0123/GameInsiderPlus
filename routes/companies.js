var express = require("express");
var router = express.Router();
var companiesCtrl = require("../controllers/companies");
const isLoggedIn = require("../config/auth");

router.get("/", companiesCtrl.index);

router.get("/new", isLoggedIn, companiesCtrl.newCompany);

router.post("/", isLoggedIn, companiesCtrl.create);

router.get("/:id", companiesCtrl.show);

router.delete('/:id', isLoggedIn, companiesCtrl.deleteCompany)
// router.post("/companies")
module.exports = router;