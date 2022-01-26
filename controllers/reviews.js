const Game = require('../models/game');

module.exports = {
    create,
    deleteReview,
}

function create(req, res) {
    Game.findById(req.params.id, function(err, game) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        game.reviews.push(req.body); 
        game.save(function(err) {
          res.redirect(`/games/${game._id}`);
        });
      });
      console.log(req.body)
    }

function deleteReview(req, res) {
    Game.findOne({'reviews._id': req.params.id}).then(function(game) {
        const review = game.reviews.id(req.params.id);
        if (!review.user.equals(req.user._id)) return res.redirect(`/games/${game._id}`);
        review.remove();
        game.save().then(function() {
          res.redirect(`/games/${game._id}`);
        }).catch(function(err) {
          return next(err);
        });
      });
    }
