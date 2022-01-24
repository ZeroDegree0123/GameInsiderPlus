const game = require('../models/game');
const Game = require('../models/game');

module.exports = {
    newGame,
    // show,
    create,
    index
}

function index(req, res) {
    Game.find({}).then(function (games) {
        res.render("games/index", { games })
    })
}

function newGame(req, res) {
    res.render("games/new");
}

// function show(req, res) {
//     Game.find({}, function (err, game) {
//         res.render('games/show', { title: 'All Games', game });
//     });
// }

function create(req, res) {
    const game = new Game(req.body);
    console.log(game)
    game.save(function (err) {
        if (err) return res.render("games/new");
        res.redirect("/games");
    });
}