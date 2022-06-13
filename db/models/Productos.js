

module.exports = (sequelize, DataTypes)=> {

const alias = 'Product'

const cols = {

id_product: {
    autoIncrement: true,
    primaryKey: true,
    type: 'integer',
},

name_product: {
    type: DataTypes.STRING(15),
},

product_description: {
    type: DataTypes.STRING(255),
},

image_product: {
    type: DataTypes.STRING (1000),
},

createAT: {
    type: DataTypes.DATE,
},

updateAT: {
    type: DataTypes.DATE,
},
} 

const config = {
    tableName: 'products',
    timestamps: false,
    underscored: true,
}


const Product = sequelize.define(alias, cols, config)
Product.associate = function(models){

    Product.belongsTo(models.User, { 
        as:'User',
        foreignKey: 'user_id'
    })
    Product.hasMany(models.comentario, {
        as:'comentario',
        foreignKey: 'product_id' //chequear on mi base de datos
    })
    } 
return Product

}


