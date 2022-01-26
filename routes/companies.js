var express = require("express");
var router = express.Router();
var companiesCtrl = require("../controllers/companies");
const isLoggedIn = require("../config/auth");

router.get("/", companiesCtrl.index);
console.log('companies')
router.get("/new", companiesCtrl.newCompany);

router.get("/:id", companiesCtrl.show);

router.post("/", companiesCtrl.create);

router.delete('/:id', companiesCtrl.deleteCompany)
// router.post("/companies")
module.exports = router;