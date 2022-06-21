const db = require('../db/models/index.js');
let resultadosR= require('../db/models/Productos.js');

const searchProducts = {


index: function (req, res) {
    //res.render ('searchResults', { searchResults: resultadosR.lista});
    let product =req.query.search;
    let errors = {}

    if (product ==""){
        errors.message = "No completaste este campo"
        res.locals.errors = errors;
        return res.reder('searchResults.ejs')
    }
    else {
db.product.findall({   
     where: {
     [op.or]:[
{nombreDelProducto:{[op.like]:"%"+ product +"%",}},
{descripcion:{[op.like]:"%"+ product +"%",}},
{users_id:{[op.like]:"%"+ product +"%",}},
     ]
    },
    order:[
        ['name','ASC']
    ],
    include: [
        {association:'users'},
    {association:'comments'}
    ],

})
.then((data)) 
    }









},








}










module.exports = searchProducts;