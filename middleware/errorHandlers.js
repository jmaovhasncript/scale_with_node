/**
 * Created by mohankumar on 19/02/16.
 */
 exports.notFound = function notFound(req,res,next){
     res.send(404,"you are lost");
 }