

module.exports = (sequelize, DataTypes)=> {

const alias = 'Product'

const cols = {

id: {
    autoIncrement: true,
    primaryKey: true,
    type: 'integer',
},

name_product: {
    type: DataTypes.STRING,
},

product_description: {
    type: DataTypes.STRING,
},

image_product: {
    type: DataTypes.STRING,
},

created_at: {
    type: DataTypes.DATE,
},

updated_at: {
    type: DataTypes.DATE,
},
deleted_at: {
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
        as:'users',
        foreignKey: 'id_users'
    })
    Product.hasMany(models.comentario,{
        as:'comentario',
        foreingKey:'id_product'
    })
   
    } 
return Product;

}


