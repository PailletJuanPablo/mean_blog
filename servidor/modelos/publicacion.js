// Importamos mongoose para utilizarlo
let mongoose = require('mongoose');

//Creamos un objeto del tipo Schema para configurar modelos
let Schema = mongoose.Schema;

//Creamos el modelo de Fecha
let Publicacion = Schema({
    titulo:{type:String,required:true},
    contenido: {type:String,required:true},
    imagen:{type:String,default: 'https://www.foot.com/wp-content/uploads/2017/03/placeholder.gif'}
    // Aquí se especifica en JSON
    // nombreCampo:{type:tipo de dato, required: true or false (si es requerido o no )}
    
});

//Lo exportamos
module.exports = mongoose.model('Publicacion', Publicacion);