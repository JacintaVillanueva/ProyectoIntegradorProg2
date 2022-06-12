const db = require('../db/models')
const products = db.Product
const {Op} = require("sequelize")

const indexController = {
    index: function(req, res ) {
        products.findAll({
            order:[ ['created_at', 'DESC'] ],
            limit: 10})
        .then(function (product) {
            return res.render ('index',{ producto: product})
        })
        .catch(error => console.log (error))
    }
}

module.exports = indexController;