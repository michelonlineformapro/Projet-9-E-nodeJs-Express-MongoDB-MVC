//Appel de mongose
const mongoose = require('mongoose');
//Chemin nodeJs
let path = require('path');
//Appel model livres Model/livre.model.js
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

//Details de chaque
exports.getSingleLivre = async (request, response) => {
    //Requet de recup de l'id
    let livdreId = request.params.id;

    //MongoDB propose la fonction findById()
    await Livres.findById({
        _id: livdreId
    },
        //Si on detecte une erreur
        (err, data) =>{
            if(err){
                response.status(500).json({
                    message: 'Une erreur est survenue lors de la recherche du livre'
                });
            }else{
                response.status(200).json({
                    message: "Votre livre a été touvé",
                    data
                })
            }
        }
        )
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
            console.log("livre ajouté :" + response.status(201))
            response.redirect('/')
        }
    })
}

//Supprimer un livre

exports.deleteLivre = async (request, response) => {
    //Requet de recup de l'id
    let livdreId = request.params.id;
    //Mongoose  propose delete One
    await Livres.deleteOne({
        _id: livdreId
    },(err, data) => {
        if(err){
            response.status(500).json({
                message: 'Une erreur est survenue lors de la supression du livre'
            });
        }else{
            response.status(200).json({
                message: "Livre supprimer",
                data
            })
        }
    })
}

//Mise a jour d'un livre

exports.updateLivre =  async (request, response) => {
    //Recuperer id
    let livresData = new Livres({
        _id: request.params.id,
        nomLivre: request.body.nomLivre,
        descriptionLivre: request.body.descriptionLivre,
        prixLivre: request.body.prixLivre,
        imageLivre: request.body.imageLivre
    });
    //Mongoose propose le methode findByIdAndUpdate(3 paramètres id + data + callback)
    await Livres.updateOne({_id: request.params.id}, livresData)
        .then(() => {
            response.status(201).json({
                message: 'Livre est a jour! c ok good',
            })
            console.log(response.data)
        })

        .catch((error) => {
                response.status(400).json({
                    error: error
                });
            }
        );
};



