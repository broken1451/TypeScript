// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
}
var batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear: function () {
        console.log("...... run!!!");
    }
};
conducirBatimovil(batimovil);
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}
function ciudadGotica(ciudadanos) {
    return ciudadanos.length;
}
var ciudad;
ciudad = function (ciudadanos) {
    return ciudadanos.length;
};
var Xmen = /** @class */ (function () {
    function Xmen() {
    }
    Xmen.prototype.imprimirBio = function () {
        console.log("JAJAJAJA");
    };
    return Xmen;
}());
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
