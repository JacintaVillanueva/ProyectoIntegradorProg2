var express = require('express');
var router = express.Router();

const controlador = require('../Controladores/indexController');

/* GET home page. */
router.get('/', controlador.home);   
router.get('/resultado', controlador.resultados); //ruta que me mmuestra los resultados de busqueda

module.exports = router;
