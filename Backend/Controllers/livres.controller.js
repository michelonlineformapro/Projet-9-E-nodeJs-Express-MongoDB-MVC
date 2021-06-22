//Appel de mongose
const mongoose = require('mongoose');

let path = require('path');

//Appel model livres

const Livres = mongoose.model('livres');

//Creationde la routes

exports.baseRoute = async (request, response) => {
    response.sendFile(path.resolve(__dirname + "../../../Frontend/index.html"))
}

//Fonction pour recup tous livres de la collection livre au format js

exports.getLivres = async (request, response) => {
    const livres = await Livres.find();
    response.json(livres)
}

//Ajouter un livres
exports.createLivre = async (request, response) => {
    //MongoDb et mongoose porose la method save()
    await new Livres(request.body).save((err, data) =>{
        if(err){
            response.status(500).json({
                message: 'Une erreur est survenue lors de la creation du livre'
            });
        }else{
            response.status(200).json({
                message: "Votre livre a été creer",
                data
            })
        }
    })
}



