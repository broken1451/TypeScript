var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Características de ES6
//LET
var names = 'tony';
if (true) {
    var names_1 = 'Adrian';
    if (true) {
        var names_2 = 'Jose';
    }
}
// CONSTANTES son valores q no pueden ser mutados una vez definidos y tiene tambn scopes
var OPCIONES = 'Activo';
console.log(OPCIONES);
if (true) {
    //otro scope
    var OPCIONES_1 = 'Desactivado';
    console.log(OPCIONES_1);
}
for (var _i = 0, _a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; _i < _a.length; _i++) {
    var i = _a[_i];
    console.log(i);
}
var OPCION = {
    estado: true,
    audio: 10,
    ultima: 'main'
};
OPCION.estado = false;
OPCION.audio = 50;
// Templates literales
var name1 = 'Bruce';
var name2 = 'Ricardo';
function getNombres() {
    return name1 + " " + name2;
}
var menssage = "1. esta es una linea normal\n2. Hola " + name1 + "\n3. Robin es " + name2 + "\n4. los nombres son " + getNombres() + "\n5. " + (5 + 5) + "\n";
console.log(menssage);
// funciones de flecha 
var suma = function (a, b) {
    return a + b;
};
console.log(suma(5, 5));
var darOrdenHulk = function (orden) {
    return "Hulk " + orden;
};
console.log(darOrdenHulk('Smash'));
var capitalAmerica = {
    nombre: 'Hulk',
    darOrdenAhulk: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombre + ' Smash');
        }, 1000);
    }
};
capitalAmerica.darOrdenAhulk();
// Destructuración de Objetos
var avenger = {
    nick: ' Samuel Jackson',
    iron: 'Tony',
    vision: 'Paul'
};
// let {nick, iron:alias, vision, variablepordefecto ='valor'}= avenger;
var nick = avenger.nick, iron = avenger.iron, vision = avenger.vision;
console.log(nick, iron, vision);
// Destructuración de Arreglos
var avenger1 = ['Samuellll', 'Tonyyyyyy', 'Paulllllll'];
// let [, , aven3] = avenger1; los extraes
var aven1 = avenger1[0], aven2 = avenger1[1], aven3 = avenger1[2];
console.log(aven1, aven2, aven3);
// Nuevo ciclo - For Of
var thor = {
    nombre: 'Thor',
    arma: 'Hammer'
};
var ironMan = {
    nombre: 'Ironman',
    arma: 'Armamento'
};
var capi = {
    nombre: 'Capitan America',
    arma: 'Escudo'
};
var aveng = [thor, ironMan, capi];
for (var _b = 0, aveng_1 = aveng; _b < aveng_1.length; _b++) {
    var aven = aveng_1[_b];
    console.table(aven.nombre, aven.arma);
}
// Clases en ES6
var Avenger = /** @class */ (function () {
    function Avenger(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    return Avenger;
}());
var AvengerVolador = /** @class */ (function (_super) {
    __extends(AvengerVolador, _super);
    function AvengerVolador(nombre, poder) {
        var _this = _super.call(this, nombre, poder) || this;
        _this.vuela = true;
        return _this;
    }
    return AvengerVolador;
}(Avenger));
var hulk = new Avenger('Hulk', 'Super fuerza');
var falcon = new AvengerVolador('Falcon', 'Volar');
console.log(hulk);
console.log(falcon);
