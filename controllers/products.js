Company = require("../models/company")

module.exports = {
    create,
    deleteProduct,
}

function create(req, res) {
    Company.findById(req.params.id, function(err, company) {  
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        company.products.push(req.body); 
        company.save(function(err) {
          res.redirect(`/companies/${company._id}`);
        });
      });
      console.log(req.body)
    }

function deleteProduct(req, res) {
    Company.findOne({'products.id': req.params.id}).then(function(company) {
        const product = company.products.id(req.params.id);
        if (!product.user.equals(req.user.id)) return res.redirect(`/companies/${company._id}`);
        product.remove();
        company.save().then(function() {
          res.redirect(`/companies/${company._id}`);
        }).catch(function(err) {
          return next(err);
        });
      });
    }
