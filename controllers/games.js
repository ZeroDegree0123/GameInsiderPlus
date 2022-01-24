const Game = require('../models/game');

module.exports = {
    newGame,
    show,
}


function newGame(req, res) {
      res.render("games/new", { title: 'Add Game'});
}

function show(req, res) {
    Game.find({}, function(err, games) {
        res.render('games/show', { title: 'All Games', games });
      });
    }