

// parametros obligatorios
function nombreCompleto(nombre:string, apellido:string): string {
    
    return `${nombre} ${apellido}`
}



let nombre = nombreCompleto('adrian', 'bravo');

console.log(nombre);


// parametros opcionales

function nombreComp(nombre:string, apellido?:string): string {
   if (apellido) {
    return `${nombre} ${apellido}`
   } else {
    return `${nombre}`
   }
}


let nombre1 = nombreComp('Jose');
console.log(nombre1)


// parametros por defecto 
function nombreCapitalizado(nombre:string, apellido?:string, capitalizado: boolean = true): string {
    // console.log(capitalizado);
    if (capitalizado) {
        return `${capitalizar(nombre)} ${capitalizar(apellido)}`
    } else {
        return `${nombre} ${apellido}`
    }
}

// funcion para capitaizar la letra inical 
function capitalizar(palabra: string): string {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
    // return palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase();
}

let nombre2 = nombreCapitalizado('tony', 'stark', true);
console.log(nombre2)