var express = require('express'); //Importando el módulo Express.
var app = express(); //Declarando la App de Express.

var port = process.env.PORT || 3000; //Colocamos el puerto por el que funcionará el servidor.

/*El directorio virtual para el contenido estático será '/assets'*/
app.use('/assets', express.static(__dirname + '/public')); 
app.use('/', function(req, res, next) {
    console.log(`Requestr Url: ${req.url}`); //Esto hace que se imprima la URL en la terminal.
    next();
});

//Creando la primera ruta (se encontrará al nivel de la raíz '/'), Hello Wolrd!
app.get('/', function(req, res) {
    res.send(`<html><head><link href=assets/style.css type=text/css rel= stylesheet /></head>
    <body><h1>Hello world!</h1></body></html>`); //Utilizamos backticks para añadir el estilo (CSS).
});

//Creando la segunda ruta '/api', la cual regresa un objeto JSON.
app.get('/api', function(req, res) {
    res.send({firstName: 'Alan', lastName: 'Hernández'});
});

//Creando la tercera ruta, la cual recibirá un parámetro.
app.get('/person/:id', function(req, res) {
    res.send(`<html><head></head><body><h1>Person: ${req.params.id} </h1></body></html>`);
});

app.listen(port); //Se levanta el server y lo pone a la escucha de alguna petición.