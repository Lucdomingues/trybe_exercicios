let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = [];

for (let index = 0; index < numbers.length; index += 1) {
  soma.push(numbers[index] * parseInt(soma));
}
console.log(soma);
