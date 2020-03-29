/*!
este comentario si se queda
Esto es un comentario

*/
// // Incluir y excluir carpetas y/o// archivos  "include": ["app/**/*"],"exclude": ["node_modules","src"] ene l tsconfig
// esta es una variable de tipo numerico
var numero = 30;
// esto es una funcion  para imprimir el heroe
function imprimir(heroe, edad) {
    heroe = heroe.toLowerCase();
    edad = edad + 10;
    return "el heroe " + heroe + " tiene la edad de " + edad;
}
var mensaje = imprimir('spiderman', 20);
console.log(mensaje);
// para unir todos los archivos en uno solo tsc --outfile nombredelarchivo.js seguido de los archivos tsconfig app app1
console.log(mensaje);
console.log(mensaje.toUpperCase());
