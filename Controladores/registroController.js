const bcrypt = require('bcryptjs')
const db = require("../db/models");
const op = db.Sequelize.Op;
const users = db.User

let registerController = {
  
    register: function (req,res){
        return res.render ('register')
    },

    login: function (req,res){
        return res.render ('login')
    },

    store:function(req, res){

        //console.log("AAAAAAA"+JSON.stringify(req.body))
        console.log("ddd",req.body)
        let errors = {}
        if(req.body.email == ""){
            errors.message = "El email es obligatorio";
            console.log(errors) // Guardar errors en locals
            return res.render('register')
        } else if(req.body.password == ""){
            errors.message = "La contraseña es obligatoria";
            console.log(errors) // Guardar errors en locals
            return res.render('register')
        } else if(req.body.retypePassword == ""){
            errors.message = "La contraseña es obligatoria";
            console.log(errors) // Guardar errors en locals
            return res.render('register')
        }else if(req.password != req.retypePassword){
            errors.message = "Las contraseñas no coinciden";
            console.log(errors) // Guardar errors en locals
            return res.render('register')
        }//else if (req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpg' && req.file.mimetype !== 'image/jpeg'){
            //errors.message = "El archivo debe ser jpg o png";
            //console.log(errors) // Guardar errors en locals
            //return res.render('register')
       // }
        else {
            users.findOne({
                where: {email: req.body.email}
            })
            .then(function(user){
                if(user != null){
                    errors.message = "El email ya esta registrado por favor elija otro";
                    console.log(errors) // Guardar errors en locals
                    return res.render('register')                
                }else {
                    let user = {
                        name_users: req.body.name,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10)
                        //image_users: req.file.filename

                    }

                    users.create(user)
                        .then(user => {
                            return res.redirect('/users/login')
                        })
                        .catch(e=>{
                            console.log(e)
                        })
                }
            }
            )
        }
    } 
}


module.exports = registerController;