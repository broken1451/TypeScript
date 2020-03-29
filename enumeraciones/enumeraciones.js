var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 0] = "min";
    Volumen[Volumen["medio"] = 1] = "medio";
    Volumen[Volumen["max"] = 2] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.min;
console.log(audio);
console.log(Volumen);
var enumeracion;
(function (enumeracion) {
    enumeracion[enumeracion["a"] = 10] = "a";
    enumeracion[enumeracion["b"] = 11] = "b";
    enumeracion[enumeracion["c"] = 9] = "c";
    enumeracion[enumeracion["d"] = 10] = "d";
})(enumeracion || (enumeracion = {}));
console.log(enumeracion);
