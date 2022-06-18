const express = require('express'); //nos va a permitir modularizar el sistema de ruteo
const router = express.Router();

const comentController = require ('../Controladores/CommentarioController');


//comentarios
router.post('/comentar/:id', comentController.comentarios);

module.exports = router;