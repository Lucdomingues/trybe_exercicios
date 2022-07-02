let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arr = [];
let multiplicador = [];
for (i = 0; i < numbers.length; i += 1) {
  multiplicador = numbers[i] * multiplicador;
  arr.push(multiplicador);
}
console.log(multiplicador);
