//Middleware para verificar que el usuario este logueado al realizar una request

"use strict";

// Importamos jwy y moment
var jwt = require("jwt-simple");

// Definimos clave secreta para el hash
var secret = "claveSecreta";

let verificarUsuario = (req, res, next) => {
  // Recibimos los datos de la request. Var next es de middlewares
  if (!req.headers.authorization) {
    return res.status(403).send({
      message: "Necesitas enviar un token de autenticacion"
    });
  }
  var token = req.headers.authorization.replace(/['"]+/g, "");
  try {
    // Hasta aqui tenemos el token y lo decodificamos
    jwt.decode(token, secret);
  } catch (ex) {
    return res.status(404).send({
      message: "Token no válido"
    });
  }
  next();

};

module.exports = verificarUsuario;