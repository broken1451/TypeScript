
// objetos basicos
// let flash = {
//     nombre: 'Barry Allen',
//     edad: 24,
//     poderes: ['Puede correr muy rapido','Viajar por el tiempo']
// }





// cómo crear objetos con tipos específicos
// let flash:{nombre: string, edad: number, poderes: string[]} = {
//     nombre: 'Barry Allen',
//     edad: 24,
//     poderes: ['Puede correr muy rapido','Viajar por el tiempo'],
// }




// Métodos dentro de los objetos
// let flash:{nombre: string, edad: number, poderes: string[], getNombre:()=>string } = {
//     nombre: 'Barry Allen',
//     edad: 24,
//     poderes: ['Puede correr muy rapido','Viajar por el tiempo'],
//     getNombre(){
//         return this.nombre;
//     }
// }



// Tipos personalizados de objetos
// type Heroe = {
//     nombre: string, 
//     edad: number, 
//     poderes: string[], 
//     getNombre:()=>string,
// }

// let spiderman:Heroe = {
//     nombre: 'Peter Parker',
//     edad: 24,
//     poderes: ['Puede escalar paredes','puede lnzar telaranas'],
//     getNombre(){
//         return this.nombre;
//     }
// }



// Multiples tipos permitidos
// type Heroe = {
//     nombre: string, 
//     edad: number, 
// }

// let loquesea: string | number | Heroe;
// loquesea = 10
// loquesea = {
//     nombre: 'adrian',
//     edad: 27
// }



// Revisar el tipo de un objeto o variable

let cosa: any = 123;
let cosa1: any = function () {
    return null;
};

console.log(cosa)
if (typeof cosa == 'number') {
    console.log('cosa es un numero')       
}

console.log(cosa1)
if (typeof cosa1 == 'string') {
    console.log('cosa es un string')       
} else {
    console.log('Este codigo indica q no es un string')   
}









