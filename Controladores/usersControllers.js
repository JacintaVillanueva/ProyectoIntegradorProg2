let usuariosU = require('../db/usuarios');


const usersController = {

profile: function (req, res) {
    let idProducto = req.params.id
return res.render ('profile',{profile: usuariosU.lista})
}, 

profileEdit: function (req, res) {
return res.render ('profile-edit',{profileEdit: usuariosU.lista})

},

login: function (req,res){
    
}


}

module.exports = usersController;