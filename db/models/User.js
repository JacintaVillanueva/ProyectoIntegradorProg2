
module.exports = (sequelize, DataTypes)=> {

const alias = 'User'

const cols = {

id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false
},

nombre_users: {
    type: DataTypes.STRING,
    allowNull: false
},

apellido: {
    type: DataTypes.STRING,
    allowNull: false
},

email: {
    type: DataTypes.STRING,
    allowNull: false
},

password: {
    type: DataTypes.STRING,
    allowNull: false
},

image_users: {
    type: DataTypes.STRING,
    allowNull: false
},

fecha_nacimiento: {
    type: DataTypes.DATE,
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
numero_documento: {
    type: DataTypes.STRING,  
    allowNull: false
 },
} 

const config = {
    tableName: 'users',
    timestamps: true,
    underscored: true,
}


const User = sequelize.define(alias, cols, config)

User.associate = function(models){
User.hasMany(models.Product, {
    as: 'products',
    foreignKey: 'id_users'
})
User.hasMany(models.comentario, {
    as: 'comentarios',
    foreignKey: 'id_users'
})
/*User.belongsToMany(models.User, {
    as: 'Followers',
    through: 'followers',
    otherKey: 'seguidor_id',
    foreignKey: 'seguido_id',
    timestamps: false,
})
*/

}
    return User;

}
