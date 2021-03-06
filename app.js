const tools = require('./tools.js');
var express = require('express');
var ipfilter = require('express-ipfilter').IpFilter;

var path = require('path');
var favicon = require('static-favicon');
// setting logger
//var fs = require('fs');
//var rfs = require('rotating-file-stream') // version 2.x

var path = require('path');
var log4js = require('log4js');
var log = log4js.getLogger("app");

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//session Use
const redis = require('redis')
const session = require('express-session')
let RedisStore = require('connect-redis')(session)

var csurf = require('csurf');
//var csrfProtection = csurf({ cookie: true })

var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// config file
log.info("*** print config information ***")
log.info(process.env.NODE_ENV);
var config = tools.getConfigData();
log.info(config);

// redis setting
let redisClient = redis.createClient({
	host: config.redis_host,
	port: config.redis_port,
	db: config.redis_db,
})
redisClient.unref()
//redisClient.on('error', console.log)
redisClient.on('error', function(err) {
	log.error('Redis error: ' + err);
})

// security
var ips = config.security_ips; // example: [ '127.0.0.1', 'localhost', '::1'];
// ip white list
app.use(ipfilter(ips, {
	mode: 'allow'
}));
// ip black list
//app.use( ipfilter( ips ) );

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());

app.use(bodyParser.json());
app.use(express.urlencoded({
	extended: true
}))

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//session setup
app.use(session({
	resave: false, //毎回セッションを作成しない
	saveUninitialized: true, //未初期化状態のセッションを保存しない
	store: new RedisStore({
		client: redisClient
	}),
	secret: config.session_secret_key, // Secret Keyで暗号化し、改ざんを防ぐ
	ttl: 3600,
	cookie: {
		//生存期間は1日
		maxAge: 1 * 24 * 60 * 1000,
		//httpsを使用しない
		secure: false
	}
}));
app.use(csurf());

app.use('/', routes);
//app.use('/users', users);

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
		log.error("[xrain debug:app.js]Something went wrong:", err);
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to client
app.use(function(err, req, res, next) {
	log.error("[xrain debug:app.js] production error=>", err)
	res.status(err.status || 500);
	// Replace error message
	if (err.message === "invalid csrf token") {
		err.message = "Permission denied";
	}
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;
