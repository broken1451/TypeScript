
// import { Pi, restar } from './validaciones/numeros';
// import { mensajes, obtenerErr } from './validaciones/textos';
// import *as  textos(alias) from './validaciones/textos';  importancion de todos con un alias
import * as textos from './validaciones/textos';
import restar from './validaciones/numeros';// esto es una funcion por defecto no hace falta llave ni un alias



// console.log(Pi);    
console.log('hola');    
console.log(textos.mensajes); 
console.log(textos.obtenerErr(5)); 
console.log(restar(4,6))

// excluir los modulos de node en tsconfig
// "exclude":["node_modules"]