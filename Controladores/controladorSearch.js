let resultadosR= require('../db/models/Productos.js');

const searchProducts = {


index: function (req, res) {
    res.render ('searchResults', { searchResults: resultadosR.lista});
}



}





module.exports = searchProducts;