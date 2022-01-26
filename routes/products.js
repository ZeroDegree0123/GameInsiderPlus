const express = require('express');
const router = express.Router();
const productsCtrl = require('../controllers/products');


router.post("/companies/:id/products", productsCtrl.create);

router.delete('/products/:id', productsCtrl.deleteProduct);

module.exports = router;