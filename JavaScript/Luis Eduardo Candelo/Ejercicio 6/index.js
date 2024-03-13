let arreglo1 = [1, 0, 2, 3, 4];
let arreglo2 = [4, 3, 6, 7, 8, 13];
let sumaIndices = [];

let longitud = Math.min(arreglo1.length, arreglo2.length);

for (let i = 0; i < longitud; i++) {
    let suma = arreglo1[i] + arreglo2[i];
    sumaIndices.push(suma);
}

console.log("Suma de cada valor del índice individual en los arreglos:", sumaIndices);
