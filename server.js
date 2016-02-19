/**
 * Created by mohankumar on 19/02/16.
 */

 var express = require('express');
 var app = express();
 var routes  = require('./routes/index');
var errorHandler = require('./middleware/errorHandlers');

// middleware 1) our routes are just the final middleware function req,res next





 app.get('/', routes.index);
 app.get('/login', routes.login);
 app.post('/login',routes.loginProcess);
 app.get('/chat',routes.chat);

app.use(errorHandler.notFound);

app.listen('4000');
console.log("app listing to port 4000");