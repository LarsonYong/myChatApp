var mongoose = require('mongoose');;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

// import models
var User = require('../models/user.server.model.js')

login = (req,res) => {
  User.findOne({username: req.body.username}).select('+password').exec((err,user) => {
    console.log('User login request: { ', req.body.username, ' }')
    if (err) {
      res.status(500).send({auth:false, message:'Some err',err})
    }
    if (user){
      if (user.password === req.body.password) {
        // create a token
        var token =jwt.sign({id: user._id}, config.secret, {
          expiresIn: 86400 //expires in 24 hours
        });

        var userDetail = {'username':user.username,}
        return res.status(202).send({'auth': true, 'message':'Success login','user':user,'token':token})
      }
      else {
        res.status(401).send({'auth':false, 'message':'Wrong password'})
      }
    }
    else {
      res.status(404).send({'auth':false,'message':'No such user'})
    }
  })
}

module.exports = {login}
