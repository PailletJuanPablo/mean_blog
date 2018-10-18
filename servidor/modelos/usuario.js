'use strict'

// Importamos mongoose para utilizarlo
var mongoose = require('mongoose');

//Creamos un objeto del tipo Schema para configurar modelos
var Schema = mongoose.Schema;

//Creamos el modelo
var UserSchema = Schema({
    nombre: String,
    email: String,
    password: String
});

//Lo exportamos
module.exports = mongoose.model('User', UserSchema);