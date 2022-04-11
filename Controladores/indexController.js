let productos = require('../db/productos')

const indexController = {
    index: function(req, res ) {
        //res.send("hola");
        res.render('index', { products: productos.lista });
    }
}

module.exports = indexController;