const User  = require("../models/userSchema");
const jwt = require("jsonwebtoken");
require('dotenv').config()

maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.secret_key, {
        expiresIn: maxAge
    })
}

module.exports.signup_get = (req,res) => {
    res.render('signup');
}

module.exports.login_get = (req,res) => {
    res.render('login');
}


// sign up user
module.exports.signup_post = async (req,res) => {
    const {email, password} = req.body;

    try {
        const ckeckEmail = await User.find({email:email})
        if (ckeckEmail.length !== 0) {
            return res.status(400).json({
                succuess : false,
                message : 'Email already exist!'
            })
        }
        
        const user = await User.create({email, password});
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000})
        return res.status(201).json({
            success : true, 
            data : user,
            message  : 'Email created !'
        });

    } catch (error) {
        return res.status(500).json({
            success : false,
            message : error
        });
    }
}


module.exports.login_post = async (req,res) => {
    const {email, password} = req.body;
    try {
        const token = createToken(req.user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
        res.status(200).json({user: req.user._id, token: token});
    }
    catch (error) {
        res.status(400).json({
            success : false, 
            message : error
        })
    }
}