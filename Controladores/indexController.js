let productos = require('../db/models/Productos.js');

const indexController = {
    index: function(req, res ) {
        //res.send("hola");
        res.render('index', { });
    }
}

module.exports = indexController;