

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
    timestamps: true,
    underscored: true,
}


const comentarios = sequelize.define(alias, cols, config)

comentarios.associate = function(models){

    comentarios.belongsTo(models.User, {
        as:'User',
        foreignKey: 'id_product'
    })
    comentarios.belongsTo(models.Product, {
        as:'Product',
        foreignKey: 'id_product'
    })
}


return comentarios;

}
