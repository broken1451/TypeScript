//Aserciones, permite poder usar cualquier variable de otro tipo y decirle a ts, hey confia en mi se lo q hago

let cualquierValor: any = 'cualquier cosa';
let numeros: any = 1264548;


let largoDeString: number = (<string>cualquierValor).length;
let largoDeNUm: number = (<number>numeros).toString().length;

console.log(largoDeString)
console.log(largoDeNUm)





