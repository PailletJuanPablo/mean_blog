// Importamos express
var express = require('express')
// Definimos una variable router que contendrá el módulo de rutas de express
var router = express.Router()
// Importamos el controlador del elemento
let publicacionesController = require('../controladores/publicacion')
// Importamos método para verificar si el usuario está logueado
var verificarUsuario = require('../middlewares/auth')
// Importamos multer, extensión para poder subir archivos y texto en una sola request
var multer = require('multer')
var upload = multer({
  storage: multer.diskStorage({
    // Lo configuramos para que almacene los archivos en la carpeta "Subidas"
    destination: './uploads',
    // Y les asigne como nombre el que tenía originalmente el archivo
    filename: function (req, file, callback) {
      let name = file.originalname.trim()
      callback(null, name)
    }
  })
})

// Rutas de Publicaciones
// router es el módulo de rutas
// Posteriormente se especifica la petición (get, post, put, etc.)
// En los parámetros de este método, se especifica la ruta en sí (ej /imagen)
// Y la función de nuestro controlador a llamar
// Opcionalmente, pueden insertarse middlewares antes de la función a llamar para realizar alguna verificación adicional

router.get('/', publicacionesController.obtenerPublicaciones)
router.post(
  '/',
  [verificarUsuario],
  upload.single('imagen'),
  publicacionesController.crearPublicacion
)
router.get('/ver/:id', publicacionesController.verPublicacion)
router.post(
  '/editar/:id',
  verificarUsuario,
  publicacionesController.actualizarPublicacion
)
router.post(
  '/eliminar/',
  verificarUsuario,
  publicacionesController.eliminarPublicacion
)

module.exports = router
