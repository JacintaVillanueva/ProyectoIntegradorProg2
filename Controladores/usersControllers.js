let usuariosU = require('../db/models');

const usersController = {

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

login: function (req,res){
    return res.render ('login',{login: usuariosU.lista})
},


}

module.exports = usersController;