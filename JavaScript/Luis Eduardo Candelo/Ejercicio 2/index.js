// 2 Ejercicio

// Creamos una variable y en ella vamos a almacenar una lista.

let num2 = [34, 43, 65, 3, 5, 86];
let leng2 = num2.length;

let cont = 0;
for (let i = 0; i < leng2; i++) { 
    cont = num2[i] + cont;
}

console.log("La suma es: ",cont);