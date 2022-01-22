const Game = require('../models/game');

module.exports = {
    home,
}



function home(req, res) {
      res.render("games/home")
}
