// interfaces
// function enviarAmision(xmen:{nombre:string}) {
//     console.log(`Enviando a ${xmen.nombre}`)
// }
// let wolverine = {
//     nombre: 'Wolverine',
//     poder: 'Regeneracion'
// }
// enviarAmision(wolverine);


/*--------------------------------------------------------- */
// interfaz basica
// interface Xmen {
//    nombre: string;
//    poder: string;
// }
// function enviarAmision(xmen:Xmen) {
//     console.log(`Enviando a ${xmen.nombre} a la mision `)
// }
// function enviarAcuartel(xmen:Xmen) {
//     console.log(`Enviando a ${xmen.nombre} al cuartel`)
// }
// let wolverine: Xmen = {
//     nombre: 'Wolverine',
//     poder: 'Regeneracion'
// }
// enviarAmision(wolverine);
// enviarAcuartel(wolverine)

/*--------------------------------------------------------- */
// Propiedades opcionales
// interface Xmen {
//    nombre: string;
//    poder?: string;
// }
// function enviarAmision(xmen:Xmen) {
//     console.log(`Enviando a ${xmen.nombre} a la mision `)
// }
// function enviarAcuartel(xmen:Xmen) {
//     console.log(`Enviando a ${xmen.nombre} al cuartel`)
// }
// let wolverine: Xmen = {
//     nombre: 'Wolverine',
//     poder: 'Regeneracion'
// }
// enviarAmision(wolverine);
// enviarAcuartel(wolverine)

/*--------------------------------------------------------- */
// Métodos en la interfaz
// interface Xmen {
//    nombre: string;
//    poder?: string;
//    regenerar(nombreReal: string):void;// se declaran asi los metodos en las interfaces
// }

// function enviarAmision(xmen:Xmen) {
//     console.log(`Enviando a ${xmen.nombre} a la mision `);
//     xmen.regenerar('Logan');
// }
// function enviarAcuartel(xmen:Xmen) {
//     console.log(`Enviando a ${xmen.nombre} al cuartel`)
//     xmen.regenerar(xmen.nombre);
// }

// let wolverine: Xmen = {
//     nombre: 'Wolverine',
//     poder: 'Regeneracion',
//     regenerar(nombreReal: string):void {
//         console.log(`se a regenerado ${nombreReal}`)
//     }
// }
// enviarAmision(wolverine);
// enviarAcuartel(wolverine)



/*--------------------------------------------------------- */
// Interfaces en las clases
// interface Xmen {
//     nombre: string;
//     nombrereal?: string;
//     regenerar(nombreReal: string):void;// se declaran asi los metodos en las interfaces
//  }



//  class Mutante implements Xmen {

//       public nombre: string;
//       public nombrereal: string;
//       public poder: string;
//       public esBueno: boolean;
//       regenerar(nombreReal: string){
//         console.log(`hola  ${nombreReal}`)
//       }
//  }

// let wolverine = new Mutante();
// wolverine.nombre;

/*--------------------------------------------------------- */
// Interfaces para las funciones

interface DosNUmeroFunction {
    (num1: number, num2:number):number;
 }

let sum:DosNUmeroFunction;
sum = (a:number, b:number):number => {
    return a+ b;
}

let restar:DosNUmeroFunction;
sum = (a:number, b:number):number => {
    a++;
    a++;
    a++;
    a++;
    a++;
    return a-b;
}


// Es posible heredar interfaces con la palabra "extends"
interface Carro{
    llantas:number;
    modelo:string;
  }
   
  interface Volvo extends Carro{
    seguro:boolean;
  }
   
  var volvo:Volvo = {
    llantas: 4,
    modelo:"sedan",
    seguro:true
    
  }