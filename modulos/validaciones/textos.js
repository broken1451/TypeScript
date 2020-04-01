"use strict";
exports.__esModule = true;
exports.mensajes = ['El texto es muy corto', 'El texto es muy argo '];
function obtenerErr(numeroErr) {
    if (numeroErr > exports.mensajes.length) {
        return 'el codigo Error no existe';
    }
    return exports.mensajes[numeroErr];
}
exports.obtenerErr = obtenerErr;
