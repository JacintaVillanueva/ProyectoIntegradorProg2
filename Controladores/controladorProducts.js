let productosP = require('../db/productos');
let comentariosC = require('../db/comentarios');

const productController = {

index: function (req, res) {
    let idProducto = req.params.id
return res.render ('product',{product: idProducto, comments: comentariosC.lista})
}, 

create: function (req, res) {
return res.render ('productAdd',{product: productosP.lista})

},

comentarios: function (req, res) {
    return res.render ('product',{comments: comentariosC.lista})
}

}

module.exports = productController;