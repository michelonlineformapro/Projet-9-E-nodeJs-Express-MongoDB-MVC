const mongoose = require('mongoose');
//const Livres = mongoose.model('livres')

//Appel du framework
const express = require('express');
//Creation des routes
const router = express.Router();


//Appel du fichier controller.js

const livreController = require('../Controllers/livres.controller');

//Route de base
router.get('/', livreController.baseRoute)


//Afficher tous le livrs au format json
router.get('/livres', livreController.getLivres)

//Creer un livre
router.post('/ajouter-livre', livreController.createLivre)

module.exports = router;