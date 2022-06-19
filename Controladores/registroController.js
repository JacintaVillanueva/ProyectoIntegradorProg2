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

    storeLogin:function(req, res){
        let errors = {}

        users.findOne({
            where: [{email: req.body.email}]
        })
        .then (function (user) {
            if (user == null) {
        errors.message = "el usuario no existe"
       // res.Locals.errors = errors
       console.log(errors)
            return res.render('login')
         } else if (bcrypt.compareSync(req.body.password,user.password) == false) {
                errors.message = "la contraseña es incorrecta"
               // res.Locals.errors = errors
               console.log(errors)
                return res.render('login')
            }  else {
                return res.render('index')
            }       


        

        /*    else {
                if (req.body.recordarme !== undefined) {
                    res.cookie('userId',user.id, {maxAge:1000*60*5} )                     //cookie y session
                } 
                
                req.session.user = users
              return res.render('index')
            }*/

        })
        .catch(e=>{
            console.log(e)
        })

    },

    Logout: function(req, res){
        req.session.destroy()
    //    res.clearCookie('userId')                                                    //cookie 
        res.render('login')
    },



    store:function(req, res){
 
        let errors = {}
        if(req.body.email == ""){
            errors.message = "El email es obligatorio";     //Que salte en la pagina una alerta
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
         } else if(req.body.password < 3 ){               
                errors.message = "La contraseña debe tener al menos 3 caracteres";
                console.log(errors) // Guardar errors en locals    
                return res.render('register')
        }else if(req.body.password != req.body.retypePassword){          
            errors.message = "Las contraseñas no coinciden";
            console.log(errors) // Guardar errors en locals
            return res.render('register')
        }// else if (req.file.mimetype !== 'image/png' && req.body.avatar !== 'image/jpg' && req.body.avatar !== 'image/jpeg'){
         //   errors.message = "El archivo debe ser jpg o png";
         //   console.log(errors) // Guardar errors en locals
         //   return res.render('register')
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
                        nombre_users: req.body.name,
                        apellido: req.body.apellido,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10),
                        fecha_nacimiento: req.body.fecha, 
                        numero_documento: req.body.dni,
                        image_users: "nnn",              //arreglar porque no se sube la foto
                    }
                    console.log(user)
                    console.log(users)

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