var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var SourceMapSupport = require('source-map-support');
var mongoose = require('mongoose');
var bb = require('express-busboy');
var app = express();
var MongoStore = require('connect-mongo');

// express-busboy to parse multipart/form-data
bb.extend(app);

//Connect DB
mongoose.connect('mongodb://localhost:27017/userbase');
var userdb = mongoose.connection;

userdb.on('error', console.error.bind(console, 'connection error:'));
userdb.once('open', function () {
  // we're connected!
  console.log("Userbase is connected")
});

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: MongoStore.create(userdb)
}));

// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE")
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept,x-access-token, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, *");
  next();
})

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({extended:false}));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// var port = process.env.PORT || 4001;
// // add Source Map Support
// SourceMapSupport.install();


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
