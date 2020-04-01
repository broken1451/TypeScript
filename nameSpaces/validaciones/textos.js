/*
 namespace es la agrupacion de
 funciones y propiedades que esta
 de manera global es como una clase q todos sus metodos son estaticos
*/
var Validaciones;
(function (Validaciones) {
    // todas las validaciones por defecto todas sus propiedades y sus metodos estan bloqueados solo estan disponibles
    // dentro del mismo namespace
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        else {
            return false;
        }
    }
    Validaciones.validarTexto = validarTexto;
})(Validaciones || (Validaciones = {}));
