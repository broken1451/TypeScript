// Crear interfaces
interface Auto {
  encender:boolean;
  velocidadMaxima: number;
  acelear():void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil( auto:Auto ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

let batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... run!!!");
  }
}

conducirBatimovil(batimovil)

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Guason{
  reir: boolean;
  comer?:boolean;
  llorar?:boolean;
}

let guason:Guason = {
  reir: true,
  comer:true,
  llorar:false
}

function reir( guason:Guason ):void{
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface CiudadGotica {
  (ciudadanos:string[]):number;
}

function ciudadGotica( ciudadanos:string[] ):number{
  return ciudadanos.length;
}

let ciudad:CiudadGotica;
ciudad= (ciudadanos:string[]):number => {
  return ciudadanos.length;
}




// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface Mutantes {
   nombre: string;
   edad: number;
   sexo: number;
   estadoCivil: string;
   imprimirBio():void;
}

class Xmen implements Mutantes {
  nombre: string;
  edad: number;
  sexo: number;
  estadoCivil: string;

  imprimirBio():void {
    console.log("JAJAJAJA");
  }
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
