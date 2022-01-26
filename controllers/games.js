
const game = require('../models/game');
const Game = require('../models/game');

module.exports = {
    newGame,
    show,
    create,
    index,
    deleteGame,
    about,
    // edit
}


// function edit(req, res, next) {
//     const game = Game.findById(req.params.id)
//       res.render("games/edit", { game }); 
// }

function about(req, res) {
    res.render('games/about');
}



function index(req, res) {
    Game.find({}).then(function (games) {
        res.render("games/index", { games })
    })
}

function newGame(req, res) {
    res.render("games/new");
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
    })
    
}

function create(req, res) {
    const game = new Game(req.body);
    console.log(game)
    game.save(function (err) {
        if (err) return res.render("games/new");
        res.redirect("/games");
    });
}