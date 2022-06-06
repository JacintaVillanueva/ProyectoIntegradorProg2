const db = require('index.js');

//module.exports = (sequelize, dataTypes)=> {

const alias = 'user'

const cols = {

id: {
    autoIncrement: true,
    primaryKey: true,
    type: 'integer',
},

nombre: {
    type: DataTypes.STRING,
},

apellido: {
    type: DataTypes.STRING,
},

email: {
    type: DataTypes.STRING,
},

password: {
    type: 'password',
},

image: {
    type: DataTypes.STRING,
},

fecha: {
    type: DataTypes.DATE,
},

dcumemento: {
   type: DataTypes.STRING(8),  
},

createAT: {
    type: DataTypes.DATE,
},

updateAT: {
    type: DataTypes.DATE,
},
} 

const config = {
    tableName: 'users',
    timestamps: false,
    underscored: true,
}


const users = sequelize.define(alias, cols, config)

//return users

//}

module.exports = users 