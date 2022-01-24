const Game = require('../models/game');

module.exports = {
    newGame,
    show,
    create,
}


function newGame(req, res) {
      res.render("games/new", { title: 'Add Game'});
}

function show(req, res) {
    Game.find({}, function(err, games) {
        res.render('games/show', { title: 'All Games', games });
      });
    }

function create(req, res) {
    const game = new Game(req.body);
    game.save(function (err) {
    if (err) return res.render("games/new");
    res.redirect("games/show");
  });
}