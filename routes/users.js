
let express = require('express');
let router = express.Router();
let usersControllerr = require('../Controladores/usersControllers')
let registerControllerr = require('../Controladores/registroController')

router.get('/profile/:id',usersControllerr.profile);

router.get('/add',usersControllerr.profileEdit); 
router.get('/login',registerControllerr.login);
router.get('/register',registerControllerr.register);
router.post('/register',registerControllerr.store);

module.exports = router;

