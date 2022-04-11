
let express = require('express');
let router = express.Router();
let usersControllerr = require('../Controladores/usersControllers')

router.get('/profile/:id',usersControllerr.profile);

router.get('/add',usersControllerr.profileEdit); 
router.get('/login',usersControllerr.login);
router.get('/register',usersControllerr.register);

module.exports = router;

