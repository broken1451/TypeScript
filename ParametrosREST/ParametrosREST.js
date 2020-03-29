function nombrecompleto(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + losDemasParametros.join(','); // unirlos con join
}
var superman = nombrecompleto('Clark', 'Joseph', 'Kent');
var ironman = nombrecompleto('Anthony', 'Edward', 'Tony', 'Stark');
console.log(superman);
console.log(ironman);
