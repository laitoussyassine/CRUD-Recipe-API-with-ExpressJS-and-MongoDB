const jwt = require('jsonwebtoken');
require('dotenv').config()

const requireAuth = (req, res, next) => {

    // const tokenn = req.header('authorization')
    const token = req.cookies.jwt;
    console.log(token);

    // check json web token exists & verified
    if (token) {
        jwt.verify(token, process.env.secret_key, (error, decodeToken) => {
            if (error) {
                return res.status(400).json({
                    success : false, 
                    message: error
                })
            } else {
                res.status(200).json({
                    success : true, 
                    message: decodeToken
                })
                return next();
            }
        });

    } else {
        return res.status(400).json({
            success : false, 
            message: "user have no token secret"
        })
    }
}
module.exports = requireAuth;