let productosP = require('../db/productos');


const productController = {

index: function (req, res) {
return res.render ('product',{product: productosP.lista})
}, 

create: function (req, res) {
return res.render ('productAdd',{product: productosP.lista})

},


}

module.exports = productController;