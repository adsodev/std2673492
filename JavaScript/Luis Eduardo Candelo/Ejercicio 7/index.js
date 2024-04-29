let arreglo1 = [5, 2, 3];
let arreglo2 = [2, 30, 5];

let arregloCombinado = arreglo1.concat(arreglo2);
let arregloSinDuplicados = [];

arregloCombinado.forEach(function(elemento) {
    if (!arregloSinDuplicados.includes(elemento)) {
        arregloSinDuplicados.push(elemento);
    }
});

console.log("Arreglo combinado sin duplicados:", arregloSinDuplicados);
