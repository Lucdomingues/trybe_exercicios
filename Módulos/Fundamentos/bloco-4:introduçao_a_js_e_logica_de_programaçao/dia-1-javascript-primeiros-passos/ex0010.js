//Programa que retorna o maior valor dentro de três;
const n1 = 300;
const n2 = 100;
const n3 = 100;

if (n1 > n2 && n1 > n3) {
  console.log(`O maior valor dentro desses três valores é: ${n1}`);
} else if (n2 > n1 && n2 > n3) {
  console.log(`O maior valor dentro desses três valores é: ${n2}`);
} else if (n3 > n1 && n3 > n2) {
  console.log(`O maior valor dentro desses três valores é: ${n3}`);
} else {
  console.log("Esses valores são iguais!");
}
