//Appel de mongoose
const mongoose = require('mongoose');

//Utilisation des promesse es6
mongoose.Promise = global.Promise;

const LivreSchema = new mongoose.Schema({
    nomLivre: {type: String},
    descriptionLivre: {type: String},
    prixLivre: {type: Number},
    imageLivre: {type: String},

});

module.exports = mongoose.model('livres', LivreSchema, 'livres');