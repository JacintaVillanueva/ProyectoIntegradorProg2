

module.exports = (sequelize, DataTypes)=> {

const alias = 'Product'

const cols = {

id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false
},

name_product: {
    type: DataTypes.STRING,
    allowNull: false
},

product_description: {
    type: DataTypes.STRING,
    allowNull: false
},

image_product: {
    type: DataTypes.STRING,
    allowNull: false
},

created_at: {
    type: DataTypes.DATE,
    allowNull: false
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
    timestamps: true,
    underscored: true,
}


const Product = sequelize.define(alias, cols, config)
Product.associate = function(models){

    Product.belongsTo(models.User, { 
        as:'users',
        foreignKey: 'id_users'
    })
    Product.hasMany(models.comentario,{
        as:'comentarios',
        foreingKey:'id_product'
    })
   
    } 
return Product;

}


