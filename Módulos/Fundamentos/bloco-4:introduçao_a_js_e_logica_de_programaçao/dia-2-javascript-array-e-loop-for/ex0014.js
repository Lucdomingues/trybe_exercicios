//ordem crescente;
function compararNumeros(a, b) {
  return a - b;
}
let crescente = [];
for (let inicial = 1; inicial <= 25; inicial += 1) {
  crescente.push(inicial / 2);
}
console.log(crescente.sort(compararNumeros));
//ordem decrescente;
function compararNumeros(a, b) {
  return b - a;
}
let decrescente = [];
for (let inicial = 1; inicial <= 25; inicial += 1) {
  decrescente.push(inicial / 2);
}
console.log(decrescente.sort(compararNumeros));
