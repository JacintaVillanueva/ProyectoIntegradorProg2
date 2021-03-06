

module.exports = (sequelize, DataTypes)=> {
const alias = 'comentario'

const cols = {

id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false
},
product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
},
id_users: {
    type: DataTypes.INTEGER,
    allowNull: false
},

texto_comentario: {
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


const comentario = sequelize.define(alias, cols, config)

comentario.associate = function(models){

    comentario.belongsTo(models.User, {
        as:'users',
        foreignKey: 'id_users'
    }),
    comentario.belongsTo(models.Product, {
        as:'products',
        foreignKey: 'product_id'
    })
}


return comentario;

}
