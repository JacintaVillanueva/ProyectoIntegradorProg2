
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
},

apellido: {
    type: DataTypes.STRING,
},

email: {
    type: DataTypes.STRING,
},

password: {
    type: DataTypes.STRING,
},

image_users: {
    type: DataTypes.STRING,
},

fecha_nacimiento: {
    type: DataTypes.DATE,
},
created_at: {
    type: DataTypes.DATE,
},

updated_at: {
    type: DataTypes.DATE,
},
numero_documento: {
   type: DataTypes.STRING,  
},
deleted_at: {
    type: DataTypes.DATE,
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
    as: 'Product',
    foreignKey: 'id_users'
})
User.hasMany(models.comentario, {
    as: 'comentario',
    foreignKey: 'id_users'
})
/*User.belongsToMany(models.User, {
    as: 'Followers',
    through: 'followers',
    otherKey: 'seguidor_id',
    foreignKey: 'seguido_id',
    timestamps: false,
})


User.associate = function (models){
    User.hasMany(models.Product,{ 
as:'products',
foreignKey: 'id_users'

})
*/

}
    return User;

}
