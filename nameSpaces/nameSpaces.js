// /*
//  namespace es la agrupacion de
//  funciones y propiedades que esta
//  de manera global es como una clase q todos sus metodos son estaticos
// */
// namespace Validaciones{
//     // todas las validaciones por defecto todas sus propiedades y sus metodos estan bloqueados solo estan disponibles
//     // dentro del mismo namespace
//   export  function validarTexto(texto:string): boolean {
//         if (texto.length > 3) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//    export function validarFecha(fecha: Date):boolean {
//         /*
//         El valueOf() método devuelve el valor primitivo de un objeto Date. en fecha
//         Note: El valor primitivo se devuelve como el número de milisegundos desde la medianoche 
//         del 1 de enero de, 1970 UTC.    
//         */
//         if (isNaN(fecha.valueOf())) {
//             return  false
//         } else {
//             return  true;
//         }
//     }
// }
// tsc --outFile(archivo de salida) es enta direccion build/nombreArchivoSalida.js archivos a incluir
// tsc --outFile build/main.js archivos a incluir
//Importar namespaces
/// <reference path="validaciones/textos.ts"/>
/// <reference path="validaciones/fechas.ts"/>
var fecha = new Date();
if (Validaciones.validarTexto('2s3')) {
    console.log('Es un texto valido');
}
else {
    console.log('No Es un texto valido');
}
// console.log(Validaciones.validarTexto('3s2'))
// console.log(Validaciones.validarFecha(fecha))
