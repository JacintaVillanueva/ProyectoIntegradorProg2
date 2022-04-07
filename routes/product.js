let express = require('express');
let router = express.Router();
let productControllerr = require('../Controladores/controladorProducts')

router.get('/',productControllerr.index);

router.get('/:id',productControllerr.show); ;

router.get('/add',productControllerr.create); 

module.exports = router;
