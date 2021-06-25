//Appel de mongoose (import depuis node-module
const mongoose = require('mongoose');


//Connexion a mongoose + url locale de mongodb
mongoose.connect("mongodb://localhost:27017/ecommerce",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

//Creation d'une promesse = ES6
mongoose.Promise = global.Promise;

//Message dans la console si la connexion est réussie
mongoose.connection.on('connected', () => {
    console.log(`Connexion a MongoDB avec succès !`);
});

//Detection de erreur de connexion
mongoose.connection.on('error', (err) => {
    console.log(`Erreur de connexion a MongoDB -> ${err.message}`);
});

//Appel du model (livreSchema)
require('./Backend/Models/livre.model');

//demarrer le serveur : import du fichier de configuration app.js
const app = require('./app')

//Port d'coute du server et message de succès
const server = app.listen(3000, () => {
    console.log(`Le serveur est demarré sur le port ${server.address().port}`)
})

