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
     res.render('index',{layout :"layout",title:"mohan"});
 }
function login(req,res){
    res.render('login',{layout :"layout",title:"mohan"});
 }
function loginProcess(req,res){
     res.redirect('/');
 }
function chat(req,res){
    res.render('chat',{layout :"layout",title:"mohan"});
 }


