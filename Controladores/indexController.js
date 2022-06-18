const db = require('../db/models')
const products = db.Product
const op = require("sequelize")

const indexController = {
    index: function(req, res){
        products.findAll({
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
        products.findAll({
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
                return res.render('search-results', { producto: data})
            })
            .catch((error) => {
                return res.send(error);
            })
        }
}

module.exports = indexController;