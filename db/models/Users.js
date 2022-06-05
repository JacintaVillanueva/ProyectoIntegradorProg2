const alias = 'user'

const cols = {
id: {
    autoIncrement: true,
    primaryKey: true,
    type: 'integer',
},

nombre: {
    type: dataTypes.STRING,
},

apellido: {
    type: dataTypes.STRING,
},

email: {
    type: dataTypes.STRING,
},

password: {
    type: 'password',
},

image: {
    type: 'image',
},

fecha: {
    type: dataTypes.DATE,
},

dcumemento: {
   type: dataTypes.STRING(8),  
},

createAT: {
    type: dataTypes.DATE,
},

updateAT: {
    type: dataTypes.DATE,
},
}

const config = {
    tableName: 'users',
    timestamps: false,
    underscored: true,
}


const users = sequelize.define(alias, cols, config)

