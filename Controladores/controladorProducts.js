let productosP = require('../db/productos');


const productController = {

index: function (req, res) {
    let idProducto = req.params.id
return res.render ('product',{product: idProducto})
}, 

create: function (req, res) {
return res.render ('productAdd',{product: productosP.lista})

},


}

module.exports = productController;