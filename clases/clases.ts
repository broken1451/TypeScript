// Clases en TypeScript
// Definición de una clase básica en TypeScript y Constructores
// class Avenger {
//     public nombre: string = 'Antman';
//     public equipo: string;
//     public nombreReal: string;
//     public puedePelear:boolean; 
//     public peleasGanadas: number;

//     constructor(nombre: string, equipo: string, nombreReal: string) {
//         this.nombre= nombre;
//         this.equipo=equipo;
//         this.nombreReal=nombreReal;
//     }
// }



// let antMan = new Avenger('Antman','IronMan Team', 'Scott');

// console.log(antMan);

/*---------------------------------------------------------------------------------------*/
// PROPIEDADES publicas, privadasy protegidas

// class Avenger {

//     public nombre: string = 'Antman'; // seaccede desde cualquier punto  del programa
//     protected equipo: string;// solo se puede cambiar el valor dentro de la clase original osus herencias(sus clases hijas)
//     private nombreReal: string;// solo puede ser modificado sus valores/propiedades dentro de su misma clase
//     private puedePelear:boolean; 
//     private peleasGanadas: number;

//     constructor(nombre: string, equipo: string, nombreReal: string) {
//         this.nombre= nombre;
//         this.equipo=equipo;
//         this.nombreReal=nombreReal;
        
//     }
// }



// let antMan = new Avenger('Antman','IronMan Team', 'Scott');

// console.log(antMan);

// antMan.nombre = 'Nick';


/*---------------------------------------------------------------------- */
// Métodos públicos, privados yprotegidos
// class Avenger {

//     public nombre: string = 'Antman'; // seaccede desde cualquier punto  del programa
//     protected equipo: string;// solo se puede cambiar el valor dentro de la clase original osus herencias(sus clases hijas)
//     private nombreReal: string;// solo puede ser modificado sus valores/propiedades dentro de su misma clase
//     private puedePelear:boolean; 
//     private peleasGanadas: number;

//     constructor(nombre: string, equipo: string, nombreReal: string) {
//         this.nombre= nombre;
//         this.equipo=equipo;
//         this.nombreReal=nombreReal;
//     }


//     public bio(): void{
//         let mensaje:string = `${this.nombre} ${this.nombreReal} ${this.equipo}`;
//         console.log(mensaje);
//     }

//     private cambiaEquipo(nuevoEquipo: string):boolean {
//         if (nuevoEquipo === this.equipo) {
//            return false;
//         } else {
//            return true;
//         }
//     }

//     public cambiaEquipoPublico(nuevoEquipo:string):boolean{
//         return this.cambiaEquipo(nuevoEquipo);
         
//     }

// }

// let antMan = new Avenger('Antman','IronMan Team', 'Scott');
// console.log(antMan);
// antMan.nombre = 'Nick';
// antMan.bio();
// console.log(antMan.cambiaEquipoPublico('IronMan'))


/*---------------------------------------------------------------------- */
// Herencia, super y definición depropiedades en el constructor
// class Avenger {

//     constructor( public nombr: string , private nombreRea: string) {
//         console.log('constructor Avenger llamado')
        
//     }

//    protected getNombre(): string {
//     console.log('getNombre xmen llamado')
//         return this.nombr;
//     }

// }

// // let ciclope = new Avenger('Ciclope','Scott');
// // console.log(ciclope);


// class Xmen extends Avenger {
//     constructor(nombr: string , nombreRea: string){
//         console.log('constructor xmen llamado')
//         super(nombr, nombreRea);
//     }

//   public getName(): string{
//     // return super.getNombre();
//     console.log('getName xmen llamado')
//     return this.getNombre();
//   }

// }

// let ciclope = new Xmen('Ciclope','Scott');
// console.log(ciclope);
// console.log(ciclope.getName());


/*--------------------------------------------------------------- */
// Gets y Sets

// class Avengers {

//     private _nombre: any;

//     constructor( public nombr?: string ) {     
//         this._nombre = nombr;
//     }

//     //get y set son funciones especiales para el control de acceso de la informacion todos debrian ser publicos
//     get getnombre():string{ // por defecto el get devuelve algo    
//     //  console.log('paso por el get nombre')
//      if (this._nombre) {
//          return this._nombre;
//      } else {
//         return 'No hay nombre para el avenger'; 
//      }

//     }

//     set setNombre(nombre:string){ // debe tener al menos un parametro
//        console.log('paso por el set nombre');
//        if (nombre.length <=3) {
//         //    console.error('El nombre debe de tener al mnos 3 caracteres')
//         throw new Error('Esto no debe de psar')
//         //   return; 
//        } 
       
//        this._nombre = nombre;
       
//     }

// }
// let ciclope = new Avengers('Wolverine');
// console.log(ciclope.nombr);
// console.log(ciclope.getnombre);
// ciclope.setNombre = 'lee';
// console.log(ciclope.getnombre);



/*--------------------------------------------------------------- */
// Métodos y propiedades estáticos
// class xmen {

//     // los metodos estaticos me permiten llamar a una funcion que tenga un clase sin inicializarla previamente
//     static nombre: string = 'Wolverine';

//     constructor() {
        
//     }
    
//     static crearXmen(){
//         console.log('se creo usando un metodo static')
//         return  new xmen();
//     }
// }

// let wolverine = new xmen();
// // console.log(wolverine);
// let wolverine1 = xmen.crearXmen();
// console.log(wolverine1);
// console.log(xmen.nombre);


/*------------------------------------------------------------------------------- */
// Clases Abstractas
// abstract class Mutantes {

//     constructor(public nombre: string, public nombreReal:string) {
        
//     }

// }

// // las clases abstractas son un contenedor de propiedades y metodos que van a ser heredados a otra clase
// // son moldes que no pueden ser usados a menos de que ya hereden alguna clase hija
// // let wolverine = new Mutantes(); // no se puede instanciar una classe abstracta

// class Xmen extends Mutantes {
   
// }

// let gambito = new Xmen('Gambito', 'Gambito');
// console.log(gambito);


/*------------------------------------------------------------------------------------------- */
// Constructores privados / singleton
class Apocalipsys {

   static instancia: Apocalipsys;// propiedad
   
   private constructor(public nombre: string) {
        
   }


   static obtenerInstanciaApocalipsys(){
       if (!Apocalipsys.instancia) {
           Apocalipsys.instancia = new Apocalipsys('Soy apocalipsys el unico');
       }
       return Apocalipsys.instancia;
   }

}

// let apoca =  new Apocalipsys('Soy apocalipsys');
let realApoca =  Apocalipsys.obtenerInstanciaApocalipsys();
console.log(realApoca);



