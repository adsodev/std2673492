// Definimos el número total de filas del patrón
const filas = 7;
// Definimos el número de filas de la parte superior (triángulo)
const filasTriangulo = Math.ceil(filas / 2);

// Bucle para iterar a través de las filas del patrón
for (let i = 1; i <= filas; i++) {
    let patron = '';

    // Verificamos si estamos en la parte superior (triángulo) o inferior (inverso del triángulo)
    if (i <= filasTriangulo) {
        patron = '*'.repeat(i);
    } else {
        patron = '*'.repeat(filas - i + 1);
    }

    console.log(patron);
}
