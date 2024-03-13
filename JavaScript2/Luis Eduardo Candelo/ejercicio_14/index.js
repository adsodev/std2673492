// Definimos el número de filas del patrón
const filas = 5;

// Bucle para iterar a través de las filas del patrón
for (let i = 0; i < filas; i++) {
    // Creamos una cadena para almacenar la fila actual del patrón
    let patron = '';

    // Añadimos la letra correspondiente repetida i + 1 veces a la fila
    for (let j = 0; j <= i; j++) {
        patron += String.fromCharCode(65 + i); // 65 es el código ASCII de 'A'
    }

    // Mostramos la fila actual del patrón en la consola
    console.log(patron);
}
