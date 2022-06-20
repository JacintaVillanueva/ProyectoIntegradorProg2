let db = require('../db/models');
const User = db.User
const bcrypt = require('bcryptjs');

const usersController = 
{

profile: function (req, res) {
    let idProducto = req.params.id
return res.render ('profile',{profile: usuariosU.lista,
    nombre: usuariosU.lista[0].usuario,
    mail: usuariosU.lista[0].mail,
    fotoDePerfil: usuariosU.lista[0].fotoDePerfil

})
}, 

profileEdit: function (req, res) {
return res.render ('profile-edit',{
    profileEdit: usuariosU.lista,
nombre: usuariosU.lista[0].usuario,
mail: usuariosU.lista[0].mail,
fotoDePerfil: usuariosU.lista[0].fotoDePerfil

})

},
    edit: function (req, res) {
let userId = req.params.userId;

user.findByPk(userId).then(function (user){
    return res.render('userEdit', {userEdit:user})
    
})
 .catch( e => {
    console.log(err)
})
    },
    update: function (req, res) {
        let user ={
            nombre_users: req.body.name,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
        }
        if (req.file == undefined) {
            user.avatar =''
        } else {
            user.avatar = req.file.filename;
        }

user.update(user,{
    where: {
        id: req.session.user.id   // tiene que ser el usuario de session.
    }


}) 
.then (fuction(user)
// Aca tengo que manejar las sessiones

)
.catch ( e => {
    console.log(err)
})

}








}

module.exports = usersController;