
// Convierta este archivo de ES5 a ES6 - JavaScript 2015
// OJO: No es a TypeScript, solo JAVASCRIPT
// ==============================
//  Spiderman info
// ==============================
// Constantes?
const HEROE = "Spiderman";

// Declaracion de letiables?
let spiderman = "Peter Parker",
    venom = "Eddie Brock";

// Destructuracion de arreglos?
let versiones = ["Spider-Man 2099","Spider-Girl","Ultimate Spider-Man"];
let [spider, spider1, spider2] = versiones

// let spiderman2099 = versiones[0];
// let spidergirl = versiones[1];
// let ultimate = versiones[2];

// Destructuracion de objetos?
let villanos = {
  venom: "Eddie Brock",
  carnage: "Cletus Kasady",
  sandman: "William Baker"
};

let {venom, carnage, sandman} = villanos

// let venom = villanos.venom;
// let carnage = villanos.carnage;
// let sandman = villanos.sandman;

// Ciclo for Of?
// for(let i=0; i<= versiones.length - 1; i++){
//   let spider = versiones[i];
//   console.log(spider);
// }

for (const spider of versiones) {
  console.log(spider);
}
