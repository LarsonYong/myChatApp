var express = require('express');
var userController = require('../controllers/user.controller')
var authController = require('../controllers/auth.controller')
var verifyToken = require('../controllers/token.controller')


// get an instance of express router
var router = express.Router();

// router.get('/1', function(req,res,next) {
//   res.send('You got me')
// })
//
router.post('/1', function(req,res,next) {
  res.send('Post request')
})
router.route('/login')
    .post(authController.login);

router.route('/token')
      .get(verifyToken);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log("123123")
});

router.get('/*', function(req,res,next) {
  res.send('You got me all')
})

module.exports = router;
