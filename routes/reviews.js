const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


console.log('above')
router.post('/:id', reviewsCtrl.create)
console.log('below')
router.delete('/reviews/:id', reviewsCtrl.deleteReview);

module.exports = router;