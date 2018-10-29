// Importamos express
var express = require("express");
// Importamos body-parser, una extensión que nos permitirá recibir campos de una request del tipo POST
var bodyParser = require("body-parser");
// Inicializamos express en otra variable
var app = express();
//Cargamos el módulo de mongoose
let mongoose = require("mongoose");
// Decimos que utilizaremos bodyparser. Esto permite recibir peticiones POST con un cuerpo (EJ: un formulario)
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 9999}));

// Configuramos cabeceras HTTP
// Esto permitirá recibir peticiones de cualquier origen (nos servirá cuando utilicemos Angular)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*") //* to give access to any origin
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization" //to give access to all the headers provided
  );
  if(req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); //to give access to all the methods provided
      return res.status(200).json({});
  }
  next();
});

//Configuramos el puerto que tendrá nuestro servidor
let puerto = process.env.PORT || 1234;

// Especificamos la base hacia donde nos conectaremos
// let direccionBaseDatos = 'mongodb://localhost:27017/nombre_base';
// Si están en su entorno local, la variable sería algo así
// En este caso nos conectaremos a una base remota
let direccionBaseDatos = "mongodb://meanblog:meanblog1234@ds237832.mlab.com:37832/meanblog"; 


// Ejecutamos el método connect de la variable que contiene a Mongoose
mongoose.connect(
  direccionBaseDatos,
  { useNewUrlParser: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log(
        "Se realizó la correción a la base de datos" + direccionBaseDatos
      );
      //Empezamos a escuchar el puerto
      app.listen(process.env.PORT || puerto, () => {
        console.log("Servidor corriendo en puerto: " + puerto);
      });
    }
  }
);


// Importamos y utilizamos las rutas
var rutas_publicaciones = require("./rutas/publicacion");
app.use('/publicaciones',rutas_publicaciones);
var rutas_usuario= require("./rutas/usuario");
app.use('/usuarios',rutas_usuario);
