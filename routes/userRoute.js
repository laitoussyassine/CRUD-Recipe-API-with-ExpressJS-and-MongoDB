const  {Router} = require('express');
const  authController  = require('../controllers/authController');
const credentialCheck = require('../midllewares/credentialCheck')


const router = Router();

router.get('/signup',authController.signup_get);
router.post('/signup',authController.signup_post);
router.get('/login',authController.login_get);
router.post('/login', credentialCheck,authController.login_post);



module.exports = router;