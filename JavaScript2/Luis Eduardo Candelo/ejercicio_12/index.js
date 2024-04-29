// Definimos el número de filas del patrón
const filas = 9;
const mitadFilas = Math.ceil(filas / 2);

// Bucle para iterar a través de las filas del patrón
for (let i = 1; i <= filas; i++) {
    // Variable para almacenar la fila actual del patrón
    let patron = '';

    // Determinamos el número de asteriscos en la fila actual
    let asteriscos = i <= mitadFilas ? i : filas - i + 1;

    // Bucle interno para agregar los asteriscos a la fila actual
    for (let j = 1; j <= asteriscos; j++) {
        patron += '*';
    }

    // Mostrar la fila actual del patrón en la consola
    console.log(patron);
}
