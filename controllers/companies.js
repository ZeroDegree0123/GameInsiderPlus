const Company = require('../models/company');

module.exports = {
    index,
    newCompany
    
}

function index(req, res) {
    Company.find({}).then(function (companies) {
        res.render("companies/index", { companies })
    })
}

function newCompany(req, res) {
        res.render("/companies/new");
}