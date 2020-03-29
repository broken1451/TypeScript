// Tipos
let batman: string = "Bruce";
let superman: string = "Clark";

let existe: boolean = false;

// Tuplas
let parejaHeroes:[string, string] = [batman,superman];
let villano: [string, number,  boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados: string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Volumen {
  fuerzaFlash = 5,
  fuerzaSuperman = 100,
  fuerzaBatman = 1,
  fuerzaAcuaman = 0
  
}
let fuerzaFlash = 5;
let fuerzaSuperman = 100;
let fuerzaBatman = 1;
let fuerzaAcuaman = 0;



fuerzaFlash = Volumen.medio ;
fuerzaSuperman = Volumen.max;
fuerzaBatman = Volumen.medio;
fuerzaAcuaman = Volumen.min;




// Retorno de funciones
function actilet_batiseñal(): string{
  return "activada";
}

function pedir_ayuda(): void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder = "100";
let largoDelPoder = (<string>poder).length;
console.log( largoDelPoder );

let poder1:number = 100;
let largoDelPoder2: number = (<number>poder1).toString().length;
console.log( largoDelPoder );
