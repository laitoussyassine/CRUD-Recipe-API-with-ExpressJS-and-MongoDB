const User = require('../models/userSchema');
const bcrypt = require('bcrypt');


const credentialCheck = async (req, res, next) => {
    const {email, password} = req.body
    const user = await User.findOne({email});
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            req.user = user
            return next();
        }
        return res.status(400).json({
            success : false, 
            data : user.email,
            message  : 'incorrect password!'
        })
    } else {
        return res.status(400).json({
            success : false, 
            data : user,
            message  : 'this email is not register email!'
        })
    }
}
module.exports = credentialCheck;