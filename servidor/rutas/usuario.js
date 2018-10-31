//Creamos una instancia de express
var express = require('express');
//Importamos el controlador de usuario
var UserController = require('../controladores/usuario');

//Utilizamos el modulo router de Express
var router = express.Router();
// Importamos el middleware para manejar authenticacion
var md_auth = require ('../middlewares/auth');


// Rutas de Usuario
// router es el módulo de rutas
// Posteriormente se especifica la petición (get, post, put, etc.)
// En los parámetros de este método, se especifica la ruta en sí (ej /imagen)
// Y la función de nuestro controlador a llamar
// Opcionalmente, pueden insertarse middlewares antes de la función a llamar para realizar alguna verificación adicional

router.get('/',UserController.obtenerUsuarios);
router.post('/registro',UserController.crearUsuario);
router.post('/login',UserController.login);
router.get('/prueba',md_auth,UserController.prueba)
// Lo exportamos para usar en app.js
module.exports = router;