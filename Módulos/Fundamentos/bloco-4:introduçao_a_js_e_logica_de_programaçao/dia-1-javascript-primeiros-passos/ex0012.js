//Programa de verificação de triangulo;
const a1 = 60;
const a2 = 60;
const a3 = 60;
const verificacao = a1 + a2 + a3;

if (verificacao == 180) {
  console.log(true);
} else if (verificacao != 180) {
  console.log(false);
} else {
  console.log("ERROR");
}
