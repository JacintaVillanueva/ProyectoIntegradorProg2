const db = require('../db/models/index.js');
let resultadosR= require('../db/models/Productos.js');

const searchProducts = {


index: function (req, res) {
    res.render ('searchResults', { searchResults: resultadosR.lista});
},
create: function (req, res) {
return res.send('Hola Mundo')

},
show: function (req, res) {
    const id =req.query.search;
    db.findAll()
    .then((resultado) => {
        res.render('searchResults', {products: resultado})

    });


}




}





module.exports = searchProducts;