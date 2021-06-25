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

//Afficher les details de chaque livre
router.get('/livres/:id', livreController.getSingleLivre)

//Creer un livre
router.post('/ajouter-livre', livreController.createLivre)

//Supprimer un livre
router.delete('/supprimer/:id', livreController.deleteLivre)

//Mettre a jour un livre
router.put('/edit-livres/:id/', livreController.updateLivre);

//Export du module router
module.exports = router;