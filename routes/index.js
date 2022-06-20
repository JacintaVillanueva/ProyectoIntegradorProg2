var express = require('express');
var router = express.Router();

let indexController = require('../Controladores/indexController');

/* GET home page. */
router.get('/', indexController.index);   // No funciona  
router.get('/resultado', indexController.resultados); //ruta que me mmuestra los resultados de busqueda

module.exports = router;
