let arr1 = [5, 2, 3];
let arr2 = [2, 30, 5];
let arr3 = arr1.concat(arr2);

arr3.sort();
const eliminar = new Set(arr3);
let resultados = [eliminar];
console.log(eliminar);