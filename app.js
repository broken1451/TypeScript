// Tipos
var batman = "Bruce";
var superman = "Clark";
var existe = false;
// Tuplas
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var Volumen;
(function (Volumen) {
    Volumen[Volumen["fuerzaFlash"] = 5] = "fuerzaFlash";
    Volumen[Volumen["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    Volumen[Volumen["fuerzaBatman"] = 1] = "fuerzaBatman";
    Volumen[Volumen["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
})(Volumen || (Volumen = {}));
var fuerzaFlash = 5;
var fuerzaSuperman = 100;
var fuerzaBatman = 1;
var fuerzaAcuaman = 0;
fuerzaFlash = Volumen.medio;
fuerzaSuperman = Volumen.max;
fuerzaBatman = Volumen.medio;
fuerzaAcuaman = Volumen.min;
// Retorno de funciones
function actilet_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
var poder1 = 100;
var largoDelPoder2 = poder1.toString().length;
console.log(largoDelPoder);
