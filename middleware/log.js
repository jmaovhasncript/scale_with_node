/**
 * Created by mohankumar on 19/02/16.
 */

exports.log = function (req,res,next) {
    console.log(req.url);
    next();
}