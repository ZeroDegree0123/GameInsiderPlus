const Company = require('../models/company');

module.exports = {
    index,
    newCompany,
    show,
    create,
    deleteCompany,
}

function index(req, res) {
    Company.find({}).then(function (companies) {
        res.render("companies/index", { companies })
    })
}

function newCompany(req, res) {
        res.render("companies/new");
}

function show(req, res) {
    Company.findById(req.params.id, (err, company) => {
        res.render("companies/show", { company });
    });
  }

function create(req, res) {
    const company = new Company(req.body);
    console.log(company)
    company.save(function (err) {
        if (err) return res.render("companies/new");
        res.redirect("/companies");
    });
}

function deleteCompany(req, res) {
    Company.findByIdAndDelete(req.params.id, function(err, company) {
        if (err) return res.render('/');
        res.redirect("/companies");
    })
}