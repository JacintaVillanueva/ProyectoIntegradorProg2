const db = require("../db/models");
const Comment = db.comentario;

const commentController = {
    comentarios: function (req, res) {
        if(req.session.user != undefined ){
            let nuevoComment = {
                id_product: req.params.id,
                id_user: req.session.user.id,
                comentario: req.body.comentario,
            }
    
            Comment.create(nuevoComment)
    
            .then(()=>{
                return res.redirect ('/productos/'+ req.params.id)
            })
    
            .catch((error) => {
                return res.send(error);
            })
        } else {
            return res.redirect('/users/login')
        }
        
    }
}
module.exports = commentController