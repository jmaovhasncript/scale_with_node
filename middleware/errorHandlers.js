/**
 * Created by mohankumar on 19/02/16.
 */
 exports.notFound = function notFound(req,res,next){
     res.send(404,"you are lost");
 };


// next is very important for middleware
exports.error = function (err,req,res,next) {
    console.log(err);
    res.send(500,'some thing broke');
}