//Appel de mongoose
const mongoose = require('mongoose');

require('dotenv').config({
    path: '.env'
});

//Connexion a mongoose
mongoose.connect("mongodb://localhost:27017/ecommerce",{
    useUnifiedTopology: true,
    useNewUrlParser: true
});

//Creation d'une promesse = ES6
mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) => {
    console.log(`Erreur de connexion a MongoDB -> ${err.message}`);
});


//Appel du model
require('./Backend/Models/livre.model');



//demarrer le serveur appel du fichier de configuration app.js
const app = require('./app')


const server = app.listen(3000, () => {
    console.log(`Le serveur est demarré sur le port ${server.address().port}`)
})

