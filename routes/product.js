let express = require('express');
let router = express.Router();
let productControllerr = require('../Controladores/controladorProducts')

router.get('/lista',productControllerr.index);

router.get('/add',productControllerr.create); 

module.exports = router;
