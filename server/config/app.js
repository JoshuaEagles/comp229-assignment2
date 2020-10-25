// app.js - Joshua Eagles - 301078033 - 2020-10-25

let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// Authentication Modules
let session = require('express-session');
let passport = require('passport');
let user = require('../models/user');

// Used for messaging
let flash = require('connect-flash');

let indexRouter = require('../routes/index');
let loginRouter = require('../routes/login');
let businessContactsRouter = require('../routes/business_contacts.js');

// database setup
let mongoose = require('mongoose');
let DB = require('./db');

// point mongoose to the DB URI
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=>{
  console.log('Connected to MongoDB...');
});

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));

// Setup express-session
let auth = require('./auth');
app.use(session({
	secret: auth.secret,
	saveUninitialized: false, 
	resave: false,
}));

// Setup flash 
app.use(flash());

// Setup passport and authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(user.createStrategy());

// Setup serialize and deserializing the user for passport 
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

//user.register(new user({username: "admin"}), "admin", (err) => {console.log('user registered')});

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/business_contacts', businessContactsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: "Error" } );
});

module.exports = app;
