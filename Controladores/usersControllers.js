let db = require('../db/models');
const User = db.User
const bcrypt = require('bcryptjs');


const usersController = 
{

 
profile: (req, res) => {
        const id = req.params.id
      //  console.log(id);
        User.findByPk(id, {
            include: [
                {association: 'Product'},
                {association: 'comentario'}
            ]})
            .then(user => {
                console.log(user);
                if(user == null){
                    return res.redirect('/')
                }
                else{
                    res.render('profile', {user: user})
                }
            })
            .catch(error => {
                console.log(error);
            })

    }, 

   profileEdit: function (req, res) {                                         
let userId = req.params.userId; 

User.findByPk(userId).then(function (user){
    return res.render('profile-edit', {userEdit:user})             //responde a profile-edit
    
})
 .catch( e => {
    console.log(err)
})
    },
    profileUpdate: function (req, res) {                        // Boton que actualiza profile edit 
        let user ={
            nombre_users: req.body.name,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            fecha: req.body.fecha,
            dni: req.body.dni,
        }
        if (req.file == undefined) {
            user.avatar =''
        } else {
            user.avatar = req.file.filename;
        }

User.update(user,{
    where: {
        id: req.session.user.id   // tiene que ser el usuario de session.
    }


}) 
.then(user => {
    return res.redirect('/')
})

// Aca tengo que manejar las sessiones

.catch ( e => {
    console.log(err)
})

}








}

module.exports = usersController;