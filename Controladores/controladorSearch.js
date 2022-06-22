const db = require('../db/models/index.js');
let resultadosR= require('../db/models/Product.js');
const op = db.Sequelize.Op;

const searchProducts = {


index: function (req, res) {
    //res.render ('searchResults', { searchResults: resultadosR.lista});
    let product =req.query.search;
    let errors = {}

    if (product ==""){
        errors.message = "No completaste este campo"
        res.locals.errors = errors;
        return res.render('searchResults')
    }
    else {
db.Product.findAll({   
     where: {
     [op.or]:[
{name_product:{[op.like]:"%"+ product +"%",}},
{product_description:{[op.like]:"%"+ product +"%",}}
     ]
    },
    order:[
        ['name_product','ASC']
    ],
    include: [
        {association:'users'},
    {association:'comentarios'}
    ],

})
.then((data)=> {
return res.render('searchResults',{searchResults:data})

}) 
.catch((err)=>{
    console.log(err)
})
    }},

}










module.exports = searchProducts;