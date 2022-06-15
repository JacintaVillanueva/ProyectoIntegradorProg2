let usuariosU = require('../db/models');

const usersControllers = 
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
            name: req.body.name,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
        }
    }








}

module.exports = usersControllers;