const db = require('../db/models')
const Product = db.Product;
const op = require("sequelize")

const indexController = {
    home: function(req, res){
        Product.findAll({
            order: [[ "createdAt" , "DESC"]],
            limit : 10,
            include : [{association: "users"}]
        })
        .then((result) => {
            return res.render('index', {producto : result})
        })
        .catch((error) => {
           return res.send(error);
        })
    },
    resultados: function(req, res){
        let search = req.query.search; //query captura lo que escribe el usuario en el buscador
        db.Productos.findAll({
            where : {
                [op.or]:[
                    {name_product: {[op.like]: "%" + search + "%"}}, 
                    {product_description: {[op.like]: "%" + search + "%"}}
                ]
            },
            include: [{association: 'users'}]
        })
        .then((data) => {
            console.log(data)
                return res.render('searchResults', { producto: data})
            })
            .catch((error) => {
                return res.send(error);
            })
        }
}

module.exports = indexController;