"use strict";
console.log(mensaje);
console.log(mensaje.toUpperCase());
/*!
este comentario si se queda
Esto es un comentario

*/
let numero = 30;
function imprimir(heroe, edad) {
    heroe = heroe.toLowerCase();
    edad = edad + 10;
    return `el heroe ${heroe} tiene la edad de ${edad}`;
}
let mensaje = imprimir('spiderman', 20);
console.log(mensaje);
let heroes = ['Batman', 'Robin', 'Superman'];
for (const heroe of heroes) {
    console.log(heroe);
}
heroes.push('dsdsds');
//# sourceMappingURL=main.js.map