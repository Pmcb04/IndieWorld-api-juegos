'use strict';

/**
 * Módulo que simula operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una API de juegos en memoria.
 * Las operaciones incluyen la actualización, creación, eliminación y obtención de detalles de juegos.
 * También se proporcionan funciones para descargar y ejecutar juegos, así como obtener listas de juegos y recomendaciones personalizadas.
 */

/**
 * Base de Datos Simulada:
 * Contiene una lista de juegos en memoria para propósitos de demostración.
 * Cada juego tiene campos como descripción, precio, desarrollador, reviews, categoría, ID de juego, nombre y URL de descarga.
 */
let juegosDB = [
  {
    descripcion: "Hollow Knight es una aventura de acción en 2D de estilo clásico a través de un vasto mundo interconectado.",
    precio: 7.95,
    desarrollador: "Team Cherry",
    reviews: [
      {
        contenido: "Es bueno",
        id_usuario: 2,
        id_review: 1,
        valoracion: "Buena",
        id_juego: 0,
        fecha_publicacion: "24/11/2023"
      },
      {
        contenido: "Me aburre mucho, los graficos son horribles.",
        id_usuario: 1,
        id_review: 2,
        valoracion: "Mala",
        id_juego: 0,
        fecha_publicacion: "14/12/2023"
      }
    ],
    categoria: "Metroidvania",
    id_juego: 0,
    nombre: "Hollow Knight",
    url_descarga: "https://es.wikipedia.org/wiki/Hollow_Knight"
  },
  {
    descripcion: "Es un survival de terror en primera persona.",
    precio: 5.79,
    desarrollador: "Frictional Games",
    reviews: [
      {
        contenido: "No me gusta pasar miedo, asi que el juego no me gusta.",
        id_usuario: 3,
        id_review: 4,
        valoracion: "Mala",
        id_juego: 2,
        fecha_publicacion: "15/12/2023"
      },
      {
        contenido: "Es una maravilla audiovisual",
        id_usuario: 1,
        id_review: 6,
        valoracion: "Buena",
        id_juego: 2,
        fecha_publicacion: "10/12/2023"
      }
    ],
    categoria: "terror, supervivencia",
    id_juego: 1,
    nombre: "Amnesia: The Dark Descent",
    url_descarga: "https://es.wikipedia.org/wiki/Amnesia:_The_Dark_Descent"
  }
];

/**
 * Actualizar un juego por ID.
 *
 * @param {Object} body - Datos del juego a actualizar.
 * @param {number} id_juego - ID del juego a actualizar.
 * @returns {Promise} - Promesa que resuelve después de la actualización del juego o se rechaza si el juego no se encuentra.
 */
exports.actualizarJuego = function(body, id_juego) {
  return new Promise(function(resolve, reject) {
    const index = juegosDB.findIndex(juego => juego.id_juego === id_juego);

    if (index !== -1) {
      // Actualizar el juego en la base de datos simulada
      juegosDB[index] = { ...juegosDB[index], ...body };
      resolve({ message: 'El juego se ha actualizado correctamente', id_juego });
    } else {
      reject({ message: 'Juego no encontrado' });
    }
  });
};

/**
 * Crear un nuevo juego.
 *
 * @param {Object} body - Datos del nuevo juego.
 * @returns {Promise} - Promesa que resuelve después de la creación del juego.
 */
exports.crearJuego = function(body) {
  return new Promise(function(resolve) {
    // Crear un nuevo juego en la base de datos simulada
    const newJuego = {
      ...body,
      id_juego: generateJuegoId()
    };

    juegosDB.push(newJuego);
    resolve({ message: 'El juego se ha creado correctamente', id_juego });
  });
};

/**
 * Descargar un juego por ID.
 *
 * @param {number} id_juego - ID del juego a descargar.
 * @returns {Promise} - Promesa que resuelve con la lista de descargas o se rechaza si el juego no se encuentra.
 */
exports.descargarJuego = function(id_juego) {
  return new Promise(function(resolve, reject) {
    const juego = juegosDB.find(juego => juego.id_juego === id_juego);

    if (juego) {
      //Simula la descarga del juego y la ruta en la que se ha descargado
      resolve(["Juego descargado correctamente", "Almacenado en carpeta C:/user"]);
    } else {
      reject({ message: 'Juego no encontrado' });
    }
  });
};

/**
 * Ejecutar un juego por ID.
 *
 * @param {Object} body - Datos de la ejecución del juego.
 * @param {number} id_juego - ID del juego a ejecutar.
 * @returns {Promise} - Promesa que resuelve después de la ejecución del juego o se rechaza si el juego no se encuentra.
 */
exports.ejecutarJuego = function(body, id_juego) {
  return new Promise(function(resolve, reject) {
    const index = juegosDB.findIndex(juego => juego.id_juego === id_juego);

    if (index !== -1) {
      // Ejecuta el juego (simulación) y resuelve la promesa
      resolve({ message: 'El juego se ha ejecutado correctamente', id_juego });
    } else {
      reject({ message: 'Juego no encontrado' });
    }
  });
};

/**
 * Eliminar un juego por ID.
 *
 * @param {number} id_juego - ID del juego a eliminar.
 * @returns {Promise} - Promesa que resuelve después de la eliminación del juego o se rechaza si el juego no se encuentra.
 */
exports.eliminarJuego = function(id_juego) {
  return new Promise(function(resolve, reject) {
    const initialLength = juegosDB.length;

    // Filtrar la base de datos para eliminar el juego por ID
    juegosDB = juegosDB.filter(juego => juego.id_juego !== id_juego);

    if (juegosDB.length < initialLength) {
      resolve({ message: 'El juego se ha eliminado correctamente', id_juego });
    } else {
      reject({ message: 'Juego no encontrado' });
    }
  });
};

/**
 * Obtener detalles de un juego por ID.
 *
 * @param {number} id_juego - ID del juego a obtener.
 * @returns {Promise} - Promesa que resuelve con los detalles del juego o se rechaza si el juego no se encuentra.
 */
exports.obtenerJuego = function(id_juego) {
  return new Promise(function(resolve, reject) {
    //Busca el juego en la base de datos por su id
    const juego = juegosDB.find(juego => juego.id_juego === id_juego);

    if (juego) {
      resolve(juego);
    } else {
      reject({ message: 'Juego no encontrado' });
    }
  });
};

/**
 * Obtener la lista de todos los juegos disponibles.
 *
 * @returns {Promise} - Promesa que resuelve con la lista de juegos disponibles.
 */
exports.obtenerJuegos = function() {
  return new Promise(function(resolve) {
    resolve(juegosDB);
  });
};

/**
 * Obtener juegos recomendados para un usuario.
 *
 * @param {number} id_usuario - ID del usuario para recomendaciones personalizadas.
 * @returns {Promise} - Promesa que resuelve con la lista de juegos recomendados para el usuario.
 */
exports.obtenerJuegosRecomendados = function (id_usuario) {
  return new Promise(function (resolve) {
    // Devuelve los dos primeros juegos de la base de datos simulada (son los juegos que se recomiendan)
    const juegosRecomendados = juegosDB.slice(0, 2);
    resolve(juegosRecomendados);
  });
};

/**
 * Función auxiliar para generar un ID único para nuevos juegos.
 *
 * @returns {number} - Nuevo ID único para el juego.
 */
function generateJuegoId() {
  return Math.max(...juegosDB.map(juego => juego.id_juego), 0) + 1;
}
