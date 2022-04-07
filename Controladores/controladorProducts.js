let productosP = require('../db/productos');


const productController = {

index: function (req, res) {
return res.render ('product',{product: productosP.lista})
}, 

create: function (req, res) {
return res.render ('product',{product: productosP})

},

show: function (req, res) {
    return res.render ('product',{product: productosP})
}

}

module.exports = productController;