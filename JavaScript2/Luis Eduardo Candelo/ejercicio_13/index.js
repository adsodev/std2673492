// Definimos el número de filas del patrón
const filas = 5;

// Bucle para iterar a través de las filas del patrón
for (let i = 1; i <= filas; i++) {
    // Creamos una cadena para almacenar la fila actual del patrón
    let patron = '';

    // Añadimos el número actual repetido i veces a la fila
    for (let j = 0; j < i; j++) {
        patron += i;
    }

    // Mostramos la fila actual del patrón en la consola
    console.log(patron);
}
