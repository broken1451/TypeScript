/*
 namespace es la agrupacion de
 funciones y propiedades que esta
 de manera global es como una clase q todos sus metodos son estaticos
*/

namespace Validaciones{

    // todas las validaciones por defecto todas sus propiedades y sus metodos estan bloqueados solo estan disponibles
    // dentro del mismo namespace

   export function validarFecha(fecha: Date):boolean {
        /*
        El valueOf() método devuelve el valor primitivo de un objeto Date. en fecha
    
        Note: El valor primitivo se devuelve como el número de milisegundos desde la medianoche 
        del 1 de enero de, 1970 UTC.    
        */
        if (isNaN(fecha.valueOf())) {
            return  false
        } else {
            return  true;
        }
    
    }
}