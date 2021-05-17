function somaNumeros(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}

console.log(somaNumeros(1, 2, 5, 8, 9));

//arrow function
const somaNumerosArrow = (...numeros) => {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total
};

console.log(somaNumerosArrow(1,10))
