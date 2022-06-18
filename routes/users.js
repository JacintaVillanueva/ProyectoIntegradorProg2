
let express = require('express');
let router = express.Router();
const multer = require('multer')
const path = require('path');
let usersControllerr = require('../Controladores/usersControllers')
let registerControllerr = require('../Controladores/registroController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.join(__dirname,"../public/images/avatars") )

    },
    filename: function (req, file, cb) {
        cb(null,file.fieldname + "-" + Date.now()+ path.extname(file.original))
    }
})

let upload = multer({storage: storage})



router.get('/profile/:id',usersControllerr.profile);

router.get('/add',usersControllerr.profileEdit); 
router.get('/login',registerControllerr.login);
router.get('/register',registerControllerr.register);
router.post('/register',upload.single('file'),registerControllerr.store);
router.post('/register',registerControllerr.store);
router.get('/user/edit/:userId',);
router.post('/user/edit',);


module.exports = router;

