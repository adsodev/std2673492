// Creamos una matriz (10x4) para representar los asientos del avión
let avion = [];
for (let i = 0; i < 10; i++) {
    avion[i] = [];
    for (let j = 0; j < 4; j++) {
        avion[i][j] = "Disponible";
    }
}

// Función para mostrar el estado actual del avión
function mostrarAvion() {
    for (let i = 0; i < 10; i++) {
        console.log("Fila " + (i + 1) + ": " + avion[i].join(" | "));
    }
}

// Función para reservar un asiento
function reservarAsiento(fila, columna) {
    if (avion[fila - 1][columna - 1] === "Disponible") {
        avion[fila - 1][columna - 1] = "Ocupado";
        console.log("¡Asiento reservado con éxito!");
    } else {
        console.log("Lo siento, ese asiento ya está ocupado.");
    }
}

// Mostramos el estado inicial del avión
console.log("Estado inicial del avión:");
mostrarAvion();

// Ejemplo de reserva de asientos
reservarAsiento(1, 2);
reservarAsiento(5, 3);
reservarAsiento(1, 2); // Intentamos reservar el mismo asiento nuevamente

// Mostramos el estado actualizado del avión después de las reservas
console.log("\nEstado actual del avión después de las reservas:");
mostrarAvion();
