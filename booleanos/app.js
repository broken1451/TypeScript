var superman = true;
var batman;
var acuaman = true; // no es recomendable
if (superman) {
    console.log('Estamos salvados');
}
else {
    console.log('Upss');
}
superman = convertirClark();
function convertirClark() {
    return false;
}
if (superman) {
    console.log('Estamos salvados');
}
else {
    console.log('Upss');
}
