// function regresar(parametros:any) {
//     console.log(parametros);
// }
// regresar(45)
// regresar(new Date())
// regresar({})
// regresar({nombre:'adrian'})
/*----------------------------------------- */
// FUNCIONES GENERICAS
// function regresar<T>(parametros:T) {
//    return parametros;
// }
// console.log(  regresar(15.12154).toFixed(2)  )
// console.log(  regresar('Ricardo Tapia').charAt(0)    )
// console.log(  regresar(new Date()).getTime()      )
// function generica<T>(params:T) {
//     return params;
// }
// type Heroe = {
//     nombre:string;
//     nombreReal:string;
// }
// type Villano = {
//     nombre:string;
//     nombreReal:string;
// }
// let deadpool = {
//     nombre: 'Deadpool',
//     nombreReal:'Wade',
//     poder: 'Regeneracion'
// }
// // console.log(  generica<tipo>(deadpool)     )
// // console.log(  generica<tipo>(deadpool)     )
// console.log(  generica<Heroe>(deadpool)     )
// console.log(  generica<Villano>(deadpool)     )
/*------------------------------------------------------- */
// Arreglo generico
// let hero: Array<string> = ['batman','spiderman', 'Capitan america']
// hero.push('1')
// let villa:string[] = ['Lex','Magneto']
/*-------------------------------------------------------------- */
// CLASES GENERIAS
// class Cuadrado<T tipo generico va extender solo numero recibe el tipo q se le indiq > {
var Cuadrado = /** @class */ (function () {
    function Cuadrado() {
    }
    Cuadrado.prototype.area = function () {
        // return +this.bas * +this.altur; casteo para comvertirlo en un numero
        return +this.bas * +this.altur;
    };
    return Cuadrado;
}());
var cuadrado = new Cuadrado();
cuadrado.bas = 10;
cuadrado.altur = 10;
console.log(cuadrado.area());
