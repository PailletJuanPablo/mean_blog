'use strict'

// Importamos mongoose para utilizarlo
var mongoose = require('mongoose');

//Creamos un objeto del tipo Schema para configurar modelos
var Schema = mongoose.Schema;

//Creamos el modelo
var UserSchema = Schema({
    nombre: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true}
});

//Lo exportamos
module.exports = mongoose.model('User', UserSchema);