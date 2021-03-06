var createError = require('http-errors');
var express = require('express');
const db = require('./helpers/db')()
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var productRouter = require('./routes/product');

var app = express();


app.use(logger('dev'));
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ limit:'50mb',extended: true }));
app.use(cookieParser());

app.use('/product', productRouter);


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
  res.render('error');
});

module.exports = app;
