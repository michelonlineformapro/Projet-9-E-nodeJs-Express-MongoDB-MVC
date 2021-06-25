//Import de framework express
const express = require('express');
//Instance du framework dans une constante
const app = express();

const axios = require('axios');
//Appel des dossier et fichier contenu dans le dossier Public du Backend
app.use(express.static(__dirname + '/Frontend'));

//reconait les requète Objets comme des json Object
app.use(express.json());

//Reconnais les requètes Objet comme des strings et des arrays
app.use(express.urlencoded({
    extended: true
}))

//Option des requètes HTTP dans le headers
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(request.method === 'OPTIONS'){
        response.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return response.status(200).json({});
    }
    next();
})

//Import du fichier  Routes/routes.js
const routes = require('./Backend/Routes/livres.routes');

//Utilisé les routes au point d'entrée
app.use('/', routes)

//Export du modules App.js
module.exports = app;

