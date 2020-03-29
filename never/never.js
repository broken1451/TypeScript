// un valor q nunca puede suceder, sirve para hacer puntos criticos en nuestro programa o lienas de codigo q nunca deben suceder
function error(mensaje) {
    throw new Error(mensaje);
}
error('Error critico linea 11 ');
