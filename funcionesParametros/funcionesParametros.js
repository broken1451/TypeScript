// parametros obligatorios
function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}
var nombre = nombreCompleto('adrian', 'bravo');
console.log(nombre);
// parametros opcionales
function nombreComp(nombre, apellido) {
    if (apellido) {
        return nombre + " " + apellido;
    }
    else {
        return "" + nombre;
    }
}
var nombre1 = nombreComp('Jose');
console.log(nombre1);
// parametros por defecto 
function nombreCapitalizado(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    // console.log(capitalizado);
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    else {
        return nombre + " " + apellido;
    }
}
// funcion para capitaizar la letra inical 
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
    // return palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase();
}
var nombre2 = nombreCapitalizado('tony', 'stark', true);
console.log(nombre2);
