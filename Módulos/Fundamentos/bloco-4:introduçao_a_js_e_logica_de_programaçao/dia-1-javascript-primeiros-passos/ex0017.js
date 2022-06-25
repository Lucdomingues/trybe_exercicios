//Programa calculadora de lucro total acrescentando impostos!
const valorCusto = 100;
const valorVenda = 300;
const porcentagem = 30;
const totalDeVendas = 1000;

if (valorCusto >= 0) {
  convPorcentagem = porcentagem / 100;
  porcentoDe = convPorcentagem * valorCusto;
  custoTotal = porcentoDe + valorCusto;
  lucroPorProduto = valorVenda - custoTotal;
  lucroTotal = totalDeVendas * lucroPorProduto;
  console.log(
    `O seu lucro total é de: R$${lucroTotal},00 e o seu custo total com imposto de ${porcentagem}% é de: R$${custoTotal},00!`
  );
} else if (valorCusto <= 0 && valorVenda <= 0 && totalDeVendas <= 0) {
  console.log(
    "Desculpe, mais infelizmente ouve um erro, por conta da numeração escolhida!"
  );
}
