//Appel de mongoose
const mongoose = require('mongoose');

//Utilisation des promesse es6
mongoose.Promise = global.Promise;

//Reprise de la nomenclature de la collection mongoDB -> BDD ecommerce -> collection = livres
const LivreSchema = new mongoose.Schema({
    nomLivre: {type: String},
    descriptionLivre: {type: String},
    prixLivre: {type: Number},
    imageLivre: {type: String},

});

//Export du model inporter dans le fichier Controller livre.controller.js
module.exports = mongoose.model('livres', LivreSchema, 'livres');