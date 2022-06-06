const db = require('index.js');

const alias = 'comentario'

const cols = {

id: {
    autoIncrement: true,
    primaryKey: true,
    type: 'integer',
},

textoDelComentario: {
    type: DataTypes.STRING(500),
},

}

const config = {
    tableName: 'comentarios',
    timestamps: false,
    underscored: true,
}


const comentarios = sequelize.define(alias, cols, config)

module.exports = comentarios