const avion = document.getElementById("avion");
const mensaje = document.getElementById("mensaje");

const asientos = Array(10).fill(null).map(() => Array(4).fill(false));

// Función para crear un asiento
function crearAsiento(fila, columna) {
  const asiento = document.createElement("div");
  asiento.classList.add("asiento");
  asiento.textContent = `${fila + 1}-${columna + 1}`;

  asiento.addEventListener("click", () => {
    if (asientos[fila][columna]) {
      mensaje.textContent = "Asiento ya ocupado";
      return;
    }

    asientos[fila][columna] = true;
    asiento.classList.add("ocupado");
    mensaje.textContent = "Asiento reservado";
  });

  return asiento;
}

// Generamos los asientos
for (let fila = 0; fila < 10; fila++) {
  for (let columna = 0; columna < 4; columna++) {
    avion.appendChild(crearAsiento(fila, columna));
  }
}
