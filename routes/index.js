var router = require('express').Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOME' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'],
  prompt: 'select_account',
}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
 