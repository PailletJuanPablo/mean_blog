//Creamos una instancia de express
var express = require('express');
//Importamos el controlador de usuario
var UserController = require('../controladores/usuario');

//Utilizamos el modulo router de Express
var router = express.Router();
// Importamos el middleware para manejar authenticacion
var md_auth = require ('../middlewares/auth')

// Rutasd de la App
router.get('/ver',UserController.getUsers);
router.post('/registro',UserController.saveUser);
router.post('/login',UserController.loginUser);
// Lo exportamos para usar en app.js
module.exports = router;


