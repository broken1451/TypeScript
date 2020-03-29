function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I am " + nombre;
}
function salvarAlMundo() {
    console.log('Mundo salvado');
}
var miFuncion;
var miFuncion1;
var miFuncion2;
// miFuncion = 10;
miFuncion = sumar;
console.log(miFuncion(5, 5));
miFuncion1 = saludar;
console.log(miFuncion1('Tony'));
miFuncion2 = salvarAlMundo;
miFuncion2();
