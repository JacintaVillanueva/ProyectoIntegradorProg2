
const db = require("../db/models");
const op = db.Sequelize.Op;
const product = db.Product;

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