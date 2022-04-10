let resultadosR= require('../db/productos');

const searchProducts = {


index: function (req, res) {
    res.render ('searchResults', { searchResults: resultadosR});
}



}





module.exports = searchProducts;