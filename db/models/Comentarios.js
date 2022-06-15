

module.exports = (sequelize, DataTypes)=> {
const alias = 'comentario'

const cols = {

id: {
    autoIncrement: true,
    primaryKey: true,
    type: 'integer',
},

textoDelComentario: {
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
    tableName: 'comentarios',
    timestamps: false,
    underscored: true,
}


const comentarios = sequelize.define(alias, cols, config)


return comentarios

}
