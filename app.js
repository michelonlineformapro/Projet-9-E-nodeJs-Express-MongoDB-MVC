const express = require('express');

const app = express();

app.use(express.static(__dirname + '/Public'));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}))

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(request.method === 'OPTIONS'){
        response.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return response.status(200).json({});
    }
    next();
})

//Utiliser un fichier de routes
const routes = require('./Backend/Routes/livres.routes');

app.use('/', routes)

module.exports = app;