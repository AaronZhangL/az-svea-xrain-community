var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

//session Use
// var session = require('express-session');
// var RedisStore = require('connect-redis')(session);

const redis = require('redis')
const session = require('express-session')
let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
  //password: 'my secret',
  db: 1,
})
redisClient.unref()
redisClient.on('error', console.log)

var bodyParser = require('body-parser');
var csurf = require('csurf');


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//session setup
app.use(session({resave: true,saveUninitialized: false,
    store: new RedisStore({ client: redisClient }),
    secret: 'secret' }));
app.use(csurf());

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
