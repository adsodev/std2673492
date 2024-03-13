function contarVocales(cadena) {
    // Convertir la cadena a minúsculas para hacer la comparación más sencilla
    cadena = cadena.toLowerCase();

    // Definir un string que contenga todas las vocales
    const vocales = 'aeiouáéíóú';

    let contadorVocales = 0;

    // Iterar sobre cada caracter de la cadena y verificar si es una vocal
    for (let caracter of cadena) {
        if (vocales.includes(caracter)) {
            contadorVocales++;
        }
    }

    return contadorVocales;
}

// Ejemplo de uso:
let texto = prompt("Introduce algun texto", "Arroz con leche");
console.log(texto)
let numeroVocales = contarVocales(texto);
console.log("El número de vocales en la cadena es:", numeroVocales);