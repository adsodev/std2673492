// Definimos el número de filas del patrón
const filas = 5;

// Bucle externo para iterar a través de las filas
for (let i = 1; i <= filas; i++) {
    // Variable para almacenar la fila actual del patrón
    let patron = '';

    // Bucle interno para agregar los asteriscos a la fila actual
    for (let j = 1; j <= i; j++) {
        patron += '* ';
    }

    // Mostrar la fila actual del patrón en la consola
    console.log(patron);
}
