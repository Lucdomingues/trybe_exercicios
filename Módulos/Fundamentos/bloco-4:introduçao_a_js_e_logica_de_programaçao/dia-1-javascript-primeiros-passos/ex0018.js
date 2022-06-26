const salarioBruto = 3000;
//INSS;
if (salarioBruto <= 1556.94) {
  salarioInss = salarioBruto * 0.08;
  salarioSemInss = salarioBruto - salarioInss;
} else if (salarioBruto >= 1556.94 && salarioBruto <= 2594.92) {
  salarioInss = salarioBruto * 0.09;
  salarioSemInss = salarioBruto - salarioInss;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioInss = salarioBruto * 0.11;
  salarioSemInss = salarioBruto - salarioInss;
} else if (salarioBruto > 5189.82) {
  salarioInss = 570.88;
  salarioSemInss = salarioBruto - salarioInss;
}
//IR;
if (salarioSemInss <= 1903.98) {
  salarioLiquido = salarioSemInss;
} else if (salarioSemInss >= 1903.99 && salarioSemInss <= 2826.65) {
  salarioIr = salarioSemInss * 0.075;
  salarioLiquido = salarioSemInss - salarioIr;
} else if (salarioSemInss >= 2826.66 && salarioSemInss <= 3751.05) {
  salarioIr = salarioSemInss * 0.15;
  salarioLiquido = salarioSemInss - salarioIr;
} else if (salarioSemInss >= 3751.06 && salarioSemInss <= 4664.68) {
  salarioIr = salarioSemInss * 0.225;
  salarioLiquido = salarioSemInss - salarioIr;
} else if (salarioSemInss > 4664.68) {
  salarioIr = salarioSemInss * 0.275;
  salarioLiquido = salarioSemInss - salarioIr;
}
console.log(
  `O seu salário líquido sem os impostos INSS e IR é: ${salarioLiquido}!`
);
