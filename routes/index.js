var express = require('express');
var router = express.Router();

const controlador = require('../Controladores/indexController');

/* GET home page. */
router.get('/', controlador.home);   // No funciona  
router.get('/resultado', controlador.resultados); //ruta que me mmuestra los resultados de busqueda

module.exports = router;
