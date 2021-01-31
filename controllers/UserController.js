const User = require('../models/User');

function create(req, res){
   var user = new User();
   var params = req.body;
   
   
   user.name = params.name;
   user.price = params.price;
   user.type = params.type;
   user.brand = params.brand;

   user.save((error, userCreated) => {
         if(error){
             res.status(500).send({
                 statusCode: 500,
                 message: "Error en el servidor"
             })
         }else {
             if(!userCreated){
             res.status(400).send({
                 statusCode: 400,
                message: "Error al ingresar la mercancia"
             })
             
         }else{
             res.status(200).send({
                 statusCode: 200,
                 message: "Mercancia ingresada correctamente",
                 dataUser: userCreated
             })
         } 
    } })  
}


function update(req, res) {

var parameters = req.body;
var idUser = req.params.idUser;

User.findByIdAndUpdate( idUser, parameters, (error, userUpdated) => {
    if(error){
        res.status(500).send({
            statusCode: 500,
            message: "Error en el servidor"
        })
    }else{
        if(!userUpdated) {
            res.status(400).send({
                statusCode: 400,
                message: "Error al actualizar la mercancia"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Mercancia actualizada correctamente"
            })
        }
    }
})

}


function remove(req, res) {
    var idUser = req.params.idUser; 
    
    User.findByIdAndDelete( idUser, (error, userRemoved) => {
        if(error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        }else{
            if (!userRemoved){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al eliminar la mercancia"
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario eliminado correctamente"
                })
            }
        }
    })
 
}


function getAllUsers(req, res){
    var brand = req.params.brand;
    User.find( {brand: brand}, (error, allUsers) => {
        if(error){
            res.status(500).send({
            statusCode: 500,
            message: "Error en el servidor"
        })
       }else{
           res.status(200).send({
               statusCode: 200,
               message: "Toda la mercancia",
               allUsers: allUsers
           })
       }
    })
}


module.exports = {
    create,
    update,
    remove,
    getAllUsers
}