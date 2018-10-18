// Importamos express
var express = require('express');
// Definimos una variable router que contendrá el módulo de rutas de express
var router = express.Router();
//Importamos el controlador del elemento
let publicacionesController = require('../controladores/publicacion');
//Importamos método para verificar si el usuario está logueado
var verificarUsuario = require('../middlewares/auth');

//Rutas de categorías
router.get('/',publicacionesController.obtenerPublicaciones);
router.post('/',publicacionesController.crearPublicacion);
router.get('/elementos/:id',publicacionesController.verPublicacion);
router.post('/elementos/:id',publicacionesController.actualizarPublicacion);
router.post('/elementos/eliminar/:id',publicacionesController.eliminarPublicacion);

module.exports = router;
