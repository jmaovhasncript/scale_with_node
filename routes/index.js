/**
 * Created by mohankumar on 19/02/16.
 *
 */

/***
 * modules.exports allows to export many functionality
 */

module.exports.index = index;
module.exports.login = login;
module.exports.loginProcess = loginProcess;
module.exports.chat = chat;

 function index(req,res){
     res.send("index");
 }
function login(req,res){
     res.send("login");
 }
function loginProcess(req,res){
     res.redirect('/');
 }
function chat(req,res){
     res.send("chat");
 }


