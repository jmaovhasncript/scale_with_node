/**
 * Created by mohankumar on 19/02/16.
 */

 var express = require('express');
 var app = express();
 var routes  = require('./routes/index');
var errorHandler = require('./middleware/errorHandlers');
var logger = require('./middleware/log');

// middleware 1) our routes are just the final middleware function req,res next
app.use(logger.log);


//server static file

app.use(express.static(__dirname + "/static"));



 app.get('/', routes.index);
 app.get('/login', routes.login);
 app.post('/login',routes.loginProcess);
 app.get('/chat',routes.chat);
 app.get('/error',function(req,res,next){
  next(new Error("error "));
 });

app.use(errorHandler.error);
app.use(errorHandler.notFound);



app.listen('4000');
console.log("app listing to port 4000");