const Game = require('../models/game');

module.exports = {
    newGame,
    show,
    create,
    index,
    deleteGame,
    edit
}




function index(req, res) {
    Game.find({}).then(function (games) {
        res.render("games/index", { games })
    });
}

function newGame(req, res) {
    res.render("games/new");
}

function edit(req, res, next) {
    Game.findById({_id: req.params.id, userRecommending: req.user._id}, function(err, game) {
        if (err || !game) return res.redirect('/games');
        res.render('games/edit', {game});
    });
}

function show(req, res) {
    Game.findById(req.params.id, (err, game) => {
        res.render("games/show", { game });
    });
  }

function deleteGame(req, res, next) {
    Game.findByIdAndDelete(req.params.id, function(err, game) {
        if (err) return res.render('/');
        res.redirect("/games");
    });
    
}

function create(req, res) {
    const game = new Game(req.body);
    console.log(game)
    game.save(function (err) {
        if (err) return res.render("games/new");
        res.redirect("/games");
    });
}