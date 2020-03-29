
function nombrecompleto(nombre:string, ...losDemasParametros: string[]): string {
    return `${nombre} ${losDemasParametros.join(',')}`// unirlos con join
}



let superman: string = nombrecompleto('Clark', 'Joseph', 'Kent');
let ironman: string = nombrecompleto('Anthony', 'Edward', 'Tony', 'Stark');

console.log(superman)
console.log(ironman)





