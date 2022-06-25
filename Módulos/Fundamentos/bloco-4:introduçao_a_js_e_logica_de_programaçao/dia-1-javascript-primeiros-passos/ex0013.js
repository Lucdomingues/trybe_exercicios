let peca = "RAinha";
const lowerCase = peca.toLowerCase();

switch (lowerCase) {
  case "rei":
    console.log("diagonais e retos, apenas uma casa");
    break;
  case "rainha":
    console.log("tanto nas diagonais quanto nos sentido reto");
    break;
  case "torre":
    console.log("sentido reto");
    break;
  case "bispo":
    console.log("diagonais");
    break;
  case "cavalo":
    console.log("movimento no formato de um “L”");
    break;
  case "peão":
    console.log("vertical, com limite de apenas uma casa por movimento");
    break;
}
