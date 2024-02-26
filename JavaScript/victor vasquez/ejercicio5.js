const numbers = [7, 8, 9, 1, 2, 8, 9];

const unique = numbers.filter((n, index) => numbers.indexOf(n) === index);

console.log(unique);