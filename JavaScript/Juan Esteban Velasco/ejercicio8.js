
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

function displaySeatingChart() {
  console.log("Mapa de asientos:");
  for (let row = 0; row < seatingChart.length; row++) {
    console.log(seatingChart[row].join(" | "));
  }
}

function reserveSeat(row, col) {
  
  if (seatingChart[row][col] === 1) {
    console.log("El asiento ya está reservado.");
    return;
  }
 
  seatingChart[row][col] = 1;
  console.log("Asiento reservado.");
}

displaySeatingChart();
reserveSeat(3, 4);
displaySeatingChart();
reserveSeat(3, 4);