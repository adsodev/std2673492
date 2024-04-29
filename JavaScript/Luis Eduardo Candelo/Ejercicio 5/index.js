let arrayConDuplicados = [1, 3, 3, 4, 5, 4, 9, 8, 9, 3, 6];
let arraySinDuplicados = [];

for (let i = 0; i < arrayConDuplicados.length; i++) {
    if (arraySinDuplicados.indexOf(arrayConDuplicados[i]) === -1) {
        arraySinDuplicados.push(arrayConDuplicados[i]);
    }
}

console.log("Array original:", arrayConDuplicados);
console.log("Array sin duplicados:", arraySinDuplicados);
