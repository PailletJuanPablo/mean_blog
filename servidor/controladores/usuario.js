'use strict'

// Importamos modelo de usuario y bcrypt para encriptar contraseñas
var User = require('../modelos/usuario')
var bcrypt = require('bcrypt');
// Definimos la cantidad de repeticiones del encriptado
const saltRounds = 10


// Importamos servicio de JWT
var jwt = require('../services/jwt');


// Funciones que se ejecutaran desde las rutas
function prueba (req, res) {
  res.status(200).send({
    message: 'Estas logueado!'
  })
}

// CREAR USUARIO

let crearUsuario = (req, res) => {
  var user = new User()
  var params = req.body

  console.log(params)

  // Tomamos los valores desde los params del body
  user.nombre = params.nombre
  user.email = params.email

  // Verificamos que la constraseña se haya enviado en request,
  // caso contrario devolvemos un mensaje de error
  if (!params.password) {
    return res.status(202).send({ message: 'Introduce contraseña' })
  }
  // Si se recibio encriptamos contraseña
  user.password = bcrypt.hashSync(params.password, saltRounds)
}

// LOGUEAR USUARIO

let login = (req, res) => {
  // Recibimos los parametros del body con body-parser
  let params = req.body

  let email = params.email
  let password = params.password

  User.findOne({ email: email.toLowerCase() }, (err, user) => {
    // En primer lugar buscamos si existe un usuario con ese email
    if (err) {
      res.status(500).send({ message: 'Error en peticion' })
    } else {
      if (!user) {
        res.status(404).send({ message: 'El usuario no existe' })
      } else {
        // Si existe, comprobamos la contraseña
        bcrypt.compare(password, user.password, (err, check) => {
          if (check) {
            // Si el check es correcto, se devuelven los datos del user ahora logueado
            res.status(200).send({
              token: jwt.createToken(user)
            })
          } else {
            res
              .status(404)
              .send({ message: 'El usuario no ha podido loguearse' })
          }
        })
      }
    }
  })
}

// ACTUALIZAR USUARIO

let actualizarUsuario = (req, res) => {
  // req.param se refiere al parametro de url
  var userId = req.params.id
  // req.body al cuerpo de la petición
  var update = req.body

  User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
    if (err) {
      res.status(500).send({ message: 'No se pudo actualizar el user' })
    } else {
      if (!userUpdated) {
        res.status(404).send('No se pudo actualizar')
      } else {
        res.status(200).send({ user: userUpdated })
      }
    }
  })
}

let obtenerUsuarios = (req, res) => {
  User.find({}, 'name surname email', (err, users) => {
    if (err) {
      return err
    } else {
      res.status(200).send(users)
    }
  })
}

// Exportamos los métodos en un módulo para poder utilizarlos
module.exports = {
  crearUsuario,
  login,
  actualizarUsuario,
  obtenerUsuarios,
  prueba
}
