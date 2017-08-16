const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSign = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res, next) {
    return res.json({ message: 'Super secret code is ABC123' });
  });

  app.post('/signin', requireSign, Authentication.signin);
  app.post('/signup', Authentication.signup);
}
