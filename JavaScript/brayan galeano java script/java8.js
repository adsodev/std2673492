// Inicializa el mapa de asientos como una matriz 2D
const seatingChart = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  
  // Función para mostrar el mapa de asientos
  function displaySeatingChart() {
    console.log("Mapa de asientos:");
    for (let row = 0; row < seatingChart.length; row++) {
      console.log(seatingChart[row].join(" | "));
    }
  }
  
  // Función para reservar un asiento
  function reserveSeat(row, col) {
    // Si el asiento ya está reservado, muestra un mensaje
    if (seatingChart[row][col] === 1) {
      console.log("El asiento ya está reservado.");
      return;
    }
    // Reserva el asiento cambiando el valor en el mapa de asientos a 1
    seatingChart[row][col] = 1;
    console.log("Asiento reservado.");
  }
  
  // Ejemplo de uso
  displaySeatingChart();
  reserveSeat(3, 4);
  displaySeatingChart();
  reserveSeat(3, 4);