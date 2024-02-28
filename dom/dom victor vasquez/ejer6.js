const btnAgregar = document.getElementById("agregar");
const tabla = document.getElementById("tabla");

btnAgregar.addEventListener("click", () => {
  // Obtenemos el número de filas existentes
  const numeroFilas = tabla.tBodies[0].rows.length;

  // Creamos una nueva fila
  const nuevaFila = tabla.insertRow(numeroFilas);

  // Creamos las celdas de la nueva fila
  const celdaNombre = nuevaFila.insertCell(0);
  const celdaEdad = nuevaFila.insertCell(1);

  // Agregamos contenido a las celdas
  celdaNombre.textContent = "Nuevo nombre";
  celdaEdad.textContent = "20";
});
