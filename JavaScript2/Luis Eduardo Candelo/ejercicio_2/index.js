function encontrarPalabraMasLarga(cadena) {
    // Dividir la cadena en palabras individuales
    let palabras = cadena.split(' ');

    // Inicializar una variable para almacenar la palabra más larga
    let palabraMasLarga = palabras[0];

    // Iterar sobre todas las palabras y encontrar la más larga
    for (let i = 1; i < palabras.length; i++) {
        console.log(palabras[i]);
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }

    return palabraMasLarga;
}

// Ejemplo de uso:
let texto = prompt("Introduce un texto");
let palabraMasLarga = encontrarPalabraMasLarga(texto);