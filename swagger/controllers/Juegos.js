'use strict';

var utils = require('../utils/writer.js');
var Juegos = require('../service/JuegosService');

module.exports.actualizarJuego = function actualizarJuego (req, res, next, body, id_juego) {
  Juegos.actualizarJuego(body, id_juego)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.crearJuego = function crearJuego (req, res, next, body) {
  Juegos.crearJuego(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.descargarJuego = function descargarJuego (req, res, next, id_juego) {
  Juegos.descargarJuego(id_juego)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ejecutarJuego = function ejecutarJuego (req, res, next, body, id_juego) {
  Juegos.ejecutarJuego(body, id_juego)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eliminarJuego = function eliminarJuego (req, res, next, id_juego) {
  Juegos.eliminarJuego(id_juego)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtenerJuego = function obtenerJuego (req, res, next, id_juego) {
  Juegos.obtenerJuego(id_juego)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtenerJuegos = function obtenerJuegos (req, res, next) {
  Juegos.obtenerJuegos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.obtenerJuegosRecomendados = function obtenerJuegosRecomendados (req, res, next, id_usuario) {
  Juegos.obtenerJuegosRecomendados(id_usuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
