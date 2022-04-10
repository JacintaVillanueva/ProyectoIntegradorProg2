let express = require('express');
let router = express.Router();
let searchDatos = require('../Controladores/controladorSearch');

router.get('/resultados',searchDatos.index); ;

module.exports = router;
