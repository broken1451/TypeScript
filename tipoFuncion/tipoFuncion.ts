
function sumar(a: number, b:number): number {
    return a + b;
}


function saludar(nombre: string): string {
    return `I am ${nombre}`
}


function salvarAlMundo(): void {
   console.log('Mundo salvado');
}


let miFuncion: (a:number,b:number)=>number;
let miFuncion1: (nombre:string)=>string;
let miFuncion2: ()=>void;


// miFuncion = 10;

miFuncion = sumar;
console.log(miFuncion(5,5))

miFuncion1=saludar;
console.log(miFuncion1('Tony'))

miFuncion2 = salvarAlMundo;
miFuncion2()


