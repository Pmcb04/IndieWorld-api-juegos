'use strict';


/**
 * Actualizar un juego por ID
 * Actualiza los detalles de un juego por su ID.
 *
 * body Juego 
 * id_juego Long ID del juego a consultar, actualizar o eliminar
 * no response value expected for this operation
 **/
exports.actualizarJuego = function(body,id_juego) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Crear un nuevo juego
 * Crea un nuevo juego en la plataforma.
 *
 * body Juego 
 * no response value expected for this operation
 **/
exports.crearJuego = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Descargar juego por ID
 * Descarga un juego específico por su ID.
 *
 * id_juego Long ID del juego a descargar
 * returns List
 **/
exports.descargarJuego = function(id_juego) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Ejecutar juego por ID
 * Ejecuta un juego específico por su ID.
 *
 * body Ejecucion 
 * id_juego Long ID del juego a ejecutar
 * no response value expected for this operation
 **/
exports.ejecutarJuego = function(body,id_juego) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Eliminar un juego por ID
 * Elimina un juego por su ID.
 *
 * id_juego Long ID del juego a consultar, actualizar o eliminar
 * no response value expected for this operation
 **/
exports.eliminarJuego = function(id_juego) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obtener un juego por ID
 * Obtiene los detalles de un juego por su ID.
 *
 * id_juego Long ID del juego a consultar, actualizar o eliminar
 * returns Juego
 **/
exports.obtenerJuego = function(id_juego) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "descripcion" : "descripcion",
  "precio" : 6.027456183070403,
  "desarrollador" : "desarrollador",
  "reviews" : [ {
    "contenido" : "contenido",
    "id_usuario" : 5,
    "id_review" : 1,
    "valoracion" : "valoracion",
    "id_juego" : 5,
    "fecha_publicacion" : "fecha_publicacion"
  }, {
    "contenido" : "contenido",
    "id_usuario" : 5,
    "id_review" : 1,
    "valoracion" : "valoracion",
    "id_juego" : 5,
    "fecha_publicacion" : "fecha_publicacion"
  } ],
  "categoria" : "categoria",
  "id_juego" : 0,
  "nombre" : "nombre",
  "url_descarga" : "url_descarga"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener lista de juegos
 * Obtiene la lista de todos los juegos disponibles.
 *
 * returns List
 **/
exports.obtenerJuegos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "descripcion" : "descripcion",
  "precio" : 6.027456183070403,
  "desarrollador" : "desarrollador",
  "reviews" : [ {
    "contenido" : "contenido",
    "id_usuario" : 5,
    "id_review" : 1,
    "valoracion" : "valoracion",
    "id_juego" : 5,
    "fecha_publicacion" : "fecha_publicacion"
  }, {
    "contenido" : "contenido",
    "id_usuario" : 5,
    "id_review" : 1,
    "valoracion" : "valoracion",
    "id_juego" : 5,
    "fecha_publicacion" : "fecha_publicacion"
  } ],
  "categoria" : "categoria",
  "id_juego" : 0,
  "nombre" : "nombre",
  "url_descarga" : "url_descarga"
}, {
  "descripcion" : "descripcion",
  "precio" : 6.027456183070403,
  "desarrollador" : "desarrollador",
  "reviews" : [ {
    "contenido" : "contenido",
    "id_usuario" : 5,
    "id_review" : 1,
    "valoracion" : "valoracion",
    "id_juego" : 5,
    "fecha_publicacion" : "fecha_publicacion"
  }, {
    "contenido" : "contenido",
    "id_usuario" : 5,
    "id_review" : 1,
    "valoracion" : "valoracion",
    "id_juego" : 5,
    "fecha_publicacion" : "fecha_publicacion"
  } ],
  "categoria" : "categoria",
  "id_juego" : 0,
  "nombre" : "nombre",
  "url_descarga" : "url_descarga"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener juegos recomendados
 * Obtiene una lista de juegos recomendados para el usuario.
 *
 * id_usuario Long ID del usuario para recomendaciones personalizadas
 * returns List
 **/
exports.obtenerJuegosRecomendados = function(id_usuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "descripcion" : "descripcion",
  "precio" : 6.027456183070403,
  "desarrollador" : "desarrollador",
  "reviews" : [ {
    "contenido" : "contenido",
    "id_usuario" : 5,
    "id_review" : 1,
    "valoracion" : "valoracion",
    "id_juego" : 5,
    "fecha_publicacion" : "fecha_publicacion"
  }, {
    "contenido" : "contenido",
    "id_usuario" : 5,
    "id_review" : 1,
    "valoracion" : "valoracion",
    "id_juego" : 5,
    "fecha_publicacion" : "fecha_publicacion"
  } ],
  "categoria" : "categoria",
  "id_juego" : 0,
  "nombre" : "nombre",
  "url_descarga" : "url_descarga"
}, {
  "descripcion" : "descripcion",
  "precio" : 6.027456183070403,
  "desarrollador" : "desarrollador",
  "reviews" : [ {
    "contenido" : "contenido",
    "id_usuario" : 5,
    "id_review" : 1,
    "valoracion" : "valoracion",
    "id_juego" : 5,
    "fecha_publicacion" : "fecha_publicacion"
  }, {
    "contenido" : "contenido",
    "id_usuario" : 5,
    "id_review" : 1,
    "valoracion" : "valoracion",
    "id_juego" : 5,
    "fecha_publicacion" : "fecha_publicacion"
  } ],
  "categoria" : "categoria",
  "id_juego" : 0,
  "nombre" : "nombre",
  "url_descarga" : "url_descarga"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

