
const asientos = [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"],
    
    ["J1", "J2", "J3", "J4"],
    ["K1", "K2", "K3", "K4"],
  ];
  

  function displaySeats(seatMatrix) {
    console.log("Asientos Disponibles:");
    for (const row of seatMatrix) {
      console.log(row.join(" "));
    }
  }
  

  function reserveSeat(row, col) {
    if (row < 0 || row >= seats.length || col < 0 || col >= seats[row].length) {
      console.log("Seleccion de asiento invalido, por favor seleccione un asiento valido");
      return;
    }
  
    if (seats[row][col] !== "X") {
      console.log(`Seat ${seats[row][col]} is reserved.`);
      seats[row][col] = "X"; 
      console.log("Este asiento ya está reservado. Por favor elige otro asiento.");
    }
  }
  

  displaySeats(seats);
  

  const selectedRow = 2;
  const selectedCol = 1; 
  
  
  reserveSeat(selectedRow, selectedCol);
  
  
  displaySeats(seats);
  