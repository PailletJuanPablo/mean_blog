'use strict'

// Importamos modelo de usuario y bcrypt para encriptar contraseñas
var Usuario = require('../modelos/usuario')
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
  var usuario = new Usuario()
  var body = req.body
  console.log(body)
  if(!body.nombre || !body.email){
    return res.send({message:"Introduce email y nombre"})
  }
  // Tomamos los valores desde los body del body
  usuario.nombre = body.nombre
  usuario.email = body.email
  // Verificamos que la constraseña se haya enviado en request,
  // caso contrario devolvemos un mensaje de error
  if (!body.password) {
    return res.status(202).send({ mensaje: 'Introduce contraseña' })
  }
  // Si se recibio encriptamos contraseña
  usuario.password = bcrypt.hashSync(body.password, saltRounds);
  usuario.save().then((usuarioGuardado)=>{
    return res.send(usuarioGuardado)
  })
}

// LOGUEAR USUARIO

let login = (req, res) => {
  // Recibimos los parametros del body con body-parser
  let body = req.body

  let email = body.email
  let password = body.password
// Buscamos un usuario en base al email que recibimos del body
  Usuario.findOne({email: email.toLowerCase()})
  // si se realiza la busqueda se ejecuta un then
  // Posteriormente, devolverá un false si no se encontró usuario
  .then((usuarioEncontrado)=>{
    // Si no se encontro usuario (usuarioEncontrado == false)
    if (!usuarioEncontrado){
      return res.send({mensaje:"No existe usuario"})
    }
    // Sino, continuamos
    // Comparamos la contraseña enviada en el body con la que tenemos guardada en base de datos (ambas encriptadas)
    bcrypt.compare(password,usuarioEncontrado.password)
    .then((passOk)=>{
      if(passOk){
        // Si salió todo bien, enviamos el JWT del usuario, que le permitirá loguearse
        return res.status(200).send({
          token: jwt.createToken(usuarioEncontrado)
        })
      }else{
        // Sinó, la contraseña no es correcta
        return res.status(400).send({message:"Contraseña incorrecta"})
      }
    })
  });
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
