//Programa conversor de notas em letras;
let nota = 90;

if (nota >= 90 && nota <= 100) {
  console.log((nota = "A"));
} else if (nota >= 80 && nota <= 90) {
  console.log((nota = "B"));
} else if (nota >= 70 && nota <= 80) {
  console.log((nota = "C"));
} else if (nota >= 60 && nota <= 70) {
  console.log((nota = "D"));
} else if (nota >= 50 && nota <= 60) {
  console.log((nota = "E"));
} else if (nota < 50 && nota >= 0) {
  console.log("F");
} else if (nota < 0 || nota > 100) {
  console.log("ERROR");
}
