"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery"); // este ess el mismo nombre q esta en el map en el index html se debe llamar igual
// import 'sweetalert2'; // este ess el mismo nombre q esta en el map en el index html se debe llamar igual
var sweetalert2_1 = require("sweetalert2");
console.log("Hola mundo");
// jquery.d.ts son archivos de definicion
$(document).ready(function () {
    $('h1').text('HOla mmgvo desde ts');
    $('p').text('HOla mmgvo desde ts en parrafo');
    console.log('Pagina lista jquery desde ts');
    $('h1').css('background-color', 'red');
});
$('#botAlerta').on('click', function () {
    // alert('Hola desde jquery en ts aplicando eventos');
    sweetalert2_1.default.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
    });
});
// $(document).ready(function() {
//     console.log('Pagina lista jquery1 desde ts');
// })
// cargar archivos de definicion por npm
// npm i --save-dev @types/libreria
// npm i --save-dev @types/jquery
