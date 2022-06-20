
let express = require('express');
let router = express.Router();
const multer = require('multer')
const path = require('path');
let usersControllerr = require('../Controladores/usersControllers')
let registerControllerr = require('../Controladores/registroController')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.join(__dirname,"../public/images/avatars") )
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.original))
    }
})

let upload = multer({storage: storage})


//edicion de usuarios
router.get('/profile/:id',usersControllerr.profile);  
router.get('/profile/edit/:id',usersControllerr.profileEdit);
router.post('/profile/edit',usersControllerr.profileUpdate);
// router.get('/add',usersControllerr.profileEdit); 

//login y log out
router.get('/login',registerControllerr.login);
router.post('/login',registerControllerr.storeLogin)
router.post('/logout',registerControllerr.Logout)

//register
router.get('/register',registerControllerr.register);
router.post('/register',upload.single('image_users'),registerControllerr.store);
router.post('/register',registerControllerr.store);



module.exports = router;

