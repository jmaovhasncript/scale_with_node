/**
 * Created by mohankumar on 19/02/16.
 */

 var express = require('express');
 var app = express();

 app.get('*',function (req,res){

    res.send('hello this is  response');

 });

app.listen('4000');
console.log("app listing to port 4000");