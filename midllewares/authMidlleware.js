const jwt = require('jsonwebtoken');
require('dotenv').config()

const requireAuth = async(req, res, next) => {
    const token = req.cookies.jwt;

    if(!token) {
        return res.status(401).json({
            success: false,
            message: "unauthorazed"
        })
    } else {
         await jwt.verify(token, process.env.secret_key,(err,decodedToken)=>{
            if(err){
                return res.status(401).send({
                        message: "Invalid Token"
                })
            }else{
                next();
            }
        });
    }
}
module.exports = requireAuth;