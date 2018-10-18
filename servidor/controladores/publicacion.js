// Importamos los modelos Mongoose para poder acceder a sus metodos
// En este caso es un elemento de demo, deberán importar los que hayan creado
var Publicacion = require("../modelos/publiacion");

// ------------------------------------
// Método para obtener todos los elementos
// ------------------------------------

let obtenerPublicaciones = (req, res) =>{
    //Ejecutaremos el metodo find para obtener todos los elementos
    Publicaciones.find()
    // Esto ejecuta una promise, que podemos manejar con 
    //.then cuando es ejecutada con éxito, 
    .then((pulblicaciones)=>{
        // Devolvemos respuesta en formato JSON con todos los elementos recibidos
        return res.send(publicaciones)
    })
    //.catch cuando no lo es
    .catch((err)=>{
        // Devolvemos respuesta con el error
        return res.send(err)
    })
}

// ------------------------------------
// Método para crear un elemento nuevo
// ------------------------------------

let crearPublicacion = (req,res) =>{
    // Ejecutamos el método .create del elemento, que nos permite ejecutar un then o un catch
    // .then cuando fué completado satisfactoriamente
    Publicacion.create(req.body).then((publicacionCreada)=>{
        // Si fue creado, devolvemos respuesta confirmando acción
        return res.send({mensaje:"Publicacion Creada",detalles:publicacionCreada})
    })
    .catch((errorCreando)=>{
        //Si no lo fué, capturamos el error con el catch y lo devulvemos
        return res.send({mensaje:"No se pudo crear",error:errorCreando})
    })
}

// ------------------------------------
// Método para actualizar un elemento
// ------------------------------------

let actualizarPublicacion = (req,res) => {
    // Ejecutamos la función findByIdAndUpdate, que recibe un id y datos a actualizar
    // El id viene de los parametros de la url, los datos a actualizar del body de la request (Que es una request POST)
    Elemento.findByIdAndUpdate(req.params.id,req.body)
    .then(()=>{
        // Con then devolvemos una respuesta si fué creado satisfactoriamente
        return res.send({mensaje:"Okey!"})
    })
    .catch((err)=>{
        // Con catch devolvemos un mensaje de error si ocurrió alguno
        return res.send({mensaje:err})
    })
}

// ------------------------------------
// Método para ver un elemento individual
// ------------------------------------

let verPublicacion = (req,res)=>{
    // Ejecutamos la función findById, que recibe un id y devuelve un elemento en JSON
    // El id vendrá de los parámetros
    Publicacion.findById(req.params.id)
    // Con then, capturamos el evento satisfactorio (JSON del elemento)
    .then((publicacion)=>{
        // Devolvemos una respuesta con la publicacion
        return res.send(publicacion)
    })
    // Con Catch, capturamos un error
    .catch((err)=>{
        return res.send(err)
    })
}

// ------------------------------------
// Método para eliminar un elemento
// ------------------------------------

let eliminarPublicacion = (req,res)=>{
    // Ejecutamos la función findByIdAndRemove, que recibe un id y datos a actualizar
    Publicacion.findByIdAndRemove(req.params.id)
    .then(()=>{
        // Con then, capturamos el evento satisfactorio (eliminación)
        return res.send({message:"Elemento eliminado correctamente"})
    })
    .catch((error)=>{
    // Con then, capturamos el evento error y lo devolvemos
        return res.send({message:error})
    })
}

// Exportamos el método
module.exports = {
    obtenerPublicaciones,
    crearPublicacion,
    actualizarPublicacion,
    verPublicacion,
    eliminarPublicacion,
}