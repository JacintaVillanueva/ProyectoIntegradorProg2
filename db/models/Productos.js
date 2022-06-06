const db = require('index.js');

//module.exports = (sequelize, dataTypes)=> {

const alias = 'product'

const cols = {

id: {
    autoIncrement: true,
    primaryKey: true,
    type: 'integer',
},

nombre: {
    type: DataTypes.STRING(15),
},

descripcion: {
    type: DataTypes.STRING(255),
},

image: {
    type: DataTypes.STRING (1000),
},

fecha: {
    type: DataTypes.DATE,
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


const products = sequelize.define(alias, cols, config)

//return products

//}


module.exports = products