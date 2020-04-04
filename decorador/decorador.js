"use strict";
// Decoradores son una simple funcion cualquiera
// decorador de funcion normal
// function consola(constructor:Function) {
//     console.log(constructor)
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// @consola
// class Villano {
//     constructor(public nombre:string) {
//     }
// }
/*------------------------------------------------------------ */
//Decoradores de fabrica, es una funcion que puede recibir parametros pero debe de regresar algo que pueda ser usado como decorador
// decorador normal
// function consola(constructor:Function) {
//     console.log(constructor)
// }
// // decorador defabrica
// function imprimirConsola(imprimir:boolean): any {
//     if (imprimir) {
//         return consola;
//     } else {
//         return null;
//     }
// }
// @imprimirConsola(true)
// class Villano {
//     constructor(public nombre:string) {
//     }
// }
/*------------------------------------------------------------------------- */
// Decoradores ejemplo 
// function planVillano(consructor: Function) {
//     // consructor.prototype.funcion a agregar 
//     consructor.prototype.imprimirPlan = function ()  {
//         console.log(`El plan de ${this.nombre} es dominar el mundo` )
//     }
// }
// @planVillano
// class Villano {
//     constructor(public nombre:string) {
//     }
// }
// let lex:any =  new Villano('Lex lutor')
// lex.imprimirPlan()
/*---------------------------------------------------------------------------------- */
// decoradores anidados
// function planVillano(consructor: Function) {
//     // consructor.prototype.funcion a agregar 
//     consructor.prototype.imprimirPlan = function ()  {
//         console.log(`El plan de ${this.nombre} es dominar el mundo` )
//     }
// }
// function imprimible(consructor: Function) {
//     // consructor.prototype.funcion a agregar 
//     consructor.prototype.imprimible = function ()  {
//         console.log(`El this es:` )
//         console.log(this )
//     }
// }
// @imprimible
// @planVillano
// class Villano {
//     constructor(public nombre:string, public poder:string) {
//     }
// }
// let lex:any =  new Villano('Lex lutor','super mente')
// lex.imprimirPlan()
// lex.imprimible()
/*---------------------------------------------------------------------------------- */
// DECORADOORES DE METODOS
// las diferencia entre decorador factory, decorador de clase y decorador de metodos, los argumentos que reciben o como trabajan
// pero en decorador de metodos debe regresar una funcion
// function editable(esEditable:boolean) {
//     // return function (constructor,nombre, propiedadeDescriptor de tipo Property Descriptor) { }
//     //define una nueva propiedad sobre un objeto, o modifica una ya existente, y devuelve el objeto modificado(PropertyDescriptor).
//     return function (target: any, nombre: string, descriptor:PropertyDescriptor) { 
//         if (!esEditable) {
//             console.warn('Obligame perro')
//         } else {
//             descriptor.writable = esEditable;
//         }
//     }
// }
// class Villano {
//     constructor(public nombre:string) {
//     }
//     @editable(true)
//     plan(){
//         console.log('DOMINAR AL MUNDO');
//     }
// }
// let lex:any =  new Villano('Lex lutor');
// lex.plan = function () {
//     console.log('Cortar flores');
// }
// lex.plan()
/*---------------------------------------------------------------------------------- */
// Decoradores de propiedades
// decorador de metodo
// function editable(esEditable:boolean) {
//     return function (target: any, nombre: string, descriptor:PropertyDescriptor) { 
//        descriptor.writable = esEditable;
//     }
// }
// // decorador de propiedades
// function editablePropiedad(esEditable:boolean): any {
//     // launica diferencia es q no se le pasa por parametro el descriptor:PropertyDescriptor
//     return function (target: any, nombre: string) { 
//         let descriptor:PropertyDescriptor = {
//             writable: esEditable
//         }
//         return descriptor;
//     }
// }
// class Villano {
//     @editablePropiedad(false)
//     public nombre: string | any;
//     constructor(nombre:string) {
//         this.nombre = nombre;
//     }
//     @editable(true)
//     plan(){
//         console.log('DOMINAR AL MUNDO');
//     }
// }
// let lex:any =  new Villano('Lex lutor');
// console.log(lex);
// lex.plan = function () {
//     console.log('Cortar flores');
// }
// lex.plan()
/*---------------------------------------------------------------------------------- */
// Decoradores de parámetros
// esto nos puede servir para obtener informacion  sobre el parametro que estamos recibiendo en nuestros metodos
function parametro(target, nombreMetodo, index) {
    console.log('constructor del metodo:');
    console.log(target);
    console.log('Nombre del metodo');
    console.log(nombreMetodo);
    console.log('Indice del parametro del metodo');
    console.log(index);
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano.prototype.plan = function (plan, mensaje) {
        if (plan) {
            console.log('DOMINAR AL MUNDO ' + mensaje);
        }
        else {
            console.log(mensaje);
        }
    };
    Villano.prototype.planMavelvolo = function (plan, mensaje, fuerza) {
        if (plan) {
            console.log('DOMINAR AL MUNDO ' + mensaje);
        }
        else {
            console.log(mensaje);
        }
    };
    __decorate([
        __param(0, parametro)
    ], Villano.prototype, "plan", null);
    __decorate([
        __param(2, parametro)
    ], Villano.prototype, "planMavelvolo", null);
    return Villano;
}());
