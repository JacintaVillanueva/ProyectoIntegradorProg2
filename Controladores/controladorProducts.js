const db = require("../db/models");
const Product = db.Product;

const productoController = {
    //aca mostramos vista para agregar producto con la condicion de que el usuario debe estar logueado, sino me redirige al registro
    agregarProducto: function (req, res) {
        if(req.session.user != undefined ){
            return res.render('productAdd', { usuarios: [] });    // Chequear esto
        } else {
            return res.redirect('/users/register')
        }
        
    },
// aca buscamos un producto por su PK e incluimos asociacion con usuarios y comentarios del mismo. De esta manera, cuando me lleva a la vista de detalle yo veo el producto con su dueño y sus comentarios. 
    detalleProducto: function (req, res) {
        console.log(req.params);
        var id = req.params.id //variable que almacena el id 

        Product.findByPk(id,{ 
            include: [{association: 'users'},
                    {association: 'comentario',
                    include: [{association: 'users'}]}],
                    order: [[ "createdAt" , "DESC"]]
        })
        .then((producto) => {
                    return res.render('product', {
                        producto: producto, //en la vista uso producto para llamar al objeto literal que contiene el producto con los datos de su usuario y los comentarios del mismo
                    });
        })
        .catch((error) => {
            console.log(error)
            return res.send(error);
            
        })

    },
// nos muestra el formulario de editar que coincide con el id de
    showEdit: function (req, res) {
        Product.findByPk(req.params.id)
        .then(producto=>{
            return res.render('productEdit', {producto: producto}); //uso producto en la vista
        })
        
    },
    edit: function (req, res) {
        let errores = { message: "" }
        if (req.body.producto == '') {
            errores.message = errores.message + 'Completar el campo producto';
        }
        if (req.body.descripcion == '') {
            errores.message = errores.message + 'Completar el campo descripcion';
        }

        if (req.file == undefined) {
            errores.message = errores.message + 'Agregar imagen';
        }
        if (errores.message.length > 0) {
            res.locals.errores = errores;
            return res.render('productEdit');
        }
        else {
            let producto =  {
                producto: req.body.producto,
                descripcion:req.body.descripcion,
                image: req.file.filename,
                id_users: req.session.user.id 
        }
        Product.update (producto, {where: {id: req.params.id}})
        .then(function (producto) {
        return res.redirect('/productos/' + req.params.id)
    })
    .catch(error => console.log(error))   
}
},
    nuevoProducto: function (req, res) {
        let errores = { message: '' }
        if (req.body.producto == '') {
            errores.message = errores.message + 'Completar el campo producto';
        }
        if (req.body.descripcion == '') {
            errores.message = errores.message + 'Completar el campo descripcion';
        }

        if (req.file == undefined) {
            errores.message = errores.message + 'Agregar imagen';
        }

        if (errores.message.length > 0) {
            res.locals.errores = errores;
            return res.render('productAdd');
        }
            let producto = {
                producto: req.body.producto,
                descripcion:req.body.descripcion,
                image: req.file.filename,
                id_users: req.session.user.id 
            }
            Product.create (producto)

            .then(function (producto) {
                return res.redirect(`/productos/${producto.id}`)
            })
            .catch(error => console.log(error))   
},
    borrar: function(req, res){
        Product.destroy({ where: {id: req.params.id}})
        .then(response =>{
            return res.redirect('/')
        })
        .catch(error => console.log(error))  
    }
}

module.exports = productoController