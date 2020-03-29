// Características de ES6
//LET
let names:string =  'tony';

if (true) {
    let names:string =  'Adrian';
    if (true) {
        let names:string =  'Jose';
    }
}

// CONSTANTES son valores q no pueden ser mutados una vez definidos y tiene tambn scopes
const OPCIONES: string = 'Activo'
console.log(OPCIONES)

if (true) {
    //otro scope
    const OPCIONES: string = 'Desactivado'
    console.log(OPCIONES)
}


for (const i of [1,2,3,4,5,6,7,8,9,0]) {
   console.log(i) 
}

const OPCION = {
    estado: true,
    audio: 10,
    ultima:'main'
}

OPCION.estado= false
OPCION.audio= 50


// Templates literales

let name1:string = 'Bruce'
let name2:string = 'Ricardo'
function getNombres() {
    return `${name1} ${name2}`
}
let menssage:string = `1. esta es una linea normal
2. Hola ${name1}
3. Robin es ${name2}
4. los nombres son ${getNombres()}
5. ${5+5}
`
console.log(menssage);


// funciones de flecha 
let suma = (a:number,b: number)=>{
    return a + b
}
console.log(suma(5,5));

let darOrdenHulk = (orden:string):string => {
    return `Hulk ${orden}`;
}
console.log(darOrdenHulk('Smash'));


let capitalAmerica = {
    nombre: 'Hulk',
    darOrdenAhulk: function () {
        setTimeout(() => {
            console.log(this.nombre + ' Smash');
        }, 1000);
    }
}


capitalAmerica.darOrdenAhulk();


// Destructuración de Objetos
let avenger = {
    nick:' Samuel Jackson',
    iron:'Tony',
    vision: 'Paul'
}

// let {nick, iron:alias, vision, variablepordefecto ='valor'}= avenger;
let {nick, iron, vision}= avenger;

console.log(nick, iron, vision)

// Destructuración de Arreglos
let avenger1 = ['Samuellll','Tonyyyyyy','Paulllllll']
// let [, , aven3] = avenger1; los extraes
let [aven1, aven2, aven3] = avenger1;
console.log(aven1, aven2, aven3)


// Nuevo ciclo - For Of
let thor = {
    nombre: 'Thor',
    arma: 'Hammer'
}

let ironMan = {
    nombre: 'Ironman',
    arma: 'Armamento'
}

let capi = {
    nombre: 'Capitan America',
    arma: 'Escudo'
}

let aveng = [thor, ironMan, capi]

for (let aven of aveng) {
    console.table(aven.nombre, aven.arma)
}


// Clases en ES6
class Avenger {
    nombre: any;
    poder: any

    constructor(nombre: any, poder: any ) {
        this.nombre = nombre;
        this.poder = poder;
    }
}

class AvengerVolador extends Avenger {
    vuela: boolean;
    constructor(nombre: any, poder: any ) {
        super(nombre, poder);
        this.vuela = true;
    }
}



let hulk = new Avenger('Hulk', 'Super fuerza');
let falcon = new AvengerVolador('Falcon', 'Volar');
console.log(hulk);
console.log(falcon);









