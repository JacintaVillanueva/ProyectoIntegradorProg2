
let express = require('express');
let router = express.Router();
let usersControllerr = require('../Controladores/usersControllers')

router.get('/profile/:id',usersControllerr.profile);

router.get('/add',usersControllerr.profileEdit); 
router.get('/login',usersControllerr.login);

module.exports = router;

