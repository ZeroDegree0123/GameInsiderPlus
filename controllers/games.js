const Game = require('../models/game');

module.exports = {
    newGame,
    show,
    create,
    index,
    deleteGame,
    edit,
    update
}


function update(req, res) {
    Game.findOneAndUpdate(
        {_id: req.params.id, userRecommending: req.user._id},
        req.body,
        {new: true},
        function(err, game) {
          if (err || !game) return res.redirect('/games');
          res.redirect('/games');
        }
      );
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
    console.log('routing1')
    Game.findById({_id: req.params.id, userRecommending: req.user._id}, function(err, game) {
        console.log('routing2')
        if (err || !game) return res.redirect('/games');
        res.render('games/edit', {game});
        console.log('routing3')
    });
}

function show(req, res) {
    Game.findById(req.params.id, (err, game) => {
        res.render("games/show", { game });
    });
  }

function deleteGame(req, res, next) {
    Game.findByIdAndDelete(req.params.id, function(err, game) {
        const gameId = game.games.id(req.params.id);
        if (!gameId.user.equals(req.user._id)) return res.redirect('/games');
        game.remove();
        game.save().then(function() {
            res.redirect('/games');
        }).catch(function(err) {
            return next(err);
        })
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