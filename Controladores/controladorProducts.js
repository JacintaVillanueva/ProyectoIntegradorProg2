let productosP = require('../db/models/Productos.js');
let comentariosC = require('../db/models/Comentarios.js');

const productController = {

index: function (req, res) {
    let idProducto = req.params.id
return res.render ('product',{product: idProducto, comments: comentariosC.lista})
}, 

create: function (req, res) {
return res.render ('productAdd',{product: productosP.lista})

},


}

module.exports = productController;