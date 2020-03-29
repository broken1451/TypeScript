// Funciones Básicas
function sumar( a: number, b: number ): number{
  return a + b;
}

let contar = function( heroes: string[] ):number{
  return heroes.length;
}

let superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);


//Parametros por defecto
function llamarBatman( llamar: boolean = true ): void{
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes( ...personas:string[] ): string{
  return personas.join(", ");
}
unirheroes('dsda', 'dsadsad','dasdasdas');



// Tipo funcion
function noHaceNada( numero: number, texto: string, booleano:boolean, arreglo:any[] ): any{
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (numero: number, texto:string,boleano: boolean, arr:any[])=>any;
    
noHaceNadaTampoco = noHaceNada
console.log(noHaceNadaTampoco)