let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroImpar = 0;
for (let impar = 0; impar < numbers.length; impar += 1) {
  if (numbers[impar] % 2 === 1) {
    numeroImpar += 1;
    console.log(`A lista tem ${numeroImpar} número ímpar!`);
  } else if (numeroImpar !== numbers) {
    console.log("Número par");
  }
}
