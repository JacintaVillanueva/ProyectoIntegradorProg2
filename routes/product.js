const express = require('express'); //nos va a permitir modularizar el sistema de ruteo
const router = express.Router();

const productoController = require("../Controladores/controladorProducts")
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/'));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage });

//ruta que muestra los modelos

router.get ('/add', productoController.agregarProducto ); //vitsa del formulario de agregar producto
router.post ('/add', upload.single("imagen"), productoController.nuevoProducto); // procesa info del formulario

router.get ('/', productoController.detalleProducto ); 
router.get ('/:id', productoController.detalleProducto );

//editar producto
router.get ('/editar/:id', productoController.showEdit); //muestra vista edit del formulario
router.post('/editar/:id', upload.single("imagen"), productoController.edit); //procesa cambios en la publicacion

//borrar producto
router.post('/borrar/:id', productoController.borrar); 


module.exports = router 
 
